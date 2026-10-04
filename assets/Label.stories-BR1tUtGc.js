"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Label-BlSd2eBr.js";import{n as l,t as u}from"./Input-Cx7cDmF1.js";var d=t({Default:()=>m,Optional:()=>g,Required:()=>h,__namedExportsOrder:()=>_,default:()=>p}),f,p,m,h,g,_;function v(){return(v=e((()=>{r(),i(),l(),s(),f=o(),p={title:`Components/Form Layout/Label`,component:c,parameters:{layout:`centered`},decorators:[e=>(0,f.jsx)(`div`,{style:{maxWidth:`90vw`,width:`100%`,boxSizing:`border-box`},children:(0,f.jsx)(e,{})})]},m={args:{label:`Username`,children:(0,f.jsx)(u,{placeholder:`johndoe`})}},h={args:{required:!0,children:(0,f.jsx)(u,{type:`email`,placeholder:`email@example.com`})},render:function(e){let{t}=n(a);return(0,f.jsx)(c,{...e,label:t(`story.label_email_address`)})}},g={args:{showOptional:!0,children:(0,f.jsx)(u,{type:`tel`,placeholder:`000-0000-0000`})},render:function(e){let{t}=n(a);return(0,f.jsx)(c,{...e,label:t(`story.label_phone_number`)})}},_=[`Default`,`Required`,`Optional`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    children: <Input placeholder="johndoe" />
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}export{v as a,h as i,d as n,g as r,m as t};