"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{fn as c,hn as l,pn as u,t as d}from"./src-BE5jBQ9L.js";import{t as f}from"./Button-d-SlSJ4S.js";var p=e({Danger:()=>x,Default:()=>g,Info:()=>v,Interactive:()=>C,LongContent:()=>b,Success:()=>_,Warning:()=>y,__namedExportsOrder:()=>w,default:()=>h}),m,h,g,_,v,y,b,x,S,C,w,T=t((()=>{n(),o(),i(),d(),m=a(),h={title:`Components/Alerts & Notifications/Toast`,component:c,tags:[`!autodocs`],argTypes:{intent:{control:`select`,options:[`default`,`info`,`success`,`warning`,`danger`]}}},g={render:function(e){let{t}=r(s);return(0,m.jsx)(c,{...e,title:e.title||t(`story.toast_system_notif`),description:e.description||t(`story.toast_update_desc`)})},args:{intent:`default`}},_={render:function(e){let{t}=r(s);return(0,m.jsx)(c,{...e,title:e.title||t(`story.toast_success_title`),description:e.description||t(`story.toast_success_desc`)})},args:{intent:`success`}},v={render:function(e){let{t}=r(s);return(0,m.jsx)(c,{...e,title:e.title||t(`story.toast_update_title`),description:e.description||t(`story.toast_update_desc`)})},args:{intent:`info`}},y={render:function(e){let{t}=r(s);return(0,m.jsx)(c,{...e,title:e.title||t(`story.toast_connection_title`),description:e.description||t(`story.toast_connection_desc`)})},args:{intent:`warning`}},b={render:function(e){let{t}=r(s);return(0,m.jsx)(`div`,{style:{maxWidth:`420px`},children:(0,m.jsx)(c,{...e,title:e.title||t(`story.toast_long_title`),description:e.description||t(`story.toast_long_desc`)})})},args:{intent:`warning`}},x={render:function(e){let{t}=r(s);return(0,m.jsx)(c,{...e,title:e.title||t(`story.toast_upload_failed_title`),description:e.description||t(`story.toast_upload_failed_desc`)})},args:{intent:`danger`}},S=()=>{let{show:e}=l(),{t}=r(s);return(0,m.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,m.jsx)(f,{variant:`solid`,onClick:()=>e({title:t(`story.toast_success_title`),description:t(`story.toast_success_desc`),intent:`success`}),children:t(`story.toast_show_success`)}),(0,m.jsx)(f,{variant:`outline`,onClick:()=>e({title:t(`story.notification_error_title`),description:t(`story.notification_error_desc`),intent:`danger`}),children:t(`story.toast_show_error`)}),(0,m.jsx)(f,{variant:`ghost`,onClick:()=>e({title:t(`story.toast_system_notif`),description:t(`story.toast_5s_desc`),intent:`info`,duration:5e3}),children:t(`story.toast_show_5s`)})]})},C={render:()=>(0,m.jsx)(u,{position:`bottom-right`,children:(0,m.jsx)(S,{})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_system_notif")} description={args.description || t("story.toast_update_desc")} />;
  },
  args: {
    intent: "default"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_success_title")} description={args.description || t("story.toast_success_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_update_title")} description={args.description || t("story.toast_update_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_connection_title")} description={args.description || t("story.toast_connection_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Toast {...args} title={args.title || t("story.toast_upload_failed_title")} description={args.description || t("story.toast_upload_failed_desc")} />;
  },
  args: {
    intent: "danger"
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <ToastProvider position="bottom-right">
      <ToastTrigger />
    </ToastProvider>
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Success`,`Info`,`Warning`,`LongContent`,`Danger`,`Interactive`]}));T();export{x as Danger,g as Default,v as Info,C as Interactive,b as LongContent,_ as Success,y as Warning,w as __namedExportsOrder,h as default,T as n,p as t};