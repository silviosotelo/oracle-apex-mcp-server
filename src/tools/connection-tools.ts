import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { OracleService } from "../services/oracle-service.js";
import { loadTnsEntries } from "../utils/tns-parser.js";
import { formatDuration, formatRowsAsMarkdownTable } from "../utils/helpers.js";
import type { ConnectionParams } from "../types.js";

export function registerConnectionTools(server: McpServer, oracle: OracleService): void {

  // ─── List TNS Entries ──────────────────────────────────────────────────────

  server.tool(
    "oracle_list_tns_entries",
    `List all TNS entries found in tnsnames.ora.
Searches TNS_ADMIN, ORACLE_HOME/network/admin, and common install paths.
Use this to discover available databases before connecting.`,
    {
      tns_file: z.string().optional().describe("Custom path to tnsnames.ora (optional — auto-detected if omitted)"),
    },
    async (params) => {
      const { file, entries } = loadTnsEntries(params.tns_file);

      if (!file) {
        let text = `## TNS Configuration Not Found\n\n`;
        text += `No tnsnames.ora file found. Searched:\n`;
        text += `- TNS_ADMIN env var: ${process.env.TNS_ADMIN ?? "(not set)"}\n`;
        text += `- ORACLE_HOME env var: ${process.env.ORACLE_HOME ?? "(not set)"}\n\n`;
        text += `**Options:**\n`;
        text += `1. Set the \`TNS_ADMIN\` environment variable to the directory containing tnsnames.ora\n`;
        text += `2. Set the \`ORACLE_HOME\` environment variable\n`;
        text += `3. Use \`tns_file\` parameter with the full path to your tnsnames.ora\n`;
        text += `4. Use \`oracle_connect\` with mode \`manual\` or \`connection_string\` instead\n`;
        return { content: [{ type: "text" as const, text }] };
      }

      if (entries.length === 0) {
        return { content: [{ type: "text" as const, text: `Found tnsnames.ora at \`${file}\` but no valid entries were parsed.` }] };
      }

      const current = oracle.getActiveConnection();
      let text = `## TNS Entries (${entries.length}) — from \`${file}\`\n\n`;
      text += `**Current connection:** ${current}\n\n`;

      const tableRows = entries.map(e => ({
        ALIAS: e.alias,
        HOST: e.host,
        PORT: e.port,
        SERVICE: e.serviceName || e.sid || "-",
        PROTOCOL: e.protocol,
      }));
      text += formatRowsAsMarkdownTable(tableRows);
      text += `\n\n_Use \`oracle_connect\` with mode \`tns\` and the alias to connect._`;

      return { content: [{ type: "text" as const, text }] };
    }
  );

  // ─── Connect / Switch Database ─────────────────────────────────────────────

  server.tool(
    "oracle_connect",
    `Connect (or switch) to an Oracle database. Three modes:
- **tns**: Use a TNS alias from tnsnames.ora (run oracle_list_tns_entries first)
- **connection_string**: Use a full TNS connect string
- **manual**: Specify host, port, and service_name directly

Closes any existing connection and opens a new pool.
After connecting, runs a health check to verify.`,
    {
      mode: z.enum(["tns", "connection_string", "manual"]).describe("Connection mode"),
      tns_alias: z.string().optional().describe("TNS alias (mode=tns)"),
      connection_string: z.string().optional().describe("Full connect string (mode=connection_string)"),
      host: z.string().optional().describe("Hostname (mode=manual)"),
      port: z.number().int().optional().describe("Port (mode=manual, default 1521)"),
      service_name: z.string().optional().describe("Service name (mode=manual)"),
      username: z.string().min(1).describe("Database username"),
      password: z.string().min(1).describe("Database password"),
    },
    async (params) => {
      // Validate required params per mode
      if (params.mode === "tns" && !params.tns_alias) {
        return { content: [{ type: "text" as const, text: "Error: tns_alias is required when mode is 'tns'. Run oracle_list_tns_entries to see available aliases." }], isError: true };
      }
      if (params.mode === "connection_string" && !params.connection_string) {
        return { content: [{ type: "text" as const, text: "Error: connection_string is required when mode is 'connection_string'." }], isError: true };
      }
      if (params.mode === "manual" && !params.host && !params.service_name) {
        return { content: [{ type: "text" as const, text: "Error: host and service_name are required when mode is 'manual'." }], isError: true };
      }

      const connParams: ConnectionParams = {
        mode: params.mode,
        tnsAlias: params.tns_alias,
        connectionString: params.connection_string,
        host: params.host,
        port: params.port,
        serviceName: params.service_name,
        username: params.username,
        password: params.password,
      };

      const t0 = Date.now();
      try {
        await oracle.reconfigure(connParams);

        // Verify with health check
        const h = await oracle.healthCheck();
        const elapsed = formatDuration(Date.now() - t0);

        if (!h.oracle.connected) {
          return {
            content: [{ type: "text" as const, text: `## Connection Failed\n\n**Target:** ${oracle.getActiveConnection()}\n**Error:** ${h.oracle.version ?? "Unknown error"}\n\nCheck your credentials and network connectivity.` }],
            isError: true,
          };
        }

        let text = `## Connected Successfully | ${elapsed}\n\n`;
        text += `**Target:** ${oracle.getActiveConnection()}\n`;
        text += `**Version:** ${h.oracle.version}\n`;
        text += `**User:** ${h.oracle.user} | **Schema:** ${h.oracle.schema}\n`;
        text += `**Pool:** ${h.oracle.poolOpen} open / ${h.oracle.poolInUse} in use\n`;
        if (h.apex.available) {
          text += `\n**APEX:** v${h.apex.version} | Workspace: ${h.apex.workspace ?? "N/A"}\n`;
        }
        text += `\n_All 25 tools are now operating against this database._`;

        return { content: [{ type: "text" as const, text }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `Connection error: ${e instanceof Error ? e.message : e}` }], isError: true };
      }
    }
  );

  // ─── Disconnect ──────────────────────────────────────────────────────────

  server.tool(
    "oracle_disconnect",
    "Disconnect from the current Oracle database and close the connection pool.",
    {},
    async () => {
      const current = oracle.getActiveConnection();
      const wasConnected = oracle.isConnected();
      await oracle.close();

      if (!wasConnected) {
        return { content: [{ type: "text" as const, text: "No active connection to close." }] };
      }

      return { content: [{ type: "text" as const, text: `Disconnected from **${current}**. Pool closed.\n\nUse \`oracle_connect\` to connect to another database.` }] };
    }
  );

  // ─── Current Connection ──────────────────────────────────────────────────

  server.tool(
    "oracle_current_connection",
    "Show which database is currently connected, with connection details.",
    {},
    async () => {
      const cfg = oracle.getConfig();
      const active = oracle.getActiveConnection();
      const connected = oracle.isConnected();

      let text = `## Current Connection\n\n`;
      text += `**Status:** ${connected ? "Connected" : "Not connected (will connect on next operation)"}\n`;
      text += `**Target:** ${active}\n`;
      text += `**User:** ${cfg.username}\n`;
      text += `**Pool Config:** min=${cfg.poolMin} max=${cfg.poolMax} timeout=${cfg.poolTimeout}s\n`;
      text += `**Thick Mode:** ${cfg.useThickMode}\n`;

      if (cfg.tnsAlias) text += `**TNS Alias:** ${cfg.tnsAlias}\n`;

      text += `\n_Use \`oracle_connect\` to switch databases, or \`oracle_list_tns_entries\` to browse available TNS entries._`;

      return { content: [{ type: "text" as const, text }] };
    }
  );
}
