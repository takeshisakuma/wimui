import{j as r}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./Input-sU3_hVtN.js";import{L as u}from"./FieldTemplate-6JmiT8eB.js";import{A as p}from"./i18nConstants-fBKvcUJT.js";import{u as l}from"./useTranslation-BfYXAya8.js";const t=n=>r.jsx(a,{type:"number",...n});t.__docgenInfo={description:"数値入力に特化したコンポーネント。",methods:[],displayName:"NumberInput"};const m={title:"Components/Basic Inputs/NumberInput",component:t,tags:[]},e={render:function(s){const{t:o}=l(p);return r.jsx(u,{label:o("story_numberinput_label"),children:r.jsx(t,{...s,placeholder:o("story_numberinput_placeholder")})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_numberinput_label")}>\r
        <NumberInput {...args} placeholder={t("story_numberinput_placeholder")} />\r
      </Label>;
  }
}`,...e.parameters?.docs?.source}}};const c=["Default"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{e as D,I as N};
