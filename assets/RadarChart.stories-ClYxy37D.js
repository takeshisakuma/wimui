"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,Sr as r,Tr as i,ur as a,xr as o}from"./iframe-DkmqI5Zh.js";import{m as s,t as c}from"./charts-DmTCdLdO.js";var l=e({Default:()=>f,__namedExportsOrder:()=>p,default:()=>d}),u,d,f,p,m=t((()=>{n(),r(),c(),u=a(),d={title:`Components/Visualization/RadarChart`,component:s},f={args:{indexKey:`subject`,keys:[`A`,`B`]},render:function(e){let{t}=i(o),n=[{subject:t(`story.radar_subject_system_design`),A:120,B:110},{subject:t(`story.radar_subject_debugging`),A:98,B:130},{subject:t(`story.radar_subject_testing`),A:86,B:130},{subject:t(`story.radar_subject_review`),A:99,B:100},{subject:t(`story.radar_subject_docs`),A:85,B:90},{subject:t(`story.radar_subject_mentoring`),A:65,B:85}];return(0,u.jsx)(s,{...e,data:n,title:t(`story.chart_user_skills`)})}},p=[`Default`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    indexKey: "subject",
    keys: ["A", "B"]
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    // 軸は「何を比べているのか」が読める実在の評価軸にする（DESIGN.md realism）。
    const data = [{
      subject: t("story.radar_subject_system_design"),
      A: 120,
      B: 110
    }, {
      subject: t("story.radar_subject_debugging"),
      A: 98,
      B: 130
    }, {
      subject: t("story.radar_subject_testing"),
      A: 86,
      B: 130
    }, {
      subject: t("story.radar_subject_review"),
      A: 99,
      B: 100
    }, {
      subject: t("story.radar_subject_docs"),
      A: 85,
      B: 90
    }, {
      subject: t("story.radar_subject_mentoring"),
      A: 65,
      B: 85
    }];
    return <RadarChart {...args} data={data} title={t("story.chart_user_skills")} />;
  }
}`,...f.parameters?.docs?.source}}}}));m();export{f as Default,p as __namedExportsOrder,d as default,m as n,l as t};