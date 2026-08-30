"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{t as c}from"./src-CV0le6yM.js";import{t as l}from"./FieldTemplate-kSGTv8Wb.js";import{t as u}from"./Input-D7MtBloK.js";var d=e({Default:()=>m,Horizontal:()=>h,NoLabel:()=>_,WithError:()=>g,__namedExportsOrder:()=>v,default:()=>p}),f,p,m,h,g,_,v,y=t((()=>{n(),o(),i(),c(),f=a(),p={title:`Components/Form Layout/FieldTemplate`,component:l},m={render:function(e){let{t}=r(s);return(0,f.jsx)(l,{...e,label:e.label||t(`doc.ft_email_label`),children:(0,f.jsx)(u,{placeholder:`example@example.com`,fullWidth:!0})})},args:{required:!0}},h={render:function(e){let{t}=r(s);return(0,f.jsx)(l,{...e,label:t(`doc.ft_email_label`),layout:`horizontal`,children:(0,f.jsx)(u,{placeholder:`example@example.com`,fullWidth:!0})})},args:{...m.args}},g={render:function(e){let{t}=r(s);return(0,f.jsx)(l,{...e,label:t(`doc.ft_email_label`),error:t(`doc.ft_email_error`),children:(0,f.jsx)(u,{placeholder:`example@example.com`,fullWidth:!0})})},args:{...m.args}},_={render:function(e){let{t}=r(s);return(0,f.jsx)(l,{...e,children:(0,f.jsx)(u,{placeholder:t(`doc.ft_no_label`),fullWidth:!0})})},args:{}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldTemplate {...args} label={args.label || t("doc.ft_email_label")}>
        <Input placeholder="example@example.com" fullWidth />
      </FieldTemplate>;
  },
  args: {
    required: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldTemplate {...args} label={t("doc.ft_email_label")} layout="horizontal">
        <Input placeholder="example@example.com" fullWidth />
      </FieldTemplate>;
  },
  args: {
    ...Default.args
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldTemplate {...args} label={t("doc.ft_email_label")} error={t("doc.ft_email_error")}>
        <Input placeholder="example@example.com" fullWidth />
      </FieldTemplate>;
  },
  args: {
    ...Default.args
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldTemplate {...args}>
        <Input placeholder={t("doc.ft_no_label")} fullWidth />
      </FieldTemplate>;
  },
  args: {}
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Horizontal`,`WithError`,`NoLabel`]}));y();export{m as Default,h as Horizontal,_ as NoLabel,g as WithError,v as __namedExportsOrder,p as default,y as n,d as t};