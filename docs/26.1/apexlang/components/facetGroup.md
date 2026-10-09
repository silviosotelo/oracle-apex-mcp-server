# APEXlang: componentes con padre `facetGroup` (APEX 26.1)


---

checkbox - APEXlang Reference

checkbox

Parent: facetGroup

Plug-in Variants: actionsMenutype = actionsMenu, checkboxtype = checkbox, checkboxGrouptype = checkboxGroup, colorPickertype = colorPicker, comboboxtype = combobox, datePickertype = datePicker, datePickerJquerytype = datePickerJquery, displayImagetype = displayImage, displayMaptype = displayMap, displayOnlytype = displayOnly, fileUploadtype = fileUpload, geocodedAddresstype = geocodedAddress, hiddentype = hidden, htmlExpressiontype = htmlExpression, imageUploadtype = imageUpload, inputFieldtype = inputField, linktype = link, listManagertype = listManager, markdownEditortype = markdownEditor, numberFieldtype = numberField, passwordtype = password, percentGraphtype = percentGraph, popupLovtype = popupLov, qrCodetype = qrCode, radioGrouptype = radioGroup, rangetype = range, richTextEditortype = richTextEditor, rowSelectortype = rowSelector, searchtype = search, selectListtype = selectList, selectManytype = selectMany, selectOnetype = selectOne, shuttletype = shuttle, starRatingtype = starRating, stopAndStartGridLayouttype = stopAndStartGridLayout, switchtype = switch, textFieldtype = textField, textFieldWithAutocompletetype = textFieldWithAutocomplete, textareatype = textarea

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkbox colorPicker datePicker datePickerJquery displayOnly hidden markdownEditor numberField password percentGraph popupLov richTextEditor shuttle starRating switch textField textFieldWithAutocomplete textarea

Property Groups:
label
lov
cascadingLov
layout
appearance
source
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

 | facetGroup | reference | Yes | | data type=reference; lov=COMPONENT; references=facetGroup

Copy
layout {
 sequence: 42
 facetGroup: @component
}

appearance

 | Property | Type | Required | Default Value | Details

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

 | icon | string | No | | data type=string; maxLen=255

Enter the classes for the icon you want to use to identify this facet. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE and dataType in (date)type supports FORMAT_MASK_DATE and dataType in (timestamp)type supports FORMAT_MASK_DATE and dataType in (timestampWithTimeZone)type supports FORMAT_MASK_DATE and dataType in (timestampWithLocalTimeZone)

Copy
appearance {
 valuePlaceholder: value
 icon: value
 formatMask: value
}

source

 | Property | Type | Required | Default Value | Details

 | databaseColumn | string | Yes | | data type=string; maxLen=128

Enter the case sensitive database column name used as the source for this facet.

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry

Copy
source {
 databaseColumn: value
 dataType: varchar2
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

 | checkbox | reference | No | | data type=reference; lov=COMPONENT; references=checkbox

 | type | enum | Yes | isNotNull | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whencheckbox is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whencheckbox is set and type in (=)checkbox is set and type in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whencheckbox is set and type in (inList)checkbox is set and type in (notInList)

Copy
dependingOn {
 checkbox: @component
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
checkbox sample (
 name: value
 type: checkbox
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
 facetGroup: @component
 }
 appearance {
 valuePlaceholder: value
 icon: value
 formatMask: value
 }
 source {
 databaseColumn: value
 dataType: varchar2
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
 checkbox: @component
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
