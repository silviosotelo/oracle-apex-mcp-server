# APEXlang: componentes con padre `lov` (APEX 26.1)


---

column - APEXlang Reference

column

Parent: lov

Applies whenlocation in (localDatabase)location in (restEnabledSql)location in (jsonDualityView)location in (jsonSource)location in (restSource)location in (sampleData)
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | columnName | string | Yes | | data type=string; maxLen=128

 | show | boolean | Yes | true | data type=boolean

Property Groups:
heading
layout
source
appearance
advanced
comments

heading

 | Property | Type | Required | Default Value | Details

 | heading | string | No | | data type=string; maxLen=4000

Copy
heading {
 heading: value
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

source

 | Property | Type | Required | Default Value | Details

 | dataType | enum | Yes | | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 dataType: varchar2
}

appearance

 | Property | Type | Required | Default Value | Details

 | formatMask | string | No | | data type=string; maxLen=255
Applies whendataType in (date)dataType in (timestamp)dataType in (timestampWithTimeZone)dataType in (timestampWithLocalTimeZone)

 | formatMask | string | No | | data type=string; maxLen=255
Applies whendataType = number

 | formatMask | string | No | | data type=string; maxLen=255

Copy
appearance {
 formatMask: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | searchable | boolean | Yes | true | data type=boolean

Copy
advanced {
 searchable: false
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
column sample (
 columnName: value
 show: false
 heading {
 heading: value
 }
 layout {
 sequence: 42
 }
 source {
 dataType: varchar2
 }
 appearance {
 formatMask: value
 }
 advanced {
 searchable: false
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

entry - APEXlang Reference

entry

Parent: lov

Applies whenlocation = staticValues
Property Groups:
entry
globalization
advanced
serverSideCondition
config
comments

entry

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | display | multiline string | Yes | | data type=multiline string; maxLen=4000

 | return | string | Yes | | data type=string; maxLen=4000

 | quickPickRank | integer | No | | data type=integer; maxLen=32767

Copy
entry {
 sequence: 42
 display: ```
 value
 ```
 return: value
 quickPickRank: 42
}

globalization

 | Property | Type | Required | Default Value | Details

 | template | multiline string | No | | data type=multiline string; maxLen=4000

Copy
globalization {
 template: ```html
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
 entry {
 sequence: 42
 display: ```
 value
 ```
 return: value
 quickPickRank: 42
 }
 globalization {
 template: ```html
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

Parent: lov

Applies whenlocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable = falselocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = falselocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable = false
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
