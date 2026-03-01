import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-RqRUvN2f.js";import{c as y}from"./index-B1nuKDx0.js";import{T as H}from"./Transition-1UEQMD_9.js";import{I as S}from"./Icon-DEW6Teyt.js";import{T as V}from"./TreeView-Bke4p75p.js";const C=({treeData:g=[],value:T,onChange:x,placeholder:k="Select",label:v,className:A,disabled:n=!1,multiple:s=!1,searchable:R=!1,defaultExpandedKeys:M=[],id:O,...P})=>{const z=l.useId(),w=O||z,_=`wim-tree-select-label-${w}`,j=`wim-tree-select-trigger-${w}`,[p,h]=l.useState(!1),[F,K]=l.useState(s?[]:""),b=l.useRef(null),N=T!==void 0,t=N?T:F;l.useEffect(()=>{const a=e=>{b.current&&!b.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const L=()=>{n||h(!p)},D=l.useMemo(()=>{const a={},e=G=>{G.forEach(f=>{a[f.value]=f,f.children&&e(f.children)})};return e(g),a},[g]),$=()=>{if(s){const a=Array.isArray(t)?t:[];return a.length===0?null:a.map(e=>D[e]?.label||e).join(", ")}else{const a=t;return a?D[a]?.label||a:null}},q=a=>{let e;s?e=a:(e=a[0]||"",h(!1)),N||K(e),x&&x(e)},E=a=>a.map(e=>r.jsx(V.Item,{value:e.value,label:e.label,icon:e.icon,disabled:e.disabled,children:e.children&&E(e.children)},e.value)),B=l.useMemo(()=>s?Array.isArray(t)?t:[]:t?[t]:[],[t,s]),I=$();return r.jsxs("div",{className:y("wim-tree-select",A),ref:b,...P,children:[v&&r.jsx("label",{id:_,htmlFor:j,className:"wim-tree-select__label",children:v}),r.jsxs("div",{id:j,className:y("wim-tree-select__trigger",p&&"wim-tree-select__trigger--open",n&&"wim-tree-select__trigger--disabled"),onClick:L,tabIndex:n?-1:0,role:"combobox","aria-expanded":p,"aria-haspopup":"tree","aria-disabled":n,"aria-labelledby":v?_:void 0,children:[r.jsx("div",{className:y("wim-tree-select__value",!I&&"wim-tree-select__value--placeholder"),children:I||k}),r.jsx("div",{className:"wim-tree-select__icon",children:r.jsx(S,{name:"ChevronDownIcon",size:"medium"})})]}),r.jsx(H,{show:p&&!n,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-tree-select__dropdown",children:r.jsx(V,{multiSelect:s,defaultSelectedValues:B,onCheckedChange:s?q:void 0,onSelectedChange:s?void 0:q,checkable:s,searchable:R,defaultExpandedValues:M,children:E(g)})})]})};C.__docgenInfo={description:"ツリー形式の選択肢から1つまたは複数を選択するためのコンポーネント。",methods:[],displayName:"TreeSelect",props:{treeData:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: TreeSelectNode[];
  disabled?: boolean;
  icon?: React.ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"TreeSelectNode"}],raw:"TreeSelectNode[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"TreeSelectNode[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultExpandedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Components/Advanced Inputs/TreeSelect",component:C,parameters:{layout:"centered"}},m=[{label:"Design",value:"design",icon:r.jsx(S,{name:"EditIcon",size:"small"}),children:[{label:"Colors",value:"colors",children:[{label:"Primary",value:"primary"},{label:"Secondary",value:"secondary"}]},{label:"Typography",value:"typography"}]},{label:"Components",value:"components",icon:r.jsx(S,{name:"ProjectIcon",size:"small"}),children:[{label:"Button",value:"button"},{label:"Input",value:"input"}]}],o={args:{treeData:m,placeholder:"Please select"}},c={args:{treeData:m,multiple:!0,placeholder:"Select multiple"}},i={args:{treeData:m,searchable:!0,placeholder:"Search nodes"}},d={args:{treeData:m,defaultExpandedKeys:["design","colors"],placeholder:"Expanded by default"}},u={args:{treeData:m,disabled:!0,placeholder:"Disabled"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    treeData,
    placeholder: "Please select"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    treeData,
    multiple: true,
    placeholder: "Select multiple"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    treeData,
    searchable: true,
    placeholder: "Search nodes"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    treeData,
    defaultExpandedKeys: ["design", "colors"],
    placeholder: "Expanded by default"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    treeData,
    disabled: true,
    placeholder: "Disabled"
  }
}`,...u.parameters?.docs?.source}}};const Q=["Default","Multiple","Searchable","DefaultExpanded","Disabled"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:o,DefaultExpanded:d,Disabled:u,Multiple:c,Searchable:i,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{o as D,c as M,i as S,ae as T,d as a,u as b};
