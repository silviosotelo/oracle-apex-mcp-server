# APEXlang: componentes con padre `classicReportTemplate` (APEX 26.1)


---

templateOption - APEXlang Reference

templateOption

Parent: classicReportTemplate

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
Valid values: @/8842.242/universal-theme/badge-list/128px @/8842.242/universal-theme/badge-list/2columngrid @/8842.242/universal-theme/badge-list/32px @/8842.242/universal-theme/badge-list/3columngrid @/8842.242/universal-theme/badge-list/48px @/8842.242/universal-theme/badge-list/4columngrid @/8842.242/universal-theme/badge-list/5columngrid @/8842.242/universal-theme/badge-list/64px @/8842.242/universal-theme/badge-list/96px @/8842.242/universal-theme/badge-list/apply-theme-colors @/8842.242/universal-theme/badge-list/circular @/8842.242/universal-theme/badge-list/fixed @/8842.242/universal-theme/badge-list/flexiblebox @/8842.242/universal-theme/badge-list/floatitems @/8842.242/universal-theme/badge-list/grid @/8842.242/universal-theme/badge-list/stacked @/8842.242/universal-theme/cards/2-columns @/8842.242/universal-theme/cards/2-lines @/8842.242/universal-theme/cards/3-columns @/8842.242/universal-theme/cards/3-lines @/8842.242/universal-theme/cards/4-columns @/8842.242/universal-theme/cards/4-lines @/8842.242/universal-theme/cards/5-columns @/8842.242/universal-theme/cards/basic @/8842.242/universal-theme/cards/block @/8842.242/universal-theme/cards/card-raise-card @/8842.242/universal-theme/cards/cards-color-fill @/8842.242/universal-theme/cards/compact @/8842.242/universal-theme/cards/display-icons @/8842.242/universal-theme/cards/display-initials @/8842.242/universal-theme/cards/display-subtitle @/8842.242/universal-theme/cards/featured @/8842.242/universal-theme/cards/float @/8842.242/universal-theme/cards/hidden-body-text @/8842.242/universal-theme/cards/icons-rounded @/8842.242/universal-theme/cards/icons-square @/8842.242/universal-theme/cards/span-horizontally @/8842.242/universal-theme/cards/use-theme-colors @/8842.242/universal-theme/comments/basic @/8842.242/universal-theme/comments/icons-rounded @/8842.242/universal-theme/comments/icons-square @/8842.242/universal-theme/comments/speech-bubbles @/8842.242/universal-theme/content-row/actions-hidden @/8842.242/universal-theme/content-row/alignment-top @/8842.242/universal-theme/content-row/description-hidden @/8842.242/universal-theme/content-row/icon-hidden @/8842.242/universal-theme/content-row/misc-hidden @/8842.242/universal-theme/content-row/selection-hidden @/8842.242/universal-theme/content-row/style-compact @/8842.242/universal-theme/content-row/title-hidden @/8842.242/universal-theme/contextual-info/display-items-stacked @/8842.242/universal-theme/contextual-info/display-labels-stacked @/8842.242/universal-theme/contextual-info/hide-empty-values @/8842.242/universal-theme/media-list/2-column-grid @/8842.242/universal-theme/media-list/3-column-grid @/8842.242/universal-theme/media-list/4-column-grid @/8842.242/universal-theme/media-list/5-column-grid @/8842.242/universal-theme/media-list/apply-theme-colors @/8842.242/universal-theme/media-list/icons-rounded @/8842.242/universal-theme/media-list/icons-square @/8842.242/universal-theme/media-list/large @/8842.242/universal-theme/media-list/show-badges @/8842.242/universal-theme/media-list/show-description @/8842.242/universal-theme/media-list/show-icons @/8842.242/universal-theme/media-list/span-horizontal @/8842.242/universal-theme/media-list/stack @/8842.242/universal-theme/standard/altrowcolorsdisable @/8842.242/universal-theme/standard/altrowcolorsenable @/8842.242/universal-theme/standard/enable @/8842.242/universal-theme/standard/horizontalborders @/8842.242/universal-theme/standard/removeallborders @/8842.242/universal-theme/standard/removeouterborders @/8842.242/universal-theme/standard/rowhighlightdisable @/8842.242/universal-theme/standard/stretchreport @/8842.242/universal-theme/standard/verticalborders @/8842.242/universal-theme/timeline/compact @/8842.242/universal-theme/value-attribute-pairs-column/fixed-large @/8842.242/universal-theme/value-attribute-pairs-column/fixed-medium @/8842.242/universal-theme/value-attribute-pairs-column/fixed-small @/8842.242/universal-theme/value-attribute-pairs-column/hide-empty-values @/8842.242/universal-theme/value-attribute-pairs-column/left-aligned-details @/8842.242/universal-theme/value-attribute-pairs-column/right-aligned-details @/8842.242/universal-theme/value-attribute-pairs-column/variable-large @/8842.242/universal-theme/value-attribute-pairs-column/variable-medium @/8842.242/universal-theme/value-attribute-pairs-column/variable-small @/8842.242/universal-theme/value-attribute-pairs-row/fixed-large @/8842.242/universal-theme/value-attribute-pairs-row/fixed-medium @/8842.242/universal-theme/value-attribute-pairs-row/fixed-small @/8842.242/universal-theme/value-attribute-pairs-row/left-aligned-details @/8842.242/universal-theme/value-attribute-pairs-row/right-aligned-details @/8842.242/universal-theme/value-attribute-pairs-row/variable-large @/8842.242/universal-theme/value-attribute-pairs-row/variable-medium @/8842.242/universal-theme/value-attribute-pairs-row/variable-small @/8842.261/universal-theme/badge-list/128px @/8842.261/universal-theme/badge-list/2columngrid @/8842.261/universal-theme/badge-list/32px @/8842.261/universal-theme/badge-list/3columngrid @/8842.261/universal-theme/badge-list/48px @/8842.261/universal-theme/badge-list/4columngrid @/8842.261/universal-theme/badge-list/5columngrid @/8842.261/universal-theme/badge-list/64px @/8842.261/universal-theme/badge-list/96px @/8842.261/universal-theme/badge-list/apply-theme-colors @/8842.261/universal-theme/badge-list/circular @/8842.261/universal-theme/badge-list/fixed @/8842.261/universal-theme/badge-list/flexiblebox @/8842.261/universal-theme/badge-list/floatitems @/8842.261/universal-theme/badge-list/grid @/8842.261/universal-theme/badge-list/stacked @/8842.261/universal-theme/cards/2-columns @/8842.261/universal-theme/cards/2-lines @/8842.261/universal-theme/cards/3-columns @/8842.261/universal-theme/cards/3-lines @/8842.261/universal-theme/cards/4-columns @/8842.261/universal-theme/cards/4-lines @/8842.261/universal-theme/cards/5-columns @/8842.261/universal-theme/cards/basic @/8842.261/universal-theme/cards/block @/8842.261/universal-theme/cards/card-raise-card @/8842.261/universal-theme/cards/cards-color-fill @/8842.261/universal-theme/cards/compact @/8842.261/universal-theme/cards/display-icons @/8842.261/universal-theme/cards/display-initials @/8842.261/universal-theme/cards/display-subtitle @/8842.261/universal-theme/cards/featured @/8842.261/universal-theme/cards/float @/8842.261/universal-theme/cards/hidden-body-text @/8842.261/universal-theme/cards/icons-rounded @/8842.261/universal-theme/cards/icons-square @/8842.261/universal-theme/cards/span-horizontally @/8842.261/universal-theme/cards/use-theme-colors @/8842.261/universal-theme/comments/basic @/8842.261/universal-theme/comments/icons-rounded @/8842.261/universal-theme/comments/icons-square @/8842.261/universal-theme/comments/speech-bubbles @/8842.261/universal-theme/content-row/actions-hidden @/8842.261/universal-theme/content-row/alignment-top @/8842.261/universal-theme/content-row/description-hidden @/8842.261/universal-theme/content-row/icon-hidden @/8842.261/universal-theme/content-row/misc-hidden @/8842.261/universal-theme/content-row/selection-hidden @/8842.261/universal-theme/content-row/stack-mobile @/8842.261/universal-theme/content-row/style-compact @/8842.261/universal-theme/content-row/title-hidden @/8842.261/universal-theme/contextual-info/display-items-stacked @/8842.261/universal-theme/contextual-info/display-labels-stacked @/8842.261/universal-theme/contextual-info/hide-empty-values @/8842.261/universal-theme/media-list/2-column-grid @/8842.261/universal-theme/media-list/3-column-grid @/8842.261/universal-theme/media-list/4-column-grid @/8842.261/universal-theme/media-list/5-column-grid @/8842.261/universal-theme/media-list/apply-theme-colors @/8842.261/universal-theme/media-list/icons-rounded @/8842.261/universal-theme/media-list/icons-square @/8842.261/universal-theme/media-list/large @/8842.261/universal-theme/media-list/show-badges @/8842.261/universal-theme/media-list/show-description @/8842.261/universal-theme/media-list/show-icons @/8842.261/universal-theme/media-list/span-horizontal @/8842.261/universal-theme/media-list/stack @/8842.261/universal-theme/standard/altrowcolorsdisable @/8842.261/universal-theme/standard/altrowcolorsenable @/8842.261/universal-theme/standard/enable @/8842.261/universal-theme/standard/horizontalborders @/8842.261/universal-theme/standard/removeallborders @/8842.261/universal-theme/standard/removeouterborders @/8842.261/universal-theme/standard/rowhighlightdisable @/8842.261/universal-theme/standard/stretchreport @/8842.261/universal-theme/standard/verticalborders @/8842.261/universal-theme/timeline/compact @/8842.261/universal-theme/value-attribute-pairs-column/fixed-large @/8842.261/universal-theme/value-attribute-pairs-column/fixed-medium @/8842.261/universal-theme/value-attribute-pairs-column/fixed-small @/8842.261/universal-theme/value-attribute-pairs-column/hide-empty-values @/8842.261/universal-theme/value-attribute-pairs-column/left-aligned-details @/8842.261/universal-theme/value-attribute-pairs-column/right-aligned-details @/8842.261/universal-theme/value-attribute-pairs-column/variable-large @/8842.261/universal-theme/value-attribute-pairs-column/variable-medium @/8842.261/universal-theme/value-attribute-pairs-column/variable-small @/8842.261/universal-theme/value-attribute-pairs-row/fixed-large @/8842.261/universal-theme/value-attribute-pairs-row/fixed-medium @/8842.261/universal-theme/value-attribute-pairs-row/fixed-small @/8842.261/universal-theme/value-attribute-pairs-row/left-aligned-details @/8842.261/universal-theme/value-attribute-pairs-row/right-aligned-details @/8842.261/universal-theme/value-attribute-pairs-row/variable-large @/8842.261/universal-theme/value-attribute-pairs-row/variable-medium @/8842.261/universal-theme/value-attribute-pairs-row/variable-small

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
