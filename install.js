#!/usr/bin/env node

/**
 * Auto-installer for oracle-apex-mcp-server.
 * Usage: node install.js [--scope user|project] [--force]
 *
 * - Builds the project if dist/ doesn't exist
 * - Registers the MCP server with Claude Code
 */

import { execSync } from "child_process";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, resolve } from "path";
import { homedir } from "os";

const ROOT = resolve(import.meta.dirname || ".");
const DIST_INDEX = join(ROOT, "dist", "index.js");
const SERVER_NAME = "oracle-apex";

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
  console.log("[1/3] Installing dependencies...");
  execSync("npm install", { cwd: ROOT, stdio: "inherit" });
} else {
  console.log("[1/3] Dependencies already installed.");
}

// Step 2: Build
if (!existsSync(DIST_INDEX) || force) {
  console.log("[2/3] Building TypeScript...");
  execSync("npm run build", { cwd: ROOT, stdio: "inherit" });
} else {
  console.log("[2/3] Already built (use --force to rebuild).");
}

// Step 3: Register with Claude Code
console.log(`[3/3] Registering MCP server (scope: ${scope})...`);

const mcpConfig = {
  type: "stdio",
  command: "node",
  args: [DIST_INDEX.replace(/\\/g, "/")],
  env: {},
};

if (scope === "user") {
  // Write to ~/.claude/mcp.json
  const claudeDir = join(homedir(), ".claude");
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
} else if (scope === "project") {
  // Write to .claude/mcp.json in current working directory
  const claudeDir = join(process.cwd(), ".claude");
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

console.log(`
=== Done! ===

The MCP server "${SERVER_NAME}" is now registered.

Next steps:
  1. Restart Claude Code (or start a new session)
  2. The server will auto-start when Claude Code launches
  3. First thing to do: ask Claude to run oracle_list_tns_entries
     or oracle_connect to set up your database connection

Connection modes available:
  - TNS:    oracle_connect mode=tns tns_alias=MYDB
  - String: oracle_connect mode=connection_string connection_string="..."
  - Manual: oracle_connect mode=manual host=myhost service_name=MYDB

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
