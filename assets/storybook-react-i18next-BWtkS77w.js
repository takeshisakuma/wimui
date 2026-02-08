import{p as i}from"./storybook-i18n-B72K_iCP.js";import{R as o,r as f}from"./react-D-G-yZ1o.js";import{I as p}from"./react-i18next-BbhreOBd.js";const{useGlobals:g,useState:u,useEffect:n}=__STORYBOOK_MODULE_PREVIEW_API__;var m=(s,t)=>{const{parameters:{i18n:e}}=t;e===void 0&&console.error(`The 'i18n' parameter is missing in 'parameters' configuration of preview.js. Define the 'i18n' parameter as follows:
parameters: {
    i18n,
},
`);const a=e?.language,[{locale:r}]=g(),[l,c]=u(0);return n(()=>{if(e)return e.on("languageChanged",()=>{c(Date.now())}),()=>e.off("languageChanged")},[e]),n(()=>{e&&r&&a&&r!==a&&e.changeLanguage(r)},[a,r,e]),o.createElement(f.Fragment,{key:l},o.createElement(p,{i18n:e},s(t)))},_=i.decorators||[],v={...i,decorators:[..._,m]},d=v;const O=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"}));export{O as p};
