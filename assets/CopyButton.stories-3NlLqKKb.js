import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-BB8xHwtR.js";import{c as y}from"./index-BbZ6eRDH.js";import{B as C}from"./Button-CbaCWdFu.js";import{T,a as v,b as S}from"./Tooltip-CUe_y_9J.js";import{u as b}from"./useTranslation-y7Vel5kV.js";const m=({value:p,size:u="md",className:d,"aria-label":g})=>{const{t:r}=b(),[e,n]=c.useState(!1);c.useEffect(()=>{if(e){const l=setTimeout(()=>{n(!1)},2e3);return()=>clearTimeout(l)}},[e]);const f=async()=>{try{await navigator.clipboard.writeText(p),n(!0)}catch{}},i=r(e?"copied":"copy.to_clipboard");return s.jsxs(T,{children:[s.jsx(v,{asChild:!0,children:s.jsx(C,{variant:"ghost",size:u,icon:e?"CheckIcon":"CopyIcon",intent:e?"positive":"default",onClick:f,className:y("wim-copy-button",d),"aria-label":g||i})}),s.jsx(S,{children:i})]})};m.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{value:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}}};const x={title:"Components/Buttons/CopyButton",component:m,tags:[],argTypes:{size:{control:"radio",options:["sm","md","lg"]}}},a={args:{value:"Hello, wimui!"}},t={args:{value:"Small CopyButton",size:"sm"}},o={args:{value:"Large CopyButton",size:"lg"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Hello, wimui!"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Small CopyButton",
    size: "sm"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Large CopyButton",
    size: "lg"
  }
}`,...o.parameters?.docs?.source}}};const B=["Default","Small","Large"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Large:o,Small:t,__namedExportsOrder:B,default:x},Symbol.toStringTag,{value:"Module"}));export{q as C,a as D,o as L,t as S};
