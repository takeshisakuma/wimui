import{j as o}from"./jsx-runtime-u17CrQMm.js";import{P as s}from"./index-VeECYVvo.js";import{P as c}from"./Paragraph-DaZZB-tU.js";const t=({content:n,className:a="",...p})=>o.jsx("div",{className:["wim-input-error",a].filter(Boolean).join(" "),role:"alert","aria-live":"polite",...p,children:o.jsx(c,{content:n,color:"error",size:"small"})});t.propTypes={content:s.string.isRequired,className:s.string};t.__docgenInfo={description:"入力フィールドの下に表示するバリデーションエラーメッセージ用のコンポーネント。",methods:[],displayName:"InputError",props:{content:{required:!0,tsType:{name:"string"},description:"表示するエラーメッセージの翻訳キーまたはテキスト。",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const i={title:"Component/Forms/InputError",component:t,argTypes:{content:{control:"text"}}},e={args:{content:"入力内容に誤りがあります。"}},r={args:{content:"必須項目です。"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    content: "入力内容に誤りがあります。"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: "必須項目です。"
  }
}`,...r.parameters?.docs?.source}}};const m=["Default","ShortMessage"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:e,ShortMessage:r,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{e as D,g as I,r as S};
