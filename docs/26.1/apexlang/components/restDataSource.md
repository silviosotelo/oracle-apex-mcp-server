# APEXlang: componentes con padre `restDataSource` (APEX 26.1)


---

dataProfileColumn - APEXlang Reference

dataProfileColumn

Parent: restDataSource

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | columnName | string | Yes | | data type=string; maxLen=128

Property Groups:
source
settings
parsing
computation
lookup
transformation
advanced
comments

source

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | type | enum | Yes | data | data type=string; lov=STATIC
Valid values: data lookup sqlExpression sqlQuery

 | parentColumn | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whenformat = json

 | lineNumber | boolean | Yes | false | data type=boolean
Applies whencontainsSingleRow = false and type = data

 | dataType | enum | Yes | | data type=string; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithLocalTimeZone timestampWithTimeZone clob boolean blob geometrySdoGeometry array jsonDocument
Applies whencontainsSingleRow = false and type = data and lineNumber = false

 | regexPattern | string | No | | data type=string; maxLen=255
Applies whencontainsSingleRow = false and type = data and lineNumber = false and dataType = varchar2

 | maxLength | integer | Yes | 4000 | data type=integer; maxLen=5
Applies whencontainsSingleRow = false and type = data and lineNumber = false and dataType = varchar2

 | primaryKey | boolean | Yes | false | data type=boolean

Copy
source {
 sequence: 42
 type: data
 parentColumn: @component
 lineNumber: false
 dataType: varchar2
 regexPattern: value
 maxLength: 42
 primaryKey: false
}

settings

 | Property | Type | Required | Default Value | Details

 | filterable | boolean | Yes | true | data type=boolean

Copy
settings {
 filterable: false
}

parsing

 | Property | Type | Required | Default Value | Details

 | selectorType | enum | Yes | name | data type=string; lov=STATIC
Valid values: name sequence regexp
Applies whentype = data and format in (csv)

 | selector | string | Yes | | data type=string; maxLen=255
Applies whentype = data and format in (csv) and selectorType in (name)type = data and format in (csv) and selectorType in (regexp)

 | columnNumber | integer | Yes | | data type=integer; maxLen=32767
Applies whentype = data and format in (csv) and selectorType = sequence

 | pathExpression | string | Yes | | data type=string; maxLen=255
Applies whenformat in (json) and type = data and containsSingleRow = false and lineNumber = falseformat in (xml) and type = data and containsSingleRow = false and lineNumber = false

 | formatMask | string | No | | data type=string; maxLen=255
Applies whencontainsSingleRow = false and type = data and lineNumber = false and dataType in (number)containsSingleRow = false and type = data and lineNumber = false and dataType in (date)containsSingleRow = false and type = data and lineNumber = false and dataType in (timestamp)containsSingleRow = false and type = data and lineNumber = false and dataType in (timestampWithTimeZone)containsSingleRow = false and type = data and lineNumber = false and dataType in (timestampWithLocalTimeZone)

 | hasTimeZone | boolean | Yes | true | data type=boolean
Applies whencontainsSingleRow = false and type = data and lineNumber = false and dataType in (date)containsSingleRow = false and type = data and lineNumber = false and dataType in (timestamp)containsSingleRow = false and type = data and lineNumber = false and dataType in (timestampWithTimeZone)containsSingleRow = false and type = data and lineNumber = false and dataType in (timestampWithLocalTimeZone)

 | decimalChar | string | No | | data type=string; maxLen=1
Applies whencontainsSingleRow = false and type = data and lineNumber = false and dataType = number

 | groupChar | string | No | | data type=string; maxLen=1
Applies whencontainsSingleRow = false and type = data and lineNumber = false and dataType = number

Copy
parsing {
 selectorType: name
 selector: value
 columnNumber: 42
 pathExpression: value
 formatMask: value
 hasTimeZone: false
 decimalChar: value
 groupChar: value
}

computation

 | Property | Type | Required | Default Value | Details

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = sqlExpression

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = sqlQuery

Copy
computation {
 sqlExpression: ```sql
 value
 ```
 sqlQuery: ```sql
 value
 ```
}

lookup

 | Property | Type | Required | Default Value | Details

 | tableOwner | string | No | | data type=string; maxLen=32767
Applies whentype = lookup

 | tableName | string | Yes | | data type=string; maxLen=128
Applies whentype = lookup

 | returnColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = lookup

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = lookup

 | tableColumn1 | string | Yes | | data type=string; maxLen=32767
Applies whentype = lookup

 | dataColumn1 | string | Yes | | data type=string; maxLen=32767
Applies whentype = lookup

 | tableColumn2 | string | No | | data type=string; maxLen=32767
Applies whentype = lookup and tableColumn1 is set

 | dataColumn2 | string | Yes | | data type=string; maxLen=32767
Applies whentype = lookup and tableColumn1 is set and tableColumn2 is set

 | tableColumn3 | string | No | | data type=string; maxLen=32767
Applies whentype = lookup and tableColumn1 is set and tableColumn2 is set

 | dataColumn3 | string | Yes | | data type=string; maxLen=32767
Applies whentype = lookup and tableColumn1 is set and tableColumn2 is set and tableColumn3 is set

Copy
lookup {
 tableOwner: value
 tableName: value
 returnColumn: value
 whereClause: ```sql
 value
 ```
 tableColumn1: value
 dataColumn1: value
 tableColumn2: value
 dataColumn2: value
 tableColumn3: value
 dataColumn3: value
}

transformation

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: leftTrim rightTrim trim replace lower upper nullIf regexpReplace regexpNullIf
Applies whencontainsSingleRow = false and type = data and lineNumber = false

 | trimChars | string | No | | data type=string; maxLen=4000
Applies whencontainsSingleRow = false and type = data and lineNumber = false and type in (leftTrim)containsSingleRow = false and type = data and lineNumber = false and type in (rightTrim)containsSingleRow = false and type = data and lineNumber = false and type in (trim)

 | find | string | Yes | | data type=string; maxLen=4000
Applies whencontainsSingleRow = false and type = data and lineNumber = false and type = replace

 | regexp | string | Yes | | data type=string; maxLen=4000
Applies whencontainsSingleRow = false and type = data and lineNumber = false and type in (regexpReplace)containsSingleRow = false and type = data and lineNumber = false and type in (regexpNullIf)

 | replaceWith | string | No | | data type=string; maxLen=4000
Applies whencontainsSingleRow = false and type = data and lineNumber = false and type in (replace)containsSingleRow = false and type = data and lineNumber = false and type in (regexpReplace)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whencontainsSingleRow = false and type = data and lineNumber = false and type = nullIf

Copy
transformation {
 type: leftTrim
 trimChars: value
 find: value
 regexp: value
 replaceWith: value
 value: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | sourceDataType | string | No | | data type=string; maxLen=255
Applies whentype = data and containsSingleRow = false and lineNumber = false

 | sourceAttributeName | string | No | | data type=string; maxLen=255
Applies whentype = data

 | additionalInformation | string | No | | data type=string; maxLen=4000
Applies whentype = data

 | common | boolean | Yes | true | data type=boolean

 | hidden | boolean | Yes | false | data type=boolean

Copy
advanced {
 staticId: value
 sourceDataType: value
 sourceAttributeName: value
 additionalInformation: value
 common: false
 hidden: false
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
dataProfileColumn sample (
 columnName: value
 source {
 sequence: 42
 type: data
 parentColumn: @component
 lineNumber: false
 dataType: varchar2
 regexPattern: value
 maxLength: 42
 primaryKey: false
 }
 settings {
 filterable: false
 }
 parsing {
 selectorType: name
 selector: value
 columnNumber: 42
 pathExpression: value
 formatMask: value
 hasTimeZone: false
 decimalChar: value
 groupChar: value
 }
 computation {
 sqlExpression: ```sql
 value
 ```
 sqlQuery: ```sql
 value
 ```
 }
 lookup {
 tableOwner: value
 tableName: value
 returnColumn: value
 whereClause: ```sql
 value
 ```
 tableColumn1: value
 dataColumn1: value
 tableColumn2: value
 dataColumn2: value
 tableColumn3: value
 dataColumn3: value
 }
 transformation {
 type: leftTrim
 trimChars: value
 find: value
 regexp: value
 replaceWith: value
 value: value
 }
 advanced {
 staticId: value
 sourceDataType: value
 sourceAttributeName: value
 additionalInformation: value
 common: false
 hidden: false
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

operation - APEXlang Reference

operation

Parent: restDataSource

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | No | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=255

Property Groups:
operation
requestBody
dataProfile
remoteCache
advanced
comments

operation

 | Property | Type | Required | Default Value | Details

 | urlPattern | string | Yes | | data type=string; maxLen=500

 | httpMethod | enum | Yes | | data type=string; lov=STATIC
Valid values: get post put delete patch

 | databaseOperation | enum | No | | data type=string; lov=STATIC
Valid values: fetchRows fetchSingleRow insert update delete

Copy
operation {
 urlPattern: value
 httpMethod: get
 databaseOperation: fetchRows
}

requestBody

 | Property | Type | Required | Default Value | Details

 | template | multiline string | No | | data type=multiline string; maxLen=32760

 | versionNumber | enum | Yes | 2 | data type=string; lov=STATIC
Valid values: 1 2

Copy
requestBody {
 template: ```
 value
 ```
 versionNumber: "1"
}

dataProfile

 | Property | Type | Required | Default Value | Details

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn

Copy
dataProfile {
 nestedRows: @component
}

remoteCache

 | Property | Type | Required | Default Value | Details

 | caching | enum | No | | data type=string; lov=STATIC
Valid values: allUsers user session
Applies whenhttpMethod in (get) and databaseOperation in (fetchRows)httpMethod in (get) and databaseOperation in (fetchSingleRow)httpMethod in (post) and databaseOperation in (fetchRows)httpMethod in (post) and databaseOperation in (fetchSingleRow)

 | timeout | multiline string | No | | data type=multiline string; maxLen=255
Applies whenhttpMethod in (get) and databaseOperation in (fetchRows) and caching is sethttpMethod in (get) and databaseOperation in (fetchSingleRow) and caching is sethttpMethod in (post) and databaseOperation in (fetchRows) and caching is sethttpMethod in (post) and databaseOperation in (fetchSingleRow) and caching is set

Copy
remoteCache {
 caching: allUsers
 timeout: ```
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | fixedPageSize | integer | No | | data type=integer; maxLen=32767

 | allowFetchingAllRows | boolean | Yes | false | data type=boolean
Applies whendatabaseOperation = fetchRows

 | fetchAllRowsTimeout | integer | No | | data type=integer; maxLen=32767
Applies whendatabaseOperation = fetchRows and allowFetchingAllRows = true

 | forceRaiseHttp404Error | boolean | Yes | false | data type=boolean
Applies whendatabaseOperation = fetchRows

 | staticId | string | No | | data type=string; maxLen=255

Copy
advanced {
 fixedPageSize: 42
 allowFetchingAllRows: false
 fetchAllRowsTimeout: 42
 forceRaiseHttp404Error: false
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
operation sample (
 name: value
 label: value
 operation {
 urlPattern: value
 httpMethod: get
 databaseOperation: fetchRows
 }
 requestBody {
 template: ```
 value
 ```
 versionNumber: "1"
 }
 dataProfile {
 nestedRows: @component
 }
 remoteCache {
 caching: allUsers
 timeout: ```
 value
 ```
 }
 advanced {
 fixedPageSize: 42
 allowFetchingAllRows: false
 fetchAllRowsTimeout: 42
 forceRaiseHttp404Error: false
 staticId: value
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

Parent: restDataSource

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | operation | reference | No | | data type=reference; lov=COMPONENT; references=operation

Property Groups:
parameter
value
validation
multipleValues
advanced
comments

parameter

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | urlPattern | data type=string; lov=STATIC
Valid values: urlPattern urlQueryString httpHeader dataProfileColumn requestOrResponseBody httpStatusCode httpReasonPhrase httpCookie

 | dataType | enum | Yes | string | data type=string; lov=STATIC
Valid values: string numeric date timestamp timestampWithTimeZone boolean binary
Applies whentype in (httpHeader)type in (httpCookie)type in (urlPattern)type in (urlQueryString)type in (requestOrResponseBody)

 | direction | enum | Yes | in | data type=string; lov=STATIC
Valid values: in out inOut

 | omitWhenValueIsEmpty | boolean | Yes | false | data type=boolean
Applies whentype in (httpHeader) and type in (urlPattern) and static = falsetype in (httpHeader) and type in (urlQueryString) and static = falsetype in (httpHeader) and type in (requestOrResponseBody) and static = falsetype in (httpHeader) and static = falsetype in (httpHeader) and type in (httpCookie) and static = falsetype in (httpCookie) and type in (urlPattern) and static = falsetype in (httpCookie) and type in (urlQueryString) and static = falsetype in (httpCookie) and type in (requestOrResponseBody) and static = falsetype in (httpCookie) and type in (httpHeader) and static = falsetype in (httpCookie) and static = falsetype in (urlQueryString) and type in (urlPattern) and static = falsetype in (urlQueryString) and static = falsetype in (urlQueryString) and type in (requestOrResponseBody) and static = falsetype in (urlQueryString) and type in (httpHeader) and static = falsetype in (urlQueryString) and type in (httpCookie) and static = false

Copy
parameter {
 type: urlPattern
 dataType: string
 direction: in
 omitWhenValueIsEmpty: false
}

value

 | Property | Type | Required | Default Value | Details

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype in (httpHeader) and dataType in (boolean)type in (httpHeader) and dataType in (numeric)type in (httpHeader) and dataType in (date)type in (httpHeader) and dataType in (timestamp)type in (httpHeader) and dataType in (timestampWithTimeZone)type in (httpCookie) and dataType in (boolean)type in (httpCookie) and dataType in (numeric)type in (httpCookie) and dataType in (date)type in (httpCookie) and dataType in (timestamp)type in (httpCookie) and dataType in (timestampWithTimeZone)type in (urlPattern) and dataType in (boolean)type in (urlPattern) and dataType in (numeric)type in (urlPattern) and dataType in (date)type in (urlPattern) and dataType in (timestamp)type in (urlPattern) and dataType in (timestampWithTimeZone)type in (urlQueryString) and dataType in (boolean)type in (urlQueryString) and dataType in (numeric)type in (urlQueryString) and dataType in (date)type in (urlQueryString) and dataType in (timestamp)type in (urlQueryString) and dataType in (timestampWithTimeZone)type in (requestOrResponseBody) and dataType in (boolean)type in (requestOrResponseBody) and dataType in (numeric)type in (requestOrResponseBody) and dataType in (date)type in (requestOrResponseBody) and dataType in (timestamp)type in (requestOrResponseBody) and dataType in (timestampWithTimeZone)

 | static | boolean | Yes | false | data type=boolean
Applies whentype in (urlPattern)type in (urlQueryString)type in (requestOrResponseBody)type in (httpHeader)type in (httpCookie)

 | defaultValueType | enum | No | | data type=string; lov=STATIC
Valid values: staticValue item sqlQuery expression functionBody

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendefaultValueType = staticValue

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whendefaultValueType = item

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendefaultValueType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendefaultValueType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendefaultValueType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendefaultValueType = functionBody and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendefaultValueType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendefaultValueType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendefaultValueType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendefaultValueType = expression and language = javaScript-mle

Copy
value {
 formatMask: value
 static: false
 defaultValueType: staticValue
 staticValue: ```
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

validation

 | Property | Type | Required | Default Value | Details

 | required | boolean | Yes | false | data type=boolean
Applies whentype in (urlPattern) and static = falsetype in (urlQueryString) and static = falsetype in (requestOrResponseBody) and static = falsetype in (httpHeader) and static = falsetype in (httpCookie) and static = false

 | regexPattern | string | No | | data type=string; maxLen=255
Applies whentype in (httpHeader) and dataType = stringtype in (httpCookie) and dataType = stringtype in (urlPattern) and dataType = stringtype in (urlQueryString) and dataType = stringtype in (requestOrResponseBody) and dataType = string

Copy
validation {
 required: false
 regexPattern: value
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | multipleValues | boolean | Yes | false | data type=boolean
Applies whentype = urlQueryString and type in (httpHeader) and type in (urlPattern) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (httpHeader) and type in (urlQueryString) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (httpHeader) and type in (requestOrResponseBody) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (httpHeader) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (httpHeader) and type in (httpCookie) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (httpCookie) and type in (urlPattern) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (httpCookie) and type in (urlQueryString) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (httpCookie) and type in (requestOrResponseBody) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (httpCookie) and type in (httpHeader) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (httpCookie) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (urlQueryString) and type in (urlPattern) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (urlQueryString) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (urlQueryString) and type in (requestOrResponseBody) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (urlQueryString) and type in (httpHeader) and static = false and omitWhenValueIsEmpty = truetype = urlQueryString and type in (urlQueryString) and type in (httpCookie) and static = false and omitWhenValueIsEmpty = true

 | separator | string | No | | data type=string; maxLen=5
Applies whentype = urlQueryString and type in (httpHeader) and type in (urlPattern) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (httpHeader) and type in (urlQueryString) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (httpHeader) and type in (requestOrResponseBody) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (httpHeader) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (httpHeader) and type in (httpCookie) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (httpCookie) and type in (urlPattern) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (httpCookie) and type in (urlQueryString) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (httpCookie) and type in (requestOrResponseBody) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (httpCookie) and type in (httpHeader) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (httpCookie) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (urlQueryString) and type in (urlPattern) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (urlQueryString) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (urlQueryString) and type in (requestOrResponseBody) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (urlQueryString) and type in (httpHeader) and static = false and omitWhenValueIsEmpty = true and multipleValues = truetype = urlQueryString and type in (urlQueryString) and type in (httpCookie) and static = false and omitWhenValueIsEmpty = true and multipleValues = true

Copy
multipleValues {
 multipleValues: false
 separator: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | useForRowSearch | boolean | Yes | false | data type=boolean
Applies whentype in (urlPattern) and static = falsetype in (urlQueryString) and static = falsetype in (requestOrResponseBody) and static = falsetype in (httpHeader) and static = falsetype in (httpCookie) and static = false

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 useForRowSearch: false
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
parameter sample (
 name: value
 operation: @component
 parameter {
 type: urlPattern
 dataType: string
 direction: in
 omitWhenValueIsEmpty: false
 }
 value {
 formatMask: value
 static: false
 defaultValueType: staticValue
 staticValue: ```
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
 validation {
 required: false
 regexPattern: value
 }
 multipleValues {
 multipleValues: false
 separator: value
 }
 advanced {
 useForRowSearch: false
 staticId: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

restDataSource http - APEXlang Reference

restDataSource (http)

Parent: restDataSource

Applies whentype = http
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
settings
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

settings

 | Property | Type | Required | Default Value | Details

 | paginationType | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: pageSizeAndPageNo pageNo pageSizeAndFetchOffset pageSizeAndPageToken

 | pageSizeUrlParam | string | No | | data type=string; maxLen=255
Applies whenpagination_type in (FLEXIBLE)pagination_type in (PAGE_NUMBER_FLEXIBLE_SIZE)pagination_type in (PAGE_TOKEN_FLEXIBLE_SIZE)

 | pageSizeMax | number | No | | data type=number; maxLen=10
Applies whenpagination_type in (PAGE_NUMBER_FLEXIBLE_SIZE)pagination_type in (FLEXIBLE)pagination_type in (PAGE_TOKEN_FLEXIBLE_SIZE)

 | pageNoUrlParam | string | Yes | | data type=string; maxLen=255
Applies whenpagination_type in (PAGE_NUMBER_FLEXIBLE_SIZE)pagination_type in (PAGE_NUMBER_FIXED_SIZE)

 | indexOfFirstPage | enum | Yes | 1 | data type=string; maxLen=4000; lov=STATIC
Valid values: 0 1
Applies whenpagination_type in (PAGE_NUMBER_FLEXIBLE_SIZE)pagination_type in (PAGE_NUMBER_FIXED_SIZE)

 | fixedPageSize | number | Yes | | data type=number; maxLen=10
Applies whenpagination_type = PAGE_NUMBER_FIXED_SIZE

 | rowOffsetUrlParam | string | Yes | | data type=string; maxLen=255
Applies whenpagination_type = FLEXIBLE

 | rowOffsetType | enum | Yes | rowsToSkip | data type=string; maxLen=4000; lov=STATIC
Valid values: rowsToSkip firstRowToFetch
Applies whenpagination_type = FLEXIBLE

 | hasMoreRowsSelector | string | No | | data type=string; maxLen=255
Applies whenpagination_type is set

 | hasMoreRowsWhenValue | enum | Yes | equals | data type=string; maxLen=4000; lov=STATIC
Valid values: isNotNull equals
Applies whenpagination_type is set and has_more_rows_selector is set

 | hasMoreRowsAttrValue | string | Yes | true | data type=string; maxLen=255
Applies whenpagination_type is set and has_more_rows_selector is set and has_more_rows_when_value = EQUALS

 | totalRowsSelector | string | No | | data type=string; maxLen=255
Applies whenpagination_type is set

 | pageTokenUrlParam | string | Yes | | data type=string; maxLen=4000
Applies whenpagination_type = PAGE_TOKEN_FLEXIBLE_SIZE

 | nextPageTokenSelector | string | Yes | | data type=string; maxLen=4000
Applies whenpagination_type = PAGE_TOKEN_FLEXIBLE_SIZE

Copy
settings {
 paginationType: pageSizeAndPageNo
 pageSizeUrlParam: value
 pageSizeMax: 42
 pageNoUrlParam: value
 indexOfFirstPage: "0"
 fixedPageSize: 42
 rowOffsetUrlParam: value
 rowOffsetType: rowsToSkip
 hasMoreRowsSelector: value
 hasMoreRowsWhenValue: isNotNull
 hasMoreRowsAttrValue: value
 totalRowsSelector: value
 pageTokenUrlParam: value
 nextPageTokenSelector: value
}

dataProfile

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | format | enum | Yes | json | data type=string; lov=STATIC
Valid values: csv json xml

 | rowSelector | string | No | | data type=string; maxLen=255

 | containsSingleRow | boolean | Yes | false | data type=boolean

 | singleRowSelector | string | No | | data type=string; maxLen=255

 | useRawSelectors | boolean | Yes | false | data type=boolean

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

 | csvSeparator | string | No | | data type=string; maxLen=5

 | csvEnclosedBy | string | No | | data type=string; maxLen=1

 | skipRows | number | No | | data type=number; maxLen=5

 | firstLineContainsHeaders | boolean | Yes | true | data type=boolean

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
 settings {
 paginationType: pageSizeAndPageNo
 pageSizeUrlParam: value
 pageSizeMax: 42
 pageNoUrlParam: value
 indexOfFirstPage: "0"
 fixedPageSize: 42
 rowOffsetUrlParam: value
 rowOffsetType: rowsToSkip
 hasMoreRowsSelector: value
 hasMoreRowsWhenValue: isNotNull
 hasMoreRowsAttrValue: value
 totalRowsSelector: value
 pageTokenUrlParam: value
 nextPageTokenSelector: value
 }
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

restDataSource oci - APEXlang Reference

restDataSource (oci)

Parent: restDataSource

Applies whentype = oci
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

 | containsSingleRow | boolean | Yes | false | data type=boolean

 | singleRowSelector | string | No | | data type=string; maxLen=255

 | useRawSelectors | boolean | Yes | false | data type=boolean

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

 | csvSeparator | string | No | | data type=string; maxLen=5

 | csvEnclosedBy | string | No | | data type=string; maxLen=1

 | skipRows | number | No | | data type=number; maxLen=5

 | firstLineContainsHeaders | boolean | Yes | true | data type=boolean

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

restDataSource odataRestService - APEXlang Reference

restDataSource (odataRestService)

Parent: restDataSource

Applies whentype = odataRestService
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
settings
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

settings

 | Property | Type | Required | Default Value | Details

 | resourcePath | string | Yes | | data type=string; maxLen=4000

 | paramDefaultValues | string | No | | data type=string; maxLen=4000

 | supportedOdataOptions | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: rowSearch returnSortedResults returnOnlySpecificCols resultsPagination supportsEtag

 | caseInsensitiveFiltering | enum | Yes | notSupported | data type=string; maxLen=4000; lov=STATIC
Valid values: basedOnUpperCase notSupported basedOnLowerCase

 | sendQueryOptions | enum | Yes | appendToUrl | data type=string; maxLen=4000; lov=STATIC
Valid values: passAsRequestBody appendToUrl

 | returnTotalResultCount | enum | Yes | notSupported | data type=string; maxLen=4000; lov=STATIC
Valid values: notSupported inlineInResponse inlineInResponseAllpages separateHttpRequest

 | supportedOdataFilters | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: contains in endsWith startsWith

Copy
settings {
 resourcePath: value
 paramDefaultValues: value
 supportedOdataOptions: rowSearch
 caseInsensitiveFiltering: basedOnUpperCase
 sendQueryOptions: passAsRequestBody
 returnTotalResultCount: notSupported
 supportedOdataFilters: contains
}

dataProfile

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | format | enum | Yes | json | data type=string; lov=STATIC
Valid values: csv json xml

 | rowSelector | string | No | | data type=string; maxLen=255

 | containsSingleRow | boolean | Yes | false | data type=boolean

 | singleRowSelector | string | No | | data type=string; maxLen=255

 | useRawSelectors | boolean | Yes | false | data type=boolean

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

 | csvSeparator | string | No | | data type=string; maxLen=5

 | csvEnclosedBy | string | No | | data type=string; maxLen=1

 | skipRows | number | No | | data type=number; maxLen=5

 | firstLineContainsHeaders | boolean | Yes | true | data type=boolean

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
 settings {
 resourcePath: value
 paramDefaultValues: value
 supportedOdataOptions: rowSearch
 caseInsensitiveFiltering: basedOnUpperCase
 sendQueryOptions: passAsRequestBody
 returnTotalResultCount: notSupported
 supportedOdataFilters: contains
 }
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

restDataSource oracleCloudAppsBoss - APEXlang Reference

restDataSource (oracleCloudAppsBoss)

Parent: restDataSource

Applies whentype = oracleCloudAppsBoss
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
settings
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

settings

 | Property | Type | Required | Default Value | Details

 | useBulkDml | boolean | Yes | true | data type=boolean

 | rootResourceName | string | No | | data type=string; maxLen=4000

 | useTotalResults | boolean | Yes | false | data type=boolean

 | usePagination | boolean | Yes | true | data type=boolean

 | resourceType | enum | Yes | businessObjectView | data type=string; maxLen=4000; lov=STATIC
Valid values: searchView businessObjectView extractionView

 | discoverReferences | boolean | Yes | false | data type=boolean

Copy
settings {
 useBulkDml: false
 rootResourceName: value
 useTotalResults: false
 usePagination: false
 resourceType: searchView
 discoverReferences: false
}

dataProfile

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | format | enum | Yes | json | data type=string; lov=STATIC
Valid values: csv json xml

 | rowSelector | string | No | | data type=string; maxLen=255

 | containsSingleRow | boolean | Yes | false | data type=boolean

 | singleRowSelector | string | No | | data type=string; maxLen=255

 | useRawSelectors | boolean | Yes | false | data type=boolean

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

 | csvSeparator | string | No | | data type=string; maxLen=5

 | csvEnclosedBy | string | No | | data type=string; maxLen=1

 | skipRows | number | No | | data type=number; maxLen=5

 | firstLineContainsHeaders | boolean | Yes | true | data type=boolean

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
 settings {
 useBulkDml: false
 rootResourceName: value
 useTotalResults: false
 usePagination: false
 resourceType: searchView
 discoverReferences: false
 }
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

restDataSource oracleCloudAppsSaas - APEXlang Reference

restDataSource (oracleCloudAppsSaas)

Parent: restDataSource

Applies whentype = oracleCloudAppsSaas
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
settings
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

settings

 | Property | Type | Required | Default Value | Details

 | useBatchDml | boolean | Yes | true | data type=boolean

 | rootResourceName | string | No | | data type=string; maxLen=4000

 | useTotalResults | boolean | Yes | false | data type=boolean

 | usePagination | boolean | Yes | true | data type=boolean

Copy
settings {
 useBatchDml: false
 rootResourceName: value
 useTotalResults: false
 usePagination: false
}

dataProfile

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | format | enum | Yes | json | data type=string; lov=STATIC
Valid values: csv json xml

 | rowSelector | string | No | | data type=string; maxLen=255

 | containsSingleRow | boolean | Yes | false | data type=boolean

 | singleRowSelector | string | No | | data type=string; maxLen=255

 | useRawSelectors | boolean | Yes | false | data type=boolean

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

 | csvSeparator | string | No | | data type=string; maxLen=5

 | csvEnclosedBy | string | No | | data type=string; maxLen=1

 | skipRows | number | No | | data type=number; maxLen=5

 | firstLineContainsHeaders | boolean | Yes | true | data type=boolean

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
 settings {
 useBatchDml: false
 rootResourceName: value
 useTotalResults: false
 usePagination: false
 }
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

restDataSource ords - APEXlang Reference

restDataSource (ords)

Parent: restDataSource

Applies whentype = ords
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
settings
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

settings

 | Property | Type | Required | Default Value | Details

 | returnsLegacyOrdsJson | boolean | Yes | false | data type=boolean

 | sortingNulls | enum | Yes | nullsHighest | data type=string; maxLen=4000; lov=STATIC
Valid values: flexible nullsHighest
Applies whenreturns_legacy_ords_json = N

Copy
settings {
 returnsLegacyOrdsJson: false
 sortingNulls: flexible
}

dataProfile

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | format | enum | Yes | json | data type=string; lov=STATIC
Valid values: csv json xml

 | rowSelector | string | No | | data type=string; maxLen=255

 | containsSingleRow | boolean | Yes | false | data type=boolean

 | singleRowSelector | string | No | | data type=string; maxLen=255

 | useRawSelectors | boolean | Yes | false | data type=boolean

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

 | csvSeparator | string | No | | data type=string; maxLen=5

 | csvEnclosedBy | string | No | | data type=string; maxLen=1

 | skipRows | number | No | | data type=number; maxLen=5

 | firstLineContainsHeaders | boolean | Yes | true | data type=boolean

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
 settings {
 returnsLegacyOrdsJson: false
 sortingNulls: flexible
 }
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

restDataSource restEnabledSqlQuery - APEXlang Reference

restDataSource (restEnabledSqlQuery)

Parent: restDataSource

Applies whentype = restEnabledSqlQuery
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
settings
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

settings

 | Property | Type | Required | Default Value | Details

 | sqlQuery | string | Yes | | data type=string; maxLen=4000

Copy
settings {
 sqlQuery: value
}

dataProfile

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | format | enum | Yes | json | data type=string; lov=STATIC
Valid values: csv json xml

 | rowSelector | string | No | | data type=string; maxLen=255

 | containsSingleRow | boolean | Yes | false | data type=boolean

 | singleRowSelector | string | No | | data type=string; maxLen=255

 | useRawSelectors | boolean | Yes | false | data type=boolean

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

 | csvSeparator | string | No | | data type=string; maxLen=5

 | csvEnclosedBy | string | No | | data type=string; maxLen=1

 | skipRows | number | No | | data type=number; maxLen=5

 | firstLineContainsHeaders | boolean | Yes | true | data type=boolean

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
 settings {
 sqlQuery: value
 }
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

synchronizationStep - APEXlang Reference

synchronizationStep

Parent: restDataSource

Applies whenlocalTableName is set
Children: parameter

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Property Groups:
execution
externalFilter
comments

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | active | boolean | Yes | true | data type=boolean

Copy
execution {
 sequence: 42
 active: false
}

externalFilter

 | Property | Type | Required | Default Value | Details

 | filter | multiline string | No | | data type=multiline string; maxLen=4000

Copy
externalFilter {
 filter: ```
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
synchronizationStep sample (
 staticId: value
 execution {
 sequence: 42
 active: false
 }
 externalFilter {
 filter: ```
 value
 ```
 }
 comments {
 comments: ```
 value
 ```
 }
)
