"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{Gr as c,t as l}from"./src-Ssuy8lr7.js";var u=e({AcceptImages:()=>h,CustomIcon:()=>y,Default:()=>p,Disabled:()=>g,Large:()=>v,Multiple:()=>m,Small:()=>_,VideoUpload:()=>b,__namedExportsOrder:()=>x,default:()=>f}),d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{n(),o(),i(),l(),d=a(),f={title:`Components/Advanced Inputs/Dropzone`,component:c,parameters:{layout:`centered`},argTypes:{onChange:{action:`changed`}}},p={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,label:t(`story.dropzone_label_file`),description:t(`story.dropzone_default_desc`)})}},m={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,label:t(`story.dropzone_label_multi`),multiple:!0,description:t(`story.dropzone_desc_multi`)})}},h={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,label:t(`story.dropzone_label_image_only`),accept:`image/*`,iconName:`ImageIcon`,description:t(`story.dropzone_desc_image`)})}},g={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,label:t(`story.dropzone_label_disabled`),disabled:!0,description:t(`story.dropzone_desc_disabled`)})}},_={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,size:`sm`,label:t(`story.dropzone_label_file`),description:t(`story.dropzone_default_desc`)})}},v={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,size:`lg`,label:t(`story.dropzone_label_file`),description:t(`story.dropzone_default_desc`)})}},y={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,label:t(`story.dropzone_label_pdf`),iconName:`PdfIcon`,accept:`.pdf`,description:t(`story.dropzone_desc_pdf`)})}},b={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,label:t(`story.dropzone_label_video`),iconName:`VideoIcon`,accept:`video/*`,description:t(`story.dropzone_desc_video`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story.dropzone_label_file")} description={t("story.dropzone_default_desc")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story.dropzone_label_multi")} multiple={true} description={t("story.dropzone_desc_multi")} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story.dropzone_label_image_only")} accept="image/*" iconName="ImageIcon" description={t("story.dropzone_desc_image")} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story.dropzone_label_disabled")} disabled={true} description={t("story.dropzone_desc_disabled")} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} size="sm" label={t("story.dropzone_label_file")} description={t("story.dropzone_default_desc")} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} size="lg" label={t("story.dropzone_label_file")} description={t("story.dropzone_default_desc")} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story.dropzone_label_pdf")} iconName="PdfIcon" accept=".pdf" description={t("story.dropzone_desc_pdf")} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Dropzone {...args} label={t("story.dropzone_label_video")} iconName="VideoIcon" accept="video/*" description={t("story.dropzone_desc_video")} />;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Multiple`,`AcceptImages`,`Disabled`,`Small`,`Large`,`CustomIcon`,`VideoUpload`]}));S();export{h as AcceptImages,y as CustomIcon,p as Default,g as Disabled,v as Large,m as Multiple,_ as Small,b as VideoUpload,x as __namedExportsOrder,f as default,S as n,u as t};