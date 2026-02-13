import{j as y}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./iframe-C5pzRvkm.js";import{c as z}from"./index-DRNRcLaq.js";import{u as H}from"./useTranslation-JEVdGjEm.js";const d=({tag:h="h1",size:m="xl",color:u="black",align:p="left",decoration:o="none",className:x,children:c,...f})=>{const{t:v}=H(),g=typeof c=="string"?v(c):c,_=o!=="none"?y.jsx("span",{className:o==="highlight"?"wim-heading__highlight":`wim-heading--${o}`,children:g}):g;return b.createElement(h,{className:z("wim-heading",`wim-heading--${m}`,`wim-heading--${u}`,`wim-heading--${p}`,x),...f},_)};d.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{tag:{required:!1,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]},description:"The semantic HTML tag to use.",defaultValue:{value:'"h1"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'},{name:"literal",value:'"3xl"'},{name:"literal",value:'"4xl"'}]},description:"The visual size of the heading.",defaultValue:{value:'"xl"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"black" | "deepgray" | "gray" | "lightgray" | "white" | "error" | "primary"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"error"'},{name:"literal",value:'"primary"'}]},description:"Text color.",defaultValue:{value:'"black"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:"Text alignment.",defaultValue:{value:'"left"',computed:!1}},decoration:{required:!1,tsType:{name:"union",raw:'"underline" | "highlight" | "none"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"highlight"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const k={title:"Component/Typography & Icons/Heading",component:d,parameters:{layout:"padded"},argTypes:{tag:{control:"select",options:["h1","h2","h3","h4","h5","h6"]},size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl","4xl"]},color:{control:"select",options:["black","deepgray","gray","lightgray","white","error","primary"]},align:{control:"radio",options:["left","center","right"]}}},e={args:{tag:"h1",size:"2xl",children:"heading_text",color:"black",align:"left"}},a={args:{tag:"h2",size:"xl",children:"heading_text",color:"black",align:"left"}},n={args:{tag:"h3",size:"lg",children:"heading_text",color:"black",align:"left"}},r={args:{tag:"h4",size:"md",children:"heading_text",color:"black",align:"left"}},l={args:{tag:"h5",size:"sm",children:"heading_text",color:"black",align:"left"}},t={args:{tag:"h6",size:"xs",children:"heading_text",color:"black",align:"left"}},i={args:{tag:"h2",size:"xl",children:"Underline Heading",decoration:"underline"}},s={args:{tag:"h2",size:"xl",children:"Highlight Heading",decoration:"highlight"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h1",
    size: "2xl",
    children: "heading_text",
    color: "black",
    align: "left"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h2",
    size: "xl",
    children: "heading_text",
    color: "black",
    align: "left"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h3",
    size: "lg",
    children: "heading_text",
    color: "black",
    align: "left"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h4",
    size: "md",
    children: "heading_text",
    color: "black",
    align: "left"
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h5",
    size: "sm",
    children: "heading_text",
    color: "black",
    align: "left"
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h6",
    size: "xs",
    children: "heading_text",
    color: "black",
    align: "left"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h2",
    size: "xl",
    children: "Underline Heading",
    decoration: "underline"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h2",
    size: "xl",
    children: "Highlight Heading",
    decoration: "highlight"
  }
}`,...s.parameters?.docs?.source}}};const w=["h1_heading","h2_heading","h3_heading","h4_heading","h5_heading","h6_heading","UnderlineHeading","HighlightHeading"],N=Object.freeze(Object.defineProperty({__proto__:null,HighlightHeading:s,UnderlineHeading:i,__namedExportsOrder:w,default:k,h1_heading:e,h2_heading:a,h3_heading:n,h4_heading:r,h5_heading:l,h6_heading:t},Symbol.toStringTag,{value:"Module"}));export{N as H,a,n as b,r as c,l as d,t as e,e as h};
