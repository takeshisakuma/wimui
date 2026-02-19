import{S as p}from"./Selectbox-1xUyi2xp.js";const c={title:"Component/Selection Controls/Selectbox",component:p,parameters:{layout:"centered",docs:{description:{component:"ユーザーが定義済みの選択肢から1つを選択するためのコンポーネント。"}}},tags:[],argTypes:{onChange:{action:"changed"}}},n=[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"},{label:"Disabled Option",value:"opt4",disabled:!0},{label:"Option 5",value:"opt5"}],e={args:{options:n,placeholder:"Select an option..."}},a={args:{label:"Choose an item",options:n,placeholder:"Select..."}},o={args:{options:n,defaultValue:"opt2"}},t={args:{options:n,disabled:!0,defaultValue:"opt1"}},l=[{label:"Settings",value:"settings"},{label:"Profile",value:"profile"},{type:"separator"},{label:"Help",value:"help"},{label:"About",value:"about"},{type:"separator"},{label:"Logout",value:"logout"}],r={args:{options:l,placeholder:"Select an action..."}},s={args:{options:l,native:!0,placeholder:"Select (Native)..."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    placeholder: "Select an option..."
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Choose an item",
    options: options,
    placeholder: "Select..."
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    defaultValue: "opt2"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    options: optionsWithSeparators,
    native: true,
    placeholder: "Select (Native)..."
  }
}`,...s.parameters?.docs?.source}}};const i=["Default","WithLabel","Preselected","Disabled","WithSeparator","NativeWithSeparator"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:t,NativeWithSeparator:s,Preselected:o,WithLabel:a,WithSeparator:r,__namedExportsOrder:i,default:c},Symbol.toStringTag,{value:"Module"}));export{e as D,s as N,o as P,d as S,a as W,t as a,r as b};
