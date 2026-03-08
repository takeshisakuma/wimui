import{j as a}from"./jsx-runtime-u17CrQMm.js";import{R as c}from"./iframe-DEBOWsqM.js";import{c as i}from"./index-x98TZOX1.js";import{B as M}from"./Box-CFs51jrL.js";import{u as S}from"./useTranslation-C_sUcuQ0.js";const l=c.forwardRef(({columns:e=3,spacing:s=16,className:p,style:n,children:g,...y},d)=>{const f={columnCount:e,columnGap:typeof s=="number"?`${s}px`:s,...n},b={marginBottom:typeof s=="number"?`${s}px`:s};return a.jsx("div",{ref:d,className:i("wim-masonry",p),style:f,...y,children:c.Children.map(g,o=>{if(c.isValidElement(o)){const x=o.props.style||{};return c.cloneElement(o,{style:{...b,...x},className:i("wim-masonry-item",o.props.className)})}return o})})});l.displayName="Masonry";l.__docgenInfo={description:`Masonry layout component.
It arranges items in columns, filling in gaps to minimize empty space.`,methods:[],displayName:"Masonry",props:{columns:{required:!1,tsType:{name:"number"},description:"Number of columns",defaultValue:{value:"3",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Spacing between items",defaultValue:{value:"16",computed:!1}}}};const j={title:"Components/Layout/Masonry",component:l,tags:[],argTypes:{columns:{control:{type:"number",min:1,max:10}},spacing:{control:{type:"number"}}}},D=[150,200,100,250,180,220,120,300,140,190],u=e=>{const{t:s}=S(["docs","common","components"]);return a.jsx(l,{...e,children:D.map((p,n)=>a.jsx(M,{bg:`hsl(${n*40}, 70%, 80%)`,radius:8,h:p,display:"flex",style:{alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold",color:`hsl(${n*40}, 70%, 30%)`},children:n+1},n))})},r={render:e=>a.jsx(u,{...e}),args:{columns:3,spacing:16}},t={render:e=>a.jsx(u,{...e}),args:{...r.args,columns:5,spacing:10}},m={render:e=>a.jsx(u,{...e}),args:{...r.args,columns:3,spacing:40}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    columns: 3,
    spacing: 16
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    ...Default.args,
    columns: 5,
    spacing: 10
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    ...Default.args,
    columns: 3,
    spacing: 40
  }
}`,...m.parameters?.docs?.source}}};const _=["Default","ManyColumns","LargeSpacing"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:r,LargeSpacing:m,ManyColumns:t,__namedExportsOrder:_,default:j},Symbol.toStringTag,{value:"Module"}));export{r as D,m as L,v as M,t as a};
