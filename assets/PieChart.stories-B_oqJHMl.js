"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{c as s,t as c}from"./charts-DgmDr_G-.js";var l=e({Default:()=>p,Donut:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h,g=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Visualization/PieChart`,component:s},f=[{name:`Direct`,value:400},{name:`Social`,value:300},{name:`Referral`,value:300},{name:`Organic`,value:200}],p={args:{data:f},render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_traffic_sources`)})}},m={args:{data:f,donut:!0},render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_traffic_sources_donut`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <PieChart {...args} title={t("story.chart_traffic_sources")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    donut: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <PieChart {...args} title={t("story.chart_traffic_sources_donut")} />;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Donut`]}));g();export{p as Default,m as Donut,h as __namedExportsOrder,d as default,g as n,l as t};