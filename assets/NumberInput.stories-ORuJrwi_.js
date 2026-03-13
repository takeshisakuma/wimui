import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./Input-Cs2zhZT6.js";import{L as c}from"./FieldTemplate-DX5m6Pme.js";import{u}from"./useTranslation-CLFZhCB5.js";const s=t=>e.jsx(a,{type:"number",...t});s.__docgenInfo={description:"数値入力に特化したコンポーネント。",methods:[],displayName:"NumberInput"};const d={title:"Components/Basic Inputs/NumberInput",component:s,tags:[]},o={render:function(r){const{t:n}=u(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(c,{label:n("story_numberinput_label"),children:e.jsx(s,{...r,placeholder:n("story_numberinput_placeholder")})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_numberinput_label")}>\r
        <NumberInput {...args} placeholder={t("story_numberinput_placeholder")} />\r
      </Label>;
  }
}`,...o.parameters?.docs?.source}}};const l=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{o as D,b as N};
