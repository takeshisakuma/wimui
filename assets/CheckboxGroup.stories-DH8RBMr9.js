import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as s}from"./CheckboxGroup-SF0fzHcb.js";import{r as i}from"./iframe-Bv8QkdDj.js";const p={title:"Component/Data Entry/CheckboxGroup",component:s,argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},t=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date (Disabled)",value:"date",disabled:!0}],a={args:{options:t,defaultValue:["banana"]}},o={args:{options:t,direction:"horizontal",defaultValue:["apple","cherry"]}},e=()=>{const[n,l]=i.useState(["apple"]);return r.jsxs("div",{children:[r.jsxs("div",{style:{marginBottom:"1rem"},children:["Selected: ",n.join(", ")]}),r.jsx(s,{options:t,value:n,onChange:l})]})};e.__docgenInfo={description:"",methods:[],displayName:"Controlled"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    defaultValue: ["banana"]
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    direction: "horizontal",
    defaultValue: ["apple", "cherry"]
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(["apple"]);
  return <div>\r
            <div style={{
      marginBottom: "1rem"
    }}>\r
                Selected: {value.join(", ")}\r
            </div>\r
            <CheckboxGroup options={options} value={value} onChange={setValue} />\r
        </div>;
}`,...e.parameters?.docs?.source}}};const c=["Default","Horizontal","Controlled"],v=Object.freeze(Object.defineProperty({__proto__:null,Controlled:e,Default:a,Horizontal:o,__namedExportsOrder:c,default:p},Symbol.toStringTag,{value:"Module"}));export{v as C,a as D,o as H,e as a};
