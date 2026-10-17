"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{t as a}from"./classnames-D09xBJOL.js";import{c as o,s}from"./style-utils-C0B2hRHU.js";import{n as c,r as l,t as u}from"./DemoCell-9PKAo_JV.js";var d,f,p;function m(){return(m=t((()=>{d=`_root_km0v8_2`,f=`_item_km0v8_6`,p={root:d,item:f}})))()}var h,g,_,v;function y(){return(y=t((()=>{h=e(r(),1),g=e(a(),1),o(),m(),_=i(),v=h.forwardRef(({columns:e=3,spacing:t=`2xl`,className:n,style:r,children:i,...a},o)=>{let c={columnCount:e,columnGap:s(t),...r},l={breakInside:`avoid`,marginBottom:s(t)};return(0,_.jsx)(`div`,{ref:o,className:(0,g.default)(`wim-masonry`,p.root,n),style:c,...a,children:h.Children.map(i,e=>{if(h.isValidElement(e)){let t=e.props,n=t.style||{};return h.cloneElement(e,{style:{...l,...n},className:(0,g.default)(p.item,t.className),"data-testid":`masonry-item`})}return e})})}),v.displayName=`Masonry`,v.__docgenInfo={description:`Masonry layout component.
It arranges items in columns, filling in gaps to minimize empty space.`,methods:[],displayName:`Masonry`,props:{columns:{required:!1,tsType:{name:`number`},description:`Number of columns. Pick it from how many items there are — three columns
holding four cards leaves a ragged row that reads as a template, not a choice.
@default 3`,defaultValue:{value:`3`,computed:!1}},spacing:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:'Gap between items: a spacing token name (`"md"`, `"2xl"`, …) or a raw number\nof pixels. Prefer the token so the gap follows the theme.\n@default "2xl"',defaultValue:{value:`"2xl"`,computed:!1}}}}})))()}var b=n({Default:()=>T,LargeSpacing:()=>D,ManyColumns:()=>E,__namedExportsOrder:()=>O,default:()=>S}),x,S,C,w,T,E,D,O;function k(){return(k=t((()=>{r(),y(),l(),x=i(),S={title:`Components/Layout/Masonry`,component:v,tags:[],argTypes:{columns:{control:{type:`number`,min:1,max:10}},spacing:{control:`number`}}},C=[150,200,100,250,180,220,120,300,140,190],w=e=>(0,x.jsx)(v,{...e,children:C.map((e,t)=>(0,x.jsx)(u,{intent:c(t),h:e,style:{fontSize:`var(--wim-font-size-2xl)`},children:t+1},t))}),T={render:e=>(0,x.jsx)(w,{...e}),args:{columns:3,spacing:16}},E={render:e=>(0,x.jsx)(w,{...e}),args:{...T.args,columns:5,spacing:10}},D={render:e=>(0,x.jsx)(w,{...e}),args:{...T.args,columns:3,spacing:40}},O=[`Default`,`ManyColumns`,`LargeSpacing`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    columns: 3,
    spacing: 16
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    ...Default.args,
    columns: 5,
    spacing: 10
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    ...Default.args,
    columns: 3,
    spacing: 40
  }
}`,...D.parameters?.docs?.source}}}})))()}export{k as a,b as i,D as n,E as r,T as t};