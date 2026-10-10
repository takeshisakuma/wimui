"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Group-BLI3kjIp.js";import{n as l,t as u}from"./ProgressRing-CYQOfEfQ.js";var d=t({Default:()=>m,Indeterminate:()=>v,Intents:()=>g,Sizes:()=>h,WithoutValue:()=>_,__namedExportsOrder:()=>y,default:()=>p}),f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),i(),s(),l(),f=o(),p={title:`Components/Loading States/ProgressRing`,component:u,tags:[],argTypes:{intent:{control:`select`,options:[`primary`,`secondary`,`success`,`warning`,`danger`,`neutral`,`info`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},m={args:{value:50,showValue:!0},render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,label:t(`story.progress_label_processing`)})}},h={render:function(e){let{t}=n(a);return(0,f.jsxs)(c,{gap:`2xl`,align:`center`,children:[(0,f.jsx)(u,{...e,size:`sm`,value:25,showValue:!0,label:t(`story.progress_label_uploading`)}),(0,f.jsx)(u,{...e,size:`md`,value:60,showValue:!0,label:t(`story.progress_label_uploading`)}),(0,f.jsx)(u,{...e,size:`lg`,value:90,showValue:!0,label:t(`story.progress_label_uploading`)})]})}},g={render:function(e){let{t}=n(a),r=t(`story.progress_label_processing`);return(0,f.jsxs)(c,{gap:`2xl`,align:`center`,children:[(0,f.jsx)(u,{...e,intent:`primary`,value:70,showValue:!0,label:r}),(0,f.jsx)(u,{...e,intent:`success`,value:100,showValue:!0,label:r}),(0,f.jsx)(u,{...e,intent:`warning`,value:45,showValue:!0,label:r}),(0,f.jsx)(u,{...e,intent:`danger`,value:15,showValue:!0,label:r})]})}},_={args:{value:35},render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,label:t(`story.progress_label_uploading`)})}},v={args:{indeterminate:!0},render:function(e){let{t}=n(a);return(0,f.jsx)(u,{...e,label:t(`story.progress_label_processing`)})}},y=[`Default`,`Sizes`,`Intents`,`WithoutValue`,`Indeterminate`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 35
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ProgressRing {...args} label={t("story.progress_label_uploading")} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ProgressRing {...args} label={t("story.progress_label_processing")} />;
  }
}`,...v.parameters?.docs?.source}}}})))()}export{d as n,b as r,m as t};