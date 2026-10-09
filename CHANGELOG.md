# Changelog

## [Unreleased]

### Fixed
- `oracle_describe_table`: la consulta de constraints agrupaba por `SEARCH_CONDITION` (LONG) y fallaba con ORA-00997. Ahora usa `SEARCH_CONDITION_VC`.
- `apex_describe_application` con `include_shared_components`: `LOV_QUERY` no existe en `APEX_APPLICATION_LOVS` de APEX 26.1 (ORA-00904). Se quita la vista previa de la consulta.

### Added
- **APEX 26.1 reference docs** in `docs/26.1/`: PL/SQL API (64 packages, `plsql/`), JavaScript API (47 pages, `js/`), and APEXlang (1143 components grouped by parent, `apexlang/`, plus the official `apexlang.ebnf` grammar).

## [1.1.0] - 2026-03-06

### Added
- **Multi-database support**: switch between databases dynamically without restarting
- **TNS names parser** (`tns-parser.ts`): reads `tnsnames.ora` from ORACLE_HOME, TNS_ADMIN, or common install paths
- **4 new connection management tools** (25 total):
  - `oracle_list_tns_entries` — discover available databases from tnsnames.ora
  - `oracle_connect` — connect/switch to a database (3 modes: TNS, connection string, manual)
  - `oracle_disconnect` — close the current connection pool
  - `oracle_current_connection` — show active database and connection details
- **Auto-installer** (`install.js`): builds and registers the MCP server in Claude Code with one command
  - `npm run install:claude` — register globally in `~/.claude/mcp.json`
  - `npm run install:project` — register in `.claude/mcp.json` for current project
- `OracleService.reconfigure()` method for dynamic connection switching
- `ConnectionParams` type for structured connection parameters
- `ORACLE_TNS_ALIAS` and `TNS_NAMES_FILE` environment variables
- Dynamic pool alias counter to avoid pool name conflicts on reconnect

### Changed
- Version bumped to 1.1.0
- Tool count updated from 21 to 25
- `OracleService` constructor no longer requires env vars to be set at startup
- `index.ts` now registers `connectionTools` and displays active connection on startup

## [1.0.0] - 2026-03-06

### Added
- Initial release with 21 MCP tools
- **Oracle Database tools (9):** health check, query (SELECT), execute (DML/DDL/PL/SQL), transaction, explain plan, compile object, show errors, table data preview, connection info
- **Object inspection tools (6):** list tables, describe table, list objects, get source, search objects/source, dependencies
- **APEX metadata tools (6, read-only):** list applications, describe application, describe page, list workspace users, list REST services, list ORDS-enabled objects
- Oracle connection pooling with configurable min/max/timeout
- Thick mode support for legacy Oracle databases (pre-12c crypto)
- Friendly Oracle error messages (ORA- code translation)
- Markdown and JSON output formats
- Bind variable support for queries and executions
- Row truncation and character limit protection

### Fixed
- Removed incorrect `src/src/oracledb.d.ts` stub that caused `oracledb.Pool` type resolution failure
- Added proper TypeScript type declarations for `oracledb` module (`oracledb.d.ts`)
- Updated `tsconfig.json` to include type declaration file
