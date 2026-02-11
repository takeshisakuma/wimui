import{S as l}from"./Switch-ChzEMU8m.js";const c={title:"Component/Selection Controls/Switch",component:l,parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["small","medium"]}}},e={args:{label:"Enable notifications"}},a={args:{label:"Wi-Fi",defaultChecked:!0}},r={args:{label:"Airplane Mode",size:"small"}},s={args:{label:"Bluetooth",disabled:!0}},o={args:{label:"Bluetooth",disabled:!0,defaultChecked:!0}},t={args:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Enable notifications"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Wi-Fi",
    defaultChecked: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Airplane Mode",
    size: "small"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Bluetooth",
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Bluetooth",
    disabled: true,
    defaultChecked: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};const n=["Default","Checked","Small","Disabled","DisabledChecked","NoLabel"],i=Object.freeze(Object.defineProperty({__proto__:null,Checked:a,Default:e,Disabled:s,DisabledChecked:o,NoLabel:t,Small:r,__namedExportsOrder:n,default:c},Symbol.toStringTag,{value:"Module"}));export{a as C,s as D,i as S,r as a};
