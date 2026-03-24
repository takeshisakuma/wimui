import{j as a}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./iframe-BPJl5Wr-.js";import{c as u}from"./index-BGnpSqQE.js";import{B as S}from"./Box-CcgEbcHz.js";const c=m.forwardRef(({columns:e=3,spacing:s=16,className:n,style:g,children:d,...y},f)=>{const b={columnCount:e,columnGap:typeof s=="number"?`${s}px`:s,...g},x={marginBottom:typeof s=="number"?`${s}px`:s};return a.jsx("div",{ref:f,className:u("wim-masonry",n),style:b,...y,children:m.Children.map(d,l=>{if(m.isValidElement(l)){const i=l,M=i.props.style||{};return m.cloneElement(i,{style:{...x,...M},className:u("wim-masonry-item",i.props.className)})}return l})})});c.displayName="Masonry";c.__docgenInfo={description:`Masonry layout component.
It arranges items in columns, filling in gaps to minimize empty space.`,methods:[],displayName:"Masonry",props:{columns:{required:!1,tsType:{name:"number"},description:"Number of columns",defaultValue:{value:"3",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Spacing between items",defaultValue:{value:"16",computed:!1}}}};const j={title:"Components/Layout/Masonry",component:c,tags:[],argTypes:{columns:{control:{type:"number",min:1,max:10}},spacing:{control:{type:"number"}}}},h=[150,200,100,250,180,220,120,300,140,190],p=e=>a.jsx(c,{...e,children:h.map((s,n)=>a.jsx(S,{bg:`hsl(${n*40}, 70%, 80%)`,radius:8,h:s,display:"flex",style:{alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold",color:`hsl(${n*40}, 70%, 30%)`},children:n+1},n))}),r={render:e=>a.jsx(p,{...e}),args:{columns:3,spacing:16}},o={render:e=>a.jsx(p,{...e}),args:{...r.args,columns:5,spacing:10}},t={render:e=>a.jsx(p,{...e}),args:{...r.args,columns:3,spacing:40}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    columns: 3,
    spacing: 16
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    ...Default.args,
    columns: 5,
    spacing: 10
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    ...Default.args,
    columns: 3,
    spacing: 40
  }
}`,...t.parameters?.docs?.source}}};const D=["Default","ManyColumns","LargeSpacing"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:r,LargeSpacing:t,ManyColumns:o,__namedExportsOrder:D,default:j},Symbol.toStringTag,{value:"Module"}));export{r as D,t as L,v as M,o as a};
