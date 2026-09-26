"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,Sr as i,Tr as a,ur as o,xr as s}from"./iframe-DkmqI5Zh.js";import{h as c,t as l}from"./src-BWkk1A6b.js";var u=e({Default:()=>p,LongText:()=>m,__namedExportsOrder:()=>h,default:()=>f}),d,f,p,m,h,g=t((()=>{n(),r(),i(),l(),d=o(),f={title:`Components/Form Layout/Legend`,component:c,parameters:{layout:`padded`}},p={render:function(e){let{t}=a(s);return(0,d.jsx)(c,{...e,children:t(`story.legend_title`)})}},m={render:function(e){let{t}=a(s);return(0,d.jsx)(c,{...e,children:t(`story.legend_long`)})}},h=[`Default`,`LongText`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Legend {...args}>{t("story.legend_title")}</Legend>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Legend {...args}>{t("story.legend_long")}</Legend>;
  }
}`,...m.parameters?.docs?.source}}}}));g();export{p as Default,m as LongText,h as __namedExportsOrder,f as default,g as n,u as t};