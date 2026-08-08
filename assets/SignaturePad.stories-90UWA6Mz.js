"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{cr as c,sr as l,t as u}from"./src-BE5jBQ9L.js";import{a as d}from"./FieldTemplate-C0nkiaIz.js";var f=e({CustomColors:()=>g,Default:()=>h,Disabled:()=>_,Large:()=>v,__namedExportsOrder:()=>y,default:()=>m}),p,m,h,g,_,v,y,b=t((()=>{n(),c(),o(),i(),u(),p=a(),m={title:`Components/Advanced Inputs/SignaturePad`,component:l,parameters:{layout:`centered`}},h={render:function(e){let{t}=r(s);return(0,p.jsx)(d,{label:t(`story.signaturepad_default`),children:(0,p.jsx)(l,{...e})})},args:{width:400,height:200}},g={render:function(e){let{t}=r(s);return(0,p.jsx)(d,{label:t(`story.signaturepad_colors`),children:(0,p.jsx)(l,{...e})})},args:{penColor:`#ff4d4f`,penWidth:4,width:400,height:200}},_={render:function(e){let{t}=r(s);return(0,p.jsx)(d,{label:t(`story.signaturepad_disabled`),children:(0,p.jsx)(l,{...e,disabled:!0})})},args:{width:400,height:200}},v={render:function(e){let{t}=r(s);return(0,p.jsx)(d,{label:t(`story.signaturepad_large`),children:(0,p.jsx)(l,{...e})})},args:{width:600,height:300}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.signaturepad_default")}>
        <SignaturePad {...args} />
      </Label>;
  },
  args: {
    width: 400,
    height: 200
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.signaturepad_colors")}>
        <SignaturePad {...args} />
      </Label>;
  },
  args: {
    penColor: "#ff4d4f",
    penWidth: 4,
    width: 400,
    height: 200
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.signaturepad_disabled")}>
        <SignaturePad {...args} disabled={true} />
      </Label>;
  },
  args: {
    width: 400,
    height: 200
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.signaturepad_large")}>
        <SignaturePad {...args} />
      </Label>;
  },
  args: {
    width: 600,
    height: 300
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`CustomColors`,`Disabled`,`Large`]}));b();export{g as CustomColors,h as Default,_ as Disabled,v as Large,y as __namedExportsOrder,m as default,b as n,f as t};