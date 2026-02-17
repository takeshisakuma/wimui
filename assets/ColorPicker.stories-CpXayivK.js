import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as a}from"./ColorPicker-Cjcl5FRl.js";import{L as s}from"./Label-CwPoq9YA.js";const i={title:"Component/Pickers & Sliders/ColorPicker",component:a,parameters:{layout:"centered"},argTypes:{state:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},l={render:r=>e.jsx(s,{label:"Select Color",children:e.jsx(a,{...r})}),args:{defaultValue:"#3b82f6"}},o={render:r=>e.jsx(s,{label:"Outline ColorPicker",children:e.jsx(a,{...r,variant:"outline"})}),args:{defaultValue:"#10b981"}},t={render:r=>e.jsx(s,{label:"Ghost ColorPicker",children:e.jsx(a,{...r,variant:"ghost"})}),args:{defaultValue:"#f59e0b"}},n={render:r=>e.jsx(s,{label:"Error State",children:e.jsx(a,{...r,state:"error"})}),args:{defaultValue:"#ef4444"}},d={render:r=>e.jsx(s,{label:"Disabled State",children:e.jsx(a,{...r,disabled:!0})}),args:{defaultValue:"#6b7280"}},c={render:r=>e.jsx(s,{label:"Full Width ColorPicker",style:{width:"100%"},children:e.jsx(a,{...r,fullWidth:!0})}),args:{defaultValue:"#8b5cf6"},parameters:{layout:"padded"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Select Color">\r
            <ColorPicker {...args} />\r
        </Label>,
  args: {
    defaultValue: "#3b82f6"
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Outline ColorPicker">\r
            <ColorPicker {...args} variant="outline" />\r
        </Label>,
  args: {
    defaultValue: "#10b981"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Ghost ColorPicker">\r
            <ColorPicker {...args} variant="ghost" />\r
        </Label>,
  args: {
    defaultValue: "#f59e0b"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Error State">\r
            <ColorPicker {...args} state="error" />\r
        </Label>,
  args: {
    defaultValue: "#ef4444"
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Disabled State">\r
            <ColorPicker {...args} disabled />\r
        </Label>,
  args: {
    defaultValue: "#6b7280"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Full Width ColorPicker" style={{
    width: "100%"
  }}>\r
            <ColorPicker {...args} fullWidth />\r
        </Label>,
  args: {
    defaultValue: "#8b5cf6"
  },
  parameters: {
    layout: "padded"
  }
}`,...c.parameters?.docs?.source}}};const u=["Default","Outline","Ghost","Error","Disabled","FullWidth"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Disabled:d,Error:n,FullWidth:c,Ghost:t,Outline:o,__namedExportsOrder:u,default:i},Symbol.toStringTag,{value:"Module"}));export{g as C,l as D,n as E,c as F,t as G,o as O,d as a};
