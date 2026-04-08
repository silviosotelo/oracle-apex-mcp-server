# Oracle APEX PL/SQL APIs - Complete Reference

> **Purpose**: Complete reference for all 41 Oracle APEX PL/SQL packages.
> Oracle APEX 20.2 compatible. Organized by category.

---

## Table of Contents

1. [Core Runtime](#core-runtime)
2. [JSON & Data](#json--data)
3. [String Utilities](#string-utilities)
4. [Security](#security)
5. [Error Handling](#error-handling)
6. [UI Components](#ui-components)
7. [Reports](#reports)
8. [Communication](#communication)
9. [Administration](#administration)
10. [Debug](#debug)
11. [Authentication & Tokens](#authentication--tokens)
12. [Plugins](#plugins)
13. [Utilities](#utilities)
14. [Common Patterns](#common-patterns)
15. [Critical Notes](#critical-notes)

---

## Core Runtime

### APEX_APPLICATION

Global variables and engine control. No `REQUIRE` needed - always available in APEX context.

```sql
-- Global Variables (read-only in most cases)
apex_application.g_flow_id           -- current application ID (NUMBER)
apex_application.g_flow_step_id      -- current page ID (NUMBER)
apex_application.g_instance           -- current session ID (VARCHAR2)
apex_application.g_user               -- current user (VARCHAR2)
apex_application.g_flow_schema_owner  -- parsing schema (VARCHAR2)
apex_application.g_request            -- current request value (VARCHAR2)
apex_application.g_x01 .. g_x20      -- AJAX callback x01-x20 values (VARCHAR2)
apex_application.g_f01 .. g_f50       -- tabular form arrays (wwv_flow_global.vc_arr2)
apex_application.g_clob_01            -- AJAX callback CLOB value

-- Stop page rendering / processing
apex_application.stop_apex_engine;    -- raises NO_DATA_FOUND internally, stops execution cleanly
```

### APEX_PAGE

```sql
-- Get/set page item values (same as V() and :ITEM syntax but programmatic)
apex_page.get_item_value(
    p_item_name IN VARCHAR2
) RETURN VARCHAR2;

-- Check if page is read-only
apex_page.is_read_only RETURN BOOLEAN;
```

### APEX_SESSION

Manage sessions programmatically (useful for ORDS/REST contexts).

```sql
-- Attach to existing session (for ORDS handlers)
apex_session.attach(
    p_app_id     IN NUMBER,
    p_page_id    IN NUMBER,
    p_session_id IN NUMBER
);

-- Create a new session
apex_session.create_session(
    p_app_id   IN NUMBER,
    p_page_id  IN NUMBER,
    p_username  IN VARCHAR2
);

-- Detach from session (always call after attach in ORDS)
apex_session.detach;

-- Set/get session time zone
apex_session.set_time_zone(p_time_zone IN VARCHAR2);
apex_session.get_time_zone RETURN VARCHAR2;
```

**Pattern: ORDS Handler with APEX Session**

```sql
BEGIN
    apex_session.attach(
        p_app_id     => 400,
        p_page_id    => 0,
        p_session_id => :session_id
    );

    -- Now APEX items, collections, etc. are available
    -- Do work here...

    apex_session.detach;
EXCEPTION
    WHEN OTHERS THEN
        apex_session.detach;
        RAISE;
END;
```

---

## JSON & Data

### APEX_JSON

Complete JSON generation and parsing. The most-used APEX package for REST integrations.

> **CRITICAL**: NEVER use `apex_json.stringify` for large CLOBs. It truncates at 32K.
> Always use `apex_json.write` with the CLOB overload instead.

#### JSON Generation

```sql
-- Initialize output
apex_json.initialize_clob_output;     -- write to internal CLOB
apex_json.initialize_output(p_http_header => TRUE);  -- write to HTTP response

-- Open/close objects and arrays
apex_json.open_object;                -- {
apex_json.open_object('name');        -- "name": {
apex_json.close_object;               -- }
apex_json.open_array;                 -- [
apex_json.open_array('name');         -- "name": [
apex_json.close_array;                -- ]
apex_json.close_all;                  -- close all open objects/arrays

-- Write values (19 overloads)
apex_json.write('key', 'string_value');           -- "key": "string_value"
apex_json.write('key', numeric_value);            -- "key": 123
apex_json.write('key', date_value);               -- "key": "2026-04-08T..."
apex_json.write('key', timestamp_value);          -- "key": "2026-04-08T12:00:00Z"
apex_json.write('key', boolean_value);            -- "key": true
apex_json.write('key', clob_value);               -- "key": "...long text..." (SAFE for large CLOBs)
apex_json.write('key', sys_refcursor_value);      -- "key": [{row1}, {row2}]

-- Write without key (inside arrays)
apex_json.write('string_value');
apex_json.write(numeric_value);
apex_json.write(boolean_value);

-- Write NULL
apex_json.write('key');                            -- "key": null

-- Write raw JSON
apex_json.write_raw(',"custom":true');             -- append raw JSON fragment

-- Get the generated CLOB
l_clob := apex_json.get_clob_output;
apex_json.free_output;                             -- always free after get_clob_output

-- Stringify (WARNING: truncates at 32K, use write CLOB overload instead)
-- apex_json.stringify(value) -- AVOID FOR LARGE DATA
```

#### JSON Parsing

```sql
-- Parse JSON
apex_json.parse(p_source IN CLOB);
apex_json.parse(p_source IN VARCHAR2);

-- Get values after parsing
apex_json.get_varchar2(p_path IN VARCHAR2, p0..p4)  RETURN VARCHAR2;
apex_json.get_number(p_path IN VARCHAR2, p0..p4)    RETURN NUMBER;
apex_json.get_boolean(p_path IN VARCHAR2, p0..p4)   RETURN BOOLEAN;
apex_json.get_date(p_path IN VARCHAR2, p0..p4)      RETURN DATE;
apex_json.get_clob(p_path IN VARCHAR2, p0..p4)      RETURN CLOB;
apex_json.get_count(p_path IN VARCHAR2, p0..p4)     RETURN NUMBER;  -- array length

-- Path syntax uses dots and brackets: 'data.items[1].name'
-- p0..p4 are positional substitutions for %d or %s in path
```

**Pattern: Generate JSON Response in AJAX Callback**

```sql
-- In an AJAX callback process:
apex_json.open_object;
apex_json.write('success', TRUE);
apex_json.write('message', 'Operation completed');
apex_json.open_array('items');
FOR rec IN (SELECT id, name FROM my_table WHERE dept_id = apex_application.g_x01) LOOP
    apex_json.open_object;
    apex_json.write('id', rec.id);
    apex_json.write('name', rec.name);
    apex_json.close_object;
END LOOP;
apex_json.close_array;
apex_json.close_object;
```

**Pattern: Parse JSON from REST Response**

```sql
DECLARE
    l_response CLOB;
    l_count    NUMBER;
BEGIN
    l_response := apex_web_service.make_rest_request(
        p_url         => 'https://api.example.com/data',
        p_http_method => 'GET'
    );
    apex_json.parse(l_response);
    l_count := apex_json.get_count('items');
    FOR i IN 1..l_count LOOP
        DBMS_OUTPUT.PUT_LINE(apex_json.get_varchar2('items[%d].name', i));
    END LOOP;
END;
```

### APEX_EXEC

Execute queries and DML with bind variables. **Always close the context when done.**

```sql
-- Open a query context
l_context := apex_exec.open_query_context(
    p_location       => apex_exec.c_location_local_db,
    p_sql_query      => 'SELECT id, name FROM emp WHERE dept = :d',
    p_bind_variable_names  => apex_t_varchar2('d'),
    p_bind_variable_values => apex_t_varchar2('10')
);

-- Get column positions
l_id_col   := apex_exec.get_column_position(l_context, 'ID');
l_name_col := apex_exec.get_column_position(l_context, 'NAME');

-- Iterate rows
WHILE apex_exec.next_row(l_context) LOOP
    l_id   := apex_exec.get_number(l_context, l_id_col);
    l_name := apex_exec.get_varchar2(l_context, l_name_col);
END LOOP;

-- ALWAYS close
apex_exec.close(l_context);

-- Constants
apex_exec.c_location_local_db     -- local database
apex_exec.c_location_remote_db    -- REST Enabled SQL
apex_exec.c_location_web_source   -- Web Source Module
```

> **CRITICAL**: Always wrap `apex_exec` in BEGIN/EXCEPTION/END and call `apex_exec.close(l_context)` in both success and exception paths. Failing to close leaks cursors.

### APEX_DATA_PARSER

Parse CSV, JSON, XML, and XLSX data.

```sql
-- Parse a BLOB into a table
SELECT line_number, col001, col002, col003
FROM TABLE(
    apex_data_parser.parse(
        p_content   => :blob_content,
        p_file_name => 'data.csv'
    )
);

-- Get column profile
SELECT column_position, column_name, data_type, format_mask
FROM TABLE(
    apex_data_parser.get_columns(
        p_content   => :blob_content,
        p_file_name => 'data.csv'
    )
);
```

### APEX_COLLECTION

Session-state collections (temporary data storage per session).

```sql
-- Create
apex_collection.create_collection(p_collection_name => 'MY_COLL');
apex_collection.create_or_truncate_collection(p_collection_name => 'MY_COLL');

-- Add member (50 VARCHAR2 attrs: c001-c050, 5 NUMBER: n001-n005, 5 DATE: d001-d005, CLOB, BLOB, XMLTYPE)
apex_collection.add_member(
    p_collection_name => 'MY_COLL',
    p_c001 => 'value1',
    p_c002 => 'value2',
    p_n001 => 100,
    p_d001 => SYSDATE,
    p_clob001 => l_large_text
);
-- Returns seq_id (NUMBER)

-- Update member
apex_collection.update_member_attribute(
    p_collection_name => 'MY_COLL',
    p_seq             => l_seq_id,
    p_attr_number     => 1,     -- c001
    p_attr_value      => 'new_value'
);

-- Delete
apex_collection.delete_member(p_collection_name => 'MY_COLL', p_seq => l_seq_id);
apex_collection.delete_collection(p_collection_name => 'MY_COLL');

-- Check existence
IF apex_collection.collection_exists('MY_COLL') THEN ...

-- Query via view
SELECT seq_id, c001, c002, n001, d001, clob001
FROM apex_collections
WHERE collection_name = 'MY_COLL'
ORDER BY seq_id;
```

---

## String Utilities

### APEX_STRING

String manipulation, splitting, joining.

```sql
-- Format (like printf)
apex_string.format('Hello %s, you have %s items', 'John', 5)
-- Returns: 'Hello John, you have 5 items'

-- Named substitutions
apex_string.format('Hello %0, you have %1 items', p0 => 'John', p1 => 5)

-- Split string to table
SELECT column_value
FROM TABLE(apex_string.split('A:B:C', ':'));
-- Returns 3 rows: A, B, C

-- Split to apex_t_varchar2 array
l_arr := apex_string.split('A:B:C', ':');

-- Join array to string
apex_string.join(apex_t_varchar2('A','B','C'), ':')
-- Returns: 'A:B:C'

-- Join cursor to string
apex_string.join(
    CURSOR(SELECT name FROM emp WHERE dept = 10),
    ', '
)

-- Grep (filter array by pattern)
l_filtered := apex_string.grep(l_arr, '^P10_');

-- Push to array
apex_string.push(l_arr, 'new_value');

-- PLIST: parse/generate property list (key=value pairs)
l_props := apex_string.plist_get(l_plist_string, 'key_name');
apex_string.plist_put(l_plist_string, 'key_name', 'value');
```

### APEX_STRING_UTIL

Additional string utilities.

```sql
apex_string_util.to_slug('Hello World!')     -- 'hello-world'
apex_string_util.get_initials('John Doe')    -- 'JD'
```

---

## Security

### APEX_ESCAPE

HTML/JS/CSS escaping to prevent XSS.

```sql
-- HTML escape (most common)
apex_escape.html('< script>alert("xss")</script>')
-- Returns: &lt; script&gt;alert(&quot;xss&quot;)&lt;/script&gt;

-- HTML attribute value
apex_escape.html_attribute('value "with" quotes')

-- JavaScript string
apex_escape.js_literal('string with ''quotes''')
-- Returns: 'string with \x27quotes\x27'

-- LDAP distinguished name
apex_escape.ldap_dn(p_string)

-- LDAP search filter
apex_escape.ldap_search_filter(p_string)

-- CSS value
apex_escape.css(p_string)

-- Strip HTML tags
apex_escape.strip_html_tags(p_html)

-- Noop (no escaping, use when you explicitly want raw output)
apex_escape.noop(p_string)
```

### APEX_AUTHENTICATION

```sql
-- Log out current user
apex_authentication.logout(
    p_app_id     => :APP_ID,
    p_session_id => :APP_SESSION
);

-- Send login credentials
apex_authentication.login(
    p_username => 'USER',
    p_password => 'PASS'
);

-- Post-authentication procedure hook
apex_authentication.post_login(
    p_username => :APP_USER
);

-- Check if session is valid
apex_authentication.is_authenticated RETURN BOOLEAN;

-- Callback after successful login
apex_authentication.callback(
    p_session_id => l_session,
    p_app_id     => l_app_id
);
```

### APEX_AUTHORIZATION

```sql
-- Check if current user passes an authorization scheme
IF apex_authorization.is_authorized(
    p_authorization_name => 'ADMIN_ONLY'
) THEN
    -- user is authorized
END IF;

-- Reset authorization cache (re-evaluate on next check)
apex_authorization.reset_cache;

-- Enable/disable authorization (for testing)
apex_authorization.enable_dynamic_groups(p_group_names => apex_t_varchar2('ADMIN'));
```

### APEX_ACL

Access Control List management.

```sql
-- Add user to role
apex_acl.add_user_role(
    p_application_id => :APP_ID,
    p_user_name      => 'JDOE',
    p_role_static_id => 'ADMINISTRATOR'
);

-- Remove user from role
apex_acl.remove_user_role(
    p_application_id => :APP_ID,
    p_user_name      => 'JDOE',
    p_role_static_id => 'ADMINISTRATOR'
);

-- Check role
apex_acl.has_user_role(
    p_application_id => :APP_ID,
    p_user_name      => 'JDOE',
    p_role_static_id => 'ADMINISTRATOR'
) RETURN BOOLEAN;

-- Check any role
apex_acl.has_user_any_roles(
    p_application_id => :APP_ID,
    p_user_name      => 'JDOE'
) RETURN BOOLEAN;
```

### APEX_CREDENTIAL

Manage credentials for Web Source Modules and REST calls.

```sql
-- Set credentials
apex_credential.set_persistent_credentials(
    p_credential_static_id => 'MY_API_CRED',
    p_client_id            => 'client_123',
    p_client_secret        => 'secret_456'
);

-- Set session-level credentials
apex_credential.set_session_credentials(
    p_credential_static_id => 'MY_API_CRED',
    p_client_id            => 'client_123',
    p_client_secret        => 'secret_456'
);

-- Clear session credentials
apex_credential.clear_session_credentials(
    p_credential_static_id => 'MY_API_CRED'
);
```

---

## Error Handling

### APEX_ERROR

Display errors to users. Critical for validation and process error handling.

```sql
-- 5 ADD_ERROR signatures:

-- 1. Simple page-level error
apex_error.add_error(
    p_message          => 'Something went wrong',
    p_display_location => apex_error.c_inline_in_notification
);

-- 2. Error on specific item
apex_error.add_error(
    p_message          => 'This field is required',
    p_display_location => apex_error.c_inline_with_field_and_notif,
    p_page_item_name   => 'P10_NAME'
);

-- 3. Error on tabular form column
apex_error.add_error(
    p_message          => 'Invalid value',
    p_display_location => apex_error.c_inline_with_field_and_notif,
    p_region_id        => l_region_id,
    p_column_alias     => 'SALARY',
    p_row_num          => l_row
);

-- 4. Error with additional info
apex_error.add_error(
    p_message            => 'Database error occurred',
    p_additional_info    => SQLERRM,
    p_display_location   => apex_error.c_on_error_page
);

-- 5. Error with ora_sqlcode
apex_error.add_error(
    p_message          => 'Constraint violation',
    p_display_location => apex_error.c_inline_in_notification,
    p_ora_sqlcode      => SQLCODE,
    p_ora_sqlerrm      => SQLERRM
);

-- Display location constants
apex_error.c_inline_in_notification       -- show in notification area
apex_error.c_inline_with_field            -- show next to field only
apex_error.c_inline_with_field_and_notif  -- show at field AND notification
apex_error.c_on_error_page                -- redirect to error page

-- t_error record type (used in error handling functions)
-- apex_error.t_error has these fields:
--   .message              VARCHAR2(32767)
--   .additional_info      VARCHAR2(32767)
--   .display_location     VARCHAR2(40)
--   .association_type     VARCHAR2(40)
--   .page_item_name       VARCHAR2(255)
--   .region_id            NUMBER
--   .column_alias         VARCHAR2(255)
--   .row_num              NUMBER
--   .ora_sqlcode          NUMBER
--   .ora_sqlerrm          VARCHAR2(32767)
--   .is_internal_error    BOOLEAN
--   .apex_error_code      VARCHAR2(255)
--   .original_message     VARCHAR2(32767)
```

---

## UI Components

### APEX_ITEM

Generate HTML form elements in SQL queries (useful for tabular forms and reports).

```sql
-- Hidden field
apex_item.hidden(p_idx => 1, p_value => rec.id)

-- Text field
apex_item.text(p_idx => 2, p_value => rec.name, p_size => 30, p_maxlength => 100)

-- Textarea
apex_item.textarea(p_idx => 3, p_value => rec.description, p_rows => 5, p_cols => 40)

-- Select list
apex_item.select_list(
    p_idx        => 4,
    p_value      => rec.status,
    p_list_values => 'Active;A,Inactive;I'
)

-- Select list from query
apex_item.select_list_from_query(
    p_idx   => 4,
    p_value => rec.dept_id,
    p_query => 'SELECT name d, id r FROM departments ORDER BY name'
)

-- Checkbox
apex_item.checkbox2(p_idx => 5, p_value => rec.id)

-- Date picker
apex_item.date_popup2(p_idx => 6, p_value => rec.hire_date, p_format => 'DD-MON-YYYY')

-- Display only
apex_item.display_and_save(p_idx => 7, p_value => rec.name)

-- Popup LOV
apex_item.popup_from_query(
    p_idx           => 8,
    p_value         => rec.emp_id,
    p_lov_query     => 'SELECT name d, id r FROM employees'
)

-- radiogroup
apex_item.radiogroup(
    p_idx        => 9,
    p_value      => rec.type,
    p_list_values => 'Option A;A,Option B;B'
)

-- MD5 checksum (for lost update detection)
apex_item.md5_hidden(p_idx => 50, p_col01 => rec.name, p_col02 => rec.salary)
```

### APEX_JAVASCRIPT

Add JavaScript to the page programmatically.

```sql
-- Add inline JS code
apex_javascript.add_inline_code(
    p_code => 'console.log("hello");',
    p_key  => 'my_unique_key'  -- prevents duplicate inclusion
);

-- Add JS file
apex_javascript.add_library(
    p_name      => 'mylib',
    p_directory => '#APP_IMAGES#js/',
    p_version   => NULL,
    p_key       => 'mylib'
);

-- Add onload code
apex_javascript.add_onload_code(
    p_code => '$(".my-class").hide();',
    p_key  => 'hide_elements'
);

-- Escape JS string
apex_javascript.escape(p_text => 'it''s a "test"')
-- Returns: it\'s a \"test\"

-- Add attribute (for plugin development)
apex_javascript.add_attribute(
    p_name  => 'myAttr',
    p_value => 'myValue'
) -- Returns: ,"myAttr":"myValue"
```

### APEX_CSS

Add CSS to the page programmatically.

```sql
-- Add inline CSS
apex_css.add(
    p_css => '.highlight { background: yellow; }',
    p_key => 'my_styles'
);

-- Add CSS file
apex_css.add_file(
    p_name      => 'custom',
    p_directory => '#APP_IMAGES#css/'
);
```

### APEX_REGION

Interact with regions programmatically.

```sql
-- Open/close regions (for server-side rendering)
apex_region.open_query_context(
    p_region_id   => l_region_id,
    p_page_id     => :APP_PAGE_ID,
    p_max_rows    => 1000
) RETURN apex_exec.t_context;

-- Is region read only
apex_region.is_read_only(
    p_region_id => l_region_id,
    p_page_id   => :APP_PAGE_ID
) RETURN BOOLEAN;
```

### APEX_THEME

```sql
-- Get theme file prefix
apex_theme.get_theme_file_prefix(
    p_app_id   => :APP_ID,
    p_theme_id => 42
) RETURN VARCHAR2;
```

### APEX_UI_DEFAULT_UPDATE

Update UI defaults for tables (used in scaffolding).

```sql
apex_ui_default_update.upd_column(
    p_table_name  => 'EMPLOYEES',
    p_column_name => 'HIRE_DATE',
    p_label       => 'Hire Date',
    p_format_mask => 'DD-MON-YYYY',
    p_help_text   => 'Date the employee was hired'
);
```

### APEX_LANG

Internationalization and translation.

```sql
-- Get translated message
apex_lang.message('MY_MESSAGE_KEY')

-- With substitutions
apex_lang.message('GREETING', 'John')  -- GREETING = 'Hello %0'

-- Get language
apex_lang.lang RETURN VARCHAR2;   -- 'en', 'es', etc.

-- Emit JS messages for client-side use
apex_lang.emit_language_selector_list;
```

### APEX_SPATIAL

```sql
-- Convert geometry to GeoJSON
apex_spatial.to_geojson(p_geometry IN SDO_GEOMETRY) RETURN CLOB;

-- Convert GeoJSON to geometry
apex_spatial.to_sdo_geometry(p_geojson IN CLOB) RETURN SDO_GEOMETRY;
```

---

## Reports

### APEX_IG

Interactive Grid server-side API.

```sql
-- Get selected row IDs
l_selected := apex_ig.get_selected_row_ids(
    p_region_static_id => 'my_ig'
);

-- Clear report settings
apex_ig.clear_report(
    p_page_id          => :APP_PAGE_ID,
    p_region_static_id => 'my_ig'
);

-- Get report columns
apex_ig.get_report_columns(
    p_page_id          => :APP_PAGE_ID,
    p_region_static_id => 'my_ig'
) RETURN apex_t_varchar2;
```

### APEX_IR

Interactive Report server-side API.

```sql
-- Clear report
apex_ir.clear_report(
    p_page_id    => 10,
    p_region_id  => l_region_id
);

-- Reset report
apex_ir.reset_report(
    p_page_id    => 10,
    p_region_id  => l_region_id
);

-- Add filter
apex_ir.add_filter(
    p_page_id       => 10,
    p_region_id     => l_region_id,
    p_report_column => 'DEPT_NAME',
    p_filter_value  => 'Sales',
    p_operator_abbr => 'EQ'  -- EQ, NEQ, LT, GT, LIKE, NLIKE, NULL, NNULL, IN, NIN
);

-- Delete saved report
apex_ir.delete_report(
    p_report_id => l_saved_report_id
);

-- Get report SQL
apex_ir.get_report(
    p_page_id    => 10,
    p_region_id  => l_region_id
) RETURN CLOB;  -- returns the final SQL with filters applied
```

---

## Communication

### APEX_MAIL

Send emails from APEX.

```sql
-- Send email
l_mail_id := apex_mail.send(
    p_to        => 'recipient@example.com',
    p_from      => 'sender@example.com',
    p_subj      => 'Subject Line',
    p_body      => 'Plain text body',
    p_body_html => '<h1>HTML body</h1><p>Rich content</p>',
    p_cc        => 'cc@example.com',
    p_bcc       => 'bcc@example.com',
    p_replyto   => 'reply@example.com'
);

-- Add attachment
apex_mail.add_attachment(
    p_mail_id    => l_mail_id,
    p_attachment  => l_blob,
    p_filename    => 'report.pdf',
    p_mime_type   => 'application/pdf'
);

-- Push mail queue (actually send)
apex_mail.push_queue;

-- Push queue for specific SMTP
apex_mail.push_queue(
    p_smtp_hostname => 'smtp.example.com',
    p_smtp_portno   => 587
);
```

### APEX_WEB_SERVICE

Make REST and SOAP calls. The primary way to call external APIs from APEX.

```sql
-- Make REST request (full signature)
l_response := apex_web_service.make_rest_request(
    p_url                  => 'https://api.example.com/endpoint',
    p_http_method          => 'POST',                -- GET, POST, PUT, DELETE, PATCH
    p_body                 => l_request_body,         -- VARCHAR2 body
    p_body_blob            => l_blob_body,            -- BLOB body (for file upload)
    p_body_clob            => l_clob_body,            -- CLOB body (for large JSON)
    p_parm_name            => apex_t_varchar2('param1', 'param2'),  -- query params
    p_parm_value           => apex_t_varchar2('val1', 'val2'),
    p_http_headers         => l_headers,              -- custom headers
    p_credential_static_id => 'MY_CREDENTIAL',        -- credential for auth
    p_token_url            => 'https://auth.example.com/token',  -- OAuth token URL
    p_wallet_path          => 'file:/path/to/wallet', -- for HTTPS
    p_wallet_pwd           => 'wallet_password',
    p_transfer_timeout     => 30,                     -- timeout in seconds
    p_proxy_override       => 'http://proxy:8080'
) RETURN CLOB;

-- Set request headers before the call
apex_web_service.g_request_headers.DELETE;
apex_web_service.g_request_headers(1).name  := 'Content-Type';
apex_web_service.g_request_headers(1).value := 'application/json';
apex_web_service.g_request_headers(2).name  := 'Authorization';
apex_web_service.g_request_headers(2).value := 'Bearer ' || l_token;

-- After the call, check response
l_status := apex_web_service.g_status_code;           -- HTTP status code (200, 404, etc.)
-- Response headers available in apex_web_service.g_headers (indexed table)
FOR i IN 1..apex_web_service.g_headers.COUNT LOOP
    IF apex_web_service.g_headers(i).name = 'Content-Type' THEN
        l_content_type := apex_web_service.g_headers(i).value;
    END IF;
END LOOP;

-- Make REST request returning BLOB (for file downloads)
l_blob := apex_web_service.make_rest_request_b(
    p_url         => 'https://api.example.com/file',
    p_http_method => 'GET'
);
```

### APEX_ZIP

Create and read ZIP files.

```sql
-- Create ZIP
DECLARE
    l_zip BLOB;
BEGIN
    apex_zip.add_file(
        p_zipped_blob => l_zip,
        p_file_name   => 'data.csv',
        p_content     => utl_raw.cast_to_raw('col1,col2' || chr(10) || 'a,b')
    );
    apex_zip.add_file(
        p_zipped_blob => l_zip,
        p_file_name   => 'readme.txt',
        p_content     => utl_raw.cast_to_raw('This is a readme')
    );
    apex_zip.finish(p_zipped_blob => l_zip);
    -- l_zip now contains the complete ZIP file
END;

-- Read ZIP
DECLARE
    l_files apex_zip.t_files;
    l_file  BLOB;
BEGIN
    l_files := apex_zip.get_files(p_zipped_blob => l_zip);
    FOR i IN 1..l_files.COUNT LOOP
        l_file := apex_zip.get_file_content(
            p_zipped_blob => l_zip,
            p_file_name   => l_files(i)
        );
    END LOOP;
END;
```

### APEX_EXPORT

Export APEX applications programmatically.

```sql
-- Export application
l_files := apex_export.get_application(
    p_application_id       => 400,
    p_split                => TRUE,     -- split into component files
    p_with_date            => FALSE,    -- exclude timestamps (for version control)
    p_with_ir_public_reports => TRUE,
    p_with_ir_private_reports => FALSE,
    p_with_translations    => TRUE
);

-- l_files is apex_t_export_files, iterate:
FOR i IN 1..l_files.COUNT LOOP
    -- l_files(i).name    = file name
    -- l_files(i).contents = CLOB content
    NULL;
END LOOP;
```

---

## Administration

### APEX_APPLICATION_INSTALL

Control application installation programmatically.

```sql
-- Set application ID for import
apex_application_install.set_application_id(p_application_id => 500);

-- Set workspace
apex_application_install.set_workspace_id(p_workspace_id => l_ws_id);

-- Set schema
apex_application_install.set_schema(p_schema => 'MY_SCHEMA');

-- Generate offset (for conflict-free imports)
apex_application_install.generate_offset;
```

### APEX_INSTANCE_ADMIN

Instance-level administration (requires APEX admin privileges).

```sql
-- Get parameter
apex_instance_admin.get_parameter(p_parameter => 'MAX_SESSION_LENGTH_SEC') RETURN VARCHAR2;

-- Set parameter
apex_instance_admin.set_parameter(
    p_parameter => 'MAX_SESSION_LENGTH_SEC',
    p_value     => '28800'
);

-- Common parameters:
-- MAX_SESSION_LENGTH_SEC, MAX_SESSION_IDLE_SEC, SMTP_HOST_ADDRESS,
-- SMTP_HOST_PORT, SMTP_FROM, SMTP_USERNAME, WALLET_PATH
```

### APEX_APP_SETTING

Application-level settings (defined in Shared Components).

```sql
-- Get setting value
l_value := apex_app_setting.get_value(p_name => 'MY_SETTING');

-- Set setting value
apex_app_setting.set_value(
    p_name  => 'MY_SETTING',
    p_value => 'new_value'
);
```

---

## Debug

### APEX_DEBUG

Logging and debugging.

```sql
-- Log at different levels
apex_debug.error('Critical error: %s', SQLERRM);     -- level 1
apex_debug.warn('Warning: %s', l_msg);                -- level 2
apex_debug.info('Info: processing %s rows', l_count);  -- level 4
apex_debug.trace('Trace: entering procedure');          -- level 6
apex_debug.message('Engine trace detail');              -- level 9

-- Generic log with explicit level
apex_debug.log_message(
    p_message => 'Custom message: %s',
    p_level   => 4,   -- info level
    p0        => l_value
);

-- Enable/disable debug for current session
apex_debug.enable(p_level => 4);   -- enable at info level
apex_debug.disable;

-- Debug level constants
apex_debug.c_log_level_error        -- 1
apex_debug.c_log_level_warn         -- 2
apex_debug.c_log_level_info         -- 4
apex_debug.c_log_level_app_trace    -- 6
apex_debug.c_log_level_engine_trace -- 9

-- Enter/leave (for structured debug)
apex_debug.enter('my_procedure', 'p_param1', p_param1);
-- ... procedure body ...
apex_debug.trace('leaving my_procedure');
```

---

## Authentication & Tokens

### APEX_JWT

JSON Web Token handling.

```sql
-- Encode JWT
l_token := apex_jwt.encode(
    p_iss       => 'my_app',
    p_sub       => 'user123',
    p_aud       => 'api.example.com',
    p_iat_ts    => SYSTIMESTAMP,
    p_exp_sec   => 3600,       -- expires in 1 hour
    p_signature_key => utl_raw.cast_to_raw('my_secret_key'),
    p_signature_algorithm => 'HS256'   -- HS256, RS256
);

-- Decode JWT
l_payload := apex_jwt.decode(
    p_token         => l_token,
    p_signature_key => utl_raw.cast_to_raw('my_secret_key')
);

-- Validate JWT
l_valid := apex_jwt.validate(
    p_token         => l_token,
    p_signature_key => utl_raw.cast_to_raw('my_secret_key'),
    p_iss           => 'my_app',
    p_aud           => 'api.example.com'
);
```

---

## Plugins

### APEX_PLUGIN

```sql
-- Get plugin file
apex_plugin.get_file(
    p_plugin   => l_plugin,
    p_name     => 'script.js'
) RETURN apex_plugin.t_plugin_file;
```

### APEX_PLUGIN_UTIL

Utility functions for plugin development.

```sql
-- Execute PL/SQL code dynamically
apex_plugin_util.execute_plsql_code(
    p_plsql_code => l_code
);

-- Get data from a query (for plugin data source)
l_data := apex_plugin_util.get_data(
    p_sql_statement  => l_sql,
    p_min_columns    => 2,
    p_max_columns    => 5,
    p_component_name => 'MY_PLUGIN'
);

-- Get data2 (returns apex_exec context)
l_context := apex_plugin_util.get_data2(
    p_sql_statement  => l_sql,
    p_min_columns    => 1,
    p_max_columns    => 10,
    p_component_name => 'MY_PLUGIN'
);

-- Get AJAX value (for item plugin AJAX callbacks)
l_value := apex_plugin_util.get_element_value(
    p_item => l_item,
    p_param => apex_application.g_x01
);

-- Replace substitution strings in plugin attributes
l_result := apex_plugin_util.replace_substitutions(
    p_value => l_attribute_value
);

-- Page item value helpers
apex_plugin_util.get_value_as_varchar2(
    p_data_type => l_data_type,
    p_value     => l_value
) RETURN VARCHAR2;

-- Print escaped JSON value
apex_plugin_util.print_json_http_header;
apex_plugin_util.print_escaped_value(p_value => l_value);
```

---

## Utilities

### APEX_UTIL

The largest utility package. Session state, user management, security, URLs, files.

#### Session State

```sql
-- Get/set session state (same as V()/apex_util.set_session_state)
apex_util.get_session_state(p_item => 'P10_NAME') RETURN VARCHAR2;
apex_util.set_session_state(p_name => 'P10_NAME', p_value => 'John');

-- Clear session state for a page
apex_util.clear_page_cache(p_page_id => 10);

-- Clear session state for all pages
apex_util.clear_app_cache(p_app_id => :APP_ID);

-- Clear specific items
apex_util.clear_session_state(p_item_name => 'P10_NAME');
```

#### User Management

```sql
-- Create user
apex_util.create_user(
    p_user_name                    => 'JDOE',
    p_first_name                   => 'John',
    p_last_name                    => 'Doe',
    p_email_address                => 'jdoe@example.com',
    p_web_password                 => 'SecurePass123!',
    p_change_password_on_first_use => 'N',
    p_account_locked               => 'N'
);

-- Edit user
apex_util.edit_user(
    p_user_id      => l_user_id,
    p_user_name    => 'JDOE',
    p_email_address => 'newemail@example.com'
);

-- Lock/unlock user
apex_util.lock_account(p_user_name => 'JDOE');
apex_util.unlock_account(p_user_name => 'JDOE');

-- Change password
apex_util.change_current_user_pw(p_new_password => 'NewPass456!');

-- Get user ID
apex_util.get_user_id(p_username => 'JDOE') RETURN NUMBER;

-- Get email
apex_util.get_email(p_username => 'JDOE') RETURN VARCHAR2;

-- Check if account expired
apex_util.is_login_password_valid(
    p_username => 'JDOE',
    p_password => 'test'
) RETURN BOOLEAN;
```

#### Groups

```sql
-- Create group
apex_util.create_user_group(
    p_group_name => 'MANAGERS',
    p_group_desc => 'Manager group'
);

-- Add user to group
apex_util.add_user_to_group(
    p_user_name  => 'JDOE',
    p_group_name => 'MANAGERS'
);

-- Check group membership
apex_util.current_user_in_group(p_group_name => 'MANAGERS') RETURN BOOLEAN;

-- Get group ID
apex_util.get_group_id(p_group_name => 'MANAGERS') RETURN NUMBER;
```

#### Preferences

```sql
-- Set preference (persisted per user)
apex_util.set_preference(
    p_preference => 'MY_PREF',
    p_value      => 'my_value',
    p_user       => :APP_USER
);

-- Get preference
apex_util.get_preference(
    p_preference => 'MY_PREF',
    p_user       => :APP_USER
) RETURN VARCHAR2;

-- Remove preference
apex_util.remove_preference(
    p_preference => 'MY_PREF',
    p_user       => :APP_USER
);
```

#### Cache

```sql
-- Purge stale session data
apex_util.cache_purge_stale(p_application => :APP_ID);

-- Get cache age
apex_util.cache_get_date_of_page_cache(
    p_application => :APP_ID,
    p_page        => 10
) RETURN DATE;
```

#### URLs & Security

```sql
-- Prepare URL (with session and checksum)
apex_util.prepare_url(
    p_url       => 'f?p=' || :APP_ID || ':10:' || :APP_SESSION || '::NO::P10_ID:' || l_id,
    p_checksum_type => 'SESSION'  -- SESSION, PRIVATE_BOOKMARK, PUBLIC_BOOKMARK
) RETURN VARCHAR2;

-- URL encoding
apex_util.url_encode(p_url => 'value with spaces') RETURN VARCHAR2;

-- Host URL (for building absolute URLs)
apex_util.host_url(p_option => 'SCRIPT') RETURN VARCHAR2;
-- Options: 'HTTP_HOST', 'SCRIPT', 'IMAGES'

-- Hash
apex_util.get_hash(
    p_values => apex_t_varchar2(l_val1, l_val2, l_val3)
) RETURN VARCHAR2;
```

#### Files

```sql
-- Get file from APEX file upload
apex_util.get_blob_file_src(
    p_item_name => 'P10_FILE',
    p_v1        => l_pk_value
) RETURN VARCHAR2;  -- returns URL to the file

-- Count uploaded files
apex_util.get_file_id(p_name => 'P10_FILE') RETURN NUMBER;
```

#### Miscellaneous

```sql
-- Get build option status
apex_util.get_build_option_status(
    p_application_id   => :APP_ID,
    p_build_option_name => 'FEATURE_X'
) RETURN VARCHAR2;  -- 'INCLUDE' or 'EXCLUDE'

-- Set build option
apex_util.set_build_option_status(
    p_application_id   => :APP_ID,
    p_build_option_name => 'FEATURE_X',
    p_build_status     => 'INCLUDE'
);

-- Table to string / string to table
apex_util.table_to_string(p_table => l_arr, p_sep => ':') RETURN VARCHAR2;
apex_util.string_to_table(p_string => 'A:B:C', p_separator => ':') RETURN apex_application_global.vc_arr2;

-- Save session state for items
apex_util.set_session_state('P10_X', 'value');

-- IR report URL
apex_util.ir_filter(
    p_page_id    => 10,
    p_column     => 'DEPARTMENT',
    p_operator   => 'EQ',
    p_value      => 'Sales'
) RETURN VARCHAR2;
```

---

## Common Patterns

### Standard AJAX Callback (PL/SQL + JS)

**PL/SQL Process** (Process Point: "On Demand"):

```sql
-- Process name: GET_EMPLOYEE_DATA
DECLARE
    l_emp_id NUMBER := apex_application.g_x01;
    l_rec    employees%ROWTYPE;
BEGIN
    SELECT * INTO l_rec FROM employees WHERE id = l_emp_id;

    apex_json.open_object;
    apex_json.write('success', TRUE);
    apex_json.write('name', l_rec.name);
    apex_json.write('salary', l_rec.salary);
    apex_json.write('department', l_rec.department);
    apex_json.close_object;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        apex_json.open_object;
        apex_json.write('success', FALSE);
        apex_json.write('message', 'Employee not found');
        apex_json.close_object;
END;
```

**JavaScript caller:**

```javascript
apex.server.process('GET_EMPLOYEE_DATA', {
    x01: $v('P10_EMP_ID')
}, {
    success: function(data) {
        if (data.success) {
            $s('P10_EMP_NAME', data.name);
            $s('P10_SALARY', data.salary);
        } else {
            apex.message.showErrors([{
                type: 'error',
                location: 'page',
                message: data.message
            }]);
        }
    },
    error: function(jqXHR, textStatus, errorThrown) {
        apex.message.showErrors([{
            type: 'error',
            location: 'page',
            message: 'Server error: ' + errorThrown
        }]);
    },
    dataType: 'json'
});
```

### Large CLOB Response Pattern

```sql
-- NEVER do this for large data:
-- apex_json.write('data', apex_json.stringify(l_cursor));  -- TRUNCATES at 32K!

-- CORRECT: Use write with CLOB overload
DECLARE
    l_clob CLOB;
BEGIN
    -- Build the CLOB content
    DBMS_LOB.CREATETEMPORARY(l_clob, TRUE);
    -- ... populate l_clob ...

    apex_json.open_object;
    apex_json.write('data', l_clob);  -- safe for any size
    apex_json.close_object;

    DBMS_LOB.FREETEMPORARY(l_clob);
END;
```

### APEX_EXEC Always-Close Pattern

```sql
DECLARE
    l_context apex_exec.t_context;
BEGIN
    l_context := apex_exec.open_query_context(
        p_location  => apex_exec.c_location_local_db,
        p_sql_query => 'SELECT * FROM emp'
    );

    WHILE apex_exec.next_row(l_context) LOOP
        -- process rows
        NULL;
    END LOOP;

    apex_exec.close(l_context);
EXCEPTION
    WHEN OTHERS THEN
        apex_exec.close(l_context);
        RAISE;
END;
```

---

## Critical Notes

1. **NEVER use `apex_json.stringify` for large CLOBs** - it truncates at 32K VARCHAR2 limit. Always use the `apex_json.write(p_name, p_value CLOB)` overload.

2. **ALWAYS close `apex_exec` contexts** - in both success and exception paths. Failing to close leaks database cursors.

3. **ALWAYS call `apex_session.detach`** after `apex_session.attach` in ORDS handlers, even in exception paths.

4. **`apex_json.free_output`** must be called after `apex_json.get_clob_output` to prevent memory leaks.

5. **`apex_mail.push_queue`** must be called after `apex_mail.send` - emails are not sent immediately.

6. **`apex_web_service.g_status_code`** is only valid immediately after `make_rest_request` - check it before any other APEX_WEB_SERVICE call.

7. **`apex_application.stop_apex_engine`** raises an internal exception - do not catch it with `WHEN OTHERS`.

8. **Use `apex_error.add_error` instead of `RAISE_APPLICATION_ERROR`** in APEX processes for proper error display.

9. **`apex_debug` messages are only visible** when debug mode is enabled for the session (URL parameter `&DEBUG=YES` or `apex_debug.enable`).

10. **`apex_collection` data is session-scoped** and automatically cleaned up when the session expires. Do not use for persistent data.
