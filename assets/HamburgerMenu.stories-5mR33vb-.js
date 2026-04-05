import{j as u}from"./jsx-runtime-u17CrQMm.js";import{H as i}from"./HamburgerMenu-7i-_gLr2.js";import{r as c}from"./iframe-DKMOQHZ-.js";const g={title:"Components/Navigation Elements/HamburgerMenu",component:i,parameters:{layout:"centered"},tags:[],argTypes:{open:{control:"boolean",description:"State of the menu (open/closed)"},size:{control:"radio",options:["sm","md","lg"],description:"Size of the hamburger menu"},color:{control:"color",description:"Color of the bars"},onClick:{action:"clicked"}}},n=e=>{const[m,a]=c.useState(e.open||!1);c.useEffect(()=>{a(e.open||!1)},[e.open]);const l=d=>{a(p=>!p),e.onClick?.(d)};return u.jsx(i,{...e,open:m,onClick:l})},r={args:{open:!1,size:"md"},render:n},o={args:{size:"sm"},render:n},s={args:{size:"lg"},render:n},t={args:{color:"#ff5722"},render:n};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    size: "md"
  },
  render: renderWithState
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  render: renderWithState
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  render: renderWithState
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: "#ff5722"
  },
  render: renderWithState
}`,...t.parameters?.docs?.source}}};const f=["Default","Small","Large","Colored"],z=Object.freeze(Object.defineProperty({__proto__:null,Colored:t,Default:r,Large:s,Small:o,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{r as D,z as H};
