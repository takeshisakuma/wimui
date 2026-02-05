import{j as H}from"./jsx-runtime-u17CrQMm.js";import{f as k,R as T}from"./iframe-C9O3I54Q.js";import{u as S}from"./useTranslation-Ba8LUUji.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B6bUO9K-.js";var f={exports:{}};var v;function q(){return v||(v=1,(function(l){(function(){var u={}.hasOwnProperty;function r(){for(var e="",a=0;a<arguments.length;a++){var n=arguments[a];n&&(e=t(e,p(n)))}return e}function p(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var a="";for(var n in e)u.call(e,n)&&e[n]&&(a=t(a,n));return a}function t(e,a){return a?e?e+" "+a:e+a:e}l.exports?(r.default=r,l.exports=r):window.classNames=r})()})(f)),f.exports}var N=q();const R=k(N),y=({tag:l="h1",size:u="xl",color:r="black",align:p="left",decoration:t="none",className:e,children:a,...n})=>{const{t:_}=S(),b=t!=="none"&&t!=="highlight"?`wim-heading--${t}`:"",z=R("wim-heading",`wim-heading--${u}`,`wim-heading--${r}`,`wim-heading--${p}`,b,e),x=typeof a=="string"?_(a):a,w=t==="highlight"?H.jsx("span",{className:"wim-heading__highlight",children:x}):x;return T.createElement(l,{className:z,...n},w)};y.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{tag:{required:!1,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]},description:"The semantic HTML tag to use.",defaultValue:{value:'"h1"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'},{name:"literal",value:'"3xl"'},{name:"literal",value:'"4xl"'}]},description:"The visual size of the heading.",defaultValue:{value:'"xl"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"black" | "deepgray" | "gray" | "lightgray" | "white" | "error" | "primary"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"deepgray"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"lightgray"'},{name:"literal",value:'"white"'},{name:"literal",value:'"error"'},{name:"literal",value:'"primary"'}]},description:"Text color.",defaultValue:{value:'"black"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:"Text alignment.",defaultValue:{value:'"left"',computed:!1}},decoration:{required:!1,tsType:{name:"union",raw:'"underline" | "highlight" | "none"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"highlight"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const U={title:"Component/Typography/Heading",component:y,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{tag:{control:"select",options:["h1","h2","h3","h4","h5","h6"]},size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl","4xl"]},color:{control:"select",options:["black","deepgray","gray","lightgray","white","error","primary"]},align:{control:"radio",options:["left","center","right"]}}},i={args:{tag:"h1",size:"2xl",children:"heading_text",color:"black",align:"left"}},s={args:{tag:"h2",size:"xl",children:"heading_text",color:"black",align:"left"}},o={args:{tag:"h3",size:"lg",children:"heading_text",color:"black",align:"left"}},c={args:{tag:"h4",size:"md",children:"heading_text",color:"black",align:"left"}},g={args:{tag:"h5",size:"sm",children:"heading_text",color:"black",align:"left"}},d={args:{tag:"h6",size:"xs",children:"heading_text",color:"black",align:"left"}},h={args:{tag:"h2",size:"xl",children:"Underline Heading",decoration:"underline"}},m={args:{tag:"h2",size:"xl",children:"Highlight Heading",decoration:"highlight"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h1",
    size: "2xl",
    children: "heading_text",
    color: "black",
    align: "left"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h2",
    size: "xl",
    children: "heading_text",
    color: "black",
    align: "left"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h3",
    size: "lg",
    children: "heading_text",
    color: "black",
    align: "left"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h4",
    size: "md",
    children: "heading_text",
    color: "black",
    align: "left"
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h5",
    size: "sm",
    children: "heading_text",
    color: "black",
    align: "left"
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h6",
    size: "xs",
    children: "heading_text",
    color: "black",
    align: "left"
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h2",
    size: "xl",
    children: "Underline Heading",
    decoration: "underline"
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tag: "h2",
    size: "xl",
    children: "Highlight Heading",
    decoration: "highlight"
  }
}`,...m.parameters?.docs?.source}}};const $=["h1_heading","h2_heading","h3_heading","h4_heading","h5_heading","h6_heading","UnderlineHeading","HighlightHeading"];export{m as HighlightHeading,h as UnderlineHeading,$ as __namedExportsOrder,U as default,i as h1_heading,s as h2_heading,o as h3_heading,c as h4_heading,g as h5_heading,d as h6_heading};
