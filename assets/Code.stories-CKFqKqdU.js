import{j as i}from"./jsx-runtime-u17CrQMm.js";import{P as r}from"./index-B0SiIz-z.js";const s=({children:t,block:a=!1,language:l,className:d})=>{const p=a?"pre":"code",c=l?`language-${l}`:"";return i.jsx(p,{className:["wim-code",a?"wim-code--block":"wim-code--inline",c,d].filter(Boolean).join(" "),children:a?i.jsx("code",{className:c,children:t}):t})};s.propTypes={children:r.node.isRequired,block:r.bool,language:r.string,className:r.string};s.__docgenInfo={description:"",methods:[],displayName:"Code",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},block:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},language:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const m={title:"Component/Data Display/Code",component:s,parameters:{layout:"centered"},argTypes:{block:{control:"boolean"},language:{control:"text"}}},e={args:{children:"const x = 10;",block:!1}},o={args:{children:`function helloWorld() {
  console.log("Hello, world!");
}`,block:!0,language:"javascript"}},n={args:{block:!0,children:`import React from "react";

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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const g=["Inline","Block","LongContent"],f=Object.freeze(Object.defineProperty({__proto__:null,Block:o,Inline:e,LongContent:n,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{o as B,f as C,e as I,n as L};
