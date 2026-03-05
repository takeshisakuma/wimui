import{S as l}from"./Selectbox-BDhwE0Yq.js";const n={title:"Components/Selection Controls/Selectbox",component:l,parameters:{layout:"centered",docs:{description:{component:"ユーザーが定義済みの選択肢から1つを選択するためのコンポーネント。"}}},argTypes:{onChange:{action:"changed"}}},s=[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"},{label:"Disabled Option",value:"opt4",disabled:!0},{label:"Option 5",value:"opt5"}],e={args:{options:s,placeholder:"Select an option..."}},o={args:{label:"Choose an item",options:s,placeholder:"Select..."}},a={args:{options:s,defaultValue:"opt2"}},t={args:{options:s,disabled:!0,defaultValue:"opt1"}},p=[{label:"Settings",value:"settings"},{label:"Profile",value:"profile"},{type:"separator"},{label:"Help",value:"help"},{label:"About",value:"about"},{type:"separator"},{label:"Logout",value:"logout"}],r={args:{options:p,placeholder:"Select an action..."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: optionsWithSeparators,
    placeholder: "Select an action..."
  }
}`,...r.parameters?.docs?.source}}};const c=["Default","WithLabel","Preselected","Disabled","WithSeparator"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:t,Preselected:a,WithLabel:o,WithSeparator:r,__namedExportsOrder:c,default:n},Symbol.toStringTag,{value:"Module"}));export{e as D,a as P,u as S,o as W,t as a,r as b};
