#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { VERSION, SERVER_NAME } from "./constants.js";
import { OracleService } from "./services/oracle-service.js";
import { registerConnectionTools } from "./tools/connection-tools.js";
import { registerDbTools } from "./tools/oracle-db-tools.js";
import { registerObjectTools } from "./tools/oracle-object-tools.js";
import { registerApexTools } from "./tools/apex-metadata-tools.js";

const server = new McpServer({
  name: SERVER_NAME,
  version: VERSION,
});

let oracleService: OracleService;
try {
  oracleService = new OracleService();
} catch (err) {
  console.error("[fatal] Failed to initialize Oracle service:", err);
  process.exit(1);
}

registerConnectionTools(server, oracleService);
registerDbTools(server, oracleService);
registerObjectTools(server, oracleService);
registerApexTools(server, oracleService);

async function main(): Promise<void> {
  console.error(`[${SERVER_NAME}] v${VERSION}`);
  console.error(`[${SERVER_NAME}] Oracle: ${oracleService.getActiveConnection()}`);
  console.error(`[${SERVER_NAME}] User: ${process.env.ORACLE_USERNAME ?? process.env.ORACLE_USER ?? "hr"}`);
  console.error(`[${SERVER_NAME}] Thick mode: ${process.env.ORACLE_OLD_CRYPTO === "true"}`);

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`[${SERVER_NAME}] Connected. 25 tools registered.`);
}

process.on("SIGINT", async () => {
  await oracleService.close();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await oracleService.close();
  process.exit(0);
});

main().catch((err) => {
  console.error("[fatal]", err);
  process.exit(1);
});
