"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./RangeSlider-DnWZyXIr.js";var o=t({Controlled:()=>m,Default:()=>u,Disabled:()=>d,MinMax:()=>f,Step:()=>p,__namedExportsOrder:()=>h,default:()=>l}),s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{s=n(),i(),c=r(),l={title:`Components/Pickers & Sliders/RangeSlider`,component:a,argTypes:{onChange:{action:`changed`},onAfterChange:{action:`afterChanged`}}},u={args:{defaultValue:[20,80]}},d={args:{defaultValue:[30,70],disabled:!0}},f={args:{min:-50,max:50,defaultValue:[-20,20]}},p={args:{min:0,max:100,step:10,defaultValue:[20,90]}},m=()=>{let[e,t]=(0,s.useState)([20,50]);return(0,c.jsx)(a,{value:e,onChange:t})},m.__docgenInfo={description:``,methods:[],displayName:`Controlled`},h=[`Default`,`Disabled`,`MinMax`,`Step`,`Controlled`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [20, 80]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [30, 70],
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    min: -50,
    max: 50,
    defaultValue: [-20, 20]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: [20, 90]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [val, setVal] = useState<[number, number]>([20, 50]);
  return <RangeSlider value={val} onChange={setVal} />;
}`,...m.parameters?.docs?.source}}}})))()}export{o as a,f as i,u as n,p as o,d as r,g as s,m as t};