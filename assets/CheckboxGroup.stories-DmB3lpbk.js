import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-pw_CUlU5.js";import{P as e}from"./index-D4Yu2yBe.js";import{C as V}from"./Checkbox-CJvfitKd.js";const u=({options:l,value:o,defaultValue:f=[],onChange:m,direction:y="vertical",name:h,className:b})=>{const v=o!==void 0,[C,x]=g.useState(f),d=v?o:C,q=(a,c)=>{let i;c?i=[...d||[],a]:i=(d||[]).filter(k=>k!==a),v||x(i),m&&m(i)};return s.jsx("div",{className:["wim-checkbox-group",y==="horizontal"?"wim-checkbox-group--horizontal":"",b].filter(Boolean).join(" "),children:l.map(a=>s.jsx(V,{label:a.label,value:a.value,checked:(d||[]).includes(a.value),disabled:a.disabled,name:h,onChange:c=>q(a.value,c.target.checked)},a.value))})};u.propTypes={options:e.arrayOf(e.shape({label:e.string.isRequired,value:e.string.isRequired,disabled:e.bool}).isRequired).isRequired,value:e.arrayOf(e.string.isRequired),defaultValue:e.arrayOf(e.string.isRequired),onChange:e.func,direction:e.oneOf(["vertical","horizontal"]),name:e.string,className:e.string};u.__docgenInfo={description:"CheckboxGroup component to manage multiple checkboxes.",methods:[],displayName:"CheckboxGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    value: string;\r
    disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:"Array of options to display.",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},value:{name:"string",required:!0},disabled:{name:"bool",required:!1}}}}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Currently selected values (controlled mode).",type:{name:"arrayOf",value:{name:"string"}}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default selected values (uncontrolled mode).",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"string"}}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"Callback fired when value changes.",type:{name:"func"}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Layout direction of the checkboxes.",defaultValue:{value:'"vertical"',computed:!1},type:{name:"enum",value:[{value:'"vertical"',computed:!1},{value:'"horizontal"',computed:!1}]}},name:{required:!1,tsType:{name:"string"},description:"Name attribute for the input elements.",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"Additional class names.",type:{name:"string"}}}};const j={title:"Component/Forms/CheckboxGroup",component:u,argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},p=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date (Disabled)",value:"date",disabled:!0}],t={args:{options:p,defaultValue:["banana"]}},n={args:{options:p,direction:"horizontal",defaultValue:["apple","cherry"]}},r=()=>{const[l,o]=g.useState(["apple"]);return s.jsxs("div",{children:[s.jsxs("div",{style:{marginBottom:"1rem"},children:["Selected: ",l.join(", ")]}),s.jsx(u,{options:p,value:l,onChange:o})]})};r.__docgenInfo={description:"",methods:[],displayName:"Controlled"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    defaultValue: ["banana"]
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    direction: "horizontal",
    defaultValue: ["apple", "cherry"]
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(["apple"]);
  return <div>\r
            <div style={{
      marginBottom: "1rem"
    }}>\r
                Selected: {value.join(", ")}\r
            </div>\r
            <CheckboxGroup options={options} value={value} onChange={setValue} />\r
        </div>;
}`,...r.parameters?.docs?.source}}};const z=["Default","Horizontal","Controlled"],_=Object.freeze(Object.defineProperty({__proto__:null,Controlled:r,Default:t,Horizontal:n,__namedExportsOrder:z,default:j},Symbol.toStringTag,{value:"Module"}));export{_ as C,t as D,n as H,r as a};
