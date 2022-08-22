"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8914],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2009:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(2784),a=n(6277);const o="tabItem_OMyP";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7896),a=n(2784),o=n(6277),l=n(9741),i=n(2244),c=n(8963),s=n(4126);const u="tabList_M0Dn",p="tabItem_ysIP";function m(e){var t,n;const{lazy:l,block:m,defaultValue:d,values:f,groupId:b,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,i.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:C}=(0,c.U)(),[O,T]=(0,a.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,s.o5)();if(null!=b){const e=w[b];null!=e&&e!==O&&y.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),r=y[n].value;r!==O&&(I(t),T(r),null!=b&&C(b,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=N.indexOf(e.currentTarget)+1;n=null!=(r=N[t])?r:N[0];break}case"ArrowLeft":{var a;const t=N.indexOf(e.currentTarget)-1;n=null!=(a=N[t])?a:N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},h)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>N.push(e),onKeyDown:P,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},2711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(2784),n(876)),o=n(1112),l=n(2009);const i={title:"React Leaflet Core"},c=void 0,s={unversionedId:"core-introduction",id:"core-introduction",title:"React Leaflet Core",description:"Introduction",source:"@site/docs/core-introduction.mdx",sourceDirName:".",slug:"/core-introduction",permalink:"/docs/core-introduction",draft:!1,tags:[],version:"current",frontMatter:{title:"React Leaflet Core"},sidebar:"docs",previous:{title:"Child components",permalink:"/docs/api-components"},next:{title:"Core architecture",permalink:"/docs/core-architecture"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Audience",id:"audience",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"React Leaflet's core APIs are implemented in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-leaflet/core")," package to provide a separation from the public APIs.\nThe goal of this package is to make most of React Leaflet's internal logic available to developers to easily implement custom behaviors, such as third-party Leaflet plugins."),(0,a.kt)("h2",{id:"audience"},"Audience"),(0,a.kt)("p",null,"You might want to learn about the core APIs if you want to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customize how public components work, by creating an alternative implementation matching your needs"),(0,a.kt)("li",{parentName:"ul"},"Implement new components not provided by React Leaflet"),(0,a.kt)("li",{parentName:"ul"},"Simply learn more about how React Leaflet works")),(0,a.kt)("p",null,"If you're only interested in using the public APIs of React Leaflet, their usage is covered in the previous sections of this documentation, notably the ",(0,a.kt)("a",{parentName:"p",href:"/docs/start-introduction"},"getting started")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-map"},"public API")," pages."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-leaflet/core")," package is a dependency of the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-leaflet")," one. The main ",(0,a.kt)("a",{parentName:"p",href:"/docs/start-installation"},"installation steps")," from the getting started documentation should be followed to use the core APIs."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"All the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core-api"},"core APIs")," can be imported from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-leaflet/core")," package, such as"),(0,a.kt)(o.Z,{defaultValue:"absolute",groupId:"import-specifier",values:[{label:"Absolute specifier import",value:"absolute"},{label:"Bare specifier import",value:"bare"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"absolute",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { createControlComponent } from 'https://cdn.esm.sh/@react-leaflet/core'\nimport { Control } from 'https://cdn.esm.sh/leaflet'\n\nexport const ZoomControl = createControlComponent(\n  (props) => new Control.Zoom(props),\n)\n"))),(0,a.kt)(l.Z,{value:"bare",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { createControlComponent } from '@react-leaflet/core'\nimport { Control } from 'leaflet'\n\nexport const ZoomControl = createControlComponent(\n  (props) => new Control.Zoom(props),\n)\n")))),(0,a.kt)("p",null,"The following page presents the architecture and usage in more details."))}d.isMDXComponent=!0}}]);