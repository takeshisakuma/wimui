"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./useTranslation-DzWR_e8l.js";import{n as i,t as a}from"./i18nConstants-Dz9WmqoW.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{n as s,t as c}from"./Heatmap-CkUMLojX.js";var l=t({Default:()=>g,__namedExportsOrder:()=>_,default:()=>d}),u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Visualization/Heatmap`,component:c},f=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],p=[`Am`,`Pm`,`Night`],m=[],h=0;for(let e of f)for(let t of p)m.push({x:e,y:t,value:h*13%100}),h++;g={args:{data:m,xAxisKey:f,yAxisKey:p},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,title:t(`story.chart_activity_heatmap`)})}},_=[`Default`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}export{v as n,l as t};