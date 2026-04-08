# Oracle APEX JavaScript APIs - Complete Reference

> **Purpose**: Complete reference for all APEX client-side JavaScript API namespaces.
> Oracle APEX 20.2 compatible. Includes methods, parameters, return types, and practical patterns.

---

## Table of Contents

1. [apex.server](#apexserver)
2. [apex.item](#apexitem)
3. [apex.region](#apexregion)
4. [apex.page](#apexpage)
5. [apex.message](#apexmessage)
6. [apex.navigation](#apexnavigation)
7. [apex.event](#apexevent)
8. [apex.da](#apexda)
9. [apex.util](#apexutil)
10. [apex.debug](#apexdebug)
11. [apex.lang](#apexlang)
12. [apex.locale](#apexlocale)
13. [apex.theme](#apextheme)
14. [apex.storage](#apexstorage)
15. [apex.actions](#apexactions)
16. [apex.env](#apexenv)
17. [Global Objects](#global-objects)
18. [Legacy Functions](#legacy-functions)
19. [Practical Patterns](#practical-patterns)

---

## apex.server

AJAX communication with the APEX server. The primary way to call server-side processes from JavaScript.

### apex.server.process

Call an On Demand PL/SQL process (AJAX Callback).

```javascript
apex.server.process(
    pName,      // String: process name (case-sensitive)
    pData,      // Object: data to send
    pOptions    // Object: jQuery.ajax options + APEX extensions
)
// Returns: jQuery Promise (jqXHR)
```

**pData object:**

| Property | Type | Description |
|----------|------|-------------|
| `pageItems` | String/Array/jQuery | Items to submit. String: `"#P10_ID,#P10_NAME"` or comma-separated names `"P10_ID,P10_NAME"`. Array: `["P10_ID","P10_NAME"]`. jQuery: `$("#P10_ID,#P10_NAME")` |
| `x01` - `x20` | String | Custom scalar values, available as `apex_application.g_x01` - `g_x20` in PL/SQL |
| `f01` - `f20` | Array | Custom array values, available as `apex_application.g_f01` - `g_f20` in PL/SQL |

**pOptions object:**

| Property | Type | Description |
|----------|------|-------------|
| `success` | Function(data) | Success callback |
| `error` | Function(jqXHR, textStatus, errorThrown) | Error callback |
| `dataType` | String | Response type: `"json"`, `"text"`, `"html"`, `"xml"` (default: `"json"`) |
| `loadingIndicator` | String/jQuery/Function | Element to show spinner on, or function returning element. Function receives jQuery object of loading indicator and must return it. |
| `loadingIndicatorPosition` | String | `"centered"`, `"before"`, `"after"`, `"prepend"`, `"append"` |
| `queue` | Object | `{name: "queueName", action: "replace"/"wait"/"lazyWrite"}` |
| `refreshObject` | jQuery | Element to trigger `apexbeforerefresh`/`apexafterrefresh` events on |
| `refreshObjectData` | Object | Additional data passed with refresh events |
| `clear` | Function | Called before AJAX to clear previous results |
| `target` | Element | Event target for `apexbeforerefresh`/`apexafterrefresh` |
| `async` | Boolean | Async request (default: true) |

**Example:**

```javascript
apex.server.process('GET_DATA', {
    pageItems: '#P10_DEPT_ID,#P10_STATUS',
    x01: 'ACTIVE',
    x02: '100',
    f01: ['A', 'B', 'C']
}, {
    success: function(data) {
        console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        apex.debug.error('AJAX error:', textStatus, errorThrown);
    },
    dataType: 'json',
    loadingIndicator: '#my_region',
    loadingIndicatorPosition: 'centered'
});
```

### apex.server.plugin

Call a plug-in AJAX callback.

```javascript
apex.server.plugin(
    pAjaxIdentifier,  // String: plugin AJAX identifier (from apex_plugin.get_ajax_identifier)
    pData,             // Object: same as process pData
    pOptions           // Object: same as process pOptions
)
```

### apex.server.url

Get the APEX AJAX URL for manual requests.

```javascript
var url = apex.server.url({
    // Same pData properties as process
    pageItems: '#P10_ID'
});
```

### apex.server.chunk

Send data in chunks (for large payloads that exceed URL limits).

```javascript
apex.server.chunk(
    pName,          // String: process name
    pData,          // Object: data to send
    pOptions,       // Object: options
    pChunkSize      // Number: max chars per chunk (default 8000)
)
```

### apex.server.loadScript

Dynamically load a JavaScript file.

```javascript
apex.server.loadScript(
    pUrl,       // String: URL of the script
    pOptions    // Object: { async: true/false }
)
// Returns: jQuery Promise
```

---

## apex.item

Interface for interacting with page items. Supports both the functional API and the item object API.

### Get Item Object

```javascript
// Get the apex.item interface for a specific item
var item = apex.item('P10_NAME');

// Check if item exists
if (apex.item('P10_NAME').node) {
    // item exists on the page
}
```

### Methods

```javascript
var item = apex.item('P10_NAME');

// Value
item.getValue()                      // Returns: String - current value
item.setValue(pValue, pDisplayValue)  // Set value. pDisplayValue for LOV items
item.isEmpty()                       // Returns: Boolean
item.isChanged()                     // Returns: Boolean - changed since page load

// Display
item.show(pShowRow)                  // Show item. pShowRow: true = show container row too
item.hide(pHideRow)                  // Hide item. pHideRow: true = hide container row too
item.enable()                        // Enable the item
item.disable()                       // Disable the item (grayed out, not submitted)
item.isDisabled()                    // Returns: Boolean

// Validation
item.setValidity(pValidity)          // pValidity: "valid" or object with valid:false, message:""
item.getValidity()                   // Returns: { valid: Boolean }
item.getValidationMessage()          // Returns: String - current validation message

// Focus
item.setFocus()                      // Set keyboard focus to the item

// Refresh (for LOV items)
item.refresh()                       // Refresh the item (re-execute LOV query)

// Multi-value items (checkboxes, shuttle)
item.addValue(pValue)                // Add a value to multi-value item
item.removeValue(pValue)             // Remove a value from multi-value item

// Display value
item.displayValueFor(pValue)         // Returns: String - display text for a given value

// Properties
item.id                              // String: item name/ID
item.node                            // DOM Element: the actual HTML element
item.element                         // jQuery object wrapping the element
item.item_type                       // String: item type
```

### Shortcut Functions

```javascript
// These work the same as apex.item('NAME').getValue() etc.
$v('P10_NAME')                        // Get value (returns String)
$v2('P10_NAME')                       // Get value as array (for multi-value items)
$s('P10_NAME', 'value')               // Set value
$s('P10_NAME', 'value', 'Display')    // Set value with display value
```

---

## apex.region

Interface for interacting with APEX regions.

### Get Region Object

```javascript
var region = apex.region('my_static_id');
```

### Methods

```javascript
var region = apex.region('my_static_id');

// Refresh the region (re-execute source query)
region.refresh()

// Get the underlying widget (e.g., Interactive Grid, Interactive Report)
region.widget()                       // Returns: jQuery object of the widget

// Set focus to the region
region.focus()

// Call a method on the underlying widget
region.call('getActions')             // Call widget method by name

// Get the region element
region.element                        // jQuery object of the region container

// Alternative loading indicator
region.alternateLoadingIndicator      // jQuery element or null

// Destroy the region
region.destroy()
```

### Static Methods

```javascript
// Create a region
apex.region.create(pStaticId, pOptions)

// Destroy a region
apex.region.destroy(pStaticId)

// Find closest region to an element
apex.region.findClosest(pElement)     // Returns: region object or null

// Check if a region exists
apex.region.isRegion(pStaticId)       // Returns: Boolean
```

---

## apex.page

Page-level operations: submit, validate, warn on unsaved changes.

### apex.page.submit

```javascript
// Simple submit
apex.page.submit('SAVE');

// Submit with options
apex.page.submit({
    request:        'SAVE',               // request value (like button REQUEST)
    set: {                                 // set item values before submit
        'P10_STATUS': 'APPROVED',
        'P10_DATE':   '2026-04-08'
    },
    showWait:       true,                  // show processing spinner
    submitIfEnter:  false,                 // only submit on explicit call
    reloadOnSubmit: 'always',              // 'always', 'only-for-success', or false
    ignoreChange:   false,                 // skip unsaved changes warning
    validate:       true                   // run client-side validations first
});
```

### apex.page.validate

```javascript
// Run client-side validations
var isValid = apex.page.validate();  // Returns: Boolean
```

### apex.page.isChanged

```javascript
// Check if any item on the page has been modified
var changed = apex.page.isChanged();  // Returns: Boolean
```

### apex.page.cancelSubmit

```javascript
// Cancel a pending submit (e.g., in before-submit handler)
apex.page.cancelSubmit();
```

### apex.page.confirm

```javascript
// Show confirmation dialog before submitting
apex.page.confirm('Are you sure you want to delete?', 'DELETE');

// With full options
apex.page.confirm({
    message:    'Are you sure?',
    title:      'Confirm Delete',
    request:    'DELETE',
    set: {
        'P10_STATUS': 'DELETED'
    }
});
```

### apex.page.warnOnUnsavedChanges

```javascript
// Enable unsaved changes warning
apex.page.warnOnUnsavedChanges('You have unsaved changes.');

// Cancel the warning
apex.page.cancelWarnOnUnsavedChanges();
```

---

## apex.message

Display messages, errors, alerts, and confirmations.

### apex.message.showErrors

```javascript
// Show errors on the page
apex.message.showErrors([
    {
        type:       'error',              // 'error' or 'warning'
        location:   ['page', 'inline'],   // 'page' = notification area, 'inline' = next to item
        pageItem:   'P10_NAME',           // item to associate error with (for inline)
        message:    'Name is required',   // error message text
        unsafe:     false                 // true = message contains HTML (default: false)
    },
    {
        type:       'error',
        location:   'page',               // page-level only (no inline)
        message:    'General error occurred'
    }
]);
```

### apex.message.clearErrors

```javascript
// Clear all displayed errors
apex.message.clearErrors();
```

### apex.message.alert

```javascript
// Show an alert dialog (replaces native alert)
apex.message.alert('Operation completed successfully', function() {
    // callback after user clicks OK
});
```

### apex.message.confirm

```javascript
// Show a confirmation dialog
apex.message.confirm('Are you sure?', function(okPressed) {
    if (okPressed) {
        // user confirmed
        apex.page.submit('DELETE');
    }
});
```

### apex.message.showPageSuccess

```javascript
// Show success message in the notification area
apex.message.showPageSuccess('Record saved successfully.');
```

### apex.message.hidePageSuccess

```javascript
// Hide the success message
apex.message.hidePageSuccess();
```

### apex.message.setThemeHooks

```javascript
// Customize how messages are displayed (for theme developers)
apex.message.setThemeHooks({
    beforeShow: function(pMsgType, pElement$) {
        // called before showing message
    },
    beforeHide: function(pMsgType, pElement$) {
        // called before hiding message
    }
});
```

### apex.message.addVisibilityCheck

```javascript
// Add a function to check if inline errors are visible
apex.message.addVisibilityCheck(function(pItem) {
    // return true if the item's error area is visible
    return $(pItem).is(':visible');
});
```

---

## apex.navigation

Page navigation, dialogs, and popups.

### apex.navigation.redirect

```javascript
// Redirect to a URL
apex.navigation.redirect('f?p=400:10:&APP_SESSION.::NO::P10_ID:123');

// Redirect to a URL (with substitution)
apex.navigation.redirect(apex.util.makeApplicationUrl({
    pageId: 10,
    itemNames: ['P10_ID'],
    itemValues: ['123']
}));
```

### apex.navigation.openInNewWindow

```javascript
// Open URL in new window/tab
apex.navigation.openInNewWindow(
    'https://example.com',
    '_blank',                       // target
    { width: 800, height: 600 }     // optional window features
);
```

### apex.navigation.dialog

Open a modal or non-modal dialog page.

```javascript
// Open dialog
apex.navigation.dialog(
    pUrl,       // String: URL of the dialog page
    pOptions,   // Object: dialog options
    pCssClasses,// String: additional CSS classes
    pTriggeringElement  // jQuery: element that triggered the dialog
);

// pOptions:
{
    title:    'Edit Employee',        // dialog title
    height:   500,                    // height in pixels
    width:    700,                    // width in pixels
    maxWidth: 960,                    // max width
    modal:    true,                   // true for modal, false for non-modal
    dialog:   null,                   // existing dialog element to reuse
    resizable: true,
    draggable: true,
    closeText: 'Close',
    dialogClass: 'my-dialog'
}
```

### apex.navigation.dialog.close

Close a dialog and optionally pass data back to the parent page.

```javascript
// Close dialog (from within the dialog page)
apex.navigation.dialog.close(true);  // true = fire dialogclose event

// Close with data (triggers Dialog Closed event on parent)
apex.navigation.dialog.close(true, {
    P10_ID:   '123',
    P10_NAME: 'John Doe'
});
```

### apex.navigation.popup

Open a popup window.

```javascript
apex.navigation.popup({
    url:    'f?p=400:20:&APP_SESSION.',
    name:   'my_popup',
    width:  800,
    height: 600
});
```

---

## apex.event

Custom event handling.

### apex.event.trigger

```javascript
// Trigger a custom event
apex.event.trigger(
    '#P10_STATUS',      // selector or jQuery object
    'myCustomEvent',    // event name
    { key: 'value' }   // optional data object
);

// Trigger on document
apex.event.trigger(document, 'myAppEvent', { action: 'refresh' });

// Listen for custom events
$(document).on('myAppEvent', function(event, data) {
    console.log(data.action);  // 'refresh'
});

// Trigger on a region (useful for custom refresh)
apex.event.trigger('#my_region', 'apexrefresh');
```

---

## apex.da

Dynamic Action utilities. Used inside DA JavaScript actions.

### Context (this) Inside DA Actions

Inside a "Execute JavaScript Code" Dynamic Action, `this` refers to:

```javascript
this.affectedElements    // jQuery: the affected elements
this.browserEvent        // Event: the browser event that triggered the DA
this.data                // Object: any data passed with the event
this.triggeringElement    // Element: the triggering element
this.action              // Object: the action configuration
this.resumeCallback      // Function: call to resume after async operations
```

### apex.da.resume

Resume a Dynamic Action after an asynchronous operation.

```javascript
// In a DA with "Wait for Result" = Yes:
var lResumeCallback = this.resumeCallback;

apex.server.process('MY_PROCESS', {
    x01: $v('P10_ID')
}, {
    success: function(data) {
        // Process result...
        // Then resume the DA chain
        lResumeCallback();
    },
    dataType: 'json'
});
```

### apex.da.cancel

Cancel the remaining actions in a Dynamic Action.

```javascript
// Stop all subsequent actions in this DA
apex.da.cancel();
```

### apex.da.handleAjaxErrors

Default AJAX error handler for Dynamic Actions.

```javascript
apex.da.handleAjaxErrors(jqXHR, textStatus, errorThrown);
```

---

## apex.util

General utility functions.

### Escaping

```javascript
// HTML escape
apex.util.escapeHTML('<script>alert("xss")</script>')
// Returns: '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'

// HTML attribute escape
apex.util.escapeHTMLAttr('value "with" quotes')

// CSS selector escape (for IDs with special characters like colons or periods)
apex.util.escapeCSS('P10:NAME')
// Returns: 'P10\\:NAME'
```

### Spinner

```javascript
// Show spinner on an element
var spinner$ = apex.util.showSpinner($('#my_region'));

// Remove spinner
spinner$.remove();

// Show spinner with options
var spinner$ = apex.util.showSpinner($('#my_region'), {
    alert: 'Loading...',    // screen reader text
    spinnerClass: 'u-Processing'
});
```

### Template

```javascript
// Apply substitution template
apex.util.applyTemplate(
    'Hello #NAME#, you have #COUNT# items.',
    {
        placeholders: {
            NAME:  'John',
            COUNT: '5'
        }
    }
);
// Returns: 'Hello John, you have 5 items.'
```

### Debounce

```javascript
// Debounce a function (delay execution until pause in calls)
var debouncedSearch = apex.util.debounce(function() {
    // search logic here
}, 300);  // 300ms delay

$('#P10_SEARCH').on('keyup', debouncedSearch);
```

### HTML Builder

```javascript
// Efficient HTML string building
var out = apex.util.htmlBuilder();
out.markup('<div')
   .attr('class', 'my-class')
   .attr('id', 'my-id')
   .markup('>')
   .content('Hello World')  // auto-escapes HTML
   .markup('</div>');
var html = out.toString();
```

### Other Utilities

```javascript
// Strip HTML tags
apex.util.stripHTML('<p>Hello <b>World</b></p>')
// Returns: 'Hello World'

// Compare arrays
apex.util.arrayEqual([1,2,3], [1,2,3])  // Returns: true

// Convert to array
apex.util.toArray(nodeList)  // Convert NodeList/arguments to Array

// Parse ISO 8601 date string
apex.util.getDateFromISO8601String('2026-04-08T12:00:00Z')
// Returns: Date object

// Invoke after browser paint
var id = apex.util.invokeAfterPaint(function() {
    // runs after next paint cycle (like requestAnimationFrame)
});
apex.util.cancelInvokeAfterPaint(id);

// Get scrollbar size
var size = apex.util.getScrollbarSize();  // Returns: { width: N, height: N }

// Get nested object property safely
apex.util.getNestedObject({ a: { b: { c: 42 } } }, 'a.b.c')
// Returns: 42
```

---

## apex.debug

Client-side debugging and logging.

### Log Methods

```javascript
// Log at different levels
apex.debug.error('Critical error:', errorObj);       // Level 1
apex.debug.warn('Warning:', warningMsg);              // Level 2
apex.debug.info('Info:', infoMsg);                    // Level 4
apex.debug.trace('Trace:', traceMsg);                 // Level 6
apex.debug.log('General log:', msg);                  // alias for info

// Generic message with level
apex.debug.message(apex.debug.LOG_LEVEL.INFO, 'Message');
```

### Level Management

```javascript
// Get current debug level
var level = apex.debug.getLevel();

// Set debug level
apex.debug.setLevel(apex.debug.LOG_LEVEL.INFO);

// Level constants
apex.debug.LOG_LEVEL.OFF           // 0
apex.debug.LOG_LEVEL.ERROR         // 1
apex.debug.LOG_LEVEL.WARN          // 2
apex.debug.LOG_LEVEL.INFO          // 4
apex.debug.LOG_LEVEL.APP_TRACE     // 6
apex.debug.LOG_LEVEL.ENGINE_TRACE  // 9
```

---

## apex.lang

Internationalization and message handling.

```javascript
// Get a translated message
apex.lang.getMessage('MY_MSG_KEY')
// Returns: String (the translated message or key if not found)

// Format message with positional substitutions
apex.lang.formatMessage('GREETING', 'John')
// If GREETING = 'Hello %0!' returns: 'Hello John!'

// Format without HTML escaping
apex.lang.formatMessageNoEscape('HTML_MSG', '<b>bold</b>')

// Format a string directly (not from message key)
apex.lang.format('Hello %0, you have %1 items.', 'John', 5)
// Returns: 'Hello John, you have 5 items.'

// Format without escaping
apex.lang.formatNoEscape('HTML: %0', '<b>bold</b>')

// Check if message exists
apex.lang.hasMessage('MY_MSG_KEY')  // Returns: Boolean

// Load messages from server
apex.lang.loadMessages(['MSG_KEY_1', 'MSG_KEY_2'])
// Returns: Promise

// Load messages if not already loaded
apex.lang.loadMessagesIfNeeded(['MSG_KEY_1', 'MSG_KEY_2'])
// Returns: Promise

// Add messages directly
apex.lang.addMessages({
    'MY_KEY': 'My Message',
    'OTHER':  'Other Message'
});

// Clear all loaded messages
apex.lang.clearMessages();
```

---

## apex.locale

Locale and number formatting.

```javascript
// Format number
apex.locale.formatNumber(1234567.89)
// Returns: '1,234,567.89' (based on locale)

// Format compact number
apex.locale.formatCompactNumber(1234567)
// Returns: '1.2M' (based on locale)

// Get locale info
apex.locale.getCurrency()           // Returns: currency symbol
apex.locale.getLanguage()           // Returns: language code (e.g., 'en')
apex.locale.getDecimalSeparator()   // Returns: '.' or ','
apex.locale.getGroupSeparator()     // Returns: ',' or '.'
apex.locale.getAbbrevDayNames()     // Returns: Array ['Sun','Mon',...]
apex.locale.getAbbrevMonthNames()   // Returns: Array ['Jan','Feb',...]
apex.locale.getDualCurrency()       // Returns: dual currency symbol
apex.locale.getISOCurrency()        // Returns: ISO currency code

// Check if locale resources are loaded
apex.locale.resourcesLoaded()       // Returns: Boolean
```

---

## apex.theme

Theme-related operations.

```javascript
// Open a collapsible/expandable region
apex.theme.openRegion($('#my_region'));

// Close a collapsible/expandable region
apex.theme.closeRegion($('#my_region'));

// Show field-level help popup
apex.theme.popupFieldHelp({
    itemId: 'P10_NAME',
    sessionId: '&APP_SESSION.'
});

// Media query helper (for responsive design)
apex.theme.mq                       // Media query breakpoints defined by theme
```

---

## apex.storage

Browser storage (cookies, localStorage, sessionStorage).

### Cookies

```javascript
// Get cookie
apex.storage.getCookie('my_cookie')
// Returns: String value or null

// Set cookie
apex.storage.setCookie('my_cookie', 'value', {
    path:    '/',
    expires: 7,          // days
    secure:  true
});
```

### Scoped Storage

```javascript
// Get scoped localStorage (namespaced to app/page to avoid conflicts)
var store = apex.storage.getScopedLocalStorage({
    prefix: 'myApp',
    useAppId: true
});
store.setItem('key', 'value');
store.getItem('key');           // Returns: 'value'
store.removeItem('key');

// Get scoped sessionStorage
var sessionStore = apex.storage.getScopedSessionStorage({
    prefix: 'myApp',
    useAppId: true
});

// Check browser support
apex.storage.hasLocalStorageSupport()     // Returns: Boolean
apex.storage.hasSessionStorageSupport()   // Returns: Boolean
```

---

## apex.actions

Action framework for toolbar buttons, keyboard shortcuts, and menus.

```javascript
// Create an actions context
var actions = apex.actions.createContext('myContext', $container);

// Add an action
actions.add({
    name:     'save',
    label:    'Save',
    action:   function(event, focusElement) {
        // save logic
    },
    shortcut: 'Ctrl+S',
    disabled: false,
    hide:     false
});

// Find a context
var ctx = apex.actions.findContext('myContext');

// Lookup an action
var action = actions.lookup('save');

// Invoke an action
actions.invoke('save');

// Update action state
actions.update('save', { disabled: true });
actions.enable('save');
actions.disable('save');
actions.show('save');
actions.hide('save');

// Remove action
actions.remove('save');

// Get context types
apex.actions.getContextTypes()

// Get contexts for a type
apex.actions.getContextsForType('myType')

// Remove context
apex.actions.removeContext('myContext')

// Keyboard shortcut support
apex.actions.shortcutSupport         // Boolean: true if shortcuts enabled

// Get/set key captions for display
apex.actions.getKeyCaps()            // Returns: Object with key labels
apex.actions.setKeyCaps(pKeyCaps)    // Set custom key labels
```

---

## apex.env

Environment variables available to JavaScript.

```javascript
apex.env.APP_ID          // Number: current application ID
apex.env.APP_PAGE_ID     // Number: current page ID
apex.env.APP_SESSION     // String: current session ID
apex.env.APP_USER        // String: current user name
apex.env.APP_FILES       // String: application files path prefix
apex.env.WORKSPACE_FILES // String: workspace files path prefix
```

---

## Global Objects

```javascript
// jQuery reference (APEX bundles jQuery)
apex.jQuery               // jQuery object (same as $)
apex.gPageContext$         // jQuery wrapper for #pFlowStepId (the page context)

// Shorthand
var $ = apex.jQuery;       // alias (usually already available as global $)
```

---

## Legacy Functions

These functions predate the `apex.*` namespace but are still widely used.

```javascript
// Get item value
$v('P10_NAME')                        // Returns: String value
$v2('P10_NAME')                       // Returns: Array of values (for multi-value items)

// Set item value
$s('P10_NAME', 'new value')
$s('P10_NAME', 'return_value', 'display_value')  // for LOV items

// Get DOM element by item name
$x('P10_NAME')                        // Returns: DOM Element (same as document.getElementById)

// Toggle item display
$x_Show('P10_NAME')                   // Show element
$x_Hide('P10_NAME')                   // Hide element
$x_Toggle('P10_NAME')                 // Toggle visibility
$x_Show_Hide('P10_NAME', 'P10_OTHER') // Show first, hide second

// Disable/Enable
$x_disableItem('P10_NAME', true)      // true = disable, false = enable

// Value check
$x_Check_For_Null('P10_NAME')         // Returns: DOM Element if empty, false if has value

// Temporary field for form submission
$u_js_temp_field()                    // legacy utility
```

---

## Practical Patterns

### AJAX Callback with Loading Indicator

```javascript
(function() {
    var lSpinner$ = apex.util.showSpinner($('#my_region'));

    apex.server.process('MY_PROCESS', {
        pageItems: '#P10_ID',
        x01: 'action_type'
    }, {
        success: function(data) {
            lSpinner$.remove();
            if (data.success) {
                apex.message.showPageSuccess(data.message);
                apex.region('my_ig').refresh();
            } else {
                apex.message.showErrors([{
                    type:     'error',
                    location: 'page',
                    message:  data.message
                }]);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            lSpinner$.remove();
            apex.message.showErrors([{
                type:     'error',
                location: 'page',
                message:  'Server error: ' + errorThrown
            }]);
        },
        dataType: 'json'
    });
})();
```

### Interactive Grid Model Manipulation

```javascript
// Get IG widget and model
var ig$    = apex.region('my_ig').widget();
var grid   = ig$.interactiveGrid('getViews', 'grid');
var model  = grid.model;

// Get selected records
var selectedRecords = grid.getSelectedRecords();
selectedRecords.forEach(function(rec) {
    var id   = model.getValue(rec, 'ID');
    var name = model.getValue(rec, 'NAME');
    console.log(id, name);
});

// Set a value in the model
selectedRecords.forEach(function(rec) {
    model.setValue(rec, 'STATUS', 'APPROVED');
});

// Add a new row
var newRec = model.insertNewRecord();
model.setValue(newRec, 'NAME', 'New Employee');

// Delete a record
model.deleteRecords(selectedRecords);

// Get all records
model.forEach(function(rec, index, id) {
    // process each record
});

// Save the grid
ig$.interactiveGrid('getActions').invoke('save');

// Refresh the grid
apex.region('my_ig').refresh();
```

### Dialog Close and Refresh Parent

```javascript
// In the DIALOG page - close and pass data back:
apex.navigation.dialog.close(true, {
    dialogPageId: $v('pFlowStepId'),
    P10_ID:       $v('P10_ID'),
    P10_NAME:     $v('P10_NAME')
});

// In the PARENT page - handle Dialog Closed event:
// (Create a DA with Event = Dialog Closed, triggering element = button/region)
// In the True Action (Execute JavaScript Code):
var data = this.data;  // data passed from dialog.close
if (data) {
    $s('P5_SELECTED_ID', data.P10_ID);
    apex.region('my_report').refresh();
}
```

### Error Display with Inline Errors

```javascript
// Clear previous errors
apex.message.clearErrors();

// Validate and show errors
var errors = [];
if (!$v('P10_NAME')) {
    errors.push({
        type:     'error',
        location: ['page', 'inline'],
        pageItem: 'P10_NAME',
        message:  'Name is required.',
        unsafe:   false
    });
}
if ($v('P10_SALARY') && isNaN($v('P10_SALARY'))) {
    errors.push({
        type:     'error',
        location: ['page', 'inline'],
        pageItem: 'P10_SALARY',
        message:  'Salary must be a number.',
        unsafe:   false
    });
}
if (errors.length > 0) {
    apex.message.showErrors(errors);
    return false;  // prevent submit
}
```

### SweetAlert2 Integration

```javascript
// SweetAlert2 must be loaded (#APP_IMAGES#sweetalert2.min.js)

// Basic alert
Swal.fire({
    title: 'Success!',
    text:  'Record saved.',
    icon:  'success'
});

// Confirmation before delete
Swal.fire({
    title:             'Delete this record?',
    text:              'This action cannot be undone.',
    icon:              'warning',
    showCancelButton:  true,
    confirmButtonColor: '#d33',
    cancelButtonColor:  '#3085d6',
    confirmButtonText:  'Yes, delete it!'
}).then(function(result) {
    if (result.isConfirmed) {
        apex.page.submit('DELETE');
    }
});

// With AJAX callback
Swal.fire({
    title:            'Processing...',
    allowOutsideClick: false,
    didOpen: function() {
        Swal.showLoading();
        apex.server.process('MY_PROCESS', {
            x01: $v('P10_ID')
        }, {
            success: function(data) {
                if (data.success) {
                    Swal.fire('Done!', data.message, 'success');
                } else {
                    Swal.fire('Error', data.message, 'error');
                }
            },
            error: function() {
                Swal.fire('Error', 'Server error occurred', 'error');
            },
            dataType: 'json'
        });
    }
});
```

### Dynamic Action Resume Pattern (Async AJAX in DA)

```javascript
// In a DA True Action "Execute JavaScript Code" with Wait for Result = Yes
var lResume = this.resumeCallback;
var lAffected = this.affectedElements;

apex.server.process('VALIDATE_DATA', {
    pageItems: '#P10_ID,#P10_STATUS'
}, {
    success: function(data) {
        if (data.valid) {
            lResume();  // continue DA chain
        } else {
            apex.message.showErrors([{
                type:     'error',
                location: 'page',
                message:  data.message
            }]);
            // Don't resume = DA chain stops
        }
    },
    dataType: 'json'
});
```

### Cascading LOV Refresh

```javascript
// When P10_DEPARTMENT changes, refresh P10_EMPLOYEE (which has cascade parent P10_DEPARTMENT)
// Usually handled declaratively, but for manual control:
$('#P10_DEPARTMENT').on('change', function() {
    // Set a dependent item
    $s('P10_EMPLOYEE', '');
    // Refresh the dependent LOV
    apex.item('P10_EMPLOYEE').refresh();
});
```

### Page Load Performance: Defer Non-Critical JS

```javascript
// In "Execute when Page Loads" or "Page Load" DA:
apex.util.invokeAfterPaint(function() {
    // This runs after the page has rendered
    // Put non-critical initialization here
    initializeCharts();
    loadExternalData();
});
```
