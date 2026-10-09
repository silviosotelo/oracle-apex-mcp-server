# APEXlang: componentes con padre `plugin` (APEX 26.1)


---

actionPosition - APEXlang Reference

actionPosition

Parent: plugin

Applies whentype = templateComponent
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | apexlangName | string | Yes | | data type=string; maxLen=40

 | staticId | string | Yes | | data type=string; maxLen=255; textCase=UPPER

 | sequence | integer | Yes | | data type=integer; maxLen=32767

Property Groups:
position
help
advanced
comments

position

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | link | data type=string; lov=STATIC
Valid values: link template

 | predefinedTemplate | reference | No | | data type=reference; lov=COMPONENT; references=actionTemplate
Applies whentype = template

Copy
position {
 type: link
 predefinedTemplate: @component
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

Copy
advanced {
 quickPick: false
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
actionPosition sample (
 name: value
 apexlangName: value
 staticId: value
 sequence: 42
 position {
 type: link
 predefinedTemplate: @component
 }
 help {
 helpText: ```
 value
 ```
 }
 advanced {
 quickPick: false
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

actionTemplate - APEXlang Reference

actionTemplate

Parent: plugin

Applies whentype = templateComponent
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | apexlangName | string | Yes | | data type=string; maxLen=40

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: button menu

Property Groups:
template
help
advanced
comments

template

 | Property | Type | Required | Default Value | Details

 | actionTemplate | multiline string | Yes | | data type=multiline string; maxLen=30000

Copy
template {
 actionTemplate: ```html
 value
 ```
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

 | translatable | boolean | Yes | false | data type=boolean

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 translatable: false
 staticId: value
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
actionTemplate sample (
 name: value
 apexlangName: value
 type: button
 template {
 actionTemplate: ```html
 value
 ```
 }
 help {
 helpText: ```
 value
 ```
 }
 advanced {
 translatable: false
 staticId: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

attributeGroup - APEXlang Reference

attributeGroup

Parent: plugin

Applies whentype in (item)type in (region)type in (process)type in (dynamicAction)type in (templateComponent)type in (genAITool)
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | apexlangName | string | Yes | | data type=string; maxLen=40

 | sequence | integer | Yes | | data type=integer; maxLen=32767

Property Groups:
advanced

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

APEXlang Example

Copy
attributeGroup sample (
 name: value
 apexlangName: value
 sequence: 42
 advanced {
 staticId: value
 }
)

---

customAttribute - APEXlang Reference

customAttribute

Parent: plugin

Children: entry

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | apexlangName | string | Yes | | data type=string; maxLen=40

 | attribute | integer | Yes | | data type=integer; maxLen=32767

 | name | string | Yes | | data type=string; maxLen=255

 | scope | enum | Yes | component | data type=string; lov=STATIC
Valid values: app component report reportGroup regionColumn

 | type | enum | Yes | text | data type=string; lov=STATIC
Valid values: authorizationGroup checkboxes codeLanguage color column component credential dataLoadDefinitionId dataLoadTableId emailTemplate html icon integer javaScript-mle javaScript-mleExpressionReturningBoolean javaScript-mleExpressionReturningVarchar2 javaScript-mleFunctionBodyReturningBoolean javaScript-mleFunctionBodyReturningVarchar2 javaScriptCode linkToTargetPageUrl mapBackground media number owner plsqlCode plsqlExpressionReturningBoolean plsqlExpressionReturningVarchar2 plsqlFunctionBodyReturningBoolean plsqlFunctionBodyReturningVarchar2 plsqlPackage plsqlProcedureOrFunction pageItem pageItems pageNumber pageNumbers regionSqlQueryColumn reportQuery sqlQuery selectList sessionStateValue table taskDefinition templatePlaceholders text textarea workflowDefinition xml yesNo restSource restOperation

Property Groups:
componentLov
validation
security
appearance
builder
templateSupport
accessibility
default
supports
dependingOn
help
examples
advanced
comments

componentLov

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | static | data type=string; lov=STATIC
Valid values: static component
Applies whentype in (selectList)type in (checkboxes)

 | componentType | enum | No | | data type=string; lov=STATIC
Valid values: credential remoteDatabase authenticationServer printServer restServer staticWorkspaceFile appGroup fileServer genAI vectorProvider app theme themeStyle themeFile templateOptionGroup globalTemplateOption pageTemplate pageTemplateOption pageTemplateDisplayPoint fieldTemplate fieldTemplateOption buttonTemplate buttonTemplateOption regionTemplate regionTemplateOption regionTemplateDisplayPoint listTemplate listTemplateOption breadcrumbTemplate breadcrumbTemplateOption calendarTemplate reportTemplate reportTemplateOption popupLovTemplate plugin pluginStdAttribute pluginAttributeGroup pluginCustomAttribute pluginAttributeLovEntry pluginActionTemplate pluginActionPosition pluginEvent pluginFile pluginSlot pluginSetting appItem appComputation appProcess buildOption authentication authorization aclRole webSrcModule webSrcOperation webSrcModuleParam webSrcModuleDataProfile webSrcModuleDataProfileColumn webSrcSyncStep webSrcSyncStepWsParam shortcut appSubstitution staticAppFile textMessage appSetting pwaShortcut pwaScreenshot dualityViewSource jsonDocumentSource dualityViewDataProfile dualityViewDataProfileColumn jsonCollectionDataProfile jsonCollectionDataProfileColumn aiAgent aiAgentTool aiAgentToolParam classicNavBar breadcrumb breadcrumbEntry list listEntry lov lovWsParam lovEntry lovColumn webServiceReference webServiceReferenceOperation webServiceRefOperParamI webServiceRefOperParamO webServiceRefOperParamA webServiceRefOperParamH dataLoadTable dataLoadRule dataLoadLookup tabSet reportLayout reportQuery reportQueryStatement reportQueryStmtWsParam automation automationWsParam automationAction emailTemplate dataLoadDefinition dataLoadDefDataProfile dataLoadDefDataProfileColumn taskDef taskDefParam taskDefAction taskDefParticipant languageMap dynamicTranslation concatenatedFile searchConfig searchConfigWsParam pageGroup tree developerComment supportObjects supportObjectsSubstitution supportObjectsBuildOption supportObjectsValidation supportObjectsInstall supportObjectsInstallObject supportObjectsUpgrade page region pageItem button dynamicActionEvent dynamicActionAction pageMetaTag validation pageComputation pageProcess pageProcessWsParam branch regionPluginAttributes irAttributes irColumnGroup irColumn irPrintAttr irSavedReport irSavedReportColumn irSavedReportCompute irSavedReportSort irSavedReportAggregate irSavedReportFilter irSavedReportCtrlBreak irSavedReportHighlight irSavedReportChart irSavedReportGroupBy irSavedReportGroupByCol irSavedReportGroupByAgg irSavedReportGroupBySort irSavedReportPivot irSavedReportPivotCol irSavedReportPivotRow irSavedReportPivotAgg irSavedReportPivotSort pageProcessWsParamIn pageProcessWsParamOut pageProcessWsParamAuth pageProcessInvokeApiParam classicReport classicReportColumn classicReportPrintAttr tabularForm tabularFormColumn tabularFormPrintAttr classicCalendar regionColumn regionTmplColumn jetChart jetChartSeries jetChartAxes jetChartWsParam igAttributes igColumnGroup igColumn igPrintAttr igSavedReport igSavedReportColumn igSavedReportFilter igSavedReportSort igSavedReportAggregate igSavedReportCtrlBreak igSavedReportHighlight igSavedReportChart regionWsParam facet facetGroup facetGroupItem sfilter sfilterGroup sfilterGroupItem card cardAction mapRegion mapLayer mapLayerWsParam mapBackground pageProcessTaskParam searchRegionSources regionAction irColumnAction regionActionMenuEntry irColumnActionMenuEntry buttonMenuEntry regionActionMenuEntryAction regionActionButtonAction pageButtonAction cardButtonAction buttonActionMenuEntryAction irActionButtonAction irActionMenuEntryAction workflow workflowParam workflowVersion workflowActivity workflowVariable workflowActivityVariable workflowParticipant workflowTransition workflowBranch workflowParallelBranch pageProcessWfParam wfActivityTaskParam wfActivityInvokeApiParam wfActivityWsParam wfActivityWfParam componentGroup compGrpComponent
Applies whentype = component

 | onDeleteBehavior | enum | No | | data type=string; lov=STATIC
Valid values: cascade setToNull
Applies whentype = component and componentType is set

 | nullText | string | No | | data type=string; maxLen=255
Applies whentype in (selectList) and required = falsetype in (component) and required = false

Copy
componentLov {
 type: static
 componentType: credential
 onDeleteBehavior: cascade
 nullText: value
}

validation

 | Property | Type | Required | Default Value | Details

 | required | boolean | Yes | false | data type=boolean

 | maxLength | number | No | | data type=number; maxLen=5
Applies whentype in (text)type in (textarea)type in (number)type in (integer)

 | minColumns | number | No | | data type=number; maxLen=3
Applies whentype = sqlQuery

 | maxColumns | number | No | | data type=number; maxLen=3
Applies whentype = sqlQuery

 | textCase | enum | No | | data type=string; lov=STATIC
Valid values: uppercase lowercase
Applies whentype in (text)type in (textarea)

Copy
validation {
 required: false
 maxLength: 42
 minColumns: 42
 maxColumns: 42
 textCase: uppercase
}

security

 | Property | Type | Required | Default Value | Details

 | escapeMode | enum | Yes | html | data type=string; lov=STATIC
Valid values: html htmlAttribute stripHtml raw
Applies whentype = templateComponent

Copy
security {
 escapeMode: html
}

appearance

 | Property | Type | Required | Default Value | Details

 | attributeGroup | reference | No | | data type=reference; lov=COMPONENT; references=attributeGroup
Applies whentype in (templateComponent)type in (dynamicAction)type in (item)type in (region)type in (process)type in (genAITool)

 | sequence | number | Yes | | data type=number; maxLen=22

Copy
appearance {
 attributeGroup: @component
 sequence: 42
}

builder

 | Property | Type | Required | Default Value | Details

 | common | boolean | Yes | true | data type=boolean

 | showInWizard | boolean | Yes | true | data type=boolean

 | unit | string | No | | data type=string; maxLen=30
Applies whentype in (text)type in (number)type in (integer)

 | translatable | boolean | Yes | false | data type=boolean
Applies whentype in (text)type in (textarea)type in (html)type in (xml)

 | includeColumnsInItemsPicker | boolean | Yes | COMPONENT | data type=boolean
Applies whentype in (region) and type in (text)type in (region) and type in (textarea)type in (region) and type in (html)type in (region) and type in (xml)type in (region) and type in (sqlQuery)type in (region) and type in (plsqlCode)type in (region) and type in (plsqlExpressionReturningVarchar2)type in (region) and type in (plsqlExpressionReturningBoolean)type in (region) and type in (plsqlFunctionBodyReturningVarchar2)type in (region) and type in (plsqlFunctionBodyReturningBoolean)type in (region) and type in (javaScriptCode)type in (region) and type in (pageItem)type in (region) and type in (pageItems)type in (region) and type in (linkToTargetPageUrl)type in (process) and type in (text)type in (process) and type in (textarea)type in (process) and type in (html)type in (process) and type in (xml)type in (process) and type in (sqlQuery)type in (process) and type in (plsqlCode)type in (process) and type in (plsqlExpressionReturningVarchar2)type in (process) and type in (plsqlExpressionReturningBoolean)type in (process) and type in (plsqlFunctionBodyReturningVarchar2)type in (process) and type in (plsqlFunctionBodyReturningBoolean)type in (process) and type in (javaScriptCode)type in (process) and type in (pageItem)type in (process) and type in (pageItems)type in (process) and type in (linkToTargetPageUrl)

 | displayWidth | number | No | | data type=number; maxLen=4
Applies whentype in (text)type in (textarea)type in (number)type in (integer)

Copy
builder {
 common: false
 showInWizard: false
 unit: value
 translatable: false
 includeColumnsInItemsPicker: false
 displayWidth: 42
}

templateSupport

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: substitutions templateDirectivesClient templateDirectivesServer

 | customSubstitutions | array of strings | No | | data type=string; maxLen=32767
Applies whentype in (templateDirectivesClient) and type in (html)type in (templateDirectivesClient) and type in (textarea)type in (templateDirectivesServer) and type in (html)type in (templateDirectivesServer) and type in (textarea)

Copy
templateSupport {
 type: substitutions
 customSubstitutions: [
 value
 value
 ]
}

accessibility

 | Property | Type | Required | Default Value | Details

 | importantForAccessibility | boolean | Yes | false | data type=boolean

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenimportantForAccessibility = true

Copy
accessibility {
 importantForAccessibility: false
 helpText: ```
 value
 ```
}

default

 | Property | Type | Required | Default Value | Details

 | value | boolean | Yes | false | data type=boolean
Applies whentype = yesNo

 | value | multiline string | No | | data type=multiline string; maxLen=4000

 | sampleDataValue | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype in (templateComponent)type in (region)

Copy
default {
 value: false
 sampleDataValue: ```
 value
 ```
}

supports

 | Property | Type | Required | Default Value | Details

 | components | array of enums | No | | data type=string; lov=STATIC
Valid values: pageItems interactiveGridColumns facets facetGroupItems filters filterGroupItems
Applies whentype = item

 | components | array of enums | No | | data type=string; lov=STATIC
Valid values: pageProcesses automationActions taskDefinitionActions workflowActivities
Applies whentype = process

 | dataTypes | array of enums | Yes | varchar2 | data type=string; lov=STATIC
Valid values: varchar2 number date timestamp timestampWithTimeZone timestampWithLocalTimeZone intervalYearToMonth intervalDayToSecond blob clob bfile rowid
Applies whentype in (regionSqlQueryColumn)type in (column)type in (sessionStateValue)

Copy
supports {
 components: [
 pageItems
 interactiveGridColumns
 ]
 dataTypes: [
 varchar2
 number
 ]
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | attribute | reference | No | | data type=reference; lov=COMPONENT; references=customAttribute

 | conditionType | enum | Yes | | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenattribute is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenattribute is set and conditionType in (=)attribute is set and conditionType in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenattribute is set and conditionType in (inList)attribute is set and conditionType in (notInList)

 | alwaysEvaluate | boolean | Yes | true | data type=boolean
Applies whenattribute is set

 | parentAttribute | reference | No | | data type=reference; lov=COMPONENT; references=customAttribute
Applies whentype in (table)type in (column)type in (plsqlPackage)type in (plsqlProcedureOrFunction)type in (restOperation)

Copy
dependingOn {
 attribute: @component
 conditionType: "="
 value: value
 list: [
 value
 value
 ]
 alwaysEvaluate: false
 parentAttribute: @component
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

examples

 | Property | Type | Required | Default Value | Details

 | examples | multiline string | No | | data type=multiline string; maxLen=4000

Copy
examples {
 examples: ```
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | showDeprecatedAttributeForValues | array of strings | No | | data type=string; maxLen=30

Copy
advanced {
 showDeprecatedAttributeForValues: [
 value
 value
 ]
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
customAttribute sample (
 staticId: value
 apexlangName: value
 attribute: 42
 name: value
 scope: app
 type: authorizationGroup
 componentLov {
 type: static
 componentType: credential
 onDeleteBehavior: cascade
 nullText: value
 }
 validation {
 required: false
 maxLength: 42
 minColumns: 42
 maxColumns: 42
 textCase: uppercase
 }
 security {
 escapeMode: html
 }
 appearance {
 attributeGroup: @component
 sequence: 42
 }
 builder {
 common: false
 showInWizard: false
 unit: value
 translatable: false
 includeColumnsInItemsPicker: false
 displayWidth: 42
 }
 templateSupport {
 type: substitutions
 customSubstitutions: [
 value
 value
 ]
 }
 accessibility {
 importantForAccessibility: false
 helpText: ```
 value
 ```
 }
 default {
 value: false
 sampleDataValue: ```
 value
 ```
 }
 supports {
 components: [
 pageItems
 interactiveGridColumns
 ]
 dataTypes: [
 varchar2
 number
 ]
 }
 dependingOn {
 attribute: @component
 conditionType: "="
 value: value
 list: [
 value
 value
 ]
 alwaysEvaluate: false
 parentAttribute: @component
 }
 help {
 helpText: ```
 value
 ```
 }
 examples {
 examples: ```
 value
 ```
 }
 advanced {
 showDeprecatedAttributeForValues: [
 value
 value
 ]
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

event - APEXlang Reference

event

Parent: plugin

Applies whentype in (item)type in (region)type in (dynamicAction)
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=100

 | internalName | string | Yes | | data type=string; maxLen=45

APEXlang Example

Copy
event sample (
 name: value
 internalName: value
)

---

file - APEXlang Reference

file

Parent: plugin

Applies whentype in (region)type in (dynamicAction)type in (item)type in (templateComponent)type = genAITool and executionLocation = clientSide
Property Groups:
file

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

APEXlang Example

Copy
file sample (
 file {
 fileName: value
 content: value
 mimeType: value
 charSet: iso-8859-6
 }
)

---

slot - APEXlang Reference

slot

Parent: plugin

Applies whentype = templateComponent
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

 | regionTypes | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenregions = true

 | items | boolean | Yes | false | data type=boolean

 | itemTypes | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenitems = true

 | buttons | boolean | Yes | false | data type=boolean

Copy
supports {
 regions: false
 regionTypes: ```json
 value
 ```
 items: false
 itemTypes: ```json
 value
 ```
 buttons: false
}

gridLayout

 | Property | Type | Required | Default Value | Details

 | gridSupport | boolean | Yes | false | data type=boolean

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
 regionTypes: ```json
 value
 ```
 items: false
 itemTypes: ```json
 value
 ```
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

standardAttributeConfig - APEXlang Reference

standardAttributeConfig

Parent: plugin

Applies whentype in (item)type in (region)type in (process)type in (dynamicAction)type in (restDataSource)
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | enum | Yes | | data type=string; lov=STATIC
Valid values: defaultEndpoint hasLov hasInitJavaScriptCodeAttribute regionSourceIsHtml regionSourceIsPlainText regionSourceIsPlsqlFunctionBody regionSourceIsPlsqlCode regionSourceIsSqlQuery regionSourceSupportsDifferentDataSources
Applies whentype in (dynamicAction)type in (item)type in (region)type in (restDataSource)

Property Groups:
validation
sqlQuery
default
help
examples
dependingOn
comments

validation

 | Property | Type | Required | Default Value | Details

 | required | boolean | Yes | false | data type=boolean

Copy
validation {
 required: false
}

sqlQuery

 | Property | Type | Required | Default Value | Details

 | minColumns | integer | No | | data type=integer; maxLen=3
Applies whentype in (dynamicAction) and name in (hasLov)type in (dynamicAction) and name in (regionSourceIsPlsqlFunctionBody)type in (dynamicAction) and name in (regionSourceIsSqlQuery)type in (dynamicAction) and name in (regionSourceIsPlsqlCode)type in (item) and name in (hasLov)type in (item) and name in (regionSourceIsPlsqlFunctionBody)type in (item) and name in (regionSourceIsSqlQuery)type in (item) and name in (regionSourceIsPlsqlCode)type in (region) and name in (hasLov)type in (region) and name in (regionSourceIsPlsqlFunctionBody)type in (region) and name in (regionSourceIsSqlQuery)type in (region) and name in (regionSourceIsPlsqlCode)type in (restDataSource) and name in (hasLov)type in (restDataSource) and name in (regionSourceIsPlsqlFunctionBody)type in (restDataSource) and name in (regionSourceIsSqlQuery)type in (restDataSource) and name in (regionSourceIsPlsqlCode)

 | maxColumns | integer | No | | data type=integer; maxLen=3
Applies whentype in (dynamicAction) and name in (hasLov)type in (dynamicAction) and name in (regionSourceIsPlsqlFunctionBody)type in (dynamicAction) and name in (regionSourceIsSqlQuery)type in (dynamicAction) and name in (regionSourceIsPlsqlCode)type in (item) and name in (hasLov)type in (item) and name in (regionSourceIsPlsqlFunctionBody)type in (item) and name in (regionSourceIsSqlQuery)type in (item) and name in (regionSourceIsPlsqlCode)type in (region) and name in (hasLov)type in (region) and name in (regionSourceIsPlsqlFunctionBody)type in (region) and name in (regionSourceIsSqlQuery)type in (region) and name in (regionSourceIsPlsqlCode)type in (restDataSource) and name in (hasLov)type in (restDataSource) and name in (regionSourceIsPlsqlFunctionBody)type in (restDataSource) and name in (regionSourceIsSqlQuery)type in (restDataSource) and name in (regionSourceIsPlsqlCode)

Copy
sqlQuery {
 minColumns: 42
 maxColumns: 42
}

default

 | Property | Type | Required | Default Value | Details

 | value | multiline string | No | | data type=multiline string; maxLen=4000

Copy
default {
 value: ```
 value
 ```
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

examples

 | Property | Type | Required | Default Value | Details

 | examples | multiline string | No | | data type=multiline string; maxLen=4000

Copy
examples {
 examples: ```
 value
 ```
}

dependingOn

 | Property | Type | Required | Default Value | Details

 | attribute | reference | No | | data type=reference; lov=COMPONENT; references=customAttribute

 | conditionType | enum | Yes | | data type=string; lov=STATIC
Valid values: = != inList notInList isNull isNotNull
Applies whenattribute is set

 | value | string | Yes | | data type=string; maxLen=4000
Applies whenattribute is set and conditionType in (=)attribute is set and conditionType in (!=)

 | list | array of strings | Yes | | data type=string; maxLen=4000
Applies whenattribute is set and conditionType in (inList)attribute is set and conditionType in (notInList)

 | alwaysEvaluate | boolean | Yes | true | data type=boolean
Applies whenattribute is set

Copy
dependingOn {
 attribute: @component
 conditionType: "="
 value: value
 list: [
 value
 value
 ]
 alwaysEvaluate: false
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
standardAttributeConfig sample (
 name: defaultEndpoint
 validation {
 required: false
 }
 sqlQuery {
 minColumns: 42
 maxColumns: 42
 }
 default {
 value: ```
 value
 ```
 }
 help {
 helpText: ```
 value
 ```
 }
 examples {
 examples: ```
 value
 ```
 }
 dependingOn {
 attribute: @component
 conditionType: "="
 value: value
 list: [
 value
 value
 ]
 alwaysEvaluate: false
 }
 comments {
 comments: ```
 value
 ```
 }
)
