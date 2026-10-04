"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./LineChart-qgC28FaI.js";var l=t({Default:()=>p,Smooth:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h;function g(){return(g=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Visualization/LineChart`,component:c},f=[{name:`Mon`,users:1500,active:800},{name:`Tue`,users:2300,active:1200},{name:`Wed`,users:1800,active:1100},{name:`Thu`,users:3200,active:1900},{name:`Fri`,users:2900,active:2100},{name:`Sat`,users:4100,active:2800},{name:`Sun`,users:3800,active:2500}],p={args:{data:f,xAxisKey:`name`,keys:[`users`,`active`]},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_daily_users`)})}},m={args:{data:f,xAxisKey:`name`,keys:[`users`,`active`],smooth:!0},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_daily_users_smooth`)})}},h=[`Default`,`Smooth`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}})))()}export{g as n,l as t};