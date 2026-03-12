import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as o}from"./Badge-C8x5xURE.js";import{u as t}from"./useTranslation-BH3LN071.js";const _={title:"Components/Data Indicators/Badge",component:o,tags:[],parameters:{layout:"centered"}},a={render:function(n){const{t:r}=t(["docs","common","components"]);return e.jsx(o,{...n,content:r("story_badge_content")})},args:{status:"primary"}},c={render:function(n){const{t:r}=t(["docs","common","components"]);return e.jsx(o,{...n,content:r("story_badge_secondary")})},args:{status:"secondary"}},d={render:function(n){const{t:r}=t(["docs","common","components"]);return e.jsx(o,{...n,content:r("story_badge_error")})},args:{status:"error"}},i={render:function(n){const{t:r}=t(["docs","common","components"]);return e.jsx(o,{...n,content:r("story_badge_neutral")})},args:{status:"neutral"}},u={render:function(n){const{t:r}=t(["docs","common","components"]);return e.jsx(o,{...n,content:r("story_badge_outline")})},args:{variant:"outline",status:"primary"}},m={render:function(n){const{t:r}=t(["docs","common","components"]);return e.jsx(o,{...n,content:r("story_badge_small")})},args:{size:"small"}},g={render:function(n){const{t:r}=t(["docs","common","components"]);return e.jsx(o,{...n,content:r("required")})},args:{status:"error",size:"small"}},p={render:function(n){const{t:r}=t(["docs","common","components"]);return e.jsx(o,{...n,content:r("optional")})},args:{status:"neutral",size:"small"}},l={render:function(n){const{t:r}=t(["docs","common","components"]);return e.jsx(o,{...n,content:r("story_badge_verified"),icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6 9 17l-5-5"})})})},args:{status:"primary"}},y={args:{icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 6 9 17l-5-5"})}),status:"primary"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Badge {...args} content={t("story_badge_content")} />;
  },
  args: {
    status: "primary"
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Badge {...args} content={t("story_badge_secondary")} />;
  },
  args: {
    status: "secondary"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Badge {...args} content={t("story_badge_error")} />;
  },
  args: {
    status: "error"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Badge {...args} content={t("story_badge_neutral")} />;
  },
  args: {
    status: "neutral"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Badge {...args} content={t("story_badge_outline")} />;
  },
  args: {
    variant: "outline",
    status: "primary"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Badge {...args} content={t("story_badge_small")} />;
  },
  args: {
    size: "small"
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Badge {...args} content={t("required")} />;
  },
  args: {
    status: "error",
    size: "small"
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Badge {...args} content={t("optional")} />;
  },
  args: {
    status: "neutral",
    size: "small"
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Badge {...args} content={t("story_badge_verified")} icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\r
            <path d="M20 6 9 17l-5-5" />\r
          </svg>} />;
  },
  args: {
    status: "primary"
  }
}`,...l.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\r
        <path d="M20 6 9 17l-5-5" />\r
      </svg>,
    status: "primary"
  }
}`,...y.parameters?.docs?.source}}};const f=["Primary","Secondary","Destructive","Neutral","Outline","Small","Required","Optional","WithIcon","IconOnly"],j=Object.freeze(Object.defineProperty({__proto__:null,Destructive:d,IconOnly:y,Neutral:i,Optional:p,Outline:u,Primary:a,Required:g,Secondary:c,Small:m,WithIcon:l,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{j as B,d as D,y as I,u as O,a as P,c as S,l as W};
