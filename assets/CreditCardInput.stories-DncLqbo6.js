"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,Sr as i,Tr as a,ur as o,xr as s}from"./iframe-wf1-Tomv.js";import{ir as c,t as l}from"./src--JUR9phw.js";import{a as u}from"./FieldTemplate-BlJuZxyc.js";var d=e({Amex:()=>g,Default:()=>m,Visa:()=>h,__namedExportsOrder:()=>_,default:()=>p}),f,p,m,h,g,_,v=t((()=>{n(),r(),i(),l(),f=o(),p={title:`Components/Basic Inputs/CreditCardInput`,component:c,parameters:{layout:`centered`},argTypes:{asChild:{control:`boolean`}}},m={render:function(e){let{t}=a(s);return(0,f.jsx)(u,{label:t(`story.credit_card_label`),children:(0,f.jsx)(c,{...e,placeholder:t(`story.credit_card_placeholder`)})})}},h={render:e=>{let{t}=a(s);return(0,f.jsx)(u,{label:t(`story.credit_card_visa_label`),children:(0,f.jsx)(c,{...e})})},args:{defaultValue:`4111111111111111`}},g={render:e=>{let{t}=a(s);return(0,f.jsx)(u,{label:t(`story.credit_card_amex_label`),children:(0,f.jsx)(c,{...e})})},args:{defaultValue:`341234567890123`}},_=[`Default`,`Visa`,`Amex`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.credit_card_label")}>
        <CreditCardInput {...args} placeholder={t("story.credit_card_placeholder")} />
      </Label>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.credit_card_visa_label")}>
        <CreditCardInput {...args} />
      </Label>;
  },
  args: {
    defaultValue: "4111111111111111"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.credit_card_amex_label")}>
        <CreditCardInput {...args} />
      </Label>;
  },
  args: {
    defaultValue: "341234567890123"
  }
}`,...g.parameters?.docs?.source}}}}));v();export{g as Amex,m as Default,h as Visa,_ as __namedExportsOrder,p as default,v as n,d as t};