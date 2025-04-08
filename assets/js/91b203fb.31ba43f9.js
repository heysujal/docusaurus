"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["76076"],{97483:function(e,r,n){n.r(r),n.d(r,{frontMatter:()=>c,default:()=>p,contentTitle:()=>u,assets:()=>d,toc:()=>h,metadata:()=>a});var a=JSON.parse('{"id":"migration/index","title":"Upgrading Docusaurus","description":"Docusaurus versioning is based on the major.minor.patch scheme and respects Semantic Versioning.","source":"@site/docs/migration/index.mdx","sourceDirName":"migration","slug":"/migration","permalink":"/docs/migration","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/index.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1744121501000,"frontMatter":{"slug":"/migration"},"sidebar":"docs","previous":{"title":"Client architecture","permalink":"/docs/advanced/client"},"next":{"title":"To Docusaurus v3","permalink":"/docs/migration/v3"}}'),t=n(85893),l=n(80980),s=n(15398),o=n(58636),i=n(86762);let c={slug:"/migration"},u="Upgrading Docusaurus",d={},h=[{value:"Troubleshooting upgrades",id:"troubleshooting-upgrades",level:2},{value:"Run the <code>clear</code> command",id:"run-the-clear-command",level:3},{value:"Remove <code>node_modules</code> and your lock file(s)",id:"remove-node_modules-and-your-lock-files",level:3}];function m(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"upgrading-docusaurus",children:"Upgrading Docusaurus"})}),"\n",(0,t.jsxs)(r.p,{children:["Docusaurus versioning is based on the ",(0,t.jsx)(r.code,{children:"major.minor.patch"})," scheme and respects ",(0,t.jsx)(r.a,{href:"https://semver.org/",children:(0,t.jsx)(r.strong,{children:"Semantic Versioning"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Breaking changes"})," are only released on major version upgrades, and thoroughly documented in the following upgrade guides."]}),"\n","\n",(0,t.jsx)(i.Z,{}),"\n",(0,t.jsx)(r.h2,{id:"troubleshooting-upgrades",children:"Troubleshooting upgrades"}),"\n",(0,t.jsx)(r.p,{children:"When upgrading Docusaurus you may experience issues caused by mismatching cached dependencies - there are a few troubleshooting steps you should perform to resolve these common issues before reporting a bug or seeking support."}),"\n",(0,t.jsxs)(r.h3,{id:"run-the-clear-command",children:["Run the ",(0,t.jsx)(r.code,{children:"clear"})," command"]}),"\n",(0,t.jsx)(r.p,{children:"This CLI command is used to clear a Docusaurus site's generated assets, caches and build artifacts."}),"\n",(0,t.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm run clear\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn clear\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pnpm run clear\n"})})}),(0,t.jsx)(o.Z,{value:"bun",label:"Bun",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"bun run clear\n"})})})]}),"\n",(0,t.jsxs)(r.h3,{id:"remove-node_modules-and-your-lock-files",children:["Remove ",(0,t.jsx)(r.code,{children:"node_modules"})," and your lock file(s)"]}),"\n",(0,t.jsxs)(r.p,{children:["Remove the ",(0,t.jsx)(r.code,{children:"node_modules"})," folder and your package manager's lock file using the following:"]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(o.Z,{label:"Bash",value:"bash",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"rm -rf node_modules yarn.lock package-lock.json\n"})})}),(0,t.jsx)(o.Z,{label:"PowerShell",value:"powershell",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-powershell",children:"@('node_modules','yarn.lock','package-lock.json') | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue\n"})})})]}),"\n",(0,t.jsxs)(r.p,{children:["Then reinstall packages and regenerate the ",(0,t.jsx)(r.code,{children:"lock"})," file using:"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm install\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn install\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pnpm install\n"})})}),(0,t.jsx)(o.Z,{value:"bun",label:"Bun",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"bun install\n"})})})]})]})}function p(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},86762:function(e,r,n){n.d(r,{Z:()=>b});var a=n(85893);n(67294);var t=n(90496),l=n(85921),s=n(35363),o=n(11660),i=n(82095),c=n(77827),u=n(57922);let d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h(e){let{className:r,href:n,children:l}=e;return(0,a.jsx)(s.Z,{href:n,className:(0,t.Z)("card padding--lg",d.cardContainer,r),children:l})}function m(e){let{className:r,href:n,icon:l,title:s,description:o}=e;return(0,a.jsxs)(h,{href:n,className:r,children:[(0,a.jsxs)(u.Z,{as:"h2",className:(0,t.Z)("text--truncate",d.cardTitle),title:s,children:[l," ",s]}),o&&(0,a.jsx)("p",{className:(0,t.Z)("text--truncate",d.cardDescription),title:o,children:o})]})}function p(e){let{item:r}=e,n=(0,l.LM)(r),t=function(){let{selectMessage:e}=(0,o.c)();return r=>e(r,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r}))}();return n?(0,a.jsx)(m,{className:r.className,href:n,icon:"\uD83D\uDDC3\uFE0F",title:r.label,description:r.description??t(r.items.length)}):null}function g(e){let{item:r}=e,n=(0,i.Z)(r.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",t=(0,l.xz)(r.docId??void 0);return(0,a.jsx)(m,{className:r.className,href:r.href,icon:n,title:r.label,description:r.description??t?.description})}function f(e){let{item:r}=e;switch(r.type){case"link":return(0,a.jsx)(g,{item:r});case"category":return(0,a.jsx)(p,{item:r});default:throw Error(`unknown item type ${JSON.stringify(r)}`)}}function x(e){let{className:r}=e,n=(0,l.Ok)();return(0,a.jsx)(b,{items:n,className:r})}function j(e){let{item:r}=e;return(0,a.jsx)("article",{className:(0,t.Z)("docCardListItem_hvcp","col col--6"),children:(0,a.jsx)(f,{item:r})})}function b(e){let{items:r,className:n}=e;if(!r)return(0,a.jsx)(x,{...e});let s=(0,l.MN)(r);return(0,a.jsx)("section",{className:(0,t.Z)("row",n),children:s.map((e,r)=>(0,a.jsx)(j,{item:e},r))})}},58636:function(e,r,n){n.d(r,{Z:()=>l});var a=n(85893);n(67294);var t=n(90496);function l(e){let{children:r,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_pnkT",l),hidden:n,children:r})}},15398:function(e,r,n){n.d(r,{Z:()=>j});var a=n(85893),t=n(67294),l=n(90496),s=n(54947),o=n(3620),i=n(844),c=n(97486),u=n(32263),d=n(16971);function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var p=n(71607);function g(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:i}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{let r=e.currentTarget,n=i[c.indexOf(r)].value;n!==t&&(u(r),o(n))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1]}}r?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},r),children:i.map(e=>{let{value:r,label:n,attributes:s}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...s,className:(0,l.Z)("tabs__item","tabItem_AQgk",s?.className,{"tabs__item--active":t===r}),children:n??r},r)})})}function f(e){let{lazy:r,children:n,selectedValue:s}=e,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=o.find(e=>e.props.value===s);return e?(0,t.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:o.map((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s}))})}function x(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:a}=e,l=function(e){let{values:r,children:n}=e;return(0,t.useMemo)(()=>{let e=r??h(n).map(e=>{let{props:{value:r,label:n,attributes:a,default:t}}=e;return{value:r,label:n,attributes:a,default:t}}),a=(0,u.lx)(e,(e,r)=>e.value===r.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[r,n])}(e),[s,p]=(0,t.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let a=n.find(e=>e.default)??n[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:r,tabValues:l})),[g,f]=function(e){let{queryString:r=!1,groupId:n}=e,a=(0,o.k6)(),l=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c._X)(l),(0,t.useCallback)(e=>{if(!l)return;let r=new URLSearchParams(a.location.search);r.set(l,e),a.replace({...a.location,search:r.toString()})},[l,a])]}({queryString:n,groupId:a}),[x,j]=function(e){let{groupId:r}=e,n=r?`docusaurus.tab.${r}`:null,[a,l]=(0,d.Nk)(n);return[a,(0,t.useCallback)(e=>{n&&l.set(e)},[n,l])]}({groupId:a}),b=(()=>{let e=g??x;return m({value:e,tabValues:l})?e:null})();return(0,i.Z)(()=>{b&&p(b)},[b]),{selectedValue:s,selectValue:(0,t.useCallback)(e=>{if(!m({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),j(e)},[f,j,l]),tabValues:l}}(e);return(0,a.jsxs)("div",{className:(0,l.Z)("tabs-container","tabList_Qoir"),children:[(0,a.jsx)(g,{...r,...e}),(0,a.jsx)(f,{...r,...e})]})}function j(e){let r=(0,p.Z)();return(0,a.jsx)(x,{...e,children:h(e.children)},String(r))}},11660:function(e,r,n){n.d(r,{c:()=>i});var a=n(67294),t=n(8156);let l=["zero","one","two","few","many","other"];function s(e){return l.filter(r=>e.includes(r))}let o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){let e=function(){let{i18n:{currentLocale:e}}=(0,t.Z)();return(0,a.useMemo)(()=>{try{let r=new Intl.PluralRules(e);return{locale:e,pluralForms:s(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${r.message}
`),o}},[e])}();return{selectMessage:(r,n)=>(function(e,r,n){let a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);let t=n.select(r);return a[Math.min(n.pluralForms.indexOf(t),a.length-1)]})(n,r,e)}}},80980:function(e,r,n){n.d(r,{Z:()=>o,a:()=>s});var a=n(67294);let t={},l=a.createContext(t);function s(e){let r=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:r},e.children)}}}]);