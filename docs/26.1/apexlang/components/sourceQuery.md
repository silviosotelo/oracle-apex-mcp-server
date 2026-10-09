# APEXlang: componentes con padre `sourceQuery` (APEX 26.1)


---

parameter - APEXlang Reference

parameter

Parent: sourceQuery

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
