import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-DHIUSKRB.js";import{I as c}from"./Input-DoKZeU8m.js";import{B as l}from"./Button-DifG4zIM.js";const s=({children:r,fullWidth:i=!1,className:m})=>e.jsx("div",{className:d("wim-input-group",i&&"wim-input-group--full-width",m),children:r}),t=({children:r,className:i})=>e.jsx("span",{className:d("wim-input-group-text",i),children:r});s.__docgenInfo={description:"複数の入力要素やボタン、テキストを組み合わせて一つのユニットとして表示するコンポーネント。",methods:[],displayName:"InputGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};t.__docgenInfo={description:"InputGroup内でテキストやアイコンを表示するためのアドオンコンポーネント。",methods:[],displayName:"InputGroupText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const h={title:"Component/Form Layout/InputGroup",component:s,parameters:{layout:"centered"}},n={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{children:"@"}),e.jsx(c,{placeholder:"username"})]})},o={render:r=>e.jsxs(s,{...r,children:[e.jsx(c,{placeholder:"Search..."}),e.jsx(l,{priority:"primary",iconName:"SearchIcon",label:"Search"})]})},a={render:r=>e.jsxs(s,{...r,children:[e.jsx(c,{placeholder:"Recipient's username"}),e.jsx(t,{children:"@example.com"})]})},p={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{children:"$"}),e.jsx(t,{children:"0.00"}),e.jsx(c,{placeholder:"Price"}),e.jsx(t,{children:".00"})]})},u={args:{fullWidth:!0},render:r=>e.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:e.jsxs(s,{...r,children:[e.jsx(t,{children:"Search"}),e.jsx(c,{placeholder:"Type something..."}),e.jsx(l,{priority:"primary",label:"Go"})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <InputGroup {...args}>\r
            <InputGroupText>@</InputGroupText>\r
            <Input placeholder="username" />\r
        </InputGroup>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <InputGroup {...args}>\r
            <Input placeholder="Search..." />\r
            <Button priority="primary" iconName="SearchIcon" label="Search" />\r
        </InputGroup>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <InputGroup {...args}>\r
            <Input placeholder="Recipient's username" />\r
            <InputGroupText>@example.com</InputGroupText>\r
        </InputGroup>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <InputGroup {...args}>\r
            <InputGroupText>$</InputGroupText>\r
            <InputGroupText>0.00</InputGroupText>\r
            <Input placeholder="Price" />\r
            <InputGroupText>.00</InputGroupText>\r
        </InputGroup>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  render: args => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>\r
            <InputGroup {...args}>\r
                <InputGroupText>Search</InputGroupText>\r
                <Input placeholder="Type something..." />\r
                <Button priority="primary" label="Go" />\r
            </InputGroup>\r
        </div>
}`,...u.parameters?.docs?.source}}};const x=["Basic","WithButton","Suffix","MultipleAddons","FullWidth"],f=Object.freeze(Object.defineProperty({__proto__:null,Basic:n,FullWidth:u,MultipleAddons:p,Suffix:a,WithButton:o,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{n as B,u as F,f as I,p as M,a as S,o as W};
