"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./FieldTemplate-DBjmPvZ6.js";import{n as u,t as d}from"./Input-Cx7cDmF1.js";var f=t({Default:()=>h,Horizontal:()=>g,NoLabel:()=>v,WithError:()=>_,__namedExportsOrder:()=>y,default:()=>m}),p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),a(),c(),u(),p=s(),m={title:`Components/Form Layout/FieldTemplate`,component:l},h={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{...e,label:e.label||t(`doc.ft_email_label`),children:(0,p.jsx)(d,{placeholder:`example@example.com`,fullWidth:!0})})},args:{required:!0}},g={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{...e,label:t(`doc.ft_email_label`),layout:`horizontal`,children:(0,p.jsx)(d,{placeholder:`example@example.com`,fullWidth:!0})})},args:{...h.args}},_={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{...e,label:t(`doc.ft_email_label`),error:t(`doc.ft_email_error`),children:(0,p.jsx)(d,{placeholder:`example@example.com`,fullWidth:!0})})},args:{...h.args}},v={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{...e,children:(0,p.jsx)(d,{placeholder:t(`doc.ft_no_label`),fullWidth:!0})})},args:{}},y=[`Default`,`Horizontal`,`WithError`,`NoLabel`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldTemplate {...args}>
        <Input placeholder={t("doc.ft_no_label")} fullWidth />
      </FieldTemplate>;
  },
  args: {}
}`,...v.parameters?.docs?.source}}}})))()}export{_ as a,v as i,f as n,b as o,g as r,h as t};