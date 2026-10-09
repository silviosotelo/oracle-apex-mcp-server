# APEXlang: componentes con padre `automation` (APEX 26.1)


---

action - APEXlang Reference

action

Parent: automation

Plug-in Variants: autoRowFetchtype = autoRowFetch, autoRowProcessingtype = autoRowProcessing, clearSessionStatetype = clearSessionState, closeDialogtype = closeDialog, dataLoadingtype = dataLoading, downloadtype = download, executeCodetype = executeCode, executionChaintype = executionChain, formAutoRowProcessingtype = formAutoRowProcessing, formInitializationtype = formInitialization, formPaginationtype = formPagination, generateTextWithAitype = generateTextWithAi, humanTaskCreatetype = humanTaskCreate, humanTaskManagetype = humanTaskManage, interactiveGridAutoRowProcessingtype = interactiveGridAutoRowProcessing, invokeApitype = invokeApi, invokeWorkflowtype = invokeWorkflow, legacyAutoRowProcessingtype = legacyAutoRowProcessing, legacyWebServicetype = legacyWebService, loadUploadedDatatype = loadUploadedData, parallelFlowtype = parallelFlow, parseUploadedDatatype = parseUploadedData, prepareUploadedDatatype = prepareUploadedData, printReporttype = printReport, resetPaginationtype = resetPagination, sendEMailtype = sendEMail, sendPushNotificationtype = sendPushNotification, serverSideGeocodingtype = serverSideGeocoding, switchtype = switch, tabformAddRowstype = tabformAddRows, tabformDeletetype = tabformDelete, tabformUpdatetype = tabformUpdate, userPreferencestype = userPreferences, waittype = wait, webServicetype = webService, workflowtype = workflow, workflowEndtype = workflowEnd, workflowStarttype = workflowStart

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode sendEMail sendPushNotification serverSideGeocoding

Property Groups:
source
execution
error
advanced
serverSideCondition
config
comments

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql
Applies whentype = executeCode

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = executeCode and location = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = executeCode and location = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = executeCode and location = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whentype = executeCode and location = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = executeCode and location = restEnabledSql

Copy
source {
 location: localDatabase
 language: plsql
 plsqlCode: ```plsql
 value
 ```
 javaScriptCode: ```javascript-mle
 value
 ```
 remoteServer: @component
}

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
execution {
 sequence: 42
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

 | stopExecutionOnError | boolean | Yes | true | data type=boolean

Copy
error {
 errorMessage: ```
 value
 ```
 stopExecutionOnError: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: rowsReturned noRowsReturned expression functionBody item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue never

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype in (rowsReturned)type in (noRowsReturned)

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = functionBody and language = javaScript-mle

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whentype is set

Copy
serverSideCondition {
 type: rowsReturned
 sqlQuery: ```sql
 value
 ```
 language: sql
 sqlExpression: ```sql
 value
 ```
 plsqlExpression: ```plsql
 value
 ```
 javaScriptExpression: ```javascript-mle
 value
 ```
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 item: value
 text: value
 value: value
 list: [
 value
 value
 ]
 executeCondition: forEachRow
}

config

 | Property | Type | Required | Default Value | Details

 | buildOption | reference | No | | data type=reference; lov=COMPONENT; references=buildOption

Copy
config {
 buildOption: @component
}

comments

 | Property | Type | Required | Default Value | Details

 | comments | multiline string | No | | data type=multiline string; maxLen=4000

Copy
comments {
 comments: ```
 value
 ```
}

APEXlang Example

Copy
action sample (
 name: value
 type: executeCode
 source {
 location: localDatabase
 language: plsql
 plsqlCode: ```plsql
 value
 ```
 javaScriptCode: ```javascript-mle
 value
 ```
 remoteServer: @component
 }
 execution {
 sequence: 42
 }
 error {
 errorMessage: ```
 value
 ```
 stopExecutionOnError: false
 }
 advanced {
 staticId: value
 }
 serverSideCondition {
 type: rowsReturned
 sqlQuery: ```sql
 value
 ```
 language: sql
 sqlExpression: ```sql
 value
 ```
 plsqlExpression: ```plsql
 value
 ```
 javaScriptExpression: ```javascript-mle
 value
 ```
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 item: value
 text: value
 value: value
 list: [
 value
 value
 ]
 executeCondition: forEachRow
 }
 config {
 buildOption: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

parameter - APEXlang Reference

parameter

Parent: automation

Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable = falseactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable = falseactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = falseactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = falseactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = falseactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable = falseactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable = falseactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable = falseactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable = falseactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = falseactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = falseactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = falseactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable = falseactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable = false
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | reference | Yes | | data type=reference; lov=COMPONENT; references=parameter

Property Groups:
value

value

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: staticValue restSourceDefault item sqlQuery expression functionBody collectionClob preference null

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = staticValue and name does not support BOOLEAN_PARAMETER

 | staticValue | enum | Yes | | data type=string; lov=STATIC
Valid values: true false
Applies whentype = staticValue and name supports BOOLEAN_PARAMETER

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = sqlQuery

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype = item

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = functionBody and language = javaScript-mle

 | preference | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype = preference

 | name | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype = collectionClob

 | formatMask | string | No | | data type=string; maxLen=255
Applies whenname supports NUMBER_PARAMETER and type in (staticValue)name supports NUMBER_PARAMETER and type in (item)name supports NUMBER_PARAMETER and type in (preference)name supports DATE_PARAMETER and type in (staticValue)name supports DATE_PARAMETER and type in (item)name supports DATE_PARAMETER and type in (preference)name supports TIMESTAMP_PARAMETER and type in (staticValue)name supports TIMESTAMP_PARAMETER and type in (item)name supports TIMESTAMP_PARAMETER and type in (preference)name supports TIMESTAMP_TZ_PARAMETER and type in (staticValue)name supports TIMESTAMP_TZ_PARAMETER and type in (item)name supports TIMESTAMP_TZ_PARAMETER and type in (preference)

 | trueValue | string | No | | data type=string; maxLen=10
Applies whenname supports BOOLEAN_PARAMETER and type in (item)name supports BOOLEAN_PARAMETER and type in (preference)

 | falseValue | string | No | | data type=string; maxLen=10
Applies whenname supports BOOLEAN_PARAMETER and type in (item)name supports BOOLEAN_PARAMETER and type in (preference)

Copy
value {
 type: staticValue
 staticValue: ```
 value
 ```
 sqlQuery: ```sql
 value
 ```
 item: value
 language: sql
 sqlExpression: ```sql
 value
 ```
 plsqlExpression: ```plsql
 value
 ```
 javaScriptExpression: ```javascript-mle
 value
 ```
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 preference: value
 name: value
 formatMask: value
 trueValue: value
 falseValue: value
}

APEXlang Example

Copy
parameter sample (
 name: @component
 value {
 type: staticValue
 staticValue: ```
 value
 ```
 sqlQuery: ```sql
 value
 ```
 item: value
 language: sql
 sqlExpression: ```sql
 value
 ```
 plsqlExpression: ```plsql
 value
 ```
 javaScriptExpression: ```javascript-mle
 value
 ```
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 preference: value
 name: value
 formatMask: value
 trueValue: value
 falseValue: value
 }
)
