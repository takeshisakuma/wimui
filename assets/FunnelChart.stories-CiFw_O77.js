"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{E as s,t as c}from"./charts-Dg5J96mY.js";var l=e({Default:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m,h=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Visualization/FunnelChart`,component:s},f=[{value:100,name:`Impressions`},{value:80,name:`Clicks`},{value:50,name:`Cart`},{value:40,name:`Checkout`},{value:26,name:`Purchased`}],p={args:{data:f,dataKey:`value`,nameKey:`name`},render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_sales_funnel`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`]}));h();export{p as Default,m as __namedExportsOrder,d as default,h as n,l as t};