"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Progress-C0zI57n2.js";var l=t({Colors:()=>p,Default:()=>f,Indeterminate:()=>h,Sizes:()=>m,__namedExportsOrder:()=>g,default:()=>d}),u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Loading States/Progress`,component:c,tags:[],argTypes:{intent:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`neutral`,`info`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},f={args:{value:50,showValue:!0},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,label:t(`story.progress_label_processing`)})}},p={render:function(e){let{t}=n(a);return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`100%`},children:[(0,u.jsx)(c,{...e,intent:`primary`,value:20,label:t(`common.primary`)}),(0,u.jsx)(c,{...e,intent:`neutral`,value:40,label:t(`common.secondary`)}),(0,u.jsx)(c,{...e,intent:`success`,value:60,label:t(`common.success`)}),(0,u.jsx)(c,{...e,intent:`warning`,value:80,label:t(`common.warning`)}),(0,u.jsx)(c,{...e,intent:`danger`,value:90,label:t(`common.error`)}),(0,u.jsx)(c,{...e,intent:`neutral`,value:50,label:t(`common.neutral`)})]})}},m={render:function(e){let{t}=n(a);return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`100%`},children:[(0,u.jsx)(c,{...e,size:`sm`,value:50,label:t(`common.small`)}),(0,u.jsx)(c,{...e,size:`md`,value:50,label:t(`common.medium`)}),(0,u.jsx)(c,{...e,size:`lg`,value:50,label:t(`common.large`)})]})}},h={args:{indeterminate:!0},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,label:t(`story.progress_label_uploading`)})}},g=[`Default`,`Colors`,`Sizes`,`Indeterminate`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    showValue: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Progress {...args} label={t("story.progress_label_processing")} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "100%"
    }}>
      <Progress {...args} intent="primary" value={20} label={t("common.primary")} />
      <Progress {...args} intent="neutral" value={40} label={t("common.secondary")} />
      <Progress {...args} intent="success" value={60} label={t("common.success")} />
      <Progress {...args} intent="warning" value={80} label={t("common.warning")} />
      <Progress {...args} intent="danger" value={90} label={t("common.error")} />
      <Progress {...args} intent="neutral" value={50} label={t("common.neutral")} />
    </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "100%"
    }}>
      <Progress {...args} size="sm" value={50} label={t("common.small")} />
      <Progress {...args} size="md" value={50} label={t("common.medium")} />
      <Progress {...args} size="lg" value={50} label={t("common.large")} />
    </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Progress {...args} label={t("story.progress_label_uploading")} />;
  }
}`,...h.parameters?.docs?.source}}}})))()}export{m as a,l as i,f as n,_ as o,h as r,p as t};