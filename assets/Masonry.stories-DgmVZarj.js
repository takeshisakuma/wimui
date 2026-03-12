import{j as o}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./iframe-DmIcUQyH.js";import{c as d}from"./index-B6hjtVy6.js";import{B as M}from"./Box-p0HdRDzA.js";import{u as S}from"./useTranslation-CTezHt8M.js";const c=m.forwardRef(({columns:e=3,spacing:s=16,className:l,style:n,children:g,...y},f)=>{const _={columnCount:e,columnGap:typeof s=="number"?`${s}px`:s,...n},b={marginBottom:typeof s=="number"?`${s}px`:s};return o.jsx("div",{ref:f,className:d("wim-masonry",l),style:_,...y,children:m.Children.map(g,i=>{if(m.isValidElement(i)){const p=i,x=p.props.style||{};return m.cloneElement(p,{style:{...b,...x},className:d("wim-masonry-item",p.props.className)})}return i})})});c.displayName="Masonry";c.__docgenInfo={description:`Masonry layout component.\r
It arranges items in columns, filling in gaps to minimize empty space.`,methods:[],displayName:"Masonry",props:{columns:{required:!1,tsType:{name:"number"},description:"Number of columns",defaultValue:{value:"3",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Spacing between items",defaultValue:{value:"16",computed:!1}}}};const j={title:"Components/Layout/Masonry",component:c,tags:[],argTypes:{columns:{control:{type:"number",min:1,max:10}},spacing:{control:{type:"number"}}}},h=[150,200,100,250,180,220,120,300,140,190],u=e=>{const{t:s}=S(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(c,{...e,children:h.map((l,n)=>o.jsx(M,{bg:`hsl(${n*40}, 70%, 80%)`,radius:8,h:l,display:"flex",style:{alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold",color:`hsl(${n*40}, 70%, 30%)`},children:n+1},n))})},r={render:e=>o.jsx(u,{...e}),args:{columns:3,spacing:16}},a={render:e=>o.jsx(u,{...e}),args:{...r.args,columns:5,spacing:10}},t={render:e=>o.jsx(u,{...e}),args:{...r.args,columns:3,spacing:40}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    columns: 3,
    spacing: 16
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    ...Default.args,
    columns: 5,
    spacing: 10
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    ...Default.args,
    columns: 3,
    spacing: 40
  }
}`,...t.parameters?.docs?.source}}};const D=["Default","ManyColumns","LargeSpacing"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:r,LargeSpacing:t,ManyColumns:a,__namedExportsOrder:D,default:j},Symbol.toStringTag,{value:"Module"}));export{r as D,t as L,E as M,a};
