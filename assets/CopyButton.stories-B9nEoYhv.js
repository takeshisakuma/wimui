import{j as g}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-Dja6ld6l.js";import{P as o}from"./index-DZGrFLC1.js";import{B as y}from"./Button-C_GQ0Y6v.js";const l=({value:m,size:p="medium",className:u,"aria-label":c})=>{const[e,i]=n.useState(!1);n.useEffect(()=>{if(e){const s=setTimeout(()=>{i(!1)},2e3);return()=>clearTimeout(s)}},[e]);const d=async()=>{try{await navigator.clipboard.writeText(m),i(!0)}catch(s){console.error("Failed to copy: ",s)}};return g.jsx(y,{priority:"tertiary",size:p,iconName:e?"CheckIcon":"CopyIcon",role:e?"positive":"default",onClick:d,className:u,"aria-label":c||(e?"Copied":"Copy to clipboard"),title:e?"Copied":"Copy to clipboard"})};l.propTypes={value:o.string.isRequired,size:o.oneOf(["small","medium","large"]),className:o.string,"aria-label":o.string};l.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{value:{required:!0,tsType:{name:"string"},description:"",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},"aria-label":{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const f={title:"Component/Feedback/CopyButton",component:l,tags:[],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]}}},a={args:{value:"Hello, wimui!"}},r={args:{value:"Small CopyButton",size:"small"}},t={args:{value:"Large CopyButton",size:"large"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const v=["Default","Small","Large"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Large:t,Small:r,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{B as C,a as D,t as L,r as S};
