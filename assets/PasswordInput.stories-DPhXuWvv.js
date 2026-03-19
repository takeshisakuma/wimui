import{j as s}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./Input-CJTX9iTk.js";import{L as p}from"./FieldTemplate-BmL3zOKH.js";import{A as l}from"./i18nConstants-BpHxieg5.js";import{u as d}from"./useTranslation-B7Xipwtw.js";const e=o=>s.jsx(a,{...o,type:"password",showPasswordToggle:!0});e.__docgenInfo={description:`パスワード入力に特化したコンポーネント。\r
表示/非表示の切り替え機能を内蔵しています。`,methods:[],displayName:"PasswordInput"};const u={title:"Components/Basic Inputs/PasswordInput",component:e,tags:[]},r={render:function(n){const{t}=d(l);return s.jsx(p,{label:t("story_passwordinput_label"),children:s.jsx(e,{...n,placeholder:t("story_passwordinput_placeholder")})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_passwordinput_label")}>\r
        <PasswordInput {...args} placeholder={t("story_passwordinput_placeholder")} />\r
      </Label>;
  }
}`,...r.parameters?.docs?.source}}};const c=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:c,default:u},Symbol.toStringTag,{value:"Module"}));export{r as D,b as P};
