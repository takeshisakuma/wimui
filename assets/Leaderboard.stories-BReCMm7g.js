"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-splidnB2.js";import{n as s,t as c}from"./Leaderboard-Bz2-GqJK.js";var l=e({Default:()=>p,Large:()=>_,Small:()=>g,WithHighlight:()=>h,WithUnit:()=>m,__namedExportsOrder:()=>v,default:()=>f});function u(){let{t:e}=n(o);return[{id:`1`,name:e(`story.lb_alice`),score:2450},{id:`2`,name:e(`story.lb_bob`),score:2100},{id:`3`,name:e(`story.lb_charlie`),score:1900},{id:`4`,name:e(`story.lb_diana`),score:1650},{id:`5`,name:e(`story.lb_eve`),score:1400}]}var d,f,p,m,h,g,_,v,y=t((()=>{a(),r(),s(),d=i(),f={title:`Components/Data Indicators/Leaderboard`,component:c,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},p={render:function(e){let t=u();return(0,d.jsx)(c,{...e,entries:t,size:`md`})}},m={render:function(e){let{t}=n(o),r=u();return(0,d.jsx)(c,{...e,entries:r,unit:t(`story.lb_unit_pts`),size:`md`})}},h={render:function(e){let{t}=n(o),r=[{id:`1`,name:t(`story.lb_alice`),score:2450},{id:`2`,name:t(`story.lb_bob`),score:2100},{id:`3`,name:t(`story.lb_charlie`),score:1900},{id:`4`,name:t(`story.lb_diana`),score:1650,highlight:!0},{id:`5`,name:t(`story.lb_eve`),score:1400}];return(0,d.jsx)(c,{...e,entries:r,unit:t(`story.lb_unit_pts`),size:`md`})}},g={render:function(e){let{t}=n(o),r=u();return(0,d.jsx)(c,{...e,entries:r,unit:t(`story.lb_unit_pts`),size:`sm`})}},_={render:function(e){let{t}=n(o),r=u();return(0,d.jsx)(c,{...e,entries:r,unit:t(`story.lb_unit_pts`),size:`lg`})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const entries = useEntries();
    return <Leaderboard {...args} entries={entries} size="md" />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const entries = useEntries();
    return <Leaderboard {...args} entries={entries} unit={t("story.lb_unit_pts")} size="md" />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const entries: LeaderboardEntry[] = [{
      id: "1",
      name: t("story.lb_alice"),
      score: 2450
    }, {
      id: "2",
      name: t("story.lb_bob"),
      score: 2100
    }, {
      id: "3",
      name: t("story.lb_charlie"),
      score: 1900
    }, {
      id: "4",
      name: t("story.lb_diana"),
      score: 1650,
      highlight: true
    }, {
      id: "5",
      name: t("story.lb_eve"),
      score: 1400
    }];
    return <Leaderboard {...args} entries={entries} unit={t("story.lb_unit_pts")} size="md" />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const entries = useEntries();
    return <Leaderboard {...args} entries={entries} unit={t("story.lb_unit_pts")} size="sm" />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const entries = useEntries();
    return <Leaderboard {...args} entries={entries} unit={t("story.lb_unit_pts")} size="lg" />;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithUnit`,`WithHighlight`,`Small`,`Large`]}));y();export{p as Default,_ as Large,g as Small,h as WithHighlight,m as WithUnit,v as __namedExportsOrder,f as default,y as n,l as t};