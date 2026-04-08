# APEX Data Dictionary - Complete Reference

> **Purpose**: Definitive reference for APEX data dictionary views with ALL verified column names.
> Prevents ORA-00904 "invalid identifier" errors when querying APEX metadata.
> Oracle APEX 20.2 compatible.

---

## How to Verify Columns

Always verify column existence before writing queries:

```sql
-- Verify a specific column exists
SELECT column_name
FROM all_tab_columns
WHERE table_name = 'APEX_APPLICATION_PAGE_REGIONS'
  AND column_name = 'TEMPLATE'
ORDER BY column_id;

-- List ALL columns for a view
SELECT column_id, column_name, data_type, data_length
FROM all_tab_columns
WHERE table_name = 'APEX_APPLICATION_PAGE_REGIONS'
ORDER BY column_id;

-- Search for a column across all APEX views
SELECT table_name, column_name
FROM all_tab_columns
WHERE table_name LIKE 'APEX_APPLICATION%'
  AND column_name LIKE '%TEMPLATE%'
ORDER BY table_name, column_id;
```

---

## APEX_APPLICATION_PAGES (89 columns)

The master view for page-level metadata.

```sql
-- Identity
APPLICATION_ID                  -- numeric app ID
PAGE_ID                         -- numeric page ID
PAGE_NAME                       -- internal page name
PAGE_TITLE                      -- browser title / breadcrumb title
PAGE_ALIAS                      -- URL-friendly alias (e.g. 'home')
PAGE_MODE                       -- 'Normal', 'Modal Dialog', 'Non-Modal Dialog'
PAGE_FUNCTION                   -- 'Normal', 'Login', 'Global Page'

-- Template & Appearance
PAGE_TEMPLATE                   -- page template name (NOT 'TEMPLATE')
PAGE_CSS_CLASSES                -- extra CSS classes on <body>
PAGE_TEMPLATE_OPTIONS           -- template options (colon-separated)

-- JavaScript
JAVASCRIPT_FILE_URLS            -- external JS file URLs (e.g. #APP_IMAGES#file.js)
JAVASCRIPT_CODE                 -- inline JS placed in <head> section (CLOB)
JAVASCRIPT_CODE_ONLOAD          -- JS executed in $(document).ready() handler (CLOB)

-- CSS
CSS_FILE_URLS                   -- external CSS file URLs
INLINE_CSS                      -- inline CSS placed in <style> tag (CLOB)

-- HTML & Text
FOOTER_TEXT                     -- page footer text
PAGE_COMMENT                    -- developer comment (not rendered)
PAGE_HTML_HEADER                -- raw HTML injected into <head> (CLOB)
PAGE_HTML_ONLOAD                -- HTML body onload attribute

-- Dialog Properties (for Modal/Non-Modal pages)
DIALOG_TITLE                    -- dialog window title
DIALOG_HEIGHT                   -- dialog height in pixels
DIALOG_WIDTH                    -- dialog width in pixels
DIALOG_MAX_WIDTH                -- dialog maximum width
DIALOG_ATTRIBUTES               -- additional dialog HTML attributes
DIALOG_CSS_CLASSES              -- CSS classes on dialog container
DIALOG_CHAINED                  -- 'Yes'/'No' - chain dialog to parent

-- Security
AUTHORIZATION_SCHEME            -- authorization scheme name
PAGE_REQUIRES_AUTHENTICATION    -- 'Yes'/'No'
PAGE_ACCESS_PROTECTION          -- 'Arguments Must Have Checksum', 'No Arguments', 'Unrestricted'

-- Read Only
READ_ONLY_CONDITION_TYPE        -- condition type for read-only mode
READ_ONLY_CONDITION_EXP1        -- first expression
READ_ONLY_CONDITION_EXP2        -- second expression

-- Counts (computed)
REGIONS                         -- number of regions on page
ITEMS                           -- number of items on page
BUTTONS                         -- number of buttons on page
COMPUTATIONS                    -- number of computations
VALIDATIONS                     -- number of validations
PROCESSES                       -- number of processes
BRANCHES                        -- number of branches
REPORT_COLUMNS                  -- number of report columns

-- Build & Groups
BUILD_OPTION                    -- build option name (include/exclude)
PAGE_GROUP                      -- page group name for organization

-- Behavior
WARN_ON_UNSAVED_CHANGES         -- 'Yes'/'No' - warn before leaving dirty page
RELOAD_ON_SUBMIT                -- 'Always'/'Only for Success'
BROWSER_CACHE                   -- 'Disabled'/'Enabled'
DEEP_LINKING                    -- 'Application Default'/'Enabled'/'Disabled'

-- Audit
CREATED_BY                      -- developer who created the page
CREATED_ON                      -- creation timestamp
LAST_UPDATED_BY                 -- developer who last modified
LAST_UPDATED_ON                 -- last modification timestamp
```

### Example Query

```sql
SELECT page_id, page_name, page_mode, page_template,
       javascript_file_urls, css_file_urls,
       regions, items, buttons,
       last_updated_by, last_updated_on
FROM apex_application_pages
WHERE application_id = 400
ORDER BY page_id;
```

---

## APEX_APPLICATION_PAGE_REGIONS (174 columns)

The most column-rich APEX view. Contains all region definitions.

> **CRITICAL**: The template column is `TEMPLATE`, NOT `REGION_TEMPLATE` or `REGION_TEMPLATE_NAME`.
> The comment column is `COMPONENT_COMMENT`, NOT `REGION_COMMENT`.

```sql
-- Identity
REGION_ID                       -- unique numeric region ID
REGION_NAME                     -- region display name
APPLICATION_ID                  -- app ID
PAGE_ID                         -- page ID
PAGE_NAME                       -- page name (denormalized)

-- Hierarchy
PARENT_REGION_ID                -- parent region ID (for sub-regions)
PARENT_REGION_NAME              -- parent region name

-- Static ID & Display
STATIC_ID                       -- HTML id attribute, used in apex.region('static_id')
DISPLAY_SEQUENCE                -- render order within position

-- Template & Appearance
TEMPLATE                        -- region template name (NOT region_template, NOT region_template_name)
TEMPLATE_ID                     -- numeric template ID
REGION_TEMPLATE_OPTIONS         -- template options (colon-separated string)
COMPONENT_TEMPLATE_OPTIONS      -- component-level template options

-- CSS & Attributes
REGION_CSS_CLASSES               -- CSS classes on region wrapper div
REGION_SUB_CSS_CLASSES           -- sub-CSS classes
ICON_CSS_CLASSES                 -- icon CSS (e.g. 'fa fa-users')
REGION_ATTRIBUTES_SUBSTITUTION   -- custom HTML attributes on region

-- Grid Layout
NEW_GRID                        -- start a new grid
NEW_GRID_ROW                    -- start a new grid row
NEW_GRID_COLUMN                 -- start a new grid column
GRID_COLUMN                     -- grid column position (1-12)
GRID_COLUMN_SPAN                -- number of columns to span (1-12)
GRID_COLUMN_CSS_CLASSES          -- CSS classes on grid column wrapper
GRID_COLUMN_ATTRIBUTES           -- HTML attributes on grid column

-- Position
DISPLAY_POSITION                -- display position name ('Body', 'Breadcrumb Bar', etc.)
DISPLAY_POSITION_CODE           -- position code
DISPLAY_COLUMN                  -- display column number

-- Source
SOURCE_TYPE                     -- 'Interactive Report', 'SQL Query', 'Static Content',
                                -- 'PL/SQL Function Body', 'Interactive Grid', 'Classic Report',
                                -- 'Chart', 'List', 'Tree', 'Calendar', 'Map'
SOURCE_TYPE_CODE                -- internal source type code
REGION_SOURCE                   -- the actual SQL/PL/SQL/HTML source (CLOB)
QUERY_TYPE                      -- 'SQL Query', 'Table/View', 'Function Body Returning SQL Query'
QUERY_TYPE_CODE                 -- internal query type code

-- Table-based source
TABLE_OWNER                     -- schema owner for table/view sources
TABLE_NAME                      -- table or view name
WHERE_CLAUSE                    -- WHERE clause for table/view
ORDER_BY_CLAUSE                 -- ORDER BY clause for table/view
LOCATION                        -- 'Local Database', 'REST Enabled SQL', 'REST Source'
LOCATION_CODE                   -- internal location code

-- AJAX & JavaScript
AJAX_ENABLED                    -- 'Yes'/'No'
AJAX_ITEMS_TO_SUBMIT            -- comma-separated item names for AJAX
INIT_JAVASCRIPT_CODE            -- JS executed on region init

-- Pagination
PAGINATION_SCHEME               -- pagination type name
PAGINATION_DISPLAY_POSITION     -- position of pagination controls
MAXIMUM_ROWS_TO_QUERY           -- max rows fetched
MAXIMUM_ROW_COUNT               -- max row count for "of X" display

-- Messages
NO_DATA_FOUND_MESSAGE           -- message when query returns 0 rows
MORE_DATA_FOUND_MESSAGE         -- message when more data exists

-- Report Template
REPORT_TEMPLATE                 -- report template name (for classic reports)
REPORT_TEMPLATE_ID              -- numeric report template ID

-- Security
AUTHORIZATION_SCHEME            -- authorization scheme name
AUTHORIZATION_SCHEME_ID         -- numeric auth scheme ID

-- Conditions
CONDITION_TYPE                  -- condition type name
CONDITION_TYPE_CODE             -- internal condition code
CONDITION_EXPRESSION1           -- first expression
CONDITION_EXPRESSION2           -- second expression

-- Read Only
READ_ONLY_CONDITION_TYPE        -- read-only condition type
READ_ONLY_CONDITION_TYPE_CODE   -- internal code
READ_ONLY_CONDITION_EXP1        -- first expression
READ_ONLY_CONDITION_EXP2        -- second expression

-- Header/Footer
REGION_HEADER_TEXT               -- HTML above region content
REGION_FOOTER_TEXT               -- HTML below region content

-- Performance
LAZY_LOADING                    -- 'Yes'/'No' - defer loading

-- Build & Comments
BUILD_OPTION                    -- build option name
BUILD_OPTION_ID                 -- numeric build option ID
COMPONENT_COMMENT               -- developer comment (NOT REGION_COMMENT)

-- Counts
ITEMS                           -- number of items in this region
BUTTONS                         -- number of buttons in this region

-- Custom Attributes (for plugins and specific region types)
ATTRIBUTE_01                    -- plugin attribute 1
ATTRIBUTE_02                    -- plugin attribute 2
ATTRIBUTE_03                    -- plugin attribute 3
ATTRIBUTE_04                    -- plugin attribute 4
ATTRIBUTE_05                    -- plugin attribute 5
-- ... through ATTRIBUTE_25
ATTRIBUTE_25                    -- plugin attribute 25
```

### Example Query

```sql
SELECT region_id, region_name, source_type, template,
       static_id, display_sequence, display_position,
       DBMS_LOB.SUBSTR(region_source, 200, 1) AS source_preview,
       condition_type, authorization_scheme
FROM apex_application_page_regions
WHERE application_id = 400
  AND page_id = 945
ORDER BY display_sequence;
```

---

## APEX_APPLICATION_PAGE_ITEMS (139 columns)

All page item definitions.

> **CRITICAL**: The region column is `REGION`, NOT `REGION_NAME`.
> The comment column is `COMPONENT_COMMENT`, NOT `ITEM_COMMENT`.

```sql
-- Identity
ITEM_ID                         -- unique numeric item ID
ITEM_NAME                       -- item name (e.g. 'P10_EMPLOYEE_ID')
APPLICATION_ID                  -- app ID
PAGE_ID                         -- page ID
PAGE_NAME                       -- page name (denormalized)

-- Region
REGION                          -- region name containing this item (NOT REGION_NAME)
REGION_ID                       -- numeric region ID

-- Display
DISPLAY_SEQUENCE                -- render order within region
DISPLAY_AS                      -- display type: 'Text Field', 'Hidden', 'Select List',
                                -- 'Popup LOV', 'Display Only', 'Textarea', 'Checkbox',
                                -- 'Radio Group', 'Date Picker', 'Password', 'File Browse',
                                -- 'Rich Text Editor', 'Switch', 'Number Field'
DISPLAY_AS_CODE                 -- internal display type code

-- Label & Template
LABEL                           -- visible label text
ITEM_LABEL_TEMPLATE             -- label template: 'Optional - Floating', 'Required - Floating', 'Hidden'
ITEM_LABEL_TEMPLATE_ID          -- numeric label template ID
ITEM_TEMPLATE_OPTIONS           -- template options (colon-separated)
ITEM_CSS_CLASSES                -- CSS classes on item wrapper
ITEM_ICON_CSS_CLASSES            -- icon CSS classes (e.g. 'fa fa-search')

-- Help
PLACEHOLDER                     -- placeholder text for text inputs
INLINE_HELP_TEXT                -- help text shown inline below item

-- Source
ITEM_SOURCE                     -- source expression/column name
ITEM_SOURCE_TYPE                -- 'DB Column', 'Expression', 'Static', 'Function Body',
                                -- 'SQL Query', 'Null', 'Item', 'Preference', 'Always Null'
ITEM_SOURCE_DATA_TYPE           -- data type: 'VARCHAR2', 'NUMBER', 'DATE', 'CLOB', 'BLOB'
ITEM_SOURCE_LANGUAGE            -- language for function body (PL/SQL)

-- Default
ITEM_DEFAULT                    -- default value expression
ITEM_DEFAULT_TYPE               -- 'Static', 'PL/SQL Expression', 'PL/SQL Function Body', 'SQL Query'

-- LOV (List of Values)
LOV_NAMED_LOV                   -- shared LOV component name
LOV_DEFINITION                  -- inline LOV SQL query
LOV_DISPLAY_NULL                -- 'Yes'/'No' - show null option
LOV_NULL_TEXT                   -- display text for null option (e.g. '- Select -')
LOV_NULL_VALUE                  -- value for null option
LOV_DISPLAY_EXTRA               -- 'Yes'/'No' - display extra values not in LOV
LOV_CASCADE_PARENT_ITEMS        -- parent items for cascading LOV
AJAX_ITEMS_TO_SUBMIT            -- items submitted during AJAX LOV refresh

-- Validation
IS_REQUIRED                     -- 'Yes'/'No'

-- Read Only
READ_ONLY_CONDITION_TYPE        -- condition type
READ_ONLY_CONDITION_EXP1        -- first expression
READ_ONLY_CONDITION_EXP2        -- second expression

-- Grid Layout
NEW_GRID                        -- start new grid
NEW_GRID_ROW                    -- start new row
NEW_GRID_COLUMN                 -- start new column
GRID_COLUMN                     -- column position (1-12)
GRID_COLUMN_SPAN                -- columns to span
GRID_LABEL_COLUMN_SPAN          -- label column span
GRID_COLUMN_CSS_CLASSES          -- CSS on grid column

-- Legacy Grid
BEGINS_ON_NEW_ROW               -- legacy: new row
BEGINS_ON_NEW_CELL              -- legacy: new cell
COLUMN_SPAN                     -- legacy: column span
ROW_SPAN                        -- legacy: row span

-- Element Sizing
ITEM_ELEMENT_WIDTH              -- width in characters or pixels
ITEM_ELEMENT_MAX_LENGTH         -- max input length
ITEM_ELEMENT_HEIGHT             -- height (for textareas)

-- HTML Attributes
HTML_FORM_ELEMENT_CSS_CLASSES    -- CSS classes on the <input>/<select> element
HTML_FORM_ELEMENT_ATTRIBUTES     -- custom HTML attributes on element
PRE_ELEMENT_TEXT                 -- HTML before the element
POST_ELEMENT_TEXT                -- HTML after the element

-- Security & Conditions
AUTHORIZATION_SCHEME            -- authorization scheme name
CONDITION_TYPE                  -- condition type
CONDITION_EXPRESSION1           -- first expression
CONDITION_EXPRESSION2           -- second expression

-- Data Handling
FORMAT_MASK                     -- display/parse format mask
IS_PRIMARY_KEY                  -- 'Yes'/'No'
IS_QUERY_ONLY                   -- 'Yes'/'No' - not submitted on save
MAINTAIN_SESSION_STATE          -- 'Per Request (Memory Only)', 'Per Session (Disk)'
ESCAPE_ON_HTTP_OUTPUT           -- 'Yes'/'No' - HTML-escape on display

-- Comments & Init
COMPONENT_COMMENT               -- developer comment (NOT ITEM_COMMENT)
INIT_JAVASCRIPT_CODE            -- JS executed on item init

-- Custom Attributes
ATTRIBUTE_01                    -- type-specific attribute 1
ATTRIBUTE_02                    -- type-specific attribute 2
-- ... through ATTRIBUTE_15
ATTRIBUTE_15                    -- type-specific attribute 15
```

### Example Query

```sql
SELECT item_name, display_as, label, region,
       item_source_type, item_source,
       lov_named_lov, is_required,
       condition_type
FROM apex_application_page_items
WHERE application_id = 400
  AND page_id = 945
ORDER BY display_sequence;
```

---

## APEX_APPLICATION_PAGE_BUTTONS (53 columns)

All button definitions on pages.

```sql
-- Identity
BUTTON_ID                       -- unique numeric button ID
BUTTON_NAME                     -- internal name (e.g. 'CREATE', 'SAVE', 'DELETE')
APPLICATION_ID                  -- app ID
PAGE_ID                         -- page ID
PAGE_NAME                       -- page name

-- Region
REGION                          -- region name containing the button
REGION_ID                       -- numeric region ID

-- Display
LABEL                           -- visible button label
DISPLAY_SEQUENCE                -- render order
BUTTON_POSITION                 -- position code within region
BUTTON_POSITION_CODE            -- internal position code
BUTTON_ALIGNMENT                -- 'LEFT', 'CENTER', 'RIGHT'

-- Template & Appearance
BUTTON_TEMPLATE                 -- button template name
BUTTON_TEMPLATE_ID              -- numeric template ID
BUTTON_TEMPLATE_OPTIONS         -- template options
BUTTON_CSS_CLASSES              -- CSS classes
ICON_CSS_CLASSES                -- icon CSS (e.g. 'fa fa-save')
BUTTON_IS_HOT                   -- 'Yes'/'No' - hot/primary button styling

-- Action
BUTTON_ACTION                   -- 'SUBMIT', 'REDIRECT_URL', 'REDIRECT_PAGE', 'DEFINED_BY_DA'
BUTTON_ACTION_CODE              -- internal action code
BUTTON_REDIRECT_URL             -- URL for REDIRECT_URL action
TARGET                          -- redirect target page/URL
DATABASE_ACTION                 -- 'INSERT', 'UPDATE', 'DELETE', 'SQL_ACTION'

-- Request
BUTTON_EXECUTE_VALIDATIONS      -- 'Yes'/'No' - run validations on submit
REQUEST                         -- request value submitted (e.g. 'CREATE', 'SAVE')

-- Conditions
CONDITION_TYPE                  -- condition type
CONDITION_TYPE_CODE             -- internal code
CONDITION_EXPRESSION1           -- first expression
CONDITION_EXPRESSION2           -- second expression

-- Security
AUTHORIZATION_SCHEME            -- authorization scheme name
AUTHORIZATION_SCHEME_ID         -- numeric auth scheme ID

-- Build
BUILD_OPTION                    -- build option name
COMPONENT_COMMENT               -- developer comment

-- Grid
GRID_NEW_ROW                    -- start new grid row
GRID_NEW_COLUMN                 -- start new column
GRID_COLUMN                     -- column position
GRID_COLUMN_SPAN                -- columns to span
GRID_COLUMN_CSS_CLASSES          -- CSS on grid column

-- Audit
CREATED_BY                      -- creator
CREATED_ON                      -- creation date
LAST_UPDATED_BY                 -- last modifier
LAST_UPDATED_ON                 -- last modification date
```

### Example Query

```sql
SELECT button_name, label, button_action, request,
       button_position, button_is_hot,
       condition_type, authorization_scheme
FROM apex_application_page_buttons
WHERE application_id = 400
  AND page_id = 945
ORDER BY display_sequence;
```

---

## APEX_APPLICATION_PAGE_DA (38 columns)

Dynamic Action definitions (the event/trigger level, not the actions).

> **CRITICAL**: `FIRE_ON_INITIALIZATION` does NOT exist in this view. It exists in APEX_APPLICATION_PAGE_DA_ACTS.

```sql
-- Identity
DYNAMIC_ACTION_ID               -- unique numeric DA ID
DYNAMIC_ACTION_NAME             -- developer name for the DA
APPLICATION_ID                  -- app ID
PAGE_ID                         -- page ID
PAGE_NAME                       -- page name

-- Event
DYNAMIC_ACTION_EVENT             -- event type: 'Change', 'Click', 'Page Load', 'After Refresh',
                                 -- 'Key Down', 'Key Up', 'Dialog Closed', 'Custom',
                                 -- 'Double Click', 'Mouse Enter', 'Mouse Leave',
                                 -- 'Focus', 'Blur', 'Selection Change [Interactive Grid]',
                                 -- 'Model Saved [Interactive Grid]', 'Page Unload',
                                 -- 'Before Page Submit', 'After Page Submit'
DYNAMIC_ACTION_EVENT_CODE        -- internal event code
CUSTOM_EVENT                     -- custom event name (when event = 'Custom')

-- Triggering Element
WHEN_TYPE                        -- triggering element type: 'Item(s)', 'Region', 'Button',
                                 -- 'jQuery Selector', 'JavaScript Expression', 'Triggering Element'
WHEN_TYPE_CODE                   -- internal code
WHEN_ELEMENT                     -- specific element (item name, region static ID, jQuery selector)
WHEN_SELECTION_TYPE              -- same as WHEN_TYPE in some APEX versions
WHEN_REGION                      -- region name (if when_type = 'Region')

-- Condition
CONDITION_TYPE                   -- client-side condition type
CONDITION_TYPE_CODE              -- internal code
CONDITION_ELEMENT                -- element for condition evaluation
CONDITION_EXPRESSION             -- condition expression

-- Execution
DYNAMIC_ACTION_SEQUENCE          -- execution order
BIND_TYPE                        -- 'bind' or 'live' (event delegation)
BIND_DELEGATE_TO_SELECTOR        -- delegation parent selector
BIND_EVENT_TYPE                  -- internal bind event type

-- Security & Build
AUTHORIZATION_SCHEME             -- authorization scheme name
BUILD_OPTION                     -- build option name

-- Counts
ACTIONS                          -- number of true/false actions

-- Comments
COMPONENT_COMMENT                -- developer comment

-- Audit
CREATED_BY
CREATED_ON
LAST_UPDATED_BY
LAST_UPDATED_ON
```

### Example Query

```sql
SELECT dynamic_action_name, dynamic_action_event,
       when_type, when_element,
       condition_type, actions
FROM apex_application_page_da
WHERE application_id = 400
  AND page_id = 945
ORDER BY dynamic_action_sequence;
```

---

## APEX_APPLICATION_PAGE_DA_ACTS (44 columns)

Dynamic Action **actions** (True/False actions within a DA).

```sql
-- Identity
ACTION_ID                        -- unique numeric action ID
DYNAMIC_ACTION_ID                -- parent DA ID
APPLICATION_ID                   -- app ID
PAGE_ID                          -- page ID

-- DA reference
DYNAMIC_ACTION_NAME              -- parent DA name (denormalized)
DYNAMIC_ACTION_EVENT_CODE        -- parent event code

-- Action Definition
ACTION_SEQUENCE                  -- execution order within DA
EXECUTE_ON_PAGE_INIT             -- 'Yes'/'No' - fire on page load (THIS is the column, not FIRE_ON_INITIALIZATION)
ACTION_CODE                      -- internal action code (see table below)
ACTION_NAME                      -- display name of the action

-- When to Execute
EVENT_RESULT                     -- 'TRUE' or 'FALSE' - which branch

-- Affected Elements
AFFECTED_ELEMENTS_TYPE           -- 'Item(s)', 'Region', 'Button', 'jQuery Selector', 'Triggering Element'
AFFECTED_ELEMENTS_TYPE_CODE      -- internal code
AFFECTED_ELEMENTS                -- affected element names/selectors
AFFECTED_REGION                  -- affected region name
AFFECTED_REGION_ID               -- affected region numeric ID
AFFECTED_BUTTON                  -- affected button name

-- Custom Attributes (meaning depends on ACTION_CODE)
ATTRIBUTE_01                     -- see attribute mapping table below
ATTRIBUTE_02
ATTRIBUTE_03
ATTRIBUTE_04
ATTRIBUTE_05
ATTRIBUTE_06
ATTRIBUTE_07
ATTRIBUTE_08
ATTRIBUTE_09
ATTRIBUTE_10
ATTRIBUTE_11
ATTRIBUTE_12
ATTRIBUTE_13
ATTRIBUTE_14
ATTRIBUTE_15

-- Wait for Result
WAIT_FOR_RESULT                  -- 'Yes'/'No' - wait before next action
STOP_EXECUTION_ON_ERROR          -- 'Yes'/'No'

-- Security
AUTHORIZATION_SCHEME             -- authorization scheme name

-- Build
BUILD_OPTION                     -- build option name
COMPONENT_COMMENT                -- developer comment

-- Audit
CREATED_BY
CREATED_ON
LAST_UPDATED_BY
LAST_UPDATED_ON
```

### Attribute Mapping by ACTION_CODE

| ACTION_CODE | Action Name | ATTR_01 | ATTR_02 | ATTR_03 | ATTR_04 | ATTR_05 |
|---|---|---|---|---|---|---|
| `NATIVE_JAVASCRIPT_CODE` | Execute JavaScript Code | JS code (CLOB) | - | - | - | - |
| `NATIVE_EXECUTE_PLSQL_CODE` | Execute PL/SQL Code | PL/SQL code (CLOB) | Items to submit | Items to return | - | - |
| `NATIVE_REFRESH` | Refresh | - | - | - | - | - |
| `NATIVE_SET_VALUE` | Set Value | Set type code | Value/expression | Items to submit | Suppress change event | - |
| `NATIVE_SHOW` | Show | - | - | - | - | - |
| `NATIVE_HIDE` | Hide | - | - | - | - | - |
| `NATIVE_ENABLE` | Enable | - | - | - | - | - |
| `NATIVE_DISABLE` | Disable | - | - | - | - | - |
| `NATIVE_ADD_CLASS` | Add Class | CSS class | - | - | - | - |
| `NATIVE_REMOVE_CLASS` | Remove Class | CSS class | - | - | - | - |
| `NATIVE_SET_CSS` | Set Style | Property | Value | - | - | - |
| `NATIVE_ALERT` | Alert | Message | - | - | - | - |
| `NATIVE_CONFIRM` | Confirm | Message | - | - | - | - |
| `NATIVE_SUBMIT_PAGE` | Submit Page | Request value | Show processing | - | - | - |
| `NATIVE_CANCEL_EVENT` | Cancel Event | - | - | - | - | - |
| `NATIVE_OPEN_REGION` | Open Region | - | - | - | - | - |
| `NATIVE_CLOSE_REGION` | Close Region | - | - | - | - | - |
| `NATIVE_CLEAR` | Clear | - | - | - | - | - |
| `NATIVE_SET_FOCUS` | Set Focus | - | - | - | - | - |

### Example Query

```sql
SELECT da.dynamic_action_name, a.action_sequence, a.event_result,
       a.action_code, a.execute_on_page_init,
       a.affected_elements_type, a.affected_elements,
       DBMS_LOB.SUBSTR(a.attribute_01, 200, 1) AS attr_01_preview,
       a.attribute_02
FROM apex_application_page_da_acts a
JOIN apex_application_page_da da
  ON da.dynamic_action_id = a.dynamic_action_id
WHERE a.application_id = 400
  AND a.page_id = 945
ORDER BY da.dynamic_action_sequence, a.action_sequence;
```

---

## APEX_APPLICATION_PAGE_PROC (61 columns)

Page processes (PL/SQL, DML, Web Services, etc.).

> **CRITICAL**: Sequence column is `EXECUTION_SEQUENCE`, NOT `PROCESS_SEQUENCE`.
> Error message column is `PROCESS_ERROR_MESSAGE`, NOT `ERROR_MESSAGE`.

```sql
-- Identity
PROCESS_ID                       -- unique numeric process ID
PROCESS_NAME                     -- developer name
APPLICATION_ID                   -- app ID
PAGE_ID                          -- page ID
PAGE_NAME                        -- page name

-- Execution
EXECUTION_SEQUENCE               -- execution order (NOT PROCESS_SEQUENCE)
PROCESS_POINT                    -- 'After Submit', 'Before Header', 'After Header',
                                 -- 'Before Regions', 'After Regions', 'Processing',
                                 -- 'On Demand - Run this process when requested by AJAX'
PROCESS_POINT_CODE               -- internal code

-- Region
REGION                           -- associated region name
REGION_ID                        -- numeric region ID

-- Type & Source
PROCESS_TYPE                     -- 'PL/SQL Code', 'DML_PROCESS_ROW', 'Reset Pagination',
                                 -- 'Clear Session State', 'Close Dialog', 'Web Service',
                                 -- 'Send E-Mail', 'Data Loading', 'Execute Code'
PROCESS_TYPE_CODE                -- internal type code
PROCESS_SQL                      -- PL/SQL code block or SQL (CLOB)
PROCESS_CLOB                     -- additional CLOB content

-- Error Handling
PROCESS_ERROR_MESSAGE            -- error message shown on failure (NOT ERROR_MESSAGE)
ERROR_DISPLAY_LOCATION           -- 'Inline in Notification', 'On Error Page'

-- Success
PROCESS_SUCCESS_MESSAGE          -- success message shown on completion
PROCESS_WHEN_BUTTON_NAME         -- button that triggers this process

-- Condition
PROCESS_WHEN                     -- condition expression
PROCESS_WHEN_TYPE                -- condition type (e.g. 'Request is Contained within Expression')
PROCESS_WHEN_TYPE2               -- second condition expression
CONDITION_TYPE                   -- condition type
CONDITION_EXPRESSION1            -- first expression
CONDITION_EXPRESSION2            -- second expression

-- Security
AUTHORIZATION_SCHEME             -- authorization scheme name
AUTHORIZATION_SCHEME_ID          -- numeric auth scheme ID

-- Build
BUILD_OPTION                     -- build option name
BUILD_OPTION_ID                  -- numeric build option ID

-- Comments
COMPONENT_COMMENT                -- developer comment

-- Custom Attributes
ATTRIBUTE_01                     -- type-specific attribute 1
ATTRIBUTE_02                     -- type-specific attribute 2
-- ... through ATTRIBUTE_15
ATTRIBUTE_15

-- Audit
CREATED_BY
CREATED_ON
LAST_UPDATED_BY
LAST_UPDATED_ON
```

### Example Query

```sql
SELECT process_name, execution_sequence, process_point,
       process_type, process_when_button_name,
       DBMS_LOB.SUBSTR(process_sql, 200, 1) AS sql_preview,
       process_error_message, process_success_message,
       condition_type
FROM apex_application_page_proc
WHERE application_id = 400
  AND page_id = 945
ORDER BY execution_sequence;
```

---

## APEX_APPLICATION_PAGE_VAL (35 columns)

Page validations.

```sql
-- Identity
VALIDATION_ID                    -- unique numeric validation ID
VALIDATION_NAME                  -- developer name
APPLICATION_ID                   -- app ID
PAGE_ID                          -- page ID
PAGE_NAME                        -- page name

-- Execution
VALIDATION_SEQUENCE              -- execution order
VALIDATION_TYPE                  -- 'Function Body (returning Boolean)', 'Function Body (returning Error Text)',
                                 -- 'PL/SQL Expression', 'PL/SQL Error', 'SQL Expression',
                                 -- 'Item is NOT NULL', 'Item is NOT zero',
                                 -- 'Regular Expression', 'Item in Expression 1 is NOT NULL or zero'
VALIDATION_TYPE_CODE             -- internal type code
VALIDATION_EXPRESSION1           -- primary expression/code (CLOB)
VALIDATION_EXPRESSION2           -- secondary expression

-- Item
ASSOCIATED_ITEM                  -- item name this validation applies to
TABULAR_FORM_REGION_ID           -- for tabular form validations

-- Error
ERROR_MESSAGE                    -- error message shown on failure
ERROR_DISPLAY_LOCATION           -- 'Inline with Field', 'Inline with Field and in Notification',
                                 -- 'Inline in Notification'
ASSOCIATED_COLUMN                -- column name for tabular form errors

-- When to Validate
PROCESS_WHEN_BUTTON_NAME         -- button that triggers validation
PROCESS_WHEN                     -- condition expression
PROCESS_WHEN_TYPE                -- condition type

-- Condition
CONDITION_TYPE                   -- condition type
CONDITION_EXPRESSION1            -- first expression
CONDITION_EXPRESSION2            -- second expression

-- Security
AUTHORIZATION_SCHEME             -- authorization scheme name

-- Build
BUILD_OPTION                     -- build option name
COMPONENT_COMMENT                -- developer comment

-- Audit
CREATED_BY
CREATED_ON
LAST_UPDATED_BY
LAST_UPDATED_ON
```

### Example Query

```sql
SELECT validation_name, validation_sequence, validation_type,
       associated_item, error_message,
       DBMS_LOB.SUBSTR(validation_expression1, 200, 1) AS expr_preview
FROM apex_application_page_val
WHERE application_id = 400
  AND page_id = 945
ORDER BY validation_sequence;
```

---

## APEX_APPLICATION_PAGE_BRANCHES (27 columns)

Page branches (navigation after processing).

> **CRITICAL**: Sequence column is `PROCESS_SEQUENCE`, NOT `BRANCH_SEQUENCE`.

```sql
-- Identity
BRANCH_ID                        -- unique numeric branch ID
BRANCH_NAME                      -- developer name
APPLICATION_ID                   -- app ID
PAGE_ID                          -- page ID
PAGE_NAME                        -- page name

-- Execution
PROCESS_SEQUENCE                 -- execution order (NOT BRANCH_SEQUENCE)
BRANCH_POINT                     -- 'After Processing', 'Before Processing', 'Before Validation',
                                 -- 'Before Computation', 'On Submit: Before Processing'
BRANCH_POINT_CODE                -- internal code

-- Target
BRANCH_TYPE                      -- 'Redirect to Page', 'Redirect to URL', 'Branch to PL/SQL Procedure'
BRANCH_TYPE_CODE                 -- internal type code
BRANCH_ACTION                    -- target page number, URL, or PL/SQL code

-- Page-specific targets
BRANCH_WHEN_BUTTON_NAME          -- button that triggers this branch
CLEAR_CACHE                      -- pages to clear cache for (comma-separated)
SET_ITEMS                        -- items to set (colon-separated)
SET_VALUES                       -- values to set (colon-separated)

-- Condition
CONDITION_TYPE                   -- condition type
CONDITION_TYPE_CODE              -- internal code
CONDITION_EXPRESSION1            -- first expression
CONDITION_EXPRESSION2            -- second expression

-- Security
AUTHORIZATION_SCHEME             -- authorization scheme name

-- Build
BUILD_OPTION                     -- build option name
COMPONENT_COMMENT                -- developer comment

-- Include Processing
SAVE_STATE_BEFORE_BRANCH         -- 'Yes'/'No'

-- Audit
CREATED_BY
CREATED_ON
LAST_UPDATED_BY
LAST_UPDATED_ON
```

---

## Other Useful Views

### APEX_APPLICATION_LOVS

```sql
SELECT list_of_values_name, lov_type, -- 'Static', 'Dynamic'
       lov_query,                      -- SQL query for dynamic LOVs
       application_id
FROM apex_application_lovs
WHERE application_id = 400
ORDER BY list_of_values_name;
```

### APEX_APPLICATION_PAGE_RPT_COLS

Report columns for Classic Reports and Interactive Reports.

```sql
SELECT region_name, column_alias, heading, column_type,
       display_order, display_as, -- 'WITHOUT_MODIFICATION', 'TEXT', 'LINK'
       format_mask, column_link_url, column_link_text,
       static_id, css_classes
FROM apex_application_page_rpt_cols
WHERE application_id = 400
  AND page_id = 10
ORDER BY region_name, display_order;
```

### APEX_APPLICATION_LIST_ENTRIES

Navigation menu and list entries.

```sql
SELECT list_name, entry_text, entry_target,
       display_sequence, list_entry_parent_id,
       condition_type, authorization_scheme
FROM apex_application_list_entries
WHERE application_id = 400
ORDER BY list_name, display_sequence;
```

### APEX_APPLICATION_STATIC_FILES

Application-level static files (JS, CSS, images).

```sql
SELECT file_name, mime_type, file_size,
       file_charset, created_on, last_updated_on
FROM apex_application_static_files
WHERE application_id = 400
ORDER BY file_name;
```

### APEX_WORKSPACE_STATIC_FILES

Workspace-level static files (shared across apps).

```sql
SELECT file_name, mime_type, file_size,
       created_on, last_updated_on
FROM apex_workspace_static_files
WHERE workspace = 'SANTACLARA'
ORDER BY file_name;
```

---

## ORA-00904 Common Mistakes

These are the most frequent column name errors when querying APEX views:

| Wrong Column Name | Correct Column Name | View |
|---|---|---|
| `REGION_TEMPLATE` | `TEMPLATE` | APEX_APPLICATION_PAGE_REGIONS |
| `REGION_TEMPLATE_NAME` | `TEMPLATE` | APEX_APPLICATION_PAGE_REGIONS |
| `REGION_NAME` (for items) | `REGION` | APEX_APPLICATION_PAGE_ITEMS |
| `REGION_COMMENT` | `COMPONENT_COMMENT` | APEX_APPLICATION_PAGE_REGIONS |
| `ITEM_COMMENT` | `COMPONENT_COMMENT` | APEX_APPLICATION_PAGE_ITEMS |
| `PROCESS_SEQUENCE` | `EXECUTION_SEQUENCE` | APEX_APPLICATION_PAGE_PROC |
| `BRANCH_SEQUENCE` | `PROCESS_SEQUENCE` | APEX_APPLICATION_PAGE_BRANCHES |
| `ERROR_MESSAGE` | `PROCESS_ERROR_MESSAGE` | APEX_APPLICATION_PAGE_PROC |
| `FIRE_ON_INITIALIZATION` | `EXECUTE_ON_PAGE_INIT` | APEX_APPLICATION_PAGE_DA_ACTS |
| `TEMPLATE` (for items) | `ITEM_LABEL_TEMPLATE` | APEX_APPLICATION_PAGE_ITEMS |
| `BUTTON_LABEL` | `LABEL` | APEX_APPLICATION_PAGE_BUTTONS |

---

## Verified Standard Query Examples

### 1. Full Page Inventory

```sql
SELECT p.page_id, p.page_name, p.page_mode,
       p.regions, p.items, p.buttons,
       p.processes, p.validations, p.branches
FROM apex_application_pages p
WHERE p.application_id = :app_id
ORDER BY p.page_id;
```

### 2. All Regions with Source on a Page

```sql
SELECT r.region_name, r.source_type, r.template,
       r.static_id, r.display_position,
       DBMS_LOB.SUBSTR(r.region_source, 500, 1) AS source_preview
FROM apex_application_page_regions r
WHERE r.application_id = :app_id
  AND r.page_id = :page_id
ORDER BY r.display_sequence;
```

### 3. Items with Their LOV Details

```sql
SELECT i.item_name, i.display_as, i.label,
       i.region, i.lov_named_lov, i.lov_definition,
       i.is_required, i.item_source_type, i.item_source
FROM apex_application_page_items i
WHERE i.application_id = :app_id
  AND i.page_id = :page_id
ORDER BY i.display_sequence;
```

### 4. Dynamic Actions with All Their Actions

```sql
SELECT da.dynamic_action_name, da.dynamic_action_event,
       da.when_type, da.when_element,
       a.action_sequence, a.event_result, a.action_code,
       a.execute_on_page_init,
       a.affected_elements_type, a.affected_elements,
       DBMS_LOB.SUBSTR(a.attribute_01, 200, 1) AS code_preview
FROM apex_application_page_da da
JOIN apex_application_page_da_acts a
  ON da.dynamic_action_id = a.dynamic_action_id
WHERE da.application_id = :app_id
  AND da.page_id = :page_id
ORDER BY da.dynamic_action_sequence, a.action_sequence;
```

### 5. Processes with Conditions

```sql
SELECT process_name, execution_sequence, process_point,
       process_type, process_when_button_name,
       condition_type, condition_expression1,
       DBMS_LOB.SUBSTR(process_sql, 300, 1) AS sql_preview
FROM apex_application_page_proc
WHERE application_id = :app_id
  AND page_id = :page_id
ORDER BY execution_sequence;
```

### 6. All JavaScript on a Page

```sql
SELECT 'Page JS' AS source, p.javascript_code AS code
FROM apex_application_pages p
WHERE p.application_id = :app_id AND p.page_id = :page_id AND p.javascript_code IS NOT NULL
UNION ALL
SELECT 'Page JS Onload', p.javascript_code_onload
FROM apex_application_pages p
WHERE p.application_id = :app_id AND p.page_id = :page_id AND p.javascript_code_onload IS NOT NULL
UNION ALL
SELECT 'DA: ' || da.dynamic_action_name, a.attribute_01
FROM apex_application_page_da_acts a
JOIN apex_application_page_da da ON da.dynamic_action_id = a.dynamic_action_id
WHERE a.application_id = :app_id AND a.page_id = :page_id
  AND a.action_code = 'NATIVE_JAVASCRIPT_CODE';
```

### 7. Find Items by Type Across All Pages

```sql
SELECT page_id, item_name, label, region
FROM apex_application_page_items
WHERE application_id = :app_id
  AND display_as_code = 'NATIVE_POPUP_LOV'
ORDER BY page_id, display_sequence;
```

### 8. Complete Page Export (All Components)

```sql
-- Regions
SELECT 'REGION' AS component_type, region_name AS name, display_sequence AS seq,
       source_type AS type_detail, template
FROM apex_application_page_regions
WHERE application_id = :app_id AND page_id = :page_id
UNION ALL
-- Items
SELECT 'ITEM', item_name, display_sequence, display_as, region
FROM apex_application_page_items
WHERE application_id = :app_id AND page_id = :page_id
UNION ALL
-- Buttons
SELECT 'BUTTON', button_name, display_sequence, button_action, label
FROM apex_application_page_buttons
WHERE application_id = :app_id AND page_id = :page_id
UNION ALL
-- Processes
SELECT 'PROCESS', process_name, execution_sequence, process_type, process_point
FROM apex_application_page_proc
WHERE application_id = :app_id AND page_id = :page_id
ORDER BY 1, 3;
```
