# APEXlang: componentes con padre `componentSetting` (APEX 26.1)


---

componentSetting actionsMenu - APEXlang Reference

componentSetting (actionsMenu)

Parent: componentSetting

Applies whentype = actionsMenu
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting addClass - APEXlang Reference

componentSetting (addClass)

Parent: componentSetting

Applies whentype = addClass
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting alert - APEXlang Reference

componentSetting (alert)

Parent: componentSetting

Applies whentype = alert
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting autoRowFetch - APEXlang Reference

componentSetting (autoRowFetch)

Parent: componentSetting

Applies whentype = autoRowFetch
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting autoRowProcessing - APEXlang Reference

componentSetting (autoRowProcessing)

Parent: componentSetting

Applies whentype = autoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting breadcrumb - APEXlang Reference

componentSetting (breadcrumb)

Parent: componentSetting

Applies whentype = breadcrumb
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting calendar - APEXlang Reference

componentSetting (calendar)

Parent: componentSetting

Applies whentype = calendar
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting cancelDialog - APEXlang Reference

componentSetting (cancelDialog)

Parent: componentSetting

Applies whentype = cancelDialog
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting cancelEvent - APEXlang Reference

componentSetting (cancelEvent)

Parent: componentSetting

Applies whentype = cancelEvent
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting cards - APEXlang Reference

componentSetting (cards)

Parent: componentSetting

Applies whentype = cards
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting chart - APEXlang Reference

componentSetting (chart)

Parent: componentSetting

Applies whentype = chart
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting checkboxGroup - APEXlang Reference

componentSetting (checkboxGroup)

Parent: componentSetting

Applies whentype = checkboxGroup
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting checkbox - APEXlang Reference

componentSetting (checkbox)

Parent: componentSetting

Applies whentype = checkbox
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | checkedValue | string | Yes | Y | data type=string; maxLen=255

 | uncheckedValue | string | No | N | data type=string; maxLen=255

Copy
settings {
 checkedValue: value
 uncheckedValue: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 checkedValue: value
 uncheckedValue: value
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting classicReport - APEXlang Reference

componentSetting (classicReport)

Parent: componentSetting

Applies whentype = classicReport
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting classicTree - APEXlang Reference

componentSetting (classicTree)

Parent: componentSetting

Applies whentype = classicTree
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting clearErrors - APEXlang Reference

componentSetting (clearErrors)

Parent: componentSetting

Applies whentype = clearErrors
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting clearSessionState - APEXlang Reference

componentSetting (clearSessionState)

Parent: componentSetting

Applies whentype = clearSessionState
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting clear - APEXlang Reference

componentSetting (clear)

Parent: componentSetting

Applies whentype = clear
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting closeDialog - APEXlang Reference

componentSetting (closeDialog)

Parent: componentSetting

Applies whentype = closeDialog
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting closeDialog - APEXlang Reference

componentSetting (closeDialog)

Parent: componentSetting

Applies whentype = closeDialog
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting closeRegion - APEXlang Reference

componentSetting (closeRegion)

Parent: componentSetting

Applies whentype = closeRegion
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting collapseTree - APEXlang Reference

componentSetting (collapseTree)

Parent: componentSetting

Applies whentype = collapseTree
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting colorPicker - APEXlang Reference

componentSetting (colorPicker)

Parent: componentSetting

Applies whentype = colorPicker
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | mode | enum | Yes | full | data type=string; maxLen=4000; lov=STATIC
Valid values: simple full

 | displayAs | enum | Yes | popup | data type=string; maxLen=4000; lov=STATIC
Valid values: nativeColorPicker colorOnlyPopup inline popup

Copy
settings {
 mode: simple
 displayAs: nativeColorPicker
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 mode: simple
 displayAs: nativeColorPicker
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting columnToggleReport - APEXlang Reference

componentSetting (columnToggleReport)

Parent: componentSetting

Applies whentype = columnToggleReport
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting combobox - APEXlang Reference

componentSetting (combobox)

Parent: componentSetting

Applies whentype = combobox
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting confirm - APEXlang Reference

componentSetting (confirm)

Parent: componentSetting

Applies whentype = confirm
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting custom - APEXlang Reference

componentSetting (custom)

Parent: componentSetting

Applies whentype = custom
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting dataLoading - APEXlang Reference

componentSetting (dataLoading)

Parent: componentSetting

Applies whentype = dataLoading
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting dataUploadColMapping - APEXlang Reference

componentSetting (dataUploadColMapping)

Parent: componentSetting

Applies whentype = dataUploadColMapping
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting databaseAccounts - APEXlang Reference

componentSetting (databaseAccounts)

Parent: componentSetting

Applies whentype = databaseAccounts
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting datePickerJquery - APEXlang Reference

componentSetting (datePickerJquery)

Parent: componentSetting

Applies whentype = datePickerJquery
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting datePicker - APEXlang Reference

componentSetting (datePicker)

Parent: componentSetting

Applies whentype = datePicker
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | appearanceBehavior | enum | No | MONTH-PICKER:YEAR-PICKER:TODAY-BUTTON | data type=string; maxLen=4000; lov=STATIC
Valid values: paginateByMultipleMonths showWeek monthPicker yearPicker showTodayButton

 | daysOutsideMonth | enum | Yes | visible | data type=string; maxLen=4000; lov=STATIC
Valid values: selectable hidden visible

 | timeIncrement | integer | Yes | 15 | data type=integer; maxLen=2

 | showOn | enum | Yes | itemFocus | data type=string; maxLen=4000; lov=STATIC
Valid values: itemFocus iconClick

Copy
settings {
 appearanceBehavior: paginateByMultipleMonths
 daysOutsideMonth: selectable
 timeIncrement: 42
 showOn: itemFocus
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 appearanceBehavior: paginateByMultipleMonths
 daysOutsideMonth: selectable
 timeIncrement: 42
 showOn: itemFocus
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting disable - APEXlang Reference

componentSetting (disable)

Parent: componentSetting

Applies whentype = disable
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting displayImage - APEXlang Reference

componentSetting (displayImage)

Parent: componentSetting

Applies whentype = displayImage
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting displayMap - APEXlang Reference

componentSetting (displayMap)

Parent: componentSetting

Applies whentype = displayMap
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting displayOnly - APEXlang Reference

componentSetting (displayOnly)

Parent: componentSetting

Applies whentype = displayOnly
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting download - APEXlang Reference

componentSetting (download)

Parent: componentSetting

Applies whentype = download
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting download - APEXlang Reference

componentSetting (download)

Parent: componentSetting

Applies whentype = download
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting dynamicContent - APEXlang Reference

componentSetting (dynamicContent)

Parent: componentSetting

Applies whentype = dynamicContent
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting enable - APEXlang Reference

componentSetting (enable)

Parent: componentSetting

Applies whentype = enable
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting executeClientsideCode - APEXlang Reference

componentSetting (executeClientsideCode)

Parent: componentSetting

Applies whentype = executeClientsideCode
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting executeCode - APEXlang Reference

componentSetting (executeCode)

Parent: componentSetting

Applies whentype = executeCode
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting executeJsCode - APEXlang Reference

componentSetting (executeJsCode)

Parent: componentSetting

Applies whentype = executeJsCode
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting executeServerSideCode - APEXlang Reference

componentSetting (executeServerSideCode)

Parent: componentSetting

Applies whentype = executeServerSideCode
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting executeServersideCode - APEXlang Reference

componentSetting (executeServersideCode)

Parent: componentSetting

Applies whentype = executeServersideCode
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting executionChain - APEXlang Reference

componentSetting (executionChain)

Parent: componentSetting

Applies whentype = executionChain
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting existsSqlQuery - APEXlang Reference

componentSetting (existsSqlQuery)

Parent: componentSetting

Applies whentype = existsSqlQuery
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting expandTree - APEXlang Reference

componentSetting (expandTree)

Parent: componentSetting

Applies whentype = expandTree
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting facetedSearch - APEXlang Reference

componentSetting (facetedSearch)

Parent: componentSetting

Applies whentype = facetedSearch
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting fileUpload - APEXlang Reference

componentSetting (fileUpload)

Parent: componentSetting

Applies whentype = fileUpload
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting formAutoRowProcessing - APEXlang Reference

componentSetting (formAutoRowProcessing)

Parent: componentSetting

Applies whentype = formAutoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting formInitialization - APEXlang Reference

componentSetting (formInitialization)

Parent: componentSetting

Applies whentype = formInitialization
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting formPagination - APEXlang Reference

componentSetting (formPagination)

Parent: componentSetting

Applies whentype = formPagination
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting form - APEXlang Reference

componentSetting (form)

Parent: componentSetting

Applies whentype = form
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting generateTextWithAi - APEXlang Reference

componentSetting (generateTextWithAi)

Parent: componentSetting

Applies whentype = generateTextWithAi
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting generateTextWithAi - APEXlang Reference

componentSetting (generateTextWithAi)

Parent: componentSetting

Applies whentype = generateTextWithAi
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting geocodedAddress - APEXlang Reference

componentSetting (geocodedAddress)

Parent: componentSetting

Applies whentype = geocodedAddress
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | geocoderMatchMode | enum | Yes | relaxHouseNo | data type=string; maxLen=4000; lov=STATIC
Valid values: relaxHouseNo relaxPostalCode relaxStreetName relaxStreetType exact relaxAll

 | showCoordsInPopup | boolean | Yes | false | data type=boolean
Applies whendisplay_as = GRID

 | mapPreview | enum | No | POPUP:ITEM | data type=string; maxLen=4000; lov=STATIC
Valid values: item resultsPopup

 | background | enum | Yes | default | data type=string; maxLen=4000; lov=STATIC
Valid values: default osmBright sharedComponent oracleWorldMap osmPositron osmDark
Applies whenmap_preview is set

 | height | integer | No | | data type=integer
Applies whenmap_preview in (ITEM)

 | displayAs | enum | Yes | listView | data type=string; maxLen=4000; lov=STATIC
Valid values: gridView listView

 | customBackground | reference | No | | data type=reference; lov=COMPONENT; references=mapBackground
Applies whenmap_preview is set and background = shared-component

Copy
settings {
 geocoderMatchMode: relaxHouseNo
 showCoordsInPopup: false
 mapPreview: item
 background: default
 height: 42
 displayAs: gridView
 customBackground: @component
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 geocoderMatchMode: relaxHouseNo
 showCoordsInPopup: false
 mapPreview: item
 background: default
 height: 42
 displayAs: gridView
 customBackground: @component
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting getCurrentPosition - APEXlang Reference

componentSetting (getCurrentPosition)

Parent: componentSetting

Applies whentype = getCurrentPosition
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting helpText - APEXlang Reference

componentSetting (helpText)

Parent: componentSetting

Applies whentype = helpText
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting hidden - APEXlang Reference

componentSetting (hidden)

Parent: componentSetting

Applies whentype = hidden
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting hide - APEXlang Reference

componentSetting (hide)

Parent: componentSetting

Applies whentype = hide
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting htmlExpression - APEXlang Reference

componentSetting (htmlExpression)

Parent: componentSetting

Applies whentype = htmlExpression
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting httpHeaderVariable - APEXlang Reference

componentSetting (httpHeaderVariable)

Parent: componentSetting

Applies whentype = httpHeaderVariable
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting http - APEXlang Reference

componentSetting (http)

Parent: componentSetting

Applies whentype = http
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting humanTaskCreate - APEXlang Reference

componentSetting (humanTaskCreate)

Parent: componentSetting

Applies whentype = humanTaskCreate
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting humanTaskManage - APEXlang Reference

componentSetting (humanTaskManage)

Parent: componentSetting

Applies whentype = humanTaskManage
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting imageUpload - APEXlang Reference

componentSetting (imageUpload)

Parent: componentSetting

Applies whentype = imageUpload
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting inputField - APEXlang Reference

componentSetting (inputField)

Parent: componentSetting

Applies whentype = inputField
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting interactiveGridAutoRowProcessing - APEXlang Reference

componentSetting (interactiveGridAutoRowProcessing)

Parent: componentSetting

Applies whentype = interactiveGridAutoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting interactiveGrid - APEXlang Reference

componentSetting (interactiveGrid)

Parent: componentSetting

Applies whentype = interactiveGrid
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting interactiveReport - APEXlang Reference

componentSetting (interactiveReport)

Parent: componentSetting

Applies whentype = interactiveReport
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | actionsMenuStructure | enum | Yes | interactiveGrid | data type=string; maxLen=4000; lov=STATIC
Valid values: legacy interactiveGrid

Copy
settings {
 actionsMenuStructure: legacy
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 actionsMenuStructure: legacy
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting internalAppExtension - APEXlang Reference

componentSetting (internalAppExtension)

Parent: componentSetting

Applies whentype = internalAppExtension
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting invokeApi - APEXlang Reference

componentSetting (invokeApi)

Parent: componentSetting

Applies whentype = invokeApi
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting invokeInteractiveReportDialog - APEXlang Reference

componentSetting (invokeInteractiveReportDialog)

Parent: componentSetting

Applies whentype = invokeInteractiveReportDialog
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting invokeWorkflow - APEXlang Reference

componentSetting (invokeWorkflow)

Parent: componentSetting

Applies whentype = invokeWorkflow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting isInRoleOrGroup - APEXlang Reference

componentSetting (isInRoleOrGroup)

Parent: componentSetting

Applies whentype = isInRoleOrGroup
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting isNotInRoleOrGroup - APEXlang Reference

componentSetting (isNotInRoleOrGroup)

Parent: componentSetting

Applies whentype = isNotInRoleOrGroup
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting itemEqualsValue - APEXlang Reference

componentSetting (itemEqualsValue)

Parent: componentSetting

Applies whentype = itemEqualsValue
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting itemIsNotNull - APEXlang Reference

componentSetting (itemIsNotNull)

Parent: componentSetting

Applies whentype = itemIsNotNull
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting itemIsNull - APEXlang Reference

componentSetting (itemIsNull)

Parent: componentSetting

Applies whentype = itemIsNull
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting itemNotEqualsValue - APEXlang Reference

componentSetting (itemNotEqualsValue)

Parent: componentSetting

Applies whentype = itemNotEqualsValue
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting ldapDirectory - APEXlang Reference

componentSetting (ldapDirectory)

Parent: componentSetting

Applies whentype = ldapDirectory
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting legacyAutoRowProcessing - APEXlang Reference

componentSetting (legacyAutoRowProcessing)

Parent: componentSetting

Applies whentype = legacyAutoRowProcessing
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting legacyCalendar - APEXlang Reference

componentSetting (legacyCalendar)

Parent: componentSetting

Applies whentype = legacyCalendar
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting legacyWebService - APEXlang Reference

componentSetting (legacyWebService)

Parent: componentSetting

Applies whentype = legacyWebService
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting link - APEXlang Reference

componentSetting (link)

Parent: componentSetting

Applies whentype = link
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting listManager - APEXlang Reference

componentSetting (listManager)

Parent: componentSetting

Applies whentype = listManager
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting listView - APEXlang Reference

componentSetting (listView)

Parent: componentSetting

Applies whentype = listView
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting list - APEXlang Reference

componentSetting (list)

Parent: componentSetting

Applies whentype = list
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting loadUploadedData - APEXlang Reference

componentSetting (loadUploadedData)

Parent: componentSetting

Applies whentype = loadUploadedData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting map - APEXlang Reference

componentSetting (map)

Parent: componentSetting

Applies whentype = map
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | useVectorTileLayers | boolean | Yes | true | data type=boolean

Copy
settings {
 useVectorTileLayers: false
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 useVectorTileLayers: false
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting markdownEditor - APEXlang Reference

componentSetting (markdownEditor)

Parent: componentSetting

Applies whentype = markdownEditor
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting noAuth - APEXlang Reference

componentSetting (noAuth)

Parent: componentSetting

Applies whentype = noAuth
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting notExistsSqlQuery - APEXlang Reference

componentSetting (notExistsSqlQuery)

Parent: componentSetting

Applies whentype = notExistsSqlQuery
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting numberField - APEXlang Reference

componentSetting (numberField)

Parent: componentSetting

Applies whentype = numberField
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting oci - APEXlang Reference

componentSetting (oci)

Parent: componentSetting

Applies whentype = oci
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting odataRestService - APEXlang Reference

componentSetting (odataRestService)

Parent: componentSetting

Applies whentype = odataRestService
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting openDoorCredentials - APEXlang Reference

componentSetting (openDoorCredentials)

Parent: componentSetting

Applies whentype = openDoorCredentials
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting openRegion - APEXlang Reference

componentSetting (openRegion)

Parent: componentSetting

Applies whentype = openRegion
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting oracleApexAccounts - APEXlang Reference

componentSetting (oracleApexAccounts)

Parent: componentSetting

Applies whentype = oracleApexAccounts
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting oracleAppServerSSO - APEXlang Reference

componentSetting (oracleAppServerSSO)

Parent: componentSetting

Applies whentype = oracleAppServerSSO
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting oracleCloudAppsBoss - APEXlang Reference

componentSetting (oracleCloudAppsBoss)

Parent: componentSetting

Applies whentype = oracleCloudAppsBoss
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | advancedSettings | string | No | | data type=string; maxLen=4000

Copy
settings {
 advancedSettings: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 advancedSettings: value
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting oracleCloudAppsSaas - APEXlang Reference

componentSetting (oracleCloudAppsSaas)

Parent: componentSetting

Applies whentype = oracleCloudAppsSaas
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | sandboxName | string | No | | data type=string; maxLen=4000

 | advancedSettings | string | No | | data type=string; maxLen=4000

Copy
settings {
 sandboxName: value
 advancedSettings: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 sandboxName: value
 advancedSettings: value
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting ords - APEXlang Reference

componentSetting (ords)

Parent: componentSetting

Applies whentype = ords
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting parallelFlow - APEXlang Reference

componentSetting (parallelFlow)

Parent: componentSetting

Applies whentype = parallelFlow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting parseUploadedData - APEXlang Reference

componentSetting (parseUploadedData)

Parent: componentSetting

Applies whentype = parseUploadedData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting password - APEXlang Reference

componentSetting (password)

Parent: componentSetting

Applies whentype = password
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting percentGraph - APEXlang Reference

componentSetting (percentGraph)

Parent: componentSetting

Applies whentype = percentGraph
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting plSqlDynamicContent - APEXlang Reference

componentSetting (plSqlDynamicContent)

Parent: componentSetting

Applies whentype = plSqlDynamicContent
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting plSqlFunctionBody - APEXlang Reference

componentSetting (plSqlFunctionBody)

Parent: componentSetting

Applies whentype = plSqlFunctionBody
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting popupLov - APEXlang Reference

componentSetting (popupLov)

Parent: componentSetting

Applies whentype = popupLov
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting preferenceEqualsValue - APEXlang Reference

componentSetting (preferenceEqualsValue)

Parent: componentSetting

Applies whentype = preferenceEqualsValue
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting preferenceNotEqualsValue - APEXlang Reference

componentSetting (preferenceNotEqualsValue)

Parent: componentSetting

Applies whentype = preferenceNotEqualsValue
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting prepareUploadedData - APEXlang Reference

componentSetting (prepareUploadedData)

Parent: componentSetting

Applies whentype = prepareUploadedData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting printReport - APEXlang Reference

componentSetting (printReport)

Parent: componentSetting

Applies whentype = printReport
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting printReport - APEXlang Reference

componentSetting (printReport)

Parent: componentSetting

Applies whentype = printReport
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting qrCode - APEXlang Reference

componentSetting (qrCode)

Parent: componentSetting

Applies whentype = qrCode
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting radioGroup - APEXlang Reference

componentSetting (radioGroup)

Parent: componentSetting

Applies whentype = radioGroup
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting range - APEXlang Reference

componentSetting (range)

Parent: componentSetting

Applies whentype = range
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting reflowReport - APEXlang Reference

componentSetting (reflowReport)

Parent: componentSetting

Applies whentype = reflowReport
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting refresh - APEXlang Reference

componentSetting (refresh)

Parent: componentSetting

Applies whentype = refresh
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting regionDisplaySelector - APEXlang Reference

componentSetting (regionDisplaySelector)

Parent: componentSetting

Applies whentype = regionDisplaySelector
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | includeSlider | boolean | Yes | true | data type=boolean

Copy
settings {
 includeSlider: false
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 includeSlider: false
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting removeClass - APEXlang Reference

componentSetting (removeClass)

Parent: componentSetting

Applies whentype = removeClass
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting resetPagination - APEXlang Reference

componentSetting (resetPagination)

Parent: componentSetting

Applies whentype = resetPagination
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting restEnabledSqlQuery - APEXlang Reference

componentSetting (restEnabledSqlQuery)

Parent: componentSetting

Applies whentype = restEnabledSqlQuery
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting retrieveData - APEXlang Reference

componentSetting (retrieveData)

Parent: componentSetting

Applies whentype = retrieveData
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting richTextEditor - APEXlang Reference

componentSetting (richTextEditor)

Parent: componentSetting

Applies whentype = richTextEditor
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting rowSelector - APEXlang Reference

componentSetting (rowSelector)

Parent: componentSetting

Applies whentype = rowSelector
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting samlSignIn - APEXlang Reference

componentSetting (samlSignIn)

Parent: componentSetting

Applies whentype = samlSignIn
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting search - APEXlang Reference

componentSetting (search)

Parent: componentSetting

Applies whentype = search
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting search - APEXlang Reference

componentSetting (search)

Parent: componentSetting

Applies whentype = search
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting selectList - APEXlang Reference

componentSetting (selectList)

Parent: componentSetting

Applies whentype = selectList
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting selectMany - APEXlang Reference

componentSetting (selectMany)

Parent: componentSetting

Applies whentype = selectMany
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | displayValuesAs | enum | Yes | commaSeparatedList | data type=string; maxLen=4000; lov=STATIC
Valid values: chips commaSeparatedList

Copy
settings {
 displayValuesAs: chips
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 displayValuesAs: chips
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting selectOne - APEXlang Reference

componentSetting (selectOne)

Parent: componentSetting

Applies whentype = selectOne
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting sendEMail - APEXlang Reference

componentSetting (sendEMail)

Parent: componentSetting

Applies whentype = sendEMail
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting sendPushNotification - APEXlang Reference

componentSetting (sendPushNotification)

Parent: componentSetting

Applies whentype = sendPushNotification
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting serverSideGeocoding - APEXlang Reference

componentSetting (serverSideGeocoding)

Parent: componentSetting

Applies whentype = serverSideGeocoding
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | matchMode | enum | Yes | relaxHouseNo | data type=string; maxLen=4000; lov=STATIC
Valid values: relaxPostalCode relaxStreetType relaxAll relaxStreetName exact relaxHouseNo

Copy
settings {
 matchMode: relaxPostalCode
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 matchMode: relaxPostalCode
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting setFocus - APEXlang Reference

componentSetting (setFocus)

Parent: componentSetting

Applies whentype = setFocus
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting setStyle - APEXlang Reference

componentSetting (setStyle)

Parent: componentSetting

Applies whentype = setStyle
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting setValue - APEXlang Reference

componentSetting (setValue)

Parent: componentSetting

Applies whentype = setValue
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting share - APEXlang Reference

componentSetting (share)

Parent: componentSetting

Applies whentype = share
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting showAiAssistant - APEXlang Reference

componentSetting (showAiAssistant)

Parent: componentSetting

Applies whentype = showAiAssistant
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | aiAvatarType | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: imageUrl iconClasses initials

 | userAvatarType | enum | No | | data type=string; maxLen=4000; lov=STATIC
Valid values: iconClasses initials imageUrl

 | iconClasses | string | Yes | | data type=string; maxLen=4000
Applies whenai_avatar_type = ICON_CLASS

 | imageUrl | string | Yes | | data type=string; maxLen=4000
Applies whenai_avatar_type = IMAGE_URL

 | initials | string | Yes | | data type=string; maxLen=4000
Applies whenai_avatar_type = INITIALS

 | iconClasses | string | Yes | | data type=string; maxLen=4000
Applies whenuser_avatar_type = ICON_CLASS

 | imageUrl | string | Yes | | data type=string; maxLen=4000
Applies whenuser_avatar_type = IMAGE_URL

 | initials | string | Yes | | data type=string; maxLen=4000
Applies whenuser_avatar_type = INITIALS

Copy
settings {
 aiAvatarType: imageUrl
 userAvatarType: iconClasses
 iconClasses: value
 imageUrl: value
 initials: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 aiAvatarType: imageUrl
 userAvatarType: iconClasses
 iconClasses: value
 imageUrl: value
 initials: value
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting showErrorMessage - APEXlang Reference

componentSetting (showErrorMessage)

Parent: componentSetting

Applies whentype = showErrorMessage
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting showSuccessMessage - APEXlang Reference

componentSetting (showSuccessMessage)

Parent: componentSetting

Applies whentype = showSuccessMessage
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting show - APEXlang Reference

componentSetting (show)

Parent: componentSetting

Applies whentype = show
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting shuttle - APEXlang Reference

componentSetting (shuttle)

Parent: componentSetting

Applies whentype = shuttle
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting simpleChart - APEXlang Reference

componentSetting (simpleChart)

Parent: componentSetting

Applies whentype = simpleChart
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting smartFilters - APEXlang Reference

componentSetting (smartFilters)

Parent: componentSetting

Applies whentype = smartFilters
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting socialSignIn - APEXlang Reference

componentSetting (socialSignIn)

Parent: componentSetting

Applies whentype = socialSignIn
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting starRating - APEXlang Reference

componentSetting (starRating)

Parent: componentSetting

Applies whentype = starRating
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | defaultIcon | string | Yes | fa-star | data type=string; maxLen=4000

 | activeColor | string | No | | data type=string; maxLen=4000

 | inactiveColor | string | No | | data type=string; maxLen=4000

 | tooltip | string | No | #VALUE# | data type=string; maxLen=4000

Copy
settings {
 defaultIcon: value
 activeColor: value
 inactiveColor: value
 tooltip: value
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 defaultIcon: value
 activeColor: value
 inactiveColor: value
 tooltip: value
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting staticContent - APEXlang Reference

componentSetting (staticContent)

Parent: componentSetting

Applies whentype = staticContent
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting stopAndStartGridLayout - APEXlang Reference

componentSetting (stopAndStartGridLayout)

Parent: componentSetting

Applies whentype = stopAndStartGridLayout
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting submitPage - APEXlang Reference

componentSetting (submitPage)

Parent: componentSetting

Applies whentype = submitPage
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting svgChart - APEXlang Reference

componentSetting (svgChart)

Parent: componentSetting

Applies whentype = svgChart
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting switch - APEXlang Reference

componentSetting (switch)

Parent: componentSetting

Applies whentype = switch
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting switch - APEXlang Reference

componentSetting (switch)

Parent: componentSetting

Applies whentype = switch
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
settings
subscription

settings

 | Property | Type | Required | Default Value | Details

 | onValue | string | No | Y | data type=string; maxLen=255

 | onLabel | string | No | | data type=string; maxLen=4000

 | offValue | string | Yes | N | data type=string; maxLen=255

 | offLabel | string | No | | data type=string; maxLen=4000

 | displayStyle | enum | Yes | switch | data type=string; maxLen=4000; lov=STATIC
Valid values: switch selectList pillButton

Copy
settings {
 onValue: value
 onLabel: value
 offValue: value
 offLabel: value
 displayStyle: switch
}

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 settings {
 onValue: value
 onLabel: value
 offValue: value
 offLabel: value
 displayStyle: switch
 }
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting tabformAddRows - APEXlang Reference

componentSetting (tabformAddRows)

Parent: componentSetting

Applies whentype = tabformAddRows
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting tabformDelete - APEXlang Reference

componentSetting (tabformDelete)

Parent: componentSetting

Applies whentype = tabformDelete
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting tabformUpdate - APEXlang Reference

componentSetting (tabformUpdate)

Parent: componentSetting

Applies whentype = tabformUpdate
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting tabform - APEXlang Reference

componentSetting (tabform)

Parent: componentSetting

Applies whentype = tabform
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting textFieldWithAutocomplete - APEXlang Reference

componentSetting (textFieldWithAutocomplete)

Parent: componentSetting

Applies whentype = textFieldWithAutocomplete
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting textField - APEXlang Reference

componentSetting (textField)

Parent: componentSetting

Applies whentype = textField
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting textarea - APEXlang Reference

componentSetting (textarea)

Parent: componentSetting

Applies whentype = textarea
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting tree - APEXlang Reference

componentSetting (tree)

Parent: componentSetting

Applies whentype = tree
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting triggerGeocoding - APEXlang Reference

componentSetting (triggerGeocoding)

Parent: componentSetting

Applies whentype = triggerGeocoding
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting url - APEXlang Reference

componentSetting (url)

Parent: componentSetting

Applies whentype = url
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting userPreferences - APEXlang Reference

componentSetting (userPreferences)

Parent: componentSetting

Applies whentype = userPreferences
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting wait - APEXlang Reference

componentSetting (wait)

Parent: componentSetting

Applies whentype = wait
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting webService - APEXlang Reference

componentSetting (webService)

Parent: componentSetting

Applies whentype = webService
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting workflowDiagram - APEXlang Reference

componentSetting (workflowDiagram)

Parent: componentSetting

Applies whentype = workflowDiagram
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting workflowEnd - APEXlang Reference

componentSetting (workflowEnd)

Parent: componentSetting

Applies whentype = workflowEnd
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting workflowStart - APEXlang Reference

componentSetting (workflowStart)

Parent: componentSetting

Applies whentype = workflowStart
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)

---

componentSetting workflow - APEXlang Reference

componentSetting (workflow)

Parent: componentSetting

Applies whentype = workflow
Direct Properties:

 | Property | Type | Required | Default Value | Details

 | type | enum | Yes | | data type=string; lov=STATIC
Valid values: item region dynamicAction genAITool process authenticationScheme authorizationScheme restDataSource

 | name | enum | Yes | | data type=string; lov=PLUGINS
Valid values: addClass alert breadcrumb calendar cancelDialog cancelEvent cards chart classicReport classicTree clear clearErrors closeDialog closeRegion collapseTree colorPicker columnToggleReport confirm custom dataUploadColMapping databaseAccounts datePicker datePickerJquery disable displayOnly download dynamicContent enable executeClientsideCode executeJsCode executeServerSideCode executeServersideCode existsSqlQuery expandTree facetedSearch form generateTextWithAi getCurrentPosition helpText hidden hide http httpHeaderVariable interactiveGrid interactiveReport internalAppExtension invokeInteractiveReportDialog isInRoleOrGroup isNotInRoleOrGroup itemEqualsValue itemIsNotNull itemIsNull itemNotEqualsValue ldapDirectory legacyCalendar list listView map markdownEditor noAuth notExistsSqlQuery numberField oci odataRestService openDoorCredentials openRegion oracleApexAccounts oracleAppServerSSO oracleCloudAppsBoss oracleCloudAppsSaas ords password percentGraph plSqlDynamicContent plSqlFunctionBody popupLov preferenceEqualsValue preferenceNotEqualsValue printReport reflowReport refresh regionDisplaySelector removeClass restEnabledSqlQuery retrieveData richTextEditor samlSignIn search sendEMail sendPushNotification serverSideGeocoding setFocus setStyle setValue share show showAiAssistant showErrorMessage showSuccessMessage shuttle simpleChart smartFilters socialSignIn starRating staticContent submitPage svgChart switch tabform textField textFieldWithAutocomplete textarea tree triggerGeocoding url workflowDiagram

Property Groups:
subscription

subscription

 | Property | Type | Required | Default Value | Details

 | master | enum | No | | data type=reference; lov=COMPONENT; references=app
Valid values: @/8842.242/ @/8842.242/UTDEV18800 @/8842.261/ @/8842.261/UT261 @/8842.9999/ @/8842.9999/DATA-REPORTER-THEME

Copy
subscription {
 master: "@/8842.242/"
}

APEXlang Example

Copy
componentSetting sample (
 type: item
 name: addClass
 subscription {
 master: "@/8842.242/"
 }
)
