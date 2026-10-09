# APEXlang: componentes con padre `taskDefinition` (APEX 26.1)


---

action - APEXlang Reference

action

Parent: taskDefinition

Plug-in Variants: autoRowFetchtype = autoRowFetch, autoRowProcessingtype = autoRowProcessing, clearSessionStatetype = clearSessionState, closeDialogtype = closeDialog, dataLoadingtype = dataLoading, downloadtype = download, executeCodetype = executeCode, executionChaintype = executionChain, formAutoRowProcessingtype = formAutoRowProcessing, formInitializationtype = formInitialization, formPaginationtype = formPagination, generateTextWithAitype = generateTextWithAi, humanTaskCreatetype = humanTaskCreate, humanTaskManagetype = humanTaskManage, interactiveGridAutoRowProcessingtype = interactiveGridAutoRowProcessing, invokeApitype = invokeApi, invokeWorkflowtype = invokeWorkflow, legacyAutoRowProcessingtype = legacyAutoRowProcessing, legacyWebServicetype = legacyWebService, loadUploadedDatatype = loadUploadedData, parallelFlowtype = parallelFlow, parseUploadedDatatype = parseUploadedData, prepareUploadedDatatype = prepareUploadedData, printReporttype = printReport, resetPaginationtype = resetPagination, sendEMailtype = sendEMail, sendPushNotificationtype = sendPushNotification, serverSideGeocodingtype = serverSideGeocoding, switchtype = switch, tabformAddRowstype = tabformAddRows, tabformDeletetype = tabformDelete, tabformUpdatetype = tabformUpdate, userPreferencestype = userPreferences, waittype = wait, webServicetype = webService, workflowtype = workflow, workflowEndtype = workflowEnd, workflowStarttype = workflowStart

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode sendEMail sendPushNotification serverSideGeocoding

Property Groups:
source
execution
successMessage
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

 | onEvent | enum | Yes | claim | data type=string; lov=STATIC
Valid values: claim complete delegate updateComment updatePriority updateParameter release cancel create requestInformation submitInformation beforeExpire expire

 | outcome | enum | No | | data type=string; lov=STATIC
Valid values: approved rejected
Applies whenonEvent = complete and type = approval

 | beforeExpirationInterval | string | No | | data type=string; maxLen=32767
Applies whenonEvent = beforeExpire

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
execution {
 onEvent: claim
 outcome: approved
 beforeExpirationInterval: value
 sequence: 42
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

 | logging | enum | Yes | none | data type=string; lov=STATIC
Valid values: none success failure all

 | stopExecutionOnError | boolean | Yes | true | data type=boolean

Copy
error {
 errorMessage: ```
 value
 ```
 logging: none
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
 onEvent: claim
 outcome: approved
 beforeExpirationInterval: value
 sequence: 42
 }
 successMessage {
 successMessage: ```
 value
 ```
 }
 error {
 errorMessage: ```
 value
 ```
 logging: none
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

Parent: taskDefinition

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | Yes | | data type=string; maxLen=255

 | dataType | enum | Yes | string | data type=string; lov=STATIC
Valid values: string

Property Groups:
validation
advanced
comments

validation

 | Property | Type | Required | Default Value | Details

 | required | boolean | Yes | true | data type=boolean

Copy
validation {
 required: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showOnTaskDetails | boolean | Yes | true | data type=boolean

 | updatable | boolean | Yes | false | data type=boolean

Copy
advanced {
 showOnTaskDetails: false
 updatable: false
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
parameter sample (
 staticId: value
 label: value
 dataType: string
 validation {
 required: false
 }
 advanced {
 showOnTaskDetails: false
 updatable: false
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

Parent: taskDefinition

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | potentialOwner | data type=string; lov=STATIC
Valid values: potentialOwner businessAdministrator excludedOwner excludedAdmin

 | identityType | enum | Yes | user | data type=string; lov=STATIC
Valid values: user authorizationScheme

Property Groups:
value

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

APEXlang Example

Copy
participant sample (
 type: potentialOwner
 identityType: user
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
)
