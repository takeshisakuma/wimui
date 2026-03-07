import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-BLtjAiBw.js";import{c as M}from"./index-DlDwX616.js";import{C}from"./Checkbox-5f3SKktB.js";import{B as N}from"./Button-DFue9QvZ.js";import{B as O}from"./BaseListItem-CYGWL0Kx.js";const K=({dataSource:c=[],targetKeys:o,onChange:u,titles:k=["Source","Target"],className:q,style:I,disabled:l=!1})=>{const[d,S]=g.useState([]),[R,A]=g.useState(o||[]),x=typeof o<"u"&&!!u,m=x?o:R,b=g.useMemo(()=>c.filter(e=>!m.includes(e.key)),[c,m]),_=g.useMemo(()=>c.filter(e=>m.includes(e.key)),[c,m]),D=e=>{l||S(a=>a.includes(e)?a.filter(n=>n!==e):[...a,e])},L=(e,a)=>{if(l)return;const n=e,i=n.every(t=>d.includes(t));S(i?t=>t.filter(p=>!n.includes(p)):t=>[...new Set([...t,...n])])},j=e=>{if(l)return;const a=e==="toRight"?b.map(t=>t.key):_.map(t=>t.key),n=d.filter(t=>a.includes(t)),i=e==="toRight"?[...m,...n]:m.filter(t=>!n.includes(t));x||A(i),u&&u(i,e,n),S(t=>t.filter(p=>!n.includes(p)))},w=(e,a,n)=>{const i=e.filter(r=>!r.disabled).map(r=>r.key),t=d.filter(r=>i.includes(r)),p=i.length>0&&t.length===i.length,E=t.length>0&&t.length<i.length;return s.jsxs("div",{className:"wim-transfer__list",children:[s.jsxs("div",{className:"wim-transfer__header",children:[s.jsx(C,{checked:p,indeterminate:E,onChange:()=>L(i),disabled:l||i.length===0,label:a}),s.jsxs("span",{className:"wim-transfer__header-count",children:[t.length,"/",e.length]})]}),s.jsx("div",{className:"wim-transfer__body",children:e.length===0?s.jsx("div",{className:"wim-transfer__empty",children:"No data"}):e.map(r=>s.jsx(O,{className:"wim-transfer__item",disabled:l||r.disabled,onClick:()=>!r.disabled&&D(r.key),icon:s.jsx(C,{checked:d.includes(r.key),disabled:l||r.disabled}),children:r.title},r.key))})]})},B=d.filter(e=>b.some(a=>a.key===e)).length===0,z=d.filter(e=>_.some(a=>a.key===e)).length===0;return s.jsxs("div",{className:M("wim-transfer",l&&"wim-transfer--disabled",q),style:I,children:[w(b,k[0]),s.jsxs("div",{className:"wim-transfer__operation",children:[s.jsx(N,{priority:"secondary",size:"small",onClick:()=>j("toRight"),disabled:l||B,iconName:"ChevronRightIcon"}),s.jsx(N,{priority:"secondary",size:"small",onClick:()=>j("toLeft"),disabled:l||z,iconName:"ChevronLeftIcon"})]}),w(_,k[1])]})};K.__docgenInfo={description:"2つのカラム間でアイテムを移動させて選択を行うためのコンポーネント。",methods:[],displayName:"Transfer",props:{dataSource:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  title: string;
  description?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TransferItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},targetKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  targetKeys: string[],
  direction: "toLeft" | "toRight",
  moveKeys: string[],
) => void`,signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"targetKeys"},{type:{name:"union",raw:'"toLeft" | "toRight"',elements:[{name:"literal",value:'"toLeft"'},{name:"literal",value:'"toRight"'}]},name:"direction"},{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"moveKeys"}],return:{name:"void"}}},description:""},titles:{required:!1,tsType:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},description:"",defaultValue:{value:'["Source", "Target"]',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const P={title:"Components/Advanced Inputs/Transfer",component:K,parameters:{layout:"centered"}},T=Array.from({length:20}).map((c,o)=>({key:o.toString(),title:`Item ${o+1}`,description:`Description of item ${o+1}`,disabled:o%5===0})),f={args:{dataSource:T,targetKeys:["1","3","5"]}},V=()=>{const[c,o]=g.useState(["1","2"]);return s.jsx(K,{dataSource:T,targetKeys:c,onChange:u=>o(u)})},y={render:()=>s.jsx(V,{})},h={args:{dataSource:T,titles:["Available","Selected"],targetKeys:["10","11"]}},v={args:{dataSource:T,disabled:!0,targetKeys:["1","2"]}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    dataSource,
    targetKeys: ["1", "3", "5"]
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <TransferWrapper />
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    dataSource,
    titles: ["Available", "Selected"],
    targetKeys: ["10", "11"]
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    dataSource,
    disabled: true,
    targetKeys: ["1", "2"]
  }
}`,...v.parameters?.docs?.source}}};const W=["Default","Controlled","CustomTitles","Disabled"],U=Object.freeze(Object.defineProperty({__proto__:null,Controlled:y,CustomTitles:h,Default:f,Disabled:v,__namedExportsOrder:W,default:P},Symbol.toStringTag,{value:"Module"}));export{y as C,f as D,U as T,h as a,v as b};
