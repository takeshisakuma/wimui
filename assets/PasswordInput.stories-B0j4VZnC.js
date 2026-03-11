import{j as s}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./Input-CSD9z_cs.js";import{L as p}from"./Label-BbZVH_Iw.js";import{u as d}from"./useTranslation-ZF4WB21B.js";const e=r=>s.jsx(a,{...r,type:"password",showPasswordToggle:!0});e.__docgenInfo={description:`パスワード入力に特化したコンポーネント。
表示/非表示の切り替え機能を内蔵しています。`,methods:[],displayName:"PasswordInput"};const l={title:"Components/Basic Inputs/PasswordInput",component:e,tags:[]},o={render:function(n){const{t}=d(["docs","common","components"]);return s.jsx(p,{label:t("story_passwordinput_label"),children:s.jsx(e,{...n,placeholder:t("story_passwordinput_placeholder")})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_passwordinput_label")}>\r
        <PasswordInput {...args} placeholder={t("story_passwordinput_placeholder")} />\r
      </Label>;
  }
}`,...o.parameters?.docs?.source}}};const c=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{o as D,f as P};
