"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c}from"./src-BE5jBQ9L.js";import{t as l}from"./IconButton-tz9NaSVb.js";var u=e({Close:()=>m,Default:()=>p,__namedExportsOrder:()=>h,default:()=>f}),d,f,p,m,h,g=t((()=>{n(),o(),i(),c(),d=a(),f={title:`Components/Buttons/IconButton`,component:l,tags:[],argTypes:{disabled:{control:`boolean`},variant:{control:`select`,options:[`solid`,`outline`,`ghost`]}}},p={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,iconName:`SearchIcon`,"aria-label":t(`story.iconbutton_search`)})}},m={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,iconName:`CloseIcon`,"aria-label":t(`story.iconbutton_close`)})},args:{variant:`ghost`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Close`]}));g();export{m as Close,p as Default,h as __namedExportsOrder,f as default,g as n,u as t};