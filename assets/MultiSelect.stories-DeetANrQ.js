import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-BRQWL27F.js";import{c as p}from"./index-DWoaxWMs.js";import{I as j}from"./Icon-CpAaWSX6.js";import{C as k}from"./Chip-Bo7_EWBk.js";const V=({options:h=[],value:w,onChange:c,placeholder:q="Select options...",label:S,className:N,disabled:l=!1,defaultValue:T=[],...O})=>{const[u,y]=m.useState(!1),[C,x]=m.useState(T),g=m.useRef(null),b=w!==void 0,t=b?w:C;m.useEffect(()=>{const e=a=>{g.current&&!g.current.contains(a.target)&&y(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const M=e=>{l||e.target.closest(".wim-multiselect-badge-remove")||y(!u)},D=e=>{if(l)return;let a;t?.includes(e)?a=t.filter(d=>d!==e):a=[...t||[],e],b||x(a),c&&c(a)},I=(e,a)=>{if(e.stopPropagation(),l)return;const d=(t||[]).filter(_=>_!==a);b||x(d),c&&c(d)},v=h.filter(e=>t?.includes(e.value));return s.jsxs("div",{className:p("wim-multiselect",N),ref:g,...O,children:[S&&s.jsx("label",{className:"wim-label",children:S}),s.jsxs("div",{className:p("wim-multiselect-trigger",u&&"wim-multiselect-trigger--open",l&&"wim-multiselect-trigger--disabled"),onClick:M,tabIndex:l?-1:0,role:"combobox","aria-expanded":u,"aria-haspopup":"listbox","aria-disabled":l,children:[s.jsx("div",{className:p("wim-multiselect-value",v.length===0&&"wim-multiselect-value--placeholder"),children:v.length>0?v.map(e=>s.jsx(k,{label:e.label,size:"small",color:"neutral",variant:"solid",onDelete:l?void 0:a=>I(a,e.value),className:"wim-multiselect-badge"},e.value)):q}),s.jsx("div",{className:"wim-multiselect-icon",children:s.jsx(j,{name:"ChevronDownIcon",size:"small"})})]}),u&&!l&&s.jsx("ul",{className:"wim-multiselect-list",role:"listbox","aria-multiselectable":"true",children:h.map(e=>{const a=t?.includes(e.value);return s.jsxs("li",{className:p("wim-multiselect-option",a&&"wim-multiselect-option--selected",e.disabled&&"wim-multiselect-option--disabled"),onClick:()=>!e.disabled&&D(e.value),role:"option","aria-selected":a,"aria-disabled":e.disabled,children:[s.jsx("span",{children:e.label}),a&&s.jsx(j,{name:"CheckIcon",size:"small"})]},e.value)})})]})};V.__docgenInfo={description:"ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。",methods:[],displayName:"MultiSelect",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    value: string;\r
    disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"MultiSelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select options..."',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const E={title:"Component/Selection Controls/MultiSelect",component:V,parameters:{layout:"centered",docs:{description:{component:"ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニュー。"}}},tags:[],argTypes:{onChange:{action:"changed"}}},f=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Grape",value:"grape"},{label:"Disabled Option",value:"disabled",disabled:!0}],r={args:{options:f,placeholder:"Select fruits..."}},n={args:{label:"Favorites",options:f,placeholder:"Select..."}},i={args:{options:f,defaultValue:["apple","orange"]}},o={args:{options:f,disabled:!0,defaultValue:["banana"]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    placeholder: "Select fruits..."
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Favorites",
    options: options,
    placeholder: "Select..."
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    defaultValue: ["apple", "orange"]
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    disabled: true,
    defaultValue: ["banana"]
  }
}`,...o.parameters?.docs?.source}}};const A=["Default","WithLabel","MultipleSelected","Disabled"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:o,MultipleSelected:i,WithLabel:n,__namedExportsOrder:A,default:E},Symbol.toStringTag,{value:"Module"}));export{r as D,P as M,n as W,i as a,o as b};
