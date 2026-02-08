import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-CBzo6FU_.js";import{P as e}from"./index-BNhRDuWm.js";import{R as V}from"./Radio-B3kz8aGG.js";const u=({options:s,value:i,defaultValue:g,onChange:p,direction:v="vertical",name:f,className:b})=>{const m=i!==void 0,[y,h]=c.useState(g),O=m?i:y,q=a=>{m||h(a),p&&p(a)};return l.jsx("div",{className:["wim-radio-group",v==="horizontal"?"wim-radio-group--horizontal":"",b].filter(Boolean).join(" "),role:"radiogroup",children:s.map(a=>l.jsx(V,{label:a.label,value:a.value,checked:O===a.value,disabled:a.disabled,name:f,onChange:()=>q(a.value)},a.value))})};u.propTypes={options:e.arrayOf(e.shape({label:e.string.isRequired,value:e.string.isRequired,disabled:e.bool}).isRequired).isRequired,value:e.string,defaultValue:e.string,onChange:e.func,direction:e.oneOf(["vertical","horizontal"]),name:e.string,className:e.string};u.__docgenInfo={description:"RadioGroup component to manage multiple radio buttons.",methods:[],displayName:"RadioGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    value: string;\r
    disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:"Array of options to display.",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},value:{name:"string",required:!0},disabled:{name:"bool",required:!1}}}}},value:{required:!1,tsType:{name:"string"},description:"Currently selected value (controlled mode).",type:{name:"string"}},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value (uncontrolled mode).",type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback fired when value changes.",type:{name:"func"}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Layout direction of the radio buttons.",defaultValue:{value:'"vertical"',computed:!1},type:{name:"enum",value:[{value:'"vertical"',computed:!1},{value:'"horizontal"',computed:!1}]}},name:{required:!1,tsType:{name:"string"},description:"Name attribute for the input elements.",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"Additional class names.",type:{name:"string"}}}};const z={title:"Component/Data Entry/RadioGroup",component:u,argTypes:{direction:{control:{type:"radio"},options:["vertical","horizontal"]}}},d=[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"}],r={args:{options:d,name:"default-group",defaultValue:"opt1"}},o={args:{options:d,direction:"horizontal",name:"horizontal-group",defaultValue:"opt1"}},n={args:{options:[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2",disabled:!0},{label:"Option 3",value:"opt3"}],name:"disabled-option-group",defaultValue:"opt1"}},t=()=>{const[s,i]=c.useState("opt1");return l.jsxs("div",{children:[l.jsxs("div",{style:{marginBottom:"1rem"},children:["Selected Value: ",s]}),l.jsx(u,{options:d,value:s,onChange:i,name:"controlled-group"})]})};t.__docgenInfo={description:"",methods:[],displayName:"Controlled"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    name: "default-group",
    defaultValue: "opt1"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    direction: "horizontal",
    name: "horizontal-group",
    defaultValue: "opt1"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("opt1");
  return <div>\r
            <div style={{
      marginBottom: "1rem"
    }}>Selected Value: {value}</div>\r
            <RadioGroup options={defaultOptions} value={value} onChange={setValue} name="controlled-group" />\r
        </div>;
}`,...t.parameters?.docs?.source}}};const R=["Default","Horizontal","WithDisabledOption","Controlled"],x=Object.freeze(Object.defineProperty({__proto__:null,Controlled:t,Default:r,Horizontal:o,WithDisabledOption:n,__namedExportsOrder:R,default:z},Symbol.toStringTag,{value:"Module"}));export{t as C,r as D,o as H,x as R,n as W};
