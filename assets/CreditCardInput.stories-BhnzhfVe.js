"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Label-BlSd2eBr.js";import{n as u,t as d}from"./CreditCardInput-szE2LgrL.js";var f=t({Amex:()=>_,Default:()=>h,Ghost:()=>v,Visa:()=>g,__namedExportsOrder:()=>y,default:()=>m}),p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),a(),c(),u(),p=s(),m={title:`Components/Basic Inputs/CreditCardInput`,component:d,parameters:{layout:`centered`},argTypes:{asChild:{control:`boolean`}}},h={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.credit_card_label`),children:(0,p.jsx)(d,{...e,placeholder:t(`story.credit_card_placeholder`)})})}},g={render:e=>{let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.credit_card_visa_label`),children:(0,p.jsx)(d,{...e})})},args:{defaultValue:`4111111111111111`}},_={render:e=>{let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.credit_card_amex_label`),children:(0,p.jsx)(d,{...e})})},args:{defaultValue:`341234567890123`}},v={...h,args:{...h.args,variant:`ghost`}},y=[`Default`,`Visa`,`Amex`,`Ghost`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.credit_card_label")}>
        <CreditCardInput {...args} placeholder={t("story.credit_card_placeholder")} />
      </Label>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    variant: "ghost"
  }
}`,...v.parameters?.docs?.source}}}})))()}export{b as a,g as i,f as n,v as r,_ as t};