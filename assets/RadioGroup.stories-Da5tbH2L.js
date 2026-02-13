import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-DMgQDpBx.js";import{c as V}from"./index-MafWY-Pw.js";import{R as S}from"./Radio-SnTjIQTO.js";const i=({options:l,value:s,defaultValue:m,onChange:p,direction:g="vertical",name:v,className:f})=>{const d=s!==void 0,[b,h]=c.useState(m),y=d?s:b,O=e=>{d||h(e),p&&p(e)};return n.jsx("div",{className:V("wim-radio-group",g==="horizontal"&&"wim-radio-group--horizontal",f),role:"radiogroup",children:l.map(e=>n.jsx(S,{label:e.label,value:e.value,checked:y===e.value,disabled:e.disabled,name:v,onChange:()=>O(e.value)},e.value))})};i.__docgenInfo={description:"RadioGroup component to manage multiple radio buttons.",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    value: string;\r
    disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"Component/Selection Controls/RadioGroup",component:i,argTypes:{direction:{control:{type:"radio"},options:["vertical","horizontal"]}}},u=[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"}],o={args:{options:u,name:"default-group",defaultValue:"opt1"}},t={args:{options:u,direction:"horizontal",name:"horizontal-group",defaultValue:"opt1"}},r={args:{options:[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2",disabled:!0},{label:"Option 3",value:"opt3"}],name:"disabled-option-group",defaultValue:"opt1"}},a=()=>{const[l,s]=c.useState("opt1");return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:["Selected Value: ",l]}),n.jsx(i,{options:u,value:l,onChange:s,name:"controlled-group"})]})};a.__docgenInfo={description:"",methods:[],displayName:"Controlled"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    name: "default-group",
    defaultValue: "opt1"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    direction: "horizontal",
    name: "horizontal-group",
    defaultValue: "opt1"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("opt1");
  return <div>\r
            <div style={{
      marginBottom: "1rem"
    }}>Selected Value: {value}</div>\r
            <RadioGroup options={defaultOptions} value={value} onChange={setValue} name="controlled-group" />\r
        </div>;
}`,...a.parameters?.docs?.source}}};const C=["Default","Horizontal","WithDisabledOption","Controlled"],_=Object.freeze(Object.defineProperty({__proto__:null,Controlled:a,Default:o,Horizontal:t,WithDisabledOption:r,__namedExportsOrder:C,default:z},Symbol.toStringTag,{value:"Module"}));export{a as C,o as D,t as H,_ as R,r as W};
