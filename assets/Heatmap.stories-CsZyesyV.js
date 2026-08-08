"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{f as s,t as c}from"./charts-DgmDr_G-.js";var l=e({Default:()=>g,__namedExportsOrder:()=>_,default:()=>d}),u,d,f,p,m,h,g,_,v=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Visualization/Heatmap`,component:s},f=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],p=[`Am`,`Pm`,`Night`],m=[],h=0;for(let e of f)for(let t of p)m.push({x:e,y:t,value:h*13%100}),h++;g={args:{data:m,xAxisKey:f,yAxisKey:p},render:function(e){let{t}=n(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_activity_heatmap`)})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`]}));v();export{g as Default,_ as __namedExportsOrder,d as default,v as n,l as t};