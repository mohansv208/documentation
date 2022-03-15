(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{245:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(329)),i=["components"],p={title:"Azure AD",sidebar_label:"Azure AD"},c={unversionedId:"platform_concepts/appConfiguration/azure-ad",id:"platform_concepts/appConfiguration/azure-ad",isDocsHomePage:!1,title:"Azure AD",description:"Introduction",source:"@site/docs/platform_concepts/appConfiguration/azure-ad.md",slug:"/platform_concepts/appConfiguration/azure-ad",permalink:"/docs/platform_concepts/appConfiguration/azure-ad",version:"current",sidebar_label:"Azure AD",sidebar:"platform_concepts",previous:{title:"Email channel configuration",permalink:"/docs/platform_concepts/channelConfiguration/email-outbound"},next:{title:"Freshdesk / Freshchat",permalink:"/docs/platform_concepts/appConfiguration/freshdesk"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"App Registration on AAD",id:"app-registration-on-aad",children:[]},{value:"Steps to configure App in Azure AD:",id:"steps-to-configure-app-in-azure-ad",children:[]},{value:"Steps to configure registered app in YM bot:",id:"steps-to-configure-registered-app-in-ym-bot",children:[]},{value:"References",id:"references",children:[]}],l={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Azure AD enables features like SSO and for personalizing the app experiences using existing organization data through APIs. For IT admins, it allows complete control over access to applications and resources utilizing security controls like MFA and conditional access."),Object(o.b)("p",null,"Simplify single sign-on. Azure AD supports more than 2,800 pre-integrated software as a service (SaaS) applications."),Object(o.b)("p",null,"Yellow Messenger comes pre-built with the ADFS (Active Directory Federation Services) integration and generic OAuth implementation."),Object(o.b)("p",null,"If ADFS is enabled for authentication, the bot will redirect the user to the AD (Active Directory) login page, wherein the user will need to provide their credentials and once AD authenticates the user, a callback is triggered by ADFS to YM indicating the success or failure of the authentication. When the authentication is successful, ADFS provides the authentication token along with a refresh token and time to live for the token."),Object(o.b)("h2",{id:"app-registration-on-aad"},"App Registration on AAD"),Object(o.b)("p",null,"For connecting Azure AD with YM bot, following details need to be obtained using AD App registration:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Client ID / Application ID"),Object(o.b)("li",{parentName:"ol"},"Tenant ID"),Object(o.b)("li",{parentName:"ol"},"Client Secret")),Object(o.b)("h2",{id:"steps-to-configure-app-in-azure-ad"},"Steps to configure App in Azure AD:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 1:")," Go to ",Object(o.b)("a",{parentName:"p",href:"https://portal.azure.com/"},"portal.azure.com")," > Active Directory > App Registrations."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_DFCB7E05F047CA7FA3CB9A713F6B533B7C793BE35DB3541E48AEDA22175EEBBB_1613053809080_image.png",alt:null})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 2:")," Register a new app for the chatbot (if not already registered)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 3:")," Copy and Save the Application/Client ID and tenant ID from overview section."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/TG1sKk4JqfF-GB_PP5cjIiC9q9AGTRE5ml06XPtLPC_r3aPwrYkM-gcoRGLl7ZUCN2_P5AD_YRcduzYnKnfbE2B4QLKtZ13f22tFjmBktPWPd9pS9CPoA2NXjKbFyd1AIbRplOr6",alt:null})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 4:")," Go to Certificates & Secrets > New client secret > Fill the description & select expires to Never, After clicking on Add button a Client Secret will be generated, save the value of the Client Secret."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 5:")," Goto Authentication > Add a platform > Web > Add the redirect url > Save.\nRedirect-Url: ",Object(o.b)("a",{parentName:"p",href:"https://app.yellowmessenger.com/integrations/azureauth/"},"https://app.yellowmessenger.com/integrations/azureauth/")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 6:")," Add / Remove permission and Grant Admin consent for the App.\nGoto API Permissions > Add the required permissions."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/z37T-8_2hO-v88FOY15bYZs3ZhNy7HK2hX3mR_uKF6Qh1L77cnBuHBc2IPXZX_Qm-glHTF5mBPkQnWNVa2eo3t6MmkDGhQWrpg-jDZdVWr3So_JH7QKeS9milnNcDW7YWTDj1dhP",alt:null})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Common permission:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Scope"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"openid, email, profile, User.Read"),Object(o.b)("td",{parentName:"tr",align:null},"Used to retrieve login details & their profile using Graph Api")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"offline_access"),Object(o.b)("td",{parentName:"tr",align:null},"Required to obtain refresh token")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"User.Read.All"),Object(o.b)("td",{parentName:"tr",align:null},"Read profile of all the user in the tenant.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Calendars.ReadWrite"),Object(o.b)("td",{parentName:"tr",align:null},"Edit User\u2019s calendar / meetings")))),Object(o.b)("p",null,"Graph Permission: ",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/permissions-reference"},"https://docs.microsoft.com/en-us/graph/permissions-reference")),Object(o.b)("h2",{id:"steps-to-configure-registered-app-in-ym-bot"},"Steps to configure registered app in YM bot:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to the YM bot > Configuration > Integrations > Azure Active Directory"),Object(o.b)("li",{parentName:"ol"},"Enter the obtained Tenant ID, Client ID, Client Secret"),Object(o.b)("li",{parentName:"ol"},"Enter the API version to v2.0"),Object(o.b)("li",{parentName:"ol"},"Enter the required scope > Save")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_DFCB7E05F047CA7FA3CB9A713F6B533B7C793BE35DB3541E48AEDA22175EEBBB_1613055445398_image.png",alt:null})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Obtain Azure AD")," ",Object(o.b)("strong",{parentName:"p"},"Login url:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'let consent = "&prompt=login"  //prompt=login allow user to choose a logging account\n\n{\n   "title": "Login",\n   "url": app.azure.auth() + consent                     \n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'app.log(app.data)\n{\n   "event": {\n       "code": "azure-auth-success",\n       "data": {\n           "token_type": "Bearer",\n           "scope": "Calendars.ReadWrite email openid profile User.Read",\n           "expires_in": 3599,\n           "ext_expires_in": 3599,\n           "access_token": "eyJ0eXXXXXXXXXXXXXXXXX",\n           "refresh_token": "aiJ0eXXXXXXXXXXXXXXXX"\n       }\n   }\n }\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Access Token")," can be used to get access to resources of allowed applications.\nExpire time : 1 hour."),Object(o.b)("p",null,"Azure allows an expired access-token to be refreshed using the ",Object(o.b)("strong",{parentName:"p"},"Refresh Token")," for a maximum period of time of 90 days."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Retrieve user profile using AD refresh token & Graph Api")),Object(o.b)("p",null,"Request"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"curl --location --request GET 'https://graph.microsoft.com/v1.0/me' \\\n--header 'Authorization: Bearer {accessToken}' \\\n")),Object(o.b)("p",null,"Response"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users/$entity",\n    "businessPhones": [],\n    "displayName": "Shubhi Saxena",\n    "givenName": "Shubhi",\n    "jobTitle": null,\n    "mail": "shubhi@bitonictexxxxxxx.onmicrosoft.com",\n    "mobilePhone": null,\n    "surname": "Saxena",\n    "userPrincipalName": "shubhi@bitonictexxxxxxx.onmicrosoft.com",\n    "id": "e4a5dbe5-4750-41e7-8axxxxxxxxx"\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Other useful Graph APIs:")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/user-list-events?view=graph-rest-1.0&tabs=http"},"Get events of user")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0&tabs=http"},"Send email on behalf of user")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/planneruser-list-tasks?view=graph-rest-1.0&tabs=http"},"Load tasks of user")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/api/resources/passwordprofile?view=graph-rest-1.0"},"Update password"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Graph APIs:"),"\n",Object(o.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-US/graph/api/overview?view=graph-rest-1.0"},"https://docs.microsoft.com/en-US/graph/api/overview?view=graph-rest-1.0")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Graph Explorer:")," ",Object(o.b)("a",{parentName:"p",href:"https://developer.microsoft.com/en-us/graph/graph-explorer"},"https://developer.microsoft.com/en-us/graph/graph-explorer")),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/overview/whats-new-active-directory-federation-services-windows-server"},"Azure ADFS")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-flow-tab"},"Active Directory authentication")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-US/graph/api/overview?view=graph-rest-1.0"},"Graph APIs")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"},"App Registration"))))}b.isMDXComponent=!0},329:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(d,p(p({ref:t},s),{},{components:r})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);