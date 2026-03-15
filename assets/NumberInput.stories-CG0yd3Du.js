import{j as l}from"./jsx-runtime-u17CrQMm.js";import{c as y}from"./index-BRP2Ilxn.js";import{I as N}from"./Input-BrY5F9cG.js";import{A as x}from"./i18nConstants-BpHxieg5.js";import{u as _}from"./useTranslation-CPTvk89p.js";const p=({mode:n="number",hideSpinButton:s=!0,allowDecimal:u=!1,allowNegative:d=!1,onKeyDown:f,className:X,...i})=>{const b=n==="number"?"number":"text",g=n==="text"?"numeric":i.inputMode,S=n==="text"?"[0-9]*":i.pattern,h=m=>{if(n==="number"){const c=["e","E"];d||c.push("-","+"),u||c.push("."),c.includes(m.key)&&m.preventDefault()}f?.(m)};return l.jsx(N,{...i,type:b,inputMode:g,pattern:S,onKeyDown:h,className:X,inputClassName:y(s&&"wim-input--hide-spin")})};p.__docgenInfo={description:"数値入力に特化したコンポーネント。",methods:[],displayName:"NumberInput",props:{mode:{required:!1,tsType:{name:"union",raw:'"number" | "text"',elements:[{name:"literal",value:'"number"'},{name:"literal",value:'"text"'}]},description:`'number': ネイティブの type="number" を使用（数量の増減など）
'text': type="text" + inputmode を使用（クレカ番号、IDなど、ゼロを保持したい場合）`,defaultValue:{value:'"number"',computed:!1}},hideSpinButton:{required:!1,tsType:{name:"boolean"},description:"スピンボタンを非表示にするか",defaultValue:{value:"true",computed:!1}},allowDecimal:{required:!1,tsType:{name:"boolean"},description:'小数点を許可するか (mode="number" の場合のみ有効)',defaultValue:{value:"false",computed:!1}},allowNegative:{required:!1,tsType:{name:"boolean"},description:'負の数を許可するか (mode="number" の場合のみ有効)',defaultValue:{value:"false",computed:!1}}}};const v={title:"Components/Basic Inputs/NumberInput",component:p,tags:[]},o={render:function(s){const{t:u}=_(x);return l.jsx(p,{...s,placeholder:u("story_numberinput_placeholder")})}},e={args:{mode:"number",hideSpinButton:!0}},r={args:{mode:"text",placeholder:"XXXX-XXXX-XXXX-XXXX"}},t={args:{mode:"number",hideSpinButton:!1}},a={args:{mode:"number",allowDecimal:!0,allowNegative:!0,placeholder:"-123.45"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <NumberInput {...args} placeholder={t("story_numberinput_placeholder")} />;
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "number",
    hideSpinButton: true
  }
}`,...e.parameters?.docs?.source},description:{story:"数量の入力など、数値の増減が必要な場合（デフォルト）",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "text",
    placeholder: "XXXX-XXXX-XXXX-XXXX"
  }
}`,...r.parameters?.docs?.source},description:{story:"クレジットカード番号やIDなど、「記号としての数字」を入力する場合",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "number",
    hideSpinButton: false
  }
}`,...t.parameters?.docs?.source},description:{story:"ブラウザ標準のスピンボタンを表示したい場合",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "number",
    allowDecimal: true,
    allowNegative: true,
    placeholder: "-123.45"
  }
}`,...a.parameters?.docs?.source},description:{story:"小数点や負の数を許可する場合",...a.parameters?.docs?.description}}};const D=["Default","NumericMode","TextMode","ShowSpinButton","DecimalAndNegative"],B=Object.freeze(Object.defineProperty({__proto__:null,DecimalAndNegative:a,Default:o,NumericMode:e,ShowSpinButton:t,TextMode:r,__namedExportsOrder:D,default:v},Symbol.toStringTag,{value:"Module"}));export{a as D,B as N,t as S,r as T,e as a};
