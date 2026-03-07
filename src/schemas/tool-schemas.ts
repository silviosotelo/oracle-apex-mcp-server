import { z } from "zod";

// ─── Shared ──────────────────────────────────────────────────────────────────

export const OwnerSchema = z.string().max(128).optional()
  .describe("Schema/owner name. Defaults to current user.");

export const FormatSchema = z.enum(["json", "markdown"]).default("markdown")
  .describe("Output format: 'markdown' for human-readable or 'json' for structured data.");

export const LimitSchema = z.number().int().min(1).max(5000).default(100)
  .describe("Maximum number of rows/items to return.");

export const OffsetSchema = z.number().int().min(0).default(0)
  .describe("Number of items to skip for pagination.");

// ─── Health Check ────────────────────────────────────────────────────────────

export const HealthCheckSchema = z.object({}).strict();

// ─── Query ───────────────────────────────────────────────────────────────────

export const QuerySchema = z.object({
  sql: z.string().min(1).describe("SQL SELECT query to execute."),
  binds: z.record(z.unknown()).optional().default({})
    .describe("Named bind variables as key-value pairs, e.g. {\":dept_id\": 10}."),
  max_rows: z.number().int().min(1).max(10000).default(500)
    .describe("Maximum rows to return."),
  format: FormatSchema,
}).strict();

// ─── Execute ─────────────────────────────────────────────────────────────────

export const ExecuteSchema = z.object({
  sql: z.string().min(1).describe("SQL statement (INSERT, UPDATE, DELETE, CREATE, ALTER, DROP, etc.) or PL/SQL block."),
  binds: z.record(z.unknown()).optional().default({})
    .describe("Named bind variables."),
  auto_commit: z.boolean().default(true)
    .describe("Whether to auto-commit the statement."),
}).strict();

// ─── Transaction ─────────────────────────────────────────────────────────────

export const TransactionSchema = z.object({
  statements: z.array(z.string().min(1)).min(1).max(100)
    .describe("Ordered list of SQL statements to execute in a single transaction."),
  rollback_on_error: z.boolean().default(true)
    .describe("Rollback entire transaction if any statement fails."),
}).strict();

// ─── List Tables ─────────────────────────────────────────────────────────────

export const ListTablesSchema = z.object({
  owner: OwnerSchema,
  filter: z.string().optional()
    .describe("LIKE pattern to filter table names, e.g. '%EMP%'."),
  limit: LimitSchema,
  offset: OffsetSchema,
  format: FormatSchema,
}).strict();

// ─── Describe Table ──────────────────────────────────────────────────────────

export const DescribeTableSchema = z.object({
  table_name: z.string().min(1).max(128).describe("Name of the table to describe."),
  owner: OwnerSchema,
  include_indexes: z.boolean().default(true).describe("Include index information."),
  include_constraints: z.boolean().default(true).describe("Include constraint information."),
  include_triggers: z.boolean().default(false).describe("Include trigger information."),
  format: FormatSchema,
}).strict();

// ─── List Objects ────────────────────────────────────────────────────────────

export const ListObjectsSchema = z.object({
  object_type: z.enum([
    "TABLE", "VIEW", "INDEX", "SEQUENCE", "SYNONYM",
    "PACKAGE", "PACKAGE BODY", "PROCEDURE", "FUNCTION",
    "TRIGGER", "TYPE", "TYPE BODY", "MATERIALIZED VIEW",
  ]).describe("Type of database object to list."),
  owner: OwnerSchema,
  filter: z.string().optional().describe("LIKE pattern for object name."),
  status: z.enum(["VALID", "INVALID", "ALL"]).default("ALL")
    .describe("Filter by object status."),
  limit: LimitSchema,
  offset: OffsetSchema,
  format: FormatSchema,
}).strict();

// ─── Get Source ──────────────────────────────────────────────────────────────

export const GetSourceSchema = z.object({
  object_name: z.string().min(1).max(128).describe("Name of the PL/SQL object."),
  object_type: z.enum([
    "PACKAGE", "PACKAGE BODY", "PROCEDURE", "FUNCTION",
    "TRIGGER", "TYPE", "TYPE BODY", "VIEW",
  ]).describe("Type of the object."),
  owner: OwnerSchema,
}).strict();

// ─── Explain Plan ────────────────────────────────────────────────────────────

export const ExplainPlanSchema = z.object({
  sql: z.string().min(1).describe("SQL statement to explain."),
  binds: z.record(z.unknown()).optional().default({}),
}).strict();

// ─── Search Objects ──────────────────────────────────────────────────────────

export const SearchObjectsSchema = z.object({
  search_term: z.string().min(1).describe("Text to search for in object names and source code."),
  search_in: z.enum(["names", "source", "both"]).default("both")
    .describe("Where to search: object names, source code, or both."),
  owner: OwnerSchema,
  limit: LimitSchema,
  format: FormatSchema,
}).strict();

// ─── Dependencies ────────────────────────────────────────────────────────────

export const DependenciesSchema = z.object({
  object_name: z.string().min(1).max(128).describe("Name of the object."),
  object_type: z.string().optional().describe("Type of the object (optional, auto-detected)."),
  owner: OwnerSchema,
  direction: z.enum(["uses", "used_by", "both"]).default("both")
    .describe("'uses' = what this object depends on, 'used_by' = what depends on this object."),
  format: FormatSchema,
}).strict();

// ─── APEX: List Apps ─────────────────────────────────────────────────────────

export const ApexListAppsSchema = z.object({
  workspace: z.string().optional().describe("APEX workspace name. Defaults to all accessible."),
  limit: LimitSchema,
  format: FormatSchema,
}).strict();

// ─── APEX: Describe App ─────────────────────────────────────────────────────

export const ApexDescribeAppSchema = z.object({
  app_id: z.number().int().positive().describe("APEX Application ID."),
  include_pages: z.boolean().default(true).describe("Include page listing."),
  include_shared_components: z.boolean().default(false)
    .describe("Include shared components summary (LOVs, auth schemes, templates)."),
  format: FormatSchema,
}).strict();

// ─── APEX: Describe Page ─────────────────────────────────────────────────────

export const ApexDescribePageSchema = z.object({
  app_id: z.number().int().positive().describe("APEX Application ID."),
  page_id: z.number().int().min(0).describe("APEX Page ID."),
  include_regions: z.boolean().default(true),
  include_items: z.boolean().default(true),
  include_processes: z.boolean().default(true),
  include_dynamic_actions: z.boolean().default(false),
  include_validations: z.boolean().default(false),
  format: FormatSchema,
}).strict();

// ─── APEX: List Workspace Users ──────────────────────────────────────────────

export const ApexListUsersSchema = z.object({
  workspace: z.string().optional(),
  limit: LimitSchema,
  format: FormatSchema,
}).strict();

// ─── APEX: REST Services ────────────────────────────────────────────────────

export const ApexListRestServicesSchema = z.object({
  module_name: z.string().optional().describe("Filter by ORDS module name."),
  limit: LimitSchema,
  format: FormatSchema,
}).strict();

// ─── Compile Object ──────────────────────────────────────────────────────────

export const CompileObjectSchema = z.object({
  object_name: z.string().min(1).max(128),
  object_type: z.enum(["PACKAGE", "PACKAGE BODY", "PROCEDURE", "FUNCTION", "TRIGGER", "TYPE", "TYPE BODY", "VIEW"]),
  owner: OwnerSchema,
}).strict();

// ─── Show Errors ─────────────────────────────────────────────────────────────

export const ShowErrorsSchema = z.object({
  object_name: z.string().min(1).max(128),
  object_type: z.enum(["PACKAGE", "PACKAGE BODY", "PROCEDURE", "FUNCTION", "TRIGGER", "TYPE", "TYPE BODY", "VIEW"]),
  owner: OwnerSchema,
}).strict();

// ─── Table Data Preview ──────────────────────────────────────────────────────

export const TableDataPreviewSchema = z.object({
  table_name: z.string().min(1).max(128),
  owner: OwnerSchema,
  max_rows: z.number().int().min(1).max(100).default(20)
    .describe("Number of sample rows."),
  where_clause: z.string().optional()
    .describe("Optional WHERE clause (without the WHERE keyword), e.g. 'status = ''ACTIVE'''"),
  order_by: z.string().optional()
    .describe("Optional ORDER BY clause, e.g. 'created_date DESC'"),
  format: FormatSchema,
}).strict();
