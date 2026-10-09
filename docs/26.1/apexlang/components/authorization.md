# APEXlang: componentes con padre `authorization` (APEX 26.1)


---

authorization existsSqlQuery - APEXlang Reference

authorization (existsSqlQuery)

Parent: authorization

Applies whentype = existsSqlQuery
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: existsSqlQuery isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue notExistsSqlQuery plSqlFunctionBody preferenceEqualsValue preferenceNotEqualsValue

Property Groups:
settings
error
advanced
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | sqlQuery | string | Yes | | data type=string; maxLen=4000

Copy
settings {
 sqlQuery: value
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

 | evaluationType | enum | Yes | perPageView | data type=string; lov=STATIC
Valid values: perSession perPageView perComponent always

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 evaluationType: perSession
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=authorization

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
authorization sample (
 name: value
 type: existsSqlQuery
 settings {
 sqlQuery: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 evaluationType: perSession
 staticId: value
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

authorization isInRoleOrGroup - APEXlang Reference

authorization (isInRoleOrGroup)

Parent: authorization

Applies whentype = isInRoleOrGroup
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: existsSqlQuery isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue notExistsSqlQuery plSqlFunctionBody preferenceEqualsValue preferenceNotEqualsValue

Property Groups:
settings
error
advanced
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | names | string | Yes | | data type=string; maxLen=4000

 | type | enum | Yes | applicationRole | data type=string; maxLen=4000; lov=STATIC
Valid values: workspaceGroup applicationRole custom

Copy
settings {
 names: value
 type: workspaceGroup
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

 | evaluationType | enum | Yes | perPageView | data type=string; lov=STATIC
Valid values: perSession perPageView perComponent always

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 evaluationType: perSession
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=authorization

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
authorization sample (
 name: value
 type: existsSqlQuery
 settings {
 names: value
 type: workspaceGroup
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 evaluationType: perSession
 staticId: value
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

authorization isNotInRoleOrGroup - APEXlang Reference

authorization (isNotInRoleOrGroup)

Parent: authorization

Applies whentype = isNotInRoleOrGroup
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: existsSqlQuery isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue notExistsSqlQuery plSqlFunctionBody preferenceEqualsValue preferenceNotEqualsValue

Property Groups:
settings
error
advanced
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | names | string | Yes | | data type=string; maxLen=4000

 | type | enum | Yes | applicationRole | data type=string; maxLen=4000; lov=STATIC
Valid values: workspaceGroup applicationRole custom

Copy
settings {
 names: value
 type: workspaceGroup
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

 | evaluationType | enum | Yes | perPageView | data type=string; lov=STATIC
Valid values: perSession perPageView perComponent always

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 evaluationType: perSession
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=authorization

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
authorization sample (
 name: value
 type: existsSqlQuery
 settings {
 names: value
 type: workspaceGroup
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 evaluationType: perSession
 staticId: value
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

authorization itemEqualsValue - APEXlang Reference

authorization (itemEqualsValue)

Parent: authorization

Applies whentype = itemEqualsValue
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: existsSqlQuery isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue notExistsSqlQuery plSqlFunctionBody preferenceEqualsValue preferenceNotEqualsValue

Property Groups:
settings
error
advanced
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | value | string | Yes | | data type=string; maxLen=4000

Copy
settings {
 item: value
 value: value
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

 | evaluationType | enum | Yes | perPageView | data type=string; lov=STATIC
Valid values: perSession perPageView perComponent always

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 evaluationType: perSession
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=authorization

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
authorization sample (
 name: value
 type: existsSqlQuery
 settings {
 item: value
 value: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 evaluationType: perSession
 staticId: value
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

authorization itemIsNotNull - APEXlang Reference

authorization (itemIsNotNull)

Parent: authorization

Applies whentype = itemIsNotNull
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: existsSqlQuery isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue notExistsSqlQuery plSqlFunctionBody preferenceEqualsValue preferenceNotEqualsValue

Property Groups:
settings
error
advanced
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

Copy
settings {
 item: value
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

 | evaluationType | enum | Yes | perPageView | data type=string; lov=STATIC
Valid values: perSession perPageView perComponent always

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 evaluationType: perSession
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=authorization

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
authorization sample (
 name: value
 type: existsSqlQuery
 settings {
 item: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 evaluationType: perSession
 staticId: value
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

authorization itemIsNull - APEXlang Reference

authorization (itemIsNull)

Parent: authorization

Applies whentype = itemIsNull
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: existsSqlQuery isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue notExistsSqlQuery plSqlFunctionBody preferenceEqualsValue preferenceNotEqualsValue

Property Groups:
settings
error
advanced
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

Copy
settings {
 item: value
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

 | evaluationType | enum | Yes | perPageView | data type=string; lov=STATIC
Valid values: perSession perPageView perComponent always

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 evaluationType: perSession
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=authorization

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
authorization sample (
 name: value
 type: existsSqlQuery
 settings {
 item: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 evaluationType: perSession
 staticId: value
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

authorization itemNotEqualsValue - APEXlang Reference

authorization (itemNotEqualsValue)

Parent: authorization

Applies whentype = itemNotEqualsValue
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: existsSqlQuery isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue notExistsSqlQuery plSqlFunctionBody preferenceEqualsValue preferenceNotEqualsValue

Property Groups:
settings
error
advanced
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER

 | value | string | Yes | | data type=string; maxLen=4000

Copy
settings {
 item: value
 value: value
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

 | evaluationType | enum | Yes | perPageView | data type=string; lov=STATIC
Valid values: perSession perPageView perComponent always

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 evaluationType: perSession
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=authorization

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
authorization sample (
 name: value
 type: existsSqlQuery
 settings {
 item: value
 value: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 evaluationType: perSession
 staticId: value
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

authorization notExistsSqlQuery - APEXlang Reference

authorization (notExistsSqlQuery)

Parent: authorization

Applies whentype = notExistsSqlQuery
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: existsSqlQuery isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue notExistsSqlQuery plSqlFunctionBody preferenceEqualsValue preferenceNotEqualsValue

Property Groups:
settings
error
advanced
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | sqlQuery | string | Yes | | data type=string; maxLen=4000

Copy
settings {
 sqlQuery: value
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

 | evaluationType | enum | Yes | perPageView | data type=string; lov=STATIC
Valid values: perSession perPageView perComponent always

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 evaluationType: perSession
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=authorization

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
authorization sample (
 name: value
 type: existsSqlQuery
 settings {
 sqlQuery: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 evaluationType: perSession
 staticId: value
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

authorization plSqlFunctionBody - APEXlang Reference

authorization (plSqlFunctionBody)

Parent: authorization

Applies whentype = plSqlFunctionBody
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: existsSqlQuery isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue notExistsSqlQuery plSqlFunctionBody preferenceEqualsValue preferenceNotEqualsValue

Property Groups:
settings
error
advanced
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | plsqlFunctionBody | string | Yes | | data type=string; maxLen=4000

Copy
settings {
 plsqlFunctionBody: value
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

 | evaluationType | enum | Yes | perPageView | data type=string; lov=STATIC
Valid values: perSession perPageView perComponent always

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 evaluationType: perSession
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=authorization

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
authorization sample (
 name: value
 type: existsSqlQuery
 settings {
 plsqlFunctionBody: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 evaluationType: perSession
 staticId: value
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

authorization preferenceEqualsValue - APEXlang Reference

authorization (preferenceEqualsValue)

Parent: authorization

Applies whentype = preferenceEqualsValue
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: existsSqlQuery isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue notExistsSqlQuery plSqlFunctionBody preferenceEqualsValue preferenceNotEqualsValue

Property Groups:
settings
error
advanced
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | preferenceName | string | Yes | | data type=string; maxLen=4000

 | value | string | Yes | | data type=string; maxLen=4000

Copy
settings {
 preferenceName: value
 value: value
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

 | evaluationType | enum | Yes | perPageView | data type=string; lov=STATIC
Valid values: perSession perPageView perComponent always

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 evaluationType: perSession
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=authorization

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
authorization sample (
 name: value
 type: existsSqlQuery
 settings {
 preferenceName: value
 value: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 evaluationType: perSession
 staticId: value
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

authorization preferenceNotEqualsValue - APEXlang Reference

authorization (preferenceNotEqualsValue)

Parent: authorization

Applies whentype = preferenceNotEqualsValue
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: existsSqlQuery isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue notExistsSqlQuery plSqlFunctionBody preferenceEqualsValue preferenceNotEqualsValue

Property Groups:
settings
error
advanced
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | preferenceName | string | Yes | | data type=string; maxLen=4000

 | value | string | Yes | | data type=string; maxLen=4000

Copy
settings {
 preferenceName: value
 value: value
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

 | evaluationType | enum | Yes | perPageView | data type=string; lov=STATIC
Valid values: perSession perPageView perComponent always

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 evaluationType: perSession
 staticId: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=authorization

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
authorization sample (
 name: value
 type: existsSqlQuery
 settings {
 preferenceName: value
 value: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 evaluationType: perSession
 staticId: value
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
