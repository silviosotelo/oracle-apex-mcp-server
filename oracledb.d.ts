declare module "oracledb" {
  interface PoolAttributes {
    user?: string;
    password?: string;
    connectString?: string;
    poolMin?: number;
    poolMax?: number;
    poolIncrement?: number;
    poolTimeout?: number;
    stmtCacheSize?: number;
    poolAlias?: string;
  }

  interface ExecuteOptions {
    outFormat?: number;
    maxRows?: number;
    fetchArraySize?: number;
    autoCommit?: boolean;
  }

  interface MetaData {
    name: string;
    dbTypeName?: string;
    nullable?: boolean;
    precision?: number;
    scale?: number;
    byteSize?: number;
  }

  interface Result<T = Record<string, unknown>> {
    rows?: T[];
    metaData?: MetaData[];
    rowsAffected?: number;
    lastRowid?: string;
    outBinds?: Record<string, unknown>;
  }

  interface Connection {
    execute(sql: string, binds?: Record<string, unknown>, options?: ExecuteOptions): Promise<Result>;
    commit(): Promise<void>;
    close(): Promise<void>;
  }

  export interface Pool {
    getConnection(): Promise<Connection>;
    close(drainTime?: number): Promise<void>;
    connectionsOpen?: number;
    connectionsInUse?: number;
  }

  namespace oracledb {
    export { Pool };
  }

  interface OracleDb {
    OUT_FORMAT_OBJECT: number;
    CLOB: number;
    outFormat: number;
    autoCommit: boolean;
    fetchArraySize: number;
    fetchAsString: number[];
    createPool(attrs: PoolAttributes): Promise<Pool>;
    initOracleClient(opts?: { libDir?: string }): void;
  }

  const oracledb: OracleDb;
  export default oracledb;
}
