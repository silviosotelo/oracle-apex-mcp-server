# APEXlang: componentes con padre `_raiz` (APEX 26.1)


---

appGroup - APEXlang Reference

appGroup

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
advanced
comments

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
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
appGroup sample (
 name: value
 advanced {
 staticId: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

app - APEXlang Reference

app

Children: aiAgent, appComputation, appItem, appProcess, appSetting, authentication, authorization, automation, breadcrumb, buildOption, classicNavigationBarEntry, componentGroup, componentSetting, concatenatedFile, dataLoadDefinition, developerComment, dynamicTranslation, emailTemplate, file, jsonDualityView, jsonSource, languageMapping, legacyDataLoadDefinition, list, lov, mapBackground, page, pageGroup, plugin, pwaScreenshot, pwaShortcut, reportLayout, reportQuery, restDataSource, role, searchConfig, shortcut, substitution, supportingObject, taskDefinition, textMessage, theme, workflow

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | alias | string | Yes | | data type=string; maxLen=80; textCase=UPPER

 | version | string | Yes | Release 1.0 | data type=string; maxLen=255

 | type | enum | Yes | standard | data type=string; lov=STATIC
Valid values: standard library boilerplate theme

 | group | reference | No | | data type=reference; lov=COMPONENT; references=appGroup

Property Groups:
genAI
logo
navigation
navigationMenu
navigationBar
userInterface
appFormatMasks
javaScript
css
authentication
authorization
security
sessionStateProtection
sessionManagement
databaseSession
globalization
progressiveWebApp
customServiceWorker
rowSearch
charValueComparison
reportPrinting
fileStorage
errorHandling
runtime
staticFiles
proxy
availability
advanced
comments

genAI

 | Property | Type | Required | Default Value | Details

 | service | reference | No | | data type=reference; lov=COMPONENT; references=genAIService

 | aiConsentMessage | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenservice is set

 | requestHandlerProcedure | string | No | | data type=string; maxLen=255

 | responseHandlerProcedure | string | No | | data type=string; maxLen=255

Copy
genAI {
 service: @component
 aiConsentMessage: ```
 value
 ```
 requestHandlerProcedure: value
 responseHandlerProcedure: value
}

logo

 | Property | Type | Required | Default Value | Details

 | type | enum | No | | data type=string; lov=STATIC
Valid values: image text imageAndText custom

 | imageUrl | string | Yes | | data type=string; maxLen=4000
Applies whentype in (image)type in (imageAndText)

 | text | string | Yes | | data type=string; maxLen=4000
Applies whentype in (text)type in (imageAndText)

 | customHtml | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whentype = custom

Copy
logo {
 type: image
 imageUrl: value
 text: value
 customHtml: ```
 value
 ```
}

navigation

 | Property | Type | Required | Default Value | Details

 | homeUrl | complex | Yes | | data type=complex; maxLen=2000

 | loginUrl | complex | No | | data type=complex; maxLen=2000

Copy
navigation {
 homeUrl: {
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
 loginUrl: {
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
}

navigationMenu

 | Property | Type | Required | Default Value | Details

 | listTemplate | reference | No | | data type=reference; lov=COMPONENT; references=listTemplate

 | templateOptions | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS
Applies whenlistTemplate is set

 | listPosition | enum | Yes | side | data type=string; lov=STATIC
Valid values: top side
Applies whenlistTemplate is set

 | list | reference | No | | data type=reference; lov=COMPONENT; references=list
Applies whenlistTemplate is set

Copy
navigationMenu {
 listTemplate: @component
 templateOptions: [
 value
 value
 ]
 listPosition: top
 list: @component
}

navigationBar

 | Property | Type | Required | Default Value | Details

 | implementation | enum | Yes | list | data type=string; lov=STATIC
Valid values: classic list

 | list | reference | Yes | | data type=reference; lov=COMPONENT; references=list
Applies whenimplementation = list

 | listTemplate | reference | Yes | | data type=reference; lov=COMPONENT; references=listTemplate
Applies whenimplementation = list

 | templateOptions | array of strings | No | | data type=string; lov=TEMPLATE_OPTIONS
Applies whenimplementation = list and listTemplate is set

Copy
navigationBar {
 implementation: classic
 list: @component
 listTemplate: @component
 templateOptions: [
 value
 value
 ]
}

userInterface

 | Property | Type | Required | Default Value | Details

 | currentTheme | reference | Yes | | data type=reference; lov=COMPONENT; references=theme

 | globalPage | integer | No | | data type=integer; maxLen=32767

 | usersCanChooseThemeStyle | boolean | Yes | false | data type=boolean

 | addBuiltWithApexToFooter | boolean | Yes | true | data type=boolean

 | autoDismissSuccessMessages | boolean | Yes | false | data type=boolean

Copy
userInterface {
 currentTheme: @component
 globalPage: 42
 usersCanChooseThemeStyle: false
 addBuiltWithApexToFooter: false
 autoDismissSuccessMessages: false
}

appFormatMasks

 | Property | Type | Required | Default Value | Details

 | date | string | No | | data type=string; maxLen=255

 | dateTime | string | No | | data type=string; maxLen=255

 | timestamp | string | No | | data type=string; maxLen=255

 | timestampTimeZone | string | No | | data type=string; maxLen=255

Copy
appFormatMasks {
 date: value
 dateTime: value
 timestamp: value
 timestampTimeZone: value
}

javaScript

 | Property | Type | Required | Default Value | Details

 | fileUrls | array of strings | No | | data type=string; maxLen=4000

 | includeLegacyJavascript | array of enums | No | | data type=string; lov=STATIC
Valid values: pre18 18

 | includeJqueryMigrate | boolean | Yes | false | data type=boolean

Copy
javaScript {
 fileUrls: [
 value
 value
 ]
 includeLegacyJavascript: [
 pre18
 "18"
 ]
 includeJqueryMigrate: false
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

authentication

 | Property | Type | Required | Default Value | Details

 | scheme | reference | No | | data type=reference; lov=COMPONENT; references=authentication

 | configProcedureName | string | No | | data type=string; maxLen=255

 | publicUser | string | No | | data type=string; maxLen=255

Copy
authentication {
 scheme: @component
 configProcedureName: value
 publicUser: value
}

authorization

 | Property | Type | Required | Default Value | Details

 | scheme | enum | No | | data type=reference; lov=COMPONENT; references=authorization
Valid values: mustNotBePublicUser

 | runOnPublicPages | boolean | Yes | false | data type=boolean

 | runOnBackgroundJob | boolean | Yes | true | data type=boolean
Applies whenscheme is set

 | sourceForRoleOrGroupSchemes | enum | Yes | accessControlUserRoleAssignments | data type=string; lov=STATIC
Valid values: accessControlUserRoleAssignments authenticationScheme customCode

Copy
authorization {
 scheme: mustNotBePublicUser
 runOnPublicPages: false
 runOnBackgroundJob: false
 sourceForRoleOrGroupSchemes: accessControlUserRoleAssignments
}

security

 | Property | Type | Required | Default Value | Details

 | deepLinking | enum | Yes | false | data type=string; lov=STATIC
Valid values: true false

 | enableDictation | boolean | Yes | false | data type=boolean

 | browserCache | enum | Yes | false | data type=string; lov=STATIC
Valid values: true false

 | embedInFrames | enum | Yes | deny | data type=string; lov=STATIC
Valid values: deny allowSameOrigin allow

 | referrerPolicy | enum | Yes | strictOrigin | data type=string; lov=STATIC
Valid values: noReferrer noReferrerWhenDowngrade origin originWhenCrossOrigin sameOrigin strictOrigin strictOriginWhenCrossOrigin unsafeUrl

 | htmlEscapingMode | enum | Yes | extended | data type=string; lov=STATIC
Valid values: basic extended

 | httpResponseHeaders | multiline string | No | | data type=multiline string; maxLen=4000

 | runtimeApiUsage | array of enums | No | | data type=string; lov=STATIC
Valid values: modifyThisApp modifyOtherApps modifyWorkspaceRepository

Copy
security {
 deepLinking: true
 enableDictation: false
 browserCache: true
 embedInFrames: deny
 referrerPolicy: noReferrer
 htmlEscapingMode: basic
 httpResponseHeaders: ```
 value
 ```
 runtimeApiUsage: [
 modifyThisApp
 modifyOtherApps
 ]
}

sessionStateProtection

 | Property | Type | Required | Default Value | Details

 | enabled | boolean | Yes | true | data type=boolean

 | allowUrlsCreatedAfter | datetime | No | | data type=datetime; maxLen=32767

 | bookmarkHashFunction | enum | Yes | sha2-512bit | data type=string; lov=STATIC
Valid values: sha1 sha2-256bit sha2-384bit sha2-512bit md5

 | checksumSalt | string | No | | data type=string; maxLen=32767

 | acceptPre202UrlChecksums | boolean | No | false | data type=boolean

Copy
sessionStateProtection {
 enabled: false
 allowUrlsCreatedAfter: value
 bookmarkHashFunction: sha1
 checksumSalt: value
 acceptPre202UrlChecksums: false
}

sessionManagement

 | Property | Type | Required | Default Value | Details

 | rejoinSessions | enum | Yes | false | data type=string; lov=STATIC
Valid values: false publicSessions allSessions

 | sessionStateCommits | enum | Yes | endOfRequest | data type=string; lov=STATIC
Valid values: immediate endOfRequest

 | maxSessionLength | integer | No | | data type=integer; maxLen=32767

 | sessionTimeoutUrl | string | No | | data type=string; maxLen=4000

 | maxSessionIdleTime | integer | No | | data type=integer; maxLen=32767

 | sessionIdleTimeoutUrl | string | No | | data type=string; maxLen=4000

 | sessionTimeoutWarning | integer | No | | data type=integer; maxLen=32767

Copy
sessionManagement {
 rejoinSessions: false
 sessionStateCommits: immediate
 maxSessionLength: 42
 sessionTimeoutUrl: value
 maxSessionIdleTime: 42
 sessionIdleTimeoutUrl: value
 sessionTimeoutWarning: 42
}

databaseSession

 | Property | Type | Required | Default Value | Details

 | parsingSchema | string | No | | data type=string; maxLen=128

 | mleEnvironment | string | No | | data type=string; maxLen=255

 | initPlsqlCode | multiline string | No | | data type=multiline string; maxLen=4000

 | cleanupPlsqlCode | multiline string | No | | data type=multiline string; maxLen=4000

Copy
databaseSession {
 parsingSchema: value
 mleEnvironment: value
 initPlsqlCode: ```plsql
 value
 ```
 cleanupPlsqlCode: ```plsql
 value
 ```
}

globalization

 | Property | Type | Required | Default Value | Details

 | primaryLanguage | enum | Yes | en | data type=string; lov=STATIC
Valid values: af sq ar-dz ar-bh ar-eg ar-iq ar-jo ar-kw ar-lb ar-ly ar-ma ar-om ar-qa ar-sa ar-sy ar-tn ar-ae ar-ye ar hy as az eu be bn ba bg km ca zh-cn zh-hk zh-mo zh-sg zh-tw zh hr cs da nl-be nl en-au en-bz en-ca en-ie en-jm en-nz en-ph en-za en-tt en-gb en-us en-zw en et mk fo fa fi fr-be fr-ca fr fr-lu fr-mc fr-ch gd gl de-at de de-li de-lu de-ch el gu he hi hu is id ga it it-ch ja kn kk kok ko kz lv lt ms ml mt mr me ne nb-no no nn-no or pl pt-br pt pa ro ru-md ru sr-cyrl sr-latn sr sk sl es-ar es-bo es-cl es-co es-cr es-do es-ec es-sv es-gt es-hn es-mx es-ni es-pa es-py es-pe es-pr es es-us es-uy es-ve sw sv-fi sv ta te th tr uk ur uz vi cy

 | documentDirection | enum | No | | data type=string; lov=STATIC
Valid values: leftToRight rightToLeft

 | translationMethod | enum | No | | data type=string; lov=STATIC
Valid values: translationApps textMessages

 | languageDerivedFrom | enum | Yes | appPrimaryLanguage | data type=string; lov=STATIC
Valid values: notTranslated appPrimaryLanguage browserPreference appPreference itemPreference session

 | autoTimeZone | boolean | Yes | false | data type=boolean

 | autoCsvEncoding | boolean | Yes | true | data type=boolean

Copy
globalization {
 primaryLanguage: af
 documentDirection: leftToRight
 translationMethod: translationApps
 languageDerivedFrom: notTranslated
 autoTimeZone: false
 autoCsvEncoding: false
}

progressiveWebApp

 | Property | Type | Required | Default Value | Details

 | enable | boolean | Yes | true | data type=boolean

 | installable | boolean | Yes | false | data type=boolean
Applies whenenable = true

 | display | enum | Yes | standalone | data type=string; lov=STATIC
Valid values: fullscreen standalone minimalUI browser
Applies whenenable = true and installable = true

 | screenOrientation | enum | Yes | any | data type=string; lov=STATIC
Valid values: any natural landscape landscapePrimary landscapeSecondary portrait portraitPrimary portraitSecondary
Applies whenenable = true and installable = true

 | themeColor | string | No | | data type=string; maxLen=128
Applies whenenable = true and installable = true

 | backgroundColor | string | No | | data type=string; maxLen=128
Applies whenenable = true and installable = true

 | appDescription | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenenable = true and installable = true

 | appShortName | string | No | | data type=string; maxLen=18
Applies whenenable = true

 | customManifest | multiline string | No | | data type=multiline string; maxLen=4000
Applies whenenable = true and installable = true

 | manifestIconUrl | string | No | | data type=string; maxLen=255
Applies whenenable = true

 | enablePushNotifications | boolean | Yes | false | data type=boolean
Applies whenenable = true

 | pushNotificationsCredentials | reference | Yes | | data type=reference; lov=COMPONENT; references=webCredential
Applies whenenable = true and enablePushNotifications = true

 | contactEmail | string | No | | data type=string; maxLen=255
Applies whenenable = true and enablePushNotifications = true

Copy
progressiveWebApp {
 enable: false
 installable: false
 display: fullscreen
 screenOrientation: any
 themeColor: value
 backgroundColor: value
 appDescription: ```
 value
 ```
 appShortName: value
 customManifest: ```
 value
 ```
 manifestIconUrl: value
 enablePushNotifications: false
 pushNotificationsCredentials: @component
 contactEmail: value
}

customServiceWorker

 | Property | Type | Required | Default Value | Details

 | mode | enum | Yes | default | data type=string; lov=STATIC
Valid values: default custom url
Applies whenenable = true

 | url | string | Yes | | data type=string; maxLen=32767
Applies whenenable = true and mode = url

 | functionVariableDeclarationMode | enum | Yes | default | data type=string; lov=STATIC
Valid values: default hook
Applies whenenable = true and mode = custom

 | functionVariableDeclaration | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and functionVariableDeclarationMode = hook

 | installMode | enum | Yes | default | data type=string; lov=STATIC
Valid values: default custom hook
Applies whenenable = true and mode = custom

 | eventInstall | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and installMode = custom

 | eventInstallBefore | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and installMode = hook

 | eventInstallAfter | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and installMode = hook

 | activateMode | enum | Yes | default | data type=string; lov=STATIC
Valid values: default custom hook
Applies whenenable = true and mode = custom

 | eventActivate | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and activateMode = custom

 | eventActivateBefore | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and activateMode = hook

 | eventActivateAfter | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and activateMode = hook

 | fetchMode | enum | Yes | default | data type=string; lov=STATIC
Valid values: default custom hook
Applies whenenable = true and mode = custom

 | eventFetch | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and fetchMode = custom

 | eventFetchBefore | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and fetchMode = hook

 | eventFetchCacheDefinition | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and fetchMode = hook

 | eventFetchCacheResponse | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and fetchMode = hook

 | eventFetchNetworkResponseSuccess | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and fetchMode = hook

 | eventFetchNetworkResponseError | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and fetchMode = hook

 | eventFetchOfflinePage | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and fetchMode = hook

 | eventFetchNetworkFallback | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and fetchMode = hook

 | syncMode | enum | Yes | default | data type=string; lov=STATIC
Valid values: default custom
Applies whenenable = true and mode = custom

 | eventSync | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and syncMode = custom

 | pushMode | enum | Yes | default | data type=string; lov=STATIC
Valid values: default custom hook
Applies whenenable = true and mode = custom

 | eventPush | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and pushMode = custom

 | eventPushBefore | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and pushMode = hook

 | eventPushAfter | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and pushMode = hook

 | notificationClickMode | enum | Yes | default | data type=string; lov=STATIC
Valid values: default custom hook
Applies whenenable = true and mode = custom

 | eventNotificationClick | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and notificationClickMode = custom

 | evenNotificationClickBefore | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and notificationClickMode = hook

 | evenNotificationClickAfter | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and notificationClickMode = hook

 | notificationCloseMode | enum | Yes | default | data type=string; lov=STATIC
Valid values: default custom hook
Applies whenenable = true and mode = custom

 | evenNotificationClose | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and notificationCloseMode = custom

 | canMakePaymentMode | enum | Yes | default | data type=string; lov=STATIC
Valid values: default custom
Applies whenenable = true and mode = custom

 | evenCanMakePayment | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and canMakePaymentMode = custom

 | paymentRequestMode | enum | Yes | default | data type=string; lov=STATIC
Valid values: default custom
Applies whenenable = true and mode = custom

 | evenPaymentRequest | multiline string | No | | data type=multiline string; maxLen=32767
Applies whenenable = true and mode = custom and paymentRequestMode = custom

Copy
customServiceWorker {
 mode: default
 url: value
 functionVariableDeclarationMode: default
 functionVariableDeclaration: ```javascript-browser
 value
 ```
 installMode: default
 eventInstall: ```javascript-browser
 value
 ```
 eventInstallBefore: ```javascript-browser
 value
 ```
 eventInstallAfter: ```javascript-browser
 value
 ```
 activateMode: default
 eventActivate: ```javascript-browser
 value
 ```
 eventActivateBefore: ```javascript-browser
 value
 ```
 eventActivateAfter: ```javascript-browser
 value
 ```
 fetchMode: default
 eventFetch: ```javascript-browser
 value
 ```
 eventFetchBefore: ```javascript-browser
 value
 ```
 eventFetchCacheDefinition: ```javascript-browser
 value
 ```
 eventFetchCacheResponse: ```javascript-browser
 value
 ```
 eventFetchNetworkResponseSuccess: ```javascript-browser
 value
 ```
 eventFetchNetworkResponseError: ```javascript-browser
 value
 ```
 eventFetchOfflinePage: ```javascript-browser
 value
 ```
 eventFetchNetworkFallback: ```javascript-browser
 value
 ```
 syncMode: default
 eventSync: ```javascript-browser
 value
 ```
 pushMode: default
 eventPush: ```javascript-browser
 value
 ```
 eventPushBefore: ```javascript-browser
 value
 ```
 eventPushAfter: ```javascript-browser
 value
 ```
 notificationClickMode: default
 eventNotificationClick: ```javascript-browser
 value
 ```
 evenNotificationClickBefore: ```javascript-browser
 value
 ```
 evenNotificationClickAfter: ```javascript-browser
 value
 ```
 notificationCloseMode: default
 evenNotificationClose: ```javascript-browser
 value
 ```
 canMakePaymentMode: default
 evenCanMakePayment: ```javascript-browser
 value
 ```
 paymentRequestMode: default
 evenPaymentRequest: ```javascript-browser
 value
 ```
}

rowSearch

 | Property | Type | Required | Default Value | Details

 | tokenize | boolean | Yes | true | data type=boolean

 | textQueryFunction | enum | No | | data type=string; lov=STATIC
Valid values: searchEngine expertSearch custom

 | customFunctionName | string | Yes | | data type=string; maxLen=500
Applies whentextQueryFunction = custom

Copy
rowSearch {
 tokenize: false
 textQueryFunction: searchEngine
 customFunctionName: value
}

charValueComparison

 | Property | Type | Required | Default Value | Details

 | mode | string | No | | data type=string; maxLen=255

 | behavior | enum | No | | data type=string; lov=STATIC
Valid values: binary linguistic

Copy
charValueComparison {
 mode: value
 behavior: binary
}

reportPrinting

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | native | data type=string; lov=STATIC
Valid values: native remote useInstanceSettings

 | remotePrintServer | reference | Yes | | data type=reference; lov=COMPONENT; references=printServer
Applies whentype = remote

 | credentials | reference | No | | data type=reference; lov=COMPONENT; references=webCredential
Applies whentype = remote

Copy
reportPrinting {
 type: native
 remotePrintServer: @component
 credentials: @component
}

fileStorage

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | database | data type=string; lov=STATIC
Valid values: database objectStorage

 | fileServer | reference | No | | data type=reference; lov=COMPONENT; references=fileServer
Applies whentype = objectStorage

Copy
fileStorage {
 type: database
 fileServer: @component
}

errorHandling

 | Property | Type | Required | Default Value | Details

 | defaultDisplayLocation | enum | Yes | inlineWithFieldAndInNotification | data type=string; lov=STATIC
Valid values: inlineWithFieldAndInNotification inlineWithField inlineInNotification

 | errorHandlingFunctionName | string | No | | data type=string; maxLen=255

Copy
errorHandling {
 defaultDisplayLocation: inlineWithFieldAndInNotification
 errorHandlingFunctionName: value
}

runtime

 | Property | Type | Required | Default Value | Details

 | friendlyUrls | boolean | Yes | true | data type=boolean

 | allowFeedback | boolean | Yes | false | data type=boolean

 | logging | boolean | Yes | YES | data type=boolean

 | debugging | boolean | Yes | 0 | data type=boolean

 | compatibilityMode | enum | Yes | 26.1 | data type=string; lov=STATIC
Valid values: 26.1 24.2 21.2 19.2-20.1-20.2-21.1 19.1 5.1-18.1-18.2 5.0 4.2 4.1 4.0

 | accessibleReadOnlyItems | boolean | Yes | true | data type=boolean

Copy
runtime {
 friendlyUrls: false
 allowFeedback: false
 logging: false
 debugging: false
 compatibilityMode: "26.1"
 accessibleReadOnlyItems: false
}

staticFiles

 | Property | Type | Required | Default Value | Details

 | appFilesPath | string | No | | data type=string; maxLen=255

 | apexFilesPath | string | No | | data type=string; maxLen=255

Copy
staticFiles {
 appFilesPath: value
 apexFilesPath: value
}

proxy

 | Property | Type | Required | Default Value | Details

 | proxyServer | string | No | | data type=string; maxLen=255

 | noProxyDomains | string | No | | data type=string; maxLen=500
Applies whenproxyServer is set

Copy
proxy {
 proxyServer: value
 noProxyDomains: value
}

availability

 | Property | Type | Required | Default Value | Details

 | status | enum | Yes | availableWithDevToolbar | data type=string; lov=STATIC
Valid values: available availableWithDevToolbar availableDevsOnly restricted unavailable unavailableStatusShownWithPlsql unavailableRedirectToUrl

 | message | multiline string | Yes | | data type=multiline string; maxLen=4000
Applies whenstatus in (unavailable)status in (unavailableStatusShownWithPlsql)status in (unavailableRedirectToUrl)

 | restrictUserList | array of multiline strings | Yes | | data type=multiline string; maxLen=4000
Applies whenstatus = restricted

 | globalNotificationMessage | multiline string | No | | data type=multiline string; maxLen=4000

 | buildStatus | enum | Yes | runAndBuild | data type=string; lov=STATIC
Valid values: runOnly runAndBuild
Applies whentype in (standard)type in (boilerplate)

Copy
availability {
 status: available
 message: ```
 value
 ```
 restrictUserList: [
 value
 value
 ]
 globalNotificationMessage: ```
 value
 ```
 buildStatus: runOnly
}

advanced

 | Property | Type | Required | Default Value | Details

 | exactSubstitutions | boolean | No | true | data type=boolean

 | passEcid | boolean | Yes | true | data type=boolean

 | modernizeApp | boolean | Yes | false | data type=boolean

 | emailFromAddress | string | No | | data type=string; maxLen=255

 | copyrightBanner | multiline string | No | | data type=multiline string; maxLen=4000

 | faviconHtml | multiline string | No | | data type=multiline string; maxLen=4000

 | maxBackgroundPageProcessJobs | integer | No | | data type=integer; maxLen=32767

 | vacationRuleProcedureName | string | No | | data type=string; maxLen=500

 | mediaType | string | No | | data type=string; maxLen=255

 | opentelemetryProductFamily | string | No | | data type=string; maxLen=255

 | appBuilderIconName | string | No | | data type=string; maxLen=255

Copy
advanced {
 exactSubstitutions: false
 passEcid: false
 modernizeApp: false
 emailFromAddress: value
 copyrightBanner: ```
 value
 ```
 faviconHtml: ```
 value
 ```
 maxBackgroundPageProcessJobs: 42
 vacationRuleProcedureName: value
 mediaType: value
 opentelemetryProductFamily: value
 appBuilderIconName: value
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
app sample (
 name: value
 alias: value
 version: value
 type: standard
 group: @component
 genAI {
 service: @component
 aiConsentMessage: ```
 value
 ```
 requestHandlerProcedure: value
 responseHandlerProcedure: value
 }
 logo {
 type: image
 imageUrl: value
 text: value
 customHtml: ```
 value
 ```
 }
 navigation {
 homeUrl: {
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
 loginUrl: {
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
 }
 navigationMenu {
 listTemplate: @component
 templateOptions: [
 value
 value
 ]
 listPosition: top
 list: @component
 }
 navigationBar {
 implementation: classic
 list: @component
 listTemplate: @component
 templateOptions: [
 value
 value
 ]
 }
 userInterface {
 currentTheme: @component
 globalPage: 42
 usersCanChooseThemeStyle: false
 addBuiltWithApexToFooter: false
 autoDismissSuccessMessages: false
 }
 appFormatMasks {
 date: value
 dateTime: value
 timestamp: value
 timestampTimeZone: value
 }
 javaScript {
 fileUrls: [
 value
 value
 ]
 includeLegacyJavascript: [
 pre18
 "18"
 ]
 includeJqueryMigrate: false
 }
 css {
 fileUrls: [
 value
 value
 ]
 }
 authentication {
 scheme: @component
 configProcedureName: value
 publicUser: value
 }
 authorization {
 scheme: mustNotBePublicUser
 runOnPublicPages: false
 runOnBackgroundJob: false
 sourceForRoleOrGroupSchemes: accessControlUserRoleAssignments
 }
 security {
 deepLinking: true
 enableDictation: false
 browserCache: true
 embedInFrames: deny
 referrerPolicy: noReferrer
 htmlEscapingMode: basic
 httpResponseHeaders: ```
 value
 ```
 runtimeApiUsage: [
 modifyThisApp
 modifyOtherApps
 ]
 }
 sessionStateProtection {
 enabled: false
 allowUrlsCreatedAfter: value
 bookmarkHashFunction: sha1
 checksumSalt: value
 acceptPre202UrlChecksums: false
 }
 sessionManagement {
 rejoinSessions: false
 sessionStateCommits: immediate
 maxSessionLength: 42
 sessionTimeoutUrl: value
 maxSessionIdleTime: 42
 sessionIdleTimeoutUrl: value
 sessionTimeoutWarning: 42
 }
 databaseSession {
 parsingSchema: value
 mleEnvironment: value
 initPlsqlCode: ```plsql
 value
 ```
 cleanupPlsqlCode: ```plsql
 value
 ```
 }
 globalization {
 primaryLanguage: af
 documentDirection: leftToRight
 translationMethod: translationApps
 languageDerivedFrom: notTranslated
 autoTimeZone: false
 autoCsvEncoding: false
 }
 progressiveWebApp {
 enable: false
 installable: false
 display: fullscreen
 screenOrientation: any
 themeColor: value
 backgroundColor: value
 appDescription: ```
 value
 ```
 appShortName: value
 customManifest: ```
 value
 ```
 manifestIconUrl: value
 enablePushNotifications: false
 pushNotificationsCredentials: @component
 contactEmail: value
 }
 customServiceWorker {
 mode: default
 url: value
 functionVariableDeclarationMode: default
 functionVariableDeclaration: ```javascript-browser
 value
 ```
 installMode: default
 eventInstall: ```javascript-browser
 value
 ```
 eventInstallBefore: ```javascript-browser
 value
 ```
 eventInstallAfter: ```javascript-browser
 value
 ```
 activateMode: default
 eventActivate: ```javascript-browser
 value
 ```
 eventActivateBefore: ```javascript-browser
 value
 ```
 eventActivateAfter: ```javascript-browser
 value
 ```
 fetchMode: default
 eventFetch: ```javascript-browser
 value
 ```
 eventFetchBefore: ```javascript-browser
 value
 ```
 eventFetchCacheDefinition: ```javascript-browser
 value
 ```
 eventFetchCacheResponse: ```javascript-browser
 value
 ```
 eventFetchNetworkResponseSuccess: ```javascript-browser
 value
 ```
 eventFetchNetworkResponseError: ```javascript-browser
 value
 ```
 eventFetchOfflinePage: ```javascript-browser
 value
 ```
 eventFetchNetworkFallback: ```javascript-browser
 value
 ```
 syncMode: default
 eventSync: ```javascript-browser
 value
 ```
 pushMode: default
 eventPush: ```javascript-browser
 value
 ```
 eventPushBefore: ```javascript-browser
 value
 ```
 eventPushAfter: ```javascript-browser
 value
 ```
 notificationClickMode: default
 eventNotificationClick: ```javascript-browser
 value
 ```
 evenNotificationClickBefore: ```javascript-browser
 value
 ```
 evenNotificationClickAfter: ```javascript-browser
 value
 ```
 notificationCloseMode: default
 evenNotificationClose: ```javascript-browser
 value
 ```
 canMakePaymentMode: default
 evenCanMakePayment: ```javascript-browser
 value
 ```
 paymentRequestMode: default
 evenPaymentRequest: ```javascript-browser
 value
 ```
 }
 rowSearch {
 tokenize: false
 textQueryFunction: searchEngine
 customFunctionName: value
 }
 charValueComparison {
 mode: value
 behavior: binary
 }
 reportPrinting {
 type: native
 remotePrintServer: @component
 credentials: @component
 }
 fileStorage {
 type: database
 fileServer: @component
 }
 errorHandling {
 defaultDisplayLocation: inlineWithFieldAndInNotification
 errorHandlingFunctionName: value
 }
 runtime {
 friendlyUrls: false
 allowFeedback: false
 logging: false
 debugging: false
 compatibilityMode: "26.1"
 accessibleReadOnlyItems: false
 }
 staticFiles {
 appFilesPath: value
 apexFilesPath: value
 }
 proxy {
 proxyServer: value
 noProxyDomains: value
 }
 availability {
 status: available
 message: ```
 value
 ```
 restrictUserList: [
 value
 value
 ]
 globalNotificationMessage: ```
 value
 ```
 buildStatus: runOnly
 }
 advanced {
 exactSubstitutions: false
 passEcid: false
 modernizeApp: false
 emailFromAddress: value
 copyrightBanner: ```
 value
 ```
 faviconHtml: ```
 value
 ```
 maxBackgroundPageProcessJobs: 42
 vacationRuleProcedureName: value
 mediaType: value
 opentelemetryProductFamily: value
 appBuilderIconName: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authenticationServer - APEXlang Reference

authenticationServer

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
endpointUrl
dynamicConfig
advanced
comments

endpointUrl

 | Property | Type | Required | Default Value | Details

 | url | string | Yes | | data type=string; maxLen=4000

Copy
endpointUrl {
 url: value
}

dynamicConfig

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32000

 | procedureName | string | No | | data type=string; maxLen=255

Copy
dynamicConfig {
 plsqlCode: ```plsql
 value
 ```
 procedureName: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | promptOnInstall | boolean | Yes | false | data type=boolean

 | httpsHostName | string | No | | data type=string; maxLen=500

Copy
advanced {
 staticId: value
 promptOnInstall: false
 httpsHostName: value
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
authenticationServer sample (
 name: value
 endpointUrl {
 url: value
 }
 dynamicConfig {
 plsqlCode: ```plsql
 value
 ```
 procedureName: value
 }
 advanced {
 staticId: value
 promptOnInstall: false
 httpsHostName: value
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

fileServer - APEXlang Reference

fileServer

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
endpointUrl
authentication
advanced
comments

endpointUrl

 | Property | Type | Required | Default Value | Details

 | url | string | Yes | | data type=string; maxLen=4000

Copy
endpointUrl {
 url: value
}

authentication

 | Property | Type | Required | Default Value | Details

 | credentials | reference | No | | data type=reference; lov=COMPONENT; references=webCredential

Copy
authentication {
 credentials: @component
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | promptOnInstall | boolean | Yes | false | data type=boolean

 | httpsHostName | string | No | | data type=string; maxLen=500

Copy
advanced {
 staticId: value
 promptOnInstall: false
 httpsHostName: value
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
fileServer sample (
 name: value
 endpointUrl {
 url: value
 }
 authentication {
 credentials: @component
 }
 advanced {
 staticId: value
 promptOnInstall: false
 httpsHostName: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

genAIService - APEXlang Reference

genAIService

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | provider | enum | Yes | | data type=string; lov=STATIC
Valid values: ociGenAI openai cohere googleGemini genericOpenaiApiCompatible

Property Groups:
endpointUrl
authentication
additionalData
appBuilder
advanced
comments

endpointUrl

 | Property | Type | Required | Default Value | Details

 | url | string | Yes | | data type=string; maxLen=4000

Copy
endpointUrl {
 url: value
}

authentication

 | Property | Type | Required | Default Value | Details

 | credentials | reference | No | | data type=reference; lov=COMPONENT; references=webCredential

Copy
authentication {
 credentials: @component
}

additionalData

 | Property | Type | Required | Default Value | Details

 | httpHeaders | multiline string | No | | data type=multiline string; maxLen=4000

 | attributes | multiline string | No | | data type=multiline string; maxLen=4000

Copy
additionalData {
 httpHeaders: ```
 value
 ```
 attributes: ```
 value
 ```
}

appBuilder

 | Property | Type | Required | Default Value | Details

 | usedByAppBuilder | boolean | Yes | false | data type=boolean

 | defaultForNewApps | boolean | Yes | false | data type=boolean

Copy
appBuilder {
 usedByAppBuilder: false
 defaultForNewApps: false
}

advanced

 | Property | Type | Required | Default Value | Details

 | modelName | string | No | | data type=string; maxLen=255

 | maxTokens | integer | No | | data type=integer; maxLen=32767

 | serverTimeout | integer | No | | data type=integer; maxLen=32767

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 modelName: value
 maxTokens: 42
 serverTimeout: 42
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
genAIService sample (
 name: value
 provider: ociGenAI
 endpointUrl {
 url: value
 }
 authentication {
 credentials: @component
 }
 additionalData {
 httpHeaders: ```
 value
 ```
 attributes: ```
 value
 ```
 }
 appBuilder {
 usedByAppBuilder: false
 defaultForNewApps: false
 }
 advanced {
 modelName: value
 maxTokens: 42
 serverTimeout: 42
 staticId: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

printServer - APEXlang Reference

printServer

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | oracleBiPublisher | data type=string; lov=STATIC
Valid values: oracleBiPublisher apacheFop apexOfficePrint documentGenerator

Property Groups:
endpointUrl
advanced
comments

endpointUrl

 | Property | Type | Required | Default Value | Details

 | url | string | Yes | | data type=string; maxLen=4000

Copy
endpointUrl {
 url: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | promptOnInstall | boolean | Yes | false | data type=boolean

 | httpsHostName | string | No | | data type=string; maxLen=500

 | serverTimeout | integer | Yes | 300 | data type=integer; maxLen=32767

Copy
advanced {
 staticId: value
 promptOnInstall: false
 httpsHostName: value
 serverTimeout: 42
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
printServer sample (
 name: value
 type: oracleBiPublisher
 endpointUrl {
 url: value
 }
 advanced {
 staticId: value
 promptOnInstall: false
 httpsHostName: value
 serverTimeout: 42
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

restDataSourceServer - APEXlang Reference

restDataSourceServer

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
endpointUrl
dynamicConfig
advanced
comments

endpointUrl

 | Property | Type | Required | Default Value | Details

 | url | string | Yes | | data type=string; maxLen=4000

Copy
endpointUrl {
 url: value
}

dynamicConfig

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32000

 | procedureName | string | No | | data type=string; maxLen=255

Copy
dynamicConfig {
 plsqlCode: ```plsql
 value
 ```
 procedureName: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | promptOnInstall | boolean | Yes | false | data type=boolean

 | httpsHostName | string | No | | data type=string; maxLen=500

Copy
advanced {
 staticId: value
 promptOnInstall: false
 httpsHostName: value
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
restDataSourceServer sample (
 name: value
 endpointUrl {
 url: value
 }
 dynamicConfig {
 plsqlCode: ```plsql
 value
 ```
 procedureName: value
 }
 advanced {
 staticId: value
 promptOnInstall: false
 httpsHostName: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

restEnabledSqlDatabase - APEXlang Reference

restEnabledSqlDatabase

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

Property Groups:
endpointUrl
authentication
database
databaseSession
session
dynamicConfig
advanced
comments

endpointUrl

 | Property | Type | Required | Default Value | Details

 | url | string | Yes | | data type=string; maxLen=4000

Copy
endpointUrl {
 url: value
}

authentication

 | Property | Type | Required | Default Value | Details

 | credentials | reference | Yes | | data type=reference; lov=COMPONENT; references=webCredential

Copy
authentication {
 credentials: @component
}

database

 | Property | Type | Required | Default Value | Details

 | databaseType | enum | No | | data type=string; lov=STATIC
Valid values: oracle mysql

 | databaseInfo | multiline string | No | | data type=multiline string; maxLen=4000
Applies whendatabaseType is set

Copy
database {
 databaseType: oracle
 databaseInfo: ```
 value
 ```
}

databaseSession

 | Property | Type | Required | Default Value | Details

 | initPlsqlCode | multiline string | No | | data type=multiline string; maxLen=4000

 | cleanupPlsqlCode | multiline string | No | | data type=multiline string; maxLen=4000

Copy
databaseSession {
 initPlsqlCode: ```plsql
 value
 ```
 cleanupPlsqlCode: ```plsql
 value
 ```
}

session

 | Property | Type | Required | Default Value | Details

 | defaultSchema | string | No | | data type=string; maxLen=255
Applies whendatabaseType = mysql

 | mysqlSqlModes | string | No | | data type=string; maxLen=4000
Applies whendatabaseType = mysql

Copy
session {
 defaultSchema: value
 mysqlSqlModes: value
}

dynamicConfig

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32000

 | procedureName | string | No | | data type=string; maxLen=255

Copy
dynamicConfig {
 plsqlCode: ```plsql
 value
 ```
 procedureName: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

 | promptOnInstall | boolean | Yes | false | data type=boolean

 | httpsHostName | string | No | | data type=string; maxLen=500

 | ordsVersion | string | No | | data type=string; maxLen=255

 | serverTimeZone | string | No | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
 promptOnInstall: false
 httpsHostName: value
 ordsVersion: value
 serverTimeZone: value
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
restEnabledSqlDatabase sample (
 name: value
 endpointUrl {
 url: value
 }
 authentication {
 credentials: @component
 }
 database {
 databaseType: oracle
 databaseInfo: ```
 value
 ```
 }
 databaseSession {
 initPlsqlCode: ```plsql
 value
 ```
 cleanupPlsqlCode: ```plsql
 value
 ```
 }
 session {
 defaultSchema: value
 mysqlSqlModes: value
 }
 dynamicConfig {
 plsqlCode: ```plsql
 value
 ```
 procedureName: value
 }
 advanced {
 staticId: value
 promptOnInstall: false
 httpsHostName: value
 ordsVersion: value
 serverTimeZone: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

vectorProvider - APEXlang Reference

vectorProvider

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: databaseOnnxModel genAIService customPlsql

Property Groups:
localEmbedding
genAIService
endpointUrl
authentication
additionalData
advanced
comments

localEmbedding

 | Property | Type | Required | Default Value | Details

 | owner | string | No | | data type=string; maxLen=32767
Applies whentype = databaseOnnxModel

 | modelName | string | Yes | | data type=string; maxLen=32767
Applies whentype = databaseOnnxModel

 | function | string | Yes | | data type=string; maxLen=255
Applies whentype = customPlsql

Copy
localEmbedding {
 owner: value
 modelName: value
 function: value
}

genAIService

 | Property | Type | Required | Default Value | Details

 | provider | enum | Yes | | data type=string; lov=STATIC
Valid values: ociGenAI openai cohere googleGemini genericOpenaiApiCompatible
Applies whentype = genAIService

 | modelName | string | No | | data type=string; maxLen=255
Applies whentype = genAIService

Copy
genAIService {
 provider: ociGenAI
 modelName: value
}

endpointUrl

 | Property | Type | Required | Default Value | Details

 | url | string | Yes | | data type=string; maxLen=4000
Applies whentype = genAIService

Copy
endpointUrl {
 url: value
}

authentication

 | Property | Type | Required | Default Value | Details

 | credentials | reference | Yes | | data type=reference; lov=COMPONENT; references=webCredential
Applies whentype = genAIService

Copy
authentication {
 credentials: @component
}

additionalData

 | Property | Type | Required | Default Value | Details

 | httpHeaders | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = genAIService

 | attributes | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = genAIService and provider = ociGenAI

Copy
additionalData {
 httpHeaders: ```
 value
 ```
 attributes: ```
 value
 ```
}

advanced

 | Property | Type | Required | Default Value | Details

 | maxTokens | integer | No | | data type=integer; maxLen=32767

 | serverTimeout | integer | No | | data type=integer; maxLen=32767

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 maxTokens: 42
 serverTimeout: 42
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
vectorProvider sample (
 name: value
 type: databaseOnnxModel
 localEmbedding {
 owner: value
 modelName: value
 function: value
 }
 genAIService {
 provider: ociGenAI
 modelName: value
 }
 endpointUrl {
 url: value
 }
 authentication {
 credentials: @component
 }
 additionalData {
 httpHeaders: ```
 value
 ```
 attributes: ```
 value
 ```
 }
 advanced {
 maxTokens: 42
 serverTimeout: 42
 staticId: value
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

webCredential - APEXlang Reference

webCredential

Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | basicAuthentication | data type=string; lov=STATIC
Valid values: basicAuthentication oauth2ClientCredentialsFlow oci httpHeader urlQueryString keyPair certificatePrivateKeyPair oauth2PasswordFlow signedUserAssertion userAssertionSigningCertificate

Property Groups:
authentication
advanced
comments

authentication

 | Property | Type | Required | Default Value | Details

 | databaseCredentialName | string | No | | data type=string; maxLen=128
Applies whentype in (basicAuthentication)type in (oauth2ClientCredentialsFlow)type in (signedUserAssertion)type in (oauth2PasswordFlow)

 | instanceLevelDatabaseCredential | boolean | Yes | false | data type=boolean
Applies whentype in (basicAuthentication) and databaseCredentialName is settype in (oauth2ClientCredentialsFlow) and databaseCredentialName is settype in (signedUserAssertion) and databaseCredentialName is settype in (oauth2PasswordFlow) and databaseCredentialName is set

 | oauthScope | string | No | | data type=string; maxLen=255
Applies whentype in (oauth2ClientCredentialsFlow)type in (signedUserAssertion)type in (oauth2PasswordFlow)

 | clientIdOrUsername | string | No | | data type=string; maxLen=4000
Applies whentype in (basicAuthentication)type in (basicAuthentication) and type in (oauth2ClientCredentialsFlow)type in (basicAuthentication) and type in (signedUserAssertion)type in (basicAuthentication) and type in (oauth2PasswordFlow)type in (oauth2ClientCredentialsFlow) and type in (basicAuthentication)type in (oauth2ClientCredentialsFlow)type in (oauth2ClientCredentialsFlow) and type in (signedUserAssertion)type in (oauth2ClientCredentialsFlow) and type in (oauth2PasswordFlow)type in (signedUserAssertion) and type in (basicAuthentication)type in (signedUserAssertion) and type in (oauth2ClientCredentialsFlow)type in (signedUserAssertion)type in (signedUserAssertion) and type in (oauth2PasswordFlow)type in (oauth2PasswordFlow) and type in (basicAuthentication)type in (oauth2PasswordFlow) and type in (oauth2ClientCredentialsFlow)type in (oauth2PasswordFlow) and type in (signedUserAssertion)type in (oauth2PasswordFlow)

 | ociUserId | string | No | | data type=string; maxLen=32767
Applies whentype = oci

 | ociTenancyId | string | No | | data type=string; maxLen=4000
Applies whentype = oci

 | ociPublicKeyFingerprint | string | No | | data type=string; maxLen=4000
Applies whentype = oci

 | certificate | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype in (certificatePrivateKeyPair)type in (userAssertionSigningCertificate)

 | publicKey | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = keyPair

 | audienceList | string | No | | data type=string; maxLen=32767
Applies whentype = userAssertionSigningCertificate

 | certificateAlias | string | No | | data type=string; maxLen=32767
Applies whentype = userAssertionSigningCertificate

 | credentialName | string | No | | data type=string; maxLen=4000
Applies whentype in (httpHeader)type in (urlQueryString)

Copy
authentication {
 databaseCredentialName: value
 instanceLevelDatabaseCredential: false
 oauthScope: value
 clientIdOrUsername: value
 ociUserId: value
 ociTenancyId: value
 ociPublicKeyFingerprint: value
 certificate: ```
 value
 ```
 publicKey: ```
 value
 ```
 audienceList: value
 certificateAlias: value
 credentialName: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | validForUrls | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype in (basicAuthentication)type in (oauth2ClientCredentialsFlow)type in (signedUserAssertion)type in (oauth2PasswordFlow)

 | signingCredential | reference | Yes | | data type=reference; lov=COMPONENT; references=webCredential
Applies whentype = signedUserAssertion

 | usernameExpression | multiline string | No | | data type=multiline string; maxLen=4000
Applies whentype = signedUserAssertion

 | namedScopes | multiline string | No | | data type=multiline string; maxLen=32767
Applies whentype in (oauth2ClientCredentialsFlow)type in (signedUserAssertion)type in (oauth2PasswordFlow)

 | authenticationCredential | reference | Yes | | data type=reference; lov=COMPONENT; references=webCredential
Applies whentype = oauth2PasswordFlow

 | tokenAuthenticationMethod | enum | Yes | basicAuthentication | data type=string; lov=STATIC
Valid values: clientIdAndClientSecretInBody basicAuthentication basicAuthenticationAndClientIdInBody clientIdInBody
Applies whentype in (oauth2ClientCredentialsFlow)type in (oauth2PasswordFlow)

 | staticId | string | Yes | | data type=string; maxLen=255

 | promptOnInstall | boolean | Yes | false | data type=boolean
Applies whentype in (basicAuthentication)type in (oauth2ClientCredentialsFlow)type in (signedUserAssertion)type in (oauth2PasswordFlow)

Copy
advanced {
 validForUrls: ```
 value
 ```
 signingCredential: @component
 usernameExpression: ```plsql
 value
 ```
 namedScopes: ```json
 value
 ```
 authenticationCredential: @component
 tokenAuthenticationMethod: clientIdAndClientSecretInBody
 staticId: value
 promptOnInstall: false
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
webCredential sample (
 name: value
 type: basicAuthentication
 authentication {
 databaseCredentialName: value
 instanceLevelDatabaseCredential: false
 oauthScope: value
 clientIdOrUsername: value
 ociUserId: value
 ociTenancyId: value
 ociPublicKeyFingerprint: value
 certificate: ```
 value
 ```
 publicKey: ```
 value
 ```
 audienceList: value
 certificateAlias: value
 credentialName: value
 }
 advanced {
 validForUrls: ```
 value
 ```
 signingCredential: @component
 usernameExpression: ```plsql
 value
 ```
 namedScopes: ```json
 value
 ```
 authenticationCredential: @component
 tokenAuthenticationMethod: clientIdAndClientSecretInBody
 staticId: value
 promptOnInstall: false
 }
 comments {
 comments: ```
 value
 ```
 }
)
