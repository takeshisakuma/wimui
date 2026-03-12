import{j as n}from"./jsx-runtime-u17CrQMm.js";import{B as e}from"./Badge-CFo6vcqa.js";import{u as r}from"./useTranslation-0fSK9VPD.js";const y={title:"Components/Data Indicators/Badge",component:e,tags:[],parameters:{layout:"centered"}},c={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_content")})},args:{status:"primary"}},a={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_secondary")})},args:{status:"secondary"}},d={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_error")})},args:{status:"error"}},i={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_neutral")})},args:{status:"neutral"}},u={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_outline")})},args:{variant:"outline",status:"primary"}},_={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_small")})},args:{size:"small"}},l={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("required")})},args:{status:"error",size:"small"}},g={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("optional")})},args:{status:"neutral",size:"small"}},m={render:function(s){const{t:o}=r(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(e,{...s,content:o("story_badge_verified"),icon:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("path",{d:"M20 6 9 17l-5-5"})})})},args:{status:"primary"}},p={args:{icon:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("path",{d:"M20 6 9 17l-5-5"})}),status:"primary"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Badge {...args} content={t("story_badge_small")} />;
  },
  args: {
    size: "small"
  }
}`,..._.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Badge {...args} content={t("story_badge_verified")} icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\r
            <path d="M20 6 9 17l-5-5" />\r
          </svg>} />;
  },
  args: {
    status: "primary"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\r
        <path d="M20 6 9 17l-5-5" />\r
      </svg>,
    status: "primary"
  }
}`,...p.parameters?.docs?.source}}};const v=["Primary","Secondary","Destructive","Neutral","Outline","Small","Required","Optional","WithIcon","IconOnly"],w=Object.freeze(Object.defineProperty({__proto__:null,Destructive:d,IconOnly:p,Neutral:i,Optional:g,Outline:u,Primary:c,Required:l,Secondary:a,Small:_,WithIcon:m,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{w as B,d as D,p as I,u as O,c as P,a as S,m as W};
