# APEXlang: componentes con padre `jsonSource` (APEX 26.1)


---

dataProfileColumn - APEXlang Reference

dataProfileColumn

Parent: jsonSource

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | columnName | string | Yes | | data type=string; maxLen=128

Property Groups:
source
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
Valid values: tableColumn data lookup sqlExpression sqlQuery

 | parentColumn | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whenformat = json

 | lineNumber | boolean | Yes | false | data type=boolean
Applies whentype = data

 | dataType | enum | Yes | | data type=string; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithLocalTimeZone timestampWithTimeZone clob boolean blob geometrySdoGeometry array jsonDocument
Applies whentype = data and lineNumber = false

 | maxLength | integer | Yes | 4000 | data type=integer; maxLen=5
Applies whentype = data and lineNumber = false and dataType = varchar2

 | primaryKey | boolean | Yes | false | data type=boolean

Copy
source {
 sequence: 42
 type: tableColumn
 parentColumn: @component
 lineNumber: false
 dataType: varchar2
 maxLength: 42
 primaryKey: false
}

parsing

 | Property | Type | Required | Default Value | Details

 | selectorType | enum | Yes | name | data type=string; lov=STATIC
Valid values: name sequence regexp
Applies whentype = data and format in (csv)type = data and format in (xlsx)

 | selector | string | Yes | | data type=string; maxLen=255
Applies whentype = data and format in (csv) and selectorType in (name)type = data and format in (csv) and selectorType in (regexp)type = data and format in (xlsx) and selectorType in (name)type = data and format in (xlsx) and selectorType in (regexp)

 | columnNumber | integer | Yes | | data type=integer; maxLen=32767
Applies whentype = data and format in (csv) and selectorType = sequencetype = data and format in (xlsx) and selectorType = sequence

 | pathExpression | string | Yes | | data type=string; maxLen=255
Applies whenformat in (json) and type = data and lineNumber = falseformat in (xml) and type = data and lineNumber = false

 | tableColumn | string | Yes | | data type=string; maxLen=128
Applies whenformat in (json) and type = tableColumn

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype = data and lineNumber = false and dataType in (number)type = data and lineNumber = false and dataType in (date)type = data and lineNumber = false and dataType in (timestamp)type = data and lineNumber = false and dataType in (timestampWithTimeZone)type = data and lineNumber = false and dataType in (timestampWithLocalTimeZone)

 | hasTimeZone | boolean | Yes | true | data type=boolean
Applies whentype = data and lineNumber = false and dataType in (date)type = data and lineNumber = false and dataType in (timestamp)type = data and lineNumber = false and dataType in (timestampWithTimeZone)type = data and lineNumber = false and dataType in (timestampWithLocalTimeZone)

 | decimalChar | string | No | | data type=string; maxLen=1
Applies whentype = data and lineNumber = false and dataType = number

 | groupChar | string | No | | data type=string; maxLen=1
Applies whentype = data and lineNumber = false and dataType = number

Copy
parsing {
 selectorType: name
 selector: value
 columnNumber: 42
 pathExpression: value
 tableColumn: value
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
Applies whentype = data and lineNumber = false and type in (data)type = data and lineNumber = false and type in (tableColumn)

 | trimChars | string | No | | data type=string; maxLen=4000
Applies whentype = data and lineNumber = false and type in (data) and type in (leftTrim)type = data and lineNumber = false and type in (data) and type in (rightTrim)type = data and lineNumber = false and type in (data) and type in (trim)type = data and lineNumber = false and type in (tableColumn) and type in (leftTrim)type = data and lineNumber = false and type in (tableColumn) and type in (rightTrim)type = data and lineNumber = false and type in (tableColumn) and type in (trim)

 | find | string | Yes | | data type=string; maxLen=4000
Applies whentype = data and lineNumber = false and type in (data) and type = replacetype = data and lineNumber = false and type in (tableColumn) and type = replace

 | regexp | string | Yes | | data type=string; maxLen=4000
Applies whentype = data and lineNumber = false and type in (data) and type in (regexpReplace)type = data and lineNumber = false and type in (data) and type in (regexpNullIf)type = data and lineNumber = false and type in (tableColumn) and type in (regexpReplace)type = data and lineNumber = false and type in (tableColumn) and type in (regexpNullIf)

 | replaceWith | string | No | | data type=string; maxLen=4000
Applies whentype = data and lineNumber = false and type in (data) and type in (replace)type = data and lineNumber = false and type in (data) and type in (regexpReplace)type = data and lineNumber = false and type in (tableColumn) and type in (replace)type = data and lineNumber = false and type in (tableColumn) and type in (regexpReplace)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype = data and lineNumber = false and type in (data) and type = nullIftype = data and lineNumber = false and type in (tableColumn) and type = nullIf

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
Applies whentype = data and lineNumber = false

 | common | boolean | Yes | true | data type=boolean

 | hidden | boolean | Yes | false | data type=boolean

Copy
advanced {
 staticId: value
 sourceDataType: value
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
 type: tableColumn
 parentColumn: @component
 lineNumber: false
 dataType: varchar2
 maxLength: 42
 primaryKey: false
 }
 parsing {
 selectorType: name
 selector: value
 columnNumber: 42
 pathExpression: value
 tableColumn: value
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
 common: false
 hidden: false
 }
 comments {
 comments: ```
 value
 ```
 }
)
