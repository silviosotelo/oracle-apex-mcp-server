# APEXlang: componentes con padre `page` (APEX 26.1)


---

branch - APEXlang Reference

branch

Parent: page

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | No | | data type=string; maxLen=255
Enter the name of the branch for easy identification by developers.

Property Groups:
execution
behavior
serverSideCondition
security
config
comments

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | afterProcessing | data type=string; lov=STATIC
Valid values: beforeHeader afterSubmit validating processing afterProcessing

Copy
execution {
 sequence: 42
 point: beforeHeader
}

behavior

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | pageOrUrl | data type=string; lov=STATIC
Valid values: pageOrUrl urlIdentifiedByItem functionReturningUrl page pageIdentifiedByItem functionReturningPage plsqlProcedure pageProcessing

 | target | complex | Yes | | data type=complex; maxLen=32767
Applies whentype = pageOrUrl

 | saveStateBeforeBranching | boolean | Yes | false | data type=boolean
Applies whentype = pageOrUrl

 | pageNumber | integer | Yes | | data type=integer; maxLen=20
Applies whentype in (page)type in (pageProcessing)

 | request | string | No | | data type=string; maxLen=128
Applies whentype = pageProcessing

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype in (pageIdentifiedByItem)type in (urlIdentifiedByItem)

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype in (functionReturningPage)type in (functionReturningUrl)

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype in (functionReturningPage) and language in (plsql)type in (functionReturningUrl) and language in (plsql)

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype in (functionReturningPage) and language in (javaScript-mle)type in (functionReturningUrl) and language in (javaScript-mle)

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = plsqlProcedure

Copy
behavior {
 type: pageOrUrl
 target: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 successMessage: Y
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 saveStateBeforeBranching: false
 pageNumber: 42
 request: value
 item: value
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 plsqlCode: ```plsql
 value
 ```
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

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
 whenButtonPressed: @component
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

Copy
security {
 authorizationScheme: mustNotBePublicUser
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
branch sample (
 name: value
 execution {
 sequence: 42
 point: beforeHeader
 }
 behavior {
 type: pageOrUrl
 target: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 successMessage: Y
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 saveStateBeforeBranching: false
 pageNumber: 42
 request: value
 item: value
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 plsqlCode: ```plsql
 value
 ```
 }
 serverSideCondition {
 whenButtonPressed: @component
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

button - APEXlang Reference

button

Parent: page

Children: menutype = menu, triggerActiontype = standard and action = triggerAction

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | buttonName | string | Yes | | data type=string; maxLen=255
Enter the name used to reference the button being clicked. When this page is submitted, the value of REQUEST is set to this button name.

 | label | string | Yes | | data type=string; maxLen=255

Property Groups:
layout
appearance
behavior
confirmation
advanced
serverSideCondition
security
config
comments

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | region | reference | No | | data type=reference; lov=COMPONENT; references=region
Select the region in which the button will be displayed.

 | slot | string | Yes | | data type=string; lov=SLOTS

 | startNewLayout | boolean | Yes | false | data type=boolean

 | startNewRow | boolean | Yes | true | data type=boolean
Applies whenstartNewLayout = false

 | rowCssClasses | array of strings | No | | data type=string; maxLen=255

 | column | string | No | | data type=string; lov=GRID_COLUMNS

 | newColumn | boolean | Yes | true | data type=boolean
Applies whenstartNewLayout = false and startNewRow = false

 | columnSpan | string | No | | data type=string; lov=GRID_COLUMNS

 | rowSpan | number | No | | data type=number; maxLen=22

 | columnCssClasses | array of strings | No | | data type=string; maxLen=255

 | columnAttributes | array of strings | No | | data type=string; maxLen=255

 | horizontalAlignment | enum | Yes | right | data type=string; lov=STATIC
Valid values: left right
Applies whenslot in (TOP)slot in (TOP_AND_BOTTOM)slot in (ABOVE_BOX)slot in (BELOW_BOX)slot in (BOTTOM)

 | alignment | enum | Yes | leftCenter | data type=string; lov=STATIC
Valid values: center centerBottom centerCenter centerTop left leftBottom leftCenter leftTop right rightBottom rightCenter rightTop
Applies whenslot = BODY

Copy
layout {
 sequence: 42
 region: @component
 slot: value
 startNewLayout: false
 startNewRow: false
 rowCssClasses: [
 value
 value
 ]
 column: value
 newColumn: false
 columnSpan: value
 rowSpan: 42
 columnCssClasses: [
 value
 value
 ]
 columnAttributes: [
 value
 value
 ]
 horizontalAlignment: left
 alignment: center
}

appearance

 | Property | Type | Required | Default Value | Details

 | buttonTemplate | reference | Yes | | data type=reference; lov=COMPONENT; references=buttonTemplate

 | hot | boolean | Yes | false | data type=boolean

 | showAsDisabled | boolean | Yes | false | data type=boolean
Applies whenbuttonTemplate supports IS_DISABLED

Specify whether to render the button or menu entries as disabled instead of hiding them if the defined server-side condition evaluates to FALSE.

 | templateOptions | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Enter classes to add to this component. You may add multiple classes by separating them with spaces.

 | icon | string | No | | data type=string; maxLen=255

Copy
appearance {
 buttonTemplate: @component
 hot: false
 showAsDisabled: false
 templateOptions: [
 value
 value
 ]
 cssClasses: [
 value
 value
 ]
 icon: value
}

behavior

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | standard | data type=string; lov=STATIC
Valid values: standard menu

 | action | enum | Yes | submitPage | data type=string; lov=STATIC
Valid values: submitPage triggerAction redirectThisApp redirectOtherApp redirectUrl definedByDynamicAction resetPage nextPage previousPage
Applies whentype = standard

 | target | complex | Yes | | data type=complex; maxLen=32767
Applies whentype = standard and action = redirectThisApp

Click the Target to invoke a modal dialog. You can enter the target to be called when this button is clicked. Only enter a target for buttons that should not invoke page processing when clicked (for example, a Cancel button).

 | target | complex | Yes | | data type=complex; maxLen=32767
Applies whentype = standard and action = redirectOtherApp

Click the Target to invoke a modal dialog. You can enter the target to be called when this button is clicked. Only enter a target for buttons that should not invoke page processing when clicked (for example, a Cancel button).

 | targetUrl | string | Yes | | data type=string; maxLen=4000
Applies whentype = standard and action = redirectUrl

Enter the URL to call when this button is clicked. Only enter a target for buttons that should not invoke page processing when clicked, for example a Cancel button.

 | executeValidations | boolean | Yes | true | data type=boolean
Applies whentype = standard and action in (submitPage)type = standard and action in (redirectUrl)type = standard and action in (definedByDynamicAction)type = standard and action in (triggerAction)

 | showProcessing | boolean | Yes | false | data type=boolean
Applies whentype = standard and action = submitPage

 | warnOnUnsavedChanges | enum | No | | data type=string; lov=STATIC
Valid values: doNotCheck
Applies whentype = standard

 | databaseAction | enum | No | | data type=string; lov=STATIC
Valid values: insert update delete
Applies whentype = standard

 | requiresConfirmation | boolean | Yes | false | data type=boolean
Applies whentype = standard

Copy
behavior {
 type: standard
 action: submitPage
 target: {
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 targetUrl: value
 executeValidations: false
 showProcessing: false
 warnOnUnsavedChanges: doNotCheck
 databaseAction: insert
 requiresConfirmation: false
}

confirmation

 | Property | Type | Required | Default Value | Details

 | message | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = standard and requiresConfirmation = true

 | style | enum | No | | data type=string; lov=STATIC
Valid values: information warning danger success
Applies whentype = standard and requiresConfirmation = true

Copy
confirmation {
 message: ```html
 value
 ```
 style: information
}

advanced

 | Property | Type | Required | Default Value | Details

 | htmlDomId | string | No | | data type=string; maxLen=255
Enter the DOM ID for the button. If defined, the DOM ID is used as the ID for the button. The DOM ID can be useful when developing custom JavaScript behavior for the button. If the DOM ID is not defined, the button generates an internal ID.

Note: The template must include the #DOM_ID# substitution string, in order for the button to utilize the DOM ID entered.

 | staticId | string | Yes | | data type=string; maxLen=255

 | customAttributes | string | No | | data type=string; maxLen=2000
Enter HTML text to include for this button:

For buttons of type HTML Button, this text is added to the HTML element definition.

For buttons based on templates, your template must include the #BUTTON_ATTRIBUTES# substitution string.

You can use this attribute to control tab stops

 | preText | multiline string | No | | data type=multiline string; maxLen=4000

 | postText | multiline string | No | | data type=multiline string; maxLen=4000

 | requestSourceType | enum | No | | data type=string; lov=STATIC
Valid values: staticValue databaseColumn item sqlQuerySingleValue sqlQueryMultipleValues plsqlExpression plsqlFunctionBody preference null

 | requestSource | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenrequestSourceType is set

Copy
advanced {
 htmlDomId: value
 staticId: value
 customAttributes: value
 preText: ```html
 value
 ```
 postText: ```html
 value
 ```
 requestSourceType: staticValue
 requestSource: ```
 value
 ```
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

Copy
security {
 authorizationScheme: mustNotBePublicUser
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
button sample (
 buttonName: value
 label: value
 layout {
 sequence: 42
 region: @component
 slot: value
 startNewLayout: false
 startNewRow: false
 rowCssClasses: [
 value
 value
 ]
 column: value
 newColumn: false
 columnSpan: value
 rowSpan: 42
 columnCssClasses: [
 value
 value
 ]
 columnAttributes: [
 value
 value
 ]
 horizontalAlignment: left
 alignment: center
 }
 appearance {
 buttonTemplate: @component
 hot: false
 showAsDisabled: false
 templateOptions: [
 value
 value
 ]
 cssClasses: [
 value
 value
 ]
 icon: value
 }
 behavior {
 type: standard
 action: submitPage
 target: {
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 targetUrl: value
 executeValidations: false
 showProcessing: false
 warnOnUnsavedChanges: doNotCheck
 databaseAction: insert
 requiresConfirmation: false
 }
 confirmation {
 message: ```html
 value
 ```
 style: information
 }
 advanced {
 htmlDomId: value
 staticId: value
 customAttributes: value
 preText: ```html
 value
 ```
 postText: ```html
 value
 ```
 requestSourceType: staticValue
 requestSource: ```
 value
 ```
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

computation - APEXlang Reference

computation

Parent: page

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | itemName | string | Yes | | data type=string; maxLen=255; textCase=UPPER

Property Groups:
execution
computation
error
advanced
serverSideCondition
security
config
comments

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | beforeRegions | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit

Copy
execution {
 sequence: 42
 point: newSession
}

computation

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | sqlQuerySingleValue | data type=string; lov=STATIC
Valid values: staticValue item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody preference

 | staticValue | string | No | | data type=string; maxLen=4000
Applies whentype = staticValue

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = sqlQuerySingleValue

 | computationProcessed | enum | No | | data type=string; lov=STATIC
Valid values: newSession replaceExisting addToExisting raiseErrorOnReplace replaceNullValues

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = sqlQueryMultipleValues

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

 | itemName | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = item

 | preference | string | Yes | | data type=string; maxLen=4000
Applies whentype = preference

Copy
computation {
 type: staticValue
 staticValue: value
 sqlQuery: ```sql
 value
 ```
 computationProcessed: newSession
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
 itemName: value
 preference: value
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter an error message that displays if this computation fails.
 Use #SQLERRM# as a substitution string for the SQL error message resulting from a failed computation.

Computations are designed to always succeed, and only fail due to unanticipated errors.
 It is not advisable to implement a computation that regularly fails and acts as a pseudo-validation utilizing this error message.

Copy
error {
 errorMessage: ```
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
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

Copy
security {
 authorizationScheme: mustNotBePublicUser
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
computation sample (
 itemName: value
 execution {
 sequence: 42
 point: newSession
 }
 computation {
 type: staticValue
 staticValue: value
 sqlQuery: ```sql
 value
 ```
 computationProcessed: newSession
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
 itemName: value
 preference: value
 }
 error {
 errorMessage: ```
 value
 ```
 }
 advanced {
 staticId: value
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

dynamicAction - APEXlang Reference

dynamicAction

Parent: page

Children: action

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the dynamic action.

Property Groups:
execution
when
clientSideCondition
advanced
serverSideCondition
security
config
comments

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | eventScope | enum | Yes | static | data type=string; lov=STATIC
Valid values: static dynamic once

 | staticContainer | string | No | | data type=string; maxLen=255
Applies wheneventScope = dynamic

 | type | enum | Yes | immediate | data type=string; lov=STATIC
Valid values: immediate debounce throttle
Applies wheneventScope in (static)eventScope in (dynamic)

 | time | integer | Yes | | data type=integer; maxLen=32767
Applies wheneventScope in (static) and type in (debounce)eventScope in (static) and type in (throttle)eventScope in (dynamic) and type in (debounce)eventScope in (dynamic) and type in (throttle)

 | immediate | boolean | Yes | false | data type=boolean
Applies wheneventScope in (static) and type in (debounce)eventScope in (static) and type in (throttle)eventScope in (dynamic) and type in (debounce)eventScope in (dynamic) and type in (throttle)

Copy
execution {
 sequence: 42
 eventScope: static
 staticContainer: value
 type: immediate
 time: 42
 immediate: false
}

when

 | Property | Type | Required | Default Value | Details

 | event | string | Yes | change | data type=string; lov=EVENTS

 | customEvent | string | Yes | | data type=string; maxLen=130
Applies whenevent = custom

 | selectionType | enum | Yes | | data type=string; lov=STATIC
Valid values: items button region columns domObject jQuerySelector jsExpression

 | region | reference | Yes | | data type=reference; lov=COMPONENT; references=region
Applies whenselectionType = region

 | interactiveGrid | reference | Yes | | data type=reference; lov=COMPONENT; references=region
Applies whenselectionType = columns

 | columns | array of strings | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenselectionType = columns

 | button | reference | Yes | | data type=reference; lov=COMPONENT; references=button
Applies whenselectionType = button

 | items | array of strings | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenselectionType = items

 | domObject | string | Yes | | data type=string; maxLen=4000
Applies whenselectionType = domObject

 | jquerySelector | string | Yes | | data type=string; maxLen=4000
Applies whenselectionType = jQuerySelector

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenselectionType = jsExpression

Copy
when {
 event: value
 customEvent: value
 selectionType: items
 region: @component
 interactiveGrid: @component
 columns: [
 value
 value
 ]
 button: @component
 items: [
 value
 value
 ]
 domObject: value
 jquerySelector: value
 javaScriptExpression: ```javascript-browser
 value
 ```
}

clientSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: item=value item!=value item>value item>=value item<value item<=value itemIsNull itemIsNotNull itemIsInList itemIsNotInList jsExpression
Applies whenselectionType = columns and selectionType = region and region does not support IG_REGION

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenselectionType = columns and selectionType = region and region does not support IG_REGION and type in (item=value)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (item!=value)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (item>value)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (item>=value)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (item<value)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (item<=value)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (itemIsNull)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (itemIsNotNull)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (itemIsInList)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (itemIsNotInList)

Enter the page item used in this condition. You can type in the name or pick from the list of available items.

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenselectionType = columns and selectionType = region and region does not support IG_REGION and type in (item=value)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (item!=value)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (item>value)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (item>=value)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (item<value)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (item<=value)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenselectionType = columns and selectionType = region and region does not support IG_REGION and type in (itemIsInList)selectionType = columns and selectionType = region and region does not support IG_REGION and type in (itemIsNotInList)

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenselectionType = columns and selectionType = region and region does not support IG_REGION and type = jsExpression

 | type | enum | No | | data type=string; lov=STATIC
Valid values: itemColumn=value itemColumn!=value itemColumn>value itemColumn>=value itemColumn<value itemColumn<=value itemColumnIsNull itemColumnIsNotNull itemColumnIsInList itemColumnIsNotInList jsExpression
Applies whenselectionType = columns and interactiveGrid is setselectionType = region and region supports IG_REGION

 | componentType | enum | Yes | column | data type=string; lov=STATIC
Valid values: item column
Applies whenselectionType = columns and interactiveGrid is set and type in (itemColumn=value)selectionType = columns and interactiveGrid is set and type in (itemColumn!=value)selectionType = columns and interactiveGrid is set and type in (itemColumn>value)selectionType = columns and interactiveGrid is set and type in (itemColumn>=value)selectionType = columns and interactiveGrid is set and type in (itemColumn<value)selectionType = columns and interactiveGrid is set and type in (itemColumn<=value)selectionType = columns and interactiveGrid is set and type in (itemColumnIsNull)selectionType = columns and interactiveGrid is set and type in (itemColumnIsNotNull)selectionType = columns and interactiveGrid is set and type in (itemColumnIsInList)selectionType = columns and interactiveGrid is set and type in (itemColumnIsNotInList)selectionType = region and region supports IG_REGION and type in (itemColumn=value)selectionType = region and region supports IG_REGION and type in (itemColumn!=value)selectionType = region and region supports IG_REGION and type in (itemColumn>value)selectionType = region and region supports IG_REGION and type in (itemColumn>=value)selectionType = region and region supports IG_REGION and type in (itemColumn<value)selectionType = region and region supports IG_REGION and type in (itemColumn<=value)selectionType = region and region supports IG_REGION and type in (itemColumnIsNull)selectionType = region and region supports IG_REGION and type in (itemColumnIsNotNull)selectionType = region and region supports IG_REGION and type in (itemColumnIsInList)selectionType = region and region supports IG_REGION and type in (itemColumnIsNotInList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenselectionType = columns and interactiveGrid is set and type in (itemColumn=value) and componentType = itemselectionType = columns and interactiveGrid is set and type in (itemColumn!=value) and componentType = itemselectionType = columns and interactiveGrid is set and type in (itemColumn>value) and componentType = itemselectionType = columns and interactiveGrid is set and type in (itemColumn>=value) and componentType = itemselectionType = columns and interactiveGrid is set and type in (itemColumn<value) and componentType = itemselectionType = columns and interactiveGrid is set and type in (itemColumn<=value) and componentType = itemselectionType = columns and interactiveGrid is set and type in (itemColumnIsNull) and componentType = itemselectionType = columns and interactiveGrid is set and type in (itemColumnIsNotNull) and componentType = itemselectionType = columns and interactiveGrid is set and type in (itemColumnIsInList) and componentType = itemselectionType = columns and interactiveGrid is set and type in (itemColumnIsNotInList) and componentType = itemselectionType = region and region supports IG_REGION and type in (itemColumn=value) and componentType = itemselectionType = region and region supports IG_REGION and type in (itemColumn!=value) and componentType = itemselectionType = region and region supports IG_REGION and type in (itemColumn>value) and componentType = itemselectionType = region and region supports IG_REGION and type in (itemColumn>=value) and componentType = itemselectionType = region and region supports IG_REGION and type in (itemColumn<value) and componentType = itemselectionType = region and region supports IG_REGION and type in (itemColumn<=value) and componentType = itemselectionType = region and region supports IG_REGION and type in (itemColumnIsNull) and componentType = itemselectionType = region and region supports IG_REGION and type in (itemColumnIsNotNull) and componentType = itemselectionType = region and region supports IG_REGION and type in (itemColumnIsInList) and componentType = itemselectionType = region and region supports IG_REGION and type in (itemColumnIsNotInList) and componentType = item

 | column | string | Yes | | data type=string; maxLen=4000
Applies whenselectionType = columns and interactiveGrid is set and type in (itemColumn=value) and componentType = columnselectionType = columns and interactiveGrid is set and type in (itemColumn!=value) and componentType = columnselectionType = columns and interactiveGrid is set and type in (itemColumn>value) and componentType = columnselectionType = columns and interactiveGrid is set and type in (itemColumn>=value) and componentType = columnselectionType = columns and interactiveGrid is set and type in (itemColumn<value) and componentType = columnselectionType = columns and interactiveGrid is set and type in (itemColumn<=value) and componentType = columnselectionType = columns and interactiveGrid is set and type in (itemColumnIsNull) and componentType = columnselectionType = columns and interactiveGrid is set and type in (itemColumnIsNotNull) and componentType = columnselectionType = columns and interactiveGrid is set and type in (itemColumnIsInList) and componentType = columnselectionType = columns and interactiveGrid is set and type in (itemColumnIsNotInList) and componentType = columnselectionType = region and region supports IG_REGION and type in (itemColumn=value) and componentType = columnselectionType = region and region supports IG_REGION and type in (itemColumn!=value) and componentType = columnselectionType = region and region supports IG_REGION and type in (itemColumn>value) and componentType = columnselectionType = region and region supports IG_REGION and type in (itemColumn>=value) and componentType = columnselectionType = region and region supports IG_REGION and type in (itemColumn<value) and componentType = columnselectionType = region and region supports IG_REGION and type in (itemColumn<=value) and componentType = columnselectionType = region and region supports IG_REGION and type in (itemColumnIsNull) and componentType = columnselectionType = region and region supports IG_REGION and type in (itemColumnIsNotNull) and componentType = columnselectionType = region and region supports IG_REGION and type in (itemColumnIsInList) and componentType = columnselectionType = region and region supports IG_REGION and type in (itemColumnIsNotInList) and componentType = column

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenselectionType = columns and interactiveGrid is set and type in (itemColumn=value)selectionType = columns and interactiveGrid is set and type in (itemColumn!=value)selectionType = columns and interactiveGrid is set and type in (itemColumn>value)selectionType = columns and interactiveGrid is set and type in (itemColumn>=value)selectionType = columns and interactiveGrid is set and type in (itemColumn<value)selectionType = columns and interactiveGrid is set and type in (itemColumn<=value)selectionType = region and region supports IG_REGION and type in (itemColumn=value)selectionType = region and region supports IG_REGION and type in (itemColumn!=value)selectionType = region and region supports IG_REGION and type in (itemColumn>value)selectionType = region and region supports IG_REGION and type in (itemColumn>=value)selectionType = region and region supports IG_REGION and type in (itemColumn<value)selectionType = region and region supports IG_REGION and type in (itemColumn<=value)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenselectionType = columns and interactiveGrid is set and type in (itemColumnIsInList)selectionType = columns and interactiveGrid is set and type in (itemColumnIsNotInList)selectionType = region and region supports IG_REGION and type in (itemColumnIsInList)selectionType = region and region supports IG_REGION and type in (itemColumnIsNotInList)

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenselectionType = columns and interactiveGrid is set and type = jsExpressionselectionType = region and region supports IG_REGION and type = jsExpression

Copy
clientSideCondition {
 type: "item=value"
 item: value
 value: value
 list: [
 value
 value
 ]
 javaScriptExpression: ```javascript-browser
 value
 ```
 componentType: item
 column: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never
Select a condition type to be met in order for this dynamic action to be active.

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

Copy
security {
 authorizationScheme: mustNotBePublicUser
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
dynamicAction sample (
 name: value
 execution {
 sequence: 42
 eventScope: static
 staticContainer: value
 type: immediate
 time: 42
 immediate: false
 }
 when {
 event: value
 customEvent: value
 selectionType: items
 region: @component
 interactiveGrid: @component
 columns: [
 value
 value
 ]
 button: @component
 items: [
 value
 value
 ]
 domObject: value
 jquerySelector: value
 javaScriptExpression: ```javascript-browser
 value
 ```
 }
 clientSideCondition {
 type: "item=value"
 item: value
 value: value
 list: [
 value
 value
 ]
 javaScriptExpression: ```javascript-browser
 value
 ```
 componentType: item
 column: value
 }
 advanced {
 staticId: value
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

metaTag - APEXlang Reference

metaTag

Parent: page

Applies whenauthentication = public and enableMetaTags = true
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | description | data type=string; maxLen=255

 | value | multiline string | Yes | | data type=multiline string; maxLen=4000

Property Groups:
advanced
serverSideCondition
config
comments

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
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
metaTag sample (
 name: value
 value: ```
 value
 ```
 advanced {
 staticId: value
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

pageItem - APEXlang Reference

pageItem

Parent: page

Plug-in Variants: actionsMenutype = actionsMenu, checkboxtype = checkbox, checkboxGrouptype = checkboxGroup, colorPickertype = colorPicker, comboboxtype = combobox, datePickertype = datePicker, datePickerJquerytype = datePickerJquery, displayImagetype = displayImage, displayMaptype = displayMap, displayOnlytype = displayOnly, fileUploadtype = fileUpload, geocodedAddresstype = geocodedAddress, hiddentype = hidden, htmlExpressiontype = htmlExpression, imageUploadtype = imageUpload, inputFieldtype = inputField, linktype = link, listManagertype = listManager, markdownEditortype = markdownEditor, numberFieldtype = numberField, passwordtype = password, percentGraphtype = percentGraph, popupLovtype = popupLov, qrCodetype = qrCode, radioGrouptype = radioGroup, rangetype = range, richTextEditortype = richTextEditor, rowSelectortype = rowSelector, searchtype = search, selectListtype = selectList, selectManytype = selectMany, selectOnetype = selectOne, shuttletype = shuttle, starRatingtype = starRating, stopAndStartGridLayouttype = stopAndStartGridLayout, switchtype = switch, textFieldtype = textField, textFieldWithAutocompletetype = textFieldWithAutocomplete, textareatype = textarea

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | P#PAGE_ID#_NEW | data type=string; maxLen=255; textCase=UPPER

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: checkbox checkboxGroup colorPicker combobox datePicker datePickerJquery displayImage displayMap displayOnly fileUpload geocodedAddress hidden imageUpload listManager markdownEditor numberField password percentGraph popupLov qrCode radioGroup richTextEditor selectList selectMany selectOne shuttle starRating stopAndStartGridLayout switch textField textFieldWithAutocomplete textarea

Property Groups:
label
lov
cascadingLov
genAI
multipleValues
layout
appearance
validation
advanced
source
default
sessionState
quickPicks
serverSideCondition
readOnly
security
help
config
comments

label

 | Property | Type | Required | Default Value | Details

 | label | string | No | | data type=string; maxLen=4000
Applies whentype supports VISIBLE

 | alignment | enum | Yes | rightCenter | data type=string; lov=STATIC
Valid values: above below center centerBottom centerCenter centerTop left leftBottom leftCenter leftTop right rightBottom rightCenter rightTop
Applies whentype supports VISIBLE

 | tableCellAttributes | array of strings | No | | data type=string; maxLen=255
Applies whentype supports VISIBLE

Copy
label {
 label: value
 alignment: above
 tableCellAttributes: [
 value
 value
 ]
}

lov

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: sharedComponent sqlQuery staticValues functionBody
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

 | displayExtraValues | boolean | Yes | true | data type=boolean
Applies whentype supports LOV and type is set

 | displayNullValue | boolean | Yes | true | data type=boolean
Applies whentype supports LOV_DISPLAY_NULL and type supports LOV and type is set

 | nullDisplayValue | string | No | | data type=string; maxLen=255
Applies whentype supports LOV_DISPLAY_NULL and type supports LOV and type is set and displayNullValue = true

 | nullReturnValue | string | No | | data type=string; maxLen=255
Applies whentype supports LOV_DISPLAY_NULL and type supports LOV and type is set and displayNullValue = true

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
 displayExtraValues: false
 displayNullValue: false
 nullDisplayValue: value
 nullReturnValue: value
}

cascadingLov

 | Property | Type | Required | Default Value | Details

 | parentItems | array of strings | No | | data type=string; maxLen=255; textCase=UPPER
Applies whentype supports CASCADING_LOV and type supports LOV and type is set

 | itemsToSubmit | array of strings | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype supports CASCADING_LOV and type supports LOV and type is set and parentItems is set

 | parentRequired | boolean | Yes | true | data type=boolean
Applies whentype supports CASCADING_LOV and type supports LOV and type is set and parentItems is set

Copy
cascadingLov {
 parentItems: [
 value
 value
 ]
 itemsToSubmit: [
 value
 value
 ]
 parentRequired: false
}

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean
Applies whentype supports AI_ENABLED

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whentype supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_ENABLED and enabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whentype supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_ENABLED and enabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype supports AI_SYSTEM_PROMPT and type supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_SYSTEM_PROMPT and type supports AI_ENABLED and enabled = true

 | welcomeMessage | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype supports AI_UI and type supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_UI and type supports AI_ENABLED and enabled = true

Copy
genAI {
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
 welcomeMessage: ```html
 value
 ```
}

multipleValues

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | delimitedList | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype supports MULTI_VALUE_ALWAYS

 | type | enum | No | | data type=string; lov=STATIC
Valid values: delimitedList jsonArray
Applies whentype supports MULTI_VALUE_OPTIONALtype supports MULTI_VALUE_OPTIONAL and page_action_on_selection = NONE

 | separator | string | Yes | : | data type=string; maxLen=5
Applies whentype supports MULTI_VALUE_ALWAYS and type = delimitedListtype supports MULTI_VALUE_OPTIONAL and type = delimitedListtype supports MULTI_VALUE_OPTIONAL and page_action_on_selection = NONE and type = delimitedList

Copy
multipleValues {
 type: delimitedList
 separator: value
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | region | reference | No | | data type=reference; lov=COMPONENT; references=region
Select the region in which the item will be displayed.

 | slot | string | Yes | | data type=string; lov=SLOTS

 | alignment | enum | Yes | leftCenter | data type=string; lov=STATIC
Valid values: center centerBottom centerCenter centerTop left leftBottom leftCenter leftTop right rightBottom rightCenter rightTop
Applies whentype supports ELEMENT

 | startNewLayout | boolean | Yes | false | data type=boolean
Applies whentype supports VISIBLE

 | startNewRow | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE and startNewLayout = false

 | rowCssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype supports VISIBLE

 | column | string | No | | data type=string; lov=GRID_COLUMNS
Applies whentype supports VISIBLE

 | newColumn | boolean | Yes | true | data type=boolean
Applies whentype supports VISIBLE and startNewLayout = false and startNewRow = false

 | columnSpan | string | No | | data type=string; lov=GRID_COLUMNS
Applies whentype supports VISIBLE

 | rowSpan | number | No | | data type=number; maxLen=22
Applies whentype supports VISIBLE

 | labelColumnSpan | string | No | | data type=string; lov=GRID_COLUMNS
Applies whentype supports VISIBLE

 | columnCssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype supports VISIBLE

 | columnAttributes | array of strings | No | | data type=string; maxLen=255
Applies whentype supports VISIBLE

Copy
layout {
 sequence: 42
 region: @component
 slot: value
 alignment: center
 startNewLayout: false
 startNewRow: false
 rowCssClasses: [
 value
 value
 ]
 column: value
 newColumn: false
 columnSpan: value
 rowSpan: 42
 labelColumnSpan: value
 columnCssClasses: [
 value
 value
 ]
 columnAttributes: [
 value
 value
 ]
}

appearance

 | Property | Type | Required | Default Value | Details

 | template | reference | No | | data type=reference; lov=COMPONENT; references=fieldTemplate
Applies whentype supports VISIBLE

 | templateOptions | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS
Applies whentype supports VISIBLE and template is set

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype supports VISIBLE and template is set

Enter classes to add to this item. You may add multiple classes by separating them with spaces.

This property can be used to make style modifications to the item, beyond template options, or to provide a simpler way of selecting this item via JavaScript.

Note: To apply CSS classes to the HTML form element tag, please see the CSS Classes property under the Advanced group.

 | icon | string | No | | data type=string; maxLen=255
Applies whentype supports ICON

Enter the classes for the icon you want to add to the component. You may add multiple classes by separating them with spaces.

If your theme uses Font APEX then review the Universal Theme Sample Application to view available icons and modifiers.

Note: This icon will be displayed inside of the item, not as part of the label.

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_ALL

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_DATE

 | formatMask | string | No | | data type=string; maxLen=255
Applies whentype supports FORMAT_MASK_NUMBER

 | width | number | No | | data type=number; maxLen=22
Applies whentype supports WIDTH

 | height | number | No | | data type=number; maxLen=22
Applies whentype supports HEIGHT

 | valuePlaceholder | string | No | | data type=string; maxLen=255
Applies whentype supports PLACEHOLDER

Copy
appearance {
 template: @component
 templateOptions: [
 value
 value
 ]
 cssClasses: [
 value
 value
 ]
 icon: value
 formatMask: value
 width: 42
 height: 42
 valuePlaceholder: value
}

validation

 | Property | Type | Required | Default Value | Details

 | valueRequired | boolean | Yes | false | data type=boolean
Applies whentype supports SESSION_STATE

 | maxLength | number | No | | data type=number; maxLen=22
Applies whentype supports WIDTH

Copy
validation {
 valueRequired: false
 maxLength: 42
}

advanced

 | Property | Type | Required | Default Value | Details

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype supports ELEMENT

Enter classes to add to this component. You may add multiple classes by separating them with spaces.

Note: These CSS classes will be applied to the HTML form element tag.

 | customAttributes | string | No | | data type=string; maxLen=2000
Applies whentype supports ELEMENT
Enter additional attributes to be included in the form element HTML tag. The size and id HTML attributes are generated and therefore should not be supplied. For the class HTML attribute it is better to use the dedicated CSS Classes attribute instead.

 | optionHtmlAttributes | array of strings | No | | data type=string; maxLen=255
Applies whentype supports ELEMENT_OPTION

 | preText | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype supports ELEMENT

 | postText | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype supports ELEMENT

 | warnOnUnsavedChanges | enum | No | | data type=string; lov=STATIC
Valid values: ignore

 | initJavaScriptFunction | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype supports INIT_JAVASCRIPT_CODE

Copy
advanced {
 cssClasses: [
 value
 value
 ]
 customAttributes: value
 optionHtmlAttributes: [
 value
 value
 ]
 preText: ```html
 value
 ```
 postText: ```html
 value
 ```
 warnOnUnsavedChanges: ignore
 initJavaScriptFunction: ```javascript-browser
 value
 ```
}

source

 | Property | Type | Required | Default Value | Details

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whentype supports SOURCE

 | column | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and formRegion is set

 | dataType | enum | Yes | | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond clob blob boolean rowid bfile sdoGeometry
Applies whentype supports SOURCE and formRegion is set

 | queryOnly | boolean | Yes | false | data type=boolean
Applies whentype supports SOURCE and formRegion is set

 | primaryKey | boolean | Yes | false | data type=boolean
Applies whentype supports SOURCE and formRegion is set

 | type | enum | Yes | null | data type=string; lov=STATIC
Valid values: staticValue databaseColumn item sqlQuerySingleValue sqlQueryMultipleValues expression functionBody preference null
Applies whentype supports SOURCE

 | staticValue | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = staticValue

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQuerySingleValue

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE and type = sqlQueryMultipleValues

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype supports SOURCE and type = item

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

 | databaseColumn | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE and type = databaseColumn

 | preference | string | Yes | | data type=string; maxLen=255
Applies whentype supports SOURCE and type = preference

 | used | enum | Yes | onlyWhenSessionStateIsNull | data type=string; lov=STATIC
Valid values: always onlyWhenSessionStateIsNull
Applies whentype supports SOURCE

 | postCalculationComputation | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE

Copy
source {
 formRegion: @component
 column: value
 dataType: varchar2
 queryOnly: false
 primaryKey: false
 type: staticValue
 staticValue: ```
 value
 ```
 sqlQuery: ```sql
 value
 ```
 item: value
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
 databaseColumn: value
 preference: value
 used: always
 postCalculationComputation: ```plsql
 value
 ```
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

sessionState

 | Property | Type | Required | Default Value | Details

 | dataType | enum | Yes | varchar2 | data type=string; maxLen=128; lov=STATIC
Valid values: varchar2 clob boolean number

 | storage | enum | Yes | session | data type=string; lov=STATIC
Valid values: request session user
Applies whentype supports SOURCE

 | storage | enum | Yes | request | data type=string; lov=STATIC
Valid values: request session
Applies whentype supports SOURCE and formRegion is set

Copy
sessionState {
 dataType: varchar2
 storage: request
}

quickPicks

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: static sharedLov sqlQuery
Applies whentype supports QUICKPICK

 | label1 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | value1 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | label2 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | value2 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | label3 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | value3 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | label4 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | value4 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | label5 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | value5 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | label6 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | value6 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | label7 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | value7 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | label8 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | value8 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | label9 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | value9 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | label10 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | value10 | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type = static

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports QUICKPICK and type = sqlQuery

 | maxDisplayedEntries | integer | No | | data type=integer; maxLen=32767
Applies whentype supports QUICKPICK and type in (sharedLov)type supports QUICKPICK and type in (sqlQuery)

 | linkAttributes | string | No | | data type=string; maxLen=255
Applies whentype supports QUICKPICK and type is set

Copy
quickPicks {
 type: static
 label1: value
 value1: value
 label2: value
 value2: value
 label3: value
 value3: value
 label4: value
 value4: value
 label5: value
 value5: value
 label6: value
 value6: value
 label7: value
 value7: value
 label8: value
 value8: value
 label9: value
 value9: value
 label10: value
 value10: value
 sqlQuery: ```sql
 value
 ```
 maxDisplayedEntries: 42
 linkAttributes: value
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

readOnly

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never
Applies whentype supports READONLY

Select a condition type that must be met in order for this component to render as read-only.
Not selecting a condition causes the item to render normally.
A read-only item is rendered with the same settings as a Display Only item.

Note: Set the condition type to Never to always render the item as an enterable field.
This setting overwrites any read-only condition setting on the region or page level.

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports READONLY and type in (rowsReturned)type supports READONLY and type in (noRowsReturned)

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype supports READONLY and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports READONLY and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports READONLY and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports READONLY and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports READONLY and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports READONLY and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports READONLY and type = functionBody and language = javaScript-mle

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype supports READONLY and type in (request=Value)type supports READONLY and type in (request!=Value)type supports READONLY and type in (requestIsContainedInValue)type supports READONLY and type in (requestIsNotContainedInValue)type supports READONLY and type in (currentLanguageIsContainedInValue)type supports READONLY and type in (currentLanguageIsNotContainedInValue)type supports READONLY and type in (currentLanguage!=value)type supports READONLY and type in (currentLanguage=value)type supports READONLY and type in (cgiEnvDadName=value)type supports READONLY and type in (cgiEnvDadName!=value)type supports READONLY and type in (cgiEnvServerName=value)type supports READONLY and type in (cgiEnvServerName!=value)type supports READONLY and type in (cgiEnvHttpHost=value)type supports READONLY and type in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype supports READONLY and type in (item=value)type supports READONLY and type in (item!=value)type supports READONLY and type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type supports READONLY and type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type supports READONLY and type in (itemIsNull)type supports READONLY and type in (itemIsNotNull)type supports READONLY and type in (itemIsZero)type supports READONLY and type in (itemIsNotZero)type supports READONLY and type in (itemIsNullOrZero)type supports READONLY and type in (itemIsNotNullAndNotZero)type supports READONLY and type in (itemContainsNoSpaces)type supports READONLY and type in (itemIsNumeric)type supports READONLY and type in (itemIsNotNumeric)type supports READONLY and type in (itemIsAlphanumeric)type supports READONLY and type in (itemIsInColonDelimitedList)type supports READONLY and type in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype supports READONLY and type in (userPreference=value)type supports READONLY and type in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype supports READONLY and type in (currentPage=page)type supports READONLY and type in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype supports READONLY and type in (currentPageInList)type supports READONLY and type in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype supports READONLY and type in (textIsContainedInItem)type supports READONLY and type in (textIsContainedInValue)type supports READONLY and type in (textIsNotContainedInValue)type supports READONLY and type in (text=value)type supports READONLY and type in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype supports READONLY and type in (item=value)type supports READONLY and type in (item!=value)type supports READONLY and type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type supports READONLY and type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type supports READONLY and type in (userPreference=value)type supports READONLY and type in (userPreference!=value)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype supports READONLY and type in (itemIsInColonDelimitedList)type supports READONLY and type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype supports READONLY and type = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype supports READONLY and type in (textIsContainedInValue)type supports READONLY and type in (textIsNotContainedInValue)type supports READONLY and type in (text=value)type supports READONLY and type in (text!=value)

 | readOnlyHtmlAttributes | string | No | | data type=string; maxLen=4000
Applies whentype supports READONLY and type is set

Copy
readOnly {
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
 readOnlyHtmlAttributes: value
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | sessionStateProtection | enum | Yes | unrestricted | data type=string; lov=STATIC
Valid values: unrestricted checksumRequiredAppLevel checksumRequiredUserLevel checksumRequiredSessionLevel restricted

 | encryptSessionState | boolean | Yes | true | data type=boolean
Applies whentype supports ENCRYPT

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

 | restrictedChars | enum | No | | data type=string; lov=STATIC
Valid values: alphanumWithSpace webSafe noSpecialChar noSpecialCharNoNewline workspaceSchema workspaceUserSchema workspaceUserSchemaId

Copy
security {
 authorizationScheme: mustNotBePublicUser
 sessionStateProtection: unrestricted
 encryptSessionState: false
 escapeSpecialChars: false
 restrictedChars: alphanumWithSpace
}

help

 | Property | Type | Required | Default Value | Details

 | inlineHelpText | multiline string | No | | data type=multiline string; maxLen=4000

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000
Enter help text for this item. The help text may be used to provide field level context sensitive help.

Copy
help {
 inlineHelpText: ```html
 value
 ```
 helpText: ```html
 value
 ```
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
pageItem sample (
 name: value
 type: checkbox
 label {
 label: value
 alignment: above
 tableCellAttributes: [
 value
 value
 ]
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
 displayExtraValues: false
 displayNullValue: false
 nullDisplayValue: value
 nullReturnValue: value
 }
 cascadingLov {
 parentItems: [
 value
 value
 ]
 itemsToSubmit: [
 value
 value
 ]
 parentRequired: false
 }
 genAI {
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
 welcomeMessage: ```html
 value
 ```
 }
 multipleValues {
 type: delimitedList
 separator: value
 }
 layout {
 sequence: 42
 region: @component
 slot: value
 alignment: center
 startNewLayout: false
 startNewRow: false
 rowCssClasses: [
 value
 value
 ]
 column: value
 newColumn: false
 columnSpan: value
 rowSpan: 42
 labelColumnSpan: value
 columnCssClasses: [
 value
 value
 ]
 columnAttributes: [
 value
 value
 ]
 }
 appearance {
 template: @component
 templateOptions: [
 value
 value
 ]
 cssClasses: [
 value
 value
 ]
 icon: value
 formatMask: value
 width: 42
 height: 42
 valuePlaceholder: value
 }
 validation {
 valueRequired: false
 maxLength: 42
 }
 advanced {
 cssClasses: [
 value
 value
 ]
 customAttributes: value
 optionHtmlAttributes: [
 value
 value
 ]
 preText: ```html
 value
 ```
 postText: ```html
 value
 ```
 warnOnUnsavedChanges: ignore
 initJavaScriptFunction: ```javascript-browser
 value
 ```
 }
 source {
 formRegion: @component
 column: value
 dataType: varchar2
 queryOnly: false
 primaryKey: false
 type: staticValue
 staticValue: ```
 value
 ```
 sqlQuery: ```sql
 value
 ```
 item: value
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
 databaseColumn: value
 preference: value
 used: always
 postCalculationComputation: ```plsql
 value
 ```
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
 sessionState {
 dataType: varchar2
 storage: request
 }
 quickPicks {
 type: static
 label1: value
 value1: value
 label2: value
 value2: value
 label3: value
 value3: value
 label4: value
 value4: value
 label5: value
 value5: value
 label6: value
 value6: value
 label7: value
 value7: value
 label8: value
 value8: value
 label9: value
 value9: value
 label10: value
 value10: value
 sqlQuery: ```sql
 value
 ```
 maxDisplayedEntries: 42
 linkAttributes: value
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
 readOnly {
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
 readOnlyHtmlAttributes: value
 }
 security {
 authorizationScheme: mustNotBePublicUser
 sessionStateProtection: unrestricted
 encryptSessionState: false
 escapeSpecialChars: false
 restrictedChars: alphanumWithSpace
 }
 help {
 inlineHelpText: ```html
 value
 ```
 helpText: ```html
 value
 ```
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

process - APEXlang Reference

process

Parent: page

Plug-in Variants: autoRowFetchtype = autoRowFetch, autoRowProcessingtype = autoRowProcessing, clearSessionStatetype = clearSessionState, closeDialogtype = closeDialog, dataLoadingtype = dataLoading, downloadtype = download, executeCodetype = executeCode, executionChaintype = executionChain, formAutoRowProcessingtype = formAutoRowProcessing, formInitializationtype = formInitialization, formPaginationtype = formPagination, generateTextWithAitype = generateTextWithAi, humanTaskCreatetype = humanTaskCreate, humanTaskManagetype = humanTaskManage, interactiveGridAutoRowProcessingtype = interactiveGridAutoRowProcessing, invokeApitype = invokeApi, invokeWorkflowtype = invokeWorkflow, legacyAutoRowProcessingtype = legacyAutoRowProcessing, legacyWebServicetype = legacyWebService, loadUploadedDatatype = loadUploadedData, parallelFlowtype = parallelFlow, parseUploadedDatatype = parseUploadedData, prepareUploadedDatatype = prepareUploadedData, printReporttype = printReport, resetPaginationtype = resetPagination, sendEMailtype = sendEMail, sendPushNotificationtype = sendPushNotification, serverSideGeocodingtype = serverSideGeocoding, switchtype = switch, tabformAddRowstype = tabformAddRows, tabformDeletetype = tabformDelete, tabformUpdatetype = tabformUpdate, userPreferencestype = userPreferences, waittype = wait, webServicetype = webService, workflowtype = workflow, workflowEndtype = workflowEnd, workflowStarttype = workflowStart

Children: basicAuthenticationParametertype in (webService); type in (legacyWebService), inParametertype in (webService); type in (legacyWebService), outParametertype in (webService); type in (legacyWebService), parametertype = WEB_SOURCE, parametertype in (PLSQL_PACKAGE); type in (PLSQL_PROCEDURE_FUNCTION), parametertype = humanTaskCreate, parametertype = workflow and type = START

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name of the process for easy identification by developers.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: autoRowFetch autoRowProcessing clearSessionState closeDialog dataLoading download executeCode executionChain formAutoRowProcessing formInitialization formPagination generateTextWithAi humanTaskCreate humanTaskManage interactiveGridAutoRowProcessing invokeApi legacyAutoRowProcessing legacyWebService loadUploadedData parseUploadedData prepareUploadedData printReport resetPagination sendEMail sendPushNotification serverSideGeocoding tabformAddRows tabformDelete tabformUpdate userPreferences webService workflow

 | executionChain | reference | No | | data type=reference; lov=COMPONENT; references=process

 | formRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whentype supports FORM

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whentype supports REGION and executionChain does not support RUN_IN_BACKGROUND

Property Groups:
genAI
source
execution
successMessage
error
advanced
serverSideCondition
security
config
comments

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean
Applies whentype supports AI_ENABLED

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whentype supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_ENABLED and enabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whentype supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_ENABLED and enabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype supports AI_SYSTEM_PROMPT and type supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_SYSTEM_PROMPT and type supports AI_ENABLED and enabled = true

Copy
genAI {
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
}

source

 | Property | Type | Required | Default Value | Details

 | location | enum | Yes | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql
Applies whentype = executeCode

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = executeCode and location = localDatabase

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = executeCode and location = localDatabase and language = plsql

 | javaScriptCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = executeCode and location = localDatabase and language = javaScript-mle

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whentype = executeCode and location = restEnabledSql

 | plsqlCode | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = executeCode and location = restEnabledSql
Enter the PL/SQL code to be executed on the remote database.

Copy
source {
 location: localDatabase
 language: plsql
 plsqlCode: ```plsql
 value
 ```
 javaScriptCode: ```javascript-mle
 value
 ```
 remoteServer: @component
}

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | point | enum | Yes | processing | data type=string; lov=STATIC
Valid values: newSession beforeHeader afterHeader beforeRegions afterRegions beforeFooter afterFooter afterSubmit processing ajaxCallback

 | runProcess | enum | Yes | oncePerPageVisitDefault | data type=string; lov=STATIC
Valid values: oncePerSessionOrWhenReset oncePerPageVisitDefault

Copy
execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
}

successMessage

 | Property | Type | Required | Default Value | Details

 | successMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the success message for this process.
If the process runs and does not generate an error, then this process success message displays in the notification section of the resulting page displayed.
If you are branching to another page via a URL redirect, you may need to check the preserve success message attribute.

For multi row processes, the following substitution string can be used to get the number of records processed:

Insert: #MRI_COUNT#

Update: #MRU_COUNT#

Delete: #MRD_COUNT#

For the Send E-Mail process type the substitution string #TO# can be used to get the addressees of the e-mail.

Plug-ins can have other substitution strings as well. See Plug-in documentation for details.

Copy
successMessage {
 successMessage: ```
 value
 ```
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | No | | data type=multiline string; maxLen=4000

Enter the error message for this process.
This message displays if an unhandled exception is raised. After any error processing stops, a rollback is issued and an error message displays.

Note: the SQL error message sqlerrm displays by default if On Error Page is defined as the error display location, there is no need to add #SQLERRM# to your error text.

Error messages can include the following substitution strings:

 #SQLERRM_TEXT#
 Text of error message without the error number.
 #SQLERRM#
 Complete error message.

 | displayLocation | enum | Yes | inlineInNotification | data type=string; lov=STATIC
Valid values: inlineInNotification onErrorPage
Applies whenpoint in (afterSubmit)point in (processing)

Copy
error {
 errorMessage: ```
 value
 ```
 displayLocation: inlineInNotification
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | executionMappingIdentifier | string | No | | data type=string; maxLen=32767

Copy
advanced {
 staticId: value
 executionMappingIdentifier: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies whentype supports REGION and executionChain does not support RUN_IN_BACKGROUND and editableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies whentype supports REGION and executionChain does not support RUN_IN_BACKGROUND and editableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

Copy
security {
 authorizationScheme: mustNotBePublicUser
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
process sample (
 name: value
 type: autoRowFetch
 executionChain: @component
 formRegion: @component
 editableRegion: @component
 genAI {
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
 }
 source {
 location: localDatabase
 language: plsql
 plsqlCode: ```plsql
 value
 ```
 javaScriptCode: ```javascript-mle
 value
 ```
 remoteServer: @component
 }
 execution {
 sequence: 42
 point: newSession
 runProcess: oncePerSessionOrWhenReset
 }
 successMessage {
 successMessage: ```
 value
 ```
 }
 error {
 errorMessage: ```
 value
 ```
 displayLocation: inlineInNotification
 }
 advanced {
 staticId: value
 executionMappingIdentifier: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
 }
 security {
 authorizationScheme: mustNotBePublicUser
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

region - APEXlang Reference

region

Parent: page

Plug-in Variants: breadcrumbtype = breadcrumb, calendartype = calendar, cardstype = cards, charttype = chart, classicReporttype = classicReport, classicTreetype = classicTree, columnToggleReporttype = columnToggleReport, dataUploadColMappingtype = dataUploadColMapping, dynamicContenttype = dynamicContent, facetedSearchtype = facetedSearch, formtype = form, helpTexttype = helpText, interactiveGridtype = interactiveGrid, interactiveReporttype = interactiveReport, legacyCalendartype = legacyCalendar, listtype = list, listViewtype = listView, maptype = map, plSqlDynamicContenttype = plSqlDynamicContent, reflowReporttype = reflowReport, regionDisplaySelectortype = regionDisplaySelector, searchtype = search, simpleCharttype = simpleChart, smartFilterstype = smartFilters, staticContenttype = staticContent, svgCharttype = svgChart, tabformtype = tabform, treetype = tree, urltype = url, workflowDiagramtype = workflowDiagram

Children: actiontype = cards, action, axistype = chart and type in (area); type = chart and type in (bar); type = chart and type in (boxPlot); type = chart and type in (bubble); type = chart and type in (combination); type = chart and type in (gantt); type = chart and type in (line); type = chart and type in (lineWithArea); type = chart and type in (polar); type = chart and type in (radar); type = chart and type in (range); type = chart and type in (scatter); type = chart and type in (stock), columntype = interactiveReport, columntype = classicReport, columntype = tabform, columntype supports COLUMNS, columntype supports SOURCE_LOCATION and location is set, columntype = interactiveGrid, columnGrouptype = interactiveReport, columnGrouptype = interactiveGrid, facettype = facetedSearch, facetGrouptype = facetedSearch, filtertype = smartFilters, filterGrouptype = smartFilters, layertype = map, parametertype supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable = false; type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable = false; type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable = false, savedReporttype = interactiveReport, savedReporttype = interactiveGrid, searchSourcetype = search, seriestype = chart

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter a region name. The region name is required, it is used by Page Designer to identify the region on the tree view and the grid layout view. The region name is used as the runtime region title, if the title attribute is empty.

 | title | string | No | | data type=string; maxLen=255
Enter a region title. The region title is optional, it only displays when it is defined in the region template.

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: breadcrumb calendar cards chart classicReport classicTree columnToggleReport dataUploadColMapping dynamicContent facetedSearch form helpText interactiveGrid interactiveReport legacyCalendar list listView map plSqlDynamicContent reflowReport regionDisplaySelector search simpleChart smartFilters staticContent svgChart tabform tree url workflowDiagram

Property Groups:
chart
componentAppearance
edit
link
map
output
page
reportLayout
title
chartAppearance
card
source
controls
editAuthorization
pageHeader
chartLayout
initialPositionAndZoom
performance
pagination
gauge
columnHeadings
messages
subtitle
toolbar
breakFormatting
dataCursor
columns
body
enableUsersTo
multiSeriesChartData
boundingBox
pageFooter
secondaryBody
settings
download
componentAdvanced
singleRowView
iconAndBadge
heading
iconView
overview
legend
printing
value
externalProcessing
genAI
media
attributes
searchBar
orderBy
detailView
actionsMenu
animation
dataProfile
blobAttributes
tooltip
restSynchronization
externalFilterAndOrderBy
advanced
help
localPostProcessing
autoRefresh
remoteCache
layout
description
appearance
accessibility
image
masterDetail
headerAndFooter
serverSideCondition
readOnly
security
serverCache
customization
config
comments
rowSelection
entityTitle

chart

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | bar | data type=string; lov=STATIC
Valid values: area bar boxPlot bubble combination statusMeterGauge donut funnel gantt line lineWithArea pie polar pyramid radar range scatter stock
Applies whentype = chart

Copy
chart {
 type: area
}

componentAppearance

 | Property | Type | Required | Default Value | Details

 | display | enum | Yes | | data type=string; lov=STATIC
Valid values: report partial regionOnly

 | layout | enum | Yes | grid | data type=string; lov=STATIC
Valid values: grid float horizontal
Applies whentype = cards

 | gridColumns | enum | No | | data type=string; lov=STATIC
Valid values: 2 3 4 5
Applies whentype = cards and layout = grid

 | listTemplate | reference | Yes | | data type=reference; lov=COMPONENT; references=listTemplate
Applies whentype = list

 | breadcrumbTemplate | reference | Yes | | data type=reference; lov=COMPONENT; references=breadcrumbTemplate
Applies whentype = breadcrumb

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype = cardstype = classicReport and templateType = themetype = tabform and templateType = theme

 | templateOptions | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS
Applies whentype = breadcrumb and breadcrumbTemplate is settype = list and listTemplate is settype = classicReport and templateType = theme and template is settype = tabform and templateType = theme and template is set

 | templateType | enum | Yes | theme | data type=string; lov=STATIC
Valid values: theme predefined
Applies whentype = classicReporttype = tabform

 | template | reference | Yes | | data type=reference; lov=COMPONENT; references=classicReportTemplate
Applies whentype = classicReport and templateType = themetype = tabform and templateType = theme

 | template | enum | Yes | html | data type=string; lov=STATIC
Valid values: html verticalReport csv xml
Applies whentype = classicReport and templateType = predefinedtype = tabform and templateType = predefined

 | customAttributes | string | No | | data type=string; maxLen=2000
Applies whentype = classicReporttype = tabform
The report template substitution string #REPORT_ATTRIBUTES# is replaced with this value. The #REPORT_ATTRIBUTES# substitution string is only replaced in the before rows attribute of the report template.

 | showNullValuesAs | string | No | | data type=string; maxLen=255
Applies whentype = interactiveReporttype = classicReporttype = tabformtype = interactiveGrid

 | selectFirstRow | boolean | Yes | true | data type=boolean
Applies whentype = interactiveGrid

 | fixedRowHeight | boolean | Yes | true | data type=boolean
Applies whentype = interactiveGrid

Copy
componentAppearance {
 display: report
 layout: grid
 gridColumns: "2"
 listTemplate: @component
 breadcrumbTemplate: @component
 cssClasses: [
 value
 value
 ]
 templateOptions: [
 value
 value
 ]
 templateType: theme
 template: @component
 customAttributes: value
 showNullValuesAs: value
 selectFirstRow: false
 fixedRowHeight: false
}

edit

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean
Applies whentype = interactiveGridtype supports EDITABLE

 | allowedOperations | array of enums | No | | data type=string; lov=STATIC
Valid values: add update delete
Applies whentype = interactiveGrid and enabled = truetype supports EDITABLE and enabled = true

 | allowedRowOperationsColumn | string | No | | data type=string; maxLen=32767
Applies whentype = interactiveGrid and enabled = true and allowedOperations in (update)type = interactiveGrid and enabled = true and allowedOperations in (delete)type supports EDITABLE and enabled = true and allowedOperations in (update)type supports EDITABLE and enabled = true and allowedOperations in (delete)

 | lostUpdateType | enum | Yes | rowValues | data type=string; lov=STATIC
Valid values: rowValues rowVersionColumn
Applies whentype = interactiveGrid and enabled = truetype supports EDITABLE and enabled = true

 | rowVersionColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = interactiveGrid and enabled = true and lostUpdateType = rowVersionColumntype supports EDITABLE and enabled = true and lostUpdateType = rowVersionColumn

 | addRowIfEmpty | boolean | Yes | true | data type=boolean
Applies whentype = interactiveGrid and enabled = true and allowedOperations = add

Copy
edit {
 enabled: false
 allowedOperations: [
 add
 update
 ]
 allowedRowOperationsColumn: value
 lostUpdateType: rowValues
 rowVersionColumn: value
 addRowIfEmpty: false
}

link

 | Property | Type | Required | Default Value | Details

 | linkColumn | enum | Yes | exclude | data type=string; lov=STATIC
Valid values: singleRowView customTarget exclude
Applies whentype = interactiveReport

 | uniquelyIdentifyRowsBy | enum | Yes | rowid | data type=string; lov=STATIC
Valid values: rowid uniqueColumn
Applies whentype = interactiveReport and linkColumn = singleRowView

 | uniqueColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = interactiveReport and linkColumn = singleRowView and uniquelyIdentifyRowsBy = uniqueColumn

 | target | complex | Yes | | data type=complex; maxLen=32767
Applies whentype = interactiveReport and linkColumn = customTarget

 | linkIcon | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView)type = interactiveReport and linkColumn in (customTarget)

 | linkAttributes | string | No | | data type=string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView)type = interactiveReport and linkColumn in (customTarget)

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser
Applies whentype = interactiveReport and linkColumn in (singleRowView)type = interactiveReport and linkColumn in (customTarget)

 | conditionType | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never
Applies whentype = interactiveReport and linkColumn in (singleRowView)type = interactiveReport and linkColumn in (customTarget)

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType in (rowsReturned)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (noRowsReturned)type = interactiveReport and linkColumn in (customTarget) and conditionType in (rowsReturned)type = interactiveReport and linkColumn in (customTarget) and conditionType in (noRowsReturned)

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType = expressiontype = interactiveReport and linkColumn in (customTarget) and conditionType = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType = expression and language = sqltype = interactiveReport and linkColumn in (customTarget) and conditionType = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType = expression and language = plsqltype = interactiveReport and linkColumn in (customTarget) and conditionType = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType = expression and language = javaScript-mletype = interactiveReport and linkColumn in (customTarget) and conditionType = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType = functionBodytype = interactiveReport and linkColumn in (customTarget) and conditionType = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType = functionBody and language = plsqltype = interactiveReport and linkColumn in (customTarget) and conditionType = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType = functionBody and language = javaScript-mletype = interactiveReport and linkColumn in (customTarget) and conditionType = functionBody and language = javaScript-mle

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType in (request=Value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (request!=Value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (requestIsContainedInValue)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (requestIsNotContainedInValue)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (currentLanguageIsContainedInValue)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (currentLanguageIsNotContainedInValue)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (currentLanguage!=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (currentLanguage=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (cgiEnvDadName=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (cgiEnvDadName!=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (cgiEnvServerName=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (cgiEnvServerName!=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (cgiEnvHttpHost=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (cgiEnvHttpHost!=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (request=Value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (request!=Value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (requestIsContainedInValue)type = interactiveReport and linkColumn in (customTarget) and conditionType in (requestIsNotContainedInValue)type = interactiveReport and linkColumn in (customTarget) and conditionType in (currentLanguageIsContainedInValue)type = interactiveReport and linkColumn in (customTarget) and conditionType in (currentLanguageIsNotContainedInValue)type = interactiveReport and linkColumn in (customTarget) and conditionType in (currentLanguage!=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (currentLanguage=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (cgiEnvDadName=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (cgiEnvDadName!=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (cgiEnvServerName=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (cgiEnvServerName!=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (cgiEnvHttpHost=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (cgiEnvHttpHost!=value)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType in (item=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (item!=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsNull)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsNotNull)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsZero)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsNotZero)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsNullOrZero)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsNotNullAndNotZero)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemContainsNoSpaces)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsNumeric)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsNotNumeric)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsAlphanumeric)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsInColonDelimitedList)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsNotInColonDelimitedList)type = interactiveReport and linkColumn in (customTarget) and conditionType in (item=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (item!=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type = interactiveReport and linkColumn in (customTarget) and conditionType in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsNull)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsNotNull)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsZero)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsNotZero)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsNullOrZero)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsNotNullAndNotZero)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemContainsNoSpaces)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsNumeric)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsNotNumeric)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsAlphanumeric)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsInColonDelimitedList)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsNotInColonDelimitedList)

 | preference | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType in (userPreference=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (userPreference!=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (userPreference=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (userPreference!=value)

 | page | integer | Yes | | data type=integer; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType in (currentPage=page)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (currentPage!=page)type = interactiveReport and linkColumn in (customTarget) and conditionType in (currentPage=page)type = interactiveReport and linkColumn in (customTarget) and conditionType in (currentPage!=page)

 | pages | array of integers | Yes | | data type=integer; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType in (currentPageInList)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (currentPageNotInList)type = interactiveReport and linkColumn in (customTarget) and conditionType in (currentPageInList)type = interactiveReport and linkColumn in (customTarget) and conditionType in (currentPageNotInList)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType in (textIsContainedInItem)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (textIsContainedInValue)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (textIsNotContainedInValue)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (text=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (text!=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (textIsContainedInItem)type = interactiveReport and linkColumn in (customTarget) and conditionType in (textIsContainedInValue)type = interactiveReport and linkColumn in (customTarget) and conditionType in (textIsNotContainedInValue)type = interactiveReport and linkColumn in (customTarget) and conditionType in (text=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (text!=value)

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType in (item=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (item!=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (userPreference=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (userPreference!=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (item=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (item!=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type = interactiveReport and linkColumn in (customTarget) and conditionType in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type = interactiveReport and linkColumn in (customTarget) and conditionType in (userPreference=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (userPreference!=value)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsInColonDelimitedList)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (itemIsNotInColonDelimitedList)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsInColonDelimitedList)type = interactiveReport and linkColumn in (customTarget) and conditionType in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType = textIsContainedInItemtype = interactiveReport and linkColumn in (customTarget) and conditionType = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype = interactiveReport and linkColumn in (singleRowView) and conditionType in (textIsContainedInValue)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (textIsNotContainedInValue)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (text=value)type = interactiveReport and linkColumn in (singleRowView) and conditionType in (text!=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (textIsContainedInValue)type = interactiveReport and linkColumn in (customTarget) and conditionType in (textIsNotContainedInValue)type = interactiveReport and linkColumn in (customTarget) and conditionType in (text=value)type = interactiveReport and linkColumn in (customTarget) and conditionType in (text!=value)

Copy
link {
 linkColumn: singleRowView
 uniquelyIdentifyRowsBy: rowid
 uniqueColumn: value
 target: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 linkIcon: ```
 value
 ```
 linkAttributes: value
 authorizationScheme: mustNotBePublicUser
 conditionType: always
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

map

 | Property | Type | Required | Default Value | Details

 | background | enum | Yes | default | data type=string; lov=STATIC
Valid values: default builtIn sharedComponent
Applies whentype = map

 | standard | enum | Yes | openstreetmapPositron | data type=string; lov=STATIC
Valid values: openstreetmapPositron openstreetmapDark openstreetmapBright oracleWorldMap oracleBiWorldMap
Applies whentype = map and background = builtIn

 | darkMode | enum | No | | data type=string; lov=STATIC
Valid values: openstreetmapDark openstreetmapPositron openstreetmapBright oracleWorldMap oracleBiWorldMap
Applies whentype = map and background = builtIn

 | standard | reference | Yes | | data type=reference; lov=COMPONENT; references=mapBackground
Applies whentype = map and background = sharedComponent

 | darkMode | reference | No | | data type=reference; lov=COMPONENT; references=mapBackground
Applies whentype = map and background = sharedComponent

 | height | number | Yes | 640 | data type=number; maxLen=22
Applies whentype = map

Copy
map {
 background: default
 standard: openstreetmapPositron
 darkMode: openstreetmapDark
 height: 42
}

output

 | Property | Type | Required | Default Value | Details

 | layout | reference | No | | data type=reference; lov=COMPONENT; references=reportLayout
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = true

 | linkText | string | No | | data type=string; maxLen=255
Applies whentype = classicReport and enabled = truetype = tabform and enabled = true

 | format | enum | No | | data type=string; lov=STATIC
Valid values: pdf word excel html xml
Applies whentype = classicReport and enabled = truetype = tabform and enabled = true

 | viewFileAs | enum | Yes | attachment | data type=string; lov=STATIC
Valid values: attachment inline
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = true

 | formatItem | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype = classicReport and enabled = truetype = tabform and enabled = true

 | fileName | string | No | | data type=string; maxLen=255
Applies whentype = classicReport and enabled = truetype = tabform and enabled = true

Copy
output {
 layout: @component
 linkText: value
 format: pdf
 viewFileAs: attachment
 formatItem: value
 fileName: value
}

page

 | Property | Type | Required | Default Value | Details

 | size | enum | Yes | letter | data type=string; lov=STATIC
Valid values: letter legal tabloid a4 a3 custom
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | orientation | enum | Yes | landscape | data type=string; lov=STATIC
Valid values: portrait landscape
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | units | enum | Yes | inches | data type=string; lov=STATIC
Valid values: inches millimeters centimeters points
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | width | number | Yes | 11 | data type=number; maxLen=22
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | height | number | Yes | 8.5 | data type=number; maxLen=22
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | borderWidth | number | No | | data type=number; maxLen=255
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | borderColor | string | No | | data type=string; maxLen=255
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

Copy
page {
 size: letter
 orientation: portrait
 units: inches
 width: 42
 height: 42
 borderWidth: 42
 borderColor: value
}

reportLayout

 | Property | Type | Required | Default Value | Details

 | numberOfRowsType | enum | Yes | staticValue | data type=string; lov=STATIC
Valid values: staticValue itemValue
Applies whentype = classicReporttype = tabformtype supports FETCHED_ROWS

 | numberOfRows | integer | Yes | 15 | data type=integer; maxLen=32767
Applies whentype = classicReport and numberOfRowsType = staticValuetype = tabform and numberOfRowsType = staticValuetype supports FETCHED_ROWS and numberOfRowsType = staticValue

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER
Applies whentype = classicReport and numberOfRowsType = itemValuetype = tabform and numberOfRowsType = itemValuetype supports FETCHED_ROWS and numberOfRowsType = itemValue

Copy
reportLayout {
 numberOfRowsType: staticValue
 numberOfRows: 42
 item: value
}

title

 | Property | Type | Required | Default Value | Details

 | title | string | No | | data type=string; maxLen=255
Applies whentype = chart

 | advancedFormatting | boolean | Yes | false | data type=boolean
Applies whentype = cards

 | column | string | No | | data type=string; maxLen=32767
Applies whentype = cards and advancedFormatting = false

 | htmlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = cards and advancedFormatting = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype = cards and advancedFormatting = false

Copy
title {
 title: value
 advancedFormatting: false
 column: value
 htmlExpression: ```html
 value
 ```
 cssClasses: [
 value
 value
 ]
}

chartAppearance

 | Property | Type | Required | Default Value | Details

 | orientation | enum | Yes | vertical | data type=string; lov=STATIC
Valid values: vertical horizontal
Applies whentype = chart and type in (area)type = chart and type in (bar)type = chart and type in (combination)type = chart and type in (funnel)type = chart and type in (line)type = chart and type in (lineWithArea)type = chart and type in (boxPlot)type = chart and type in (range)

 | stack | boolean | Yes | off | data type=boolean
Applies whentype = chart and type in (area)type = chart and type in (bar)type = chart and type in (line)type = chart and type in (lineWithArea)type = chart and type in (combination)type = chart and type in (polar)type = chart and type in (radar)

 | stackLabel | boolean | Yes | off | data type=boolean
Applies whentype = chart and type = bar and type in (area) and stack = ontype = chart and type = bar and type in (bar) and stack = ontype = chart and type = bar and type in (line) and stack = ontype = chart and type = bar and type in (lineWithArea) and stack = ontype = chart and type = bar and type in (combination) and stack = ontype = chart and type = bar and type in (polar) and stack = ontype = chart and type = bar and type in (radar) and stack = on

 | fontFamily | enum | No | | data type=string; lov=STATIC
Valid values: arial arialBlack bookman comicSansMs courier courierNew garamond georgia helvetica impact palatino times timesNewRoman trebuchetMs verdana
Applies whentype = chart and type = bar and type in (area) and stack = on and stackLabel = ontype = chart and type = bar and type in (bar) and stack = on and stackLabel = ontype = chart and type = bar and type in (line) and stack = on and stackLabel = ontype = chart and type = bar and type in (lineWithArea) and stack = on and stackLabel = ontype = chart and type = bar and type in (combination) and stack = on and stackLabel = ontype = chart and type = bar and type in (polar) and stack = on and stackLabel = ontype = chart and type = bar and type in (radar) and stack = on and stackLabel = on

 | fontStyle | enum | No | | data type=string; lov=STATIC
Valid values: normal italic oblique
Applies whentype = chart and type = bar and type in (area) and stack = on and stackLabel = ontype = chart and type = bar and type in (bar) and stack = on and stackLabel = ontype = chart and type = bar and type in (line) and stack = on and stackLabel = ontype = chart and type = bar and type in (lineWithArea) and stack = on and stackLabel = ontype = chart and type = bar and type in (combination) and stack = on and stackLabel = ontype = chart and type = bar and type in (polar) and stack = on and stackLabel = ontype = chart and type = bar and type in (radar) and stack = on and stackLabel = on

 | fontSize | enum | No | | data type=string; lov=STATIC
Valid values: 8 10 12 14 16 18 20 22
Applies whentype = chart and type = bar and type in (area) and stack = on and stackLabel = ontype = chart and type = bar and type in (bar) and stack = on and stackLabel = ontype = chart and type = bar and type in (line) and stack = on and stackLabel = ontype = chart and type = bar and type in (lineWithArea) and stack = on and stackLabel = ontype = chart and type = bar and type in (combination) and stack = on and stackLabel = ontype = chart and type = bar and type in (polar) and stack = on and stackLabel = ontype = chart and type = bar and type in (radar) and stack = on and stackLabel = on

 | fontColor | string | No | | data type=string; maxLen=255
Applies whentype = chart and type = bar and type in (area) and stack = on and stackLabel = ontype = chart and type = bar and type in (bar) and stack = on and stackLabel = ontype = chart and type = bar and type in (line) and stack = on and stackLabel = ontype = chart and type = bar and type in (lineWithArea) and stack = on and stackLabel = ontype = chart and type = bar and type in (combination) and stack = on and stackLabel = ontype = chart and type = bar and type in (polar) and stack = on and stackLabel = ontype = chart and type = bar and type in (radar) and stack = on and stackLabel = on

Copy
chartAppearance {
 orientation: vertical
 stack: false
 stackLabel: false
 fontFamily: arial
 fontStyle: normal
 fontSize: "8"
 fontColor: value
}

card

 | Property | Type | Required | Default Value | Details

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype = cards

 | primaryKeyColumn1 | string | No | | data type=string; maxLen=32767
Applies whentype = cards and advancedFormatting = false

 | primaryKeyColumn2 | string | No | | data type=string; maxLen=32767
Applies whentype = cards and advancedFormatting = false and primaryKeyColumn1 is set

 | primaryKeyColumn1 | string | Yes | | data type=string; maxLen=32767
Applies whentype = cards and iconSource = imageBlobColumntype = cards and advancedFormatting = false and source = blobColumn

 | primaryKeyColumn2 | string | No | | data type=string; maxLen=32767
Applies whentype = cards and iconSource = imageBlobColumn and primaryKeyColumn1 is settype = cards and advancedFormatting = false and source = blobColumn and primaryKeyColumn1 is set

Copy
card {
 cssClasses: [
 value
 value
 ]
 primaryKeyColumn2: value
 primaryKeyColumn1: value
}

source

 | Property | Type | Required | Default Value | Details

 | sqlQuery | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_SQL

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_PLSQL
Enter the PL/SQL code to generate the HTML output.

 | plsqlFunctionBody | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_PLSQL_FUNCTION

 | htmlCode | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_HTML

 | text | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_PLAIN

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = dynamicContent

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = dynamicContent and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = dynamicContent and language = javaScript-mle

 | location | enum | No | localDatabase | data type=string; lov=STATIC
Valid values: localDatabase restEnabledSql restSource jsonDualityView jsonSource sampleData
Applies whentype supports SOURCE_LOCATION

 | remoteServer | reference | Yes | | data type=reference; lov=COMPONENT; references=restEnabledSqlDatabase
Applies whentype supports SOURCE_LOCATION and location = restEnabledSql

 | sampleData | enum | Yes | | data type=string; lov=STATIC
Valid values: employees tasks products projects
Applies whentype supports SOURCE_LOCATION and location = sampleData

 | type | enum | Yes | tableView | data type=string; lov=STATIC
Valid values: tableView sqlQuery functionBody propertyGraph
Applies whentype supports SOURCE_LOCATION and location in (localDatabase)type supports SOURCE_LOCATION and location in (restEnabledSql)

 | tableOwner | string | No | | data type=string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = tableViewtype supports SOURCE_LOCATION and location in (restEnabledSql) and type = tableView

 | tableName | string | Yes | | data type=string; maxLen=128
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = tableViewtype supports SOURCE_LOCATION and location in (restEnabledSql) and type = tableView

 | includeRowidColumn | boolean | Yes | false | data type=boolean
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = tableView and location = restEnabledSql and remoteServer supports IS_ORACLEtype supports SOURCE_LOCATION and location in (restEnabledSql) and type = tableView and location = restEnabledSql and remoteServer supports IS_ORACLE

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = tableViewtype supports SOURCE_LOCATION and location in (restEnabledSql) and type = tableView

 | graphOwner | string | No | | data type=string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = propertyGraphtype supports SOURCE_LOCATION and location in (restEnabledSql) and type = propertyGraph

 | graphName | string | Yes | | data type=string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = propertyGraphtype supports SOURCE_LOCATION and location in (restEnabledSql) and type = propertyGraph

 | matchClause | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = propertyGraphtype supports SOURCE_LOCATION and location in (restEnabledSql) and type = propertyGraph

 | columnsClause | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = propertyGraphtype supports SOURCE_LOCATION and location in (restEnabledSql) and type = propertyGraph

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = propertyGraphtype supports SOURCE_LOCATION and location in (restEnabledSql) and type = propertyGraph

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=255
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = tableView and type in (interactiveGrid)type supports SOURCE_LOCATION and location in (localDatabase) and type = tableView and type in (interactiveReport)type supports SOURCE_LOCATION and location in (localDatabase) and type = tableView and type in (map)type supports SOURCE_LOCATION and location in (localDatabase) and type = tableView and type in (form)type supports SOURCE_LOCATION and location in (restEnabledSql) and type = tableView and type in (interactiveGrid)type supports SOURCE_LOCATION and location in (restEnabledSql) and type = tableView and type in (interactiveReport)type supports SOURCE_LOCATION and location in (restEnabledSql) and type = tableView and type in (map)type supports SOURCE_LOCATION and location in (restEnabledSql) and type = tableView and type in (form)

 | orderByClause | multiline string | No | | data type=multiline string; maxLen=255
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = propertyGraph and type in (interactiveGrid)type supports SOURCE_LOCATION and location in (localDatabase) and type = propertyGraph and type in (interactiveReport)type supports SOURCE_LOCATION and location in (localDatabase) and type = propertyGraph and type in (map)type supports SOURCE_LOCATION and location in (localDatabase) and type = propertyGraph and type in (form)type supports SOURCE_LOCATION and location in (restEnabledSql) and type = propertyGraph and type in (interactiveGrid)type supports SOURCE_LOCATION and location in (restEnabledSql) and type = propertyGraph and type in (interactiveReport)type supports SOURCE_LOCATION and location in (restEnabledSql) and type = propertyGraph and type in (map)type supports SOURCE_LOCATION and location in (restEnabledSql) and type = propertyGraph and type in (form)

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = sqlQuerytype supports SOURCE_LOCATION and location in (restEnabledSql) and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = functionBodytype supports SOURCE_LOCATION and location in (restEnabledSql) and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = functionBody and language = plsqltype supports SOURCE_LOCATION and location in (restEnabledSql) and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location in (localDatabase) and type = functionBody and language = javaScript-mletype supports SOURCE_LOCATION and location in (restEnabledSql) and type = functionBody and language = javaScript-mle

 | restSource | reference | Yes | | data type=reference; lov=COMPONENT; references=restDataSource
Applies whentype supports SOURCE_LOCATION and location = restSource

 | jsonDualityView | reference | Yes | | data type=reference; lov=COMPONENT; references=jsonDualityView
Applies whentype supports SOURCE_LOCATION and location = jsonDualityView

 | jsonSource | reference | Yes | | data type=reference; lov=COMPONENT; references=jsonSource
Applies whentype supports SOURCE_LOCATION and location = jsonSource

 | list | reference | Yes | | data type=reference; lov=COMPONENT; references=list
Applies whentype in (list)

 | breadcrumb | reference | Yes | | data type=reference; lov=COMPONENT; references=breadcrumb
Applies whentype in (breadcrumb)

 | filteredRegion | reference | Yes | | data type=reference; lov=COMPONENT; references=region
Applies whentype in (facetedSearch)type in (smartFilters)

 | pageItemsToSubmit | array of strings | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype supports AJAX_ITEMS_TO_SUBMIT

 | optimizerHint | string | No | | data type=string; maxLen=255
Applies whentype supports SOURCE_LOCATION and location in (localDatabase)type supports SOURCE_LOCATION and location in (restEnabledSql)type supports SOURCE_LOCATION and location in (restSource)type supports SOURCE_LOCATION and location in (jsonDualityView)type supports SOURCE_LOCATION and location in (jsonSource)

 | useGenericColumnNames | boolean | Yes | DERIVED_REPORT_COLUMNS | data type=boolean
Applies whentype = classicReport and type supports SOURCE_LOCATION and location in (localDatabase) and type = functionBodytype = classicReport and type supports SOURCE_LOCATION and location in (restEnabledSql) and type = functionBody

 | genericColumnCount | integer | Yes | | data type=integer; maxLen=3
Applies whentype = classicReport and type supports SOURCE_LOCATION and location in (localDatabase) and type = functionBody and useGenericColumnNames = GENERIC_REPORT_COLUMNStype = classicReport and type supports SOURCE_LOCATION and location in (restEnabledSql) and type = functionBody and useGenericColumnNames = GENERIC_REPORT_COLUMNS

Copy
source {
 plsqlCode: ```plsql
 value
 ```
 htmlCode: ```html
 value
 ```
 text: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 location: localDatabase
 remoteServer: @component
 sampleData: employees
 type: tableView
 tableOwner: value
 tableName: value
 includeRowidColumn: false
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
 restSource: @component
 jsonDualityView: @component
 jsonSource: @component
 list: @component
 breadcrumb: @component
 filteredRegion: @component
 pageItemsToSubmit: [
 value
 value
 ]
 optimizerHint: value
 useGenericColumnNames: false
 genericColumnCount: 42
}

controls

 | Property | Type | Required | Default Value | Details

 | navigationBar | enum | Yes | zoomAndCompass | data type=string; lov=STATIC
Valid values: none zoomOnly zoomAndCompass
Applies whentype = map

 | navigationBarPosition | enum | Yes | end | data type=string; lov=STATIC
Valid values: start end
Applies whentype = map

 | options | array of enums | No | | data type=string; lov=STATIC
Valid values: mousewheelZoom rectangleZoom scaleBar overviewMap infiniteMap getBrowserLocation circleTool distanceTool
Applies whentype = map

Copy
controls {
 navigationBar: none
 navigationBarPosition: start
 options: [
 mousewheelZoom
 rectangleZoom
 ]
}

editAuthorization

 | Property | Type | Required | Default Value | Details

 | add | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser
Applies whentype = interactiveGrid and enabled = true and allowedOperations = addtype supports EDITABLE and enabled = true and allowedOperations = add

 | update | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser
Applies whentype = interactiveGrid and enabled = true and allowedOperations = updatetype supports EDITABLE and enabled = true and allowedOperations = update

 | delete | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser
Applies whentype = interactiveGrid and enabled = true and allowedOperations = deletetype supports EDITABLE and enabled = true and allowedOperations = delete

Copy
editAuthorization {
 add: mustNotBePublicUser
 update: mustNotBePublicUser
 delete: mustNotBePublicUser
}

pageHeader

 | Property | Type | Required | Default Value | Details

 | font | enum | Yes | helvetica | data type=string; lov=STATIC
Valid values: helvetica times courier
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | fontWeight | enum | Yes | normal | data type=string; lov=STATIC
Valid values: normal bold
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | fontSize | integer | Yes | 12 | data type=integer; maxLen=32767
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | fontColor | string | Yes | #000000 | data type=string; maxLen=255
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | alignment | enum | Yes | center | data type=string; lov=STATIC
Valid values: start center end
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | pageHeaderText | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

Copy
pageHeader {
 font: helvetica
 fontWeight: normal
 fontSize: 42
 fontColor: value
 alignment: start
 pageHeaderText: ```
 value
 ```
}

chartLayout

 | Property | Type | Required | Default Value | Details

 | maxWidth | integer | No | | data type=integer; maxLen=32767
Applies whentype = chart

 | height | integer | No | | data type=integer; maxLen=32767
Applies whentype = chart

Copy
chartLayout {
 maxWidth: 42
 height: 42
}

initialPositionAndZoom

 | Property | Type | Required | Default Value | Details

 | getPositionFromBrowser | boolean | Yes | false | data type=boolean
Applies whentype = map and options = getBrowserLocation

 | type | enum | Yes | basedOnSpatialResults | data type=string; lov=STATIC
Valid values: staticValues sqlQuery basedOnSpatialResults
Applies whentype = map

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype = map and type = sqlQuery

 | geometryColumnDataType | enum | Yes | | data type=string; lov=STATIC
Valid values: sdoGeometry geojson longitudeLatitude
Applies whentype = map and type = sqlQuery

 | initialLongitudeColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and type = sqlQuery and geometryColumnDataType = longitudeLatitude

 | initialLatitudeColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and type = sqlQuery and geometryColumnDataType = longitudeLatitude

 | geometryColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and type = sqlQuery and geometryColumnDataType = sdoGeometry

 | geojsonColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and type = sqlQuery and geometryColumnDataType = geojson

 | initialZoomlevelColumn | string | No | | data type=string; maxLen=32767
Applies whentype = map and type = sqlQuery

 | longitude | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and type = staticValues

 | latitude | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and type = staticValues

 | zoomLevel | string | No | | data type=string; maxLen=32767
Applies whentype = map and type in (staticValues)type = map and type in (basedOnSpatialResults)

Copy
initialPositionAndZoom {
 getPositionFromBrowser: false
 type: staticValues
 sqlQuery: ```sql
 value
 ```
 geometryColumnDataType: sdoGeometry
 initialLongitudeColumn: value
 initialLatitudeColumn: value
 geometryColumn: value
 geojsonColumn: value
 initialZoomlevelColumn: value
 longitude: value
 latitude: value
 zoomLevel: value
}

performance

 | Property | Type | Required | Default Value | Details

 | lazyLoading | boolean | Yes | false | data type=boolean
Applies whentype = interactiveReporttype = interactiveGridtype = cardstype = maptype = classicReport and partialPageRefresh = truetype = tabform and partialPageRefresh = truetype supports LAZY_LOADING and type supports SOURCE_LOCATION and location is set

 | maxRowsToProcess | integer | No | | data type=integer; maxLen=32767
Applies whentype = classicReporttype = tabformtype = interactiveReport

 | lazyLoading | boolean | Yes | false | data type=boolean
Applies whentype supports LAZY_LOADING_ALWAYS

Copy
performance {
 lazyLoading: false
 maxRowsToProcess: 42
}

pagination

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: rowRangesXToYNoPagination rowRangesXToYOfZNoPagination rowRangesXToYOfZWithPagination setPaginationLinks setPaginationSelectList setPaginationSearchEngine externalPaginationButtons nextAndPreviousLinks
Applies whentype = classicReporttype = tabform

 | displayPosition | enum | Yes | bottomRight | data type=string; lov=STATIC
Valid values: bottomLeft bottomRight topLeft topRight topAndBottomLeft topAndBottomRight
Applies whentype = interactiveReport and type is settype = classicReport and type is settype = tabform and type is set

 | partialPageRefresh | boolean | Yes | true | data type=boolean
Applies whentype = classicReporttype = tabform

 | type | enum | Yes | scroll | data type=string; lov=STATIC
Valid values: page scroll
Applies whentype = interactiveGridtype = cardsdisplay = report

 | showTotalCount | boolean | Yes | true | data type=boolean
Applies whentype = interactiveGridtype = cardsdisplay = report

 | type | enum | No | | data type=string; lov=STATIC
Valid values: rowRangesXToYOfZ rowRangesXToY
Applies whentype = interactiveReport

 | maxRowsToDisplay | string | No | | data type=string; maxLen=32767
Applies whentype = interactiveReport

 | cardsPerPage | integer | Yes | 15 | data type=integer; maxLen=32767
Applies whentype = cards and type = page

 | entitiesPerPage | integer | Yes | 15 | data type=integer; maxLen=32767
Applies whendisplay = report and type = page

 | initialEntitiesCount | integer | No | | data type=integer; maxLen=32767
Applies whendisplay = report and type = scroll

Copy
pagination {
 displayPosition: bottomLeft
 partialPageRefresh: false
 type: page
 showTotalCount: false
 maxRowsToDisplay: value
 cardsPerPage: 42
 entitiesPerPage: 42
 initialEntitiesCount: 42
}

gauge

 | Property | Type | Required | Default Value | Details

 | orientation | enum | Yes | circular | data type=string; lov=STATIC
Valid values: circular horizontal vertical
Applies whentype = chart and type = statusMeterGauge

 | showPlotArea | boolean | Yes | on | data type=boolean
Applies whentype = chart and type = statusMeterGauge

 | indicatorSize | number | Yes | 1 | data type=number; maxLen=22
Applies whentype = chart and type = statusMeterGauge

 | innerRadius | number | Yes | 0.7 | data type=number; maxLen=22
Applies whentype = chart and type = statusMeterGauge and orientation = circular

 | startAngle | number | Yes | 90 | data type=number; maxLen=22
Applies whentype = chart and type = statusMeterGauge and orientation = circular

 | angleExtent | number | Yes | 360 | data type=number; maxLen=22
Applies whentype = chart and type = statusMeterGauge and orientation = circular

Copy
gauge {
 orientation: circular
 showPlotArea: false
 indicatorSize: 42
 innerRadius: 42
 startAngle: 42
 angleExtent: 42
}

columnHeadings

 | Property | Type | Required | Default Value | Details

 | font | enum | Yes | helvetica | data type=string; lov=STATIC
Valid values: helvetica times courier
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | fontWeight | enum | Yes | bold | data type=string; lov=STATIC
Valid values: normal bold
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | fontSize | integer | Yes | 10 | data type=integer; maxLen=32767
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | fontColor | string | Yes | #000000 | data type=string; maxLen=255
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | backgroundColor | string | Yes | #EEEEEE | data type=string; maxLen=255
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

Copy
columnHeadings {
 font: helvetica
 fontWeight: normal
 fontSize: 42
 fontColor: value
 backgroundColor: value
}

messages

 | Property | Type | Required | Default Value | Details

 | whenNoDataFound | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReporttype = classicReporttype = tabformtype = charttype = interactiveGridtype = cardstype supports NO_DATA_FOUND_MESSAGE and display = report

 | whenMoreDataFound | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReporttype = classicReporttype = tabform

 | noDataFoundIcon | string | No | | data type=string; maxLen=4000
Applies whentype = cards and whenNoDataFound is settype supports NO_DATA_FOUND_ICON and type supports NO_DATA_FOUND_MESSAGE and display = report and whenNoDataFound is set

Copy
messages {
 whenNoDataFound: ```
 value
 ```
 whenMoreDataFound: ```
 value
 ```
 noDataFoundIcon: value
}

subtitle

 | Property | Type | Required | Default Value | Details

 | advancedFormatting | boolean | Yes | false | data type=boolean
Applies whentype = cards

 | column | string | No | | data type=string; maxLen=32767
Applies whentype = cards and advancedFormatting = false

 | htmlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = cards and advancedFormatting = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype = cards and advancedFormatting = false

Copy
subtitle {
 advancedFormatting: false
 column: value
 htmlExpression: ```html
 value
 ```
 cssClasses: [
 value
 value
 ]
}

toolbar

 | Property | Type | Required | Default Value | Details

 | show | boolean | Yes | true | data type=boolean
Applies whentype = interactiveGrid

 | controls | array of enums | No | | data type=string; lov=STATIC
Valid values: searchCol searchField actionsMenu resetButton saveButton
Applies whentype = interactiveGrid and show = true

 | addButtonLabel | string | No | | data type=string; maxLen=255
Applies whentype = interactiveGrid and show = true and enabled = true and allowedOperations = add

Copy
toolbar {
 show: false
 controls: [
 searchCol
 searchField
 ]
 addButtonLabel: value
}

breakFormatting

 | Property | Type | Required | Default Value | Details

 | reportSumLabel | string | No | | data type=string; maxLen=255
Applies whentype = classicReporttype = tabform

 | breakColumns | enum | No | | data type=string; lov=STATIC
Valid values: col1 cols1-2 cols1-3
Applies whentype = classicReporttype = tabform

 | style | enum | Yes | default | data type=string; lov=STATIC
Valid values: repeatHeadings default
Applies whentype = classicReport and breakColumns is settype = tabform and breakColumns is set

 | repeatHeadingFormat | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = classicReport and breakColumns is set and style = repeatHeadingstype = tabform and breakColumns is set and style = repeatHeadings

 | reportBreakFormat | string | No | | data type=string; maxLen=2000
Applies whentype = classicReport and breakColumns is settype = tabform and breakColumns is set

 | beforeRow | string | No | | data type=string; maxLen=2000
Applies whentype = classicReport and breakColumns is settype = tabform and breakColumns is set

 | columnBreakFormat | string | No | | data type=string; maxLen=2000
Applies whentype = classicReport and breakColumns is settype = tabform and breakColumns is set

 | afterRow | string | No | | data type=string; maxLen=2000
Applies whentype = classicReport and breakColumns is settype = tabform and breakColumns is set

Copy
breakFormatting {
 reportSumLabel: value
 breakColumns: col1
 style: repeatHeadings
 repeatHeadingFormat: ```
 value
 ```
 reportBreakFormat: value
 beforeRow: value
 columnBreakFormat: value
 afterRow: value
}

dataCursor

 | Property | Type | Required | Default Value | Details

 | cursor | enum | Yes | auto | data type=string; lov=STATIC
Valid values: auto true false
Applies whentype = chart

 | behavior | enum | Yes | auto | data type=string; lov=STATIC
Valid values: auto smooth snap
Applies whentype = chart and cursor in (auto)type = chart and cursor in (true)

 | dimOnHover | boolean | Yes | dim | data type=boolean
Applies whentype = chart

Copy
dataCursor {
 cursor: auto
 behavior: auto
 dimOnHover: false
}

columns

 | Property | Type | Required | Default Value | Details

 | font | enum | Yes | helvetica | data type=string; lov=STATIC
Valid values: helvetica times courier
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | fontWeight | enum | Yes | normal | data type=string; lov=STATIC
Valid values: normal bold
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | fontSize | integer | Yes | 10 | data type=integer; maxLen=32767
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | fontColor | string | Yes | #000000 | data type=string; maxLen=255
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | backgroundColor | string | Yes | #FFFFFF | data type=string; maxLen=255
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | widthUnits | enum | Yes | percent | data type=string; lov=STATIC
Valid values: percent point
Applies whentype = classicReport and enabled = truetype = tabform and enabled = true

Copy
columns {
 font: helvetica
 fontWeight: normal
 fontSize: 42
 fontColor: value
 backgroundColor: value
 widthUnits: percent
}

body

 | Property | Type | Required | Default Value | Details

 | advancedFormatting | boolean | Yes | false | data type=boolean
Applies whentype = cards

 | column | string | No | | data type=string; maxLen=32767
Applies whentype = cards and advancedFormatting = false

 | htmlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = cards and advancedFormatting = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype = cards and advancedFormatting = false

Copy
body {
 advancedFormatting: false
 column: value
 htmlExpression: ```html
 value
 ```
 cssClasses: [
 value
 value
 ]
}

enableUsersTo

 | Property | Type | Required | Default Value | Details

 | savePublicReport | boolean | Yes | false | data type=boolean
Applies whentype = interactiveGrid

 | savePublicReportAuthorization | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser
Applies whentype = interactiveGrid and savePublicReport = true

 | flashback | boolean | Yes | true | data type=boolean
Applies whentype = interactiveGrid

 | defineChartView | boolean | Yes | true | data type=boolean
Applies whentype = interactiveGrid

 | download | boolean | Yes | true | data type=boolean
Applies whentype = interactiveGrid

Copy
enableUsersTo {
 savePublicReport: false
 savePublicReportAuthorization: mustNotBePublicUser
 flashback: false
 defineChartView: false
 download: false
}

multiSeriesChartData

 | Property | Type | Required | Default Value | Details

 | fillGapsInChartData | boolean | Yes | true | data type=boolean
Applies whentype = chart

 | sortOrder | enum | Yes | labelAsc | data type=string; lov=STATIC
Valid values: valueAsc valueDesc labelAsc labelDesc
Applies whentype = chart and fillGapsInChartData = true

 | renderGapAsZero | boolean | Yes | true | data type=boolean
Applies whentype = chart and type in (line) and fillGapsInChartData = truetype = chart and type in (lineWithArea) and fillGapsInChartData = truetype = chart and type in (area) and fillGapsInChartData = truetype = chart and type in (scatter) and fillGapsInChartData = truetype = chart and type in (bar) and fillGapsInChartData = truetype = chart and type in (combination) and fillGapsInChartData = true

Copy
multiSeriesChartData {
 fillGapsInChartData: false
 sortOrder: valueAsc
 renderGapAsZero: false
}

boundingBox

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: staticValues sqlQuery
Applies whentype = map

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = map and type = sqlQuery

 | geometryColumnDataType | enum | Yes | sdoGeometry | data type=string; lov=STATIC
Valid values: sdoGeometry longitudeLatitude
Applies whentype = map and type = sqlQuery

 | minLongitude | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and type = sqlQuery and geometryColumnDataType = longitudeLatitude

 | minLatitude | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and type = sqlQuery and geometryColumnDataType = longitudeLatitude

 | maxLongitude | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and type = sqlQuery and geometryColumnDataType = longitudeLatitude

 | maxLatitude | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and type = sqlQuery and geometryColumnDataType = longitudeLatitude

 | geometryColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and type = sqlQuery and geometryColumnDataType = sdoGeometry

 | minLongitude | string | Yes | | data type=string; maxLen=128
Applies whentype = map and type = staticValues

 | minLatitude | string | Yes | | data type=string; maxLen=128
Applies whentype = map and type = staticValues

 | maxLongitude | string | Yes | | data type=string; maxLen=128
Applies whentype = map and type = staticValues

 | maxLatitude | string | Yes | | data type=string; maxLen=128
Applies whentype = map and type = staticValues

 | currentBoundsItem | string | No | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype = map

Copy
boundingBox {
 type: staticValues
 sqlQuery: ```sql
 value
 ```
 geometryColumnDataType: sdoGeometry
 minLongitude: value
 minLatitude: value
 maxLongitude: value
 maxLatitude: value
 geometryColumn: value
 currentBoundsItem: value
}

pageFooter

 | Property | Type | Required | Default Value | Details

 | font | enum | Yes | helvetica | data type=string; lov=STATIC
Valid values: helvetica times courier
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | fontWeight | enum | Yes | normal | data type=string; lov=STATIC
Valid values: normal bold
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | fontSize | integer | Yes | 12 | data type=integer; maxLen=32767
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | fontColor | string | Yes | #000000 | data type=string; maxLen=255
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | alignment | enum | Yes | center | data type=string; lov=STATIC
Valid values: start center end
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

 | pageFooterText | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (excel)type = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats in (pdf)type = classicReport and enabled = truetype = tabform and enabled = truetype = interactiveGrid and download = true and formats in (excel)type = interactiveGrid and download = true and formats in (pdf)

Copy
pageFooter {
 font: helvetica
 fontWeight: normal
 fontSize: 42
 fontColor: value
 alignment: start
 pageFooterText: ```
 value
 ```
}

secondaryBody

 | Property | Type | Required | Default Value | Details

 | advancedFormatting | boolean | Yes | false | data type=boolean
Applies whentype = cards

 | column | string | No | | data type=string; maxLen=32767
Applies whentype = cards and advancedFormatting = false

 | htmlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = cards and advancedFormatting = true

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype = cards and advancedFormatting = false

Copy
secondaryBody {
 advancedFormatting: false
 column: value
 htmlExpression: ```html
 value
 ```
 cssClasses: [
 value
 value
 ]
}

settings

 | Property | Type | Required | Default Value | Details

 | timeAxisType | enum | No | | data type=string; lov=STATIC
Valid values: auto disabled enabled mixedFrequency skipGaps
Applies whentype = chart and type in (area)type = chart and type in (bar)type = chart and type in (line)type = chart and type in (lineWithArea)type = chart and type in (stock)type = chart and type in (boxPlot)type = chart and type in (combination)

 | zoomAndScroll | enum | Yes | false | data type=string; lov=STATIC
Valid values: false delayed delayedScrollOnly live liveScrollOnly
Applies whentype = chart

Specify the zoom and scroll behavior of the chart. Live behavior means that the chart will be updated continuously as it is being manipulated,
 while Delayed means that the update will wait until the zoom/scroll action is done. While Live zoom and scroll provides the best end user experience, no guarantees are made
 about the rendering performance or usability for large data sets or slow client environments. If performance is an issue, Delayed zoom and scroll should be used instead.

 | zoomDirection | enum | Yes | bothAxes | data type=string; lov=STATIC
Valid values: bothAxes xAxis yAxis
Applies whentype = chart and type in (bubble)type = chart and type in (scatter)

 | initialZooming | enum | Yes | none | data type=string; lov=STATIC
Valid values: first last none
Applies whentype = chart and type in (bar)type = chart and type in (line)type = chart and type in (area)type = chart and type in (lineWithArea)type = chart and type in (combination)type = chart and type in (stock)

 | showHorizontalGrid | enum | Yes | auto | data type=string; lov=STATIC
Valid values: auto true false
Applies whentype = chart and type = gantt

 | showVerticalGrid | enum | Yes | auto | data type=string; lov=STATIC
Valid values: auto true false
Applies whentype = chart and type = gantt

 | showRowAxis | boolean | Yes | on | data type=boolean
Applies whentype = chart and type = gantt

 | axisPosition | enum | Yes | top | data type=string; lov=STATIC
Valid values: top bottom
Applies whentype = chart and type = gantt

 | pieSelectionEffect | enum | Yes | highlight | data type=string; lov=STATIC
Valid values: explode highlightAndExplode highlight
Applies whentype = chart and type in (pie)type = chart and type in (donut)

 | renderAs | enum | Yes | candlestick | data type=string; lov=STATIC
Valid values: area bar candlestick line lineWithArea
Applies whentype = chart and type = stock

Copy
settings {
 timeAxisType: auto
 zoomAndScroll: false
 zoomDirection: bothAxes
 initialZooming: first
 showHorizontalGrid: auto
 showVerticalGrid: auto
 showRowAxis: false
 axisPosition: top
 pieSelectionEffect: explode
 renderAs: area
}

download

 | Property | Type | Required | Default Value | Details

 | authorization | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser
Applies whentype = interactiveGrid and download = truetype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true

 | formats | array of enums | No | | data type=string; lov=STATIC
Valid values: csv html pdf excel
Applies whentype = interactiveGrid and download = true

 | sendAsEmail | boolean | Yes | true | data type=boolean
Applies whentype = interactiveGrid and download = truetype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true

 | csvSeparator | string | No | | data type=string; maxLen=2
Applies whentype = classicReport and csvExportEnabled = truetype = tabform and csvExportEnabled = truetype = interactiveGrid and download = true and formats = csvtype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats = csv

 | csvEnclosedBy | string | No | | data type=string; maxLen=1
Applies whentype = classicReport and csvExportEnabled = truetype = tabform and csvExportEnabled = truetype = interactiveGrid and download = true and formats = csvtype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats = csv

 | csvExportEnabled | boolean | Yes | false | data type=boolean
Applies whentype = classicReporttype = tabform

 | filename | string | No | | data type=string; maxLen=255
Applies whentype = classicReport and csvExportEnabled = truetype = tabform and csvExportEnabled = truetype = interactiveGrid and download = truetype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true

 | supplementalText | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = classicReporttype = tabformtype = interactiveGrid and download = true and formats is settype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true and formats is set

 | linkText | string | Yes | Download | data type=string; maxLen=255
Applies whentype = classicReport and csvExportEnabled = truetype = tabform and csvExportEnabled = true

 | formats | array of enums | Yes | CSV:HTML:XLSX:PDF | data type=string; lov=STATIC
Valid values: csv html excel pdf
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true

Copy
download {
 authorization: mustNotBePublicUser
 sendAsEmail: false
 csvSeparator: value
 csvEnclosedBy: value
 csvExportEnabled: false
 filename: value
 supplementalText: ```
 value
 ```
 linkText: value
 formats: [
 csv
 html
 ]
}

componentAdvanced

 | Property | Type | Required | Default Value | Details

 | stripHtml | boolean | Yes | false | data type=boolean
Applies whentype = classicReporttype = tabform

 | sortNulls | enum | Yes | last | data type=string; lov=STATIC
Valid values: first last
Applies whentype = classicReporttype = tabform

 | customSvgStyles | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = map

 | oracleTextIndexColumn | string | No | | data type=string; maxLen=32767
Applies whentype = interactiveReporttype = interactiveGrid

 | emailFromAddress | string | No | | data type=string; maxLen=255
Applies whentype = interactiveReporttype = interactiveGrid

 | initJavaScriptFunction | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = charttype = interactiveGridtype = cardstype supports INIT_JAVASCRIPT_CODE
Enter a JavaScript function that takes a configuration object for the Interactive Grid, modifies the object, and returns it. This allows advanced customization of the Interactive Grid appearance, features, and behavior including toolbar, menus, and actions.

 | regionAlias | string | No | | data type=string; maxLen=255
Applies whentype = interactiveReport

 | reportIdItem | string | No | | data type=string; maxLen=255; textCase=UPPER
Applies whentype = interactiveReport

 | maxRowsPerPageInSelector | string | No | | data type=string; maxLen=4000
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and rowsPerPage = truetype = interactiveReport and includeSearchBar = true and rowsPerPageSelector = true

Copy
componentAdvanced {
 stripHtml: false
 sortNulls: first
 customSvgStyles: ```
 value
 ```
 oracleTextIndexColumn: value
 emailFromAddress: value
 initJavaScriptFunction: ```javascript-browser
 value
 ```
 regionAlias: value
 reportIdItem: value
 maxRowsPerPageInSelector: value
}

singleRowView

 | Property | Type | Required | Default Value | Details

 | excludeNullValues | boolean | Yes | false | data type=boolean
Applies whentype = interactiveReport and linkColumn = singleRowView

 | onlyDisplayedColumns | boolean | Yes | false | data type=boolean
Applies whentype = interactiveReport and linkColumn = singleRowView

Copy
singleRowView {
 excludeNullValues: false
 onlyDisplayedColumns: false
}

iconAndBadge

 | Property | Type | Required | Default Value | Details

 | iconSource | enum | No | | data type=string; lov=STATIC
Valid values: initials iconClass iconClassColumn imageUrl imageBlobColumn
Applies whentype = cards

 | iconColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = cards and iconSource in (initials)type = cards and iconSource in (iconClassColumn)

 | imageColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = cards and iconSource = imageBlobColumn

 | imageUrl | string | Yes | | data type=string; maxLen=4000
Applies whentype = cards and iconSource = imageUrl

 | iconCssClasses | string | No | | data type=string; maxLen=255
Applies whentype = cards and iconSource in (initials)type = cards and iconSource in (iconClassColumn)type = cards and iconSource in (imageBlobColumn)type = cards and iconSource in (imageUrl)

 | iconCssClasses | string | Yes | | data type=string; maxLen=255
Applies whentype = cards and iconSource = iconClass

 | iconPosition | enum | Yes | start | data type=string; lov=STATIC
Valid values: top start end
Applies whentype = cards and iconSource is set

 | iconDescription | string | No | | data type=string; maxLen=255
Applies whentype = cards and iconSource is set

 | badgeColumn | string | No | | data type=string; maxLen=32767
Applies whentype = cards

 | badgeLabel | string | No | | data type=string; maxLen=255
Applies whentype = cards and badgeColumn is set

 | badgeCssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype = cards and badgeColumn is set

Copy
iconAndBadge {
 iconSource: initials
 iconColumn: value
 imageColumn: value
 imageUrl: value
 iconCssClasses: value
 iconPosition: top
 iconDescription: value
 badgeColumn: value
 badgeLabel: value
 badgeCssClasses: [
 value
 value
 ]
}

heading

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | customHeadings | data type=string; lov=STATIC
Valid values: columnNames columnNamesInitcap customHeadings plsqlFunctionBody none
Applies whentype = classicReporttype = tabformtype supports COLUMN_HEADING

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = classicReport and type = plsqlFunctionBodytype = tabform and type = plsqlFunctionBodytype supports COLUMN_HEADING and type = plsqlFunctionBody

 | fixedTo | enum | Yes | page | data type=string; lov=STATIC
Valid values: none region page
Applies whentype = interactiveReporttype = interactiveGrid

 | fixedReportHeight | integer | Yes | | data type=integer; maxLen=32767
Applies whentype = interactiveGrid and fixedTo = region

 | maxReportHeight | integer | Yes | | data type=integer; maxLen=32767
Applies whentype = interactiveReport and fixedTo = region

Copy
heading {
 type: columnNames
 plsqlFunctionBody: ```plsql
 value
 ```
 fixedTo: none
 fixedReportHeight: 42
 maxReportHeight: 42
}

iconView

 | Property | Type | Required | Default Value | Details

 | show | boolean | Yes | false | data type=boolean
Applies whentype = interactiveReporttype = interactiveGrid
Specify whether the Icon View is enabled. Selecting On adds a View Icons icon to the Search bar for interactive reports, or to the interactive grid View button, enabling users to access this view.

 | custom | boolean | Yes | false | data type=boolean
Applies whentype = interactiveReport and show = truetype = interactiveGrid and show = true

 | customIcon | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = interactiveGrid and show = true and custom = true

 | iconType | enum | Yes | iconCssClasses | data type=string; lov=STATIC
Valid values: imageInUrl iconCssClasses
Applies whentype = interactiveGrid and show = true and custom = false

 | iconUrl | string | Yes | | data type=string; maxLen=32767
Applies whentype = interactiveGrid and show = true and custom = false and iconType = imageInUrl

 | icon | string | Yes | | data type=string; maxLen=32767
Applies whentype = interactiveGrid and show = true and custom = false and iconType = iconCssClasses

 | iconAttributes | string | No | | data type=string; maxLen=255
Applies whentype = interactiveGrid and show = true and custom = false and iconType = imageInUrl

 | linkTarget | complex | No | | data type=complex; maxLen=32767
Applies whentype = interactiveGrid and show = true

 | linkAttributes | string | No | | data type=string; maxLen=255
Applies whentype = interactiveGrid and show = true and linkTarget is set and custom = false

 | labelColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = interactiveGrid and show = true and custom = false

 | columnsPerRow | enum | Yes | 6 | data type=string; lov=STATIC
Valid values: 1 2 3 4 5 6 7 8 9
Applies whentype = interactiveReport and show = true

 | linkColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = interactiveReport and show = true and custom = false

 | imageSourceColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = interactiveReport and show = true and custom = false

 | labelColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = interactiveReport and show = true and custom = false

 | imageAttributes | string | No | | data type=string; maxLen=512
Applies whentype = interactiveReport and show = true and custom = false

 | htmlAltText | string | No | | data type=string; maxLen=512
Applies whentype = interactiveReport and show = true and custom = false

 | htmlTitleText | string | No | | data type=string; maxLen=512
Applies whentype = interactiveReport and show = true and custom = false

 | customLink | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and show = true and custom = true

Copy
iconView {
 show: false
 custom: false
 customIcon: ```html
 value
 ```
 iconType: imageInUrl
 iconUrl: value
 icon: value
 iconAttributes: value
 linkTarget: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 linkAttributes: value
 labelColumn: value
 columnsPerRow: "1"
 linkColumn: value
 imageSourceColumn: value
 imageAttributes: value
 htmlAltText: value
 htmlTitleText: value
 customLink: ```
 value
 ```
}

overview

 | Property | Type | Required | Default Value | Details

 | show | boolean | Yes | on | data type=boolean
Applies whentype = chart and type in (area)type = chart and type in (bar)type = chart and type in (line)type = chart and type in (stock)type = chart and type in (boxPlot)type = chart and type in (lineWithArea)type = chart and type in (combination)

 | height | string | No | | data type=string; maxLen=5
Applies whentype = chart and type in (area) and show = ontype = chart and type in (bar) and show = ontype = chart and type in (line) and show = ontype = chart and type in (stock) and show = ontype = chart and type in (boxPlot) and show = ontype = chart and type in (lineWithArea) and show = ontype = chart and type in (combination) and show = on

Copy
overview {
 show: false
 height: value
}

legend

 | Property | Type | Required | Default Value | Details

 | show | boolean | Yes | true | data type=boolean
Applies whentype = map

 | title | string | No | | data type=string; maxLen=255
Applies whentype = map and show = truetype = chart and show = on
Specify the title of the legend.

 | position | enum | Yes | end | data type=string; lov=STATIC
Valid values: start end selector
Applies whentype = map and show = true

 | selector | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and show = true and position = selector

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype = map and show = true

 | show | boolean | Yes | on | data type=boolean
Applies whentype = chart

 | position | enum | Yes | auto | data type=string; lov=STATIC
Valid values: auto start end top bottom
Applies whentype = chart and show = on

 | hideAndShowBehavior | enum | Yes | rescale | data type=string; lov=STATIC
Valid values: none rescale noRescaling
Applies whentype = chart and show = on

 | fontFamily | enum | No | | data type=string; lov=STATIC
Valid values: arial arialBlack bookman comicSansMs courier courierNew garamond georgia helvetica impact palatino times timesNewRoman trebuchetMs verdana
Applies whentype = chart and show = on

 | fontStyle | enum | No | | data type=string; lov=STATIC
Valid values: normal italic oblique
Applies whentype = chart and show = on

 | fontSize | enum | No | | data type=string; lov=STATIC
Valid values: 8 10 12 14 16 18 20 22
Applies whentype = chart and show = on

 | fontColor | string | No | | data type=string; maxLen=255
Applies whentype = chart and show = on

Copy
legend {
 show: false
 title: value
 position: start
 selector: value
 cssClasses: [
 value
 value
 ]
 hideAndShowBehavior: none
 fontFamily: arial
 fontStyle: normal
 fontSize: "8"
 fontColor: value
}

printing

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean
Applies whentype = classicReporttype = tabform

Copy
printing {
 enabled: false
}

value

 | Property | Type | Required | Default Value | Details

 | pieChartOtherThreshold | number | Yes | 0 | data type=number; maxLen=22
Applies whentype = chart and type in (pie)type = chart and type in (donut)

 | min | integer | No | | data type=integer; maxLen=32767
Applies whentype = chart and type in (pie)type = chart and type in (donut)

 | show | boolean | Yes | true | data type=boolean
Applies whentype = chart and type = statusMeterGauge

 | valueType | enum | Yes | number | data type=string; lov=STATIC
Valid values: number percent
Applies whentype = chart and type = statusMeterGauge

 | position | enum | Yes | auto | data type=string; lov=STATIC
Valid values: auto center insideIndicatorEdge outsideIndicatorEdge outsidePlotArea withLabel
Applies whentype = chart and type = statusMeterGauge

 | format | enum | No | | data type=string; lov=STATIC
Valid values: dateShort dateMedium dateLong dateFull timeShort timeMedium timeLong timeFull datetimeShort datetimeMedium datetimeLong datetimeFull decimal currency percent
Applies whentype = chart and type in (statusMeterGauge)type = chart and type in (funnel)type = chart and type in (pyramid)type = chart and type in (pie)type = chart and type in (donut)

Specify the type of formatting to be applied to the value on the chart.
 The formats Decimal,Percent or Currency only apply to numeric values.
 The Date,Time and DateTime formats will only apply to values of that data type on the chart.

 | decimalPlaces | integer | No | | data type=integer; maxLen=32767
Applies whentype = chart and type in (statusMeterGauge) and format in (decimal)type = chart and type in (statusMeterGauge) and format in (currency)type = chart and type in (statusMeterGauge) and format in (percent)type = chart and type in (statusMeterGauge) and type in (funnel) and format in (decimal)type = chart and type in (statusMeterGauge) and type in (funnel) and format in (currency)type = chart and type in (statusMeterGauge) and type in (funnel) and format in (percent)type = chart and type in (statusMeterGauge) and type in (pyramid) and format in (decimal)type = chart and type in (statusMeterGauge) and type in (pyramid) and format in (currency)type = chart and type in (statusMeterGauge) and type in (pyramid) and format in (percent)type = chart and type in (statusMeterGauge) and type in (pie) and format in (decimal)type = chart and type in (statusMeterGauge) and type in (pie) and format in (currency)type = chart and type in (statusMeterGauge) and type in (pie) and format in (percent)type = chart and type in (statusMeterGauge) and type in (donut) and format in (decimal)type = chart and type in (statusMeterGauge) and type in (donut) and format in (currency)type = chart and type in (statusMeterGauge) and type in (donut) and format in (percent)type = chart and type in (funnel) and type in (statusMeterGauge) and format in (decimal)type = chart and type in (funnel) and type in (statusMeterGauge) and format in (currency)type = chart and type in (funnel) and type in (statusMeterGauge) and format in (percent)type = chart and type in (funnel) and format in (decimal)type = chart and type in (funnel) and format in (currency)type = chart and type in (funnel) and format in (percent)type = chart and type in (funnel) and type in (pyramid) and format in (decimal)type = chart and type in (funnel) and type in (pyramid) and format in (currency)type = chart and type in (funnel) and type in (pyramid) and format in (percent)type = chart and type in (funnel) and type in (pie) and format in (decimal)type = chart and type in (funnel) and type in (pie) and format in (currency)type = chart and type in (funnel) and type in (pie) and format in (percent)type = chart and type in (funnel) and type in (donut) and format in (decimal)type = chart and type in (funnel) and type in (donut) and format in (currency)type = chart and type in (funnel) and type in (donut) and format in (percent)type = chart and type in (pyramid) and type in (statusMeterGauge) and format in (decimal)type = chart and type in (pyramid) and type in (statusMeterGauge) and format in (currency)type = chart and type in (pyramid) and type in (statusMeterGauge) and format in (percent)type = chart and type in (pyramid) and type in (funnel) and format in (decimal)type = chart and type in (pyramid) and type in (funnel) and format in (currency)type = chart and type in (pyramid) and type in (funnel) and format in (percent)type = chart and type in (pyramid) and format in (decimal)type = chart and type in (pyramid) and format in (currency)type = chart and type in (pyramid) and format in (percent)type = chart and type in (pyramid) and type in (pie) and format in (decimal)type = chart and type in (pyramid) and type in (pie) and format in (currency)type = chart and type in (pyramid) and type in (pie) and format in (percent)type = chart and type in (pyramid) and type in (donut) and format in (decimal)type = chart and type in (pyramid) and type in (donut) and format in (currency)type = chart and type in (pyramid) and type in (donut) and format in (percent)type = chart and type in (pie) and type in (statusMeterGauge) and format in (decimal)type = chart and type in (pie) and type in (statusMeterGauge) and format in (currency)type = chart and type in (pie) and type in (statusMeterGauge) and format in (percent)type = chart and type in (pie) and type in (funnel) and format in (decimal)type = chart and type in (pie) and type in (funnel) and format in (currency)type = chart and type in (pie) and type in (funnel) and format in (percent)type = chart and type in (pie) and type in (pyramid) and format in (decimal)type = chart and type in (pie) and type in (pyramid) and format in (currency)type = chart and type in (pie) and type in (pyramid) and format in (percent)type = chart and type in (pie) and format in (decimal)type = chart and type in (pie) and format in (currency)type = chart and type in (pie) and format in (percent)type = chart and type in (pie) and type in (donut) and format in (decimal)type = chart and type in (pie) and type in (donut) and format in (currency)type = chart and type in (pie) and type in (donut) and format in (percent)type = chart and type in (donut) and type in (statusMeterGauge) and format in (decimal)type = chart and type in (donut) and type in (statusMeterGauge) and format in (currency)type = chart and type in (donut) and type in (statusMeterGauge) and format in (percent)type = chart and type in (donut) and type in (funnel) and format in (decimal)type = chart and type in (donut) and type in (funnel) and format in (currency)type = chart and type in (donut) and type in (funnel) and format in (percent)type = chart and type in (donut) and type in (pyramid) and format in (decimal)type = chart and type in (donut) and type in (pyramid) and format in (currency)type = chart and type in (donut) and type in (pyramid) and format in (percent)type = chart and type in (donut) and type in (pie) and format in (decimal)type = chart and type in (donut) and type in (pie) and format in (currency)type = chart and type in (donut) and type in (pie) and format in (percent)type = chart and type in (donut) and format in (decimal)type = chart and type in (donut) and format in (currency)type = chart and type in (donut) and format in (percent)
Specify the number of decimal places to be applied to the numeric value on the chart.

 | currency | string | No | | data type=string; maxLen=128
Applies whentype = chart and type in (statusMeterGauge) and format = currencytype = chart and type in (statusMeterGauge) and type in (funnel) and format = currencytype = chart and type in (statusMeterGauge) and type in (pyramid) and format = currencytype = chart and type in (statusMeterGauge) and type in (pie) and format = currencytype = chart and type in (statusMeterGauge) and type in (donut) and format = currencytype = chart and type in (funnel) and type in (statusMeterGauge) and format = currencytype = chart and type in (funnel) and format = currencytype = chart and type in (funnel) and type in (pyramid) and format = currencytype = chart and type in (funnel) and type in (pie) and format = currencytype = chart and type in (funnel) and type in (donut) and format = currencytype = chart and type in (pyramid) and type in (statusMeterGauge) and format = currencytype = chart and type in (pyramid) and type in (funnel) and format = currencytype = chart and type in (pyramid) and format = currencytype = chart and type in (pyramid) and type in (pie) and format = currencytype = chart and type in (pyramid) and type in (donut) and format = currencytype = chart and type in (pie) and type in (statusMeterGauge) and format = currencytype = chart and type in (pie) and type in (funnel) and format = currencytype = chart and type in (pie) and type in (pyramid) and format = currencytype = chart and type in (pie) and format = currencytype = chart and type in (pie) and type in (donut) and format = currencytype = chart and type in (donut) and type in (statusMeterGauge) and format = currencytype = chart and type in (donut) and type in (funnel) and format = currencytype = chart and type in (donut) and type in (pyramid) and format = currencytype = chart and type in (donut) and type in (pie) and format = currencytype = chart and type in (donut) and format = currency

 | pattern | string | No | | data type=string; maxLen=30
Applies whentype = chart and type in (statusMeterGauge) and format in (decimal)type = chart and type in (statusMeterGauge) and format in (currency)type = chart and type in (statusMeterGauge) and format in (percent)type = chart and type in (statusMeterGauge) and type in (funnel) and format in (decimal)type = chart and type in (statusMeterGauge) and type in (funnel) and format in (currency)type = chart and type in (statusMeterGauge) and type in (funnel) and format in (percent)type = chart and type in (statusMeterGauge) and type in (pyramid) and format in (decimal)type = chart and type in (statusMeterGauge) and type in (pyramid) and format in (currency)type = chart and type in (statusMeterGauge) and type in (pyramid) and format in (percent)type = chart and type in (statusMeterGauge) and type in (pie) and format in (decimal)type = chart and type in (statusMeterGauge) and type in (pie) and format in (currency)type = chart and type in (statusMeterGauge) and type in (pie) and format in (percent)type = chart and type in (statusMeterGauge) and type in (donut) and format in (decimal)type = chart and type in (statusMeterGauge) and type in (donut) and format in (currency)type = chart and type in (statusMeterGauge) and type in (donut) and format in (percent)type = chart and type in (funnel) and type in (statusMeterGauge) and format in (decimal)type = chart and type in (funnel) and type in (statusMeterGauge) and format in (currency)type = chart and type in (funnel) and type in (statusMeterGauge) and format in (percent)type = chart and type in (funnel) and format in (decimal)type = chart and type in (funnel) and format in (currency)type = chart and type in (funnel) and format in (percent)type = chart and type in (funnel) and type in (pyramid) and format in (decimal)type = chart and type in (funnel) and type in (pyramid) and format in (currency)type = chart and type in (funnel) and type in (pyramid) and format in (percent)type = chart and type in (funnel) and type in (pie) and format in (decimal)type = chart and type in (funnel) and type in (pie) and format in (currency)type = chart and type in (funnel) and type in (pie) and format in (percent)type = chart and type in (funnel) and type in (donut) and format in (decimal)type = chart and type in (funnel) and type in (donut) and format in (currency)type = chart and type in (funnel) and type in (donut) and format in (percent)type = chart and type in (pyramid) and type in (statusMeterGauge) and format in (decimal)type = chart and type in (pyramid) and type in (statusMeterGauge) and format in (currency)type = chart and type in (pyramid) and type in (statusMeterGauge) and format in (percent)type = chart and type in (pyramid) and type in (funnel) and format in (decimal)type = chart and type in (pyramid) and type in (funnel) and format in (currency)type = chart and type in (pyramid) and type in (funnel) and format in (percent)type = chart and type in (pyramid) and format in (decimal)type = chart and type in (pyramid) and format in (currency)type = chart and type in (pyramid) and format in (percent)type = chart and type in (pyramid) and type in (pie) and format in (decimal)type = chart and type in (pyramid) and type in (pie) and format in (currency)type = chart and type in (pyramid) and type in (pie) and format in (percent)type = chart and type in (pyramid) and type in (donut) and format in (decimal)type = chart and type in (pyramid) and type in (donut) and format in (currency)type = chart and type in (pyramid) and type in (donut) and format in (percent)type = chart and type in (pie) and type in (statusMeterGauge) and format in (decimal)type = chart and type in (pie) and type in (statusMeterGauge) and format in (currency)type = chart and type in (pie) and type in (statusMeterGauge) and format in (percent)type = chart and type in (pie) and type in (funnel) and format in (decimal)type = chart and type in (pie) and type in (funnel) and format in (currency)type = chart and type in (pie) and type in (funnel) and format in (percent)type = chart and type in (pie) and type in (pyramid) and format in (decimal)type = chart and type in (pie) and type in (pyramid) and format in (currency)type = chart and type in (pie) and type in (pyramid) and format in (percent)type = chart and type in (pie) and format in (decimal)type = chart and type in (pie) and format in (currency)type = chart and type in (pie) and format in (percent)type = chart and type in (pie) and type in (donut) and format in (decimal)type = chart and type in (pie) and type in (donut) and format in (currency)type = chart and type in (pie) and type in (donut) and format in (percent)type = chart and type in (donut) and type in (statusMeterGauge) and format in (decimal)type = chart and type in (donut) and type in (statusMeterGauge) and format in (currency)type = chart and type in (donut) and type in (statusMeterGauge) and format in (percent)type = chart and type in (donut) and type in (funnel) and format in (decimal)type = chart and type in (donut) and type in (funnel) and format in (currency)type = chart and type in (donut) and type in (funnel) and format in (percent)type = chart and type in (donut) and type in (pyramid) and format in (decimal)type = chart and type in (donut) and type in (pyramid) and format in (currency)type = chart and type in (donut) and type in (pyramid) and format in (percent)type = chart and type in (donut) and type in (pie) and format in (decimal)type = chart and type in (donut) and type in (pie) and format in (currency)type = chart and type in (donut) and type in (pie) and format in (percent)type = chart and type in (donut) and format in (decimal)type = chart and type in (donut) and format in (currency)type = chart and type in (donut) and format in (percent)
Specify the numeric pattern to be applied to the numeric value on the chart.

 | formatScaling | enum | Yes | auto | data type=string; lov=STATIC
Valid values: none auto thousand million billion trillion quadrillion
Applies whentype = chart and type in (statusMeterGauge)type = chart and type in (funnel)type = chart and type in (pyramid)type = chart and type in (pie)type = chart and type in (donut)

Copy
value {
 pieChartOtherThreshold: 42
 min: 42
 show: false
 valueType: number
 position: auto
 format: dateShort
 decimalPlaces: 42
 currency: value
 pattern: value
 formatScaling: none
}

externalProcessing

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean
Applies whentype = classicReporttype = tabform

 | url | string | Yes | | data type=string; maxLen=2000
Applies whentype = classicReport and enabled = truetype = tabform and enabled = true

 | linkText | string | Yes | | data type=string; maxLen=2000
Applies whentype = classicReport and enabled = truetype = tabform and enabled = true

Copy
externalProcessing {
 enabled: false
 url: value
 linkText: value
}

genAI

 | Property | Type | Required | Default Value | Details

 | naturalLanguageSupport | boolean | Yes | false | data type=boolean
Applies whentype = interactiveReport

 | defaultSearchMode | enum | Yes | searchModeAI | data type=string; lov=STATIC
Valid values: searchModeRow searchModeAI
Applies whentype = interactiveReport and naturalLanguageSupport = true

 | reportContext | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = interactiveReport and naturalLanguageSupport = true

 | enabled | boolean | Yes | false | data type=boolean
Applies whentype supports AI_ENABLED

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whentype supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_ENABLED and enabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whentype supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_ENABLED and enabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype supports AI_SYSTEM_PROMPT and type supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_SYSTEM_PROMPT and type supports AI_ENABLED and enabled = true

 | welcomeMessage | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype supports AI_UI and type supports AI_ENABLED_ALWAYS and type supports AI_ENABLED and enabled = truetype supports AI_UI and type supports AI_ENABLED and enabled = true

Copy
genAI {
 naturalLanguageSupport: false
 defaultSearchMode: searchModeRow
 reportContext: ```
 value
 ```
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
 welcomeMessage: ```html
 value
 ```
}

media

 | Property | Type | Required | Default Value | Details

 | advancedFormatting | boolean | Yes | false | data type=boolean
Applies whentype = cards

 | htmlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = cards and advancedFormatting = true

 | source | enum | No | | data type=string; lov=STATIC
Valid values: imageUrl urlColumn blobColumn
Applies whentype = cards and advancedFormatting = false

 | url | string | Yes | | data type=string; maxLen=4000
Applies whentype = cards and advancedFormatting = false and source = imageUrl

 | urlColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = cards and advancedFormatting = false and source = urlColumn

 | blobColumn | string | Yes | | data type=string; maxLen=32767
Applies whentype = cards and advancedFormatting = false and source = blobColumn

 | position | enum | Yes | body | data type=string; lov=STATIC
Valid values: first body background
Applies whentype = cards and advancedFormatting = false and source is set and advancedFormatting = true and htmlExpression is set

 | appearance | enum | No | | data type=string; lov=STATIC
Valid values: square widescreen
Applies whentype = cards and advancedFormatting = false and source is set

 | sizing | enum | Yes | fit | data type=string; lov=STATIC
Valid values: fit cover
Applies whentype = cards and advancedFormatting = false and source is set

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype = cards

 | imageDescription | string | No | | data type=string; maxLen=255
Applies whentype = cards and advancedFormatting = false and source is set

Copy
media {
 advancedFormatting: false
 htmlExpression: ```html
 value
 ```
 source: imageUrl
 url: value
 urlColumn: value
 blobColumn: value
 position: first
 appearance: square
 sizing: fit
 cssClasses: [
 value
 value
 ]
 imageDescription: value
}

attributes

 | Property | Type | Required | Default Value | Details

 | messagesPosition | enum | No | | data type=string; lov=STATIC
Valid values: above below selector
Applies whentype = map

 | messageSelector | string | Yes | | data type=string; maxLen=32767
Applies whentype = map and messagesPosition = selector

 | unitSystem | enum | Yes | metric | data type=string; lov=STATIC
Valid values: metric imperial deriveFromItem
Applies whentype = map

 | unitSystemItem | string | Yes | | data type=string; maxLen=32767; textCase=UPPER
Applies whentype = map and unitSystem = deriveFromItem

 | copyrightNotice | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype = map

Copy
attributes {
 messagesPosition: above
 messageSelector: value
 unitSystem: metric
 unitSystemItem: value
 copyrightNotice: ```html
 value
 ```
}

searchBar

 | Property | Type | Required | Default Value | Details

 | includeSearchBar | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport

 | searchField | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true

 | finderDropDown | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and searchField = true

 | reportsSelectList | boolean | Yes | TABS | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true

 | rowsPerPageSelector | boolean | Yes | false | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true

 | searchButtonLabel | string | No | | data type=string; maxLen=4000
Applies whentype = interactiveReport and includeSearchBar = true

Copy
searchBar {
 includeSearchBar: false
 searchField: false
 finderDropDown: false
 reportsSelectList: false
 rowsPerPageSelector: false
 searchButtonLabel: value
}

orderBy

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: staticValue item
Applies whentype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (propertyGraph)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (propertyGraph)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$)

 | orderByClause | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = staticValue and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = staticValue and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = staticValue and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = staticValue and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = staticValue and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = staticValue and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = staticValue and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = staticValue and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = staticValue and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = staticValue and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = staticValue and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = staticValue and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = staticValue and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = staticValue and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = staticValue and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = staticValue and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = staticValue and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = staticValue and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = staticValue and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = staticValue and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (tableView) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (tableView) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (tableView) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (tableView) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (functionBody) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in ($NULL$) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (tableView) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (tableView) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (tableView) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (tableView) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (sqlQuery) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (functionBody) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (functionBody) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (functionBody) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (functionBody) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in ($NULL$) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in ($NULL$) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in ($NULL$) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in ($NULL$) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = staticValue and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = staticValue and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = staticValue and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = staticValue and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = staticValue and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = staticValue and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = staticValue and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = staticValue and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = staticValue and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = staticValue and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = staticValue and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = staticValue and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = staticValue and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = staticValue and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = staticValue and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = staticValue and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = staticValue and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = staticValue and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = staticValue and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = staticValue and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = staticValue and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = staticValue and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = staticValue and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = staticValue and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue

 | item | complex | Yes | | data type=complex; maxLen=32767
Applies whentype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = item and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = item and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = item and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = item and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = item and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = item and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = item and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = item and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = item and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = item and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = item and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = item and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = item and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = item and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = item and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = item and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = item and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = item and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = item and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = item and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (tableView) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (tableView) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (tableView) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (tableView) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (propertyGraph) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (propertyGraph) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (propertyGraph) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (propertyGraph) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (sqlQuery) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (sqlQuery) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (sqlQuery) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (sqlQuery) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (functionBody) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (functionBody) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (functionBody) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (functionBody) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in ($NULL$) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in ($NULL$) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in ($NULL$) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in ($NULL$) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (tableView) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (tableView) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (tableView) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (tableView) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (propertyGraph) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (propertyGraph) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (propertyGraph) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (propertyGraph) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (sqlQuery) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (sqlQuery) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (sqlQuery) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (sqlQuery) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (functionBody) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (functionBody) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (functionBody) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (functionBody) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in ($NULL$) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in ($NULL$) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in ($NULL$) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in ($NULL$) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = item and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = item and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = item and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = item and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = item and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = item and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = item and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = item and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = item and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = item and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = item and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = item and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = item and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = item and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = item and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = item and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = item and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = item and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = item and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = item and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = item and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = item and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = item and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = item and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = item and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = item and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = item and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = item and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = item and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = item and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = item and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = item and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = item and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = item and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = item and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = item and location in (restEnabledSql) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = item and location in (restEnabledSql) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = item and location in (restEnabledSql) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = item and location in (restEnabledSql) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = item and location in (restEnabledSql)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = item and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = item and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = item and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = item and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = item and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = item and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = item and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = item and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = item and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = item and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = item and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = item and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = item and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = item and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = item and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = item and location in (localDatabase) and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = item and type in ($NULL$)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = item and location in (localDatabase) and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = item and location in (localDatabase) and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = item and location in (localDatabase) and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = item and location in (localDatabase)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = item and type in (tableView)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = item and type in (sqlQuery)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = item and type in (functionBody)type supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = item

 | orderByClause | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = staticValue and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = staticValue and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = staticValue and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = staticValue and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = staticValue and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (tableView) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (tableView) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (functionBody) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in ($NULL$) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = staticValue and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = staticValue and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = staticValue and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = staticValue and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = staticValue and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = staticValue and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = staticValue and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = staticValue and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = staticValue and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = staticValue and type = propertyGraph

 | item | complex | Yes | | data type=complex; maxLen=32767
Applies whentype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (tableView) and type = item and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (propertyGraph) and type = item and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (sqlQuery) and type = item and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in (functionBody) and type = item and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and type in ($NULL$) and type = item and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (tableView) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (propertyGraph) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (sqlQuery) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in (functionBody) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (localDatabase) and location in (restEnabledSql) and type in ($NULL$) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (tableView) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (propertyGraph) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (sqlQuery) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in (functionBody) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and location in (localDatabase) and type in ($NULL$) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = item and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (tableView) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = item and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (propertyGraph) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = item and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (sqlQuery) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = item and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in (functionBody) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = item and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (restEnabledSql) and type in ($NULL$) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (tableView) and type = item and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (propertyGraph) and type = item and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (sqlQuery) and type = item and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in (functionBody) and type = item and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (localDatabase) and type in ($NULL$) and type = item and location in (restEnabledSql) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = item and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (tableView) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = item and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (propertyGraph) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = item and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (sqlQuery) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = item and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in (functionBody) and type = item and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = item and location in (localDatabase) and type = propertyGraphtype supports ORDER_BY and type supports SOURCE_LOCATION and location in (sampleData) and location in (restEnabledSql) and type in ($NULL$) and type = item and type = propertyGraph

Copy
orderBy {
 type: staticValue
 orderByClause: ```sql
 value
 ```
 item: {
 itemName: value
 orderBys: [
 value
 value
 ]
 }
}

detailView

 | Property | Type | Required | Default Value | Details

 | show | boolean | Yes | false | data type=boolean
Applies whentype = interactiveReporttype = interactiveGrid
Specify whether the Detail View is enabled. Selecting On adds a View Details icon to the Search bar for interactive reports, or to the interactive grid View button, enabling users to access this view.

 | beforeRows | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and show = truetype = interactiveGrid and show = true

 | forEachRow | multiline string | Depends | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and show = truetype = interactiveGrid and show = true

Enter the body for report rows in the Detail View.

The following substitution strings are available:

&<COLUMN_NAME>. - substitution strings for column names.

&<COLUMN_NAME>_LABEL. - substitution strings for column labels.

&APEX$ROW_ID. - the record identifier for the row.

&APEX$ROW_INDEX. - the record display sequence number.

&APEX$ROW_STATE_CLASSES. - the record state such as is-inserted or is-deleted.

 | afterRows | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport and show = truetype = interactiveGrid and show = true

Copy
detailView {
 show: false
 beforeRows: ```html
 value
 ```
 forEachRow: ```html
 value
 ```
 afterRows: ```html
 value
 ```
}

actionsMenu

 | Property | Type | Required | Default Value | Details

 | includeActionsMenu | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true

 | filter | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | selectColumns | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | rowsPerPage | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | sort | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | controlBreak | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | highlight | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | compute | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | aggregate | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | chart | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | groupBy | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | pivot | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | flashback | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | saveReport | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | savePublicReport | boolean | Yes | false | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and saveReport = true

 | savePublicReportAuthorization | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and saveReport = true and savePublicReport = true

 | reset | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | help | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | download | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true

 | subscription | boolean | Yes | true | data type=boolean
Applies whentype = interactiveReport and includeSearchBar = true and includeActionsMenu = true and download = true

Copy
actionsMenu {
 includeActionsMenu: false
 filter: false
 selectColumns: false
 rowsPerPage: false
 sort: false
 controlBreak: false
 highlight: false
 compute: false
 aggregate: false
 chart: false
 groupBy: false
 pivot: false
 flashback: false
 saveReport: false
 savePublicReport: false
 savePublicReportAuthorization: mustNotBePublicUser
 reset: false
 help: false
 download: false
 subscription: false
}

animation

 | Property | Type | Required | Default Value | Details

 | onDisplay | enum | Yes | auto | data type=string; lov=STATIC
Valid values: auto alphaFade zoom none
Applies whentype = chart

 | onDataChange | enum | Yes | auto | data type=string; lov=STATIC
Valid values: auto slideToLeft slideToRight none
Applies whentype = chart

Copy
animation {
 onDisplay: auto
 onDataChange: auto
}

dataProfile

 | Property | Type | Required | Default Value | Details

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource supports HAS_ARRAY_COLUMNS

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whentype supports SOURCE_LOCATION and location = jsonDualityView and jsonDualityView supports HAS_ARRAY_COLUMNS

 | nestedRows | reference | No | | data type=reference; lov=COMPONENT; references=dataProfileColumn
Applies whentype supports SOURCE_LOCATION and location = jsonSource and jsonSource supports HAS_ARRAY_COLUMNS

Copy
dataProfile {
 nestedRows: @component
}

blobAttributes

 | Property | Type | Required | Default Value | Details

 | mimeTypeColumn | string | No | | data type=string; maxLen=32767
Applies whentype = cards and iconSource = imageBlobColumntype = cards and advancedFormatting = false and source = blobColumn

 | lastUpdatedColumn | string | No | | data type=string; maxLen=32767
Applies whentype = cards and iconSource = imageBlobColumntype = cards and advancedFormatting = false and source = blobColumn

Copy
blobAttributes {
 mimeTypeColumn: value
 lastUpdatedColumn: value
}

tooltip

 | Property | Type | Required | Default Value | Details

 | show | boolean | Yes | true | data type=boolean
Applies whentype = chart

 | showSeriesName | boolean | Yes | true | data type=boolean
Applies whentype = chart and show = true

 | showGroupName | boolean | Yes | true | data type=boolean
Applies whentype = chart and show = true

 | showValue | boolean | Yes | true | data type=boolean
Applies whentype = chart and show = true

 | showRow | boolean | Yes | true | data type=boolean
Applies whentype = chart and show = true and type = gantt

 | showLabel | boolean | Yes | true | data type=boolean
Applies whentype = chart and show = true and type = gantt

 | showStartDate | boolean | Yes | true | data type=boolean
Applies whentype = chart and show = true and type = gantt

 | showEndDate | boolean | Yes | true | data type=boolean
Applies whentype = chart and show = true and type = gantt

 | showProgress | boolean | Yes | true | data type=boolean
Applies whentype = chart and show = true and type = gantt

 | showBaseline | boolean | Yes | true | data type=boolean
Applies whentype = chart and show = true and type = gantt

Copy
tooltip {
 show: false
 showSeriesName: false
 showGroupName: false
 showValue: false
 showRow: false
 showLabel: false
 showStartDate: false
 showEndDate: false
 showProgress: false
 showBaseline: false
}

restSynchronization

 | Property | Type | Required | Default Value | Details

 | useLocalTable | boolean | Yes | false | data type=boolean
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNStype supports SOURCE_LOCATION and location = restSource and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNStype supports SOURCE_LOCATION and location = restSource and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED

Copy
restSynchronization {
 useLocalTable: false
}

externalFilterAndOrderBy

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$)

 | filter | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = truetype supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = truetype supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = truetype supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = truetype supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = truetype supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true

 | orderByType | enum | No | | data type=string; lov=STATIC
Valid values: staticValue item
Applies whentype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = truetype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = truetype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = truetype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = truetype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = truetype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true

 | orderBy | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whentype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = true and orderByType = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = true and orderByType = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = true and orderByType = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = true and orderByType = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = true and orderByType = staticValuetype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true and orderByType = staticValue

 | item | complex | Yes | | data type=complex; maxLen=4000
Applies whentype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = true and orderByType = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = true and orderByType = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = true and orderByType = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = true and orderByType = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = true and orderByType = itemtype supports ORDER_BY and type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true and orderByType = item

 | orderBy | multiline string | No | | data type=multiline string; maxLen=255
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = true and type in (interactiveGrid)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = true and type in (interactiveReport)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = true and type in (map)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in (false) and enabled = true and type in (form)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = true and type in (interactiveGrid)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = true and type in (interactiveReport)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = true and type in (map)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_SYNC_HAS_NO_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = true and type in (form)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = true and type in (interactiveGrid)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = true and type in (interactiveReport)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = true and type in (map)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in (false) and enabled = true and type in (form)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = true and type in (interactiveGrid)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = true and type in (interactiveReport)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = true and type in (map)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and restSource supports HAS_SYNC_ALL_ARRAY_COLUMNS and useLocalTable in ($NULL$) and enabled = true and type in (form)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = true and type in (interactiveGrid)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = true and type in (interactiveReport)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = true and type in (map)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in (false) and enabled = true and type in (form)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true and type in (interactiveGrid)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true and type in (interactiveReport)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true and type in (map)type supports SOURCE_LOCATION and location = restSource and restSource is set and restSource supports HAS_ARRAY_COLUMNS and nestedRows supports IS_SYNCED and useLocalTable in ($NULL$) and enabled = true and type in (form)

Copy
externalFilterAndOrderBy {
 enabled: false
 filter: ```
 value
 ```
 orderByType: staticValue
 orderBy: ```
 value
 ```
 item: {
 itemName: value
 orderBys: [
 value
 value
 ]
 }
}

advanced

 | Property | Type | Required | Default Value | Details

 | savedReportMappingIdentifier | string | No | | data type=string; maxLen=32767
Applies whentype = interactiveReporttype = interactiveGrid

 | htmlDomId | string | No | | data type=string; maxLen=255

Enter the DOM ID for this region. If defined, this is used as the ID for the region, using the substitution string #DOM_ID#, which can be useful if developing custom JavaScript behavior for the region. If this is not defined, the region generates an internal ID.

Note: The template must include the #DOM_ID# substitution string, in order for the region to utilize the DOM ID entered.

 | customAttributes | string | No | | data type=string; maxLen=2000
Applies whentype supports REGION_TEMPLATE
Enter the value substituted into region attributes. Region templates that contain the substitution string #REGION_ATTRIBUTES# are substituted with this value.

 | regionImage | string | No | | data type=string; maxLen=255
Applies whentype supports REGION_TEMPLATE and template supports NOT_REGION_IMAGE_URL

 | imageTagAttributes | string | No | | data type=string; maxLen=255
Applies whentype supports REGION_TEMPLATE and template supports NOT_REGION_IMAGE_URL and regionImage is set

 | staticId | string | Yes | | data type=string; maxLen=255

 | regionDisplaySelector | boolean | Yes | false | data type=boolean
Applies whentype supports REGION_TEMPLATE and template is set

 | excludeTitleFromTranslation | boolean | Yes | false | data type=boolean

 | schemaOverrideItem | string | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (classicReport)type in (interactiveReport)

Copy
advanced {
 savedReportMappingIdentifier: value
 htmlDomId: value
 customAttributes: value
 regionImage: value
 imageTagAttributes: value
 staticId: value
 regionDisplaySelector: false
 excludeTitleFromTranslation: false
 schemaOverrideItem: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = interactiveGrid

Use this attribute to enter help text for the interactive grid. The entered help text will display along with the default help content under Actions Menu help.

Copy
help {
 helpText: ```html
 value
 ```
}

localPostProcessing

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set and type = plsqlFunctionBody and language = javaScript-mle

 | orderByType | enum | No | | data type=string; lov=STATIC
Valid values: staticValue item
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set and type = whereOrderByClause

 | orderByClause | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set and type = whereOrderByClause and orderByType = staticValue

 | item | complex | Yes | | data type=complex; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set and type = whereOrderByClause and orderByType = item

 | orderByItem | complex | No | | data type=complex; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = restSource and restSource is set and type in (sqlQuery)type supports SOURCE_LOCATION and location = restSource and restSource is set and type in (plsqlFunctionBody)

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whentype supports SOURCE_LOCATION and location = jsonDualityView and jsonDualityView is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE_LOCATION and location = jsonDualityView and jsonDualityView is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = jsonDualityView and jsonDualityView is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE_LOCATION and location = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = jsonDualityView and jsonDualityView is set and type = plsqlFunctionBody and language = javaScript-mle

 | orderByType | enum | No | | data type=string; lov=STATIC
Valid values: staticValue item
Applies whentype supports SOURCE_LOCATION and location = jsonDualityView and jsonDualityView is set and type = whereOrderByClause

 | orderByClause | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whentype supports SOURCE_LOCATION and location = jsonDualityView and jsonDualityView is set and type = whereOrderByClause and orderByType = staticValue

 | item | complex | Yes | | data type=complex; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = jsonDualityView and jsonDualityView is set and type = whereOrderByClause and orderByType = item

 | orderByItem | complex | No | | data type=complex; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = jsonDualityView and jsonDualityView is set and type in (sqlQuery)type supports SOURCE_LOCATION and location = jsonDualityView and jsonDualityView is set and type in (plsqlFunctionBody)

 | type | enum | No | | data type=string; lov=STATIC
Valid values: whereOrderByClause sqlQuery plsqlFunctionBody
Applies whentype supports SOURCE_LOCATION and location = jsonSource and jsonSource is set

 | whereClause | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype supports SOURCE_LOCATION and location = jsonSource and jsonSource is set and type = whereOrderByClause

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = jsonSource and jsonSource is set and type = sqlQuery

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype supports SOURCE_LOCATION and location = jsonSource and jsonSource is set and type = plsqlFunctionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = jsonSource and jsonSource is set and type = plsqlFunctionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = jsonSource and jsonSource is set and type = plsqlFunctionBody and language = javaScript-mle

 | orderByType | enum | No | | data type=string; lov=STATIC
Valid values: staticValue item
Applies whentype supports SOURCE_LOCATION and location = jsonSource and jsonSource is set and type = whereOrderByClause

 | orderByClause | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whentype supports SOURCE_LOCATION and location = jsonSource and jsonSource is set and type = whereOrderByClause and orderByType = staticValue

 | item | complex | Yes | | data type=complex; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = jsonSource and jsonSource is set and type = whereOrderByClause and orderByType = item

 | orderByItem | complex | No | | data type=complex; maxLen=32767
Applies whentype supports SOURCE_LOCATION and location = jsonSource and jsonSource is set and type in (sqlQuery)type supports SOURCE_LOCATION and location = jsonSource and jsonSource is set and type in (plsqlFunctionBody)

Copy
localPostProcessing {
 type: whereOrderByClause
 whereClause: ```sql
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
 orderByType: staticValue
 orderByClause: ```sql
 value
 ```
 item: {
 itemName: value
 orderBys: [
 value
 value
 ]
 }
 orderByItem: {
 itemName: value
 orderBys: [
 value
 value
 ]
 }
}

autoRefresh

 | Property | Type | Required | Default Value | Details

 | interval | integer | No | | data type=integer; maxLen=32767
Applies whentype = chart

Copy
autoRefresh {
 interval: 42
}

remoteCache

 | Property | Type | Required | Default Value | Details

 | caching | enum | No | | data type=string; lov=STATIC
Valid values: allUsers user session
Applies whentype supports SOURCE_LOCATION and location = restEnabledSql

 | timeout | multiline string | Yes | | data type=multiline string; maxLen=255
Applies whentype supports SOURCE_LOCATION and location = restEnabledSql and caching is set

Copy
remoteCache {
 caching: allUsers
 timeout: ```
 value
 ```
}

layout

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | parentRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | slot | string | Yes | | data type=string; lov=SLOTS

 | startNewLayout | boolean | Yes | false | data type=boolean

 | startNewRow | boolean | Yes | true | data type=boolean
Applies whenstartNewLayout = false

 | rowCssClasses | array of strings | No | | data type=string; maxLen=255

 | column | string | No | | data type=string; lov=GRID_COLUMNS

 | newColumn | boolean | Yes | true | data type=boolean
Applies whenstartNewLayout = false and startNewRow = false

 | columnSpan | string | No | | data type=string; lov=GRID_COLUMNS

 | columnCssClasses | array of strings | No | | data type=string; maxLen=255

 | columnAttributes | array of strings | No | | data type=string; maxLen=255

Copy
layout {
 sequence: 42
 parentRegion: @component
 slot: value
 startNewLayout: false
 startNewRow: false
 rowCssClasses: [
 value
 value
 ]
 column: value
 newColumn: false
 columnSpan: value
 columnCssClasses: [
 value
 value
 ]
 columnAttributes: [
 value
 value
 ]
}

description

 | Property | Type | Required | Default Value | Details

 | description | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = interactiveReport
Enter a description for this Interactive Report.

Copy
description {
 description: ```
 value
 ```
}

appearance

 | Property | Type | Required | Default Value | Details

 | template | reference | No | | data type=reference; lov=COMPONENT; references=regionTemplate
Applies whentype supports REGION_TEMPLATE

 | templateOptions | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS
Applies whentype supports REGION_TEMPLATE and template is set

 | cssClasses | array of strings | No | | data type=string; maxLen=255
Applies whentype supports REGION_TEMPLATE and template is set
Enter classes to add to this component. You may add multiple classes by separating them with spaces.

 | icon | string | No | | data type=string; maxLen=255
Applies whentype supports REGION_TEMPLATE and template is set

 | renderComponents | enum | Yes | aboveContent | data type=string; lov=STATIC
Valid values: aboveContent belowContent
Applies whentype supports REGION_TEMPLATE

Copy
appearance {
 template: @component
 templateOptions: [
 value
 value
 ]
 cssClasses: [
 value
 value
 ]
 icon: value
 renderComponents: aboveContent
}

accessibility

 | Property | Type | Required | Default Value | Details

 | useLandmark | boolean | Yes | true | data type=boolean
Applies whentype supports REGION_TEMPLATE and template supports REGION_LANDMARK_ATTRIBUTES

 | landmarkType | enum | No | | data type=string; lov=STATIC
Valid values: banner complementary contentInfo form main navigation region search
Applies whentype supports REGION_TEMPLATE and template supports REGION_LANDMARK_ATTRIBUTES and useLandmark = true

 | landmarkLabel | string | No | | data type=string; maxLen=255
Applies whentype supports REGION_TEMPLATE and template supports REGION_LANDMARK_ATTRIBUTES and useLandmark = true

Copy
accessibility {
 useLandmark: false
 landmarkType: banner
 landmarkLabel: value
}

image

 | Property | Type | Required | Default Value | Details

 | fileUrl | string | No | | data type=string; maxLen=255
Applies whentype supports REGION_TEMPLATE and template supports REGION_IMAGEtype supports REGION_TEMPLATE and template supports REGION_IMAGE_URL

 | accessibleDescription | string | No | | data type=string; maxLen=255
Applies whentype supports REGION_TEMPLATE and template supports REGION_IMAGE_ALT_TEXT and template supports REGION_IMAGE and fileUrl is settype supports REGION_TEMPLATE and template supports REGION_IMAGE_ALT_TEXT and template supports REGION_IMAGE_URL and fileUrl is set

 | customAttributes | string | No | | data type=string; maxLen=255
Applies whentype supports REGION_TEMPLATE and template supports REGION_IMAGE_ATTRIBUTES and template supports REGION_IMAGE and fileUrl is settype supports REGION_TEMPLATE and template supports REGION_IMAGE_ATTRIBUTES and template supports REGION_IMAGE_URL and fileUrl is set

Copy
image {
 fileUrl: value
 accessibleDescription: value
 customAttributes: value
}

masterDetail

 | Property | Type | Required | Default Value | Details

 | masterRegion | reference | No | | data type=reference; lov=COMPONENT; references=region
Applies whentype = interactiveGrid

Copy
masterDetail {
 masterRegion: @component
}

headerAndFooter

 | Property | Type | Required | Default Value | Details

 | headerText | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype supports REGION_TEMPLATE
Enter HTML text displayed at the top of the region, before the #BODY# content.

 | footerText | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype supports REGION_TEMPLATE

Enter a region footer that displays directly after the body content, after #BODY# in the region template.
You may use shortcuts, as well as the substitution string #TIMING#, to display the time consumed to render the region.

For report regions you can use the following pagination substitution strings:

 #ROWS_FETCHED#
 Shows the number of rows fetched by the reporting engine (the page size). Use these substitution strings to display customized messages to the user.
 #TOTAL_ROWS#
 Displays the total number of rows that satisfy a SQL query used for a report. For example, Z in rows X - Y of Z
 #FIRST_ROW_FETCHED#
 The X in rows X - Y of Z
 #LAST_ROW_FETCHED#
 The Y in rows X - Y of Z

Copy
headerAndFooter {
 headerText: ```html
 value
 ```
 footerText: ```html
 value
 ```
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

readOnly

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never

Select a condition type that must be met in order for this region to render page items as read-only.
Not selecting a condition causes the page items to render normally.

Note: If you want a page item in this region (for example a search field) to always render as an enterable page item, independent of how this condition evaluates, then you should set the read only condition of that page item to "Never" to overwrite the region setting.

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
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (userPreference=value)type in (userPreference!=value)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
readOnly {
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

 | escapeSpecialChars | boolean | Yes | true | data type=boolean
Applies whentype supports ESCAPE_OUTPUT

Copy
security {
 authorizationScheme: mustNotBePublicUser
 escapeSpecialChars: false
}

serverCache

 | Property | Type | Required | Default Value | Details

 | caching | enum | Yes | false | data type=string; lov=STATIC
Valid values: false true cacheByUser cacheBySession

 | cacheTimeout | enum | Yes | 6Hours | data type=string; lov=STATIC
Valid values: 10Seconds 1Minute 10Minutes 30Minutes 1Hour 2Hours 3Hours 4Hours 6Hours 12Hours 1Day 2Days 3Days 4Days 1Week 2Weeks 4Weeks 10Weeks 1Year

 | dependsOnItems | array of strings | No | | data type=string; maxLen=4000; textCase=UPPER

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never
Select a condition type that must be met for the region to be cached.

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
Applies whentype in (item=value)type in (item!=value)type in (VALUE_OF_ITEM_IN_COND_1_EQ_COND_2)type in (VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2)type in (userPreference=value)type in (userPreference!=value)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemIsInColonDelimitedList)type in (itemIsNotInColonDelimitedList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype = textIsContainedInItem

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (textIsContainedInValue)type in (textIsNotContainedInValue)type in (text=value)type in (text!=value)

Copy
serverCache {
 caching: false
 cacheTimeout: "10Seconds"
 dependsOnItems: [
 value
 value
 ]
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

customization

 | Property | Type | Required | Default Value | Details

 | customizable | enum | Yes | false | data type=string; lov=STATIC
Valid values: false shownByDefault notShownByDefault

 | name | string | No | | data type=string; maxLen=255
Applies whencustomizable in (shownByDefault)customizable in (notShownByDefault)

Copy
customization {
 customizable: false
 name: value
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

rowSelection

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: focusOnly singleSelection multipleSelection
Applies whentype supports ROW_SELECTION and display = report

 | currentSelectionPageItem | string | No | | data type=string; maxLen=255; textCase=UPPER
Applies whentype supports ROW_SELECTION and display = report and type in (singleSelection)type supports ROW_SELECTION and display = report and type in (multipleSelection)

 | selectAllPageItem | string | No | | data type=string; maxLen=255; textCase=UPPER
Applies whentype supports ROW_SELECTION and display = report and type = multipleSelection

Copy
rowSelection {
 type: focusOnly
 currentSelectionPageItem: value
 selectAllPageItem: value
}

entityTitle

 | Property | Type | Required | Default Value | Details

 | singular | string | No | | data type=string; maxLen=255
Applies whendisplay = report

 | plural | string | No | | data type=string; maxLen=255
Applies whendisplay = report

Copy
entityTitle {
 singular: value
 plural: value
}

APEXlang Example

Copy
region sample (
 name: value
 title: value
 type: breadcrumb
 chart {
 type: area
 }
 componentAppearance {
 display: report
 layout: grid
 gridColumns: "2"
 listTemplate: @component
 breadcrumbTemplate: @component
 cssClasses: [
 value
 value
 ]
 templateOptions: [
 value
 value
 ]
 templateType: theme
 template: @component
 customAttributes: value
 showNullValuesAs: value
 selectFirstRow: false
 fixedRowHeight: false
 }
 edit {
 enabled: false
 allowedOperations: [
 add
 update
 ]
 allowedRowOperationsColumn: value
 lostUpdateType: rowValues
 rowVersionColumn: value
 addRowIfEmpty: false
 }
 link {
 linkColumn: singleRowView
 uniquelyIdentifyRowsBy: rowid
 uniqueColumn: value
 target: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 linkIcon: ```
 value
 ```
 linkAttributes: value
 authorizationScheme: mustNotBePublicUser
 conditionType: always
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
 map {
 background: default
 standard: openstreetmapPositron
 darkMode: openstreetmapDark
 height: 42
 }
 output {
 layout: @component
 linkText: value
 format: pdf
 viewFileAs: attachment
 formatItem: value
 fileName: value
 }
 page {
 size: letter
 orientation: portrait
 units: inches
 width: 42
 height: 42
 borderWidth: 42
 borderColor: value
 }
 reportLayout {
 numberOfRowsType: staticValue
 numberOfRows: 42
 item: value
 }
 title {
 title: value
 advancedFormatting: false
 column: value
 htmlExpression: ```html
 value
 ```
 cssClasses: [
 value
 value
 ]
 }
 chartAppearance {
 orientation: vertical
 stack: false
 stackLabel: false
 fontFamily: arial
 fontStyle: normal
 fontSize: "8"
 fontColor: value
 }
 card {
 cssClasses: [
 value
 value
 ]
 primaryKeyColumn2: value
 primaryKeyColumn1: value
 }
 source {
 plsqlCode: ```plsql
 value
 ```
 htmlCode: ```html
 value
 ```
 text: ```
 value
 ```
 language: plsql
 plsqlFunctionBody: ```plsql
 value
 ```
 javaScriptFunctionBody: ```javascript-mle
 value
 ```
 location: localDatabase
 remoteServer: @component
 sampleData: employees
 type: tableView
 tableOwner: value
 tableName: value
 includeRowidColumn: false
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
 restSource: @component
 jsonDualityView: @component
 jsonSource: @component
 list: @component
 breadcrumb: @component
 filteredRegion: @component
 pageItemsToSubmit: [
 value
 value
 ]
 optimizerHint: value
 useGenericColumnNames: false
 genericColumnCount: 42
 }
 controls {
 navigationBar: none
 navigationBarPosition: start
 options: [
 mousewheelZoom
 rectangleZoom
 ]
 }
 editAuthorization {
 add: mustNotBePublicUser
 update: mustNotBePublicUser
 delete: mustNotBePublicUser
 }
 pageHeader {
 font: helvetica
 fontWeight: normal
 fontSize: 42
 fontColor: value
 alignment: start
 pageHeaderText: ```
 value
 ```
 }
 chartLayout {
 maxWidth: 42
 height: 42
 }
 initialPositionAndZoom {
 getPositionFromBrowser: false
 type: staticValues
 sqlQuery: ```sql
 value
 ```
 geometryColumnDataType: sdoGeometry
 initialLongitudeColumn: value
 initialLatitudeColumn: value
 geometryColumn: value
 geojsonColumn: value
 initialZoomlevelColumn: value
 longitude: value
 latitude: value
 zoomLevel: value
 }
 performance {
 lazyLoading: false
 maxRowsToProcess: 42
 }
 pagination {
 displayPosition: bottomLeft
 partialPageRefresh: false
 type: page
 showTotalCount: false
 maxRowsToDisplay: value
 cardsPerPage: 42
 entitiesPerPage: 42
 initialEntitiesCount: 42
 }
 gauge {
 orientation: circular
 showPlotArea: false
 indicatorSize: 42
 innerRadius: 42
 startAngle: 42
 angleExtent: 42
 }
 columnHeadings {
 font: helvetica
 fontWeight: normal
 fontSize: 42
 fontColor: value
 backgroundColor: value
 }
 messages {
 whenNoDataFound: ```
 value
 ```
 whenMoreDataFound: ```
 value
 ```
 noDataFoundIcon: value
 }
 subtitle {
 advancedFormatting: false
 column: value
 htmlExpression: ```html
 value
 ```
 cssClasses: [
 value
 value
 ]
 }
 toolbar {
 show: false
 controls: [
 searchCol
 searchField
 ]
 addButtonLabel: value
 }
 breakFormatting {
 reportSumLabel: value
 breakColumns: col1
 style: repeatHeadings
 repeatHeadingFormat: ```
 value
 ```
 reportBreakFormat: value
 beforeRow: value
 columnBreakFormat: value
 afterRow: value
 }
 dataCursor {
 cursor: auto
 behavior: auto
 dimOnHover: false
 }
 columns {
 font: helvetica
 fontWeight: normal
 fontSize: 42
 fontColor: value
 backgroundColor: value
 widthUnits: percent
 }
 body {
 advancedFormatting: false
 column: value
 htmlExpression: ```html
 value
 ```
 cssClasses: [
 value
 value
 ]
 }
 enableUsersTo {
 savePublicReport: false
 savePublicReportAuthorization: mustNotBePublicUser
 flashback: false
 defineChartView: false
 download: false
 }
 multiSeriesChartData {
 fillGapsInChartData: false
 sortOrder: valueAsc
 renderGapAsZero: false
 }
 boundingBox {
 type: staticValues
 sqlQuery: ```sql
 value
 ```
 geometryColumnDataType: sdoGeometry
 minLongitude: value
 minLatitude: value
 maxLongitude: value
 maxLatitude: value
 geometryColumn: value
 currentBoundsItem: value
 }
 pageFooter {
 font: helvetica
 fontWeight: normal
 fontSize: 42
 fontColor: value
 alignment: start
 pageFooterText: ```
 value
 ```
 }
 secondaryBody {
 advancedFormatting: false
 column: value
 htmlExpression: ```html
 value
 ```
 cssClasses: [
 value
 value
 ]
 }
 settings {
 timeAxisType: auto
 zoomAndScroll: false
 zoomDirection: bothAxes
 initialZooming: first
 showHorizontalGrid: auto
 showVerticalGrid: auto
 showRowAxis: false
 axisPosition: top
 pieSelectionEffect: explode
 renderAs: area
 }
 download {
 authorization: mustNotBePublicUser
 sendAsEmail: false
 csvSeparator: value
 csvEnclosedBy: value
 csvExportEnabled: false
 filename: value
 supplementalText: ```
 value
 ```
 linkText: value
 formats: [
 csv
 html
 ]
 }
 componentAdvanced {
 stripHtml: false
 sortNulls: first
 customSvgStyles: ```
 value
 ```
 oracleTextIndexColumn: value
 emailFromAddress: value
 initJavaScriptFunction: ```javascript-browser
 value
 ```
 regionAlias: value
 reportIdItem: value
 maxRowsPerPageInSelector: value
 }
 singleRowView {
 excludeNullValues: false
 onlyDisplayedColumns: false
 }
 iconAndBadge {
 iconSource: initials
 iconColumn: value
 imageColumn: value
 imageUrl: value
 iconCssClasses: value
 iconPosition: top
 iconDescription: value
 badgeColumn: value
 badgeLabel: value
 badgeCssClasses: [
 value
 value
 ]
 }
 heading {
 type: columnNames
 plsqlFunctionBody: ```plsql
 value
 ```
 fixedTo: none
 fixedReportHeight: 42
 maxReportHeight: 42
 }
 iconView {
 show: false
 custom: false
 customIcon: ```html
 value
 ```
 iconType: imageInUrl
 iconUrl: value
 icon: value
 iconAttributes: value
 linkTarget: {
 type: in_app
 url: value
 app: value
 page: value
 items: [
 value
 value
 ]
 clearCache: value
 action: value
 request: value
 anchor: value
 session: "&SESSION."
 debug: "&DEBUG."
 printerFriendly: N
 otherArgs: value
 }
 linkAttributes: value
 labelColumn: value
 columnsPerRow: "1"
 linkColumn: value
 imageSourceColumn: value
 imageAttributes: value
 htmlAltText: value
 htmlTitleText: value
 customLink: ```
 value
 ```
 }
 overview {
 show: false
 height: value
 }
 legend {
 show: false
 title: value
 position: start
 selector: value
 cssClasses: [
 value
 value
 ]
 hideAndShowBehavior: none
 fontFamily: arial
 fontStyle: normal
 fontSize: "8"
 fontColor: value
 }
 printing {
 enabled: false
 }
 value {
 pieChartOtherThreshold: 42
 min: 42
 show: false
 valueType: number
 position: auto
 format: dateShort
 decimalPlaces: 42
 currency: value
 pattern: value
 formatScaling: none
 }
 externalProcessing {
 enabled: false
 url: value
 linkText: value
 }
 genAI {
 naturalLanguageSupport: false
 defaultSearchMode: searchModeRow
 reportContext: ```
 value
 ```
 enabled: false
 agent: @component
 service: @component
 systemPrompt: ```
 value
 ```
 welcomeMessage: ```html
 value
 ```
 }
 media {
 advancedFormatting: false
 htmlExpression: ```html
 value
 ```
 source: imageUrl
 url: value
 urlColumn: value
 blobColumn: value
 position: first
 appearance: square
 sizing: fit
 cssClasses: [
 value
 value
 ]
 imageDescription: value
 }
 attributes {
 messagesPosition: above
 messageSelector: value
 unitSystem: metric
 unitSystemItem: value
 copyrightNotice: ```html
 value
 ```
 }
 searchBar {
 includeSearchBar: false
 searchField: false
 finderDropDown: false
 reportsSelectList: false
 rowsPerPageSelector: false
 searchButtonLabel: value
 }
 orderBy {
 type: staticValue
 orderByClause: ```sql
 value
 ```
 item: {
 itemName: value
 orderBys: [
 value
 value
 ]
 }
 }
 detailView {
 show: false
 beforeRows: ```html
 value
 ```
 forEachRow: ```html
 value
 ```
 afterRows: ```html
 value
 ```
 }
 actionsMenu {
 includeActionsMenu: false
 filter: false
 selectColumns: false
 rowsPerPage: false
 sort: false
 controlBreak: false
 highlight: false
 compute: false
 aggregate: false
 chart: false
 groupBy: false
 pivot: false
 flashback: false
 saveReport: false
 savePublicReport: false
 savePublicReportAuthorization: mustNotBePublicUser
 reset: false
 help: false
 download: false
 subscription: false
 }
 animation {
 onDisplay: auto
 onDataChange: auto
 }
 dataProfile {
 nestedRows: @component
 }
 blobAttributes {
 mimeTypeColumn: value
 lastUpdatedColumn: value
 }
 tooltip {
 show: false
 showSeriesName: false
 showGroupName: false
 showValue: false
 showRow: false
 showLabel: false
 showStartDate: false
 showEndDate: false
 showProgress: false
 showBaseline: false
 }
 restSynchronization {
 useLocalTable: false
 }
 externalFilterAndOrderBy {
 enabled: false
 filter: ```
 value
 ```
 orderByType: staticValue
 orderBy: ```
 value
 ```
 item: {
 itemName: value
 orderBys: [
 value
 value
 ]
 }
 }
 advanced {
 savedReportMappingIdentifier: value
 htmlDomId: value
 customAttributes: value
 regionImage: value
 imageTagAttributes: value
 staticId: value
 regionDisplaySelector: false
 excludeTitleFromTranslation: false
 schemaOverrideItem: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 localPostProcessing {
 type: whereOrderByClause
 whereClause: ```sql
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
 orderByType: staticValue
 orderByClause: ```sql
 value
 ```
 item: {
 itemName: value
 orderBys: [
 value
 value
 ]
 }
 orderByItem: {
 itemName: value
 orderBys: [
 value
 value
 ]
 }
 }
 autoRefresh {
 interval: 42
 }
 remoteCache {
 caching: allUsers
 timeout: ```
 value
 ```
 }
 layout {
 sequence: 42
 parentRegion: @component
 slot: value
 startNewLayout: false
 startNewRow: false
 rowCssClasses: [
 value
 value
 ]
 column: value
 newColumn: false
 columnSpan: value
 columnCssClasses: [
 value
 value
 ]
 columnAttributes: [
 value
 value
 ]
 }
 description {
 description: ```
 value
 ```
 }
 appearance {
 template: @component
 templateOptions: [
 value
 value
 ]
 cssClasses: [
 value
 value
 ]
 icon: value
 renderComponents: aboveContent
 }
 accessibility {
 useLandmark: false
 landmarkType: banner
 landmarkLabel: value
 }
 image {
 fileUrl: value
 accessibleDescription: value
 customAttributes: value
 }
 masterDetail {
 masterRegion: @component
 }
 headerAndFooter {
 headerText: ```html
 value
 ```
 footerText: ```html
 value
 ```
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
 readOnly {
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
 escapeSpecialChars: false
 }
 serverCache {
 caching: false
 cacheTimeout: "10Seconds"
 dependsOnItems: [
 value
 value
 ]
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
 customization {
 customizable: false
 name: value
 }
 config {
 buildOption: @component
 }
 comments {
 comments: ```
 value
 ```
 }
 rowSelection {
 type: focusOnly
 currentSelectionPageItem: value
 selectAllPageItem: value
 }
 entityTitle {
 singular: value
 plural: value
 }
)

---

validation - APEXlang Reference

validation

Parent: page

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255
Enter the name for the validation. This name should be descriptive so that developers can easily identify conditions being checked.

Property Groups:
execution
validation
advanced
error
serverSideCondition
security
config
comments

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
execution {
 sequence: 42
}

validation

 | Property | Type | Required | Default Value | Details

 | editableRegion | reference | No | | data type=reference; lov=COMPONENT; references=region

 | type | enum | Yes | expression | data type=string; lov=STATIC
Valid values: rowsReturned noRowsReturned expression plsqlError functionBodyReturningBoolean functionBody itemIsNotNull itemIsNotNullOrZero itemIsNotZero itemContainsNoSpaces itemIsAlphanumeric itemIsNumeric itemIsAValidDate itemIsAValidTimestamp item=Value item!=Value itemIsContainedInValue itemIsNotContainedInValue itemContainsOnlyCharsInValue itemContainsAtLeastOneOfCharsInValue itemContainsNoneOfCharsInValue itemMatchesRegexp

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
Applies whentype = functionBodyReturningBoolean

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = functionBodyReturningBoolean and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = functionBodyReturningBoolean and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies whentype = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = functionBody and language = javaScript-mle

 | plsqlCodeRaisingError | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = plsqlError

 | item | string | Yes | | data type=string; maxLen=255; textCase=UPPER

 | regexp | string | Yes | | data type=string; maxLen=4000
Applies whentype = itemMatchesRegexp

 | value | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype in (item=Value)type in (item!=Value)type in (itemIsContainedInValue)type in (itemIsNotContainedInValue)type in (itemContainsAtLeastOneOfCharsInValue)type in (itemContainsOnlyCharsInValue)type in (itemContainsNoneOfCharsInValue)

 | type | enum | Yes | expression | data type=string; lov=STATIC
Valid values: rowsReturned noRowsReturned expression plsqlError functionBodyReturningBoolean functionBody columnIsNotNull columnIsNotNullOrZero columnIsNotZero columnContainsNoSpaces columnIsAlphanumeric columnIsNumeric columnIsAValidDate columnIsAValidTimestamp column=Value column!=Value columnIsContainedInValue columnIsNotContainedInValue columnContainsOnlyCharsInValue columnContainsAtLeastOneOfCharsInValue columnContainsNoneOfCharsInValue columnMatchesRegexp
Applies wheneditableRegion is set

 | sqlQuery | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies wheneditableRegion is set and type in (rowsReturned)editableRegion is set and type in (noRowsReturned)

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: sql plsql javaScript-mle
Applies wheneditableRegion is set and type = expression

 | sqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies wheneditableRegion is set and type = expression and language = sql

 | plsqlExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies wheneditableRegion is set and type = expression and language = plsql

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies wheneditableRegion is set and type = expression and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies wheneditableRegion is set and type = functionBodyReturningBoolean

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies wheneditableRegion is set and type = functionBodyReturningBoolean and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies wheneditableRegion is set and type = functionBodyReturningBoolean and language = javaScript-mle

 | language | enum | Yes | plsql | data type=string; lov=STATIC
Valid values: plsql javaScript-mle
Applies wheneditableRegion is set and type = functionBody

 | plsqlFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies wheneditableRegion is set and type = functionBody and language = plsql

 | javaScriptFunctionBody | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies wheneditableRegion is set and type = functionBody and language = javaScript-mle

 | plsqlCodeRaisingError | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies wheneditableRegion is set and type = plsqlError

 | column | string | Yes | | data type=string; maxLen=128
Applies wheneditableRegion is set

 | regexp | string | Yes | | data type=string; maxLen=4000
Applies wheneditableRegion is set and type = columnMatchesRegexp

 | value | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies wheneditableRegion is set and type in (column=Value)editableRegion is set and type in (column!=Value)editableRegion is set and type in (columnIsContainedInValue)editableRegion is set and type in (columnIsNotContainedInValue)editableRegion is set and type in (columnContainsAtLeastOneOfCharsInValue)editableRegion is set and type in (columnContainsOnlyCharsInValue)editableRegion is set and type in (columnContainsNoneOfCharsInValue)

 | alwaysExecute | boolean | Yes | false | data type=boolean

Copy
validation {
 editableRegion: @component
 type: rowsReturned
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
 plsqlCodeRaisingError: ```plsql
 value
 ```
 item: value
 regexp: value
 value: ```
 value
 ```
 column: value
 alwaysExecute: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

error

 | Property | Type | Required | Default Value | Details

 | errorMessage | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies wheneditableRegion is set

 | displayLocation | enum | Yes | inlineWithFieldAndInNotification | data type=string; lov=STATIC
Valid values: inlineWithFieldAndInNotification inlineWithField inlineInNotification onErrorPage

 | associatedItem | reference | No | | data type=reference; lov=COMPONENT; references=pageItem

 | associatedColumn | string | No | | data type=string; maxLen=255
Applies wheneditableRegion is set

Copy
error {
 errorMessage: ```
 value
 ```
 displayLocation: inlineWithFieldAndInNotification
 associatedItem: @component
 associatedColumn: value
}

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | whenButtonPressed | reference | No | | data type=reference; lov=COMPONENT; references=button

 | executionScope | enum | Yes | forCreatedAndModifiedRows | data type=string; lov=STATIC
Valid values: forCreatedAndModifiedRows allSubmittedRows
Applies wheneditableRegion is set

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

 | executeCondition | enum | Yes | forEachRow | data type=string; lov=STATIC
Valid values: forEachRow once
Applies wheneditableRegion is set and type is set

Copy
serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
}

security

 | Property | Type | Required | Default Value | Details

 | authorizationScheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

Copy
security {
 authorizationScheme: mustNotBePublicUser
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
validation sample (
 name: value
 execution {
 sequence: 42
 }
 validation {
 editableRegion: @component
 type: rowsReturned
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
 plsqlCodeRaisingError: ```plsql
 value
 ```
 item: value
 regexp: value
 value: ```
 value
 ```
 column: value
 alwaysExecute: false
 }
 advanced {
 staticId: value
 }
 error {
 errorMessage: ```
 value
 ```
 displayLocation: inlineWithFieldAndInNotification
 associatedItem: @component
 associatedColumn: value
 }
 serverSideCondition {
 whenButtonPressed: @component
 executionScope: forCreatedAndModifiedRows
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
 executeCondition: forEachRow
 }
 security {
 authorizationScheme: mustNotBePublicUser
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
