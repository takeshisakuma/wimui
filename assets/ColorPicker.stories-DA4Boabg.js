import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as m}from"./index-BzKEtpRa.js";/* empty css              */import{L as l}from"./Label-BTssvnOh.js";const a=({state:e="default",variant:b="outline",fullWidth:u=!1,className:c,disabled:p,...f})=>r.jsx("div",{className:m("wim-input-container","wim-colorpicker-container",u&&"wim-input--full-width",c),children:r.jsx("input",{type:"color",className:m("wim-input","wim-colorpicker",`wim-input--${p?"disabled":e}`,`wim-input--${b}`,u&&"wim-input--full-width",c),disabled:p||e==="disabled",...f})});a.__docgenInfo={description:"ユーザーが色を選択するためのコンポーネント。",methods:[],displayName:"ColorPicker",props:{state:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "ghost"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const g={title:"Component/Pickers & Sliders/ColorPicker",component:a,parameters:{layout:"centered"},argTypes:{state:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},s={render:e=>r.jsx(l,{label:"Select Color",children:r.jsx(a,{...e})}),args:{defaultValue:"#3b82f6"}},t={render:e=>r.jsx(l,{label:"Outline ColorPicker",children:r.jsx(a,{...e,variant:"outline"})}),args:{defaultValue:"#10b981"}},o={render:e=>r.jsx(l,{label:"Ghost ColorPicker",children:r.jsx(a,{...e,variant:"ghost"})}),args:{defaultValue:"#f59e0b"}},n={render:e=>r.jsx(l,{label:"Error State",children:r.jsx(a,{...e,state:"error"})}),args:{defaultValue:"#ef4444"}},i={render:e=>r.jsx(l,{label:"Disabled State",children:r.jsx(a,{...e,disabled:!0})}),args:{defaultValue:"#6b7280"}},d={render:e=>r.jsx(l,{label:"Full Width ColorPicker",style:{width:"100%"},children:r.jsx(a,{...e,fullWidth:!0})}),args:{defaultValue:"#8b5cf6"},parameters:{layout:"padded"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Select Color">\r
            <ColorPicker {...args} />\r
        </Label>,
  args: {
    defaultValue: "#3b82f6"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Outline ColorPicker">\r
            <ColorPicker {...args} variant="outline" />\r
        </Label>,
  args: {
    defaultValue: "#10b981"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Ghost ColorPicker">\r
            <ColorPicker {...args} variant="ghost" />\r
        </Label>,
  args: {
    defaultValue: "#f59e0b"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Error State">\r
            <ColorPicker {...args} state="error" />\r
        </Label>,
  args: {
    defaultValue: "#ef4444"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Disabled State">\r
            <ColorPicker {...args} disabled />\r
        </Label>,
  args: {
    defaultValue: "#6b7280"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const h=["Default","Outline","Ghost","Error","Disabled","FullWidth"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:i,Error:n,FullWidth:d,Ghost:o,Outline:t,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{P as C,s as D,n as E,d as F,o as G,t as O,i as a};
