# Oracle Database APIs - Complete Reference

> **Purpose**: Complete reference for Oracle Database PL/SQL packages and SQL features commonly used with Oracle APEX.
> Oracle 12c+ compatible.

---

## Table of Contents

1. [DBMS_LOB](#dbms_lob)
2. [DBMS_SQL](#dbms_sql)
3. [DBMS_METADATA](#dbms_metadata)
4. [DBMS_SESSION / DBMS_APPLICATION_INFO](#dbms_session--dbms_application_info)
5. [DBMS_SCHEDULER](#dbms_scheduler)
6. [DBMS_OUTPUT](#dbms_output)
7. [DBMS_CRYPTO](#dbms_crypto)
8. [UTL_RAW](#utl_raw)
9. [UTL_ENCODE](#utl_encode)
10. [UTL_URL](#utl_url)
11. [UTL_HTTP](#utl_http)
12. [UTL_FILE](#utl_file)
13. [JSON_OBJECT_T / JSON_ARRAY_T (12c+)](#json_object_t--json_array_t-12c)
14. [JSON_TABLE and IS JSON](#json_table-and-is-json)
15. [REGEXP Functions](#regexp-functions)
16. [Analytic Functions](#analytic-functions)
17. [DBMS_STATS](#dbms_stats)
18. [Dictionary Views](#dictionary-views)
19. [Combined PL/SQL + JS Patterns](#combined-plsql--js-patterns)

---

## DBMS_LOB

Large Object manipulation. Essential for CLOBs and BLOBs in APEX.

### Key Functions

```sql
-- Get LOB length
DBMS_LOB.GETLENGTH(lob_loc IN CLOB/BLOB) RETURN INTEGER;

-- Read substring (VARCHAR2 return, max 32767 chars for CLOB, 2000 bytes for UTL_RAW)
DBMS_LOB.SUBSTR(
    lob_loc IN CLOB/BLOB,
    amount  IN INTEGER := 32767,  -- chars for CLOB, bytes for BLOB
    offset  IN INTEGER := 1       -- 1-based position
) RETURN VARCHAR2/RAW;
-- NOTE: For BLOB, max amount is 32767 bytes but UTL_RAW.CAST_TO_VARCHAR2 max is 2000

-- Write/append to LOB
DBMS_LOB.WRITEAPPEND(
    lob_loc IN OUT NOCOPY CLOB/BLOB,
    amount  IN            INTEGER,
    buffer  IN            VARCHAR2/RAW
);

-- Create temporary LOB
DBMS_LOB.CREATETEMPORARY(
    lob_loc IN OUT NOCOPY CLOB/BLOB,
    cache   IN            BOOLEAN := TRUE,
    dur     IN            PLS_INTEGER := DBMS_LOB.SESSION
);

-- Free temporary LOB
DBMS_LOB.FREETEMPORARY(lob_loc IN OUT NOCOPY CLOB/BLOB);

-- Check if temporary
DBMS_LOB.ISTEMPORARY(lob_loc IN CLOB/BLOB) RETURN INTEGER;  -- 1=temp, 0=persistent

-- Copy between LOBs
DBMS_LOB.COPY(
    dest_lob    IN OUT NOCOPY CLOB/BLOB,
    src_lob     IN            CLOB/BLOB,
    amount      IN            INTEGER,
    dest_offset IN            INTEGER := 1,
    src_offset  IN            INTEGER := 1
);

-- Compare LOBs
DBMS_LOB.COMPARE(
    lob_1   IN CLOB/BLOB,
    lob_2   IN CLOB/BLOB,
    amount  IN INTEGER := DBMS_LOB.LOBMAXSIZE,
    offset_1 IN INTEGER := 1,
    offset_2 IN INTEGER := 1
) RETURN INTEGER;  -- 0=equal, non-zero=different

-- Search in LOB
DBMS_LOB.INSTR(
    lob_loc IN CLOB/BLOB,
    pattern IN VARCHAR2/RAW,
    offset  IN INTEGER := 1,
    nth     IN INTEGER := 1
) RETURN INTEGER;  -- position found, 0=not found

-- Trim LOB
DBMS_LOB.TRIM(
    lob_loc    IN OUT NOCOPY CLOB/BLOB,
    newlen     IN            INTEGER
);

-- Erase LOB content
DBMS_LOB.ERASE(
    lob_loc IN OUT NOCOPY CLOB/BLOB,
    amount  IN OUT         INTEGER,
    offset  IN             INTEGER := 1
);

-- Open/close (for performance with multiple operations)
DBMS_LOB.OPEN(lob_loc IN OUT NOCOPY CLOB/BLOB, open_mode IN BINARY_INTEGER);
DBMS_LOB.CLOSE(lob_loc IN OUT NOCOPY CLOB/BLOB);

-- Constants
DBMS_LOB.LOB_READONLY   -- 0
DBMS_LOB.LOB_READWRITE  -- 1
DBMS_LOB.SESSION         -- 10 (temporary LOB duration)
DBMS_LOB.CALL            -- 12 (temporary LOB duration)
DBMS_LOB.LOBMAXSIZE      -- max LOB size
```

### Chunk Reading Pattern (Read Large CLOB in Pieces)

```sql
DECLARE
    l_clob   CLOB;
    l_chunk  VARCHAR2(32767);
    l_offset INTEGER := 1;
    l_amount INTEGER := 32000;  -- safe chunk size
    l_length INTEGER;
BEGIN
    SELECT my_clob_col INTO l_clob FROM my_table WHERE id = 1;
    l_length := DBMS_LOB.GETLENGTH(l_clob);

    WHILE l_offset <= l_length LOOP
        l_amount := LEAST(32000, l_length - l_offset + 1);
        l_chunk := DBMS_LOB.SUBSTR(l_clob, l_amount, l_offset);

        -- Process chunk here
        -- e.g., DBMS_LOB.WRITEAPPEND(l_dest_clob, LENGTH(l_chunk), l_chunk);

        l_offset := l_offset + l_amount;
    END LOOP;
END;
```

### Build a CLOB from VARCHAR2 Pieces

```sql
DECLARE
    l_clob CLOB;
BEGIN
    DBMS_LOB.CREATETEMPORARY(l_clob, TRUE);

    DBMS_LOB.WRITEAPPEND(l_clob, LENGTH('First part'), 'First part');
    DBMS_LOB.WRITEAPPEND(l_clob, LENGTH('Second part'), 'Second part');

    -- Use l_clob...

    DBMS_LOB.FREETEMPORARY(l_clob);
END;
```

---

## DBMS_SQL

Dynamic SQL execution with full cursor control.

```sql
DECLARE
    l_cursor   INTEGER;
    l_status   INTEGER;
    l_col_cnt  INTEGER;
    l_desc_tab DBMS_SQL.DESC_TAB;
    l_value    VARCHAR2(4000);
BEGIN
    -- Open cursor
    l_cursor := DBMS_SQL.OPEN_CURSOR;

    -- Parse SQL
    DBMS_SQL.PARSE(l_cursor, 'SELECT * FROM employees WHERE dept_id = :d', DBMS_SQL.NATIVE);

    -- Bind variables
    DBMS_SQL.BIND_VARIABLE(l_cursor, ':d', 10);

    -- Describe columns (get metadata)
    DBMS_SQL.DESCRIBE_COLUMNS(l_cursor, l_col_cnt, l_desc_tab);

    FOR i IN 1..l_col_cnt LOOP
        -- l_desc_tab(i).col_name      -- column name
        -- l_desc_tab(i).col_type      -- column type (1=VARCHAR2, 2=NUMBER, 12=DATE, 112=CLOB)
        -- l_desc_tab(i).col_max_len   -- max length
        -- l_desc_tab(i).col_precision -- precision
        -- l_desc_tab(i).col_scale     -- scale
        DBMS_SQL.DEFINE_COLUMN(l_cursor, i, l_value, 4000);
    END LOOP;

    -- Execute
    l_status := DBMS_SQL.EXECUTE(l_cursor);

    -- Fetch rows
    WHILE DBMS_SQL.FETCH_ROWS(l_cursor) > 0 LOOP
        FOR i IN 1..l_col_cnt LOOP
            DBMS_SQL.COLUMN_VALUE(l_cursor, i, l_value);
            -- Process l_value for column l_desc_tab(i).col_name
        END LOOP;
    END LOOP;

    -- Close cursor
    DBMS_SQL.CLOSE_CURSOR(l_cursor);
EXCEPTION
    WHEN OTHERS THEN
        IF DBMS_SQL.IS_OPEN(l_cursor) THEN
            DBMS_SQL.CLOSE_CURSOR(l_cursor);
        END IF;
        RAISE;
END;
```

### Column Type Constants

| Code | Type |
|------|------|
| 1 | VARCHAR2 |
| 2 | NUMBER |
| 8 | LONG |
| 12 | DATE |
| 23 | RAW |
| 96 | CHAR |
| 112 | CLOB |
| 113 | BLOB |
| 180 | TIMESTAMP |
| 181 | TIMESTAMP WITH TIMEZONE |

---

## DBMS_METADATA

Extract DDL for database objects.

```sql
-- Get DDL for specific object types
SELECT DBMS_METADATA.GET_DDL('TABLE', 'EMPLOYEES', 'SCHEMA_NAME') FROM DUAL;
SELECT DBMS_METADATA.GET_DDL('VIEW', 'EMP_VIEW', 'SCHEMA_NAME') FROM DUAL;
SELECT DBMS_METADATA.GET_DDL('PACKAGE', 'PKG_EMPLOYEES', 'SCHEMA_NAME') FROM DUAL;
SELECT DBMS_METADATA.GET_DDL('PACKAGE_BODY', 'PKG_EMPLOYEES', 'SCHEMA_NAME') FROM DUAL;
SELECT DBMS_METADATA.GET_DDL('PROCEDURE', 'MY_PROC', 'SCHEMA_NAME') FROM DUAL;
SELECT DBMS_METADATA.GET_DDL('FUNCTION', 'MY_FUNC', 'SCHEMA_NAME') FROM DUAL;
SELECT DBMS_METADATA.GET_DDL('TRIGGER', 'MY_TRIGGER', 'SCHEMA_NAME') FROM DUAL;
SELECT DBMS_METADATA.GET_DDL('INDEX', 'MY_INDEX', 'SCHEMA_NAME') FROM DUAL;
SELECT DBMS_METADATA.GET_DDL('SEQUENCE', 'MY_SEQ', 'SCHEMA_NAME') FROM DUAL;
SELECT DBMS_METADATA.GET_DDL('SYNONYM', 'MY_SYN', 'SCHEMA_NAME') FROM DUAL;

-- Set transform options (cleaner output)
BEGIN
    DBMS_METADATA.SET_TRANSFORM_PARAM(DBMS_METADATA.SESSION_TRANSFORM, 'STORAGE', FALSE);
    DBMS_METADATA.SET_TRANSFORM_PARAM(DBMS_METADATA.SESSION_TRANSFORM, 'TABLESPACE', FALSE);
    DBMS_METADATA.SET_TRANSFORM_PARAM(DBMS_METADATA.SESSION_TRANSFORM, 'SEGMENT_ATTRIBUTES', FALSE);
    DBMS_METADATA.SET_TRANSFORM_PARAM(DBMS_METADATA.SESSION_TRANSFORM, 'SQLTERMINATOR', TRUE);
    DBMS_METADATA.SET_TRANSFORM_PARAM(DBMS_METADATA.SESSION_TRANSFORM, 'PRETTY', TRUE);
END;

-- Get dependent DDL (indexes, constraints for a table)
SELECT DBMS_METADATA.GET_DEPENDENT_DDL('INDEX', 'EMPLOYEES', 'SCHEMA_NAME') FROM DUAL;
SELECT DBMS_METADATA.GET_DEPENDENT_DDL('CONSTRAINT', 'EMPLOYEES', 'SCHEMA_NAME') FROM DUAL;
SELECT DBMS_METADATA.GET_DEPENDENT_DDL('REF_CONSTRAINT', 'EMPLOYEES', 'SCHEMA_NAME') FROM DUAL;

-- Get granted DDL
SELECT DBMS_METADATA.GET_GRANTED_DDL('OBJECT_GRANT', 'SCHEMA_NAME') FROM DUAL;
SELECT DBMS_METADATA.GET_GRANTED_DDL('SYSTEM_GRANT', 'SCHEMA_NAME') FROM DUAL;
```

---

## DBMS_SESSION / DBMS_APPLICATION_INFO

Set application context for tracing and monitoring.

```sql
-- Set module and action (visible in V$SESSION)
DBMS_APPLICATION_INFO.SET_MODULE(
    module_name => 'APEX_APP_400',
    action_name => 'PAGE_10_SAVE'
);

-- Set action only
DBMS_APPLICATION_INFO.SET_ACTION(
    action_name => 'PROCESSING_PAYROLL'
);

-- Set client info
DBMS_APPLICATION_INFO.SET_CLIENT_INFO(
    client_info => 'User: JDOE, IP: 192.168.1.100'
);

-- Read back
DBMS_APPLICATION_INFO.READ_MODULE(l_module, l_action);
DBMS_APPLICATION_INFO.READ_CLIENT_INFO(l_client_info);

-- Set session context (for VPD / Fine-Grained Access Control)
DBMS_SESSION.SET_CONTEXT(
    namespace => 'MY_CTX',
    attribute => 'COMPANY_ID',
    value     => '100'
);
-- Read: SYS_CONTEXT('MY_CTX', 'COMPANY_ID')

-- Clear context
DBMS_SESSION.CLEAR_CONTEXT(
    namespace => 'MY_CTX',
    attribute => 'COMPANY_ID'  -- NULL to clear all in namespace
);

-- Other useful session operations
DBMS_SESSION.SET_NLS('NLS_DATE_FORMAT', '''DD/MM/YYYY''');
DBMS_SESSION.UNIQUE_SESSION_ID;  -- returns unique identifier
```

---

## DBMS_SCHEDULER

Job scheduling. Replacement for DBMS_JOB.

### Create Job

```sql
-- One-time job
DBMS_SCHEDULER.CREATE_JOB(
    job_name        => 'MY_JOB',
    job_type        => 'PLSQL_BLOCK',
    job_action      => 'BEGIN my_procedure; END;',
    start_date      => SYSTIMESTAMP,
    enabled         => TRUE
);

-- Recurring job
DBMS_SCHEDULER.CREATE_JOB(
    job_name        => 'DAILY_REPORT_JOB',
    job_type        => 'STORED_PROCEDURE',
    job_action      => 'PKG_REPORTS.GENERATE_DAILY',
    number_of_arguments => 0,
    start_date      => SYSTIMESTAMP,
    repeat_interval => 'FREQ=DAILY; BYHOUR=6; BYMINUTE=0; BYSECOND=0',
    end_date        => NULL,
    enabled         => TRUE,
    auto_drop       => FALSE,
    comments        => 'Generate daily report at 6 AM'
);
```

### Repeat Interval Patterns

```sql
-- Every day at 6 AM
'FREQ=DAILY; BYHOUR=6; BYMINUTE=0; BYSECOND=0'

-- Every hour
'FREQ=HOURLY; INTERVAL=1'

-- Every 30 minutes
'FREQ=MINUTELY; INTERVAL=30'

-- Every Monday at 9 AM
'FREQ=WEEKLY; BYDAY=MON; BYHOUR=9; BYMINUTE=0'

-- First day of every month at midnight
'FREQ=MONTHLY; BYMONTHDAY=1; BYHOUR=0; BYMINUTE=0'

-- Every 5 seconds (for testing only!)
'FREQ=SECONDLY; INTERVAL=5'

-- Weekdays only at 8 AM
'FREQ=WEEKLY; BYDAY=MON,TUE,WED,THU,FRI; BYHOUR=8; BYMINUTE=0'

-- Last day of every month
'FREQ=MONTHLY; BYMONTHDAY=-1; BYHOUR=23; BYMINUTE=59'
```

### Manage Jobs

```sql
-- Run immediately
DBMS_SCHEDULER.RUN_JOB('MY_JOB', use_current_session => FALSE);

-- Stop a running job
DBMS_SCHEDULER.STOP_JOB('MY_JOB', force => FALSE);

-- Enable/disable
DBMS_SCHEDULER.ENABLE('MY_JOB');
DBMS_SCHEDULER.DISABLE('MY_JOB', force => TRUE);

-- Drop job
DBMS_SCHEDULER.DROP_JOB('MY_JOB', force => TRUE);

-- Modify job
DBMS_SCHEDULER.SET_ATTRIBUTE('MY_JOB', 'repeat_interval', 'FREQ=HOURLY; INTERVAL=2');
DBMS_SCHEDULER.SET_ATTRIBUTE('MY_JOB', 'job_action', 'BEGIN new_procedure; END;');
DBMS_SCHEDULER.SET_ATTRIBUTE('MY_JOB', 'enabled', TRUE);

-- View jobs
SELECT job_name, job_type, state, enabled,
       repeat_interval, last_start_date, next_run_date,
       run_count, failure_count
FROM user_scheduler_jobs
ORDER BY job_name;

-- View job run history
SELECT job_name, status, actual_start_date, run_duration,
       additional_info
FROM user_scheduler_job_run_details
WHERE job_name = 'MY_JOB'
ORDER BY actual_start_date DESC
FETCH FIRST 20 ROWS ONLY;

-- View running jobs
SELECT job_name, session_id, elapsed_time
FROM user_scheduler_running_jobs;
```

---

## DBMS_OUTPUT

Server-side text output. **Only works in SQL*Plus/SQL Developer, NOT in APEX**. Use `apex_debug` in APEX instead.

```sql
-- Enable output (SQL*Plus: SET SERVEROUTPUT ON)
DBMS_OUTPUT.ENABLE(buffer_size => 1000000);  -- max 1MB, NULL = unlimited

-- Write output
DBMS_OUTPUT.PUT_LINE('Hello World');       -- with newline
DBMS_OUTPUT.PUT('No newline');             -- without newline
DBMS_OUTPUT.NEW_LINE;                      -- add newline

-- Read output programmatically
DBMS_OUTPUT.GET_LINE(line => l_line, status => l_status);  -- 0=success, 1=no more lines
DBMS_OUTPUT.GET_LINES(lines => l_lines_tab, numlines => l_count);

-- Disable
DBMS_OUTPUT.DISABLE;
```

---

## DBMS_CRYPTO

Cryptographic functions: hashing and encryption.

### Hashing

```sql
-- Hash a VARCHAR2
DECLARE
    l_hash RAW(64);
BEGIN
    l_hash := DBMS_CRYPTO.HASH(
        src => UTL_RAW.CAST_TO_RAW('text to hash'),
        typ => DBMS_CRYPTO.HASH_SH256
    );
    -- Convert to hex string: RAWTOHEX(l_hash)
END;

-- Hash a CLOB
l_hash := DBMS_CRYPTO.HASH(
    src => l_clob,
    typ => DBMS_CRYPTO.HASH_SH256
);

-- Hash a BLOB
l_hash := DBMS_CRYPTO.HASH(
    src => l_blob,
    typ => DBMS_CRYPTO.HASH_SH256
);
```

### Hash Type Constants

| Constant | Value | Output Size |
|----------|-------|-------------|
| `DBMS_CRYPTO.HASH_MD5` | 2 | 128 bits (16 bytes) |
| `DBMS_CRYPTO.HASH_SH1` | 3 | 160 bits (20 bytes) |
| `DBMS_CRYPTO.HASH_SH256` | 4 | 256 bits (32 bytes) |
| `DBMS_CRYPTO.HASH_SH384` | 5 | 384 bits (48 bytes) |
| `DBMS_CRYPTO.HASH_SH512` | 6 | 512 bits (64 bytes) |

### Encryption

```sql
DECLARE
    l_key       RAW(32);
    l_data      RAW(2000);
    l_encrypted RAW(2000);
    l_decrypted RAW(2000);
    l_typ       PLS_INTEGER;
BEGIN
    -- AES-256 with CBC and PKCS5 padding
    l_typ := DBMS_CRYPTO.ENCRYPT_AES256
           + DBMS_CRYPTO.CHAIN_CBC
           + DBMS_CRYPTO.PAD_PKCS5;

    -- Generate random key (32 bytes for AES-256)
    l_key := DBMS_CRYPTO.RANDOMBYTES(32);

    -- Encrypt
    l_data := UTL_RAW.CAST_TO_RAW('sensitive data');
    l_encrypted := DBMS_CRYPTO.ENCRYPT(
        src => l_data,
        typ => l_typ,
        key => l_key
    );

    -- Decrypt
    l_decrypted := DBMS_CRYPTO.DECRYPT(
        src => l_encrypted,
        typ => l_typ,
        key => l_key
    );
    -- UTL_RAW.CAST_TO_VARCHAR2(l_decrypted) = 'sensitive data'
END;

-- MAC (Message Authentication Code)
l_mac := DBMS_CRYPTO.MAC(
    src => UTL_RAW.CAST_TO_RAW('message'),
    typ => DBMS_CRYPTO.HMAC_SH256,
    key => UTL_RAW.CAST_TO_RAW('secret_key')
);

-- Generate random bytes
l_random := DBMS_CRYPTO.RANDOMBYTES(16);  -- 16 random bytes
l_random_number := DBMS_CRYPTO.RANDOMNUMBER;  -- random NUMBER
l_random_int := DBMS_CRYPTO.RANDOMINTEGER;     -- random INTEGER
```

---

## UTL_RAW

Raw byte manipulation.

```sql
-- Convert VARCHAR2 to RAW
UTL_RAW.CAST_TO_RAW('Hello')
-- Returns: RAW (48656C6C6F)

-- Convert RAW to VARCHAR2
UTL_RAW.CAST_TO_VARCHAR2(HEXTORAW('48656C6C6F'))
-- Returns: 'Hello'
-- NOTE: Max safe size is 2000 bytes for most contexts

-- Concatenate RAW values
UTL_RAW.CONCAT(r1, r2, r3, ...)  -- up to 12 parameters

-- Compare RAW values
UTL_RAW.COMPARE(r1, r2)  -- 0=equal

-- Substring of RAW
UTL_RAW.SUBSTR(r, pos, len)

-- Length of RAW
UTL_RAW.LENGTH(r)

-- Bitwise operations
UTL_RAW.BIT_AND(r1, r2)
UTL_RAW.BIT_OR(r1, r2)
UTL_RAW.BIT_XOR(r1, r2)
UTL_RAW.BIT_COMPLEMENT(r)

-- Translate/Transliterate
UTL_RAW.TRANSLATE(r, from_set, to_set)

-- Reverse
UTL_RAW.REVERSE(r)

-- Copies
UTL_RAW.COPIES(r, n)  -- repeat r n times
```

---

## UTL_ENCODE

Base64 and other encoding/decoding.

```sql
-- Base64 encode RAW
UTL_ENCODE.BASE64_ENCODE(r IN RAW) RETURN RAW;

-- Base64 decode RAW
UTL_ENCODE.BASE64_DECODE(r IN RAW) RETURN RAW;

-- Quoted-printable
UTL_ENCODE.QUOTED_PRINTABLE_ENCODE(r IN RAW) RETURN RAW;
UTL_ENCODE.QUOTED_PRINTABLE_DECODE(r IN RAW) RETURN RAW;

-- MIME header encode/decode
UTL_ENCODE.MIMEHEADER_ENCODE(buf IN VARCHAR2, encode_charset IN VARCHAR2 DEFAULT 'UTF-8') RETURN VARCHAR2;
UTL_ENCODE.MIMEHEADER_DECODE(buf IN VARCHAR2) RETURN VARCHAR2;

-- UUEncode/decode
UTL_ENCODE.UUENCODE(r IN RAW) RETURN RAW;
UTL_ENCODE.UUDECODE(r IN RAW) RETURN RAW;

-- Text encode/decode (for CLOB-friendly operations)
UTL_ENCODE.TEXT_ENCODE(buf IN VARCHAR2, encode_charset IN VARCHAR2 DEFAULT NULL, encoding IN PLS_INTEGER DEFAULT UTL_ENCODE.BASE64) RETURN VARCHAR2;
UTL_ENCODE.TEXT_DECODE(buf IN VARCHAR2, encode_charset IN VARCHAR2 DEFAULT NULL, encoding IN PLS_INTEGER DEFAULT UTL_ENCODE.BASE64) RETURN VARCHAR2;
```

### BLOB to Base64 Pattern

```sql
DECLARE
    l_blob    BLOB;
    l_clob    CLOB;
    l_raw     RAW(32767);
    l_b64     RAW(32767);
    l_offset  INTEGER := 1;
    l_amount  INTEGER := 24000;  -- must be multiple of 3 for Base64
    l_length  INTEGER;
BEGIN
    SELECT file_blob INTO l_blob FROM my_files WHERE id = 1;
    l_length := DBMS_LOB.GETLENGTH(l_blob);
    DBMS_LOB.CREATETEMPORARY(l_clob, TRUE);

    WHILE l_offset <= l_length LOOP
        l_amount := LEAST(24000, l_length - l_offset + 1);
        DBMS_LOB.READ(l_blob, l_amount, l_offset, l_raw);
        l_b64 := UTL_ENCODE.BASE64_ENCODE(l_raw);
        DBMS_LOB.WRITEAPPEND(l_clob, LENGTH(UTL_RAW.CAST_TO_VARCHAR2(l_b64)),
                             UTL_RAW.CAST_TO_VARCHAR2(l_b64));
        l_offset := l_offset + l_amount;
    END LOOP;

    -- l_clob now contains the Base64-encoded BLOB
    DBMS_LOB.FREETEMPORARY(l_clob);
END;
```

### Simple VARCHAR2 Base64

```sql
-- Encode string to Base64
SELECT UTL_RAW.CAST_TO_VARCHAR2(
    UTL_ENCODE.BASE64_ENCODE(
        UTL_RAW.CAST_TO_RAW('Hello World')
    )
) AS base64_encoded
FROM DUAL;
-- Returns: 'SGVsbG8gV29ybGQ='

-- Decode Base64 to string
SELECT UTL_RAW.CAST_TO_VARCHAR2(
    UTL_ENCODE.BASE64_DECODE(
        UTL_RAW.CAST_TO_RAW('SGVsbG8gV29ybGQ=')
    )
) AS decoded_string
FROM DUAL;
-- Returns: 'Hello World'
```

---

## UTL_URL

URL encoding/decoding.

```sql
-- URL-encode a string (for query parameters)
UTL_URL.ESCAPE(
    url            => 'hello world & más',
    escape_reserved_chars => FALSE,     -- FALSE: only unsafe chars, TRUE: also reserved (:/?#[]@!$&'()*+,;=)
    url_charset    => 'UTF-8'
)
-- Returns: 'hello%20world%20%26%20m%C3%A1s' (with FALSE)
-- Returns: 'hello%20world%20%26%20m%C3%A1s' (with TRUE, also escapes &)

-- Unescape URL
UTL_URL.UNESCAPE(
    url         => 'hello%20world',
    url_charset => 'UTF-8'
)
-- Returns: 'hello world'
```

---

## UTL_HTTP

Low-level HTTP client. **Prefer `apex_web_service.make_rest_request` in APEX contexts.**

```sql
DECLARE
    l_req    UTL_HTTP.REQ;
    l_resp   UTL_HTTP.RESP;
    l_body   VARCHAR2(32767);
    l_clob   CLOB;
BEGIN
    -- Set wallet for HTTPS (if needed)
    UTL_HTTP.SET_WALLET('file:/path/to/wallet', 'wallet_password');

    -- Begin request
    l_req := UTL_HTTP.BEGIN_REQUEST(
        url          => 'https://api.example.com/data',
        method       => 'POST',
        http_version => 'HTTP/1.1'
    );

    -- Set headers
    UTL_HTTP.SET_HEADER(l_req, 'Content-Type', 'application/json');
    UTL_HTTP.SET_HEADER(l_req, 'Authorization', 'Bearer ' || l_token);
    UTL_HTTP.SET_HEADER(l_req, 'Content-Length', LENGTH(l_json_body));

    -- Write request body
    UTL_HTTP.WRITE_TEXT(l_req, l_json_body);

    -- Get response
    l_resp := UTL_HTTP.GET_RESPONSE(l_req);

    -- Read response body
    DBMS_LOB.CREATETEMPORARY(l_clob, TRUE);
    BEGIN
        LOOP
            UTL_HTTP.READ_TEXT(l_resp, l_body, 32767);
            DBMS_LOB.WRITEAPPEND(l_clob, LENGTH(l_body), l_body);
        END LOOP;
    EXCEPTION
        WHEN UTL_HTTP.END_OF_BODY THEN
            NULL;
    END;

    -- Check status
    -- l_resp.status_code    -- 200, 404, etc.
    -- l_resp.reason_phrase  -- 'OK', 'Not Found', etc.

    UTL_HTTP.END_RESPONSE(l_resp);
    DBMS_LOB.FREETEMPORARY(l_clob);
EXCEPTION
    WHEN OTHERS THEN
        IF l_resp.status_code IS NOT NULL THEN
            UTL_HTTP.END_RESPONSE(l_resp);
        END IF;
        RAISE;
END;

-- Set proxy (if behind corporate proxy)
UTL_HTTP.SET_PROXY('http://proxy.company.com:8080', 'localhost');

-- Set transfer timeout
UTL_HTTP.SET_TRANSFER_TIMEOUT(30);  -- 30 seconds

-- Set body charset
UTL_HTTP.SET_BODY_CHARSET('UTF-8');
```

---

## UTL_FILE

Read/write files on the database server filesystem.

> Requires a DBA_DIRECTORY object. Not available on Autonomous Database.

```sql
-- Write a file
DECLARE
    l_file UTL_FILE.FILE_TYPE;
BEGIN
    l_file := UTL_FILE.FOPEN(
        location  => 'MY_DIR',          -- DBA_DIRECTORIES name
        filename  => 'output.csv',
        open_mode => 'w',               -- w=write, r=read, a=append
        max_linesize => 32767
    );

    UTL_FILE.PUT_LINE(l_file, 'col1,col2,col3');
    UTL_FILE.PUT_LINE(l_file, 'a,b,c');

    UTL_FILE.FCLOSE(l_file);
EXCEPTION
    WHEN OTHERS THEN
        IF UTL_FILE.IS_OPEN(l_file) THEN
            UTL_FILE.FCLOSE(l_file);
        END IF;
        RAISE;
END;

-- Read a file
DECLARE
    l_file UTL_FILE.FILE_TYPE;
    l_line VARCHAR2(32767);
BEGIN
    l_file := UTL_FILE.FOPEN('MY_DIR', 'input.csv', 'r', 32767);

    LOOP
        BEGIN
            UTL_FILE.GET_LINE(l_file, l_line);
            -- Process l_line
        EXCEPTION
            WHEN NO_DATA_FOUND THEN EXIT;
        END;
    END LOOP;

    UTL_FILE.FCLOSE(l_file);
END;

-- Other operations
UTL_FILE.FREMOVE('MY_DIR', 'old_file.txt');                    -- delete file
UTL_FILE.FCOPY('MY_DIR', 'src.txt', 'MY_DIR', 'dest.txt');    -- copy file
UTL_FILE.FRENAME('MY_DIR', 'old.txt', 'MY_DIR', 'new.txt');   -- rename/move
UTL_FILE.FGETATTR('MY_DIR', 'file.txt', l_exists, l_length, l_blocksize);  -- file info
```

---

## JSON_OBJECT_T / JSON_ARRAY_T (12c+)

Native PL/SQL JSON object types. Faster than `apex_json` for parsing and manipulation.

### JSON_OBJECT_T

```sql
DECLARE
    l_obj  JSON_OBJECT_T;
    l_arr  JSON_ARRAY_T;
    l_clob CLOB;
BEGIN
    -- Create from scratch
    l_obj := JSON_OBJECT_T();
    l_obj.put('name', 'John');
    l_obj.put('age', 30);
    l_obj.put('active', TRUE);
    l_obj.put_null('middle_name');

    -- Create nested object
    l_obj.put('address', JSON_OBJECT_T('{"city":"Buenos Aires","country":"AR"}'));

    -- Create nested array
    l_arr := JSON_ARRAY_T();
    l_arr.append('tag1');
    l_arr.append('tag2');
    l_obj.put('tags', l_arr);

    -- Convert to CLOB
    l_clob := l_obj.to_clob();
    -- {"name":"John","age":30,"active":true,"middle_name":null,"address":{"city":"Buenos Aires","country":"AR"},"tags":["tag1","tag2"]}

    -- Parse from CLOB/VARCHAR2
    l_obj := JSON_OBJECT_T.parse('{"key":"value","num":42}');

    -- Read values
    l_obj.get_string('key')          -- 'value'
    l_obj.get_number('num')          -- 42
    l_obj.get_boolean('active')      -- TRUE/FALSE
    l_obj.get_object('address')      -- JSON_OBJECT_T
    l_obj.get_array('tags')          -- JSON_ARRAY_T
    l_obj.get_clob('long_text')      -- CLOB value

    -- Check existence and type
    l_obj.has('key')                 -- TRUE/FALSE
    l_obj.get_type('key')            -- 'STRING', 'NUMBER', 'BOOLEAN', 'NULL', 'OBJECT', 'ARRAY'

    -- Get all keys
    l_keys := l_obj.get_keys();      -- JSON_KEY_LIST (TABLE OF VARCHAR2(4000))
    FOR i IN 1..l_keys.COUNT LOOP
        DBMS_OUTPUT.PUT_LINE(l_keys(i));
    END LOOP;

    -- Remove key
    l_obj.remove('middle_name');

    -- Get size (number of keys)
    l_obj.get_size()                 -- NUMBER
END;
```

### JSON_ARRAY_T

```sql
DECLARE
    l_arr JSON_ARRAY_T;
BEGIN
    -- Create from scratch
    l_arr := JSON_ARRAY_T();
    l_arr.append('first');
    l_arr.append(42);
    l_arr.append(TRUE);
    l_arr.append(JSON_OBJECT_T('{"nested":"obj"}'));

    -- Parse from string
    l_arr := JSON_ARRAY_T.parse('[1,2,3,"four"]');

    -- Access elements (0-based index!)
    l_arr.get_string(3)              -- 'four'
    l_arr.get_number(0)              -- 1
    l_arr.get_object(idx)            -- JSON_OBJECT_T at index

    -- Size
    l_arr.get_size()                 -- 4

    -- Iterate
    FOR i IN 0..l_arr.get_size()-1 LOOP
        DBMS_OUTPUT.PUT_LINE(l_arr.get_string(i));
    END LOOP;

    -- Convert
    l_arr.to_clob()
    l_arr.to_string()                -- VARCHAR2 (max 32K)
END;
```

---

## JSON_TABLE and IS JSON

SQL-level JSON parsing (12c+).

### JSON_TABLE

```sql
-- Parse JSON array into rows
SELECT jt.*
FROM my_table t,
     JSON_TABLE(t.json_col, '$.items[*]'
         COLUMNS (
             id        NUMBER       PATH '$.id',
             name      VARCHAR2(100) PATH '$.name',
             status    VARCHAR2(20)  PATH '$.status',
             nested_val VARCHAR2(50) PATH '$.details.value'
         )
     ) jt
WHERE t.id = 1;

-- Parse JSON from a literal/variable
SELECT *
FROM JSON_TABLE(
    '{"employees":[{"id":1,"name":"John"},{"id":2,"name":"Jane"}]}',
    '$.employees[*]'
    COLUMNS (
        emp_id   NUMBER        PATH '$.id',
        emp_name VARCHAR2(100) PATH '$.name'
    )
);

-- Nested JSON_TABLE
SELECT jt.*, nt.*
FROM my_table t,
     JSON_TABLE(t.json_col, '$'
         COLUMNS (
             order_id    NUMBER        PATH '$.order_id',
             customer    VARCHAR2(100) PATH '$.customer',
             NESTED PATH '$.items[*]' COLUMNS (
                 item_name  VARCHAR2(100) PATH '$.name',
                 quantity   NUMBER        PATH '$.qty',
                 price      NUMBER        PATH '$.price'
             )
         )
     ) jt;
```

### IS JSON Constraint

```sql
-- Add IS JSON constraint to a column
ALTER TABLE my_table ADD CONSTRAINT chk_json
    CHECK (json_col IS JSON);

-- Validate in queries
SELECT * FROM my_table WHERE json_col IS JSON;
SELECT * FROM my_table WHERE json_col IS NOT JSON;

-- JSON with strict/lax mode
SELECT * FROM my_table WHERE json_col IS JSON STRICT;  -- no duplicate keys
```

### JSON_VALUE / JSON_QUERY / JSON_EXISTS

```sql
-- Extract scalar value
SELECT JSON_VALUE(json_col, '$.name') AS name
FROM my_table;

-- Extract with return type
SELECT JSON_VALUE(json_col, '$.age' RETURNING NUMBER) AS age
FROM my_table;

-- Extract object/array (returns JSON string)
SELECT JSON_QUERY(json_col, '$.address') AS address_json
FROM my_table;

-- Check if path exists
SELECT *
FROM my_table
WHERE JSON_EXISTS(json_col, '$.items[*]?(@.status == "active")');
```

---

## REGEXP Functions

Regular expression functions for pattern matching in SQL and PL/SQL.

### REGEXP_LIKE (condition)

```sql
-- Check if pattern matches (use in WHERE clause)
SELECT * FROM employees
WHERE REGEXP_LIKE(email, '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$', 'i');

-- Match flags: 'i' = case insensitive, 'c' = case sensitive (default),
--              'n' = . matches newline, 'm' = multiline (^ $ match per line),
--              'x' = ignore whitespace
```

### REGEXP_REPLACE

```sql
-- Replace pattern
SELECT REGEXP_REPLACE('Hello   World', '\s+', ' ') FROM DUAL;
-- Returns: 'Hello World'

-- Remove non-alphanumeric characters
SELECT REGEXP_REPLACE('Phone: (123) 456-7890', '[^0-9]', '') FROM DUAL;
-- Returns: '1234567890'

-- Replace with backreference
SELECT REGEXP_REPLACE('2026-04-08', '(\d{4})-(\d{2})-(\d{2})', '\3/\2/\1') FROM DUAL;
-- Returns: '08/04/2026'

-- Full signature
REGEXP_REPLACE(
    source_string,
    pattern,
    replace_string,    -- use \1, \2 for backreferences
    position,          -- start position (default 1)
    occurrence,        -- 0=all (default), n=nth occurrence
    match_param        -- 'i','c','n','m','x'
)
```

### REGEXP_SUBSTR

```sql
-- Extract matching substring
SELECT REGEXP_SUBSTR('abc123def456', '\d+') FROM DUAL;
-- Returns: '123' (first match)

-- Extract Nth occurrence
SELECT REGEXP_SUBSTR('abc123def456', '\d+', 1, 2) FROM DUAL;
-- Returns: '456' (second match)

-- Extract with subexpression (capture group)
SELECT REGEXP_SUBSTR('Email: john@example.com', '(\w+)@(\w+)', 1, 1, NULL, 1) FROM DUAL;
-- Returns: 'john' (first capture group)

-- Full signature
REGEXP_SUBSTR(
    source_string,
    pattern,
    position,          -- start position (default 1)
    occurrence,        -- which match (default 1)
    match_param,       -- flags
    subexpression      -- capture group number (default 0 = entire match)
)

-- Split string using REGEXP (alternative to apex_string.split)
SELECT LEVEL AS pos,
       REGEXP_SUBSTR('A,B,C,D', '[^,]+', 1, LEVEL) AS val
FROM DUAL
CONNECT BY REGEXP_SUBSTR('A,B,C,D', '[^,]+', 1, LEVEL) IS NOT NULL;
```

### REGEXP_COUNT

```sql
-- Count pattern occurrences
SELECT REGEXP_COUNT('Hello World Hello', 'Hello') FROM DUAL;
-- Returns: 2

SELECT REGEXP_COUNT('aAbBcC', '[A-Z]') FROM DUAL;
-- Returns: 3

-- Full signature
REGEXP_COUNT(source_string, pattern, position, match_param)
```

### REGEXP_INSTR

```sql
-- Find position of pattern
SELECT REGEXP_INSTR('Hello World', '\s') FROM DUAL;
-- Returns: 6 (position of the space)

-- Full signature
REGEXP_INSTR(
    source_string,
    pattern,
    position,          -- start position (default 1)
    occurrence,        -- which match (default 1)
    return_option,     -- 0=start of match (default), 1=end of match+1
    match_param,       -- flags
    subexpression      -- capture group (default 0)
)
```

---

## Analytic Functions

Window/analytic functions commonly used in APEX queries.

### ROW_NUMBER

```sql
-- Assign sequential numbers within partitions
SELECT emp_name, department, salary,
       ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn
FROM employees;

-- Get top N per group
SELECT * FROM (
    SELECT emp_name, department, salary,
           ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn
    FROM employees
)
WHERE rn <= 3;  -- top 3 per department
```

### LAG / LEAD

```sql
-- Previous/next row values
SELECT order_date, amount,
       LAG(amount, 1, 0) OVER (ORDER BY order_date)  AS prev_amount,
       LEAD(amount, 1, 0) OVER (ORDER BY order_date) AS next_amount,
       amount - LAG(amount, 1, 0) OVER (ORDER BY order_date) AS diff_from_prev
FROM orders;

-- LAG(expr, offset, default) OVER (PARTITION BY ... ORDER BY ...)
-- LEAD(expr, offset, default) OVER (PARTITION BY ... ORDER BY ...)
```

### LISTAGG

```sql
-- Aggregate strings (comma-separated list)
SELECT department,
       LISTAGG(emp_name, ', ') WITHIN GROUP (ORDER BY emp_name) AS employees
FROM employees
GROUP BY department;

-- With DISTINCT (12c Release 2+)
SELECT department,
       LISTAGG(DISTINCT skill, ', ') WITHIN GROUP (ORDER BY skill) AS skills
FROM emp_skills
GROUP BY department;

-- Handle overflow (12c Release 2+)
SELECT department,
       LISTAGG(emp_name, ', ' ON OVERFLOW TRUNCATE '...' WITH COUNT)
           WITHIN GROUP (ORDER BY emp_name) AS employees
FROM employees
GROUP BY department;
```

### PIVOT / UNPIVOT

```sql
-- Pivot rows to columns
SELECT *
FROM (
    SELECT department, quarter, revenue
    FROM sales_data
)
PIVOT (
    SUM(revenue)
    FOR quarter IN ('Q1' AS q1, 'Q2' AS q2, 'Q3' AS q3, 'Q4' AS q4)
);

-- Unpivot columns to rows
SELECT department, quarter, revenue
FROM sales_summary
UNPIVOT (
    revenue FOR quarter IN (q1 AS 'Q1', q2 AS 'Q2', q3 AS 'Q3', q4 AS 'Q4')
);
```

### Other Useful Analytics

```sql
-- Running total
SELECT order_date, amount,
       SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;

-- Percentage of total
SELECT emp_name, salary,
       ROUND(salary / SUM(salary) OVER () * 100, 2) AS pct_of_total
FROM employees;

-- RANK and DENSE_RANK
SELECT emp_name, salary,
       RANK() OVER (ORDER BY salary DESC) AS rank,            -- gaps after ties
       DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank  -- no gaps
FROM employees;

-- NTILE (divide into buckets)
SELECT emp_name, salary,
       NTILE(4) OVER (ORDER BY salary) AS quartile
FROM employees;

-- FIRST_VALUE / LAST_VALUE
SELECT emp_name, department, salary,
       FIRST_VALUE(emp_name) OVER (PARTITION BY department ORDER BY salary DESC) AS highest_paid
FROM employees;

-- FETCH FIRST (12c+, alternative to ROWNUM)
SELECT * FROM employees ORDER BY salary DESC
FETCH FIRST 10 ROWS ONLY;

-- FETCH with OFFSET (paging)
SELECT * FROM employees ORDER BY emp_id
OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY;
```

---

## DBMS_STATS

Optimizer statistics management.

```sql
-- Gather stats for a table
DBMS_STATS.GATHER_TABLE_STATS(
    ownname          => USER,           -- schema
    tabname          => 'EMPLOYEES',
    estimate_percent => DBMS_STATS.AUTO_SAMPLE_SIZE,
    method_opt       => 'FOR ALL COLUMNS SIZE AUTO',
    cascade          => TRUE,           -- gather index stats too
    degree           => 4               -- parallel degree
);

-- Gather stats for entire schema
DBMS_STATS.GATHER_SCHEMA_STATS(
    ownname          => USER,
    estimate_percent => DBMS_STATS.AUTO_SAMPLE_SIZE,
    method_opt       => 'FOR ALL COLUMNS SIZE AUTO',
    cascade          => TRUE,
    degree           => 4
);

-- Gather stats for a specific index
DBMS_STATS.GATHER_INDEX_STATS(
    ownname => USER,
    indname => 'EMP_NAME_IDX'
);

-- Delete stats (force full table scans for testing)
DBMS_STATS.DELETE_TABLE_STATS(ownname => USER, tabname => 'EMPLOYEES');

-- Lock stats (prevent auto-gather from changing them)
DBMS_STATS.LOCK_TABLE_STATS(ownname => USER, tabname => 'EMPLOYEES');
DBMS_STATS.UNLOCK_TABLE_STATS(ownname => USER, tabname => 'EMPLOYEES');

-- View table stats
SELECT table_name, num_rows, blocks, avg_row_len, last_analyzed
FROM user_tab_statistics
WHERE table_name = 'EMPLOYEES';

-- View column stats
SELECT column_name, num_distinct, num_nulls, avg_col_len, histogram
FROM user_tab_col_statistics
WHERE table_name = 'EMPLOYEES'
ORDER BY column_name;
```

---

## Dictionary Views

Essential Oracle data dictionary views for development and APEX introspection.

### Object Metadata

```sql
-- All objects in schema
SELECT object_name, object_type, status, created, last_ddl_time
FROM user_objects
WHERE object_type IN ('TABLE', 'VIEW', 'PACKAGE', 'PACKAGE BODY',
                       'PROCEDURE', 'FUNCTION', 'TRIGGER', 'SEQUENCE')
ORDER BY object_type, object_name;

-- Invalid objects
SELECT object_name, object_type
FROM user_objects
WHERE status = 'INVALID'
ORDER BY object_type, object_name;

-- Object dependencies
SELECT name, type, referenced_name, referenced_type, referenced_link_name
FROM user_dependencies
WHERE referenced_name = 'EMPLOYEES'
ORDER BY type, name;

-- Reverse: what does this object depend on
SELECT name, type, referenced_name, referenced_type
FROM user_dependencies
WHERE name = 'PKG_EMPLOYEES'
ORDER BY referenced_type, referenced_name;
```

### Table Structure

```sql
-- Table columns with details
SELECT column_name, data_type, data_length, data_precision, data_scale,
       nullable, data_default, column_id
FROM all_tab_columns
WHERE owner = USER
  AND table_name = 'EMPLOYEES'
ORDER BY column_id;

-- Table constraints
SELECT constraint_name, constraint_type, search_condition, status
FROM user_constraints
WHERE table_name = 'EMPLOYEES';
-- R=foreign key, P=primary key, U=unique, C=check

-- Foreign key details
SELECT uc.constraint_name, ucc.column_name,
       uc.r_constraint_name, rc.table_name AS referenced_table
FROM user_constraints uc
JOIN user_cons_columns ucc ON uc.constraint_name = ucc.constraint_name
JOIN user_constraints rc ON uc.r_constraint_name = rc.constraint_name
WHERE uc.table_name = 'EMPLOYEES'
  AND uc.constraint_type = 'R';

-- Indexes
SELECT ui.index_name, ui.uniqueness, ui.status,
       LISTAGG(uic.column_name, ', ') WITHIN GROUP (ORDER BY uic.column_position) AS columns
FROM user_indexes ui
JOIN user_ind_columns uic ON ui.index_name = uic.index_name
WHERE ui.table_name = 'EMPLOYEES'
GROUP BY ui.index_name, ui.uniqueness, ui.status;
```

### PL/SQL Source

```sql
-- View package/procedure source
SELECT line, text
FROM user_source
WHERE name = 'PKG_EMPLOYEES'
  AND type = 'PACKAGE BODY'
ORDER BY line;

-- Search in PL/SQL source
SELECT DISTINCT name, type
FROM user_source
WHERE UPPER(text) LIKE '%EMPLOYEES%'
  AND type IN ('PACKAGE BODY', 'PROCEDURE', 'FUNCTION', 'TRIGGER');

-- Compilation errors
SELECT line, position, text
FROM user_errors
WHERE name = 'PKG_EMPLOYEES'
  AND type = 'PACKAGE BODY'
ORDER BY sequence;
```

### APEX View Verification Pattern

Before querying APEX views, always verify the column exists:

```sql
-- Verify column exists in APEX view
SELECT column_name
FROM all_tab_columns
WHERE table_name = 'APEX_APPLICATION_PAGE_REGIONS'
  AND column_name = 'TEMPLATE'     -- verify this column exists
ORDER BY column_id;

-- List all columns for an APEX view
SELECT column_name, data_type
FROM all_tab_columns
WHERE table_name = 'APEX_APPLICATION_PAGE_ITEMS'
ORDER BY column_id;

-- Search for a column name across APEX views
SELECT table_name, column_name
FROM all_tab_columns
WHERE table_name LIKE 'APEX_APPLICATION%'
  AND column_name LIKE '%TEMPLATE%'
ORDER BY table_name, column_id;
```

### Other Useful Views

```sql
-- Table/view row counts (approximate from stats)
SELECT table_name, num_rows, last_analyzed
FROM user_tables
ORDER BY num_rows DESC NULLS LAST;

-- Tablespace usage
SELECT tablespace_name, bytes/1024/1024 AS mb
FROM user_segments
WHERE segment_name = 'EMPLOYEES';

-- User privileges
SELECT * FROM user_sys_privs;     -- system privileges
SELECT * FROM user_tab_privs;     -- object privileges
SELECT * FROM user_role_privs;    -- roles

-- Database links
SELECT db_link, username, host FROM user_db_links;

-- Sequences
SELECT sequence_name, min_value, max_value, increment_by,
       last_number, cache_size
FROM user_sequences
ORDER BY sequence_name;

-- Triggers
SELECT trigger_name, trigger_type, triggering_event,
       table_name, status
FROM user_triggers
WHERE table_name = 'EMPLOYEES';

-- Views with their SQL
SELECT view_name, text_length, text
FROM user_views
WHERE view_name = 'EMP_VIEW';

-- Synonyms
SELECT synonym_name, table_owner, table_name, db_link
FROM user_synonyms;
```

---

## Combined PL/SQL + JS Patterns

### AJAX Callback: Return JSON from PL/SQL

**PL/SQL Process (On Demand - AJAX Callback):**

```sql
-- Process name: GET_EMPLOYEE_LIST
DECLARE
    l_dept_id NUMBER := TO_NUMBER(apex_application.g_x01);
    l_cursor  SYS_REFCURSOR;
BEGIN
    OPEN l_cursor FOR
        SELECT e.emp_id, e.emp_name, e.salary, d.dept_name
        FROM employees e
        JOIN departments d ON e.dept_id = d.dept_id
        WHERE e.dept_id = l_dept_id
        ORDER BY e.emp_name;

    apex_json.open_object;
    apex_json.write('success', TRUE);
    apex_json.write('employees', l_cursor);  -- auto-converts cursor to JSON array
    apex_json.close_object;
EXCEPTION
    WHEN OTHERS THEN
        apex_json.open_object;
        apex_json.write('success', FALSE);
        apex_json.write('error', SQLERRM);
        apex_json.close_object;
END;
```

**JavaScript Caller:**

```javascript
apex.server.process('GET_EMPLOYEE_LIST', {
    x01: $v('P10_DEPT_ID')
}, {
    success: function(data) {
        if (data.success) {
            data.employees.forEach(function(emp) {
                console.log(emp.EMP_NAME, emp.SALARY);
            });
        } else {
            apex.message.showErrors([{
                type: 'error',
                location: 'page',
                message: data.error
            }]);
        }
    },
    dataType: 'json'
});
```

### BLOB Chunk Reading from JavaScript

**PL/SQL Process (On Demand):**

```sql
-- Process name: GET_FILE_CHUNK
DECLARE
    l_file_id NUMBER := TO_NUMBER(apex_application.g_x01);
    l_offset  NUMBER := TO_NUMBER(apex_application.g_x02);
    l_amount  NUMBER := 24000;  -- chunk size (multiple of 3 for Base64)
    l_blob    BLOB;
    l_raw     RAW(24000);
    l_b64     VARCHAR2(32767);
    l_length  NUMBER;
    l_actual  NUMBER;
BEGIN
    SELECT file_blob INTO l_blob FROM my_files WHERE id = l_file_id;
    l_length := DBMS_LOB.GETLENGTH(l_blob);

    IF l_offset <= l_length THEN
        l_actual := LEAST(l_amount, l_length - l_offset + 1);
        DBMS_LOB.READ(l_blob, l_actual, l_offset, l_raw);
        l_b64 := UTL_RAW.CAST_TO_VARCHAR2(UTL_ENCODE.BASE64_ENCODE(l_raw));
    END IF;

    apex_json.open_object;
    apex_json.write('chunk', l_b64);
    apex_json.write('offset', l_offset + l_actual);
    apex_json.write('total', l_length);
    apex_json.write('done', (l_offset + l_actual) > l_length);
    apex_json.close_object;
END;
```

**JavaScript - Read BLOB in chunks:**

```javascript
function downloadFileChunked(fileId, callback) {
    var chunks = [];
    var offset = 1;

    function getNextChunk() {
        apex.server.process('GET_FILE_CHUNK', {
            x01: fileId,
            x02: String(offset)
        }, {
            success: function(data) {
                if (data.chunk) {
                    chunks.push(data.chunk);
                }
                if (data.done) {
                    // All chunks received, combine
                    var base64 = chunks.join('');
                    callback(base64);
                } else {
                    offset = data.offset;
                    getNextChunk();  // get next chunk
                }
            },
            dataType: 'json'
        });
    }

    getNextChunk();
}

// Usage:
downloadFileChunked($v('P10_FILE_ID'), function(base64Data) {
    // Convert base64 to blob and download
    var byteChars = atob(base64Data);
    var byteNumbers = new Array(byteChars.length);
    for (var i = 0; i < byteChars.length; i++) {
        byteNumbers[i] = byteChars.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], { type: 'application/octet-stream' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'file.pdf';
    a.click();
    URL.revokeObjectURL(url);
});
```

### CLOB Submission from JavaScript

**JavaScript - Send large text to server:**

```javascript
// For data that exceeds x01 (32K limit), use apex_application.g_clob_01
apex.server.process('SAVE_LARGE_TEXT', {
    pageItems: '#P10_ID',
    f01: largeTextString.match(/.{1,30000}/g)  // split into chunks
}, {
    success: function(data) {
        if (data.success) {
            apex.message.showPageSuccess('Saved.');
        }
    },
    dataType: 'json'
});
```

**PL/SQL - Reassemble CLOB from f01 array:**

```sql
-- Process name: SAVE_LARGE_TEXT
DECLARE
    l_clob CLOB;
    l_id   NUMBER := TO_NUMBER(V('P10_ID'));
BEGIN
    DBMS_LOB.CREATETEMPORARY(l_clob, TRUE);

    FOR i IN 1..apex_application.g_f01.COUNT LOOP
        DBMS_LOB.WRITEAPPEND(l_clob,
            LENGTH(apex_application.g_f01(i)),
            apex_application.g_f01(i)
        );
    END LOOP;

    UPDATE my_table SET large_text = l_clob WHERE id = l_id;

    DBMS_LOB.FREETEMPORARY(l_clob);

    apex_json.open_object;
    apex_json.write('success', TRUE);
    apex_json.close_object;
END;
```
