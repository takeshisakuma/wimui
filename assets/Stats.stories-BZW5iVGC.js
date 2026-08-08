"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{it as s,t as c}from"./src-BE5jBQ9L.js";var l=e({Default:()=>f,Flat:()=>g,NegativeTrend:()=>m,Outline:()=>h,WithTrend:()=>p,__namedExportsOrder:()=>_,default:()=>d}),u,d,f,p,m,h,g,_,v=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Data Structures/Stats`,component:s,parameters:{layout:`centered`},tags:[]},f={render:function(e){let{t}=n(o);return(0,u.jsxs)(s,{...e,children:[(0,u.jsx)(s.Label,{children:t(`story.stats_total_users`)}),(0,u.jsx)(s.Value,{children:`1,234`}),(0,u.jsx)(s.Description,{children:t(`story.stats_desc_users`)})]})}},p={render:function(e){let{t}=n(o);return(0,u.jsxs)(s,{...e,children:[(0,u.jsx)(s.Label,{children:t(`story.stats_revenue`)}),(0,u.jsx)(s.Value,{children:`$45,231.89`}),(0,u.jsx)(s.Trend,{direction:`up`,children:`+20.1%`})]})}},m={render:function(e){let{t}=n(o);return(0,u.jsxs)(s,{...e,children:[(0,u.jsx)(s.Label,{children:t(`story.stats_conversion_rate`)}),(0,u.jsx)(s.Value,{children:`3.2%`}),(0,u.jsx)(s.Trend,{direction:`down`,children:`-5%`})]})}},h={render:function(e){let{t}=n(o);return(0,u.jsxs)(s,{...e,variant:`outline`,children:[(0,u.jsx)(s.Label,{children:t(`story.stats_page_views`)}),(0,u.jsx)(s.Value,{children:`12,456`}),(0,u.jsx)(s.Trend,{direction:`neutral`,children:`0%`})]})}},g={render:function(e){let{t}=n(o);return(0,u.jsxs)(s,{...e,variant:`flat`,children:[(0,u.jsx)(s.Label,{children:t(`story.stats_avg_session`)}),(0,u.jsx)(s.Value,{children:`2m 34s`}),(0,u.jsx)(s.Description,{children:t(`story.stats_desc_session`)})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    return <Stats {...args} variant="outline">
        <Stats.Label>{t('story.stats_page_views')}</Stats.Label>
        <Stats.Value>12,456</Stats.Value>
        <Stats.Trend direction="neutral">0%</Stats.Trend>
      </Stats>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithTrend`,`NegativeTrend`,`Outline`,`Flat`]}));v();export{f as Default,g as Flat,m as NegativeTrend,h as Outline,p as WithTrend,_ as __namedExportsOrder,d as default,v as n,l as t};