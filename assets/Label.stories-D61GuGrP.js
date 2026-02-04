import{j as o}from"./jsx-runtime-u17CrQMm.js";import{L as s}from"./Label-DD6YRqgX.js";import{I as t}from"./Input-CUseI3ni.js";import"./index-BMB_0ZU1.js";import"./iframe-CchWMc2Z.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-C7zg83nO.js";import"./useTranslation-DUSmElNm.js";import"./index-BGZUvWth.js";import"./Icon-Bn2KNppe.js";const g={title:"Component/Forms/Label",component:s,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{label:"Username",children:o.jsx(t,{placeholder:"Enter your username"})}},r={args:{label:"Email Address",required:!0,children:o.jsx(t,{type:"email",placeholder:"email@example.com"})}},a={args:{label:"Phone Number",showOptional:!0,children:o.jsx(t,{type:"tel",placeholder:"000-0000-0000"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const x=["Default","Required","Optional"];export{e as Default,a as Optional,r as Required,x as __namedExportsOrder,g as default};
