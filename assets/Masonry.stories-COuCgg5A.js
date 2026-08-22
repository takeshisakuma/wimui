"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{cr as r}from"./iframe-F5Up1IQq.js";import{t as i,yi as a}from"./src-Ssuy8lr7.js";import{n as o,r as s,t as c}from"./DemoCell-DrSRjuv9.js";var l=e({Default:()=>m,LargeSpacing:()=>g,ManyColumns:()=>h,__namedExportsOrder:()=>_,default:()=>d}),u,d,f,p,m,h,g,_,v=t((()=>{n(),i(),s(),u=r(),d={title:`Components/Layout/Masonry`,component:a,tags:[],argTypes:{columns:{control:{type:`number`,min:1,max:10}},spacing:{control:`number`}}},f=[150,200,100,250,180,220,120,300,140,190],p=e=>(0,u.jsx)(a,{...e,children:f.map((e,t)=>(0,u.jsx)(c,{intent:o(t),h:e,style:{fontSize:`var(--wim-font-size-2xl)`},children:t+1},t))}),m={render:e=>(0,u.jsx)(p,{...e}),args:{columns:3,spacing:16}},h={render:e=>(0,u.jsx)(p,{...e}),args:{...m.args,columns:5,spacing:10}},g={render:e=>(0,u.jsx)(p,{...e}),args:{...m.args,columns:3,spacing:40}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    columns: 3,
    spacing: 16
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    ...Default.args,
    columns: 5,
    spacing: 10
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <MasonryDemo {...args} />,
  args: {
    ...Default.args,
    columns: 3,
    spacing: 40
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`ManyColumns`,`LargeSpacing`]}));v();export{m as Default,g as LargeSpacing,h as ManyColumns,_ as __namedExportsOrder,d as default,v as n,l as t};