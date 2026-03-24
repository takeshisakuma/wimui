import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as t}from"./Badge-Dn1HZ7QJ.js";import{I as y}from"./Icon-BTUrwpYf.js";import{A as s}from"./iframe-CYpWGnOJ.js";import{u as a}from"./useTranslation-D3SeTq_M.js";const A={title:"Components/Data Indicators/Badge",component:t,tags:[],parameters:{layout:"centered"}},c={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story_badge_content")})},args:{status:"primary"}},u={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story_badge_secondary")})},args:{status:"secondary"}},d={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story_badge_error")})},args:{status:"error"}},i={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story_badge_neutral")})},args:{status:"neutral"}},m={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story_badge_outline")})},args:{variant:"outline",status:"primary"}},g={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story_badge_small")})},args:{size:"small"}},l={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("required")})},args:{status:"error",size:"small"}},p={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("optional")})},args:{status:"neutral",size:"small"}},_={render:function(r){const{t:n}=a(s);return e.jsx(t,{...r,content:n("story_badge_verified"),icon:e.jsx(y,{name:"CheckIcon"})})},args:{status:"primary"}},S={args:{icon:e.jsx(y,{name:"CheckIcon"}),status:"primary"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story_badge_content")} />;
  },
  args: {
    status: "primary"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story_badge_secondary")} />;
  },
  args: {
    status: "secondary"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story_badge_error")} />;
  },
  args: {
    status: "error"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story_badge_neutral")} />;
  },
  args: {
    status: "neutral"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story_badge_outline")} />;
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
    return <Badge {...args} content={t("story_badge_small")} />;
  },
  args: {
    size: "small"
  }
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("required")} />;
  },
  args: {
    status: "error",
    size: "small"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("optional")} />;
  },
  args: {
    status: "neutral",
    size: "small"
  }
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story_badge_verified")} icon={<Icon name="CheckIcon" />} />;
  },
  args: {
    status: "primary"
  }
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="CheckIcon" />,
    status: "primary"
  }
}`,...S.parameters?.docs?.source}}};const f=["Primary","Secondary","Destructive","Neutral","Outline","Small","Required","Optional","WithIcon","IconOnly"],x=Object.freeze(Object.defineProperty({__proto__:null,Destructive:d,IconOnly:S,Neutral:i,Optional:p,Outline:m,Primary:c,Required:l,Secondary:u,Small:g,WithIcon:_,__namedExportsOrder:f,default:A},Symbol.toStringTag,{value:"Module"}));export{x as B,d as D,S as I,m as O,u as S,_ as W};
