(window.webpackJsonp=window.webpackJsonp||[]).push([[238,27,85],{326:function(e,t,a){"use strict";var n=a(3),l=a(0),r=a.n(l),o=a(24),c=a(22),s=a(321),u=a(323),i=a(319),m=a(23),h=a(327),d=a(409),b=a(410),f=a(335);let p=null;function O({hit:e,children:t}){return r.a.createElement(i.a,{to:e.url},t)}function j({state:e,onClose:t}){const{generateSearchPageLink:a}=Object(h.a)();return r.a.createElement(i.a,{to:a(e.query),onClick:t},"See all ",e.context.nbHits," results")}function E({contextualSearch:e,...t}){var i,h;const{siteMetadata:E}=Object(c.default)(),g=Object(f.a)(),k=null!==(i=null===(h=t.searchParameters)||void 0===h?void 0:h.facetFilters)&&void 0!==i?i:[],C=e?[...g,...k]:k,v={...t.searchParameters,facetFilters:C},{withBaseUrl:w}=Object(u.b)(),y=Object(s.useHistory)(),P=Object(l.useRef)(null),[S,F]=Object(l.useState)(!1),[N,x]=Object(l.useState)(null),I=Object(l.useCallback)((()=>p?Promise.resolve():Promise.all([a.e(239).then(a.bind(null,334)),Promise.all([a.e(0),a.e(240)]).then(a.bind(null,333)),a.e(0).then(a.t.bind(null,56,7))]).then((([{DocSearchModal:e}])=>{p=e}))),[]),A=Object(l.useCallback)((()=>{I().then((()=>{F(!0)}))}),[I,F]),B=Object(l.useCallback)((()=>{F(!1)}),[F]),R=Object(l.useCallback)((e=>{I().then((()=>{F(!0),x(e.key)}))}),[I,F,x]),M=Object(l.useRef)({navigate({itemUrl:e}){y.push(e)}}).current,U=Object(l.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:w(`${t.pathname}${t.hash}`)}})))).current,$=Object(l.useMemo)((()=>e=>r.a.createElement(j,Object(n.a)({},e,{onClose:B}))),[B]),H=Object(l.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",E.docusaurusVersion),e)),[E.docusaurusVersion]);return Object(d.a)({isOpen:S,onOpen:A,onClose:B,onInput:R,searchButtonRef:P}),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("link",{rel:"preconnect",href:`https://${t.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.a.createElement("div",{className:t.displayAsInputBox?"search-input":""},r.a.createElement(b.a,{onTouchStart:I,onFocus:I,onMouseOver:I,onClick:A,ref:P})),S&&Object(o.createPortal)(r.a.createElement(p,Object(n.a)({onClose:B,initialScrollY:window.scrollY,initialQuery:N,navigator:M,transformItems:U,hitComponent:O,resultsFooterComponent:$,transformSearchClient:H},t,{searchParameters:v})),document.body))}t.a=function({displayAsInputBox:e=!1}){const{siteConfig:t}=Object(c.default)();return r.a.createElement(E,Object(n.a)({},t.themeConfig.algolia,{displayAsInputBox:e}))}},356:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(328);t.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);