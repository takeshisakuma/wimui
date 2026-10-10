"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{t as a}from"./classnames-D09xBJOL.js";import{n as o,t as s}from"./CodeDiffViewer-D53t-1nk.js";function c(e,t){try{return JSON.stringify(e,null,t)??`null`}catch{return String(e)}}var l,u,d,f;function p(){return(p=t((()=>{l=e(r(),1),u=e(a(),1),o(),d=i(),f=l.forwardRef(({before:e,after:t,indent:n=2,...r},i)=>{let a=(0,l.useMemo)(()=>c(e,n),[e,n]),o=(0,l.useMemo)(()=>c(t,n),[t,n]);return(0,d.jsx)(s,{ref:i,before:a,after:o,language:`json`,...r,className:(0,u.default)(`wim-json-diff-viewer`,r.className)})}),f.displayName=`JsonDiffViewer`,f.__docgenInfo={description:`JsonDiffViewer compares two JSON values side-by-side or in unified form.
Delegates rendering to CodeDiffViewer with language="json".

Composition Contract:
- Managed by: App consumption
- Scroll lock: No`,methods:[],displayName:`JsonDiffViewer`,props:{before:{required:!0,tsType:{name:`unknown`},description:`JSON value before the change`},after:{required:!0,tsType:{name:`unknown`},description:`JSON value after the change`},indent:{required:!1,tsType:{name:`number`},description:`Indentation spaces for JSON.stringify (default: 2)`,defaultValue:{value:`2`,computed:!1}},view:{required:!1,tsType:{name:`union`,raw:`"split" | "unified"`,elements:[{name:`literal`,value:`"split"`},{name:`literal`,value:`"unified"`}]},description:`Display mode inherited from CodeDiffViewer`}},composes:[`Omit`]}})))()}var m=n({ArrayDiff:()=>x,Default:()=>_,NullToObject:()=>b,UnifiedView:()=>y,WithActions:()=>v,__namedExportsOrder:()=>S,default:()=>g}),h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{p(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Data Indicators/JsonDiffViewer`,component:f,parameters:{layout:`padded`},args:{before:{id:`user_123`,name:`Sofia Rossi`,age:30,role:`member`,preferences:{theme:`light`,notifications:!0}},after:{id:`user_123`,name:`Sofia Rossi`,age:31,role:`admin`,preferences:{theme:`dark`,notifications:!0,language:`ja`}}}},_={},v={args:{onApply:h(),onReject:h()}},y={args:{view:`unified`,onApply:h(),onReject:h()}},b={args:{before:null,after:{status:`active`,createdAt:`2026-01-01`},onApply:h()}},x={args:{before:{tags:[`react`,`typescript`],count:2},after:{tags:[`react`,`typescript`,`vite`],count:3},onApply:h(),onReject:h()}},S=[`Default`,`WithActions`,`UnifiedView`,`NullToObject`,`ArrayDiff`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onApply: fn(),
    onReject: fn()
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    view: "unified",
    onApply: fn(),
    onReject: fn()
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    before: null,
    after: {
      status: "active",
      createdAt: "2026-01-01"
    },
    onApply: fn()
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    before: {
      tags: ["react", "typescript"],
      count: 2
    },
    after: {
      tags: ["react", "typescript", "vite"],
      count: 3
    },
    onApply: fn(),
    onReject: fn()
  }
}`,...x.parameters?.docs?.source}}}})))()}export{y as a,b as i,_ as n,v as o,m as r,C as s,x as t};