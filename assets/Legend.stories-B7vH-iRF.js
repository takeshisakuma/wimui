import{j as s}from"./jsx-runtime-u17CrQMm.js";import{L as o}from"./Legend-D4GXeC34.js";import{A as a}from"./iframe-BK1fL04m.js";import{u as d}from"./useTranslation-DPglThRD.js";const u={title:"Components/Form Layout/Legend",component:o,parameters:{layout:"padded"}},e={render:function(n){const{t}=d(a);return s.jsx(o,{...n,children:t("story_legend_title")})}},r={render:function(n){const{t}=d(a);return s.jsx(o,{...n,children:t("story_legend_long")})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Legend {...args}>{t("story_legend_title")}</Legend>;
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Legend {...args}>{t("story_legend_long")}</Legend>;
  }
}`,...r.parameters?.docs?.source}}};const l=["Default","LongText"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:e,LongText:r,__namedExportsOrder:l,default:u},Symbol.toStringTag,{value:"Module"}));export{e as D,L,r as a};
