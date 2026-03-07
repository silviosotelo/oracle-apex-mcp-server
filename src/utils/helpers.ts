import { CHARACTER_LIMIT, READ_ONLY_COMMANDS, DML_COMMANDS, DDL_COMMANDS, PLSQL_COMMANDS } from "../constants.js";

// ─── SQL Classification ──────────────────────────────────────────────────────

export function classifySql(sql: string): "SELECT" | "DML" | "DDL" | "PLSQL" | "UNKNOWN" {
  const clean = sql.replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/--[^\n\r]*/g, "")
    .trim()
    .toUpperCase();

  const firstWord = clean.split(/\s+/)[0];
  if (!firstWord) return "UNKNOWN";

  if (READ_ONLY_COMMANDS.has(firstWord)) return "SELECT";
  if (DML_COMMANDS.has(firstWord)) return "DML";
  if (DDL_COMMANDS.has(firstWord)) return "DDL";
  if (PLSQL_COMMANDS.has(firstWord)) return "PLSQL";
  return "UNKNOWN";
}

export function isReadOnly(sql: string): boolean {
  return classifySql(sql) === "SELECT";
}

// ─── Formatting ──────────────────────────────────────────────────────────────

export function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60_000) return `${(ms / 1000).toFixed(2)}s`;
  const m = Math.floor(ms / 60_000);
  const s = ((ms % 60_000) / 1000).toFixed(0);
  return `${m}m ${s}s`;
}

export function truncateIfNeeded(text: string): string {
  if (text.length <= CHARACTER_LIMIT) return text;
  return text.slice(0, CHARACTER_LIMIT) + `\n\n... (truncated — ${text.length} total characters)`;
}

export function formatRowsAsMarkdownTable(rows: Record<string, unknown>[], maxCols = 20): string {
  if (rows.length === 0) return "_No rows returned._";

  const allCols = Object.keys(rows[0]);
  const cols = allCols.slice(0, maxCols);
  const truncatedCols = allCols.length > maxCols;

  // Header
  let table = "| " + cols.join(" | ") + " |\n";
  table += "|" + cols.map(() => "---").join("|") + "|\n";

  // Rows
  for (const row of rows) {
    const values = cols.map(c => {
      const v = row[c];
      if (v === null || v === undefined) return "";
      const s = String(v);
      return s.length > 60 ? s.slice(0, 57) + "..." : s;
    });
    table += "| " + values.join(" | ") + " |\n";
  }

  if (truncatedCols) {
    table += `\n_Showing ${cols.length} of ${allCols.length} columns._`;
  }

  return table;
}

// ─── Oracle Error Messages ───────────────────────────────────────────────────

const ORA_MESSAGES: Record<string, string> = {
  "ORA-00942": "Table or view does not exist",
  "ORA-00904": "Invalid column name",
  "ORA-01017": "Invalid username/password",
  "ORA-12154": "TNS: could not resolve connect identifier",
  "ORA-12545": "Target host or object does not exist",
  "ORA-01031": "Insufficient privileges",
  "ORA-00001": "Unique constraint violation",
  "ORA-02292": "Integrity constraint violation (FK child records exist)",
  "ORA-02291": "Integrity constraint violation (FK parent key not found)",
  "ORA-01400": "Cannot insert NULL into NOT NULL column",
  "ORA-01732": "Data manipulation operation not legal on this view",
  "ORA-06550": "PL/SQL compilation error",
  "ORA-00955": "Object already exists with that name",
  "ORA-00054": "Resource busy — another session holds the lock",
};

export function friendlyOracleError(err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err);
  for (const [code, friendly] of Object.entries(ORA_MESSAGES)) {
    if (msg.includes(code)) return `${code}: ${friendly}\n\nOriginal: ${msg}`;
  }
  return msg;
}

// ─── SQL identifier validation ───────────────────────────────────────────────

export function isValidIdentifier(name: string): boolean {
  return /^[a-zA-Z_][a-zA-Z0-9_$#]*$/.test(name) && name.length <= 128;
}
