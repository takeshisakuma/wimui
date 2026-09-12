"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,Sr as i,Tr as a,ur as o,xr as s}from"./iframe-CIRVVv_5.js";import{t as c}from"./src-C35woejG.js";import{t as l}from"./IconButton-hXqfoxQV.js";var u=e({Close:()=>m,Default:()=>p,__namedExportsOrder:()=>h,default:()=>f}),d,f,p,m,h,g=t((()=>{n(),r(),i(),c(),d=o(),f={title:`Components/Buttons/IconButton`,component:l,tags:[],argTypes:{disabled:{control:`boolean`},variant:{control:`select`,options:[`solid`,`outline`,`ghost`]}}},p={render:function(e){let{t}=a(s);return(0,d.jsx)(l,{...e,iconName:`SearchIcon`,"aria-label":t(`story.iconbutton_search`)})}},m={render:function(e){let{t}=a(s);return(0,d.jsx)(l,{...e,iconName:`CloseIcon`,"aria-label":t(`story.iconbutton_close`)})},args:{variant:`ghost`}},h=[`Default`,`Close`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <IconButton {...args} iconName="SearchIcon" aria-label={t("story.iconbutton_search")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <IconButton {...args} iconName="CloseIcon" aria-label={t("story.iconbutton_close")} />;
  },
  args: {
    variant: "ghost"
  }
}`,...m.parameters?.docs?.source}}}}));g();export{m as Close,p as Default,h as __namedExportsOrder,f as default,g as n,u as t};