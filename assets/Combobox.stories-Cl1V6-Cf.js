import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-BRQWL27F.js";import{c as w}from"./index-DWoaxWMs.js";import{I as N}from"./Input-D5IO2Qo-.js";const x=({options:b=[],onSelect:f,placeholder:S="Select...",showSearchIcon:C=!0,allowClear:g=!0,defaultValue:I="",className:O,disabled:k=!1,...q})=>{const[c,r]=t.useState(!1),[h,v]=t.useState(I),[o,D]=t.useState(b),[u,p]=t.useState(-1),d=t.useRef(null);t.useEffect(()=>{const e=a=>{d.current&&!d.current.contains(a.target)&&r(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const j=e=>{const a=e.target.value;v(a);const V=b.filter(E=>E.label.toLowerCase().includes(a.toLowerCase()));D(V),r(!0),p(-1)},y=e=>{v(e.label),r(!1),f&&f(e)},T=e=>{if(!c&&e.key==="ArrowDown"){r(!0);return}switch(e.key){case"ArrowDown":p(a=>a<o.length-1?a+1:a);break;case"ArrowUp":p(a=>a>0?a-1:a);break;case"Enter":u>=0&&u<o.length&&y(o[u]);break;case"Escape":r(!1);break}};return s.jsxs("div",{className:w("wim-combobox",O),ref:d,onKeyDown:T,children:[s.jsx(N,{placeholder:S,value:h,onChange:j,onFocus:()=>r(!0),leftIcon:C?"SearchIcon":void 0,rightIcon:g&&h?void 0:"ChevronDownIcon",allowClear:g,disabled:k,autoComplete:"off",...q}),c&&o.length>0&&s.jsx("ul",{className:"wim-combobox-list",children:o.map((e,a)=>s.jsx("li",{className:w("wim-combobox-option",a===u&&"wim-combobox-option--active"),onClick:()=>y(e),children:e.label},e.value))}),c&&o.length===0&&s.jsx("div",{className:"wim-combobox-empty",children:"No results found"})]})};x.__docgenInfo={description:"入力とサジェストリストを組み合わせたコンボボックスコンポーネント。",methods:[],displayName:"Combobox",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    value: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: ComboboxOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
    label: string;\r
    value: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select..."',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showSearchIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const _={title:"Component/Selection Controls/Combobox",component:x,argTypes:{showSearchIcon:{control:"boolean"}}},m=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Cherry",value:"cherry"},{label:"Grape",value:"grape"},{label:"Kiwi",value:"kiwi"},{label:"Lemon",value:"lemon"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Peach",value:"peach"},{label:"Pear",value:"pear"},{label:"Pineapple",value:"pineapple"},{label:"Strawberry",value:"strawberry"},{label:"Watermelon",value:"watermelon"}],n={args:{options:m,placeholder:"Search fruits..."}},l={args:{options:m,placeholder:"Search fruits...",showSearchIcon:!0}},i={args:{options:m,placeholder:"Disabled combobox",disabled:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: "Search fruits..."
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: "Search fruits...",
    showSearchIcon: true
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: "Disabled combobox",
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};const A=["Default","WithIcon","Disabled"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:i,WithIcon:l,__namedExportsOrder:A,default:_},Symbol.toStringTag,{value:"Module"}));export{W as C,n as D};
