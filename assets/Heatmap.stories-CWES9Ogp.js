"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,Sr as r,Tr as i,ur as a,xr as o}from"./iframe-wf1-Tomv.js";import{b as s,t as c}from"./charts-Bsg0mEI5.js";var l=e({Default:()=>g,__namedExportsOrder:()=>_,default:()=>d}),u,d,f,p,m,h,g,_,v=t((()=>{n(),r(),c(),u=a(),d={title:`Components/Visualization/Heatmap`,component:s},f=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],p=[`Am`,`Pm`,`Night`],m=[],h=0;for(let e of f)for(let t of p)m.push({x:e,y:t,value:h*13%100}),h++;g={args:{data:m,xAxisKey:f,yAxisKey:p},render:function(e){let{t}=i(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_activity_heatmap`)})}},_=[`Default`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    xAxisKey,
    yAxisKey
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Heatmap {...args} title={t("story.chart_activity_heatmap")} />;
  }
}`,...g.parameters?.docs?.source}}}}));v();export{g as Default,_ as __namedExportsOrder,d as default,v as n,l as t};