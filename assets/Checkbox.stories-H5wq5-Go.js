import{j as i}from"./jsx-runtime-u17CrQMm.js";import{C as c}from"./Checkbox-BGa0l2dK.js";import{r as m}from"./iframe-CSw8miVe.js";const p={title:"Component/Selection Controls/Checkbox",component:c,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"},label:{control:"text"}}},r={args:{label:"Accept terms and conditions"}},a={args:{label:"Subscribe to newsletter",checked:!0,onChange:()=>{}}},t={args:{label:"Disabled option",disabled:!0}},o={args:{label:"Disabled and checked",disabled:!0,checked:!0,onChange:()=>{}}},s={args:{label:"Indeterminate",indeterminate:!0,checked:!0,onChange:()=>{}}},e=()=>{const[n,d]=m.useState(!1);return i.jsx(c,{label:`Controlled Checkbox: ${n?"On":"Off"}`,checked:n,onChange:l=>d(l.target.checked)})};e.__docgenInfo={description:"",methods:[],displayName:"Controlled"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Accept terms and conditions"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Subscribe to newsletter",
    checked: true,
    onChange: () => {} // Supress warning
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled option",
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled and checked",
    disabled: true,
    checked: true,
    onChange: () => {}
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Indeterminate",
    indeterminate: true,
    checked: true,
    // Usually indeterminate implies partially selected
    onChange: () => {}
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:'() => {\n  const [checked, setChecked] = useState(false);\n  return <Checkbox label={`Controlled Checkbox: ${checked ? "On" : "Off"}`} checked={checked} onChange={e => setChecked(e.target.checked)} />;\n}',...e.parameters?.docs?.source}}};const u=["Default","Checked","Disabled","DisabledChecked","Indeterminate","Controlled"],C=Object.freeze(Object.defineProperty({__proto__:null,Checked:a,Controlled:e,Default:r,Disabled:t,DisabledChecked:o,Indeterminate:s,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{C,r as D,s as I,a,t as b,o as c};
