"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-DrO46Brn.js";import{n as u,t as d}from"./Banner-DpBuKTfF.js";var f=t({Danger:()=>y,Default:()=>h,DescriptionOnly:()=>S,Info:()=>g,LongContent:()=>C,NoIcon:()=>w,Success:()=>_,Warning:()=>v,WithAction:()=>b,WithCloseAndAction:()=>x,__namedExportsOrder:()=>T,default:()=>m}),p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{n(),i(),a(),u(),c(),p=s(),m={title:`Components/Alerts & Notifications/Banner`,component:d,tags:[],argTypes:{onClose:{action:`closed`},icon:{control:`boolean`},intent:{control:`select`,options:[`default`,`info`,`success`,`warning`,`danger`]}},parameters:{layout:`fullscreen`}},h={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,title:e.title||t(`story.banner_cookie_title`),description:e.description||t(`story.banner_cookie_desc`)})},args:{intent:`default`}},g={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,title:e.title||t(`story.banner_update_title`),description:e.description||t(`story.banner_update_desc`)})},args:{intent:`info`}},_={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,title:e.title||t(`story.alert_success_title`),description:e.description||t(`story.banner_update_desc`)})},args:{intent:`success`}},v={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,title:e.title||t(`story.banner_maint_title`),description:e.description||t(`story.banner_maint_desc`)})},args:{intent:`warning`}},y={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,title:e.title||t(`story.banner_conn_error_title`),description:e.description||t(`story.banner_conn_error_desc`),onClose:e.onClose??(()=>{})})},args:{intent:`danger`}},b={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,title:e.title||t(`story.banner_cookie_title`),description:e.description||t(`story.banner_cookie_desc`),extra:(0,p.jsx)(l,{size:`sm`,variant:`outline`,children:t(`story.banner_btn_accept`)})})},args:{intent:`info`}},x={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,title:e.title||t(`story.banner_trial_title`),description:e.description||t(`story.banner_trial_desc`),extra:(0,p.jsx)(l,{size:`sm`,variant:`solid`,children:t(`story.banner_btn_upgrade`)}),onClose:e.onClose??(()=>{})})},args:{intent:`warning`}},S={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,description:e.description||t(`story.banner_no_title_desc`)})},args:{intent:`info`}},C={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,title:e.title||t(`story.banner_maint_title`),description:e.description||t(`story.banner_long_desc`)})},args:{intent:`warning`}},w={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,title:e.title||t(`story.banner_simple_title`),description:e.description||t(`story.banner_simple_desc`),icon:!1})},args:{intent:`info`}},T=[`Default`,`Info`,`Success`,`Warning`,`Danger`,`WithAction`,`WithCloseAndAction`,`DescriptionOnly`,`LongContent`,`NoIcon`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_cookie_title")} description={args.description || t("story.banner_cookie_desc")} />;
  },
  args: {
    intent: "default"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_update_title")} description={args.description || t("story.banner_update_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.alert_success_title")} description={args.description || t("story.banner_update_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_maint_title")} description={args.description || t("story.banner_maint_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_conn_error_title")} description={args.description || t("story.banner_conn_error_desc")} onClose={args.onClose ?? (() => {})} />;
  },
  args: {
    intent: "danger"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_cookie_title")} description={args.description || t("story.banner_cookie_desc")} extra={<Button size="sm" variant="outline">{t("story.banner_btn_accept")}</Button>} />;
  },
  args: {
    intent: "info"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_trial_title")} description={args.description || t("story.banner_trial_desc")} extra={<Button size="sm" variant="solid">{t("story.banner_btn_upgrade")}</Button>} onClose={args.onClose ?? (() => {})} />;
  },
  args: {
    intent: "warning"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} description={args.description || t("story.banner_no_title_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_maint_title")} description={args.description || t("story.banner_long_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_simple_title")} description={args.description || t("story.banner_simple_desc")} icon={false} />;
  },
  args: {
    intent: "info"
  }
}`,...w.parameters?.docs?.source}}}})))()}export{E as n,f as t};