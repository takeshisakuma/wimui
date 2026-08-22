"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-F5Up1IQq.js";import{t as s,u as c}from"./charts-C9-Maezk.js";var l=e({Default:()=>p,Smooth:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h,g=t((()=>{a(),r(),s(),u=i(),d={title:`Components/Visualization/LineChart`,component:c},f=[{name:`Mon`,users:1500,active:800},{name:`Tue`,users:2300,active:1200},{name:`Wed`,users:1800,active:1100},{name:`Thu`,users:3200,active:1900},{name:`Fri`,users:2900,active:2100},{name:`Sat`,users:4100,active:2800},{name:`Sun`,users:3800,active:2500}],p={args:{data:f,xAxisKey:`name`,keys:[`users`,`active`]},render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,title:t(`story.chart_daily_users`)})}},m={args:{data:f,xAxisKey:`name`,keys:[`users`,`active`],smooth:!0},render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,title:t(`story.chart_daily_users_smooth`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    xAxisKey: "name",
    keys: ["users", "active"]
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <LineChart {...args} title={t("story.chart_daily_users")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    xAxisKey: "name",
    keys: ["users", "active"],
    smooth: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <LineChart {...args} title={t("story.chart_daily_users_smooth")} />;
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Smooth`]}));g();export{p as Default,m as Smooth,h as __namedExportsOrder,d as default,g as n,l as t};