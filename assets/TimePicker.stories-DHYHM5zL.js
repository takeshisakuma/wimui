import{j as r}from"./jsx-runtime-u17CrQMm.js";import{P as c}from"./index-J9IFADLb.js";/* empty css              */import{L as t}from"./Label-C7eO8oGp.js";const a=({state:e="default",variant:f="outline",fullWidth:b=!1,className:u="",disabled:m,...g})=>{const h=`wim-input--${m?"disabled":e}`,v=`wim-input--${f}`,p=b?"wim-input--full-width":"";return r.jsx("div",{className:["wim-input-container","wim-timepicker-container",p,u].filter(Boolean).join(" "),children:r.jsx("input",{type:"time",className:["wim-input","wim-timepicker",h,v,p,u].filter(Boolean).join(" "),disabled:m||e==="disabled",...g})})};a.propTypes={state:c.oneOf(["default","error","disabled"]),variant:c.oneOf(["outline","ghost"]),fullWidth:c.bool,className:c.string};a.__docgenInfo={description:"ユーザーが時間を選択するためのコンポーネント。",methods:[],displayName:"TimePicker",props:{state:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'}]},description:"フィールドの状態。",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"error"',computed:!1},{value:'"disabled"',computed:!1}]}},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "ghost"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"デザインバリエーション。",defaultValue:{value:'"outline"',computed:!1},type:{name:"enum",value:[{value:'"outline"',computed:!1},{value:'"ghost"',computed:!1}]}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"横幅を100%にするかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{defaultValue:{value:'""',computed:!1},description:"追加のクラス名。",type:{name:"string"},required:!1}}};const T={title:"Component/Data Entry/TimePicker",component:a,parameters:{layout:"centered"},argTypes:{state:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},s={render:e=>r.jsx(t,{label:"Select Time",children:r.jsx(a,{...e})}),args:{}},l={render:e=>r.jsx(t,{label:"Outline TimePicker",children:r.jsx(a,{...e,variant:"outline"})}),args:{}},i={render:e=>r.jsx(t,{label:"Ghost TimePicker",children:r.jsx(a,{...e,variant:"ghost"})}),args:{}},n={render:e=>r.jsx(t,{label:"Error State",children:r.jsx(a,{...e,state:"error"})}),args:{}},o={render:e=>r.jsx(t,{label:"Disabled State",children:r.jsx(a,{...e,disabled:!0})}),args:{}},d={render:e=>r.jsx(t,{label:"Full Width TimePicker",style:{width:"100%"},children:r.jsx(a,{...e,fullWidth:!0})}),args:{},parameters:{layout:"padded"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Select Time">\r
            <TimePicker {...args} />\r
        </Label>,
  args: {}
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const j=["Default","Outline","Ghost","Error","Disabled","FullWidth"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:o,Error:n,FullWidth:d,Ghost:i,Outline:l,__namedExportsOrder:j,default:T},Symbol.toStringTag,{value:"Module"}));export{s as D,n as E,d as F,i as G,l as O,L as T,o as a};
