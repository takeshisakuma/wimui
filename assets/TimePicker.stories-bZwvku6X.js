import{j as n}from"./jsx-runtime-u17CrQMm.js";import{c as _}from"./index-DwL0CKxr.js";/* empty css              */import{I as k}from"./Input-D7gMXT4N.js";import{L as o}from"./Label-DAfkqEiJ.js";import{u as a}from"./useTranslation-2PVo7Ynq.js";const s=({state:t="default",variant:e="outline",fullWidth:r=!1,className:p,disabled:f,allowClear:g=!0,...b})=>n.jsx(k,{type:"time",rightIcon:"ClockIcon",allowClear:g,state:t,variant:e,fullWidth:r,className:_("wim-timepicker",p),disabled:f,...b});s.__docgenInfo={description:"ユーザーが時間を選択するためのコンポーネント。",methods:[],displayName:"TimePicker",props:{state:{defaultValue:{value:'"default"',computed:!1},required:!1},variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},allowClear:{defaultValue:{value:"true",computed:!1},required:!1}}};const h={title:"Components/Pickers & Sliders/TimePicker",component:s,parameters:{layout:"centered"},argTypes:{state:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},c={render:function(e){const{t:r}=a(["docs","common","components"]);return n.jsx(o,{label:r("story_timepicker_select"),children:n.jsx(s,{...e})})},args:{}},l={render:function(e){const{t:r}=a(["docs","common","components"]);return n.jsx(o,{label:r("story_timepicker_outline"),children:n.jsx(s,{...e,variant:"outline"})})},args:{}},i={render:function(e){const{t:r}=a(["docs","common","components"]);return n.jsx(o,{label:r("story_timepicker_ghost"),children:n.jsx(s,{...e,variant:"ghost"})})},args:{}},d={render:function(e){const{t:r}=a(["docs","common","components"]);return n.jsx(o,{label:r("story_picker_error"),children:n.jsx(s,{...e,state:"error"})})},args:{}},m={render:function(e){const{t:r}=a(["docs","common","components"]);return n.jsx(o,{label:r("story_picker_disabled"),children:n.jsx(s,{...e,disabled:!0})})},args:{}},u={render:function(e){const{t:r}=a(["docs","common","components"]);return n.jsx(o,{label:r("story_picker_fullwidth"),style:{width:"100%"},children:n.jsx(s,{...e,fullWidth:!0})})},args:{},parameters:{layout:"padded"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        <TimePicker {...args} state="error" />\r
      </Label>;
  },
  args: {}
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_picker_disabled")}>\r
        <TimePicker {...args} disabled />\r
      </Label>;
  },
  args: {}
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const y=["Default","Outline","Ghost","ErrorStatus","Disabled","FullWidth"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:m,ErrorStatus:d,FullWidth:u,Ghost:i,Outline:l,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{c as D,d as E,u as F,i as G,l as O,S as T,m as a};
