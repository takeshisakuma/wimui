"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{cr as i}from"./iframe-F5Up1IQq.js";import{gr as a,t as o}from"./src-Ssuy8lr7.js";var s=e({Controlled:()=>h,Default:()=>d,Disabled:()=>f,MinMax:()=>p,Step:()=>m,__namedExportsOrder:()=>g,default:()=>u}),c,l,u,d,f,p,m,h,g,_=t((()=>{c=n(r(),1),o(),l=i(),u={title:`Components/Pickers & Sliders/RangeSlider`,component:a,argTypes:{onChange:{action:`changed`},onAfterChange:{action:`afterChanged`}}},d={args:{defaultValue:[20,80]}},f={args:{defaultValue:[30,70],disabled:!0}},p={args:{min:-50,max:50,defaultValue:[-20,20]}},m={args:{min:0,max:100,step:10,defaultValue:[20,90]}},h=()=>{let[e,t]=(0,c.useState)([20,50]);return(0,l.jsx)(a,{value:e,onChange:t})},h.__docgenInfo={description:``,methods:[],displayName:`Controlled`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [20, 80]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [30, 70],
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    min: -50,
    max: 50,
    defaultValue: [-20, 20]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: [20, 90]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [val, setVal] = useState<[number, number]>([20, 50]);
  return <RangeSlider value={val} onChange={setVal} />;
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Disabled`,`MinMax`,`Step`,`Controlled`]}));_();export{h as Controlled,d as Default,f as Disabled,p as MinMax,m as Step,g as __namedExportsOrder,u as default,_ as n,s as t};