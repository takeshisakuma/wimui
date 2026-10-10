"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./FileUpload-VL4bDqL0.js";var u=t({AcceptImages:()=>g,Default:()=>p,Disabled:()=>_,Multiple:()=>h,Small:()=>m,WithIcon:()=>v,__namedExportsOrder:()=>y,default:()=>f}),d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Advanced Inputs/FileUpload`,component:l,parameters:{layout:`centered`},argTypes:{onChange:{action:`changed`},iconName:{control:`select`,options:[`UploadIcon`,`CheckIcon`,`CopyIcon`,`SearchIcon`]},iconPosition:{control:`radio`,options:[`left`,`right`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},p={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,label:t(`story.fileupload_label_profile`),buttonLabel:t(`story.fileupload_btn_image`),noFileLabel:t(`story.fileupload_no_file`)})}},m={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,label:t(`story.fileupload_label_profile`),buttonLabel:t(`story.fileupload_btn_image`),noFileLabel:t(`story.fileupload_no_file`)})},args:{size:`sm`}},h={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,label:t(`story.fileupload_label_doc`),buttonLabel:t(`story.fileupload_btn_file`),noFileLabel:t(`story.fileupload_no_file`),multiple:!0})}},g={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,label:t(`story.fileupload_label_image_only`),buttonLabel:t(`story.fileupload_btn_image`),noFileLabel:t(`story.fileupload_no_file`),accept:`image/*`,iconName:`ImageIcon`,size:`lg`})}},_={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,label:t(`story.fileupload_label_disabled`),buttonLabel:t(`story.fileupload_btn_file`),noFileLabel:t(`story.fileupload_no_file`),disabled:!0})}},v={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,label:t(`story.fileupload_label_icon`),buttonLabel:t(`story.fileupload_btn_upload`),noFileLabel:t(`story.fileupload_no_file`),iconName:`UploadIcon`,iconPosition:`left`,size:`lg`})}},y=[`Default`,`Small`,`Multiple`,`AcceptImages`,`Disabled`,`WithIcon`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_profile")} buttonLabel={t("story.fileupload_btn_image")} noFileLabel={t("story.fileupload_no_file")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_profile")} buttonLabel={t("story.fileupload_btn_image")} noFileLabel={t("story.fileupload_no_file")} />;
  },
  args: {
    size: "sm"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_doc")} buttonLabel={t("story.fileupload_btn_file")} noFileLabel={t("story.fileupload_no_file")} multiple={true} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_image_only")} buttonLabel={t("story.fileupload_btn_image")} noFileLabel={t("story.fileupload_no_file")} accept="image/*" iconName="ImageIcon" size="lg" />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_disabled")} buttonLabel={t("story.fileupload_btn_file")} noFileLabel={t("story.fileupload_no_file")} disabled={true} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_icon")} buttonLabel={t("story.fileupload_btn_upload")} noFileLabel={t("story.fileupload_no_file")} iconName="UploadIcon" iconPosition="left" size="lg" />;
  }
}`,...v.parameters?.docs?.source}}}})))()}export{h as a,b as c,u as i,p as n,m as o,_ as r,v as s,g as t};