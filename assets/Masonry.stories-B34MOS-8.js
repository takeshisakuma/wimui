import{j as o}from"./jsx-runtime-u17CrQMm.js";import{R as c}from"./iframe-DYlShzji.js";import{c as p}from"./index-Cm_IZiCA.js";import{B as x}from"./Box-eWmxUJ_3.js";import{u as M}from"./useTranslation-DygSvNPf.js";const l=c.forwardRef(({columns:e=3,spacing:s=16,className:i,style:n,children:d,...g},y)=>{const f={columnCount:e,columnGap:typeof s=="number"?`${s}px`:s,...n},_={marginBottom:typeof s=="number"?`${s}px`:s};return o.jsx("div",{ref:y,className:p("wim-masonry",i),style:f,...g,children:c.Children.map(d,a=>{if(c.isValidElement(a)){const b=a.props.style||{};return c.cloneElement(a,{style:{..._,...b},className:p("wim-masonry-item",a.props.className)})}return a})})});l.displayName="Masonry";l.__docgenInfo={description:`Masonry layout component.
It arranges items in columns, filling in gaps to minimize empty space.`,methods:[],displayName:"Masonry",props:{columns:{required:!1,tsType:{name:"number"},description:"Number of columns",defaultValue:{value:"3",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Spacing between items",defaultValue:{value:"16",computed:!1}}}};const S={title:"Components/Layout/Masonry",component:l,tags:[],argTypes:{columns:{control:{type:"number",min:1,max:10}},spacing:{control:{type:"number"}}}},j=[150,200,100,250,180,220,120,300,140,190],u=e=>{const{t:s}=M(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(l,{...e,children:j.map((i,n)=>o.jsx(x,{bg:`hsl(${n*40}, 70%, 80%)`,radius:8,h:i,display:"flex",style:{alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold",color:`hsl(${n*40}, 70%, 30%)`},children:n+1},n))})},r={render:e=>o.jsx(u,{...e}),args:{columns:3,spacing:16}},t={render:e=>o.jsx(u,{...e}),args:{...r.args,columns:5,spacing:10}},m={render:e=>o.jsx(u,{...e}),args:{...r.args,columns:3,spacing:40}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const D=["Default","ManyColumns","LargeSpacing"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:r,LargeSpacing:m,ManyColumns:t,__namedExportsOrder:D,default:S},Symbol.toStringTag,{value:"Module"}));export{r as D,m as L,T as M,t as a};
