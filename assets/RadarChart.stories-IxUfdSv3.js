"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./RadarChart-CmlmMQ6e.js";var l=t({Default:()=>f,__namedExportsOrder:()=>p,default:()=>d}),u,d,f,p;function m(){return(m=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Visualization/RadarChart`,component:c},f={args:{indexKey:`subject`,keys:[`A`,`B`]},render:function(e){let{t}=n(a),r=[{subject:t(`story.radar_subject_system_design`),A:120,B:110},{subject:t(`story.radar_subject_debugging`),A:98,B:130},{subject:t(`story.radar_subject_testing`),A:86,B:130},{subject:t(`story.radar_subject_review`),A:99,B:100},{subject:t(`story.radar_subject_docs`),A:85,B:90},{subject:t(`story.radar_subject_mentoring`),A:65,B:85}];return(0,u.jsx)(c,{...e,data:r,title:t(`story.chart_user_skills`)})}},p=[`Default`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}export{m as n,l as t};