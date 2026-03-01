import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-RqRUvN2f.js";import{I as p}from"./Input-BCAp5AKG.js";import{L as c}from"./Label-CONUD-o3.js";const o=e=>{const[r,a]=l.useState(!1),n=()=>{a(!r)};return t.jsx(p,{...e,type:r?"text":"password",rightIcon:r?"EyeOffIcon":"EyeIcon",onRightIconClick:n})};o.__docgenInfo={description:`パスワード入力に特化したコンポーネント。
表示/非表示の切り替え機能を内蔵しています。`,methods:[],displayName:"PasswordInput"};const i={title:"Components/Basic Inputs/PasswordInput",component:o,tags:[]},s={render:e=>t.jsx(c,{label:"パスワード",children:t.jsx(o,{...e})}),args:{placeholder:"P@ssw0rd123"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="パスワード">\r
      <PasswordInput {...args} />\r
    </Label>,
  args: {
    placeholder: "P@ssw0rd123"
  }
}`,...s.parameters?.docs?.source}}};const d=["Default"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{s as D,g as P};
