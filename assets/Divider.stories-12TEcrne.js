import{j as i}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-Drm8gX_j.js";const o=({orientation:t="horizontal",thickness:a=1,className:s,style:n,...l})=>{const c={...n,"--wim-divider-thickness":`${a}px`};return i.jsx("div",{role:"separator","aria-orientation":t,className:d("wim-divider",`wim-divider--${t}`,s),style:c,...l})};o.__docgenInfo={description:"`Divider` はコンテンツを視覚的に区切るためのコンポーネントです。",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"分割線の方向",defaultValue:{value:'"horizontal"',computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"線の太さ (px)",defaultValue:{value:"1",computed:!1}}}};const m={title:"Component/Utilities/Divider",component:o,tags:[],parameters:{layout:"centered"},decorators:[(t,a)=>i.jsx("div",{style:{width:a.args.orientation==="vertical"?"auto":"300px",height:a.args.orientation==="vertical"?"100px":"auto",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(t,{})})]},e={args:{orientation:"horizontal"}},r={args:{orientation:"vertical"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "vertical"
  }
}`,...r.parameters?.docs?.source}}};const p=["Default","Vertical"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Vertical:r,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{f as D,r as V,e as a};
