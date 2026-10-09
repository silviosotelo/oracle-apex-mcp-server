# APEXlang: componentes con padre `dynamicAction` (APEX 26.1)


---

action - APEXlang Reference

action

Parent: dynamicAction

Plug-in Variants: addClasstype = addClass, alerttype = alert, cancelDialogtype = cancelDialog, cancelEventtype = cancelEvent, cleartype = clear, clearErrorstype = clearErrors, closeDialogtype = closeDialog, closeRegiontype = closeRegion, collapseTreetype = collapseTree, confirmtype = confirm, disabletype = disable, downloadtype = download, enabletype = enable, executeJsCodetype = executeJsCode, executeServerSideCodetype = executeServerSideCode, expandTreetype = expandTree, generateTextWithAitype = generateTextWithAi, getCurrentPositiontype = getCurrentPosition, hidetype = hide, invokeInteractiveReportDialogtype = invokeInteractiveReportDialog, openRegiontype = openRegion, printReporttype = printReport, refreshtype = refresh, removeClasstype = removeClass, setFocustype = setFocus, setStyletype = setStyle, setValuetype = setValue, sharetype = share, showtype = show, showAiAssistanttype = showAiAssistant, showErrorMessagetype = showErrorMessage, showSuccessMessagetype = showSuccessMessage, submitPagetype = submitPage, triggerGeocodingtype = triggerGeocoding

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | No | | data type=string; maxLen=255
Enter the name of the action. This helps to identify what the action does in Page Designer.

 | action | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert cancelDialog cancelEvent clear clearErrors closeDialog closeRegion collapseTree confirm disable download enable executeJsCode executeServerSideCode expandTree generateTextWithAi getCurrentPosition hide invokeInteractiveReportDialog openRegion printReport refresh removeClass setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage submitPage triggerGeocoding

Property Groups:
genAI
affectedElements
execution
clientSideCondition
serverSideCondition
security
config
advanced
comments

genAI

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | false | data type=boolean
Applies whenaction supports AI_ENABLED

 | agent | reference | No | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whenaction supports AI_ENABLED_ALWAYS and action supports AI_ENABLED and enabled = trueaction supports AI_ENABLED and enabled = true

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService
Applies whenaction supports AI_ENABLED_ALWAYS and action supports AI_ENABLED and enabled = trueaction supports AI_ENABLED and enabled = true

 | systemPrompt | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenaction supports AI_SYSTEM_PROMPT and action supports AI_ENABLED_ALWAYS and action supports AI_ENABLED and enabled = trueaction supports AI_SYSTEM_PROMPT and action supports AI_ENABLED and enabled = true

 | welcomeMessage | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenaction supports AI_UI and action supports AI_ENABLED_ALWAYS and action supports AI_ENABLED and enabled = trueaction supports AI_UI and action supports AI_ENABLED and enabled = true

 | itemsToSubmit | array of strings | No | | data type=string; maxLen=4000; textCase=UPPER
Applies whenaction supports AI_ENABLED_ALWAYS and action supports AI_ENABLED and enabled = trueaction supports AI_ENABLED and enabled = true

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
 itemsToSubmit: [
 value
 value
 ]
}

affectedElements

 | Property | Type | Required | Default Value | Details

 | selectionType | enum | No | | data type=string; lov=STATIC
Valid values: items button region columns domObject jquerySelector javaScriptExpression triggeringElement eventSource
Applies whenaction supports ITEMaction supports BUTTONaction supports REGIONaction supports JQUERY_SELECTORaction supports JAVASCRIPT_EXPRESSIONaction supports TRIGGERING_ELEMENTaction supports EVENT_SOURCE

 | region | reference | Yes | | data type=reference; lov=COMPONENT; references=region
Applies whenaction supports ITEM and selectionType = regionaction supports BUTTON and selectionType = regionaction supports REGION and selectionType = regionaction supports JQUERY_SELECTOR and selectionType = regionaction supports JAVASCRIPT_EXPRESSION and selectionType = regionaction supports TRIGGERING_ELEMENT and selectionType = regionaction supports EVENT_SOURCE and selectionType = region

 | columns | array of strings | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenaction supports ITEM and selectionType = columnsaction supports BUTTON and selectionType = columnsaction supports REGION and selectionType = columnsaction supports JQUERY_SELECTOR and selectionType = columnsaction supports JAVASCRIPT_EXPRESSION and selectionType = columnsaction supports TRIGGERING_ELEMENT and selectionType = columnsaction supports EVENT_SOURCE and selectionType = columns

 | button | reference | Yes | | data type=reference; lov=COMPONENT; references=button
Applies whenaction supports ITEM and selectionType = buttonaction supports BUTTON and selectionType = buttonaction supports REGION and selectionType = buttonaction supports JQUERY_SELECTOR and selectionType = buttonaction supports JAVASCRIPT_EXPRESSION and selectionType = buttonaction supports TRIGGERING_ELEMENT and selectionType = buttonaction supports EVENT_SOURCE and selectionType = button

 | items | array of strings | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenaction supports ITEM and selectionType = itemsaction supports BUTTON and selectionType = itemsaction supports REGION and selectionType = itemsaction supports JQUERY_SELECTOR and selectionType = itemsaction supports JAVASCRIPT_EXPRESSION and selectionType = itemsaction supports TRIGGERING_ELEMENT and selectionType = itemsaction supports EVENT_SOURCE and selectionType = items

 | domObject | string | Yes | | data type=string; maxLen=4000
Applies whenaction supports ITEM and selectionType = domObjectaction supports BUTTON and selectionType = domObjectaction supports REGION and selectionType = domObjectaction supports JQUERY_SELECTOR and selectionType = domObjectaction supports JAVASCRIPT_EXPRESSION and selectionType = domObjectaction supports TRIGGERING_ELEMENT and selectionType = domObjectaction supports EVENT_SOURCE and selectionType = domObject

 | jquerySelector | string | Yes | | data type=string; maxLen=4000
Applies whenaction supports ITEM and selectionType = jquerySelectoraction supports BUTTON and selectionType = jquerySelectoraction supports REGION and selectionType = jquerySelectoraction supports JQUERY_SELECTOR and selectionType = jquerySelectoraction supports JAVASCRIPT_EXPRESSION and selectionType = jquerySelectoraction supports TRIGGERING_ELEMENT and selectionType = jquerySelectoraction supports EVENT_SOURCE and selectionType = jquerySelector

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenaction supports ITEM and selectionType = javaScriptExpressionaction supports BUTTON and selectionType = javaScriptExpressionaction supports REGION and selectionType = javaScriptExpressionaction supports JQUERY_SELECTOR and selectionType = javaScriptExpressionaction supports JAVASCRIPT_EXPRESSION and selectionType = javaScriptExpressionaction supports TRIGGERING_ELEMENT and selectionType = javaScriptExpressionaction supports EVENT_SOURCE and selectionType = javaScriptExpression

Copy
affectedElements {
 selectionType: items
 region: @component
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

execution

 | Property | Type | Required | Default Value | Details

 | sequence | number | Yes | | data type=number; maxLen=22

 | event | reference | Yes | | data type=reference; lov=COMPONENT; references=dynamicAction

 | fireWhenEventResultIs | enum | Yes | true | data type=string; lov=STATIC
Valid values: true false

 | fireOnInit | boolean | Yes | true | data type=boolean
Applies whenaction is set

 | stopExecutionOnError | boolean | Yes | true | data type=boolean
Applies whenaction supports STOP_EXECUTION_ON_ERROR

 | waitForResult | boolean | Yes | true | data type=boolean
Applies whenaction supports WAIT_FOR_RESULT

Copy
execution {
 sequence: 42
 event: @component
 fireWhenEventResultIs: true
 fireOnInit: false
 stopExecutionOnError: false
 waitForResult: false
}

clientSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: item=value item!=value item>value item>=value item<value item<=value itemIsNull itemIsNotNull itemIsInList itemIsNotInList jsExpression
Applies whenregion does not support IG_REGION
Specify a client-side condition, to control whether the action fires.

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whenregion does not support IG_REGION and type in (item=value)region does not support IG_REGION and type in (item!=value)region does not support IG_REGION and type in (item>value)region does not support IG_REGION and type in (item>=value)region does not support IG_REGION and type in (item<value)region does not support IG_REGION and type in (item<=value)region does not support IG_REGION and type in (itemIsNull)region does not support IG_REGION and type in (itemIsNotNull)region does not support IG_REGION and type in (itemIsInList)region does not support IG_REGION and type in (itemIsNotInList)

Enter the page item used in this condition. You can type in the name or pick from the list of available items.

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenregion does not support IG_REGION and type in (item=value)region does not support IG_REGION and type in (item!=value)region does not support IG_REGION and type in (item>value)region does not support IG_REGION and type in (item>=value)region does not support IG_REGION and type in (item<value)region does not support IG_REGION and type in (item<=value)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenregion does not support IG_REGION and type in (itemIsInList)region does not support IG_REGION and type in (itemIsNotInList)

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenregion does not support IG_REGION and type = jsExpression

 | type | enum | No | | data type=string; lov=STATIC
Valid values: itemColumn=value itemColumn!=value itemColumn>value itemColumn>=value itemColumn<value itemColumn<=value itemColumnIsNull itemColumnIsNotNull itemColumnIsInList itemColumnIsNotInList jsExpression
Applies whenregion supports IG_REGION
Specify a client-side condition, to control whether the action fires.

 | componentType | enum | Yes | column | data type=string; lov=STATIC
Valid values: item column
Applies whentype in (itemColumn=value)type in (itemColumn!=value)type in (itemColumn>value)type in (itemColumn>=value)type in (itemColumn<value)type in (itemColumn<=value)type in (itemColumnIsNull)type in (itemColumnIsNotNull)type in (itemColumnIsInList)type in (itemColumnIsNotInList)region supports IG_REGION and type in (itemColumn=value)region supports IG_REGION and type in (itemColumn!=value)region supports IG_REGION and type in (itemColumn>value)region supports IG_REGION and type in (itemColumn>=value)region supports IG_REGION and type in (itemColumn<value)region supports IG_REGION and type in (itemColumn<=value)region supports IG_REGION and type in (itemColumnIsNull)region supports IG_REGION and type in (itemColumnIsNotNull)region supports IG_REGION and type in (itemColumnIsInList)region supports IG_REGION and type in (itemColumnIsNotInList)

 | item | string | Yes | | data type=string; maxLen=4000; textCase=UPPER
Applies whentype in (itemColumn=value) and componentType = itemtype in (itemColumn!=value) and componentType = itemtype in (itemColumn>value) and componentType = itemtype in (itemColumn>=value) and componentType = itemtype in (itemColumn<value) and componentType = itemtype in (itemColumn<=value) and componentType = itemtype in (itemColumnIsNull) and componentType = itemtype in (itemColumnIsNotNull) and componentType = itemtype in (itemColumnIsInList) and componentType = itemtype in (itemColumnIsNotInList) and componentType = itemregion supports IG_REGION and type in (itemColumn=value) and componentType = itemregion supports IG_REGION and type in (itemColumn!=value) and componentType = itemregion supports IG_REGION and type in (itemColumn>value) and componentType = itemregion supports IG_REGION and type in (itemColumn>=value) and componentType = itemregion supports IG_REGION and type in (itemColumn<value) and componentType = itemregion supports IG_REGION and type in (itemColumn<=value) and componentType = itemregion supports IG_REGION and type in (itemColumnIsNull) and componentType = itemregion supports IG_REGION and type in (itemColumnIsNotNull) and componentType = itemregion supports IG_REGION and type in (itemColumnIsInList) and componentType = itemregion supports IG_REGION and type in (itemColumnIsNotInList) and componentType = item

 | column | string | Yes | | data type=string; maxLen=4000
Applies whentype in (itemColumn=value) and componentType = columntype in (itemColumn!=value) and componentType = columntype in (itemColumn>value) and componentType = columntype in (itemColumn>=value) and componentType = columntype in (itemColumn<value) and componentType = columntype in (itemColumn<=value) and componentType = columntype in (itemColumnIsNull) and componentType = columntype in (itemColumnIsNotNull) and componentType = columntype in (itemColumnIsInList) and componentType = columntype in (itemColumnIsNotInList) and componentType = columnregion supports IG_REGION and type in (itemColumn=value) and componentType = columnregion supports IG_REGION and type in (itemColumn!=value) and componentType = columnregion supports IG_REGION and type in (itemColumn>value) and componentType = columnregion supports IG_REGION and type in (itemColumn>=value) and componentType = columnregion supports IG_REGION and type in (itemColumn<value) and componentType = columnregion supports IG_REGION and type in (itemColumn<=value) and componentType = columnregion supports IG_REGION and type in (itemColumnIsNull) and componentType = columnregion supports IG_REGION and type in (itemColumnIsNotNull) and componentType = columnregion supports IG_REGION and type in (itemColumnIsInList) and componentType = columnregion supports IG_REGION and type in (itemColumnIsNotInList) and componentType = column

 | value | string | Yes | | data type=string; maxLen=4000
Applies whentype in (itemColumn=value)type in (itemColumn!=value)type in (itemColumn>value)type in (itemColumn>=value)type in (itemColumn<value)type in (itemColumn<=value)region supports IG_REGION and type in (itemColumn=value)region supports IG_REGION and type in (itemColumn!=value)region supports IG_REGION and type in (itemColumn>value)region supports IG_REGION and type in (itemColumn>=value)region supports IG_REGION and type in (itemColumn<value)region supports IG_REGION and type in (itemColumn<=value)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whentype in (itemColumnIsInList)type in (itemColumnIsNotInList)region supports IG_REGION and type in (itemColumnIsInList)region supports IG_REGION and type in (itemColumnIsNotInList)

 | javaScriptExpression | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = jsExpressionregion supports IG_REGION and type = jsExpression

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

serverSideCondition

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: always rowsReturned noRowsReturned expression functionBody request=Value request!=Value requestIsContainedInValue requestIsNotContainedInValue item=value item!=value itemIsNull itemIsNotNull itemIsZero itemIsNotZero itemIsNullOrZero itemIsNotNullAndNotZero itemContainsNoSpaces itemIsNumeric itemIsNotNumeric itemIsAlphanumeric itemIsInColonDelimitedList itemIsNotInColonDelimitedList textIsContainedInItem text=value text!=value textIsContainedInValue textIsNotContainedInValue userPreference=value userPreference!=value currentPage=page currentPage!=page currentPageInList currentPageNotInList currentPage=pageSubmitted currentPage!=pageSubmitted currentPageIsInPrinterFriendlyMode currentPageIsNotInPrinterFriendlyMode pageRegionIsReadOnly pageRegionIsNotReadOnly userIsAuthenticated userIsPublicUser inlineValidationErrorsDisplayed inlineValidationErrorsNotDisplayed sqlReportsOkToShowForwardButton sqlReportsOkToShowBackButton currentLanguage=value currentLanguage!=value currentLanguageIsContainedInValue currentLanguageIsNotContainedInValue clientBrowserIsMozilla clientBrowserIsIE7higher clientBrowserIsXhtmlCssCapable clientBrowserIsOther cgiEnvDadName=value cgiEnvDadName!=value cgiEnvServerName=value cgiEnvServerName!=value cgiEnvHttpHost=value cgiEnvHttpHost!=value never
Select a condition type to be met in order for this action to be active.

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

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | initJavaScriptFunction | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenaction supports INIT_JAVASCRIPT_CODE

Copy
advanced {
 staticId: value
 initJavaScriptFunction: ```javascript-browser
 value
 ```
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
action sample (
 name: value
 action: addClass
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
 itemsToSubmit: [
 value
 value
 ]
 }
 affectedElements {
 selectionType: items
 region: @component
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
 execution {
 sequence: 42
 event: @component
 fireWhenEventResultIs: true
 fireOnInit: false
 stopExecutionOnError: false
 waitForResult: false
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
 advanced {
 staticId: value
 initJavaScriptFunction: ```javascript-browser
 value
 ```
 }
 comments {
 comments: ```
 value
 ```
 }
)
