# APEXlang: componentes con padre `version` (APEX 26.1)


---

activity - APEXlang Reference

activity

Parent: version

Plug-in Variants: autoRowFetchtype = autoRowFetch, autoRowProcessingtype = autoRowProcessing, clearSessionStatetype = clearSessionState, closeDialogtype = closeDialog, dataLoadingtype = dataLoading, downloadtype = download, executeCodetype = executeCode, executionChaintype = executionChain, formAutoRowProcessingtype = formAutoRowProcessing, formInitializationtype = formInitialization, formPaginationtype = formPagination, generateTextWithAitype = generateTextWithAi, humanTaskCreatetype = humanTaskCreate, humanTaskManagetype = humanTaskManage, interactiveGridAutoRowProcessingtype = interactiveGridAutoRowProcessing, invokeApitype = invokeApi, invokeWorkflowtype = invokeWorkflow, legacyAutoRowProcessingtype = legacyAutoRowProcessing, legacyWebServicetype = legacyWebService, loadUploadedDatatype = loadUploadedData, parallelFlowtype = parallelFlow, parseUploadedDatatype = parseUploadedData, prepareUploadedDatatype = prepareUploadedData, printReporttype = printReport, resetPaginationtype = resetPagination, sendEMailtype = sendEMail, sendPushNotificationtype = sendPushNotification, serverSideGeocodingtype = serverSideGeocoding, switchtype = switch, tabformAddRowstype = tabformAddRows, tabformDeletetype = tabformDelete, tabformUpdatetype = tabformUpdate, userPreferencestype = userPreferences, waittype = wait, webServicetype = webService, workflowtype = workflow, workflowEndtype = workflowEnd, workflowStarttype = workflowStart

Children: activityVariable, branchtype = parallelFlow, connection, connectiontype = switch, parametertype = humanTaskCreate, parametertype in (PLSQL_PACKAGE); type in (PLSQL_PROCEDURE_FUNCTION), parametertype = WEB_SOURCE, parametertype = invokeWorkflow

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
comments

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean
Applies whentype supports AI_ENABLED

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whentype supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_ENABLED and enabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whentype supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_ENABLED and enabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype supports AI_SYSTEM_PROMPT and type supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_SYSTEM_PROMPT and type supports AI_ENABLED and enabled = true

Copy
genAI {
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
}

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
Enter the PL/SQL code to be executed on the remote database.

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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
 diagram: value
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
activity sample (
 name: value
 type: executeCode
 genAI {
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
 }
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

participant - APEXlang Reference

participant

Parent: version

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Name of this workflow participant.

 | type | enum | Yes | owner | data type=string; lov=STATIC
Valid values: owner admin

Property Groups:
value
comments

value

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | staticValue | data type=string; lov=STATIC
Valid values: staticValue sqlQuery expression functionBody

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = staticValue

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = sqlQuery

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

Copy
value {
 type: staticValue
 staticValue: ```
 value
 ```
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
participant sample (
 name: value
 type: owner
 value {
 type: staticValue
 staticValue: ```
 value
 ```
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
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

variable - APEXlang Reference

variable

Parent: version

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255; textCase=UPPER

Property Groups:
label
parameter
value
displayFormatMasks
comments

label

 | Property | Type | Required | Default Value | Details

 | label | string | Yes | | data type=string; maxLen=4000
An end-user friendly name of the workflow variable.

Copy
label {
 label: value
}

parameter

 | Property | Type | Required | Default Value | Details

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 timestamp timestampWithLocalTimeZone timestampWithTimeZone number boolean clob

Copy
parameter {
 dataType: varchar2
}

value

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | null | data type=string; lov=STATIC
Valid values: staticValue item sqlQuery expression functionBody null

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = staticValue

 | staticValue | enum | Yes | | data type=string; lov=STATIC
Valid values: true false
Applies whentype = staticValue and dataType = boolean

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype = item

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = sqlQuery

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

Copy
value {
 type: staticValue
 staticValue: ```
 value
 ```
 item: value
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
}

displayFormatMasks

 | Property | Type | Required | Default Value | Details

 | sessionStateFormatMask | string | No | | data type=string; maxLen=255
Applies whendataType in (number)dataType in (timestamp)dataType in (timestampWithTimeZone)dataType in (timestampWithLocalTimeZone)
Format mask to be used to convert the workflow variable into a NUMBER or TIMESTAMP and back into a VARCHAR2 when the parameter is used in a bind variable or substitution string. 

 | trueValue | string | No | | data type=string; maxLen=10
Applies whendataType = boolean

 | falseValue | string | No | | data type=string; maxLen=10
Applies whendataType = boolean

Copy
displayFormatMasks {
 sessionStateFormatMask: value
 trueValue: value
 falseValue: value
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
variable sample (
 staticId: value
 label {
 label: value
 }
 parameter {
 dataType: varchar2
 }
 value {
 type: staticValue
 staticValue: ```
 value
 ```
 item: value
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
 }
 displayFormatMasks {
 sessionStateFormatMask: value
 trueValue: value
 falseValue: value
 }
 comments {
 comments: ```
 value
 ```
 }
)
