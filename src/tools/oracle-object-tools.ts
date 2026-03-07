import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { OracleService } from "../services/oracle-service.js";
import {
  formatDuration, truncateIfNeeded, formatRowsAsMarkdownTable,
} from "../utils/helpers.js";

export function registerObjectTools(server: McpServer, oracle: OracleService): void {

  // ─── List Tables ───────────────────────────────────────────────────────────

  server.tool(
    "oracle_list_tables",
    `List tables in a schema with row counts, comments, and last analyzed date.
Supports LIKE filtering on table name.`,
    {
      owner: z.string().max(128).optional().describe("Schema owner (default: current user)"),
      filter: z.string().optional().describe("LIKE pattern, e.g. '%EMP%'"),
      limit: z.number().int().min(1).max(5000).default(100),
      offset: z.number().int().min(0).default(0),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      try {
        const ownerClause = params.owner ? "t.OWNER = :owner" : "t.OWNER = USER";
        const filterClause = params.filter ? "AND t.TABLE_NAME LIKE :filter" : "";
        const binds: Record<string, unknown> = {};
        if (params.owner) binds.owner = params.owner.toUpperCase();
        if (params.filter) binds.filter = params.filter.toUpperCase();

        const countRows = await oracle.queryRows<{ CNT: number }>(
          `SELECT COUNT(*) AS CNT FROM ALL_TABLES t WHERE ${ownerClause} ${filterClause}`, binds
        );
        const total = countRows[0]?.CNT ?? 0;

        const rows = await oracle.queryRows<Record<string, unknown>>(
          `SELECT t.OWNER, t.TABLE_NAME, t.NUM_ROWS, t.TABLESPACE_NAME,
                  TO_CHAR(t.LAST_ANALYZED,'YYYY-MM-DD HH24:MI') AS LAST_ANALYZED,
                  c.COMMENTS
           FROM ALL_TABLES t
           LEFT JOIN ALL_TAB_COMMENTS c ON c.OWNER = t.OWNER AND c.TABLE_NAME = t.TABLE_NAME
           WHERE ${ownerClause} ${filterClause}
           ORDER BY t.TABLE_NAME
           OFFSET :off ROWS FETCH NEXT :lim ROWS ONLY`,
          { ...binds, off: params.offset, lim: params.limit }
        );

        const elapsed = formatDuration(Date.now() - t0);
        const hasMore = params.offset + rows.length < total;

        if (params.format === "json") {
          return { content: [{ type: "text" as const, text: JSON.stringify({ total, count: rows.length, offset: params.offset, hasMore, tables: rows }, null, 2) }] };
        }

        let text = `## Tables (${rows.length} of ${total}) | ${elapsed}\n\n`;
        text += formatRowsAsMarkdownTable(rows);
        if (hasMore) text += `\n\n_More available — use offset=${params.offset + params.limit}_`;
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Describe Table ────────────────────────────────────────────────────────

  server.tool(
    "oracle_describe_table",
    `Full description of a table: columns (type, nullable, default, comments), indexes, constraints, and optionally triggers.`,
    {
      table_name: z.string().min(1).max(128),
      owner: z.string().max(128).optional(),
      include_indexes: z.boolean().default(true),
      include_constraints: z.boolean().default(true),
      include_triggers: z.boolean().default(false),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      const tn = params.table_name.toUpperCase();
      const ownerBind = params.owner?.toUpperCase();
      const ownerFilter = ownerBind ? "AND c.OWNER = :owner" : "AND c.OWNER = USER";
      const baseBinds: Record<string, unknown> = { tname: tn };
      if (ownerBind) baseBinds.owner = ownerBind;

      try {
        const cols = await oracle.queryRows<Record<string, unknown>>(
          `SELECT c.COLUMN_ID, c.COLUMN_NAME, c.DATA_TYPE, c.DATA_LENGTH, c.DATA_PRECISION,
                  c.DATA_SCALE, c.NULLABLE, c.DATA_DEFAULT,
                  cc.COMMENTS
           FROM ALL_TAB_COLUMNS c
           LEFT JOIN ALL_COL_COMMENTS cc ON cc.OWNER = c.OWNER AND cc.TABLE_NAME = c.TABLE_NAME AND cc.COLUMN_NAME = c.COLUMN_NAME
           WHERE c.TABLE_NAME = :tname ${ownerFilter}
           ORDER BY c.COLUMN_ID`,
          baseBinds
        );

        let idxRows: Record<string, unknown>[] = [];
        if (params.include_indexes) {
          idxRows = await oracle.queryRows(
            `SELECT i.INDEX_NAME, i.INDEX_TYPE, i.UNIQUENESS, i.STATUS, i.TABLESPACE_NAME,
                    LISTAGG(ic.COLUMN_NAME, ', ') WITHIN GROUP (ORDER BY ic.COLUMN_POSITION) AS COLUMNS
             FROM ALL_INDEXES i
             JOIN ALL_IND_COLUMNS ic ON ic.INDEX_OWNER = i.OWNER AND ic.INDEX_NAME = i.INDEX_NAME
             WHERE i.TABLE_NAME = :tname ${ownerBind ? "AND i.TABLE_OWNER = :owner" : "AND i.TABLE_OWNER = USER"}
             GROUP BY i.INDEX_NAME, i.INDEX_TYPE, i.UNIQUENESS, i.STATUS, i.TABLESPACE_NAME
             ORDER BY i.INDEX_NAME`,
            baseBinds
          );
        }

        let conRows: Record<string, unknown>[] = [];
        if (params.include_constraints) {
          conRows = await oracle.queryRows(
            `SELECT con.CONSTRAINT_NAME, con.CONSTRAINT_TYPE, con.STATUS, con.SEARCH_CONDITION,
                    con.R_OWNER, con.R_CONSTRAINT_NAME,
                    LISTAGG(col.COLUMN_NAME, ', ') WITHIN GROUP (ORDER BY col.POSITION) AS COLUMNS
             FROM ALL_CONSTRAINTS con
             LEFT JOIN ALL_CONS_COLUMNS col ON col.OWNER = con.OWNER AND col.CONSTRAINT_NAME = con.CONSTRAINT_NAME
             WHERE con.TABLE_NAME = :tname ${ownerBind ? "AND con.OWNER = :owner" : "AND con.OWNER = USER"}
             GROUP BY con.CONSTRAINT_NAME, con.CONSTRAINT_TYPE, con.STATUS, con.SEARCH_CONDITION, con.R_OWNER, con.R_CONSTRAINT_NAME
             ORDER BY DECODE(con.CONSTRAINT_TYPE, 'P', 1, 'U', 2, 'R', 3, 'C', 4, 5), con.CONSTRAINT_NAME`,
            baseBinds
          );
        }

        let trgRows: Record<string, unknown>[] = [];
        if (params.include_triggers) {
          trgRows = await oracle.queryRows(
            `SELECT TRIGGER_NAME, TRIGGER_TYPE, TRIGGERING_EVENT, STATUS, DESCRIPTION
             FROM ALL_TRIGGERS
             WHERE TABLE_NAME = :tname ${ownerBind ? "AND TABLE_OWNER = :owner" : "AND TABLE_OWNER = USER"}
             ORDER BY TRIGGER_NAME`,
            baseBinds
          );
        }

        const elapsed = formatDuration(Date.now() - t0);

        if (params.format === "json") {
          return { content: [{ type: "text" as const, text: JSON.stringify({ table: tn, columns: cols, indexes: idxRows, constraints: conRows, triggers: trgRows, executionTime: elapsed }, null, 2) }] };
        }

        let text = `## Table: ${tn} | ${cols.length} columns | ${elapsed}\n\n`;
        text += `### Columns\n\n` + formatRowsAsMarkdownTable(cols) + "\n\n";
        if (idxRows.length) text += `### Indexes (${idxRows.length})\n\n` + formatRowsAsMarkdownTable(idxRows) + "\n\n";
        if (conRows.length) text += `### Constraints (${conRows.length})\n\n` + formatRowsAsMarkdownTable(conRows) + "\n\n";
        if (trgRows.length) text += `### Triggers (${trgRows.length})\n\n` + formatRowsAsMarkdownTable(trgRows) + "\n\n";
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── List Objects ──────────────────────────────────────────────────────────

  server.tool(
    "oracle_list_objects",
    `List database objects by type. Filter by name pattern and validity status.`,
    {
      object_type: z.enum([
        "TABLE", "VIEW", "INDEX", "SEQUENCE", "SYNONYM",
        "PACKAGE", "PACKAGE BODY", "PROCEDURE", "FUNCTION",
        "TRIGGER", "TYPE", "TYPE BODY", "MATERIALIZED VIEW",
      ]),
      owner: z.string().max(128).optional(),
      filter: z.string().optional().describe("LIKE pattern for name"),
      status: z.enum(["VALID", "INVALID", "ALL"]).default("ALL"),
      limit: z.number().int().min(1).max(5000).default(100),
      offset: z.number().int().min(0).default(0),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      try {
        const ownerClause = params.owner ? "OWNER = :owner" : "OWNER = USER";
        const binds: Record<string, unknown> = { otype: params.object_type };
        if (params.owner) binds.owner = params.owner.toUpperCase();

        let where = `OBJECT_TYPE = :otype AND ${ownerClause}`;
        if (params.filter) { where += " AND OBJECT_NAME LIKE :filter"; binds.filter = params.filter.toUpperCase(); }
        if (params.status !== "ALL") { where += " AND STATUS = :status"; binds.status = params.status; }

        const countRows = await oracle.queryRows<{ CNT: number }>(`SELECT COUNT(*) AS CNT FROM ALL_OBJECTS WHERE ${where}`, binds);
        const total = countRows[0]?.CNT ?? 0;

        const rows = await oracle.queryRows(
          `SELECT OBJECT_NAME, OBJECT_TYPE, OWNER, STATUS,
                  TO_CHAR(CREATED, 'YYYY-MM-DD HH24:MI') AS CREATED,
                  TO_CHAR(LAST_DDL_TIME, 'YYYY-MM-DD HH24:MI') AS LAST_DDL_TIME
           FROM ALL_OBJECTS WHERE ${where}
           ORDER BY OBJECT_NAME
           OFFSET :off ROWS FETCH NEXT :lim ROWS ONLY`,
          { ...binds, off: params.offset, lim: params.limit }
        );

        const elapsed = formatDuration(Date.now() - t0);
        if (params.format === "json") {
          return { content: [{ type: "text" as const, text: JSON.stringify({ total, count: rows.length, offset: params.offset, objects: rows }, null, 2) }] };
        }

        let text = `## ${params.object_type}s (${rows.length} of ${total}) | ${elapsed}\n\n`;
        text += formatRowsAsMarkdownTable(rows);
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Get Source ────────────────────────────────────────────────────────────

  server.tool(
    "oracle_get_source",
    `Retrieve source code of a PL/SQL object or VIEW definition.`,
    {
      object_name: z.string().min(1).max(128),
      object_type: z.enum(["PACKAGE", "PACKAGE BODY", "PROCEDURE", "FUNCTION", "TRIGGER", "TYPE", "TYPE BODY", "VIEW"]),
      owner: z.string().max(128).optional(),
    },
    async (params) => {
      const t0 = Date.now();
      try {
        if (params.object_type === "VIEW") {
          const rows = await oracle.queryRows<{ TEXT: string }>(
            `SELECT TEXT FROM ALL_VIEWS WHERE VIEW_NAME = :name ${params.owner ? "AND OWNER = :owner" : "AND OWNER = USER"}`,
            { name: params.object_name.toUpperCase(), ...(params.owner ? { owner: params.owner.toUpperCase() } : {}) }
          );
          if (!rows.length) return { content: [{ type: "text" as const, text: `View ${params.object_name} not found.` }], isError: true };
          const text = `## VIEW ${params.object_name}\n\n\`\`\`sql\nCREATE OR REPLACE VIEW ${params.object_name} AS\n${rows[0].TEXT}\n\`\`\``;
          return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
        }

        const rows = await oracle.queryRows<{ LINE: number; TEXT: string }>(
          `SELECT LINE, TEXT FROM ALL_SOURCE
           WHERE NAME = :name AND TYPE = :type ${params.owner ? "AND OWNER = :owner" : "AND OWNER = USER"}
           ORDER BY LINE`,
          { name: params.object_name.toUpperCase(), type: params.object_type, ...(params.owner ? { owner: params.owner.toUpperCase() } : {}) }
        );

        if (!rows.length) return { content: [{ type: "text" as const, text: `${params.object_type} ${params.object_name} not found.` }], isError: true };

        const source = rows.map(r => r.TEXT).join("");
        const elapsed = formatDuration(Date.now() - t0);
        const text = `## ${params.object_type} ${params.object_name} (${rows.length} lines) | ${elapsed}\n\n\`\`\`plsql\n${source}\n\`\`\``;
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Search Objects & Source ────────────────────────────────────────────────

  server.tool(
    "oracle_search",
    `Search for database objects by name pattern, or search within PL/SQL source code.`,
    {
      search_term: z.string().min(1).describe("Text to search"),
      search_in: z.enum(["names", "source", "both"]).default("both"),
      owner: z.string().max(128).optional(),
      limit: z.number().int().min(1).max(200).default(50),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      const term = `%${params.search_term.toUpperCase()}%`;
      const ownerClause = params.owner ? "OWNER = :owner" : "OWNER = USER";
      const binds: Record<string, unknown> = { term };
      if (params.owner) binds.owner = params.owner.toUpperCase();

      try {
        let nameResults: Record<string, unknown>[] = [];
        let sourceResults: Record<string, unknown>[] = [];

        if (params.search_in !== "source") {
          nameResults = await oracle.queryRows(
            `SELECT OBJECT_NAME, OBJECT_TYPE, OWNER, STATUS
             FROM ALL_OBJECTS WHERE ${ownerClause} AND OBJECT_NAME LIKE :term
             ORDER BY OBJECT_TYPE, OBJECT_NAME
             FETCH FIRST :lim ROWS ONLY`,
            { ...binds, lim: params.limit }
          );
        }

        if (params.search_in !== "names") {
          sourceResults = await oracle.queryRows(
            `SELECT NAME, TYPE, LINE, TRIM(TEXT) AS TEXT
             FROM ALL_SOURCE WHERE ${ownerClause} AND UPPER(TEXT) LIKE :term
             ORDER BY NAME, TYPE, LINE
             FETCH FIRST :lim ROWS ONLY`,
            { ...binds, lim: params.limit }
          );
        }

        const elapsed = formatDuration(Date.now() - t0);

        if (params.format === "json") {
          return { content: [{ type: "text" as const, text: JSON.stringify({ nameResults, sourceResults, executionTime: elapsed }, null, 2) }] };
        }

        let text = `## Search: "${params.search_term}" | ${elapsed}\n\n`;
        if (nameResults.length) text += `### Object Names (${nameResults.length})\n\n` + formatRowsAsMarkdownTable(nameResults) + "\n\n";
        if (sourceResults.length) text += `### Source Code Matches (${sourceResults.length})\n\n` + formatRowsAsMarkdownTable(sourceResults) + "\n\n";
        if (!nameResults.length && !sourceResults.length) text += `_No results found._`;
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Dependencies ──────────────────────────────────────────────────────────

  server.tool(
    "oracle_dependencies",
    `Show object dependencies — what an object uses and what depends on it.`,
    {
      object_name: z.string().min(1).max(128),
      object_type: z.string().optional(),
      owner: z.string().max(128).optional(),
      direction: z.enum(["uses", "used_by", "both"]).default("both"),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      const name = params.object_name.toUpperCase();
      const ownerBind = params.owner?.toUpperCase();

      try {
        let usesRows: Record<string, unknown>[] = [];
        let usedByRows: Record<string, unknown>[] = [];

        if (params.direction !== "used_by") {
          usesRows = await oracle.queryRows(
            `SELECT REFERENCED_OWNER, REFERENCED_NAME, REFERENCED_TYPE
             FROM ALL_DEPENDENCIES
             WHERE NAME = :name ${ownerBind ? "AND OWNER = :owner" : "AND OWNER = USER"}
             ${params.object_type ? "AND TYPE = :otype" : ""}
             ORDER BY REFERENCED_TYPE, REFERENCED_NAME`,
            { name, ...(ownerBind ? { owner: ownerBind } : {}), ...(params.object_type ? { otype: params.object_type.toUpperCase() } : {}) }
          );
        }

        if (params.direction !== "uses") {
          usedByRows = await oracle.queryRows(
            `SELECT OWNER AS DEPENDENT_OWNER, NAME AS DEPENDENT_NAME, TYPE AS DEPENDENT_TYPE
             FROM ALL_DEPENDENCIES
             WHERE REFERENCED_NAME = :name ${ownerBind ? "AND REFERENCED_OWNER = :owner" : "AND REFERENCED_OWNER = USER"}
             ORDER BY TYPE, NAME`,
            { name, ...(ownerBind ? { owner: ownerBind } : {}) }
          );
        }

        const elapsed = formatDuration(Date.now() - t0);

        if (params.format === "json") {
          return { content: [{ type: "text" as const, text: JSON.stringify({ uses: usesRows, usedBy: usedByRows, executionTime: elapsed }, null, 2) }] };
        }

        let text = `## Dependencies for ${name} | ${elapsed}\n\n`;
        if (usesRows.length) text += `### Uses (${usesRows.length})\n\n` + formatRowsAsMarkdownTable(usesRows) + "\n\n";
        if (usedByRows.length) text += `### Used By (${usedByRows.length})\n\n` + formatRowsAsMarkdownTable(usedByRows) + "\n\n";
        if (!usesRows.length && !usedByRows.length) text += `_No dependencies found._`;
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );
}
