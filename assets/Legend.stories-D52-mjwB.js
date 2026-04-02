import{j as s}from"./jsx-runtime-u17CrQMm.js";import{L as o}from"./Legend-C4oOgPk0.js";import{A as a}from"./iframe-D3vcI49J.js";import{u as d}from"./useTranslation-DPV0a7Ml.js";const u={title:"Components/Form Layout/Legend",component:o,parameters:{layout:"padded"}},e={render:function(n){const{t}=d(a);return s.jsx(o,{...n,children:t("story.legend_title")})}},r={render:function(n){const{t}=d(a);return s.jsx(o,{...n,children:t("story.legend_long")})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Legend {...args}>{t("story.legend_title")}</Legend>;
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Legend {...args}>{t("story.legend_long")}</Legend>;
  }
}`,...r.parameters?.docs?.source}}};const l=["Default","LongText"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:e,LongText:r,__namedExportsOrder:l,default:u},Symbol.toStringTag,{value:"Module"}));export{e as D,L,r as a};
