import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { OracleService } from "../services/oracle-service.js";
import {
  formatDuration, truncateIfNeeded, formatRowsAsMarkdownTable,
} from "../utils/helpers.js";

/**
 * All APEX tools are READ-ONLY. They query APEX dictionary views
 * (APEX_APPLICATIONS, APEX_APPLICATION_PAGES, APEX_APPLICATION_PAGE_REGIONS, etc.)
 * which are available when APEX is installed in the database.
 */
export function registerApexTools(server: McpServer, oracle: OracleService): void {

  // ─── List APEX Applications ────────────────────────────────────────────────

  server.tool(
    "apex_list_applications",
    `[READ-ONLY] List Oracle APEX applications with ID, name, alias, owner, page count.
Queries APEX_APPLICATIONS view. Requires APEX installed in the database.`,
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

        const rows = await oracle.queryRows(
          `SELECT a.APPLICATION_ID, a.APPLICATION_NAME, a.ALIAS, a.OWNER, a.WORKSPACE,
                  TO_CHAR(a.CREATED_ON, 'YYYY-MM-DD') AS CREATED_ON,
                  TO_CHAR(a.LAST_UPDATED_ON, 'YYYY-MM-DD') AS LAST_UPDATED_ON,
                  (SELECT COUNT(*) FROM APEX_APPLICATION_PAGES p WHERE p.APPLICATION_ID = a.APPLICATION_ID) AS PAGE_COUNT,
                  a.AUTHENTICATION_SCHEME
           FROM APEX_APPLICATIONS a
           WHERE 1=1 ${wsClause}
           ORDER BY a.APPLICATION_ID
           FETCH FIRST :lim ROWS ONLY`,
          { ...binds, lim: params.limit }
        );

        const elapsed = formatDuration(Date.now() - t0);
        if (params.format === "json") {
          return { content: [{ type: "text", text: JSON.stringify({ applications: rows, count: rows.length }, null, 2) }] };
        }

        let text = `## APEX Applications (${rows.length}) | ${elapsed}\n\n`;
        text += formatRowsAsMarkdownTable(rows);
        return { content: [{ type: "text", text: truncateIfNeeded(text) }] };
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        if (msg.includes("ORA-00942") || msg.includes("does not exist")) {
          return { content: [{ type: "text", text: "APEX views not available. Ensure Oracle APEX is installed and you have access to APEX dictionary views." }], isError: true };
        }
        return { content: [{ type: "text", text: `Error: ${msg}` }], isError: true };
      }
    }
  );

  // ─── Describe APEX Application ─────────────────────────────────────────────

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
        // App info
        const appRows = await oracle.queryRows(
          `SELECT APPLICATION_ID, APPLICATION_NAME, ALIAS, OWNER, WORKSPACE,
                  AUTHENTICATION_SCHEME, AUTHORIZATION_SCHEME,
                  TO_CHAR(CREATED_ON, 'YYYY-MM-DD HH24:MI') AS CREATED_ON,
                  TO_CHAR(LAST_UPDATED_ON, 'YYYY-MM-DD HH24:MI') AS LAST_UPDATED_ON,
                  APPLICATION_GROUP, COMPATIBILITY_MODE, THEME_NUMBER
           FROM APEX_APPLICATIONS WHERE APPLICATION_ID = :aid`,
          { aid: params.app_id }
        );
        if (!appRows.length) {
          return { content: [{ type: "text", text: `Application ${params.app_id} not found.` }], isError: true };
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
          } catch { /* view may not exist in all APEX versions */ }
        }

        const elapsed = formatDuration(Date.now() - t0);

        if (params.format === "json") {
          return { content: [{ type: "text", text: JSON.stringify({ application: appRows[0], pages, lovs, authSchemes, buildOptions }, null, 2) }] };
        }

        let text = `## Application ${params.app_id} | ${elapsed}\n\n`;
        text += formatRowsAsMarkdownTable(appRows) + "\n\n";
        if (pages.length) text += `### Pages (${pages.length})\n\n` + formatRowsAsMarkdownTable(pages) + "\n\n";
        if (lovs.length) text += `### Shared LOVs (${lovs.length})\n\n` + formatRowsAsMarkdownTable(lovs) + "\n\n";
        if (authSchemes.length) text += `### Authorization Schemes (${authSchemes.length})\n\n` + formatRowsAsMarkdownTable(authSchemes) + "\n\n";
        if (buildOptions.length) text += `### Build Options (${buildOptions.length})\n\n` + formatRowsAsMarkdownTable(buildOptions) + "\n\n";
        return { content: [{ type: "text", text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text", text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Describe APEX Page ────────────────────────────────────────────────────

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
        const pageRows = await oracle.queryRows(
          `SELECT PAGE_ID, PAGE_NAME, PAGE_MODE, PAGE_GROUP, PAGE_FUNCTION,
                  PAGE_TEMPLATE, JAVASCRIPT_CODE, CSS_INLINE,
                  TO_CHAR(LAST_UPDATED_ON, 'YYYY-MM-DD HH24:MI') AS LAST_UPDATED
           FROM APEX_APPLICATION_PAGES
           WHERE APPLICATION_ID = :aid AND PAGE_ID = :pid`,
          binds
        );
        if (!pageRows.length) {
          return { content: [{ type: "text", text: `Page ${params.page_id} not found in app ${params.app_id}.` }], isError: true };
        }

        let regions: Record<string, unknown>[] = [];
        if (params.include_regions) {
          regions = await oracle.queryRows(
            `SELECT REGION_ID, REGION_NAME, SOURCE_TYPE, REGION_TEMPLATE, DISPLAY_SEQUENCE,
                    DISPLAY_POSITION, CONDITION_TYPE,
                    CASE WHEN REGION_SOURCE IS NOT NULL THEN SUBSTR(REGION_SOURCE, 1, 300) END AS SOURCE_PREVIEW
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
                    CASE WHEN PROCESS_SOURCE IS NOT NULL THEN SUBSTR(PROCESS_SOURCE, 1, 300) END AS SOURCE_PREVIEW
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
          return { content: [{ type: "text", text: JSON.stringify({ page: pageRows[0], regions, items, processes, dynamicActions: das, validations }, null, 2) }] };
        }

        let text = `## Page ${params.page_id} | ${elapsed}\n\n`;
        text += formatRowsAsMarkdownTable(pageRows) + "\n\n";
        if (regions.length) text += `### Regions (${regions.length})\n\n` + formatRowsAsMarkdownTable(regions) + "\n\n";
        if (items.length) text += `### Items (${items.length})\n\n` + formatRowsAsMarkdownTable(items) + "\n\n";
        if (processes.length) text += `### Processes (${processes.length})\n\n` + formatRowsAsMarkdownTable(processes) + "\n\n";
        if (das.length) text += `### Dynamic Actions (${das.length})\n\n` + formatRowsAsMarkdownTable(das) + "\n\n";
        if (validations.length) text += `### Validations (${validations.length})\n\n` + formatRowsAsMarkdownTable(validations) + "\n\n";
        return { content: [{ type: "text", text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text", text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── APEX Workspace Users ──────────────────────────────────────────────────

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
          return { content: [{ type: "text", text: JSON.stringify({ users: rows, count: rows.length }, null, 2) }] };
        }

        let text = `## APEX Workspace Users (${rows.length}) | ${elapsed}\n\n`;
        text += formatRowsAsMarkdownTable(rows);
        return { content: [{ type: "text", text: truncateIfNeeded(text) }] };
      } catch (e) {
        return { content: [{ type: "text", text: `Error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── APEX REST Services ────────────────────────────────────────────────────

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
          return { content: [{ type: "text", text: JSON.stringify({ restServices: rows, count: rows.length }, null, 2) }] };
        }

        let text = `## ORDS REST Services (${rows.length}) | ${elapsed}\n\n`;
        if (rows.length) {
          text += formatRowsAsMarkdownTable(rows);
        } else {
          text += "_No ORDS modules found. This may require USER_ORDS_* views which are available when ORDS is enabled._";
        }
        return { content: [{ type: "text", text: truncateIfNeeded(text) }] };
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        if (msg.includes("ORA-00942")) {
          return { content: [{ type: "text", text: "ORDS views not available. Ensure ORDS is enabled for this schema." }] };
        }
        return { content: [{ type: "text", text: `Error: ${msg}` }], isError: true };
      }
    }
  );

  // ─── APEX ORDS Enabled Objects ─────────────────────────────────────────────

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
          return { content: [{ type: "text", text: JSON.stringify({ objects: rows, count: rows.length }, null, 2) }] };
        }
        let text = `## ORDS-Enabled Objects (${rows.length}) | ${elapsed}\n\n`;
        text += rows.length ? formatRowsAsMarkdownTable(rows) : "_No AutoREST-enabled objects found._";
        return { content: [{ type: "text", text }] };
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        if (msg.includes("ORA-00942")) {
          return { content: [{ type: "text", text: "USER_ORDS_ENABLED_OBJECTS view not available." }] };
        }
        return { content: [{ type: "text", text: `Error: ${msg}` }], isError: true };
      }
    }
  );
}
