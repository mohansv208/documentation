(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(288)),r=["components"],l={title:"Android Chatbot SDK",sidebar_label:"Android Chatbot SDK"},c={unversionedId:"platform_concepts/channelConfiguration/android",id:"platform_concepts/channelConfiguration/android",isDocsHomePage:!1,title:"Android Chatbot SDK",description:"Installation",source:"@site/docs/platform_concepts/channelConfiguration/android.md",slug:"/platform_concepts/channelConfiguration/android",permalink:"/docs/platform_concepts/channelConfiguration/android",version:"current",sidebar_label:"Android Chatbot SDK",sidebar:"platform_concepts",previous:{title:"Web Client",permalink:"/docs/platform_concepts/channelConfiguration/web"},next:{title:"iOS Chatbot SDK",permalink:"/docs/platform_concepts/channelConfiguration/ios"}},s=[{value:"Installation",id:"installation",children:[{value:"Gradle",id:"gradle",children:[]},{value:"File provider",id:"file-provider",children:[]}]},{value:"Basic Usage",id:"basic-usage",children:[]},{value:"YMConfig",id:"ymconfig",children:[{value:"Initialize YMConfig",id:"initialize-ymconfig",children:[]},{value:"YM AuthenticationToken",id:"ym-authenticationtoken",children:[]},{value:"Push Notifications",id:"push-notifications",children:[]},{value:"Payload",id:"payload",children:[]},{value:"On Premise deployments",id:"on-premise-deployments",children:[]},{value:"V2 bot",id:"v2-bot",children:[]},{value:"Speech to Text",id:"speech-to-text",children:[]},{value:"Colors",id:"colors",children:[]}]},{value:"Starting the bot",id:"starting-the-bot",children:[]},{value:"Bot Events",id:"bot-events",children:[]},{value:"Close bot",id:"close-bot",children:[]},{value:"Unlink Device Token",id:"unlink-device-token",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Important",id:"important",children:[]},{value:"Demo App",id:"demo-app",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"gradle"},"Gradle"),Object(i.b)("p",null,"To integrate YMChat into your Android project using gradle, specify the following configurations in App level ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle")," file"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-gradle"},'repositories {\n    jcenter()\n    // Add these two lines \n    maven { url "https://jitpack.io" }\n    maven { url "https://oss.sonatype.org/content/repositories/snapshots/" }\n}\n\n...\n...\n...\n\ndependencies {\n    ...\n    ...\n       implementation \'com.github.yellowmessenger:YMChatbot-Android:1.6.+\n}\n')),Object(i.b)("p",null,"Note: By puting + at the end, you need not to worry about updating and releaseing your app for every patch we are making in SDK.\nStill, if you want to use exact and latest version please visit the github repository mentioned\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/yellowmessenger/YMChatbot-Android/releases"},"https://github.com/yellowmessenger/YMChatbot-Android/releases")),Object(i.b)("h3",{id:"file-provider"},"File provider"),Object(i.b)("p",null,"Note: Only for version v1.4.0 & above"),Object(i.b)("p",null,"Add following key in your ",Object(i.b)("inlineCode",{parentName:"p"},"strings.xml")," file, this will override default file provider used by SDK."),Object(i.b)("p",null,'Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"\nExample - applicationId : "com.abc.xyz" then  application_id_for_provider = com.abc.xyz.fileprovider'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<string name="application_id_for_provider">your.application.id.fileprovider</string>\n')),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"Import the YMChat library in your Activity."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"import com.yellowmessenger.ymchat.YMChat;\nimport com.yellowmessenger.ymchat.YMConfig;\n")),Object(i.b)("p",null,"After the library is imported the basic bot can be presented with few lines as below "),Object(i.b)("p",null,"Example ",Object(i.b)("inlineCode",{parentName:"p"},"onCreate")," method of the Activity:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'\n@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    // Dummy bot id. (Purrs a lot)\n    String botID = "x1587041004122";\n    \n    //Get YMChat instance\n    YMChat ymChat = YMChat.getInstance();\n    ymChat.config = new YMConfig(botId);\n    setContentView(R.layout.activity_main);\n    FloatingActionButton fab = findViewById(R.id.fab);\n    fab.setOnClickListener(view -> {\n        //Starting the bot activity\n        try {\n            ymChat.startChatbot(this);\n          } catch (Exception e) {\n           //Catch and handle the exception\n            e.printStackTrace();\n          }\n    });\n}\n')),Object(i.b)("h2",{id:"ymconfig"},"YMConfig"),Object(i.b)("p",null,"YMConfig can be used to set the bot id and other bot related settings. It is recommended to set all appropriate config ",Object(i.b)("strong",{parentName:"p"},"before")," starting the bot"),Object(i.b)("h3",{id:"initialize-ymconfig"},"Initialize YMConfig"),Object(i.b)("p",null,"YMConfig requires ",Object(i.b)("inlineCode",{parentName:"p"},"botID")," to initialize. All other settings are optional."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'ymChat.config = new YMConfig("<BOT-ID>");\n')),Object(i.b)("h3",{id:"ym-authenticationtoken"},"YM AuthenticationToken"),Object(i.b)("p",null,"ymAuthenticationToken is used to associate an identity of the user with the chat bot."),Object(i.b)("p",null,"Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since ",Object(i.b)("strong",{parentName:"p"},"inception"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'ymChat.config.ymAuthenticationToken = "your-token"\n')),Object(i.b)("p",null,"Note: History will load only when ",Object(i.b)("inlineCode",{parentName:"p"},"Show history")," flag is enabled in the channel settings"),Object(i.b)("h3",{id:"push-notifications"},"Push Notifications"),Object(i.b)("p",null,"YMChat supports firebase notifications. Assign your ",Object(i.b)("inlineCode",{parentName:"p"},"FCM token")," to deviceToken"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'ymChat.config.deviceToken = "your-firebase-device-token"\n')),Object(i.b)("p",null,"Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info ",Object(i.b)("a",{parentName:"p",href:"https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key"},"here")),Object(i.b)("h3",{id:"payload"},"Payload"),Object(i.b)("p",null,"Additional information can be passed in the form of key value pair from app to bot using payload."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'HashMap<String, Object> payloadData = new HashMap<>();\n//Setting Payload Data\npayloadData.put("some-key", "some-value");\nymChat.config.payload = payloadData;\n')),Object(i.b)("p",null,"Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown"),Object(i.b)("p",null,"For passing data from bot to app refer bot ",Object(i.b)("a",{parentName:"p",href:"#bot-events"},"Bot Events")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"payload security")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Payload is securely passed in HTTPS post request to protect the information passed in it"))),Object(i.b)("h3",{id:"on-premise-deployments"},"On Premise deployments"),Object(i.b)("p",null,"Your on-prem deployment URL can be set to ",Object(i.b)("inlineCode",{parentName:"p"},"customBaseUrl")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'ymChat.config.customBaseUrl = "https://yourcustomurl.com";\n')),Object(i.b)("h3",{id:"v2-bot"},"V2 bot"),Object(i.b)("p",null,"You can enable V2 bot by setting the version in config. Default value is 1"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"ymChat.config.version = 2;\n")),Object(i.b)("h3",{id:"speech-to-text"},"Speech to Text"),Object(i.b)("p",null,"Speech to text can be enabled by setting the enableSpeech flag present in config. Default value is ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"ymChat.config.enableSpeech = true\n")),Object(i.b)("h3",{id:"colors"},"Colors"),Object(i.b)("h4",{id:"status-bar"},"Status bar"),Object(i.b)("p",null,"Status bar color can be set on ",Object(i.b)("inlineCode",{parentName:"p"},"statusBarColor")," color variable"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"ymChat.config.statusBarColor = R.color.red\n")),Object(i.b)("h4",{id:"close-button"},"Close button"),Object(i.b)("p",null,"Close button color can be set on ",Object(i.b)("inlineCode",{parentName:"p"},"closeButtonColor")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"ymChat.config.closeButtonColor = R.color.white\n")),Object(i.b)("h2",{id:"starting-the-bot"},"Starting the bot"),Object(i.b)("p",null,"Once the config is set, chat bot can be presented by calling ",Object(i.b)("inlineCode",{parentName:"p"},"startChatbot()")," and passing your Activity context as an argument"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"ymChat.startChatbot(this);\n")),Object(i.b)("h2",{id:"bot-events"},"Bot Events"),Object(i.b)("p",null,"Bot events are used to pass information from bot to app. Events from bot can be handled using event Listeners.  Simply define the ",Object(i.b)("inlineCode",{parentName:"p"},"onSuccess")," method of ",Object(i.b)("inlineCode",{parentName:"p"},"onEventFromBot")," listener."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'ymChat.onEventFromBot(botEvent -> {\n    switch (botEvent.getCode()) {\n    case "event-name": break;\n    }\n});\n')),Object(i.b)("h4",{id:"bot-close-event"},"Bot close event"),Object(i.b)("p",null,"Bot close event is separately sent and it can be handled by listening to onBotClose event as mentioned below. To programatically close bot use ",Object(i.b)("inlineCode",{parentName:"p"},"ymChat.closeBot()")," method"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'ymChat.onBotClose(() -> {\n  Log.d("Example App", "Bot Was closed");\n });\n')),Object(i.b)("h2",{id:"close-bot"},"Close bot"),Object(i.b)("p",null,"Bot can be programatically closed using ",Object(i.b)("inlineCode",{parentName:"p"},"closeBot()")," function"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"ymChat.closeBot();\n")),Object(i.b)("h2",{id:"unlink-device-token"},"Unlink Device Token"),Object(i.b)("p",null,"If you want to stop receiving push notifications you can unlink the device token.\nDevice token typically is unlinked when the user logs out of the app."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'try {\n    YMChat ymChat = YMChat.getInstance();\n    ymChat.unlinkDeviceToken(botId, apiKey, deviceToken, new YellowCallback() {\n        @Override\n        public void success() {\n            Toast.makeText(MainActivity.this, "Token unlinked", Toast.LENGTH_SHORT).show();\n        }\n\n        @Override\n        public void failure(String message) {\n            Toast.makeText(MainActivity.this, message, Toast.LENGTH_SHORT).show();\n        }\n    });\n} catch (Exception e) { \n    //Catch and handle the exception\n    e.printStackTrace();\n}\n')),Object(i.b)("p",null,"Note: API key can be found in account settings under Access keys section after you login."),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"Following dependencies are used in chat bot SDK"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"    implementation 'androidx.appcompat:appcompat:1.3.0'\n    implementation 'androidx.legacy:legacy-support-v4:1.0.0'\n    implementation 'com.google.android.material:material:1.3.0'\n    implementation 'com.squareup.okhttp3:okhttp:4.7.2'\n    implementation 'com.google.code.gson:gson:2.8.6'\n    implementation 'androidx.multidex:multidex:2.0.1'\n\n    testImplementation 'junit:junit:4.13.2'\n    androidTestImplementation 'androidx.test.ext:junit:1.1.2'\n    androidTestImplementation 'androidx.test.espresso:espresso-core:3.3.0'\n")),Object(i.b)("h2",{id:"permissions"},"Permissions"),Object(i.b)("p",null,"We are declaring and asking for following permission in our manifest file"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n    <uses-permission android:name="android.permission.RECORD_AUDIO" />\n\n')),Object(i.b)("p",null,"All permissions will be asked at run time except INTERNET.\nFor attachment (picking  file/images from phone storage)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n')),Object(i.b)("p",null,"For voice input"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'    <uses-permission android:name="android.permission.RECORD_AUDIO" />\n')),Object(i.b)("h2",{id:"important"},"Important"),Object(i.b)("p",null,"If facing problem in release build, add the following configuration in the app's proguard-rules.pro file."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"-keep public class com.yellowmessenger.ymchat.** {\n   *;\n}\n")),Object(i.b)("h2",{id:"demo-app"},"Demo App"),Object(i.b)("p",null,"A demo has been created to better understand the integration of SDK in Android app\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/yellowmessenger/YmChatBot-Android-DemoApp"},"https://github.com/yellowmessenger/YmChatBot-Android-DemoApp")))}b.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||i;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);