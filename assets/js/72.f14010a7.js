(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{820:function(e,t,a){"use strict";a.r(t);var s=a(45),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"break-out-integrate-the-sample-application-into-azure-ad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#break-out-integrate-the-sample-application-into-azure-ad"}},[e._v("#")]),e._v(" Break Out: Integrate the sample application into Azure AD")]),e._v(" "),a("h2",{attrs:{id:"here-is-what-you-will-learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn"}},[e._v("#")]),e._v(" Here is what you will learn")]),e._v(" "),a("p",[e._v("Deploy the sample application with Azure AD Integration.")]),e._v(" "),a("p",[e._v("In "),a("RouterLink",{attrs:{to:"/day5/challenges/challenge-3.html"}},[e._v("challenge-3")]),e._v(" we already created the needed Azure AD applications to integrate the SCM Contacts API into Azure AD. We acquired an access_token from Azure AD and made a request to the API. Now it's time to integrate all APIs of the sample application into Azure AD.")],1),e._v(" "),a("p",[e._v("Here is the list of the remaining services we have to integrate into Azure AD:")]),e._v(" "),a("ul",[a("li",[e._v("SCM Resource API")]),e._v(" "),a("li",[e._v("SCM Search API")]),e._v(" "),a("li",[e._v("SCM Visitreports API")]),e._v(" "),a("li",[e._v("SCM Textanalytics")]),e._v(" "),a("li",[e._v("SCM Frontend")])]),e._v(" "),a("blockquote",[a("p",[e._v("If you started this day based on the checkpoint, please "),a("RouterLink",{attrs:{to:"/day5/apps/checkpoint/ChallengeAndBreakout.html#modified-steps-for-break-out-session"}},[a("strong",[e._v("follow\nthis link")])]),e._v(" to see an adopted guide.")],1)]),e._v(" "),a("p",[e._v("As in "),a("RouterLink",{attrs:{to:"/day5/challenges/challenge-3.html"}},[e._v("challenge-3")]),e._v(" we always perform the following steps for each service:")],1),e._v(" "),a("ol",[a("li",[e._v("Create and checkout a new branch")]),e._v(" "),a("li",[e._v("Edit the the existing build definition and change everything from "),a("code",[e._v("day4")]),e._v(" to "),a("code",[e._v("day5")])]),e._v(" "),a("li",[e._v("Save the definition, commit the changes and push the branch to the remote repository")]),e._v(" "),a("li",[e._v("Run the build targeting the feature branch")]),e._v(" "),a("li",[e._v("Edit the Release defintion, add the needed variables and adjust the deployment tasks")]),e._v(" "),a("li",[e._v("Run the Release build")]),e._v(" "),a("li",[e._v("Merge the feature branch into the master branch")])]),e._v(" "),a("p",[e._v("We don't need to create additional Azure AD applications for the remaining services. All APIs uses the same Azure AD application that we already created in "),a("RouterLink",{attrs:{to:"/day5/challenges/challenge-3.html"}},[e._v("challenge-3")]),e._v(" for each stage (Development and Testing). The Frontend services uses the client application.")],1),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Be carefull that you don't confuse the IDs of the stage "),a("code",[e._v("Development")]),e._v(" and "),a("code",[e._v("Testing")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"scm-frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scm-frontend"}},[e._v("#")]),e._v(" SCM Frontend")]),e._v(" "),a("p",[e._v("Feature branch: "),a("strong",[e._v("features/scmfrontendaad")])]),e._v(" "),a("p",[e._v("Build definition yaml: "),a("strong",[e._v("scm-frontend-ci.yaml")])]),e._v(" "),a("p",[e._v("Release definition: "),a("strong",[e._v("SCM-Frontend-CD")])]),e._v(" "),a("p",[e._v("CD Build variables for stage "),a("strong",[e._v("Development")]),e._v(":")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("AadTenantId")]),e._v(" "),a("td",[e._v("the Id of your Azure Ad Tenant")])]),e._v(" "),a("tr",[a("td",[e._v("AadApiClientIdUri")]),e._v(" "),a("td",[e._v("http://scmapi-dev")])]),e._v(" "),a("tr",[a("td",[e._v("AadFrontendClientId")]),e._v(" "),a("td",[e._v("UI AppId, the value that you received from the output when you created the Azure AD application for stage Development")])])])]),e._v(" "),a("p",[e._v("CD Build variables for stage "),a("strong",[e._v("Testing")]),e._v(":")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("AadTenantId")]),e._v(" "),a("td",[e._v("the Id of your Azure Ad Tenant")])]),e._v(" "),a("tr",[a("td",[e._v("AadApiClientIdUri")]),e._v(" "),a("td",[e._v("http://scmapi-test")])]),e._v(" "),a("tr",[a("td",[e._v("AadFrontendClientId")]),e._v(" "),a("td",[e._v("UI AppId, the value that you received from the output when you created the Azure AD application for stage Testing")])])])]),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v(" As on Day4 we have to configure the settings for the SCM Frontend. Adjust the Azure CLI task which applies the settings to "),a("code",[e._v("dist/settings.js")]),e._v(" as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('echo "var uisettings = { \\"tenantId\\": \\"$(AadTenantId)\\", \\"audience\\": \\"$(AadApiClientIdUri)\\", \\"clientId\\": \\"$(AadFrontendClientId)\\", \\"enableStats\\": true, \\"endpoint\\": \\"$(ContactsEndpoint)\\", \\"resourcesEndpoint\\": \\"$(ResourcesEndpoint)\\", \\"searchEndpoint\\": \\"$(SearchEndpoint)\\", \\"reportsEndpoint\\": \\"$(ReportsEndpoint)\\", \\"aiKey\\": \\"`az resource show -g $(ResourceGroupName) -n $(ApplicationInsightsName) --resource-type "microsoft.insights/components" --query "properties.InstrumentationKey" -o tsv`\\" };" > $(System.ArtifactsDirectory)/_SCM-Frontend-CI/drop/dist/settings/settings.js\n')])])]),a("blockquote",[a("p",[e._v("Please skip this step if you've started on the checkpoint, the correct\nvariable replacement should already be in place.")])]),e._v(" "),a("p",[e._v("Make sure that you copy the whole line!")]),e._v(" "),a("h2",{attrs:{id:"scm-resource-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scm-resource-api"}},[e._v("#")]),e._v(" SCM Resource API")]),e._v(" "),a("p",[e._v("Feature branch: "),a("strong",[e._v("features/scmresourcesaad")])]),e._v(" "),a("p",[e._v("Build definition yaml: "),a("strong",[e._v("scm-resources-ci.yaml")])]),e._v(" "),a("p",[e._v("Release defintion: "),a("strong",[e._v("SCM-Resources-CD")])]),e._v(" "),a("p",[e._v("CD Build variables for stage "),a("strong",[e._v("Development")]),e._v(":")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("ARM Template parameter")]),e._v(" "),a("th",[e._v("Stage")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("AadInstance")]),e._v(" "),a("td",[e._v("https://login.microsoftonline.com")]),e._v(" "),a("td",[e._v("aadInstance")]),e._v(" "),a("td",[e._v("Development")])]),e._v(" "),a("tr",[a("td",[e._v("AadClientId")]),e._v(" "),a("td",[e._v("API AppId, the value that you received from the output when you created the Azure AD application")]),e._v(" "),a("td",[e._v("aadClientId")]),e._v(" "),a("td",[e._v("Development")])]),e._v(" "),a("tr",[a("td",[e._v("AadTenantId")]),e._v(" "),a("td",[e._v("The id of your Azure AD Tenant")]),e._v(" "),a("td",[e._v("aadTenantId")]),e._v(" "),a("td",[e._v("Development")])]),e._v(" "),a("tr",[a("td",[e._v("AadDomain")]),e._v(" "),a("td",[e._v("The domain name of your Azure AD e.g. azuredevcollege.onmicrosoft.com")]),e._v(" "),a("td",[e._v("aadDomain")]),e._v(" "),a("td",[e._v("Development")])]),e._v(" "),a("tr",[a("td",[e._v("AadClientIdUri")]),e._v(" "),a("td",[e._v("http://scmapi-dev")]),e._v(" "),a("td",[e._v("aadClientIdUri")]),e._v(" "),a("td",[e._v("Development")])])])]),e._v(" "),a("p",[e._v("CD Build variables for stage "),a("strong",[e._v("Testing")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("ARM Template parameter")]),e._v(" "),a("th",[e._v("Stage")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("AadInstance")]),e._v(" "),a("td",[e._v("https://login.microsoftonline.com")]),e._v(" "),a("td",[e._v("aadInstance")]),e._v(" "),a("td",[e._v("Testing")])]),e._v(" "),a("tr",[a("td",[e._v("AadClientId")]),e._v(" "),a("td",[e._v("API AppId, the value that you received from the output when you created the Azure AD application for stage Testing")]),e._v(" "),a("td",[e._v("aadClientId")]),e._v(" "),a("td",[e._v("Testing")])]),e._v(" "),a("tr",[a("td",[e._v("AadTenantId")]),e._v(" "),a("td",[e._v("The id of your Azure AD Tenant")]),e._v(" "),a("td",[e._v("aadTenantId")]),e._v(" "),a("td",[e._v("Testing")])]),e._v(" "),a("tr",[a("td",[e._v("AadDomain")]),e._v(" "),a("td",[e._v("The domain name of your Azure AD e.g. azuredevcollege.onmicrosoft.com")]),e._v(" "),a("td",[e._v("aadDomain")]),e._v(" "),a("td",[e._v("Testing")])]),e._v(" "),a("tr",[a("td",[e._v("AadClientIdUri")]),e._v(" "),a("td",[e._v("http://scmapi-test")]),e._v(" "),a("td",[e._v("aadClientIdUri")]),e._v(" "),a("td",[e._v("Testing")])])])]),e._v(" "),a("p",[e._v("ARM Template override template parameters:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-webAppName $(ApiAppName) -sku $(AppServicePlanSKU) -use32bitworker $(Use32BitWorker) -alwaysOn $(AlwaysOn) -storageAccountName $(StorageAccountName) -functionAppName $(ResizerFunctionName) -applicationInsightsName $(ApplicationInsightsName) -serviceBusNamespaceName $(ServiceBusNamespaceName) -aadInstance $(AadInstance) -aadClientId $(AadClientId) -aadTenantId $(AadTenantId) -aadDomain $(AadDomain) -aadClientIdUri $(AadClientIdUri)\n")])])]),a("h2",{attrs:{id:"scm-search-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scm-search-api"}},[e._v("#")]),e._v(" SCM Search API")]),e._v(" "),a("p",[e._v("Feature branch: "),a("strong",[e._v("features/scmsearchaad")])]),e._v(" "),a("p",[e._v("Build definition yaml: "),a("strong",[e._v("scm-search-ci.yaml")])]),e._v(" "),a("p",[e._v("Release definition: "),a("strong",[e._v("SCM-Search-CD")])]),e._v(" "),a("p",[e._v("CD Build variables for stage "),a("strong",[e._v("Development")]),e._v(":")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("ARM Template parameter")]),e._v(" "),a("th",[e._v("Stage")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("AadInstance")]),e._v(" "),a("td",[e._v("https://login.microsoftonline.com")]),e._v(" "),a("td",[e._v("aadInstance")]),e._v(" "),a("td",[e._v("Development")])]),e._v(" "),a("tr",[a("td",[e._v("AadClientId")]),e._v(" "),a("td",[e._v("API AppId, the value that you received from the output when you created the Azure AD application")]),e._v(" "),a("td",[e._v("aadClientId")]),e._v(" "),a("td",[e._v("Development")])]),e._v(" "),a("tr",[a("td",[e._v("AadTenantId")]),e._v(" "),a("td",[e._v("The id of your Azure AD Tenant")]),e._v(" "),a("td",[e._v("aadTenantId")]),e._v(" "),a("td",[e._v("Development")])]),e._v(" "),a("tr",[a("td",[e._v("AadDomain")]),e._v(" "),a("td",[e._v("The domain name of your Azure AD e.g. azuredevcollege.onmicrosoft.com")]),e._v(" "),a("td",[e._v("aadDomain")]),e._v(" "),a("td",[e._v("Development")])]),e._v(" "),a("tr",[a("td",[e._v("AadClientIdUri")]),e._v(" "),a("td",[e._v("http://scmapi-dev")]),e._v(" "),a("td",[e._v("aadClientIdUri")]),e._v(" "),a("td",[e._v("Development")])])])]),e._v(" "),a("p",[e._v("CD Build variables for stage "),a("strong",[e._v("Testing")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("ARM Template parameter")]),e._v(" "),a("th",[e._v("Stage")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("AadInstance")]),e._v(" "),a("td",[e._v("https://login.microsoftonline.com")]),e._v(" "),a("td",[e._v("aadInstance")]),e._v(" "),a("td",[e._v("Testing")])]),e._v(" "),a("tr",[a("td",[e._v("AadClientId")]),e._v(" "),a("td",[e._v("API AppId, the value that you received from the output when you created the Azure AD application for stage Testing")]),e._v(" "),a("td",[e._v("aadClientId")]),e._v(" "),a("td",[e._v("Testing")])]),e._v(" "),a("tr",[a("td",[e._v("AadTenantId")]),e._v(" "),a("td",[e._v("The id of your Azure AD Tenant")]),e._v(" "),a("td",[e._v("aadTenantId")]),e._v(" "),a("td",[e._v("Testing")])]),e._v(" "),a("tr",[a("td",[e._v("AadDomain")]),e._v(" "),a("td",[e._v("The domain name of your Azure AD e.g. azuredevcollege.onmicrosoft.com")]),e._v(" "),a("td",[e._v("aadDomain")]),e._v(" "),a("td",[e._v("Testing")])]),e._v(" "),a("tr",[a("td",[e._v("AadClientIdUri")]),e._v(" "),a("td",[e._v("http://scmapi-test")]),e._v(" "),a("td",[e._v("aadClientIdUri")]),e._v(" "),a("td",[e._v("Testing")])])])]),e._v(" "),a("p",[e._v("ARM Template overrides template parameters:")]),e._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("-webAppName "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ApiAppName"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -appPlanSKU "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AppServicePlanSKU"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -use32bitworker "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("Use32BitWorker"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -alwaysOn "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AlwaysOn"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -storageAccountName "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("StorageAccountName"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -functionAppName "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("IndexerFunctionName"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -applicationInsightsName "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ApplicationInsightsName"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -serviceBusNamespaceName "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ServiceBusNamespaceName"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -azureSearchServiceName "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AzureSearchServiceName"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -azureSearchSKU "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AzureSearchSKU"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -azureSearchReplicaCount "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AzureSearchReplicaCount"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -azureSearchPartitionCount "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AzureSearchPartitionCount"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -aadInstance "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AadInstance"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -aadClientId "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AadClientId"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -aadTenantId "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AadTenantId"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -aadDomain "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AadDomain"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -aadClientIdUri "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AadClientIdUri"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])])]),a("h2",{attrs:{id:"scm-visitreports-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scm-visitreports-api"}},[e._v("#")]),e._v(" SCM VisitReports API")]),e._v(" "),a("p",[e._v("Feature branch: "),a("strong",[e._v("features/scmvisitreportsaad")])]),e._v(" "),a("p",[e._v("Build definition yaml: "),a("strong",[e._v("scm-visitreports-ci.yaml")])]),e._v(" "),a("p",[e._v("Release definition: "),a("strong",[e._v("SCM-VisitReports-CD")])]),e._v(" "),a("p",[e._v("CD Build variables for stage "),a("strong",[e._v("Development")]),e._v(":")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" You only need to adjust the deployment task that uses the ARM template "),a("strong",[e._v("scm-visitreport-nodejs-infra.json")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("ARM Template parameter")]),e._v(" "),a("th",[e._v("Stage")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("AadTenantId")]),e._v(" "),a("td",[e._v("The id of your Azure AD Tenant")]),e._v(" "),a("td",[e._v("aadTenantId")]),e._v(" "),a("td",[e._v("Development")])]),e._v(" "),a("tr",[a("td",[e._v("AadClientIdUri")]),e._v(" "),a("td",[e._v("http://scmapi-dev")]),e._v(" "),a("td",[e._v("aadClientIdUri")]),e._v(" "),a("td",[e._v("Development")])])])]),e._v(" "),a("p",[e._v("CD Build variables for stage "),a("strong",[e._v("Testing")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("ARM Template parameter")]),e._v(" "),a("th",[e._v("Stage")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("AadTenantId")]),e._v(" "),a("td",[e._v("The id of your Azure AD Tenant")]),e._v(" "),a("td",[e._v("aadTenantId")]),e._v(" "),a("td",[e._v("Testing")])]),e._v(" "),a("tr",[a("td",[e._v("AadClientIdUri")]),e._v(" "),a("td",[e._v("http://scmapi-test")]),e._v(" "),a("td",[e._v("aadClientIdUri")]),e._v(" "),a("td",[e._v("Testing")])])])]),e._v(" "),a("p",[e._v("ARM Template overrides template parameters for "),a("strong",[e._v("scm-visitreport-nodejs-infra.json")])]),e._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("-sku "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AppServicePlanSKU"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -skuCode "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AppServicePlanSKUCode"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -webAppName "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ApiAppName"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -applicationInsightsName "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ApplicationInsightsName"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -cosmosDbAccount "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("CosmosDbAccount"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -serviceBusNamespaceName "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ServiceBusNamespaceName"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -commonResGroup "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("ResourceGroupName"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -aadTenantId "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AadTenantId"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -aadClientIdUri "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("AadClientIdUri"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])])]),a("h2",{attrs:{id:"scm-textanalytics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scm-textanalytics"}},[e._v("#")]),e._v(" SCM Textanalytics")]),e._v(" "),a("p",[e._v("Feature branch: "),a("strong",[e._v("features/scmtextanalyticsaad")])]),e._v(" "),a("p",[e._v("Build definition yaml: "),a("strong",[e._v("scm-textanalytics-ci.yaml")])]),e._v(" "),a("p",[e._v("Release definition: "),a("strong",[e._v("SCM-TextAnalytics-CD")])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" As the service SCM TextAnalytics does not offer an accessible API there is no need to adjust the Release build. We only need to adjust the build definition, create a new build and deploy it to Azure.")]),e._v(" "),a("h2",{attrs:{id:"wrap-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap up")]),e._v(" "),a("p",[e._v("You've done it. There is nothing more to add, just test the application and enjoy your success 😃")])])}),[],!1,null,null,null);t.default=r.exports}}]);