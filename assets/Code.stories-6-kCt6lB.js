"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./Code-oxj47W3M.js";var i=t({Block:()=>s,Inline:()=>o,LongContent:()=>c,__namedExportsOrder:()=>l,default:()=>a}),a,o,s,c,l;function u(){return(u=e((()=>{n(),a={title:`Components/Typography & Icons/Code`,component:r,parameters:{layout:`padded`},argTypes:{block:{control:`boolean`},language:{control:`text`}}},o={args:{children:`const x = 10;`,block:!1}},s={args:{children:`function helloWorld() {
  console.log("Hello, world!");
}`,block:!0,language:`javascript`}},c={args:{block:!0,children:`import React from "react";

// export を含む文字列が Indexing エラーの原因になる可能性があるため、コメントアウトなどで回避
// export const Example = () => {
const Example = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>This is a long code block to test scrolling behavior.</p>
        </div>
    );
};`,language:`tsx`}},l=[`Inline`,`Block`,`LongContent`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "const x = 10;",
    block: false
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`function helloWorld() {
  console.log("Hello, world!");
}\`,
    block: true,
    language: "javascript"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    block: true,
    // i18n-ignore-start — コードサンプルの内容のため翻訳対象外
    children: \`import React from "react";

// export を含む文字列が Indexing エラーの原因になる可能性があるため、コメントアウトなどで回避
// export const Example = () => {
const Example = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>This is a long code block to test scrolling behavior.</p>
        </div>
    );
};\`,
    // i18n-ignore-end
    language: "tsx"
  }
}`,...c.parameters?.docs?.source}}}})))()}export{u as i,i as n,o as r,s as t};