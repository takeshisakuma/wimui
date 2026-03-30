import{j as u}from"./jsx-runtime-u17CrQMm.js";import{H as i}from"./HamburgerMenu-DHeXIwLD.js";import{r as c}from"./iframe-BB8xHwtR.js";const g={title:"Components/Navigation Elements/HamburgerMenu",component:i,parameters:{layout:"centered"},tags:[],argTypes:{isOpen:{control:"boolean",description:"State of the menu (open/closed)"},size:{control:"radio",options:["sm","md","lg"],description:"Size of the hamburger menu"},color:{control:"color",description:"Color of the bars"},onClick:{action:"clicked"}}},n=e=>{const[m,a]=c.useState(e.isOpen||!1);c.useEffect(()=>{a(e.isOpen||!1)},[e.isOpen]);const l=d=>{a(p=>!p),e.onClick?.(d)};return u.jsx(i,{...e,isOpen:m,onClick:l})},r={args:{isOpen:!1,size:"md"},render:n},o={args:{size:"sm"},render:n},s={args:{size:"lg"},render:n},t={args:{color:"#ff5722"},render:n};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
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
}`,...t.parameters?.docs?.source}}};const f=["Default","Small","Large","Colored"],h=Object.freeze(Object.defineProperty({__proto__:null,Colored:t,Default:r,Large:s,Small:o,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{r as D,h as H};
