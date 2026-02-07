import{j as a}from"./jsx-runtime-u17CrQMm.js";import{P as c}from"./index-BCAFDtBU.js";/* empty css              */import{L as t}from"./Label-DeMJ9I0k.js";const r=({state:e="default",variant:f="outline",fullWidth:b=!1,className:u="",disabled:p,...g})=>{const h=`wim-input--${p?"disabled":e}`,v=`wim-input--${f}`,m=b?"wim-input--full-width":"";return a.jsx("div",{className:["wim-input-container","wim-datepicker-container",m,u].filter(Boolean).join(" "),children:a.jsx("input",{type:"date",className:["wim-input","wim-datepicker",h,v,m,u].filter(Boolean).join(" "),disabled:p||e==="disabled",...g})})};r.propTypes={state:c.oneOf(["default","error","disabled"]),variant:c.oneOf(["outline","ghost"]),fullWidth:c.bool,className:c.string};r.__docgenInfo={description:"ユーザーが日付を選択するためのコンポーネント。",methods:[],displayName:"DatePicker",props:{state:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'}]},description:"フィールドの状態。",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"error"',computed:!1},{value:'"disabled"',computed:!1}]}},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "ghost"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"デザインバリエーション。",defaultValue:{value:'"outline"',computed:!1},type:{name:"enum",value:[{value:'"outline"',computed:!1},{value:'"ghost"',computed:!1}]}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"横幅を100%にするかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{defaultValue:{value:'""',computed:!1},description:"追加のクラス名。",type:{name:"string"},required:!1}}};const D={title:"Component/Data Entry/DatePicker",component:r,parameters:{layout:"centered"},argTypes:{state:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},s={render:e=>a.jsx(t,{label:"Select Date",children:a.jsx(r,{...e})}),args:{}},l={render:e=>a.jsx(t,{label:"Outline DatePicker",children:a.jsx(r,{...e,variant:"outline"})}),args:{}},n={render:e=>a.jsx(t,{label:"Ghost DatePicker",children:a.jsx(r,{...e,variant:"ghost"})}),args:{}},o={render:e=>a.jsx(t,{label:"Error State",children:a.jsx(r,{...e,state:"error"})}),args:{}},i={render:e=>a.jsx(t,{label:"Disabled State",children:a.jsx(r,{...e,disabled:!0})}),args:{}},d={render:e=>a.jsx(t,{label:"Full Width DatePicker",style:{width:"100%"},children:a.jsx(r,{...e,fullWidth:!0})}),args:{},parameters:{layout:"padded"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Select Date">\r
            <DatePicker {...args} />\r
        </Label>,
  args: {}
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Outline DatePicker">\r
            <DatePicker {...args} variant="outline" />\r
        </Label>,
  args: {}
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Ghost DatePicker">\r
            <DatePicker {...args} variant="ghost" />\r
        </Label>,
  args: {}
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Error State">\r
            <DatePicker {...args} state="error" />\r
        </Label>,
  args: {}
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Disabled State">\r
            <DatePicker {...args} disabled />\r
        </Label>,
  args: {}
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Full Width DatePicker" style={{
    width: "100%"
  }}>\r
            <DatePicker {...args} fullWidth />\r
        </Label>,
  args: {},
  parameters: {
    layout: "padded"
  }
}`,...d.parameters?.docs?.source}}};const j=["Default","Outline","Ghost","Error","Disabled","FullWidth"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:i,Error:o,FullWidth:d,Ghost:n,Outline:l,__namedExportsOrder:j,default:D},Symbol.toStringTag,{value:"Module"}));export{L as D,o as E,d as F,n as G,l as O,s as a,i as b};
