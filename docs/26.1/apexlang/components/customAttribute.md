# APEXlang: componentes con padre `customAttribute` (APEX 26.1)


---

entry - APEXlang Reference

entry

Parent: customAttribute

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | apexlangName | string | Yes | | data type=string; maxLen=40

Property Groups:
entry
help
advanced

entry

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | display | string | Yes | | data type=string; maxLen=255

 | return | string | Yes | | data type=string; maxLen=255

Copy
entry {
 sequence: 42
 display: value
 return: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | quickPick | boolean | Yes | false | data type=boolean

 | deprecated | boolean | Yes | false | data type=boolean

Copy
advanced {
 quickPick: false
 deprecated: false
}

APEXlang Example

Copy
entry sample (
 apexlangName: value
 entry {
 sequence: 42
 display: value
 return: value
 }
 help {
 helpText: ```
 value
 ```
 }
 advanced {
 quickPick: false
 deprecated: false
 }
)
