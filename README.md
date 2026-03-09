# Oracle APEX MCP Server

MCP (Model Context Protocol) server for **Oracle Database** and **Oracle APEX** integration. Provides 25 tools for multi-database management, querying, executing DDL/DML, inspecting database objects, and reading APEX metadata — all through a standardized MCP interface.

## Features

- **Multi-database support**: switch between databases on the fly without restarting
- **TNS names**: auto-discovers `tnsnames.ora` from ORACLE_HOME, TNS_ADMIN, or common paths
- **3 connection modes**: TNS alias, connection string, or manual (host/port/service)
- **Oracle Database**: query, execute DML/DDL/PL/SQL, transactions, explain plans, compile objects, show errors
- **Object Inspection**: list tables, describe tables (columns, indexes, constraints, triggers), list objects, get source, search, dependencies
- **APEX Metadata (read-only)**: list applications, describe apps/pages, workspace users, REST services, ORDS-enabled objects
- **Connection pooling** with configurable min/max/timeout
- **Thick mode** support for legacy Oracle databases (pre-12c crypto)

## Requirements

- **Node.js** >= 18.0.0
- **Oracle Database** accessible via network (any version supported by `oracledb` driver)
- **Oracle Instant Client** (only if using Thick mode for legacy databases)

## Quick Install (auto-registers with Claude Code)

```bash
git clone <repo-url>
cd oracle-apex-mcp-server
npm install
npm run install:claude
```

That's it. Restart Claude Code and start using it. No manual configuration needed.

The installer will:
1. Install dependencies
2. Build the TypeScript project
3. Register the MCP server in `~/.claude/mcp.json`

> To register for a specific project instead: `npm run install:project`

> **Windows note**: If `npm run build` runs out of memory, use:
> ```cmd
> set NODE_OPTIONS=--max-old-space-size=4096
> npx tsc
> ```

## How It Works

When you start a Claude Code session, the server starts with no pre-configured database. You choose how to connect:

### 1. Browse available databases from TNS

```
> list my available oracle databases
  (Claude calls oracle_list_tns_entries)

> connect to PROD_DB as user hr
  (Claude calls oracle_connect mode=tns tns_alias=PROD_DB username=hr password=...)
```

### 2. Connect with host/port/service

```
> connect to oracle on 192.168.1.100 port 1521 service MYDB as user admin
  (Claude calls oracle_connect mode=manual host=192.168.1.100 port=1521 service_name=MYDB ...)
```

### 3. Switch databases anytime

```
> switch to DEV_DB
  (Claude calls oracle_connect mode=tns tns_alias=DEV_DB ...)

> now switch to TEST_DB
  (same — closes old pool, opens new one)
```

### 4. Check current connection

```
> which database am I connected to?
  (Claude calls oracle_current_connection)
```

## Configuration

### Environment Variables (all optional)

Set these in `~/.claude/mcp.json` under `env` if you want a default connection at startup:

| Variable | Default | Description |
|---|---|---|
| `ORACLE_HOST` | `localhost` | Oracle DB hostname |
| `ORACLE_PORT` | `1521` | Oracle DB port |
| `ORACLE_SERVICE_NAME` | `XE` | Oracle service name |
| `ORACLE_USERNAME` | `hr` | Database username (also reads `ORACLE_USER`) |
| `ORACLE_PASSWORD` | _(empty)_ | Database password |
| `ORACLE_CONNECTION_STRING` | _(auto-built)_ | Full TNS connect string (overrides host/port/service) |
| `ORACLE_TNS_ALIAS` | _(none)_ | TNS alias to use from tnsnames.ora |
| `TNS_ADMIN` | _(none)_ | Directory containing tnsnames.ora |
| `ORACLE_HOME` | _(none)_ | Oracle home directory (fallback for TNS lookup) |
| `TNS_NAMES_FILE` | _(auto-detected)_ | Explicit path to tnsnames.ora |
| `ORACLE_POOL_MIN` | `1` | Minimum pool connections |
| `ORACLE_POOL_MAX` | `10` | Maximum pool connections |
| `ORACLE_POOL_TIMEOUT` | `60` | Pool timeout in seconds |
| `ORACLE_STMT_CACHE_SIZE` | `30` | Statement cache size |
| `ORACLE_FETCH_SIZE` | `100` | Fetch array size |
| `ORACLE_OLD_CRYPTO` | `false` | Set `true` to enable Thick mode (required for pre-12c databases) |
| `ORACLE_CLIENT_LIB_DIR` | _(none)_ | Path to Oracle Instant Client (Thick mode only) |

### TNS Discovery

The server automatically searches for `tnsnames.ora` in these locations (in order):

1. `$TNS_ADMIN/tnsnames.ora`
2. `$ORACLE_HOME/network/admin/tnsnames.ora`
3. Common Windows paths (`C:\oracle\...`, `C:\app\oracle\...`)
4. Common Linux paths (`/etc/oracle/...`, `/opt/oracle/...`, `/u01/...`)

## Manual Claude Code Setup

If you prefer manual configuration instead of the auto-installer:

### Option 1: CLI command

```bash
claude mcp add-json oracle-apex '{"type":"stdio","command":"node","args":["/ruta/a/oracle-apex-mcp-server/dist/index.js"],"env":{"TNS_ADMIN":"/ruta/a/network/admin"}}' --scope user
```

### Option 2: Edit `~/.claude/mcp.json`

```json
{
  "mcpServers": {
    "oracle-apex": {
      "type": "stdio",
      "command": "node",
      "args": ["/ruta/a/oracle-apex-mcp-server/dist/index.js"],
      "env": {
        "TNS_ADMIN": "/ruta/a/network/admin",
        "ORACLE_OLD_CRYPTO": "true",
        "ORACLE_CLIENT_LIB_DIR": "/ruta/a/instantclient"
      }
    }
  }
}
```

### With default connection at startup

```json
{
  "mcpServers": {
    "oracle-apex": {
      "type": "stdio",
      "command": "node",
      "args": ["/ruta/a/oracle-apex-mcp-server/dist/index.js"],
      "env": {
        "ORACLE_HOST": "myhost",
        "ORACLE_PORT": "1521",
        "ORACLE_SERVICE_NAME": "MYDB",
        "ORACLE_USERNAME": "myuser",
        "ORACLE_PASSWORD": "mypassword"
      }
    }
  }
}
```

## Available Tools (25)

### Connection Management (4) — NEW

| Tool | Description |
|---|---|
| `oracle_list_tns_entries` | List all databases from tnsnames.ora (auto-discovered or custom path) |
| `oracle_connect` | Connect/switch to a database (TNS alias, connection string, or manual) |
| `oracle_disconnect` | Disconnect and close the connection pool |
| `oracle_current_connection` | Show which database is currently connected |

### Database Tools (9)

| Tool | Description |
|---|---|
| `oracle_health_check` | Check Oracle DB and APEX connectivity, version, pool status |
| `oracle_query` | Execute read-only SELECT/WITH queries (up to 10,000 rows) |
| `oracle_execute` | Execute DML, DDL, or PL/SQL with optional auto-commit |
| `oracle_transaction` | Execute multiple statements in a single transaction |
| `oracle_explain_plan` | Generate execution plan for SQL optimization |
| `oracle_compile_object` | Compile/recompile PL/SQL objects (PACKAGE, PROCEDURE, FUNCTION, etc.) |
| `oracle_show_errors` | Show compilation errors (like SQL*Plus SHOW ERRORS) |
| `oracle_table_data_preview` | Preview sample data from a table with optional WHERE/ORDER BY |
| `oracle_connection_info` | Show current connection config (password masked) |

### Object Inspection Tools (6)

| Tool | Description |
|---|---|
| `oracle_list_tables` | List tables with row counts, comments, last analyzed date |
| `oracle_describe_table` | Full table description: columns, indexes, constraints, triggers |
| `oracle_list_objects` | List objects by type (TABLE, VIEW, PACKAGE, etc.) with filters |
| `oracle_get_source` | Get PL/SQL source code or VIEW definition |
| `oracle_search` | Search object names and/or PL/SQL source code |
| `oracle_dependencies` | Show object dependencies (uses / used by) |

### APEX Metadata Tools (6) — Read-Only

| Tool | Description |
|---|---|
| `apex_list_applications` | List APEX applications with page counts |
| `apex_describe_application` | App details: pages, LOVs, auth schemes, build options |
| `apex_describe_page` | Page details: regions, items, processes, dynamic actions, validations |
| `apex_list_workspace_users` | List APEX workspace users with admin/login status |
| `apex_list_rest_services` | List ORDS RESTful service modules, templates, handlers |
| `apex_list_ords_enabled_objects` | List AutoREST-enabled tables/views |

## Development

```bash
npm run build            # Compile TypeScript
npm run start            # Run the compiled server
npm run dev              # Build + start
npm run install:claude   # Build + register in ~/.claude/mcp.json
npm run install:project  # Build + register in .claude/mcp.json (current dir)
npm run clean            # Remove dist/
```

## License

MIT
