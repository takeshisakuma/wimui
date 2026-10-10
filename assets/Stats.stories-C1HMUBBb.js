"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Stats-BSSkCQ64.js";var l=t({Default:()=>f,FallingAlerts:()=>g,Flat:()=>v,NegativeTrend:()=>m,Outline:()=>_,RisingCost:()=>h,WithTrend:()=>p,__namedExportsOrder:()=>y,default:()=>d}),u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Data Structures/Stats`,component:c,parameters:{layout:`centered`},tags:[]},f={render:function(e){let{t}=n(a);return(0,u.jsxs)(c,{...e,children:[(0,u.jsx)(c.Label,{children:t(`story.stats_total_users`)}),(0,u.jsx)(c.Value,{children:`1,234`}),(0,u.jsx)(c.Description,{children:t(`story.stats_desc_users`)})]})}},p={render:function(e){let{t}=n(a);return(0,u.jsxs)(c,{...e,children:[(0,u.jsx)(c.Label,{children:t(`story.stats_revenue`)}),(0,u.jsx)(c.Value,{children:`$45,231.89`}),(0,u.jsx)(c.Trend,{direction:`up`,children:`+20.1%`})]})}},m={render:function(e){let{t}=n(a);return(0,u.jsxs)(c,{...e,children:[(0,u.jsx)(c.Label,{children:t(`story.stats_conversion_rate`)}),(0,u.jsx)(c.Value,{children:`3.2%`}),(0,u.jsx)(c.Trend,{direction:`down`,children:`-5%`})]})}},h={render:function(e){let{t}=n(a);return(0,u.jsxs)(c,{...e,children:[(0,u.jsx)(c.Label,{children:t(`story.stats_cloud_cost`)}),(0,u.jsx)(c.Value,{children:`$12,480`}),(0,u.jsx)(c.Trend,{direction:`up`,intent:`danger`,children:`+18%`})]})}},g={render:function(e){let{t}=n(a);return(0,u.jsxs)(c,{...e,children:[(0,u.jsx)(c.Label,{children:t(`story.stats_open_alerts`)}),(0,u.jsx)(c.Value,{children:`14`}),(0,u.jsx)(c.Trend,{direction:`down`,intent:`success`,children:`-32%`})]})}},_={render:function(e){let{t}=n(a);return(0,u.jsxs)(c,{...e,variant:`outline`,children:[(0,u.jsx)(c.Label,{children:t(`story.stats_page_views`)}),(0,u.jsx)(c.Value,{children:`12,456`}),(0,u.jsx)(c.Trend,{direction:`neutral`,children:`0%`})]})}},v={render:function(e){let{t}=n(a);return(0,u.jsxs)(c,{...e,variant:`flat`,children:[(0,u.jsx)(c.Label,{children:t(`story.stats_avg_session`)}),(0,u.jsx)(c.Value,{children:`2m 34s`}),(0,u.jsx)(c.Description,{children:t(`story.stats_desc_session`)})]})}},y=[`Default`,`WithTrend`,`NegativeTrend`,`RisingCost`,`FallingAlerts`,`Outline`,`Flat`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stats {...args}>
        <Stats.Label>{t('story.stats_total_users')}</Stats.Label>
        <Stats.Value>1,234</Stats.Value>
        <Stats.Description>{t('story.stats_desc_users')}</Stats.Description>
      </Stats>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stats {...args}>
        <Stats.Label>{t('story.stats_revenue')}</Stats.Label>
        <Stats.Value>$45,231.89</Stats.Value>
        <Stats.Trend direction="up">+20.1%</Stats.Trend>
      </Stats>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stats {...args}>
        <Stats.Label>{t('story.stats_conversion_rate')}</Stats.Label>
        <Stats.Value>3.2%</Stats.Value>
        <Stats.Trend direction="down">-5%</Stats.Trend>
      </Stats>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stats {...args}>
        <Stats.Label>{t("story.stats_cloud_cost")}</Stats.Label>
        <Stats.Value>$12,480</Stats.Value>
        <Stats.Trend direction="up" intent="danger">+18%</Stats.Trend>
      </Stats>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stats {...args}>
        <Stats.Label>{t("story.stats_open_alerts")}</Stats.Label>
        <Stats.Value>14</Stats.Value>
        <Stats.Trend direction="down" intent="success">-32%</Stats.Trend>
      </Stats>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stats {...args} variant="outline">
        <Stats.Label>{t('story.stats_page_views')}</Stats.Label>
        <Stats.Value>12,456</Stats.Value>
        <Stats.Trend direction="neutral">0%</Stats.Trend>
      </Stats>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stats {...args} variant="flat">
        <Stats.Label>{t('story.stats_avg_session')}</Stats.Label>
        <Stats.Value>2m 34s</Stats.Value>
        <Stats.Description>{t('story.stats_desc_session')}</Stats.Description>
      </Stats>;
  }
}`,...v.parameters?.docs?.source}}}})))()}export{h as a,b as c,_ as i,g as n,l as o,v as r,p as s,f as t};