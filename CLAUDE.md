# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Documentation Reference Files

Detailed APEX and Oracle documentation lives in the `docs/` folder:

| File | Description |
|------|-------------|
| [docs/apex-data-dictionary.md](docs/apex-data-dictionary.md) | APEX Data Dictionary views with ALL verified column names, ORA-00904 error prevention, standard query patterns |
| [docs/apex-plsql-apis.md](docs/apex-plsql-apis.md) | Complete reference for all 41 APEX PL/SQL packages with methods, parameters, and usage patterns |
| [docs/apex-js-apis.md](docs/apex-js-apis.md) | Complete APEX JavaScript API reference - all namespaces, methods, practical patterns |
| [docs/oracle-db-apis.md](docs/oracle-db-apis.md) | Oracle DB APIs (DBMS_LOB, DBMS_CRYPTO, UTL_*, JSON, REGEXP, analytics, dictionary views) |

These files contain the detailed knowledge. The sections below in CLAUDE.md provide a quick-reference summary.

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

See the full **APEX Data Dictionary Views** reference section below for verified column names that prevent ORA-00904 errors.

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

## Oracle Forms to APEX Migration Knowledge

### Architecture Patterns

**Two-page approach (mandatory)**:
- Page 1: Interactive Report (IR) — list with filters, search, export
- Page 2: Modal Form — CRUD operations (Create/Read/Update/Delete)
- Never use a standalone Form page without an IR behind it

**PL/SQL package pattern (mandatory)**:
- One single `PKG_<ENTITY>` per entity — NEVER split into `_LECTURA` / `_ESCRITURA`
- Contains: queries (get_lista, get_detalle), DML (guardar, eliminar), validations (validar), business logic (procesar, anular, procesar_lote)
- BULK operations mandatory: `FORALL`, `BULK COLLECT` — never row-by-row loops
- No `COMMIT` internal — APEX controls the transaction
- Use `RETURNING INTO` for inserts to get generated IDs
- Check `SQL%ROWCOUNT` after DML for affected rows verification

### APEX Page Creation via wwv_flow_api

**Critical requirements when creating pages programmatically**:
- `user_interface_id`: REQUIRED — query `SELECT id FROM wwv_flow_user_interfaces WHERE flow_id = <app_id>` to get it
- `page_mode`: 'NORMAL' for regular pages, 'MODAL' for modal dialogs
- `step_title`: the page title displayed in breadcrumbs/tabs

**Region creation**:
- `plug_source_type`: 'NATIVE_IR' for Interactive Report, 'NATIVE_SQL_REPORT' for Classic Report, 'STATIC' for static content
- For IR regions, you MUST also create: `wwv_flow_worksheets`, `wwv_flow_worksheet_columns`, and `wwv_flow_worksheet_rpts` (default report)
- Region template classes: `region-con-bordes borde-primario` (with borders, primary style)

**Item naming convention**: `P<page_number>_<COLUMN_NAME>` (e.g., `P937_ID_ORDEN_PAGO`)

**Item templates**: Always use `Optional - Floating` template for consistent floating labels

**CSS**: Reference `#WORKSPACE_IMAGES#template-floating-minimalista.css` in page CSS File URLs

**Money/amount formatting**: `TO_CHAR(column, 'FM999G999G999G990D00')` — never raw NUMBER display

### Dynamic Action (DA) Creation

When inserting into `wwv_flow_page_da_events`:
- `bind_type` = `'bind'` (not 'live')
- `event_result` = `'TRUE'` (not 'true')
- `triggering_element_type` = `'JQUERY_SELECTOR'`, `'BUTTON'`, `'ITEM'`, or `'REGION'`
- `triggering_element` = CSS selector or item/button name
- `condition_element_type` / `condition_element` for conditional execution

When inserting into `wwv_flow_page_da_actions`:
- `action` = `'NATIVE_JAVASCRIPT_CODE'`, `'NATIVE_SUBMIT_PAGE'`, `'NATIVE_REFRESH'`, `'NATIVE_HIDE'`, `'NATIVE_SHOW'`, `'NATIVE_SET_VALUE'`, `'NATIVE_EXECUTE_PLSQL_CODE'`
- `attribute_01` = the JavaScript code or PL/SQL code depending on action type
- `event_id` = FK to `wwv_flow_page_da_events.id`
- `execute_on_page_init` = `'Y'` or `'N'`

### Interactive Report (IR) Programmatic Checklist

To create a working IR programmatically, ALL 4 components are required:
1. **Region** (`wwv_flow_page_plugs`) with `plug_source_type = 'NATIVE_IR'` and the SQL query in `plug_source`
2. **Worksheet** (`wwv_flow_worksheets`) linked via `region_id`
3. **Worksheet Columns** (`wwv_flow_worksheet_columns`) — one per SELECT column, with `column_identifier` (A, B, C...) and `db_column_name`
4. **Default Report** (`wwv_flow_worksheet_rpts`) with `application_user = 'APXWS_DEFAULT'` and `is_default = 'Y'`

Missing any one of these results in a broken/empty IR page.

### Virtual Column for Forms

When creating Form regions backed by a query (not table), add a `UNIQUELY_IDENTIFY_ROWS_BY` virtual column:
```sql
-- In the form region source
SELECT id, col1, col2, ..., id AS UNIQUELY_IDENTIFY_ROWS_BY FROM my_table
```
This tells APEX which column is the PK for DML operations.

### Authorization Pattern

```sql
dev_permiso_apx(p_nIdPrograma => :APP_PAGE_ID, p_vPermisoDml => 'S')
```
- `p_vPermisoDml`: 'S' = select/view, 'I' = insert, 'U' = update, 'D' = delete
- Applied as Authorization Scheme on pages, regions, buttons, or items

### Button Patterns

| Button | Type | Behavior |
|--------|------|----------|
| CANCEL | Dynamic Action | Close modal dialog |
| DELETE | Redirect | Confirm dialog → delete process → redirect to IR page |
| SAVE | Submit Page | Runs page processes (validation + DML) |
| CREATE | Submit Page | Same as SAVE but for new records |

### Forms XML Analysis Keys

When parsing Oracle Forms .fmb XML (after frmf2xml conversion):
- `<Block>` → APEX Region (check `QueryDataSourceName` for table/view)
- `<Item>` → APEX Page Item (check `ItemType`, `DataType`, `MaximumLength`)
- `<Trigger>` → APEX Process, Validation, or Dynamic Action (check `TriggerType`)
- `<LOV>` → APEX List of Values (check `ListType`, `RecordGroup`)
- `<ProgramUnit>` → Candidate for PL/SQL Package procedure/function

**DataType codes**: 1=CHAR, 2=NUMBER, 12=DATE, 112=CLOB
**ItemType codes**: 1=TEXT, 3=LIST(SELECT), 6=RADIO, 7=CHECK_BOX, 8=DISPLAY_ONLY, 12=LONG_TEXT, 14=BUTTON

### Common Legacy Schema Patterns

Legacy Oracle Forms schemas (especially Oracle 6i era) often use:
- Abbreviated table names: `ORD_PAGO` instead of `ORDEN_PAGO`, `PREST_SRV` instead of `PRESTADOR_SERVICIO`
- Verify actual table names with `oracle_list_tables` or `oracle_search` before generating PL/SQL
- Join patterns often involve `CONTRATO_CLIENTE` as the central linking table
- `FACTURA_PREPAGA` columns: check actual column names — they vary between schemas (e.g., `NRO_FACTURA` vs `NUMERO_FACTURA`)

### JasperReports Integration

For migrating Oracle Reports (.rdf) to APEX:
1. Convert .rdf to XML using rdf2xml tool
2. Generate JRXML template for JasperReports Server
3. Use `pkg_jasperreports` PL/SQL package for APEX integration
4. AJAX callback pattern: button → JavaScript → AJAX callback → PL/SQL → JasperReports REST API → PDF download

### NOT NULL Constraints in wwv_flow_* Tables

When inserting into APEX internal tables, these columns are NOT NULL and commonly missed:
- `wwv_flow_page_plugs`: `flow_id`, `page_id`, `plug_name`, `plug_display_sequence`
- `wwv_flow_step_items`: `flow_id`, `flow_step_id`, `name`, `data_type`, `display_as`
- `wwv_flow_worksheets`: `flow_id`, `page_id`, `region_id`
- `wwv_flow_worksheet_columns`: `worksheet_id`, `db_column_name`, `column_identifier`
- `wwv_flow_step_processing`: `flow_id`, `flow_step_id`, `process_name`, `process_sql_clob`

### Large ID Precision

APEX internal IDs can exceed JavaScript's `Number.MAX_SAFE_INTEGER`. When working with these IDs:
- Use `TO_CHAR(id)` in queries to preserve precision
- In PL/SQL, use `NUMBER` type (not PLS_INTEGER)
- When generating IDs via `wwv_flow_id.next_val`, the values are safe

---

## APEX Data Dictionary Views - Verified Column Names (APEX 20.2+)

This section provides the EXACT column names for each APEX dictionary view. Using wrong column names causes ORA-00904 errors. Always verify against this reference.

### How to verify columns of any APEX view

```sql
SELECT column_name, data_type FROM all_tab_columns
WHERE owner = (SELECT 'APEX_'||version_no FROM apex_release)
  AND table_name = 'APEX_APPLICATION_PAGE_REGIONS'
ORDER BY column_id;
```

### APEX_APPLICATION_PAGES (89 cols) - key columns

- **Identity**: APPLICATION_ID, PAGE_ID, PAGE_NAME, PAGE_TITLE, PAGE_ALIAS, PAGE_MODE, PAGE_FUNCTION
- **Template/CSS/JS**: PAGE_TEMPLATE, PAGE_CSS_CLASSES, PAGE_TEMPLATE_OPTIONS, JAVASCRIPT_FILE_URLS, JAVASCRIPT_CODE (CLOB), JAVASCRIPT_CODE_ONLOAD (CLOB), CSS_FILE_URLS, INLINE_CSS (CLOB)
- **Structure**: FOOTER_TEXT, PAGE_COMMENT, PAGE_HTML_HEADER (CLOB), PAGE_HTML_ONLOAD
- **Dialogs**: DIALOG_TITLE, DIALOG_HEIGHT, DIALOG_WIDTH, DIALOG_MAX_WIDTH, DIALOG_ATTRIBUTES, DIALOG_CSS_CLASSES, DIALOG_CHAINED
- **Auth**: AUTHORIZATION_SCHEME, PAGE_REQUIRES_AUTHENTICATION, PAGE_ACCESS_PROTECTION, READ_ONLY_CONDITION_TYPE/EXP1/EXP2
- **Counters**: REGIONS, ITEMS, BUTTONS, COMPUTATIONS, VALIDATIONS, PROCESSES, BRANCHES, REPORT_COLUMNS
- **Misc**: BUILD_OPTION, PAGE_GROUP, WARN_ON_UNSAVED_CHANGES, RELOAD_ON_SUBMIT, BROWSER_CACHE, DEEP_LINKING, CREATED_BY/ON, LAST_UPDATED_BY/ON

### APEX_APPLICATION_PAGE_REGIONS (174 cols) - key columns

- **Identity**: REGION_ID, REGION_NAME, APPLICATION_ID, PAGE_ID, PARENT_REGION_ID, PARENT_REGION_NAME, STATIC_ID, DISPLAY_SEQUENCE
- **Template**: TEMPLATE (NOT region_template!), TEMPLATE_ID, REGION_TEMPLATE_OPTIONS, COMPONENT_TEMPLATE_OPTIONS
- **CSS**: REGION_CSS_CLASSES, REGION_SUB_CSS_CLASSES, ICON_CSS_CLASSES, REGION_ATTRIBUTES_SUBSTITUTION
- **Grid**: NEW_GRID, NEW_GRID_ROW, NEW_GRID_COLUMN, GRID_COLUMN, GRID_COLUMN_SPAN, GRID_COLUMN_CSS_CLASSES
- **Position**: DISPLAY_POSITION, DISPLAY_POSITION_CODE, DISPLAY_COLUMN
- **Source**: SOURCE_TYPE, SOURCE_TYPE_CODE, REGION_SOURCE (CLOB), QUERY_TYPE, TABLE_OWNER, TABLE_NAME, WHERE_CLAUSE, ORDER_BY_CLAUSE, LOCATION
- **AJAX**: AJAX_ENABLED, AJAX_ITEMS_TO_SUBMIT, INIT_JAVASCRIPT_CODE
- **Pagination**: PAGINATION_SCHEME, MAXIMUM_ROWS_TO_QUERY, NO_DATA_FOUND_MESSAGE
- **Auth**: AUTHORIZATION_SCHEME, CONDITION_TYPE/EXPRESSION1/EXPRESSION2, READ_ONLY_CONDITION_TYPE/EXP1/EXP2
- **Other**: REGION_HEADER_TEXT, REGION_FOOTER_TEXT, LAZY_LOADING, COMPONENT_COMMENT, ITEMS, BUTTONS, ATTRIBUTE_01..25

### APEX_APPLICATION_PAGE_ITEMS (139 cols) - key columns

- **Identity**: ITEM_ID, ITEM_NAME, APPLICATION_ID, PAGE_ID, REGION (not REGION_NAME!), REGION_ID, DISPLAY_SEQUENCE
- **Type**: DISPLAY_AS, DISPLAY_AS_CODE
- **Label**: LABEL, ITEM_LABEL_TEMPLATE, ITEM_LABEL_TEMPLATE_ID, ITEM_TEMPLATE_OPTIONS, ITEM_CSS_CLASSES, PLACEHOLDER, INLINE_HELP_TEXT
- **Source**: ITEM_SOURCE, ITEM_SOURCE_TYPE, ITEM_SOURCE_DATA_TYPE
- **Default**: ITEM_DEFAULT, ITEM_DEFAULT_TYPE
- **LOV**: LOV_NAMED_LOV, LOV_DEFINITION, LOV_DISPLAY_NULL, LOV_NULL_TEXT, LOV_CASCADE_PARENT_ITEMS, AJAX_ITEMS_TO_SUBMIT
- **Validation**: IS_REQUIRED, READ_ONLY_CONDITION_TYPE/EXP1/EXP2
- **Grid**: NEW_GRID, NEW_GRID_ROW, GRID_COLUMN, GRID_COLUMN_SPAN, COLUMN_SPAN, ROW_SPAN
- **Dimensions**: ITEM_ELEMENT_WIDTH, ITEM_ELEMENT_MAX_LENGTH, ITEM_ELEMENT_HEIGHT
- **HTML**: HTML_FORM_ELEMENT_CSS_CLASSES, HTML_FORM_ELEMENT_ATTRIBUTES, PRE_ELEMENT_TEXT, POST_ELEMENT_TEXT
- **Auth**: AUTHORIZATION_SCHEME, CONDITION_TYPE/EXPRESSION1/EXPRESSION2
- **Misc**: FORMAT_MASK, IS_PRIMARY_KEY, IS_QUERY_ONLY, ESCAPE_ON_HTTP_OUTPUT, COMPONENT_COMMENT, INIT_JAVASCRIPT_CODE, ATTRIBUTE_01..15

### APEX_APPLICATION_PAGE_BUTTONS (53 cols)

- **Identity**: BUTTON_ID, BUTTON_NAME, BUTTON_STATIC_ID, REGION, REGION_ID, BUTTON_SEQUENCE, PAGE_ID
- **Label**: LABEL, BUTTON_TEMPLATE, BUTTON_TEMPLATE_OPTIONS, BUTTON_IS_HOT, BUTTON_CSS_CLASSES, ICON_CSS_CLASSES, BUTTON_ATTRIBUTES
- **Position**: DISPLAY_POSITION, BUTTON_POSITION, ALIGNMENT, GRID_COLUMN/SPAN
- **Action**: BUTTON_ACTION, BUTTON_ACTION_CODE, DATABASE_ACTION, REDIRECT_URL, EXECUTE_VALIDATIONS, WARN_ON_UNSAVED_CHANGES
- **Auth**: AUTHORIZATION_SCHEME, CONDITION_TYPE/EXPRESSION1/EXPRESSION2
- **Misc**: COMPONENT_COMMENT (NOT BUTTON_CONDITION!)

### APEX_APPLICATION_PAGE_DA (38 cols)

- **Identity**: DYNAMIC_ACTION_ID, DYNAMIC_ACTION_NAME, DYNAMIC_ACTION_SEQUENCE
- **Event**: WHEN_EVENT_NAME, WHEN_EVENT_INTERNAL_NAME, WHEN_EVENT_CUSTOM_NAME, WHEN_EVENT_SCOPE
- **Selection**: WHEN_SELECTION_TYPE, WHEN_ELEMENT, WHEN_REGION, WHEN_BUTTON
- **Condition**: WHEN_CONDITION_ELEMENT_TYPE, WHEN_CONDITION_ELEMENT, WHEN_CONDITION, WHEN_EXPRESSION
- **NOTE**: FIRE_ON_INITIALIZATION does NOT exist here - it is EXECUTE_ON_PAGE_INIT in DA_ACTS

### APEX_APPLICATION_PAGE_DA_ACTS (44 cols)

- **Identity**: ACTION_ID, DYNAMIC_ACTION_ID, ACTION_NAME, ACTION_CODE, ACTION_SEQUENCE
- **Type**: ACTION_CODE values: NATIVE_JAVASCRIPT_CODE, NATIVE_EXECUTE_PLSQL_CODE, NATIVE_REFRESH, NATIVE_HIDE, NATIVE_SHOW, NATIVE_SET_VALUE, PLUGIN_*
- **When**: DYNAMIC_ACTION_EVENT_RESULT ('True'/'False'), EXECUTE_ON_PAGE_INIT ('Yes'/'No')
- **Affected**: AFFECTED_ELEMENTS, AFFECTED_ELEMENTS_TYPE, AFFECTED_REGION, AFFECTED_BUTTON
- **Code**: ATTRIBUTE_01 (JS/PL/SQL code), ATTRIBUTE_02 (items to submit), ATTRIBUTE_03 (items to return)

### APEX_APPLICATION_PAGE_PROC (61 cols)

- **Identity**: PROCESS_ID, PROCESS_NAME, REGION_ID, REGION_NAME
- **Sequence**: EXECUTION_SEQUENCE (NOT PROCESS_SEQUENCE!)
- **Point**: PROCESS_POINT ('On Load - Before Header', 'On Submit - After Computations and Validations', 'Ajax Callback')
- **Type**: PROCESS_TYPE, PROCESS_TYPE_CODE
- **Source**: PROCESS_SOURCE (CLOB)
- **Condition**: WHEN_BUTTON_PRESSED, CONDITION_TYPE/EXPRESSION1/EXPRESSION2
- **Messages**: SUCCESS_MESSAGE, PROCESS_ERROR_MESSAGE (NOT ERROR_MESSAGE!)
- **DML**: RETURN_KEY_INTO_ITEM_1/2
- **Auth**: AUTHORIZATION_SCHEME

### APEX_APPLICATION_PAGE_VAL (35 cols)

- **Identity**: VALIDATION_ID, VALIDATION_NAME, VALIDATION_SEQUENCE
- **Type**: VALIDATION_TYPE, VALIDATION_EXPRESSION1/2
- **When**: WHEN_BUTTON_PRESSED, CONDITION_TYPE/EXPRESSION
- **Error**: VALIDATION_FAILURE_TEXT, ASSOCIATED_ITEM, ERROR_DISPLAY_LOCATION

### APEX_APPLICATION_PAGE_BRANCHES (27 cols)

- **Sequence**: PROCESS_SEQUENCE (NOT BRANCH_SEQUENCE!)
- **Action**: BRANCH_ACTION, BRANCH_TYPE, BRANCH_POINT
- **When**: WHEN_BUTTON_PRESSED, CONDITION_TYPE/EXPRESSION

### Other useful views

- **APEX_APPLICATION_LOVS**: LIST_OF_VALUES_ID, LIST_OF_VALUES_NAME, LOV_TYPE, LOV_QUERY
- **APEX_APPLICATION_PAGE_RPT_COLS**: REGION_ID, REPORT_LABEL, COLUMN_ALIAS, FORMAT_MASK
- **APEX_APPLICATION_STATIC_FILES**: FILE_NAME, FILE_CONTENT (BLOB), MIME_TYPE
- **APEX_WORKSPACE_STATIC_FILES**: FILE_NAME, FILE_CONTENT (BLOB), MIME_TYPE

---

## Common ORA-00904 Errors Table

Critical reference for column name mistakes that cause ORA-00904 "invalid identifier":

| WRONG Name | CORRECT Name | View |
|---|---|---|
| REGION_TEMPLATE | TEMPLATE | APEX_APPLICATION_PAGE_REGIONS |
| REGION_TEMPLATE_NAME | TEMPLATE | APEX_APPLICATION_PAGE_REGIONS |
| REGION_COMMENT | COMPONENT_COMMENT | APEX_APPLICATION_PAGE_REGIONS |
| ITEM_COMMENT | COMPONENT_COMMENT | APEX_APPLICATION_PAGE_ITEMS |
| BUTTON_CONDITION | COMPONENT_COMMENT | APEX_APPLICATION_PAGE_BUTTONS |
| PROCESS_SEQUENCE | EXECUTION_SEQUENCE | APEX_APPLICATION_PAGE_PROC |
| ERROR_MESSAGE | PROCESS_ERROR_MESSAGE | APEX_APPLICATION_PAGE_PROC |
| BRANCH_SEQUENCE | PROCESS_SEQUENCE | APEX_APPLICATION_PAGE_BRANCHES |
| FIRE_ON_INITIALIZATION | EXECUTE_ON_PAGE_INIT | APEX_APPLICATION_PAGE_DA_ACTS |
| REGION_NAME (in items) | REGION | APEX_APPLICATION_PAGE_ITEMS |
| UPDATED_ON | LAST_UPDATED_ON | APEX_WORKSPACE_STATIC_FILES |

---

## Standard Query Patterns

Verified query examples using correct column names:

```sql
-- Regions (verified columns)
SELECT region_id, region_name, template, region_template_options, region_css_classes,
       static_id, display_position, source_type, ajax_items_to_submit, component_comment
FROM apex_application_page_regions
WHERE application_id = :app_id AND page_id = :page_id
ORDER BY display_sequence;

-- Items (verified columns)
SELECT item_id, item_name, region, display_as, label, item_label_template,
       item_source, item_source_type, is_required, component_comment
FROM apex_application_page_items
WHERE application_id = :app_id AND page_id = :page_id
ORDER BY display_sequence;

-- Processes (verified columns)
SELECT process_id, process_name, execution_sequence, process_point, process_type,
       when_button_pressed, process_error_message, condition_type, success_message
FROM apex_application_page_proc
WHERE application_id = :app_id AND page_id = :page_id
ORDER BY execution_sequence;

-- Dynamic Actions (verified columns)
SELECT da.dynamic_action_id, da.dynamic_action_name, da.when_event_name,
       da.when_selection_type, da.when_element,
       act.action_code, act.attribute_01, act.execute_on_page_init,
       act.affected_elements, act.affected_elements_type
FROM apex_application_page_da da
JOIN apex_application_page_da_acts act ON da.dynamic_action_id = act.dynamic_action_id
  AND da.application_id = act.application_id AND da.page_id = act.page_id
WHERE da.application_id = :app_id AND da.page_id = :page_id
ORDER BY da.dynamic_action_sequence, act.action_sequence;

-- Buttons (verified columns)
SELECT button_id, button_name, label, button_action, button_action_code,
       display_position, button_is_hot, button_css_classes, redirect_url,
       condition_type, expression1, component_comment
FROM apex_application_page_buttons
WHERE application_id = :app_id AND page_id = :page_id
ORDER BY button_sequence;

-- Validations (verified columns)
SELECT validation_id, validation_name, validation_type,
       validation_expression1, validation_expression2,
       validation_failure_text, associated_item, when_button_pressed
FROM apex_application_page_val
WHERE application_id = :app_id AND page_id = :page_id
ORDER BY validation_sequence;
```

---

## APEX PL/SQL APIs Quick Reference (41 packages)

### Core Application

- **APEX_APPLICATION**: g_user, g_flow_id, g_flow_step_id, g_session, g_request, g_x01..g_x20, g_f01..g_f50, g_clob_01, STOP_APEX_ENGINE
- **APEX_SESSION**: ATTACH, CREATE_SESSION, DELETE_SESSION, DETACH (for non-HTTP contexts like jobs)
- **APEX_PAGE**: GET_URL, GET_PAGE_MODE, IS_READ_ONLY, PURGE_CACHE
- **APEX_UTIL**: SET_SESSION_STATE/GET_SESSION_STATE, CREATE_USER/EDIT_USER/REMOVE_USER, SET_PREFERENCE/GET_PREFERENCE, PREPARE_URL, HOST_URL, GET_HASH, DOWNLOAD_PRINT_DOCUMENT, CLEAR_APP_CACHE/PAGE_CACHE
- **APEX_APP_SETTING**: SET_VALUE, GET_VALUE
- **APEX_EXPORT**: GET_APPLICATION (returns CLOB)
- **APEX_APPLICATION_INSTALL**: SET_APPLICATION_ID, SET_SCHEMA, SET_WORKSPACE, INSTALL

### JSON and Data

- **APEX_JSON**: INITIALIZE_OUTPUT, OPEN_OBJECT/ARRAY, CLOSE_OBJECT/ARRAY, CLOSE_ALL, WRITE (19 overloads for VARCHAR2/NUMBER/BOOLEAN/DATE/CLOB/BLOB/XMLTYPE), PARSE, GET_VARCHAR2/NUMBER/BOOLEAN/CLOB/COUNT, DOES_EXIST, FIND_PATHS_LIKE. **CRITICAL: NEVER use STRINGIFY for CLOBs - use WRITE with CLOB overload**
- **APEX_COLLECTION**: CREATE_COLLECTION, CREATE_OR_TRUNCATE, ADD_MEMBER (50 C-cols, 5 N-cols, 5 D-cols, CLOB/BLOB/XML), UPDATE_MEMBER, DELETE_MEMBER, COLLECTION_EXISTS, COLLECTION_MEMBER_COUNT
- **APEX_DATA_PARSER**: PARSE (BLOB to rows), DISCOVER, GET_FILE_PROFILE, GET_XLSX_WORKSHEETS
- **APEX_EXEC**: OPEN_QUERY_CONTEXT, OPEN_LOCAL_DML_CONTEXT, CLOSE (ALWAYS in exception handler), ADD_FILTER, SET_VALUE, NEXT_ROW, GET, EXECUTE_DML, EXECUTE_PLSQL
- **APEX_STRING**: FORMAT (%s/%0..%9), SPLIT/JOIN, SPLIT_NUMBERS, GREP, PLIST_GET/PUT, NEXT_CHUNK
- **APEX_STRING_UTIL**: DIFF, FIND_EMAIL_ADDRESSES, GET_SLUG

### Security and Auth

- **APEX_ESCAPE**: HTML, HTML_ATTRIBUTE, JS_LITERAL, JSON, LDAP_DN, REGEXP, NOOP
- **APEX_ERROR**: ADD_ERROR (5 signatures - with page_item, region_id for IG, constraint_name, ORA error), HAVE_ERRORS_OCCURRED. Display locations: C_INLINE_WITH_FIELD, C_INLINE_WITH_FIELD_AND_NOTIF, C_INLINE_IN_NOTIFICATION, C_ON_ERROR_PAGE
- **APEX_AUTHENTICATION**: LOGIN, LOGOUT, IS_AUTHENTICATED, IS_PUBLIC_USER
- **APEX_AUTHORIZATION**: IS_AUTHORIZED, RESET_CACHE
- **APEX_ACL**: ADD_USER_ROLE, REMOVE_USER_ROLE, HAS_USER_ROLE
- **APEX_CREDENTIAL**: SET_PERSISTENT_CREDENTIALS, SET_PERSISTENT_TOKEN, CLEAR_TOKENS
- **APEX_JWT**: ENCODE, DECODE, VALIDATE

### UI and Presentation

- **APEX_ITEM**: CHECKBOX2, DATE_POPUP2, HIDDEN, SELECT_LIST, TEXT, TEXTAREA (for classic report HTML generation)
- **APEX_JAVASCRIPT**: ADD_ONLOAD_CODE, ADD_INLINE_CODE, ADD_LIBRARY
- **APEX_CSS**: ADD (inline CSS), ADD_FILE
- **APEX_THEME**: SET_CURRENT_STYLE, SET_SESSION_STYLE, OPEN_REGION/CLOSE_REGION
- **APEX_UI_DEFAULT_UPDATE**: UPD_COLUMN, SYNCH_TABLE
- **APEX_LANG**: MESSAGE (i18n), LANG, CREATE_MESSAGE

### Reports and Regions

- **APEX_IG**: ADD_FILTER, CLEAR_REPORT, DELETE_REPORT, RESET_REPORT
- **APEX_IR**: ADD_FILTER, CLEAR_REPORT, DELETE_REPORT, RESET_REPORT, GET_REPORT
- **APEX_REGION**: EXPORT_DATA (BLOB), OPEN_QUERY_CONTEXT, IS_READ_ONLY
- **APEX_PLUGIN**: GET_AJAX_IDENTIFIER, GET_INPUT_NAME_FOR_PAGE_ITEM
- **APEX_PLUGIN_UTIL**: EXECUTE_PLSQL_CODE, GET_DATA, PRINT_JSON_HTTP_HEADER

### Communication and Integration

- **APEX_MAIL**: SEND (returns mail_id), ADD_ATTACHMENT (BLOB/CLOB), PUSH_QUEUE, PREPARE_TEMPLATE
- **APEX_WEB_SERVICE**: MAKE_REST_REQUEST (returns CLOB), MAKE_REST_REQUEST_B (returns BLOB), SET_REQUEST_HEADERS, OAUTH_AUTHENTICATE, BLOB2CLOBBASE64, G_STATUS_CODE, G_HEADERS
- **APEX_REST_SOURCE_SYNC**: SYNCHRONIZE_DATA, DYNAMIC_SYNCHRONIZE_DATA
- **APEX_ZIP**: ADD_FILE, FINISH, GET_FILE_CONTENT, GET_FILES
- **APEX_SPATIAL**: POINT, CIRCLE_POLYGON, RECTANGLE

### Debugging

- **APEX_DEBUG**: ERROR (level 1, always writes), WARN (2), INFO (4), MESSAGE (custom level), TRACE (APP_TRACE=6), ENGINE_TRACE=9

---

## APEX JavaScript API Quick Reference

### apex.server
- `process(name, pData, pOptions)` — AJAX call to on-demand process. pData: `{pageItems, x01..x20, f01..f20}`. pOptions: `{success, error, dataType, loadingIndicator, queue}`
- `plugin(ajaxId, pData, pOptions)` — AJAX call to plugin
- `url(pData, pPage)` — build URL

### apex.item
- `getValue()` / `setValue(val, displayVal?, suppressChange?)`
- `disable()` / `enable()` / `show()` / `hide()`
- `isChanged()` / `isEmpty()` / `isDisabled()`
- `setValidity(valid, message)` / `getValidity()` / `getValidationMessage()`
- `setFocus()` / `refresh()` / `addValue()` / `removeValue()`
- Properties: `element` (jQuery), `id`, `node`

### apex.region
- `refresh()` / `focus()` / `widget()`
- `create(id, impl)` / `destroy(id)` / `findClosest(target)` / `isRegion(id)`

### apex.page
- `submit(options)` / `validate()` / `isChanged()` / `cancelSubmit()` / `confirm(msg, options)`
- `warnOnUnsavedChanges()` / `cancelWarnOnUnsavedChanges()`

### apex.message
- `showErrors([{type, location, pageItem, message, unsafe}])`
- `clearErrors()` / `alert(msg, callback)` / `confirm(msg, callback)`
- `showPageSuccess(msg)` / `hidePageSuccess()`

### apex.navigation
- `redirect(url)` / `openInNewWindow(url)` / `dialog(url, options)` / `popup(options)`
- `dialog.close(triggerEvent, data)`

### apex.event
- `trigger(selector, eventName, data)`

### apex.da
- `resume(callback, errorOccurred)` / `cancel()` / `handleAjaxErrors(...)`
- Context: `this.affectedElements`, `this.data`, `this.browserEvent`, `this.resumeCallback`

### apex.util
- `escapeHTML(val)` / `escapeHTMLAttr(val)` / `showSpinner(container, options)`
- `applyTemplate(template, options)` / `debounce(fn, delay)` / `stripHTML(text)`

### apex.debug
- `error/warn/info/trace/log/message(level, ...)` / `getLevel()` / `setLevel(level)`
- Levels: OFF=0, ERROR=1, WARN=2, INFO=4, APP_TRACE=6, ENGINE_TRACE=9

### apex.lang
- `getMessage(key)` / `formatMessage(key, ...values)` / `hasMessage(key)` / `loadMessages(keys)`

### apex.locale
- `formatNumber(val, format)` / `getCurrency()` / `getLanguage()` / `getDecimalSeparator()`

### apex.theme
- `openRegion(region)` / `closeRegion(region)` / `popupFieldHelp(itemId)` / `mq(mediaQuery)`

### apex.storage
- `getCookie(name)` / `setCookie(name, val)`
- `getScopedLocalStorage(options)` / `getScopedSessionStorage(options)`

### apex.actions
- `createContext(type, element)` / `findContext(type, element)` / `getContextsForType(type)`

### Legacy globals
- `$v(item)` = getValue, `$s(item, val)` = setValue, `$x(id)` = DOM element

---

## Oracle DB APIs Quick Reference

Common Oracle DB APIs used with APEX:

- **DBMS_LOB**: SUBSTR(lob, amount, offset), GETLENGTH, WRITEAPPEND, CREATETEMPORARY, COPY, COMPARE. Max 2000 bytes for UTL_RAW.CAST_TO_VARCHAR2
- **DBMS_CRYPTO**: HASH (SHA1=3, SHA256=4, SHA384=5, SHA512=6, MD5=2), ENCRYPT (AES256+CBC+PKCS5)
- **DBMS_METADATA**: GET_DDL(type, name, schema) — types: TABLE, VIEW, PACKAGE, PACKAGE_BODY, PROCEDURE, FUNCTION, TRIGGER, INDEX, SEQUENCE
- **DBMS_SCHEDULER**: CREATE_JOB, RUN_JOB, repeat_interval FREQ=MONTHLY/DAILY
- **UTL_RAW**: CAST_TO_RAW, CAST_TO_VARCHAR2
- **UTL_ENCODE**: BASE64_ENCODE/DECODE
- **UTL_URL**: ESCAPE(url, FALSE, 'UTF-8'), UNESCAPE
- **JSON_OBJECT_T / JSON_ARRAY_T** (12c+): put(), append(), get_string(), parse(), to_clob()
- **REGEXP**: REGEXP_LIKE, REGEXP_REPLACE, REGEXP_SUBSTR, REGEXP_COUNT, REGEXP_INSTR
- **Analytics**: ROW_NUMBER, LAG/LEAD, LISTAGG, PIVOT

---

## AJAX Callback Standard Pattern

### PL/SQL process (Ajax Callback point)

```sql
DECLARE
  v_result NUMBER;
BEGIN
  SELECT COUNT(*) INTO v_result FROM tabla WHERE col = apex_application.g_x01;
  apex_json.open_object;
    apex_json.write('success', TRUE);
    apex_json.write('value', v_result);
  apex_json.close_object;
EXCEPTION WHEN OTHERS THEN
  apex_json.open_object;
    apex_json.write('success', FALSE);
    apex_json.write('message', SQLERRM);
  apex_json.close_object;
END;
```

### JavaScript call

```javascript
apex.server.process('PROCESS_NAME', {
  x01: apex.item('P1_FIELD').getValue(),
  pageItems: '#P1_ITEM1,#P1_ITEM2'
}, {
  success: function(data) {
    if (data.success) {
      apex.item('P1_RESULT').setValue(data.value);
    } else {
      apex.message.showErrors([{type:'error', message:data.message, location:'page'}]);
    }
  },
  dataType: 'json'
});
```
