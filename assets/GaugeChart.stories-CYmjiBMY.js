"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{S as s,t as c}from"./charts-Dg5J96mY.js";var l=e({CustomColor:()=>p,Default:()=>f,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m,h=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Visualization/GaugeChart`,component:s},f={args:{value:75,label:`75%`},render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_system_load`)})}},p={args:{value:92,label:`DANGER`,color:`var(--wim-color-danger)`},render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_critical_level`)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`,`CustomColor`]}));h();export{p as CustomColor,f as Default,m as __namedExportsOrder,d as default,h as n,l as t};