"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./useTranslation-MNZnjzfn.js";import{n as i,t as a}from"./i18nConstants-Dz9WmqoW.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{n as s,t as c}from"./GaugeChart-C_mCWww_.js";var l=t({CustomColor:()=>p,Default:()=>f,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m;function h(){return(h=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Visualization/GaugeChart`,component:c},f={args:{value:75,label:`75%`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_system_load`)})}},p={args:{value:92,label:`DANGER`,color:`var(--wim-color-danger)`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_critical_level`)})}},m=[`Default`,`CustomColor`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: "75%"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <GaugeChart {...args} title={t("story.chart_system_load")} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 92,
    label: "DANGER",
    color: "var(--wim-color-danger)"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <GaugeChart {...args} title={t("story.chart_critical_level")} />;
  }
}`,...p.parameters?.docs?.source}}}})))()}export{h as n,l as t};