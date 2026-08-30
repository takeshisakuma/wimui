"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{ir as c,t as l}from"./src-CV0le6yM.js";import{a as u}from"./FieldTemplate-kSGTv8Wb.js";var d=e({Amex:()=>g,Default:()=>m,Visa:()=>h,__namedExportsOrder:()=>_,default:()=>p}),f,p,m,h,g,_,v=t((()=>{n(),o(),i(),l(),f=a(),p={title:`Components/Basic Inputs/CreditCardInput`,component:c,parameters:{layout:`centered`},argTypes:{asChild:{control:`boolean`}}},m={render:function(e){let{t}=r(s);return(0,f.jsx)(u,{label:t(`story.credit_card_label`),children:(0,f.jsx)(c,{...e,placeholder:t(`story.credit_card_placeholder`)})})}},h={render:e=>{let{t}=r(s);return(0,f.jsx)(u,{label:t(`story.credit_card_visa_label`),children:(0,f.jsx)(c,{...e})})},args:{defaultValue:`4111111111111111`}},g={render:e=>{let{t}=r(s);return(0,f.jsx)(u,{label:t(`story.credit_card_amex_label`),children:(0,f.jsx)(c,{...e})})},args:{defaultValue:`341234567890123`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Visa`,`Amex`]}));v();export{g as Amex,m as Default,h as Visa,_ as __namedExportsOrder,p as default,v as n,d as t};