"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,Sr as r,Tr as i,ur as a,xr as o}from"./iframe-DkmqI5Zh.js";import{t as s}from"./src-BWkk1A6b.js";import{a as c}from"./FieldTemplate-ClN0dApN.js";import{t as l}from"./Input-BAtbItuW.js";var u=e({Default:()=>p,Optional:()=>h,Required:()=>m,__namedExportsOrder:()=>g,default:()=>f}),d,f,p,m,h,g,_=t((()=>{n(),r(),s(),d=a(),f={title:`Components/Form Layout/Label`,component:c,parameters:{layout:`centered`},decorators:[e=>(0,d.jsx)(`div`,{style:{maxWidth:`90vw`,width:`100%`,boxSizing:`border-box`},children:(0,d.jsx)(e,{})})]},p={args:{label:`Username`,children:(0,d.jsx)(l,{placeholder:`johndoe`})}},m={args:{required:!0,children:(0,d.jsx)(l,{type:`email`,placeholder:`email@example.com`})},render:function(e){let{t}=i(o);return(0,d.jsx)(c,{...e,label:t(`story.label_email_address`)})}},h={args:{showOptional:!0,children:(0,d.jsx)(l,{type:`tel`,placeholder:`000-0000-0000`})},render:function(e){let{t}=i(o);return(0,d.jsx)(c,{...e,label:t(`story.label_phone_number`)})}},g=[`Default`,`Required`,`Optional`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    children: <Input placeholder="johndoe" />
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    children: <Input type="email" placeholder="email@example.com" />
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label {...args} label={t("story.label_email_address")} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    showOptional: true,
    children: <Input type="tel" placeholder="000-0000-0000" />
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label {...args} label={t("story.label_phone_number")} />;
  }
}`,...h.parameters?.docs?.source}}}}));_();export{p as Default,h as Optional,m as Required,g as __namedExportsOrder,f as default,_ as n,u as t};