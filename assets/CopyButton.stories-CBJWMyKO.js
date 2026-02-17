import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-CoPU0Zv_.js";import{c as y}from"./index-BP-mNPw0.js";import{B as f}from"./Button-Dr4Vzh6F.js";import{T as C,a as T,b as v}from"./Tooltip-DfrIw6lg.js";const m=({value:c,size:p="medium",className:u,"aria-label":d})=>{const[e,l]=n.useState(!1);n.useEffect(()=>{if(e){const s=setTimeout(()=>{l(!1)},2e3);return()=>clearTimeout(s)}},[e]);const g=async()=>{try{await navigator.clipboard.writeText(c),l(!0)}catch(s){console.error("Failed to copy: ",s)}},i=e?"Copied":"Copy to clipboard";return o.jsxs(C,{children:[o.jsx(T,{asChild:!0,children:o.jsx(f,{priority:"tertiary",size:p,iconName:e?"CheckIcon":"CopyIcon",role:e?"positive":"default",onClick:g,className:y("wim-copy-button",u),"aria-label":d||i})}),o.jsx(v,{children:i})]})};m.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{value:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Component/Buttons/CopyButton",component:m,tags:[],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]}}},a={args:{value:"Hello, wimui!"}},r={args:{value:"Small CopyButton",size:"small"}},t={args:{value:"Large CopyButton",size:"large"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const b=["Default","Small","Large"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Large:t,Small:r,__namedExportsOrder:b,default:S},Symbol.toStringTag,{value:"Module"}));export{z as C,a as D,t as L,r as S};
