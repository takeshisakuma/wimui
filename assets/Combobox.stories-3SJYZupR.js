import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-C5pzRvkm.js";import{c as w}from"./index-DRNRcLaq.js";import{I as N}from"./Input-7eTvS1Vr.js";const x=({options:b=[],onSelect:f,placeholder:S="Select...",showSearchIcon:C=!0,allowClear:g=!0,defaultValue:I="",className:O,disabled:k=!1,...q})=>{const[c,r]=t.useState(!1),[h,v]=t.useState(I),[o,D]=t.useState(b),[s,p]=t.useState(-1),d=t.useRef(null);t.useEffect(()=>{const a=e=>{d.current&&!d.current.contains(e.target)&&r(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const j=a=>{const e=a.target.value;v(e);const V=b.filter(E=>E.label.toLowerCase().includes(e.toLowerCase()));D(V),r(!0),p(-1)},y=a=>{v(a.label),r(!1),f&&f(a)},T=a=>{if(!c&&a.key==="ArrowDown"){r(!0);return}switch(a.key){case"ArrowDown":p(e=>e<o.length-1?e+1:e);break;case"ArrowUp":p(e=>e>0?e-1:e);break;case"Enter":s>=0&&s<o.length&&y(o[s]);break;case"Escape":r(!1);break}};return l.jsxs("div",{className:w("wim-combobox",O),ref:d,children:[l.jsx(N,{placeholder:S,value:h,onChange:j,onKeyDown:T,onFocus:()=>r(!0),leftIcon:C?"SearchIcon":void 0,rightIcon:g&&h?void 0:"ChevronDownIcon",allowClear:g,disabled:k,autoComplete:"off",...q}),c&&o.length>0&&l.jsx("ul",{className:"wim-combobox-list",children:o.map((a,e)=>l.jsx("li",{className:w("wim-combobox-option",e===s&&"wim-combobox-option--active"),onClick:()=>y(a),role:"option","aria-selected":e===s,children:a.label},a.value))}),c&&o.length===0&&l.jsx("div",{className:"wim-combobox-empty",children:"No results found"})]})};x.__docgenInfo={description:"入力とサジェストリストを組み合わせたコンボボックスコンポーネント。",methods:[],displayName:"Combobox",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    value: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: ComboboxOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
    label: string;\r
    value: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select..."',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showSearchIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const _={title:"Component/Selection Controls/Combobox",component:x,argTypes:{showSearchIcon:{control:"boolean"}}},m=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Cherry",value:"cherry"},{label:"Grape",value:"grape"},{label:"Kiwi",value:"kiwi"},{label:"Lemon",value:"lemon"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Peach",value:"peach"},{label:"Pear",value:"pear"},{label:"Pineapple",value:"pineapple"},{label:"Strawberry",value:"strawberry"},{label:"Watermelon",value:"watermelon"}],n={args:{options:m,placeholder:"Search fruits..."}},i={args:{options:m,placeholder:"Search fruits...",showSearchIcon:!0}},u={args:{options:m,placeholder:"Disabled combobox",disabled:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: "Search fruits..."
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: "Search fruits...",
    showSearchIcon: true
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: "Disabled combobox",
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};const A=["Default","WithIcon","Disabled"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:u,WithIcon:i,__namedExportsOrder:A,default:_},Symbol.toStringTag,{value:"Module"}));export{W as C,n as D};
