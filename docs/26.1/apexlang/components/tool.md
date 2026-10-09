# APEXlang: componentes con padre `tool` (APEX 26.1)


---

parameter - APEXlang Reference

parameter

Parent: tool

Applies whenexecutionPoint = onDemand and type supports PARAMETERS_DEFINED_BY_TOOL
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=30; textCase=UPPER

 | description | multiline string | No | | data type=multiline string; maxLen=4000

Property Groups:
value
validation

value

 | Property | Type | Required | Default Value | Details

 | dataType | enum | Yes | varchar2 | data type=string; lov=STATIC
Valid values: varchar2 clob number boolean

Copy
value {
 dataType: varchar2
}

validation

 | Property | Type | Required | Default Value | Details

 | required | boolean | Yes | true | data type=boolean

 | allowedValues | multiline string | No | | data type=multiline string; maxLen=4000
Applies whendataType in (varchar2)dataType in (number)

Copy
validation {
 required: false
 allowedValues: ```json
 value
 ```
}

APEXlang Example

Copy
parameter sample (
 name: value
 description: ```
 value
 ```
 value {
 dataType: varchar2
 }
 validation {
 required: false
 allowedValues: ```json
 value
 ```
 }
)

---

tool executeClientsideCode - APEXlang Reference

tool (executeClientsideCode)

Parent: tool

Applies whentype = executeClientsideCode
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=64; textCase=LOWER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeClientsideCode executeServersideCode retrieveData

 | executionPoint | enum | Yes | | data type=string; lov=STATIC
Valid values: augmentSystemPrompt onDemand

 | description | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenexecutionPoint = onDemand

Property Groups:
settings
userApproval
notification
advanced
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | jsCode | string | Yes | | data type=string; maxLen=4000

Copy
settings {
 jsCode: value
}

userApproval

 | Property | Type | Required | Default Value | Details

 | requiresConfirmation | boolean | Yes | false | data type=boolean
Applies whenexecutionPoint = onDemand

 | title | string | No | | data type=string; maxLen=255
Applies whenexecutionPoint = onDemand and requiresConfirmation = true

 | message | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenexecutionPoint = onDemand and requiresConfirmation = true

 | confirmLabel | string | No | | data type=string; maxLen=255
Applies whenexecutionPoint = onDemand and requiresConfirmation = true

 | cancelLabel | string | No | | data type=string; maxLen=255
Applies whenexecutionPoint = onDemand and requiresConfirmation = true

Copy
userApproval {
 requiresConfirmation: false
 title: value
 message: ```
 value
 ```
 confirmLabel: value
 cancelLabel: value
}

notification

 | Property | Type | Required | Default Value | Details

 | message | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenexecutionPoint = onDemand

 | type | enum | No | | data type=string; lov=STATIC
Valid values: info success
Applies whenexecutionPoint = onDemand and message is set

Copy
notification {
 message: ```
 value
 ```
 type: info
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
Valid values: anyUserPromptContains lastUserPromptContains rowsReturned noRowsReturned expression functionBody never

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

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (anyUserPromptContains)type in (lastUserPromptContains)

Copy
serverSideCondition {
 type: anyUserPromptContains
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
tool sample (
 name: value
 type: executeClientsideCode
 executionPoint: augmentSystemPrompt
 description: ```
 value
 ```
 settings {
 jsCode: value
 }
 userApproval {
 requiresConfirmation: false
 title: value
 message: ```
 value
 ```
 confirmLabel: value
 cancelLabel: value
 }
 notification {
 message: ```
 value
 ```
 type: info
 }
 advanced {
 staticId: value
 }
 serverSideCondition {
 type: anyUserPromptContains
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

---

tool executeServersideCode - APEXlang Reference

tool (executeServersideCode)

Parent: tool

Applies whentype = executeServersideCode
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=64; textCase=LOWER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeClientsideCode executeServersideCode retrieveData

 | executionPoint | enum | Yes | | data type=string; lov=STATIC
Valid values: augmentSystemPrompt onDemand

 | description | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenexecutionPoint = onDemand

Property Groups:
settings
userApproval
notification
advanced
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | language | enum | Yes | | data type=string; lov=STATIC
Valid values: plsql js-mle

 | plsqlCode | string | Yes | | data type=string; maxLen=4000
Applies whenlanguage = PLSQL

 | jsCode | string | Yes | | data type=string; maxLen=4000
Applies whenlanguage = JAVASCRIPT

Copy
settings {
 language: plsql
 plsqlCode: value
 jsCode: value
}

userApproval

 | Property | Type | Required | Default Value | Details

 | requiresConfirmation | boolean | Yes | false | data type=boolean
Applies whenexecutionPoint = onDemand

 | title | string | No | | data type=string; maxLen=255
Applies whenexecutionPoint = onDemand and requiresConfirmation = true

 | message | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenexecutionPoint = onDemand and requiresConfirmation = true

 | confirmLabel | string | No | | data type=string; maxLen=255
Applies whenexecutionPoint = onDemand and requiresConfirmation = true

 | cancelLabel | string | No | | data type=string; maxLen=255
Applies whenexecutionPoint = onDemand and requiresConfirmation = true

Copy
userApproval {
 requiresConfirmation: false
 title: value
 message: ```
 value
 ```
 confirmLabel: value
 cancelLabel: value
}

notification

 | Property | Type | Required | Default Value | Details

 | message | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenexecutionPoint = onDemand

 | type | enum | No | | data type=string; lov=STATIC
Valid values: info success
Applies whenexecutionPoint = onDemand and message is set

Copy
notification {
 message: ```
 value
 ```
 type: info
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
Valid values: anyUserPromptContains lastUserPromptContains rowsReturned noRowsReturned expression functionBody never

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

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (anyUserPromptContains)type in (lastUserPromptContains)

Copy
serverSideCondition {
 type: anyUserPromptContains
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
tool sample (
 name: value
 type: executeClientsideCode
 executionPoint: augmentSystemPrompt
 description: ```
 value
 ```
 settings {
 language: plsql
 plsqlCode: value
 jsCode: value
 }
 userApproval {
 requiresConfirmation: false
 title: value
 message: ```
 value
 ```
 confirmLabel: value
 cancelLabel: value
 }
 notification {
 message: ```
 value
 ```
 type: info
 }
 advanced {
 staticId: value
 }
 serverSideCondition {
 type: anyUserPromptContains
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

---

tool retrieveData - APEXlang Reference

tool (retrieveData)

Parent: tool

Applies whentype = retrieveData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=64; textCase=LOWER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: executeClientsideCode executeServersideCode retrieveData

 | executionPoint | enum | Yes | | data type=string; lov=STATIC
Valid values: augmentSystemPrompt onDemand

 | description | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenexecutionPoint = onDemand

Property Groups:
settings
userApproval
notification
advanced
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | dataDescription | string | No | | data type=string; maxLen=4000

 | type | enum | Yes | sqlQuery | data type=string; maxLen=4000; lov=STATIC
Valid values: sqlQuery static functionBody

 | sqlQuery | string | Yes | | data type=string; maxLen=4000
Applies whentype = SQL_QUERY

 | language | enum | Yes | | data type=string; lov=STATIC
Valid values: plsql js-mle
Applies whentype = FUNCTION_BODY

 | plsqlFunctionBody | string | Yes | | data type=string; maxLen=4000
Applies whentype = FUNCTION_BODY and language = PLSQL

 | jsFunctionBody | string | Yes | | data type=string; maxLen=4000
Applies whentype = FUNCTION_BODY and language = JAVASCRIPT

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype = STATIC

 | maxTokens | integer | No | | data type=integer
Applies whentype = SQL_QUERY

Copy
settings {
 dataDescription: value
 type: sqlQuery
 sqlQuery: value
 language: plsql
 plsqlFunctionBody: value
 jsFunctionBody: value
 text: value
 maxTokens: 42
}

userApproval

 | Property | Type | Required | Default Value | Details

 | requiresConfirmation | boolean | Yes | false | data type=boolean
Applies whenexecutionPoint = onDemand

 | title | string | No | | data type=string; maxLen=255
Applies whenexecutionPoint = onDemand and requiresConfirmation = true

 | message | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenexecutionPoint = onDemand and requiresConfirmation = true

 | confirmLabel | string | No | | data type=string; maxLen=255
Applies whenexecutionPoint = onDemand and requiresConfirmation = true

 | cancelLabel | string | No | | data type=string; maxLen=255
Applies whenexecutionPoint = onDemand and requiresConfirmation = true

Copy
userApproval {
 requiresConfirmation: false
 title: value
 message: ```
 value
 ```
 confirmLabel: value
 cancelLabel: value
}

notification

 | Property | Type | Required | Default Value | Details

 | message | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenexecutionPoint = onDemand

 | type | enum | No | | data type=string; lov=STATIC
Valid values: info success
Applies whenexecutionPoint = onDemand and message is set

Copy
notification {
 message: ```
 value
 ```
 type: info
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
Valid values: anyUserPromptContains lastUserPromptContains rowsReturned noRowsReturned expression functionBody never

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

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (anyUserPromptContains)type in (lastUserPromptContains)

Copy
serverSideCondition {
 type: anyUserPromptContains
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
tool sample (
 name: value
 type: executeClientsideCode
 executionPoint: augmentSystemPrompt
 description: ```
 value
 ```
 settings {
 dataDescription: value
 type: sqlQuery
 sqlQuery: value
 language: plsql
 plsqlFunctionBody: value
 jsFunctionBody: value
 text: value
 maxTokens: 42
 }
 userApproval {
 requiresConfirmation: false
 title: value
 message: ```
 value
 ```
 confirmLabel: value
 cancelLabel: value
 }
 notification {
 message: ```
 value
 ```
 type: info
 }
 advanced {
 staticId: value
 }
 serverSideCondition {
 type: anyUserPromptContains
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
