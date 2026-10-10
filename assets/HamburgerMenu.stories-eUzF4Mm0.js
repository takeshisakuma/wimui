"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./HamburgerMenu-BOcODQNh.js";import{n as s,t as c}from"./playOpen-BfHmRBb6.js";var l=n({Colored:()=>_,Default:()=>m,Large:()=>g,Open:()=>v,Small:()=>h,__namedExportsOrder:()=>y,default:()=>f}),u,d,f,p,m,h,g,_,v,y;function b(){return(b=t((()=>{u=e(r(),1),a(),c(),d=i(),f={title:`Components/Navigation Elements/HamburgerMenu`,component:o,parameters:{layout:`centered`},tags:[],argTypes:{open:{control:`boolean`,description:`State of the menu (open/closed)`},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`Size of the hamburger menu`},color:{control:`color`,description:`Color of the bars`},onClick:{action:`clicked`}}},p=e=>{let[t,n]=(0,u.useState)(e.open||!1);return(0,u.useEffect)(()=>{n(e.open||!1)},[e.open]),(0,d.jsx)(o,{...e,open:t,onOpenChange:n})},m={args:{open:!1,size:`md`},render:p},h={args:{size:`sm`},render:p},g={args:{size:`lg`},render:p},_={args:{color:`var(--wim-color-danger)`},render:p},v={...m,play:s},y=[`Default`,`Small`,`Large`,`Colored`,`Open`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    size: "md"
  },
  render: renderWithState
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  render: renderWithState
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  render: renderWithState
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    color: "var(--wim-color-danger)"
  },
  render: renderWithState
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: openFirstPopup
}`,...v.parameters?.docs?.source}}}})))()}export{l as n,b as r,m as t};