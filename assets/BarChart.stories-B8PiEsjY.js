"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./BarChart-DV8FtCeZ.js";var l=t({Default:()=>p,Stacked:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h;function g(){return(g=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Visualization/BarChart`,component:c},f=[{name:`Jan`,sales:4e3,profit:2400},{name:`Feb`,sales:3e3,profit:1398},{name:`Mar`,sales:2e3,profit:9800},{name:`Apr`,sales:2780,profit:3908},{name:`May`,sales:1890,profit:4800},{name:`Jun`,sales:2390,profit:3800}],p={args:{data:f,xAxisKey:`name`,keys:[`sales`,`profit`]},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_monthly_sales`)})}},m={args:{data:f,xAxisKey:`name`,keys:[`sales`,`profit`],stacked:!0},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_monthly_sales_stacked`)})}},h=[`Default`,`Stacked`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    xAxisKey: "name",
    keys: ["sales", "profit"]
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BarChart {...args} title={t("story.chart_monthly_sales")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    xAxisKey: "name",
    keys: ["sales", "profit"],
    stacked: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <BarChart {...args} title={t("story.chart_monthly_sales_stacked")} />;
  }
}`,...m.parameters?.docs?.source}}}})))()}export{m as n,g as r,l as t};