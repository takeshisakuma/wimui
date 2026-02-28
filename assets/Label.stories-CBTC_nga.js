import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as l}from"./Label-BaN7rIw0.js";import{I as s}from"./Input-D6tZNtlq.js";const n={title:"Components/Form Layout/Label",component:l,parameters:{layout:"centered"},decorators:[t=>o.jsx("div",{style:{maxWidth:"90vw",width:"100%",boxSizing:"border-box"},children:o.jsx(t,{})})]},e={args:{label:"Username",children:o.jsx(s,{placeholder:"Enter your username"})}},r={args:{label:"Email Address",required:!0,children:o.jsx(s,{type:"email",placeholder:"email@example.com"})}},a={args:{label:"Phone Number",showOptional:!0,children:o.jsx(s,{type:"tel",placeholder:"000-0000-0000"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const c=["Default","Required","Optional"],i=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Optional:a,Required:r,__namedExportsOrder:c,default:n},Symbol.toStringTag,{value:"Module"}));export{e as D,i as L,a as O,r as R};
