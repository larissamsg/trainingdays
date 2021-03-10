(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{310:function(t,e,a){t.exports=a.p+"assets/img/storage_explorer_view.52ed3f13.png"},496:function(t,e,a){t.exports=a.p+"assets/img/portal_storageaccount.42e7a95b.png"},497:function(t,e,a){t.exports=a.p+"assets/img/function_create.f2a257fb.png"},498:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard1.80854a36.png"},499:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard2.8957d094.png"},500:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard3.21fd1514.png"},501:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard4.0a1935a1.png"},502:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard5.d7f6fc92.png"},503:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard6.cc694b88.png"},504:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard7.25ae7287.png"},505:function(t,e,a){t.exports=a.p+"assets/img/functions_deploy_wizard1.ba3125ef.png"},506:function(t,e,a){t.exports=a.p+"assets/img/azure_function_settings.805a54cf.png"},784:function(t,e,a){"use strict";a.r(e);var s=a(45),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"serverless"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serverless"}},[t._v("#")]),t._v(" Serverless")]),t._v(" "),s("h2",{attrs:{id:"here-is-what-you-will-learn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn"}},[t._v("#")]),t._v(" Here is what you will learn")]),t._v(" "),s("ul",[s("li",[t._v("Create an Azure Function on your local machine")]),t._v(" "),s("li",[t._v("Learn how to debug Azure Functions")]),t._v(" "),s("li",[t._v("Learn how to use Function Triggers to react to events in Azure")]),t._v(" "),s("li",[t._v("Deploy Azure Functions")])]),t._v(" "),s("h2",{attrs:{id:"create-a-local-azure-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-local-azure-function"}},[t._v("#")]),t._v(" Create a local Azure Function")]),t._v(" "),s("p",[t._v("To get familiar with Azure Functions on your local machine, we will be creating a sample that listens for files on an Azure Storage Account (Blob). Each time a new file will be added to a predefined container, our function will be called by Azure, giving us the opportunity to manipulate the file and save it to another location (just a small sample).")]),t._v(" "),s("p",[t._v("So, first of all, we need to create a Storage Account to being able to upload/process files.")]),t._v(" "),s("h3",{attrs:{id:"add-a-storage-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-storage-account"}},[t._v("#")]),t._v(" Add a Storage Account")]),t._v(" "),s("p",[t._v("Go to the Azure Portal and click on "),s("strong",[t._v('"Create a resource"')]),t._v(", in the next view choose/search for "),s("strong",[t._v('"Storage Account"')]),t._v(" and afterwards click "),s("em",[t._v("create")]),t._v(".")]),t._v(" "),s("p",[t._v("Follow the wizard:")]),t._v(" "),s("ul",[s("li",[t._v("put the Storage Account in a new resource group called "),s("em",[t._v("serverless-rg")])]),t._v(" "),s("li",[t._v("give your account a global unique name")]),t._v(" "),s("li",[t._v('For Location, choose "West Europe"')]),t._v(" "),s("li",[t._v("Performance Tier: Standard")]),t._v(" "),s("li",[t._v("Account Kind: Storage V2 (General Purpose)")]),t._v(" "),s("li",[t._v("Replication: Locally-redundant storage (LRS)")]),t._v(" "),s("li",[t._v("Access Tier: Hot")])]),t._v(" "),s("p",[t._v("Leave all other options to their defaults. In the summary view, it should look like that:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(496),alt:"create",title:"create"}})]),t._v(" "),s("p",[t._v("Proceed and create the Storage Account.")]),t._v(" "),s("p",[t._v('When the deployment has finished, go to the storage account and open "Containers" (under "Blob service") and create a container called '),s("strong",[t._v("originals")]),t._v(" and another one called "),s("strong",[t._v("processed")]),t._v(" (leave the proposed settings for "),s("strong",[t._v("Public Access Level")]),t._v(" - "),s("em",[t._v("Private")]),t._v(").")]),t._v(" "),s("p",[t._v("The infrastructure to store files is now ready. Let's create the local Azure Function.")]),t._v(" "),s("h3",{attrs:{id:"create-the-local-function-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-local-function-app"}},[t._v("#")]),t._v(" Create the local Function App")]),t._v(" "),s("p",[t._v('Open a new Visual Studio Code window and switch to the Azure Tools Exentsion. In the section for "Functions", click on "Create New Project" and select a new, empty folder on your local machine:')]),t._v(" "),s("p",[s("img",{attrs:{src:a(497),alt:"func_create",title:"func_create"}})]),t._v(" "),s("p",[t._v("The Wizard will guide you through the local setup process.")]),t._v(" "),s("p",[t._v("Choose the following options:")]),t._v(" "),s("ul",[s("li",[t._v("Language: C#\n"),s("img",{attrs:{src:a(498),alt:"functions_wizard1",title:"functions_wizard1"}})]),t._v(" "),s("li",[t._v("Template: BlobTrigger\n"),s("img",{attrs:{src:a(499),alt:"functions_wizard2",title:"functions_wizard2"}})]),t._v(" "),s("li",[t._v("Function Name: BlobTriggerCSharp\n"),s("img",{attrs:{src:a(500),alt:"functions_wizard3",title:"functions_wizard3"}})]),t._v(" "),s("li",[t._v("Namespace: AzDevCollege.Function\n"),s("img",{attrs:{src:a(501),alt:"functions_wizard4",title:"functions_wizard4"}})]),t._v(" "),s("li",[t._v("Settings: Create new local app setting\n"),s("img",{attrs:{src:a(502),alt:"functions_wizard5",title:"functions_wizard5"}})]),t._v(" "),s("li",[t._v("Storage Account: select the storage account you created previously\n"),s("img",{attrs:{src:a(503),alt:"functions_wizard6",title:"functions_wizard6"}})]),t._v(" "),s("li",[t._v("Trigger Path (the container name we want to listen to for new files): originals\n"),s("img",{attrs:{src:a(504),alt:"functions_wizard7",title:"functions_wizard7"}})]),t._v(" "),s("li",[t._v("Debug: select the same storage account as above")])]),t._v(" "),s("p",[t._v("When everything is setup in VS Code, let's test the function.")]),t._v(" "),s("p",[t._v("Open "),s("em",[t._v("BlobTriggerCSharp.cs")]),t._v(' file and set a breakpoint in the "'),s("em",[t._v("Run")]),t._v('" method.')]),t._v(" "),s("p",[t._v("Start the Azure Function by hitting "),s("strong",[t._v("F5")]),t._v(".")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Info")]),t._v(": If you get a message that the core function tools are required, install them by executing "),s("code",[t._v("npm i -g azure-functions-core-tools@3 --unsafe-perm true")]),t._v(". If you still see an error, it's likely that remote-signed Powerhell scripts aren't allowed on your machine. To fix that, run "),s("code",[t._v("Set-ExecutionPolicy -ExecutionPolicy RemoteSigned")]),t._v(" in a Powershell environment (as admin!).")])]),t._v(" "),s("p",[t._v("The debug console should print logs like that:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Executing task: func "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("\n\n\n                  %%%%%%\n                 %%%%%%\n            @   %%%%%%    @\n          @@   %%%%%%      @@\n       @@@    %%%%%%%%%%%    @@@\n     @@      %%%%%%%%%%        @@\n       @@         %%%%       @@\n         @@      %%%       @@\n           @@    %%      @@\n                %%\n                %\n\nAzure Functions Core Tools "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.7")]),t._v(".1948 Commit hash: 29a0626ded3ae99c4111f66763f27bb9fb564103"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nFunction Runtime Version: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(".12888.0\n")])])]),s("p",[t._v("Now, open the Azure Storage Explorer, find your storage account and select the "),s("em",[t._v("originals")]),t._v(' container (alternatively: go to the Portal and open the "Storage Explorer" in the Storage Account).')]),t._v(" "),s("p",[s("img",{attrs:{src:a(310),alt:"storage_explorer_view",title:"storage_explorer_view"}})]),t._v(" "),s("p",[t._v("Drag'n Drop a file to the container or upload one via the menu. After a few seconds, the breakpoint in VS Code will be hit. Examine the properties of the "),s("strong",[t._v("myBlob")]),t._v(" variable.")]),t._v(" "),s("h3",{attrs:{id:"adjusting-the-sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adjusting-the-sample"}},[t._v("#")]),t._v(" Adjusting the Sample")]),t._v(" "),s("p",[t._v("So, great, we can now receive events when a file is added to blob storage. Let's add a more meaningful sample. We want to receive images that we will be resizing/manipulating in our function and write the result to the "),s("strong",[t._v("processed")]),t._v(" container.")]),t._v(" "),s("p",[t._v("Therefore, we need to add a dependency to our project that enables us to do image manipulation in dotnet core. We will use "),s("strong",[t._v("SixLabors.ImageSharp")]),t._v(" "),s("a",{attrs:{href:"https://github.com/SixLabors/ImageSharp",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/SixLabors/ImageSharp"),s("OutboundLink")],1),t._v(". Open a terminal and go to your projects folder. Add the library:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("dotnet "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NAME_OF_FUNCTION_PROJECT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".csproj package SixLabors.ImageSharp\n")])])]),s("p",[t._v("Now, back in Visual Studio Code, replace the contents of the file "),s("strong",[t._v("BlobTriggerCSharp.cs")]),t._v(" with:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Azure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebJobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Azure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebJobs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Extensions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("SixLabors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ImageSharp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("SixLabors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ImageSharp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Processing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("AzDevCollege"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlobTriggerCSharp")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FunctionName")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BlobTriggerCSharp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlobTrigger")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"originals/{name}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Connection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<REPLACE_WITH_NAME_OF_STORAGE_ACCOUNT>_STORAGE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream")]),t._v(" myBlob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"processed/proc_{name}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FileAccess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Connection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<REPLACE_WITH_NAME_OF_STORAGE_ACCOUNT>_STORAGE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream")]),t._v(" outStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ILogger")]),t._v(" log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),t._v(" image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myBlob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Resize and rotate the image!")]),t._v("\n                image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Mutate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Resize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Mutate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaveAsJpeg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LogInformation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('$"C# Blob trigger function Processed blob\\n Name:')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" \\n Size: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("myBlob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(' Bytes"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("What has been added to the "),s("strong",[t._v("Run")]),t._v(" method:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v('[Blob("processed/proc_{name}", FileAccess.Write)] Stream outStream')]),t._v(" parameter to automatically write the results of the image manipulation to a blob in the container "),s("em",[t._v("processed")]),t._v(' having the same file name, prefixed with "proc". This is called an '),s("strong",[t._v("Output Binding")]),t._v('. You simply write data to these kind of annotated variables and Azure takes care of storing to the configured "data store". For more information on that, see '),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob?tabs=csharp#output",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob?tabs=csharp#output"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Code to manipulate the input image in the "),s("em",[t._v("using")]),t._v(" statement")])]),t._v(" "),s("p",[t._v("Now restart the local Azure Function and when the function is ready to accept calls, again go to the Storage Explorer and drag an "),s("strong",[t._v("image")]),t._v(" (! - please use an image!) to the folder "),s("strong",[t._v("orginals")]),t._v(". A few seconds later, you will see that the Azure Function has been triggered.")]),t._v(" "),s("p",[t._v("Now check the "),s("em",[t._v("processed")]),t._v(" container. You will find a new "),s("strong",[t._v("proc_")]),t._v(" image with the results of our manipulation.")]),t._v(" "),s("p",[t._v("If everything works as expected on your local machine, let's deploy to Azure.")]),t._v(" "),s("h2",{attrs:{id:"deploy-an-azure-function-app-to-azure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-an-azure-function-app-to-azure"}},[t._v("#")]),t._v(" Deploy an Azure Function App to Azure")]),t._v(" "),s("p",[t._v('Go to the Azure Tools Extension and click on the "Deploy to Azure..." button in the "Functions" section. A wizard will guide you through the creation process (- you are now already familiar with that).')]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Important")]),t._v(": choose "),s("strong",[t._v("Advanced")]),t._v(" mode.")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(505),alt:"functions_deploy_wizard1",title:"functions_deploy_wizard1"}})]),t._v(" "),s("p",[t._v("Choose the following options, when asked:")]),t._v(" "),s("ul",[s("li",[t._v("Runtime: .NET Core 3.1")]),t._v(" "),s("li",[t._v("OS: Windows")]),t._v(" "),s("li",[t._v("Hosting Plan: Consumption")]),t._v(" "),s("li",[t._v("resource groupe: "),s("strong",[t._v("serverless-rg")])]),t._v(" "),s("li",[t._v("when asked, select the same storage account used in the local sample")]),t._v(" "),s("li",[t._v('You can skip the creation of an Application Insights instance (--\x3e "Skip for now")')])]),t._v(" "),s("p",[t._v("We still have to configure our Functions App, to be able to listen to blob changes in the Storage Account (BlobTrigger information). Therefore, go to the Portal and open the Functions App you previously created.\nOpen the Application settings under "),s("strong",[t._v("Configuration")]),t._v(" and add a new application setting ("),s("strong",[t._v("you can check your "),s("em",[t._v("local.settings.json")]),t._v(" file for the correct values!")]),t._v("):")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("<storageaccountname>_STORAGE")]),t._v(" "),s("td",[t._v("enter the connection string to the storage account (you can copy that from your "),s("em",[t._v("local.settings.json")]),t._v(" file)")])])])]),t._v(" "),s("hr"),t._v(" "),s("br"),t._v(" "),s("p",[s("strong",[t._v("Make sure to click on "),s("em",[t._v("Save")]),t._v(" afterwards.")])]),t._v(" "),s("p",[t._v("Afterwards, it should like that:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(506),alt:"azure_function_settings",title:"azure_function_settings"}})]),t._v(" "),s("p",[t._v("Now, test again (upload images) and check, if the Function App is running correctly in Azure ("),s("em",[t._v("it might be necessary to restart your function app")]),t._v(").")]),t._v(" "),s("h2",{attrs:{id:"house-keeping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#house-keeping"}},[t._v("#")]),t._v(" House Keeping")]),t._v(" "),s("p",[t._v("Remove the sample resource group.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ az group delete -n serverless-rg\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);