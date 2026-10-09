# APEXlang: componentes con padre `theme` (APEX 26.1)


---

breadcrumbTemplate - APEXlang Reference

breadcrumbTemplate

Parent: theme

Children: templateOption

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | templateClass | enum | No | | data type=string; lov=STATIC
Valid values: breadcrumb hierarchical custom1 custom2 custom3 custom4 custom5 custom6 custom7 custom8

Property Groups:
templateOptions
breadcrumb
entry
advanced
subscription
comments

templateOptions

 | Property | Type | Required | Default Value | Details

 | preset | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

 | default | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

Copy
templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
}

breadcrumb

 | Property | Type | Required | Default Value | Details

 | startWith | enum | Yes | parentToLeaf | data type=string; lov=STATIC
Valid values: childBreadcrumbEntries currentBreadcrumb parentBreadcrumbEntries parentToLeaf

 | beforeEntries | multiline string | No | | data type=multiline string; maxLen=4000

 | betweenEntries | multiline string | No | | data type=multiline string; maxLen=4000

 | maxEntries | integer | Yes | 12 | data type=integer; maxLen=32767

 | afterEntries | multiline string | No | | data type=multiline string; maxLen=4000

Copy
breadcrumb {
 startWith: childBreadcrumbEntries
 beforeEntries: ```html
 value
 ```
 betweenEntries: ```html
 value
 ```
 maxEntries: 42
 afterEntries: ```html
 value
 ```
}

entry

 | Property | Type | Required | Default Value | Details

 | currentPage | multiline string | No | | data type=multiline string; maxLen=4000

 | nonCurrentPage | multiline string | No | | data type=multiline string; maxLen=4000

 | linkAttributes | string | No | | data type=string; maxLen=4000

Copy
entry {
 currentPage: ```html
 value
 ```
 nonCurrentPage: ```html
 value
 ```
 linkAttributes: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | identifier | string | No | | data type=string; maxLen=255

 | translatable | boolean | Yes | false | data type=boolean

Copy
advanced {
 staticId: value
 identifier: value
 translatable: false
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=breadcrumbTemplate

 | master | enum | No | | data type=reference; lov=COMPONENT; references=breadcrumbTemplate
Valid values: @/8842.242/universal-theme/breadcrumb @/8842.261/universal-theme/breadcrumb @/8842.9999/theme-1000/Breadcrumb

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
breadcrumbTemplate sample (
 name: value
 templateClass: breadcrumb
 templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
 }
 breadcrumb {
 startWith: childBreadcrumbEntries
 beforeEntries: ```html
 value
 ```
 betweenEntries: ```html
 value
 ```
 maxEntries: 42
 afterEntries: ```html
 value
 ```
 }
 entry {
 currentPage: ```html
 value
 ```
 nonCurrentPage: ```html
 value
 ```
 linkAttributes: value
 }
 advanced {
 staticId: value
 identifier: value
 translatable: false
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

buttonTemplate - APEXlang Reference

buttonTemplate

Parent: theme

Children: templateOption

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | templateClass | enum | No | | data type=string; lov=STATIC
Valid values: button buttonAlternative1 buttonAlternative2 buttonAlternative3 custom1 custom2 custom3 custom4 custom5 custom6 custom7 custom8

Property Groups:
templateOptions
button
advanced
subscription
comments

templateOptions

 | Property | Type | Required | Default Value | Details

 | preset | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

 | default | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

Copy
templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
}

button

 | Property | Type | Required | Default Value | Details

 | normal | multiline string | Yes | | data type=multiline string; maxLen=4000

 | hot | multiline string | No | | data type=multiline string; maxLen=4000

Copy
button {
 normal: ```html
 value
 ```
 hot: ```html
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | identifier | string | No | | data type=string; maxLen=255

 | translatable | boolean | Yes | false | data type=boolean

Copy
advanced {
 staticId: value
 identifier: value
 translatable: false
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=buttonTemplate

 | master | enum | No | | data type=reference; lov=COMPONENT; references=buttonTemplate
Valid values: @/8842.242/universal-theme/icon @/8842.242/universal-theme/text @/8842.242/universal-theme/text-with-icon @/8842.261/universal-theme/icon @/8842.261/universal-theme/text @/8842.261/universal-theme/text-with-icon @/8842.9999/theme-1000/Button

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
buttonTemplate sample (
 name: value
 templateClass: button
 templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
 }
 button {
 normal: ```html
 value
 ```
 hot: ```html
 value
 ```
 }
 advanced {
 staticId: value
 identifier: value
 translatable: false
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

classicReportTemplate - APEXlang Reference

classicReportTemplate

Parent: theme

Children: templateOption

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | templateClass | enum | No | | data type=string; lov=STATIC
Valid values: borderless horizontalBorder oneColumnUnorderedList standard standardAlternatingRowColors valueAttributePairs custom1 custom2 custom3 custom4 custom5 custom6 custom7 custom8

 | type | enum | No | | data type=string; lov=STATIC
Valid values: genericColumns namedColumn

Property Groups:
templateOptions
reportTemplate
columnTemplates
columnTemplate1
columnTemplate2
columnTemplate3
columnTemplate4
rowTemplate1
rowTemplate2
rowTemplate3
rowTemplate4
rowTemplates
rowHighlighting
pagination
javaScript
css
advanced
subscription
comments

templateOptions

 | Property | Type | Required | Default Value | Details

 | preset | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

 | default | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

Copy
templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
}

reportTemplate

 | Property | Type | Required | Default Value | Details

 | top | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = genericColumns

 | top | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = namedColumn

 | bottom | multiline string | No | | data type=multiline string; maxLen=32767

Copy
reportTemplate {
 top: ```html
 value
 ```
 bottom: ```html
 value
 ```
}

columnTemplates

 | Property | Type | Required | Default Value | Details

 | beforeHeading | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = genericColumns

 | heading | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = genericColumns

 | heading | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = namedColumn

 | afterHeading | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = genericColumns

 | beforeEachRow | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = genericColumns

Copy
columnTemplates {
 beforeHeading: ```html
 value
 ```
 heading: ```html
 value
 ```
 afterHeading: ```html
 value
 ```
 beforeEachRow: ```html
 value
 ```
}

columnTemplate1

 | Property | Type | Required | Default Value | Details

 | template | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = genericColumns

 | conditionType | enum | No | | data type=string; lov=STATIC
Valid values: plsqlExpression evenRowNos oddRowNos
Applies whentype = genericColumns and template is set

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = genericColumns and template is set and conditionType = plsqlExpression

Copy
columnTemplate1 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
}

columnTemplate2

 | Property | Type | Required | Default Value | Details

 | template | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = genericColumns

 | conditionType | enum | No | | data type=string; lov=STATIC
Valid values: plsqlExpression evenRowNos oddRowNos
Applies whentype = genericColumns and template is set

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = genericColumns and template is set and conditionType = plsqlExpression

Copy
columnTemplate2 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
}

columnTemplate3

 | Property | Type | Required | Default Value | Details

 | template | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = genericColumns

 | conditionType | enum | No | | data type=string; lov=STATIC
Valid values: plsqlExpression evenRowNos oddRowNos
Applies whentype = genericColumns and template is set

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = genericColumns and template is set and conditionType = plsqlExpression

Copy
columnTemplate3 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
}

columnTemplate4

 | Property | Type | Required | Default Value | Details

 | template | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = genericColumns

 | conditionType | enum | No | | data type=string; lov=STATIC
Valid values: plsqlExpression evenRowNos oddRowNos
Applies whentype = genericColumns and template is set

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = genericColumns and template is set and conditionType = plsqlExpression

Copy
columnTemplate4 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
}

rowTemplate1

 | Property | Type | Required | Default Value | Details

 | template | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = namedColumn

 | conditionType | enum | No | | data type=string; lov=STATIC
Valid values: plsqlExpression evenRowNos oddRowNos
Applies whentype = namedColumn and template is set

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = namedColumn and template is set and conditionType = plsqlExpression

Copy
rowTemplate1 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
}

rowTemplate2

 | Property | Type | Required | Default Value | Details

 | template | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = namedColumn

 | conditionType | enum | No | | data type=string; lov=STATIC
Valid values: plsqlExpression evenRowNos oddRowNos
Applies whentype = namedColumn and template is set

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = namedColumn and template is set and conditionType = plsqlExpression

Copy
rowTemplate2 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
}

rowTemplate3

 | Property | Type | Required | Default Value | Details

 | template | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = namedColumn

 | conditionType | enum | No | | data type=string; lov=STATIC
Valid values: plsqlExpression evenRowNos oddRowNos
Applies whentype = namedColumn and template is set

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = namedColumn and template is set and conditionType = plsqlExpression

Copy
rowTemplate3 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
}

rowTemplate4

 | Property | Type | Required | Default Value | Details

 | template | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = namedColumn

 | conditionType | enum | No | | data type=string; lov=STATIC
Valid values: plsqlExpression evenRowNos oddRowNos
Applies whentype = namedColumn and template is set

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = namedColumn and template is set and conditionType = plsqlExpression

Copy
rowTemplate4 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
}

rowTemplates

 | Property | Type | Required | Default Value | Details

 | afterEachRow | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = genericColumns

Copy
rowTemplates {
 afterEachRow: ```html
 value
 ```
}

rowHighlighting

 | Property | Type | Required | Default Value | Details

 | checkedRow | string | No | | data type=string; maxLen=255
Applies whentype = genericColumns

 | currentRow | string | No | | data type=string; maxLen=255
Applies whentype = genericColumns

Copy
rowHighlighting {
 checkedRow: value
 currentRow: value
}

pagination

 | Property | Type | Required | Default Value | Details

 | template | multiline string | No | | data type=multiline string; maxLen=32767

 | nextPage | multiline string | No | | data type=multiline string; maxLen=32767

 | previousPage | multiline string | No | | data type=multiline string; maxLen=32767

 | nextSet | multiline string | No | | data type=multiline string; maxLen=32767

 | previousSet | multiline string | No | | data type=multiline string; maxLen=32767

Copy
pagination {
 template: ```html
 value
 ```
 nextPage: ```html
 value
 ```
 previousPage: ```html
 value
 ```
 nextSet: ```html
 value
 ```
 previousSet: ```html
 value
 ```
}

javaScript

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

 | executeWhenPageLoads | multiline string | No | | data type=multiline string; maxLen=4000

Copy
javaScript {
 fileUrls: [
 value
 value
 ]
 executeWhenPageLoads: ```javascript-browser
 value
 ```
}

css

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

Copy
css {
 fileUrls: [
 value
 value
 ]
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | identifier | string | No | | data type=string; maxLen=255

 | translatable | boolean | Yes | false | data type=boolean

Copy
advanced {
 staticId: value
 identifier: value
 translatable: false
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=classicReportTemplate

 | master | enum | No | | data type=reference; lov=COMPONENT; references=classicReportTemplate
Valid values: @/8842.242/universal-theme/alerts @/8842.242/universal-theme/badge-list @/8842.242/universal-theme/cards @/8842.242/universal-theme/comments @/8842.242/universal-theme/content-row @/8842.242/universal-theme/contextual-info @/8842.242/universal-theme/media-list @/8842.242/universal-theme/search-results @/8842.242/universal-theme/standard @/8842.242/universal-theme/timeline @/8842.242/universal-theme/value-attribute-pairs-column @/8842.242/universal-theme/value-attribute-pairs-row @/8842.261/universal-theme/alerts @/8842.261/universal-theme/badge-list @/8842.261/universal-theme/cards @/8842.261/universal-theme/comments @/8842.261/universal-theme/content-row @/8842.261/universal-theme/contextual-info @/8842.261/universal-theme/media-list @/8842.261/universal-theme/search-results @/8842.261/universal-theme/standard @/8842.261/universal-theme/timeline @/8842.261/universal-theme/value-attribute-pairs-column @/8842.261/universal-theme/value-attribute-pairs-row @/8842.9999/theme-1000/Report

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
classicReportTemplate sample (
 name: value
 templateClass: borderless
 type: genericColumns
 templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
 }
 reportTemplate {
 top: ```html
 value
 ```
 bottom: ```html
 value
 ```
 }
 columnTemplates {
 beforeHeading: ```html
 value
 ```
 heading: ```html
 value
 ```
 afterHeading: ```html
 value
 ```
 beforeEachRow: ```html
 value
 ```
 }
 columnTemplate1 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
 }
 columnTemplate2 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
 }
 columnTemplate3 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
 }
 columnTemplate4 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
 }
 rowTemplate1 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
 }
 rowTemplate2 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
 }
 rowTemplate3 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
 }
 rowTemplate4 {
 template: ```html
 value
 ```
 conditionType: plsqlExpression
 plsqlExpression: ```plsql
 value
 ```
 }
 rowTemplates {
 afterEachRow: ```html
 value
 ```
 }
 rowHighlighting {
 checkedRow: value
 currentRow: value
 }
 pagination {
 template: ```html
 value
 ```
 nextPage: ```html
 value
 ```
 previousPage: ```html
 value
 ```
 nextSet: ```html
 value
 ```
 previousSet: ```html
 value
 ```
 }
 javaScript {
 fileUrls: [
 value
 value
 ]
 executeWhenPageLoads: ```javascript-browser
 value
 ```
 }
 css {
 fileUrls: [
 value
 value
 ]
 }
 advanced {
 staticId: value
 identifier: value
 translatable: false
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

fieldTemplate - APEXlang Reference

fieldTemplate

Parent: theme

Children: templateOption

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | templateClass | enum | No | | data type=string; lov=STATIC
Valid values: noLabel optionalLabel optionalLabelWithHelp requiredLabel requiredLabelWithHelp custom1 custom2 custom3 custom4 custom5 custom6 custom7 custom8

Property Groups:
templateOptions
label
item
help
error
fieldContainer
advanced
subscription
comments

templateOptions

 | Property | Type | Required | Default Value | Details

 | preset | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

 | default | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

Copy
templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
}

label

 | Property | Type | Required | Default Value | Details

 | before | multiline string | No | | data type=multiline string; maxLen=4000

 | after | multiline string | No | | data type=multiline string; maxLen=4000

Copy
label {
 before: ```html
 value
 ```
 after: ```html
 value
 ```
}

item

 | Property | Type | Required | Default Value | Details

 | before | multiline string | No | | data type=multiline string; maxLen=4000

 | after | multiline string | No | | data type=multiline string; maxLen=4000

 | preText | multiline string | No | | data type=multiline string; maxLen=4000

 | postText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
item {
 before: ```html
 value
 ```
 after: ```html
 value
 ```
 preText: ```html
 value
 ```
 postText: ```html
 value
 ```
}

help

 | Property | Type | Required | Default Value | Details

 | invoke | multiline string | No | | data type=multiline string; maxLen=4000

 | inline | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 invoke: ```html
 value
 ```
 inline: ```html
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | beforeLabel | multiline string | No | | data type=multiline string; maxLen=4000

 | afterLabel | multiline string | No | | data type=multiline string; maxLen=4000

 | errorTemplate | multiline string | No | | data type=multiline string; maxLen=4000

Copy
error {
 beforeLabel: ```html
 value
 ```
 afterLabel: ```html
 value
 ```
 errorTemplate: ```html
 value
 ```
}

fieldContainer

 | Property | Type | Required | Default Value | Details

 | beforeLabelAndItem | multiline string | No | | data type=multiline string; maxLen=4000

 | afterLabelAndItem | multiline string | No | | data type=multiline string; maxLen=4000

Copy
fieldContainer {
 beforeLabelAndItem: ```html
 value
 ```
 afterLabelAndItem: ```html
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | identifier | string | No | | data type=string; maxLen=255

 | translatable | boolean | Yes | false | data type=boolean

Copy
advanced {
 staticId: value
 identifier: value
 translatable: false
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=fieldTemplate

 | master | enum | No | | data type=reference; lov=COMPONENT; references=fieldTemplate
Valid values: @/8842.242/universal-theme/hidden @/8842.242/universal-theme/optional @/8842.242/universal-theme/optional-above @/8842.242/universal-theme/optional-floating @/8842.242/universal-theme/required @/8842.242/universal-theme/required-above @/8842.242/universal-theme/required-floating @/8842.261/universal-theme/hidden @/8842.261/universal-theme/optional @/8842.261/universal-theme/optional-above @/8842.261/universal-theme/optional-floating @/8842.261/universal-theme/required @/8842.261/universal-theme/required-above @/8842.261/universal-theme/required-floating @/8842.9999/theme-1000/Item

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
fieldTemplate sample (
 name: value
 templateClass: noLabel
 templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
 }
 label {
 before: ```html
 value
 ```
 after: ```html
 value
 ```
 }
 item {
 before: ```html
 value
 ```
 after: ```html
 value
 ```
 preText: ```html
 value
 ```
 postText: ```html
 value
 ```
 }
 help {
 invoke: ```html
 value
 ```
 inline: ```html
 value
 ```
 }
 error {
 beforeLabel: ```html
 value
 ```
 afterLabel: ```html
 value
 ```
 errorTemplate: ```html
 value
 ```
 }
 fieldContainer {
 beforeLabelAndItem: ```html
 value
 ```
 afterLabelAndItem: ```html
 value
 ```
 }
 advanced {
 staticId: value
 identifier: value
 translatable: false
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

file - APEXlang Reference

file

Parent: theme

Property Groups:
file
subscription

file

 | Property | Type | Required | Default Value | Details

 | fileName | string | Yes | | data type=string; maxLen=255

 | content | blob | No | | data type=blob; maxLen=32767

 | mimeType | string | Yes | | data type=string; maxLen=255

 | charSet | enum | No | | data type=string; maxLen=128; lov=STATIC
Valid values: iso-8859-6 windows-1256 big5 gbk iso-8859-5 koi8-r koi8-u windows-1251 iso-8859-2 windows-1250 iso-8859-7 windows-1253 iso-8859-8-i windows-1255 euc-jp shift-jis euc-kr iso-8859-4 windows-1257 iso-8859-3 tis-620 iso-8859-9 windows-1254 us-ascii utf-16be utf-16le utf-8 windows-1258 iso-8859-1 windows-1252

Copy
file {
 fileName: value
 content: value
 mimeType: value
 charSet: iso-8859-6
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=file

 | master | reference | No | | data type=reference; lov=COMPONENT; references=file

Copy
subscription {
 master: @component
}

APEXlang Example

Copy
file sample (
 file {
 fileName: value
 content: value
 mimeType: value
 charSet: iso-8859-6
 }
 subscription {
 master: @component
 }
)

---

globalTemplateOption - APEXlang Reference

globalTemplateOption

Parent: theme

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | templateType | enum | Yes | | data type=string; lov=STATIC
Valid values: button item region report list page breadcrumb

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

 | master | reference | No | | data type=reference; lov=COMPONENT; references=globalTemplateOption

 | master | enum | No | | data type=reference; lov=COMPONENT; references=globalTemplateOption
Valid values: @/8842.242/universal-theme/danger/button @/8842.242/universal-theme/deferred-page-rendering/page @/8842.242/universal-theme/display-as-link/button @/8842.242/universal-theme/display-as-pill-button/item @/8842.242/universal-theme/display-text-style-bold/item @/8842.242/universal-theme/display-text-style-normal/item @/8842.242/universal-theme/fbm-large/item @/8842.242/universal-theme/fbm-medium/item @/8842.242/universal-theme/fbm-none/item @/8842.242/universal-theme/fbm-small/item @/8842.242/universal-theme/flm-large/item @/8842.242/universal-theme/flm-medium/item @/8842.242/universal-theme/flm-none/item @/8842.242/universal-theme/flm-small/item @/8842.242/universal-theme/formleftlabels/region @/8842.242/universal-theme/formremovepadding/region @/8842.242/universal-theme/formsizelarge/region @/8842.242/universal-theme/formsizexlarge/region @/8842.242/universal-theme/formslimpadding/region @/8842.242/universal-theme/formstandardpadding/region @/8842.242/universal-theme/frm-large/item @/8842.242/universal-theme/frm-medium/item @/8842.242/universal-theme/frm-none/item @/8842.242/universal-theme/frm-small/item @/8842.242/universal-theme/ftm-large/item @/8842.242/universal-theme/ftm-medium/item @/8842.242/universal-theme/ftm-none/item @/8842.242/universal-theme/ftm-small/item @/8842.242/universal-theme/h4/region @/8842.242/universal-theme/heading-level-h1/region @/8842.242/universal-theme/heading-level-h2/region @/8842.242/universal-theme/heading-level-h3/region @/8842.242/universal-theme/heading-level-h5/region @/8842.242/universal-theme/heading-level-h6/region @/8842.242/universal-theme/hide-password-visibility/item @/8842.242/universal-theme/hide-when-all-rows-displayed/report @/8842.242/universal-theme/item-remove-padding/item @/8842.242/universal-theme/item-slim-padding/item @/8842.242/universal-theme/large-field/item @/8842.242/universal-theme/large/button @/8842.242/universal-theme/largebottommargin/button @/8842.242/universal-theme/largeleftmargin/button @/8842.242/universal-theme/largerightmargin/button @/8842.242/universal-theme/largetopmargin/button @/8842.242/universal-theme/noui/button @/8842.242/universal-theme/pill/button @/8842.242/universal-theme/pillend/button @/8842.242/universal-theme/pillstart/button @/8842.242/universal-theme/post-text-block/item @/8842.242/universal-theme/pre-text-block/item @/8842.242/universal-theme/primary/button @/8842.242/universal-theme/rbm-large/region @/8842.242/universal-theme/rbm-medium/region @/8842.242/universal-theme/rbm-none/region @/8842.242/universal-theme/rbm-small/region @/8842.242/universal-theme/remove-padding/page @/8842.242/universal-theme/rlm-large/region @/8842.242/universal-theme/rlm-medium/region @/8842.242/universal-theme/rlm-none/region @/8842.242/universal-theme/rlm-small/region @/8842.242/universal-theme/rrm-large/region @/8842.242/universal-theme/rrm-medium/region @/8842.242/universal-theme/rrm-none/region @/8842.242/universal-theme/rrm-small/region @/8842.242/universal-theme/rtm-large/region @/8842.242/universal-theme/rtm-medium/region @/8842.242/universal-theme/rtm-none/region @/8842.242/universal-theme/rtm-small/region @/8842.242/universal-theme/showformlabelsabove/region @/8842.242/universal-theme/simple/button @/8842.242/universal-theme/small/button @/8842.242/universal-theme/smallbottommargin/button @/8842.242/universal-theme/smallleftmargin/button @/8842.242/universal-theme/smallrightmargin/button @/8842.242/universal-theme/smalltopmargin/button @/8842.242/universal-theme/sort-center/region @/8842.242/universal-theme/sort-end/region @/8842.242/universal-theme/stretch-form-fields/region @/8842.242/universal-theme/stretch-form-item/item @/8842.242/universal-theme/stretch/button @/8842.242/universal-theme/success/button @/8842.242/universal-theme/tiny/button @/8842.242/universal-theme/warning/button @/8842.242/universal-theme/x-large-size/item @/8842.261/universal-theme/bottom/page @/8842.261/universal-theme/danger/button @/8842.261/universal-theme/deferred-page-rendering/page @/8842.261/universal-theme/display-as-link/button @/8842.261/universal-theme/display-as-pill-button/item @/8842.261/universal-theme/display-text-style-bold/item @/8842.261/universal-theme/display-text-style-normal/item @/8842.261/universal-theme/fbm-large/item @/8842.261/universal-theme/fbm-medium/item @/8842.261/universal-theme/fbm-none/item @/8842.261/universal-theme/fbm-small/item @/8842.261/universal-theme/flm-large/item @/8842.261/universal-theme/flm-medium/item @/8842.261/universal-theme/flm-none/item @/8842.261/universal-theme/flm-small/item @/8842.261/universal-theme/formleftlabels/region @/8842.261/universal-theme/formremovepadding/region @/8842.261/universal-theme/formsizelarge/region @/8842.261/universal-theme/formsizexlarge/region @/8842.261/universal-theme/formslimpadding/region @/8842.261/universal-theme/formstandardpadding/region @/8842.261/universal-theme/frm-large/item @/8842.261/universal-theme/frm-medium/item @/8842.261/universal-theme/frm-none/item @/8842.261/universal-theme/frm-small/item @/8842.261/universal-theme/ftm-large/item @/8842.261/universal-theme/ftm-medium/item @/8842.261/universal-theme/ftm-none/item @/8842.261/universal-theme/ftm-small/item @/8842.261/universal-theme/h4/region @/8842.261/universal-theme/heading-level-h1/region @/8842.261/universal-theme/heading-level-h2/region @/8842.261/universal-theme/heading-level-h3/region @/8842.261/universal-theme/heading-level-h5/region @/8842.261/universal-theme/heading-level-h6/region @/8842.261/universal-theme/hide-password-visibility/item @/8842.261/universal-theme/hide-when-all-rows-displayed/report @/8842.261/universal-theme/item-remove-padding/item @/8842.261/universal-theme/item-slim-padding/item @/8842.261/universal-theme/large-field/item @/8842.261/universal-theme/large/button @/8842.261/universal-theme/largebottommargin/button @/8842.261/universal-theme/largeleftmargin/button @/8842.261/universal-theme/largerightmargin/button @/8842.261/universal-theme/largetopmargin/button @/8842.261/universal-theme/middle/page @/8842.261/universal-theme/nobottommargin/button @/8842.261/universal-theme/noleftmargin/button @/8842.261/universal-theme/norightmargin/button @/8842.261/universal-theme/notopmargin/button @/8842.261/universal-theme/noui/button @/8842.261/universal-theme/pill/button @/8842.261/universal-theme/pillend/button @/8842.261/universal-theme/pillstart/button @/8842.261/universal-theme/post-text-block/item @/8842.261/universal-theme/pre-text-block/item @/8842.261/universal-theme/primary/button @/8842.261/universal-theme/rbm-large/region @/8842.261/universal-theme/rbm-medium/region @/8842.261/universal-theme/rbm-none/region @/8842.261/universal-theme/rbm-small/region @/8842.261/universal-theme/remove-padding/page @/8842.261/universal-theme/rlm-large/region @/8842.261/universal-theme/rlm-medium/region @/8842.261/universal-theme/rlm-none/region @/8842.261/universal-theme/rlm-small/region @/8842.261/universal-theme/rrm-large/region @/8842.261/universal-theme/rrm-medium/region @/8842.261/universal-theme/rrm-none/region @/8842.261/universal-theme/rrm-small/region @/8842.261/universal-theme/rtm-large/region @/8842.261/universal-theme/rtm-medium/region @/8842.261/universal-theme/rtm-none/region @/8842.261/universal-theme/rtm-small/region @/8842.261/universal-theme/showformlabelsabove/region @/8842.261/universal-theme/simple/button @/8842.261/universal-theme/small/button @/8842.261/universal-theme/smallbottommargin/button @/8842.261/universal-theme/smallleftmargin/button @/8842.261/universal-theme/smallrightmargin/button @/8842.261/universal-theme/smalltopmargin/button @/8842.261/universal-theme/sort-center/region @/8842.261/universal-theme/sort-end/region @/8842.261/universal-theme/stretch-form-fields/region @/8842.261/universal-theme/stretch-form-item/item @/8842.261/universal-theme/stretch/button @/8842.261/universal-theme/success/button @/8842.261/universal-theme/tiny/button @/8842.261/universal-theme/top/page @/8842.261/universal-theme/warning/button @/8842.261/universal-theme/x-large-size/item

Copy
subscription {
 master: @component
}

APEXlang Example

Copy
globalTemplateOption sample (
 templateType: button
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

---

listTemplate - APEXlang Reference

listTemplate

Parent: theme

Children: templateOption

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | templateClass | enum | No | | data type=string; lov=STATIC
Valid values: buttonList horizontalImagesWithLabelList horizontalLinksList pullDownMenu pullDownMenuWithImage tabbedNavigationList verticalImagesList verticalOrderedList verticalSidebarList verticalUnorderedListWithBullets verticalUnorderedListWithoutBullets wizardProgressList custom1 custom2 custom3 custom4 custom5 custom6 custom7 custom8 hierarchicalExpanding hierarchicalExpanded

Property Groups:
templateOptions
list
entry
firstEntry
sublist
sublistEntry
javaScript
css
attributeDescriptions
advanced
subscription
comments

templateOptions

 | Property | Type | Required | Default Value | Details

 | preset | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

 | default | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

Copy
templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
}

list

 | Property | Type | Required | Default Value | Details

 | beforeEntries | multiline string | No | | data type=multiline string; maxLen=4000

 | betweenEntries | multiline string | No | | data type=multiline string; maxLen=4000

 | afterEntries | multiline string | No | | data type=multiline string; maxLen=4000

Copy
list {
 beforeEntries: ```html
 value
 ```
 betweenEntries: ```html
 value
 ```
 afterEntries: ```html
 value
 ```
}

entry

 | Property | Type | Required | Default Value | Details

 | current | multiline string | No | | data type=multiline string; maxLen=4000

 | currentWithSublist | multiline string | No | | data type=multiline string; maxLen=4000

 | noncurrent | multiline string | No | | data type=multiline string; maxLen=4000

 | noncurrentWithSublist | multiline string | No | | data type=multiline string; maxLen=4000

Copy
entry {
 current: ```html
 value
 ```
 currentWithSublist: ```html
 value
 ```
 noncurrent: ```html
 value
 ```
 noncurrentWithSublist: ```html
 value
 ```
}

firstEntry

 | Property | Type | Required | Default Value | Details

 | current | multiline string | No | | data type=multiline string; maxLen=4000

 | currentWithSublist | multiline string | No | | data type=multiline string; maxLen=4000

 | noncurrent | multiline string | No | | data type=multiline string; maxLen=4000

 | noncurrentWithSublist | multiline string | No | | data type=multiline string; maxLen=4000

Copy
firstEntry {
 current: ```html
 value
 ```
 currentWithSublist: ```html
 value
 ```
 noncurrent: ```html
 value
 ```
 noncurrentWithSublist: ```html
 value
 ```
}

sublist

 | Property | Type | Required | Default Value | Details

 | beforeEntries | multiline string | No | | data type=multiline string; maxLen=4000

 | betweenEntries | multiline string | No | | data type=multiline string; maxLen=4000

 | afterEntries | multiline string | No | | data type=multiline string; maxLen=4000

Copy
sublist {
 beforeEntries: ```html
 value
 ```
 betweenEntries: ```html
 value
 ```
 afterEntries: ```html
 value
 ```
}

sublistEntry

 | Property | Type | Required | Default Value | Details

 | current | multiline string | No | | data type=multiline string; maxLen=4000

 | currentWithSublist | multiline string | No | | data type=multiline string; maxLen=4000

 | noncurrent | multiline string | No | | data type=multiline string; maxLen=4000

 | noncurrentWithSublist | multiline string | No | | data type=multiline string; maxLen=4000

Copy
sublistEntry {
 current: ```html
 value
 ```
 currentWithSublist: ```html
 value
 ```
 noncurrent: ```html
 value
 ```
 noncurrentWithSublist: ```html
 value
 ```
}

javaScript

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

 | executeWhenPageLoads | multiline string | No | | data type=multiline string; maxLen=4000

Copy
javaScript {
 fileUrls: [
 value
 value
 ]
 executeWhenPageLoads: ```javascript-browser
 value
 ```
}

css

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

 | inline | multiline string | No | | data type=multiline string; maxLen=32767

Copy
css {
 fileUrls: [
 value
 value
 ]
 inline: ```css
 value
 ```
}

attributeDescriptions

 | Property | Type | Required | Default Value | Details

 | a01 | string | No | | data type=string; maxLen=4000

 | a02 | string | No | | data type=string; maxLen=4000

 | a03 | string | No | | data type=string; maxLen=4000

 | a04 | string | No | | data type=string; maxLen=4000

 | a05 | string | No | | data type=string; maxLen=4000

 | a06 | string | No | | data type=string; maxLen=4000

 | a07 | string | No | | data type=string; maxLen=4000

 | a08 | string | No | | data type=string; maxLen=4000

 | a09 | string | No | | data type=string; maxLen=4000

 | a10 | string | No | | data type=string; maxLen=4000

 | a11 | string | No | | data type=string; maxLen=4000

 | a12 | string | No | | data type=string; maxLen=4000

 | a13 | string | No | | data type=string; maxLen=4000

 | a14 | string | No | | data type=string; maxLen=4000

 | a15 | string | No | | data type=string; maxLen=4000

 | a16 | string | No | | data type=string; maxLen=4000

 | a17 | string | No | | data type=string; maxLen=4000

 | a18 | string | No | | data type=string; maxLen=4000

 | a19 | string | No | | data type=string; maxLen=4000

 | a20 | string | No | | data type=string; maxLen=4000

Copy
attributeDescriptions {
 a01: value
 a02: value
 a03: value
 a04: value
 a05: value
 a06: value
 a07: value
 a08: value
 a09: value
 a10: value
 a11: value
 a12: value
 a13: value
 a14: value
 a15: value
 a16: value
 a17: value
 a18: value
 a19: value
 a20: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | identifier | string | No | | data type=string; maxLen=255

 | translatable | boolean | Yes | false | data type=boolean

Copy
advanced {
 staticId: value
 identifier: value
 translatable: false
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=listTemplate

 | master | enum | No | | data type=reference; lov=COMPONENT; references=listTemplate
Valid values: @/8842.242/universal-theme/badge-list @/8842.242/universal-theme/cards @/8842.242/universal-theme/links-list @/8842.242/universal-theme/media-list @/8842.242/universal-theme/menu-bar @/8842.242/universal-theme/menu-popup @/8842.242/universal-theme/navigation-bar @/8842.242/universal-theme/side-navigation-menu @/8842.242/universal-theme/tabs @/8842.242/universal-theme/top-navigation-mega-menu @/8842.242/universal-theme/top-navigation-menu @/8842.242/universal-theme/top-navigation-tabs @/8842.242/universal-theme/wizard-progress @/8842.261/universal-theme/badge-list @/8842.261/universal-theme/cards @/8842.261/universal-theme/links-list @/8842.261/universal-theme/media-list @/8842.261/universal-theme/menu-bar @/8842.261/universal-theme/menu-popup @/8842.261/universal-theme/navigation-bar @/8842.261/universal-theme/side-navigation-menu @/8842.261/universal-theme/tabs @/8842.261/universal-theme/top-navigation-mega-menu @/8842.261/universal-theme/top-navigation-menu @/8842.261/universal-theme/top-navigation-tabs @/8842.261/universal-theme/wizard-progress @/8842.9999/theme-1000/List @/8842.9999/theme-1000/Menu @/8842.9999/theme-1000/user-menu

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
listTemplate sample (
 name: value
 templateClass: buttonList
 templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
 }
 list {
 beforeEntries: ```html
 value
 ```
 betweenEntries: ```html
 value
 ```
 afterEntries: ```html
 value
 ```
 }
 entry {
 current: ```html
 value
 ```
 currentWithSublist: ```html
 value
 ```
 noncurrent: ```html
 value
 ```
 noncurrentWithSublist: ```html
 value
 ```
 }
 firstEntry {
 current: ```html
 value
 ```
 currentWithSublist: ```html
 value
 ```
 noncurrent: ```html
 value
 ```
 noncurrentWithSublist: ```html
 value
 ```
 }
 sublist {
 beforeEntries: ```html
 value
 ```
 betweenEntries: ```html
 value
 ```
 afterEntries: ```html
 value
 ```
 }
 sublistEntry {
 current: ```html
 value
 ```
 currentWithSublist: ```html
 value
 ```
 noncurrent: ```html
 value
 ```
 noncurrentWithSublist: ```html
 value
 ```
 }
 javaScript {
 fileUrls: [
 value
 value
 ]
 executeWhenPageLoads: ```javascript-browser
 value
 ```
 }
 css {
 fileUrls: [
 value
 value
 ]
 inline: ```css
 value
 ```
 }
 attributeDescriptions {
 a01: value
 a02: value
 a03: value
 a04: value
 a05: value
 a06: value
 a07: value
 a08: value
 a09: value
 a10: value
 a11: value
 a12: value
 a13: value
 a14: value
 a15: value
 a16: value
 a17: value
 a18: value
 a19: value
 a20: value
 }
 advanced {
 staticId: value
 identifier: value
 translatable: false
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

pageTemplate - APEXlang Reference

pageTemplate

Parent: theme

Children: slot, templateOption

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | templateClass | enum | No | | data type=string; lov=STATIC
Valid values: login noTabs noTabsWithSidebar oneLevelTabs oneLevelTabsWithSidebar popup printerFriendly twoLevelTabs twoLevelTabsWithSidebar custom1 custom2 custom3 custom4 custom5 custom6 custom7 custom8

Property Groups:
templateOptions
page
javaScript
css
subtemplate
layout
positions
dialog
errorPage
standardTab
parentTab
imageBasedTab
advanced
subscription
comments

templateOptions

 | Property | Type | Required | Default Value | Details

 | preset | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

 | default | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

Copy
templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
}

page

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | normal | data type=string; lov=STATIC
Valid values: dialog normal

 | header | multiline string | Yes | | data type=multiline string; maxLen=32767

 | body | multiline string | Yes | | data type=multiline string; maxLen=32767

 | footer | multiline string | No | | data type=multiline string; maxLen=32767

Copy
page {
 type: dialog
 header: ```html
 value
 ```
 body: ```html
 value
 ```
 footer: ```html
 value
 ```
}

javaScript

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

 | functionAndGlobalVariableDeclaration | multiline string | No | | data type=multiline string; maxLen=32767

 | executeWhenPageLoads | multiline string | No | | data type=multiline string; maxLen=32767

Copy
javaScript {
 fileUrls: [
 value
 value
 ]
 functionAndGlobalVariableDeclaration: ```javascript-browser
 value
 ```
 executeWhenPageLoads: ```javascript-browser
 value
 ```
}

css

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

 | inline | multiline string | No | | data type=multiline string; maxLen=32767

Copy
css {
 fileUrls: [
 value
 value
 ]
 inline: ```css
 value
 ```
}

subtemplate

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

 | navigationBar | multiline string | No | | data type=multiline string; maxLen=4000

 | navigationBarEntry | multiline string | No | | data type=multiline string; maxLen=32767

 | notification | multiline string | No | | data type=multiline string; maxLen=4000

Copy
subtemplate {
 successMessage: ```html
 value
 ```
 navigationBar: ```html
 value
 ```
 navigationBarEntry: ```html
 value
 ```
 notification: ```html
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | fixedNumberOfColumns | data type=string; lov=STATIC
Valid values: htmlTable fixedNumberOfColumns variableNumberOfColumns

 | maxColumns | integer | No | | data type=integer; maxLen=2
Applies whentype in (fixedNumberOfColumns)type in (variableNumberOfColumns)

 | alwaysUseMaxColumns | boolean | Yes | false | data type=boolean
Applies whentype = fixedNumberOfColumns

 | hasColumnSpan | boolean | Yes | true | data type=boolean
Applies whentype in (fixedNumberOfColumns)type in (variableNumberOfColumns)

 | alwaysRenderLayout | boolean | Yes | true | data type=boolean
Applies whentype in (fixedNumberOfColumns)type in (variableNumberOfColumns)

 | emitEmptyLeadingColumns | boolean | Yes | true | data type=boolean
Applies whentype in (fixedNumberOfColumns)type in (variableNumberOfColumns)

 | emitEmptyTrailingColumns | boolean | Yes | false | data type=boolean
Applies whentype in (fixedNumberOfColumns)type in (variableNumberOfColumns)

 | defaultLabelColumnSpan | integer | No | | data type=integer; maxLen=2
Applies whentype in (fixedNumberOfColumns)type in (variableNumberOfColumns)

 | firstColumnAttributes | string | No | | data type=string; maxLen=255
Applies whentype in (fixedNumberOfColumns)type in (variableNumberOfColumns)

 | lastColumnAttributes | string | No | | data type=string; maxLen=255
Applies whentype in (fixedNumberOfColumns)type in (variableNumberOfColumns)

 | regionTableAttributes | string | No | | data type=string; maxLen=255
Applies whentype = htmlTable

 | containerTemplate | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype in (fixedNumberOfColumns)type in (variableNumberOfColumns)

 | rowTemplate | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype in (fixedNumberOfColumns)type in (variableNumberOfColumns)

 | columnTemplate | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype in (fixedNumberOfColumns)type in (variableNumberOfColumns)

 | javaScriptDebugCode | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype in (fixedNumberOfColumns)type in (variableNumberOfColumns)

Copy
layout {
 type: htmlTable
 maxColumns: 42
 alwaysUseMaxColumns: false
 hasColumnSpan: false
 alwaysRenderLayout: false
 emitEmptyLeadingColumns: false
 emitEmptyTrailingColumns: false
 defaultLabelColumnSpan: 42
 firstColumnAttributes: value
 lastColumnAttributes: value
 regionTableAttributes: value
 containerTemplate: ```html
 value
 ```
 rowTemplate: ```html
 value
 ```
 columnTemplate: ```html
 value
 ```
 javaScriptDebugCode: ```javascript-browser
 value
 ```
}

positions

 | Property | Type | Required | Default Value | Details

 | breadcrumbPosition | string | No | | data type=string; lov=SLOTS

 | sidebarPosition | string | No | | data type=string; lov=SLOTS

Copy
positions {
 breadcrumbPosition: value
 sidebarPosition: value
}

dialog

 | Property | Type | Required | Default Value | Details

 | width | string | No | | data type=string; maxLen=20
Applies whentype = dialog

 | height | string | No | | data type=string; maxLen=20
Applies whentype = dialog

 | maxWidth | string | No | | data type=string; maxLen=20
Applies whentype = dialog

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype = dialog

 | allowEmbedInFrame | array of enums | No | | data type=string; lov=STATIC
Valid values: modal nonModal
Applies whentype = dialog

 | initCode | string | No | | data type=string; maxLen=4000
Applies whentype = dialog

 | closureCode | string | No | | data type=string; maxLen=4000
Applies whentype = dialog

 | cancelCode | string | No | | data type=string; maxLen=4000
Applies whentype = dialog

Copy
dialog {
 width: value
 height: value
 maxWidth: value
 cssClasses: [
 value
 value
 ]
 allowEmbedInFrame: [
 modal
 nonModal
 ]
 initCode: value
 closureCode: value
 cancelCode: value
}

errorPage

 | Property | Type | Required | Default Value | Details

 | template | multiline string | No | | data type=multiline string; maxLen=32767

Copy
errorPage {
 template: ```html
 value
 ```
}

standardTab

 | Property | Type | Required | Default Value | Details

 | current | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = tabs

 | currentFontAttributes | string | No | | data type=string; maxLen=255
Applies whentype = tabs

 | nonCurrent | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = tabs

 | nonCurrentFontAttributes | string | No | | data type=string; maxLen=255
Applies whentype = tabs

Copy
standardTab {
 current: ```html
 value
 ```
 currentFontAttributes: value
 nonCurrent: ```html
 value
 ```
 nonCurrentFontAttributes: value
}

parentTab

 | Property | Type | Required | Default Value | Details

 | current | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = tabs

 | currentFontAttributes | string | No | | data type=string; maxLen=255
Applies whentype = tabs

 | nonCurrent | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = tabs

 | nonCurrentFontAttributes | string | No | | data type=string; maxLen=255
Applies whentype = tabs

Copy
parentTab {
 current: ```html
 value
 ```
 currentFontAttributes: value
 nonCurrent: ```html
 value
 ```
 nonCurrentFontAttributes: value
}

imageBasedTab

 | Property | Type | Required | Default Value | Details

 | current | multiline string | No | | data type=multiline string; maxLen=4000

 | nonCurrent | multiline string | No | | data type=multiline string; maxLen=4000

Copy
imageBasedTab {
 current: ```html
 value
 ```
 nonCurrent: ```html
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | identifier | string | No | | data type=string; maxLen=255

 | translatable | boolean | Yes | false | data type=boolean

Copy
advanced {
 staticId: value
 identifier: value
 translatable: false
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=pageTemplate

 | master | enum | No | | data type=reference; lov=COMPONENT; references=pageTemplate
Valid values: @/8842.242/universal-theme/drawer @/8842.242/universal-theme/left-and-right-side-columns @/8842.242/universal-theme/left-side-column @/8842.242/universal-theme/login @/8842.242/universal-theme/marquee @/8842.242/universal-theme/minimal-no-navigation @/8842.242/universal-theme/modal-dialog @/8842.242/universal-theme/right-side-column @/8842.242/universal-theme/standard @/8842.242/universal-theme/wizard-modal-dialog @/8842.261/universal-theme/blank @/8842.261/universal-theme/drawer @/8842.261/universal-theme/left-and-right-side-columns @/8842.261/universal-theme/left-side-column @/8842.261/universal-theme/login @/8842.261/universal-theme/marquee @/8842.261/universal-theme/minimal-no-navigation @/8842.261/universal-theme/modal-dialog @/8842.261/universal-theme/right-side-column @/8842.261/universal-theme/standard @/8842.261/universal-theme/wizard-modal-dialog @/8842.9999/theme-1000/Standard @/8842.9999/theme-1000/dialog @/8842.9999/theme-1000/faceted-search @/8842.9999/theme-1000/login

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
pageTemplate sample (
 name: value
 templateClass: login
 templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
 }
 page {
 type: dialog
 header: ```html
 value
 ```
 body: ```html
 value
 ```
 footer: ```html
 value
 ```
 }
 javaScript {
 fileUrls: [
 value
 value
 ]
 functionAndGlobalVariableDeclaration: ```javascript-browser
 value
 ```
 executeWhenPageLoads: ```javascript-browser
 value
 ```
 }
 css {
 fileUrls: [
 value
 value
 ]
 inline: ```css
 value
 ```
 }
 subtemplate {
 successMessage: ```html
 value
 ```
 navigationBar: ```html
 value
 ```
 navigationBarEntry: ```html
 value
 ```
 notification: ```html
 value
 ```
 }
 layout {
 type: htmlTable
 maxColumns: 42
 alwaysUseMaxColumns: false
 hasColumnSpan: false
 alwaysRenderLayout: false
 emitEmptyLeadingColumns: false
 emitEmptyTrailingColumns: false
 defaultLabelColumnSpan: 42
 firstColumnAttributes: value
 lastColumnAttributes: value
 regionTableAttributes: value
 containerTemplate: ```html
 value
 ```
 rowTemplate: ```html
 value
 ```
 columnTemplate: ```html
 value
 ```
 javaScriptDebugCode: ```javascript-browser
 value
 ```
 }
 positions {
 breadcrumbPosition: value
 sidebarPosition: value
 }
 dialog {
 width: value
 height: value
 maxWidth: value
 cssClasses: [
 value
 value
 ]
 allowEmbedInFrame: [
 modal
 nonModal
 ]
 initCode: value
 closureCode: value
 cancelCode: value
 }
 errorPage {
 template: ```html
 value
 ```
 }
 standardTab {
 current: ```html
 value
 ```
 currentFontAttributes: value
 nonCurrent: ```html
 value
 ```
 nonCurrentFontAttributes: value
 }
 parentTab {
 current: ```html
 value
 ```
 currentFontAttributes: value
 nonCurrent: ```html
 value
 ```
 nonCurrentFontAttributes: value
 }
 imageBasedTab {
 current: ```html
 value
 ```
 nonCurrent: ```html
 value
 ```
 }
 advanced {
 staticId: value
 identifier: value
 translatable: false
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

popupLovTemplate - APEXlang Reference

popupLovTemplate

Parent: theme

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | templateClass | enum | No | | data type=string; lov=STATIC
Valid values: standard

Property Groups:
popupIcon
searchField
findButton
closeButton
nextButton
previousButton
window
pagination
resultSet
page
advanced
subscription

popupIcon

 | Property | Type | Required | Default Value | Details

 | icon | string | No | | data type=string; maxLen=4000

 | attributes | multiline string | No | | data type=multiline string; maxLen=4000

 | colorPickerIcon | string | No | | data type=string; maxLen=4000

 | colorPickerAttributes | multiline string | No | | data type=multiline string; maxLen=4000

Copy
popupIcon {
 icon: value
 attributes: ```
 value
 ```
 colorPickerIcon: value
 colorPickerAttributes: ```
 value
 ```
}

searchField

 | Property | Type | Required | Default Value | Details

 | beforeField | multiline string | No | | data type=multiline string; maxLen=4000

 | afterField | multiline string | No | | data type=multiline string; maxLen=4000

 | width | string | No | | data type=string; maxLen=255

 | maxWidth | string | No | | data type=string; maxLen=255

 | filterTextAttributes | multiline string | No | | data type=multiline string; maxLen=4000

Copy
searchField {
 beforeField: ```html
 value
 ```
 afterField: ```html
 value
 ```
 width: value
 maxWidth: value
 filterTextAttributes: ```
 value
 ```
}

findButton

 | Property | Type | Required | Default Value | Details

 | text | string | No | | data type=string; maxLen=255

 | attributes | string | No | | data type=string; maxLen=4000

Copy
findButton {
 text: value
 attributes: value
}

closeButton

 | Property | Type | Required | Default Value | Details

 | text | string | No | | data type=string; maxLen=255

 | attributes | string | No | | data type=string; maxLen=4000

Copy
closeButton {
 text: value
 attributes: value
}

nextButton

 | Property | Type | Required | Default Value | Details

 | text | string | No | | data type=string; maxLen=255

 | attributes | string | No | | data type=string; maxLen=4000

Copy
nextButton {
 text: value
 attributes: value
}

previousButton

 | Property | Type | Required | Default Value | Details

 | text | string | No | | data type=string; maxLen=255

 | attributes | string | No | | data type=string; maxLen=4000

Copy
previousButton {
 text: value
 attributes: value
}

window

 | Property | Type | Required | Default Value | Details

 | scrollBars | string | No | | data type=string; maxLen=255

 | resizable | string | No | | data type=string; maxLen=255

 | width | string | No | | data type=string; maxLen=255

 | height | string | No | | data type=string; maxLen=255

Copy
window {
 scrollBars: value
 resizable: value
 width: value
 height: value
}

pagination

 | Property | Type | Required | Default Value | Details

 | text | multiline string | No | | data type=multiline string; maxLen=255

 | rowsPerPage | integer | No | | data type=integer; maxLen=32767

Copy
pagination {
 text: ```html
 value
 ```
 rowsPerPage: 42
}

resultSet

 | Property | Type | Required | Default Value | Details

 | before | multiline string | No | | data type=multiline string; maxLen=4000

 | after | multiline string | No | | data type=multiline string; maxLen=4000

Copy
resultSet {
 before: ```html
 value
 ```
 after: ```html
 value
 ```
}

page

 | Property | Type | Required | Default Value | Details

 | head | multiline string | No | | data type=multiline string; maxLen=4000

 | bodyAttributes | multiline string | No | | data type=multiline string; maxLen=255

 | heading | multiline string | No | | data type=multiline string; maxLen=4000

 | footer | multiline string | No | | data type=multiline string; maxLen=4000

Copy
page {
 head: ```html
 value
 ```
 bodyAttributes: ```
 value
 ```
 heading: ```html
 value
 ```
 footer: ```html
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | identifier | string | No | | data type=string; maxLen=255

 | translatable | boolean | Yes | false | data type=boolean

Copy
advanced {
 staticId: value
 identifier: value
 translatable: false
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=popupLovTemplate

 | master | enum | No | | data type=reference; lov=COMPONENT; references=popupLovTemplate
Valid values: @/8842.242/universal-theme/search-dialog @/8842.261/universal-theme/search-dialog

Copy
subscription {
 master: @component
}

APEXlang Example

Copy
popupLovTemplate sample (
 name: value
 templateClass: standard
 popupIcon {
 icon: value
 attributes: ```
 value
 ```
 colorPickerIcon: value
 colorPickerAttributes: ```
 value
 ```
 }
 searchField {
 beforeField: ```html
 value
 ```
 afterField: ```html
 value
 ```
 width: value
 maxWidth: value
 filterTextAttributes: ```
 value
 ```
 }
 findButton {
 text: value
 attributes: value
 }
 closeButton {
 text: value
 attributes: value
 }
 nextButton {
 text: value
 attributes: value
 }
 previousButton {
 text: value
 attributes: value
 }
 window {
 scrollBars: value
 resizable: value
 width: value
 height: value
 }
 pagination {
 text: ```html
 value
 ```
 rowsPerPage: 42
 }
 resultSet {
 before: ```html
 value
 ```
 after: ```html
 value
 ```
 }
 page {
 head: ```html
 value
 ```
 bodyAttributes: ```
 value
 ```
 heading: ```html
 value
 ```
 footer: ```html
 value
 ```
 }
 advanced {
 staticId: value
 identifier: value
 translatable: false
 }
 subscription {
 master: @component
 }
)

---

regionTemplate - APEXlang Reference

regionTemplate

Parent: theme

Children: slot, templateOption

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | templateClass | enum | No | | data type=string; lov=STATIC
Valid values: borderlessRegion bracketedRegion breadcrumbRegion buttonRegionWithTitle buttonRegionWithoutTitle chartRegion formRegion hideAndShowRegion listRegionWithIcon navigationRegion navigationRegionAlternative1 regionWithoutButtonsAndTitle regionWithoutTitle reportFilterMultiRow reportFilterSingleRow reportsRegion reportsRegion100Width reportsRegionAlternative1 sidebarRegion sidebarRegionAlternative1 wizardRegion wizardRegionWithIcon custom1 custom2 custom3 custom4 custom5 custom6 custom7 custom8

Property Groups:
templateOptions
region
subRegions
accessibility
javaScript
css
advanced
subscription
comments

templateOptions

 | Property | Type | Required | Default Value | Details

 | preset | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

 | default | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

Copy
templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
}

region

 | Property | Type | Required | Default Value | Details

 | template | multiline string | No | | data type=multiline string; maxLen=32767

 | image | multiline string | No | | data type=multiline string; maxLen=32767

 | htmlTableAttributes | string | No | | data type=string; maxLen=255

Copy
region {
 template: ```html
 value
 ```
 image: ```html
 value
 ```
 htmlTableAttributes: value
}

subRegions

 | Property | Type | Required | Default Value | Details

 | template | multiline string | No | | data type=multiline string; maxLen=32767

 | header | multiline string | No | | data type=multiline string; maxLen=32767

 | headerEntry | multiline string | No | | data type=multiline string; maxLen=32767

Copy
subRegions {
 template: ```html
 value
 ```
 header: ```html
 value
 ```
 headerEntry: ```html
 value
 ```
}

accessibility

 | Property | Type | Required | Default Value | Details

 | landmarkType | enum | No | | data type=string; lov=STATIC
Valid values: banner complementary contentInfo form main navigation region search

 | regionTitleHtmlId | string | No | | data type=string; maxLen=255

Copy
accessibility {
 landmarkType: banner
 regionTitleHtmlId: value
}

javaScript

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

 | executeWhenPageLoads | multiline string | No | | data type=multiline string; maxLen=4000

Copy
javaScript {
 fileUrls: [
 value
 value
 ]
 executeWhenPageLoads: ```javascript-browser
 value
 ```
}

css

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

Copy
css {
 fileUrls: [
 value
 value
 ]
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | identifier | string | No | | data type=string; maxLen=255

 | translatable | boolean | Yes | false | data type=boolean

Copy
advanced {
 staticId: value
 identifier: value
 translatable: false
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate

 | master | enum | No | | data type=reference; lov=COMPONENT; references=regionTemplate
Valid values: @/8842.242/universal-theme/alert @/8842.242/universal-theme/blank-with-attributes @/8842.242/universal-theme/blank-with-attributes-no-grid @/8842.242/universal-theme/buttons-container @/8842.242/universal-theme/cards-container @/8842.242/universal-theme/carousel-container @/8842.242/universal-theme/collapsible @/8842.242/universal-theme/content-block @/8842.242/universal-theme/hero @/8842.242/universal-theme/image @/8842.242/universal-theme/inline-dialog @/8842.242/universal-theme/inline-drawer @/8842.242/universal-theme/inline-popup @/8842.242/universal-theme/interactive-report @/8842.242/universal-theme/item-container @/8842.242/universal-theme/login @/8842.242/universal-theme/search-results-container @/8842.242/universal-theme/standard @/8842.242/universal-theme/tabs-container @/8842.242/universal-theme/title-bar @/8842.242/universal-theme/wizard-container @/8842.261/universal-theme/alert @/8842.261/universal-theme/blank-with-attributes @/8842.261/universal-theme/blank-with-attributes-no-grid @/8842.261/universal-theme/buttons-container @/8842.261/universal-theme/cards-container @/8842.261/universal-theme/carousel-container @/8842.261/universal-theme/collapsible @/8842.261/universal-theme/content-block @/8842.261/universal-theme/hero @/8842.261/universal-theme/image @/8842.261/universal-theme/inline-dialog @/8842.261/universal-theme/inline-drawer @/8842.261/universal-theme/inline-popup @/8842.261/universal-theme/interactive-report @/8842.261/universal-theme/item-container @/8842.261/universal-theme/login @/8842.261/universal-theme/search-results-container @/8842.261/universal-theme/standard @/8842.261/universal-theme/tabs-container @/8842.261/universal-theme/title-bar @/8842.261/universal-theme/wizard-container @/8842.9999/theme-1000/blank-with-attributes-no-grid

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
regionTemplate sample (
 name: value
 templateClass: borderlessRegion
 templateOptions {
 preset: [
 value
 value
 ]
 default: [
 value
 value
 ]
 }
 region {
 template: ```html
 value
 ```
 image: ```html
 value
 ```
 htmlTableAttributes: value
 }
 subRegions {
 template: ```html
 value
 ```
 header: ```html
 value
 ```
 headerEntry: ```html
 value
 ```
 }
 accessibility {
 landmarkType: banner
 regionTitleHtmlId: value
 }
 javaScript {
 fileUrls: [
 value
 value
 ]
 executeWhenPageLoads: ```javascript-browser
 value
 ```
 }
 css {
 fileUrls: [
 value
 value
 ]
 }
 advanced {
 staticId: value
 identifier: value
 translatable: false
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

style - APEXlang Reference

style

Parent: theme

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=30

Property Groups:
css
themeRollerAttributes
advanced
subscription
comments

css

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

 | cssClasses | string | No | | data type=string; maxLen=255

Copy
css {
 fileUrls: [
 value
 value
 ]
 cssClasses: value
}

themeRollerAttributes

 | Property | Type | Required | Default Value | Details

 | readOnly | boolean | Yes | false | data type=boolean

 | inputParameterFileUrls | multiline string | No | | data type=multiline string; maxLen=4000

 | outputCssFileUrl | string | No | | data type=string; maxLen=4000

 | jsonConfig | multiline string | No | | data type=multiline string; maxLen=32767

Copy
themeRollerAttributes {
 readOnly: false
 inputParameterFileUrls: ```
 value
 ```
 outputCssFileUrl: value
 jsonConfig: ```json
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | endUserCanPick | boolean | Yes | false | data type=boolean

 | accessibilityTested | boolean | Yes | false | data type=boolean

Copy
advanced {
 staticId: value
 endUserCanPick: false
 accessibilityTested: false
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | reference | No | | data type=reference; lov=COMPONENT; references=style

 | master | enum | No | | data type=reference; lov=COMPONENT; references=style
Valid values: @/8842.242/universal-theme/Vita @/8842.242/universal-theme/redwood-light @/8842.242/universal-theme/vita-dark @/8842.242/universal-theme/vita-red @/8842.242/universal-theme/vita-slate @/8842.261/universal-theme/Vita @/8842.261/universal-theme/iris @/8842.261/universal-theme/redwood-light @/8842.261/universal-theme/vita-dark @/8842.261/universal-theme/vita-red @/8842.261/universal-theme/vita-slate @/8842.9999/theme-1000/driftwood

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
style sample (
 name: value
 css {
 fileUrls: [
 value
 value
 ]
 cssClasses: value
 }
 themeRollerAttributes {
 readOnly: false
 inputParameterFileUrls: ```
 value
 ```
 outputCssFileUrl: value
 jsonConfig: ```json
 value
 ```
 }
 advanced {
 staticId: value
 endUserCanPick: false
 accessibilityTested: false
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

templateOptionGroup - APEXlang Reference

templateOptionGroup

Parent: theme

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | templateType | enum | Yes | | data type=string; lov=STATIC
Valid values: button item region report list page breadcrumb

 | name | string | Yes | | data type=string; maxLen=30

 | sequence | integer | Yes | | data type=integer; maxLen=32767

Property Groups:
settings
help
advanced
subscription

settings

 | Property | Type | Required | Default Value | Details

 | nullText | string | No | | data type=string; maxLen=30

Copy
settings {
 nullText: value
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

 | master | reference | No | | data type=reference; lov=COMPONENT; references=templateOptionGroup

 | master | reference | No | | data type=reference; lov=COMPONENT; references=templateOptionGroup

Copy
subscription {
 master: @component
}

APEXlang Example

Copy
templateOptionGroup sample (
 templateType: button
 name: value
 sequence: 42
 settings {
 nullText: value
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
