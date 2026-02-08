import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as s}from"./CheckboxGroup-vjHDfgRJ.js";import{r as i}from"./iframe-CQ0Ubeji.js";const c={title:"Component/Selection Controls/CheckboxGroup",component:s,argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},t=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date (Disabled)",value:"date",disabled:!0}],o={args:{options:t,defaultValue:["banana"]}},a={args:{options:t,direction:"horizontal",defaultValue:["apple","cherry"]}},e=()=>{const[n,l]=i.useState(["apple"]);return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"1rem"},children:["Selected: ",n.join(", ")]}),r.jsx(s,{options:t,value:n,onChange:l})]})};e.__docgenInfo={description:"",methods:[],displayName:"Controlled"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    }}>\r
                Selected: {value.join(", ")}\r
            </div>\r
            <CheckboxGroup options={options} value={value} onChange={setValue} />\r
        </div>;
}`,...e.parameters?.docs?.source}}};const p=["Default","Horizontal","Controlled"],v=Object.freeze(Object.defineProperty({__proto__:null,Controlled:e,Default:o,Horizontal:a,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{v as C,o as D,a as H,e as a};
