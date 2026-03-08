import{j as r}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./Input-D-5EQmKT.js";import{L as u}from"./Label-nQHV7_Pp.js";import{u as m}from"./useTranslation-DccyvZwG.js";const n=t=>r.jsx(a,{type:"number",...t});n.__docgenInfo={description:"数値入力に特化したコンポーネント。",methods:[],displayName:"NumberInput"};const p={title:"Components/Basic Inputs/NumberInput",component:n,tags:[]},e={render:function(s){const{t:o}=m(["docs","common","components"]);return r.jsx(u,{label:o("story_numberinput_label"),children:r.jsx(n,{...s,placeholder:o("story_numberinput_placeholder")})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_numberinput_label")}>\r
        <NumberInput {...args} placeholder={t("story_numberinput_placeholder")} />\r
      </Label>;
  }
}`,...e.parameters?.docs?.source}}};const l=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{e as D,_ as N};
