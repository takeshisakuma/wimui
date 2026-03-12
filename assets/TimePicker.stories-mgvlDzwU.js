import{j as n}from"./jsx-runtime-u17CrQMm.js";import{c as _}from"./index-Ckw0h7AD.js";/* empty css              */import{I as k}from"./Input-DayEea5m.js";import{L as o}from"./FieldTemplate-DQGW8oml.js";import{u as a}from"./useTranslation-BH3LN071.js";const s=({status:t="default",variant:e="outline",fullWidth:r=!1,className:p,disabled:f,allowClear:g=!0,...b})=>n.jsx(k,{type:"time",allowClear:g,status:t,variant:e,fullWidth:r,className:_("wim-timepicker",p),disabled:f,...b});s.__docgenInfo={description:"ユーザーが時間を選択するためのコンポーネント。",methods:[],displayName:"TimePicker",props:{status:{defaultValue:{value:'"default"',computed:!1},required:!1},variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},allowClear:{defaultValue:{value:"true",computed:!1},required:!1}}};const h={title:"Components/Pickers & Sliders/TimePicker",component:s,parameters:{layout:"centered"},argTypes:{status:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},c={render:function(e){const{t:r}=a(["docs","common","components"]);return n.jsx(o,{label:r("story_timepicker_select"),children:n.jsx(s,{...e})})},args:{}},l={render:function(e){const{t:r}=a(["docs","common","components"]);return n.jsx(o,{label:r("story_timepicker_outline"),children:n.jsx(s,{...e,variant:"outline"})})},args:{}},i={render:function(e){const{t:r}=a(["docs","common","components"]);return n.jsx(o,{label:r("story_timepicker_ghost"),children:n.jsx(s,{...e,variant:"ghost"})})},args:{}},d={render:function(e){const{t:r}=a(["docs","common","components"]);return n.jsx(o,{label:r("story_picker_error"),children:n.jsx(s,{...e,status:"error"})})},args:{}},u={render:function(e){const{t:r}=a(["docs","common","components"]);return n.jsx(o,{label:r("story_picker_disabled"),children:n.jsx(s,{...e,disabled:!0})})},args:{}},m={render:function(e){const{t:r}=a(["docs","common","components"]);return n.jsx(o,{label:r("story_picker_fullwidth"),style:{width:"100%"},children:n.jsx(s,{...e,fullWidth:!0})})},args:{},parameters:{layout:"padded"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_timepicker_select")}>\r
        <TimePicker {...args} />\r
      </Label>;
  },
  args: {}
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_timepicker_outline")}>\r
        <TimePicker {...args} variant="outline" />\r
      </Label>;
  },
  args: {}
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_timepicker_ghost")}>\r
        <TimePicker {...args} variant="ghost" />\r
      </Label>;
  },
  args: {}
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_picker_error")}>\r
        <TimePicker {...args} status="error" />\r
      </Label>;
  },
  args: {}
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_picker_disabled")}>\r
        <TimePicker {...args} disabled />\r
      </Label>;
  },
  args: {}
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_picker_fullwidth")} style={{
      width: "100%"
    }}>\r
        <TimePicker {...args} fullWidth />\r
      </Label>;
  },
  args: {},
  parameters: {
    layout: "padded"
  }
}`,...m.parameters?.docs?.source}}};const y=["Default","Outline","Ghost","ErrorStatus","Disabled","FullWidth"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:u,ErrorStatus:d,FullWidth:m,Ghost:i,Outline:l,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{c as D,d as E,m as F,i as G,l as O,S as T,u as a};
