# APEXlang: componentes con padre `facet` (APEX 26.1)


---

facet actionsMenu - APEXlang Reference

facet (actionsMenu)

Parent: facet

Applies whentype = actionsMenu
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet checkboxGroup - APEXlang Reference

facet (checkboxGroup)

Parent: facet

Applies whentype = checkboxGroup
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet checkbox - APEXlang Reference

facet (checkbox)

Parent: facet

Applies whentype = checkbox
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | useDefaults | boolean | Yes | true | data type=boolean

 | checkedValue | string | Yes | | data type=string; maxLen=4000

Copy
settings {
 useDefaults: false
 checkedValue: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 useDefaults: false
 checkedValue: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet colorPicker - APEXlang Reference

facet (colorPicker)

Parent: facet

Applies whentype = colorPicker
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | useDefaults | boolean | Yes | true | data type=boolean

 | colorPreset | enum | Yes | themeStyle | data type=string; maxLen=4000; lov=STATIC
Valid values: none themeStyle custom

 | colors | string | Yes | | data type=string; maxLen=4000
Applies whencolor_preset = CUSTOM

 | contrastWith | enum | Yes | none | data type=string; maxLen=4000; lov=STATIC
Valid values: staticColor pageItem none

 | contrastItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whencontrast_with = PAGE_ITEM

 | contrastColor | string | Yes | | data type=string; maxLen=4000
Applies whencontrast_with = STATIC

Copy
settings {
 useDefaults: false
 colorPreset: none
 colors: value
 contrastWith: staticColor
 contrastItem: value
 contrastColor: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 useDefaults: false
 colorPreset: none
 colors: value
 contrastWith: staticColor
 contrastItem: value
 contrastColor: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet combobox - APEXlang Reference

facet (combobox)

Parent: facet

Applies whentype = combobox
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
search
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

search

 | Property | Type | Required | Default Value | Details

 | matchType | enum | Yes | contains | data type=string; maxLen=4000; lov=STATIC
Valid values: contains startsWith

 | caseSensitive | boolean | Yes | false | data type=boolean

 | minChars | integer | Yes | 0 | data type=integer; maxLen=2

Copy
search {
 matchType: contains
 caseSensitive: false
 minChars: 42
}

settings

 | Property | Type | Required | Default Value | Details

 | valueHtmlExpression | string | No | | data type=string; maxLen=4000

 | fetchOnSearch | boolean | Yes | false | data type=boolean

 | maxValuesInList | integer | No | | data type=integer; maxLen=3
Applies wheninfinite_scroll = N

 | multiSelection | boolean | Yes | false | data type=boolean

 | useCache | boolean | Yes | true | data type=boolean
Applies whenfetch_on_search = Y

 | manualEntriesItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenfetch_on_search = N

 | infiniteScroll | boolean | Yes | true | data type=boolean

Copy
settings {
 valueHtmlExpression: value
 fetchOnSearch: false
 maxValuesInList: 42
 multiSelection: false
 useCache: false
 manualEntriesItem: value
 infiniteScroll: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 search {
 matchType: contains
 caseSensitive: false
 minChars: 42
 }
 settings {
 valueHtmlExpression: value
 fetchOnSearch: false
 maxValuesInList: 42
 multiSelection: false
 useCache: false
 manualEntriesItem: value
 infiniteScroll: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet datePickerJquery - APEXlang Reference

facet (datePickerJquery)

Parent: facet

Applies whentype = datePickerJquery
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | highlightedDate | string | No | | data type=string; maxLen=255

 | minDate | string | No | | data type=string; maxLen=255

 | maxDate | string | No | | data type=string; maxLen=255

 | show | enum | Yes | onIconClick | data type=string; maxLen=4000; lov=STATIC
Valid values: inline onIconClick onFocus both

 | showOtherMonths | boolean | Yes | false | data type=boolean

 | noOfMonths | string | No | | data type=string; maxLen=10
Applies whenshow_other_months = Y

 | navigationListFor | enum | Yes | none | data type=string; maxLen=4000; lov=STATIC
Valid values: month monthAndYear year none

 | yearRange | string | No | | data type=string; maxLen=50
Applies whennavigation_list_for in (YEAR)navigation_list_for in (MONTH_AND_YEAR)

Copy
settings {
 highlightedDate: value
 minDate: value
 maxDate: value
 show: inline
 showOtherMonths: false
 noOfMonths: value
 navigationListFor: month
 yearRange: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 highlightedDate: value
 minDate: value
 maxDate: value
 show: inline
 showOtherMonths: false
 noOfMonths: value
 navigationListFor: month
 yearRange: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet datePicker - APEXlang Reference

facet (datePicker)

Parent: facet

Applies whentype = datePicker
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | showTime | boolean | Yes | false | data type=boolean

 | displayAs | enum | Yes | popup | data type=string; maxLen=4000; lov=STATIC
Valid values: inline popup nativeHtml

 | minDate | enum | Yes | none | data type=string; maxLen=4000; lov=STATIC
Valid values: none item static

 | minStatic | string | Yes | | data type=string; maxLen=255
Applies whenmin_date = STATIC

 | minItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenmin_date = ITEM

 | maxDate | enum | Yes | none | data type=string; maxLen=4000; lov=STATIC
Valid values: static none item

 | maxStatic | string | Yes | | data type=string; maxLen=255
Applies whenmax_date = STATIC

 | maxItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenmax_date = ITEM

 | multipleMonths | enum | Yes | false | data type=string; maxLen=4000; lov=STATIC
Valid values: 5 false 3 2 4
Applies whendisplay_as in (POPUP)display_as in (INLINE)

 | useDefaults | boolean | Yes | true | data type=boolean
Applies whendisplay_as in (POPUP)display_as in (INLINE)

 | appearanceBehavior | enum | No | MONTH-PICKER:YEAR-PICKER:TODAY-BUTTON | data type=string; maxLen=4000; lov=STATIC
Valid values: paginateByMultipleMonths showWeek yearPicker showTodayButton monthPicker
Applies whendisplay_as in (POPUP) and use_defaults = Ndisplay_as in (INLINE) and use_defaults = N

 | daysOutsideMonth | enum | Yes | visible | data type=string; maxLen=4000; lov=STATIC
Valid values: visible selectable hidden
Applies whendisplay_as in (POPUP) and use_defaults = Ndisplay_as in (INLINE) and use_defaults = N

 | timeIncrement | integer | No | | data type=integer; maxLen=2
Applies whendisplay_as in (POPUP) and use_defaults = Ndisplay_as in (INLINE) and use_defaults = N

 | showOn | enum | Yes | itemFocus | data type=string; maxLen=4000; lov=STATIC
Valid values: iconClick itemFocus
Applies whendisplay_as in (POPUP) and use_defaults = Ndisplay_as in (INLINE) and use_defaults = N

Copy
settings {
 showTime: false
 displayAs: inline
 minDate: none
 minStatic: value
 minItem: value
 maxDate: static
 maxStatic: value
 maxItem: value
 multipleMonths: "5"
 useDefaults: false
 appearanceBehavior: paginateByMultipleMonths
 daysOutsideMonth: visible
 timeIncrement: 42
 showOn: iconClick
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 showTime: false
 displayAs: inline
 minDate: none
 minStatic: value
 minItem: value
 maxDate: static
 maxStatic: value
 maxItem: value
 multipleMonths: "5"
 useDefaults: false
 appearanceBehavior: paginateByMultipleMonths
 daysOutsideMonth: visible
 timeIncrement: 42
 showOn: iconClick
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet displayImage - APEXlang Reference

facet (displayImage)

Parent: facet

Applies whentype = displayImage
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | basedOn | enum | Yes | blobColItem | data type=string; maxLen=4000; lov=STATIC
Valid values: url blobColSql blobColItem

 | altText | string | No | | data type=string; maxLen=4000
Applies whenbased_on = URL

 | altTextColumn | string | No | | data type=string; maxLen=128
Applies whenbased_on = DB_COLUMN

 | filenameColumn | string | No | | data type=string; maxLen=128
Applies whenbased_on = DB_COLUMN

 | blobLastUpdatedColumn | string | No | | data type=string; maxLen=128
Applies whenbased_on = DB_COLUMN

 | sqlQuery | string | Yes | | data type=string; maxLen=4000
Applies whenbased_on = SQL

 | mimeTypeColumn | string | No | | data type=string; maxLen=128
Applies whenbased_on = DB_COLUMN

Copy
settings {
 basedOn: url
 altText: value
 altTextColumn: value
 filenameColumn: value
 blobLastUpdatedColumn: value
 sqlQuery: value
 mimeTypeColumn: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 basedOn: url
 altText: value
 altTextColumn: value
 filenameColumn: value
 blobLastUpdatedColumn: value
 sqlQuery: value
 mimeTypeColumn: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet displayMap - APEXlang Reference

facet (displayMap)

Parent: facet

Applies whentype = displayMap
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | tooltip | string | No | | data type=string; maxLen=4000
Applies whenshow_marker = Y

Copy
settings {
 tooltip: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 tooltip: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet displayOnly - APEXlang Reference

facet (displayOnly)

Parent: facet

Applies whentype = displayOnly
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | basedOn | enum | Yes | value | data type=string; maxLen=4000; lov=STATIC
Valid values: plsql lov value
Applies whenformat = PLAIN

 | plsqlCode | string | Yes | | data type=string; maxLen=4000
Applies whenformat = PLAIN and based_on = PLSQL

Copy
settings {
 basedOn: plsql
 plsqlCode: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 basedOn: plsql
 plsqlCode: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet fileUpload - APEXlang Reference

facet (fileUpload)

Parent: facet

Applies whentype = fileUpload
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
storage
display
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

storage

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | blobCol | data type=string; maxLen=4000; lov=STATIC
Valid values: appTempFiles wwvFlowFiles blobCol

 | mimeTypeColumn | string | No | | data type=string; maxLen=128
Applies whenstorage_type = DB_COLUMN

 | filenameColumn | string | No | | data type=string; maxLen=128
Applies whenstorage_type = DB_COLUMN

 | charSetColumn | string | No | | data type=string; maxLen=128
Applies whenstorage_type = DB_COLUMN

 | bobLastUpdatedColumn | string | No | | data type=string; maxLen=128
Applies whenstorage_type = DB_COLUMN

 | purgeFileAt | enum | Yes | endOfSession | data type=string; maxLen=4000; lov=STATIC
Valid values: endOfRequest endOfSession
Applies whenstorage_type = APEX_APPLICATION_TEMP_FILES

 | allowMultipleFiles | boolean | Yes | false | data type=boolean
Applies whenstorage_type = APEX_APPLICATION_TEMP_FILES

 | fileTypes | string | No | | data type=string; maxLen=4000

 | maxFileSize | integer | No | | data type=integer

Copy
storage {
 type: appTempFiles
 mimeTypeColumn: value
 filenameColumn: value
 charSetColumn: value
 bobLastUpdatedColumn: value
 purgeFileAt: endOfRequest
 allowMultipleFiles: false
 fileTypes: value
 maxFileSize: 42
}

display

 | Property | Type | Required | Default Value | Details

 | displayDownloadLink | boolean | Yes | true | data type=boolean
Applies whenstorage_type = DB_COLUMN

 | downloadLinkText | string | No | | data type=string; maxLen=255
Applies whenstorage_type = DB_COLUMN and display_download_link = Y

 | contentDisposition | enum | Yes | attachment | data type=string; maxLen=4000; lov=STATIC
Valid values: inline attachment
Applies whenstorage_type = DB_COLUMN and display_download_link = Y

 | displayAs | enum | Yes | inlineFileBrowse | data type=string; maxLen=4000; lov=STATIC
Valid values: inlineFileBrowse inlineDropzone blockDropzone nativeFileBrowse

 | dropzoneTitle | string | No | | data type=string; maxLen=255
Applies whendisplay_as in (INLINE)display_as in (DROPZONE_INLINE)display_as in (DROPZONE_BLOCK)

 | dropzoneDesc | string | No | | data type=string; maxLen=255
Applies whendisplay_as in (DROPZONE_INLINE)display_as in (DROPZONE_BLOCK)

 | captureUsing | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: selfieCamera mainCamera

 | allowCopyPaste | boolean | Yes | false | data type=boolean

Copy
display {
 displayDownloadLink: false
 downloadLinkText: value
 contentDisposition: inline
 displayAs: inlineFileBrowse
 dropzoneTitle: value
 dropzoneDesc: value
 captureUsing: selfieCamera
 allowCopyPaste: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 storage {
 type: appTempFiles
 mimeTypeColumn: value
 filenameColumn: value
 charSetColumn: value
 bobLastUpdatedColumn: value
 purgeFileAt: endOfRequest
 allowMultipleFiles: false
 fileTypes: value
 maxFileSize: 42
 }
 display {
 displayDownloadLink: false
 downloadLinkText: value
 contentDisposition: inline
 displayAs: inlineFileBrowse
 dropzoneTitle: value
 dropzoneDesc: value
 captureUsing: selfieCamera
 allowCopyPaste: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet geocodedAddress - APEXlang Reference

facet (geocodedAddress)

Parent: facet

Applies whentype = geocodedAddress
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
geocodingInput
geocodingResult
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

geocodingInput

 | Property | Type | Required | Default Value | Details

 | countryType | enum | Yes | static | data type=string; maxLen=4000; lov=STATIC
Valid values: static item

 | country | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whencountry_type = ITEM

 | country | enum | Yes | us | data type=string; maxLen=4000; lov=STATIC
Valid values: hu pt co mx sa ie ae be in nl us za it fr cz ru no lv hk cl fi ca ee ro ch at pl br de au es uk dk
Applies whencountry_type = STATIC

 | addressItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = N

 | streetItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y

 | houseNoItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y

 | citySubAreaItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y

 | cityItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y

 | postalCodeItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y

 | regionItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenstructured_address = Y

Copy
geocodingInput {
 countryType: static
 country: value
 addressItem: value
 streetItem: value
 houseNoItem: value
 citySubAreaItem: value
 cityItem: value
 postalCodeItem: value
 regionItem: value
}

geocodingResult

 | Property | Type | Required | Default Value | Details

 | matchVectorItem | string | No | | data type=string; maxLen=4000; textCase=UPPER

Copy
geocodingResult {
 matchVectorItem: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 geocodingInput {
 countryType: static
 country: value
 addressItem: value
 streetItem: value
 houseNoItem: value
 citySubAreaItem: value
 cityItem: value
 postalCodeItem: value
 regionItem: value
 }
 geocodingResult {
 matchVectorItem: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet hidden - APEXlang Reference

facet (hidden)

Parent: facet

Applies whentype = hidden
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | valueProtected | boolean | Yes | true | data type=boolean

Copy
settings {
 valueProtected: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 valueProtected: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet htmlExpression - APEXlang Reference

facet (htmlExpression)

Parent: facet

Applies whentype = htmlExpression
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | htmlExpression | string | Yes | | data type=string; maxLen=4000

Copy
settings {
 htmlExpression: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 htmlExpression: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet imageUpload - APEXlang Reference

facet (imageUpload)

Parent: facet

Applies whentype = imageUpload
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
storage
display
resizeTo
cropping
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

storage

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | blobCol | data type=string; maxLen=4000; lov=STATIC
Valid values: blobCol appTempFiles

 | mimeTypeColumn | string | No | | data type=string; maxLen=4000
Applies whenstorage_type = DB_COLUMN

 | filenameColumn | string | No | | data type=string; maxLen=4000
Applies whenstorage_type = DB_COLUMN

 | blobLastUpdatedColumn | string | No | | data type=string; maxLen=4000
Applies whenstorage_type = DB_COLUMN

 | purgeFilesAt | enum | Yes | endOfSession | data type=string; maxLen=4000; lov=STATIC
Valid values: endOfRequest endOfSession
Applies whenstorage_type = APEX_APPLICATION_TEMP_FILES

 | allowMultipleFiles | boolean | Yes | false | data type=boolean
Applies whenstorage_type = APEX_APPLICATION_TEMP_FILES

Copy
storage {
 type: blobCol
 mimeTypeColumn: value
 filenameColumn: value
 blobLastUpdatedColumn: value
 purgeFilesAt: endOfRequest
 allowMultipleFiles: false
}

display

 | Property | Type | Required | Default Value | Details

 | displayDownloadLink | boolean | Yes | true | data type=boolean
Applies whenstorage_type = DB_COLUMN

 | downloadLinkText | string | No | | data type=string; maxLen=255
Applies whenstorage_type = DB_COLUMN and display_download_link = Y

 | displayAs | enum | Yes | iconDropzone | data type=string; maxLen=4000; lov=STATIC
Valid values: inlineDropzone blockDropzone iconDropzone nativeFileBrowse inlineFileBrowse

 | dropzoneTitle | string | No | | data type=string; maxLen=255
Applies whendisplay_as in (INLINE)display_as in (DROPZONE_INLINE)display_as in (DROPZONE_BLOCK)

 | dropzoneDesc | string | No | | data type=string; maxLen=4000
Applies whendisplay_as in (DROPZONE_INLINE)display_as in (DROPZONE_BLOCK)

 | captureUsing | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: mainCamera selfieCamera

 | previewSize | enum | Yes | auto | data type=string; maxLen=4000; lov=STATIC
Valid values: extraLarge extraSmall auto large medium small
Applies whendisplay_as = DROPZONE_ICON

 | allowCopyPaste | boolean | Yes | false | data type=boolean

Copy
display {
 displayDownloadLink: false
 downloadLinkText: value
 displayAs: inlineDropzone
 dropzoneTitle: value
 dropzoneDesc: value
 captureUsing: mainCamera
 previewSize: extraLarge
 allowCopyPaste: false
}

resizeTo

 | Property | Type | Required | Default Value | Details

 | maxFileSize | integer | No | | data type=integer

 | maxWidth | integer | No | | data type=integer

 | maxHeight | integer | No | | data type=integer

Copy
resizeTo {
 maxFileSize: 42
 maxWidth: 42
 maxHeight: 42
}

cropping

 | Property | Type | Required | Default Value | Details

 | allowCropping | boolean | Yes | false | data type=boolean
Applies whenstorage_type = APEX_APPLICATION_TEMP_FILES

 | aspectRatio | enum | Yes | original | data type=string; maxLen=4000; lov=STATIC
Valid values: original univisium standard square widescreen custom
Applies whenstorage_type = APEX_APPLICATION_TEMP_FILES and allow_cropping = Y

 | customAspectRatio | string | Yes | | data type=string; maxLen=4000
Applies whenstorage_type = APEX_APPLICATION_TEMP_FILES and allow_cropping = Y and aspect_ratio = CUSTOM

Copy
cropping {
 allowCropping: false
 aspectRatio: original
 customAspectRatio: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 storage {
 type: blobCol
 mimeTypeColumn: value
 filenameColumn: value
 blobLastUpdatedColumn: value
 purgeFilesAt: endOfRequest
 allowMultipleFiles: false
 }
 display {
 displayDownloadLink: false
 downloadLinkText: value
 displayAs: inlineDropzone
 dropzoneTitle: value
 dropzoneDesc: value
 captureUsing: mainCamera
 previewSize: extraLarge
 allowCopyPaste: false
 }
 resizeTo {
 maxFileSize: 42
 maxWidth: 42
 maxHeight: 42
 }
 cropping {
 allowCropping: false
 aspectRatio: original
 customAspectRatio: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet inputField - APEXlang Reference

facet (inputField)

Parent: facet

Applies whentype = inputField
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | comparisonOperator | enum | Yes | equals | data type=string; maxLen=4000; lov=STATIC
Valid values: notEquals contains doesNotContain greaterThanOrEqualTo equals startsWith doesNotStartWith lessThan greaterThan lessThanOrEqualTo

 | caseSensitive | boolean | Yes | true | data type=boolean
Applies whencomparison_operator in (STARTS_WITH)comparison_operator in (CONTAINS)comparison_operator in (NOT_STARTS_WITH)comparison_operator in (NOT_CONTAINS)

 | valuesCase | enum | Yes | mixed | data type=string; maxLen=4000; lov=STATIC
Valid values: lower mixed upper
Applies whencomparison_operator in (STARTS_WITH) and case_sensitive = Ycomparison_operator in (CONTAINS) and case_sensitive = Ycomparison_operator in (NOT_STARTS_WITH) and case_sensitive = Ycomparison_operator in (NOT_CONTAINS) and case_sensitive = Y

 | currentLabel | string | No | | data type=string; maxLen=4000
Applies whenuser_can_choose_operator = N

 | prefixText | string | No | | data type=string; maxLen=4000
Applies whenuser_can_choose_operator = N

 | suffixText | string | No | | data type=string; maxLen=4000
Applies whenuser_can_choose_operator = N

 | userCanChooseOperator | boolean | Yes | false | data type=boolean

Copy
settings {
 comparisonOperator: notEquals
 caseSensitive: false
 valuesCase: lower
 currentLabel: value
 prefixText: value
 suffixText: value
 userCanChooseOperator: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 comparisonOperator: notEquals
 caseSensitive: false
 valuesCase: lower
 currentLabel: value
 prefixText: value
 suffixText: value
 userCanChooseOperator: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet link - APEXlang Reference

facet (link)

Parent: facet

Applies whentype = link
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet listManager - APEXlang Reference

facet (listManager)

Parent: facet

Applies whentype = listManager
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | fetch | enum | Yes | firstRowset | data type=string; maxLen=4000; lov=STATIC
Valid values: firstRowset firstRowsetFilter noFetch

 | preserveCase | boolean | Yes | true | data type=boolean

Copy
settings {
 fetch: firstRowset
 preserveCase: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 fetch: firstRowset
 preserveCase: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet markdownEditor - APEXlang Reference

facet (markdownEditor)

Parent: facet

Applies whentype = markdownEditor
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | syntaxHighlighting | boolean | Yes | true | data type=boolean

Copy
settings {
 syntaxHighlighting: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 syntaxHighlighting: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet numberField - APEXlang Reference

facet (numberField)

Parent: facet

Applies whentype = numberField
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | minValue | number | No | | data type=number; maxLen=255

 | maxValue | number | No | | data type=number; maxLen=255

 | numberAlignment | enum | Yes | start | data type=string; maxLen=4000; lov=STATIC
Valid values: start center end

 | virtualKeyboard | enum | Yes | decimal | data type=string; maxLen=4000; lov=STATIC
Valid values: decimal numeric text

Copy
settings {
 minValue: 42
 maxValue: 42
 numberAlignment: start
 virtualKeyboard: decimal
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 minValue: 42
 maxValue: 42
 numberAlignment: start
 virtualKeyboard: decimal
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet password - APEXlang Reference

facet (password)

Parent: facet

Applies whentype = password
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | submitWhenEnterPressed | boolean | Yes | true | data type=boolean

Copy
settings {
 submitWhenEnterPressed: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 submitWhenEnterPressed: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet percentGraph - APEXlang Reference

facet (percentGraph)

Parent: facet

Applies whentype = percentGraph
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | showValue | boolean | Yes | true | data type=boolean

 | backgroundColor | string | No | | data type=string; maxLen=4000

 | foregroundColor | string | No | | data type=string; maxLen=4000

 | textColor | string | No | | data type=string; maxLen=4000
Applies whenshow_value = Y

 | barWidth | integer | No | | data type=integer; maxLen=3

Copy
settings {
 showValue: false
 backgroundColor: value
 foregroundColor: value
 textColor: value
 barWidth: 42
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 showValue: false
 backgroundColor: value
 foregroundColor: value
 textColor: value
 barWidth: 42
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet popupLov - APEXlang Reference

facet (popupLov)

Parent: facet

Applies whentype = popupLov
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
search
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | displayAs | enum | Yes | inlinePopup | data type=string; maxLen=4000; lov=STATIC
Valid values: inlinePopup modalDialog

 | initialFetch | enum | Yes | auto | data type=string; maxLen=4000; lov=STATIC
Valid values: auto autoCurrentValue onUserRequest

 | manualEntry | boolean | Yes | false | data type=boolean

 | fetchOnSearch | boolean | Yes | false | data type=boolean

 | title | string | No | | data type=string; maxLen=4000

 | popupWidth | number | No | | data type=number

 | popupHeight | number | No | | data type=number

 | additionalOutputs | string | No | | data type=string; maxLen=4000

Copy
settings {
 displayAs: inlinePopup
 initialFetch: auto
 manualEntry: false
 fetchOnSearch: false
 title: value
 popupWidth: 42
 popupHeight: 42
 additionalOutputs: value
}

search

 | Property | Type | Required | Default Value | Details

 | minChars | integer | Yes | 0 | data type=integer; maxLen=2

 | matchType | enum | Yes | contains | data type=string; maxLen=4000; lov=STATIC
Valid values: startsWith contains

 | caseSensitive | boolean | Yes | false | data type=boolean

Copy
search {
 minChars: 42
 matchType: startsWith
 caseSensitive: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 displayAs: inlinePopup
 initialFetch: auto
 manualEntry: false
 fetchOnSearch: false
 title: value
 popupWidth: 42
 popupHeight: 42
 additionalOutputs: value
 }
 search {
 minChars: 42
 matchType: startsWith
 caseSensitive: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet qrCode - APEXlang Reference

facet (qrCode)

Parent: facet

Applies whentype = qrCode
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
qrCode
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

qrCode

 | Property | Type | Required | Default Value | Details

 | dataType | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: email geoLocation url phone sms

 | size | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: small large medium

Copy
qrCode {
 dataType: email
 size: small
}

settings

 | Property | Type | Required | Default Value | Details

 | valueProtected | boolean | Yes | true | data type=boolean

Copy
settings {
 valueProtected: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 qrCode {
 dataType: email
 size: small
 }
 settings {
 valueProtected: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet radioGroup - APEXlang Reference

facet (radioGroup)

Parent: facet

Applies whentype = radioGroup
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | hideRadioButtons | boolean | Yes | false | data type=boolean

Copy
settings {
 hideRadioButtons: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 hideRadioButtons: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet range - APEXlang Reference

facet (range)

Parent: facet

Applies whentype = range
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | selectMultiple | boolean | Yes | false | data type=boolean

 | manualEntry | boolean | Yes | false | data type=boolean

 | rangeText | string | No | | data type=string; maxLen=255
Applies whenmanual_entry = Y

 | currentLabel | string | No | | data type=string; maxLen=255
Applies whenmanual_entry = Y

 | currentLabelOpenHigh | string | No | | data type=string; maxLen=255
Applies whenmanual_entry = Y

 | currentLabelOpenLow | string | No | | data type=string; maxLen=255
Applies whenmanual_entry = Y

Copy
settings {
 selectMultiple: false
 manualEntry: false
 rangeText: value
 currentLabel: value
 currentLabelOpenHigh: value
 currentLabelOpenLow: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 selectMultiple: false
 manualEntry: false
 rangeText: value
 currentLabel: value
 currentLabelOpenHigh: value
 currentLabelOpenLow: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet richTextEditor - APEXlang Reference

facet (richTextEditor)

Parent: facet

Applies whentype = richTextEditor
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | format | enum | Yes | markdown | data type=string; maxLen=4000; lov=STATIC
Valid values: markdown html

 | toolbar | enum | Yes | intermediate | data type=string; maxLen=4000; lov=STATIC
Valid values: full basic intermediate
Applies whenformat = HTML

 | toolbarStyle | enum | Yes | overflowMenu | data type=string; maxLen=4000; lov=STATIC
Valid values: overflowMenu multiline
Applies whenformat = HTML and toolbar in (INTERMEDIATE)format = HTML and toolbar in (FULL)

 | minHeight | number | No | 180 | data type=number

 | maxHeight | number | No | | data type=number

 | allowCustomHtml | boolean | Yes | false | data type=boolean

Copy
settings {
 format: markdown
 toolbar: full
 toolbarStyle: overflowMenu
 minHeight: 42
 maxHeight: 42
 allowCustomHtml: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 format: markdown
 toolbar: full
 toolbarStyle: overflowMenu
 minHeight: 42
 maxHeight: 42
 allowCustomHtml: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet rowSelector - APEXlang Reference

facet (rowSelector)

Parent: facet

Applies whentype = rowSelector
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | enableMultiSelect | boolean | Yes | true | data type=boolean

 | showSelectAll | boolean | Yes | true | data type=boolean
Applies whenenable_multi_select = Y

 | hideControl | boolean | Yes | false | data type=boolean

Copy
settings {
 enableMultiSelect: false
 showSelectAll: false
 hideControl: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 enableMultiSelect: false
 showSelectAll: false
 hideControl: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet search - APEXlang Reference

facet (search)

Parent: facet

Applies whentype = search
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | searchType | enum | Yes | rowSearch | data type=string; maxLen=4000; lov=STATIC
Valid values: oracleText rowSearch

 | inputField | enum | Yes | topOfFacetedSearchRegion | data type=string; maxLen=4000; lov=STATIC
Valid values: topOfFacetedSearchRegion externalPageItem

 | externalPageItem | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies wheninput_field = PAGE_ITEM

Copy
settings {
 searchType: oracleText
 inputField: topOfFacetedSearchRegion
 externalPageItem: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 searchType: oracleText
 inputField: topOfFacetedSearchRegion
 externalPageItem: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet selectList - APEXlang Reference

facet (selectList)

Parent: facet

Applies whentype = selectList
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | executeValidations | boolean | Yes | true | data type=boolean
Applies whenpage_action_on_selection = SUBMIT

Copy
settings {
 executeValidations: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 executeValidations: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet selectMany - APEXlang Reference

facet (selectMany)

Parent: facet

Applies whentype = selectMany
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
search
settings
messages
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

search

 | Property | Type | Required | Default Value | Details

 | matchType | enum | Yes | contains | data type=string; maxLen=4000; lov=STATIC
Valid values: contains startsWith

 | caseSensitive | boolean | Yes | false | data type=boolean

 | minChars | integer | Yes | 0 | data type=integer; maxLen=2

Copy
search {
 matchType: contains
 caseSensitive: false
 minChars: 42
}

settings

 | Property | Type | Required | Default Value | Details

 | valueHtmlExpression | string | No | | data type=string; maxLen=4000

 | fetchOnSearch | boolean | Yes | false | data type=boolean

 | maxValuesInList | integer | No | | data type=integer; maxLen=3
Applies wheninfinite_scroll = N

 | useCache | boolean | Yes | true | data type=boolean
Applies whenfetch_on_search = Y

 | useDefaults | boolean | Yes | true | data type=boolean

 | displayValuesAs | enum | Yes | chips | data type=string; maxLen=4000; lov=STATIC
Valid values: chips commaSeparatedList
Applies whenuse_defaults = N

 | infiniteScroll | boolean | Yes | true | data type=boolean

Copy
settings {
 valueHtmlExpression: value
 fetchOnSearch: false
 maxValuesInList: 42
 useCache: false
 useDefaults: false
 displayValuesAs: chips
 infiniteScroll: false
}

messages

 | Property | Type | Required | Default Value | Details

 | noDataFoundMessage | string | No | | data type=string; maxLen=255

Copy
messages {
 noDataFoundMessage: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 search {
 matchType: contains
 caseSensitive: false
 minChars: 42
 }
 settings {
 valueHtmlExpression: value
 fetchOnSearch: false
 maxValuesInList: 42
 useCache: false
 useDefaults: false
 displayValuesAs: chips
 infiniteScroll: false
 }
 messages {
 noDataFoundMessage: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet selectOne - APEXlang Reference

facet (selectOne)

Parent: facet

Applies whentype = selectOne
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
search
settings
messages
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

search

 | Property | Type | Required | Default Value | Details

 | matchType | enum | Yes | contains | data type=string; maxLen=4000; lov=STATIC
Valid values: contains startsWith

 | caseSensitive | boolean | Yes | false | data type=boolean

 | minChars | integer | Yes | 0 | data type=integer; maxLen=2

Copy
search {
 matchType: contains
 caseSensitive: false
 minChars: 42
}

settings

 | Property | Type | Required | Default Value | Details

 | valueHtmlExpression | string | No | | data type=string; maxLen=4000

 | fetchOnSearch | boolean | Yes | false | data type=boolean

 | maxValuesInList | integer | No | | data type=integer; maxLen=3
Applies wheninfinite_scroll = N

 | useCache | boolean | Yes | true | data type=boolean
Applies whenfetch_on_search = Y

 | infiniteScroll | boolean | Yes | true | data type=boolean

Copy
settings {
 valueHtmlExpression: value
 fetchOnSearch: false
 maxValuesInList: 42
 useCache: false
 infiniteScroll: false
}

messages

 | Property | Type | Required | Default Value | Details

 | noDataFoundMessage | string | No | | data type=string; maxLen=255

Copy
messages {
 noDataFoundMessage: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 search {
 matchType: contains
 caseSensitive: false
 minChars: 42
 }
 settings {
 valueHtmlExpression: value
 fetchOnSearch: false
 maxValuesInList: 42
 useCache: false
 infiniteScroll: false
 }
 messages {
 noDataFoundMessage: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet shuttle - APEXlang Reference

facet (shuttle)

Parent: facet

Applies whentype = shuttle
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | showControls | enum | Yes | all | data type=string; maxLen=4000; lov=STATIC
Valid values: none orderingOnly all movingOnly

Copy
settings {
 showControls: none
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 showControls: none
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet starRating - APEXlang Reference

facet (starRating)

Parent: facet

Applies whentype = starRating
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | noOfStars | enum | Yes | 5 | data type=string; maxLen=4000; lov=STATIC
Valid values: 2 4 3 10 8 1 6 5 7 9

 | useDefaults | boolean | Yes | true | data type=boolean

 | icon | string | Yes | fa-star | data type=string; maxLen=4000
Applies whenuse_defaults = N

 | activeColor | string | No | | data type=string; maxLen=4000
Applies whenuse_defaults = N

 | inactiveColor | string | No | | data type=string; maxLen=4000
Applies whenuse_defaults = N

 | tooltip | string | Yes | #VALUE# | data type=string; maxLen=50
Applies whenuse_defaults = N

 | showClearButton | boolean | Yes | false | data type=boolean
Applies whenuse_defaults = N

 | showValue | boolean | Yes | false | data type=boolean
Applies whenuse_defaults = N

 | readOnlyDisplay | enum | Yes | stars | data type=string; maxLen=4000; lov=STATIC
Valid values: singleStarAndValue stars value starsAndValue
Applies whenuse_defaults = N

Copy
settings {
 noOfStars: "2"
 useDefaults: false
 icon: value
 activeColor: value
 inactiveColor: value
 tooltip: value
 showClearButton: false
 showValue: false
 readOnlyDisplay: singleStarAndValue
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 noOfStars: "2"
 useDefaults: false
 icon: value
 activeColor: value
 inactiveColor: value
 tooltip: value
 showClearButton: false
 showValue: false
 readOnlyDisplay: singleStarAndValue
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet stopAndStartGridLayout - APEXlang Reference

facet (stopAndStartGridLayout)

Parent: facet

Applies whentype = stopAndStartGridLayout
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet switch - APEXlang Reference

facet (switch)

Parent: facet

Applies whentype = switch
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | useDefaults | boolean | Yes | true | data type=boolean

 | onValue | string | No | | data type=string; maxLen=255
Applies whenuse_defaults = N

 | onLabel | string | No | | data type=string; maxLen=4000
Applies whenuse_defaults = N

 | offValue | string | No | | data type=string; maxLen=255
Applies whenuse_defaults = N

 | offLabel | string | No | | data type=string; maxLen=4000
Applies whenuse_defaults = N

Copy
settings {
 useDefaults: false
 onValue: value
 onLabel: value
 offValue: value
 offLabel: value
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 useDefaults: false
 onValue: value
 onLabel: value
 offValue: value
 offLabel: value
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet textFieldWithAutocomplete - APEXlang Reference

facet (textFieldWithAutocomplete)

Parent: facet

Applies whentype = textFieldWithAutocomplete
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
search
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

search

 | Property | Type | Required | Default Value | Details

 | matchType | enum | Yes | containsIgnoreCase | data type=string; maxLen=4000; lov=STATIC
Valid values: containsIgnoreCase exactIgnoreCase exactCaseSensitive containsCaseSensitive

 | minChars | integer | No | 1 | data type=integer

Copy
search {
 matchType: containsIgnoreCase
 minChars: 42
}

settings

 | Property | Type | Required | Default Value | Details

 | fetchOnType | boolean | Yes | true | data type=boolean

 | maxValuesInList | integer | No | 7 | data type=integer; maxLen=3
Applies wheninfinite_scroll = N

 | useCache | boolean | Yes | true | data type=boolean
Applies whenfetch_on_type = Y

 | infiniteScroll | boolean | Yes | true | data type=boolean

Copy
settings {
 fetchOnType: false
 maxValuesInList: 42
 useCache: false
 infiniteScroll: false
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 search {
 matchType: containsIgnoreCase
 minChars: 42
 }
 settings {
 fetchOnType: false
 maxValuesInList: 42
 useCache: false
 infiniteScroll: false
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet textField - APEXlang Reference

facet (textField)

Parent: facet

Applies whentype = textField
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | trimSpaces | enum | Yes | leadingAndTrailing | data type=string; maxLen=4000; lov=STATIC
Valid values: leadingAndTrailing trailing none leading

 | textCase | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: lower upper

Copy
settings {
 trimSpaces: leadingAndTrailing
 textCase: lower
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 trimSpaces: leadingAndTrailing
 textCase: lower
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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

facet textarea - APEXlang Reference

facet (textarea)

Parent: facet

Applies whentype = textarea
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkboxGroup colorPicker datePicker datePickerJquery displayOnly hidden inputField markdownEditor numberField password percentGraph popupLov radioGroup range richTextEditor search selectList shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
settings
label
lov
cascadingLov
layout
appearance
listEntries
actionsMenu
advanced
source
multipleValues
default
dependingOn
serverSideCondition
security
config
comments

settings

 | Property | Type | Required | Default Value | Details

 | resizable | boolean | Yes | true | data type=boolean

 | autoHeight | boolean | Yes | false | data type=boolean

 | charCounter | boolean | Yes | false | data type=boolean

 | trimSpaces | enum | Yes | leadingAndTrailing | data type=string; maxLen=4000; lov=STATIC
Valid values: trailing leadingAndTrailing leading none

Copy
settings {
 resizable: false
 autoHeight: false
 charCounter: false
 trimSpaces: trailing
}

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

Enter the label for the facet.
 The label displays on the page only if the facet displays. The label for type Search is visually hidden, but available to assistive technology.

 | showLabelForCurrentFacet | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE

Copy
label {
 label: value
 showLabelForCurrentFacet: false
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody distinctValues
Applies whentype supports LOV

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype supports LOV and type = sharedComponent

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = sqlQuery

Enter the SQL query definition to populate this list of values. Generally list of value queries are of the form:

select [displayValue],
 [returnValue]
 from ...
 where ...
 order by ...

Each column selected must have a unique name or alias. Oracle recommends using an alias on any column that includes an SQL expression.

Note: When defining a Popup LOV item type, if you would like to display multiple columns in the popup, you must instead define your List of Values in Shared Components,
with the required additional metadata. Inline list of values can only be used to display single columns for Popup LOVs.

 | staticValues | multiline string | Yes | STATIC:Display1;Return1,Display2;Return2 | data type=multiline string; maxLen=4000
Applies whentype supports LOV and type = staticValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports LOV and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports LOV and type = functionBody and language = javaScript-mle

 | sortDirection | enum | Yes | asc | data type=string; lov=STATIC
Valid values: asc desc
Applies whentype supports LOV and type = distinctValues

 | includeNullOption | boolean | Yes | false | data type=boolean
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | Yes | | data type=string; maxLen=255
Applies whentype supports FC_LOV_DISPLAY_NULL and type supports LOV and type is set and includeNullOption = true
Enter the text to be displayed within the list NULL option at the top of this list.

Copy
lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentFacet | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports LOV and type = sharedComponent

 | lovColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type = sharedComponent and parentFacet is set

Copy
cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | maxHeight | integer | No | | data type=integer; maxLen=32767

Copy
layout {
 sequence: 42
 maxHeight: 42
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | display | enum | Yes | inline | data type=string; lov=STATIC
Valid values: inline addFilterDialog

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
}

listEntries

 | Property | Type | Required | Default Value | Details

 | computeCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK

 | showCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | zeroCountEntries | enum | Yes | hide | data type=string; lov=STATIC
Valid values: hide disable showLast
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true

 | sortByTopCounts | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (checkboxGroup)type supports FC_HAS_FEEDBACK and computeCounts = true and showCounts = true and type in (radioGroup)

 | showSelectedFirst | boolean | Yes | false | data type=boolean
Applies whentype supports FC_SHOW_SELECTED_FIRST and type supports LOV and type is set

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports FC_SHOW_MORE_COUNT and type supports LOV and type is set

 | allowToExclude | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup)type in (radioGroup)type in (range)

 | displayFilterInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set

Copy
listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | filter | boolean | Yes | true | data type=boolean
Applies whentype supports FC_FILTER_VALUES and type supports LOV and type is set and display = inline

 | chart | boolean | Yes | true | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set

Copy
actionsMenu {
 filter: false
 chart: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | showChartInitially | boolean | Yes | false | data type=boolean
Applies whentype supports FC_HAS_FEEDBACK and computeCounts = true and type supports LOV and type is set and chart = true and display = inline

 | collapsible | boolean | Yes | false | data type=boolean
Applies whendisplay = inline

 | initiallyCollapsed | boolean | Yes | false | data type=boolean
Applies whendisplay = inline and collapsible = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whendisplay = inline
Enter classes to add to this facet. You may add multiple classes by separating them with spaces.

Copy
advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dbColumns | string | No | | data type=string; maxLen=4000
Applies whentype = search

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype in (checkboxGroup)type in (radioGroup)type in (selectList)

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | trimWhitespace | boolean | Yes | false | data type=boolean
Applies whentype in (checkboxGroup) and type = delimitedListtype in (radioGroup) and type = delimitedListtype in (selectList) and type = delimitedList

 | filterCombination | enum | Yes | or | data type=string; lov=STATIC
Valid values: or and
Applies whentype in (checkboxGroup) and type is settype in (radioGroup) and type is settype in (selectList) and type is set

Copy
multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
}

default

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody sequence
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = static

 | item | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype supports SOURCE and type = item

 | sqlQuerySingleValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQueryMultipleValues | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports SOURCE and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = functionBody and language = javaScript-mle

 | sequence | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = sequence

Copy
default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | facet | reference | No | | data type=reference; lov=COMPONENT; references=facet

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenfacet is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (=)facet is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenfacet is set and type in (inList)facet is set and type in (notInList)

Copy
dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

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

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (request=Value)type in (request!=Value)type in (requestIsContainedInValue)type in (requestIsNotContainedInValue)type in (currentLanguageIsContainedInValue)type in (currentLanguageIsNotContainedInValue)type in (currentLanguage!=value)type in (currentLanguage=value)type in (cgiEnvDadName=value)type in (cgiEnvDadName!=value)type in (cgiEnvServerName=value)type in (cgiEnvServerName!=value)type in (cgiEnvHttpHost=value)type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (itemIsNull)type in (itemIsNotNull)type in (itemIsZero)type in (itemIsNotZero)type in (itemIsNullOrZero)type in (itemIsNotNullAndNotZero)type in (itemContainsNoSpaces)type in (itemIsNumeric)type in (itemIsNotNumeric)type in (itemIsAlphanumeric)type in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (userPreference=value)type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPage=page)type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype in (currentPageInList)type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInItem)type in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
facet sample (
 name: value
 type: checkboxGroup
 settings {
 resizable: false
 autoHeight: false
 charCounter: false
 trimSpaces: trailing
 }
 label {
 label: value
 showLabelForCurrentFacet: false
 }
 lov {
 type: sharedComponent
 lov: @component
 sqlQuery: ```sql
 value
 ```
 staticValues: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 sortDirection: asc
 includeNullOption: false
 nullDisplayValue: value
 }
 cascadingLov {
 parentFacet: value
 lovColumn: value
 parentRequired: false
 }
 layout {
 sequence: 42
 maxHeight: 42
 }
 appearance {
 valuePlaceholder: value
 icon: value
 display: inline
 formatMask: value
 }
 listEntries {
 computeCounts: false
 showCounts: false
 zeroCountEntries: hide
 sortByTopCounts: false
 showSelectedFirst: false
 maxDisplayedEntries: 42
 allowToExclude: false
 displayFilterInitially: false
 }
 actionsMenu {
 filter: false
 chart: false
 }
 advanced {
 showChartInitially: false
 collapsible: false
 initiallyCollapsed: false
 cssClasses: [
 value
 value
 ]
 }
 source {
 databaseColumn: value
 dbColumns: value
 dataType: varchar2
 }
 multipleValues {
 type: delimitedList
 separator: value
 trimWhitespace: false
 filterCombination: or
 }
 default {
 type: static
 staticValue: ```
 value
 ```
 item: value
 sqlQuerySingleValue: ```sql
 value
 ```
 sqlQueryMultipleValues: ```sql
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
 sequence: value
 }
 dependingOn {
 facet: @component
 type: "="
 value: value
 list: [
 value
 value
 ]
 }
 serverSideCondition {
 type: always
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
 value: value
 item: value
 preference: value
 page: 42
 pages: [
 42
 42
 ]
 text: value
 list: [
 value
 value
 ]
 }
 security {
 authorizationScheme: mustNotBePublicUser
 encryptSessionState: false
 escapeSpecialChars: false
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
