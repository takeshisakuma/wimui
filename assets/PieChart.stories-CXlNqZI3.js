"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./PieChart-G9wXiIBJ.js";var l=t({Default:()=>p,Donut:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h;function g(){return(g=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Visualization/PieChart`,component:c},f=[{name:`Direct`,value:400},{name:`Social`,value:300},{name:`Referral`,value:300},{name:`Organic`,value:200}],p={args:{data:f},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_traffic_sources`)})}},m={args:{data:f,donut:!0},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_traffic_sources_donut`)})}},h=[`Default`,`Donut`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}})))()}export{g as n,l as t};