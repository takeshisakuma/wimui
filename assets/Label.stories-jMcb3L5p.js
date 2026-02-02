import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as t,I as s}from"./Label-Co09D0_I.js";import"./index-DZRgfITU.js";import"./iframe-BQrTC3s0.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-7b3AX70g.js";import"./useTranslation-DVv0GelF.js";import"./index-BQ4_zB-M.js";const h={title:"Component/Forms/Label",component:t,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{label:"Username",children:o.jsx(s,{placeholder:"Enter your username"})}},r={args:{label:"Email Address",required:!0,children:o.jsx(s,{type:"email",placeholder:"email@example.com"})}},a={args:{label:"Phone Number",showOptional:!0,children:o.jsx(s,{type:"tel",placeholder:"000-0000-0000"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const b=["Default","Required","Optional"];export{e as Default,a as Optional,r as Required,b as __namedExportsOrder,h as default};
