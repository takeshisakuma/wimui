import{j as u}from"./jsx-runtime-u17CrQMm.js";import{H as i}from"./HamburgerMenu-ChTGktDY.js";import{r as c}from"./iframe-8YyUgjUD.js";const g={title:"Component/Navigation Elements/HamburgerMenu",component:i,parameters:{layout:"centered"},tags:[],argTypes:{isOpen:{control:"boolean",description:"State of the menu (open/closed)"},size:{control:{type:"select"},options:["small","medium","large"],description:"Size of the hamburger menu"},color:{control:"color",description:"Color of the bars"},onClick:{action:"clicked"}}},a=e=>{const[l,n]=c.useState(e.isOpen||!1);c.useEffect(()=>{n(e.isOpen||!1)},[e.isOpen]);const m=p=>{n(d=>!d),e.onClick?.(p)};return u.jsx(i,{...e,isOpen:l,onClick:m})},r={args:{isOpen:!1,size:"medium"},render:a},o={args:{size:"small"},render:a},s={args:{size:"large"},render:a},t={args:{color:"#ff5722"},render:a};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    size: "medium"
  },
  render: renderWithState
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: renderWithState
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: renderWithState
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: "#ff5722"
  },
  render: renderWithState
}`,...t.parameters?.docs?.source}}};const f=["Default","Small","Large","Colored"],h=Object.freeze(Object.defineProperty({__proto__:null,Colored:t,Default:r,Large:s,Small:o,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{r as D,h as H};
