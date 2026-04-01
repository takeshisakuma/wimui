import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as n}from"./Input-CLIXuJZa.js";import{L as p}from"./FieldTemplate-D5AQ_5CK.js";import{A as l}from"./iframe-00CRNq2O.js";import{u as d}from"./useTranslation-BYdSjFhs.js";const r=o=>e.jsx(n,{...o,type:"password",showPasswordToggle:!0});r.__docgenInfo={description:`パスワード入力に特化したコンポーネント。
表示/非表示の切り替え機能を内蔵しています。`,methods:[],displayName:"PasswordInput"};const u={title:"Components/Basic Inputs/PasswordInput",component:r,tags:[],args:{disabled:!1},argTypes:{disabled:{control:"boolean"}}},s={render:function(a){const{t}=d(l);return e.jsx(p,{label:t("story.passwordinput_label"),children:e.jsx(r,{...a,placeholder:t("story.passwordinput_placeholder")})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.passwordinput_label")}>
        <PasswordInput {...args} placeholder={t("story.passwordinput_placeholder")} />
      </Label>;
  }
}`,...s.parameters?.docs?.source}}};const c=["Default"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:c,default:u},Symbol.toStringTag,{value:"Module"}));export{s as D,w as P};
