import{j as n}from"./jsx-runtime-u17CrQMm.js";import{C as s}from"./CheckboxGroup-OCU-bF6g.js";import{r as p}from"./iframe-Dgvn1YDu.js";const c={title:"Components/Selection Controls/CheckboxGroup",component:s,argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},t=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date (Disabled)",value:"date",disabled:!0}],o={args:{options:t,defaultValue:["banana"]}},a={args:{options:t,direction:"horizontal",defaultValue:["apple","cherry"]}},e=()=>{const[l,i]=p.useState(["apple"]);return n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:"1rem"},children:["Selected: ",l.join(", ")]}),n.jsx(s,{options:t,value:l,onChange:i})]})},r={args:{options:[{label:"This is a very long label that might wrap to multiple lines depending on the container width.",value:"long1"},{label:"Another long label that will wrap if the container is narrow enough to force it.",value:"long2"}],defaultValue:["long1"]}};e.__docgenInfo={description:"",methods:[],displayName:"Controlled"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    defaultValue: ["banana"]
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    direction: "horizontal",
    defaultValue: ["apple", "cherry"]
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(["apple"]);
  return <div>\r
      <div style={{
      marginBottom: "1rem"
    }}>Selected: {value.join(", ")}</div>\r
      <CheckboxGroup options={options} value={value} onChange={setValue} />\r
    </div>;
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "This is a very long label that might wrap to multiple lines depending on the container width.",
      value: "long1"
    }, {
      label: "Another long label that will wrap if the container is narrow enough to force it.",
      value: "long2"
    }],
    defaultValue: ["long1"]
  }
}`,...r.parameters?.docs?.source}}};const u=["Default","Horizontal","Controlled","LongLabel"],h=Object.freeze(Object.defineProperty({__proto__:null,Controlled:e,Default:o,Horizontal:a,LongLabel:r,__namedExportsOrder:u,default:c},Symbol.toStringTag,{value:"Module"}));export{h as C,o as D,a as H,e as a};
