import oracledb from "oracledb";
import type {
  OracleConfig, QueryResult, ExecuteResult, TransactionResult,
  TransactionStepResult, ColumnMeta, HealthStatus
} from "../types.js";
import {
  DEFAULT_POOL_MIN, DEFAULT_POOL_MAX, DEFAULT_POOL_TIMEOUT,
  DEFAULT_FETCH_SIZE, DEFAULT_MAX_ROWS
} from "../constants.js";
import { friendlyOracleError, classifySql } from "../utils/helpers.js";

export class OracleService {
  private config: OracleConfig;
  private pool: oracledb.Pool | null = null;

  constructor() {
    this.config = this.loadConfig();
    this.initDriver();
  }

  // ─── Config ──────────────────────────────────────────────────────────────────

  private loadConfig(): OracleConfig {
    return {
      host: process.env.ORACLE_HOST ?? "localhost",
      port: parseInt(process.env.ORACLE_PORT ?? "1521", 10),
      serviceName: process.env.ORACLE_SERVICE_NAME ?? "XE",
      username: process.env.ORACLE_USERNAME ?? process.env.ORACLE_USER ?? "hr",
      password: process.env.ORACLE_PASSWORD ?? "",
      connectionString: process.env.ORACLE_CONNECTION_STRING,
      poolMin: parseInt(process.env.ORACLE_POOL_MIN ?? String(DEFAULT_POOL_MIN), 10),
      poolMax: parseInt(process.env.ORACLE_POOL_MAX ?? String(DEFAULT_POOL_MAX), 10),
      poolTimeout: parseInt(process.env.ORACLE_POOL_TIMEOUT ?? String(DEFAULT_POOL_TIMEOUT), 10),
      stmtCacheSize: parseInt(process.env.ORACLE_STMT_CACHE_SIZE ?? "30", 10),
      fetchSize: parseInt(process.env.ORACLE_FETCH_SIZE ?? String(DEFAULT_FETCH_SIZE), 10),
      useThickMode: process.env.ORACLE_OLD_CRYPTO === "true",
      clientLibDir: process.env.ORACLE_CLIENT_LIB_DIR,
    };
  }

  private initDriver(): void {
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracledb.autoCommit = false;
    oracledb.fetchArraySize = this.config.fetchSize;

    if (this.config.useThickMode) {
      try {
        const opts = this.config.clientLibDir ? { libDir: this.config.clientLibDir } : undefined;
        oracledb.initOracleClient(opts);
        console.error("[oracle] Thick mode initialized");
      } catch (e: unknown) {
        console.error("[oracle] Thick mode init failed, falling back to Thin:", e instanceof Error ? e.message : e);
      }
    }
  }

  private getConnectString(): string {
    if (this.config.connectionString) return this.config.connectionString;
    return `(DESCRIPTION=(ADDRESS=(PROTOCOL=tcp)(HOST=${this.config.host})(PORT=${this.config.port}))(CONNECT_DATA=(SERVICE_NAME=${this.config.serviceName})))`;
  }

  // ─── Pool Management ─────────────────────────────────────────────────────────

  private async ensurePool(): Promise<oracledb.Pool> {
    if (this.pool) return this.pool;
    this.pool = await oracledb.createPool({
      user: this.config.username,
      password: this.config.password,
      connectString: this.getConnectString(),
      poolMin: this.config.poolMin,
      poolMax: this.config.poolMax,
      poolIncrement: 1,
      poolTimeout: this.config.poolTimeout,
      stmtCacheSize: this.config.stmtCacheSize,
      poolAlias: "apex_mcp_pool",
    });
    return this.pool;
  }

  async close(): Promise<void> {
    if (this.pool) {
      await this.pool.close(10);
      this.pool = null;
    }
  }

  // ─── Health Check ────────────────────────────────────────────────────────────

  async healthCheck(): Promise<HealthStatus> {
    const status: HealthStatus = {
      oracle: { connected: false, version: null, user: null, schema: null, poolOpen: 0, poolInUse: 0 },
      apex: { available: false, version: null, workspace: null },
    };

    try {
      const pool = await this.ensurePool();
      const conn = await pool.getConnection();
      try {
        // Oracle info
        const verRes = await conn.execute<{ BANNER: string }>("SELECT BANNER FROM V$VERSION WHERE ROWNUM = 1");
        const sesRes = await conn.execute<{ U: string; S: string }>(
          "SELECT SYS_CONTEXT('USERENV','SESSION_USER') AS U, SYS_CONTEXT('USERENV','CURRENT_SCHEMA') AS S FROM DUAL"
        );
        status.oracle.connected = true;
        status.oracle.version = (verRes.rows as { BANNER: string }[])?.[0]?.BANNER ?? null;
        const ses = (sesRes.rows as { U: string; S: string }[])?.[0];
        status.oracle.user = ses?.U ?? null;
        status.oracle.schema = ses?.S ?? null;

        const ps = pool as unknown as { connectionsOpen?: number; connectionsInUse?: number };
        status.oracle.poolOpen = ps.connectionsOpen ?? 0;
        status.oracle.poolInUse = ps.connectionsInUse ?? 0;

        // APEX check
        try {
          const apexRes = await conn.execute<{ V: string }>(
            "SELECT VERSION_NO AS V FROM APEX_RELEASE WHERE ROWNUM = 1"
          );
          const apexRow = (apexRes.rows as { V: string }[])?.[0];
          if (apexRow) {
            status.apex.available = true;
            status.apex.version = apexRow.V;
          }
          const wsRes = await conn.execute<{ W: string }>(
            "SELECT WORKSPACE AS W FROM APEX_WORKSPACES WHERE ROWNUM = 1"
          );
          status.apex.workspace = (wsRes.rows as { W: string }[])?.[0]?.W ?? null;
        } catch {
          // APEX views not available — that's OK
        }
      } finally {
        await conn.close();
      }
    } catch (e) {
      status.oracle.version = friendlyOracleError(e);
    }

    return status;
  }

  // ─── Query (read-only) ───────────────────────────────────────────────────────

  async query(sql: string, binds: Record<string, unknown> = {}, maxRows = DEFAULT_MAX_ROWS): Promise<QueryResult> {
    const pool = await this.ensurePool();
    const conn = await pool.getConnection();
    try {
      const result = await conn.execute(sql, binds, {
        outFormat: oracledb.OUT_FORMAT_OBJECT,
        maxRows: maxRows + 1, // fetch one extra to know if there's more
        fetchArraySize: this.config.fetchSize,
        extendedMetaData: true,
      });

      const allRows = (result.rows ?? []) as Record<string, unknown>[];
      const hasMore = allRows.length > maxRows;
      const rows = hasMore ? allRows.slice(0, maxRows) : allRows;

      const columns: ColumnMeta[] = (result.metaData ?? []).map((m: oracledb.Metadata) => ({
        name: m.name,
        dbTypeName: (m as unknown as Record<string, string>).dbTypeName ?? "UNKNOWN",
        nullable: (m as unknown as Record<string, boolean>).nullable ?? true,
        precision: (m as unknown as Record<string, number>).precision,
        scale: (m as unknown as Record<string, number>).scale,
        maxSize: (m as unknown as Record<string, number>).byteSize,
      }));

      return { columns, rows, rowCount: rows.length, hasMore };
    } catch (e) {
      throw new Error(friendlyOracleError(e));
    } finally {
      await conn.close();
    }
  }

  // ─── Execute (DML / DDL / PL/SQL) ────────────────────────────────────────────

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

  // ─── Transaction (multi-statement) ────────────────────────────────────────────

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
            // Read within transaction — just execute, don't count rows
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
      try { await conn.execute("ROLLBACK"); } catch { /* ignore */ }
      throw new Error(friendlyOracleError(e));
    } finally {
      await conn.close();
    }
  }

  // ─── Convenience: Run arbitrary SQL returning rows ───────────────────────────

  async queryRows<T = Record<string, unknown>>(sql: string, binds: Record<string, unknown> = {}): Promise<T[]> {
    const pool = await this.ensurePool();
    const conn = await pool.getConnection();
    try {
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
