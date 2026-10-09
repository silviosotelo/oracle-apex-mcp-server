# APEXlang: componentes con padre `workflow` (APEX 26.1)


---

parameter - APEXlang Reference

parameter

Parent: workflow

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255; textCase=UPPER

Property Groups:
label
parameter
validation
default
displayFormatMasks
comments

label

 | Property | Type | Required | Default Value | Details

 | label | string | Yes | | data type=string; maxLen=4000
An end-user friendly name of the workflow parameter.

Copy
label {
 label: value
}

parameter

 | Property | Type | Required | Default Value | Details

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 timestamp timestampWithLocalTimeZone timestampWithTimeZone number boolean clob

 | direction | enum | Yes | in | data type=string; lov=STATIC
Valid values: in out inOut
The direction of the parameter as defined within the Workflow.

Copy
parameter {
 dataType: varchar2
 direction: in
}

validation

 | Property | Type | Required | Default Value | Details

 | required | boolean | Yes | false | data type=boolean
Applies whendirection in (in)direction in (inOut)

Copy
validation {
 required: false
}

default

 | Property | Type | Required | Default Value | Details

 | value | multiline string | No | | data type=multiline string; maxLen=4000
Applies whendirection in (in)direction in (inOut)

Copy
default {
 value: ```
 value
 ```
}

displayFormatMasks

 | Property | Type | Required | Default Value | Details

 | sessionStateFormatMask | string | No | | data type=string; maxLen=255
Applies whendataType in (number)dataType in (timestamp)dataType in (timestampWithTimeZone)dataType in (timestampWithLocalTimeZone)

 | trueValue | string | No | | data type=string; maxLen=10
Applies whendataType = boolean

 | falseValue | string | No | | data type=string; maxLen=10
Applies whendataType = boolean

Copy
displayFormatMasks {
 sessionStateFormatMask: value
 trueValue: value
 falseValue: value
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
 label {
 label: value
 }
 parameter {
 dataType: varchar2
 direction: in
 }
 validation {
 required: false
 }
 default {
 value: ```
 value
 ```
 }
 displayFormatMasks {
 sessionStateFormatMask: value
 trueValue: value
 falseValue: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

version - APEXlang Reference

version

Parent: workflow

Children: activity, participant, variable

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | workflowVersion | string | Yes | | data type=string; maxLen=255
Version of this workflow.

Property Groups:
settings
additionalData
columnMapping
advanced
comments

settings

 | Property | Type | Required | Default Value | Details

 | state | enum | Yes | inDevelopment | data type=string; maxLen=128; lov=STATIC
Valid values: inDevelopment active inactive

Copy
settings {
 state: inDevelopment
}

additionalData

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: tableView sqlQuery
Select how additional data is queried that can be used to evaluate variables,
 participants and conditions during the execution of the activities of the workflow..

 | tableOwner | string | No | | data type=string; maxLen=32767
Applies whentype = tableView

 | tableName | string | Yes | | data type=string; maxLen=32767
Applies whentype = tableView

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = sqlQuery

Copy
additionalData {
 type: tableView
 tableOwner: value
 tableName: value
 sqlQuery: ```sql
 value
 ```
}

columnMapping

 | Property | Type | Required | Default Value | Details

 | primaryKeyColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = tableView

The primary key column for the table which will serve as the system of records during execution of this workflow version.

Copy
columnMapping {
 primaryKeyColumn: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | debugLevel | enum | No | | data type=string; lov=STATIC
Valid values: info warning error trace

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 debugLevel: info
 diagram: value
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
version sample (
 workflowVersion: value
 settings {
 state: inDevelopment
 }
 additionalData {
 type: tableView
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
 debugLevel: info
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)
