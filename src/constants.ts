// ─── Configuration Constants ─────────────────────────────────────────────────
export const VERSION = "1.0.0";
export const SERVER_NAME = "oracle-apex-mcp-server";

export const DEFAULT_MAX_ROWS = 500;
export const DEFAULT_FETCH_SIZE = 100;
export const CHARACTER_LIMIT = 50_000;
export const DEFAULT_POOL_MIN = 1;
export const DEFAULT_POOL_MAX = 10;
export const DEFAULT_POOL_TIMEOUT = 60;

// APEX API base paths (read-only)
export const APEX_ORDS_BASE = "/ords";

// SQL command classification
export const READ_ONLY_COMMANDS = new Set([
  "SELECT", "WITH", "EXPLAIN"
]);

export const DML_COMMANDS = new Set([
  "INSERT", "UPDATE", "DELETE", "MERGE"
]);

export const DDL_COMMANDS = new Set([
  "CREATE", "ALTER", "DROP", "TRUNCATE", "COMMENT", "RENAME", "GRANT", "REVOKE"
]);

export const PLSQL_COMMANDS = new Set([
  "BEGIN", "DECLARE", "CALL"
]);
