import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-DtwnyzFc.js";import{c as f}from"./index-DWTvJvSx.js";import{B as C}from"./Button-CE01zq8d.js";import{T,a as v,b as S}from"./Tooltip-AaquNFFv.js";import{u as b}from"./useTranslation-BJQcmf5i.js";const c=({value:u,size:p="medium",className:d,"aria-label":g})=>{const{t:l}=b(),[e,i]=m.useState(!1);m.useEffect(()=>{if(e){const s=setTimeout(()=>{i(!1)},2e3);return()=>clearTimeout(s)}},[e]);const y=async()=>{try{await navigator.clipboard.writeText(u),i(!0)}catch(s){console.error("Failed to copy: ",s)}},n=l(e?"copied":"copy_to_clipboard");return o.jsxs(T,{children:[o.jsx(v,{asChild:!0,children:o.jsx(C,{priority:"tertiary",size:p,iconName:e?"CheckIcon":"CopyIcon",role:e?"positive":"default",onClick:y,className:f("wim-copy-button",d),"aria-label":g||n})}),o.jsx(S,{children:n})]})};c.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{value:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}}};const x={title:"Components/Buttons/CopyButton",component:c,tags:[],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]}}},a={args:{value:"Hello, wimui!"}},r={args:{value:"Small CopyButton",size:"small"}},t={args:{value:"Large CopyButton",size:"large"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Hello, wimui!"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Small CopyButton",
    size: "small"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Large CopyButton",
    size: "large"
  }
}`,...t.parameters?.docs?.source}}};const B=["Default","Small","Large"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Large:t,Small:r,__namedExportsOrder:B,default:x},Symbol.toStringTag,{value:"Module"}));export{N as C,a as D,t as L,r as S};
