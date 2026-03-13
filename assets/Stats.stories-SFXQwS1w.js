import{j as s}from"./jsx-runtime-u17CrQMm.js";import{S as t}from"./Stats-Cr6jSI7W.js";import{u as d}from"./useTranslation-R4wwOoyb.js";const u={title:"Components/Data Structures/Stats",component:t,parameters:{layout:"centered"},tags:[]},a={render:function(r){const{t:e}=d(["docs","common","components"]);return s.jsxs(t,{...r,children:[s.jsx(t.Label,{children:e("story_stats_total_users")}),s.jsx(t.Value,{children:"1,234"}),s.jsx(t.Description,{children:e("story_stats_desc_users")})]})}},n={render:function(r){const{t:e}=d(["docs","common","components"]);return s.jsxs(t,{...r,children:[s.jsx(t.Label,{children:e("story_stats_revenue")}),s.jsx(t.Value,{children:"$45,231.89"}),s.jsx(t.Trend,{direction:"up",children:"+20.1%"})]})}},o={render:function(r){const{t:e}=d(["docs","common","components"]);return s.jsxs(t,{...r,children:[s.jsx(t.Label,{children:e("story_stats_active_alerts")}),s.jsx(t.Value,{children:"12"}),s.jsx(t.Trend,{direction:"down",children:"-5%"})]})}},c={render:function(r){const{t:e}=d(["docs","common","components"]);return s.jsxs(t,{...r,variant:"outline",children:[s.jsx(t.Label,{children:e("story_stats_page_views")}),s.jsx(t.Value,{children:"12,456"}),s.jsx(t.Trend,{direction:"neutral",children:"0%"})]})}},i={render:function(r){const{t:e}=d(["docs","common","components"]);return s.jsxs(t,{...r,variant:"flat",children:[s.jsx(t.Label,{children:e("story_stats_avg_session")}),s.jsx(t.Value,{children:"2m 34s"}),s.jsx(t.Description,{children:e("story_stats_desc_session")})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Stats {...args}>\r
        <Stats.Label>{t('story_stats_total_users')}</Stats.Label>\r
        <Stats.Value>1,234</Stats.Value>\r
        <Stats.Description>{t('story_stats_desc_users')}</Stats.Description>\r
      </Stats>;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Stats {...args}>\r
        <Stats.Label>{t('story_stats_revenue')}</Stats.Label>\r
        <Stats.Value>$45,231.89</Stats.Value>\r
        <Stats.Trend direction="up">+20.1%</Stats.Trend>\r
      </Stats>;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Stats {...args}>\r
        <Stats.Label>{t('story_stats_active_alerts')}</Stats.Label>\r
        <Stats.Value>12</Stats.Value>\r
        <Stats.Trend direction="down">-5%</Stats.Trend>\r
      </Stats>;
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Stats {...args} variant="outline">\r
        <Stats.Label>{t('story_stats_page_views')}</Stats.Label>\r
        <Stats.Value>12,456</Stats.Value>\r
        <Stats.Trend direction="neutral">0%</Stats.Trend>\r
      </Stats>;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(['docs', 'common', 'components']);
    return <Stats {...args} variant="flat">\r
        <Stats.Label>{t('story_stats_avg_session')}</Stats.Label>\r
        <Stats.Value>2m 34s</Stats.Value>\r
        <Stats.Description>{t('story_stats_desc_session')}</Stats.Description>\r
      </Stats>;
  }
}`,...i.parameters?.docs?.source}}};const m=["Default","WithTrend","NegativeTrend","Outline","Flat"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Flat:i,NegativeTrend:o,Outline:c,WithTrend:n,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{a as D,i as F,c as O,g as S,n as W};
