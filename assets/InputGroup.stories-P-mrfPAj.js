import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-6KFIEf95.js";import{I as c}from"./Input-BA5MzGsN.js";import{B as l}from"./Button-DJaEltzo.js";const n=({children:r,fullWidth:i=!1,className:m})=>e.jsx("div",{className:d("wim-input-group",i&&"wim-input-group--full-width",m),children:r}),t=({children:r,className:i})=>e.jsx("span",{className:d("wim-input-group-text",i),children:r});n.__docgenInfo={description:"複数の入力要素やボタン、テキストを組み合わせて一つのユニットとして表示するコンポーネント。",methods:[],displayName:"InputGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};t.__docgenInfo={description:"InputGroup内でテキストやアイコンを表示するためのアドオンコンポーネント。",methods:[],displayName:"InputGroupText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const h={title:"Components/Form Layout/InputGroup",component:n,parameters:{layout:"centered"}},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{children:"@"}),e.jsx(c,{placeholder:"username"})]})},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(c,{placeholder:"Search..."}),e.jsx(l,{variant:"filled",icon:"SearchIcon",label:"Search"})]})},o={render:r=>e.jsxs(n,{...r,children:[e.jsx(c,{placeholder:"Recipient's username"}),e.jsx(t,{children:"@example.com"})]})},p={render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{children:"$"}),e.jsx(t,{children:"0.00"}),e.jsx(c,{placeholder:"Price"}),e.jsx(t,{children:".00"})]})},u={args:{fullWidth:!0},render:r=>e.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:e.jsxs(n,{...r,children:[e.jsx(t,{children:"Search"}),e.jsx(c,{placeholder:"Type something..."}),e.jsx(l,{variant:"filled",label:"Go"})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <InputGroup {...args}>
      <InputGroupText>@</InputGroupText>
      <Input placeholder="username" />
    </InputGroup>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <InputGroup {...args}>
      <Input placeholder="Search..." />
      <Button variant="filled" icon="SearchIcon" label="Search" />
    </InputGroup>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <InputGroup {...args}>
      <Input placeholder="Recipient's username" />
      <InputGroupText>@example.com</InputGroupText>
    </InputGroup>
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: any) => <InputGroup {...args}>
      <InputGroupText>$</InputGroupText>
      <InputGroupText>0.00</InputGroupText>
      <Input placeholder="Price" />
      <InputGroupText>.00</InputGroupText>
    </InputGroup>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  render: (args: any) => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>
      <InputGroup {...args}>
        <InputGroupText>Search</InputGroupText>
        <Input placeholder="Type something..." />
        <Button variant="filled" label="Go" />
      </InputGroup>
    </div>
}`,...u.parameters?.docs?.source}}};const x=["Basic","WithButton","Suffix","MultipleAddons","FullWidth"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:a,FullWidth:u,MultipleAddons:p,Suffix:o,WithButton:s,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{a as B,u as F,j as I,p as M,o as S,s as W};
