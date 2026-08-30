"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{Sn as c,bn as l,t as u,yn as d}from"./src-CV0le6yM.js";import{t as f}from"./Button-vRcm9ObM.js";var p=e({Danger:()=>C,Default:()=>v,Info:()=>b,Interactive:()=>T,LongContent:()=>S,Success:()=>y,Warning:()=>x,__namedExportsOrder:()=>E,default:()=>_}),m,h,g,_,v,y,b,x,S,C,w,T,E,D=t((()=>{n(),o(),i(),u(),m=a(),h=()=>typeof window<`u`&&!!window.__VRT__,g=()=>h()?{duration:0}:{},_={title:`Components/Alerts & Notifications/Toast`,component:d,tags:[`!autodocs`],args:{...g()},argTypes:{intent:{control:`select`,options:[`default`,`info`,`success`,`warning`,`danger`]}}},v={render:function(e){let{t}=r(s);return(0,m.jsx)(d,{...e,title:e.title||t(`story.toast_system_notif`),description:e.description||t(`story.toast_update_desc`)})},args:{intent:`default`}},y={render:function(e){let{t}=r(s);return(0,m.jsx)(d,{...e,title:e.title||t(`story.toast_success_title`),description:e.description||t(`story.toast_success_desc`)})},args:{intent:`success`}},b={render:function(e){let{t}=r(s);return(0,m.jsx)(d,{...e,title:e.title||t(`story.toast_update_title`),description:e.description||t(`story.toast_update_desc`)})},args:{intent:`info`}},x={render:function(e){let{t}=r(s);return(0,m.jsx)(d,{...e,title:e.title||t(`story.toast_connection_title`),description:e.description||t(`story.toast_connection_desc`)})},args:{intent:`warning`}},S={render:function(e){let{t}=r(s);return(0,m.jsx)(`div`,{style:{maxWidth:`420px`},children:(0,m.jsx)(d,{...e,title:e.title||t(`story.toast_long_title`),description:e.description||t(`story.toast_long_desc`)})})},args:{intent:`warning`}},C={render:function(e){let{t}=r(s);return(0,m.jsx)(d,{...e,title:e.title||t(`story.toast_upload_failed_title`),description:e.description||t(`story.toast_upload_failed_desc`)})},args:{intent:`danger`}},w=()=>{let{show:e}=c(),{t}=r(s);return(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,m.jsx)(f,{variant:`solid`,onClick:()=>e({title:t(`story.toast_success_title`),description:t(`story.toast_success_desc`),intent:`success`}),children:t(`story.toast_show_success`)}),(0,m.jsx)(f,{variant:`outline`,onClick:()=>e({title:t(`story.notification_error_title`),description:t(`story.notification_error_desc`),intent:`danger`}),children:t(`story.toast_show_error`)}),(0,m.jsx)(f,{variant:`ghost`,onClick:()=>e({title:t(`story.toast_system_notif`),description:t(`story.toast_5s_desc`),intent:`info`,duration:5e3}),children:t(`story.toast_show_5s`)})]})},T={render:()=>(0,m.jsx)(l,{position:`bottom-right`,children:(0,m.jsx)(w,{})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_system_notif")} description={args.description || t("story.toast_update_desc")} />;
  },
  args: {
    intent: "default"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_success_title")} description={args.description || t("story.toast_success_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_update_title")} description={args.description || t("story.toast_update_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_connection_title")} description={args.description || t("story.toast_connection_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      maxWidth: "420px"
    }}>
        <Toast {...args} title={args.title || t("story.toast_long_title")} description={args.description || t("story.toast_long_desc")} />
      </div>;
  },
  args: {
    intent: "warning"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_upload_failed_title")} description={args.description || t("story.toast_upload_failed_desc")} />;
  },
  args: {
    intent: "danger"
  }
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="bottom-right">
      <ToastTrigger />
    </ToastProvider>
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Success`,`Info`,`Warning`,`LongContent`,`Danger`,`Interactive`]}));D();export{C as Danger,v as Default,b as Info,T as Interactive,S as LongContent,y as Success,x as Warning,E as __namedExportsOrder,_ as default,D as n,p as t};