# APEXlang: componentes con padre `list` (APEX 26.1)


---

entry - APEXlang Reference

entry

Parent: list

Applies whentype = staticValues
Property Groups:
label
icon
layout
isCurrent
link
clickCounting
userDefinedAttributes
advanced
serverSideCondition
security
config
comments

label

 | Property | Type | Required | Default Value | Details

 | label | multiline string | Yes | | data type=multiline string; maxLen=4000

Copy
label {
 label: ```html
 value
 ```
}

icon

 | Property | Type | Required | Default Value | Details

 | imageIconCssClasses | string | No | | data type=string; maxLen=255

 | attributes | string | No | | data type=string; maxLen=2000

 | altAttribute | string | No | | data type=string; maxLen=4000

Copy
icon {
 imageIconCssClasses: value
 attributes: value
 altAttribute: value
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | parentEntry | reference | No | | data type=reference; lov=COMPONENT; references=entry

 | subentriesList | reference | No | | data type=reference; lov=COMPONENT; references=list

Copy
layout {
 sequence: 42
 parentEntry: @component
 subentriesList: @component
}

isCurrent

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | targetPage | data type=string; lov=STATIC
Valid values: targetPage pages existsSqlQuery notExistsSqlQuery expression always never

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype = pages

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype in (existsSqlQuery)type in (notExistsSqlQuery)

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = expression and language = javaScript-mle

Copy
isCurrent {
 type: targetPage
 pages: [
 42
 42
 ]
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
}

link

 | Property | Type | Required | Default Value | Details

 | target | complex | No | | data type=complex; maxLen=32767

 | linkAttributes | string | No | | data type=string; maxLen=4000
Applies whentarget is set

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
 linkAttributes: value
}

clickCounting

 | Property | Type | Required | Default Value | Details

 | countClicks | boolean | Yes | false | data type=boolean
Applies whentarget is set

 | category | string | No | | data type=string; maxLen=255
Applies whentarget is set and countClicks = true

Copy
clickCounting {
 countClicks: false
 category: value
}

userDefinedAttributes

 | Property | Type | Required | Default Value | Details

 | translatable | boolean | Yes | false | data type=boolean

 | 1 | multiline string | No | | data type=multiline string; maxLen=4000

 | 2 | multiline string | No | | data type=multiline string; maxLen=4000

 | 3 | multiline string | No | | data type=multiline string; maxLen=4000

 | 4 | multiline string | No | | data type=multiline string; maxLen=4000

 | 5 | multiline string | No | | data type=multiline string; maxLen=4000

 | 6 | multiline string | No | | data type=multiline string; maxLen=4000

 | 7 | multiline string | No | | data type=multiline string; maxLen=4000

 | 8 | multiline string | No | | data type=multiline string; maxLen=4000

 | 9 | multiline string | No | | data type=multiline string; maxLen=4000

 | 10 | multiline string | No | | data type=multiline string; maxLen=4000

Copy
userDefinedAttributes {
 translatable: false
 1: ```
 value
 ```
 2: ```
 value
 ```
 3: ```
 value
 ```
 4: ```
 value
 ```
 5: ```
 value
 ```
 6: ```
 value
 ```
 7: ```
 value
 ```
 8: ```
 value
 ```
 9: ```
 value
 ```
 10: ```
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
entry sample (
 label {
 label: ```html
 value
 ```
 }
 icon {
 imageIconCssClasses: value
 attributes: value
 altAttribute: value
 }
 layout {
 sequence: 42
 parentEntry: @component
 subentriesList: @component
 }
 isCurrent {
 type: targetPage
 pages: [
 42
 42
 ]
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
 linkAttributes: value
 }
 clickCounting {
 countClicks: false
 category: value
 }
 userDefinedAttributes {
 translatable: false
 1: ```
 value
 ```
 2: ```
 value
 ```
 3: ```
 value
 ```
 4: ```
 value
 ```
 5: ```
 value
 ```
 6: ```
 value
 ```
 7: ```
 value
 ```
 8: ```
 value
 ```
 9: ```
 value
 ```
 10: ```
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
 comments {
 comments: ```
 value
 ```
 }
)
