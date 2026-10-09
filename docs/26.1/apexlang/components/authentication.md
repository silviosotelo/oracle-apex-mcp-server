# APEXlang: componentes con padre `authentication` (APEX 26.1)


---

authentication custom - APEXlang Reference

authentication (custom)

Parent: authentication

Applies whentype = custom
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: custom databaseAccounts httpHeaderVariable internalAppExtension ldapDirectory noAuth openDoorCredentials oracleApexAccounts oracleAppServerSSO samlSignIn socialSignIn

Property Groups:
settings
source
sessionNotValid
loginProcessing
postLogout
sessionSharing
realAppSecurity
advanced
help
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | sentryFunctionName | string | No | | data type=string; maxLen=4000

 | invalidSessionProcedureName | string | No | | data type=string; maxLen=4000

 | authFunctionName | string | No | | data type=string; maxLen=4000

 | postLogoutProcedureName | string | No | | data type=string; maxLen=4000

 | enableLegacyAuthAttrs | boolean | Yes | false | data type=boolean

 | ssoPartnerAppName | string | No | | data type=string; maxLen=4000
Applies whenenable_legacy_attributes = Y

 | ldapHost | string | No | | data type=string; maxLen=4000
Applies whenenable_legacy_attributes = Y

 | ldapPort | integer | No | | data type=integer
Applies whenenable_legacy_attributes = Y

 | useSsl | enum | Yes | noSsl | data type=string; maxLen=4000; lov=STATIC
Valid values: sslWithAuth ssl noSsl
Applies whenenable_legacy_attributes = Y

 | ldapDnString | string | No | | data type=string; maxLen=4000
Applies whenenable_legacy_attributes = Y

 | useExactDn | boolean | Yes | true | data type=boolean
Applies whenenable_legacy_attributes = Y

 | searchFilter | string | No | | data type=string; maxLen=4000
Applies whenenable_legacy_attributes = Y and use_exact_dn = N

 | ldapUsernameEditFunction | string | No | | data type=string; maxLen=4000
Applies whenenable_legacy_attributes = Y

 | usernameEscaping | enum | Yes | standard | data type=string; maxLen=4000; lov=STATIC
Valid values: noEscaping onlySpecialChars standard
Applies whenenable_legacy_attributes = Y

Copy
settings {
 sentryFunctionName: value
 invalidSessionProcedureName: value
 authFunctionName: value
 postLogoutProcedureName: value
 enableLegacyAuthAttrs: false
 ssoPartnerAppName: value
 ldapHost: value
 ldapPort: 42
 useSsl: sslWithAuth
 ldapDnString: value
 useExactDn: false
 searchFilter: value
 ldapUsernameEditFunction: value
 usernameEscaping: noEscaping
}

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

Copy
source {
 plsqlCode: ```plsql
 value
 ```
}

sessionNotValid

 | Property | Type | Required | Default Value | Details

 | verifyFunctionName | string | No | | data type=string; maxLen=255

 | redirectTo | enum | Yes | loginPage | data type=string; lov=STATIC
Valid values: loginPage builtInLoginPage url

 | invalidSessionUrl | complex | No | | data type=complex; maxLen=4000
Applies whenredirectTo = url

Copy
sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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

loginProcessing

 | Property | Type | Required | Default Value | Details

 | preAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | postAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | switchInSession | boolean | Yes | false | data type=boolean

Copy
loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
}

postLogout

 | Property | Type | Required | Default Value | Details

 | redirectTo | enum | Yes | homePage | data type=string; lov=STATIC
Valid values: homePage url

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenredirectTo = url

Copy
postLogout {
 redirectTo: homePage
 url: value
}

sessionSharing

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | app | data type=string; lov=STATIC
Valid values: app workspaceSharing custom

 | cookieName | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookiePath | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookieDomain | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | secure | boolean | Yes | false | data type=boolean
Applies whentype = custom

Copy
sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
}

realAppSecurity

 | Property | Type | Required | Default Value | Details

 | rasMode | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: disabled externalUsers internalUsers

 | dynamicRoles | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

 | namespaces | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

Copy
realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=authentication
Valid values: @/8842.261/builder-extension-sign-in @/8842.9999/builder-extension-sign-in @/8842.9999/oracle-apex-accounts

Copy
subscription {
 master: "@/8842.261/builder-extension-sign-in"
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
authentication sample (
 name: value
 type: custom
 settings {
 sentryFunctionName: value
 invalidSessionProcedureName: value
 authFunctionName: value
 postLogoutProcedureName: value
 enableLegacyAuthAttrs: false
 ssoPartnerAppName: value
 ldapHost: value
 ldapPort: 42
 useSsl: sslWithAuth
 ldapDnString: value
 useExactDn: false
 searchFilter: value
 ldapUsernameEditFunction: value
 usernameEscaping: noEscaping
 }
 source {
 plsqlCode: ```plsql
 value
 ```
 }
 sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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
 loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
 }
 postLogout {
 redirectTo: homePage
 url: value
 }
 sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
 }
 realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
 }
 advanced {
 staticId: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 subscription {
 master: "@/8842.261/builder-extension-sign-in"
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authentication databaseAccounts - APEXlang Reference

authentication (databaseAccounts)

Parent: authentication

Applies whentype = databaseAccounts
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: custom databaseAccounts httpHeaderVariable internalAppExtension ldapDirectory noAuth openDoorCredentials oracleApexAccounts oracleAppServerSSO samlSignIn socialSignIn

Property Groups:
source
sessionNotValid
loginProcessing
postLogout
sessionSharing
realAppSecurity
advanced
help
subscription
comments

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

Copy
source {
 plsqlCode: ```plsql
 value
 ```
}

sessionNotValid

 | Property | Type | Required | Default Value | Details

 | verifyFunctionName | string | No | | data type=string; maxLen=255

 | redirectTo | enum | Yes | loginPage | data type=string; lov=STATIC
Valid values: loginPage builtInLoginPage url

 | invalidSessionUrl | complex | No | | data type=complex; maxLen=4000
Applies whenredirectTo = url

Copy
sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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

loginProcessing

 | Property | Type | Required | Default Value | Details

 | preAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | postAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | switchInSession | boolean | Yes | false | data type=boolean

Copy
loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
}

postLogout

 | Property | Type | Required | Default Value | Details

 | redirectTo | enum | Yes | homePage | data type=string; lov=STATIC
Valid values: homePage url

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenredirectTo = url

Copy
postLogout {
 redirectTo: homePage
 url: value
}

sessionSharing

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | app | data type=string; lov=STATIC
Valid values: app workspaceSharing custom

 | cookieName | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookiePath | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookieDomain | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | secure | boolean | Yes | false | data type=boolean
Applies whentype = custom

Copy
sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
}

realAppSecurity

 | Property | Type | Required | Default Value | Details

 | rasMode | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: disabled externalUsers internalUsers

 | dynamicRoles | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

 | namespaces | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

Copy
realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=authentication
Valid values: @/8842.261/builder-extension-sign-in @/8842.9999/builder-extension-sign-in @/8842.9999/oracle-apex-accounts

Copy
subscription {
 master: "@/8842.261/builder-extension-sign-in"
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
authentication sample (
 name: value
 type: custom
 source {
 plsqlCode: ```plsql
 value
 ```
 }
 sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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
 loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
 }
 postLogout {
 redirectTo: homePage
 url: value
 }
 sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
 }
 realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
 }
 advanced {
 staticId: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 subscription {
 master: "@/8842.261/builder-extension-sign-in"
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authentication httpHeaderVariable - APEXlang Reference

authentication (httpHeaderVariable)

Parent: authentication

Applies whentype = httpHeaderVariable
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: custom databaseAccounts httpHeaderVariable internalAppExtension ldapDirectory noAuth openDoorCredentials oracleApexAccounts oracleAppServerSSO samlSignIn socialSignIn

Property Groups:
settings
source
sessionNotValid
loginProcessing
postLogout
sessionSharing
realAppSecurity
advanced
help
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | name | string | No | | data type=string; maxLen=255

 | actionIfUsernameIsEmpty | enum | Yes | redirectToBuiltInUrl | data type=string; maxLen=4000; lov=STATIC
Valid values: redirectToUrl displayError redirectToBuiltInUrl

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenaction_if_username_empty = URL

 | errorMessage | string | Yes | | data type=string; maxLen=4000
Applies whenaction_if_username_empty = ERROR

 | verifyUsername | enum | Yes | eachRequest | data type=string; maxLen=4000; lov=STATIC
Valid values: eachRequest afterLogin

 | ssoServerLogoutUrl | string | No | | data type=string; maxLen=4000

Copy
settings {
 name: value
 actionIfUsernameIsEmpty: redirectToUrl
 url: value
 errorMessage: value
 verifyUsername: eachRequest
 ssoServerLogoutUrl: value
}

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

Copy
source {
 plsqlCode: ```plsql
 value
 ```
}

sessionNotValid

 | Property | Type | Required | Default Value | Details

 | verifyFunctionName | string | No | | data type=string; maxLen=255

 | redirectTo | enum | Yes | loginPage | data type=string; lov=STATIC
Valid values: loginPage builtInLoginPage url

 | invalidSessionUrl | complex | No | | data type=complex; maxLen=4000
Applies whenredirectTo = url

Copy
sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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

loginProcessing

 | Property | Type | Required | Default Value | Details

 | preAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | postAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | switchInSession | boolean | Yes | false | data type=boolean

Copy
loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
}

postLogout

 | Property | Type | Required | Default Value | Details

 | redirectTo | enum | Yes | homePage | data type=string; lov=STATIC
Valid values: homePage url

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenredirectTo = url

Copy
postLogout {
 redirectTo: homePage
 url: value
}

sessionSharing

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | app | data type=string; lov=STATIC
Valid values: app workspaceSharing custom

 | cookieName | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookiePath | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookieDomain | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | secure | boolean | Yes | false | data type=boolean
Applies whentype = custom

Copy
sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
}

realAppSecurity

 | Property | Type | Required | Default Value | Details

 | rasMode | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: disabled externalUsers internalUsers

 | dynamicRoles | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

 | namespaces | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

Copy
realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=authentication
Valid values: @/8842.261/builder-extension-sign-in @/8842.9999/builder-extension-sign-in @/8842.9999/oracle-apex-accounts

Copy
subscription {
 master: "@/8842.261/builder-extension-sign-in"
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
authentication sample (
 name: value
 type: custom
 settings {
 name: value
 actionIfUsernameIsEmpty: redirectToUrl
 url: value
 errorMessage: value
 verifyUsername: eachRequest
 ssoServerLogoutUrl: value
 }
 source {
 plsqlCode: ```plsql
 value
 ```
 }
 sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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
 loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
 }
 postLogout {
 redirectTo: homePage
 url: value
 }
 sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
 }
 realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
 }
 advanced {
 staticId: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 subscription {
 master: "@/8842.261/builder-extension-sign-in"
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authentication internalAppExtension - APEXlang Reference

authentication (internalAppExtension)

Parent: authentication

Applies whentype = internalAppExtension
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: custom databaseAccounts httpHeaderVariable internalAppExtension ldapDirectory noAuth openDoorCredentials oracleApexAccounts oracleAppServerSSO samlSignIn socialSignIn

Property Groups:
source
sessionNotValid
loginProcessing
postLogout
sessionSharing
realAppSecurity
advanced
help
subscription
comments

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

Copy
source {
 plsqlCode: ```plsql
 value
 ```
}

sessionNotValid

 | Property | Type | Required | Default Value | Details

 | verifyFunctionName | string | No | | data type=string; maxLen=255

 | redirectTo | enum | Yes | loginPage | data type=string; lov=STATIC
Valid values: loginPage builtInLoginPage url

 | invalidSessionUrl | complex | No | | data type=complex; maxLen=4000
Applies whenredirectTo = url

Copy
sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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

loginProcessing

 | Property | Type | Required | Default Value | Details

 | preAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | postAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | switchInSession | boolean | Yes | false | data type=boolean

Copy
loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
}

postLogout

 | Property | Type | Required | Default Value | Details

 | redirectTo | enum | Yes | homePage | data type=string; lov=STATIC
Valid values: homePage url

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenredirectTo = url

Copy
postLogout {
 redirectTo: homePage
 url: value
}

sessionSharing

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | app | data type=string; lov=STATIC
Valid values: app workspaceSharing custom

 | cookieName | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookiePath | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookieDomain | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | secure | boolean | Yes | false | data type=boolean
Applies whentype = custom

Copy
sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
}

realAppSecurity

 | Property | Type | Required | Default Value | Details

 | rasMode | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: disabled externalUsers internalUsers

 | dynamicRoles | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

 | namespaces | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

Copy
realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=authentication
Valid values: @/8842.261/builder-extension-sign-in @/8842.9999/builder-extension-sign-in @/8842.9999/oracle-apex-accounts

Copy
subscription {
 master: "@/8842.261/builder-extension-sign-in"
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
authentication sample (
 name: value
 type: custom
 source {
 plsqlCode: ```plsql
 value
 ```
 }
 sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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
 loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
 }
 postLogout {
 redirectTo: homePage
 url: value
 }
 sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
 }
 realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
 }
 advanced {
 staticId: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 subscription {
 master: "@/8842.261/builder-extension-sign-in"
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authentication ldapDirectory - APEXlang Reference

authentication (ldapDirectory)

Parent: authentication

Applies whentype = ldapDirectory
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: custom databaseAccounts httpHeaderVariable internalAppExtension ldapDirectory noAuth openDoorCredentials oracleApexAccounts oracleAppServerSSO samlSignIn socialSignIn

Property Groups:
settings
source
sessionNotValid
loginProcessing
postLogout
sessionSharing
realAppSecurity
advanced
help
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | host | string | Yes | | data type=string; maxLen=255

 | port | integer | No | | data type=integer; maxLen=10

 | useSsl | enum | Yes | noSsl | data type=string; maxLen=4000; lov=STATIC
Valid values: ssl sslWithAuth noSsl

 | dnString | string | Yes | | data type=string; maxLen=4000

 | useExactDn | boolean | Yes | true | data type=boolean

 | searchFilter | string | Yes | | data type=string; maxLen=4000
Applies whenuse_exact_dn = N

 | ldapUsernameEditFunction | string | No | | data type=string; maxLen=4000

 | usernameEscaping | enum | Yes | standard | data type=string; maxLen=4000; lov=STATIC
Valid values: standard noEscaping onlySpecialChars

Copy
settings {
 host: value
 port: 42
 useSsl: ssl
 dnString: value
 useExactDn: false
 searchFilter: value
 ldapUsernameEditFunction: value
 usernameEscaping: standard
}

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

Copy
source {
 plsqlCode: ```plsql
 value
 ```
}

sessionNotValid

 | Property | Type | Required | Default Value | Details

 | verifyFunctionName | string | No | | data type=string; maxLen=255

 | redirectTo | enum | Yes | loginPage | data type=string; lov=STATIC
Valid values: loginPage builtInLoginPage url

 | invalidSessionUrl | complex | No | | data type=complex; maxLen=4000
Applies whenredirectTo = url

Copy
sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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

loginProcessing

 | Property | Type | Required | Default Value | Details

 | preAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | postAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | switchInSession | boolean | Yes | false | data type=boolean

Copy
loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
}

postLogout

 | Property | Type | Required | Default Value | Details

 | redirectTo | enum | Yes | homePage | data type=string; lov=STATIC
Valid values: homePage url

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenredirectTo = url

Copy
postLogout {
 redirectTo: homePage
 url: value
}

sessionSharing

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | app | data type=string; lov=STATIC
Valid values: app workspaceSharing custom

 | cookieName | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookiePath | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookieDomain | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | secure | boolean | Yes | false | data type=boolean
Applies whentype = custom

Copy
sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
}

realAppSecurity

 | Property | Type | Required | Default Value | Details

 | rasMode | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: disabled externalUsers internalUsers

 | dynamicRoles | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

 | namespaces | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

Copy
realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=authentication
Valid values: @/8842.261/builder-extension-sign-in @/8842.9999/builder-extension-sign-in @/8842.9999/oracle-apex-accounts

Copy
subscription {
 master: "@/8842.261/builder-extension-sign-in"
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
authentication sample (
 name: value
 type: custom
 settings {
 host: value
 port: 42
 useSsl: ssl
 dnString: value
 useExactDn: false
 searchFilter: value
 ldapUsernameEditFunction: value
 usernameEscaping: standard
 }
 source {
 plsqlCode: ```plsql
 value
 ```
 }
 sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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
 loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
 }
 postLogout {
 redirectTo: homePage
 url: value
 }
 sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
 }
 realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
 }
 advanced {
 staticId: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 subscription {
 master: "@/8842.261/builder-extension-sign-in"
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authentication noAuth - APEXlang Reference

authentication (noAuth)

Parent: authentication

Applies whentype = noAuth
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: custom databaseAccounts httpHeaderVariable internalAppExtension ldapDirectory noAuth openDoorCredentials oracleApexAccounts oracleAppServerSSO samlSignIn socialSignIn

Property Groups:
settings
source
sessionNotValid
loginProcessing
postLogout
sessionSharing
realAppSecurity
advanced
help
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | username | string | No | nobody | data type=string; maxLen=4000

Copy
settings {
 username: value
}

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

Copy
source {
 plsqlCode: ```plsql
 value
 ```
}

sessionNotValid

 | Property | Type | Required | Default Value | Details

 | verifyFunctionName | string | No | | data type=string; maxLen=255

 | redirectTo | enum | Yes | loginPage | data type=string; lov=STATIC
Valid values: loginPage builtInLoginPage url

 | invalidSessionUrl | complex | No | | data type=complex; maxLen=4000
Applies whenredirectTo = url

Copy
sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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

loginProcessing

 | Property | Type | Required | Default Value | Details

 | preAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | postAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | switchInSession | boolean | Yes | false | data type=boolean

Copy
loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
}

postLogout

 | Property | Type | Required | Default Value | Details

 | redirectTo | enum | Yes | homePage | data type=string; lov=STATIC
Valid values: homePage url

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenredirectTo = url

Copy
postLogout {
 redirectTo: homePage
 url: value
}

sessionSharing

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | app | data type=string; lov=STATIC
Valid values: app workspaceSharing custom

 | cookieName | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookiePath | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookieDomain | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | secure | boolean | Yes | false | data type=boolean
Applies whentype = custom

Copy
sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
}

realAppSecurity

 | Property | Type | Required | Default Value | Details

 | rasMode | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: disabled externalUsers internalUsers

 | dynamicRoles | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

 | namespaces | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

Copy
realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=authentication
Valid values: @/8842.261/builder-extension-sign-in @/8842.9999/builder-extension-sign-in @/8842.9999/oracle-apex-accounts

Copy
subscription {
 master: "@/8842.261/builder-extension-sign-in"
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
authentication sample (
 name: value
 type: custom
 settings {
 username: value
 }
 source {
 plsqlCode: ```plsql
 value
 ```
 }
 sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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
 loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
 }
 postLogout {
 redirectTo: homePage
 url: value
 }
 sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
 }
 realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
 }
 advanced {
 staticId: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 subscription {
 master: "@/8842.261/builder-extension-sign-in"
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authentication openDoorCredentials - APEXlang Reference

authentication (openDoorCredentials)

Parent: authentication

Applies whentype = openDoorCredentials
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: custom databaseAccounts httpHeaderVariable internalAppExtension ldapDirectory noAuth openDoorCredentials oracleApexAccounts oracleAppServerSSO samlSignIn socialSignIn

Property Groups:
source
sessionNotValid
loginProcessing
postLogout
sessionSharing
realAppSecurity
advanced
help
subscription
comments

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

Copy
source {
 plsqlCode: ```plsql
 value
 ```
}

sessionNotValid

 | Property | Type | Required | Default Value | Details

 | verifyFunctionName | string | No | | data type=string; maxLen=255

 | redirectTo | enum | Yes | loginPage | data type=string; lov=STATIC
Valid values: loginPage builtInLoginPage url

 | invalidSessionUrl | complex | No | | data type=complex; maxLen=4000
Applies whenredirectTo = url

Copy
sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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

loginProcessing

 | Property | Type | Required | Default Value | Details

 | preAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | postAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | switchInSession | boolean | Yes | false | data type=boolean

Copy
loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
}

postLogout

 | Property | Type | Required | Default Value | Details

 | redirectTo | enum | Yes | homePage | data type=string; lov=STATIC
Valid values: homePage url

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenredirectTo = url

Copy
postLogout {
 redirectTo: homePage
 url: value
}

sessionSharing

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | app | data type=string; lov=STATIC
Valid values: app workspaceSharing custom

 | cookieName | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookiePath | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookieDomain | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | secure | boolean | Yes | false | data type=boolean
Applies whentype = custom

Copy
sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
}

realAppSecurity

 | Property | Type | Required | Default Value | Details

 | rasMode | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: disabled externalUsers internalUsers

 | dynamicRoles | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

 | namespaces | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

Copy
realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=authentication
Valid values: @/8842.261/builder-extension-sign-in @/8842.9999/builder-extension-sign-in @/8842.9999/oracle-apex-accounts

Copy
subscription {
 master: "@/8842.261/builder-extension-sign-in"
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
authentication sample (
 name: value
 type: custom
 source {
 plsqlCode: ```plsql
 value
 ```
 }
 sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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
 loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
 }
 postLogout {
 redirectTo: homePage
 url: value
 }
 sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
 }
 realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
 }
 advanced {
 staticId: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 subscription {
 master: "@/8842.261/builder-extension-sign-in"
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authentication oracleApexAccounts - APEXlang Reference

authentication (oracleApexAccounts)

Parent: authentication

Applies whentype = oracleApexAccounts
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: custom databaseAccounts httpHeaderVariable internalAppExtension ldapDirectory noAuth openDoorCredentials oracleApexAccounts oracleAppServerSSO samlSignIn socialSignIn

Property Groups:
source
sessionNotValid
loginProcessing
postLogout
sessionSharing
realAppSecurity
advanced
help
subscription
comments

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

Copy
source {
 plsqlCode: ```plsql
 value
 ```
}

sessionNotValid

 | Property | Type | Required | Default Value | Details

 | verifyFunctionName | string | No | | data type=string; maxLen=255

 | redirectTo | enum | Yes | loginPage | data type=string; lov=STATIC
Valid values: loginPage builtInLoginPage url

 | invalidSessionUrl | complex | No | | data type=complex; maxLen=4000
Applies whenredirectTo = url

Copy
sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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

loginProcessing

 | Property | Type | Required | Default Value | Details

 | preAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | postAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | switchInSession | boolean | Yes | false | data type=boolean

Copy
loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
}

postLogout

 | Property | Type | Required | Default Value | Details

 | redirectTo | enum | Yes | homePage | data type=string; lov=STATIC
Valid values: homePage url

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenredirectTo = url

Copy
postLogout {
 redirectTo: homePage
 url: value
}

sessionSharing

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | app | data type=string; lov=STATIC
Valid values: app workspaceSharing custom

 | cookieName | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookiePath | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookieDomain | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | secure | boolean | Yes | false | data type=boolean
Applies whentype = custom

Copy
sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
}

realAppSecurity

 | Property | Type | Required | Default Value | Details

 | rasMode | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: disabled externalUsers internalUsers

 | dynamicRoles | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

 | namespaces | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

Copy
realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=authentication
Valid values: @/8842.261/builder-extension-sign-in @/8842.9999/builder-extension-sign-in @/8842.9999/oracle-apex-accounts

Copy
subscription {
 master: "@/8842.261/builder-extension-sign-in"
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
authentication sample (
 name: value
 type: custom
 source {
 plsqlCode: ```plsql
 value
 ```
 }
 sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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
 loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
 }
 postLogout {
 redirectTo: homePage
 url: value
 }
 sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
 }
 realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
 }
 advanced {
 staticId: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 subscription {
 master: "@/8842.261/builder-extension-sign-in"
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authentication oracleAppServerSSO - APEXlang Reference

authentication (oracleAppServerSSO)

Parent: authentication

Applies whentype = oracleAppServerSSO
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: custom databaseAccounts httpHeaderVariable internalAppExtension ldapDirectory noAuth openDoorCredentials oracleApexAccounts oracleAppServerSSO samlSignIn socialSignIn

Property Groups:
settings
source
sessionNotValid
loginProcessing
postLogout
sessionSharing
realAppSecurity
advanced
help
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | partnerAppName | string | No | | data type=string; maxLen=255

 | ssoServerLogoutUrl | string | No | | data type=string; maxLen=4000

Copy
settings {
 partnerAppName: value
 ssoServerLogoutUrl: value
}

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

Copy
source {
 plsqlCode: ```plsql
 value
 ```
}

sessionNotValid

 | Property | Type | Required | Default Value | Details

 | verifyFunctionName | string | No | | data type=string; maxLen=255

 | redirectTo | enum | Yes | loginPage | data type=string; lov=STATIC
Valid values: loginPage builtInLoginPage url

 | invalidSessionUrl | complex | No | | data type=complex; maxLen=4000
Applies whenredirectTo = url

Copy
sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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

loginProcessing

 | Property | Type | Required | Default Value | Details

 | preAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | postAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | switchInSession | boolean | Yes | false | data type=boolean

Copy
loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
}

postLogout

 | Property | Type | Required | Default Value | Details

 | redirectTo | enum | Yes | homePage | data type=string; lov=STATIC
Valid values: homePage url

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenredirectTo = url

Copy
postLogout {
 redirectTo: homePage
 url: value
}

sessionSharing

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | app | data type=string; lov=STATIC
Valid values: app workspaceSharing custom

 | cookieName | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookiePath | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookieDomain | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | secure | boolean | Yes | false | data type=boolean
Applies whentype = custom

Copy
sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
}

realAppSecurity

 | Property | Type | Required | Default Value | Details

 | rasMode | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: disabled externalUsers internalUsers

 | dynamicRoles | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

 | namespaces | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

Copy
realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=authentication
Valid values: @/8842.261/builder-extension-sign-in @/8842.9999/builder-extension-sign-in @/8842.9999/oracle-apex-accounts

Copy
subscription {
 master: "@/8842.261/builder-extension-sign-in"
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
authentication sample (
 name: value
 type: custom
 settings {
 partnerAppName: value
 ssoServerLogoutUrl: value
 }
 source {
 plsqlCode: ```plsql
 value
 ```
 }
 sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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
 loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
 }
 postLogout {
 redirectTo: homePage
 url: value
 }
 sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
 }
 realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
 }
 advanced {
 staticId: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 subscription {
 master: "@/8842.261/builder-extension-sign-in"
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authentication samlSignIn - APEXlang Reference

authentication (samlSignIn)

Parent: authentication

Applies whentype = samlSignIn
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: custom databaseAccounts httpHeaderVariable internalAppExtension ldapDirectory noAuth openDoorCredentials oracleApexAccounts oracleAppServerSSO samlSignIn socialSignIn

Property Groups:
settings
source
sessionNotValid
loginProcessing
postLogout
sessionSharing
realAppSecurity
advanced
help
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | credentialStoreForSigningRequests | reference | No | | data type=reference; lov=COMPONENT; references=webCredential
Applies whenuse_saml_attributes = APP

 | useSamlAttrsOf | enum | No | instance | data type=string; maxLen=4000; lov=STATIC
Valid values: application instance

 | identityProviderSingleSignOnUrl | string | Yes | | data type=string; maxLen=4000
Applies whenuse_saml_attributes = APP

 | identityProviderSingleSignOutUrl | string | No | | data type=string; maxLen=4000
Applies whenuse_saml_attributes = APP

 | identityProviderIssuer | string | Yes | | data type=string; maxLen=4000
Applies whenuse_saml_attributes = APP

 | usernameAttr | string | No | | data type=string; maxLen=4000
Applies whenuse_saml_attributes = APP

 | identityProviderSigningCertificate | string | No | | data type=string; maxLen=4000
Applies whenuse_saml_attributes = APP

 | convertUsernameToUpperCase | boolean | Yes | true | data type=boolean

Copy
settings {
 credentialStoreForSigningRequests: @component
 useSamlAttrsOf: application
 identityProviderSingleSignOnUrl: value
 identityProviderSingleSignOutUrl: value
 identityProviderIssuer: value
 usernameAttr: value
 identityProviderSigningCertificate: value
 convertUsernameToUpperCase: false
}

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

Copy
source {
 plsqlCode: ```plsql
 value
 ```
}

sessionNotValid

 | Property | Type | Required | Default Value | Details

 | verifyFunctionName | string | No | | data type=string; maxLen=255

 | redirectTo | enum | Yes | loginPage | data type=string; lov=STATIC
Valid values: loginPage builtInLoginPage url

 | invalidSessionUrl | complex | No | | data type=complex; maxLen=4000
Applies whenredirectTo = url

Copy
sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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

loginProcessing

 | Property | Type | Required | Default Value | Details

 | preAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | postAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | switchInSession | boolean | Yes | false | data type=boolean

Copy
loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
}

postLogout

 | Property | Type | Required | Default Value | Details

 | redirectTo | enum | Yes | homePage | data type=string; lov=STATIC
Valid values: homePage url

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenredirectTo = url

Copy
postLogout {
 redirectTo: homePage
 url: value
}

sessionSharing

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | app | data type=string; lov=STATIC
Valid values: app workspaceSharing custom

 | cookieName | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookiePath | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookieDomain | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | secure | boolean | Yes | false | data type=boolean
Applies whentype = custom

Copy
sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
}

realAppSecurity

 | Property | Type | Required | Default Value | Details

 | rasMode | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: disabled externalUsers internalUsers

 | dynamicRoles | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

 | namespaces | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

Copy
realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=authentication
Valid values: @/8842.261/builder-extension-sign-in @/8842.9999/builder-extension-sign-in @/8842.9999/oracle-apex-accounts

Copy
subscription {
 master: "@/8842.261/builder-extension-sign-in"
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
authentication sample (
 name: value
 type: custom
 settings {
 credentialStoreForSigningRequests: @component
 useSamlAttrsOf: application
 identityProviderSingleSignOnUrl: value
 identityProviderSingleSignOutUrl: value
 identityProviderIssuer: value
 usernameAttr: value
 identityProviderSigningCertificate: value
 convertUsernameToUpperCase: false
 }
 source {
 plsqlCode: ```plsql
 value
 ```
 }
 sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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
 loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
 }
 postLogout {
 redirectTo: homePage
 url: value
 }
 sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
 }
 realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
 }
 advanced {
 staticId: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 subscription {
 master: "@/8842.261/builder-extension-sign-in"
 }
 comments {
 comments: ```
 value
 ```
 }
)

---

authentication socialSignIn - APEXlang Reference

authentication (socialSignIn)

Parent: authentication

Applies whentype = socialSignIn
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | name | string | Yes | | data type=string; maxLen=255

 | type | enum | Yes | | data type=string; lov=PLUGINS
Valid values: custom databaseAccounts httpHeaderVariable internalAppExtension ldapDirectory noAuth openDoorCredentials oracleApexAccounts oracleAppServerSSO samlSignIn socialSignIn

Property Groups:
settings
source
sessionNotValid
loginProcessing
postLogout
sessionSharing
realAppSecurity
advanced
help
subscription
comments

settings

 | Property | Type | Required | Default Value | Details

 | credentialStore | reference | Yes | | data type=reference; lov=COMPONENT; references=webCredential

 | authProvider | enum | Yes | openidConnect | data type=string; maxLen=4000; lov=STATIC
Valid values: genericOauth2Provider google facebook openidConnect

 | discoveryUrl | string | Yes | | data type=string; maxLen=4000
Applies whenauthentication_provider = OPENID_CONNECT

 | authorizationEndpointUrl | string | Yes | | data type=string; maxLen=4000
Applies whenauthentication_provider = OAUTH2

 | tokenEndpointUrl | string | Yes | | data type=string; maxLen=4000
Applies whenauthentication_provider = OAUTH2

 | userInfoEndpointUrl | string | No | | data type=string; maxLen=4000
Applies whenauthentication_provider = OAUTH2

 | scope | string | Yes | profile | data type=string; maxLen=4000

 | authUriParams | string | No | | data type=string; maxLen=4000

 | username | string | Yes | #sub# (#APEX_AUTH_NAME#) | data type=string; maxLen=4000

 | additionalUserAttrs | string | No | | data type=string; maxLen=4000

 | convertUsernameToUpperCase | boolean | Yes | false | data type=boolean

 | tokenAuthMethod | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: basicClientIdInBody clientIdClientSecretInBody clientIdInBody basic
Applies whenauthentication_provider in (OPENID_CONNECT)authentication_provider in (OAUTH2)

 | verifyAttrs | boolean | Yes | true | data type=boolean

 | mapAdditionalUserAttrsTo | string | No | | data type=string; maxLen=4000

Copy
settings {
 credentialStore: @component
 authProvider: genericOauth2Provider
 discoveryUrl: value
 authorizationEndpointUrl: value
 tokenEndpointUrl: value
 userInfoEndpointUrl: value
 scope: value
 authUriParams: value
 username: value
 additionalUserAttrs: value
 convertUsernameToUpperCase: false
 tokenAuthMethod: basicClientIdInBody
 verifyAttrs: false
 mapAdditionalUserAttrsTo: value
}

source

 | Property | Type | Required | Default Value | Details

 | plsqlCode | multiline string | No | | data type=multiline string; maxLen=32767

Copy
source {
 plsqlCode: ```plsql
 value
 ```
}

sessionNotValid

 | Property | Type | Required | Default Value | Details

 | verifyFunctionName | string | No | | data type=string; maxLen=255

 | redirectTo | enum | Yes | loginPage | data type=string; lov=STATIC
Valid values: loginPage builtInLoginPage url

 | invalidSessionUrl | complex | No | | data type=complex; maxLen=4000
Applies whenredirectTo = url

Copy
sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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

loginProcessing

 | Property | Type | Required | Default Value | Details

 | preAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | postAuthenticationProcedureName | string | No | | data type=string; maxLen=255

 | switchInSession | boolean | Yes | false | data type=boolean

Copy
loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
}

postLogout

 | Property | Type | Required | Default Value | Details

 | redirectTo | enum | Yes | homePage | data type=string; lov=STATIC
Valid values: homePage url

 | url | string | Yes | | data type=string; maxLen=4000
Applies whenredirectTo = url

Copy
postLogout {
 redirectTo: homePage
 url: value
}

sessionSharing

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | app | data type=string; lov=STATIC
Valid values: app workspaceSharing custom

 | cookieName | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookiePath | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | cookieDomain | string | No | | data type=string; maxLen=255
Applies whentype = custom

 | secure | boolean | Yes | false | data type=boolean
Applies whentype = custom

Copy
sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
}

realAppSecurity

 | Property | Type | Required | Default Value | Details

 | rasMode | enum | Yes | disabled | data type=string; lov=STATIC
Valid values: disabled externalUsers internalUsers

 | dynamicRoles | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

 | namespaces | string | No | | data type=string; maxLen=4000
Applies whenrasMode in (externalUsers)rasMode in (internalUsers)

Copy
realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
}

advanced

 | Property | Type | Required | Default Value | Details

 | staticId | string | Yes | | data type=string; maxLen=255

Copy
advanced {
 staticId: value
}

help

 | Property | Type | Required | Default Value | Details

 | helpText | multiline string | No | | data type=multiline string; maxLen=4000

Copy
help {
 helpText: ```html
 value
 ```
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=authentication
Valid values: @/8842.261/builder-extension-sign-in @/8842.9999/builder-extension-sign-in @/8842.9999/oracle-apex-accounts

Copy
subscription {
 master: "@/8842.261/builder-extension-sign-in"
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
authentication sample (
 name: value
 type: custom
 settings {
 credentialStore: @component
 authProvider: genericOauth2Provider
 discoveryUrl: value
 authorizationEndpointUrl: value
 tokenEndpointUrl: value
 userInfoEndpointUrl: value
 scope: value
 authUriParams: value
 username: value
 additionalUserAttrs: value
 convertUsernameToUpperCase: false
 tokenAuthMethod: basicClientIdInBody
 verifyAttrs: false
 mapAdditionalUserAttrsTo: value
 }
 source {
 plsqlCode: ```plsql
 value
 ```
 }
 sessionNotValid {
 verifyFunctionName: value
 redirectTo: loginPage
 invalidSessionUrl: {
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
 loginProcessing {
 preAuthenticationProcedureName: value
 postAuthenticationProcedureName: value
 switchInSession: false
 }
 postLogout {
 redirectTo: homePage
 url: value
 }
 sessionSharing {
 type: app
 cookieName: value
 cookiePath: value
 cookieDomain: value
 secure: false
 }
 realAppSecurity {
 rasMode: disabled
 dynamicRoles: value
 namespaces: value
 }
 advanced {
 staticId: value
 }
 help {
 helpText: ```html
 value
 ```
 }
 subscription {
 master: "@/8842.261/builder-extension-sign-in"
 }
 comments {
 comments: ```
 value
 ```
 }
)
