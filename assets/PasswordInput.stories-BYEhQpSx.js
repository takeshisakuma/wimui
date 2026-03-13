import{j as s}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./Input-DnM06kGU.js";import{L as d}from"./FieldTemplate-Sq91j-YR.js";import{u as c}from"./useTranslation-D80Uyf_x.js";const e=t=>s.jsx(a,{...t,type:"password",showPasswordToggle:!0});e.__docgenInfo={description:`パスワード入力に特化したコンポーネント。\r
表示/非表示の切り替え機能を内蔵しています。`,methods:[],displayName:"PasswordInput"};const p={title:"Components/Basic Inputs/PasswordInput",component:e,tags:[]},o={render:function(n){const{t:r}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return s.jsx(d,{label:r("story_passwordinput_label"),children:s.jsx(e,{...n,placeholder:r("story_passwordinput_placeholder")})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_passwordinput_label")}>\r
        <PasswordInput {...args} placeholder={t("story_passwordinput_placeholder")} />\r
      </Label>;
  }
}`,...o.parameters?.docs?.source}}};const l=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{o as D,y as P};
