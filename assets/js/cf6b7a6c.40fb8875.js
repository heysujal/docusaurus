"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["67508"],{33256:function(e,t,s){s.r(t),s.d(t,{frontMatter:()=>o,default:()=>m,contentTitle:()=>a,assets:()=>c,toc:()=>d,metadata:()=>i});var i=JSON.parse('{"id":"tests/visibility/some-unlisteds/subcategory-with-listed-index/index","title":"Subcategory index listed","description":"Doc index, listed, but all the other category items are unlisted","source":"@site/_dogfooding/_docs tests/tests/visibility/some-unlisteds/subcategory-with-listed-index/index.mdx","sourceDirName":"tests/visibility/some-unlisteds/subcategory-with-listed-index","slug":"/tests/visibility/some-unlisteds/subcategory-with-listed-index/","permalink":"/tests/docs/tests/visibility/some-unlisteds/subcategory-with-listed-index/","draft":false,"unlisted":false,"tags":[{"inline":false,"label":"Visibility","permalink":"/tests/docs/tags/visibility"},{"inline":false,"label":"Unlisted","permalink":"/tests/docs/tags/unlisted"}],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1744121501000,"frontMatter":{"unlisted":false,"tags":["visibility","unlisted"]},"sidebar":"sidebar","previous":{"title":"Some Drafts - Listed 1","permalink":"/tests/docs/tests/visibility/some-drafts/draft-subcategory/listed1"},"next":{"title":"Some Unlisteds - Listed 1","permalink":"/tests/docs/tests/visibility/some-unlisteds/unlisted-subcategory/listed1"}}'),n=s(85893),r=s(80980),l=s(86762);let o={unlisted:!1,tags:["visibility","unlisted"]},a="Subcategory index listed",c={},d=[];function u(e){let t={h1:"h1",header:"header",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"subcategory-index-listed",children:"Subcategory index listed"})}),"\n",(0,n.jsxs)(t.p,{children:["Doc index, ",(0,n.jsx)(t.strong,{children:"listed"}),", but all the other category items are unlisted"]}),"\n","\n",(0,n.jsx)(l.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}m.displayName="MDXContent(_dogfooding/_docs tests/tests/visibility/some-unlisteds/subcategory-with-listed-index/index.mdx)"},86762:function(e,t,s){s.d(t,{Z:()=>y});var i=s(85893);s(67294);var n=s(90496),r=s(85921),l=s(35363),o=s(11660),a=s(82095),c=s(77827),d=s(57922);let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function m(e){let{className:t,href:s,children:r}=e;return(0,i.jsx)(l.Z,{href:s,className:(0,n.Z)("card padding--lg",u.cardContainer,t),children:r})}function f(e){let{className:t,href:s,icon:r,title:l,description:o}=e;return(0,i.jsxs)(m,{href:s,className:t,children:[(0,i.jsxs)(d.Z,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:l,children:[r," ",l]}),o&&(0,i.jsx)("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e,s=(0,r.LM)(t),n=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,i.jsx)(f,{className:t.className,href:s,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??n(t.items.length)}):null}function p(e){let{item:t}=e,s=(0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",n=(0,r.xz)(t.docId??void 0);return(0,i.jsx)(f,{className:t.className,href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,i.jsx)(p,{item:t});case"category":return(0,i.jsx)(h,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,s=(0,r.Ok)();return(0,i.jsx)(y,{items:s,className:t})}function b(e){let{item:t}=e;return(0,i.jsx)("article",{className:(0,n.Z)("docCardListItem_hvcp","col col--6"),children:(0,i.jsx)(x,{item:t})})}function y(e){let{items:t,className:s}=e;if(!t)return(0,i.jsx)(g,{...e});let l=(0,r.MN)(t);return(0,i.jsx)("section",{className:(0,n.Z)("row",s),children:l.map((e,t)=>(0,i.jsx)(b,{item:e},t))})}},11660:function(e,t,s){s.d(t,{c:()=>a});var i=s(67294),n=s(8156);let r=["zero","one","two","few","many","other"];function l(e){return r.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,n.Z)();return(0,i.useMemo)(()=>{try{let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,s)=>(function(e,t,s){let i=e.split("|");if(1===i.length)return i[0];i.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);let n=s.select(t);return i[Math.min(s.pluralForms.indexOf(n),i.length-1)]})(s,t,e)}}},80980:function(e,t,s){s.d(t,{Z:()=>o,a:()=>l});var i=s(67294);let n={},r=i.createContext(n);function l(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);