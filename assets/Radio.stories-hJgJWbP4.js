import{R as t}from"./Radio-BHPJ9_32.js";const l={title:"Components/Selection Controls/Radio",component:t,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},e={args:{label:"Option 1",value:"option1"}},a={args:{label:"Checked Option",checked:!0,value:"checked"}},r={args:{label:"Disabled Option",disabled:!0,value:"disabled"}},o={args:{label:"Disabled Checked Option",disabled:!0,checked:!0,value:"disabled-checked"}},s={args:{label:"This is a very long label that might wrap to multiple lines depending on the container width.",value:"long"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Option 1",
    value: "option1"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checked Option",
    checked: true,
    value: "checked"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled Option",
    disabled: true,
    value: "disabled"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled Checked Option",
    disabled: true,
    checked: true,
    value: "disabled-checked"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "This is a very long label that might wrap to multiple lines depending on the container width.",
    value: "long"
  }
}`,...s.parameters?.docs?.source}}};const n=["Default","Checked","Disabled","DisabledChecked","LongLabel"],d=Object.freeze(Object.defineProperty({__proto__:null,Checked:a,Default:e,Disabled:r,DisabledChecked:o,LongLabel:s,__namedExportsOrder:n,default:l},Symbol.toStringTag,{value:"Module"}));export{a as C,e as D,d as R,r as a};
