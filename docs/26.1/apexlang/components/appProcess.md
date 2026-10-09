# APEXlang: componentes con padre `appProcess` (APEX 26.1)


---

appProcess autoRowFetch - APEXlang Reference

appProcess (autoRowFetch)

Parent: appProcess

Applies whentype = autoRowFetch
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

 | tableOwner | string | No | | data type=string; maxLen=128

 | tableName | string | Yes | | data type=string; maxLen=128

 | pkItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | pkColumn | string | Yes | | data type=string; maxLen=128

 | secondaryKeyItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whensecondary_key_column is set

 | secondaryKeyColumn | string | No | | data type=string; maxLen=128

 | rowVersionColumn | string | No | | data type=string; maxLen=128

 | runtimeWhereClause | string | No | | data type=string; maxLen=4000

 | fetchMode | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: setMemoryCacheOnDisplay

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

Copy
source {
 tableOwner: value
 tableName: value
 pkItem: value
 pkColumn: value
 secondaryKeyItem: value
 secondaryKeyColumn: value
 rowVersionColumn: value
 runtimeWhereClause: value
 fetchMode: setMemoryCacheOnDisplay
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
 tableOwner: value
 tableName: value
 pkItem: value
 pkColumn: value
 secondaryKeyItem: value
 secondaryKeyColumn: value
 rowVersionColumn: value
 runtimeWhereClause: value
 fetchMode: setMemoryCacheOnDisplay
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

appProcess autoRowProcessing - APEXlang Reference

appProcess (autoRowProcessing)

Parent: appProcess

Applies whentype = autoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
target
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

target

 | Property | Type | Required | Default Value | Details

 | tableOwner | string | No | | data type=string; maxLen=128

 | tableName | string | Yes | | data type=string; maxLen=128

 | pkItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | pkColumn | string | Yes | | data type=string; maxLen=128

 | secondaryKeyItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whensecondary_key_column is set

 | secondaryKeyColumn | string | No | | data type=string; maxLen=128

 | rowVersionColumn | string | No | | data type=string; maxLen=128

 | runtimeWhereClause | string | No | | data type=string; maxLen=4000

 | returnKeyIntoItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | returnSecondKeyIntoItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whensecondary_key_column is set

 | supportedOperations | enum | Yes | I:U:D | data type=string; maxLen=4000; lov=STATIC
Valid values: update insert delete

 | lockRow | boolean | Yes | true | data type=boolean

Copy
target {
 tableOwner: value
 tableName: value
 pkItem: value
 pkColumn: value
 secondaryKeyItem: value
 secondaryKeyColumn: value
 rowVersionColumn: value
 runtimeWhereClause: value
 returnKeyIntoItem: value
 returnSecondKeyIntoItem: value
 supportedOperations: update
 lockRow: false
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 target {
 tableOwner: value
 tableName: value
 pkItem: value
 pkColumn: value
 secondaryKeyItem: value
 secondaryKeyColumn: value
 rowVersionColumn: value
 runtimeWhereClause: value
 returnKeyIntoItem: value
 returnSecondKeyIntoItem: value
 supportedOperations: update
 lockRow: false
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

appProcess clearSessionState - APEXlang Reference

appProcess (clearSessionState)

Parent: appProcess

Applies whentype = clearSessionState
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
clear
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

clear

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | currentPage | data type=string; maxLen=4000; lov=STATIC
Valid values: apps session currentPage currentApp items pages

 | applications | string | Yes | | data type=string; maxLen=4000
Applies whentype = CLEAR_CACHE_FOR_FLOWS

 | items | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = CLEAR_CACHE_FOR_ITEMS

 | pages | integer | Yes | | data type=integer; maxLen=4000
Applies whentype = CLEAR_CACHE_FOR_PAGES

Copy
clear {
 type: apps
 applications: value
 items: value
 pages: 42
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 clear {
 type: apps
 applications: value
 items: value
 pages: 42
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

appProcess closeDialog - APEXlang Reference

appProcess (closeDialog)

Parent: appProcess

Applies whentype = closeDialog
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
settings
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

settings

 | Property | Type | Required | Default Value | Details

 | itemsToReturn | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | showSuccessMessages | boolean | Yes | true | data type=boolean

Copy
settings {
 itemsToReturn: value
 showSuccessMessages: false
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 settings {
 itemsToReturn: value
 showSuccessMessages: false
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

appProcess dataLoading - APEXlang Reference

appProcess (dataLoading)

Parent: appProcess

Applies whentype = dataLoading
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
dataLoading
sourceData
processingResult
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

dataLoading

 | Property | Type | Required | Default Value | Details

 | dataLoadDefinition | reference | Yes | | data type=reference; lov=COMPONENT; references=dataLoadDefinition

Copy
dataLoading {
 dataLoadDefinition: @component
}

sourceData

 | Property | Type | Required | Default Value | Details

 | sourceDataType | enum | Yes | fileBrowseItem | data type=string; maxLen=4000; lov=STATIC
Valid values: sqlQuery fileBrowseItem textareaItem

 | fileBrowseItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whensource_data_type = FILE

 | textareaItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whensource_data_type = TEXT

 | sqlQuery | string | Yes | | data type=string; maxLen=4000
Applies whensource_data_type = SQL_QUERY

 | xlsxSheetNameItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

Copy
sourceData {
 sourceDataType: sqlQuery
 fileBrowseItem: value
 textareaItem: value
 sqlQuery: value
 xlsxSheetNameItem: value
}

processingResult

 | Property | Type | Required | Default Value | Details

 | processedRowCountItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | errorRowCountItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

Copy
processingResult {
 processedRowCountItem: value
 errorRowCountItem: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 dataLoading {
 dataLoadDefinition: @component
 }
 sourceData {
 sourceDataType: sqlQuery
 fileBrowseItem: value
 textareaItem: value
 sqlQuery: value
 xlsxSheetNameItem: value
 }
 processingResult {
 processedRowCountItem: value
 errorRowCountItem: value
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

appProcess download - APEXlang Reference

appProcess (download)

Parent: appProcess

Applies whentype = download
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
fileHandling
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

fileHandling

 | Property | Type | Required | Default Value | Details

 | multipleFiles | boolean | Yes | false | data type=boolean

 | filename | string | Yes | | data type=string; maxLen=255
Applies whenmultiple_files = Y

 | viewFileAs | enum | Yes | attachment | data type=string; maxLen=4000; lov=STATIC
Valid values: attachment inline
Applies whenmultiple_files = N

Copy
fileHandling {
 multipleFiles: false
 filename: value
 viewFileAs: attachment
}

source

 | Property | Type | Required | Default Value | Details

 | sqlQuery | string | Yes | | data type=string; maxLen=4000
Applies whenmultiple_files = Y

 | sqlQuery | string | Yes | | data type=string; maxLen=4000
Applies whenmultiple_files = N

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

Copy
source {
 sqlQuery: value
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
 fileHandling {
 multipleFiles: false
 filename: value
 viewFileAs: attachment
 }
 source {
 sqlQuery: value
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

appProcess executeCode - APEXlang Reference

appProcess (executeCode)

Parent: appProcess

Applies whentype = executeCode
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

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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

appProcess executionChain - APEXlang Reference

appProcess (executionChain)

Parent: appProcess

Applies whentype = executionChain
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
backgroundExecution
serialization
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

backgroundExecution

 | Property | Type | Required | Default Value | Details

 | runInBackground | boolean | Yes | false | data type=boolean

 | returnIdIntoItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenrun_in_background = Y

 | tempFileHandling | enum | Yes | ignore | data type=string; maxLen=4000; lov=STATIC
Valid values: ignore copy move
Applies whenrun_in_background = Y

 | tempFileItems | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenrun_in_background = Y and temporary_file_handling in (MOVE)run_in_background = Y and temporary_file_handling in (COPY)

 | executionsLimit | number | No | | data type=number; maxLen=5
Applies whenrun_in_background = Y

 | contextValueItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenrun_in_background = Y

 | submitImmediately | boolean | Yes | false | data type=boolean
Applies whenrun_in_background = Y

Copy
backgroundExecution {
 runInBackground: false
 returnIdIntoItem: value
 tempFileHandling: ignore
 tempFileItems: value
 executionsLimit: 42
 contextValueItem: value
 submitImmediately: false
}

serialization

 | Property | Type | Required | Default Value | Details

 | serialize | boolean | Yes | false | data type=boolean
Applies whenrun_in_background = Y

 | whenAlreadyRunning | enum | Yes | wait | data type=string; maxLen=4000; lov=STATIC
Valid values: wait error
Applies whenrun_in_background = Y and serialize = Y

Copy
serialization {
 serialize: false
 whenAlreadyRunning: wait
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 backgroundExecution {
 runInBackground: false
 returnIdIntoItem: value
 tempFileHandling: ignore
 tempFileItems: value
 executionsLimit: 42
 contextValueItem: value
 submitImmediately: false
 }
 serialization {
 serialize: false
 whenAlreadyRunning: wait
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

appProcess formAutoRowProcessing - APEXlang Reference

appProcess (formAutoRowProcessing)

Parent: appProcess

Applies whentype = formAutoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
target
lockRow
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

target

 | Property | Type | Required | Default Value | Details

 | targetType | enum | Yes | regionSource | data type=string; maxLen=4000; lov=STATIC
Valid values: regionSource plsqlCode tableView

 | tableOwner | string | No | | data type=string; maxLen=128
Applies whentarget_type = TABLE

 | tableName | string | Yes | | data type=string; maxLen=128
Applies whentarget_type = TABLE

 | plsqlCode | string | Yes | | data type=string; maxLen=4000
Applies whentarget_type = PLSQL_CODE

 | preventLostUpdates | boolean | Yes | true | data type=boolean

 | returnPksAfterInsert | boolean | Yes | true | data type=boolean
Applies whentarget_type in (REGION_SOURCE)target_type in (TABLE)

Copy
target {
 targetType: regionSource
 tableOwner: value
 tableName: value
 plsqlCode: value
 preventLostUpdates: false
 returnPksAfterInsert: false
}

lockRow

 | Property | Type | Required | Default Value | Details

 | lockRow | enum | Yes | true | data type=string; maxLen=4000; lov=STATIC
Valid values: plsqlCode true false

 | plsqlCode | string | No | | data type=string; maxLen=4000
Applies whenlock_row = PLSQL_CODE

Copy
lockRow {
 lockRow: plsqlCode
 plsqlCode: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 target {
 targetType: regionSource
 tableOwner: value
 tableName: value
 plsqlCode: value
 preventLostUpdates: false
 returnPksAfterInsert: false
 }
 lockRow {
 lockRow: plsqlCode
 plsqlCode: value
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

appProcess formInitialization - APEXlang Reference

appProcess (formInitialization)

Parent: appProcess

Applies whentype = formInitialization
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
navigation
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

navigation

 | Property | Type | Required | Default Value | Details

 | nextPkItems | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | prevPkItems | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | currentRowTotalItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

Copy
navigation {
 nextPkItems: value
 prevPkItems: value
 currentRowTotalItem: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 navigation {
 nextPkItems: value
 prevPkItems: value
 currentRowTotalItem: value
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

appProcess formPagination - APEXlang Reference

appProcess (formPagination)

Parent: appProcess

Applies whentype = formPagination
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
target
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

target

 | Property | Type | Required | Default Value | Details

 | tableOwner | string | No | | data type=string; maxLen=128

 | tableName | string | Yes | | data type=string; maxLen=128

 | pkItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | pkColumn | string | Yes | ROWID | data type=string; maxLen=128

 | secondaryKeyItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whensecondary_key_column is set

 | secondaryKeyColumn | string | No | | data type=string; maxLen=128

 | navigationOrderColumn | string | No | | data type=string; maxLen=128

 | secondaryNavigationOrderColumn | string | No | | data type=string; maxLen=128

 | nextPkItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | prevPkItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | nextSecondaryKeyItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whensecondary_key_column is set

 | prevSecondaryKeyItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whensecondary_key_column is set

 | currentRowCountItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | runtimeWhereClause | string | No | | data type=string; maxLen=4000

Copy
target {
 tableOwner: value
 tableName: value
 pkItem: value
 pkColumn: value
 secondaryKeyItem: value
 secondaryKeyColumn: value
 navigationOrderColumn: value
 secondaryNavigationOrderColumn: value
 nextPkItem: value
 prevPkItem: value
 nextSecondaryKeyItem: value
 prevSecondaryKeyItem: value
 currentRowCountItem: value
 runtimeWhereClause: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 target {
 tableOwner: value
 tableName: value
 pkItem: value
 pkColumn: value
 secondaryKeyItem: value
 secondaryKeyColumn: value
 navigationOrderColumn: value
 secondaryNavigationOrderColumn: value
 nextPkItem: value
 prevPkItem: value
 nextSecondaryKeyItem: value
 prevSecondaryKeyItem: value
 currentRowCountItem: value
 runtimeWhereClause: value
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

appProcess generateTextWithAi - APEXlang Reference

appProcess (generateTextWithAi)

Parent: appProcess

Applies whentype = generateTextWithAi
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
inputValue
useResponse
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

inputValue

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | item | data type=string; maxLen=4000; lov=STATIC
Valid values: functionBody expression item onlySystemPrompt sqlQuery

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies wheninput_value_type = ITEM

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql js-mle
Applies wheninput_value_type = EXPRESSION

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql js-mle
Applies wheninput_value_type = FUNCTION_BODY

 | plsqlExpression | string | Yes | | data type=string; maxLen=4000
Applies wheninput_value_type = EXPRESSION and input_value_expression_language = PLSQL

 | jsExpression | string | Yes | | data type=string; maxLen=4000
Applies wheninput_value_type = EXPRESSION and input_value_expression_language = JAVASCRIPT

 | plsqlFunctionBody | string | Yes | | data type=string; maxLen=4000
Applies wheninput_value_type = FUNCTION_BODY and input_value_function_body_language = PLSQL

 | jsFunctionBody | string | Yes | | data type=string; maxLen=4000
Applies wheninput_value_type = FUNCTION_BODY and input_value_function_body_language = JAVASCRIPT

 | sqlQuery | string | Yes | | data type=string; maxLen=4000
Applies wheninput_value_type = SQL_QUERY

 | maxTokens | integer | No | | data type=integer
Applies wheninput_value_type = SQL_QUERY

Copy
inputValue {
 type: functionBody
 item: value
 language: plsql
 plsqlExpression: value
 jsExpression: value
 plsqlFunctionBody: value
 jsFunctionBody: value
 sqlQuery: value
 maxTokens: 42
}

useResponse

 | Property | Type | Required | Default Value | Details

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

Copy
useResponse {
 item: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 inputValue {
 type: functionBody
 item: value
 language: plsql
 plsqlExpression: value
 jsExpression: value
 plsqlFunctionBody: value
 jsFunctionBody: value
 sqlQuery: value
 maxTokens: 42
 }
 useResponse {
 item: value
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

appProcess humanTaskCreate - APEXlang Reference

appProcess (humanTaskCreate)

Parent: appProcess

Applies whentype = humanTaskCreate
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
humanTask
overrides
settings
result
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

humanTask

 | Property | Type | Required | Default Value | Details

 | definition | reference | Yes | | data type=reference; lov=COMPONENT; references=taskDefinition

 | taskIdItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | detailsPkItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | dueDateItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

Copy
humanTask {
 definition: @component
 taskIdItem: value
 detailsPkItem: value
 dueDateItem: value
}

overrides

 | Property | Type | Required | Default Value | Details

 | subject | string | No | | data type=string; maxLen=4000

 | priority | number | No | | data type=number

 | initiatorCanComplete | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: false true

Copy
overrides {
 subject: value
 priority: 42
 initiatorCanComplete: false
}

settings

 | Property | Type | Required | Default Value | Details

 | initiatorItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

Copy
settings {
 initiatorItem: value
}

result

 | Property | Type | Required | Default Value | Details

 | outcome | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | owner | string | No | | data type=string; maxLen=4000; textCase=UPPER

Copy
result {
 outcome: value
 owner: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 humanTask {
 definition: @component
 taskIdItem: value
 detailsPkItem: value
 dueDateItem: value
 }
 overrides {
 subject: value
 priority: 42
 initiatorCanComplete: false
 }
 settings {
 initiatorItem: value
 }
 result {
 outcome: value
 owner: value
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

appProcess humanTaskManage - APEXlang Reference

appProcess (humanTaskManage)

Parent: appProcess

Applies whentype = humanTaskManage
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
action
humanTask
renew
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

action

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | approve | data type=string; maxLen=4000; lov=STATIC
Valid values: completeWithoutOutcome inviteParticipant approve removeParticipant requestInfo delegate cancel claim updateParam excludeParticipant comment submitInfo release setPriority reject renew setDueDate

Copy
action {
 type: completeWithoutOutcome
}

humanTask

 | Property | Type | Required | Default Value | Details

 | taskIdItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | commentText | string | Yes | | data type=string; maxLen=4000
Applies whentype in (ADD_TASK_COMMENT)type in (REQUEST_INFO)type in (SUBMIT_INFO)

 | toUserItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (DELEGATE_TASK)type in (ADD_TASK_POTENTIAL_OWNER)type in (REMOVE_POTENTIAL_OWNER)type in (EXCLUDE_OWNER)

 | priorityItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = SET_TASK_PRIORITY

 | dueDateItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = SET_DUE_DATE

 | paramItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = SET_TASK_PARAMS

 | newValueItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = SET_TASK_PARAMS

 | requestFromUserItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = REQUEST_INFO

Copy
humanTask {
 taskIdItem: value
 commentText: value
 toUserItem: value
 priorityItem: value
 dueDateItem: value
 paramItem: value
 newValueItem: value
 requestFromUserItem: value
}

renew

 | Property | Type | Required | Default Value | Details

 | renewedDueDateItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = RENEW_TASK

 | renewedPriorityItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = RENEW_TASK

 | renewedTaskIdItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = RENEW_TASK

Copy
renew {
 renewedDueDateItem: value
 renewedPriorityItem: value
 renewedTaskIdItem: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 action {
 type: completeWithoutOutcome
 }
 humanTask {
 taskIdItem: value
 commentText: value
 toUserItem: value
 priorityItem: value
 dueDateItem: value
 paramItem: value
 newValueItem: value
 requestFromUserItem: value
 }
 renew {
 renewedDueDateItem: value
 renewedPriorityItem: value
 renewedTaskIdItem: value
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

appProcess interactiveGridAutoRowProcessing - APEXlang Reference

appProcess (interactiveGridAutoRowProcessing)

Parent: appProcess

Applies whentype = interactiveGridAutoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
target
lockRow
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

target

 | Property | Type | Required | Default Value | Details

 | targetType | enum | Yes | regionSource | data type=string; maxLen=4000; lov=STATIC
Valid values: regionSource tableView plsqlCode

 | tableOwner | string | No | | data type=string; maxLen=128
Applies whentarget_type = TABLE

 | tableName | string | Yes | | data type=string; maxLen=128
Applies whentarget_type = TABLE

 | dmlPlsqlCode | string | Yes | | data type=string; maxLen=4000
Applies whentarget_type = PLSQL_CODE

 | returnPksAfterInsert | boolean | Yes | true | data type=boolean
Applies whentarget_type in (REGION_SOURCE)target_type in (TABLE)

Copy
target {
 targetType: regionSource
 tableOwner: value
 tableName: value
 dmlPlsqlCode: value
 returnPksAfterInsert: false
}

lockRow

 | Property | Type | Required | Default Value | Details

 | preventLostUpdates | boolean | Yes | true | data type=boolean

 | lockRow | enum | Yes | true | data type=string; maxLen=4000; lov=STATIC
Valid values: plsqlCode true false

 | plsqlCode | string | Yes | | data type=string; maxLen=4000
Applies whenlock_row = PLSQL_CODE

Copy
lockRow {
 preventLostUpdates: false
 lockRow: plsqlCode
 plsqlCode: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 target {
 targetType: regionSource
 tableOwner: value
 tableName: value
 dmlPlsqlCode: value
 returnPksAfterInsert: false
 }
 lockRow {
 preventLostUpdates: false
 lockRow: plsqlCode
 plsqlCode: value
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

appProcess invokeApi - APEXlang Reference

appProcess (invokeApi)

Parent: appProcess

Applies whentype = invokeApi
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
invoke
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

invoke

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | plsqlPackage | data type=string; maxLen=4000; lov=STATIC
Valid values: restSource plsqlPackage plsqlProcedureOrFunction

 | owner | string | No | | data type=string; maxLen=128
Applies whentype in (PLSQL_PACKAGE)type in (PLSQL_PROCEDURE_FUNCTION)

 | package | string | Yes | | data type=string; maxLen=128
Applies whentype = PLSQL_PACKAGE

 | procedureOrFunction | string | Yes | | data type=string; maxLen=128
Applies whentype = PLSQL_PACKAGE

 | procedureOrFunction | string | Yes | | data type=string; maxLen=128
Applies whentype = PLSQL_PROCEDURE_FUNCTION

 | restSource | reference | Yes | | data type=reference; lov=COMPONENT; references=restDataSource
Applies whentype = WEB_SOURCE

 | operation | reference | Yes | | data type=reference; lov=COMPONENT; references=operation
Applies whentype = WEB_SOURCE

Copy
invoke {
 type: restSource
 owner: value
 package: value
 procedureOrFunction: value
 restSource: @component
 operation: @component
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 invoke {
 type: restSource
 owner: value
 package: value
 procedureOrFunction: value
 restSource: @component
 operation: @component
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

appProcess invokeWorkflow - APEXlang Reference

appProcess (invokeWorkflow)

Parent: appProcess

Applies whentype = invokeWorkflow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
workflow
processing
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

workflow

 | Property | Type | Required | Default Value | Details

 | definition | reference | Yes | | data type=reference; lov=COMPONENT; references=workflow

 | initiatorItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | detailsPkItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | workflowIdItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

Copy
workflow {
 definition: @component
 initiatorItem: value
 detailsPkItem: value
 workflowIdItem: value
}

processing

 | Property | Type | Required | Default Value | Details

 | waitForCompletion | boolean | Yes | true | data type=boolean

 | retryPoint | enum | Yes | resume | data type=string; maxLen=4000; lov=STATIC
Valid values: startOver resume
Applies whenwait_for_completion = Y

Copy
processing {
 waitForCompletion: false
 retryPoint: startOver
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 workflow {
 definition: @component
 initiatorItem: value
 detailsPkItem: value
 workflowIdItem: value
 }
 processing {
 waitForCompletion: false
 retryPoint: startOver
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

appProcess legacyAutoRowProcessing - APEXlang Reference

appProcess (legacyAutoRowProcessing)

Parent: appProcess

Applies whentype = legacyAutoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
target
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

target

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | insert | data type=string; maxLen=4000; lov=STATIC
Valid values: insert update delete

 | tableOwner | string | No | | data type=string; maxLen=128

 | tableName | string | Yes | | data type=string; maxLen=128

 | pkItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | pkColumn | string | Yes | | data type=string; maxLen=128

 | runtimeWhereClause | string | No | | data type=string; maxLen=4000

Copy
target {
 type: insert
 tableOwner: value
 tableName: value
 pkItem: value
 pkColumn: value
 runtimeWhereClause: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 target {
 type: insert
 tableOwner: value
 tableName: value
 pkItem: value
 pkColumn: value
 runtimeWhereClause: value
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

appProcess legacyWebService - APEXlang Reference

appProcess (legacyWebService)

Parent: appProcess

Applies whentype = legacyWebService
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
settings
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

settings

 | Property | Type | Required | Default Value | Details

 | webServiceReference | number | Yes | | data type=number

 | storeResultIn | enum | Yes | items | data type=string; maxLen=4000; lov=STATIC
Valid values: items collection

 | collectionName | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whenstore_result_in = COLLECTION

Copy
settings {
 webServiceReference: 42
 storeResultIn: items
 collectionName: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 settings {
 webServiceReference: 42
 storeResultIn: items
 collectionName: value
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

appProcess loadUploadedData - APEXlang Reference

appProcess (loadUploadedData)

Parent: appProcess

Applies whentype = loadUploadedData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
dataLoading
processingResult
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

dataLoading

 | Property | Type | Required | Default Value | Details

 | dataLoadDefinition | reference | Yes | | data type=reference; lov=COMPONENT; references=legacyDataLoadDefinition

Copy
dataLoading {
 dataLoadDefinition: @component
}

processingResult

 | Property | Type | Required | Default Value | Details

 | insertCountItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | updateCountItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | errorCountItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | reviewCountItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

Copy
processingResult {
 insertCountItem: value
 updateCountItem: value
 errorCountItem: value
 reviewCountItem: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 dataLoading {
 dataLoadDefinition: @component
 }
 processingResult {
 insertCountItem: value
 updateCountItem: value
 errorCountItem: value
 reviewCountItem: value
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

appProcess parallelFlow - APEXlang Reference

appProcess (parallelFlow)

Parent: appProcess

Applies whentype = parallelFlow
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

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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

appProcess parseUploadedData - APEXlang Reference

appProcess (parseUploadedData)

Parent: appProcess

Applies whentype = parseUploadedData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
dataLoading
sourceData
parsingOptions
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

dataLoading

 | Property | Type | Required | Default Value | Details

 | dataLoadDefinition | reference | Yes | | data type=reference; lov=COMPONENT; references=legacyDataLoadDefinition

Copy
dataLoading {
 dataLoadDefinition: @component
}

sourceData

 | Property | Type | Required | Default Value | Details

 | importFromItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | fileNameItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | copyAndPasteItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | charSetItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | dateFormatItem | string | No | Y | data type=string; maxLen=4000; textCase=UPPER

Copy
sourceData {
 importFromItem: value
 fileNameItem: value
 copyAndPasteItem: value
 charSetItem: value
 dateFormatItem: value
}

parsingOptions

 | Property | Type | Required | Default Value | Details

 | separatorItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | enclosedByItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | firstRowItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | currencySymbolItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | groupSeparatorItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | decimalCharItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

Copy
parsingOptions {
 separatorItem: value
 enclosedByItem: value
 firstRowItem: value
 currencySymbolItem: value
 groupSeparatorItem: value
 decimalCharItem: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 dataLoading {
 dataLoadDefinition: @component
 }
 sourceData {
 importFromItem: value
 fileNameItem: value
 copyAndPasteItem: value
 charSetItem: value
 dateFormatItem: value
 }
 parsingOptions {
 separatorItem: value
 enclosedByItem: value
 firstRowItem: value
 currencySymbolItem: value
 groupSeparatorItem: value
 decimalCharItem: value
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

appProcess prepareUploadedData - APEXlang Reference

appProcess (prepareUploadedData)

Parent: appProcess

Applies whentype = prepareUploadedData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
dataLoading
processingResult
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

dataLoading

 | Property | Type | Required | Default Value | Details

 | dataLoadDefinition | reference | Yes | | data type=reference; lov=COMPONENT; references=legacyDataLoadDefinition

Copy
dataLoading {
 dataLoadDefinition: @component
}

processingResult

 | Property | Type | Required | Default Value | Details

 | insertCountItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | updateCountItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | errorCountItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | reviewCountItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

Copy
processingResult {
 insertCountItem: value
 updateCountItem: value
 errorCountItem: value
 reviewCountItem: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 dataLoading {
 dataLoadDefinition: @component
 }
 processingResult {
 insertCountItem: value
 updateCountItem: value
 errorCountItem: value
 reviewCountItem: value
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

appProcess printReport - APEXlang Reference

appProcess (printReport)

Parent: appProcess

Applies whentype = printReport
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

 | reportQuery | reference | Yes | | data type=reference; lov=COMPONENT; references=reportQuery

 | filename | string | No | | data type=string; maxLen=255

 | viewFileAs | enum | Yes | attachment | data type=string; maxLen=4000; lov=STATIC
Valid values: inline attachment

 | filePassword | string | No | | data type=string; maxLen=127

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

Copy
source {
 reportQuery: @component
 filename: value
 viewFileAs: inline
 filePassword: value
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
 reportQuery: @component
 filename: value
 viewFileAs: inline
 filePassword: value
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

appProcess resetPagination - APEXlang Reference

appProcess (resetPagination)

Parent: appProcess

Applies whentype = resetPagination
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
resetPagination
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

resetPagination

 | Property | Type | Required | Default Value | Details

 | target | enum | Yes | thisPage | data type=string; maxLen=4000; lov=STATIC
Valid values: pages thisPage allPages

 | pages | integer | Yes | | data type=integer; maxLen=4000
Applies whentarget = PAGES

Copy
resetPagination {
 target: pages
 pages: 42
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 resetPagination {
 target: pages
 pages: 42
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

appProcess sendEMail - APEXlang Reference

appProcess (sendEMail)

Parent: appProcess

Applies whentype = sendEMail
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
emailHeader
emailContent
emailAttachments
emailDispatchMode
emailTemplate
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

emailHeader

 | Property | Type | Required | Default Value | Details

 | from | string | Yes | &APP_EMAIL. | data type=string; maxLen=4000

 | to | string | Yes | | data type=string; maxLen=4000

 | cc | string | No | | data type=string; maxLen=4000

 | bcc | string | No | | data type=string; maxLen=4000

Copy
emailHeader {
 from: value
 to: value
 cc: value
 bcc: value
}

emailContent

 | Property | Type | Required | Default Value | Details

 | replyTo | string | No | | data type=string; maxLen=4000

 | subject | string | Yes | | data type=string; maxLen=4000

 | bodyPlainText | string | Yes | | data type=string; maxLen=4000

 | bodyHtml | string | No | | data type=string; maxLen=4000

Copy
emailContent {
 replyTo: value
 subject: value
 bodyPlainText: value
 bodyHtml: value
}

emailAttachments

 | Property | Type | Required | Default Value | Details

 | attachmentSql | string | No | | data type=string; maxLen=4000

Copy
emailAttachments {
 attachmentSql: value
}

emailDispatchMode

 | Property | Type | Required | Default Value | Details

 | sendImmediately | boolean | Yes | false | data type=boolean

Copy
emailDispatchMode {
 sendImmediately: false
}

emailTemplate

 | Property | Type | Required | Default Value | Details

 | emailTemplate | reference | No | | data type=reference; lov=COMPONENT; references=emailTemplate

 | placeholderValues | string | No | | data type=string; maxLen=4000
Applies whenemail_template_id is set

 | languageOverride | string | No | | data type=string; maxLen=128
Applies whenemail_template_id is set

 | escapeBodySubstitutions | enum | No | true | data type=string; maxLen=4000; lov=STATIC
Valid values: true false
Applies whenbody_html is set

Copy
emailTemplate {
 emailTemplate: @component
 placeholderValues: value
 languageOverride: value
 escapeBodySubstitutions: true
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 emailHeader {
 from: value
 to: value
 cc: value
 bcc: value
 }
 emailContent {
 replyTo: value
 subject: value
 bodyPlainText: value
 bodyHtml: value
 }
 emailAttachments {
 attachmentSql: value
 }
 emailDispatchMode {
 sendImmediately: false
 }
 emailTemplate {
 emailTemplate: @component
 placeholderValues: value
 languageOverride: value
 escapeBodySubstitutions: true
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

appProcess sendPushNotification - APEXlang Reference

appProcess (sendPushNotification)

Parent: appProcess

Applies whentype = sendPushNotification
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
settings
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

settings

 | Property | Type | Required | Default Value | Details

 | to | string | Yes | | data type=string; maxLen=255

 | title | string | Yes | | data type=string; maxLen=4000

 | body | string | No | | data type=string; maxLen=4000

 | linkTarget | complex | No | | data type=complex; maxLen=4000

Copy
settings {
 to: value
 title: value
 body: value
 linkTarget: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 settings {
 to: value
 title: value
 body: value
 linkTarget: value
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

appProcess serverSideGeocoding - APEXlang Reference

appProcess (serverSideGeocoding)

Parent: appProcess

Applies whentype = serverSideGeocoding
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
geocodingInput
address
geocodingResult
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

geocodingInput

 | Property | Type | Required | Default Value | Details

 | countryType | enum | Yes | static | data type=string; maxLen=4000; lov=STATIC
Valid values: item static
Applies whenstructured_address = Y

 | country | enum | Yes | us | data type=string; maxLen=4000; lov=STATIC
Valid values: hk ie lv pt ae ee fi ro us no dk es pl cl sa uk co de cz ch fr au it ca nl mx hu br be za in at
Applies whenstructured_address = Y and country_type = STATIC

 | countryItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y and country_type = ITEM

 | addressItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = N

 | streetItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y

 | houseNoItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y

 | postalCodeItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y

 | cityItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y

 | citySubAreaItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y

 | regionItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y

Copy
geocodingInput {
 countryType: item
 country: hk
 countryItem: value
 addressItem: value
 streetItem: value
 houseNoItem: value
 postalCodeItem: value
 cityItem: value
 citySubAreaItem: value
 regionItem: value
}

address

 | Property | Type | Required | Default Value | Details

 | structuredAddress | boolean | Yes | true | data type=boolean

 | sanitizeAddress | boolean | Yes | true | data type=boolean
Applies whenstructured_address = Y

Copy
address {
 structuredAddress: false
 sanitizeAddress: false
}

geocodingResult

 | Property | Type | Required | Default Value | Details

 | coordinateItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | matchVectorItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | collectionName | string | No | | data type=string; maxLen=30

Copy
geocodingResult {
 coordinateItem: value
 matchVectorItem: value
 collectionName: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 geocodingInput {
 countryType: item
 country: hk
 countryItem: value
 addressItem: value
 streetItem: value
 houseNoItem: value
 postalCodeItem: value
 cityItem: value
 citySubAreaItem: value
 regionItem: value
 }
 address {
 structuredAddress: false
 sanitizeAddress: false
 }
 geocodingResult {
 coordinateItem: value
 matchVectorItem: value
 collectionName: value
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

appProcess switch - APEXlang Reference

appProcess (switch)

Parent: appProcess

Applies whentype = switch
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
switch
compare
condition
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

switch

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | trueFalseCheck | data type=string; maxLen=4000; lov=STATIC
Valid values: if case checkWorkflowVar trueFalseCheck

Copy
switch {
 type: if
}

compare

 | Property | Type | Required | Default Value | Details

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=4000; lov=STATIC
Valid values: timestampWithLocalTimeZone number varchar2 boolean timestamp timestampWithTimeZone
Applies whentype = CASE

 | compareType | enum | Yes | sqlQuery | data type=string; maxLen=4000; lov=STATIC
Valid values: expression sqlQuery functionBody
Applies whentype = CASE

 | compareVar | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = CHECK_WF_VARIABLE

 | compareSqlQuery | string | Yes | | data type=string; maxLen=4000
Applies whentype = CASE and compare_type = SQL_QUERY

 | comparePlsqlExpression | string | Yes | | data type=string; maxLen=4000
Applies whentype = CASE and compare_type = EXPRESSION

 | comparePlsqlFunctionBody | string | Yes | | data type=string; maxLen=4000
Applies whentype = CASE and compare_type = FUNCTION_BODY

 | compareLanguage | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql js-mle
Applies whentype = CASE and compare_type in (EXPRESSION)type = CASE and compare_type in (FUNCTION_BODY)

Copy
compare {
 dataType: timestampWithLocalTimeZone
 compareType: expression
 compareVar: value
 compareSqlQuery: value
 comparePlsqlExpression: value
 comparePlsqlFunctionBody: value
 compareLanguage: plsql
}

condition

 | Property | Type | Required | Default Value | Details

 | conditionType | enum | Yes | rowsReturned | data type=string; maxLen=4000; lov=STATIC
Valid values: functionBody workflowVarIsNotNull workflowVarNotEqualsValue workflowVarEqualsValue expression rowsNotReturned rowsReturned workflowVarIsNull
Applies whentype = TRUE_FALSE_CHECK

 | sqlQuery | string | Yes | | data type=string; maxLen=4000
Applies whentype = TRUE_FALSE_CHECK and condition_type in (ROWS_RETURNED)type = TRUE_FALSE_CHECK and condition_type in (ROWS_NOT_RETURNED)

 | plsqlExpression | string | Yes | | data type=string; maxLen=4000
Applies whentype = TRUE_FALSE_CHECK and condition_type = EXPRESSION

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql js-mle
Applies whentype = TRUE_FALSE_CHECK and condition_type in (EXPRESSION)type = TRUE_FALSE_CHECK and condition_type in (FUNCTION_BODY)

 | plsqlFunctionBody | string | Yes | | data type=string; maxLen=4000
Applies whentype = TRUE_FALSE_CHECK and condition_type = FUNCTION_BODY

 | workflowVar | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = TRUE_FALSE_CHECK and condition_type in (WF_VARIABLE_NULL)type = TRUE_FALSE_CHECK and condition_type in (WF_VARIABLE_NOT_NULL)type = TRUE_FALSE_CHECK and condition_type in (WF_VARIABLE_EQ_VAL)type = TRUE_FALSE_CHECK and condition_type in (WF_VARIABLE_NEQ_VAL)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype = TRUE_FALSE_CHECK and condition_type in (WF_VARIABLE_EQ_VAL)type = TRUE_FALSE_CHECK and condition_type in (WF_VARIABLE_NEQ_VAL)

Copy
condition {
 conditionType: functionBody
 sqlQuery: value
 plsqlExpression: value
 language: plsql
 plsqlFunctionBody: value
 workflowVar: value
 value: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 switch {
 type: if
 }
 compare {
 dataType: timestampWithLocalTimeZone
 compareType: expression
 compareVar: value
 compareSqlQuery: value
 comparePlsqlExpression: value
 comparePlsqlFunctionBody: value
 compareLanguage: plsql
 }
 condition {
 conditionType: functionBody
 sqlQuery: value
 plsqlExpression: value
 language: plsql
 plsqlFunctionBody: value
 workflowVar: value
 value: value
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

appProcess tabformAddRows - APEXlang Reference

appProcess (tabformAddRows)

Parent: appProcess

Applies whentype = tabformAddRows
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
target
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

target

 | Property | Type | Required | Default Value | Details

 | noOfRows | integer | Yes | 1 | data type=integer

Copy
target {
 noOfRows: 42
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 target {
 noOfRows: 42
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

appProcess tabformDelete - APEXlang Reference

appProcess (tabformDelete)

Parent: appProcess

Applies whentype = tabformDelete
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
target
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

target

 | Property | Type | Required | Default Value | Details

 | tableOwner | string | No | | data type=string; maxLen=128

 | tableName | string | Yes | | data type=string; maxLen=128

 | pkColumn | string | Yes | | data type=string; maxLen=128

 | secondaryKeyColumn | string | No | | data type=string; maxLen=128

 | runtimeWhereClause | string | No | | data type=string; maxLen=4000

Copy
target {
 tableOwner: value
 tableName: value
 pkColumn: value
 secondaryKeyColumn: value
 runtimeWhereClause: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 target {
 tableOwner: value
 tableName: value
 pkColumn: value
 secondaryKeyColumn: value
 runtimeWhereClause: value
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

appProcess tabformUpdate - APEXlang Reference

appProcess (tabformUpdate)

Parent: appProcess

Applies whentype = tabformUpdate
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
target
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

target

 | Property | Type | Required | Default Value | Details

 | tableOwner | string | No | | data type=string; maxLen=128

 | tableName | string | Yes | | data type=string; maxLen=128

 | pkColumn | string | Yes | | data type=string; maxLen=128

 | secondaryKeyColumn | string | No | | data type=string; maxLen=128

 | runtimeWhereClause | string | No | | data type=string; maxLen=4000

Copy
target {
 tableOwner: value
 tableName: value
 pkColumn: value
 secondaryKeyColumn: value
 runtimeWhereClause: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 target {
 tableOwner: value
 tableName: value
 pkColumn: value
 secondaryKeyColumn: value
 runtimeWhereClause: value
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

appProcess userPreferences - APEXlang Reference

appProcess (userPreferences)

Parent: appProcess

Applies whentype = userPreferences
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
action
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

action

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | resetPreferences | data type=string; maxLen=4000; lov=STATIC
Valid values: setToItemValue setToItemValueIfNotNull resetPreferences

 | preferenceName | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype in (SET_PREFERENCE_TO_ITEM_VALUE)type in (SET_PREFERENCE_TO_ITEM_VALUE_IF_ITEM_NOT_NULL)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (SET_PREFERENCE_TO_ITEM_VALUE)type in (SET_PREFERENCE_TO_ITEM_VALUE_IF_ITEM_NOT_NULL)

Copy
action {
 type: setToItemValue
 preferenceName: value
 item: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 action {
 type: setToItemValue
 preferenceName: value
 item: value
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

appProcess wait - APEXlang Reference

appProcess (wait)

Parent: appProcess

Applies whentype = wait
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
timeout
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

timeout

 | Property | Type | Required | Default Value | Details

 | timeoutType | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: sqlQuery expression functionBody static

 | sqlQuery | string | Yes | | data type=string; maxLen=4000
Applies whentimeout_type = SQL_QUERY

 | plsqlExpression | string | Yes | | data type=string; maxLen=4000
Applies whentimeout_type = EXPRESSION and lang_expression = PLSQL

 | plsqlFunctionBody | string | Yes | | data type=string; maxLen=4000
Applies whentimeout_type = FUNCTION_BODY and lang_function_body = PLSQL

 | staticValue | string | Yes | | data type=string; maxLen=4000
Applies whentimeout_type = STATIC

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql js-mle
Applies whentimeout_type = EXPRESSION

 | javascriptExpression | string | Yes | | data type=string; maxLen=4000
Applies whentimeout_type = EXPRESSION and lang_expression = JAVASCRIPT

 | javascriptFunctionBody | string | Yes | | data type=string; maxLen=4000
Applies whentimeout_type = FUNCTION_BODY and lang_function_body = JAVASCRIPT

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql js-mle
Applies whentimeout_type = FUNCTION_BODY

Copy
timeout {
 timeoutType: sqlQuery
 sqlQuery: value
 plsqlExpression: value
 plsqlFunctionBody: value
 staticValue: value
 language: plsql
 javascriptExpression: value
 javascriptFunctionBody: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 timeout {
 timeoutType: sqlQuery
 sqlQuery: value
 plsqlExpression: value
 plsqlFunctionBody: value
 staticValue: value
 language: plsql
 javascriptExpression: value
 javascriptFunctionBody: value
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

appProcess webService - APEXlang Reference

appProcess (webService)

Parent: appProcess

Applies whentype = webService
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
settings
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

settings

 | Property | Type | Required | Default Value | Details

 | webServiceOperation | string | Yes | | data type=string; lov=COMPONENT

 | storeResultIn | enum | Yes | items | data type=string; maxLen=4000; lov=STATIC
Valid values: items collection

 | collectionName | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whenstore_result_in = COLLECTION

Copy
settings {
 webServiceOperation: value
 storeResultIn: items
 collectionName: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 settings {
 webServiceOperation: value
 storeResultIn: items
 collectionName: value
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

appProcess workflowEnd - APEXlang Reference

appProcess (workflowEnd)

Parent: appProcess

Applies whentype = workflowEnd
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
endState
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

endState

 | Property | Type | Required | Default Value | Details

 | endState | enum | Yes | completed | data type=string; maxLen=4000; lov=STATIC
Valid values: terminated completed

Copy
endState {
 endState: terminated
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 endState {
 endState: terminated
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

appProcess workflowStart - APEXlang Reference

appProcess (workflowStart)

Parent: appProcess

Applies whentype = workflowStart
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

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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

appProcess workflow - APEXlang Reference

appProcess (workflow)

Parent: appProcess

Applies whentype = workflow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi invokeWorkflow legacyAutoRowProcessing legacyWebService loadUploadedData parallelFlow parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding switch tabformAddRows tabformDelete tabformUpdate userPreferences wait webService workflow workflowEnd workflowStart

Property Groups:
action
workflow
workflowInstance
source
execution
error
advanced
serverSideCondition
security
config
comments
subscription

action

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | start | data type=string; maxLen=4000; lov=STATIC
Valid values: start resume terminate retry suspend

Copy
action {
 type: start
}

workflow

 | Property | Type | Required | Default Value | Details

 | definition | reference | No | | data type=reference; lov=COMPONENT; references=workflow
Applies whentype = START

 | detailsPkItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = START

 | activityStaticIdItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = RESUME

Copy
workflow {
 definition: @component
 detailsPkItem: value
 activityStaticIdItem: value
}

workflowInstance

 | Property | Type | Required | Default Value | Details

 | workflowIdItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | returnWorkflowIdItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = START

Copy
workflowInstance {
 workflowIdItem: value
 returnWorkflowIdItem: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restEnabledSql

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
 action {
 type: start
 }
 workflow {
 definition: @component
 detailsPkItem: value
 activityStaticIdItem: value
 }
 workflowInstance {
 workflowIdItem: value
 returnWorkflowIdItem: value
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
