# APEXlang: componentes con padre `pageTemplate` (APEX 26.1)


---

slot - APEXlang Reference

slot

Parent: pageTemplate

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=30

 | apexlangName | string | Yes | | data type=string; maxLen=40

 | staticId | string | Yes | | data type=string; maxLen=30; textCase=UPPER

Property Groups:
supports
gridLayout
comments

supports

 | Property | Type | Required | Default Value | Details

 | regions | boolean | Yes | true | data type=boolean

 | items | boolean | Yes | false | data type=boolean

 | buttons | boolean | Yes | false | data type=boolean

Copy
supports {
 regions: false
 items: false
 buttons: false
}

gridLayout

 | Property | Type | Required | Default Value | Details

 | gridSupport | boolean | Yes | true | data type=boolean

 | maxFixedColumns | integer | No | | data type=integer; maxLen=32767

 | newRow | boolean | Yes | true | data type=boolean

Copy
gridLayout {
 gridSupport: false
 maxFixedColumns: 42
 newRow: false
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
slot sample (
 name: value
 apexlangName: value
 staticId: value
 supports {
 regions: false
 items: false
 buttons: false
 }
 gridLayout {
 gridSupport: false
 maxFixedColumns: 42
 newRow: false
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

templateOption - APEXlang Reference

templateOption

Parent: pageTemplate

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
Valid values: @/8842.242/universal-theme/drawer/drawer-size-extra-large @/8842.242/universal-theme/drawer/drawer-size-large @/8842.242/universal-theme/drawer/drawer-size-medium @/8842.242/universal-theme/drawer/drawer-size-small @/8842.242/universal-theme/drawer/position-end @/8842.242/universal-theme/drawer/position-start @/8842.242/universal-theme/drawer/remove-body-padding @/8842.242/universal-theme/left-and-right-side-columns/sticky-header-on-mobile @/8842.242/universal-theme/left-side-column/sticky-header-on-mobile @/8842.242/universal-theme/login/page-background-1 @/8842.242/universal-theme/login/page-background-2 @/8842.242/universal-theme/login/page-background-3 @/8842.242/universal-theme/login/page-layout-split @/8842.242/universal-theme/marquee/sticky-header-on-mobile @/8842.242/universal-theme/minimal-no-navigation/sticky-header-on-mobile @/8842.242/universal-theme/modal-dialog/remove-body-padding @/8842.242/universal-theme/modal-dialog/stretch-to-fit-window @/8842.242/universal-theme/right-side-column/sticky-header-on-mobile @/8842.242/universal-theme/standard/sticky-header-on-mobile @/8842.242/universal-theme/wizard-modal-dialog/remove-body-padding @/8842.242/universal-theme/wizard-modal-dialog/stretch-to-fit-window @/8842.261/universal-theme/blank/contain-body-content @/8842.261/universal-theme/drawer/drawer-size-extra-large @/8842.261/universal-theme/drawer/drawer-size-large @/8842.261/universal-theme/drawer/drawer-size-medium @/8842.261/universal-theme/drawer/drawer-size-small @/8842.261/universal-theme/drawer/position-bottom @/8842.261/universal-theme/drawer/position-end @/8842.261/universal-theme/drawer/position-start @/8842.261/universal-theme/drawer/position-top @/8842.261/universal-theme/drawer/remove-body-padding @/8842.261/universal-theme/left-and-right-side-columns/sticky-header-on-mobile @/8842.261/universal-theme/left-side-column/sticky-header-on-mobile @/8842.261/universal-theme/login/page-background-1 @/8842.261/universal-theme/login/page-background-2 @/8842.261/universal-theme/login/page-background-3 @/8842.261/universal-theme/login/page-layout-split @/8842.261/universal-theme/marquee/sticky-header-on-mobile @/8842.261/universal-theme/minimal-no-navigation/sticky-header-on-mobile @/8842.261/universal-theme/modal-dialog/remove-body-padding @/8842.261/universal-theme/modal-dialog/stretch-to-fit-window @/8842.261/universal-theme/right-side-column/sticky-header-on-mobile @/8842.261/universal-theme/standard/sticky-header-on-mobile @/8842.261/universal-theme/wizard-modal-dialog/remove-body-padding @/8842.261/universal-theme/wizard-modal-dialog/stretch-to-fit-window

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
