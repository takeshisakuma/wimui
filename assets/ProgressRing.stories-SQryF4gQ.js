"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{hn as s,ji as c,t as l}from"./src-CV0le6yM.js";var u=e({Default:()=>p,Indeterminate:()=>_,Intents:()=>h,Sizes:()=>m,WithoutValue:()=>g,__namedExportsOrder:()=>v,default:()=>f}),d,f,p,m,h,g,_,v,y=t((()=>{a(),r(),l(),d=i(),f={title:`Components/Loading States/ProgressRing`,component:s,tags:[],argTypes:{intent:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`neutral`,`info`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},p={args:{value:50,showValue:!0},render:function(e){let{t}=n(o);return(0,d.jsx)(s,{...e,label:t(`story.progress_label_processing`)})}},m={render:function(e){let{t}=n(o);return(0,d.jsxs)(c,{gap:`2xl`,align:`center`,children:[(0,d.jsx)(s,{...e,size:`sm`,value:25,showValue:!0,label:t(`story.progress_label_uploading`)}),(0,d.jsx)(s,{...e,size:`md`,value:60,showValue:!0,label:t(`story.progress_label_uploading`)}),(0,d.jsx)(s,{...e,size:`lg`,value:90,showValue:!0,label:t(`story.progress_label_uploading`)})]})}},h={render:function(e){let{t}=n(o),r=t(`story.progress_label_processing`);return(0,d.jsxs)(c,{gap:`2xl`,align:`center`,children:[(0,d.jsx)(s,{...e,intent:`primary`,value:70,showValue:!0,label:r}),(0,d.jsx)(s,{...e,intent:`success`,value:100,showValue:!0,label:r}),(0,d.jsx)(s,{...e,intent:`warning`,value:45,showValue:!0,label:r}),(0,d.jsx)(s,{...e,intent:`danger`,value:15,showValue:!0,label:r})]})}},g={args:{value:35},render:function(e){let{t}=n(o);return(0,d.jsx)(s,{...e,label:t(`story.progress_label_uploading`)})}},_={args:{indeterminate:!0},render:function(e){let{t}=n(o);return(0,d.jsx)(s,{...e,label:t(`story.progress_label_processing`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    showValue: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ProgressRing {...args} label={t("story.progress_label_processing")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Group gap="2xl" align="center">
        <ProgressRing {...args} size="sm" value={25} showValue label={t("story.progress_label_uploading")} />
        <ProgressRing {...args} size="md" value={60} showValue label={t("story.progress_label_uploading")} />
        <ProgressRing {...args} size="lg" value={90} showValue label={t("story.progress_label_uploading")} />
      </Group>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const label = t("story.progress_label_processing");
    return <Group gap="2xl" align="center">
        <ProgressRing {...args} intent="primary" value={70} showValue label={label} />
        <ProgressRing {...args} intent="success" value={100} showValue label={label} />
        <ProgressRing {...args} intent="warning" value={45} showValue label={label} />
        <ProgressRing {...args} intent="danger" value={15} showValue label={label} />
      </Group>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 35
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ProgressRing {...args} label={t("story.progress_label_uploading")} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ProgressRing {...args} label={t("story.progress_label_processing")} />;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Sizes`,`Intents`,`WithoutValue`,`Indeterminate`]}));y();export{p as Default,_ as Indeterminate,h as Intents,m as Sizes,g as WithoutValue,v as __namedExportsOrder,f as default,y as n,u as t};