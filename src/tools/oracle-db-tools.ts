import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { OracleService } from "../services/oracle-service.js";
import {
  isReadOnly, classifySql, formatDuration, truncateIfNeeded,
  formatRowsAsMarkdownTable,
} from "../utils/helpers.js";

export function registerDbTools(server: McpServer, oracle: OracleService): void {

  // ─── Health Check ──────────────────────────────────────────────────────────

  server.tool(
    "oracle_health_check",
    "Check Oracle DB and APEX connectivity, version, pool status.",
    {},
    async () => {
      const t0 = Date.now();
      const h = await oracle.healthCheck();
      const elapsed = formatDuration(Date.now() - t0);

      const vi = h.versionInfo;

      let text = `## Oracle Connection Status\n\n`;
      text += `**Connected:** ${h.oracle.connected ? "Yes" : "No"}\n`;
      text += `**Version:** ${h.oracle.version ?? "N/A"}\n`;
      if (vi?.db) text += `**DB Version:** ${vi.db}\n`;
      text += `**User:** ${h.oracle.user ?? "N/A"} | **Schema:** ${h.oracle.schema ?? "N/A"}\n`;
      text += `**Pool:** ${h.oracle.poolOpen} open / ${h.oracle.poolInUse} in use\n\n`;
      text += `## APEX Status\n\n`;
      text += `**Available:** ${h.apex.available ? "Yes" : "No"}\n`;
      text += `**APEX Version:** ${h.apex.version ?? "N/A"}`;
      if (vi?.apex) text += ` (${vi.apex})`;
      text += `\n`;
      text += `**Workspace:** ${h.apex.workspace ?? "N/A"}\n\n`;

      if (vi?.apex) {
        text += `## Version Capabilities\n\n`;
        const av = parseFloat(vi.apex);
        text += `**PL/SQL APIs available:**\n`;
        text += `- Core: APEX_COLLECTION, APEX_JSON, APEX_UTIL, APEX_ESCAPE, APEX_MAIL, APEX_DEBUG, APEX_STRING\n`;
        if (av >= 20.1) text += `- APEX_EXEC, APEX_DATA_PARSER, APEX_DATA_EXPORT, APEX_JWT, APEX_SESSION\n`;
        if (av >= 21.1) text += `- APEX_MARKDOWN, APEX_DATA_LOADING\n`;
        if (av >= 22.1) text += `- APEX_APPROVAL, APEX_DG_DATA_GEN, APEX_SESSION_STATE\n`;
        if (av >= 22.2) text += `- APEX_SEARCH (22.2+)\n`;
        if (av >= 23.1) text += `- APEX_BACKGROUND_PROCESS, APEX_BARCODE, APEX_HUMAN_TASK, APEX_PWA\n`;
        if (av >= 24.1) text += `- APEX_AI, APEX_HTTP, APEX_EXTENSION, APEX_APPLICATION_ADMIN\n`;
        if (av >= 24.2) text += `- APEX_SHARED_COMPONENT\n`;
        text += `\n**JS APIs available:**\n`;
        text += `- Core: apex.item, apex.region, apex.server, apex.message, apex.page, apex.theme, apex.util\n`;
        if (av >= 21.1) text += `- apex.date\n`;
        if (av >= 23.1) text += `- apex.pwa\n`;
        text += `\n**Region types:**\n`;
        text += `- Core: Static Content, Classic Report, Interactive Report, Interactive Grid, Form\n`;
        if (av >= 19.2) text += `- Faceted Search\n`;
        if (av >= 20.2) text += `- Cards\n`;
        if (av >= 21.1) text += `- Map\n`;
        if (av >= 21.2) text += `- Smart Filters\n`;
        if (av >= 22.2) text += `- Dynamic Content\n`;
        if (av >= 23.1) text += `- Template Components, Workflow, Approvals\n`;
        if (av >= 24.1) text += `- AI Assistant\n`;
      }

      text += `\n_Checked in ${elapsed}_`;

      return { content: [{ type: "text" as const, text }] };
    }
  );

  // ─── Query (SELECT) ────────────────────────────────────────────────────────

  server.tool(
    "oracle_query",
    `Execute a read-only SQL SELECT query against Oracle Database.
Returns rows as a markdown table or JSON. Supports bind variables.
Use for: SELECT, WITH queries. Max 10,000 rows.`,
    {
      sql: z.string().min(1).describe("SQL SELECT query"),
      binds: z.record(z.unknown()).optional().default({}).describe("Named bind variables"),
      max_rows: z.number().int().min(1).max(10000).default(500).describe("Max rows to return"),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      if (!isReadOnly(params.sql)) {
        return {
          content: [{ type: "text" as const, text: "Error: oracle_query only accepts SELECT/WITH statements. Use oracle_execute for DML/DDL/PL/SQL." }],
          isError: true,
        };
      }
      const t0 = Date.now();
      try {
        const result = await oracle.query(params.sql, params.binds ?? {}, params.max_rows);
        const elapsed = formatDuration(Date.now() - t0);

        if (params.format === "json") {
          const output = { ...result, executionTime: elapsed };
          return { content: [{ type: "text" as const, text: truncateIfNeeded(JSON.stringify(output, null, 2)) }] };
        }

        let text = `**${result.rowCount} row(s)** returned`;
        if (result.hasMore) text += ` _(more available — increase max_rows or add WHERE clause)_`;
        text += ` | ${elapsed}\n\n`;
        text += formatRowsAsMarkdownTable(result.rows);
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Execute (DML / DDL / PL/SQL) ──────────────────────────────────────────

  server.tool(
    "oracle_execute",
    `Execute DML (INSERT/UPDATE/DELETE/MERGE), DDL (CREATE/ALTER/DROP/TRUNCATE), or PL/SQL blocks.
Returns rows affected and execution time. Supports auto-commit toggle.`,
    {
      sql: z.string().min(1).describe("SQL or PL/SQL to execute"),
      binds: z.record(z.unknown()).optional().default({}).describe("Named bind variables"),
      auto_commit: z.boolean().default(true).describe("Auto-commit after execution"),
    },
    async (params) => {
      if (isReadOnly(params.sql)) {
        return {
          content: [{ type: "text" as const, text: "Error: Use oracle_query for SELECT statements." }],
          isError: true,
        };
      }
      const t0 = Date.now();
      try {
        const result = await oracle.execute(params.sql, params.binds ?? {}, params.auto_commit);
        const elapsed = formatDuration(Date.now() - t0);
        const cmdType = classifySql(params.sql);
        let text = `**${cmdType}** executed — **${result.rowsAffected}** row(s) affected | ${elapsed}`;
        if (params.auto_commit) text += " | Committed";
        if (result.lastRowid) text += `\nLast ROWID: ${result.lastRowid}`;
        if (result.outBinds) text += `\nOut binds: ${JSON.stringify(result.outBinds)}`;
        return { content: [{ type: "text" as const, text }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Transaction ───────────────────────────────────────────────────────────

  server.tool(
    "oracle_transaction",
    `Execute multiple SQL statements in a single transaction (all-or-nothing).
Automatically rolls back on error if rollback_on_error is true.`,
    {
      statements: z.array(z.string().min(1)).min(1).max(100).describe("SQL statements in order"),
      rollback_on_error: z.boolean().default(true).describe("Rollback all on error"),
    },
    async (params) => {
      const t0 = Date.now();
      try {
        const result = await oracle.transaction(params.statements, params.rollback_on_error);
        const elapsed = formatDuration(Date.now() - t0);

        let text = `## Transaction Result\n\n`;
        text += `**Committed:** ${result.committed ? "Yes" : "No (rolled back)"}\n`;
        text += `**Total rows affected:** ${result.totalRowsAffected}\n`;
        text += `**Statements:** ${result.steps.length} | ${elapsed}\n\n`;

        for (const step of result.steps) {
          const icon = step.success ? "OK" : "FAIL";
          const sqlPreview = step.sql.length > 80 ? step.sql.slice(0, 77) + "..." : step.sql;
          text += `[${icon}] **Step ${step.index + 1}:** \`${sqlPreview}\``;
          if (step.success) text += ` — ${step.rowsAffected ?? 0} rows`;
          if (step.error) text += `\n   Error: ${step.error}`;
          text += "\n";
        }

        return { content: [{ type: "text" as const, text }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Transaction error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Explain Plan ──────────────────────────────────────────────────────────

  server.tool(
    "oracle_explain_plan",
    `Generate execution plan for a SQL statement using EXPLAIN PLAN.
Returns the plan table output for query optimization analysis.`,
    {
      sql: z.string().min(1).describe("SQL statement to explain"),
      binds: z.record(z.unknown()).optional().default({}),
    },
    async (params) => {
      const t0 = Date.now();
      try {
        const stmtId = `MCP_${Date.now()}`;
        await oracle.execute(
          `EXPLAIN PLAN SET STATEMENT_ID = '${stmtId}' FOR ${params.sql}`,
          params.binds ?? {},
          true
        );
        const planRows = await oracle.queryRows<{ PLAN_LINE: string }>(
          `SELECT LPAD(' ', 2 * (LEVEL - 1)) || operation || 
           CASE WHEN options IS NOT NULL THEN ' (' || options || ')' END ||
           CASE WHEN object_name IS NOT NULL THEN ' - ' || object_name END ||
           CASE WHEN cost IS NOT NULL THEN ' [Cost: ' || cost || ']' END ||
           CASE WHEN cardinality IS NOT NULL THEN ' [Rows: ' || cardinality || ']' END AS PLAN_LINE
           FROM plan_table
           WHERE statement_id = :sid
           START WITH parent_id IS NULL AND statement_id = :sid2
           CONNECT BY PRIOR id = parent_id AND statement_id = :sid3
           ORDER SIBLINGS BY position`,
          { sid: stmtId, sid2: stmtId, sid3: stmtId }
        );
        // Clean up
        await oracle.execute(`DELETE FROM plan_table WHERE statement_id = '${stmtId}'`, {}, true);

        const elapsed = formatDuration(Date.now() - t0);
        let text = `## Execution Plan\n\n\`\`\`\n`;
        for (const row of planRows) {
          text += (row.PLAN_LINE ?? "") + "\n";
        }
        text += `\`\`\`\n\n_Generated in ${elapsed}_`;
        return { content: [{ type: "text" as const, text }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Compile Object ────────────────────────────────────────────────────────

  server.tool(
    "oracle_compile_object",
    `Compile (or recompile) a PL/SQL object: PACKAGE, PACKAGE BODY, PROCEDURE, FUNCTION, TRIGGER, TYPE, TYPE BODY, VIEW.
Returns compilation status and any errors.`,
    {
      object_name: z.string().min(1).max(128),
      object_type: z.enum(["PACKAGE", "PACKAGE BODY", "PROCEDURE", "FUNCTION", "TRIGGER", "TYPE", "TYPE BODY", "VIEW"]),
      owner: z.string().max(128).optional(),
    },
    async (params) => {
      try {
        const qual = params.owner ? `"${params.owner}"."${params.object_name}"` : `"${params.object_name}"`;
        const compileType = params.object_type === "PACKAGE BODY" ? "PACKAGE BODY"
          : params.object_type === "TYPE BODY" ? "TYPE BODY"
          : params.object_type;

        await oracle.execute(`ALTER ${compileType} ${qual} COMPILE`, {}, true);

        // Check for errors
        const errRows = await oracle.queryRows<{ LINE: number; POSITION: number; TEXT: string }>(
          `SELECT LINE, POSITION, TEXT FROM ALL_ERRORS
           WHERE NAME = :name AND TYPE = :type
           ${params.owner ? "AND OWNER = :owner" : "AND OWNER = USER"}
           ORDER BY SEQUENCE`,
          {
            name: params.object_name.toUpperCase(),
            type: params.object_type.toUpperCase(),
            ...(params.owner ? { owner: params.owner.toUpperCase() } : {}),
          }
        );

        if (errRows.length === 0) {
          return { content: [{ type: "text" as const, text: `${params.object_type} ${params.object_name} compiled successfully.` }] };
        }

        let text = `${params.object_type} ${params.object_name} compiled with **${errRows.length} error(s)**:\n\n`;
        for (const e of errRows) {
          text += `- **Line ${e.LINE}, Col ${e.POSITION}:** ${e.TEXT.trim()}\n`;
        }
        return { content: [{ type: "text" as const, text }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Compile error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Show Errors ───────────────────────────────────────────────────────────

  server.tool(
    "oracle_show_errors",
    "Show compilation errors for a PL/SQL object (like SQL*Plus SHOW ERRORS).",
    {
      object_name: z.string().min(1).max(128),
      object_type: z.enum(["PACKAGE", "PACKAGE BODY", "PROCEDURE", "FUNCTION", "TRIGGER", "TYPE", "TYPE BODY", "VIEW"]),
      owner: z.string().max(128).optional(),
    },
    async (params) => {
      try {
        const rows = await oracle.queryRows<{ LINE: number; POSITION: number; TEXT: string; ATTRIBUTE: string }>(
          `SELECT LINE, POSITION, TEXT, ATTRIBUTE FROM ALL_ERRORS
           WHERE NAME = :name AND TYPE = :type
           ${params.owner ? "AND OWNER = :owner" : "AND OWNER = USER"}
           ORDER BY SEQUENCE`,
          {
            name: params.object_name.toUpperCase(),
            type: params.object_type.toUpperCase(),
            ...(params.owner ? { owner: params.owner.toUpperCase() } : {}),
          }
        );

        if (rows.length === 0) {
          return { content: [{ type: "text" as const, text: `No errors found for ${params.object_type} ${params.object_name}.` }] };
        }

        let text = `## Errors for ${params.object_type} ${params.object_name}\n\n`;
        for (const r of rows) {
          text += `**${r.ATTRIBUTE} at Line ${r.LINE}, Col ${r.POSITION}:** ${r.TEXT.trim()}\n`;
        }
        return { content: [{ type: "text" as const, text }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Table Data Preview ────────────────────────────────────────────────────

  server.tool(
    "oracle_table_data_preview",
    `Preview sample data from a table. Read-only convenience tool.
Optionally filter with WHERE clause and ORDER BY.`,
    {
      table_name: z.string().min(1).max(128),
      owner: z.string().max(128).optional(),
      max_rows: z.number().int().min(1).max(100).default(20),
      where_clause: z.string().optional(),
      order_by: z.string().optional(),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      try {
        const qual = params.owner ? `"${params.owner}"."${params.table_name}"` : `"${params.table_name}"`;
        let sql = `SELECT * FROM ${qual}`;
        if (params.where_clause) sql += ` WHERE ${params.where_clause}`;
        if (params.order_by) sql += ` ORDER BY ${params.order_by}`;

        const result = await oracle.query(sql, {}, params.max_rows);
        const elapsed = formatDuration(Date.now() - t0);

        if (params.format === "json") {
          return { content: [{ type: "text" as const, text: truncateIfNeeded(JSON.stringify(result, null, 2)) }] };
        }

        let text = `## ${params.table_name} — ${result.rowCount} row(s) | ${elapsed}\n\n`;
        text += formatRowsAsMarkdownTable(result.rows);
        if (result.hasMore) text += `\n\n_More rows available._`;
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Connection Info ───────────────────────────────────────────────────────

  server.tool(
    "oracle_connection_info",
    "Show current Oracle DB connection configuration (password masked).",
    {},
    async () => {
      const cfg = oracle.getConfig();
      const text = `## Connection Configuration\n\n` +
        `**Host:** ${cfg.host}:${cfg.port}\n` +
        `**Service:** ${cfg.serviceName}\n` +
        `**User:** ${cfg.username}\n` +
        `**Pool:** min=${cfg.poolMin} max=${cfg.poolMax} timeout=${cfg.poolTimeout}s\n` +
        `**Fetch Size:** ${cfg.fetchSize}\n` +
        `**Thick Mode:** ${cfg.useThickMode}\n`;
      return { content: [{ type: "text" as const, text }] };
    }
  );
}
