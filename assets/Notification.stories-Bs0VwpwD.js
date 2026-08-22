"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{Dn as l,t as u}from"./src-Ssuy8lr7.js";import{t as d}from"./Button-Dps1MPAd.js";var f=e({Danger:()=>y,Default:()=>g,Info:()=>b,LongContent:()=>x,Success:()=>_,Trigger:()=>S,Warning:()=>v,__namedExportsOrder:()=>C,default:()=>h}),p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{p=n(r(),1),s(),a(),u(),m=o(),h={title:`Components/Alerts & Notifications/Notification`,component:l,tags:[],argTypes:{onClose:{action:`closed`},intent:{control:`select`,options:[`default`,`info`,`success`,`warning`,`danger`]}}},g={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,title:e.title||t(`story.notification_title`),description:e.description||t(`story.notification_desc`)})},args:{intent:`default`}},_={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,title:e.title||t(`story.notification_success_title`),description:e.description||t(`story.notification_success_desc`)})},args:{intent:`success`}},v={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,title:e.title||t(`story.notification_warning_title`),description:e.description||t(`story.notification_warning_desc`)})},args:{intent:`warning`}},y={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,title:e.title||t(`story.notification_error_title`),description:e.description||t(`story.notification_error_desc`)})},args:{intent:`danger`}},b={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,title:e.title||t(`story.notification_info_title`),description:e.description||t(`story.notification_info_desc`)})},args:{intent:`info`}},x={render:function(e){let{t}=i(c);return(0,m.jsx)(l,{...e,title:e.title||t(`story.notification_error_title`),description:e.description||t(`story.notification_desc`)})},args:{intent:`danger`}},S={render:function(){let[e,t]=(0,p.useState)(!1),{t:n}=i(c);return(0,m.jsxs)(`div`,{style:{padding:`24px`},children:[(0,m.jsx)(d,{onClick:()=>t(!0),children:n(`story.notification_show`)}),e&&(0,m.jsx)(`div`,{style:{marginTop:`24px`},children:(0,m.jsx)(l,{intent:`success`,title:n(`story.notification_success_title`),description:n(`story.notification_triggered_desc`),onClose:()=>t(!1)})})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_title")} description={args.description || t("story.notification_desc")} />;
  },
  args: {
    intent: "default"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_success_title")} description={args.description || t("story.notification_success_desc")} />;
  },
  args: {
    intent: "success"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_warning_title")} description={args.description || t("story.notification_warning_desc")} />;
  },
  args: {
    intent: "warning"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_error_title")} description={args.description || t("story.notification_error_desc")} />;
  },
  args: {
    intent: "danger"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_info_title")} description={args.description || t("story.notification_info_desc")} />;
  },
  args: {
    intent: "info"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Notification {...args} title={args.title || t("story.notification_error_title")} description={args.description || t("story.notification_desc")} />;
  },
  args: {
    intent: "danger"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Success`,`Warning`,`Danger`,`Info`,`LongContent`,`Trigger`]}));w();export{y as Danger,g as Default,b as Info,x as LongContent,_ as Success,S as Trigger,v as Warning,C as __namedExportsOrder,h as default,w as n,f as t};