// ─── Oracle Connection Configuration ─────────────────────────────────────────
export interface OracleConfig {
  host: string;
  port: number;
  serviceName: string;
  username: string;
  password: string;
  connectionString?: string;
  poolMin: number;
  poolMax: number;
  poolTimeout: number;
  stmtCacheSize: number;
  fetchSize: number;
  useThickMode: boolean;
  clientLibDir?: string;
}

// ─── APEX ORDS Configuration ─────────────────────────────────────────────────
export interface ApexOrdsConfig {
  baseUrl: string;      // e.g. https://host:port/ords
  workspace: string;    // APEX workspace name
  schema: string;       // REST schema alias
  authToken?: string;   // Bearer token for ORDS
  basicUser?: string;   // Basic auth user
  basicPass?: string;   // Basic auth password
}

// ─── Query Result ────────────────────────────────────────────────────────────
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

// ─── Execute Result ──────────────────────────────────────────────────────────
export interface ExecuteResult {
  rowsAffected: number;
  lastRowid?: string;
  outBinds?: Record<string, unknown>;
}

// ─── Transaction Result ──────────────────────────────────────────────────────
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

// ─── Database Object Info ────────────────────────────────────────────────────
export interface TableInfo {
  owner: string;
  tableName: string;
  numRows: number | null;
  lastAnalyzed: string | null;
  comments: string | null;
  tablespaceName: string | null;
}

export interface ColumnInfo {
  columnId: number;
  columnName: string;
  dataType: string;
  dataLength: number | null;
  dataPrecision: number | null;
  dataScale: number | null;
  nullable: string;
  defaultValue: string | null;
  comments: string | null;
}

export interface IndexInfo {
  indexName: string;
  indexType: string;
  uniqueness: string;
  columns: string;
  tablespace: string | null;
  status: string;
}

export interface ConstraintInfo {
  constraintName: string;
  constraintType: string;
  columns: string;
  searchCondition: string | null;
  rOwner: string | null;
  rConstraintName: string | null;
  status: string;
}

export interface TriggerInfo {
  triggerName: string;
  triggerType: string;
  triggeringEvent: string;
  tableName: string;
  status: string;
  description: string | null;
}

export interface SourceLine {
  line: number;
  text: string;
}

export interface ObjectInfo {
  objectName: string;
  objectType: string;
  owner: string;
  status: string;
  created: string;
  lastDdlTime: string;
}

// ─── Pagination ──────────────────────────────────────────────────────────────
export interface PaginationMeta {
  offset: number;
  limit: number;
  total: number;
  hasMore: boolean;
  nextOffset?: number;
}

// ─── APEX Metadata (read-only) ───────────────────────────────────────────────
export interface ApexAppInfo {
  applicationId: number;
  applicationName: string;
  alias: string | null;
  owner: string;
  createdOn: string;
  lastUpdatedOn: string;
  pages: number;
  authScheme: string | null;
}

export interface ApexPageInfo {
  pageId: number;
  pageName: string;
  pageMode: string;
  pageGroup: string | null;
  regionsCount: number;
  itemsCount: number;
  processesCount: number;
  lastUpdatedOn: string;
}

export interface ApexWorkspaceUser {
  userName: string;
  email: string | null;
  isAdmin: string;
  accountLocked: string;
  lastLogin: string | null;
}

// ─── Response Format ─────────────────────────────────────────────────────────
export type ResponseFormat = "json" | "markdown";

// ─── Health Check ────────────────────────────────────────────────────────────
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
