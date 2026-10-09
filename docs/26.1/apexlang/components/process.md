# APEXlang: componentes con padre `process` (APEX 26.1)


---

basicAuthenticationParameter - APEXlang Reference

basicAuthenticationParameter

Parent: process

Applies whentype in (webService)type in (legacyWebService)
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | parameterId | string | Yes | | data type=string; maxLen=32767

 | name | string | No | | data type=string; maxLen=255

Property Groups:
parameter

parameter

 | Property | Type | Required | Default Value | Details

 | source | enum | Yes | | data type=string; lov=STATIC
Valid values: item staticValue plsqlFunctionBody

 | staticValue | string | No | | data type=string; maxLen=32767
Applies whensource = staticValue

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whensource = item

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whensource = plsqlFunctionBody

Copy
parameter {
 source: item
 staticValue: value
 item: value
 plsqlFunctionBody: ```plsql
 value
 ```
}

APEXlang Example

Copy
basicAuthenticationParameter sample (
 parameterId: value
 name: value
 parameter {
 source: item
 staticValue: value
 item: value
 plsqlFunctionBody: ```plsql
 value
 ```
 }
)

---

inParameter - APEXlang Reference

inParameter

Parent: process

Applies whentype in (webService)type in (legacyWebService)
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | parameterId | string | Yes | | data type=string; maxLen=32767

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
parameter

parameter

 | Property | Type | Required | Default Value | Details

 | source | enum | Yes | | data type=string; lov=STATIC
Valid values: item staticValue plsqlFunctionBody

 | staticValue | string | No | | data type=string; maxLen=32767
Applies whensource = staticValue

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whensource = item

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whensource = plsqlFunctionBody

Copy
parameter {
 source: item
 staticValue: value
 item: value
 plsqlFunctionBody: ```plsql
 value
 ```
}

APEXlang Example

Copy
inParameter sample (
 parameterId: value
 name: value
 parameter {
 source: item
 staticValue: value
 item: value
 plsqlFunctionBody: ```plsql
 value
 ```
 }
)

---

outParameter - APEXlang Reference

outParameter

Parent: process

Applies whentype in (webService)type in (legacyWebService)
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | parameterId | string | Yes | | data type=string; maxLen=32767

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
parameter

parameter

 | Property | Type | Required | Default Value | Details

 | items | array of strings | No | | data type=string; maxLen=32767; textCase=UPPER

Copy
parameter {
 items: [
 value
 value
 ]
}

APEXlang Example

Copy
outParameter sample (
 parameterId: value
 name: value
 parameter {
 items: [
 value
 value
 ]
 }
)

---

parameter - APEXlang Reference

parameter

Parent: process

Applies whentype = WEB_SOURCE
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | reference | Yes | | data type=reference; lov=COMPONENT; references=parameter

Property Groups:
parameter
value

parameter

 | Property | Type | Required | Default Value | Details

 | ignoreOutput | boolean | Yes | true | data type=boolean
Applies whenname supports IN_OUT_PARAMETERname supports OUT_PARAMETER

Copy
parameter {
 ignoreOutput: false
}

value

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: staticValue restSourceDefault item sqlQuery expression functionBody collectionClob preference null
Applies whenname supports IN_PARAMETERname supports IN_OUT_PARAMETERname supports IN_OUT_PARAMETER and ignoreOutput = falsename supports OUT_PARAMETER and ignoreOutput = false

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = staticValue and name does not support BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and type = staticValue and name does not support BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and ignoreOutput = false and type = staticValue and name does not support BOOLEAN_PARAMETERname supports OUT_PARAMETER and ignoreOutput = false and type = staticValue and name does not support BOOLEAN_PARAMETER

 | staticValue | enum | Yes | | data type=string; lov=STATIC
Valid values: true false
Applies whenname supports IN_PARAMETER and type = staticValue and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and type = staticValue and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and ignoreOutput = false and type = staticValue and name supports BOOLEAN_PARAMETERname supports OUT_PARAMETER and ignoreOutput = false and type = staticValue and name supports BOOLEAN_PARAMETER

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = sqlQueryname supports IN_OUT_PARAMETER and type = sqlQueryname supports IN_OUT_PARAMETER and ignoreOutput = false and type = sqlQueryname supports OUT_PARAMETER and ignoreOutput = false and type = sqlQuery

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whenname supports IN_PARAMETER and type = itemname supports IN_OUT_PARAMETER and type = itemname supports IN_OUT_PARAMETER and ignoreOutput = false and type = itemname supports OUT_PARAMETER and ignoreOutput = false and type = item

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whenname supports IN_PARAMETER and type = expressionname supports IN_OUT_PARAMETER and type = expressionname supports IN_OUT_PARAMETER and ignoreOutput = false and type = expressionname supports OUT_PARAMETER and ignoreOutput = false and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = expression and language = sqlname supports IN_OUT_PARAMETER and type = expression and language = sqlname supports IN_OUT_PARAMETER and ignoreOutput = false and type = expression and language = sqlname supports OUT_PARAMETER and ignoreOutput = false and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = expression and language = plsqlname supports IN_OUT_PARAMETER and type = expression and language = plsqlname supports IN_OUT_PARAMETER and ignoreOutput = false and type = expression and language = plsqlname supports OUT_PARAMETER and ignoreOutput = false and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = expression and language = javaScript-mlename supports IN_OUT_PARAMETER and type = expression and language = javaScript-mlename supports IN_OUT_PARAMETER and ignoreOutput = false and type = expression and language = javaScript-mlename supports OUT_PARAMETER and ignoreOutput = false and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenname supports IN_PARAMETER and type = functionBodyname supports IN_OUT_PARAMETER and type = functionBodyname supports IN_OUT_PARAMETER and ignoreOutput = false and type = functionBodyname supports OUT_PARAMETER and ignoreOutput = false and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = functionBody and language = plsqlname supports IN_OUT_PARAMETER and type = functionBody and language = plsqlname supports IN_OUT_PARAMETER and ignoreOutput = false and type = functionBody and language = plsqlname supports OUT_PARAMETER and ignoreOutput = false and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = functionBody and language = javaScript-mlename supports IN_OUT_PARAMETER and type = functionBody and language = javaScript-mlename supports IN_OUT_PARAMETER and ignoreOutput = false and type = functionBody and language = javaScript-mlename supports OUT_PARAMETER and ignoreOutput = false and type = functionBody and language = javaScript-mle

 | preference | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whenname supports IN_PARAMETER and type = preferencename supports IN_OUT_PARAMETER and type = preferencename supports IN_OUT_PARAMETER and ignoreOutput = false and type = preferencename supports OUT_PARAMETER and ignoreOutput = false and type = preference

 | name | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whenname supports IN_PARAMETER and type = collectionClobname supports IN_OUT_PARAMETER and type = collectionClobname supports IN_OUT_PARAMETER and ignoreOutput = false and type = collectionClobname supports OUT_PARAMETER and ignoreOutput = false and type = collectionClob

 | formatMask | string | No | | data type=string; maxLen=255
Applies whenname supports NUMBER_PARAMETER and name supports IN_PARAMETER and type in (staticValue)name supports NUMBER_PARAMETER and name supports IN_PARAMETER and type in (item)name supports NUMBER_PARAMETER and name supports IN_PARAMETER and type in (preference)name supports NUMBER_PARAMETER and name supports IN_OUT_PARAMETER and type in (staticValue)name supports NUMBER_PARAMETER and name supports IN_OUT_PARAMETER and type in (item)name supports NUMBER_PARAMETER and name supports IN_OUT_PARAMETER and type in (preference)name supports NUMBER_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (staticValue)name supports NUMBER_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (item)name supports NUMBER_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (preference)name supports NUMBER_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (staticValue)name supports NUMBER_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (item)name supports NUMBER_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (preference)name supports DATE_PARAMETER and name supports IN_PARAMETER and type in (staticValue)name supports DATE_PARAMETER and name supports IN_PARAMETER and type in (item)name supports DATE_PARAMETER and name supports IN_PARAMETER and type in (preference)name supports DATE_PARAMETER and name supports IN_OUT_PARAMETER and type in (staticValue)name supports DATE_PARAMETER and name supports IN_OUT_PARAMETER and type in (item)name supports DATE_PARAMETER and name supports IN_OUT_PARAMETER and type in (preference)name supports DATE_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (staticValue)name supports DATE_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (item)name supports DATE_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (preference)name supports DATE_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (staticValue)name supports DATE_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (item)name supports DATE_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (preference)name supports TIMESTAMP_PARAMETER and name supports IN_PARAMETER and type in (staticValue)name supports TIMESTAMP_PARAMETER and name supports IN_PARAMETER and type in (item)name supports TIMESTAMP_PARAMETER and name supports IN_PARAMETER and type in (preference)name supports TIMESTAMP_PARAMETER and name supports IN_OUT_PARAMETER and type in (staticValue)name supports TIMESTAMP_PARAMETER and name supports IN_OUT_PARAMETER and type in (item)name supports TIMESTAMP_PARAMETER and name supports IN_OUT_PARAMETER and type in (preference)name supports TIMESTAMP_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (staticValue)name supports TIMESTAMP_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (item)name supports TIMESTAMP_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (preference)name supports TIMESTAMP_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (staticValue)name supports TIMESTAMP_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (item)name supports TIMESTAMP_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (preference)name supports TIMESTAMP_TZ_PARAMETER and name supports IN_PARAMETER and type in (staticValue)name supports TIMESTAMP_TZ_PARAMETER and name supports IN_PARAMETER and type in (item)name supports TIMESTAMP_TZ_PARAMETER and name supports IN_PARAMETER and type in (preference)name supports TIMESTAMP_TZ_PARAMETER and name supports IN_OUT_PARAMETER and type in (staticValue)name supports TIMESTAMP_TZ_PARAMETER and name supports IN_OUT_PARAMETER and type in (item)name supports TIMESTAMP_TZ_PARAMETER and name supports IN_OUT_PARAMETER and type in (preference)name supports TIMESTAMP_TZ_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (staticValue)name supports TIMESTAMP_TZ_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (item)name supports TIMESTAMP_TZ_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (preference)name supports TIMESTAMP_TZ_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (staticValue)name supports TIMESTAMP_TZ_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (item)name supports TIMESTAMP_TZ_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (preference)
Format mask to convert the Static, Item or Preference value to the data type of the REST Source Parameter.

 | trueValue | string | No | | data type=string; maxLen=10
Applies whenname supports BOOLEAN_PARAMETER and name supports IN_PARAMETER and type in (item)name supports BOOLEAN_PARAMETER and name supports IN_PARAMETER and type in (preference)name supports BOOLEAN_PARAMETER and name supports IN_OUT_PARAMETER and type in (item)name supports BOOLEAN_PARAMETER and name supports IN_OUT_PARAMETER and type in (preference)name supports BOOLEAN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (item)name supports BOOLEAN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (preference)name supports BOOLEAN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (item)name supports BOOLEAN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (preference)

 | falseValue | string | No | | data type=string; maxLen=10
Applies whenname supports BOOLEAN_PARAMETER and name supports IN_PARAMETER and type in (item)name supports BOOLEAN_PARAMETER and name supports IN_PARAMETER and type in (preference)name supports BOOLEAN_PARAMETER and name supports IN_OUT_PARAMETER and type in (item)name supports BOOLEAN_PARAMETER and name supports IN_OUT_PARAMETER and type in (preference)name supports BOOLEAN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (item)name supports BOOLEAN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = false and type in (preference)name supports BOOLEAN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (item)name supports BOOLEAN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = false and type in (preference)

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
 parameter {
 ignoreOutput: false
 }
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

---

parameter - APEXlang Reference

parameter

Parent: process

Applies whentype in (PLSQL_PACKAGE)type in (PLSQL_PROCEDURE_FUNCTION)
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | parameter | data type=string; lov=STATIC
Valid values: parameter functionResult

 | name | string | Yes | p_ | data type=string; maxLen=255
Applies whentype = parameter
Enter the name of a parameter declared in the selected procedure or function.

Property Groups:
parameter
value
advanced
comments

parameter

 | Property | Type | Required | Default Value | Details

 | direction | enum | Yes | in | data type=string; lov=STATIC
Valid values: in out inOut
Applies whentype = parameter

 | dataType | enum | Yes | varchar2 | data type=string; lov=STATIC
Valid values: varchar2 clob number plsqlInteger boolean date timestamp timestampWithLocalTimeZone timestampWithTimeZone intervalYearToMonth intervalDayToSecond blob char rowid custom

 | dataTypeName | string | Yes | | data type=string; maxLen=32767
Applies whendataType = custom

 | hasDefault | boolean | Yes | false | data type=boolean
Applies whentype = parameter and direction = in

 | ignoreOutput | boolean | Yes | false | data type=boolean
Applies whentype = parameter and direction in (inOut)type = parameter and direction in (out)

Copy
parameter {
 direction: in
 dataType: varchar2
 dataTypeName: value
 hasDefault: false
 ignoreOutput: false
}

value

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: staticValue item sqlQuery expression functionBody preference apiDefault null
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = truetype = parameter and direction in (in) and direction in (out) and ignoreOutput = truetype = parameter and direction in (inOut) and ignoreOutput = truetype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = staticValuetype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = staticValuetype = parameter and direction in (inOut) and ignoreOutput = true and type = staticValuetype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = staticValue

 | staticValue | enum | Yes | | data type=string; lov=STATIC
Valid values: true false
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = staticValue and dataType = booleantype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = staticValue and dataType = booleantype = parameter and direction in (inOut) and ignoreOutput = true and type = staticValue and dataType = booleantype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = staticValue and dataType = boolean

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = sqlQuerytype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = sqlQuerytype = parameter and direction in (inOut) and ignoreOutput = true and type = sqlQuerytype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = sqlQuery

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = itemtype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = itemtype = parameter and direction in (inOut) and ignoreOutput = true and type = itemtype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = itemtype = parameter and direction in (inOut) and ignoreOutput = falsetype = parameter and direction in (out) and ignoreOutput = false

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = expressiontype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = expressiontype = parameter and direction in (inOut) and ignoreOutput = true and type = expressiontype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = expression and language = sqltype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = expression and language = sqltype = parameter and direction in (inOut) and ignoreOutput = true and type = expression and language = sqltype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = expression and language = plsqltype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = expression and language = plsqltype = parameter and direction in (inOut) and ignoreOutput = true and type = expression and language = plsqltype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = expression and language = javaScript-mletype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = expression and language = javaScript-mletype = parameter and direction in (inOut) and ignoreOutput = true and type = expression and language = javaScript-mletype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = functionBodytype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = functionBodytype = parameter and direction in (inOut) and ignoreOutput = true and type = functionBodytype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = functionBody and language = plsqltype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = functionBody and language = plsqltype = parameter and direction in (inOut) and ignoreOutput = true and type = functionBody and language = plsqltype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = functionBody and language = javaScript-mletype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = functionBody and language = javaScript-mletype = parameter and direction in (inOut) and ignoreOutput = true and type = functionBody and language = javaScript-mletype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = functionBody and language = javaScript-mle

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = expression and dataType = customtype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = expression and dataType = customtype = parameter and direction in (inOut) and ignoreOutput = true and type = expression and dataType = customtype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = expression and dataType = custom

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = functionBody and dataType = customtype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = functionBody and dataType = customtype = parameter and direction in (inOut) and ignoreOutput = true and type = functionBody and dataType = customtype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = functionBody and dataType = custom

 | preference | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type = preferencetype = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type = preferencetype = parameter and direction in (inOut) and ignoreOutput = true and type = preferencetype = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type = preference

 | formatMask | string | No | | data type=string; maxLen=255
Applies whendataType in (number) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (staticValue)dataType in (number) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (item)dataType in (number) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (preference)dataType in (number) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (staticValue)dataType in (number) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (item)dataType in (number) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (preference)dataType in (number) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (staticValue)dataType in (number) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (item)dataType in (number) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (preference)dataType in (number) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (staticValue)dataType in (number) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (item)dataType in (number) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (preference)dataType in (number) and type = parameter and direction in (inOut) and ignoreOutput = falsedataType in (number) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = falsedataType in (number) and type = parameter and direction in (out) and direction in (inOut) and ignoreOutput = falsedataType in (number) and type = parameter and direction in (out) and ignoreOutput = falsedataType in (number) and type = functionResultdataType in (date) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (staticValue)dataType in (date) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (item)dataType in (date) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (preference)dataType in (date) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (staticValue)dataType in (date) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (item)dataType in (date) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (preference)dataType in (date) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (staticValue)dataType in (date) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (item)dataType in (date) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (preference)dataType in (date) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (staticValue)dataType in (date) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (item)dataType in (date) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (preference)dataType in (date) and type = parameter and direction in (inOut) and ignoreOutput = falsedataType in (date) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = falsedataType in (date) and type = parameter and direction in (out) and direction in (inOut) and ignoreOutput = falsedataType in (date) and type = parameter and direction in (out) and ignoreOutput = falsedataType in (date) and type = functionResultdataType in (timestamp) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (staticValue)dataType in (timestamp) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (item)dataType in (timestamp) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (preference)dataType in (timestamp) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (staticValue)dataType in (timestamp) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (item)dataType in (timestamp) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (preference)dataType in (timestamp) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (staticValue)dataType in (timestamp) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (item)dataType in (timestamp) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (preference)dataType in (timestamp) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (staticValue)dataType in (timestamp) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (item)dataType in (timestamp) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (preference)dataType in (timestamp) and type = parameter and direction in (inOut) and ignoreOutput = falsedataType in (timestamp) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = falsedataType in (timestamp) and type = parameter and direction in (out) and direction in (inOut) and ignoreOutput = falsedataType in (timestamp) and type = parameter and direction in (out) and ignoreOutput = falsedataType in (timestamp) and type = functionResultdataType in (timestampWithTimeZone) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (staticValue)dataType in (timestampWithTimeZone) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (item)dataType in (timestampWithTimeZone) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (preference)dataType in (timestampWithTimeZone) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (staticValue)dataType in (timestampWithTimeZone) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (item)dataType in (timestampWithTimeZone) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (preference)dataType in (timestampWithTimeZone) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (staticValue)dataType in (timestampWithTimeZone) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (item)dataType in (timestampWithTimeZone) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (preference)dataType in (timestampWithTimeZone) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (staticValue)dataType in (timestampWithTimeZone) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (item)dataType in (timestampWithTimeZone) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (preference)dataType in (timestampWithTimeZone) and type = parameter and direction in (inOut) and ignoreOutput = falsedataType in (timestampWithTimeZone) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = falsedataType in (timestampWithTimeZone) and type = parameter and direction in (out) and direction in (inOut) and ignoreOutput = falsedataType in (timestampWithTimeZone) and type = parameter and direction in (out) and ignoreOutput = falsedataType in (timestampWithTimeZone) and type = functionResultdataType in (timestampWithLocalTimeZone) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (staticValue)dataType in (timestampWithLocalTimeZone) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (item)dataType in (timestampWithLocalTimeZone) and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (preference)dataType in (timestampWithLocalTimeZone) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (staticValue)dataType in (timestampWithLocalTimeZone) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (item)dataType in (timestampWithLocalTimeZone) and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (preference)dataType in (timestampWithLocalTimeZone) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (staticValue)dataType in (timestampWithLocalTimeZone) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (item)dataType in (timestampWithLocalTimeZone) and type = parameter and direction in (inOut) and ignoreOutput = true and type in (preference)dataType in (timestampWithLocalTimeZone) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (staticValue)dataType in (timestampWithLocalTimeZone) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (item)dataType in (timestampWithLocalTimeZone) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (preference)dataType in (timestampWithLocalTimeZone) and type = parameter and direction in (inOut) and ignoreOutput = falsedataType in (timestampWithLocalTimeZone) and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = falsedataType in (timestampWithLocalTimeZone) and type = parameter and direction in (out) and direction in (inOut) and ignoreOutput = falsedataType in (timestampWithLocalTimeZone) and type = parameter and direction in (out) and ignoreOutput = falsedataType in (timestampWithLocalTimeZone) and type = functionResult

 | trueValue | string | No | | data type=string; maxLen=10
Applies whendataType = boolean and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (item)dataType = boolean and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (preference)dataType = boolean and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (item)dataType = boolean and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (preference)dataType = boolean and type = parameter and direction in (inOut) and ignoreOutput = true and type in (item)dataType = boolean and type = parameter and direction in (inOut) and ignoreOutput = true and type in (preference)dataType = boolean and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (item)dataType = boolean and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (preference)dataType = boolean and type = parameter and direction in (inOut) and ignoreOutput = falsedataType = boolean and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = falsedataType = boolean and type = parameter and direction in (out) and direction in (inOut) and ignoreOutput = falsedataType = boolean and type = parameter and direction in (out) and ignoreOutput = falsedataType = boolean and type = functionResult

 | falseValue | string | No | | data type=string; maxLen=10
Applies whendataType = boolean and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (item)dataType = boolean and type = parameter and direction in (in) and direction in (inOut) and ignoreOutput = true and type in (preference)dataType = boolean and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (item)dataType = boolean and type = parameter and direction in (in) and direction in (out) and ignoreOutput = true and type in (preference)dataType = boolean and type = parameter and direction in (inOut) and ignoreOutput = true and type in (item)dataType = boolean and type = parameter and direction in (inOut) and ignoreOutput = true and type in (preference)dataType = boolean and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (item)dataType = boolean and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = true and type in (preference)dataType = boolean and type = parameter and direction in (inOut) and ignoreOutput = falsedataType = boolean and type = parameter and direction in (inOut) and direction in (out) and ignoreOutput = falsedataType = boolean and type = parameter and direction in (out) and direction in (inOut) and ignoreOutput = falsedataType = boolean and type = parameter and direction in (out) and ignoreOutput = falsedataType = boolean and type = functionResult

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
 formatMask: value
 trueValue: value
 falseValue: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | displaySequence | integer | Yes | | data type=integer; maxLen=32767

Copy
advanced {
 displaySequence: 42
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
 type: parameter
 name: value
 parameter {
 direction: in
 dataType: varchar2
 dataTypeName: value
 hasDefault: false
 ignoreOutput: false
 }
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
 formatMask: value
 trueValue: value
 falseValue: value
 }
 advanced {
 displaySequence: 42
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

Parent: process

Applies whentype = humanTaskCreate
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | reference | Yes | | data type=reference; lov=COMPONENT; references=parameter

Property Groups:
value

value

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | staticValue | data type=string; lov=STATIC
Valid values: staticValue item sqlQuery expression functionBody preference null

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = staticValue

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
 }
)

---

parameter - APEXlang Reference

parameter

Parent: process

Applies whentype = workflow and type = START
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | reference | Yes | | data type=reference; lov=COMPONENT; references=parameter

Property Groups:
value

value

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | item | data type=string; lov=STATIC
Valid values: staticValue item sqlQuery expression functionBody preference default null
Applies whenname supports IN_PARAMETERname supports IN_OUT_PARAMETER

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = staticValue and name does not support BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and type = staticValue and name does not support BOOLEAN_PARAMETER

 | staticValue | enum | Yes | | data type=string; lov=STATIC
Valid values: true false
Applies whenname supports IN_PARAMETER and type = staticValue and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and type = staticValue and name supports BOOLEAN_PARAMETER

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = sqlQueryname supports IN_OUT_PARAMETER and type = sqlQuery

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whenname supports IN_PARAMETER and type = itemname supports IN_OUT_PARAMETER and type = item

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whenname supports IN_PARAMETER and type = expressionname supports IN_OUT_PARAMETER and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = expression and language = sqlname supports IN_OUT_PARAMETER and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = expression and language = plsqlname supports IN_OUT_PARAMETER and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = expression and language = javaScript-mlename supports IN_OUT_PARAMETER and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenname supports IN_PARAMETER and type = functionBodyname supports IN_OUT_PARAMETER and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = functionBody and language = plsqlname supports IN_OUT_PARAMETER and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and type = functionBody and language = javaScript-mlename supports IN_OUT_PARAMETER and type = functionBody and language = javaScript-mle

 | formatMask | string | No | | data type=string; maxLen=255
Applies whenname supports NUMBER_PARAMETER and name supports IN_PARAMETER and type in (staticValue)name supports NUMBER_PARAMETER and name supports IN_PARAMETER and type in (item)name supports NUMBER_PARAMETER and name supports IN_OUT_PARAMETER and type in (staticValue)name supports NUMBER_PARAMETER and name supports IN_OUT_PARAMETER and type in (item)name supports TIMESTAMP_PARAMETER and name supports IN_PARAMETER and type in (staticValue)name supports TIMESTAMP_PARAMETER and name supports IN_PARAMETER and type in (item)name supports TIMESTAMP_PARAMETER and name supports IN_OUT_PARAMETER and type in (staticValue)name supports TIMESTAMP_PARAMETER and name supports IN_OUT_PARAMETER and type in (item)name supports TIMESTAMP_TZ__PARAMETER and name supports IN_PARAMETER and type in (staticValue)name supports TIMESTAMP_TZ__PARAMETER and name supports IN_PARAMETER and type in (item)name supports TIMESTAMP_TZ__PARAMETER and name supports IN_OUT_PARAMETER and type in (staticValue)name supports TIMESTAMP_TZ__PARAMETER and name supports IN_OUT_PARAMETER and type in (item)name supports TIMESTAMP_LTZ__PARAMETER and name supports IN_PARAMETER and type in (staticValue)name supports TIMESTAMP_LTZ__PARAMETER and name supports IN_PARAMETER and type in (item)name supports TIMESTAMP_LTZ__PARAMETER and name supports IN_OUT_PARAMETER and type in (staticValue)name supports TIMESTAMP_LTZ__PARAMETER and name supports IN_OUT_PARAMETER and type in (item)
Format mask to convert the Static or Item value to the data type of the workflow parameter.

 | trueValue | string | No | | data type=string; maxLen=10
Applies whenname supports IN_PARAMETER and type in (item) and name supports BOOLEAN_PARAMETERname supports IN_PARAMETER and type in (preference) and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and type in (item) and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and type in (preference) and name supports BOOLEAN_PARAMETER

 | falseValue | string | No | | data type=string; maxLen=10
Applies whenname supports IN_PARAMETER and type in (item) and name supports BOOLEAN_PARAMETERname supports IN_PARAMETER and type in (preference) and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and type in (item) and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and type in (preference) and name supports BOOLEAN_PARAMETER

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
 formatMask: value
 trueValue: value
 falseValue: value
 }
)

---

process autoRowFetch - APEXlang Reference

process (autoRowFetch)

Parent: process

Applies whentype = autoRowFetch
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
source
genAI
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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
Enter the PL/SQL code to be executed on the remote database.

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

Copy
genAI {
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
}

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 genAI {
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
 }
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process autoRowProcessing - APEXlang Reference

process (autoRowProcessing)

Parent: process

Applies whentype = autoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
target
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process clearSessionState - APEXlang Reference

process (clearSessionState)

Parent: process

Applies whentype = clearSessionState
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
clear
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 clear {
 type: apps
 applications: value
 items: value
 pages: 42
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process closeDialog - APEXlang Reference

process (closeDialog)

Parent: process

Applies whentype = closeDialog
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
settings
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | itemsToReturn | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | showSuccessMessages | boolean | Yes | true | data type=boolean

Copy
settings {
 itemsToReturn: value
 showSuccessMessages: false
}

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 settings {
 itemsToReturn: value
 showSuccessMessages: false
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process dataLoading - APEXlang Reference

process (dataLoading)

Parent: process

Applies whentype = dataLoading
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
dataLoading
sourceData
processingResult
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process download - APEXlang Reference

process (download)

Parent: process

Applies whentype = download
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
fileHandling
source
genAI
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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
Enter the PL/SQL code to be executed on the remote database.

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

Copy
genAI {
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
}

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 genAI {
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
 }
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process executeCode - APEXlang Reference

process (executeCode)

Parent: process

Applies whentype = executeCode
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process executionChain - APEXlang Reference

process (executionChain)

Parent: process

Applies whentype = executionChain
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
backgroundExecution
serialization
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process formAutoRowProcessing - APEXlang Reference

process (formAutoRowProcessing)

Parent: process

Applies whentype = formAutoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
target
lockRow
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process formInitialization - APEXlang Reference

process (formInitialization)

Parent: process

Applies whentype = formInitialization
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
navigation
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 navigation {
 nextPkItems: value
 prevPkItems: value
 currentRowTotalItem: value
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process formPagination - APEXlang Reference

process (formPagination)

Parent: process

Applies whentype = formPagination
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
target
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process generateTextWithAi - APEXlang Reference

process (generateTextWithAi)

Parent: process

Applies whentype = generateTextWithAi
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
inputValue
useResponse
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process humanTaskCreate - APEXlang Reference

process (humanTaskCreate)

Parent: process

Applies whentype = humanTaskCreate
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
humanTask
overrides
settings
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process humanTaskManage - APEXlang Reference

process (humanTaskManage)

Parent: process

Applies whentype = humanTaskManage
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
action
humanTask
renew
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process interactiveGridAutoRowProcessing - APEXlang Reference

process (interactiveGridAutoRowProcessing)

Parent: process

Applies whentype = interactiveGridAutoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
target
lockRow
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process invokeApi - APEXlang Reference

process (invokeApi)

Parent: process

Applies whentype = invokeApi
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
invoke
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 invoke {
 type: restSource
 owner: value
 package: value
 procedureOrFunction: value
 restSource: @component
 operation: @component
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process invokeWorkflow - APEXlang Reference

process (invokeWorkflow)

Parent: process

Applies whentype = invokeWorkflow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
workflow
processing
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process legacyAutoRowProcessing - APEXlang Reference

process (legacyAutoRowProcessing)

Parent: process

Applies whentype = legacyAutoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
target
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 target {
 type: insert
 tableOwner: value
 tableName: value
 pkItem: value
 pkColumn: value
 runtimeWhereClause: value
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process legacyWebService - APEXlang Reference

process (legacyWebService)

Parent: process

Applies whentype = legacyWebService
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
settings
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 settings {
 webServiceReference: 42
 storeResultIn: items
 collectionName: value
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process loadUploadedData - APEXlang Reference

process (loadUploadedData)

Parent: process

Applies whentype = loadUploadedData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
dataLoading
processingResult
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 dataLoading {
 dataLoadDefinition: @component
 }
 processingResult {
 insertCountItem: value
 updateCountItem: value
 errorCountItem: value
 reviewCountItem: value
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process parallelFlow - APEXlang Reference

process (parallelFlow)

Parent: process

Applies whentype = parallelFlow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process parseUploadedData - APEXlang Reference

process (parseUploadedData)

Parent: process

Applies whentype = parseUploadedData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
dataLoading
sourceData
parsingOptions
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process prepareUploadedData - APEXlang Reference

process (prepareUploadedData)

Parent: process

Applies whentype = prepareUploadedData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
dataLoading
processingResult
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 dataLoading {
 dataLoadDefinition: @component
 }
 processingResult {
 insertCountItem: value
 updateCountItem: value
 errorCountItem: value
 reviewCountItem: value
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process printReport - APEXlang Reference

process (printReport)

Parent: process

Applies whentype = printReport
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
source
genAI
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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
Enter the PL/SQL code to be executed on the remote database.

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

Copy
genAI {
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
}

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 genAI {
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
 }
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process resetPagination - APEXlang Reference

process (resetPagination)

Parent: process

Applies whentype = resetPagination
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
resetPagination
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 resetPagination {
 target: pages
 pages: 42
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process sendEMail - APEXlang Reference

process (sendEMail)

Parent: process

Applies whentype = sendEMail
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
emailHeader
emailContent
emailAttachments
emailDispatchMode
emailTemplate
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process sendPushNotification - APEXlang Reference

process (sendPushNotification)

Parent: process

Applies whentype = sendPushNotification
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
settings
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 settings {
 to: value
 title: value
 body: value
 linkTarget: value
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process serverSideGeocoding - APEXlang Reference

process (serverSideGeocoding)

Parent: process

Applies whentype = serverSideGeocoding
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
geocodingInput
address
geocodingResult
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process switch - APEXlang Reference

process (switch)

Parent: process

Applies whentype = switch
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
switch
compare
condition
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process tabformAddRows - APEXlang Reference

process (tabformAddRows)

Parent: process

Applies whentype = tabformAddRows
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
target
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

target

 | Property | Type | Required | Default Value | Details

 | noOfRows | integer | Yes | 1 | data type=integer

Copy
target {
 noOfRows: 42
}

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 target {
 noOfRows: 42
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process tabformDelete - APEXlang Reference

process (tabformDelete)

Parent: process

Applies whentype = tabformDelete
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
target
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 target {
 tableOwner: value
 tableName: value
 pkColumn: value
 secondaryKeyColumn: value
 runtimeWhereClause: value
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process tabformUpdate - APEXlang Reference

process (tabformUpdate)

Parent: process

Applies whentype = tabformUpdate
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
target
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 target {
 tableOwner: value
 tableName: value
 pkColumn: value
 secondaryKeyColumn: value
 runtimeWhereClause: value
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process userPreferences - APEXlang Reference

process (userPreferences)

Parent: process

Applies whentype = userPreferences
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
action
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 action {
 type: setToItemValue
 preferenceName: value
 item: value
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process wait - APEXlang Reference

process (wait)

Parent: process

Applies whentype = wait
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
timeout
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

timeout

 | Property | Type | Required | Default Value | Details

 | timeoutType | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: sqlQuery expression functionBody static

 | sqlQuery | string | Yes | | data type=string; maxLen=4000
Applies whentimeout_type = SQL_QUERY

 | plsqlExpression | string | Yes | | data type=string; maxLen=4000
Applies whenlang_expression = PLSQL

 | plsqlFunctionBody | string | Yes | | data type=string; maxLen=4000
Applies whentimeout_type = FUNCTION_BODY and lang_function_body = PLSQL

 | staticValue | string | Yes | | data type=string; maxLen=4000
Applies whentimeout_type = STATIC

 | javascriptExpression | string | Yes | | data type=string; maxLen=4000
Applies whenlang_expression = JAVASCRIPT

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
 javascriptExpression: value
 javascriptFunctionBody: value
 language: plsql
}

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 timeout {
 timeoutType: sqlQuery
 sqlQuery: value
 plsqlExpression: value
 plsqlFunctionBody: value
 staticValue: value
 javascriptExpression: value
 javascriptFunctionBody: value
 language: plsql
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process webService - APEXlang Reference

process (webService)

Parent: process

Applies whentype = webService
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
settings
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 settings {
 webServiceOperation: value
 storeResultIn: items
 collectionName: value
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process workflowEnd - APEXlang Reference

process (workflowEnd)

Parent: process

Applies whentype = workflowEnd
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
endState
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

endState

 | Property | Type | Required | Default Value | Details

 | endState | enum | Yes | completed | data type=string; maxLen=4000; lov=STATIC
Valid values: terminated completed

Copy
endState {
 endState: terminated
}

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 endState {
 endState: terminated
 }
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process workflowStart - APEXlang Reference

process (workflowStart)

Parent: process

Applies whentype = workflowStart
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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

---

process workflow - APEXlang Reference

process (workflow)

Parent: process

Applies whentype = workflow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whenexecutionChain does not support RUN_IN_BACKGROUND

Property Groups:
action
workflow
workflowInstance
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

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

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenenabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenenabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenabled = true

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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

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

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whenexecutionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
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
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
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
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
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
