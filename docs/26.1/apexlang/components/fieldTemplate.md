# APEXlang: componentes con padre `fieldTemplate` (APEX 26.1)


---

templateOption - APEXlang Reference

templateOption

Parent: fieldTemplate

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=30

 | group | reference | No | | data type=reference; lov=COMPONENT; references=templateOptionGroup

 | sequence | integer | Yes | | data type=integer; maxLen=32767

Property Groups:
appearance
help
advanced
subscription

appearance

 | Property | Type | Required | Default Value | Details

 | cssClasses | array of strings | Yes | | data type=string; maxLen=255

Copy
appearance {
 cssClasses: [
 value
 value
 ]
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

 | isAdvancedOption | boolean | Yes | false | data type=boolean

 | staticId | string | Yes | | data type=string; maxLen=255

 | identifier | string | No | | data type=string; maxLen=255

Copy
advanced {
 isAdvancedOption: false
 staticId: value
 identifier: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=templateOption

 | master | enum | No | | data type=reference; lov=COMPONENT; references=templateOption
Valid values: @/8842.242/universal-theme/required-above/indicator-asterisk @/8842.242/universal-theme/required-above/indicator-label @/8842.242/universal-theme/required-floating/indicator-asterisk @/8842.242/universal-theme/required-floating/indicator-label @/8842.242/universal-theme/required/indicator-asterisk @/8842.242/universal-theme/required/indicator-label @/8842.261/universal-theme/required-above/indicator-asterisk @/8842.261/universal-theme/required-above/indicator-label @/8842.261/universal-theme/required-floating/indicator-asterisk @/8842.261/universal-theme/required-floating/indicator-label @/8842.261/universal-theme/required/indicator-asterisk @/8842.261/universal-theme/required/indicator-label @/8842.9999/theme-1000/Item/hide-label

Copy
subscription {
 master: @component
}

APEXlang Example

Copy
templateOption sample (
 name: value
 group: @component
 sequence: 42
 appearance {
 cssClasses: [
 value
 value
 ]
 }
 help {
 helpText: ```
 value
 ```
 }
 advanced {
 isAdvancedOption: false
 staticId: value
 identifier: value
 }
 subscription {
 master: @component
 }
)
