(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(288)),c=["components"],s={title:"FAQ Bot",sidebar_label:"FAQ Bot"},i={unversionedId:"cookbooks/template-bots/faq",id:"cookbooks/template-bots/faq",isDocsHomePage:!1,title:"FAQ Bot",description:"This document will help you understand the FAQ Bot, a bot that helps you answer your customer\u2019s query in a more efficient way. Before you start understanding this bot, let\u2019s get aligned on the use case.",source:"@site/docs/cookbooks/template-bots/faq.md",slug:"/cookbooks/template-bots/faq",permalink:"/docs/cookbooks/template-bots/faq",version:"current",sidebar_label:"FAQ Bot",sidebar:"cookbooks",previous:{title:"Getting Started with Customer Support Bot",permalink:"/docs/cookbooks/template-bots/customer-support-bot"},next:{title:"Lead Generation Bot",permalink:"/docs/cookbooks/template-bots/lead-generation"}},l=[{value:"Exercise 1 : Create a Bot",id:"exercise-1--create-a-bot",children:[]},{value:"Exercise 2 : Understanding Basic Bot Structure",id:"exercise-2--understanding-basic-bot-structure",children:[]},{value:"Exercise 2 : Learn Bot Basics",id:"exercise-2--learn-bot-basics",children:[]},{value:"Exercise 3: Designing the welcome prompt",id:"exercise-3-designing-the-welcome-prompt",children:[]},{value:"Exercise 5: Designing the Journeys for FAQ categories",id:"exercise-5-designing-the-journeys-for-faq-categories",children:[]},{value:"Exercise 6: Creating Journey to Transfer the Chat to the Agent",id:"exercise-6-creating-journey-to-transfer-the-chat-to-the-agent",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document will help you understand the FAQ Bot, a bot that helps you answer your customer\u2019s query in a more efficient way. Before you start understanding this bot, let\u2019s get aligned on the use case."),Object(a.b)("p",null,"To build any bot is to decide the use case, which we have already done above. Diving the use cases into phases and starting with the phase 1 that we want to take live. "),Object(a.b)("p",null,"The easiest way of deciding the use cases or journeys is to look at the kind of queries your customers are asking right now and then grouping them into categories.\nFor example, In a banking industry, a customer might ask: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"How Can I get a car loan"),Object(a.b)("li",{parentName:"ul"},"Maximum limit for ATM withdrawal"),Object(a.b)("li",{parentName:"ul"},"I would like to raise an issue with PIN")),Object(a.b)("p",null,"So first thing first, we need to note such questions, group them into categories and create journeys for each category and sub - categories if needed."),Object(a.b)("h2",{id:"exercise-1--create-a-bot"},"Exercise 1 : Create a Bot"),Object(a.b)("h4",{id:"step-0-sign-up"},"Step 0: Sign Up"),Object(a.b)("p",null,"Sign up on ",Object(a.b)("a",{parentName:"p",href:"https://cloud.yellow.ai"},"https://cloud.yellow.ai")," and after email confirmation login again on the same link."),Object(a.b)("h4",{id:"step-1---create-a-bot"},"Step 1 - Create a Bot"),Object(a.b)("p",null,"Create a bot for yourself, every account gets a bot subscription for free with some limited features. Click here for reference - ",Object(a.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=DWdrstYFlG0"},"How to create a bot? ")),Object(a.b)("h2",{id:"exercise-2--understanding-basic-bot-structure"},"Exercise 2 : Understanding Basic Bot Structure"),Object(a.b)("p",null,"For building any bot it\u2019s important to understand the basic bot structure"),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/6BxmvyxiMXyG1633520010703.png",alt:null})),Object(a.b)("h2",{id:"exercise-2--learn-bot-basics"},"Exercise 2 : Learn Bot Basics"),Object(a.b)("h4",{id:"step-1-adding-welcome-message"},"Step 1: Adding Welcome Message"),Object(a.b)("p",null,"Default Message that is shown on the launch of the Bot.",Object(a.b)("br",{parentName:"p"}),"\n","To configure the same go to:",Object(a.b)("br",{parentName:"p"}),"\n","Studio \u2192 Home button \u2192 Welcome prompt",Object(a.b)("br",{parentName:"p"}),"\n","Or",Object(a.b)("br",{parentName:"p"}),"\n","Overview \u2192 Add Welcome Message \u2192 Welcome Prompt"),Object(a.b)("h4",{id:"step-2-creating-journey"},"Step 2: Creating Journey"),Object(a.b)("p",null,"Journey is the sub-conversational flow between the bot and the user. It starts with a trigger and the trigger can be anything like intent or entity or page url.\nNow once you add the intent, using the nodes and step design the whole flow of a Journey."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/EjzIgxlptLxF1633528880229.JPG",alt:null})),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Read more about journeys ",Object(a.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/journeys"},Object(a.b)("strong",{parentName:"a"},"here")))),Object(a.b)("h4",{id:"step-3--designing-the-flow"},"Step 3:  Designing the Flow:"),Object(a.b)("p",null,"Once you have added the Intent, design the Journeys using prompts and nodes.\nTo add prompts or nodes, click on the blue dot.\nOnce you click on the blue dot, you will have all the nodes and prompts that you can use to design.\n",Object(a.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/t3gz2Bghp2jC1633528418589.JPG",alt:null})),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Read more about prompts and nodes ",Object(a.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages"},Object(a.b)("strong",{parentName:"a"},"here")))),Object(a.b)("h4",{id:"step-4-test-your-bot"},"Step 4: Test your BOT"),Object(a.b)("p",null,"On successful completion of the design of the bot you can test your bot using Try Your Bot\n",Object(a.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/z5a0kYG4QCq21633528280175.JPG",alt:null})),Object(a.b)("h2",{id:"exercise-3-designing-the-welcome-prompt"},"Exercise 3: Designing the welcome prompt"),Object(a.b)("p",null,"For the welcome prompt let\u2019s create a journey and trigger it from the welcome prompt"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Step 1-")," Create a Journey "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Step 2 -"),"  Add a node to greet the customer, here to add a bit of personalization, we have checked if the customer is visiting for the first time then we are introducing the bot, else we just welcome them back."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Step 3 -")," Add Quick replies button to show the categories of FAQ"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Step 4 -")," Trigger the individual journeys created for each category\n",Object(a.b)("img",{parentName:"li",src:"https://cdn.yellowmessenger.com/rrIa3xuzfXH21634525077687.JPG",alt:null}),Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},"Read more about Quick reply prompts ",Object(a.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages#quick-replies"},Object(a.b)("strong",{parentName:"a"},"here")))))),Object(a.b)("h2",{id:"exercise-5-designing-the-journeys-for-faq-categories"},"Exercise 5: Designing the Journeys for FAQ categories"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Step 1-")," Create A journey "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Step 2-")," Using Quick reply prompt add the questions as buttons"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Step 3-")," For each button add a Text message node to show the answer."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Step 4-")," For each fallback node we can transfer it to an agent")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/KbzJKmwOg7Ns1634525363463.JPG",alt:null})),Object(a.b)("h2",{id:"exercise-6-creating-journey-to-transfer-the-chat-to-the-agent"},"Exercise 6: Creating Journey to Transfer the Chat to the Agent"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Step 1:")," Create A journey ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Step 2:")," Add an Intent and utterances relevant to the the intent\nExample Utterances are I want to talk to customer support, Connect me to a live agent or\nContact customer support\n",Object(a.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/KE2gYzfIcFSF1633528065913.JPG",alt:null}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Step 3:")," Add Prompts to collect user Information")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Step 4:")," Use a Raise A ticket Action node to raise the ticket to connect to live agent"))),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/wWxB49BxsVVa1634525661373.JPG",alt:null})))}p.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);