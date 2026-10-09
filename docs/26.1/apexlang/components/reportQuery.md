# APEXlang: componentes con padre `reportQuery` (APEX 26.1)


---

sourceQuery - APEXlang Reference

sourceQuery

Parent: reportQuery

Children: parameterlocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable = false; location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = false; location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable = false

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | sequence | integer | Yes | | data type=integer; maxLen=32767

Property Groups:
dataLoop
source
dataProfile
restSynchronization
externalFilterAndOrderBy
localPostProcessing
remoteCache

dataLoop

 | Property | Type | Required | Default Value | Details

 | name | string | No | | data type=string; maxLen=255
Applies whentype = useInstanceSettingsremotePrintServer supports AOP_SERVER

Copy
dataLoop {
 name: value
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql restSource jsonDualityView jsonSource sampleData

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whenlocation = restEnabledSql

 | sampleData | enum | Yes | | data type=string; lov=STATIC
Valid values: employees tasks products projects
Applies whenlocation = sampleData

 | type | enum | Yes | tableView | data type=string; lov=STATIC
Valid values: tableView sqlQuery functionBody propertyGraph
Applies whenlocation in (localDatabase)location in (restEnabledSql)

 | tableOwner | string | No | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase) and type = tableViewlocation in (restEnabledSql) and type = tableView

 | tableName | string | Yes | | data type=string; maxLen=128
Applies whenlocation in (localDatabase) and type = tableViewlocation in (restEnabledSql) and type = tableView

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenlocation in (localDatabase) and type = tableViewlocation in (restEnabledSql) and type = tableView

 | graphOwner | string | No | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase) and type = propertyGraphlocation in (restEnabledSql) and type = propertyGraph

 | graphName | string | Yes | | data type=string; maxLen=32767
Applies whenlocation in (localDatabase) and type = propertyGraphlocation in (restEnabledSql) and type = propertyGraph

 | matchClause | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenlocation in (localDatabase) and type = propertyGraphlocation in (restEnabledSql) and type = propertyGraph

 | columnsClause | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenlocation in (localDatabase) and type = propertyGraphlocation in (restEnabledSql) and type = propertyGraph

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenlocation in (localDatabase) and type = propertyGraphlocation in (restEnabledSql) and type = propertyGraph

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=255
Applies whenlocation in (localDatabase) and type = tableViewlocation in (restEnabledSql) and type = tableView

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=255
Applies whenlocation in (localDatabase) and type = propertyGraphlocation in (restEnabledSql) and type = propertyGraph

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation in (localDatabase) and type = sqlQuerylocation in (restEnabledSql) and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation in (localDatabase) and type = functionBodylocation in (restEnabledSql) and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation in (localDatabase) and type = functionBody and language = plsqllocation in (restEnabledSql) and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation in (localDatabase) and type = functionBody and language = javaScript-mlelocation in (restEnabledSql) and type = functionBody and language = javaScript-mle

 | restSource | reference | Yes | | data type=reference; lov=COMPONENT; references=restDataSource
Applies whenlocation = restSource

 | jsonDualityView | reference | Yes | | data type=reference; lov=COMPONENT; references=jsonDualityView
Applies whenlocation = jsonDualityView

 | jsonSource | reference | Yes | | data type=reference; lov=COMPONENT; references=jsonSource
Applies whenlocation = jsonSource

 | optimizerHint | string | No | | data type=string; maxLen=255
Applies whenlocation in (localDatabase)location in (restEnabledSql)location in (restSource)location in (jsonDualityView)location in (jsonSource)

Copy
source {
 location: localDatabase
 remoteServer: @component
 sampleData: employees
 type: tableView
 tableOwner: value
 tableName: value
 whereClause: ```sql
 value
 ```
 graphOwner: value
 graphName: value
 matchClause: ```
 value
 ```
 columnsClause: ```
 value
 ```
 orderByClause: ```sql
 value
 ```
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
 restSource: @component
 jsonDualityView: @component
 jsonSource: @component
 optimizerHint: value
}

dataProfile

 | Property | Type | Required | Default Value | Details

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whenlocation = restSource and restSource supports HAS_ARRAY_COLUMNS

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whenlocation = jsonDualityView and jsonDualityView supports HAS_ARRAY_COLUMNS

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whenlocation = jsonSource and jsonSource supports HAS_ARRAY_COLUMNS

Copy
dataProfile {
 nestedRows: @component
}

restSynchronization

 | Property | Type | Required | Default Value | Details

 | useLocalTable | boolean | Yes | false | data type=boolean
Applies whenlocation = restSource and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNSlocation = restSource and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNSlocation = restSource and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED

Copy
restSynchronization {
 useLocalTable: false
}

externalFilterAndOrderBy

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean
Applies whenlocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false)location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$)location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false)location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$)location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false)location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$)

 | filter | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenlocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true

 | orderBy | multiline string | No | | data type=multiline string; maxLen=255
Applies whenlocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = truelocation = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true

Copy
externalFilterAndOrderBy {
 enabled: false
 filter: ```
 value
 ```
 orderBy: ```
 value
 ```
}

localPostProcessing

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whenlocation = restSource and restSource is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenlocation = restSource and restSource is set and type = whereOrderByClause

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=255
Applies whenlocation = restSource and restSource is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restSource and restSource is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = restSource and restSource is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restSource and restSource is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = restSource and restSource is set and type = plsqlFunctionBody and language = javaScript-mle

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whenlocation = jsonDualityView and jsonDualityView is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenlocation = jsonDualityView and jsonDualityView is set and type = whereOrderByClause

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=255
Applies whenlocation = jsonDualityView and jsonDualityView is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = jsonDualityView and jsonDualityView is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody and language = javaScript-mle

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whenlocation = jsonSource and jsonSource is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenlocation = jsonSource and jsonSource is set and type = whereOrderByClause

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=255
Applies whenlocation = jsonSource and jsonSource is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = jsonSource and jsonSource is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whenlocation = jsonSource and jsonSource is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = jsonSource and jsonSource is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whenlocation = jsonSource and jsonSource is set and type = plsqlFunctionBody and language = javaScript-mle

Copy
localPostProcessing {
 type: whereOrderByClause
 whereClause: ```sql
 value
 ```
 orderByClause: ```sql
 value
 ```
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
}

remoteCache

 | Property | Type | Required | Default Value | Details

 | caching | enum | No | | data type=string; lov=STATIC
Valid values: allUsers user session
Applies whenlocation = restEnabledSql

 | timeout | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whenlocation = restEnabledSql and caching is set

Copy
remoteCache {
 caching: allUsers
 timeout: ```
 value
 ```
}

APEXlang Example

Copy
sourceQuery sample (
 name: value
 sequence: 42
 dataLoop {
 name: value
 }
 source {
 location: localDatabase
 remoteServer: @component
 sampleData: employees
 type: tableView
 tableOwner: value
 tableName: value
 whereClause: ```sql
 value
 ```
 graphOwner: value
 graphName: value
 matchClause: ```
 value
 ```
 columnsClause: ```
 value
 ```
 orderByClause: ```sql
 value
 ```
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
 restSource: @component
 jsonDualityView: @component
 jsonSource: @component
 optimizerHint: value
 }
 dataProfile {
 nestedRows: @component
 }
 restSynchronization {
 useLocalTable: false
 }
 externalFilterAndOrderBy {
 enabled: false
 filter: ```
 value
 ```
 orderBy: ```
 value
 ```
 }
 localPostProcessing {
 type: whereOrderByClause
 whereClause: ```sql
 value
 ```
 orderByClause: ```sql
 value
 ```
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
 }
 remoteCache {
 caching: allUsers
 timeout: ```
 value
 ```
 }
)
