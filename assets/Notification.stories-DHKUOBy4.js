"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Button-DrO46Brn.js";import{n as d,t as f}from"./Notification-BtSCuIP0.js";var p=n({Danger:()=>b,Default:()=>_,Info:()=>x,LongContent:()=>S,Success:()=>v,Trigger:()=>C,Warning:()=>y,__namedExportsOrder:()=>w,default:()=>g}),m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=t((()=>{m=e(r(),1),a(),o(),d(),l(),h=c(),g={title:`Components/Alerts & Notifications/Notification`,component:f,tags:[],argTypes:{onClose:{action:`closed`},intent:{control:`select`,options:[`default`,`info`,`success`,`warning`,`danger`]}}},_={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,title:e.title||t(`story.notification_title`),description:e.description||t(`story.notification_desc`)})},args:{intent:`default`}},v={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,title:e.title||t(`story.notification_success_title`),description:e.description||t(`story.notification_success_desc`)})},args:{intent:`success`}},y={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,title:e.title||t(`story.notification_warning_title`),description:e.description||t(`story.notification_warning_desc`)})},args:{intent:`warning`}},b={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,title:e.title||t(`story.notification_error_title`),description:e.description||t(`story.notification_error_desc`)})},args:{intent:`danger`}},x={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,title:e.title||t(`story.notification_info_title`),description:e.description||t(`story.notification_info_desc`)})},args:{intent:`info`}},S={render:function(e){let{t}=i(s);return(0,h.jsx)(f,{...e,title:e.title||t(`story.notification_error_title`),description:e.description||t(`story.notification_desc`)})},args:{intent:`danger`}},C={render:function(){let[e,t]=(0,m.useState)(!1),{t:n}=i(s);return(0,h.jsxs)(`div`,{style:{padding:`24px`},children:[(0,h.jsx)(u,{onClick:()=>t(!0),children:n(`story.notification_show`)}),e&&(0,h.jsx)(`div`,{style:{marginTop:`24px`},children:(0,h.jsx)(f,{intent:`success`,title:n(`story.notification_success_title`),description:n(`story.notification_triggered_desc`),onClose:()=>t(!1)})})]})}},w=[`Default`,`Success`,`Warning`,`Danger`,`Info`,`LongContent`,`Trigger`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_title")} description={args.description || t("story.notification_desc")} />;
  },
  args: {
    intent: "default"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_success_title")} description={args.description || t("story.notification_success_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_warning_title")} description={args.description || t("story.notification_warning_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_error_title")} description={args.description || t("story.notification_error_desc")} />;
  },
  args: {
    intent: "danger"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_info_title")} description={args.description || t("story.notification_info_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_error_title")} description={args.description || t("story.notification_desc")} />;
  },
  args: {
    intent: "danger"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [visible, setVisible] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "24px"
    }}>
        <Button onClick={() => setVisible(true)}>{t("story.notification_show")}</Button>
        {visible && <div style={{
        marginTop: "24px"
      }}>
            <Notification intent="success" title={t("story.notification_success_title")} description={t("story.notification_triggered_desc")} onClose={() => setVisible(false)} />
          </div>}
      </div>;
  }
}`,...C.parameters?.docs?.source}}}})))()}export{y as a,v as i,x as n,T as o,p as r,b as t};