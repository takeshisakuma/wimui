"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./ScatterChart-sfnrZdsH.js";var l=t({Default:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m;function h(){return(h=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Visualization/ScatterChart`,component:c},f=[{x:10,y:30,z:200,name:`A`},{x:20,y:50,z:260,name:`B`},{x:45,y:20,z:400,name:`C`},{x:65,y:90,z:280,name:`D`},{x:80,y:40,z:500,name:`E`},{x:95,y:85,z:300,name:`F`}],p={args:{data:f,xAxisName:`Price`,yAxisName:`Quantity`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_price_vs_quantity`)})}},m=[`Default`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    xAxisName: "Price",
    yAxisName: "Quantity"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ScatterChart {...args} title={t("story.chart_price_vs_quantity")} />;
  }
}`,...p.parameters?.docs?.source}}}})))()}export{h as n,l as t};