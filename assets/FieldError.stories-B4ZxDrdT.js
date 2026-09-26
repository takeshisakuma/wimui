"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,Sr as i,Tr as a,ur as o,xr as s}from"./iframe-DkmqI5Zh.js";import{t as c}from"./src-BWkk1A6b.js";import{r as l}from"./FieldTemplate-ClN0dApN.js";var u=e({Default:()=>p,ShortMessage:()=>m,__namedExportsOrder:()=>h,default:()=>f}),d,f,p,m,h,g=t((()=>{n(),r(),i(),c(),d=o(),f={title:`Components/Form Layout/FieldError`,component:l,argTypes:{content:{control:`text`}}},p={render:function(e){let{t}=a(s);return(0,d.jsx)(l,{...e,content:t(`story.fielderror_error`)})}},m={render:function(e){let{t}=a(s);return(0,d.jsx)(l,{...e,content:t(`story.fielderror_required`)})}},h=[`Default`,`ShortMessage`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldError {...args} content={t("story.fielderror_error")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldError {...args} content={t("story.fielderror_required")} />;
  }
}`,...m.parameters?.docs?.source}}}}));g();export{p as Default,m as ShortMessage,h as __namedExportsOrder,f as default,g as n,u as t};