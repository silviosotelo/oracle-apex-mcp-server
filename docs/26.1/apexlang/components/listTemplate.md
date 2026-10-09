# APEXlang: componentes con padre `listTemplate` (APEX 26.1)


---

templateOption - APEXlang Reference

templateOption

Parent: listTemplate

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
Valid values: @/8842.242/universal-theme/badge-list/2columngrid @/8842.242/universal-theme/badge-list/3columngrid @/8842.242/universal-theme/badge-list/4columngrid @/8842.242/universal-theme/badge-list/5columngrid @/8842.242/universal-theme/badge-list/apply-theme-colors @/8842.242/universal-theme/badge-list/circular @/8842.242/universal-theme/badge-list/fixed @/8842.242/universal-theme/badge-list/flexiblebox @/8842.242/universal-theme/badge-list/floatitems @/8842.242/universal-theme/badge-list/grid @/8842.242/universal-theme/badge-list/large @/8842.242/universal-theme/badge-list/medium @/8842.242/universal-theme/badge-list/small @/8842.242/universal-theme/badge-list/stacked @/8842.242/universal-theme/badge-list/xlarge @/8842.242/universal-theme/badge-list/xxlarge @/8842.242/universal-theme/cards/2-columns @/8842.242/universal-theme/cards/2-lines @/8842.242/universal-theme/cards/3-columns @/8842.242/universal-theme/cards/3-lines @/8842.242/universal-theme/cards/4-columns @/8842.242/universal-theme/cards/4-lines @/8842.242/universal-theme/cards/5-columns @/8842.242/universal-theme/cards/basic @/8842.242/universal-theme/cards/block @/8842.242/universal-theme/cards/cards-stacked @/8842.242/universal-theme/cards/color-fill @/8842.242/universal-theme/cards/compact @/8842.242/universal-theme/cards/display-icons @/8842.242/universal-theme/cards/display-initials @/8842.242/universal-theme/cards/display-subtitle @/8842.242/universal-theme/cards/featured @/8842.242/universal-theme/cards/float @/8842.242/universal-theme/cards/hidden-body-text @/8842.242/universal-theme/cards/icons-rounded @/8842.242/universal-theme/cards/icons-square @/8842.242/universal-theme/cards/raise-card @/8842.242/universal-theme/cards/span-horizontally @/8842.242/universal-theme/cards/use-theme-colors @/8842.242/universal-theme/links-list/actions @/8842.242/universal-theme/links-list/disabletextwrapping @/8842.242/universal-theme/links-list/showbadges @/8842.242/universal-theme/links-list/showgotoarrow @/8842.242/universal-theme/links-list/showicons @/8842.242/universal-theme/links-list/showtopicons @/8842.242/universal-theme/media-list/2columngrid @/8842.242/universal-theme/media-list/3columngrid @/8842.242/universal-theme/media-list/4columngrid @/8842.242/universal-theme/media-list/5columngrid @/8842.242/universal-theme/media-list/apply-theme-colors @/8842.242/universal-theme/media-list/icons-rounded @/8842.242/universal-theme/media-list/icons-square @/8842.242/universal-theme/media-list/list-size-large @/8842.242/universal-theme/media-list/show-badges @/8842.242/universal-theme/media-list/show-description @/8842.242/universal-theme/media-list/show-icons @/8842.242/universal-theme/media-list/spanhorizontal @/8842.242/universal-theme/menu-bar/add-actions @/8842.242/universal-theme/menu-bar/behave-like-tabs @/8842.242/universal-theme/menu-bar/display-menu-callout @/8842.242/universal-theme/menu-bar/show-sub-menu-icons @/8842.242/universal-theme/menu-popup/add-actions @/8842.242/universal-theme/menu-popup/display-menu-callout @/8842.242/universal-theme/navigation-bar/display-menu-callout @/8842.242/universal-theme/side-navigation-menu/add-actions @/8842.242/universal-theme/side-navigation-menu/collapse-style-hidden @/8842.242/universal-theme/side-navigation-menu/collapsed-default @/8842.242/universal-theme/side-navigation-menu/icon-default @/8842.242/universal-theme/side-navigation-menu/style-a @/8842.242/universal-theme/side-navigation-menu/style-b @/8842.242/universal-theme/side-navigation-menu/style-c @/8842.242/universal-theme/tabs/above-label @/8842.242/universal-theme/tabs/fill-labels @/8842.242/universal-theme/tabs/inline-with-label @/8842.242/universal-theme/tabs/large @/8842.242/universal-theme/tabs/pill @/8842.242/universal-theme/tabs/simple @/8842.242/universal-theme/tabs/small @/8842.242/universal-theme/top-navigation-mega-menu/2-columns @/8842.242/universal-theme/top-navigation-mega-menu/3-columns @/8842.242/universal-theme/top-navigation-mega-menu/4-columns @/8842.242/universal-theme/top-navigation-mega-menu/5-columns @/8842.242/universal-theme/top-navigation-mega-menu/add-actions @/8842.242/universal-theme/top-navigation-mega-menu/custom @/8842.242/universal-theme/top-navigation-mega-menu/display-menu-callout @/8842.242/universal-theme/top-navigation-mega-menu/full-width @/8842.242/universal-theme/top-navigation-mega-menu/stacked @/8842.242/universal-theme/top-navigation-menu/add-actions @/8842.242/universal-theme/top-navigation-menu/behave-like-tabs @/8842.242/universal-theme/top-navigation-menu/display-menu-callout @/8842.242/universal-theme/top-navigation-menu/show-sub-menu-icons @/8842.242/universal-theme/top-navigation-tabs/display-labels-sm @/8842.242/universal-theme/top-navigation-tabs/hide-labels-sm @/8842.242/universal-theme/top-navigation-tabs/label-above-lg @/8842.242/universal-theme/top-navigation-tabs/label-inline-lg @/8842.242/universal-theme/top-navigation-tabs/no-label-lg @/8842.242/universal-theme/wizard-progress/allsteps @/8842.242/universal-theme/wizard-progress/currentsteponly @/8842.242/universal-theme/wizard-progress/hidelabels @/8842.242/universal-theme/wizard-progress/vertical-list @/8842.242/universal-theme/wizard-progress/wizard-progress-links @/8842.261/universal-theme/badge-list/2columngrid @/8842.261/universal-theme/badge-list/3columngrid @/8842.261/universal-theme/badge-list/4columngrid @/8842.261/universal-theme/badge-list/5columngrid @/8842.261/universal-theme/badge-list/apply-theme-colors @/8842.261/universal-theme/badge-list/circular @/8842.261/universal-theme/badge-list/fixed @/8842.261/universal-theme/badge-list/flexiblebox @/8842.261/universal-theme/badge-list/floatitems @/8842.261/universal-theme/badge-list/grid @/8842.261/universal-theme/badge-list/large @/8842.261/universal-theme/badge-list/medium @/8842.261/universal-theme/badge-list/small @/8842.261/universal-theme/badge-list/stacked @/8842.261/universal-theme/badge-list/xlarge @/8842.261/universal-theme/badge-list/xxlarge @/8842.261/universal-theme/cards/2-columns @/8842.261/universal-theme/cards/2-lines @/8842.261/universal-theme/cards/3-columns @/8842.261/universal-theme/cards/3-lines @/8842.261/universal-theme/cards/4-columns @/8842.261/universal-theme/cards/4-lines @/8842.261/universal-theme/cards/5-columns @/8842.261/universal-theme/cards/basic @/8842.261/universal-theme/cards/block @/8842.261/universal-theme/cards/cards-stacked @/8842.261/universal-theme/cards/color-fill @/8842.261/universal-theme/cards/compact @/8842.261/universal-theme/cards/display-icons @/8842.261/universal-theme/cards/display-initials @/8842.261/universal-theme/cards/display-subtitle @/8842.261/universal-theme/cards/featured @/8842.261/universal-theme/cards/float @/8842.261/universal-theme/cards/hidden-body-text @/8842.261/universal-theme/cards/icons-rounded @/8842.261/universal-theme/cards/icons-square @/8842.261/universal-theme/cards/raise-card @/8842.261/universal-theme/cards/span-horizontally @/8842.261/universal-theme/cards/use-theme-colors @/8842.261/universal-theme/links-list/actions @/8842.261/universal-theme/links-list/disabletextwrapping @/8842.261/universal-theme/links-list/showbadges @/8842.261/universal-theme/links-list/showgotoarrow @/8842.261/universal-theme/links-list/showicons @/8842.261/universal-theme/links-list/showtopicons @/8842.261/universal-theme/media-list/2columngrid @/8842.261/universal-theme/media-list/3columngrid @/8842.261/universal-theme/media-list/4columngrid @/8842.261/universal-theme/media-list/5columngrid @/8842.261/universal-theme/media-list/apply-theme-colors @/8842.261/universal-theme/media-list/icons-rounded @/8842.261/universal-theme/media-list/icons-square @/8842.261/universal-theme/media-list/list-size-large @/8842.261/universal-theme/media-list/show-badges @/8842.261/universal-theme/media-list/show-description @/8842.261/universal-theme/media-list/show-icons @/8842.261/universal-theme/media-list/spanhorizontal @/8842.261/universal-theme/menu-bar/add-actions @/8842.261/universal-theme/menu-bar/behave-like-tabs @/8842.261/universal-theme/menu-bar/display-menu-callout @/8842.261/universal-theme/menu-bar/show-sub-menu-icons @/8842.261/universal-theme/menu-popup/add-actions @/8842.261/universal-theme/menu-popup/display-menu-callout @/8842.261/universal-theme/navigation-bar/display-menu-callout @/8842.261/universal-theme/side-navigation-menu/add-actions @/8842.261/universal-theme/side-navigation-menu/collapse-style-hidden @/8842.261/universal-theme/side-navigation-menu/collapsed-default @/8842.261/universal-theme/side-navigation-menu/hide-default-item-icon @/8842.261/universal-theme/side-navigation-menu/icon-default @/8842.261/universal-theme/side-navigation-menu/style-a @/8842.261/universal-theme/side-navigation-menu/style-b @/8842.261/universal-theme/side-navigation-menu/style-c @/8842.261/universal-theme/tabs/above-label @/8842.261/universal-theme/tabs/fill-labels @/8842.261/universal-theme/tabs/inline-with-label @/8842.261/universal-theme/tabs/large @/8842.261/universal-theme/tabs/pill @/8842.261/universal-theme/tabs/simple @/8842.261/universal-theme/tabs/small @/8842.261/universal-theme/top-navigation-mega-menu/2-columns @/8842.261/universal-theme/top-navigation-mega-menu/3-columns @/8842.261/universal-theme/top-navigation-mega-menu/4-columns @/8842.261/universal-theme/top-navigation-mega-menu/5-columns @/8842.261/universal-theme/top-navigation-mega-menu/add-actions @/8842.261/universal-theme/top-navigation-mega-menu/custom @/8842.261/universal-theme/top-navigation-mega-menu/display-menu-callout @/8842.261/universal-theme/top-navigation-mega-menu/full-width @/8842.261/universal-theme/top-navigation-mega-menu/stacked @/8842.261/universal-theme/top-navigation-menu/add-actions @/8842.261/universal-theme/top-navigation-menu/behave-like-tabs @/8842.261/universal-theme/top-navigation-menu/display-menu-callout @/8842.261/universal-theme/top-navigation-menu/show-sub-menu-icons @/8842.261/universal-theme/top-navigation-tabs/display-labels-sm @/8842.261/universal-theme/top-navigation-tabs/hide-labels-sm @/8842.261/universal-theme/top-navigation-tabs/label-above-lg @/8842.261/universal-theme/top-navigation-tabs/label-inline-lg @/8842.261/universal-theme/top-navigation-tabs/no-label-lg @/8842.261/universal-theme/wizard-progress/allsteps @/8842.261/universal-theme/wizard-progress/currentsteponly @/8842.261/universal-theme/wizard-progress/hidelabels @/8842.261/universal-theme/wizard-progress/vertical-list @/8842.261/universal-theme/wizard-progress/wizard-progress-links

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
