(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(316)),i=["components"],l={title:"Engage Updates",sidebar_label:"Engage",featured:!0},c={unversionedId:"updates/oct_21/engage",id:"updates/oct_21/engage",isDocsHomePage:!1,title:"Engage Updates",description:"1. Bulk Notifications API Available",source:"@site/docs/updates/oct_21/engage.md",slug:"/updates/oct_21/engage",permalink:"/docs/updates/oct_21/engage",version:"current",sidebar_label:"Engage",sidebar:"updates",previous:{title:"Inbox Updates",permalink:"/docs/updates/sep_21/inbox"},next:{title:"Inbox Updates",permalink:"/docs/updates/oct_21/inbox"}},u=[{value:"1. Bulk Notifications API Available",id:"1-bulk-notifications-api-available",children:[]},{value:"2. Wildcards can be used in URLs to trigger Inbound notifications",id:"2-wildcards-can-be-used-in-urls-to-trigger-inbound-notifications",children:[]},{value:"3. Inbound Campaign performance metrics",id:"3-inbound-campaign-performance-metrics",children:[]},{value:"4. Audience CSV Upload Logs will be sent over email",id:"4-audience-csv-upload-logs-will-be-sent-over-email",children:[]},{value:"5. Enablement of Truncate Button",id:"5-enablement-of-truncate-button",children:[]},{value:"6. Separation of Inbound &amp; Outbound Engage",id:"6-separation-of-inbound--outbound-engage",children:[]}],s={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"1-bulk-notifications-api-available"},"1. Bulk Notifications API Available"),Object(o.b)("p",null," We can now support file(.csv) based API for sending bulk Notifications on various channels (upto 10000 notifs per API call).\nThe notifications will be run in batches. Delivery updates for individual notification will be available as postback url and reports and status of Batches can be seen in yellow.ai dashboard(Data Explorer - with msgID obtained)"),Object(o.b)("h3",{id:"2-wildcards-can-be-used-in-urls-to-trigger-inbound-notifications"},"2. Wildcards can be used in URLs to trigger Inbound notifications"),Object(o.b)("p",null,"Inbound URL Trigger should be able to handle URL wildcard:\n\u2022 URLs like yellow.ai/search/",Object(o.b)("em",{parentName:"p"}," (will work for anything after yellow.ai/search/\n\u2022 URLs like yellow.ai/"),"/blog will also work\n",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/xetg1HD.png",alt:null})),Object(o.b)("h3",{id:"3-inbound-campaign-performance-metrics"},"3. Inbound Campaign performance metrics"),Object(o.b)("p",null,"You can now monitor how well your campaigns are performing using the campaign dashboard.\nMetrics enabled:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Overlay Widget Impressions \u2192 This is the no. of times the Widget is loaded. (n/a for \u201cChat Auto Popup Widget\u201c)"),Object(o.b)("li",{parentName:"ul"},"Overlay Widget Conversions \u2192 This is % of times the button is clicked. (n/a for \u201cChat Auto Popup Widget\u201c)"),Object(o.b)("li",{parentName:"ul"},"Chat Widget Impressions \u2192 This is the no. of times the Chat Auto Popup is loaded."),Object(o.b)("li",{parentName:"ul"},"Chat Widget Engagement \u2192 This is the % of times the Chat Auto Popup is clicked.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/f22UnF8.png",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Read more about managing campaigns through overview screen ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/gettingStarted/campaignsOverviewScreen/"},Object(o.b)("strong",{parentName:"a"},"here")))),Object(o.b)("h3",{id:"4-audience-csv-upload-logs-will-be-sent-over-email"},"4. Audience CSV Upload Logs will be sent over email"),Object(o.b)("p",null,"When a CSV is uploaded in the audience/users table, the user uploading the CSV will receive an email with Audience CSV Upload Logs. These logs contain only those user records for which the upload failed along with the reason for failure.\nNote: Records that are valid are uploaded successfully.\n",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/oUXxhs8.png",alt:null})),Object(o.b)("h3",{id:"5-enablement-of-truncate-button"},"5. Enablement of Truncate Button"),Object(o.b)("p",null," There is a truncate button now that deletes all user records in the table.\n",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/YHK6JuW.png",alt:null})),Object(o.b)("h3",{id:"6-separation-of-inbound--outbound-engage"},"6. Separation of Inbound & Outbound Engage"),Object(o.b)("p",null,"Now there are now two separate tabs for Inbound and Outbound Engage and Basic Info and Widget/Channel Selection Screens have been merged\n",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/TJfaNnl.png",alt:null})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/mu2aPjA.png",alt:null})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/rjDNEDb.png",alt:null})))}p.isMDXComponent=!0},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,g=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(g,l(l({ref:t},u),{},{components:n})):r.a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);