"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./CodeDiffViewer-CxRGxUeB.js";var i=e({Applied:()=>p,Applying:()=>f,Default:()=>s,LargeDiff:()=>d,UnifiedView:()=>u,WithActions:()=>l,WithFilename:()=>c,__namedExportsOrder:()=>m,default:()=>o}),a,o,s,c,l,u,d,f,p,m,h=t((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/AI/CodeDiffViewer`,component:r,parameters:{layout:`padded`},args:{before:`function greet(name) {
  console.log("Hello, " + name);
  return name;
}`,after:`function greet(name: string): string {
  console.log(\`Hello, \${name}!\`);
  return name.trim();
}`,language:`ts`}},s={},c={args:{filename:`greet.ts`}},l={args:{filename:`greet.ts`,onApply:a(),onReject:a()}},u={args:{filename:`greet.ts`,view:`unified`,onApply:a(),onReject:a()}},d={args:{filename:`utils.ts`,onApply:a(),onReject:a(),before:`import { useState } from "react";

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}`,after:`import { useState, useCallback } from "react";

export function useCounter(initial = 0, step = 1) {
  const [count, setCount] = useState(initial);
  const increment = useCallback(() => setCount(c => c + step), [step]);
  const decrement = useCallback(() => setCount(c => c - step), [step]);
  const reset = useCallback(() => setCount(initial), [initial]);
  return { count, increment, decrement, reset };
}

export function clamp(value: number, min: number, max: number): number {
  if (min > max) throw new RangeError("min must be <= max");
  return Math.min(Math.max(value, min), max);
}`}},f={args:{filename:`greet.ts`,onApply:a(),onReject:a(),isApplying:!0}},p={args:{filename:`greet.ts`,onApply:a(),onReject:a(),isApplied:!0}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "greet.ts"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "greet.ts",
    onApply: fn(),
    onReject: fn()
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "greet.ts",
    view: "unified",
    onApply: fn(),
    onReject: fn()
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "utils.ts",
    onApply: fn(),
    onReject: fn(),
    // i18n-ignore-start — before/after はコードサンプルの内容のため翻訳対象外
    before: \`import { useState } from "react";

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}\`,
    after: \`import { useState, useCallback } from "react";

export function useCounter(initial = 0, step = 1) {
  const [count, setCount] = useState(initial);
  const increment = useCallback(() => setCount(c => c + step), [step]);
  const decrement = useCallback(() => setCount(c => c - step), [step]);
  const reset = useCallback(() => setCount(initial), [initial]);
  return { count, increment, decrement, reset };
}

export function clamp(value: number, min: number, max: number): number {
  if (min > max) throw new RangeError("min must be <= max");
  return Math.min(Math.max(value, min), max);
}\`
    // i18n-ignore-end
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "greet.ts",
    onApply: fn(),
    onReject: fn(),
    isApplying: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "greet.ts",
    onApply: fn(),
    onReject: fn(),
    isApplied: true
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithFilename`,`WithActions`,`UnifiedView`,`LargeDiff`,`Applying`,`Applied`]}));h();export{p as Applied,f as Applying,s as Default,d as LargeDiff,u as UnifiedView,l as WithActions,c as WithFilename,m as __namedExportsOrder,o as default,h as n,i as t};