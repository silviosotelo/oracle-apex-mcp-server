#!/usr/bin/env node

/**
 * Auto-installer for oracle-apex-mcp-server.
 * Usage: node install.js [--scope user|project] [--force]
 *
 * - Builds the project if dist/ doesn't exist
 * - Auto-detects Oracle Instant Client
 * - Registers the MCP server with Claude Code
 */

import { execSync } from "child_process";
import { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { join, resolve, dirname } from "path";
import { homedir } from "os";

const ROOT = resolve(import.meta.dirname || ".");
const DIST_INDEX = join(ROOT, "dist", "index.js");
const SERVER_NAME = "oracle-apex";

// Auto-detect Oracle Instant Client
function findInstantClient() {
  const isWin = process.platform === "win32";
  const searchDirs = isWin
    ? ["C:/", "C:/oracle/", "C:/app/oracle/", homedir() + "/"]
    : ["/opt/oracle/", "/usr/local/oracle/", "/usr/lib/oracle/", homedir() + "/"];

  for (const dir of searchDirs) {
    try {
      const entries = readdirSync(dir);
      for (const entry of entries) {
        if (entry.startsWith("instantclient")) {
          const full = join(dir, entry).replace(/\\/g, "/");
          if (existsSync(full)) return full;
        }
      }
    } catch {
      // Directory doesn't exist, skip
    }
  }
  return null;
}

// Auto-detect TNS_ADMIN
function findTnsAdmin(clientDir) {
  const candidates = [];
  if (clientDir) candidates.push(join(clientDir, "network", "admin"));
  if (process.env.ORACLE_HOME) candidates.push(join(process.env.ORACLE_HOME, "network", "admin"));
  if (process.env.TNS_ADMIN) candidates.push(process.env.TNS_ADMIN);

  for (const dir of candidates) {
    if (existsSync(dir)) return dir.replace(/\\/g, "/");
  }
  return null;
}

// Parse args
const args = process.argv.slice(2);
const force = args.includes("--force");
let scope = "user";
const scopeIdx = args.indexOf("--scope");
if (scopeIdx !== -1 && args[scopeIdx + 1]) {
  scope = args[scopeIdx + 1];
}

console.log("=== Oracle APEX MCP Server — Installer ===\n");

// Step 1: npm install
if (!existsSync(join(ROOT, "node_modules"))) {
  console.log("[1/4] Installing dependencies...");
  execSync("npm install", { cwd: ROOT, stdio: "inherit" });
} else {
  console.log("[1/4] Dependencies already installed.");
}

// Step 2: Build
if (!existsSync(DIST_INDEX) || force) {
  console.log("[2/4] Building TypeScript...");
  execSync("npm run build", { cwd: ROOT, stdio: "inherit" });
} else {
  console.log("[2/4] Already built (use --force to rebuild).");
}

// Step 3: Detect environment
console.log("[3/4] Detecting Oracle environment...");

const clientDir = process.env.ORACLE_CLIENT_LIB_DIR || findInstantClient();
const tnsAdmin = process.env.TNS_ADMIN || findTnsAdmin(clientDir);

if (clientDir) {
  console.log(`  Oracle Instant Client: ${clientDir}`);
} else {
  console.log("  Oracle Instant Client: not found (Thin mode will be used — OK for Oracle 12c+)");
}

if (tnsAdmin) {
  console.log(`  TNS_ADMIN: ${tnsAdmin}`);
} else {
  console.log("  TNS_ADMIN: not found (you can configure it later in mcp.json env)");
}

// Step 4: Register with Claude Code
console.log(`[4/4] Registering MCP server (scope: ${scope})...`);

const env = {};
if (clientDir) env.ORACLE_CLIENT_LIB_DIR = clientDir;
if (tnsAdmin) env.TNS_ADMIN = tnsAdmin;

const mcpConfig = {
  type: "stdio",
  command: "node",
  args: [DIST_INDEX.replace(/\\/g, "/")],
  env,
};

function registerMcp(targetDir) {
  const claudeDir = join(targetDir, ".claude");
  const mcpFile = join(claudeDir, "mcp.json");

  let existing = { mcpServers: {} };
  if (existsSync(mcpFile)) {
    try {
      existing = JSON.parse(readFileSync(mcpFile, "utf-8"));
      if (!existing.mcpServers) existing.mcpServers = {};
    } catch {
      existing = { mcpServers: {} };
    }
  } else {
    mkdirSync(claudeDir, { recursive: true });
  }

  existing.mcpServers[SERVER_NAME] = mcpConfig;
  writeFileSync(mcpFile, JSON.stringify(existing, null, 2) + "\n");
  console.log(`  Written to ${mcpFile}`);
}

if (scope === "user") {
  registerMcp(homedir());
} else if (scope === "project") {
  registerMcp(process.cwd());
}

console.log(`
=== Done! ===

The MCP server "${SERVER_NAME}" is now registered.
${clientDir ? `Oracle Instant Client detected at: ${clientDir}` : "No Instant Client found — using Thin mode (works with Oracle 12c+)."}
${tnsAdmin ? `TNS_ADMIN configured: ${tnsAdmin}` : ""}

Next steps:
  1. Restart Claude Code (or start a new session)
  2. The server will auto-start when Claude Code launches
  3. First thing to do: ask Claude to run oracle_list_tns_entries
     or oracle_connect to set up your database connection

Connection modes available:
  - TNS:    oracle_connect mode=tns tns_alias=MYDB
  - String: oracle_connect mode=connection_string connection_string="..."
  - Manual: oracle_connect mode=manual host=myhost service_name=MYDB

For legacy Oracle databases (pre-12c), add to mcp.json env:
  "ORACLE_OLD_CRYPTO": "true"

Environment variables (optional, set in .claude/mcp.json env):
  ORACLE_HOST, ORACLE_PORT, ORACLE_SERVICE_NAME
  ORACLE_USERNAME, ORACLE_PASSWORD
  ORACLE_CONNECTION_STRING
  ORACLE_TNS_ALIAS
  TNS_ADMIN (path to directory with tnsnames.ora)
  ORACLE_HOME
  ORACLE_OLD_CRYPTO=true (for legacy Oracle)
  ORACLE_CLIENT_LIB_DIR (Instant Client path)
`);
