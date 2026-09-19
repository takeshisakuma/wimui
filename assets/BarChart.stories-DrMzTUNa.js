"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,Sr as r,Tr as i,ur as a,xr as o}from"./iframe-wf1-Tomv.js";import{O as s,t as c}from"./charts-Bsg0mEI5.js";var l=e({Default:()=>p,Stacked:()=>m,__namedExportsOrder:()=>h,default:()=>d}),u,d,f,p,m,h,g=t((()=>{n(),r(),c(),u=a(),d={title:`Components/Visualization/BarChart`,component:s},f=[{name:`Jan`,sales:4e3,profit:2400},{name:`Feb`,sales:3e3,profit:1398},{name:`Mar`,sales:2e3,profit:9800},{name:`Apr`,sales:2780,profit:3908},{name:`May`,sales:1890,profit:4800},{name:`Jun`,sales:2390,profit:3800}],p={args:{data:f,xAxisKey:`name`,keys:[`sales`,`profit`]},render:function(e){let{t}=i(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_monthly_sales`)})}},m={args:{data:f,xAxisKey:`name`,keys:[`sales`,`profit`],stacked:!0},render:function(e){let{t}=i(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_monthly_sales_stacked`)})}},h=[`Default`,`Stacked`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}}));g();export{p as Default,m as Stacked,h as __namedExportsOrder,d as default,g as n,l as t};