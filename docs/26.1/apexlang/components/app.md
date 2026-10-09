# APEXlang: componentes con padre `app` (APEX 26.1)


---

aiAgent - APEXlang Reference

aiAgent

Parent: app

Children: tool

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
genAI
responseFormat
advanced
subscription
comments

genAI

 | Property | Type | Required | Default Value | Details

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767

 | welcomeMessage | multiline string | No | | data type=multiline string; maxLen=32767

Copy
genAI {
 service: @component
 systemPrompt: ```
 value
 ```
 welcomeMessage: ```html
 value
 ```
}

responseFormat

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | text | data type=string; lov=STATIC
Valid values: text jsonObject

 | jsonSchema | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = jsonObject

Copy
responseFormat {
 type: text
 jsonSchema: ```json
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | temperature | number | No | | data type=number; maxLen=22

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 temperature: 42
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent

Copy
subscription {
 master: @component
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
aiAgent sample (
 name: value
 genAI {
 service: @component
 systemPrompt: ```
 value
 ```
 welcomeMessage: ```html
 value
 ```
 }
 responseFormat {
 type: text
 jsonSchema: ```json
 value
 ```
 }
 advanced {
 temperature: 42
 staticId: value
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

appComputation - APEXlang Reference

appComputation

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | itemName | string | Yes | | data type=string; maxLen=255; textCase=UPPER

Property Groups:
execution
computation
error
advanced
serverSideCondition
security
config
subscription
comments

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | newSession | data type=string; lov=STATIC
Valid values: newSession afterAuthentication beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit

Copy
execution {
 sequence: 42
 point: newSession
}

computation

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | staticValue | data type=string; lov=STATIC
Valid values: staticValue item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody preference

 | staticValue | string | No | | data type=string; maxLen=4000
Applies whentype = staticValue

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = sqlQuerySingleValue

 | computationProcessed | enum | No | | data type=string; lov=STATIC
Valid values: newSession replaceExisting addToExisting raiseErrorOnReplace replaceNullValues

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = sqlQueryMultipleValues

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

 | itemName | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = item

 | preference | string | Yes | | data type=string; maxLen=4000
Applies whentype = preference

Copy
computation {
 type: staticValue
 staticValue: value
 sqlQuery: ```sql
 value
 ```
 computationProcessed: newSession
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
 itemName: value
 preference: value
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Copy
error {
 errorMessage: ```
 value
 ```
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
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

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
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

Copy
security {
 authorizationScheme: mustNotBePublicUser
}

config

 | Property | Type | Required | Default Value | Details

 | buildOption | reference | No | | data type=reference; lov=COMPONENT; references=buildOption

Copy
config {
 buildOption: @component
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=appComputation

Copy
subscription {
 master: @component
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
appComputation sample (
 itemName: value
 execution {
 sequence: 42
 point: newSession
 }
 computation {
 type: staticValue
 staticValue: value
 sqlQuery: ```sql
 value
 ```
 computationProcessed: newSession
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
 itemName: value
 preference: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 staticId: value
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 }
 config {
 buildOption: @component
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

appItem - APEXlang Reference

appItem

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255; textCase=UPPER

 | scope | enum | Yes | app | data type=string; lov=STATIC
Valid values: app global

Property Groups:
security
subscription
config
comments

security

 | Property | Type | Required | Default Value | Details

 | sessionStateDataType | enum | Yes | varchar | data type=string; lov=STATIC
Valid values: number varchar

 | sessionStateProtection | enum | Yes | restricted | data type=string; lov=STATIC
Valid values: unrestricted checksumRequiredAppLevel checksumRequiredUserLevel checksumRequiredSessionLevel restricted

 | escapeSpecialChars | boolean | Yes | true | data type=boolean

Copy
security {
 sessionStateDataType: number
 sessionStateProtection: unrestricted
 escapeSpecialChars: false
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=appItem

Copy
subscription {
 master: @component
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
appItem sample (
 name: value
 scope: app
 security {
 sessionStateDataType: number
 sessionStateProtection: unrestricted
 escapeSpecialChars: false
 }
 subscription {
 master: @component
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

appProcess - APEXlang Reference

appProcess

Parent: app

Plug-in Variants: autoRowFetchtype = autoRowFetch, autoRowProcessingtype = autoRowProcessing, clearSessionStatetype = clearSessionState, closeDialogtype = closeDialog, dataLoadingtype = dataLoading, downloadtype = download, executeCodetype = executeCode, executionChaintype = executionChain, formAutoRowProcessingtype = formAutoRowProcessing, formInitializationtype = formInitialization, formPaginationtype = formPagination, generateTextWithAitype = generateTextWithAi, humanTaskCreatetype = humanTaskCreate, humanTaskManagetype = humanTaskManage, interactiveGridAutoRowProcessingtype = interactiveGridAutoRowProcessing, invokeApitype = invokeApi, invokeWorkflowtype = invokeWorkflow, legacyAutoRowProcessingtype = legacyAutoRowProcessing, legacyWebServicetype = legacyWebService, loadUploadedDatatype = loadUploadedData, parallelFlowtype = parallelFlow, parseUploadedDatatype = parseUploadedData, prepareUploadedDatatype = prepareUploadedData, printReporttype = printReport, resetPaginationtype = resetPagination, sendEMailtype = sendEMail, sendPushNotificationtype = sendPushNotification, serverSideGeocodingtype = serverSideGeocoding, switchtype = switch, tabformAddRowstype = tabformAddRows, tabformDeletetype = tabformDelete, tabformUpdatetype = tabformUpdate, userPreferencestype = userPreferences, waittype = wait, webServicetype = webService, workflowtype = workflow, workflowEndtype = workflowEnd, workflowStarttype = workflowStart

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

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

 | point | enum | Yes | beforeHeader | data type=string; lov=STATIC
Valid values: afterAuthentication newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

Copy
execution {
 sequence: 42
 point: afterAuthentication
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

 | displayLocation | enum | Yes | inlineInNotification | data type=string; lov=STATIC
Valid values: inlineInNotification onErrorPage
Applies whenpoint in (afterSubmit)point in (processing)

Copy
error {
 errorMessage: ```
 value
 ```
 displayLocation: inlineInNotification
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
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

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
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

Copy
security {
 authorizationScheme: mustNotBePublicUser
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

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=appProcess

Copy
subscription {
 master: @component
}

APEXlang Example

Copy
appProcess sample (
 name: value
 type: autoRowFetch
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
 point: afterAuthentication
 }
 error {
 errorMessage: ```
 value
 ```
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 }
 config {
 buildOption: @component
 }
 comments {
 comments: ```
 value
 ```
 }
 subscription {
 master: @component
 }
)

---

appSetting - APEXlang Reference

appSetting

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Property Groups:
value
validation
config
subscription
comments

value

 | Property | Type | Required | Default Value | Details

 | staticValue | multiline string | No | | data type=multiline string; maxLen=4000

 | onUpgradeKeepValue | boolean | Yes | false | data type=boolean

Copy
value {
 staticValue: ```
 value
 ```
 onUpgradeKeepValue: false
}

validation

 | Property | Type | Required | Default Value | Details

 | required | boolean | Yes | false | data type=boolean

 | validValues | string | No | | data type=string; maxLen=4000

Copy
validation {
 required: false
 validValues: value
}

config

 | Property | Type | Required | Default Value | Details

 | buildOption | reference | No | | data type=reference; lov=COMPONENT; references=buildOption

Copy
config {
 buildOption: @component
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=appSetting

Copy
subscription {
 master: @component
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
appSetting sample (
 staticId: value
 value {
 staticValue: ```
 value
 ```
 onUpgradeKeepValue: false
 }
 validation {
 required: false
 validValues: value
 }
 config {
 buildOption: @component
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authentication - APEXlang Reference

authentication

Parent: app

Plug-in Variants: customtype = custom, databaseAccountstype = databaseAccounts, httpHeaderVariabletype = httpHeaderVariable, internalAppExtensiontype = internalAppExtension, ldapDirectorytype = ldapDirectory, noAuthtype = noAuth, openDoorCredentialstype = openDoorCredentials, oracleApexAccountstype = oracleApexAccounts, oracleAppServerSSOtype = oracleAppServerSSO, samlSignIntype = samlSignIn, socialSignIntype = socialSignIn

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: custom databaseAccounts httpHeaderVariable internalAppExtension ldapDirectory noAuth openDoorCredentials oracleApexAccounts oracleAppServerSSO samlSignIn socialSignIn

Property Groups:
source
sessionNotValid
loginProcessing
postLogout
sessionSharing
realAppSecurity
advanced
help
subscription
comments

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

Copy
source {
 plsqlCode: ```plsql
 value
 ```
}

sessionNotValid

 | Property | Type | Required | Default Value | Details

 | verifyFunctionName | string | No | | data type=string; maxLen=255

 | redirectTo | enum | Yes | loginPage | data type=string; lov=STATIC
Valid values: loginPage builtInLoginPage url
Applies whentype supports INVALID_SESSION

 | invalidSessionUrl | complex | No | | data type=complex; maxLen=4000
Applies whentype supports INVALID_SESSION and redirectTo = url

Copy
sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
}

loginProcessing

 | Property | Type | Required | Default Value | Details

 | preAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | postAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | switchInSession | boolean | Yes | false | data type=boolean

Copy
loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
}

postLogout

 | Property | Type | Required | Default Value | Details

 | redirectTo | enum | Yes | homePage | data type=string; lov=STATIC
Valid values: homePage url

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenredirectTo = url

Copy
postLogout {
 redirectTo: homePage
 url: value
}

sessionSharing

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | app | data type=string; lov=STATIC
Valid values: app workspaceSharing custom

 | cookieName | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookiePath | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookieDomain | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | secure | boolean | Yes | false | data type=boolean
Applies whentype = custom

Copy
sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
}

realAppSecurity

 | Property | Type | Required | Default Value | Details

 | rasMode | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: disabled externalUsers internalUsers

 | dynamicRoles | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

 | namespaces | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

Copy
realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=authentication
Valid values: @/8842.261/builder-extension-sign-in @/8842.9999/builder-extension-sign-in @/8842.9999/oracle-apex-accounts

Copy
subscription {
 master: "@/8842.261/builder-extension-sign-in"
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
authentication sample (
 name: value
 type: custom
 source {
 plsqlCode: ```plsql
 value
 ```
 }
 sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 }
 loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
 }
 postLogout {
 redirectTo: homePage
 url: value
 }
 sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
 }
 realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
 }
 advanced {
 staticId: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 subscription {
 master: "@/8842.261/builder-extension-sign-in"
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authorization - APEXlang Reference

authorization

Parent: app

Plug-in Variants: existsSqlQuerytype = existsSqlQuery, isInRoleOrGrouptype = isInRoleOrGroup, isNotInRoleOrGrouptype = isNotInRoleOrGroup, itemEqualsValuetype = itemEqualsValue, itemIsNotNulltype = itemIsNotNull, itemIsNulltype = itemIsNull, itemNotEqualsValuetype = itemNotEqualsValue, notExistsSqlQuerytype = notExistsSqlQuery, plSqlFunctionBodytype = plSqlFunctionBody, preferenceEqualsValuetype = preferenceEqualsValue, preferenceNotEqualsValuetype = preferenceNotEqualsValue

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: existsSqlQuery isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue notExistsSqlQuery plSqlFunctionBody preferenceEqualsValue preferenceNotEqualsValue

Property Groups:
error
advanced
subscription
comments

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Copy
error {
 errorMessage: ```
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | evaluationType | enum | Yes | perPageView | data type=string; lov=STATIC
Valid values: perSession perPageView perComponent always

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 evaluationType: perSession
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=authorization

Copy
subscription {
 master: @component
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
authorization sample (
 name: value
 type: existsSqlQuery
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 evaluationType: perSession
 staticId: value
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

automation - APEXlang Reference

automation

Parent: app

Children: action, parameteractionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable = false; actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable = false; actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = false; actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = false; actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = false; actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable = false; actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable = false; actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable = false; actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable = false; actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = false; actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = false; actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = false; actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable = false; actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable = false

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
execution
source
dataProfile
restSynchronization
externalFilterAndOrderBy
localPostProcessing
columnMapping
actionExecution
additionalCodeExecution
advanced
serverSideCondition
config
comments

execution

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | scheduled | data type=string; lov=STATIC
Valid values: onDemand scheduled

 | scheduleExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whentype = scheduled

 | scheduleStatus | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: active disabled error
Applies whentype = scheduled

 | actionsInitiatedOn | enum | Yes | rowsReturned | data type=string; lov=STATIC
Valid values: rowsReturned noRowsReturned functionBodyReturningBoolean always

Copy
execution {
 type: onDemand
 scheduleExpression: ```
 value
 ```
 scheduleStatus: active
 actionsInitiatedOn: rowsReturned
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql restSource jsonDualityView jsonSource sampleData
Applies whenactionsInitiatedOn in (rowsReturned)actionsInitiatedOn in (noRowsReturned)

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql
Applies whenactionsInitiatedOn = functionBodyReturningBoolean

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenactionsInitiatedOn in (rowsReturned) and location = restEnabledSqlactionsInitiatedOn in (rowsReturned) and actionsInitiatedOn in (noRowsReturned) and location = restEnabledSqlactionsInitiatedOn in (noRowsReturned) and actionsInitiatedOn in (rowsReturned) and location = restEnabledSqlactionsInitiatedOn in (noRowsReturned) and location = restEnabledSqlactionsInitiatedOn = functionBodyReturningBoolean and location = restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenactionsInitiatedOn = functionBodyReturningBoolean

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn = functionBodyReturningBoolean and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn = functionBodyReturningBoolean and language = javaScript-mle

 | sampleData | enum | Yes | | data type=string; lov=STATIC
Valid values: employees tasks products projects
Applies whenactionsInitiatedOn in (rowsReturned) and location = sampleDataactionsInitiatedOn in (noRowsReturned) and location = sampleData

 | type | enum | Yes | tableView | data type=string; lov=STATIC
Valid values: tableView sqlQuery functionBody propertyGraph
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase)actionsInitiatedOn in (rowsReturned) and location in (restEnabledSql)actionsInitiatedOn in (noRowsReturned) and location in (localDatabase)actionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql)

 | tableOwner | string | No | | data type=string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = tableViewactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = tableViewactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = tableViewactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = tableView

 | tableName | string | Yes | | data type=string; maxLen=128
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = tableViewactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = tableViewactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = tableViewactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = tableView

 | includeRowidColumn | boolean | Yes | false | data type=boolean
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = tableView and location = restEnabledSql and remoteServer supports IS_ORACLEactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = tableView and actionsInitiatedOn in (noRowsReturned) and location = restEnabledSql and remoteServer supports IS_ORACLEactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = tableView and actionsInitiatedOn = functionBodyReturningBoolean and location = restEnabledSql and remoteServer supports IS_ORACLEactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = tableView and location = restEnabledSql and remoteServer supports IS_ORACLEactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = tableView and actionsInitiatedOn in (noRowsReturned) and location = restEnabledSql and remoteServer supports IS_ORACLEactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = tableView and actionsInitiatedOn = functionBodyReturningBoolean and location = restEnabledSql and remoteServer supports IS_ORACLEactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = tableView and actionsInitiatedOn in (rowsReturned) and location = restEnabledSql and remoteServer supports IS_ORACLEactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = tableView and location = restEnabledSql and remoteServer supports IS_ORACLEactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = tableView and actionsInitiatedOn = functionBodyReturningBoolean and location = restEnabledSql and remoteServer supports IS_ORACLEactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = tableView and actionsInitiatedOn in (rowsReturned) and location = restEnabledSql and remoteServer supports IS_ORACLEactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = tableView and location = restEnabledSql and remoteServer supports IS_ORACLEactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = tableView and actionsInitiatedOn = functionBodyReturningBoolean and location = restEnabledSql and remoteServer supports IS_ORACLE

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = tableViewactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = tableViewactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = tableViewactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = tableView

 | graphOwner | string | No | | data type=string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = propertyGraphactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = propertyGraphactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = propertyGraphactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = propertyGraph

 | graphName | string | Yes | | data type=string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = propertyGraphactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = propertyGraphactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = propertyGraphactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = propertyGraph

 | matchClause | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = propertyGraphactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = propertyGraphactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = propertyGraphactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = propertyGraph

 | columnsClause | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = propertyGraphactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = propertyGraphactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = propertyGraphactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = propertyGraph

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = propertyGraphactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = propertyGraphactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = propertyGraphactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = propertyGraph

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=255
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = tableViewactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = tableViewactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = tableViewactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = tableView

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=255
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = propertyGraphactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = propertyGraphactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = propertyGraphactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = propertyGraph

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = sqlQueryactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = sqlQueryactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = sqlQueryactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = functionBodyactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = functionBodyactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = functionBodyactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = functionBody and language = plsqlactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = functionBody and language = plsqlactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = functionBody and language = plsqlactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase) and type = functionBody and language = javaScript-mleactionsInitiatedOn in (rowsReturned) and location in (restEnabledSql) and type = functionBody and language = javaScript-mleactionsInitiatedOn in (noRowsReturned) and location in (localDatabase) and type = functionBody and language = javaScript-mleactionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql) and type = functionBody and language = javaScript-mle

 | restSource | reference | Yes | | data type=reference; lov=COMPONENT; references=restDataSource
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSourceactionsInitiatedOn in (noRowsReturned) and location = restSource

 | jsonDualityView | reference | Yes | | data type=reference; lov=COMPONENT; references=jsonDualityView
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonDualityViewactionsInitiatedOn in (noRowsReturned) and location = jsonDualityView

 | jsonSource | reference | Yes | | data type=reference; lov=COMPONENT; references=jsonSource
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonSourceactionsInitiatedOn in (noRowsReturned) and location = jsonSource

 | optimizerHint | string | No | | data type=string; maxLen=255
Applies whenactionsInitiatedOn in (rowsReturned) and location in (localDatabase)actionsInitiatedOn in (rowsReturned) and location in (restEnabledSql)actionsInitiatedOn in (rowsReturned) and location in (restSource)actionsInitiatedOn in (rowsReturned) and location in (jsonDualityView)actionsInitiatedOn in (rowsReturned) and location in (jsonSource)actionsInitiatedOn in (noRowsReturned) and location in (localDatabase)actionsInitiatedOn in (noRowsReturned) and location in (restEnabledSql)actionsInitiatedOn in (noRowsReturned) and location in (restSource)actionsInitiatedOn in (noRowsReturned) and location in (jsonDualityView)actionsInitiatedOn in (noRowsReturned) and location in (jsonSource)

Copy
source {
 location: localDatabase
 remoteServer: @component
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sampleData: employees
 type: tableView
 tableOwner: value
 tableName: value
 includeRowidColumn: false
 whereClause: ```sql
 value
 ```
 graphOwner: value
 graphName: value
 matchClause: ```
 value
 ```
 columnsClause: ```
 value
 ```
 orderByClause: ```sql
 value
 ```
 sqlQuery: ```sql
 value
 ```
 restSource: @component
 jsonDualityView: @component
 jsonSource: @component
 optimizerHint: value
}

dataProfile

 | Property | Type | Required | Default Value | Details

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource supports HAS_ARRAY_COLUMNSactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource supports HAS_ARRAY_COLUMNS

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonDualityView and jsonDualityView supports HAS_ARRAY_COLUMNSactionsInitiatedOn in (noRowsReturned) and location = jsonDualityView and jsonDualityView supports HAS_ARRAY_COLUMNS

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonSource and jsonSource supports HAS_ARRAY_COLUMNSactionsInitiatedOn in (noRowsReturned) and location = jsonSource and jsonSource supports HAS_ARRAY_COLUMNS

Copy
dataProfile {
 nestedRows: @component
}

restSynchronization

 | Property | Type | Required | Default Value | Details

 | useLocalTable | boolean | Yes | false | data type=boolean
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNSactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNSactionsInitiatedOn in (rowsReturned) and location = restSource and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNSactionsInitiatedOn in (rowsReturned) and location = restSource and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNSactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNSactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNSactionsInitiatedOn in (rowsReturned) and location = restSource and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCEDactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED

Copy
restSynchronization {
 useLocalTable: false
}

externalFilterAndOrderBy

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false)actionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false)actionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$)

 | filter | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true

 | orderBy | multiline string | No | | data type=multiline string; maxLen=255
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (noRowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and actionsInitiatedOn in (rowsReturned) and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = trueactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true

Copy
externalFilterAndOrderBy {
 enabled: false
 filter: ```
 value
 ```
 orderBy: ```
 value
 ```
}

localPostProcessing

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is setactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and type = whereOrderByClauseactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and type = whereOrderByClause

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=255
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and type = whereOrderByClauseactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and type = sqlQueryactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and type = plsqlFunctionBodyactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and type = plsqlFunctionBody and language = plsqlactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location = restSource and restSource is set and type = plsqlFunctionBody and language = javaScript-mleactionsInitiatedOn in (noRowsReturned) and location = restSource and restSource is set and type = plsqlFunctionBody and language = javaScript-mle

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonDualityView and jsonDualityView is setactionsInitiatedOn in (noRowsReturned) and location = jsonDualityView and jsonDualityView is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonDualityView and jsonDualityView is set and type = whereOrderByClauseactionsInitiatedOn in (noRowsReturned) and location = jsonDualityView and jsonDualityView is set and type = whereOrderByClause

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=255
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonDualityView and jsonDualityView is set and type = whereOrderByClauseactionsInitiatedOn in (noRowsReturned) and location = jsonDualityView and jsonDualityView is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonDualityView and jsonDualityView is set and type = sqlQueryactionsInitiatedOn in (noRowsReturned) and location = jsonDualityView and jsonDualityView is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBodyactionsInitiatedOn in (noRowsReturned) and location = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody and language = plsqlactionsInitiatedOn in (noRowsReturned) and location = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody and language = javaScript-mleactionsInitiatedOn in (noRowsReturned) and location = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody and language = javaScript-mle

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonSource and jsonSource is setactionsInitiatedOn in (noRowsReturned) and location = jsonSource and jsonSource is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonSource and jsonSource is set and type = whereOrderByClauseactionsInitiatedOn in (noRowsReturned) and location = jsonSource and jsonSource is set and type = whereOrderByClause

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=255
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonSource and jsonSource is set and type = whereOrderByClauseactionsInitiatedOn in (noRowsReturned) and location = jsonSource and jsonSource is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonSource and jsonSource is set and type = sqlQueryactionsInitiatedOn in (noRowsReturned) and location = jsonSource and jsonSource is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonSource and jsonSource is set and type = plsqlFunctionBodyactionsInitiatedOn in (noRowsReturned) and location = jsonSource and jsonSource is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonSource and jsonSource is set and type = plsqlFunctionBody and language = plsqlactionsInitiatedOn in (noRowsReturned) and location = jsonSource and jsonSource is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenactionsInitiatedOn in (rowsReturned) and location = jsonSource and jsonSource is set and type = plsqlFunctionBody and language = javaScript-mleactionsInitiatedOn in (noRowsReturned) and location = jsonSource and jsonSource is set and type = plsqlFunctionBody and language = javaScript-mle

Copy
localPostProcessing {
 type: whereOrderByClause
 whereClause: ```sql
 value
 ```
 orderByClause: ```sql
 value
 ```
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
}

columnMapping

 | Property | Type | Required | Default Value | Details

 | primaryKeyColumn | string | No | | data type=string; maxLen=32767
Applies whenactionsInitiatedOn = rowsReturned

Copy
columnMapping {
 primaryKeyColumn: value
}

actionExecution

 | Property | Type | Required | Default Value | Details

 | commit | enum | Yes | once | data type=string; lov=STATIC
Valid values: once eachRow
Applies whenactionsInitiatedOn = rowsReturned

 | maxRowsToProcess | integer | No | | data type=integer; maxLen=32767
Applies whenactionsInitiatedOn = rowsReturned

 | actionErrorHandling | enum | Yes | ignore | data type=string; lov=STATIC
Valid values: ignore terminate disable

Copy
actionExecution {
 commit: once
 maxRowsToProcess: 42
 actionErrorHandling: ignore
}

additionalCodeExecution

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

 | initProcedureName | string | No | | data type=string; maxLen=255

 | beforeRowProcessingProcedureName | string | No | | data type=string; maxLen=255

 | cleanupProcedureName | string | No | | data type=string; maxLen=255

Copy
additionalCodeExecution {
 plsqlCode: ```plsql
 value
 ```
 initProcedureName: value
 beforeRowProcessingProcedureName: value
 cleanupProcedureName: value
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
Valid values: rowsReturned noRowsReturned expression functionBody never

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
automation sample (
 name: value
 execution {
 type: onDemand
 scheduleExpression: ```
 value
 ```
 scheduleStatus: active
 actionsInitiatedOn: rowsReturned
 }
 source {
 location: localDatabase
 remoteServer: @component
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sampleData: employees
 type: tableView
 tableOwner: value
 tableName: value
 includeRowidColumn: false
 whereClause: ```sql
 value
 ```
 graphOwner: value
 graphName: value
 matchClause: ```
 value
 ```
 columnsClause: ```
 value
 ```
 orderByClause: ```sql
 value
 ```
 sqlQuery: ```sql
 value
 ```
 restSource: @component
 jsonDualityView: @component
 jsonSource: @component
 optimizerHint: value
 }
 dataProfile {
 nestedRows: @component
 }
 restSynchronization {
 useLocalTable: false
 }
 externalFilterAndOrderBy {
 enabled: false
 filter: ```
 value
 ```
 orderBy: ```
 value
 ```
 }
 localPostProcessing {
 type: whereOrderByClause
 whereClause: ```sql
 value
 ```
 orderByClause: ```sql
 value
 ```
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 }
 columnMapping {
 primaryKeyColumn: value
 }
 actionExecution {
 commit: once
 maxRowsToProcess: 42
 actionErrorHandling: ignore
 }
 additionalCodeExecution {
 plsqlCode: ```plsql
 value
 ```
 initProcedureName: value
 beforeRowProcessingProcedureName: value
 cleanupProcedureName: value
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

breadcrumb - APEXlang Reference

breadcrumb

Parent: app

Children: entry

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
advanced
comments

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
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
breadcrumb sample (
 name: value
 advanced {
 staticId: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

buildOption - APEXlang Reference

buildOption

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
status
advanced
subscription
comments

status

 | Property | Type | Required | Default Value | Details

 | status | enum | Yes | exclude | data type=string; lov=STATIC
Valid values: include exclude

 | defaultOnExport | enum | No | | data type=string; lov=STATIC
Valid values: exclude include

 | onUpgradeKeepStatus | boolean | Yes | false | data type=boolean

Copy
status {
 status: include
 defaultOnExport: exclude
 onUpgradeKeepStatus: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | featureIdentifier | string | No | | data type=string; maxLen=4000

Copy
advanced {
 staticId: value
 featureIdentifier: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=buildOption

Copy
subscription {
 master: @component
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
buildOption sample (
 name: value
 status {
 status: include
 defaultOnExport: exclude
 onUpgradeKeepStatus: false
 }
 advanced {
 staticId: value
 featureIdentifier: value
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

classicNavigationBarEntry - APEXlang Reference

classicNavigationBarEntry

Parent: app

Property Groups:
label
layout
icon
link
advanced
serverSideCondition
security
config
subscription
comments

label

 | Property | Type | Required | Default Value | Details

 | label | string | Yes | | data type=string; maxLen=4000

Copy
label {
 label: value
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | beginsOnNewLine | boolean | Yes | NO | data type=boolean

 | cellColumnSpan | integer | Yes | 1 | data type=integer; maxLen=255

Copy
layout {
 sequence: 42
 beginsOnNewLine: false
 cellColumnSpan: 42
}

icon

 | Property | Type | Required | Default Value | Details

 | imageIconCssClasses | string | No | | data type=string; maxLen=255

 | altAttribute | string | No | | data type=string; maxLen=4000
Applies whenimageIconCssClasses is set

 | height | integer | No | | data type=integer; maxLen=255

 | width | integer | No | | data type=integer; maxLen=255

Copy
icon {
 imageIconCssClasses: value
 altAttribute: value
 height: 42
 width: 42
}

link

 | Property | Type | Required | Default Value | Details

 | target | complex | Yes | | data type=complex; maxLen=32767

Copy
link {
 target: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
}

advanced

 | Property | Type | Required | Default Value | Details

 | feedbackEntry | boolean | Yes | false | data type=boolean

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 feedbackEntry: false
 staticId: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

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
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

Copy
security {
 authorizationScheme: mustNotBePublicUser
}

config

 | Property | Type | Required | Default Value | Details

 | buildOption | reference | No | | data type=reference; lov=COMPONENT; references=buildOption

Copy
config {
 buildOption: @component
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=classicNavigationBarEntry

Copy
subscription {
 master: @component
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
classicNavigationBarEntry sample (
 label {
 label: value
 }
 layout {
 sequence: 42
 beginsOnNewLine: false
 cellColumnSpan: 42
 }
 icon {
 imageIconCssClasses: value
 altAttribute: value
 height: 42
 width: 42
 }
 link {
 target: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 }
 advanced {
 feedbackEntry: false
 staticId: value
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 }
 config {
 buildOption: @component
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

componentGroup - APEXlang Reference

componentGroup

Parent: app

Children: component

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | staticId | string | Yes | | data type=string; maxLen=255

Property Groups:
subscription
comments

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=componentGroup

Copy
subscription {
 master: @component
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
componentGroup sample (
 name: value
 staticId: value
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

componentSetting - APEXlang Reference

componentSetting

Parent: app

Plug-in Variants: actionsMenutype = actionsMenu, checkboxtype = checkbox, checkboxGrouptype = checkboxGroup, colorPickertype = colorPicker, comboboxtype = combobox, datePickertype = datePicker, datePickerJquerytype = datePickerJquery, displayImagetype = displayImage, displayMaptype = displayMap, displayOnlytype = displayOnly, fileUploadtype = fileUpload, geocodedAddresstype = geocodedAddress, hiddentype = hidden, htmlExpressiontype = htmlExpression, imageUploadtype = imageUpload, inputFieldtype = inputField, linktype = link, listManagertype = listManager, markdownEditortype = markdownEditor, numberFieldtype = numberField, passwordtype = password, percentGraphtype = percentGraph, popupLovtype = popupLov, qrCodetype = qrCode, radioGrouptype = radioGroup, rangetype = range, richTextEditortype = richTextEditor, rowSelectortype = rowSelector, searchtype = search, selectListtype = selectList, selectManytype = selectMany, selectOnetype = selectOne, shuttletype = shuttle, starRatingtype = starRating, stopAndStartGridLayouttype = stopAndStartGridLayout, switchtype = switch, textFieldtype = textField, textFieldWithAutocompletetype = textFieldWithAutocomplete, textareatype = textarea, addClasstype = addClass, alerttype = alert, cancelDialogtype = cancelDialog, cancelEventtype = cancelEvent, cleartype = clear, clearErrorstype = clearErrors, closeDialogtype = closeDialog, closeRegiontype = closeRegion, collapseTreetype = collapseTree, confirmtype = confirm, disabletype = disable, downloadtype = download, enabletype = enable, executeJsCodetype = executeJsCode, executeServerSideCodetype = executeServerSideCode, expandTreetype = expandTree, generateTextWithAitype = generateTextWithAi, getCurrentPositiontype = getCurrentPosition, hidetype = hide, invokeInteractiveReportDialogtype = invokeInteractiveReportDialog, openRegiontype = openRegion, printReporttype = printReport, refreshtype = refresh, removeClasstype = removeClass, setFocustype = setFocus, setStyletype = setStyle, setValuetype = setValue, sharetype = share, showtype = show, showAiAssistanttype = showAiAssistant, showErrorMessagetype = showErrorMessage, showSuccessMessagetype = showSuccessMessage, submitPagetype = submitPage, triggerGeocodingtype = triggerGeocoding, breadcrumbtype = breadcrumb, calendartype = calendar, cardstype = cards, charttype = chart, classicReporttype = classicReport, classicTreetype = classicTree, columnToggleReporttype = columnToggleReport, dataUploadColMappingtype = dataUploadColMapping, dynamicContenttype = dynamicContent, facetedSearchtype = facetedSearch, formtype = form, helpTexttype = helpText, interactiveGridtype = interactiveGrid, interactiveReporttype = interactiveReport, legacyCalendartype = legacyCalendar, listtype = list, listViewtype = listView, maptype = map, plSqlDynamicContenttype = plSqlDynamicContent, reflowReporttype = reflowReport, regionDisplaySelectortype = regionDisplaySelector, searchtype = search, simpleCharttype = simpleChart, smartFilterstype = smartFilters, staticContenttype = staticContent, svgCharttype = svgChart, tabformtype = tabform, treetype = tree, urltype = url, workflowDiagramtype = workflowDiagram, autoRowFetchtype = autoRowFetch, autoRowProcessingtype = autoRowProcessing, clearSessionStatetype = clearSessionState, closeDialogtype = closeDialog, dataLoadingtype = dataLoading, downloadtype = download, executeCodetype = executeCode, executionChaintype = executionChain, formAutoRowProcessingtype = formAutoRowProcessing, formInitializationtype = formInitialization, formPaginationtype = formPagination, generateTextWithAitype = generateTextWithAi, humanTaskCreatetype = humanTaskCreate, humanTaskManagetype = humanTaskManage, interactiveGridAutoRowProcessingtype = interactiveGridAutoRowProcessing, invokeApitype = invokeApi, invokeWorkflowtype = invokeWorkflow, legacyAutoRowProcessingtype = legacyAutoRowProcessing, legacyWebServicetype = legacyWebService, loadUploadedDatatype = loadUploadedData, parallelFlowtype = parallelFlow, parseUploadedDatatype = parseUploadedData, prepareUploadedDatatype = prepareUploadedData, printReporttype = printReport, resetPaginationtype = resetPagination, sendEMailtype = sendEMail, sendPushNotificationtype = sendPushNotification, serverSideGeocodingtype = serverSideGeocoding, switchtype = switch, tabformAddRowstype = tabformAddRows, tabformDeletetype = tabformDelete, tabformUpdatetype = tabformUpdate, userPreferencestype = userPreferences, waittype = wait, webServicetype = webService, workflowtype = workflow, workflowEndtype = workflowEnd, workflowStarttype = workflowStart, existsSqlQuerytype = existsSqlQuery, isInRoleOrGrouptype = isInRoleOrGroup, isNotInRoleOrGrouptype = isNotInRoleOrGroup, itemEqualsValuetype = itemEqualsValue, itemIsNotNulltype = itemIsNotNull, itemIsNulltype = itemIsNull, itemNotEqualsValuetype = itemNotEqualsValue, notExistsSqlQuerytype = notExistsSqlQuery, plSqlFunctionBodytype = plSqlFunctionBody, preferenceEqualsValuetype = preferenceEqualsValue, preferenceNotEqualsValuetype = preferenceNotEqualsValue, customtype = custom, databaseAccountstype = databaseAccounts, httpHeaderVariabletype = httpHeaderVariable, internalAppExtensiontype = internalAppExtension, ldapDirectorytype = ldapDirectory, noAuthtype = noAuth, openDoorCredentialstype = openDoorCredentials, oracleApexAccountstype = oracleApexAccounts, oracleAppServerSSOtype = oracleAppServerSSO, samlSignIntype = samlSignIn, socialSignIntype = socialSignIn, httptype = http, ocitype = oci, odataRestServicetype = odataRestService, oracleCloudAppsBosstype = oracleCloudAppsBoss, oracleCloudAppsSaastype = oracleCloudAppsSaas, ordstype = ords, restEnabledSqlQuerytype = restEnabledSqlQuery, executeClientsideCodetype = executeClientsideCode, executeServersideCodetype = executeServersideCode, retrieveDatatype = retrieveData

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

concatenatedFile - APEXlang Reference

concatenatedFile

Parent: app

Property Groups:
files
advanced
config

files

 | Property | Type | Required | Default Value | Details

 | concatenatedFileUrl | string | Yes | | data type=string; maxLen=255

 | singleFileUrls | multiline string | Yes | | data type=multiline string; maxLen=4000

Copy
files {
 concatenatedFileUrl: value
 singleFileUrls: ```
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | onlyForPage | reference | No | | data type=reference; maxLen=10; lov=COMPONENT; references=page

Copy
advanced {
 onlyForPage: @component
}

config

 | Property | Type | Required | Default Value | Details

 | buildOption | reference | No | | data type=reference; lov=COMPONENT; references=buildOption

Copy
config {
 buildOption: @component
}

APEXlang Example

Copy
concatenatedFile sample (
 files {
 concatenatedFileUrl: value
 singleFileUrls: ```
 value
 ```
 }
 advanced {
 onlyForPage: @component
 }
 config {
 buildOption: @component
 }
)

---

dataLoadDefinition - APEXlang Reference

dataLoadDefinition

Parent: app

Children: dataProfileColumn

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
dataProfile
target
advanced
errorHandling
subscription
comments

dataProfile

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | format | enum | Yes | json | data type=string; lov=STATIC
Valid values: csv json xlsx xml

 | rowSelector | string | No | | data type=string; maxLen=255
Applies whenformat in (json)format in (xml)

 | useRawSelectors | boolean | Yes | false | data type=boolean
Applies whenformat = json

 | comments | multiline string | No | | data type=multiline string; maxLen=4000

Copy
dataProfile {
 name: value
 format: csv
 rowSelector: value
 useRawSelectors: false
 comments: ```
 value
 ```
}

target

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | table | data type=string; lov=STATIC
Valid values: table collection

 | tableOwner | string | No | | data type=string; maxLen=32767
Applies whentype = table

 | tableName | string | Yes | | data type=string; maxLen=128
Applies whentype = table

 | name | string | Yes | | data type=string; maxLen=128; textCase=UPPER
Applies whentype = collection

 | loadingMethod | enum | Yes | append | data type=string; lov=STATIC
Valid values: append merge replace
Applies whentype = table

 | loadingMethod | enum | Yes | append | data type=string; lov=STATIC
Valid values: append replace
Applies whentype = collection

Copy
target {
 type: table
 tableOwner: value
 tableName: value
 name: value
 loadingMethod: append
}

advanced

 | Property | Type | Required | Default Value | Details

 | encoding | enum | No | | data type=string; lov=STATIC
Valid values: iso-8859-6 windows-1256 big5 gbk iso-8859-5 koi8-r koi8-u windows-1251 iso-8859-2 windows-1250 iso-8859-7 windows-1253 iso-8859-8-i windows-1255 euc-jp shift-jis euc-kr iso-8859-4 windows-1257 iso-8859-3 tis-620 iso-8859-9 windows-1254 us-ascii utf-16be utf-16le utf-8 windows-1258 iso-8859-1 windows-1252

 | numericChars | string | No | | data type=string; maxLen=2

 | xmlNamespaces | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenformat = xml

 | csvSeparator | string | No | | data type=string; maxLen=5
Applies whenformat = csv

 | csvEnclosedBy | string | No | | data type=string; maxLen=1
Applies whenformat = csv

 | commitInterval | integer | Yes | 200 | data type=integer; maxLen=32767

 | defaultXlsxSheetName | string | No | | data type=string; maxLen=255
Applies whenformat = xlsx

 | skipRows | number | No | | data type=number; maxLen=5
Applies whenformat in (csv)format in (xlsx)

 | staticId | string | Yes | | data type=string; maxLen=255

 | firstLineContainsHeaders | boolean | Yes | true | data type=boolean
Applies whenformat in (csv)format in (xlsx)

Copy
advanced {
 encoding: iso-8859-6
 numericChars: value
 xmlNamespaces: ```
 value
 ```
 csvSeparator: value
 csvEnclosedBy: value
 commitInterval: 42
 defaultXlsxSheetName: value
 skipRows: 42
 staticId: value
 firstLineContainsHeaders: false
}

errorHandling

 | Property | Type | Required | Default Value | Details

 | whenOnError | enum | Yes | stop | data type=string; lov=STATIC
Valid values: ignore stop logErrorIntoCollection logIntoErrorLog

 | name | string | Yes | | data type=string; maxLen=128; textCase=UPPER
Applies whenwhenOnError = logErrorIntoCollection

 | tableName | string | Yes | | data type=string; maxLen=128
Applies whenwhenOnError = logIntoErrorLog

Copy
errorHandling {
 whenOnError: ignore
 name: value
 tableName: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=dataLoadDefinition

Copy
subscription {
 master: @component
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
dataLoadDefinition sample (
 name: value
 dataProfile {
 name: value
 format: csv
 rowSelector: value
 useRawSelectors: false
 comments: ```
 value
 ```
 }
 target {
 type: table
 tableOwner: value
 tableName: value
 name: value
 loadingMethod: append
 }
 advanced {
 encoding: iso-8859-6
 numericChars: value
 xmlNamespaces: ```
 value
 ```
 csvSeparator: value
 csvEnclosedBy: value
 commitInterval: 42
 defaultXlsxSheetName: value
 skipRows: 42
 staticId: value
 firstLineContainsHeaders: false
 }
 errorHandling {
 whenOnError: ignore
 name: value
 tableName: value
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

developerComment - APEXlang Reference

developerComment

Parent: app

Property Groups:
comments

comments

 | Property | Type | Required | Default Value | Details

 | pages | array of integers | No | | data type=integer; maxLen=4000

 | comments | multiline string | No | | data type=multiline string; maxLen=4000

Copy
comments {
 pages: [
 42
 42
 ]
 comments: ```
 value
 ```
}

APEXlang Example

Copy
developerComment sample (
 comments {
 pages: [
 42
 42
 ]
 comments: ```
 value
 ```
 }
)

---

dynamicTranslation - APEXlang Reference

dynamicTranslation

Parent: app

Property Groups:
translation

translation

 | Property | Type | Required | Default Value | Details

 | language | enum | Yes | | data type=string; lov=STATIC
Valid values: af sq ar-dz ar-bh ar-eg ar-iq ar-jo ar-kw ar-lb ar-ly ar-ma ar-om ar-qa ar-sa ar-sy ar-tn ar-ae ar-ye ar hy as az eu be bn ba bg km ca zh-cn zh-hk zh-mo zh-sg zh-tw zh hr cs da nl-be nl en-au en-bz en-ca en-ie en-jm en-nz en-ph en-za en-tt en-gb en-us en-zw en et mk fo fa fi fr-be fr-ca fr fr-lu fr-mc fr-ch gd gl de-at de de-li de-lu de-ch el gu he hi hu is id ga it it-ch ja kn kk kok ko kz lv lt ms ml mt mr me ne nb-no no nn-no or pl pt-br pt pa ro ru-md ru sr-cyrl sr-latn sr sk sl es-ar es-bo es-cl es-co es-cr es-do es-ec es-sv es-gt es-hn es-mx es-ni es-pa es-py es-pe es-pr es es-us es-uy es-ve sw sv-fi sv ta te th tr uk ur uz vi cy

 | fromText | multiline string | Yes | | data type=multiline string; maxLen=32767

 | toText | multiline string | Yes | | data type=multiline string; maxLen=32767

Copy
translation {
 language: af
 fromText: ```
 value
 ```
 toText: ```
 value
 ```
}

APEXlang Example

Copy
dynamicTranslation sample (
 translation {
 language: af
 fromText: ```
 value
 ```
 toText: ```
 value
 ```
 }
)

---

emailTemplate - APEXlang Reference

emailTemplate

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | emailSubject | string | Yes | | data type=string; maxLen=255

Property Groups:
htmlFormat
plainTextFormat
advanced
subscription
comments

htmlFormat

 | Property | Type | Required | Default Value | Details

 | header | multiline string | No | | data type=multiline string; maxLen=32767

 | body | multiline string | Yes | | data type=multiline string; maxLen=32767

 | footer | multiline string | No | | data type=multiline string; maxLen=32767

Copy
htmlFormat {
 header: ```html
 value
 ```
 body: ```html
 value
 ```
 footer: ```html
 value
 ```
}

plainTextFormat

 | Property | Type | Required | Default Value | Details

 | content | multiline string | No | | data type=multiline string; maxLen=32767

Copy
plainTextFormat {
 content: ```html
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | versionNumber | enum | No | | data type=string; lov=STATIC
Valid values: 1 2

 | htmlTemplate | multiline string | No | | data type=multiline string; maxLen=32767

Copy
advanced {
 staticId: value
 versionNumber: "1"
 htmlTemplate: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=emailTemplate

Copy
subscription {
 master: @component
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
emailTemplate sample (
 name: value
 emailSubject: value
 htmlFormat {
 header: ```html
 value
 ```
 body: ```html
 value
 ```
 footer: ```html
 value
 ```
 }
 plainTextFormat {
 content: ```html
 value
 ```
 }
 advanced {
 staticId: value
 versionNumber: "1"
 htmlTemplate: ```html
 value
 ```
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

file - APEXlang Reference

file

Parent: app

Property Groups:
file

file

 | Property | Type | Required | Default Value | Details

 | fileName | string | Yes | | data type=string; maxLen=255

 | content | blob | No | | data type=blob; maxLen=32767

 | mimeType | string | Yes | | data type=string; maxLen=255

 | charSet | enum | No | | data type=string; maxLen=128; lov=STATIC
Valid values: iso-8859-6 windows-1256 big5 gbk iso-8859-5 koi8-r koi8-u windows-1251 iso-8859-2 windows-1250 iso-8859-7 windows-1253 iso-8859-8-i windows-1255 euc-jp shift-jis euc-kr iso-8859-4 windows-1257 iso-8859-3 tis-620 iso-8859-9 windows-1254 us-ascii utf-16be utf-16le utf-8 windows-1258 iso-8859-1 windows-1252

Copy
file {
 fileName: value
 content: value
 mimeType: value
 charSet: iso-8859-6
}

APEXlang Example

Copy
file sample (
 file {
 fileName: value
 content: value
 mimeType: value
 charSet: iso-8859-6
 }
)

---

jsonDualityView - APEXlang Reference

jsonDualityView

Parent: app

Children: dataProfileColumn

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
dataProfile
source
advanced
remoteCache
subscription
comments

dataProfile

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | format | enum | Yes | json | data type=string; lov=STATIC
Valid values: csv json xlsx xml

 | rowSelector | string | No | | data type=string; maxLen=255
Applies whenformat in (json)format in (xml)

 | useRawSelectors | boolean | Yes | false | data type=boolean
Applies whenformat = json

 | comments | multiline string | No | | data type=multiline string; maxLen=4000

Copy
dataProfile {
 name: value
 format: csv
 rowSelector: value
 useRawSelectors: false
 comments: ```
 value
 ```
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | tableOwner | string | No | | data type=string; maxLen=32767

 | tableName | string | Yes | | data type=string; maxLen=128

Copy
source {
 location: localDatabase
 remoteServer: @component
 tableOwner: value
 tableName: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | xmlNamespaces | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenformat = xml

 | csvSeparator | string | No | | data type=string; maxLen=5
Applies whenformat = csv

 | csvEnclosedBy | string | No | | data type=string; maxLen=1
Applies whenformat = csv

 | staticId | string | Yes | | data type=string; maxLen=255

 | defaultXlsxSheetName | string | No | | data type=string; maxLen=255
Applies whenformat = xlsx

 | skipRows | number | No | | data type=number; maxLen=5
Applies whenformat in (csv)format in (xlsx)

 | firstLineContainsHeaders | boolean | Yes | true | data type=boolean
Applies whenformat in (csv)format in (xlsx)

Copy
advanced {
 xmlNamespaces: ```
 value
 ```
 csvSeparator: value
 csvEnclosedBy: value
 staticId: value
 defaultXlsxSheetName: value
 skipRows: 42
 firstLineContainsHeaders: false
}

remoteCache

 | Property | Type | Required | Default Value | Details

 | caching | enum | No | | data type=string; lov=STATIC
Valid values: allUsers user session
Applies whenlocation = restEnabledSql

 | timeout | multiline string | No | | data type=multiline string; maxLen=255
Applies whenlocation = restEnabledSql and caching is set

Copy
remoteCache {
 caching: allUsers
 timeout: ```
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=jsonDualityView

Copy
subscription {
 master: @component
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
jsonDualityView sample (
 name: value
 dataProfile {
 name: value
 format: csv
 rowSelector: value
 useRawSelectors: false
 comments: ```
 value
 ```
 }
 source {
 location: localDatabase
 remoteServer: @component
 tableOwner: value
 tableName: value
 }
 advanced {
 xmlNamespaces: ```
 value
 ```
 csvSeparator: value
 csvEnclosedBy: value
 staticId: value
 defaultXlsxSheetName: value
 skipRows: 42
 firstLineContainsHeaders: false
 }
 remoteCache {
 caching: allUsers
 timeout: ```
 value
 ```
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

jsonSource - APEXlang Reference

jsonSource

Parent: app

Children: dataProfileColumn

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: tableWithJsonColumn jsonCollectionTable

Property Groups:
dataProfile
source
advanced
remoteCache
subscription
comments

dataProfile

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | format | enum | Yes | json | data type=string; lov=STATIC
Valid values: csv json xlsx xml

 | rowSelector | string | No | | data type=string; maxLen=255
Applies whenformat in (json)format in (xml)

 | useRawSelectors | boolean | Yes | false | data type=boolean
Applies whenformat = json

 | comments | multiline string | No | | data type=multiline string; maxLen=4000

Copy
dataProfile {
 name: value
 format: csv
 rowSelector: value
 useRawSelectors: false
 comments: ```
 value
 ```
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | tableOwner | string | No | | data type=string; maxLen=32767

 | tableName | string | Yes | | data type=string; maxLen=128

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000

Copy
source {
 location: localDatabase
 remoteServer: @component
 tableOwner: value
 tableName: value
 whereClause: ```sql
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | xmlNamespaces | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenformat = xml

 | csvSeparator | string | No | | data type=string; maxLen=5
Applies whenformat = csv

 | csvEnclosedBy | string | No | | data type=string; maxLen=1
Applies whenformat = csv

 | defaultXlsxSheetName | string | No | | data type=string; maxLen=255
Applies whenformat = xlsx

 | skipRows | number | No | | data type=number; maxLen=5
Applies whenformat in (csv)format in (xlsx)

 | staticId | string | Yes | | data type=string; maxLen=255

 | firstLineContainsHeaders | boolean | Yes | true | data type=boolean
Applies whenformat in (csv)format in (xlsx)

Copy
advanced {
 xmlNamespaces: ```
 value
 ```
 csvSeparator: value
 csvEnclosedBy: value
 defaultXlsxSheetName: value
 skipRows: 42
 staticId: value
 firstLineContainsHeaders: false
}

remoteCache

 | Property | Type | Required | Default Value | Details

 | caching | enum | No | | data type=string; lov=STATIC
Valid values: allUsers user session
Applies whenlocation = restEnabledSql

 | timeout | multiline string | No | | data type=multiline string; maxLen=255
Applies whenlocation = restEnabledSql and caching is set

Copy
remoteCache {
 caching: allUsers
 timeout: ```
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=jsonSource

Copy
subscription {
 master: @component
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
jsonSource sample (
 name: value
 type: tableWithJsonColumn
 dataProfile {
 name: value
 format: csv
 rowSelector: value
 useRawSelectors: false
 comments: ```
 value
 ```
 }
 source {
 location: localDatabase
 remoteServer: @component
 tableOwner: value
 tableName: value
 whereClause: ```sql
 value
 ```
 }
 advanced {
 xmlNamespaces: ```
 value
 ```
 csvSeparator: value
 csvEnclosedBy: value
 defaultXlsxSheetName: value
 skipRows: 42
 staticId: value
 firstLineContainsHeaders: false
 }
 remoteCache {
 caching: allUsers
 timeout: ```
 value
 ```
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

languageMapping - APEXlang Reference

languageMapping

Parent: app

Property Groups:
translation
advanced
comments

translation

 | Property | Type | Required | Default Value | Details

 | appId | integer | Yes | | data type=integer; maxLen=32767

 | language | enum | Yes | | data type=string; lov=STATIC
Valid values: af sq ar-dz ar-bh ar-eg ar-iq ar-jo ar-kw ar-lb ar-ly ar-ma ar-om ar-qa ar-sa ar-sy ar-tn ar-ae ar-ye ar hy as az eu be bn ba bg km ca zh-cn zh-hk zh-mo zh-sg zh-tw zh hr cs da nl-be nl en-au en-bz en-ca en-ie en-jm en-nz en-ph en-za en-tt en-gb en-us en-zw en et mk fo fa fi fr-be fr-ca fr fr-lu fr-mc fr-ch gd gl de-at de de-li de-lu de-ch el gu he hi hu is id ga it it-ch ja kn kk kok ko kz lv lt ms ml mt mr me ne nb-no no nn-no or pl pt-br pt pa ro ru-md ru sr-cyrl sr-latn sr sk sl es-ar es-bo es-cl es-co es-cr es-do es-ec es-sv es-gt es-hn es-mx es-ni es-pa es-py es-pe es-pr es es-us es-uy es-ve sw sv-fi sv ta te th tr uk ur uz vi cy

 | documentDirection | enum | No | | data type=string; lov=STATIC
Valid values: true false

Copy
translation {
 appId: 42
 language: af
 documentDirection: true
}

advanced

 | Property | Type | Required | Default Value | Details

 | imageDirectory | string | No | | data type=string; maxLen=2000

Copy
advanced {
 imageDirectory: value
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
languageMapping sample (
 translation {
 appId: 42
 language: af
 documentDirection: true
 }
 advanced {
 imageDirectory: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

legacyDataLoadDefinition - APEXlang Reference

legacyDataLoadDefinition

Parent: app

Children: tableLookupskipValidation = false, transformationRuleskipValidation = false

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
target
uniqueKeys
validation
advanced
subscription
comments

target

 | Property | Type | Required | Default Value | Details

 | tableOwner | string | No | | data type=string; maxLen=32767

 | tableName | string | Yes | | data type=string; maxLen=128

Copy
target {
 tableOwner: value
 tableName: value
}

uniqueKeys

 | Property | Type | Required | Default Value | Details

 | uniqueColumn1 | string | Yes | | data type=string; maxLen=32767

 | isUk1CaseSensitive | boolean | Yes | false | data type=boolean
Applies whenuniqueColumn1 is set

 | uniqueColumn2 | string | No | | data type=string; maxLen=32767
Applies whenuniqueColumn1 is set

 | isUk2CaseSensitive | boolean | Yes | false | data type=boolean
Applies whenuniqueColumn1 is set and uniqueColumn2 is set

 | uniqueColumn3 | string | No | | data type=string; maxLen=32767
Applies whenuniqueColumn1 is set and uniqueColumn2 is set

 | isUk3CaseSensitive | boolean | Yes | false | data type=boolean
Applies whenuniqueColumn1 is set and uniqueColumn2 is set and uniqueColumn3 is set

Copy
uniqueKeys {
 uniqueColumn1: value
 isUk1CaseSensitive: false
 uniqueColumn2: value
 isUk2CaseSensitive: false
 uniqueColumn3: value
 isUk3CaseSensitive: false
}

validation

 | Property | Type | Required | Default Value | Details

 | skipValidation | boolean | Yes | false | data type=boolean

 | versionColumn | string | No | | data type=string; maxLen=32767
Applies whenskipValidation = false

Copy
validation {
 skipValidation: false
 versionColumn: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | columnAliasesLov | reference | No | | data type=reference; lov=COMPONENT; references=lov

 | wizardPageIds | string | No | | data type=string; maxLen=32767

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 columnAliasesLov: @component
 wizardPageIds: value
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=dataLoadDefinition

Copy
subscription {
 master: @component
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
legacyDataLoadDefinition sample (
 name: value
 target {
 tableOwner: value
 tableName: value
 }
 uniqueKeys {
 uniqueColumn1: value
 isUk1CaseSensitive: false
 uniqueColumn2: value
 isUk2CaseSensitive: false
 uniqueColumn3: value
 isUk3CaseSensitive: false
 }
 validation {
 skipValidation: false
 versionColumn: value
 }
 advanced {
 columnAliasesLov: @component
 wizardPageIds: value
 staticId: value
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

list - APEXlang Reference

list

Parent: app

Children: entrytype = staticValues

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
source
advanced
config
subscription
comments

source

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | staticValues | data type=string; lov=STATIC
Valid values: staticValues sqlQuery functionBody

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = functionBody and language = javaScript-mle

Copy
source {
 type: staticValues
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

config

 | Property | Type | Required | Default Value | Details

 | buildOption | reference | No | | data type=reference; lov=COMPONENT; references=buildOption

Copy
config {
 buildOption: @component
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=list
Valid values: @/8842.242/navigation-bar @/8842.261/navigation-bar @/8842.9999/navigation-bar

Copy
subscription {
 master: "@/8842.242/navigation-bar"
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
list sample (
 name: value
 source {
 type: staticValues
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 }
 advanced {
 staticId: value
 }
 config {
 buildOption: @component
 }
 subscription {
 master: "@/8842.242/navigation-bar"
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

lov - APEXlang Reference

lov

Parent: app

Children: columnlocation in (localDatabase); location in (restEnabledSql); location in (jsonDualityView); location in (jsonSource); location in (restSource); location in (sampleData), entrylocation = staticValues, parameterlocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable = false; location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = false; location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable = false

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255; textCase=UPPER

Property Groups:
source
dataProfile
restSynchronization
externalFilterAndOrderBy
localPostProcessing
remoteCache
columnMapping
advanced
subscription
comments

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: staticValues localDatabase restEnabledSql restSource jsonDualityView jsonSource sampleData

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | sampleData | enum | Yes | | data type=string; lov=STATIC
Valid values: employees tasks products projects
Applies whenlocation = sampleData

 | type | enum | Yes | tableView | data type=string; lov=STATIC
Valid values: tableView sqlQuery functionBody propertyGraph legacySqlQuery
Applies whenlocation in (localDatabase)location in (restEnabledSql)

 | tableOwner | string | No | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase) and type = tableViewlocation in (restEnabledSql) and type = tableView

 | tableName | string | Yes | | data type=string; maxLen=128
Applies whenlocation in (localDatabase) and type = tableViewlocation in (restEnabledSql) and type = tableView

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenlocation in (localDatabase) and type = tableViewlocation in (restEnabledSql) and type = tableView

 | graphOwner | string | No | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase) and type = propertyGraphlocation in (restEnabledSql) and type = propertyGraph

 | graphName | string | Yes | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase) and type = propertyGraphlocation in (restEnabledSql) and type = propertyGraph

 | matchClause | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenlocation in (localDatabase) and type = propertyGraphlocation in (restEnabledSql) and type = propertyGraph

 | columnsClause | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenlocation in (localDatabase) and type = propertyGraphlocation in (restEnabledSql) and type = propertyGraph

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenlocation in (localDatabase) and type = propertyGraphlocation in (restEnabledSql) and type = propertyGraph

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenlocation in (localDatabase) and type = sqlQuerylocation in (restEnabledSql) and type = sqlQuery

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenlocation in (localDatabase) and type = legacySqlQuerylocation in (restEnabledSql) and type = legacySqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation in (localDatabase) and type = functionBodylocation in (restEnabledSql) and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation in (localDatabase) and type = functionBody and language = plsqllocation in (restEnabledSql) and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation in (localDatabase) and type = functionBody and language = javaScript-mlelocation in (restEnabledSql) and type = functionBody and language = javaScript-mle

 | restSource | reference | Yes | | data type=reference; lov=COMPONENT; references=restDataSource
Applies whenlocation = restSource

 | jsonDualityView | reference | Yes | | data type=reference; lov=COMPONENT; references=jsonDualityView
Applies whenlocation = jsonDualityView

 | jsonSource | reference | Yes | | data type=reference; lov=COMPONENT; references=jsonSource
Applies whenlocation = jsonSource

 | optimizerHint | string | No | | data type=string; maxLen=255
Applies whenlocation in (localDatabase)location in (restEnabledSql)location in (restSource)location in (jsonDualityView)location in (jsonSource)

Copy
source {
 location: staticValues
 remoteServer: @component
 sampleData: employees
 type: tableView
 tableOwner: value
 tableName: value
 whereClause: ```sql
 value
 ```
 graphOwner: value
 graphName: value
 matchClause: ```
 value
 ```
 columnsClause: ```
 value
 ```
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 restSource: @component
 jsonDualityView: @component
 jsonSource: @component
 optimizerHint: value
}

dataProfile

 | Property | Type | Required | Default Value | Details

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whenlocation = restSource and restSource supports HAS_ARRAY_COLUMNS

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whenlocation = jsonDualityView and jsonDualityView supports HAS_ARRAY_COLUMNS

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whenlocation = jsonSource and jsonSource supports HAS_ARRAY_COLUMNS

Copy
dataProfile {
 nestedRows: @component
}

restSynchronization

 | Property | Type | Required | Default Value | Details

 | useLocalTable | boolean | Yes | false | data type=boolean
Applies whenlocation = restSource and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNSlocation = restSource and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNSlocation = restSource and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED

Copy
restSynchronization {
 useLocalTable: false
}

externalFilterAndOrderBy

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean
Applies whenlocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false)location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$)location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false)location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$)location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false)location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$)

 | filter | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenlocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true

 | orderBy | multiline string | No | | data type=multiline string; maxLen=255
Applies whenlocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true

Copy
externalFilterAndOrderBy {
 enabled: false
 filter: ```
 value
 ```
 orderBy: ```
 value
 ```
}

localPostProcessing

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whenlocation = restSource and restSource is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenlocation = restSource and restSource is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restSource and restSource is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = restSource and restSource is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restSource and restSource is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restSource and restSource is set and type = plsqlFunctionBody and language = javaScript-mle

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whenlocation = jsonDualityView and jsonDualityView is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenlocation = jsonDualityView and jsonDualityView is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = jsonDualityView and jsonDualityView is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody and language = javaScript-mle

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whenlocation = jsonSource and jsonSource is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenlocation = jsonSource and jsonSource is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = jsonSource and jsonSource is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = jsonSource and jsonSource is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = jsonSource and jsonSource is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = jsonSource and jsonSource is set and type = plsqlFunctionBody and language = javaScript-mle

Copy
localPostProcessing {
 type: whereOrderByClause
 whereClause: ```sql
 value
 ```
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
}

remoteCache

 | Property | Type | Required | Default Value | Details

 | caching | enum | No | | data type=string; lov=STATIC
Valid values: allUsers user session
Applies whenlocation = restEnabledSql

 | timeout | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whenlocation = restEnabledSql and caching is set

Copy
remoteCache {
 caching: allUsers
 timeout: ```
 value
 ```
}

columnMapping

 | Property | Type | Required | Default Value | Details

 | return | string | Yes | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase)location in (localDatabase) and location in (restEnabledSql)location in (restEnabledSql) and location in (localDatabase)location in (restEnabledSql)location in (sampleData) and location in (localDatabase)location in (sampleData) and location in (restEnabledSql)location in (jsonDualityView) and location in (localDatabase)location in (jsonDualityView) and location in (restEnabledSql)location in (jsonSource) and location in (localDatabase)location in (jsonSource) and location in (restEnabledSql)location in (restSource) and location in (localDatabase)location in (restSource) and location in (restEnabledSql)

 | display | string | No | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase)location in (localDatabase) and location in (restEnabledSql)location in (restEnabledSql) and location in (localDatabase)location in (restEnabledSql)location in (sampleData) and location in (localDatabase)location in (sampleData) and location in (restEnabledSql)location in (jsonDualityView) and location in (localDatabase)location in (jsonDualityView) and location in (restEnabledSql)location in (jsonSource) and location in (localDatabase)location in (jsonSource) and location in (restEnabledSql)location in (restSource) and location in (localDatabase)location in (restSource) and location in (restEnabledSql)

 | defaultSort | string | No | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase)location in (localDatabase) and location in (restEnabledSql)location in (restEnabledSql) and location in (localDatabase)location in (restEnabledSql)location in (sampleData) and location in (localDatabase)location in (sampleData) and location in (restEnabledSql)location in (jsonDualityView) and location in (localDatabase)location in (jsonDualityView) and location in (restEnabledSql)location in (jsonSource) and location in (localDatabase)location in (jsonSource) and location in (restEnabledSql)location in (restSource) and location in (localDatabase)location in (restSource) and location in (restEnabledSql)

 | sortDirection | enum | Yes | ascNullsLast | data type=string; lov=STATIC
Valid values: ascNullsLast ascNullsFirst descNullsLast descNullsFirst
Applies whenlocation in (localDatabase) and defaultSort is setlocation in (localDatabase) and location in (restEnabledSql) and defaultSort is setlocation in (restEnabledSql) and location in (localDatabase) and defaultSort is setlocation in (restEnabledSql) and defaultSort is setlocation in (sampleData) and location in (localDatabase) and defaultSort is setlocation in (sampleData) and location in (restEnabledSql) and defaultSort is setlocation in (jsonDualityView) and location in (localDatabase) and defaultSort is setlocation in (jsonDualityView) and location in (restEnabledSql) and defaultSort is setlocation in (jsonSource) and location in (localDatabase) and defaultSort is setlocation in (jsonSource) and location in (restEnabledSql) and defaultSort is setlocation in (restSource) and location in (localDatabase) and defaultSort is setlocation in (restSource) and location in (restEnabledSql) and defaultSort is set

 | group | string | No | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase) and defaultSort is setlocation in (localDatabase) and location in (restEnabledSql) and defaultSort is setlocation in (restEnabledSql) and location in (localDatabase) and defaultSort is setlocation in (restEnabledSql) and defaultSort is setlocation in (sampleData) and location in (localDatabase) and defaultSort is setlocation in (sampleData) and location in (restEnabledSql) and defaultSort is setlocation in (jsonDualityView) and location in (localDatabase) and defaultSort is setlocation in (jsonDualityView) and location in (restEnabledSql) and defaultSort is setlocation in (jsonSource) and location in (localDatabase) and defaultSort is setlocation in (jsonSource) and location in (restEnabledSql) and defaultSort is setlocation in (restSource) and location in (localDatabase) and defaultSort is setlocation in (restSource) and location in (restEnabledSql) and defaultSort is set

 | groupSortDirection | enum | Yes | ascNullsLast | data type=string; lov=STATIC
Valid values: ascNullsLast ascNullsFirst descNullsLast descNullsFirst
Applies whenlocation in (localDatabase) and defaultSort is set and group is setlocation in (localDatabase) and location in (restEnabledSql) and defaultSort is set and group is setlocation in (restEnabledSql) and location in (localDatabase) and defaultSort is set and group is setlocation in (restEnabledSql) and defaultSort is set and group is setlocation in (sampleData) and location in (localDatabase) and defaultSort is set and group is setlocation in (sampleData) and location in (restEnabledSql) and defaultSort is set and group is setlocation in (jsonDualityView) and location in (localDatabase) and defaultSort is set and group is setlocation in (jsonDualityView) and location in (restEnabledSql) and defaultSort is set and group is setlocation in (jsonSource) and location in (localDatabase) and defaultSort is set and group is setlocation in (jsonSource) and location in (restEnabledSql) and defaultSort is set and group is setlocation in (restSource) and location in (localDatabase) and defaultSort is set and group is setlocation in (restSource) and location in (restEnabledSql) and defaultSort is set and group is set

 | icon | string | No | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase)location in (localDatabase) and location in (restEnabledSql)location in (restEnabledSql) and location in (localDatabase)location in (restEnabledSql)location in (sampleData) and location in (localDatabase)location in (sampleData) and location in (restEnabledSql)location in (jsonDualityView) and location in (localDatabase)location in (jsonDualityView) and location in (restEnabledSql)location in (jsonSource) and location in (localDatabase)location in (jsonSource) and location in (restEnabledSql)location in (restSource) and location in (localDatabase)location in (restSource) and location in (restEnabledSql)

 | quickPickRank | string | No | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase)location in (localDatabase) and location in (restEnabledSql)location in (restEnabledSql) and location in (localDatabase)location in (restEnabledSql)

 | oracleTextIndex | string | No | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase)location in (localDatabase) and location in (restEnabledSql)location in (restEnabledSql) and location in (localDatabase)location in (restEnabledSql)

Copy
columnMapping {
 return: value
 display: value
 defaultSort: value
 sortDirection: ascNullsLast
 group: value
 groupSortDirection: ascNullsLast
 icon: value
 quickPickRank: value
 oracleTextIndex: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=lov

Copy
subscription {
 master: @component
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
lov sample (
 name: value
 source {
 location: staticValues
 remoteServer: @component
 sampleData: employees
 type: tableView
 tableOwner: value
 tableName: value
 whereClause: ```sql
 value
 ```
 graphOwner: value
 graphName: value
 matchClause: ```
 value
 ```
 columnsClause: ```
 value
 ```
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 restSource: @component
 jsonDualityView: @component
 jsonSource: @component
 optimizerHint: value
 }
 dataProfile {
 nestedRows: @component
 }
 restSynchronization {
 useLocalTable: false
 }
 externalFilterAndOrderBy {
 enabled: false
 filter: ```
 value
 ```
 orderBy: ```
 value
 ```
 }
 localPostProcessing {
 type: whereOrderByClause
 whereClause: ```sql
 value
 ```
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 }
 remoteCache {
 caching: allUsers
 timeout: ```
 value
 ```
 }
 columnMapping {
 return: value
 display: value
 defaultSort: value
 sortDirection: ascNullsLast
 group: value
 groupSortDirection: ascNullsLast
 icon: value
 quickPickRank: value
 oracleTextIndex: value
 }
 advanced {
 staticId: value
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

mapBackground - APEXlang Reference

mapBackground

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | vector | data type=string; lov=STATIC
Valid values: raster vector ogcWms

 | url | string | Yes | | data type=string; maxLen=32767

 | attribution | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype in (raster)type in (ogcWms)

 | apiKey | enum | No | | data type=string; lov=STATIC
Valid values: staticValue webCredential

 | staticValue | string | Yes | | data type=string; maxLen=32767
Applies whenapiKey = staticValue

 | webCredential | reference | Yes | | data type=reference; lov=COMPONENT; references=webCredential
Applies whenapiKey = webCredential

 | httpHeaders | multiline string | No | | data type=multiline string; maxLen=32767

Property Groups:
advanced
subscription
comments

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | minZoomLevel | number | No | | data type=number; maxLen=22

 | maxZoomLevel | number | No | | data type=number; maxLen=22

Copy
advanced {
 staticId: value
 minZoomLevel: 42
 maxZoomLevel: 42
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=mapBackground

Copy
subscription {
 master: @component
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
mapBackground sample (
 name: value
 type: raster
 url: value
 attribution: ```
 value
 ```
 apiKey: staticValue
 staticValue: value
 webCredential: @component
 httpHeaders: ```
 value
 ```
 advanced {
 staticId: value
 minZoomLevel: 42
 maxZoomLevel: 42
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

pageGroup - APEXlang Reference

pageGroup

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | staticId | string | Yes | | data type=string; maxLen=255

 | sequence | integer | No | | data type=integer; maxLen=32767

Property Groups:
description

description

 | Property | Type | Required | Default Value | Details

 | description | multiline string | No | | data type=multiline string; maxLen=4000

Copy
description {
 description: ```
 value
 ```
}

APEXlang Example

Copy
pageGroup sample (
 name: value
 staticId: value
 sequence: 42
 description {
 description: ```
 value
 ```
 }
)

---

page - APEXlang Reference

page

Parent: app

Children: branch, button, computation, dynamicAction, metaTagauthentication = public and enableMetaTags = true, pageItem, process, region, validation

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | page | number | Yes | | data type=number; maxLen=10

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the current page. This name is used in numerous Oracle APEX pages and reports, along with the page number and title.

 | alias | string | No | | data type=string; maxLen=80; textCase=UPPER

 | title | string | No | | data type=string; maxLen=255

Enter a title that will be displayed in the title bar of the browser window, and announced to screen reader users when they first open the page.
 The Oracle APEX engine uses the title you specify here in place of the #TITLE# substitution string used in the page template. This title is inserted between the
 HTML tags <TITLE> and </TITLE>.

A good page title should provide a clear and concise description of the purpose of the page, can include the application name and sub-section of the application for additional
 context, and should always include the most important, and unique information first. For example, if you have a 'Products' page in an 'Administration' section of a 'Customer Portal'
 application, the page title could be defined as 'Products | Admin | Customer Portal'.

 | pageGroup | reference | No | | data type=reference; lov=COMPONENT; references=pageGroup
Applies whentype in (standard)type in (boilerplate)

Property Groups:
appearance
dialog
navigationMenu
navigation
javaScript
css
htmlHeader
headerAndFooter
readOnly
security
sessionManagement
advanced
serverCache
errorHandling
help
config
comments

appearance

 | Property | Type | Required | Default Value | Details

 | pageMode | enum | Yes | normal | data type=string; lov=STATIC
Valid values: normal modalDialog nonModalDialog

 | pageTemplate | reference | Yes | | data type=reference; lov=COMPONENT; references=pageTemplate
Applies whenpageMode = normal

 | dialogTemplate | reference | Yes | | data type=reference; lov=COMPONENT; references=pageTemplate
Applies whenpageMode in (modalDialog)pageMode in (nonModalDialog)

 | templateOptions | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Enter classes to add to this component. You may add multiple classes by separating them with spaces.

 | mediaType | string | No | | data type=string; maxLen=255

Copy
appearance {
 pageMode: normal
 pageTemplate: @component
 dialogTemplate: @component
 templateOptions: [
 value
 value
 ]
 cssClasses: [
 value
 value
 ]
 mediaType: value
}

dialog

 | Property | Type | Required | Default Value | Details

 | width | string | No | | data type=string; maxLen=20
Applies whenpageMode in (modalDialog)pageMode in (nonModalDialog)

 | height | string | No | | data type=string; maxLen=20
Applies whenpageMode in (modalDialog)pageMode in (nonModalDialog)

 | maxWidth | string | No | | data type=string; maxLen=20
Applies whenpageMode in (modalDialog)pageMode in (nonModalDialog)

 | attributes | array of strings | No | | data type=string; maxLen=255
Applies whenpageMode in (modalDialog)pageMode in (nonModalDialog)

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whenpageMode in (modalDialog)pageMode in (nonModalDialog)

 | chained | boolean | Yes | true | data type=boolean
Applies whenpageMode in (modalDialog)pageMode in (nonModalDialog)

 | resizable | boolean | Yes | true | data type=boolean
Applies whenpageMode in (modalDialog)pageMode in (nonModalDialog)

Copy
dialog {
 width: value
 height: value
 maxWidth: value
 attributes: [
 value
 value
 ]
 cssClasses: [
 value
 value
 ]
 chained: false
 resizable: false
}

navigationMenu

 | Property | Type | Required | Default Value | Details

 | overrideUserInterfaceLevel | boolean | Yes | false | data type=boolean
Applies whencurrentTheme supports HAS_LIST_NAVIGATION

 | list | reference | No | | data type=reference; lov=COMPONENT; references=list
Applies whencurrentTheme supports HAS_LIST_NAVIGATION and overrideUserInterfaceLevel = true

 | listPosition | enum | Yes | | data type=string; lov=STATIC
Valid values: top side
Applies whencurrentTheme supports HAS_LIST_NAVIGATION and overrideUserInterfaceLevel = true and list is set

 | listTemplate | reference | Yes | | data type=reference; lov=COMPONENT; references=listTemplate
Applies whencurrentTheme supports HAS_LIST_NAVIGATION and overrideUserInterfaceLevel = true and list is set

 | templateOptions | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS
Applies whencurrentTheme supports HAS_LIST_NAVIGATION and overrideUserInterfaceLevel = true and list is set

Copy
navigationMenu {
 overrideUserInterfaceLevel: false
 list: @component
 listPosition: top
 listTemplate: @component
 templateOptions: [
 value
 value
 ]
}

navigation

 | Property | Type | Required | Default Value | Details

 | cursorFocus | enum | Yes | firstItemOnPage | data type=string; lov=STATIC
Valid values: firstItemOnPage doNotFocusCursor

 | warnOnUnsavedChanges | boolean | Yes | true | data type=boolean

Copy
navigation {
 cursorFocus: firstItemOnPage
 warnOnUnsavedChanges: false
}

javaScript

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

 | functionAndGlobalVariableDeclaration | multiline string | No | | data type=multiline string; maxLen=32767

 | executeWhenPageLoads | multiline string | No | | data type=multiline string; maxLen=32767

 | includeStandardJavaScriptAndCss | boolean | Yes | true | data type=boolean

Copy
javaScript {
 fileUrls: [
 value
 value
 ]
 functionAndGlobalVariableDeclaration: ```javascript-browser
 value
 ```
 executeWhenPageLoads: ```javascript-browser
 value
 ```
 includeStandardJavaScriptAndCss: false
}

css

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

 | inline | multiline string | No | | data type=multiline string; maxLen=32767

Copy
css {
 fileUrls: [
 value
 value
 ]
 inline: ```css
 value
 ```
}

htmlHeader

 | Property | Type | Required | Default Value | Details

 | htmlHeader | multiline string | No | | data type=multiline string; maxLen=32767

 | pageHtmlBodyAttribute | multiline string | No | | data type=multiline string; maxLen=4000

Copy
htmlHeader {
 htmlHeader: ```html
 value
 ```
 pageHtmlBodyAttribute: ```
 value
 ```
}

headerAndFooter

 | Property | Type | Required | Default Value | Details

 | headerText | multiline string | No | | data type=multiline string; maxLen=4000

 | bodyHeader | multiline string | No | | data type=multiline string; maxLen=4000

 | footerText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
headerAndFooter {
 headerText: ```html
 value
 ```
 bodyHeader: ```html
 value
 ```
 footerText: ```html
 value
 ```
}

readOnly

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (userPreference=value)type in (userPreference!=value)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
readOnly {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

Select an authorization scheme applied to the page. Authorization schemes are defined at the application-level and can be applied to many elements within the application.

An authorization scheme is evaluated either once for each application session (at session creation), or once for each page view. If the selected authorization scheme evaluates to TRUE, then the page displays and is subject to other defined conditions. If it evaluates to FALSE, then the page does not display and an error message displays.

 | authentication | enum | Yes | required | data type=string; lov=STATIC
Valid values: required public

 | deepLinking | enum | No | | data type=string; lov=STATIC
Valid values: true false

 | pageAccessProtection | enum | Yes | unrestricted | data type=string; lov=STATIC
Valid values: unrestricted argumentsMustHaveChecksum noArgumentsSupported noUrlAccess

 | formAutoComplete | enum | Yes | true | data type=string; lov=STATIC
Valid values: true false

 | browserCache | enum | No | | data type=string; lov=STATIC
Valid values: true false

Copy
security {
 authorizationScheme: mustNotBePublicUser
 authentication: required
 deepLinking: true
 pageAccessProtection: unrestricted
 formAutoComplete: true
 browserCache: true
}

sessionManagement

 | Property | Type | Required | Default Value | Details

 | rejoinSessions | enum | No | | data type=string; lov=STATIC
Valid values: false publicSessions allSessions

Copy
sessionManagement {
 rejoinSessions: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | enableMetaTags | boolean | Yes | false | data type=boolean
Applies whenauthentication = public

 | enableDuplicatePageSubmissions | enum | Yes | true | data type=string; lov=STATIC
Valid values: false true

 | reloadOnSubmit | enum | Yes | onlyForSuccess | data type=string; lov=STATIC
Valid values: always onlyForSuccess

 | duplicateSubmissionUrl | string | No | | data type=string; maxLen=4000
Applies whenenableDuplicatePageSubmissions = false

Copy
advanced {
 enableMetaTags: false
 enableDuplicatePageSubmissions: false
 reloadOnSubmit: always
 duplicateSubmissionUrl: value
}

serverCache

 | Property | Type | Required | Default Value | Details

 | caching | enum | Yes | false | data type=string; lov=STATIC
Valid values: false true cacheByUser cacheBySession

 | cacheTimeout | enum | Yes | 6Hours | data type=string; lov=STATIC
Valid values: 10Seconds 1Minute 10Minutes 30Minutes 1Hour 2Hours 3Hours 4Hours 6Hours 12Hours 1Day 2Days 3Days 4Days 1Week 2Weeks 4Weeks 10Weeks 1Year

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (userPreference=value)type in (userPreference!=value)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverCache {
 caching: false
 cacheTimeout: "10Seconds"
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

errorHandling

 | Property | Type | Required | Default Value | Details

 | inLineErrorNotificationText | multiline string | No | | data type=multiline string; maxLen=4000

 | errorHandlingFunctionName | string | No | | data type=string; maxLen=255

Copy
errorHandling {
 inLineErrorNotificationText: ```
 value
 ```
 errorHandlingFunctionName: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=32767

Copy
help {
 helpText: ```html
 value
 ```
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
page sample (
 page: 42
 name: value
 alias: value
 title: value
 pageGroup: @component
 appearance {
 pageMode: normal
 pageTemplate: @component
 dialogTemplate: @component
 templateOptions: [
 value
 value
 ]
 cssClasses: [
 value
 value
 ]
 mediaType: value
 }
 dialog {
 width: value
 height: value
 maxWidth: value
 attributes: [
 value
 value
 ]
 cssClasses: [
 value
 value
 ]
 chained: false
 resizable: false
 }
 navigationMenu {
 overrideUserInterfaceLevel: false
 list: @component
 listPosition: top
 listTemplate: @component
 templateOptions: [
 value
 value
 ]
 }
 navigation {
 cursorFocus: firstItemOnPage
 warnOnUnsavedChanges: false
 }
 javaScript {
 fileUrls: [
 value
 value
 ]
 functionAndGlobalVariableDeclaration: ```javascript-browser
 value
 ```
 executeWhenPageLoads: ```javascript-browser
 value
 ```
 includeStandardJavaScriptAndCss: false
 }
 css {
 fileUrls: [
 value
 value
 ]
 inline: ```css
 value
 ```
 }
 htmlHeader {
 htmlHeader: ```html
 value
 ```
 pageHtmlBodyAttribute: ```
 value
 ```
 }
 headerAndFooter {
 headerText: ```html
 value
 ```
 bodyHeader: ```html
 value
 ```
 footerText: ```html
 value
 ```
 }
 readOnly {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 authentication: required
 deepLinking: true
 pageAccessProtection: unrestricted
 formAutoComplete: true
 browserCache: true
 }
 sessionManagement {
 rejoinSessions: false
 }
 advanced {
 enableMetaTags: false
 enableDuplicatePageSubmissions: false
 reloadOnSubmit: always
 duplicateSubmissionUrl: value
 }
 serverCache {
 caching: false
 cacheTimeout: "10Seconds"
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 errorHandling {
 inLineErrorNotificationText: ```
 value
 ```
 errorHandlingFunctionName: value
 }
 help {
 helpText: ```html
 value
 ```
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

plugin - APEXlang Reference

plugin

Parent: app

Children: actionPositiontype = templateComponent, actionTemplatetype = templateComponent, attributeGrouptype in (item); type in (region); type in (process); type in (dynamicAction); type in (templateComponent); type in (genAITool), customAttribute, eventtype in (item); type in (region); type in (dynamicAction), filetype in (region); type in (dynamicAction); type in (item); type in (templateComponent); type = genAITool and executionLocation = clientSide, slottype = templateComponent, standardAttributeConfigtype in (item); type in (region); type in (process); type in (dynamicAction); type in (restDataSource)

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | apexlangName | string | Yes | | data type=string; maxLen=40

 | staticId | string | Yes | | data type=string; maxLen=45; textCase=UPPER

 | type | enum | Yes | templateComponent | data type=string; lov=STATIC
Valid values: templateComponent item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource interactiveReportColumn

 | theme | reference | No | | data type=reference; lov=COMPONENT; references=theme
Applies whentype = templateComponent

Property Groups:
templateComponent
defaultSlots
aiTool
onDemand
component
source
callbacks
advanced
css
javaScript
information
subscription
comments

templateComponent

 | Property | Type | Required | Default Value | Details

 | availableAs | array of enums | No | | data type=string; lov=STATIC
Valid values: partial report regionOnly
Applies whentype = templateComponent

 | partial | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = templateComponent

 | reportBody | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = templateComponent and availableAs = report

 | reportGroup | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = templateComponent and availableAs = report

 | reportRow | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = templateComponent and availableAs = report

 | reportContainer | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = templateComponent and availableAs = report

 | translateTemplates | boolean | Yes | false | data type=boolean
Applies whentype = templateComponent

 | defaultEscapeMode | enum | Yes | html | data type=string; lov=STATIC
Valid values: html htmlAttribute stripHtml raw
Applies whentype = templateComponent

 | numberOfLazyLoadingSkeletons | integer | No | | data type=integer; maxLen=32767
Applies whentype = templateComponent and availableAs = report

Copy
templateComponent {
 availableAs: [
 partial
 report
 ]
 partial: ```html
 value
 ```
 reportBody: ```html
 value
 ```
 reportGroup: ```html
 value
 ```
 reportRow: ```html
 value
 ```
 reportContainer: ```html
 value
 ```
 translateTemplates: false
 defaultEscapeMode: html
 numberOfLazyLoadingSkeletons: 42
}

defaultSlots

 | Property | Type | Required | Default Value | Details

 | regions | string | No | | data type=string; lov=SLOTS
Applies whentype = templateComponent

 | items | string | No | | data type=string; lov=SLOTS
Applies whentype = templateComponent

 | buttons | string | No | | data type=string; lov=SLOTS
Applies whentype = templateComponent

Copy
defaultSlots {
 regions: value
 items: value
 buttons: value
}

aiTool

 | Property | Type | Required | Default Value | Details

 | executionLocation | enum | Yes | serverSide | data type=string; lov=STATIC
Valid values: clientSide serverSide
Applies whentype = genAITool

 | supportedExecutionPoints | array of enums | Yes | onDemand | data type=string; lov=STATIC
Valid values: augmentSystemPrompt onDemand
Applies whentype = genAITool

Copy
aiTool {
 executionLocation: clientSide
 supportedExecutionPoints: [
 augmentSystemPrompt
 onDemand
 ]
}

onDemand

 | Property | Type | Required | Default Value | Details

 | description | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = genAITool and supportedExecutionPoints = onDemand

 | parameters | enum | Yes | noParameters | data type=string; lov=STATIC
Valid values: noParameters definedByAiTool definedByPlugIn
Applies whentype = genAITool and supportedExecutionPoints = onDemand

 | parametersJsonSchema | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = genAITool and supportedExecutionPoints = onDemand and parameters = definedByPlugIn

Copy
onDemand {
 description: ```
 value
 ```
 parameters: noParameters
 parametersJsonSchema: ```json
 value
 ```
}

component

 | Property | Type | Required | Default Value | Details

 | supports | array of enums | Yes | APEX_APPLICATION_PAGE_ITEMS:APEX_APPL_PAGE_IG_COLUMNS | data type=string; lov=STATIC
Valid values: pageItems interactiveGridColumns facets facetGroupItems filters filterGroupItems
Applies whentype = item

 | supports | array of enums | Yes | APEX_APPLICATION_PAGE_PROC:APEX_APPL_AUTOMATION_ACTIONS:APEX_APPL_TASKDEF_ACTIONS:APEX_APPL_WORKFLOW_ACTIVITIES | data type=string; lov=STATIC
Valid values: pageProcesses automationActions taskDefinitionActions workflowActivities
Applies whentype = process

 | supportsSessionStateDataTypes | array of enums | Yes | varchar2 | data type=string; lov=STATIC
Valid values: varchar2 clob boolean
Applies whentype = item

 | standardAttributes | array of enums | No | | data type=string; lov=STATIC
Valid values: visibleWidget standardFormElement sessionStateChangeable readOnlyAttr escapeSpecialCharsAttr quickPickAttrs sourceAttrs formatMaskDateOnly formatMaskNumberOnly elementAttrs widthAttrs heightAttr elementOptionAttr placeholderAttr iconAttr encryptSessionStateAttr listOfValues lovDisplayNullAttrs cascadingLovAttrs joinLovforColumnDisplay filter link initJavascriptCodeAttr facetGatherOccurrences facetShowSelectedFirst facetMaxDisplayedEntries facetClientSideFiltering facetLovDisplayNullValue aiEnabled configurableAiEnabled configurableAiSystemPrompt requiresAiChatWidget alwaysMultipleValues optionalMultipleValues
Applies whentype = item

 | standardAttributes | array of enums | No | | data type=string; lov=STATIC
Valid values: rowSelection regionTemplateAttr
Applies whentype = templateComponent

 | standardAttributes | array of enums | No | | data type=string; lov=STATIC
Valid values: regionSourceSupportsDifferentDataSources regionSourceIsSqlQuery regionSourceIsPlsqlCode regionSourceIsPlsqlFunctionBody regionSourceIsHtml regionSourceIsPlainText pageItemsToSubmitAttr orderByAttr noOfFetchedRowsAttr noDataFoundMessageAttr escapeSpecialCharsRegionAttr initJavascriptCodeAttr regionColumns headingColumnAttr headingAlignmentColumnAttr alignmentColumnAttr cssClassColumnAttr customAttrsColumnAttr escapeSpecialCharsColumnAttr supportsFacetedSearchSmartFilters lazyLoading lazyLoadingAlways isEditable aiEnabled configurableAiEnabled configurableAiSystemPrompt requiresAiChatWidget
Applies whentype = region

 | standardAttributes | array of enums | No | | data type=string; lov=STATIC
Valid values: forItem forButton forRegion forJquerySelector forJavaScriptExpression forTriggeringElement forEventSource affectedElementRequired defaultFireOnInitialization stopExecutionOnErrorAttr waitForResultAttr initJavascriptCodeAttr aiEnabled configurableAiEnabled configurableAiSystemPrompt requiresAiChatWidget
Applies whentype = dynamicAction

 | standardAttributes | array of enums | No | | data type=string; lov=STATIC
Valid values: sessionNotValidAttr hasLoginPage
Applies whentype = authenticationScheme

 | standardAttributes | array of enums | No | | data type=string; lov=STATIC
Valid values: defaultEndpoint doNotTestEndpoint
Applies whentype = restDataSource

 | standardAttributes | array of enums | No | | data type=string; lov=STATIC
Valid values: region regionRequired waitForCompletion form aiEnabled configurableAiEnabled configurableAiSystemPrompt
Applies whentype = process

Copy
component {
 supports: [
 pageItems
 interactiveGridColumns
 ]
 supportsSessionStateDataTypes: [
 varchar2
 clob
 ]
 standardAttributes: [
 visibleWidget
 standardFormElement
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype in (region)type in (dynamicAction)type in (process)type in (authorizationScheme)type in (authenticationScheme)type in (item)type in (restDataSource)type in (genAITool)

 | sampleData | enum | No | | data type=string; lov=STATIC
Valid values: employees tasks products projects
Applies whentype in (region)type in (templateComponent)

Copy
source {
 plsqlCode: ```plsql
 value
 ```
 sampleData: employees
}

callbacks

 | Property | Type | Required | Default Value | Details

 | apiInterface | enum | Yes | procedure | data type=string; lov=STATIC
Valid values: procedure procedureWithLegacyAttributes function

 | renderProcedureName | string | No | | data type=string; maxLen=255
Applies whentype in (dynamicAction)type in (item)type in (region)type = genAITool and executionLocation = clientSide

 | metaDataProcedureName | string | No | | data type=string; maxLen=255
Applies whentype = item

 | sessionSentryProcedureName | string | No | | data type=string; maxLen=255
Applies whentype = authenticationScheme

 | invalidSessionProcedureName | string | No | | data type=string; maxLen=255
Applies whentype = authenticationScheme

 | authenticationProcedureName | string | No | | data type=string; maxLen=255
Applies whentype = authenticationScheme

 | postLogoutProcedureName | string | No | | data type=string; maxLen=255
Applies whentype = authenticationScheme

 | ajaxProcedureName | string | No | | data type=string; maxLen=255
Applies whentype in (authenticationScheme)type in (dynamicAction)type in (region)type in (item)

 | validationProcedureName | string | No | | data type=string; maxLen=255
Applies whentype = item

 | executionFunctionProcedureName | string | No | | data type=string; maxLen=255
Applies whentype in (authorizationScheme)type in (process)type = genAITool and executionLocation = serverSide

 | completionFunctionProcedureName | string | No | | data type=string; maxLen=255
Applies whentype = process and standardAttributes = waitForCompletion

 | terminationFunctionProcedureName | string | No | | data type=string; maxLen=255
Applies whentype = process and standardAttributes = waitForCompletion

 | restSourceCapabilitiesProcedure | string | No | | data type=string; maxLen=255
Applies whentype = restDataSource

 | restSourceFetchProcedure | string | No | | data type=string; maxLen=255
Applies whentype = restDataSource

 | restSourceDmlProcedure | string | No | | data type=string; maxLen=255
Applies whentype = restDataSource

 | restSourceExecuteProcedure | string | No | | data type=string; maxLen=255
Applies whentype = restDataSource

 | aiRequestHandlerProcedure | string | No | | data type=string; maxLen=255
Applies whentype = region and standardAttributes in (configurableAiEnabled)type = region and standardAttributes in (aiEnabled)type = item and standardAttributes in (configurableAiEnabled)type = item and standardAttributes in (aiEnabled)type = dynamicAction and standardAttributes in (configurableAiEnabled)type = dynamicAction and standardAttributes in (aiEnabled)

 | aiResponseHandlerProcedure | string | No | | data type=string; maxLen=255
Applies whentype = region and standardAttributes in (configurableAiEnabled)type = region and standardAttributes in (aiEnabled)type = item and standardAttributes in (configurableAiEnabled)type = item and standardAttributes in (aiEnabled)type = dynamicAction and standardAttributes in (configurableAiEnabled)type = dynamicAction and standardAttributes in (aiEnabled)

 | restSourceDiscoverProcedure | string | No | | data type=string; maxLen=255
Applies whentype = restDataSource

Copy
callbacks {
 apiInterface: procedure
 renderProcedureName: value
 metaDataProcedureName: value
 sessionSentryProcedureName: value
 invalidSessionProcedureName: value
 authenticationProcedureName: value
 postLogoutProcedureName: value
 ajaxProcedureName: value
 validationProcedureName: value
 executionFunctionProcedureName: value
 completionFunctionProcedureName: value
 terminationFunctionProcedureName: value
 restSourceCapabilitiesProcedure: value
 restSourceFetchProcedure: value
 restSourceDmlProcedure: value
 restSourceExecuteProcedure: value
 aiRequestHandlerProcedure: value
 aiResponseHandlerProcedure: value
 restSourceDiscoverProcedure: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | filePrefix | string | No | | data type=string; maxLen=255
Applies whentype in (region)type in (dynamicAction)type in (item)type in (templateComponent)type = genAITool and executionLocation = clientSide

 | category | enum | No | | data type=string; lov=STATIC
Valid values: component effect execute initialize miscellaneous navigation notification style builtInComponents appComponents themeComponents ai
Applies whentype = dynamicAction

 | quickPick | boolean | Yes | false | data type=boolean
Applies whentype = templateComponent

 | substituteAttributeValues | boolean | Yes | false | data type=boolean
Applies whenapiInterface in (function)apiInterface in (procedureWithLegacyAttributes)

 | deprecated | boolean | Yes | false | data type=boolean

 | legacy | boolean | Yes | false | data type=boolean

Copy
advanced {
 filePrefix: value
 category: component
 quickPick: false
 substituteAttributeValues: false
 deprecated: false
 legacy: false
}

css

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000
Applies whentype in (region)type in (dynamicAction)type in (item)type in (templateComponent)type = genAITool and executionLocation = clientSide

Copy
css {
 fileUrls: [
 value
 value
 ]
}

javaScript

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000
Applies whentype in (region)type in (dynamicAction)type in (item)type in (templateComponent)type = genAITool and executionLocation = clientSide

Copy
javaScript {
 fileUrls: [
 value
 value
 ]
}

information

 | Property | Type | Required | Default Value | Details

 | version | string | No | | data type=string; maxLen=30

 | aboutUrl | string | No | | data type=string; maxLen=255

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
information {
 version: value
 aboutUrl: value
 helpText: ```
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=plugin

 | subscribeComponentSettings | boolean | Yes | true | data type=boolean
Applies whenmaster is set

Copy
subscription {
 master: @component
 subscribeComponentSettings: false
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
plugin sample (
 name: value
 apexlangName: value
 staticId: value
 type: templateComponent
 theme: @component
 templateComponent {
 availableAs: [
 partial
 report
 ]
 partial: ```html
 value
 ```
 reportBody: ```html
 value
 ```
 reportGroup: ```html
 value
 ```
 reportRow: ```html
 value
 ```
 reportContainer: ```html
 value
 ```
 translateTemplates: false
 defaultEscapeMode: html
 numberOfLazyLoadingSkeletons: 42
 }
 defaultSlots {
 regions: value
 items: value
 buttons: value
 }
 aiTool {
 executionLocation: clientSide
 supportedExecutionPoints: [
 augmentSystemPrompt
 onDemand
 ]
 }
 onDemand {
 description: ```
 value
 ```
 parameters: noParameters
 parametersJsonSchema: ```json
 value
 ```
 }
 component {
 supports: [
 pageItems
 interactiveGridColumns
 ]
 supportsSessionStateDataTypes: [
 varchar2
 clob
 ]
 standardAttributes: [
 visibleWidget
 standardFormElement
 ]
 }
 source {
 plsqlCode: ```plsql
 value
 ```
 sampleData: employees
 }
 callbacks {
 apiInterface: procedure
 renderProcedureName: value
 metaDataProcedureName: value
 sessionSentryProcedureName: value
 invalidSessionProcedureName: value
 authenticationProcedureName: value
 postLogoutProcedureName: value
 ajaxProcedureName: value
 validationProcedureName: value
 executionFunctionProcedureName: value
 completionFunctionProcedureName: value
 terminationFunctionProcedureName: value
 restSourceCapabilitiesProcedure: value
 restSourceFetchProcedure: value
 restSourceDmlProcedure: value
 restSourceExecuteProcedure: value
 aiRequestHandlerProcedure: value
 aiResponseHandlerProcedure: value
 restSourceDiscoverProcedure: value
 }
 advanced {
 filePrefix: value
 category: component
 quickPick: false
 substituteAttributeValues: false
 deprecated: false
 legacy: false
 }
 css {
 fileUrls: [
 value
 value
 ]
 }
 javaScript {
 fileUrls: [
 value
 value
 ]
 }
 information {
 version: value
 aboutUrl: value
 helpText: ```
 value
 ```
 }
 subscription {
 master: @component
 subscribeComponentSettings: false
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

pwaScreenshot - APEXlang Reference

pwaScreenshot

Parent: app

Property Groups:
label
layout
screenshot
advanced
config
comments

label

 | Property | Type | Required | Default Value | Details

 | label | string | Yes | | data type=string; maxLen=255

Copy
label {
 label: value
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

screenshot

 | Property | Type | Required | Default Value | Details

 | url | string | Yes | | data type=string; maxLen=32767

 | sizes | string | No | | data type=string; maxLen=32767

 | formFactor | enum | No | | data type=string; lov=STATIC
Valid values: narrow wide

Copy
screenshot {
 url: value
 sizes: value
 formFactor: narrow
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
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
pwaScreenshot sample (
 label {
 label: value
 }
 layout {
 sequence: 42
 }
 screenshot {
 url: value
 sizes: value
 formFactor: narrow
 }
 advanced {
 staticId: value
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

pwaShortcut - APEXlang Reference

pwaShortcut

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | sequence | integer | Yes | | data type=integer; maxLen=32767

Property Groups:
shortcut
advanced
config
comments

shortcut

 | Property | Type | Required | Default Value | Details

 | target | complex | Yes | | data type=complex; maxLen=32767

 | iconUrl | string | No | | data type=string; maxLen=32767

 | description | multiline string | No | | data type=multiline string; maxLen=4000

Copy
shortcut {
 target: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 iconUrl: value
 description: ```
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
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
pwaShortcut sample (
 name: value
 sequence: 42
 shortcut {
 target: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 iconUrl: value
 description: ```
 value
 ```
 }
 advanced {
 staticId: value
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

reportLayout - APEXlang Reference

reportLayout

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=4000

 | type | enum | Yes | rtf | data type=string; lov=STATIC
Valid values: xslGeneric rtf xsl docx xlsx pptx html markdown csv txt odt ods odp

Property Groups:
file
dataLoop
templates
advanced
subscription
comments

file

 | Property | Type | Required | Default Value | Details

 | fileName | string | Yes | | data type=string; maxLen=255

 | mimeType | string | Yes | | data type=string; maxLen=255

 | content | blob | Yes | | data type=blob; maxLen=32767

Copy
file {
 fileName: value
 mimeType: value
 content: value
}

dataLoop

 | Property | Type | Required | Default Value | Details

 | name | string | No | | data type=string; maxLen=255

Copy
dataLoop {
 name: value
}

templates

 | Property | Type | Required | Default Value | Details

 | page | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype in (rtf)type in (xsl)type in (xslGeneric)

 | columnHeading | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = xslGeneric

 | column | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = xslGeneric

 | columnWidth | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = xslGeneric

Copy
templates {
 page: ```
 value
 ```
 columnHeading: ```
 value
 ```
 column: ```
 value
 ```
 columnWidth: ```
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=500

Copy
advanced {
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=reportLayout

Copy
subscription {
 master: @component
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
reportLayout sample (
 name: value
 type: xslGeneric
 file {
 fileName: value
 mimeType: value
 content: value
 }
 dataLoop {
 name: value
 }
 templates {
 page: ```
 value
 ```
 columnHeading: ```
 value
 ```
 column: ```
 value
 ```
 columnWidth: ```
 value
 ```
 }
 advanced {
 staticId: value
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

reportQuery - APEXlang Reference

reportQuery

Parent: app

Children: sourceQuery

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
output
sessionState
advanced

output

 | Property | Type | Required | Default Value | Details

 | fileName | string | Yes | | data type=string; maxLen=4000

 | format | enum | Yes | pdf | data type=string; lov=STATIC
Valid values: pdf word excel html xml
Applies whentype = useInstanceSettingsremotePrintServer does not support AOP_SERVER

 | format | enum | Yes | pdf | data type=string; lov=STATIC
Valid values: pdf word excel html powerpoint markdown csv openDocumentText openDocumentSpreadsheet openDocumentPresentation
Applies whenremotePrintServer supports AOP_SERVER

 | formatItem | string | No | | data type=string; maxLen=255; textCase=UPPER
Applies whentype = useInstanceSettings and remotePrintServer supports AOP_SERVERremotePrintServer does not support AOP_SERVER and remotePrintServer supports AOP_SERVER

 | layout | reference | No | | data type=reference; lov=COMPONENT; references=reportLayout

 | viewFileAs | enum | Yes | attachment | data type=string; lov=STATIC
Valid values: attachment inline

Copy
output {
 fileName: value
 format: pdf
 formatItem: value
 layout: @component
 viewFileAs: attachment
}

sessionState

 | Property | Type | Required | Default Value | Details

 | include | boolean | Yes | false | data type=boolean

 | items | array of strings | No | | data type=string; maxLen=2000; textCase=UPPER
Applies wheninclude = true

Copy
sessionState {
 include: false
 items: [
 value
 value
 ]
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

APEXlang Example

Copy
reportQuery sample (
 name: value
 output {
 fileName: value
 format: pdf
 formatItem: value
 layout: @component
 viewFileAs: attachment
 }
 sessionState {
 include: false
 items: [
 value
 value
 ]
 }
 advanced {
 staticId: value
 }
)

---

restDataSource - APEXlang Reference

restDataSource

Parent: app

Plug-in Variants: httptype = http, ocitype = oci, odataRestServicetype = odataRestService, oracleCloudAppsBosstype = oracleCloudAppsBoss, oracleCloudAppsSaastype = oracleCloudAppsSaas, ordstype = ords, restEnabledSqlQuerytype = restEnabledSqlQuery

Children: dataProfileColumn, operation, parameter, synchronizationSteplocalTableName is set

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
dataProfile
source
advanced
authentication
synchronization
synchronizationRateLimit
invocationScope
restSourceCatalog
subscription
comments

dataProfile

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | format | enum | Yes | json | data type=string; lov=STATIC
Valid values: csv json xml

 | rowSelector | string | No | | data type=string; maxLen=255
Applies whenformat in (json)format in (xml)

 | containsSingleRow | boolean | Yes | false | data type=boolean
Applies whenformat in (json)format in (xml)

 | singleRowSelector | string | No | | data type=string; maxLen=255
Applies whenformat in (json) and containsSingleRow = falseformat in (xml) and containsSingleRow = false

 | useRawSelectors | boolean | Yes | false | data type=boolean
Applies whenformat = json

 | comments | multiline string | No | | data type=multiline string; maxLen=4000

Copy
dataProfile {
 name: value
 format: csv
 rowSelector: value
 containsSingleRow: false
 singleRowSelector: value
 useRawSelectors: false
 comments: ```
 value
 ```
}

source

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: http oci odataRestService oracleCloudAppsBoss oracleCloudAppsSaas ords restEnabledSqlQuery

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restDataSourceServer

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whentype = restEnabledSqlQuery

 | urlPathPrefix | string | Yes | | data type=string; maxLen=500

Copy
source {
 type: http
 remoteServer: @component
 urlPathPrefix: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | encoding | enum | No | | data type=string; lov=STATIC
Valid values: iso-8859-6 windows-1256 big5 gbk iso-8859-5 koi8-r koi8-u windows-1251 iso-8859-2 windows-1250 iso-8859-7 windows-1253 iso-8859-8-i windows-1255 euc-jp shift-jis euc-kr iso-8859-4 windows-1257 iso-8859-3 tis-620 iso-8859-9 windows-1254 us-ascii utf-16be utf-16le utf-8 windows-1258 iso-8859-1 windows-1252

 | numericChars | string | No | | data type=string; maxLen=2

 | xmlNamespaces | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenformat = xml

 | csvSeparator | string | No | | data type=string; maxLen=5
Applies whenformat = csv

 | csvEnclosedBy | string | No | | data type=string; maxLen=1
Applies whenformat = csv

 | skipRows | number | No | | data type=number; maxLen=5
Applies whenformat = csv

 | firstLineContainsHeaders | boolean | Yes | true | data type=boolean
Applies whenformat = csv

 | staticId | string | Yes | | data type=string; maxLen=255

 | passEcid | string | No | | data type=string; maxLen=32767

 | httpTransferTimeout | integer | No | | data type=integer; maxLen=32767

 | openapiUrl | string | No | | data type=string; maxLen=4000

Copy
advanced {
 encoding: iso-8859-6
 numericChars: value
 xmlNamespaces: ```
 value
 ```
 csvSeparator: value
 csvEnclosedBy: value
 skipRows: 42
 firstLineContainsHeaders: false
 staticId: value
 passEcid: value
 httpTransferTimeout: 42
 openapiUrl: value
}

authentication

 | Property | Type | Required | Default Value | Details

 | credentials | reference | No | | data type=reference; lov=COMPONENT; references=webCredential

 | server | reference | No | | data type=reference; lov=COMPONENT; references=authenticationServer
Applies whencredentials is set

 | urlPathPrefix | string | No | | data type=string; maxLen=500
Applies whencredentials is set and server is set

Copy
authentication {
 credentials: @component
 server: @component
 urlPathPrefix: value
}

synchronization

 | Property | Type | Required | Default Value | Details

 | jobIsActive | boolean | Yes | false | data type=boolean

 | localTableOwner | string | No | | data type=string; maxLen=32767

 | localTableName | string | No | | data type=string; maxLen=128

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whenlocalTableName is set

 | type | enum | Yes | append | data type=string; lov=STATIC
Valid values: append merge fullRefreshDelete fullRefreshTruncate
Applies whenlocalTableName is set

 | schedule | multiline string | No | | data type=multiline string; maxLen=255
Applies whenlocalTableName is set

 | commitInterval | integer | No | | data type=integer; maxLen=32767
Applies whenlocalTableName is set

 | httpRequestLimit | integer | No | | data type=integer; maxLen=32767
Applies whenlocalTableName is set

Copy
synchronization {
 jobIsActive: false
 localTableOwner: value
 localTableName: value
 nestedRows: @component
 type: append
 schedule: ```
 value
 ```
 commitInterval: 42
 httpRequestLimit: 42
}

synchronizationRateLimit

 | Property | Type | Required | Default Value | Details

 | timeframe | integer | No | | data type=integer; maxLen=32767
Applies whenlocalTableName is set

 | httpRequests | integer | Yes | | data type=integer; maxLen=32767
Applies whenlocalTableName is set and timeframe is set

 | whenExceeded | enum | Yes | raiseError | data type=string; lov=STATIC
Valid values: raiseError wait
Applies whenlocalTableName is set and timeframe is set

Copy
synchronizationRateLimit {
 timeframe: 42
 httpRequests: 42
 whenExceeded: raiseError
}

invocationScope

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: staticValue item sqlQuery expression functionBody
Applies whencredentials is set

 | text | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whencredentials is set and type = staticValue

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whencredentials is set and type = staticValue

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whencredentials is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whencredentials is set and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whencredentials is set and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whencredentials is set and type = functionBody and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whencredentials is set and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whencredentials is set and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whencredentials is set and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whencredentials is set and type = expression and language = javaScript-mle

Copy
invocationScope {
 type: staticValue
 text: ```
 value
 ```
 item: value
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sqlExpression: ```sql
 value
 ```
 plsqlExpression: ```plsql
 value
 ```
 javaScriptExpression: ```javascript-mle
 value
 ```
}

restSourceCatalog

 | Property | Type | Required | Default Value | Details

 | name | string | No | | data type=string; maxLen=32767

 | service | string | No | | data type=string; maxLen=32767

 | version | string | No | | data type=string; maxLen=32767

Copy
restSourceCatalog {
 name: value
 service: value
 version: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=restDataSource

Copy
subscription {
 master: @component
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
restDataSource sample (
 name: value
 dataProfile {
 name: value
 format: csv
 rowSelector: value
 containsSingleRow: false
 singleRowSelector: value
 useRawSelectors: false
 comments: ```
 value
 ```
 }
 source {
 type: http
 remoteServer: @component
 urlPathPrefix: value
 }
 advanced {
 encoding: iso-8859-6
 numericChars: value
 xmlNamespaces: ```
 value
 ```
 csvSeparator: value
 csvEnclosedBy: value
 skipRows: 42
 firstLineContainsHeaders: false
 staticId: value
 passEcid: value
 httpTransferTimeout: 42
 openapiUrl: value
 }
 authentication {
 credentials: @component
 server: @component
 urlPathPrefix: value
 }
 synchronization {
 jobIsActive: false
 localTableOwner: value
 localTableName: value
 nestedRows: @component
 type: append
 schedule: ```
 value
 ```
 commitInterval: 42
 httpRequestLimit: 42
 }
 synchronizationRateLimit {
 timeframe: 42
 httpRequests: 42
 whenExceeded: raiseError
 }
 invocationScope {
 type: staticValue
 text: ```
 value
 ```
 item: value
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sqlExpression: ```sql
 value
 ```
 plsqlExpression: ```plsql
 value
 ```
 javaScriptExpression: ```javascript-mle
 value
 ```
 }
 restSourceCatalog {
 name: value
 service: value
 version: value
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

role - APEXlang Reference

role

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
description
advanced
subscription

description

 | Property | Type | Required | Default Value | Details

 | description | multiline string | No | | data type=multiline string; maxLen=4000

Copy
description {
 description: ```
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=role

Copy
subscription {
 master: @component
}

APEXlang Example

Copy
role sample (
 name: value
 description {
 description: ```
 value
 ```
 }
 advanced {
 staticId: value
 }
 subscription {
 master: @component
 }
)

---

searchConfig - APEXlang Reference

searchConfig

Parent: app

Children: parametertype = simple and location = restSource and restSource is set

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | searchQueryPrefix | string | No | | data type=string; maxLen=255

 | type | enum | Yes | simple | data type=string; lov=STATIC
Valid values: simple vector text ubiquitous apexList

Property Groups:
source
dataProfile
externalFilter
localPostProcessing
rowSearch
vectorAttributes
orderBy
columnMapping
link
iconAndBadge
columnFormatting
appearance
performance
messages
advanced
serverSideCondition
security
config
subscription
comments

source

 | Property | Type | Required | Default Value | Details

 | list | reference | Yes | | data type=reference; lov=COMPONENT; references=list
Applies whentype = apexList

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql restSource jsonDualityView jsonSource sampleData
Applies whentype = simple

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whentype = simple and location = restEnabledSql

 | sampleData | enum | Yes | | data type=string; lov=STATIC
Valid values: employees tasks products projects
Applies whentype = simple and location = sampleData

 | type | enum | Yes | tableView | data type=string; lov=STATIC
Valid values: tableView sqlQuery functionBody propertyGraph
Applies whentype = simple and location in (localDatabase)type = simple and location in (restEnabledSql)

 | tableOwner | string | No | | data type=string; maxLen=32767
Applies whentype = simple and location in (localDatabase) and type = tableViewtype = simple and location in (restEnabledSql) and type = tableView

 | tableName | string | Yes | | data type=string; maxLen=128
Applies whentype = simple and location in (localDatabase) and type = tableViewtype = simple and location in (restEnabledSql) and type = tableView

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = simple and location in (localDatabase) and type = tableViewtype = simple and location in (restEnabledSql) and type = tableView

 | graphOwner | string | No | | data type=string; maxLen=32767
Applies whentype = simple and location in (localDatabase) and type = propertyGraphtype = simple and location in (restEnabledSql) and type = propertyGraph

 | graphName | string | Yes | | data type=string; maxLen=32767
Applies whentype = simple and location in (localDatabase) and type = propertyGraphtype = simple and location in (restEnabledSql) and type = propertyGraph

 | matchClause | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = simple and location in (localDatabase) and type = propertyGraphtype = simple and location in (restEnabledSql) and type = propertyGraph

 | columnsClause | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = simple and location in (localDatabase) and type = propertyGraphtype = simple and location in (restEnabledSql) and type = propertyGraph

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = simple and location in (localDatabase) and type = propertyGraphtype = simple and location in (restEnabledSql) and type = propertyGraph

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = simple and location in (localDatabase) and type = sqlQuerytype = simple and location in (restEnabledSql) and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = simple and location in (localDatabase) and type = functionBodytype = simple and location in (restEnabledSql) and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = simple and location in (localDatabase) and type = functionBody and language = plsqltype = simple and location in (restEnabledSql) and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = simple and location in (localDatabase) and type = functionBody and language = javaScript-mletype = simple and location in (restEnabledSql) and type = functionBody and language = javaScript-mle

 | restSource | reference | Yes | | data type=reference; lov=COMPONENT; references=restDataSource
Applies whentype = simple and location = restSource

 | tableOwner | string | No | | data type=string; maxLen=32767
Applies whentype = text and type in (text) and type = tableViewtype = text and type in (vector) and type = tableView

 | tableName | string | Yes | | data type=string; maxLen=32767
Applies whentype = text and type in (text) and type = tableViewtype = text and type in (vector) and type = tableView

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = text and type in (text) and type = tableView and tableName is settype = text and type in (vector) and type = tableView and tableName is settype = vector and type in (text) and type = tableView and tableName is settype = vector and type in (vector) and type = tableView and tableName is set

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = text and type in (text) and type = sqlQuerytype = text and type in (vector) and type = sqlQuery

 | oracleTextIndexColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = text

 | searchIndexOwner | string | No | | data type=string; maxLen=32767
Applies whentype = ubiquitous

 | searchIndexName | string | No | | data type=string; maxLen=32767
Applies whentype = ubiquitous

 | searchSourceOwner | string | No | | data type=string; maxLen=32767
Applies whentype = ubiquitous

 | searchSourceName | string | Yes | | data type=string; maxLen=32767
Applies whentype = ubiquitous

 | jsonDualityView | reference | Yes | | data type=reference; lov=COMPONENT; references=jsonDualityView
Applies whentype = simple and location = jsonDualityView

 | jsonSource | reference | Yes | | data type=reference; lov=COMPONENT; references=jsonSource
Applies whentype = simple and location = jsonSource

 | optimizerHint | string | No | | data type=string; maxLen=255
Applies whentype = simple and location in (localDatabase)type = simple and location in (restEnabledSql)type = simple and location in (restSource)type = simple and location in (jsonDualityView)type = simple and location in (jsonSource)

 | searchableColumns | array of strings | No | | data type=string; maxLen=32767
Applies whentype = simple

 | restSourceQueryFunction | string | No | | data type=string; maxLen=32767
Applies whentype = simple and location = restSource

 | type | enum | Yes | tableView | data type=string; lov=STATIC
Valid values: tableView sqlQuery
Applies whentype in (text)type in (vector)

 | tableOwner | string | No | | data type=string; maxLen=32767
Applies whentype = vector and type in (text) and type = tableViewtype = vector and type in (vector) and type = tableView

 | tableName | string | Yes | | data type=string; maxLen=32767
Applies whentype = vector and type in (text) and type = tableViewtype = vector and type in (vector) and type = tableView

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = vector and type in (text) and type = sqlQuerytype = vector and type in (vector) and type = sqlQuery

Copy
source {
 list: @component
 location: localDatabase
 remoteServer: @component
 sampleData: employees
 type: tableView
 tableOwner: value
 tableName: value
 whereClause: ```sql
 value
 ```
 graphOwner: value
 graphName: value
 matchClause: ```
 value
 ```
 columnsClause: ```
 value
 ```
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 restSource: @component
 oracleTextIndexColumn: value
 searchIndexOwner: value
 searchIndexName: value
 searchSourceOwner: value
 searchSourceName: value
 jsonDualityView: @component
 jsonSource: @component
 optimizerHint: value
 searchableColumns: [
 value
 value
 ]
 restSourceQueryFunction: value
}

dataProfile

 | Property | Type | Required | Default Value | Details

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whentype = simple and location = restSource and restSource supports HAS_ARRAY_COLUMNS

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whentype = simple and location = jsonDualityView and jsonDualityView supports HAS_ARRAY_COLUMNS

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whentype = simple and location = jsonSource and jsonSource supports HAS_ARRAY_COLUMNS

Copy
dataProfile {
 nestedRows: @component
}

externalFilter

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean
Applies whentype = simple and location = restSource and restSource is set

 | filter | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = simple and location = restSource and restSource is set and enabled = true

Copy
externalFilter {
 enabled: false
 filter: ```
 value
 ```
}

localPostProcessing

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whentype = simple and location = restSource and restSource is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = simple and location = restSource and restSource is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = simple and location = restSource and restSource is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = simple and location = restSource and restSource is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = simple and location = restSource and restSource is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = simple and location = restSource and restSource is set and type = plsqlFunctionBody and language = javaScript-mle

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whentype = simple and location = jsonDualityView and jsonDualityView is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = simple and location = jsonDualityView and jsonDualityView is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = simple and location = jsonDualityView and jsonDualityView is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = simple and location = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = simple and location = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = simple and location = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody and language = javaScript-mle

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whentype = simple and location = jsonSource and jsonSource is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = simple and location = jsonSource and jsonSource is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = simple and location = jsonSource and jsonSource is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = simple and location = jsonSource and jsonSource is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = simple and location = jsonSource and jsonSource is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = simple and location = jsonSource and jsonSource is set and type = plsqlFunctionBody and language = javaScript-mle

Copy
localPostProcessing {
 type: whereOrderByClause
 whereClause: ```sql
 value
 ```
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
}

rowSearch

 | Property | Type | Required | Default Value | Details

 | textQueryFunction | enum | No | | data type=string; lov=STATIC
Valid values: searchEngine expertSearch custom
Applies whentype in (text)type in (ubiquitous)

 | customFunctionName | string | Yes | | data type=string; maxLen=255
Applies whentype in (text) and textQueryFunction = customtype in (text) and type in (ubiquitous) and textQueryFunction = customtype in (ubiquitous) and type in (text) and textQueryFunction = customtype in (ubiquitous) and textQueryFunction = custom

Copy
rowSearch {
 textQueryFunction: searchEngine
 customFunctionName: value
}

vectorAttributes

 | Property | Type | Required | Default Value | Details

 | provider | reference | Yes | | data type=reference; lov=COMPONENT; references=vectorProvider
Applies whentype = vector

 | columnName | string | Yes | | data type=string; maxLen=128
Applies whentype = vector

 | searchType | enum | Yes | exact | data type=string; lov=STATIC
Valid values: exact approx
Applies whentype = vector

 | distanceMetric | enum | Yes | cosine | data type=string; lov=STATIC
Valid values: cosine dot euclidean euclideanSquared hamming manhattan
Applies whentype = vector

 | targetAccuracy | integer | Yes | 85 | data type=integer; maxLen=255
Applies whentype = vector and searchType = approx

Copy
vectorAttributes {
 provider: @component
 columnName: value
 searchType: exact
 distanceMetric: cosine
 targetAccuracy: 42
}

orderBy

 | Property | Type | Required | Default Value | Details

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=4000

Copy
orderBy {
 orderByClause: ```sql
 value
 ```
}

columnMapping

 | Property | Type | Required | Default Value | Details

 | primaryKey1Column | string | Yes | | data type=string; maxLen=32767

 | primaryKey2Column | string | No | | data type=string; maxLen=32767

 | titleColumn | string | Yes | | data type=string; maxLen=32767

 | subtitleColumn | string | No | | data type=string; maxLen=32767

 | descriptionColumn | string | No | | data type=string; maxLen=32767

 | badgeColumn | string | No | | data type=string; maxLen=32767

 | mimeTypeColumn | string | No | | data type=string; maxLen=32767
Applies wheniconSource = imageBlobColumn and imageColumn is set

 | lastModifiedColumn | string | No | | data type=string; maxLen=32767

 | customColumn1 | string | No | | data type=string; maxLen=32767

 | customColumn2 | string | No | | data type=string; maxLen=32767

 | customColumn3 | string | No | | data type=string; maxLen=32767

 | scoreColumn | string | No | | data type=string; maxLen=32767

Copy
columnMapping {
 primaryKey1Column: value
 primaryKey2Column: value
 titleColumn: value
 subtitleColumn: value
 descriptionColumn: value
 badgeColumn: value
 mimeTypeColumn: value
 lastModifiedColumn: value
 customColumn1: value
 customColumn2: value
 customColumn3: value
 scoreColumn: value
}

link

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: redirectThisApp redirectOtherApp redirectUrl redirectUrlReturnedByFirstCol

 | target | complex | Yes | | data type=complex; maxLen=32767
Applies whentype = redirectThisApp

 | target | complex | Yes | | data type=complex; maxLen=32767
Applies whentype = redirectOtherApp

 | targetUrl | string | Yes | | data type=string; maxLen=4000
Applies whentype = redirectUrl

Copy
link {
 type: redirectThisApp
 target: {
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 targetUrl: value
}

iconAndBadge

 | Property | Type | Required | Default Value | Details

 | iconSource | enum | No | | data type=string; lov=STATIC
Valid values: initials iconClass iconClassColumn imageUrl imageBlobColumn

 | iconColumn | string | Yes | | data type=string; maxLen=32767
Applies wheniconSource = iconClassColumn

 | imageColumn | string | Yes | | data type=string; maxLen=32767
Applies wheniconSource = imageBlobColumn

 | imageUrl | string | Yes | | data type=string; maxLen=4000
Applies wheniconSource = imageUrl

 | iconCssClasses | string | No | | data type=string; maxLen=255
Applies wheniconSource = iconClass

Copy
iconAndBadge {
 iconSource: initials
 iconColumn: value
 imageColumn: value
 imageUrl: value
 iconCssClasses: value
}

columnFormatting

 | Property | Type | Required | Default Value | Details

 | htmlExpression | multiline string | No | | data type=multiline string; maxLen=4000

Copy
columnFormatting {
 htmlExpression: ```html
 value
 ```
}

appearance

 | Property | Type | Required | Default Value | Details

 | cssClasses | array of strings | No | | data type=string; maxLen=255

 | maxVectorDistance | integer | No | | data type=integer; maxLen=255
Applies whentype = vector

Copy
appearance {
 cssClasses: [
 value
 value
 ]
 maxVectorDistance: 42
}

performance

 | Property | Type | Required | Default Value | Details

 | maxRowsToReturn | integer | No | | data type=integer; maxLen=32767

Copy
performance {
 maxRowsToReturn: 42
}

messages

 | Property | Type | Required | Default Value | Details

 | whenNoDataFound | multiline string | No | | data type=multiline string; maxLen=4000

Copy
messages {
 whenNoDataFound: ```
 value
 ```
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
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

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
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

Copy
security {
 authorizationScheme: mustNotBePublicUser
}

config

 | Property | Type | Required | Default Value | Details

 | buildOption | reference | No | | data type=reference; lov=COMPONENT; references=buildOption

Copy
config {
 buildOption: @component
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=searchConfig

Copy
subscription {
 master: @component
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
searchConfig sample (
 name: value
 searchQueryPrefix: value
 type: simple
 source {
 list: @component
 location: localDatabase
 remoteServer: @component
 sampleData: employees
 type: tableView
 tableOwner: value
 tableName: value
 whereClause: ```sql
 value
 ```
 graphOwner: value
 graphName: value
 matchClause: ```
 value
 ```
 columnsClause: ```
 value
 ```
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 restSource: @component
 oracleTextIndexColumn: value
 searchIndexOwner: value
 searchIndexName: value
 searchSourceOwner: value
 searchSourceName: value
 jsonDualityView: @component
 jsonSource: @component
 optimizerHint: value
 searchableColumns: [
 value
 value
 ]
 restSourceQueryFunction: value
 }
 dataProfile {
 nestedRows: @component
 }
 externalFilter {
 enabled: false
 filter: ```
 value
 ```
 }
 localPostProcessing {
 type: whereOrderByClause
 whereClause: ```sql
 value
 ```
 sqlQuery: ```sql
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 }
 rowSearch {
 textQueryFunction: searchEngine
 customFunctionName: value
 }
 vectorAttributes {
 provider: @component
 columnName: value
 searchType: exact
 distanceMetric: cosine
 targetAccuracy: 42
 }
 orderBy {
 orderByClause: ```sql
 value
 ```
 }
 columnMapping {
 primaryKey1Column: value
 primaryKey2Column: value
 titleColumn: value
 subtitleColumn: value
 descriptionColumn: value
 badgeColumn: value
 mimeTypeColumn: value
 lastModifiedColumn: value
 customColumn1: value
 customColumn2: value
 customColumn3: value
 scoreColumn: value
 }
 link {
 type: redirectThisApp
 target: {
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 targetUrl: value
 }
 iconAndBadge {
 iconSource: initials
 iconColumn: value
 imageColumn: value
 imageUrl: value
 iconCssClasses: value
 }
 columnFormatting {
 htmlExpression: ```html
 value
 ```
 }
 appearance {
 cssClasses: [
 value
 value
 ]
 maxVectorDistance: 42
 }
 performance {
 maxRowsToReturn: 42
 }
 messages {
 whenNoDataFound: ```
 value
 ```
 }
 advanced {
 staticId: value
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 }
 config {
 buildOption: @component
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

shortcut - APEXlang Reference

shortcut

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Property Groups:
source
error
config
subscription
comments

source

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | htmlText | data type=string; lov=STATIC
Valid values: functionBody htmlText htmlEscapeSpecialChars image jsEscapeSingleQuotes message jsMessageEscapeSingleQuotes

 | htmlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype in (htmlText)type in (htmlEscapeSpecialChars)

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = functionBody and language = javaScript-mle

 | text | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = jsEscapeSingleQuotes

 | messageName | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype in (message)type in (jsMessageEscapeSingleQuotes)

 | imageUrl | string | Yes | | data type=string; maxLen=255
Applies whentype = image

Copy
source {
 type: functionBody
 htmlCode: ```html
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 text: ```
 value
 ```
 messageName: value
 imageUrl: value
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Copy
error {
 errorMessage: ```
 value
 ```
}

config

 | Property | Type | Required | Default Value | Details

 | buildOption | reference | No | | data type=reference; lov=COMPONENT; references=buildOption

Copy
config {
 buildOption: @component
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=shortcut

Copy
subscription {
 master: @component
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
shortcut sample (
 staticId: value
 source {
 type: functionBody
 htmlCode: ```html
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 text: ```
 value
 ```
 messageName: value
 imageUrl: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 config {
 buildOption: @component
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

substitution - APEXlang Reference

substitution

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255; textCase=UPPER

Property Groups:
value

value

 | Property | Type | Required | Default Value | Details

 | staticValue | multiline string | No | | data type=multiline string; maxLen=4000

Copy
value {
 staticValue: ```
 value
 ```
}

APEXlang Example

Copy
substitution sample (
 name: value
 value {
 staticValue: ```
 value
 ```
 }
)

---

supportingObject - APEXlang Reference

supportingObject

Parent: app

Children: buildOption, installScript, substitution, upgradeScript, validation

Property Groups:
prerequisites
installation
installationMessages
upgrade
upgradeMessages
deinstall
deinstallationMessages
messages
advanced

prerequisites

 | Property | Type | Required | Default Value | Details

 | freeSpace | integer | No | | data type=integer; maxLen=32767

 | systemPrivileges | array of enums | No | | data type=string; lov=STATIC
Valid values: createDatabaseLink createMaterializedView createProcedure createSequence createSynonym createTable createTrigger createType createView

Copy
prerequisites {
 freeSpace: 42
 systemPrivileges: [
 createDatabaseLink
 createMaterializedView
 ]
}

installation

 | Property | Type | Required | Default Value | Details

 | objectNames | array of multiline strings | No | | data type=multiline string; maxLen=32767

Copy
installation {
 objectNames: [
 value
 value
 ]
}

installationMessages

 | Property | Type | Required | Default Value | Details

 | welcome | multiline string | No | | data type=multiline string; maxLen=4000

 | confirmation | multiline string | No | | data type=multiline string; maxLen=4000

 | installSuccess | multiline string | No | | data type=multiline string; maxLen=4000

 | installFailure | multiline string | No | | data type=multiline string; maxLen=4000

Copy
installationMessages {
 welcome: ```
 value
 ```
 confirmation: ```
 value
 ```
 installSuccess: ```
 value
 ```
 installFailure: ```
 value
 ```
}

upgrade

 | Property | Type | Required | Default Value | Details

 | upgradeWhenSqlQuery | multiline string | No | | data type=multiline string; maxLen=32767

Copy
upgrade {
 upgradeWhenSqlQuery: ```sql
 value
 ```
}

upgradeMessages

 | Property | Type | Required | Default Value | Details

 | welcome | multiline string | No | | data type=multiline string; maxLen=4000

 | confirmation | multiline string | No | | data type=multiline string; maxLen=4000

 | success | multiline string | No | | data type=multiline string; maxLen=4000

 | failure | multiline string | No | | data type=multiline string; maxLen=4000

Copy
upgradeMessages {
 welcome: ```
 value
 ```
 confirmation: ```
 value
 ```
 success: ```
 value
 ```
 failure: ```
 value
 ```
}

deinstall

 | Property | Type | Required | Default Value | Details

 | script | multiline string | No | | data type=multiline string; maxLen=32767

Copy
deinstall {
 script: ```
 value
 ```
}

deinstallationMessages

 | Property | Type | Required | Default Value | Details

 | confirmation | multiline string | No | | data type=multiline string; maxLen=4000

 | postDeinstall | multiline string | No | | data type=multiline string; maxLen=4000

Copy
deinstallationMessages {
 confirmation: ```
 value
 ```
 postDeinstall: ```
 value
 ```
}

messages

 | Property | Type | Required | Default Value | Details

 | license | multiline string | No | | data type=multiline string; maxLen=4000

 | validations | multiline string | No | | data type=multiline string; maxLen=4000

 | appSubstitutions | multiline string | No | | data type=multiline string; maxLen=4000

 | buildOptions | multiline string | No | | data type=multiline string; maxLen=4000

Copy
messages {
 license: ```
 value
 ```
 validations: ```
 value
 ```
 appSubstitutions: ```
 value
 ```
 buildOptions: ```
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | includeInAppExport | enum | No | | data type=string; lov=STATIC
Valid values: true false autoInstall

Copy
advanced {
 includeInAppExport: true
}

APEXlang Example

Copy
supportingObject sample (
 prerequisites {
 freeSpace: 42
 systemPrivileges: [
 createDatabaseLink
 createMaterializedView
 ]
 }
 installation {
 objectNames: [
 value
 value
 ]
 }
 installationMessages {
 welcome: ```
 value
 ```
 confirmation: ```
 value
 ```
 installSuccess: ```
 value
 ```
 installFailure: ```
 value
 ```
 }
 upgrade {
 upgradeWhenSqlQuery: ```sql
 value
 ```
 }
 upgradeMessages {
 welcome: ```
 value
 ```
 confirmation: ```
 value
 ```
 success: ```
 value
 ```
 failure: ```
 value
 ```
 }
 deinstall {
 script: ```
 value
 ```
 }
 deinstallationMessages {
 confirmation: ```
 value
 ```
 postDeinstall: ```
 value
 ```
 }
 messages {
 license: ```
 value
 ```
 validations: ```
 value
 ```
 appSubstitutions: ```
 value
 ```
 buildOptions: ```
 value
 ```
 }
 advanced {
 includeInAppExport: true
 }
)

---

taskDefinition - APEXlang Reference

taskDefinition

Parent: app

Children: action, parameter, participant

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: approval action

Property Groups:
task
deadline
source
columnMapping
advanced
comments

task

 | Property | Type | Required | Default Value | Details

 | subject | string | Yes | | data type=string; maxLen=400

 | priority | enum | Yes | 3 | data type=string; lov=STATIC
Valid values: 1 2 3 4 5

 | initiatorCanComplete | boolean | Yes | false | data type=boolean
Applies whentype = approval

Copy
task {
 subject: value
 priority: "1"
 initiatorCanComplete: false
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

 | expirationPolicy | enum | Yes | none | data type=string; lov=STATIC
Valid values: none expire renew
Applies whendueOnType is set

 | maxRenewalCount | number | Yes | | data type=number; maxLen=22
Applies whendueOnType is set and expirationPolicy = renew

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
 expirationPolicy: none
 maxRenewalCount: 42
}

source

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | none | data type=string; lov=STATIC
Valid values: none tableView sqlQuery

 | tableOwner | string | No | | data type=string; maxLen=32767
Applies whentype = tableView

 | tableName | string | Yes | | data type=string; maxLen=128
Applies whentype = tableView

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = sqlQuery

Copy
source {
 type: none
 tableOwner: value
 tableName: value
 sqlQuery: ```sql
 value
 ```
}

columnMapping

 | Property | Type | Required | Default Value | Details

 | primaryKeyColumn | string | No | | data type=string; maxLen=32767
Applies whentype = tableView

Copy
columnMapping {
 primaryKeyColumn: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | vacationRuleProcedureName | string | No | | data type=string; maxLen=500

 | detailsPage | complex | No | | data type=complex; maxLen=32767

Copy
advanced {
 staticId: value
 vacationRuleProcedureName: value
 detailsPage: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
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
taskDefinition sample (
 name: value
 type: approval
 task {
 subject: value
 priority: "1"
 initiatorCanComplete: false
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
 expirationPolicy: none
 maxRenewalCount: 42
 }
 source {
 type: none
 tableOwner: value
 tableName: value
 sqlQuery: ```sql
 value
 ```
 }
 columnMapping {
 primaryKeyColumn: value
 }
 advanced {
 staticId: value
 vacationRuleProcedureName: value
 detailsPage: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

textMessage - APEXlang Reference

textMessage

Parent: app

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Property Groups:
message
advanced
subscription
comments

message

 | Property | Type | Required | Default Value | Details

 | text | multiline string | Yes | | data type=multiline string; maxLen=4000

 | language | enum | Yes | | data type=string; lov=STATIC
Valid values: af sq ar-dz ar-bh ar-eg ar-iq ar-jo ar-kw ar-lb ar-ly ar-ma ar-om ar-qa ar-sa ar-sy ar-tn ar-ae ar-ye ar hy as az eu be bn ba bg km ca zh-cn zh-hk zh-mo zh-sg zh-tw zh hr cs da nl-be nl en-au en-bz en-ca en-ie en-jm en-nz en-ph en-za en-tt en-gb en-us en-zw en et mk fo fa fi fr-be fr-ca fr fr-lu fr-mc fr-ch gd gl de-at de de-li de-lu de-ch el gu he hi hu is id ga it it-ch ja kn kk kok ko kz lv lt ms ml mt mr me ne nb-no no nn-no or pl pt-br pt pa ro ru-md ru sr-cyrl sr-latn sr sk sl es-ar es-bo es-cl es-co es-cr es-do es-ec es-sv es-gt es-hn es-mx es-ni es-pa es-py es-pe es-pr es es-us es-uy es-ve sw sv-fi sv ta te th tr uk ur uz vi cy

 | usedInJavaScript | boolean | Yes | false | data type=boolean

Copy
message {
 text: ```
 value
 ```
 language: af
 usedInJavaScript: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | metadata | multiline string | No | | data type=multiline string; maxLen=32767

Copy
advanced {
 metadata: ```
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=textMessage

Copy
subscription {
 master: @component
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
textMessage sample (
 staticId: value
 message {
 text: ```
 value
 ```
 language: af
 usedInJavaScript: false
 }
 advanced {
 metadata: ```
 value
 ```
 }
 subscription {
 master: @component
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

theme - APEXlang Reference

theme

Parent: app

Children: breadcrumbTemplate, buttonTemplate, classicReportTemplate, fieldTemplate, file, globalTemplateOption, listTemplate, pageTemplate, popupLovTemplate, regionTemplate, style, templateOptionGroup

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | themeNumber | integer | No | | data type=integer; maxLen=10

 | baseTheme | enum | No | | data type=string; lov=STATIC
Valid values: ut-24.2 ut-26.1

 | version | string | No | | data type=string; maxLen=30
Applies whenmaster is set

Property Groups:
style
javaScript
css
navigation
componentDefaults
regionDefaults
dialogDefaults
icons
description
advanced
subscription

style

 | Property | Type | Required | Default Value | Details

 | currentThemeStyle | reference | No | | data type=reference; lov=COMPONENT; references=style

Copy
style {
 currentThemeStyle: @component
}

javaScript

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

Copy
javaScript {
 fileUrls: [
 value
 value
 ]
}

css

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

Copy
css {
 fileUrls: [
 value
 value
 ]
}

navigation

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | list | data type=string; lov=STATIC
Valid values: tabs list

 | navigationBarType | enum | Yes | list | data type=string; lov=STATIC
Valid values: classic list

Copy
navigation {
 type: tabs
 navigationBarType: classic
}

componentDefaults

 | Property | Type | Required | Default Value | Details

 | page | reference | No | | data type=reference; lov=COMPONENT; references=pageTemplate

 | navigationBarList | reference | No | | data type=reference; lov=COMPONENT; references=listTemplate

 | navigationMenuListPosition | enum | Yes | top | data type=string; lov=STATIC
Valid values: top side

 | navigationMenuListTop | reference | No | | data type=reference; lov=COMPONENT; references=listTemplate

 | navigationMenuListSide | reference | No | | data type=reference; lov=COMPONENT; references=listTemplate

 | loginPage | reference | No | | data type=reference; lov=COMPONENT; references=pageTemplate

 | errorPage | reference | No | | data type=reference; lov=COMPONENT; references=pageTemplate

 | printerFriendlyPage | reference | No | | data type=reference; lov=COMPONENT; references=pageTemplate

 | breadcrumb | reference | No | | data type=reference; lov=COMPONENT; references=breadcrumbTemplate

 | button | reference | No | | data type=reference; lov=COMPONENT; references=buttonTemplate

 | defaultLabel | reference | No | | data type=reference; lov=COMPONENT; references=fieldTemplate

 | optionalLabel | reference | No | | data type=reference; lov=COMPONENT; references=fieldTemplate

 | requiredLabel | reference | No | | data type=reference; lov=COMPONENT; references=fieldTemplate

 | list | reference | No | | data type=reference; lov=COMPONENT; references=listTemplate

 | region | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

 | classicReport | reference | No | | data type=reference; lov=COMPONENT; references=classicReportTemplate

 | headerToolbar | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

 | footerToolbar | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

Copy
componentDefaults {
 page: @component
 navigationBarList: @component
 navigationMenuListPosition: top
 navigationMenuListTop: @component
 navigationMenuListSide: @component
 loginPage: @component
 errorPage: @component
 printerFriendlyPage: @component
 breadcrumb: @component
 button: @component
 defaultLabel: @component
 optionalLabel: @component
 requiredLabel: @component
 list: @component
 region: @component
 classicReport: @component
 headerToolbar: @component
 footerToolbar: @component
}

regionDefaults

 | Property | Type | Required | Default Value | Details

 | breadcrumbs | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

 | charts | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

 | forms | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

 | lists | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

 | reports | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

 | wizards | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

 | interactiveReports | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

Copy
regionDefaults {
 breadcrumbs: @component
 charts: @component
 forms: @component
 lists: @component
 reports: @component
 wizards: @component
 interactiveReports: @component
}

dialogDefaults

 | Property | Type | Required | Default Value | Details

 | dialogContentRegion | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

 | dialogButtonRegion | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

 | dialogPage | reference | No | | data type=reference; lov=COMPONENT; references=pageTemplate

Copy
dialogDefaults {
 dialogContentRegion: @component
 dialogButtonRegion: @component
 dialogPage: @component
}

icons

 | Property | Type | Required | Default Value | Details

 | library | enum | No | | data type=string; lov=STATIC
Valid values: fontApex fontApexLatest

 | customLibraryFileUrls | multiline string | No | | data type=multiline string; maxLen=4000

 | customClasses | multiline string | No | | data type=multiline string; maxLen=4000

 | customPrefixClass | string | No | | data type=string; maxLen=30

 | datePickerIconName | string | No | | data type=string; maxLen=255

 | datePickerIconAttributes | string | No | | data type=string; maxLen=4000

Copy
icons {
 library: fontApex
 customLibraryFileUrls: ```
 value
 ```
 customClasses: ```
 value
 ```
 customPrefixClass: value
 datePickerIconName: value
 datePickerIconAttributes: value
}

description

 | Property | Type | Required | Default Value | Details

 | description | multiline string | No | | data type=multiline string; maxLen=4000

Copy
description {
 description: ```
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | filePrefix | string | No | | data type=string; maxLen=255

 | identifier | string | Yes | | data type=string; maxLen=255; textCase=UPPER

Copy
advanced {
 staticId: value
 filePrefix: value
 identifier: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=theme
Valid values: @/8842.242/universal-theme @/8842.261/universal-theme @/8842.9999/theme-1000

Copy
subscription {
 master: "@/8842.242/universal-theme"
}

APEXlang Example

Copy
theme sample (
 name: value
 themeNumber: 42
 baseTheme: ut-24.2
 version: value
 style {
 currentThemeStyle: @component
 }
 javaScript {
 fileUrls: [
 value
 value
 ]
 }
 css {
 fileUrls: [
 value
 value
 ]
 }
 navigation {
 type: tabs
 navigationBarType: classic
 }
 componentDefaults {
 page: @component
 navigationBarList: @component
 navigationMenuListPosition: top
 navigationMenuListTop: @component
 navigationMenuListSide: @component
 loginPage: @component
 errorPage: @component
 printerFriendlyPage: @component
 breadcrumb: @component
 button: @component
 defaultLabel: @component
 optionalLabel: @component
 requiredLabel: @component
 list: @component
 region: @component
 classicReport: @component
 headerToolbar: @component
 footerToolbar: @component
 }
 regionDefaults {
 breadcrumbs: @component
 charts: @component
 forms: @component
 lists: @component
 reports: @component
 wizards: @component
 interactiveReports: @component
 }
 dialogDefaults {
 dialogContentRegion: @component
 dialogButtonRegion: @component
 dialogPage: @component
 }
 icons {
 library: fontApex
 customLibraryFileUrls: ```
 value
 ```
 customClasses: ```
 value
 ```
 customPrefixClass: value
 datePickerIconName: value
 datePickerIconAttributes: value
 }
 description {
 description: ```
 value
 ```
 }
 advanced {
 staticId: value
 filePrefix: value
 identifier: value
 }
 subscription {
 master: "@/8842.242/universal-theme"
 }
)

---

workflow - APEXlang Reference

workflow

Parent: app

Children: parameter, version

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Name of this workflow.

 | title | string | Yes | | data type=string; maxLen=255
User friendly title of this workflow.

Property Groups:
advanced
comments

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Static ID for this workflow. The static ID is used when manually executing the workflow with
the APEX_WORKFLOW package (APEX_WORKFLOW.CREATE_WORKFLOW).

Copy
advanced {
 staticId: value
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
workflow sample (
 name: value
 title: value
 advanced {
 staticId: value
 }
 comments {
 comments: ```
 value
 ```
 }
)
