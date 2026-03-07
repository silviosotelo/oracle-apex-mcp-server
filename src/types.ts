export interface OracleConfig {
  host: string;
  port: number;
  serviceName: string;
  username: string;
  password: string;
  connectionString?: string;
  tnsAlias?: string;
  poolMin: number;
  poolMax: number;
  poolTimeout: number;
  stmtCacheSize: number;
  fetchSize: number;
  useThickMode: boolean;
  clientLibDir?: string;
}

export interface ConnectionParams {
  mode: "tns" | "connection_string" | "manual";
  tnsAlias?: string;
  connectionString?: string;
  host?: string;
  port?: number;
  serviceName?: string;
  username: string;
  password: string;
}

export interface ApexOrdsConfig {
  baseUrl: string;
  workspace: string;
  schema: string;
  authToken?: string;
  basicUser?: string;
  basicPass?: string;
}

export interface ColumnMeta {
  name: string;
  dbTypeName: string;
  nullable: boolean;
  precision?: number;
  scale?: number;
  maxSize?: number;
}

export interface QueryResult {
  columns: ColumnMeta[];
  rows: Record<string, unknown>[];
  rowCount: number;
  hasMore: boolean;
}

export interface ExecuteResult {
  rowsAffected: number;
  lastRowid?: string;
  outBinds?: Record<string, unknown>;
}

export interface TransactionStepResult {
  index: number;
  sql: string;
  success: boolean;
  rowsAffected?: number;
  error?: string;
}

export interface TransactionResult {
  committed: boolean;
  steps: TransactionStepResult[];
  totalRowsAffected: number;
}

export type ResponseFormat = "json" | "markdown";

export interface HealthStatus {
  oracle: {
    connected: boolean;
    version: string | null;
    user: string | null;
    schema: string | null;
    poolOpen: number;
    poolInUse: number;
  };
  apex: {
    available: boolean;
    version: string | null;
    workspace: string | null;
  };
}
