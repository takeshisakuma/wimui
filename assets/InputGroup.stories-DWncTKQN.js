import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as i}from"./index-BFGcS2dx.js";import{I as c}from"./Input-BoOpCBXh.js";import{B as d}from"./Button-D12-9xLh.js";const n=({children:r,fullWidth:l=!1,className:m=""})=>{const h=["wim-input-group",l?"wim-input-group--full-width":"",m].filter(Boolean).join(" ");return e.jsx("div",{className:h,children:r})},t=({children:r,className:l=""})=>e.jsx("span",{className:["wim-input-group-text",l].filter(Boolean).join(" "),children:r});n.propTypes={children:i.node.isRequired,fullWidth:i.bool,className:i.string};t.propTypes={children:i.node.isRequired,className:i.string};n.__docgenInfo={description:"複数の入力要素やボタン、テキストを組み合わせて一つのユニットとして表示するコンポーネント。",methods:[],displayName:"InputGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"グループ化する要素（Input, Button, InputGroupTextなど）。",type:{name:"node"}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"横幅を100%にするかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};t.__docgenInfo={description:"InputGroup内でテキストやアイコンを表示するためのアドオンコンポーネント。",methods:[],displayName:"InputGroupText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"表示するテキストやアイコン。",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const x={title:"Component/Data Entry/InputGroup",component:n,parameters:{layout:"centered"}},o={render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{children:"@"}),e.jsx(c,{placeholder:"username"})]})},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(c,{placeholder:"Search..."}),e.jsx(d,{priority:"primary",iconName:"SearchIcon",label:"Search"})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(c,{placeholder:"Recipient's username"}),e.jsx(t,{children:"@example.com"})]})},p={render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{children:"$"}),e.jsx(t,{children:"0.00"}),e.jsx(c,{placeholder:"Price"}),e.jsx(t,{children:".00"})]})},u={args:{fullWidth:!0},render:r=>e.jsx("div",{style:{width:"600px"},children:e.jsxs(n,{...r,children:[e.jsx(t,{children:"Search"}),e.jsx(c,{placeholder:"Type something..."}),e.jsx(d,{priority:"primary",label:"Go"})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <InputGroup {...args}>\r
            <InputGroupText>@</InputGroupText>\r
            <Input placeholder="username" />\r
        </InputGroup>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <InputGroup {...args}>\r
            <Input placeholder="Search..." />\r
            <Button priority="primary" iconName="SearchIcon" label="Search" />\r
        </InputGroup>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    width: "600px"
  }}>\r
            <InputGroup {...args}>\r
                <InputGroupText>Search</InputGroupText>\r
                <Input placeholder="Type something..." />\r
                <Button priority="primary" label="Go" />\r
            </InputGroup>\r
        </div>
}`,...u.parameters?.docs?.source}}};const I=["Basic","WithButton","Suffix","MultipleAddons","FullWidth"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,FullWidth:u,MultipleAddons:p,Suffix:a,WithButton:s,__namedExportsOrder:I,default:x},Symbol.toStringTag,{value:"Module"}));export{o as B,u as F,j as I,p as M,a as S,s as W};
