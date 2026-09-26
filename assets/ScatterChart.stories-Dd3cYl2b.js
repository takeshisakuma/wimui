"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,Sr as r,Tr as i,ur as a,xr as o}from"./iframe-DkmqI5Zh.js";import{f as s,t as c}from"./charts-DmTCdLdO.js";var l=e({Default:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m,h=t((()=>{n(),r(),c(),u=a(),d={title:`Components/Visualization/ScatterChart`,component:s},f=[{x:10,y:30,z:200,name:`A`},{x:20,y:50,z:260,name:`B`},{x:45,y:20,z:400,name:`C`},{x:65,y:90,z:280,name:`D`},{x:80,y:40,z:500,name:`E`},{x:95,y:85,z:300,name:`F`}],p={args:{data:f,xAxisName:`Price`,yAxisName:`Quantity`},render:function(e){let{t}=i(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_price_vs_quantity`)})}},m=[`Default`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}}));h();export{p as Default,m as __namedExportsOrder,d as default,h as n,l as t};