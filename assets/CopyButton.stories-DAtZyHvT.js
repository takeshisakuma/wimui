import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-DSE3UbG8.js";import{c as f}from"./index-BKAe34ln.js";import{B as C}from"./Button-Cr-B_lSk.js";import{T,a as v,b as S}from"./Tooltip-DqXROlBx.js";import{u as b}from"./useTranslation-DOQQDmnd.js";const c=({value:u,size:p="medium",className:d,"aria-label":g})=>{const{t:s}=b(),[e,l]=m.useState(!1);m.useEffect(()=>{if(e){const i=setTimeout(()=>{l(!1)},2e3);return()=>clearTimeout(i)}},[e]);const y=async()=>{try{await navigator.clipboard.writeText(u),l(!0)}catch{}},n=s(e?"copied":"copy_to_clipboard");return o.jsxs(T,{children:[o.jsx(v,{asChild:!0,children:o.jsx(C,{priority:"tertiary",size:p,iconName:e?"CheckIcon":"CopyIcon",intent:e?"positive":"default",onClick:y,className:f("wim-copy-button",d),"aria-label":g||n})}),o.jsx(S,{children:n})]})};c.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{value:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}}};const x={title:"Components/Buttons/CopyButton",component:c,tags:[],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]}}},a={args:{value:"Hello, wimui!"}},t={args:{value:"Small CopyButton",size:"small"}},r={args:{value:"Large CopyButton",size:"large"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Hello, wimui!"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Small CopyButton",
    size: "small"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Large CopyButton",
    size: "large"
  }
}`,...r.parameters?.docs?.source}}};const B=["Default","Small","Large"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Large:r,Small:t,__namedExportsOrder:B,default:x},Symbol.toStringTag,{value:"Module"}));export{N as C,a as D,r as L,t as S};
