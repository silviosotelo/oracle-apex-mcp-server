import { readFileSync, existsSync } from "fs";
import { join } from "path";

export interface TnsEntry {
  alias: string;
  host: string;
  port: string;
  serviceName: string;
  sid: string;
  protocol: string;
  raw: string;
}

/**
 * Find tnsnames.ora in standard Oracle locations:
 * 1. TNS_ADMIN env var
 * 2. ORACLE_HOME/network/admin
 * 3. Common Windows paths
 * 4. Common Linux paths
 */
export function findTnsNamesFile(): string | null {
  const candidates: string[] = [];

  if (process.env.TNS_ADMIN) {
    candidates.push(join(process.env.TNS_ADMIN, "tnsnames.ora"));
  }

  if (process.env.ORACLE_HOME) {
    candidates.push(join(process.env.ORACLE_HOME, "network", "admin", "tnsnames.ora"));
  }

  // Common Windows Instant Client / full install paths
  const winDrives = ["C:", "D:"];
  for (const d of winDrives) {
    candidates.push(join(d, "oracle", "network", "admin", "tnsnames.ora"));
    candidates.push(join(d, "app", "oracle", "product", "network", "admin", "tnsnames.ora"));
    candidates.push(join(d, "oraclexe", "app", "oracle", "product", "network", "admin", "tnsnames.ora"));
  }

  // Common Linux paths
  candidates.push("/etc/oracle/tnsnames.ora");
  candidates.push("/opt/oracle/network/admin/tnsnames.ora");
  candidates.push("/u01/app/oracle/product/network/admin/tnsnames.ora");

  for (const f of candidates) {
    if (existsSync(f)) return f;
  }

  return null;
}

/**
 * Parse tnsnames.ora into a list of entries.
 * Handles multi-line definitions and nested parentheses.
 */
export function parseTnsNames(content: string): TnsEntry[] {
  const entries: TnsEntry[] = [];

  // Remove comments
  const clean = content.replace(/#[^\n]*/g, "");

  // Match each TNS alias block: ALIAS = (DESCRIPTION=...)
  const regex = /^([A-Za-z0-9_.]+)\s*=\s*/gm;
  let match: RegExpExecArray | null;
  const positions: { alias: string; start: number }[] = [];

  while ((match = regex.exec(clean)) !== null) {
    positions.push({ alias: match[1], start: match.index + match[0].length });
  }

  for (let i = 0; i < positions.length; i++) {
    const { alias, start } = positions[i];
    const end = i + 1 < positions.length ? positions[i + 1].start : clean.length;
    const rawBlock = clean.substring(start, end).trim();

    // Extract the balanced parenthesized block
    const raw = extractBalancedParens(rawBlock);
    if (!raw) continue;

    const upper = raw.toUpperCase();

    const host = extractValue(upper, "HOST") ?? "";
    const port = extractValue(upper, "PORT") ?? "1521";
    const serviceName = extractValue(upper, "SERVICE_NAME") ?? "";
    const sid = extractValue(upper, "SID") ?? "";
    const protocol = extractValue(upper, "PROTOCOL") ?? "TCP";

    entries.push({ alias: alias.toUpperCase(), host, port, serviceName, sid, protocol, raw });
  }

  return entries;
}

function extractBalancedParens(text: string): string | null {
  const start = text.indexOf("(");
  if (start === -1) return null;

  let depth = 0;
  for (let i = start; i < text.length; i++) {
    if (text[i] === "(") depth++;
    else if (text[i] === ")") depth--;
    if (depth === 0) return text.substring(start, i + 1);
  }
  return text.substring(start);
}

function extractValue(upper: string, key: string): string | null {
  const pattern = new RegExp(key + "\\s*=\\s*([^)]+)", "i");
  const m = upper.match(pattern);
  return m ? m[1].trim() : null;
}

/**
 * Load and parse tnsnames.ora from the best available location.
 * Optionally accepts a custom file path.
 */
export function loadTnsEntries(customPath?: string): { file: string | null; entries: TnsEntry[] } {
  const file = customPath && existsSync(customPath) ? customPath : findTnsNamesFile();
  if (!file) return { file: null, entries: [] };

  try {
    const content = readFileSync(file, "utf-8");
    return { file, entries: parseTnsNames(content) };
  } catch {
    return { file, entries: [] };
  }
}
