# APEXlang: componentes con padre `activity` (APEX 26.1)


---

activity autoRowFetch - APEXlang Reference

activity (autoRowFetch)

Parent: activity

Applies whentype = autoRowFetch
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
source
genAI
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity autoRowProcessing - APEXlang Reference

activity (autoRowProcessing)

Parent: activity

Applies whentype = autoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
target
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity clearSessionState - APEXlang Reference

activity (clearSessionState)

Parent: activity

Applies whentype = clearSessionState
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
clear
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity closeDialog - APEXlang Reference

activity (closeDialog)

Parent: activity

Applies whentype = closeDialog
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
settings
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity dataLoading - APEXlang Reference

activity (dataLoading)

Parent: activity

Applies whentype = dataLoading
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
dataLoading
sourceData
processingResult
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity download - APEXlang Reference

activity (download)

Parent: activity

Applies whentype = download
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
fileHandling
source
genAI
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity executeCode - APEXlang Reference

activity (executeCode)

Parent: activity

Applies whentype = executeCode
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity executionChain - APEXlang Reference

activity (executionChain)

Parent: activity

Applies whentype = executionChain
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
backgroundExecution
serialization
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity formAutoRowProcessing - APEXlang Reference

activity (formAutoRowProcessing)

Parent: activity

Applies whentype = formAutoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
target
lockRow
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity formInitialization - APEXlang Reference

activity (formInitialization)

Parent: activity

Applies whentype = formInitialization
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
navigation
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity formPagination - APEXlang Reference

activity (formPagination)

Parent: activity

Applies whentype = formPagination
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
target
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity generateTextWithAi - APEXlang Reference

activity (generateTextWithAi)

Parent: activity

Applies whentype = generateTextWithAi
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
inputValue
useResponse
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity humanTaskCreate - APEXlang Reference

activity (humanTaskCreate)

Parent: activity

Applies whentype = humanTaskCreate
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
humanTask
overrides
settings
result
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
comments

humanTask

 | Property | Type | Required | Default Value | Details

 | definition | reference | Yes | | data type=reference; lov=COMPONENT; references=taskDefinition

 | taskIdItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

 | detailsPkItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

Copy
humanTask {
 definition: @component
 taskIdItem: value
 detailsPkItem: value
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
 humanTask {
 definition: @component
 taskIdItem: value
 detailsPkItem: value
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity humanTaskManage - APEXlang Reference

activity (humanTaskManage)

Parent: activity

Applies whentype = humanTaskManage
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
action
humanTask
renew
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity interactiveGridAutoRowProcessing - APEXlang Reference

activity (interactiveGridAutoRowProcessing)

Parent: activity

Applies whentype = interactiveGridAutoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
target
lockRow
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity invokeApi - APEXlang Reference

activity (invokeApi)

Parent: activity

Applies whentype = invokeApi
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
invoke
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity invokeWorkflow - APEXlang Reference

activity (invokeWorkflow)

Parent: activity

Applies whentype = invokeWorkflow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
workflow
processing
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity legacyAutoRowProcessing - APEXlang Reference

activity (legacyAutoRowProcessing)

Parent: activity

Applies whentype = legacyAutoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
target
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity legacyWebService - APEXlang Reference

activity (legacyWebService)

Parent: activity

Applies whentype = legacyWebService
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
settings
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity loadUploadedData - APEXlang Reference

activity (loadUploadedData)

Parent: activity

Applies whentype = loadUploadedData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
dataLoading
processingResult
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity parallelFlow - APEXlang Reference

activity (parallelFlow)

Parent: activity

Applies whentype = parallelFlow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity parseUploadedData - APEXlang Reference

activity (parseUploadedData)

Parent: activity

Applies whentype = parseUploadedData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
dataLoading
sourceData
parsingOptions
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity prepareUploadedData - APEXlang Reference

activity (prepareUploadedData)

Parent: activity

Applies whentype = prepareUploadedData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
dataLoading
processingResult
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity printReport - APEXlang Reference

activity (printReport)

Parent: activity

Applies whentype = printReport
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
source
genAI
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity resetPagination - APEXlang Reference

activity (resetPagination)

Parent: activity

Applies whentype = resetPagination
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
resetPagination
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity sendEMail - APEXlang Reference

activity (sendEMail)

Parent: activity

Applies whentype = sendEMail
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
emailHeader
emailContent
emailAttachments
emailDispatchMode
emailTemplate
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity sendPushNotification - APEXlang Reference

activity (sendPushNotification)

Parent: activity

Applies whentype = sendPushNotification
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
settings
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity serverSideGeocoding - APEXlang Reference

activity (serverSideGeocoding)

Parent: activity

Applies whentype = serverSideGeocoding
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
geocodingInput
address
geocodingResult
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity switch - APEXlang Reference

activity (switch)

Parent: activity

Applies whentype = switch
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
switch
compare
condition
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity tabformAddRows - APEXlang Reference

activity (tabformAddRows)

Parent: activity

Applies whentype = tabformAddRows
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
target
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity tabformDelete - APEXlang Reference

activity (tabformDelete)

Parent: activity

Applies whentype = tabformDelete
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
target
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity tabformUpdate - APEXlang Reference

activity (tabformUpdate)

Parent: activity

Applies whentype = tabformUpdate
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
target
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity userPreferences - APEXlang Reference

activity (userPreferences)

Parent: activity

Applies whentype = userPreferences
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
action
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activityVariable - APEXlang Reference

activityVariable

Parent: activity

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255; textCase=UPPER

Property Groups:
label
parameter
value
displayFormatMasks
comments

label

 | Property | Type | Required | Default Value | Details

 | label | string | Yes | | data type=string; maxLen=4000
An end-user friendly name of the workflow variable.

Copy
label {
 label: value
}

parameter

 | Property | Type | Required | Default Value | Details

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 timestamp timestampWithLocalTimeZone timestampWithTimeZone number boolean clob

Copy
parameter {
 dataType: varchar2
}

value

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | null | data type=string; lov=STATIC
Valid values: staticValue item sqlQuery expression functionBody null

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = staticValue

 | staticValue | enum | Yes | | data type=string; lov=STATIC
Valid values: true false
Applies whentype = staticValue and dataType = boolean

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype = item

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = sqlQuery

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

Copy
value {
 type: staticValue
 staticValue: ```
 value
 ```
 item: value
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
}

displayFormatMasks

 | Property | Type | Required | Default Value | Details

 | sessionStateFormatMask | string | No | | data type=string; maxLen=255
Applies whendataType in (number)dataType in (timestamp)dataType in (timestampWithTimeZone)dataType in (timestampWithLocalTimeZone)
Format mask to be used to convert the workflow variable into a NUMBER or TIMESTAMP and back into a VARCHAR2 when the parameter is used in a bind variable or substitution string. 

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
activityVariable sample (
 staticId: value
 label {
 label: value
 }
 parameter {
 dataType: varchar2
 }
 value {
 type: staticValue
 staticValue: ```
 value
 ```
 item: value
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

activity wait - APEXlang Reference

activity (wait)

Parent: activity

Applies whentype = wait
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
timeout
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
comments

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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity webService - APEXlang Reference

activity (webService)

Parent: activity

Applies whentype = webService
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
settings
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity workflowEnd - APEXlang Reference

activity (workflowEnd)

Parent: activity

Applies whentype = workflowEnd
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
endState
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity workflowStart - APEXlang Reference

activity (workflowStart)

Parent: activity

Applies whentype = workflowStart
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

activity workflow - APEXlang Reference

activity (workflow)

Parent: activity

Applies whentype = workflow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a name for the workflow activity.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeCode generateTextWithAi humanTaskCreate invokeApi invokeWorkflow parallelFlow sendEMail sendPushNotification serverSideGeocoding switch wait workflowEnd workflowStart

Property Groups:
action
workflow
workflowInstance
genAI
source
additionalData
deadline
layout
parallelFlow
advanced
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

additionalData

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=4000

Enter a SQL query to read additional data.

The column names of the query can be used as bind variables and substitution
 strings to evaluate conditions or activity variables during the execution of the activity.

The result of the query should contain only one row.

 If the query returns no result or more than one row then the activity fails during execution.

Copy
additionalData {
 sqlQuery: ```sql
 value
 ```
}

deadline

 | Property | Type | Required | Default Value | Details

 | dueOnType | enum | No | | data type=string; lov=STATIC
Valid values: interval sqlQuery expression functionBody schedulerExpression

 | interval | string | Yes | | data type=string; maxLen=255
Applies whendueOnType = interval

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whendueOnType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whendueOnType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whendueOnType = functionBody and language = javaScript-mle

 | schedulerExpression | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whendueOnType = schedulerExpression

Copy
deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
layout {
 sequence: 42
}

parallelFlow

 | Property | Type | Required | Default Value | Details

 | branch | reference | No | | data type=reference; lov=COMPONENT; references=branch

Copy
parallelFlow {
 branch: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | label | string | No | | data type=string; maxLen=4000

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 label: value
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
activity sample (
 name: value
 type: executeCode
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
 additionalData {
 sqlQuery: ```sql
 value
 ```
 }
 deadline {
 dueOnType: interval
 interval: value
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
 schedulerExpression: ```
 value
 ```
 }
 layout {
 sequence: 42
 }
 parallelFlow {
 branch: @component
 }
 advanced {
 staticId: value
 label: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

branch - APEXlang Reference

branch

Parent: activity

Applies whentype = parallelFlow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Name of this parallel flow branch.

Property Groups:
label
advanced
comments

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
An optional, user friendly, translatable label for the branch.

Copy
label {
 label: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
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
branch sample (
 name: value
 label {
 label: value
 }
 advanced {
 staticId: value
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

connection - APEXlang Reference

connection

Parent: activity

Applies whentype = switch
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Name of this workflow switch activity branch.

Property Groups:
execution
serverSideCondition
condition
activity
config
advanced
comments

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
execution {
 sequence: 42
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: rowsReturned noRowsReturned expression functionBody variable=value variable!=value variableIsNull variableIsNotNull variableIsZero variableIsNotZero variableIsNullOrZero variableIsNotNullAndNotZero variableContainsNoSpaces variableIsNumeric variableIsNotNumeric variableIsAlphanumeric variableIsInColonDelimitedList variableIsNotInColonDelimitedList textIsContainedInVariable text=value text!=value textIsContainedInValue textIsNotContainedInValue never
Applies whentype = IF_ELSE

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = IF_ELSE and type in (rowsReturned)type = IF_ELSE and type in (noRowsReturned)

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype = IF_ELSE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = IF_ELSE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = IF_ELSE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = IF_ELSE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = IF_ELSE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = IF_ELSE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = IF_ELSE and type = functionBody and language = javaScript-mle

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = IF_ELSE and type in (variable=value)type = IF_ELSE and type in (variable!=value)type = IF_ELSE and type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type = IF_ELSE and type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type = IF_ELSE and type in (variableIsNull)type = IF_ELSE and type in (variableIsNotNull)type = IF_ELSE and type in (variableIsZero)type = IF_ELSE and type in (variableIsNotZero)type = IF_ELSE and type in (variableIsNullOrZero)type = IF_ELSE and type in (variableIsNotNullAndNotZero)type = IF_ELSE and type in (variableContainsNoSpaces)type = IF_ELSE and type in (variableIsNumeric)type = IF_ELSE and type in (variableIsNotNumeric)type = IF_ELSE and type in (variableIsAlphanumeric)type = IF_ELSE and type in (variableIsInColonDelimitedList)type = IF_ELSE and type in (variableIsNotInColonDelimitedList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype = IF_ELSE and type in (textIsContainedInVariable)type = IF_ELSE and type in (textIsContainedInValue)type = IF_ELSE and type in (textIsNotContainedInValue)type = IF_ELSE and type in (text=value)type = IF_ELSE and type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype = IF_ELSE and type in (variable=value)type = IF_ELSE and type in (variable!=value)type = IF_ELSE and type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type = IF_ELSE and type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype = IF_ELSE and type in (variableIsInColonDelimitedList)type = IF_ELSE and type in (variableIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = IF_ELSE and type = textIsContainedInVariable

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype = IF_ELSE and type in (textIsContainedInValue)type = IF_ELSE and type in (textIsNotContainedInValue)type = IF_ELSE and type in (text=value)type = IF_ELSE and type in (text!=value)

Copy
serverSideCondition {
 type: rowsReturned
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
 item: value
 text: value
 value: value
 list: [
 value
 value
 ]
}

condition

 | Property | Type | Required | Default Value | Details

 | when | enum | Yes | | data type=string; lov=STATIC
Valid values: true false null
Applies whentype = TRUE_FALSE_CHECK

 | operator | enum | Yes | | data type=string; lov=STATIC
Valid values: = != > < >= <= isNotNull isNull otherwise
Applies whentype in (CHECK_WF_VARIABLE)type in (CASE)

 | value | string | Yes | | data type=string; maxLen=32767
Applies whentype in (CHECK_WF_VARIABLE)type in (CHECK_WF_VARIABLE) and type in (CASE)type in (CASE) and type in (CHECK_WF_VARIABLE)type in (CASE)

Copy
condition {
 when: true
 operator: "="
 value: value
}

activity

 | Property | Type | Required | Default Value | Details

 | to | reference | Yes | | data type=reference; lov=COMPONENT; references=activity

Copy
activity {
 to: @component
}

config

 | Property | Type | Required | Default Value | Details

 | buildOption | reference | No | | data type=reference; lov=COMPONENT; references=buildOption
Applies whentype = IF_ELSE

Copy
config {
 buildOption: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
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
connection sample (
 name: value
 execution {
 sequence: 42
 }
 serverSideCondition {
 type: rowsReturned
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
 item: value
 text: value
 value: value
 list: [
 value
 value
 ]
 }
 condition {
 when: true
 operator: "="
 value: value
 }
 activity {
 to: @component
 }
 config {
 buildOption: @component
 }
 advanced {
 diagram: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

connection - APEXlang Reference

connection

Parent: activity

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Name of this workflow activity transition.

 | type | enum | Yes | normal | data type=string; lov=STATIC
Valid values: normal error timeout

Property Groups:
execution
activity
condition
config
advanced
comments

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | No | | data type=number; maxLen=22
Applies whentype = error

Copy
execution {
 sequence: 42
}

activity

 | Property | Type | Required | Default Value | Details

 | from | reference | Yes | | data type=reference; lov=COMPONENT; references=activity

 | to | reference | Yes | | data type=reference; lov=COMPONENT; references=activity

Copy
activity {
 from: @component
 to: @component
}

condition

 | Property | Type | Required | Default Value | Details

 | operator | enum | Yes | | data type=string; lov=STATIC
Valid values: = != > < >= <= isNotNull
Applies whentype = error

 | value | string | Yes | | data type=string; maxLen=32767
Applies whentype = error

Copy
condition {
 operator: "="
 value: value
}

config

 | Property | Type | Required | Default Value | Details

 | buildOption | reference | No | | data type=reference; lov=COMPONENT; references=buildOption
Applies whentype = error

Copy
config {
 buildOption: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | diagram | string | No | | data type=string; maxLen=32767

Copy
advanced {
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
connection sample (
 name: value
 type: normal
 execution {
 sequence: 42
 }
 activity {
 from: @component
 to: @component
 }
 condition {
 operator: "="
 value: value
 }
 config {
 buildOption: @component
 }
 advanced {
 diagram: value
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

Parent: activity

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

Parent: activity

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

Parent: activity

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

Parent: activity

Applies whentype = invokeWorkflow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | reference | Yes | | data type=reference; lov=COMPONENT; references=parameter

Property Groups:
parameter
value

parameter

 | Property | Type | Required | Default Value | Details

 | ignoreOutput | boolean | Yes | true | data type=boolean
Applies whenname supports OUT_PARAMETERname supports IN_OUT_PARAMETER

Copy
parameter {
 ignoreOutput: false
}

value

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | item | data type=string; lov=STATIC
Valid values: staticValue item sqlQuery expression functionBody preference default null
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = truename supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = truename supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = truename supports IN_OUT_PARAMETER and ignoreOutput = true

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = staticValue and name does not support BOOLEAN_PARAMETERname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type = staticValue and name does not support BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = staticValue and name does not support BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and ignoreOutput = true and type = staticValue and name does not support BOOLEAN_PARAMETER

 | staticValue | enum | Yes | | data type=string; lov=STATIC
Valid values: true false
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = staticValue and name supports BOOLEAN_PARAMETERname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type = staticValue and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = staticValue and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and ignoreOutput = true and type = staticValue and name supports BOOLEAN_PARAMETER

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = sqlQueryname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type = sqlQueryname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = sqlQueryname supports IN_OUT_PARAMETER and ignoreOutput = true and type = sqlQuery

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = itemname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type = itemname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = itemname supports IN_OUT_PARAMETER and ignoreOutput = true and type = itemname supports OUT_PARAMETER and ignoreOutput = falsename supports IN_OUT_PARAMETER and ignoreOutput = false

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = expressionname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type = expressionname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = expressionname supports IN_OUT_PARAMETER and ignoreOutput = true and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = expression and language = sqlname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type = expression and language = sqlname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = expression and language = sqlname supports IN_OUT_PARAMETER and ignoreOutput = true and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = expression and language = plsqlname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type = expression and language = plsqlname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = expression and language = plsqlname supports IN_OUT_PARAMETER and ignoreOutput = true and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = expression and language = javaScript-mlename supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type = expression and language = javaScript-mlename supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = expression and language = javaScript-mlename supports IN_OUT_PARAMETER and ignoreOutput = true and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = functionBodyname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type = functionBodyname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = functionBodyname supports IN_OUT_PARAMETER and ignoreOutput = true and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = functionBody and language = plsqlname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type = functionBody and language = plsqlname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = functionBody and language = plsqlname supports IN_OUT_PARAMETER and ignoreOutput = true and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = functionBody and language = javaScript-mlename supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type = functionBody and language = javaScript-mlename supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type = functionBody and language = javaScript-mlename supports IN_OUT_PARAMETER and ignoreOutput = true and type = functionBody and language = javaScript-mle

 | formatMask | string | No | | data type=string; maxLen=255
Applies whenname supports NUMBER_PARAMETER and name supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports NUMBER_PARAMETER and name supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (item)name supports NUMBER_PARAMETER and name supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports NUMBER_PARAMETER and name supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (item)name supports NUMBER_PARAMETER and name supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports NUMBER_PARAMETER and name supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (item)name supports NUMBER_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports NUMBER_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (item)name supports TIMESTAMP_PARAMETER and name supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports TIMESTAMP_PARAMETER and name supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (item)name supports TIMESTAMP_PARAMETER and name supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports TIMESTAMP_PARAMETER and name supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (item)name supports TIMESTAMP_PARAMETER and name supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports TIMESTAMP_PARAMETER and name supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (item)name supports TIMESTAMP_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports TIMESTAMP_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (item)name supports TIMESTAMP_TZ__PARAMETER and name supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports TIMESTAMP_TZ__PARAMETER and name supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (item)name supports TIMESTAMP_TZ__PARAMETER and name supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports TIMESTAMP_TZ__PARAMETER and name supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (item)name supports TIMESTAMP_TZ__PARAMETER and name supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports TIMESTAMP_TZ__PARAMETER and name supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (item)name supports TIMESTAMP_TZ__PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports TIMESTAMP_TZ__PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (item)name supports TIMESTAMP_LTZ__PARAMETER and name supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports TIMESTAMP_LTZ__PARAMETER and name supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (item)name supports TIMESTAMP_LTZ__PARAMETER and name supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports TIMESTAMP_LTZ__PARAMETER and name supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (item)name supports TIMESTAMP_LTZ__PARAMETER and name supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports TIMESTAMP_LTZ__PARAMETER and name supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (item)name supports TIMESTAMP_LTZ__PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (staticValue)name supports TIMESTAMP_LTZ__PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (item)
Format mask to convert the Static or Item value to the data type of the workflow parameter.

 | trueValue | string | No | | data type=string; maxLen=10
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (item) and name supports BOOLEAN_PARAMETERname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (preference) and name supports BOOLEAN_PARAMETERname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (item) and name supports BOOLEAN_PARAMETERname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (preference) and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (item) and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (preference) and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and ignoreOutput = true and type in (item) and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and ignoreOutput = true and type in (preference) and name supports BOOLEAN_PARAMETER

 | falseValue | string | No | | data type=string; maxLen=10
Applies whenname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (item) and name supports BOOLEAN_PARAMETERname supports IN_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (preference) and name supports BOOLEAN_PARAMETERname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (item) and name supports BOOLEAN_PARAMETERname supports IN_PARAMETER and name supports IN_OUT_PARAMETER and ignoreOutput = true and type in (preference) and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (item) and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and name supports OUT_PARAMETER and ignoreOutput = true and type in (preference) and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and ignoreOutput = true and type in (item) and name supports BOOLEAN_PARAMETERname supports IN_OUT_PARAMETER and ignoreOutput = true and type in (preference) and name supports BOOLEAN_PARAMETER

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
 formatMask: value
 trueValue: value
 falseValue: value
 }
)
