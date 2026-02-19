import{j as c}from"./jsx-runtime-u17CrQMm.js";import{c as p}from"./index-CBSBtogc.js";const l=({children:a,code:t,block:s=!1,language:n,className:i})=>{const d=s?"pre":"code";return c.jsx(d,{className:p("wim-code",s?"wim-code--block":"wim-code--inline",n&&`language-${n}`,i),children:s?c.jsx("code",{className:n&&`language-${n}`,children:t||a}):t||a})};l.__docgenInfo={description:"",methods:[],displayName:"Code",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},code:{required:!1,tsType:{name:"string"},description:""},block:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},language:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const m={title:"Component/Typography & Icons/Code",component:l,parameters:{layout:"padded"},argTypes:{block:{control:"boolean"},language:{control:"text"}}},e={args:{children:"const x = 10;",block:!1}},o={args:{children:`function helloWorld() {
  console.log("Hello, world!");
}`,block:!0,language:"javascript"}},r={args:{block:!0,children:`import React from "react";

// export を含む文字列が Indexing エラーの原因になる可能性があるため、コメントアウトなどで回避
// export const Example = () => {
const Example = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>This is a long code block to test scrolling behavior.</p>
        </div>
    );
};`,language:"tsx"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "const x = 10;",
    block: false
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: \`function helloWorld() {
  console.log("Hello, world!");
}\`,
    block: true,
    language: "javascript"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    block: true,
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
    language: "tsx"
  }
}`,...r.parameters?.docs?.source}}};const u=["Inline","Block","LongContent"],x=Object.freeze(Object.defineProperty({__proto__:null,Block:o,Inline:e,LongContent:r,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{o as B,x as C,e as I,r as L};
