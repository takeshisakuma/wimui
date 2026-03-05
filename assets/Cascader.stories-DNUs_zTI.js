import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-VGitSx0_.js";import{c as y}from"./index-CWCO5Yw8.js";import{T as U}from"./Transition-DUzzt4KO.js";import{I as N}from"./Icon-C7cklonI.js";import{B as X}from"./BaseListItem-X1JUAuZ6.js";const z=({options:w=[],value:k,onChange:S,placeholder:E="Select",label:_,className:D,disabled:i=!1,defaultValue:H,id:L,expandTrigger:P="click",separator:R=" / ",...W})=>{const F=l.useId(),T=L||F,q=`wim-cascader-label-${T}`,I=`wim-cascader-trigger-${T}`,[o,x]=l.useState(!1),[M,B]=l.useState(H||[]),[c,C]=l.useState([]),j=l.useRef(null),V=k!==void 0,d=V?k:M;l.useEffect(()=>{const a=s=>{j.current&&!j.current.contains(s.target)&&x(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const Z=()=>{i||(x(!o),o||C(d||[]))},$=()=>{if(!d||d.length===0)return null;const a=[];let s=w;for(const n of d){const r=s.find(e=>e.value===n);if(r)a.push(r.label),s=r.children||[];else break}return a.join(R)},G=(a,s)=>{if(a.disabled)return;const n=[...c.slice(0,s),a.value];if(C(n),!a.children||a.children.length===0){if(V||B(n),S){const r=[];let e=w;for(const u of n){const m=e.find(O=>O.value===u);m&&(r.push(m),e=m.children||[])}S(n,r)}x(!1)}},J=(a,s)=>{P==="hover"&&!a.disabled&&C([...c.slice(0,s),a.value])},K=()=>{const a=[];let s=w;a.push(s);for(let n=0;n<c.length;n++){const r=c[n],e=s.find(u=>u.value===r);if(e&&e.children&&e.children.length>0)a.push(e.children),s=e.children;else break}return a.map((n,r)=>t.jsx("div",{className:"wim-cascader__menu",children:n.map(e=>{const u=c[r]===e.value,m=d[r]===e.value,O=e.children&&e.children.length>0;return t.jsx(X,{className:y("wim-cascader__menu-item",m&&"wim-cascader__menu-item--selected"),active:u,disabled:e.disabled,onClick:Q=>{Q.stopPropagation(),G(e,r)},onMouseEnter:()=>J(e,r),rightSection:O?t.jsx(N,{name:"ChevronRightIcon",size:"small"}):void 0,role:"menuitem",children:e.label},e.value)})},r))},A=$();return t.jsxs("div",{className:y("wim-cascader",D),ref:j,...W,children:[_&&t.jsx("label",{id:q,htmlFor:I,className:"wim-cascader__label",children:_}),t.jsxs("div",{id:I,className:y("wim-cascader__trigger",o&&"wim-cascader__trigger--open",i&&"wim-cascader__trigger--disabled"),onClick:Z,tabIndex:i?-1:0,role:"combobox","aria-expanded":o,"aria-haspopup":"listbox","aria-disabled":i,"aria-labelledby":_?q:void 0,children:[t.jsx("div",{className:y("wim-cascader__value",!A&&"wim-cascader__value--placeholder"),children:A||E}),t.jsx("div",{className:"wim-cascader__icon",children:t.jsx(N,{name:"ChevronDownIcon",size:"medium"})})]}),t.jsx(U,{show:o&&!i,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-cascader__dropdown",children:K()})]})};z.__docgenInfo={description:"階層構造を持つデータから選択肢を辿って1つを選択するためのコンポーネント。",methods:[],displayName:"Cascader",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[], selectedOptions: CascaderOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"},{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: CascaderOption[];
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"CascaderOption"}],raw:"CascaderOption[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"CascaderOption[]"},name:"selectedOptions"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},id:{required:!1,tsType:{name:"string"},description:""},expandTrigger:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"Expand trigger mode",defaultValue:{value:'"click"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"Custom separator for the display value",defaultValue:{value:'" / "',computed:!1}}}};const Y={title:"Components/Advanced Inputs/Cascader",component:z,parameters:{layout:"centered"}},b=[{label:"Zhejiang",value:"zhejiang",children:[{label:"Hangzhou",value:"hangzhou",children:[{label:"West Lake",value:"west_lake"}]}]},{label:"Jiangsu",value:"jiangsu",children:[{label:"Nanjing",value:"nanjing",children:[{label:"Zhonghua Gate",value:"zhonghua_gate"}]}]}],p={args:{options:b,placeholder:"Please select"}},g={args:{options:b,label:"Address",placeholder:"Select address"}},h={args:{options:b,expandTrigger:"hover",placeholder:"Hover to expand"}},f={args:{options:b,disabled:!0,placeholder:"Disabled"}},v={args:{options:b,separator:" > ",defaultValue:["zhejiang","hangzhou","west_lake"]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: "Please select"
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    options,
    label: "Address",
    placeholder: "Select address"
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    options,
    expandTrigger: "hover",
    placeholder: "Hover to expand"
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    options,
    disabled: true,
    placeholder: "Disabled"
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    options,
    separator: " > ",
    defaultValue: ["zhejiang", "hangzhou", "west_lake"]
  }
}`,...v.parameters?.docs?.source}}};const ee=["Default","WithLabel","HoverExpand","Disabled","CustomSeparator"],ie=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:v,Default:p,Disabled:f,HoverExpand:h,WithLabel:g,__namedExportsOrder:ee,default:Y},Symbol.toStringTag,{value:"Module"}));export{ie as C,p as D,h as H,g as W,f as a,v as b};
