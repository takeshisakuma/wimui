"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./Terminal-B3HZ1Bg6.js";var i=e({AgentSession:()=>f,Default:()=>u,GrowWithContent:()=>p,WithError:()=>d,__namedExportsOrder:()=>m,default:()=>l}),a,o,s,c,l,u,d,f,p,m,h=t((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o=[{id:`1`,type:`input`,content:`npm run build`},{id:`2`,type:`output`,content:`> wimui@1.0.0 build`},{id:`3`,type:`output`,content:`> vite build`},{id:`4`,type:`output`,content:``},{id:`5`,type:`output`,content:`\x1B[32m✓\x1B[0m 42 modules transformed.`},{id:`6`,type:`output`,content:`\x1B[32m✓\x1B[0m built in 1.23s`}],s=[{id:`1`,type:`input`,content:`node server.js`},{id:`2`,type:`output`,content:`Starting server on port 3000...`},{id:`3`,type:`error`,content:`Error: EADDRINUSE: address already in use :::3000`},{id:`4`,type:`info`,content:"Tip: run `lsof -i :3000` to find the conflicting process"}],c=[{id:`1`,type:`input`,content:`cat src/App.tsx`},{id:`2`,type:`output`,content:`import React from 'react';`},{id:`3`,type:`output`,content:`export default function App() {`},{id:`4`,type:`output`,content:`  return <div>Hello</div>;`},{id:`5`,type:`output`,content:`}`},{id:`6`,type:`input`,content:`npm test`},{id:`7`,type:`output`,content:`\x1B[33mRUNNING\x1B[0m App.test.tsx`},{id:`8`,type:`output`,content:`\x1B[32mPASS\x1B[0m  3 tests completed`}],l={title:`Components/AI/Terminal`,component:r,parameters:{layout:`padded`},args:{lines:o,title:`zsh`,height:280}},u={},d={args:{lines:s,title:`node`,height:200}},f={args:{lines:c,title:`agent — bash`,height:320,onClear:a()}},p={args:{height:void 0,lines:o}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    lines: errorLines,
    title: "node",
    height: 200
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    lines: agentLines,
    title: "agent — bash",
    height: 320,
    onClear: fn()
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    height: undefined,
    lines: buildLines
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithError`,`AgentSession`,`GrowWithContent`]}));h();export{f as AgentSession,u as Default,p as GrowWithContent,d as WithError,m as __namedExportsOrder,l as default,h as n,i as t};