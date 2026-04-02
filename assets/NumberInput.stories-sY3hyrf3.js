import{j as m}from"./jsx-runtime-u17CrQMm.js";import{N as a}from"./NumberInput-CfapZBEP.js";import{A as p}from"./iframe-GzHoau5L.js";import{u as d}from"./useTranslation-Ckw9ivsw.js";const i={title:"Components/Basic Inputs/NumberInput",component:a,tags:[]},s={render:function(n){const{t:c}=d(p);return m.jsx(a,{...n,placeholder:c("story.numberinput_placeholder")})}},e={args:{mode:"number",hideSpinButton:!0}},r={args:{mode:"text",placeholder:"XXXX-XXXX-XXXX-XXXX"}},o={args:{mode:"number",hideSpinButton:!1}},t={args:{mode:"number",allowDecimal:!0,allowNegative:!0,placeholder:"-123.45"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <NumberInput {...args} placeholder={t("story.numberinput_placeholder")} />;
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "number",
    hideSpinButton: true
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
}`,...t.parameters?.docs?.source},description:{story:"小数点や負の数を許可する場合",...t.parameters?.docs?.description}}};const u=["Default","NumericMode","TextMode","ShowSpinButton","DecimalAndNegative"],h=Object.freeze(Object.defineProperty({__proto__:null,DecimalAndNegative:t,Default:s,NumericMode:e,ShowSpinButton:o,TextMode:r,__namedExportsOrder:u,default:i},Symbol.toStringTag,{value:"Module"}));export{t as D,h as N,o as S,r as T,e as a};
