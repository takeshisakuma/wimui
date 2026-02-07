import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as s}from"./Label-BFLX6yWm.js";import{I as t}from"./Input-C9qr0llS.js";const l={title:"Component/Data Entry/Label",component:s,parameters:{layout:"centered"}},e={args:{label:"Username",children:o.jsx(t,{placeholder:"Enter your username"})}},r={args:{label:"Email Address",required:!0,children:o.jsx(t,{type:"email",placeholder:"email@example.com"})}},a={args:{label:"Phone Number",showOptional:!0,children:o.jsx(t,{type:"tel",placeholder:"000-0000-0000"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    children: <Input placeholder="Enter your username" />
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    required: true,
    children: <Input type="email" placeholder="email@example.com" />
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Phone Number",
    showOptional: true,
    children: <Input type="tel" placeholder="000-0000-0000" />
  }
}`,...a.parameters?.docs?.source}}};const n=["Default","Required","Optional"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Optional:a,Required:r,__namedExportsOrder:n,default:l},Symbol.toStringTag,{value:"Module"}));export{e as D,d as L,a as O,r as R};
