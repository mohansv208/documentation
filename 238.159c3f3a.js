(window.webpackJsonp=window.webpackJsonp||[]).push([[238,29,193],{324:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(24),u=n(22),s=n(320),i=n(321),m=n(318),f=n(23),b=n(325),h=n(408),d=n(409),O=n(330),p=["contextualSearch"],j=null;function v(e){var t=e.hit,n=e.children;return o.a.createElement(m.a,{to:t.url},n)}function g(e){var t=e.state,n=e.onClose,a=Object(b.a)().generateSearchPageLink;return o.a.createElement(m.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function E(e){var t,m,b=e.contextualSearch,E=Object(r.a)(e,p),k=Object(u.default)().siteMetadata,C=Object(O.a)(),w=null!==(t=null===(m=E.searchParameters)||void 0===m?void 0:m.facetFilters)&&void 0!==t?t:[],y=b?[].concat(C,w):w,P=Object.assign({},E.searchParameters,{facetFilters:y}),S=Object(i.b)().withBaseUrl,x=Object(s.useHistory)(),F=Object(c.useRef)(null),N=Object(c.useState)(!1),I=N[0],A=N[1],B=Object(c.useState)(null),R=B[0],M=B[1],U=Object(c.useCallback)((function(){return j?Promise.resolve():Promise.all([n.e(239).then(n.bind(null,329)),Promise.all([n.e(0),n.e(240)]).then(n.bind(null,328)),n.e(0).then(n.t.bind(null,56,7))]).then((function(e){var t=e[0].DocSearchModal;j=t}))}),[]),H=Object(c.useCallback)((function(){U().then((function(){A(!0)}))}),[U,A]),J=Object(c.useCallback)((function(){A(!1)}),[A]),L=Object(c.useCallback)((function(e){U().then((function(){A(!0),M(e.key)}))}),[U,A,M]),V=Object(c.useRef)({navigate:function(e){var t=e.itemUrl;x.push(t)}}).current,Y=Object(c.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:S(""+t.pathname+t.hash)})}))})).current,_=Object(c.useMemo)((function(){return function(e){return o.a.createElement(g,Object(a.a)({},e,{onClose:J}))}}),[J]),q=Object(c.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e}),[k.docusaurusVersion]);return Object(h.a)({isOpen:I,onOpen:H,onClose:J,onInput:L,searchButtonRef:F}),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null,o.a.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.a.createElement("div",{className:E.displayAsInputBox?"search-input":""},o.a.createElement(d.a,{onTouchStart:U,onFocus:U,onMouseOver:U,onClick:H,ref:F})),I&&Object(l.createPortal)(o.a.createElement(j,Object(a.a)({onClose:J,initialScrollY:window.scrollY,initialQuery:R,navigator:V,transformItems:Y,hitComponent:v,resultsFooterComponent:_,transformSearchClient:q},E,{searchParameters:P})),document.body))}t.a=function(e){var t=e.displayAsInputBox,n=void 0!==t&&t,r=Object(u.default)().siteConfig;return o.a.createElement(E,Object(a.a)({},r.themeConfig.algolia,{displayAsInputBox:n}))}},343:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(326);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);