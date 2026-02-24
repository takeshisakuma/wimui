import{j as m}from"./jsx-runtime-u17CrQMm.js";import{C as l}from"./Checkbox-CvcgyrmV.js";import{r as p}from"./iframe-BR_BxsPn.js";const u={title:"Components/Selection Controls/Checkbox",component:l,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"},label:{control:"text"}}},a={args:{label:"Accept terms and conditions"}},r={args:{label:"Subscribe to newsletter",checked:!0,onChange:()=>{}}},t={args:{label:"Disabled option",disabled:!0}},n={args:{label:"Disabled and checked",disabled:!0,checked:!0,onChange:()=>{}}},o={args:{label:"Indeterminate",indeterminate:!0,checked:!0,onChange:()=>{}}},e=()=>{const[c,d]=p.useState(!1);return m.jsx(l,{label:`Controlled Checkbox: ${c?"On":"Off"}`,checked:c,onChange:i=>d(i.target.checked)})},s={args:{label:"This is a very long label that might wrap to multiple lines depending on the container width."}};e.__docgenInfo={description:"",methods:[],displayName:"Controlled"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Accept terms and conditions"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Subscribe to newsletter",
    checked: true,
    onChange: () => {} // Supress warning
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled option",
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled and checked",
    disabled: true,
    checked: true,
    onChange: () => {}
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Indeterminate",
    indeterminate: true,
    checked: true,
    // Usually indeterminate implies partially selected
    onChange: () => {}
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:'() => {\n  const [checked, setChecked] = useState(false);\n  return <Checkbox label={`Controlled Checkbox: ${checked ? "On" : "Off"}`} checked={checked} onChange={e => setChecked(e.target.checked)} />;\n}',...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "This is a very long label that might wrap to multiple lines depending on the container width."
  }
}`,...s.parameters?.docs?.source}}};const b=["Default","Checked","Disabled","DisabledChecked","Indeterminate","Controlled","LongLabel"],k=Object.freeze(Object.defineProperty({__proto__:null,Checked:r,Controlled:e,Default:a,Disabled:t,DisabledChecked:n,Indeterminate:o,LongLabel:s,__namedExportsOrder:b,default:u},Symbol.toStringTag,{value:"Module"}));export{k as C,a as D,o as I,r as a,t as b,n as c};
