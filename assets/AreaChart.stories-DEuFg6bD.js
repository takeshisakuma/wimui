"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./AreaChart-B8uyqlK8.js";var l=t({Default:()=>p,Stacked:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h;function g(){return(g=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Visualization/AreaChart`,component:c},f=[{name:`Week 1`,value:100,secondary:50},{name:`Week 2`,value:300,secondary:250},{name:`Week 3`,value:200,secondary:150},{name:`Week 4`,value:450,secondary:300},{name:`Week 5`,value:400,secondary:350}],p={args:{data:f,xAxisKey:`name`,keys:[`value`,`secondary`]},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_performance_trends`)})}},m={args:{data:f,xAxisKey:`name`,keys:[`value`,`secondary`],stacked:!0},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_stacked_performance`)})}},h=[`Default`,`Stacked`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}})))()}export{g as n,l as t};