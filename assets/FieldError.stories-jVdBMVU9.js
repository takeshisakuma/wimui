import{j as n}from"./jsx-runtime-u17CrQMm.js";import{F as t}from"./FieldError-eno_Posb.js";import{u as c}from"./useTranslation-DD4zKDMJ.js";const a={title:"Components/Form Layout/FieldError",component:t,argTypes:{content:{control:"text"}}},o={render:function(r){const{t:e}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(t,{...r,content:e("story_fielderror_error")})}},s={render:function(r){const{t:e}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(t,{...r,content:e("story_fielderror_required")})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <FieldError {...args} content={t("story_fielderror_error")} />;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <FieldError {...args} content={t("story_fielderror_required")} />;
  }
}`,...s.parameters?.docs?.source}}};const i=["Default","ShortMessage"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:o,ShortMessage:s,__namedExportsOrder:i,default:a},Symbol.toStringTag,{value:"Module"}));export{o as D,m as F,s as S};
