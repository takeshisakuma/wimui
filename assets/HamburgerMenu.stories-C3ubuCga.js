import{j as u}from"./jsx-runtime-u17CrQMm.js";import{H as i}from"./HamburgerMenu-CUf2_uJs.js";import{r as c}from"./iframe-C5IekCde.js";import"./index-DCvovkc_.js";import"./preload-helper-PPVm8Dsz.js";const z={title:"Component/Navigation Elements/HamburgerMenu",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"State of the menu (open/closed)"},size:{control:{type:"select"},options:["small","medium","large"],description:"Size of the hamburger menu"},color:{control:"color",description:"Color of the bars"},onClick:{action:"clicked"}}},a=e=>{const[m,n]=c.useState(e.isOpen||!1);c.useEffect(()=>{n(e.isOpen||!1)},[e.isOpen]);const l=p=>{n(d=>!d),e.onClick?.(p)};return u.jsx(i,{...e,isOpen:m,onClick:l})},r={args:{isOpen:!1,size:"medium"},render:a},s={args:{size:"small"},render:a},o={args:{size:"large"},render:a},t={args:{color:"#ff5722"},render:a};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    size: "medium"
  },
  render: renderWithState
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: renderWithState
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: renderWithState
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: "#ff5722"
  },
  render: renderWithState
}`,...t.parameters?.docs?.source}}};const C=["Default","Small","Large","Colored"];export{t as Colored,r as Default,o as Large,s as Small,C as __namedExportsOrder,z as default};
