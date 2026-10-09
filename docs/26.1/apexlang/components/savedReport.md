# APEXlang: componentes con padre `savedReport` (APEX 26.1)


---

aggregate - APEXlang Reference

aggregate

Parent: savedReport

Property Groups:
aggregate
advanced

aggregate

 | Property | Type | Required | Default Value | Details

 | column | reference | Yes | | data type=reference; lov=COMPONENT; references=column

 | function | enum | Yes | sum | data type=string; lov=STATIC
Valid values: sum average count countDistinct min max median

 | showGrandTotal | boolean | Yes | false | data type=boolean

 | tooltip | string | No | | data type=string; maxLen=32767

Copy
aggregate {
 column: @component
 function: sum
 showGrandTotal: false
 tooltip: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | enabled | boolean | Yes | true | data type=boolean

Copy
advanced {
 staticId: value
 enabled: false
}

APEXlang Example

Copy
aggregate sample (
 aggregate {
 column: @component
 function: sum
 showGrandTotal: false
 tooltip: value
 }
 advanced {
 staticId: value
 enabled: false
 }
)

---

aggregate - APEXlang Reference

aggregate

Parent: savedReport

Property Groups:
aggregate

aggregate

 | Property | Type | Required | Default Value | Details

 | function | enum | Yes | sum | data type=string; lov=STATIC
Valid values: sum average count countDistinct min max median

 | column | string | Yes | | data type=string; maxLen=128

 | column | string | Yes | | data type=string; maxLen=128
Applies whenfunction in (count)function in (countDistinct)

Copy
aggregate {
 function: sum
 column: value
}

APEXlang Example

Copy
aggregate sample (
 aggregate {
 function: sum
 column: value
 }
)

---

computation - APEXlang Reference

computation

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | columnName | string | Yes | | data type=string; maxLen=128

 | identifier | string | Yes | | data type=string; maxLen=3

Property Groups:
source
label
appearance

source

 | Property | Type | Required | Default Value | Details

 | expression | multiline string | Yes | | data type=multiline string; maxLen=4000

 | dataType | enum | Yes | | data type=string; lov=STATIC
Valid values: string date number clob other

Copy
source {
 expression: ```sql
 value
 ```
 dataType: string
}

label

 | Property | Type | Required | Default Value | Details

 | column | string | Yes | | data type=string; maxLen=4000

Copy
label {
 column: value
}

appearance

 | Property | Type | Required | Default Value | Details

 | formatMask | string | No | | data type=string; maxLen=255
Applies whendataType = number

 | formatMask | string | No | | data type=string; maxLen=255
Applies whendataType = date

Copy
appearance {
 formatMask: value
}

APEXlang Example

Copy
computation sample (
 columnName: value
 identifier: value
 source {
 expression: ```sql
 value
 ```
 dataType: string
 }
 label {
 column: value
 }
 appearance {
 formatMask: value
 }
)

---

controlBreak - APEXlang Reference

controlBreak

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | column | reference | Yes | | data type=reference; lov=COMPONENT; references=column

Property Groups:
sort
layout
advanced

sort

 | Property | Type | Required | Default Value | Details

 | direction | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc

 | nulls | enum | No | | data type=string; lov=STATIC
Valid values: first last

Copy
sort {
 direction: asc
 nulls: first
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

advanced

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | true | data type=boolean

Copy
advanced {
 enabled: false
}

APEXlang Example

Copy
controlBreak sample (
 column: @component
 sort {
 direction: asc
 nulls: first
 }
 layout {
 sequence: 42
 }
 advanced {
 enabled: false
 }
)

---

controlBreak - APEXlang Reference

controlBreak

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | column | string | Yes | | data type=string; maxLen=128

Property Groups:
layout
advanced

layout

 | Property | Type | Required | Default Value | Details

 | sequence | integer | Yes | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
}

advanced

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | true | data type=boolean

Copy
advanced {
 enabled: false
}

APEXlang Example

Copy
controlBreak sample (
 column: value
 layout {
 sequence: 42
 }
 advanced {
 enabled: false
 }
)

---

displayColumn - APEXlang Reference

displayColumn

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | column | reference | No | | data type=reference; lov=COMPONENT; references=column

Property Groups:
layout

layout

 | Property | Type | Required | Default Value | Details

 | show | boolean | Yes | true | data type=boolean

 | frozen | boolean | Yes | false | data type=boolean

 | width | number | No | | data type=number; maxLen=22

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 show: false
 frozen: false
 width: 42
 sequence: 42
}

APEXlang Example

Copy
displayColumn sample (
 column: @component
 layout {
 show: false
 frozen: false
 width: 42
 sequence: 42
 }
)

---

displayColumn - APEXlang Reference

displayColumn

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | column | string | Yes | | data type=string; maxLen=128

Property Groups:
layout

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

APEXlang Example

Copy
displayColumn sample (
 column: value
 layout {
 sequence: 42
 }
)

---

filter - APEXlang Reference

filter

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Applies whentype = rowExpression

Property Groups:
condition
advanced

condition

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | column | data type=string; lov=STATIC
Valid values: column rowSearch rowExpression

 | search | string | Yes | | data type=string; maxLen=4000
Applies whentype = rowSearch

 | rowExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = rowExpression

 | column | string | Yes | | data type=string; maxLen=128
Applies whentype = column

 | operator | enum | Yes | = | data type=string; lov=STATIC
Valid values: = != > >= < <= between isNull isNotNull like notLike in notIn contains doesNotContain regexp isInTheLast isNotInTheLast isInTheNext isNotInTheNext
Applies whentype = column

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype = column

 | from | string | Yes | | data type=string; maxLen=1900
Applies whentype = column and operator = between

 | to | string | Yes | | data type=string; maxLen=1900
Applies whentype = column and operator = between

 | value | number | Yes | | data type=number; maxLen=22
Applies whentype = column and operator in (isInTheLast)type = column and operator in (isNotInTheLast)type = column and operator in (isInTheNext)type = column and operator in (isNotInTheNext)

 | unit | enum | Yes | | data type=string; lov=STATIC
Valid values: min hours days weeks months years
Applies whentype = column and operator in (isInTheLast)type = column and operator in (isNotInTheLast)type = column and operator in (isInTheNext)type = column and operator in (isNotInTheNext)

Copy
condition {
 type: column
 search: value
 rowExpression: ```
 value
 ```
 column: value
 operator: "="
 value: value
 from: value
 to: value
 unit: min
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | enabled | boolean | Yes | true | data type=boolean

Copy
advanced {
 staticId: value
 enabled: false
}

APEXlang Example

Copy
filter sample (
 name: value
 condition {
 type: column
 search: value
 rowExpression: ```
 value
 ```
 column: value
 operator: "="
 value: value
 from: value
 to: value
 unit: min
 }
 advanced {
 staticId: value
 enabled: false
 }
)

---

filter - APEXlang Reference

filter

Parent: savedReport

Property Groups:
condition
advanced

condition

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | column | data type=string; lov=STATIC
Valid values: column rowSearch

 | search | string | Yes | | data type=string; maxLen=4000
Applies whentype = rowSearch

 | column | reference | Yes | | data type=reference; lov=COMPONENT; references=column
Applies whentype = column

 | operator | enum | Yes | equals | data type=string; lov=STATIC
Valid values: equals notEquals greaterThan greaterThanOrEquals lessThan lessThanOrEquals isEmpty isNotEmpty in notIn between notBetween contains doesNotContain startsWith doesNotStartWith matchesRegexp inTheLast notInTheLast inTheNext notInTheNext
Applies whentype = column

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype = column

 | from | string | Yes | | data type=string; maxLen=1900
Applies whentype = column and operator in (between)type = column and operator in (notBetween)

 | to | string | Yes | | data type=string; maxLen=1900
Applies whentype = column and operator in (between)type = column and operator in (notBetween)

 | value | number | Yes | | data type=number; maxLen=22
Applies whentype = column and operator in (inTheLast)type = column and operator in (notInTheLast)type = column and operator in (inTheNext)type = column and operator in (notInTheNext)

 | unit | enum | Yes | | data type=string; lov=STATIC
Valid values: min hours days weeks months years
Applies whentype = column and operator in (inTheLast)type = column and operator in (notInTheLast)type = column and operator in (inTheNext)type = column and operator in (notInTheNext)

 | caseSensitive | boolean | Yes | false | data type=boolean
Applies whentype = rowSearchtype = column and operator in (contains)type = column and operator in (doesNotContain)type = column and operator in (startsWith)type = column and operator in (doesNotStartWith)type = column and operator in (matchesRegexp)

Copy
condition {
 type: column
 search: value
 column: @component
 operator: equals
 value: value
 from: value
 to: value
 unit: min
 caseSensitive: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | true | data type=boolean

Copy
advanced {
 enabled: false
}

APEXlang Example

Copy
filter sample (
 condition {
 type: column
 search: value
 column: @component
 operator: equals
 value: value
 from: value
 to: value
 unit: min
 caseSensitive: false
 }
 advanced {
 enabled: false
 }
)

---

groupByAggregate - APEXlang Reference

groupByAggregate

Parent: savedReport

Property Groups:
heading
aggregate
appearance
layout

heading

 | Property | Type | Required | Default Value | Details

 | heading | string | No | | data type=string; maxLen=4000

Copy
heading {
 heading: value
}

aggregate

 | Property | Type | Required | Default Value | Details

 | function | enum | Yes | sum | data type=string; lov=STATIC
Valid values: sum average max min median count countDistinct percentOfTotalSum percentOfTotalCount

 | column | string | Yes | | data type=string; maxLen=128

 | column | string | No | | data type=string; maxLen=128
Applies whenfunction in (count)function in (countDistinct)function in (percentOfTotalCount)

 | displaySum | boolean | Yes | false | data type=boolean

Copy
aggregate {
 function: sum
 column: value
 displaySum: false
}

appearance

 | Property | Type | Required | Default Value | Details

 | formatMask | string | No | | data type=string; maxLen=255

Copy
appearance {
 formatMask: value
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | integer | Yes | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
}

APEXlang Example

Copy
groupByAggregate sample (
 heading {
 heading: value
 }
 aggregate {
 function: sum
 column: value
 displaySum: false
 }
 appearance {
 formatMask: value
 }
 layout {
 sequence: 42
 }
)

---

groupByColumn - APEXlang Reference

groupByColumn

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | column | string | Yes | | data type=string; maxLen=128

Property Groups:
layout

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

APEXlang Example

Copy
groupByColumn sample (
 column: value
 layout {
 sequence: 42
 }
)

---

groupBySort - APEXlang Reference

groupBySort

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | column | string | Yes | | data type=string; maxLen=128

Property Groups:
sort

sort

 | Property | Type | Required | Default Value | Details

 | direction | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc

 | nulls | enum | No | | data type=string; lov=STATIC
Valid values: first last

 | sequence | integer | Yes | | data type=integer; maxLen=32767

Copy
sort {
 direction: asc
 nulls: first
 sequence: 42
}

APEXlang Example

Copy
groupBySort sample (
 column: value
 sort {
 direction: asc
 nulls: first
 sequence: 42
 }
)

---

highlight - APEXlang Reference

highlight

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=40

Property Groups:
condition
highlight
colors
execution
advanced

condition

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | column | data type=string; lov=STATIC
Valid values: column rowSearch

 | search | string | Yes | | data type=string; maxLen=4000
Applies whentype = rowSearch

 | column | reference | Yes | | data type=reference; lov=COMPONENT; references=column
Applies whentype = column

 | operator | enum | Yes | equals | data type=string; lov=STATIC
Valid values: equals notEquals greaterThan greaterThanOrEquals lessThan lessThanOrEquals isEmpty isNotEmpty in notIn between notBetween contains doesNotContain startsWith doesNotStartWith matchesRegexp inTheLast notInTheLast inTheNext notInTheNext
Applies whentype = column

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype = column

 | from | string | Yes | | data type=string; maxLen=1900
Applies whentype = column and operator in (between)type = column and operator in (notBetween)

 | to | string | Yes | | data type=string; maxLen=1900
Applies whentype = column and operator in (between)type = column and operator in (notBetween)

 | value | number | Yes | | data type=number; maxLen=22
Applies whentype = column and operator in (inTheLast)type = column and operator in (notInTheLast)type = column and operator in (inTheNext)type = column and operator in (notInTheNext)

 | unit | enum | Yes | | data type=string; lov=STATIC
Valid values: min hours days weeks months years
Applies whentype = column and operator in (inTheLast)type = column and operator in (notInTheLast)type = column and operator in (inTheNext)type = column and operator in (notInTheNext)

 | caseSensitive | boolean | Yes | false | data type=boolean
Applies whentype = rowSearchtype = column and operator in (contains)type = column and operator in (doesNotContain)type = column and operator in (startsWith)type = column and operator in (doesNotStartWith)type = column and operator in (matchesRegexp)

Copy
condition {
 type: column
 search: value
 column: @component
 operator: equals
 value: value
 from: value
 to: value
 unit: min
 caseSensitive: false
}

highlight

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | row | data type=string; lov=STATIC
Valid values: row cell

 | column | reference | Yes | | data type=reference; lov=COMPONENT; references=column
Applies whentype = cell

Copy
highlight {
 type: row
 column: @component
}

colors

 | Property | Type | Required | Default Value | Details

 | background | string | No | | data type=string; maxLen=30

 | text | string | No | | data type=string; maxLen=30

Copy
colors {
 background: value
 text: value
}

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
execution {
 sequence: 42
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | enabled | boolean | Yes | true | data type=boolean

Copy
advanced {
 staticId: value
 enabled: false
}

APEXlang Example

Copy
highlight sample (
 name: value
 condition {
 type: column
 search: value
 column: @component
 operator: equals
 value: value
 from: value
 to: value
 unit: min
 caseSensitive: false
 }
 highlight {
 type: row
 column: @component
 }
 colors {
 background: value
 text: value
 }
 execution {
 sequence: 42
 }
 advanced {
 staticId: value
 enabled: false
 }
)

---

highlight - APEXlang Reference

highlight

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | No | | data type=string; maxLen=255

Property Groups:
condition
highlight
colors
execution
advanced

condition

 | Property | Type | Required | Default Value | Details

 | column | string | Yes | | data type=string; maxLen=128

 | operator | enum | Yes | = | data type=string; lov=STATIC
Valid values: = != > >= < <= between isNull isNotNull like notLike in notIn contains doesNotContain regexp isInTheLast isNotInTheLast isInTheNext isNotInTheNext

 | value | string | Yes | | data type=string; maxLen=4000

 | from | string | Yes | | data type=string; maxLen=1900
Applies whenoperator = between

 | to | string | Yes | | data type=string; maxLen=1900
Applies whenoperator = between

 | value | number | Yes | | data type=number; maxLen=22
Applies whenoperator in (isInTheLast)operator in (isNotInTheLast)operator in (isInTheNext)operator in (isNotInTheNext)

 | unit | enum | Yes | | data type=string; lov=STATIC
Valid values: min hours days weeks months years
Applies whenoperator in (isInTheLast)operator in (isNotInTheLast)operator in (isInTheNext)operator in (isNotInTheNext)

Copy
condition {
 column: value
 operator: "="
 value: value
 from: value
 to: value
 unit: min
}

highlight

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | row | data type=string; lov=STATIC
Valid values: row cell

Copy
highlight {
 type: row
}

colors

 | Property | Type | Required | Default Value | Details

 | background | string | No | | data type=string; maxLen=30

 | text | string | No | | data type=string; maxLen=30

Copy
colors {
 background: value
 text: value
}

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
execution {
 sequence: 42
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | enabled | boolean | Yes | true | data type=boolean

Copy
advanced {
 staticId: value
 enabled: false
}

APEXlang Example

Copy
highlight sample (
 name: value
 condition {
 column: value
 operator: "="
 value: value
 from: value
 to: value
 unit: min
 }
 highlight {
 type: row
 }
 colors {
 background: value
 text: value
 }
 execution {
 sequence: 42
 }
 advanced {
 staticId: value
 enabled: false
 }
)

---

pivotAggregate - APEXlang Reference

pivotAggregate

Parent: savedReport

Property Groups:
heading
aggregate
appearance
layout
advanced

heading

 | Property | Type | Required | Default Value | Details

 | heading | string | No | | data type=string; maxLen=4000
Identifies the aggregate column label

Copy
heading {
 heading: value
}

aggregate

 | Property | Type | Required | Default Value | Details

 | function | enum | Yes | | data type=string; lov=STATIC
Valid values: sum average max min median count countDistinct ratioToReportSum ratioToReportCount

 | column | string | Yes | | data type=string; maxLen=128

 | column | string | No | | data type=string; maxLen=128
Applies whenfunction in (count)function in (countDistinct)function in (ratioToReportCount)

 | displaySum | boolean | Yes | false | data type=boolean

Copy
aggregate {
 function: sum
 column: value
 displaySum: false
}

appearance

 | Property | Type | Required | Default Value | Details

 | formatMask | string | No | | data type=string; maxLen=255

Copy
appearance {
 formatMask: value
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
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
pivotAggregate sample (
 heading {
 heading: value
 }
 aggregate {
 function: sum
 column: value
 displaySum: false
 }
 appearance {
 formatMask: value
 }
 layout {
 sequence: 42
 }
 advanced {
 staticId: value
 }
)

---

pivotColumn - APEXlang Reference

pivotColumn

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | column | string | Yes | | data type=string; maxLen=128

Property Groups:
layout

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

APEXlang Example

Copy
pivotColumn sample (
 column: value
 layout {
 sequence: 42
 }
)

---

pivotRowColumn - APEXlang Reference

pivotRowColumn

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | column | string | Yes | | data type=string; maxLen=128

Property Groups:
layout

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

APEXlang Example

Copy
pivotRowColumn sample (
 column: value
 layout {
 sequence: 42
 }
)

---

pivotSort - APEXlang Reference

pivotSort

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | column | string | Yes | | data type=string; maxLen=128

Property Groups:
sort

sort

 | Property | Type | Required | Default Value | Details

 | direction | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc

 | nulls | enum | No | | data type=string; lov=STATIC
Valid values: first last

 | sequence | integer | Yes | | data type=integer; maxLen=32767

Copy
sort {
 direction: asc
 nulls: first
 sequence: 42
}

APEXlang Example

Copy
pivotSort sample (
 column: value
 sort {
 direction: asc
 nulls: first
 sequence: 42
 }
)

---

sort - APEXlang Reference

sort

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | column | reference | Yes | | data type=reference; lov=COMPONENT; references=column

Property Groups:
sort

sort

 | Property | Type | Required | Default Value | Details

 | direction | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc

 | nulls | enum | Yes | | data type=string; lov=STATIC
Valid values: first last

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
sort {
 direction: asc
 nulls: first
 sequence: 42
}

APEXlang Example

Copy
sort sample (
 column: @component
 sort {
 direction: asc
 nulls: first
 sequence: 42
 }
)

---

sort - APEXlang Reference

sort

Parent: savedReport

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | column | string | Yes | | data type=string; maxLen=128

Property Groups:
sort

sort

 | Property | Type | Required | Default Value | Details

 | direction | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc

 | nulls | enum | No | | data type=string; lov=STATIC
Valid values: first last

 | sequence | integer | Yes | | data type=integer; maxLen=32767

Copy
sort {
 direction: asc
 nulls: first
 sequence: 42
}

APEXlang Example

Copy
sort sample (
 column: value
 sort {
 direction: asc
 nulls: first
 sequence: 42
 }
)
