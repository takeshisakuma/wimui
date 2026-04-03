import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-B6UUHjqT.js";import{c as C}from"./index-CplnqdeP.js";import{B as v}from"./Button-BUfBlxL4.js";import{T,a as b,b as S}from"./Tooltip-VitPHD_Y.js";const p=({value:c,size:u="md",className:m,"aria-label":d,copyLabel:g="Copy to clipboard",copiedLabel:f="Copied"})=>{const[e,r]=i.useState(!1);i.useEffect(()=>{if(e){const n=setTimeout(()=>{r(!1)},2e3);return()=>clearTimeout(n)}},[e]);const y=async()=>{try{await navigator.clipboard.writeText(c),r(!0)}catch{}},l=e?f:g;return s.jsxs(T,{children:[s.jsx(b,{asChild:!0,children:s.jsx(v,{variant:"ghost",size:u,icon:e?"CheckIcon":"CopyIcon",intent:e?"positive":"default",onClick:y,className:C("wim-copy-button",m),"aria-label":d||l})}),s.jsx(S,{children:l})]})};p.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{value:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},copyLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Copy to clipboard"',computed:!1}},copiedLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Copied"',computed:!1}}}};const x={title:"Components/Buttons/CopyButton",component:p,tags:[],argTypes:{size:{control:"radio",options:["sm","md","lg"]}}},a={args:{value:"Hello, wimui!"}},t={args:{value:"Small CopyButton",size:"sm"}},o={args:{value:"Large CopyButton",size:"lg"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
