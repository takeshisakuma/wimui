"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./FunnelChart-Ch-bVXV9.js";var l=t({Default:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m;function h(){return(h=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Visualization/FunnelChart`,component:c},f=[{value:100,name:`Impressions`},{value:80,name:`Clicks`},{value:50,name:`Cart`},{value:40,name:`Checkout`},{value:26,name:`Purchased`}],p={args:{data:f,dataKey:`value`,nameKey:`name`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_sales_funnel`)})}},m=[`Default`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    dataKey: "value",
    nameKey: "name"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FunnelChart {...args} title={t("story.chart_sales_funnel")} />;
  }
}`,...p.parameters?.docs?.source}}}})))()}export{h as n,l as t};