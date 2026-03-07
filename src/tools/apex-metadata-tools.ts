import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { OracleService } from "../services/oracle-service.js";
import {
  formatDuration, truncateIfNeeded, formatRowsAsMarkdownTable,
} from "../utils/helpers.js";

/**
 * All APEX tools are READ-ONLY. They query APEX dictionary views.
 * Queries adapt automatically based on the detected APEX version.
 *
 * Key version differences in APEX dictionary views:
 * - APEX_APPLICATIONS: PAGES column (all versions), CREATED_ON (21.1+)
 * - APEX_APPLICATION_PAGES: INLINE_CSS (20.2+, was CSS_INLINE in some earlier)
 * - APEX_APPLICATION_PAGE_REGIONS: TEMPLATE (20.2+, was REGION_TEMPLATE in some earlier), STATIC_ID (all)
 */
export function registerApexTools(server: McpServer, oracle: OracleService): void {

  /** Build version-aware hint for tool output */
  function versionTag(): string {
    const v = oracle.getVersionInfo();
    if (v.apex) return `APEX ${v.apex}`;
    return "APEX (version unknown)";
  }

  server.tool(
    "apex_list_applications",
    `[READ-ONLY] List Oracle APEX applications with ID, name, alias, owner, page count.
Queries APEX_APPLICATIONS view. Adapts to detected APEX version automatically.`,
    {
      workspace: z.string().optional().describe("Filter by workspace name"),
      limit: z.number().int().min(1).max(500).default(100),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      try {
        const wsClause = params.workspace ? "AND a.WORKSPACE = :ws" : "";
        const binds: Record<string, unknown> = {};
        if (params.workspace) binds.ws = params.workspace.toUpperCase();

        // CREATED_ON exists in APEX 21.1+; use LAST_UPDATED_ON for all versions
        const createdCol = oracle.isApexAtLeast(21.1)
          ? "TO_CHAR(a.CREATED_ON, 'YYYY-MM-DD') AS CREATED_ON," : "";

        const rows = await oracle.queryRows(
          `SELECT a.APPLICATION_ID, a.APPLICATION_NAME, a.ALIAS, a.OWNER, a.WORKSPACE,
                  ${createdCol}
                  TO_CHAR(a.LAST_UPDATED_ON, 'YYYY-MM-DD') AS LAST_UPDATED_ON,
                  a.PAGES AS PAGE_COUNT,
                  a.AUTHENTICATION_SCHEME
           FROM APEX_APPLICATIONS a
           WHERE 1=1 ${wsClause}
           ORDER BY a.APPLICATION_ID
           FETCH FIRST :lim ROWS ONLY`,
          { ...binds, lim: params.limit }
        );

        const elapsed = formatDuration(Date.now() - t0);
        if (params.format === "json") {
          return { content: [{ type: "text" as const, text: JSON.stringify({ applications: rows, count: rows.length, apexVersion: versionTag() }, null, 2) }] };
        }

        let text = `## APEX Applications (${rows.length}) | ${versionTag()} | ${elapsed}\n\n`;
        text += formatRowsAsMarkdownTable(rows);
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        if (msg.includes("ORA-00942") || msg.includes("does not exist")) {
          return { content: [{ type: "text" as const, text: "APEX views not available. Ensure Oracle APEX is installed and you have access to APEX dictionary views." }], isError: true };
        }
        return { content: [{ type: "text" as const, text: `Error: ${msg}` }], isError: true };
      }
    }
  );

  server.tool(
    "apex_describe_application",
    `[READ-ONLY] Detailed info about an APEX application: pages, shared components (LOVs, auth schemes, templates, build options).`,
    {
      app_id: z.number().int().positive().describe("APEX Application ID"),
      include_pages: z.boolean().default(true),
      include_shared_components: z.boolean().default(false),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      try {
        const createdCol = oracle.isApexAtLeast(21.1)
          ? "TO_CHAR(CREATED_ON, 'YYYY-MM-DD HH24:MI') AS CREATED_ON," : "";

        const appRows = await oracle.queryRows(
          `SELECT APPLICATION_ID, APPLICATION_NAME, ALIAS, OWNER, WORKSPACE,
                  AUTHENTICATION_SCHEME, AUTHORIZATION_SCHEME,
                  ${createdCol}
                  TO_CHAR(LAST_UPDATED_ON, 'YYYY-MM-DD HH24:MI') AS LAST_UPDATED_ON,
                  PAGES AS PAGE_COUNT, COMPATIBILITY_MODE, THEME_NUMBER
           FROM APEX_APPLICATIONS WHERE APPLICATION_ID = :aid`,
          { aid: params.app_id }
        );
        if (!appRows.length) {
          return { content: [{ type: "text" as const, text: `Application ${params.app_id} not found.` }], isError: true };
        }

        let pages: Record<string, unknown>[] = [];
        if (params.include_pages) {
          pages = await oracle.queryRows(
            `SELECT PAGE_ID, PAGE_NAME, PAGE_MODE, PAGE_GROUP, PAGE_FUNCTION,
                    (SELECT COUNT(*) FROM APEX_APPLICATION_PAGE_REGIONS r WHERE r.APPLICATION_ID = p.APPLICATION_ID AND r.PAGE_ID = p.PAGE_ID) AS REGIONS,
                    (SELECT COUNT(*) FROM APEX_APPLICATION_PAGE_ITEMS i WHERE i.APPLICATION_ID = p.APPLICATION_ID AND i.PAGE_ID = p.PAGE_ID) AS ITEMS,
                    (SELECT COUNT(*) FROM APEX_APPLICATION_PAGE_PROC pr WHERE pr.APPLICATION_ID = p.APPLICATION_ID AND pr.PAGE_ID = p.PAGE_ID) AS PROCESSES,
                    TO_CHAR(p.LAST_UPDATED_ON, 'YYYY-MM-DD') AS LAST_UPDATED
             FROM APEX_APPLICATION_PAGES p
             WHERE p.APPLICATION_ID = :aid
             ORDER BY p.PAGE_ID`,
            { aid: params.app_id }
          );
        }

        let lovs: Record<string, unknown>[] = [];
        let authSchemes: Record<string, unknown>[] = [];
        let buildOptions: Record<string, unknown>[] = [];

        if (params.include_shared_components) {
          lovs = await oracle.queryRows(
            `SELECT LIST_OF_VALUES_NAME, LOV_TYPE,
                    CASE WHEN LOV_QUERY IS NOT NULL THEN SUBSTR(LOV_QUERY, 1, 200) END AS LOV_QUERY_PREVIEW
             FROM APEX_APPLICATION_LOVS
             WHERE APPLICATION_ID = :aid ORDER BY LIST_OF_VALUES_NAME`,
            { aid: params.app_id }
          );

          authSchemes = await oracle.queryRows(
            `SELECT AUTHORIZATION_SCHEME_NAME, AUTHORIZATION_SCHEME_TYPE, SCHEME_TYPE
             FROM APEX_APPLICATION_AUTHORIZATION
             WHERE APPLICATION_ID = :aid ORDER BY AUTHORIZATION_SCHEME_NAME`,
            { aid: params.app_id }
          );

          try {
            buildOptions = await oracle.queryRows(
              `SELECT BUILD_OPTION_NAME, BUILD_OPTION_STATUS
               FROM APEX_APPLICATION_BUILD_OPTIONS
               WHERE APPLICATION_ID = :aid ORDER BY BUILD_OPTION_NAME`,
              { aid: params.app_id }
            );
          } catch (_e) { /* view may not exist in all APEX versions */ }
        }

        const elapsed = formatDuration(Date.now() - t0);

        if (params.format === "json") {
          return { content: [{ type: "text" as const, text: JSON.stringify({ application: appRows[0], pages, lovs, authSchemes, buildOptions }, null, 2) }] };
        }

        let text = `## Application ${params.app_id} | ${elapsed}\n\n`;
        text += formatRowsAsMarkdownTable(appRows) + "\n\n";
        if (pages.length) text += `### Pages (${pages.length})\n\n` + formatRowsAsMarkdownTable(pages) + "\n\n";
        if (lovs.length) text += `### Shared LOVs (${lovs.length})\n\n` + formatRowsAsMarkdownTable(lovs) + "\n\n";
        if (authSchemes.length) text += `### Authorization Schemes (${authSchemes.length})\n\n` + formatRowsAsMarkdownTable(authSchemes) + "\n\n";
        if (buildOptions.length) text += `### Build Options (${buildOptions.length})\n\n` + formatRowsAsMarkdownTable(buildOptions) + "\n\n";
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  server.tool(
    "apex_describe_page",
    `[READ-ONLY] Detailed info about an APEX page: regions, items, processes, dynamic actions, validations.`,
    {
      app_id: z.number().int().positive(),
      page_id: z.number().int().min(0),
      include_regions: z.boolean().default(true),
      include_items: z.boolean().default(true),
      include_processes: z.boolean().default(true),
      include_dynamic_actions: z.boolean().default(false),
      include_validations: z.boolean().default(false),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      const binds = { aid: params.app_id, pid: params.page_id };

      try {
        // PAGE_CSS_CLASSES available in 21.1+
        const extraPageCols = oracle.isApexAtLeast(21.1) ? "PAGE_CSS_CLASSES," : "";

        const pageRows = await oracle.queryRows(
          `SELECT PAGE_ID, PAGE_NAME, PAGE_MODE, PAGE_GROUP, PAGE_FUNCTION,
                  PAGE_TEMPLATE, ${extraPageCols}
                  DBMS_LOB.GETLENGTH(JAVASCRIPT_CODE) AS JS_LENGTH,
                  DBMS_LOB.GETLENGTH(INLINE_CSS) AS CSS_LENGTH,
                  TO_CHAR(LAST_UPDATED_ON, 'YYYY-MM-DD HH24:MI') AS LAST_UPDATED
           FROM APEX_APPLICATION_PAGES
           WHERE APPLICATION_ID = :aid AND PAGE_ID = :pid`,
          binds
        );
        if (!pageRows.length) {
          return { content: [{ type: "text" as const, text: `Page ${params.page_id} not found in app ${params.app_id}.` }], isError: true };
        }

        let regions: Record<string, unknown>[] = [];
        if (params.include_regions) {
          regions = await oracle.queryRows(
            `SELECT REGION_ID, REGION_NAME, STATIC_ID, SOURCE_TYPE, TEMPLATE,
                    DISPLAY_SEQUENCE, DISPLAY_POSITION, CONDITION_TYPE,
                    DBMS_LOB.SUBSTR(REGION_SOURCE, 500, 1) AS SOURCE_PREVIEW
             FROM APEX_APPLICATION_PAGE_REGIONS
             WHERE APPLICATION_ID = :aid AND PAGE_ID = :pid
             ORDER BY DISPLAY_SEQUENCE`,
            binds
          );
        }

        let items: Record<string, unknown>[] = [];
        if (params.include_items) {
          items = await oracle.queryRows(
            `SELECT ITEM_NAME, DISPLAY_AS, LABEL, REGION,
                    IS_REQUIRED, ITEM_DEFAULT, LOV_NAMED_LOV, LOV_DEFINITION,
                    CONDITION_TYPE, DISPLAY_SEQUENCE
             FROM APEX_APPLICATION_PAGE_ITEMS
             WHERE APPLICATION_ID = :aid AND PAGE_ID = :pid
             ORDER BY DISPLAY_SEQUENCE`,
            binds
          );
        }

        let processes: Record<string, unknown>[] = [];
        if (params.include_processes) {
          processes = await oracle.queryRows(
            `SELECT PROCESS_NAME, PROCESS_TYPE, PROCESS_POINT, EXECUTION_SEQUENCE,
                    CONDITION_TYPE,
                    DBMS_LOB.SUBSTR(PROCESS_SOURCE, 500, 1) AS SOURCE_PREVIEW
             FROM APEX_APPLICATION_PAGE_PROC
             WHERE APPLICATION_ID = :aid AND PAGE_ID = :pid
             ORDER BY EXECUTION_SEQUENCE`,
            binds
          );
        }

        let das: Record<string, unknown>[] = [];
        if (params.include_dynamic_actions) {
          das = await oracle.queryRows(
            `SELECT DYNAMIC_ACTION_NAME, EVENT_NAME, WHEN_TYPE, WHEN_ELEMENT,
                    CONDITION_TYPE, DISPLAY_SEQUENCE
             FROM APEX_APPLICATION_PAGE_DA
             WHERE APPLICATION_ID = :aid AND PAGE_ID = :pid
             ORDER BY DISPLAY_SEQUENCE`,
            binds
          );
        }

        let validations: Record<string, unknown>[] = [];
        if (params.include_validations) {
          validations = await oracle.queryRows(
            `SELECT VALIDATION_NAME, VALIDATION_TYPE, VALIDATION_EXPRESSION1,
                    VALIDATION_SEQUENCE, CONDITION_TYPE, ERROR_MESSAGE
             FROM APEX_APPLICATION_PAGE_VAL
             WHERE APPLICATION_ID = :aid AND PAGE_ID = :pid
             ORDER BY VALIDATION_SEQUENCE`,
            binds
          );
        }

        const elapsed = formatDuration(Date.now() - t0);

        if (params.format === "json") {
          return { content: [{ type: "text" as const, text: JSON.stringify({ page: pageRows[0], regions, items, processes, dynamicActions: das, validations }, null, 2) }] };
        }

        let text = `## Page ${params.page_id} | ${versionTag()} | ${elapsed}\n\n`;
        text += formatRowsAsMarkdownTable(pageRows) + "\n\n";
        if (regions.length) text += `### Regions (${regions.length})\n\n` + formatRowsAsMarkdownTable(regions) + "\n\n";
        if (items.length) text += `### Items (${items.length})\n\n` + formatRowsAsMarkdownTable(items) + "\n\n";
        if (processes.length) text += `### Processes (${processes.length})\n\n` + formatRowsAsMarkdownTable(processes) + "\n\n";
        if (das.length) text += `### Dynamic Actions (${das.length})\n\n` + formatRowsAsMarkdownTable(das) + "\n\n";
        if (validations.length) text += `### Validations (${validations.length})\n\n` + formatRowsAsMarkdownTable(validations) + "\n\n";
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Get Page Source ────────────────────────────────────────────────────────

  server.tool(
    "apex_get_page_source",
    `[READ-ONLY] Get full source code for an APEX page: JavaScript (Function Declaration),
CSS (Inline CSS), region HTML/SQL sources, and process PL/SQL code.
Useful for reviewing or modifying page logic. Returns CLOB content as text.`,
    {
      app_id: z.number().int().positive(),
      page_id: z.number().int().min(0),
      include_js: z.boolean().default(true).describe("Include JavaScript code"),
      include_css: z.boolean().default(true).describe("Include Inline CSS"),
      include_region_source: z.boolean().default(false).describe("Include full region source (HTML/SQL)"),
      include_process_source: z.boolean().default(false).describe("Include full process PL/SQL source"),
      region_name: z.string().optional().describe("Filter regions by name (LIKE match)"),
      process_name: z.string().optional().describe("Filter processes by name (LIKE match)"),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      const binds: Record<string, unknown> = { aid: params.app_id, pid: params.page_id };

      try {
        const parts: { title: string; content: string }[] = [];

        // JavaScript code
        if (params.include_js) {
          const jsRows = await oracle.queryRows<{ JS_CODE: string | null; JS_LEN: number | null }>(
            `SELECT JAVASCRIPT_CODE AS JS_CODE,
                    DBMS_LOB.GETLENGTH(JAVASCRIPT_CODE) AS JS_LEN
             FROM APEX_APPLICATION_PAGES
             WHERE APPLICATION_ID = :aid AND PAGE_ID = :pid`,
            binds
          );
          if (jsRows[0]?.JS_CODE) {
            parts.push({ title: `JavaScript (${jsRows[0].JS_LEN} chars)`, content: jsRows[0].JS_CODE });
          }
        }

        // CSS code
        if (params.include_css) {
          const cssRows = await oracle.queryRows<{ CSS_CODE: string | null; CSS_LEN: number | null }>(
            `SELECT INLINE_CSS AS CSS_CODE,
                    DBMS_LOB.GETLENGTH(INLINE_CSS) AS CSS_LEN
             FROM APEX_APPLICATION_PAGES
             WHERE APPLICATION_ID = :aid AND PAGE_ID = :pid`,
            binds
          );
          if (cssRows[0]?.CSS_CODE) {
            parts.push({ title: `Inline CSS (${cssRows[0].CSS_LEN} chars)`, content: cssRows[0].CSS_CODE });
          }
        }

        // Region sources
        if (params.include_region_source) {
          const regFilter = params.region_name ? "AND UPPER(REGION_NAME) LIKE UPPER(:rname)" : "";
          if (params.region_name) binds.rname = `%${params.region_name}%`;
          const regRows = await oracle.queryRows<{ REGION_NAME: string; SOURCE_TYPE: string; REGION_SOURCE: string | null }>(
            `SELECT REGION_NAME, SOURCE_TYPE, REGION_SOURCE
             FROM APEX_APPLICATION_PAGE_REGIONS
             WHERE APPLICATION_ID = :aid AND PAGE_ID = :pid ${regFilter}
             ORDER BY DISPLAY_SEQUENCE`,
            binds
          );
          for (const r of regRows) {
            if (r.REGION_SOURCE) {
              parts.push({
                title: `Region: ${r.REGION_NAME} (${r.SOURCE_TYPE})`,
                content: r.REGION_SOURCE,
              });
            }
          }
        }

        // Process sources
        if (params.include_process_source) {
          const procFilter = params.process_name ? "AND UPPER(PROCESS_NAME) LIKE UPPER(:pname)" : "";
          if (params.process_name) binds.pname = `%${params.process_name}%`;
          const procRows = await oracle.queryRows<{ PROCESS_NAME: string; PROCESS_POINT: string; PROCESS_SOURCE: string | null }>(
            `SELECT PROCESS_NAME, PROCESS_POINT, PROCESS_SOURCE
             FROM APEX_APPLICATION_PAGE_PROC
             WHERE APPLICATION_ID = :aid AND PAGE_ID = :pid ${procFilter}
             ORDER BY EXECUTION_SEQUENCE`,
            binds
          );
          for (const p of procRows) {
            if (p.PROCESS_SOURCE) {
              parts.push({
                title: `Process: ${p.PROCESS_NAME} (${p.PROCESS_POINT})`,
                content: p.PROCESS_SOURCE,
              });
            }
          }
        }

        const elapsed = formatDuration(Date.now() - t0);

        if (parts.length === 0) {
          return { content: [{ type: "text" as const, text: `No source found for page ${params.page_id} in app ${params.app_id}.` }] };
        }

        if (params.format === "json") {
          const obj: Record<string, string> = {};
          for (const p of parts) obj[p.title] = p.content;
          return { content: [{ type: "text" as const, text: truncateIfNeeded(JSON.stringify(obj, null, 2)) }] };
        }

        let text = `## Page ${params.page_id} Source | ${elapsed}\n\n`;
        for (const p of parts) {
          const lang = p.title.startsWith("JavaScript") ? "javascript"
            : p.title.startsWith("Inline CSS") ? "css"
            : p.title.includes("Process") ? "plsql"
            : "html";
          text += `### ${p.title}\n\n\`\`\`${lang}\n${p.content}\n\`\`\`\n\n`;
        }
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  server.tool(
    "apex_list_workspace_users",
    "[READ-ONLY] List APEX workspace users with admin status and last login.",
    {
      workspace: z.string().optional(),
      limit: z.number().int().min(1).max(500).default(100),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      try {
        const wsClause = params.workspace ? "AND WORKSPACE_NAME = :ws" : "";
        const binds: Record<string, unknown> = {};
        if (params.workspace) binds.ws = params.workspace.toUpperCase();

        const rows = await oracle.queryRows(
          `SELECT USER_NAME, EMAIL, IS_ADMIN, ACCOUNT_LOCKED,
                  TO_CHAR(LAST_LOGIN, 'YYYY-MM-DD HH24:MI') AS LAST_LOGIN,
                  WORKSPACE_NAME
           FROM APEX_WORKSPACE_APEX_USERS
           WHERE 1=1 ${wsClause}
           ORDER BY USER_NAME
           FETCH FIRST :lim ROWS ONLY`,
          { ...binds, lim: params.limit }
        );

        const elapsed = formatDuration(Date.now() - t0);
        if (params.format === "json") {
          return { content: [{ type: "text" as const, text: JSON.stringify({ users: rows, count: rows.length }, null, 2) }] };
        }

        let text = `## APEX Workspace Users (${rows.length}) | ${elapsed}\n\n`;
        text += formatRowsAsMarkdownTable(rows);
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  server.tool(
    "apex_list_rest_services",
    "[READ-ONLY] List ORDS RESTful service modules, templates, and handlers defined in the schema.",
    {
      module_name: z.string().optional().describe("Filter by module name"),
      limit: z.number().int().min(1).max(500).default(100),
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      try {
        const modFilter = params.module_name ? "AND m.NAME LIKE :mname" : "";
        const binds: Record<string, unknown> = {};
        if (params.module_name) binds.mname = `%${params.module_name}%`;

        const rows = await oracle.queryRows(
          `SELECT m.NAME AS MODULE_NAME, m.URI_PREFIX, m.STATUS AS MODULE_STATUS,
                  t.URI_TEMPLATE, h.SOURCE_TYPE, h.METHOD AS HTTP_METHOD
           FROM USER_ORDS_MODULES m
           LEFT JOIN USER_ORDS_TEMPLATES t ON t.MODULE_ID = m.ID
           LEFT JOIN USER_ORDS_HANDLERS h ON h.TEMPLATE_ID = t.ID
           WHERE 1=1 ${modFilter}
           ORDER BY m.NAME, t.URI_TEMPLATE, h.METHOD
           FETCH FIRST :lim ROWS ONLY`,
          { ...binds, lim: params.limit }
        );

        const elapsed = formatDuration(Date.now() - t0);
        if (params.format === "json") {
          return { content: [{ type: "text" as const, text: JSON.stringify({ restServices: rows, count: rows.length }, null, 2) }] };
        }

        let text = `## ORDS REST Services (${rows.length}) | ${elapsed}\n\n`;
        text += rows.length ? formatRowsAsMarkdownTable(rows) : "_No ORDS modules found._";
        return { content: [{ type: "text" as const, text: truncateIfNeeded(text) }] };
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        if (msg.includes("ORA-00942")) {
          return { content: [{ type: "text" as const, text: "ORDS views not available. Ensure ORDS is enabled for this schema." }] };
        }
        return { content: [{ type: "text" as const, text: `Error: ${msg}` }], isError: true };
      }
    }
  );

  server.tool(
    "apex_list_ords_enabled_objects",
    "[READ-ONLY] List tables and views that have been REST-enabled via ORDS AutoREST.",
    {
      format: z.enum(["json", "markdown"]).default("markdown"),
    },
    async (params) => {
      const t0 = Date.now();
      try {
        const rows = await oracle.queryRows(
          `SELECT OBJECT_NAME, OBJECT_TYPE, STATUS, OBJECT_ALIAS, AUTO_REST_AUTH
           FROM USER_ORDS_ENABLED_OBJECTS
           ORDER BY OBJECT_TYPE, OBJECT_NAME`
        );
        const elapsed = formatDuration(Date.now() - t0);
        if (params.format === "json") {
          return { content: [{ type: "text" as const, text: JSON.stringify({ objects: rows, count: rows.length }, null, 2) }] };
        }
        let text = `## ORDS-Enabled Objects (${rows.length}) | ${elapsed}\n\n`;
        text += rows.length ? formatRowsAsMarkdownTable(rows) : "_No AutoREST-enabled objects found._";
        return { content: [{ type: "text" as const, text }] };
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        if (msg.includes("ORA-00942")) {
          return { content: [{ type: "text" as const, text: "USER_ORDS_ENABLED_OBJECTS view not available." }] };
        }
        return { content: [{ type: "text" as const, text: `Error: ${msg}` }], isError: true };
      }
    }
  );
}
