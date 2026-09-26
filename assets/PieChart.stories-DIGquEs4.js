"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,Sr as r,Tr as i,ur as a,xr as o}from"./iframe-DkmqI5Zh.js";import{g as s,t as c}from"./charts-DmTCdLdO.js";var l=e({Default:()=>p,Donut:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h,g=t((()=>{n(),r(),c(),u=a(),d={title:`Components/Visualization/PieChart`,component:s},f=[{name:`Direct`,value:400},{name:`Social`,value:300},{name:`Referral`,value:300},{name:`Organic`,value:200}],p={args:{data:f},render:function(e){let{t}=i(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_traffic_sources`)})}},m={args:{data:f,donut:!0},render:function(e){let{t}=i(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_traffic_sources_donut`)})}},h=[`Default`,`Donut`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}}));g();export{p as Default,m as Donut,h as __namedExportsOrder,d as default,g as n,l as t};