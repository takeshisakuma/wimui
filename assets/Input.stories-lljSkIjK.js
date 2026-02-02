import{j as r}from"./jsx-runtime-u17CrQMm.js";import{I as a,L as s}from"./Label-Co09D0_I.js";import{F as c}from"./FieldError-CFQCUhQP.js";import"./index-DZRgfITU.js";import"./iframe-BQrTC3s0.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-7b3AX70g.js";import"./useTranslation-DVv0GelF.js";import"./index-BQ4_zB-M.js";import"./Paragraph-BNa41_5D.js";const y={title:"Component/Forms/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{state:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]},type:{control:"select",options:["text","password","email","number","tel","url"]}}},t={render:e=>r.jsx(s,{label:"Default Input",children:r.jsx(a,{...e})}),args:{placeholder:"Enter text..."}},n={render:e=>r.jsx(s,{label:"Outline Input",children:r.jsx(a,{...e})}),args:{variant:"outline",placeholder:"Outline variant"}},l={render:e=>r.jsx(s,{label:"Ghost Input",children:r.jsx(a,{...e})}),args:{variant:"ghost",placeholder:"Ghost variant"}},o={render:e=>r.jsx(s,{label:"Error Input",children:r.jsx(a,{...e})}),args:{state:"error",defaultValue:"Invalid input"}},d={render:e=>r.jsx(s,{label:"Disabled Input",children:r.jsx(a,{...e})}),args:{state:"disabled",defaultValue:"Disabled input"}},i={render:e=>r.jsx(s,{label:"Full Width Input",style:{width:"100%"},children:r.jsx(a,{...e})}),args:{fullWidth:!0,placeholder:"Full width input"},parameters:{layout:"padded"}},p={render:e=>r.jsx(s,{label:"Password",children:r.jsx(a,{...e})}),args:{type:"password",placeholder:"Password input"}},u={render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",width:"320px"},children:[r.jsx(s,{label:"User Name",required:!0,children:r.jsx(a,{...e,placeholder:"Enter your name"})}),e.state==="error"&&r.jsx(c,{content:"This field is required."})]}),args:{state:"default"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Default Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    placeholder: "Enter text..."
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Outline Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    variant: "outline",
    placeholder: "Outline variant"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Ghost Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    variant: "ghost",
    placeholder: "Ghost variant"
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Error Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    state: "error",
    defaultValue: "Invalid input"
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Disabled Input">\r
            <Input {...args} />\r
        </Label>,
  args: {
    state: "disabled",
    defaultValue: "Disabled input"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Full Width Input" style={{
    width: "100%"
  }}>\r
            <Input {...args} />\r
        </Label>,
  args: {
    fullWidth: true,
    placeholder: "Full width input"
  },
  parameters: {
    layout: "padded"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Password">\r
            <Input {...args} />\r
        </Label>,
  args: {
    type: "password",
    placeholder: "Password input"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    width: "320px"
  }}>\r
            <Label label="User Name" required>\r
                <Input {...args} placeholder="Enter your name" />\r
            </Label>\r
            {args.state === "error" && <FieldError content="This field is required." />}\r
        </div>,
  args: {
    state: "default"
  }
}`,...u.parameters?.docs?.source}}};const v=["Default","Outline","Ghost","Error","Disabled","FullWidth","Password","WithLabelAndError"];export{t as Default,d as Disabled,o as Error,i as FullWidth,l as Ghost,n as Outline,p as Password,u as WithLabelAndError,v as __namedExportsOrder,y as default};
