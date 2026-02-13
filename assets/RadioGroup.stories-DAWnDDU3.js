import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as s}from"./RadioGroup-DqIKfrIL.js";import{r as i}from"./iframe-f4BvNpCj.js";const u={title:"Component/Selection Controls/RadioGroup",component:s,argTypes:{direction:{control:{type:"radio"},options:["vertical","horizontal"]}}},r=[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"}],e={args:{options:r,name:"default-group",defaultValue:"opt1"}},t={args:{options:r,direction:"horizontal",name:"horizontal-group",defaultValue:"opt1"}},a={args:{options:[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2",disabled:!0},{label:"Option 3",value:"opt3"}],name:"disabled-option-group",defaultValue:"opt1"}},o=()=>{const[l,p]=i.useState("opt1");return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:["Selected Value: ",l]}),n.jsx(s,{options:r,value:l,onChange:p,name:"controlled-group"})]})};o.__docgenInfo={description:"",methods:[],displayName:"Controlled"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    name: "default-group",
    defaultValue: "opt1"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    direction: "horizontal",
    name: "horizontal-group",
    defaultValue: "opt1"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("opt1");
  return <div>\r
            <div style={{
      marginBottom: "1rem"
    }}>Selected Value: {value}</div>\r
            <RadioGroup options={defaultOptions} value={value} onChange={setValue} name="controlled-group" />\r
        </div>;
}`,...o.parameters?.docs?.source}}};const d=["Default","Horizontal","WithDisabledOption","Controlled"],v=Object.freeze(Object.defineProperty({__proto__:null,Controlled:o,Default:e,Horizontal:t,WithDisabledOption:a,__namedExportsOrder:d,default:u},Symbol.toStringTag,{value:"Module"}));export{o as C,e as D,t as H,v as R,a as W};
