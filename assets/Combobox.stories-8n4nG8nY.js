import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-EVkAXmOk.js";import{c as O}from"./index-BX12fiL9.js";import{I as K}from"./Input-D6tZNtlq.js";const F=({options:h=[],onSelect:y,placeholder:k="Select...",showSearchIcon:q=!0,allowClear:w=!0,defaultValue:j="",className:A,disabled:T=!1,label:p,id:D,...N})=>{const[r,l]=t.useState(!1),[x,I]=t.useState(j),[n,V]=t.useState(h),[o,m]=t.useState(-1),b=t.useRef(null),E=t.useId(),f=D||E,d=`wim-combobox-list-${f}`,v=`wim-combobox-label-${f}`,C=`wim-combobox-input-${f}`;t.useEffect(()=>{const a=e=>{b.current&&!b.current.contains(e.target)&&l(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const _=a=>{const e=a.target.value;I(e);const L=h.filter(P=>P.label.toLowerCase().includes(e.toLowerCase()));V(L),l(!0),m(-1)},S=a=>{I(a.label),l(!1),y&&y(a)},$=a=>{if(!r&&a.key==="ArrowDown"){l(!0);return}switch(a.key){case"ArrowDown":m(e=>e<n.length-1?e+1:e);break;case"ArrowUp":m(e=>e>0?e-1:e);break;case"Enter":o>=0&&o<n.length&&S(n[o]);break;case"Escape":l(!1);break}};return s.jsxs("div",{className:O("wim-combobox",A),ref:b,children:[p&&s.jsx("label",{id:v,htmlFor:C,className:"wim-label",children:p}),s.jsx(K,{id:C,placeholder:k,value:x,onChange:_,onKeyDown:$,onFocus:()=>l(!0),leftIcon:q?"SearchIcon":void 0,rightIcon:w&&x?void 0:"ChevronDownIcon",allowClear:w,disabled:T,autoComplete:"off",role:"combobox","aria-autocomplete":"list","aria-expanded":r,"aria-controls":r?d:void 0,"aria-labelledby":p?v:void 0,"aria-activedescendant":r&&o>=0?`${d}-option-${o}`:void 0,...N}),r&&n.length>0&&s.jsx("ul",{id:d,className:"wim-combobox-list",role:"listbox","aria-labelledby":p?v:void 0,children:n.map((a,e)=>s.jsx("li",{id:`${d}-option-${e}`,className:O("wim-combobox-option",e===o&&"wim-combobox-option--active"),onClick:()=>S(a),role:"option","aria-selected":e===o,children:a.label},a.value))}),r&&n.length===0&&s.jsx("div",{className:"wim-combobox-empty",role:"region","aria-live":"polite",children:"No results found"})]})};F.__docgenInfo={description:"入力とサジェストリストを組み合わせたコンボボックスコンポーネント。",methods:[],displayName:"Combobox",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"ComboboxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: ComboboxOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},name:"option"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select..."',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showSearchIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/Selection Controls/Combobox",component:F,argTypes:{showSearchIcon:{control:"boolean"}}},g=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Cherry",value:"cherry"},{label:"Grape",value:"grape"},{label:"Kiwi",value:"kiwi"},{label:"Lemon",value:"lemon"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Peach",value:"peach"},{label:"Pear",value:"pear"},{label:"Pineapple",value:"pineapple"},{label:"Strawberry",value:"strawberry"},{label:"Watermelon",value:"watermelon"}],i={args:{label:"Favorite Fruit",options:g,placeholder:"Apple"}},u={args:{label:"Favorite Fruit",options:g,placeholder:"Apple",showSearchIcon:!0}},c={args:{label:"Favorite Fruit",options:g,placeholder:"Apple",disabled:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const W=["Default","WithIcon","Disabled"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Disabled:c,WithIcon:u,__namedExportsOrder:W,default:R},Symbol.toStringTag,{value:"Module"}));export{U as C,i as D};
