"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,Sr as r,Tr as i,ur as a,xr as o}from"./iframe-DkmqI5Zh.js";import{cr as s,t as c}from"./src-BWkk1A6b.js";var l=e({Default:()=>f,Large:()=>m,Small:()=>p,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h,g=t((()=>{n(),r(),c(),u=a(),d={title:`Components/Buttons/CopyButton`,component:s,tags:[],argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},f={render:e=>{let{t}=i(o);return(0,u.jsx)(s,{...e,value:t(`story.copybutton_value`)})}},p={args:{value:`Small CopyButton`,size:`sm`}},m={args:{value:`Large CopyButton`,size:`lg`}},h=[`Default`,`Small`,`Large`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <CopyButton {...args} value={t("story.copybutton_value")} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    // Copyable value naming the variant, kept verbatim. i18n-ignore-next-line
    value: "Small CopyButton",
    size: "sm"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    // Copyable value naming the variant, kept verbatim. i18n-ignore-next-line
    value: "Large CopyButton",
    size: "lg"
  }
}`,...m.parameters?.docs?.source}}}}));g();export{f as Default,m as Large,p as Small,h as __namedExportsOrder,d as default,g as n,l as t};