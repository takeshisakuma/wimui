"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{Br as c,t as l}from"./src-BE5jBQ9L.js";var u=e({AcceptImages:()=>h,Default:()=>p,Disabled:()=>g,Multiple:()=>m,WithIcon:()=>_,__namedExportsOrder:()=>v,default:()=>f}),d,f,p,m,h,g,_,v,y=t((()=>{n(),o(),i(),l(),d=a(),f={title:`Components/Advanced Inputs/FileUpload`,component:c,parameters:{layout:`centered`},argTypes:{onChange:{action:`changed`},iconName:{control:`select`,options:[`UploadIcon`,`CheckIcon`,`CopyIcon`,`SearchIcon`]},iconPosition:{control:`radio`,options:[`left`,`right`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},p={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,label:t(`story.fileupload_label_profile`),buttonLabel:t(`story.fileupload_btn_image`),noFileLabel:t(`story.fileupload_no_file`)})}},m={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,label:t(`story.fileupload_label_doc`),buttonLabel:t(`story.fileupload_btn_file`),noFileLabel:t(`story.fileupload_no_file`),multiple:!0})}},h={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,label:t(`story.fileupload_label_image_only`),buttonLabel:t(`story.fileupload_btn_image`),noFileLabel:t(`story.fileupload_no_file`),accept:`image/*`,iconName:`ImageIcon`,size:`lg`})}},g={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,label:t(`story.fileupload_label_disabled`),buttonLabel:t(`story.fileupload_btn_file`),noFileLabel:t(`story.fileupload_no_file`),disabled:!0})}},_={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,label:t(`story.fileupload_label_icon`),buttonLabel:t(`story.fileupload_btn_upload`),noFileLabel:t(`story.fileupload_no_file`),iconName:`UploadIcon`,iconPosition:`left`,size:`lg`})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    return <FileUpload {...args} label={t("story.fileupload_label_doc")} buttonLabel={t("story.fileupload_btn_file")} noFileLabel={t("story.fileupload_no_file")} multiple={true} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_image_only")} buttonLabel={t("story.fileupload_btn_image")} noFileLabel={t("story.fileupload_no_file")} accept="image/*" iconName="ImageIcon" size="lg" />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_disabled")} buttonLabel={t("story.fileupload_btn_file")} noFileLabel={t("story.fileupload_no_file")} disabled={true} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FileUpload {...args} label={t("story.fileupload_label_icon")} buttonLabel={t("story.fileupload_btn_upload")} noFileLabel={t("story.fileupload_no_file")} iconName="UploadIcon" iconPosition="left" size="lg" />;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Multiple`,`AcceptImages`,`Disabled`,`WithIcon`]}));y();export{h as AcceptImages,p as Default,g as Disabled,m as Multiple,_ as WithIcon,v as __namedExportsOrder,f as default,y as n,u as t};