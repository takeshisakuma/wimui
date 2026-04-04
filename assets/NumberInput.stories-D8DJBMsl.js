import{j as m}from"./jsx-runtime-u17CrQMm.js";import{N as s}from"./NumberInput-BhD4qliJ.js";import{A as i}from"./iframe-By123agS.js";import{u as p}from"./useTranslation-svuQDxOH.js";const u={title:"Components/Basic Inputs/NumberInput",component:s,tags:[]},a={render:function(n){const{t:c}=p(i);return m.jsx(s,{...n,placeholder:c("story.numberinput_placeholder")})}},e={args:{mode:"number",hideSpinButton:!0,"aria-label":"Number"}},r={args:{mode:"text",placeholder:"XXXX-XXXX-XXXX-XXXX"}},o={args:{mode:"number",hideSpinButton:!1}},t={args:{mode:"number",allowDecimal:!0,allowNegative:!0,placeholder:"-123.45"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <NumberInput {...args} placeholder={t("story.numberinput_placeholder")} />;
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "number",
    hideSpinButton: true,
    "aria-label": "Number"
  }
}`,...e.parameters?.docs?.source},description:{story:"数量の入力など、数値の増減が必要な場合（デフォルト）",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "text",
    placeholder: "XXXX-XXXX-XXXX-XXXX"
  }
}`,...r.parameters?.docs?.source},description:{story:"クレジットカード番号やIDなど、「記号としての数字」を入力する場合",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "number",
    hideSpinButton: false
  }
}`,...o.parameters?.docs?.source},description:{story:"ブラウザ標準のスピンボタンを表示したい場合",...o.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "number",
    allowDecimal: true,
    allowNegative: true,
    placeholder: "-123.45"
  }
}`,...t.parameters?.docs?.source},description:{story:"小数点や負の数を許可する場合",...t.parameters?.docs?.description}}};const d=["Default","NumericMode","TextMode","ShowSpinButton","DecimalAndNegative"],N=Object.freeze(Object.defineProperty({__proto__:null,DecimalAndNegative:t,Default:a,NumericMode:e,ShowSpinButton:o,TextMode:r,__namedExportsOrder:d,default:u},Symbol.toStringTag,{value:"Module"}));export{t as D,N,o as S,r as T,e as a};
