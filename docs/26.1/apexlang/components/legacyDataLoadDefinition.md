# APEXlang: componentes con padre `legacyDataLoadDefinition` (APEX 26.1)


---

tableLookup - APEXlang Reference

tableLookup

Parent: legacyDataLoadDefinition

Applies whenskipValidation = false
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | columnName | string | Yes | | data type=string; maxLen=32767

Property Groups:
source
compareUploadWith
lookup
error
advanced

source

 | Property | Type | Required | Default Value | Details

 | tableOwner | string | No | | data type=string; maxLen=32767

 | tableName | string | Yes | | data type=string; maxLen=128

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000

Copy
source {
 tableOwner: value
 tableName: value
 whereClause: ```sql
 value
 ```
}

compareUploadWith

 | Property | Type | Required | Default Value | Details

 | column | string | Yes | | data type=string; maxLen=32767

 | column2 | string | No | | data type=string; maxLen=32767

 | column3 | string | No | | data type=string; maxLen=32767

Copy
compareUploadWith {
 column: value
 column2: value
 column3: value
}

lookup

 | Property | Type | Required | Default Value | Details

 | returnColumn | string | Yes | | data type=string; maxLen=32767

Copy
lookup {
 returnColumn: value
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

 | insertNewValue | boolean | Yes | false | data type=boolean

Copy
advanced {
 insertNewValue: false
}

APEXlang Example

Copy
tableLookup sample (
 columnName: value
 source {
 tableOwner: value
 tableName: value
 whereClause: ```sql
 value
 ```
 }
 compareUploadWith {
 column: value
 column2: value
 column3: value
 }
 lookup {
 returnColumn: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 insertNewValue: false
 }
)

---

transformationRule - APEXlang Reference

transformationRule

Parent: legacyDataLoadDefinition

Applies whenskipValidation = false
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
execution
transformation
error
advanced

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
execution {
 sequence: 42
}

transformation

 | Property | Type | Required | Default Value | Details

 | columnNames | array of strings | Yes | | data type=string; maxLen=32767

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: upperCase lowerCase replace trim leftTrim rightTrim singleWhitespace plsqlExpression plsqlFunctionBody sqlQuerySingleValue sqlQueryMultipleValues

 | trim | enum | Yes | both | data type=string; lov=STATIC
Valid values: trailing leading both
Applies whentype = trim

 | find | string | Yes | | data type=string; maxLen=4000
Applies whentype = replace

 | replaceWith | string | No | | data type=string; maxLen=4000
Applies whentype = replace

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = plsqlExpression

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype in (sqlQuerySingleValue)type in (sqlQueryMultipleValues)

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = plsqlFunctionBody

 | trimChars | string | No | | data type=string; maxLen=4000
Applies whentype in (leftTrim)type in (rightTrim)type in (trim)

Copy
transformation {
 columnNames: [
 value
 value
 ]
 type: upperCase
 trim: trailing
 find: value
 replaceWith: value
 plsqlExpression: ```plsql
 value
 ```
 sqlQuery: ```sql
 value
 ```
 plsqlFunctionBody: ```plsql
 value
 ```
 trimChars: value
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

APEXlang Example

Copy
transformationRule sample (
 name: value
 execution {
 sequence: 42
 }
 transformation {
 columnNames: [
 value
 value
 ]
 type: upperCase
 trim: trailing
 find: value
 replaceWith: value
 plsqlExpression: ```plsql
 value
 ```
 sqlQuery: ```sql
 value
 ```
 plsqlFunctionBody: ```plsql
 value
 ```
 trimChars: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 staticId: value
 }
)
