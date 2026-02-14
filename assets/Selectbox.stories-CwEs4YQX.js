import{S as r}from"./Selectbox-TgoLOd9X.js";const n={title:"Component/Selection Controls/Selectbox",component:r,parameters:{layout:"centered",docs:{description:{component:"ユーザーが定義済みの選択肢から1つを選択するためのコンポーネント。"}}},tags:[],argTypes:{onChange:{action:"changed"}}},s=[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"},{label:"Disabled Option",value:"opt4",disabled:!0},{label:"Option 5",value:"opt5"}],e={args:{options:s,placeholder:"Select an option..."}},o={args:{label:"Choose an item",options:s,placeholder:"Select..."}},a={args:{options:s,defaultValue:"opt2"}},t={args:{options:s,disabled:!0,defaultValue:"opt1"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    placeholder: "Select an option..."
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Choose an item",
    options: options,
    placeholder: "Select..."
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    defaultValue: "opt2"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    disabled: true,
    defaultValue: "opt1"
  }
}`,...t.parameters?.docs?.source}}};const l=["Default","WithLabel","Preselected","Disabled"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:t,Preselected:a,WithLabel:o,__namedExportsOrder:l,default:n},Symbol.toStringTag,{value:"Module"}));export{e as D,a as P,c as S,o as W,t as a};
