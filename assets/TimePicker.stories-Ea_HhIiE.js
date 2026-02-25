import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as u}from"./index-CL3wGj0C.js";/* empty css              */import{L as s}from"./Label-mcYgyGlz.js";const a=({state:e="default",variant:p="outline",fullWidth:c=!1,className:b,disabled:m,...g})=>r.jsx("div",{className:u("wim-input-container","wim-timepicker-container",c&&"wim-input--full-width",b),children:r.jsx("input",{type:"time",className:u("wim-input","wim-timepicker",`wim-input--${m?"disabled":e}`,`wim-input--${p}`,c&&"wim-input--full-width"),disabled:m||e==="disabled",...g})});a.__docgenInfo={description:"ユーザーが時間を選択するためのコンポーネント。",methods:[],displayName:"TimePicker",props:{state:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "ghost"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const f={title:"Components/Pickers & Sliders/TimePicker",component:a,parameters:{layout:"centered"},argTypes:{state:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},t={render:e=>r.jsx(s,{label:"Select Time",children:r.jsx(a,{...e})}),args:{}},l={render:e=>r.jsx(s,{label:"Outline TimePicker",children:r.jsx(a,{...e,variant:"outline"})}),args:{}},i={render:e=>r.jsx(s,{label:"Ghost TimePicker",children:r.jsx(a,{...e,variant:"ghost"})}),args:{}},n={render:e=>r.jsx(s,{label:"Error State",children:r.jsx(a,{...e,state:"error"})}),args:{}},o={render:e=>r.jsx(s,{label:"Disabled State",children:r.jsx(a,{...e,disabled:!0})}),args:{}},d={render:e=>r.jsx(s,{label:"Full Width TimePicker",style:{width:"100%"},children:r.jsx(a,{...e,fullWidth:!0})}),args:{},parameters:{layout:"padded"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Select Time">\r
      <TimePicker {...args} />\r
    </Label>,
  args: {}
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Outline TimePicker">\r
      <TimePicker {...args} variant="outline" />\r
    </Label>,
  args: {}
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Ghost TimePicker">\r
      <TimePicker {...args} variant="ghost" />\r
    </Label>,
  args: {}
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Error State">\r
      <TimePicker {...args} state="error" />\r
    </Label>,
  args: {}
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Disabled State">\r
      <TimePicker {...args} disabled />\r
    </Label>,
  args: {}
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Full Width TimePicker" style={{
    width: "100%"
  }}>\r
      <TimePicker {...args} fullWidth />\r
    </Label>,
  args: {},
  parameters: {
    layout: "padded"
  }
}`,...d.parameters?.docs?.source}}};const h=["Default","Outline","Ghost","ErrorStatus","Disabled","FullWidth"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Disabled:o,ErrorStatus:n,FullWidth:d,Ghost:i,Outline:l,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{t as D,n as E,d as F,i as G,l as O,P as T,o as a};
