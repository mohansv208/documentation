(window.webpackJsonp=window.webpackJsonp||[]).push([[50,27,85],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(350),o=a.n(c),r=a(328),s=a(22),i=a(123),u=a.n(i),m=a(384),d=a.n(m);t.default=function(){const e=Object(s.default)(),{siteConfig:t={}}=e;return l.a.createElement(r.a,{title:`${t.title} Videos`,description:"A collection of Benthos videos"},l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:o()("col col--6 col--offset-3")},l.a.createElement("h1",{className:u.a.videosTitle},"Benthos Videos"),l.a.createElement("p",null,"All videos are rated U for Underwhelming. If you'd rather access these videos directly from YouTube you can find them on ",l.a.createElement("a",{href:"https://www.youtube.com/channel/UCjIYEhBrw3GQwpRWe1asufg"},"the Jeffail channel"),"."))))),l.a.createElement("main",null,l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--8 col--offset-2"},l.a.createElement("h2",null,"Tutorials"),l.a.createElement("p",null,"This playlist contains tutorial videos covering various aspects of Benthos use.")),l.a.createElement(d.a,{className:o()("col col--8 col--offset-2"),url:"https://www.youtube-nocookie.com/embed/videoseries?list=PL9hWaP-BQh2rvNuM29bTLlL0hYk6cqyT5",controls:"true"})))))}},326:function(e,t,a){"use strict";var n=a(3),l=a(0),c=a.n(l),o=a(24),r=a(22),s=a(321),i=a(323),u=a(319),m=a(23),d=a(327),h=a(409),b=a(410),f=a(335);let p=null;function v({hit:e,children:t}){return c.a.createElement(u.a,{to:e.url},t)}function E({state:e,onClose:t}){const{generateSearchPageLink:a}=Object(d.a)();return c.a.createElement(u.a,{to:a(e.query),onClick:t},"See all ",e.context.nbHits," results")}function O({contextualSearch:e,...t}){var u,d;const{siteMetadata:O}=Object(r.default)(),j=Object(f.a)(),w=null!==(u=null===(d=t.searchParameters)||void 0===d?void 0:d.facetFilters)&&void 0!==u?u:[],g=e?[...j,...w]:w,C={...t.searchParameters,facetFilters:g},{withBaseUrl:y}=Object(i.b)(),k=Object(s.useHistory)(),B=Object(l.useRef)(null),[N,P]=Object(l.useState)(!1),[S,I]=Object(l.useState)(null),A=Object(l.useCallback)((()=>p?Promise.resolve():Promise.all([a.e(239).then(a.bind(null,334)),Promise.all([a.e(0),a.e(240)]).then(a.bind(null,333)),a.e(0).then(a.t.bind(null,56,7))]).then((([{DocSearchModal:e}])=>{p=e}))),[]),T=Object(l.useCallback)((()=>{A().then((()=>{P(!0)}))}),[A,P]),x=Object(l.useCallback)((()=>{P(!1)}),[P]),F=Object(l.useCallback)((e=>{A().then((()=>{P(!0),I(e.key)}))}),[A,P,I]),M=Object(l.useRef)({navigate({itemUrl:e}){k.push(e)}}).current,R=Object(l.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:y(`${t.pathname}${t.hash}`)}})))).current,U=Object(l.useMemo)((()=>e=>c.a.createElement(E,Object(n.a)({},e,{onClose:x}))),[x]),Y=Object(l.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",O.docusaurusVersion),e)),[O.docusaurusVersion]);return Object(h.a)({isOpen:N,onOpen:T,onClose:x,onInput:F,searchButtonRef:B}),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null,c.a.createElement("link",{rel:"preconnect",href:`https://${t.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),c.a.createElement("div",{className:t.displayAsInputBox?"search-input":""},c.a.createElement(b.a,{onTouchStart:A,onFocus:A,onMouseOver:A,onClick:T,ref:B})),N&&Object(o.createPortal)(c.a.createElement(p,Object(n.a)({onClose:x,initialScrollY:window.scrollY,initialQuery:S,navigator:M,transformItems:R,hitComponent:v,resultsFooterComponent:U,transformSearchClient:Y},t,{searchParameters:C})),document.body))}t.a=function({displayAsInputBox:e=!1}){const{siteConfig:t}=Object(r.default)();return c.a.createElement(O,Object(n.a)({},t.themeConfig.algolia,{displayAsInputBox:e}))}}}]);