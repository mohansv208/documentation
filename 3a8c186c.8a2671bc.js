(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(317)),i=["components"],l={title:"Flutter Chatbot SDK",sidebar_label:"Flutter Chatbot SDK"},c={unversionedId:"platform_concepts/channelConfiguration/flutter",id:"platform_concepts/channelConfiguration/flutter",isDocsHomePage:!1,title:"Flutter Chatbot SDK",description:"Installation",source:"@site/docs/platform_concepts/channelConfiguration/flutter.md",slug:"/platform_concepts/channelConfiguration/flutter",permalink:"/docs/platform_concepts/channelConfiguration/flutter",version:"current",sidebar_label:"Flutter Chatbot SDK",sidebar:"platform_concepts",previous:{title:"react-native Chatbot SDK",permalink:"/docs/platform_concepts/channelConfiguration/react-native"},next:{title:"Chatbot SDK for cordova",permalink:"/docs/platform_concepts/channelConfiguration/cordova"}},s=[{value:"Installation",id:"installation",children:[{value:"Pub.dev",id:"pubdev",children:[]},{value:"Android",id:"android",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Set botId",id:"set-botid",children:[]},{value:"YM AuthenticationToken",id:"ym-authenticationtoken",children:[]},{value:"Push Notifications",id:"push-notifications",children:[]},{value:"Payload",id:"payload",children:[]},{value:"On-Prem Deployments",id:"on-prem-deployments",children:[]},{value:"Custom loader",id:"custom-loader",children:[]},{value:"V2 bot",id:"v2-bot",children:[]},{value:"Speech to Text",id:"speech-to-text",children:[]}]},{value:"Present chatbot",id:"present-chatbot",children:[]},{value:"Bot Events",id:"bot-events",children:[]},{value:"Close bot",id:"close-bot",children:[]},{value:"Unlink Device Token",id:"unlink-device-token",children:[]},{value:"Demo App",id:"demo-app",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("h3",{id:"pubdev"},"Pub.dev"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ flutter pub add ymchat_flutter\n")),Object(r.b)("p",null,"or manually add dependency to the pubspec.yaml"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  ymchat_flutter: <version>\n")),Object(r.b)("h3",{id:"android"},"Android"),Object(r.b)("h4",{id:"file-provider"},"File provider"),Object(r.b)("p",null,"Add following key in your ",Object(r.b)("inlineCode",{parentName:"p"},"strings.xml")," file found at ",Object(r.b)("inlineCode",{parentName:"p"},"yourproject/platforms/android/app/src/main/res/values/strings.xml"),", this will override default file provider used by SDK."),Object(r.b)("p",null,'Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"\nExample - applicationId : "com.abc.xyz" then application_id_for_provider = com.abc.xyz.fileprovider'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<string name="application_id_for_provider">your.application.id.fileprovider</string>\n')),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"Import the YMChat library in your dart file."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"import 'package:ymchat_flutter/ymchat_flutter.dart';\n")),Object(r.b)("h3",{id:"set-botid"},"Set botId"),Object(r.b)("p",null,"This is the first and ",Object(r.b)("strong",{parentName:"p"},"compulsary")," step."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},'YmChat.setBotId("x1234567890");\n')),Object(r.b)("h3",{id:"ym-authenticationtoken"},"YM AuthenticationToken"),Object(r.b)("p",null,"ymAuthenticationToken is used to associate an identity of the user with the chat bot."),Object(r.b)("p",null,"Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since ",Object(r.b)("strong",{parentName:"p"},"inception"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},'YmChat.setAuthenticationToken("token");\n')),Object(r.b)("p",null,"Note: History will load only when ",Object(r.b)("inlineCode",{parentName:"p"},"Show history")," flag is enabled in the channel settings"),Object(r.b)("h3",{id:"push-notifications"},"Push Notifications"),Object(r.b)("p",null,"ymchat_flutter supports firebase notifications. Pass your ",Object(r.b)("inlineCode",{parentName:"p"},"FCM token")," in setDeviceToken method."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},'YmChat.setDeviceToken("token");\n')),Object(r.b)("p",null,"Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info ",Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key"},"here")),Object(r.b)("h3",{id:"payload"},"Payload"),Object(r.b)("p",null,"Additional information can be passed in the form of key value pair from app to bot using payload."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},'YmChat.setPayload({ name: "Integration", type: "Flutter" });\n')),Object(r.b)("p",null,"Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown"),Object(r.b)("p",null,"For passing data from bot to app refer bot ",Object(r.b)("a",{parentName:"p",href:"#bot-events"},"Bot Events")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"payload security")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Payload is securely passed in HTTPS post request to protect the information passed in it"))),Object(r.b)("h3",{id:"on-prem-deployments"},"On-Prem Deployments"),Object(r.b)("p",null,"ymchat_flutter supports bots with on-prem deployments. For the bot to work, pass the on-prem URL to ",Object(r.b)("inlineCode",{parentName:"p"},"setCustomURL()")," method."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},'YmChat.setCustomURL("https://your-on-prem-url.com");\n')),Object(r.b)("h3",{id:"custom-loader"},"Custom loader"),Object(r.b)("p",null,"You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},'YMChat.setCustomLoaderUrl("https://example.com/your/custom/image.gif");\n')),Object(r.b)("h3",{id:"v2-bot"},"V2 bot"),Object(r.b)("p",null,"You can enable V2 bot by calling ",Object(r.b)("inlineCode",{parentName:"p"},"setVersion()")," method. Default value is 1"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"YmChat.setVersion(2);\n")),Object(r.b)("h3",{id:"speech-to-text"},"Speech to Text"),Object(r.b)("p",null,"Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"YmChat.setEnableSpeech(true);\n")),Object(r.b)("h4",{id:"ios"},"iOS"),Object(r.b)("p",null,"If you are supporting Speech recognition, add following snippet to Info.plist of the host app"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<key>NSMicrophoneUsageDescription</key>\n<string>Your microphone will be used to record your speech when you use the Voice feature.</string>\n<key>NSSpeechRecognitionUsageDescription</key>\n<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>\n")),Object(r.b)("p",null,"Info.plist is found at path"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"<YourProjectRootDir>/ios/Runner/info.plist\n")),Object(r.b)("h2",{id:"present-chatbot"},"Present chatbot"),Object(r.b)("p",null,"Chat bot can be presented by calling ",Object(r.b)("inlineCode",{parentName:"p"},"startChatbot()"),". This method will display full screen chat view"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"YmChat.startChatbot();\n")),Object(r.b)("h2",{id:"bot-events"},"Bot Events"),Object(r.b)("p",null,"Bot events are used to pass information from bot to app. For passing events from app to bot refer ",Object(r.b)("a",{parentName:"p",href:"#payload"},"Payload")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"  EventChannel _ymEventChannel = const EventChannel(\"YMChatEvent\");\n    _ymEventChannel.receiveBroadcastStream().listen((event) {\n      Map ymEvent = event;\n      log(\"${ymEvent['code']} : ${ymEvent['data']}\");\n    });\n")),Object(r.b)("h4",{id:"bot-close-event"},"Bot close event"),Object(r.b)("p",null,"Bot close event is separetly sent and it can be handled in following way."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},'  EventChannel _ymCloseEventChannel = const EventChannel("YMBotCloseEvent");\n    _ymCloseEventChannel.receiveBroadcastStream().listen((event) {\n      bool ymCloseEvent = event;\n      log(event.toString());\n    });\n')),Object(r.b)("h2",{id:"close-bot"},"Close bot"),Object(r.b)("p",null,"Bot can be programmatically closed using ",Object(r.b)("inlineCode",{parentName:"p"},"closeBot()")," function"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},"YmChat.closeBot();\n")),Object(r.b)("h2",{id:"unlink-device-token"},"Unlink Device Token"),Object(r.b)("p",null,"If you want to stop receiving push notifications you can unlink the device token.\nDevice token typically is unlinked when the user logs out of the app."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-dart"},'  YmChat.unLinkDeviceToken(\n    botId,\n    apiKey,\n    deviceToken,\n    () {\n      log("Device token unlinked");\n      },\n    (failureMessage) {\n      log(failureMessage);\n      });\n')),Object(r.b)("h2",{id:"demo-app"},"Demo App"),Object(r.b)("p",null,"A demo app can be used as a reference to better understand how this SDK can be integrated in the app\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/yellowmessenger/ymchat-flutter-demo"},"https://github.com/yellowmessenger/ymchat-flutter-demo")))}b.isMDXComponent=!0},317:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);