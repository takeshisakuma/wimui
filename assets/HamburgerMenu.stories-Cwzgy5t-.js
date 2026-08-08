"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{cr as i}from"./iframe-DiXuc7DI.js";import{gi as a,t as o}from"./src-BE5jBQ9L.js";var s=e({Colored:()=>h,Default:()=>f,Large:()=>m,Small:()=>p,__namedExportsOrder:()=>g,default:()=>u}),c,l,u,d,f,p,m,h,g,_=t((()=>{c=n(r(),1),o(),l=i(),u={title:`Components/Navigation Elements/HamburgerMenu`,component:a,parameters:{layout:`centered`},tags:[],argTypes:{open:{control:`boolean`,description:`State of the menu (open/closed)`},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`Size of the hamburger menu`},color:{control:`color`,description:`Color of the bars`},onClick:{action:`clicked`}}},d=e=>{let[t,n]=(0,c.useState)(e.open||!1);(0,c.useEffect)(()=>{n(e.open||!1)},[e.open]);let r=t=>{n(e=>!e),e.onClick?.(t)};return(0,l.jsx)(a,{...e,open:t,onClick:r})},f={args:{open:!1,size:`md`},render:d},p={args:{size:`sm`},render:d},m={args:{size:`lg`},render:d},h={args:{color:`var(--wim-color-danger)`},render:d},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    size: "md"
  },
  render: renderWithState
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  render: renderWithState
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  render: renderWithState
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    color: "var(--wim-color-danger)"
  },
  render: renderWithState
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Small`,`Large`,`Colored`]}));_();export{h as Colored,f as Default,m as Large,p as Small,g as __namedExportsOrder,u as default,_ as n,s as t};