# APEXlang: componentes con padre `componentGroup` (APEX 26.1)


---

component - APEXlang Reference

component

Parent: componentGroup

Property Groups:
component

component

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: accessControlRole appComputation appItem appProcess appSetting authentication authorization buildOption dataLoadDefinition jsonDualityView emailTemplate aiAgent jsonSource list lov mapBackground plugin componentSetting reportLayout restDataSource searchConfig shortcut textMessage

 | appItem | reference | Yes | | data type=reference; lov=COMPONENT; references=appItem
Applies whentype = appItem

 | appProcess | reference | Yes | | data type=reference; lov=COMPONENT; references=appProcess
Applies whentype = appProcess

 | appComputation | reference | Yes | | data type=reference; lov=COMPONENT; references=appComputation
Applies whentype = appComputation

 | appSetting | reference | Yes | | data type=reference; lov=COMPONENT; references=appSetting
Applies whentype = appSetting

 | buildOption | reference | Yes | | data type=reference; lov=COMPONENT; references=buildOption
Applies whentype = buildOption

 | list | reference | Yes | | data type=reference; lov=COMPONENT; references=list
Applies whentype = list

 | searchConfig | reference | Yes | | data type=reference; lov=COMPONENT; references=searchConfig
Applies whentype = searchConfig

 | dataLoadDefinition | reference | Yes | | data type=reference; lov=COMPONENT; references=dataLoadDefinition
Applies whentype = dataLoadDefinition

 | jsonDualityView | reference | Yes | | data type=reference; lov=COMPONENT; references=jsonDualityView
Applies whentype = jsonDualityView

 | jsonSource | reference | Yes | | data type=reference; lov=COMPONENT; references=jsonSource
Applies whentype = jsonSource

 | restDataSource | reference | Yes | | data type=reference; lov=COMPONENT; references=restDataSource
Applies whentype = restDataSource

 | authenticationScheme | reference | Yes | | data type=reference; lov=COMPONENT; references=authentication
Applies whentype = authentication

 | authorizationScheme | enum | Yes | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser
Applies whentype = authorization

 | appAccessControlRole | reference | Yes | | data type=reference; lov=COMPONENT; references=role
Applies whentype = accessControlRole

 | emailTemplate | reference | Yes | | data type=reference; lov=COMPONENT; references=emailTemplate
Applies whentype = emailTemplate

 | lov | reference | Yes | | data type=reference; lov=COMPONENT; references=lov
Applies whentype = lov

 | plugIn | reference | Yes | | data type=reference; lov=COMPONENT; references=plugin
Applies whentype = plugin

 | componentSettings | reference | Yes | | data type=reference; lov=COMPONENT; references=componentSetting
Applies whentype = componentSetting

 | shortcut | reference | Yes | | data type=reference; lov=COMPONENT; references=shortcut
Applies whentype = shortcut

 | mapBackground | reference | Yes | | data type=reference; lov=COMPONENT; references=mapBackground
Applies whentype = mapBackground

 | reportLayout | reference | Yes | | data type=reference; lov=COMPONENT; references=reportLayout
Applies whentype = reportLayout

 | textMessage | reference | Yes | | data type=reference; lov=COMPONENT; references=textMessage
Applies whentype = textMessage

 | aiAgent | reference | Yes | | data type=reference; lov=COMPONENT; references=aiAgent
Applies whentype = aiAgent

Copy
component {
 type: accessControlRole
 appItem: @component
 appProcess: @component
 appComputation: @component
 appSetting: @component
 buildOption: @component
 list: @component
 searchConfig: @component
 dataLoadDefinition: @component
 jsonDualityView: @component
 jsonSource: @component
 restDataSource: @component
 authenticationScheme: @component
 authorizationScheme: mustNotBePublicUser
 appAccessControlRole: @component
 emailTemplate: @component
 lov: @component
 plugIn: @component
 componentSettings: @component
 shortcut: @component
 mapBackground: @component
 reportLayout: @component
 textMessage: @component
 aiAgent: @component
}

APEXlang Example

Copy
component sample (
 component {
 type: accessControlRole
 appItem: @component
 appProcess: @component
 appComputation: @component
 appSetting: @component
 buildOption: @component
 list: @component
 searchConfig: @component
 dataLoadDefinition: @component
 jsonDualityView: @component
 jsonSource: @component
 restDataSource: @component
 authenticationScheme: @component
 authorizationScheme: mustNotBePublicUser
 appAccessControlRole: @component
 emailTemplate: @component
 lov: @component
 plugIn: @component
 componentSettings: @component
 shortcut: @component
 mapBackground: @component
 reportLayout: @component
 textMessage: @component
 aiAgent: @component
 }
)
