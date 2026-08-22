"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{Vn as c,t as l}from"./src-Ssuy8lr7.js";var u=e({Danger:()=>_,Default:()=>p,Info:()=>m,LongContent:()=>b,Success:()=>h,Warning:()=>g,WithCloseButton:()=>y,WithoutTitle:()=>v,__namedExportsOrder:()=>x,default:()=>f}),d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{n(),o(),i(),l(),d=a(),f={title:`Components/Alerts & Notifications/Alert`,component:c,tags:[],argTypes:{onClose:{action:`closed`},intent:{control:`select`,options:[`default`,`info`,`success`,`warning`,`danger`]}}},p={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,title:e.title||t(`story.alert_update_title`),description:e.description||t(`story.alert_update_desc`)})},args:{intent:`default`}},m={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,title:e.title||t(`story.alert_info_title`),description:e.description||t(`story.alert_info_desc`)})},args:{intent:`info`}},h={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,title:e.title||t(`story.alert_success_title`),description:e.description||t(`story.alert_success_desc`)})},args:{intent:`success`}},g={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,title:e.title||t(`story.alert_warning_title`),description:e.description||t(`story.alert_warning_desc`)})},args:{intent:`warning`}},_={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,title:e.title||t(`story.alert_error_title`),description:e.description||t(`story.alert_error_desc`)})},args:{intent:`danger`}},v={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,description:e.description||t(`story.alert_no_title_desc`)})},args:{intent:`info`}},y={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,title:e.title||t(`story.alert_dismiss_title`),description:e.description||t(`story.alert_dismiss_desc`),onClose:e.onClose??(()=>console.log(`Alert closed`))})},args:{intent:`success`}},b={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,title:e.title||t(`story.alert_update_title`),description:e.description||t(`story.alert_update_desc`),onClose:e.onClose??(()=>{})})},args:{intent:`info`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_update_title")} description={args.description || t("story.alert_update_desc")} />;
  },
  args: {
    intent: "default"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_info_title")} description={args.description || t("story.alert_info_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_success_title")} description={args.description || t("story.alert_success_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_warning_title")} description={args.description || t("story.alert_warning_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_error_title")} description={args.description || t("story.alert_error_desc")} />;
  },
  args: {
    intent: "danger"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} description={args.description || t("story.alert_no_title_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_dismiss_title")} description={args.description || t("story.alert_dismiss_desc")} onClose={args.onClose ?? (() => console.log("Alert closed"))} />;
  },
  args: {
    intent: "success"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Alert {...args} title={args.title || t("story.alert_update_title")} description={args.description || t("story.alert_update_desc")} onClose={args.onClose ?? (() => {})} />;
  },
  args: {
    intent: "info"
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Info`,`Success`,`Warning`,`Danger`,`WithoutTitle`,`WithCloseButton`,`LongContent`]}));S();export{_ as Danger,p as Default,m as Info,b as LongContent,h as Success,g as Warning,y as WithCloseButton,v as WithoutTitle,x as __namedExportsOrder,f as default,S as n,u as t};