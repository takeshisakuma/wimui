"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Dropzone-wxsdkWVm.js";var u=t({AcceptImages:()=>h,CustomIcon:()=>y,Default:()=>p,Disabled:()=>g,Large:()=>v,Multiple:()=>m,Small:()=>_,VideoUpload:()=>b,__namedExportsOrder:()=>x,default:()=>f}),d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Advanced Inputs/Dropzone`,component:l,parameters:{layout:`centered`},argTypes:{onChange:{action:`changed`}}},p={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,label:t(`story.dropzone_label_file`),description:t(`story.dropzone_default_desc`)})}},m={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,label:t(`story.dropzone_label_multi`),multiple:!0,description:t(`story.dropzone_desc_multi`)})}},h={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,label:t(`story.dropzone_label_image_only`),accept:`image/*`,iconName:`ImageIcon`,description:t(`story.dropzone_desc_image`)})}},g={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,label:t(`story.dropzone_label_disabled`),disabled:!0,description:t(`story.dropzone_desc_disabled`)})}},_={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,size:`sm`,label:t(`story.dropzone_label_file`),description:t(`story.dropzone_default_desc`)})}},v={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,size:`lg`,label:t(`story.dropzone_label_file`),description:t(`story.dropzone_default_desc`)})}},y={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,label:t(`story.dropzone_label_pdf`),iconName:`PdfIcon`,accept:`.pdf`,description:t(`story.dropzone_desc_pdf`)})}},b={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,label:t(`story.dropzone_label_video`),iconName:`VideoIcon`,accept:`video/*`,description:t(`story.dropzone_desc_video`)})}},x=[`Default`,`Multiple`,`AcceptImages`,`Disabled`,`Small`,`Large`,`CustomIcon`,`VideoUpload`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}})))()}export{v as a,S as c,u as i,p as n,m as o,g as r,_ as s,h as t};