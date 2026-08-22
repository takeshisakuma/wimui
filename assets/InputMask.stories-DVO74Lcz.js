"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{Ir as c,t as l}from"./src-Ssuy8lr7.js";import{a as u}from"./FieldTemplate-D3hWbscu.js";var d=e({CreditCard:()=>g,CustomMask:()=>_,Phone:()=>h,ZipCode:()=>m,__namedExportsOrder:()=>v,default:()=>p}),f,p,m,h,g,_,v,y=t((()=>{n(),o(),i(),l(),f=a(),p={title:`Components/Basic Inputs/InputMask`,component:c,args:{disabled:!1},argTypes:{disabled:{control:`boolean`},mask:{control:`text`,description:`Mask pattern ('9': number, 'a': letter, '*': alphanumeric)`},maskChar:{control:`text`,description:`Placeholder character for unentered parts`}}},m={render:function(e){let{t}=r(s);return(0,f.jsx)(u,{label:t(`story.inputmask_zip`),children:(0,f.jsx)(c,{...e})})},args:{mask:`999-9999`,placeholder:`000-0000`}},h={render:function(e){let{t}=r(s);return(0,f.jsx)(u,{label:t(`story.inputmask_phone`),children:(0,f.jsx)(c,{...e})})},args:{mask:`(99) 9999-9999`,placeholder:`(03) 1234-5678`}},g={render:function(e){let{t}=r(s);return(0,f.jsx)(u,{label:t(`story.inputmask_credit`),children:(0,f.jsx)(c,{...e})})},args:{mask:`9999-9999-9999-9999`,placeholder:`0000-0000-0000-0000`}},_={render:function(e){let{t}=r(s);return(0,f.jsx)(u,{label:t(`story.inputmask_custom`),children:(0,f.jsx)(c,{...e})})},args:{mask:`aaaa-9999-*`,placeholder:`ABCD-1234-X`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`ZipCode`,`Phone`,`CreditCard`,`CustomMask`]}));y();export{g as CreditCard,_ as CustomMask,h as Phone,m as ZipCode,v as __namedExportsOrder,p as default,y as n,d as t};