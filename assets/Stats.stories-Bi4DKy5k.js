import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as t}from"./Stats-LwDn9Xjv.js";import{A as d}from"./iframe-R6z5wUgf.js";import{u as l}from"./useTranslation-ByGRA6ap.js";const S={title:"Components/Data Structures/Stats",component:t,parameters:{layout:"centered"},tags:[]},a={render:function(r){const{t:s}=l(d);return e.jsxs(t,{...r,children:[e.jsx(t.Label,{children:s("story_stats_total_users")}),e.jsx(t.Value,{children:"1,234"}),e.jsx(t.Description,{children:s("story_stats_desc_users")})]})}},n={render:function(r){const{t:s}=l(d);return e.jsxs(t,{...r,children:[e.jsx(t.Label,{children:s("story_stats_revenue")}),e.jsx(t.Value,{children:"$45,231.89"}),e.jsx(t.Trend,{direction:"up",children:"+20.1%"})]})}},o={render:function(r){const{t:s}=l(d);return e.jsxs(t,{...r,children:[e.jsx(t.Label,{children:s("story_stats_active_alerts")}),e.jsx(t.Value,{children:"12"}),e.jsx(t.Trend,{direction:"down",children:"-5%"})]})}},c={render:function(r){const{t:s}=l(d);return e.jsxs(t,{...r,variant:"outline",children:[e.jsx(t.Label,{children:s("story_stats_page_views")}),e.jsx(t.Value,{children:"12,456"}),e.jsx(t.Trend,{direction:"neutral",children:"0%"})]})}},i={render:function(r){const{t:s}=l(d);return e.jsxs(t,{...r,variant:"flat",children:[e.jsx(t.Label,{children:s("story_stats_avg_session")}),e.jsx(t.Value,{children:"2m 34s"}),e.jsx(t.Description,{children:s("story_stats_desc_session")})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stats {...args}>
        <Stats.Label>{t('story_stats_total_users')}</Stats.Label>
        <Stats.Value>1,234</Stats.Value>
        <Stats.Description>{t('story_stats_desc_users')}</Stats.Description>
      </Stats>;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stats {...args}>
        <Stats.Label>{t('story_stats_revenue')}</Stats.Label>
        <Stats.Value>$45,231.89</Stats.Value>
        <Stats.Trend direction="up">+20.1%</Stats.Trend>
      </Stats>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stats {...args}>
        <Stats.Label>{t('story_stats_active_alerts')}</Stats.Label>
        <Stats.Value>12</Stats.Value>
        <Stats.Trend direction="down">-5%</Stats.Trend>
      </Stats>;
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stats {...args} variant="outline">
        <Stats.Label>{t('story_stats_page_views')}</Stats.Label>
        <Stats.Value>12,456</Stats.Value>
        <Stats.Trend direction="neutral">0%</Stats.Trend>
      </Stats>;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stats {...args} variant="flat">
        <Stats.Label>{t('story_stats_avg_session')}</Stats.Label>
        <Stats.Value>2m 34s</Stats.Value>
        <Stats.Description>{t('story_stats_desc_session')}</Stats.Description>
      </Stats>;
  }
}`,...i.parameters?.docs?.source}}};const _=["Default","WithTrend","NegativeTrend","Outline","Flat"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Flat:i,NegativeTrend:o,Outline:c,WithTrend:n,__namedExportsOrder:_,default:S},Symbol.toStringTag,{value:"Module"}));export{a as D,i as F,c as O,j as S,n as W};
