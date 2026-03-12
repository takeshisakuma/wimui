import{j as r}from"./jsx-runtime-u17CrQMm.js";import{L as t}from"./Legend-CbCd0ocm.js";import{u as d}from"./useTranslation-CTezHt8M.js";const a={title:"Components/Form Layout/Legend",component:t,parameters:{layout:"padded"}},o={render:function(e){const{t:n}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(t,{...e,children:n("story_legend_title")})}},s={render:function(e){const{t:n}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(t,{...e,children:n("story_legend_long")})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Legend {...args}>{t("story_legend_title")}</Legend>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Legend {...args}>{t("story_legend_long")}</Legend>;
  }
}`,...s.parameters?.docs?.source}}};const i=["Default","LongText"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:o,LongText:s,__namedExportsOrder:i,default:a},Symbol.toStringTag,{value:"Module"}));export{o as D,m as L,s as a};
