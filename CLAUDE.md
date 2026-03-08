# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Run

```bash
npm run build            # TypeScript compile (src/ → dist/)
npm run start            # Run compiled server
npm run dev              # Build + start
npm run clean            # Remove dist/
npm run install:claude   # Build + register in ~/.claude/mcp.json (user-level)
npm run install:project  # Build + register in .claude/mcp.json (project-level)
```

On Windows with memory issues: `set NODE_OPTIONS=--max-old-space-size=4096 && npx tsc`

There are no tests or linter configured.

## Architecture

This is an MCP (Model Context Protocol) server that exposes Oracle Database and Oracle APEX operations as tools. It uses **stdio transport** — Claude Code launches it as a subprocess and communicates via stdin/stdout.

### Key Design Patterns

- **ESM modules** (`"type": "module"` in package.json) — all imports use `.js` extensions
- **`oracledb` has no built-in TypeScript types** — custom declarations live in `oracledb.d.ts` (project root, included via tsconfig). This file must be maintained manually when using new oracledb APIs. Must include `CLOB: number`, `fetchAsString: number[]`, and `Pool` export with `connectionsOpen?`/`connectionsInUse?`.
- **Dynamic connection management** — `OracleService` supports runtime reconfiguration via `reconfigure()`. The pool is lazily created on first query and can be torn down and recreated to switch databases.
- **Pool alias counter** — each `reconfigure()` creates a pool with a unique alias (`apex_mcp_pool_1`, `_2`, etc.) to avoid oracledb's global pool name conflicts.
- **Version-aware APEX queries** — `OracleService` auto-detects APEX/DB versions on first connection via `detectVersions()`. APEX metadata tools adapt queries based on detected version (e.g., `CREATED_ON` only for APEX 21.1+, `PAGE_CSS_CLASSES` for 20.2+). Use `oracle.isApexAtLeast(version)` and `oracle.isDbAtLeast(version)` to branch queries.
- **Thick mode** — Windows backslashes in `clientLibDir` cause DPI-1047; the code normalizes with `replace(/\\/g, "/")`. "Already initialized" / NJS-077 errors are OK (previous init succeeded).

### Source Structure

```
src/
  index.ts                    # Entry point — creates McpServer, registers all tool groups, starts stdio transport
  constants.ts                # VERSION, defaults (pool sizes, fetch size, row limits), SQL command sets
  types.ts                    # OracleConfig, ConnectionParams, QueryResult, HealthStatus, VersionInfo
  services/
    oracle-service.ts         # Core service — pool management, query/execute/transaction, health check, version detection, reconfigure
  tools/
    connection-tools.ts       # 4 tools: list_tns_entries, connect, disconnect, current_connection
    oracle-db-tools.ts        # 9 tools: health_check, query, execute, transaction, explain_plan, compile, show_errors, table_data_preview, connection_info
    oracle-object-tools.ts    # 6 tools: list_tables, describe_table, list_objects, get_source, search, dependencies
    apex-metadata-tools.ts    # 6 tools: list_applications, describe_application, describe_page (+buttons, +lov_details), get_page_source (+da_source), list_workspace_users, list_rest_services, list_ords_enabled_objects
  utils/
    helpers.ts                # SQL classification, markdown table formatting, ORA- error translation, truncation
    tns-parser.ts             # tnsnames.ora discovery and parsing
  schemas/
    tool-schemas.ts           # Reusable zod schemas (OwnerSchema, FormatSchema, LimitSchema)
```

### Tool Registration Pattern

Each tool group file exports a `register*Tools(server, oracle)` function that calls `server.tool()` for each tool. Tools follow this pattern:
- Zod schema for input validation (inline, not from schemas file in most cases)
- Try/catch with `friendlyOracleError()` for Oracle-specific error translation
- Return `{ content: [{ type: "text", text }] }` with optional `isError: true`
- Most tools support `format: "json" | "markdown"` parameter (default: markdown)

### Connection Flow

1. Server starts with defaults from env vars (or no connection configured)
2. On startup, applies last saved connection from `~/.oracle-apex-mcp/last-connection.json`
3. User calls `oracle_list_tns_entries` to discover databases from `tnsnames.ora`
4. User calls `oracle_connect` with one of 3 modes (tns/connection_string/manual)
5. `OracleService.reconfigure()` closes existing pool, updates config, next query creates new pool
6. First query triggers `detectVersions()` to identify APEX/DB versions
7. User can switch databases at any time by calling `oracle_connect` again

### Important Conventions

- All tool output goes through `truncateIfNeeded()` (50K char limit in `CHARACTER_LIMIT`)
- Oracle errors are translated via `friendlyOracleError()` mapping ORA- codes to human-readable messages
- SQL is classified by first keyword via `classifySql()` — `oracle_query` only accepts SELECT/WITH
- APEX tools are strictly read-only (query APEX dictionary views like APEX_APPLICATIONS)
- Passwords are always masked as `***` in any output via `getConfig()`
- All console output uses `console.error()` (stdout is reserved for MCP protocol)

### APEX Dictionary View Gotchas

When adding or modifying APEX metadata queries, these column differences across versions cause ORA-00904:
- `APEX_APPLICATIONS.CREATED_ON` — only exists in APEX 21.1+, use `LAST_UPDATED_ON` instead
- `APEX_APPLICATION_PAGES.PAGE_CSS_CLASSES` — only in APEX 20.2+
- `APEX_APPLICATION_PAGE_REGIONS.TEMPLATE` — was `REGION_TEMPLATE` before APEX 20.1
- `APEX_APPLICATION_PAGE_DA`: use `DYNAMIC_ACTION_NAME` (not `DA_NAME`), `WHEN_EVENT_NAME` (not `EVENT_NAME`), `DYNAMIC_ACTION_SEQUENCE` (not `DISPLAY_SEQUENCE`)
- `APEX_APPLICATION_PAGE_VAL`: use `VALIDATION_FAILURE_TEXT` (not `ERROR_MESSAGE`)
- `APEX_APPLICATION_LOVS`: use `LIST_OF_VALUES_NAME` (not `LOV_NAME`)
- CLOB columns (REGION_SOURCE, PROCESS_SOURCE, JAVASCRIPT_CODE): use `oracledb.fetchAsString = [oracledb.CLOB]` or `DBMS_LOB.SUBSTR()` in queries

### APEX Internal Tables (for reference when debugging)

The APEX schema (e.g., `APEX_200200` for APEX 20.2) contains internal tables that back the dictionary views:
- `wwv_flow_page_plugs` → regions (plug_name, plug_source, plug_source_type, static_id maps to REGION_NAME)
- `wwv_flow_step_items` → items (name, display_as, lov, item_field_template)
- `wwv_flow_step_processing` → processes (process_name, process_sql_clob)
- `wwv_flow_page_da_events` → DA events (triggering_element, NOT bind_element)
- `wwv_flow_page_da_actions` → DA actions (action, attribute_01, event_id)
- `wwv_flow_worksheets` → IR worksheet definitions (FK to region via region_id)
- `wwv_flow_worksheet_columns` → IR columns (display_as: 'TEXT', display_text_as: 'ESCAPE_SC' or 'WITHOUT_MODIFICATION')
- `wwv_flow_worksheet_rpts` → IR saved reports (application_user = 'APXWS_DEFAULT' for default)
- `wwv_flow_step_buttons` → page buttons
- `wwv_flow_steps` → page-level properties (inline_css, javascript_code, css_file_urls)
