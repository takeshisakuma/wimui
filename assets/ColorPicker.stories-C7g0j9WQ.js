import{j as r}from"./jsx-runtime-u17CrQMm.js";import{P as d}from"./index-8SIbFkC-.js";/* empty css              */import{L as l}from"./Label-9v4jcFfI.js";const a=({state:e="default",variant:f="outline",fullWidth:b=!1,className:c="",disabled:p,...g})=>{const h=`wim-input--${p?"disabled":e}`,v=`wim-input--${f}`,m=b?"wim-input--full-width":"";return r.jsx("div",{className:["wim-input-container","wim-colorpicker-container",m,c].filter(Boolean).join(" "),children:r.jsx("input",{type:"color",className:["wim-input","wim-colorpicker",h,v,m,c].filter(Boolean).join(" "),disabled:p||e==="disabled",...g})})};a.propTypes={state:d.oneOf(["default","error","disabled"]),variant:d.oneOf(["outline","ghost"]),fullWidth:d.bool,className:d.string};a.__docgenInfo={description:"ユーザーが色を選択するためのコンポーネント。",methods:[],displayName:"ColorPicker",props:{state:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "disabled"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'}]},description:"フィールドの状態。",defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"error"',computed:!1},{value:'"disabled"',computed:!1}]}},variant:{required:!1,tsType:{name:"union",raw:'"outline" | "ghost"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'}]},description:"デザインバリエーション。",defaultValue:{value:'"outline"',computed:!1},type:{name:"enum",value:[{value:'"outline"',computed:!1},{value:'"ghost"',computed:!1}]}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"横幅を100%にするかどうか。",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{defaultValue:{value:'""',computed:!1},description:"追加のクラス名。",type:{name:"string"},required:!1}}};const C={title:"Component/Pickers & Sliders/ColorPicker",component:a,parameters:{layout:"centered"},argTypes:{state:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},t={render:e=>r.jsx(l,{label:"Select Color",children:r.jsx(a,{...e})}),args:{defaultValue:"#3b82f6"}},s={render:e=>r.jsx(l,{label:"Outline ColorPicker",children:r.jsx(a,{...e,variant:"outline"})}),args:{defaultValue:"#10b981"}},o={render:e=>r.jsx(l,{label:"Ghost ColorPicker",children:r.jsx(a,{...e,variant:"ghost"})}),args:{defaultValue:"#f59e0b"}},n={render:e=>r.jsx(l,{label:"Error State",children:r.jsx(a,{...e,state:"error"})}),args:{defaultValue:"#ef4444"}},i={render:e=>r.jsx(l,{label:"Disabled State",children:r.jsx(a,{...e,disabled:!0})}),args:{defaultValue:"#6b7280"}},u={render:e=>r.jsx(l,{label:"Full Width ColorPicker",style:{width:"100%"},children:r.jsx(a,{...e,fullWidth:!0})}),args:{defaultValue:"#8b5cf6"},parameters:{layout:"padded"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Select Color">\r
            <ColorPicker {...args} />\r
        </Label>,
  args: {
    defaultValue: "#3b82f6"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Label label="Outline ColorPicker">\r
            <ColorPicker {...args} variant="outline" />\r
        </Label>,
  args: {
    defaultValue: "#10b981"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const j=["Default","Outline","Ghost","Error","Disabled","FullWidth"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Disabled:i,Error:n,FullWidth:u,Ghost:o,Outline:s,__namedExportsOrder:j,default:C},Symbol.toStringTag,{value:"Module"}));export{V as C,t as D,n as E,u as F,o as G,s as O,i as a};
