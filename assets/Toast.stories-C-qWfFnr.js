"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-DrO46Brn.js";import{i as u,n as d,r as f,t as p}from"./Toast-C598dD3u.js";var m=t({Danger:()=>w,Default:()=>y,Info:()=>x,Interactive:()=>E,LongContent:()=>C,Success:()=>b,Warning:()=>S,__namedExportsOrder:()=>D,default:()=>v}),h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),i(),a(),c(),f(),h=s(),g=()=>typeof window<`u`&&!!window.__VRT__,_=()=>g()?{duration:0}:{},v={title:`Components/Alerts & Notifications/Toast`,component:p,tags:[`!autodocs`],args:{..._()},argTypes:{intent:{control:`select`,options:[`default`,`info`,`success`,`warning`,`danger`]}}},y={render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,title:e.title||t(`story.toast_system_notif`),description:e.description||t(`story.toast_update_desc`)})},args:{intent:`default`}},b={render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,title:e.title||t(`story.toast_success_title`),description:e.description||t(`story.toast_success_desc`)})},args:{intent:`success`}},x={render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,title:e.title||t(`story.toast_update_title`),description:e.description||t(`story.toast_update_desc`)})},args:{intent:`info`}},S={render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,title:e.title||t(`story.toast_connection_title`),description:e.description||t(`story.toast_connection_desc`)})},args:{intent:`warning`}},C={render:function(e){let{t}=r(o);return(0,h.jsx)(`div`,{style:{maxWidth:`420px`},children:(0,h.jsx)(p,{...e,title:e.title||t(`story.toast_long_title`),description:e.description||t(`story.toast_long_desc`)})})},args:{intent:`warning`}},w={render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,title:e.title||t(`story.toast_upload_failed_title`),description:e.description||t(`story.toast_upload_failed_desc`)})},args:{intent:`danger`}},T=()=>{let{show:e}=u(),{t}=r(o);return(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,h.jsx)(l,{variant:`solid`,onClick:()=>e({title:t(`story.toast_success_title`),description:t(`story.toast_success_desc`),intent:`success`}),children:t(`story.toast_show_success`)}),(0,h.jsx)(l,{variant:`outline`,onClick:()=>e({title:t(`story.notification_error_title`),description:t(`story.notification_error_desc`),intent:`danger`}),children:t(`story.toast_show_error`)}),(0,h.jsx)(l,{variant:`ghost`,onClick:()=>e({title:t(`story.toast_system_notif`),description:t(`story.toast_5s_desc`),intent:`info`,duration:5e3}),children:t(`story.toast_show_5s`)})]})},E={render:()=>(0,h.jsx)(d,{position:`bottom-right`,children:(0,h.jsx)(T,{})})},D=[`Default`,`Success`,`Info`,`Warning`,`LongContent`,`Danger`,`Interactive`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_system_notif")} description={args.description || t("story.toast_update_desc")} />;
  },
  args: {
    intent: "default"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_success_title")} description={args.description || t("story.toast_success_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_update_title")} description={args.description || t("story.toast_update_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_connection_title")} description={args.description || t("story.toast_connection_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_upload_failed_title")} description={args.description || t("story.toast_upload_failed_desc")} />;
  },
  args: {
    intent: "danger"
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="bottom-right">
      <ToastTrigger />
    </ToastProvider>
}`,...E.parameters?.docs?.source}}}})))()}export{O as a,S as i,b as n,m as r,w as t};