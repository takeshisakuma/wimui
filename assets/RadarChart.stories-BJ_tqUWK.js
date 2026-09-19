"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,Sr as r,Tr as i,ur as a,xr as o}from"./iframe-wf1-Tomv.js";import{m as s,t as c}from"./charts-Bsg0mEI5.js";var l=e({Default:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m,h=t((()=>{n(),r(),c(),u=a(),d={title:`Components/Visualization/RadarChart`,component:s},f=[{subject:`Skill 1`,A:120,B:110},{subject:`Skill 2`,A:98,B:130},{subject:`Skill 3`,A:86,B:130},{subject:`Skill 4`,A:99,B:100},{subject:`Skill 5`,A:85,B:90},{subject:`Skill 6`,A:65,B:85}],p={args:{data:f,indexKey:`subject`,keys:[`A`,`B`]},render:function(e){let{t}=i(o);return(0,u.jsx)(s,{...e,title:t(`story.chart_user_skills`)})}},m=[`Default`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    indexKey: "subject",
    keys: ["A", "B"]
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RadarChart {...args} title={t("story.chart_user_skills")} />;
  }
}`,...p.parameters?.docs?.source}}}}));h();export{p as Default,m as __namedExportsOrder,d as default,h as n,l as t};