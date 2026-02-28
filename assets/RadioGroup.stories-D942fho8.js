import{j as r}from"./jsx-runtime-u17CrQMm.js";import{R as i}from"./RadioGroup-BEqLiGW6.js";import{r as u}from"./iframe-Dgvn1YDu.js";const d={title:"Components/Selection Controls/RadioGroup",component:i,argTypes:{direction:{control:{type:"radio"},options:["vertical","horizontal"]}}},l=[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"}],o={args:{options:l,name:"default-group",defaultValue:"opt1"}},a={args:{options:l,direction:"horizontal",name:"horizontal-group",defaultValue:"opt1"}},t={args:{options:[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2",disabled:!0},{label:"Option 3",value:"opt3"}],name:"disabled-option-group",defaultValue:"opt1"}},e=()=>{const[s,p]=u.useState("opt1");return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"1rem"},children:["Selected Value: ",s]}),r.jsx(i,{options:l,value:s,onChange:p,name:"controlled-group"})]})},n={args:{options:[{label:"This is a very long label that might wrap to multiple lines depending on the container width.",value:"long1"},{label:"Another long label that will wrap if the container is narrow enough to force it.",value:"long2"}],name:"long-label-group"}};e.__docgenInfo={description:"",methods:[],displayName:"Controlled"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    name: "default-group",
    defaultValue: "opt1"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    direction: "horizontal",
    name: "horizontal-group",
    defaultValue: "opt1"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Option 1",
      value: "opt1"
    }, {
      label: "Option 2",
      value: "opt2",
      disabled: true
    }, {
      label: "Option 3",
      value: "opt3"
    }],
    name: "disabled-option-group",
    defaultValue: "opt1"
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("opt1");
  return <div>\r
      <div style={{
      marginBottom: "1rem"
    }}>Selected Value: {value}</div>\r
      <RadioGroup options={defaultOptions} value={value} onChange={setValue} name="controlled-group" />\r
    </div>;
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "This is a very long label that might wrap to multiple lines depending on the container width.",
      value: "long1"
    }, {
      label: "Another long label that will wrap if the container is narrow enough to force it.",
      value: "long2"
    }],
    name: "long-label-group"
  }
}`,...n.parameters?.docs?.source}}};const c=["Default","Horizontal","WithDisabledOption","Controlled","LongLabel"],h=Object.freeze(Object.defineProperty({__proto__:null,Controlled:e,Default:o,Horizontal:a,LongLabel:n,WithDisabledOption:t,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{e as C,o as D,a as H,h as R,t as W};
