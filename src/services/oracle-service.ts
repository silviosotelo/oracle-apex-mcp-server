import oracledb from "oracledb";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { homedir } from "os";
import { join } from "path";
import type {
  OracleConfig, QueryResult, ExecuteResult, TransactionResult,
  TransactionStepResult, ColumnMeta, HealthStatus, ConnectionParams, VersionInfo
} from "../types.js";
import {
  DEFAULT_POOL_MIN, DEFAULT_POOL_MAX, DEFAULT_POOL_TIMEOUT,
  DEFAULT_FETCH_SIZE, DEFAULT_MAX_ROWS
} from "../constants.js";
import { friendlyOracleError, classifySql } from "../utils/helpers.js";
import { loadTnsEntries } from "../utils/tns-parser.js";

const LAST_CONN_DIR = join(homedir(), ".oracle-apex-mcp");
const LAST_CONN_FILE = join(LAST_CONN_DIR, "last-connection.json");

let poolCounter = 0;

export class OracleService {
  private config: OracleConfig;
  private pool: oracledb.Pool | null = null;
  private driverInitialized = false;
  private activeAlias: string | null = null;
  private detectedVersion: VersionInfo = { apex: null, apexFull: null, db: null, dbFull: null };
  private versionDetected = false;

  constructor() {
    this.config = this.loadConfig();
    this.applyLastConnection();
    this.initDriver();
  }

  private loadConfig(): OracleConfig {
    return {
      host: process.env.ORACLE_HOST ?? "localhost",
      port: parseInt(process.env.ORACLE_PORT ?? "1521", 10),
      serviceName: process.env.ORACLE_SERVICE_NAME ?? "XE",
      username: process.env.ORACLE_USERNAME ?? process.env.ORACLE_USER ?? "hr",
      password: process.env.ORACLE_PASSWORD ?? "",
      connectionString: process.env.ORACLE_CONNECTION_STRING,
      tnsAlias: process.env.ORACLE_TNS_ALIAS,
      poolMin: parseInt(process.env.ORACLE_POOL_MIN ?? String(DEFAULT_POOL_MIN), 10),
      poolMax: parseInt(process.env.ORACLE_POOL_MAX ?? String(DEFAULT_POOL_MAX), 10),
      poolTimeout: parseInt(process.env.ORACLE_POOL_TIMEOUT ?? String(DEFAULT_POOL_TIMEOUT), 10),
      stmtCacheSize: parseInt(process.env.ORACLE_STMT_CACHE_SIZE ?? "30", 10),
      fetchSize: parseInt(process.env.ORACLE_FETCH_SIZE ?? String(DEFAULT_FETCH_SIZE), 10),
      useThickMode: process.env.ORACLE_OLD_CRYPTO === "true" || true,
      clientLibDir: process.env.ORACLE_CLIENT_LIB_DIR || "C:/instantclient_23_5",
    };
  }

  /** Load last saved connection and apply it to config */
  private applyLastConnection(): void {
    try {
      if (!existsSync(LAST_CONN_FILE)) return;
      const data = JSON.parse(readFileSync(LAST_CONN_FILE, "utf-8")) as ConnectionParams;
      if (!data.mode || !data.username || !data.password) return;

      if (data.mode === "tns" && data.tnsAlias) {
        this.config.tnsAlias = data.tnsAlias;
        this.config.connectionString = undefined;
        this.activeAlias = data.tnsAlias.toUpperCase();
      } else if (data.mode === "connection_string" && data.connectionString) {
        this.config.tnsAlias = undefined;
        this.config.connectionString = data.connectionString;
      } else if (data.mode === "manual") {
        this.config.tnsAlias = undefined;
        this.config.connectionString = undefined;
        this.config.host = data.host ?? "localhost";
        this.config.port = data.port ?? 1521;
        this.config.serviceName = data.serviceName ?? "XE";
      }
      this.config.username = data.username;
      this.config.password = data.password;
      console.error(`[oracle] Restored last connection: ${this.getActiveConnection()} (user: ${data.username})`);
    } catch (e) {
      console.error("[oracle] Could not load last connection:", e instanceof Error ? e.message : e);
    }
  }

  /** Save connection params for next startup */
  saveLastConnection(params: ConnectionParams): void {
    try {
      if (!existsSync(LAST_CONN_DIR)) {
        mkdirSync(LAST_CONN_DIR, { recursive: true });
      }
      writeFileSync(LAST_CONN_FILE, JSON.stringify(params, null, 2), "utf-8");
      console.error("[oracle] Saved connection for next startup");
    } catch (e) {
      console.error("[oracle] Could not save last connection:", e instanceof Error ? e.message : e);
    }
  }

  private initDriver(): void {
    if (this.driverInitialized) return;
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = false;
    oracledb.fetchArraySize = this.config.fetchSize;
    // Auto-materialize CLOBs as strings (avoids Lob objects in query results)
    oracledb.fetchAsString = [oracledb.CLOB];

    console.error(`[oracle] useThickMode=${this.config.useThickMode}, clientLibDir=${this.config.clientLibDir}, ORACLE_OLD_CRYPTO=${process.env.ORACLE_OLD_CRYPTO}`);

    if (this.config.useThickMode) {
      // Normalize path separators — on Windows, backslashes can cause DLL loading failures
      const libDir = this.config.clientLibDir?.replace(/\\/g, "/");
      const opts = libDir ? { libDir } : undefined;
      console.error("[oracle] Calling initOracleClient with opts:", JSON.stringify(opts));
      try {
        oracledb.initOracleClient(opts);
        console.error("[oracle] Thick mode initialized successfully");
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        // "already initialized" is fine — means a previous call succeeded
        if (msg.includes("already") || msg.includes("NJS-077")) {
          console.error("[oracle] Thick mode was already initialized (OK)");
        } else {
          console.error("[oracle] Thick mode init FAILED:", msg);
          throw new Error(`Thick mode initialization failed: ${msg}`);
        }
      }
    }
    this.driverInitialized = true;
  }

  private getConnectString(): string {
    // 1. TNS alias
    if (this.config.tnsAlias) {
      const { entries } = loadTnsEntries(process.env.TNS_NAMES_FILE);
      const entry = entries.find(e => e.alias === this.config.tnsAlias!.toUpperCase());
      if (entry) return entry.raw;
      // If not found in file, return alias directly (oracledb will resolve from TNS_ADMIN)
      return this.config.tnsAlias;
    }
    // 2. Explicit connection string
    if (this.config.connectionString) return this.config.connectionString;
    // 3. Build from host/port/service
    return `(DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(HOST=${this.config.host})(PORT=${this.config.port}))(CONNECT_DATA=(SERVICE_NAME=${this.config.serviceName})))`;
  }

  private async ensurePool(): Promise<oracledb.Pool> {
    if (this.pool) return this.pool;
    poolCounter++;
    this.pool = await oracledb.createPool({
      user: this.config.username,
      password: this.config.password,
      connectString: this.getConnectString(),
      poolMin: this.config.poolMin,
      poolMax: this.config.poolMax,
      poolIncrement: 1,
      poolTimeout: this.config.poolTimeout,
      stmtCacheSize: this.config.stmtCacheSize,
      poolAlias: `apex_mcp_pool_${poolCounter}`,
    });
    return this.pool;
  }

  async close(): Promise<void> {
    if (this.pool) {
      try { await this.pool.close(5); } catch { /* ignore */ }
      this.pool = null;
    }
  }

  /**
   * Reconfigure the service to connect to a different database.
   * Closes any existing pool first.
   */
  async reconfigure(params: ConnectionParams): Promise<void> {
    await this.close();
    this.versionDetected = false;
    this.detectedVersion = { apex: null, apexFull: null, db: null, dbFull: null };

    if (params.mode === "tns") {
      this.config.tnsAlias = params.tnsAlias;
      this.config.connectionString = undefined;
      this.activeAlias = params.tnsAlias?.toUpperCase() ?? null;
    } else if (params.mode === "connection_string") {
      this.config.tnsAlias = undefined;
      this.config.connectionString = params.connectionString;
      this.activeAlias = null;
    } else {
      this.config.tnsAlias = undefined;
      this.config.connectionString = undefined;
      this.config.host = params.host ?? "localhost";
      this.config.port = params.port ?? 1521;
      this.config.serviceName = params.serviceName ?? "XE";
      this.activeAlias = null;
    }

    this.config.username = params.username;
    this.config.password = params.password;
  }

  getActiveConnection(): string {
    if (this.activeAlias) return `TNS: ${this.activeAlias}`;
    if (this.config.tnsAlias) return `TNS: ${this.config.tnsAlias}`;
    if (this.config.connectionString) return `String: ${this.config.connectionString.substring(0, 80)}...`;
    return `${this.config.host}:${this.config.port}/${this.config.serviceName}`;
  }

  isConnected(): boolean {
    return this.pool !== null;
  }

  /** Parse major.minor from version strings like "20.2.0.00.20" -> "20.2" */
  private parseShortVersion(full: string): string {
    const m = full.match(/(\d+\.\d+)/);
    return m ? m[1] : full;
  }

  /** Parse DB version from banner like "Oracle Database 12c Release 12.1.0.2.0" -> "12.1" */
  private parseDbVersion(banner: string): string {
    // Try to find version pattern like 12.1.0.2.0, 19.0.0.0.0, 23.7.0.25.04
    const m = banner.match(/(\d+\.\d+)\.\d+/);
    return m ? m[1] : "unknown";
  }

  /** Detect APEX and DB versions on first connection */
  private async detectVersions(conn: { execute(sql: string, binds?: Record<string, unknown>, options?: Record<string, unknown>): Promise<{ rows?: Record<string, unknown>[] }> }): Promise<void> {
    if (this.versionDetected) return;

    try {
      // Detect DB version
      const verRes = await conn.execute("SELECT BANNER FROM V$VERSION WHERE ROWNUM = 1");
      const verRows = (verRes.rows ?? []) as Record<string, string>[];
      if (verRows[0]?.BANNER) {
        this.detectedVersion.dbFull = verRows[0].BANNER;
        this.detectedVersion.db = this.parseDbVersion(verRows[0].BANNER);
      }
    } catch { /* V$VERSION may not be accessible */ }

    try {
      // Detect APEX version
      const apexRes = await conn.execute("SELECT VERSION_NO FROM APEX_RELEASE WHERE ROWNUM = 1");
      const apexRows = (apexRes.rows ?? []) as Record<string, string>[];
      if (apexRows[0]?.VERSION_NO) {
        this.detectedVersion.apexFull = apexRows[0].VERSION_NO;
        this.detectedVersion.apex = this.parseShortVersion(apexRows[0].VERSION_NO);
      }
    } catch { /* APEX may not be installed */ }

    this.versionDetected = true;
    console.error(`[oracle] Detected versions — DB: ${this.detectedVersion.db} (${this.detectedVersion.dbFull}), APEX: ${this.detectedVersion.apex} (${this.detectedVersion.apexFull})`);
  }

  /** Get detected version info */
  getVersionInfo(): VersionInfo {
    return { ...this.detectedVersion };
  }

  /** Get APEX major.minor version as number for comparisons (e.g., 20.2 -> 20.2, 24.2 -> 24.2) */
  getApexVersionNum(): number {
    return this.detectedVersion.apex ? parseFloat(this.detectedVersion.apex) : 0;
  }

  /** Get DB major.minor version as number */
  getDbVersionNum(): number {
    return this.detectedVersion.db ? parseFloat(this.detectedVersion.db) : 0;
  }

  /** Check if APEX version is at least the given version */
  isApexAtLeast(version: number): boolean {
    return this.getApexVersionNum() >= version;
  }

  /** Check if DB version is at least the given version */
  isDbAtLeast(version: number): boolean {
    return this.getDbVersionNum() >= version;
  }

  async healthCheck(): Promise<HealthStatus> {
    const status: HealthStatus = {
      oracle: { connected: false, version: null, user: null, schema: null, poolOpen: 0, poolInUse: 0 },
      apex: { available: false, version: null, workspace: null },
    };

    try {
      const pool = await this.ensurePool();
      const conn = await pool.getConnection();
      try {
        // Detect versions on first connection
        await this.detectVersions(conn);

        const verRes = await conn.execute("SELECT BANNER FROM V$VERSION WHERE ROWNUM = 1");
        const sesRes = await conn.execute(
          "SELECT SYS_CONTEXT('USERENV','SESSION_USER') AS U, SYS_CONTEXT('USERENV','CURRENT_SCHEMA') AS S FROM DUAL"
        );
        status.oracle.connected = true;
        const verRows = (verRes.rows ?? []) as Record<string, string>[];
        status.oracle.version = verRows[0]?.BANNER ?? null;
        const sesRows = (sesRes.rows ?? []) as Record<string, string>[];
        status.oracle.user = sesRows[0]?.U ?? null;
        status.oracle.schema = sesRows[0]?.S ?? null;

        const ps = pool as unknown as { connectionsOpen?: number; connectionsInUse?: number };
        status.oracle.poolOpen = ps.connectionsOpen ?? 0;
        status.oracle.poolInUse = ps.connectionsInUse ?? 0;

        if (this.detectedVersion.apex) {
          status.apex.available = true;
          status.apex.version = this.detectedVersion.apexFull;
        }

        try {
          const wsRes = await conn.execute(
            "SELECT WORKSPACE_DISPLAY_NAME AS W FROM APEX_WORKSPACE_SCHEMAS WHERE SCHEMA = SYS_CONTEXT('USERENV','CURRENT_SCHEMA') AND ROWNUM = 1"
          );
          const wsRows = (wsRes.rows ?? []) as Record<string, string>[];
          status.apex.workspace = wsRows[0]?.W ?? null;
          if (!status.apex.workspace) {
            // Fallback: try first workspace (schema might not be mapped)
            const wsFallback = await conn.execute("SELECT WORKSPACE AS W FROM APEX_WORKSPACES WHERE WORKSPACE != 'INTERNAL' AND ROWNUM = 1");
            const wsFallbackRows = (wsFallback.rows ?? []) as Record<string, string>[];
            status.apex.workspace = wsFallbackRows[0]?.W ?? null;
          }
        } catch (_wsErr) { /* workspace view may not be accessible */ }

        status.versionInfo = { ...this.detectedVersion };
      } finally {
        await conn.close();
      }
    } catch (e) {
      status.oracle.version = friendlyOracleError(e);
    }

    return status;
  }

  async query(sql: string, binds: Record<string, unknown> = {}, maxRows = DEFAULT_MAX_ROWS): Promise<QueryResult> {
    const pool = await this.ensurePool();
    const conn = await pool.getConnection();
    try {
      if (!this.versionDetected) await this.detectVersions(conn);
      const result = await conn.execute(sql, binds, {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
        maxRows: maxRows + 1,
        fetchArraySize: this.config.fetchSize,
      });

      const allRows = (result.rows ?? []) as Record<string, unknown>[];
      const hasMore = allRows.length > maxRows;
      const rows = hasMore ? allRows.slice(0, maxRows) : allRows;

      const columns: ColumnMeta[] = (result.metaData ?? []).map((m: any) => ({
        name: m.name,
        dbTypeName: String((m as Record<string, unknown>).dbTypeName ?? "UNKNOWN"),
        nullable: Boolean((m as Record<string, unknown>).nullable ?? true),
        precision: (m as Record<string, unknown>).precision as number | undefined,
        scale: (m as Record<string, unknown>).scale as number | undefined,
        maxSize: (m as Record<string, unknown>).byteSize as number | undefined,
      }));

      return { columns, rows, rowCount: rows.length, hasMore };
    } catch (e) {
      throw new Error(friendlyOracleError(e));
    } finally {
      await conn.close();
    }
  }

  async execute(sql: string, binds: Record<string, unknown> = {}, autoCommit = true): Promise<ExecuteResult> {
    const pool = await this.ensurePool();
    const conn = await pool.getConnection();
    try {
      const result = await conn.execute(sql, binds, {
        autoCommit,
        outFormat: oracledb.OUT_FORMAT_OBJECT,
      });
      return {
        rowsAffected: result.rowsAffected ?? 0,
        lastRowid: result.lastRowid,
        outBinds: result.outBinds as Record<string, unknown> | undefined,
      };
    } catch (e) {
      throw new Error(friendlyOracleError(e));
    } finally {
      await conn.close();
    }
  }

  async transaction(statements: string[], rollbackOnError = true): Promise<TransactionResult> {
    const pool = await this.ensurePool();
    const conn = await pool.getConnection();
    const steps: TransactionStepResult[] = [];
    let totalRows = 0;
    let committed = false;

    try {
      for (let i = 0; i < statements.length; i++) {
        const sql = statements[i];
        try {
          const sqlType = classifySql(sql);
          if (sqlType === "SELECT") {
            await conn.execute(sql, {}, { outFormat: oracledb.OUT_FORMAT_OBJECT });
            steps.push({ index: i, sql, success: true, rowsAffected: 0 });
          } else {
            const res = await conn.execute(sql, {}, { autoCommit: false });
            const affected = res.rowsAffected ?? 0;
            totalRows += affected;
            steps.push({ index: i, sql, success: true, rowsAffected: affected });
          }
        } catch (e) {
          steps.push({ index: i, sql, success: false, error: friendlyOracleError(e) });
          if (rollbackOnError) {
            await conn.execute("ROLLBACK");
            return { committed: false, steps, totalRowsAffected: totalRows };
          }
        }
      }
      await conn.commit();
      committed = true;
      return { committed, steps, totalRowsAffected: totalRows };
    } catch (e) {
      try { await conn.execute("ROLLBACK"); } catch (_rb) { /* ignore rollback error */ }
      throw new Error(friendlyOracleError(e));
    } finally {
      await conn.close();
    }
  }

  async queryRows<T = Record<string, unknown>>(sql: string, binds: Record<string, unknown> = {}): Promise<T[]> {
    const pool = await this.ensurePool();
    const conn = await pool.getConnection();
    try {
      if (!this.versionDetected) await this.detectVersions(conn);
      const result = await conn.execute(sql, binds, {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
        maxRows: 10_000,
      });
      return (result.rows ?? []) as T[];
    } catch (e) {
      throw new Error(friendlyOracleError(e));
    } finally {
      await conn.close();
    }
  }

  getConfig(): Readonly<OracleConfig> {
    return Object.freeze({ ...this.config, password: "***" });
  }
}
