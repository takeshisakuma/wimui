import{j as d}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-8PFyu00w.js";import{c as g}from"./index-D8TpllMe.js";import{B as y}from"./Button-Bp7GRDi3.js";const i=({value:n,size:m="medium",className:c,"aria-label":p})=>{const[e,s]=l.useState(!1);l.useEffect(()=>{if(e){const o=setTimeout(()=>{s(!1)},2e3);return()=>clearTimeout(o)}},[e]);const u=async()=>{try{await navigator.clipboard.writeText(n),s(!0)}catch(o){console.error("Failed to copy: ",o)}};return d.jsx(y,{priority:"tertiary",size:m,iconName:e?"CheckIcon":"CopyIcon",role:e?"positive":"default",onClick:u,className:g("wim-copy-button",c),"aria-label":p||(e?"Copied":"Copy to clipboard"),title:e?"Copied":"Copy to clipboard"})};i.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{value:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}}};const f={title:"Component/Feedback/CopyButton",component:i,tags:[],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]}}},a={args:{value:"Hello, wimui!"}},r={args:{value:"Small CopyButton",size:"small"}},t={args:{value:"Large CopyButton",size:"large"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const C=["Default","Small","Large"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Large:t,Small:r,__namedExportsOrder:C,default:f},Symbol.toStringTag,{value:"Module"}));export{T as C,a as D,t as L,r as S};
