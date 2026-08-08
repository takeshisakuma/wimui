"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{S as s,t as c}from"./charts-DgmDr_G-.js";var l=e({Default:()=>p,Stacked:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h,g=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Visualization/AreaChart`,component:s},f=[{name:`Week 1`,value:100,secondary:50},{name:`Week 2`,value:300,secondary:250},{name:`Week 3`,value:200,secondary:150},{name:`Week 4`,value:450,secondary:300},{name:`Week 5`,value:400,secondary:350}],p={args:{data:f,xAxisKey:`name`,keys:[`value`,`secondary`]},render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_performance_trends`)})}},m={args:{data:f,xAxisKey:`name`,keys:[`value`,`secondary`],stacked:!0},render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_stacked_performance`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    xAxisKey: "name",
    keys: ["value", "secondary"]
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AreaChart {...args} title={t("story.chart_performance_trends")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    xAxisKey: "name",
    keys: ["value", "secondary"],
    stacked: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AreaChart {...args} title={t("story.chart_stacked_performance")} />;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Stacked`]}));g();export{p as Default,m as Stacked,h as __namedExportsOrder,d as default,g as n,l as t};