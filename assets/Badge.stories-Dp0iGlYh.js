import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as t}from"./Badge-ClyI3h6w.js";import{I as A}from"./Icon-DuncFQFu.js";import{A as s}from"./iframe-00CRNq2O.js";import{u as a}from"./useTranslation-BYdSjFhs.js";const _={title:"Components/Data Indicators/Badge",component:t,tags:[],parameters:{layout:"centered"}},c={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story.badge_content")})},args:{status:"primary"}},u={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story.badge_secondary")})},args:{status:"secondary"}},d={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story.badge_error")})},args:{status:"error"}},i={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story.badge_neutral")})},args:{status:"neutral"}},m={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story.badge_outline")})},args:{variant:"outline",status:"primary"}},g={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story.badge_small")})},args:{size:"sm"}},p={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("required")})},args:{status:"error",size:"sm"}},l={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("optional")})},args:{status:"neutral",size:"sm"}},S={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story.badge_verified"),icon:e.jsx(A,{name:"CheckIcon"})})},args:{status:"primary"}},y={args:{icon:e.jsx(A,{name:"CheckIcon"}),status:"primary"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_content")} />;
  },
  args: {
    status: "primary"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_secondary")} />;
  },
  args: {
    status: "secondary"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_error")} />;
  },
  args: {
    status: "error"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_neutral")} />;
  },
  args: {
    status: "neutral"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_outline")} />;
  },
  args: {
    variant: "outline",
    status: "primary"
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_small")} />;
  },
  args: {
    size: "sm"
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("required")} />;
  },
  args: {
    status: "error",
    size: "sm"
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("optional")} />;
  },
  args: {
    status: "neutral",
    size: "sm"
  }
}`,...l.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_verified")} icon={<Icon name="CheckIcon" />} />;
  },
  args: {
    status: "primary"
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="CheckIcon" />,
    status: "primary"
  }
}`,...y.parameters?.docs?.source}}};const f=["Primary","Secondary","Destructive","Neutral","Outline","Small","Required","Optional","WithIcon","IconOnly"],x=Object.freeze(Object.defineProperty({__proto__:null,Destructive:d,IconOnly:y,Neutral:i,Optional:l,Outline:m,Primary:c,Required:p,Secondary:u,Small:g,WithIcon:S,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{x as B,d as D,y as I,m as O,u as S,S as W};
