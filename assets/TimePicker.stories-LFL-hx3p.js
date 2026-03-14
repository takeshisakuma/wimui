import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as L}from"./index-DVfFB0Qc.js";/* empty css              */import{I as S}from"./Input-Du2U_ujG.js";import{L as n}from"./FieldTemplate-BArpVXEf.js";import{A as o}from"./i18nConstants-BpHxieg5.js";import{u as l}from"./useTranslation-XEwyYNrX.js";const s=({status:a="default",variant:e="outline",fullWidth:r=!1,className:f,disabled:g,allowClear:_=!0,...b})=>t.jsx(S,{type:"time",allowClear:_,status:a,variant:e,fullWidth:r,className:L("wim-timepicker",f),disabled:g,...b});s.__docgenInfo={description:"ユーザーが時間を選択するためのコンポーネント。",methods:[],displayName:"TimePicker",props:{status:{defaultValue:{value:'"default"',computed:!1},required:!1},variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},allowClear:{defaultValue:{value:"true",computed:!1},required:!1}}};const k={title:"Components/Pickers & Sliders/TimePicker",component:s,parameters:{layout:"centered"},argTypes:{status:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},i={render:function(e){const{t:r}=l(o);return t.jsx(n,{label:r("story_timepicker_select"),children:t.jsx(s,{...e})})},args:{}},c={render:function(e){const{t:r}=l(o);return t.jsx(n,{label:r("story_timepicker_outline"),children:t.jsx(s,{...e,variant:"outline"})})},args:{}},u={render:function(e){const{t:r}=l(o);return t.jsx(n,{label:r("story_timepicker_ghost"),children:t.jsx(s,{...e,variant:"ghost"})})},args:{}},d={render:function(e){const{t:r}=l(o);return t.jsx(n,{label:r("story_picker_error"),children:t.jsx(s,{...e,status:"error"})})},args:{}},m={render:function(e){const{t:r}=l(o);return t.jsx(n,{label:r("story_picker_disabled"),children:t.jsx(s,{...e,disabled:!0})})},args:{}},p={render:function(e){const{t:r}=l(o);return t.jsx(n,{label:r("story_picker_fullwidth"),style:{width:"100%"},children:t.jsx(s,{...e,fullWidth:!0})})},args:{},parameters:{layout:"padded"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_timepicker_select")}>\r
        <TimePicker {...args} />\r
      </Label>;
  },
  args: {}
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_timepicker_outline")}>\r
        <TimePicker {...args} variant="outline" />\r
      </Label>;
  },
  args: {}
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_timepicker_ghost")}>\r
        <TimePicker {...args} variant="ghost" />\r
      </Label>;
  },
  args: {}
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_picker_error")}>\r
        <TimePicker {...args} status="error" />\r
      </Label>;
  },
  args: {}
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_picker_disabled")}>\r
        <TimePicker {...args} disabled />\r
      </Label>;
  },
  args: {}
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...p.parameters?.docs?.source}}};const h=["Default","Outline","Ghost","ErrorStatus","Disabled","FullWidth"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Disabled:m,ErrorStatus:d,FullWidth:p,Ghost:u,Outline:c,__namedExportsOrder:h,default:k},Symbol.toStringTag,{value:"Module"}));export{i as D,d as E,p as F,u as G,c as O,R as T,m as a};
