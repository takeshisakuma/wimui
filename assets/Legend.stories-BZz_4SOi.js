import{j as s}from"./jsx-runtime-u17CrQMm.js";import{L as t}from"./Legend-FZedZ3SF.js";import{u as a}from"./useTranslation-C_sUcuQ0.js";const d={title:"Components/Form Layout/Legend",component:t,parameters:{layout:"padded"}},e={render:function(o){const{t:r}=a(["docs","common","components"]);return s.jsx(t,{...o,children:r("story_legend_title")})}},n={render:function(o){const{t:r}=a(["docs","common","components"]);return s.jsx(t,{...o,children:r("story_legend_long")})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Legend {...args}>{t("story_legend_title")}</Legend>;
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Legend {...args}>{t("story_legend_long")}</Legend>;
  }
}`,...n.parameters?.docs?.source}}};const m=["Default","LongText"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:e,LongText:n,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{e as D,g as L,n as a};
