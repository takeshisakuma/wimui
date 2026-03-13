import{j as n}from"./jsx-runtime-u17CrQMm.js";import{B as e}from"./Badge-CkifGuHW.js";import{I as y}from"./Icon-OHntu2hx.js";import{u as r}from"./useTranslation-CLFZhCB5.js";const v={title:"Components/Data Indicators/Badge",component:e,tags:[],parameters:{layout:"centered"}},c={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_content")})},args:{status:"primary"}},a={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_secondary")})},args:{status:"secondary"}},d={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_error")})},args:{status:"error"}},i={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_neutral")})},args:{status:"neutral"}},_={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_outline")})},args:{variant:"outline",status:"primary"}},u={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_small")})},args:{size:"small"}},m={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("required")})},args:{status:"error",size:"small"}},l={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("optional")})},args:{status:"neutral",size:"small"}},p={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_verified"),icon:n.jsx(y,{name:"CheckIcon"})})},args:{status:"primary"}},g={args:{icon:n.jsx(y,{name:"CheckIcon"}),status:"primary"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Badge {...args} content={t("story_badge_content")} />;
  },
  args: {
    status: "primary"
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Badge {...args} content={t("story_badge_secondary")} />;
  },
  args: {
    status: "secondary"
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Badge {...args} content={t("story_badge_error")} />;
  },
  args: {
    status: "error"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Badge {...args} content={t("story_badge_neutral")} />;
  },
  args: {
    status: "neutral"
  }
}`,...i.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Badge {...args} content={t("story_badge_outline")} />;
  },
  args: {
    variant: "outline",
    status: "primary"
  }
}`,..._.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Badge {...args} content={t("story_badge_small")} />;
  },
  args: {
    size: "small"
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Badge {...args} content={t("required")} />;
  },
  args: {
    status: "error",
    size: "small"
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Badge {...args} content={t("optional")} />;
  },
  args: {
    status: "neutral",
    size: "small"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Badge {...args} content={t("story_badge_verified")} icon={<Icon name="CheckIcon" />} />;
  },
  args: {
    status: "primary"
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="CheckIcon" />,
    status: "primary"
  }
}`,...g.parameters?.docs?.source}}};const f=["Primary","Secondary","Destructive","Neutral","Outline","Small","Required","Optional","WithIcon","IconOnly"],x=Object.freeze(Object.defineProperty({__proto__:null,Destructive:d,IconOnly:g,Neutral:i,Optional:l,Outline:_,Primary:c,Required:m,Secondary:a,Small:u,WithIcon:p,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{x as B,d as D,g as I,_ as O,c as P,a as S,p as W};
