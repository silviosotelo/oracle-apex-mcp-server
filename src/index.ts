#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { VERSION, SERVER_NAME } from "./constants.js";
import { OracleService } from "./services/oracle-service.js";
import { registerDbTools } from "./tools/oracle-db-tools.js";
import { registerObjectTools } from "./tools/oracle-object-tools.js";
import { registerApexTools } from "./tools/apex-metadata-tools.js";

// ─── Create Server ──────────────────────────────────────────────────────────

const server = new McpServer({
  name: SERVER_NAME,
  version: VERSION,
});

// ─── Create Oracle Service ──────────────────────────────────────────────────

let oracleService: OracleService;
try {
  oracleService = new OracleService();
} catch (err) {
  console.error("[fatal] Failed to initialize Oracle service:", err);
  process.exit(1);
}

// ─── Register All Tools ─────────────────────────────────────────────────────

registerDbTools(server, oracleService);
registerObjectTools(server, oracleService);
registerApexTools(server, oracleService);

// ─── Start Server ───────────────────────────────────────────────────────────

async function main(): Promise<void> {
  console.error(`[${SERVER_NAME}] v${VERSION}`);
  console.error(`[${SERVER_NAME}] Oracle host: ${process.env.ORACLE_HOST ?? "localhost"}:${process.env.ORACLE_PORT ?? "1521"}`);
  console.error(`[${SERVER_NAME}] Service: ${process.env.ORACLE_SERVICE_NAME ?? "XE"}`);
  console.error(`[${SERVER_NAME}] User: ${process.env.ORACLE_USERNAME ?? process.env.ORACLE_USER ?? "hr"}`);
  console.error(`[${SERVER_NAME}] Thick mode: ${process.env.ORACLE_OLD_CRYPTO === "true"}`);

  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error(`[${SERVER_NAME}] Connected via stdio. Tools registered:`);
  console.error("  Oracle DB: oracle_health_check, oracle_query, oracle_execute, oracle_transaction,");
  console.error("             oracle_explain_plan, oracle_compile_object, oracle_show_errors,");
  console.error("             oracle_table_data_preview, oracle_connection_info");
  console.error("  Objects:   oracle_list_tables, oracle_describe_table, oracle_list_objects,");
  console.error("             oracle_get_source, oracle_search, oracle_dependencies");
  console.error("  APEX:      apex_list_applications, apex_describe_application, apex_describe_page,");
  console.error("             apex_list_workspace_users, apex_list_rest_services, apex_list_ords_enabled_objects");
}

// ─── Cleanup ────────────────────────────────────────────────────────────────

process.on("SIGINT", async () => {
  console.error("[shutdown] SIGINT received");
  await oracleService.close();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.error("[shutdown] SIGTERM received");
  await oracleService.close();
  process.exit(0);
});

main().catch((err) => {
  console.error("[fatal]", err);
  process.exit(1);
});
