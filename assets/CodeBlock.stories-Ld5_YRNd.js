"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./CodeBlock-CYgTrvx2.js";var i=e({Bash:()=>p,Collapsible:()=>f,CustomMaxLines:()=>h,Default:()=>l,JSON:()=>m,NoCopyButton:()=>g,WithFilename:()=>d,WithLineNumbers:()=>u,__namedExportsOrder:()=>_,default:()=>a}),a,o,s,c,l,u,d,f,p,m,h,g,_,v=t((()=>{n(),a={title:`Components/AI/CodeBlock`,component:r,parameters:{layout:`padded`},argTypes:{language:{control:`text`},filename:{control:`text`},showCopy:{control:`boolean`},showLineNumbers:{control:`boolean`},maxLines:{control:`number`}}},o=`import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ label, onClick, disabled = false }: ButtonProps) => (
  <button
    className="btn"
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);`,s=`# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build`,c=`{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}`,l={args:{code:o,language:`tsx`,showCopy:!0,showLineNumbers:!1}},u={args:{code:o,language:`tsx`,showLineNumbers:!0,showCopy:!0}},d={args:{code:o,filename:`Button.tsx`,showLineNumbers:!0,showCopy:!0}},f={args:{code:o,language:`tsx`,showCopy:!0,maxLines:5}},p={args:{code:s,language:`bash`,showCopy:!0}},m={args:{code:c,language:`json`,showCopy:!0,showLineNumbers:!0}},h={args:{code:o,language:`tsx`,showCopy:!0,maxLines:10}},g={args:{code:`const x = 1;`,language:`js`,showCopy:!1}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    code: tsxCode,
    language: "tsx",
    showCopy: true,
    showLineNumbers: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    code: tsxCode,
    language: "tsx",
    showLineNumbers: true,
    showCopy: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    code: tsxCode,
    filename: "Button.tsx",
    showLineNumbers: true,
    showCopy: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    code: tsxCode,
    language: "tsx",
    showCopy: true,
    maxLines: 5
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    code: bashCode,
    language: "bash",
    showCopy: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    code: jsonCode,
    language: "json",
    showCopy: true,
    showLineNumbers: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    code: tsxCode,
    language: "tsx",
    showCopy: true,
    maxLines: 10
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    code: "const x = 1;",
    language: "js",
    showCopy: false
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithLineNumbers`,`WithFilename`,`Collapsible`,`Bash`,`JSON`,`CustomMaxLines`,`NoCopyButton`]}));v();export{p as Bash,f as Collapsible,h as CustomMaxLines,l as Default,m as JSON,g as NoCopyButton,d as WithFilename,u as WithLineNumbers,_ as __namedExportsOrder,a as default,v as n,i as t};