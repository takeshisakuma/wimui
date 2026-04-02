import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as t}from"./Badge-XGjisdPb.js";import{I as A}from"./Icon-BlFN6n3q.js";import{A as s}from"./iframe-DKmwcFSw.js";import{u as a}from"./useTranslation-cHJIwR7k.js";const _={title:"Components/Data Indicators/Badge",component:t,tags:[],parameters:{layout:"centered"}},c={render:function(n){const{t:r}=a(s);return e.jsx(t,{...n,content:r("story.badge_content")})},args:{intent:"primary"}},i={render:function(n){const{t:r}=a(s);return e.jsx(t,{...n,content:r("story.badge_secondary")})},args:{intent:"secondary"}},d={render:function(n){const{t:r}=a(s);return e.jsx(t,{...n,content:r("story.badge_error")})},args:{intent:"error"}},u={render:function(n){const{t:r}=a(s);return e.jsx(t,{...n,content:r("story.badge_neutral")})},args:{intent:"neutral"}},m={render:function(n){const{t:r}=a(s);return e.jsx(t,{...n,content:r("story.badge_outline")})},args:{variant:"outline",intent:"primary"}},g={render:function(n){const{t:r}=a(s);return e.jsx(t,{...n,content:r("story.badge_small")})},args:{size:"sm"}},p={render:function(n){const{t:r}=a(s);return e.jsx(t,{...n,content:r("required")})},args:{intent:"error",size:"sm"}},l={render:function(n){const{t:r}=a(s);return e.jsx(t,{...n,content:r("optional")})},args:{intent:"neutral",size:"sm"}},S={render:function(n){const{t:r}=a(s);return e.jsx(t,{...n,content:r("story.badge_verified"),icon:e.jsx(A,{name:"CheckIcon"})})},args:{intent:"primary"}},y={args:{icon:e.jsx(A,{name:"CheckIcon"}),intent:"primary"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_content")} />;
  },
  args: {
    intent: "primary"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_secondary")} />;
  },
  args: {
    intent: "secondary"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_error")} />;
  },
  args: {
    intent: "error"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_neutral")} />;
  },
  args: {
    intent: "neutral"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_outline")} />;
  },
  args: {
    variant: "outline",
    intent: "primary"
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
    intent: "error",
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
    intent: "neutral",
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
    intent: "primary"
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="CheckIcon" />,
    intent: "primary"
  }
}`,...y.parameters?.docs?.source}}};const f=["Primary","Secondary","Destructive","Neutral","Outline","Small","Required","Optional","WithIcon","IconOnly"],x=Object.freeze(Object.defineProperty({__proto__:null,Destructive:d,IconOnly:y,Neutral:u,Optional:l,Outline:m,Primary:c,Required:p,Secondary:i,Small:g,WithIcon:S,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{x as B,d as D,y as I,m as O,i as S,S as W};
