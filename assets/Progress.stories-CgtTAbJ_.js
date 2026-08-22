"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-F5Up1IQq.js";import{Tn as s,t as c}from"./src-Ssuy8lr7.js";var l=e({Colors:()=>p,Default:()=>f,Indeterminate:()=>h,Sizes:()=>m,__namedExportsOrder:()=>g,default:()=>d}),u,d,f,p,m,h,g,_=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Loading States/Progress`,component:s,tags:[],argTypes:{intent:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`neutral`,`info`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},f={args:{value:50,showValue:!0},render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,label:t(`story.progress_label_processing`)})}},p={render:function(e){let{t}=n(o);return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`100%`},children:[(0,u.jsx)(s,{...e,intent:`primary`,value:20,label:t(`common.primary`)}),(0,u.jsx)(s,{...e,intent:`neutral`,value:40,label:t(`common.secondary`)}),(0,u.jsx)(s,{...e,intent:`success`,value:60,label:t(`common.success`)}),(0,u.jsx)(s,{...e,intent:`warning`,value:80,label:t(`common.warning`)}),(0,u.jsx)(s,{...e,intent:`danger`,value:90,label:t(`common.error`)}),(0,u.jsx)(s,{...e,intent:`neutral`,value:50,label:t(`common.neutral`)})]})}},m={render:function(e){let{t}=n(o);return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`100%`},children:[(0,u.jsx)(s,{...e,size:`sm`,value:50,label:t(`common.small`)}),(0,u.jsx)(s,{...e,size:`md`,value:50,label:t(`common.medium`)}),(0,u.jsx)(s,{...e,size:`lg`,value:50,label:t(`common.large`)})]})}},h={args:{indeterminate:!0},render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,label:t(`story.progress_label_uploading`)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Colors`,`Sizes`,`Indeterminate`]}));_();export{p as Colors,f as Default,h as Indeterminate,m as Sizes,g as __namedExportsOrder,d as default,_ as n,l as t};