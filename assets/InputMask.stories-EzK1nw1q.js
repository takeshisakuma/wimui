"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Label-BlSd2eBr.js";import{n as u,t as d}from"./InputMask-BU5N5dFI.js";var f=t({CreditCard:()=>_,CustomMask:()=>v,Ghost:()=>y,Phone:()=>g,ZipCode:()=>h,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),i(),a(),u(),c(),p=s(),m={title:`Components/Basic Inputs/InputMask`,component:d,args:{disabled:!1},argTypes:{disabled:{control:`boolean`},mask:{control:`text`,description:`Mask pattern ('9': number, 'a': letter, '*': alphanumeric)`},maskChar:{control:`text`,description:`Placeholder character for unentered parts`}}},h={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.inputmask_zip`),children:(0,p.jsx)(d,{...e})})},args:{mask:`999-9999`,placeholder:`000-0000`}},g={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.inputmask_phone`),children:(0,p.jsx)(d,{...e})})},args:{mask:`(99) 9999-9999`,placeholder:`(03) 1234-5678`}},_={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.inputmask_credit`),children:(0,p.jsx)(d,{...e})})},args:{mask:`9999-9999-9999-9999`,placeholder:`0000-0000-0000-0000`}},v={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.inputmask_custom`),children:(0,p.jsx)(d,{...e})})},args:{mask:`aaaa-9999-*`,placeholder:`ABCD-1234-X`}},y={...h,args:{...h.args,variant:`ghost`}},b=[`ZipCode`,`Phone`,`CreditCard`,`CustomMask`,`Ghost`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.inputmask_zip")}>
        <InputMask {...args} />
      </Label>;
  },
  args: {
    mask: "999-9999",
    placeholder: "000-0000"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.inputmask_phone")}>
        <InputMask {...args} />
      </Label>;
  },
  args: {
    mask: "(99) 9999-9999",
    placeholder: "(03) 1234-5678"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.inputmask_credit")}>
        <InputMask {...args} />
      </Label>;
  },
  args: {
    mask: "9999-9999-9999-9999",
    placeholder: "0000-0000-0000-0000"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.inputmask_custom")}>
        <InputMask {...args} />
      </Label>;
  },
  args: {
    mask: "aaaa-9999-*",
    placeholder: "ABCD-1234-X"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...ZipCode,
  args: {
    ...ZipCode.args,
    variant: "ghost"
  }
}`,...y.parameters?.docs?.source}}}})))()}export{g as a,f as i,v as n,h as o,y as r,x as s,_ as t};