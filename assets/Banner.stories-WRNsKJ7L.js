"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{Rn as c,t as l}from"./src-BE5jBQ9L.js";import{t as u}from"./Button-d-SlSJ4S.js";var d=e({Danger:()=>v,Default:()=>m,DescriptionOnly:()=>x,Info:()=>h,NoIcon:()=>S,Success:()=>g,Warning:()=>_,WithAction:()=>y,WithCloseAndAction:()=>b,__namedExportsOrder:()=>C,default:()=>p}),f,p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{n(),o(),i(),l(),f=a(),p={title:`Components/Alerts & Notifications/Banner`,component:c,tags:[],argTypes:{onClose:{action:`closed`},icon:{control:`boolean`},intent:{control:`select`,options:[`default`,`info`,`success`,`warning`,`danger`]}},parameters:{layout:`fullscreen`}},m={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,title:e.title||t(`story.banner_cookie_title`),description:e.description||t(`story.banner_cookie_desc`)})},args:{intent:`default`}},h={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,title:e.title||t(`story.banner_update_title`),description:e.description||t(`story.banner_update_desc`)})},args:{intent:`info`}},g={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,title:e.title||t(`story.alert_success_title`),description:e.description||t(`story.banner_update_desc`)})},args:{intent:`success`}},_={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,title:e.title||t(`story.banner_maint_title`),description:e.description||t(`story.banner_maint_desc`)})},args:{intent:`warning`}},v={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,title:e.title||t(`story.banner_conn_error_title`),description:e.description||t(`story.banner_conn_error_desc`),onClose:e.onClose??(()=>{})})},args:{intent:`danger`}},y={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,title:e.title||t(`story.banner_cookie_title`),description:e.description||t(`story.banner_cookie_desc`),extra:(0,f.jsx)(u,{size:`sm`,variant:`outline`,children:t(`story.banner_btn_accept`)})})},args:{intent:`info`}},b={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,title:e.title||t(`story.banner_trial_title`),description:e.description||t(`story.banner_trial_desc`),extra:(0,f.jsx)(u,{size:`sm`,variant:`solid`,children:t(`story.banner_btn_upgrade`)}),onClose:e.onClose??(()=>{})})},args:{intent:`warning`}},x={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,description:e.description||t(`story.banner_no_title_desc`)})},args:{intent:`info`}},S={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,title:e.title||t(`story.banner_simple_title`),description:e.description||t(`story.banner_simple_desc`),icon:!1})},args:{intent:`info`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_cookie_title")} description={args.description || t("story.banner_cookie_desc")} />;
  },
  args: {
    intent: "default"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_update_title")} description={args.description || t("story.banner_update_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.alert_success_title")} description={args.description || t("story.banner_update_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_maint_title")} description={args.description || t("story.banner_maint_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_conn_error_title")} description={args.description || t("story.banner_conn_error_desc")} onClose={args.onClose ?? (() => {})} />;
  },
  args: {
    intent: "danger"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_cookie_title")} description={args.description || t("story.banner_cookie_desc")} extra={<Button size="sm" variant="outline">{t("story.banner_btn_accept")}</Button>} />;
  },
  args: {
    intent: "info"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_trial_title")} description={args.description || t("story.banner_trial_desc")} extra={<Button size="sm" variant="solid">{t("story.banner_btn_upgrade")}</Button>} onClose={args.onClose ?? (() => {})} />;
  },
  args: {
    intent: "warning"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} description={args.description || t("story.banner_no_title_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Banner {...args} title={args.title || t("story.banner_simple_title")} description={args.description || t("story.banner_simple_desc")} icon={false} />;
  },
  args: {
    intent: "info"
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Info`,`Success`,`Warning`,`Danger`,`WithAction`,`WithCloseAndAction`,`DescriptionOnly`,`NoIcon`]}));w();export{v as Danger,m as Default,x as DescriptionOnly,h as Info,S as NoIcon,g as Success,_ as Warning,y as WithAction,b as WithCloseAndAction,C as __namedExportsOrder,p as default,w as n,d as t};