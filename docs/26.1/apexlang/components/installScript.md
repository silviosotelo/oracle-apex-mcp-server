# APEXlang: componentes con padre `installScript` (APEX 26.1)


---

databaseObject - APEXlang Reference

databaseObject

Parent: installScript

Property Groups:
dbObject

dbObject

 | Property | Type | Required | Default Value | Details

 | owner | string | No | | data type=string; maxLen=32767

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: databaseLink function index materializedView mleEnvironment mleModule package procedure sequence synonym table trigger type view

 | name | string | Yes | | data type=string; maxLen=128

Copy
dbObject {
 owner: value
 type: databaseLink
 name: value
}

APEXlang Example

Copy
databaseObject sample (
 dbObject {
 owner: value
 type: databaseLink
 name: value
 }
)
