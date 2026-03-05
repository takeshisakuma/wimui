import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-VGitSx0_.js";import{c as B}from"./index-CWCO5Yw8.js";import{I as P}from"./Input-DtkJO_OT.js";import{B as K}from"./BaseListItem-X1JUAuZ6.js";const O=({options:h=[],onSelect:y,placeholder:F="Select...",showSearchIcon:k=!0,allowClear:w=!0,defaultValue:q="",className:j,disabled:A=!1,label:p,id:T,...D})=>{const[l,s]=r.useState(!1),[x,I]=r.useState(q),[o,E]=r.useState(h),[t,d]=r.useState(-1),b=r.useRef(null),N=r.useId(),f=T||N,m=`wim-combobox-list-${f}`,v=`wim-combobox-label-${f}`,C=`wim-combobox-input-${f}`;r.useEffect(()=>{const a=e=>{b.current&&!b.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const V=a=>{const e=a.target.value;I(e);const $=h.filter(L=>L.label.toLowerCase().includes(e.toLowerCase()));E($),s(!0),d(-1)},S=a=>{I(a.label),s(!1),y&&y(a)},_=a=>{if(!l&&a.key==="ArrowDown"){s(!0);return}switch(a.key){case"ArrowDown":d(e=>e<o.length-1?e+1:0);break;case"ArrowUp":d(e=>e<=0?o.length-1:e-1);break;case"Enter":t>=0&&t<o.length&&S(o[t]);break;case"Escape":s(!1);break}};return n.jsxs("div",{className:B("wim-combobox",j),ref:b,children:[p&&n.jsx("label",{id:v,htmlFor:C,className:"wim-label",children:p}),n.jsx(P,{id:C,placeholder:F,value:x,onChange:V,onKeyDown:_,onFocus:()=>s(!0),leftIcon:k?"SearchIcon":void 0,rightIcon:w&&x?void 0:"ChevronDownIcon",allowClear:w,disabled:A,autoComplete:"off",role:"combobox","aria-autocomplete":"list","aria-expanded":l,"aria-controls":l?m:void 0,"aria-labelledby":p?v:void 0,"aria-activedescendant":l&&t>=0?`${m}-option-${t}`:void 0,...D}),l&&o.length>0&&n.jsx("ul",{id:m,className:"wim-combobox-list",role:"listbox","aria-labelledby":p?v:void 0,children:o.map((a,e)=>n.jsx(K,{as:"li",id:`${m}-option-${e}`,className:"wim-combobox-option",active:e===t,onClick:()=>S(a),onMouseEnter:()=>d(e),role:"option","aria-selected":e===t,children:a.label},a.value))}),l&&o.length===0&&n.jsx("div",{className:"wim-combobox-empty",role:"region","aria-live":"polite",children:"No results found"})]})};O.__docgenInfo={description:"入力とサジェストリストを組み合わせたコンボボックスコンポーネント。",methods:[],displayName:"Combobox",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: ComboboxOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select..."',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showSearchIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const M={title:"Components/Selection Controls/Combobox",component:O,argTypes:{showSearchIcon:{control:"boolean"}}},g=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Cherry",value:"cherry"},{label:"Grape",value:"grape"},{label:"Kiwi",value:"kiwi"},{label:"Lemon",value:"lemon"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Peach",value:"peach"},{label:"Pear",value:"pear"},{label:"Pineapple",value:"pineapple"},{label:"Strawberry",value:"strawberry"},{label:"Watermelon",value:"watermelon"}],i={args:{label:"Favorite Fruit",options:g,placeholder:"Apple"}},u={args:{label:"Favorite Fruit",options:g,placeholder:"Apple",showSearchIcon:!0}},c={args:{label:"Favorite Fruit",options:g,placeholder:"Apple",disabled:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Favorite Fruit",
    options: sampleOptions,
    placeholder: "Apple"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Favorite Fruit",
    options: sampleOptions,
    placeholder: "Apple",
    showSearchIcon: true
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Favorite Fruit",
    options: sampleOptions,
    placeholder: "Apple",
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};const R=["Default","WithIcon","Disabled"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Disabled:c,WithIcon:u,__namedExportsOrder:R,default:M},Symbol.toStringTag,{value:"Module"}));export{J as C,i as D};
