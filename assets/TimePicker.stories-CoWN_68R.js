import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./index-DWTvJvSx.js";/* empty css              */import{I as b}from"./Input-BGgP-MIa.js";import{L as n}from"./FieldTemplate-ctav63-N.js";import{u as a}from"./useTranslation-BJQcmf5i.js";const r=({status:t="default",variant:s="outline",fullWidth:o=!1,className:m,disabled:p,allowClear:g=!0,...y})=>e.jsx(b,{type:"time",allowClear:g,status:t,variant:s,fullWidth:o,className:f("wim-timepicker",m),disabled:p,...y});r.__docgenInfo={description:"ユーザーが時間を選択するためのコンポーネント。",methods:[],displayName:"TimePicker",props:{status:{defaultValue:{value:'"default"',computed:!1},required:!1},variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},allowClear:{defaultValue:{value:"true",computed:!1},required:!1}}};const v={title:"Components/Pickers & Sliders/TimePicker",component:r,parameters:{layout:"centered"},argTypes:{status:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},c={render:function(s){const{t:o}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{label:o("story_timepicker_select"),children:e.jsx(r,{...s})})},args:{}},d={render:function(s){const{t:o}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{label:o("story_timepicker_outline"),children:e.jsx(r,{...s,variant:"outline"})})},args:{}},i={render:function(s){const{t:o}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{label:o("story_timepicker_ghost"),children:e.jsx(r,{...s,variant:"ghost"})})},args:{}},l={render:function(s){const{t:o}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{label:o("story_picker_error"),children:e.jsx(r,{...s,status:"error"})})},args:{}},u={render:function(s){const{t:o}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{label:o("story_picker_disabled"),children:e.jsx(r,{...s,disabled:!0})})},args:{}},_={render:function(s){const{t:o}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{label:o("story_picker_fullwidth"),style:{width:"100%"},children:e.jsx(r,{...s,fullWidth:!0})})},args:{},parameters:{layout:"padded"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_timepicker_select")}>\r
        <TimePicker {...args} />\r
      </Label>;
  },
  args: {}
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_timepicker_outline")}>\r
        <TimePicker {...args} variant="outline" />\r
      </Label>;
  },
  args: {}
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_timepicker_ghost")}>\r
        <TimePicker {...args} variant="ghost" />\r
      </Label>;
  },
  args: {}
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_picker_error")}>\r
        <TimePicker {...args} status="error" />\r
      </Label>;
  },
  args: {}
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_picker_disabled")}>\r
        <TimePicker {...args} disabled />\r
      </Label>;
  },
  args: {}
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,..._.parameters?.docs?.source}}};const k=["Default","Outline","Ghost","ErrorStatus","Disabled","FullWidth"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:u,ErrorStatus:l,FullWidth:_,Ghost:i,Outline:d,__namedExportsOrder:k,default:v},Symbol.toStringTag,{value:"Module"}));export{c as D,l as E,_ as F,i as G,d as O,P as T,u as a};
