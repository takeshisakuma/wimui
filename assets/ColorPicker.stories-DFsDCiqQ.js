import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as n}from"./ColorPicker-Bgw_UY5b.js";import{L as s}from"./Label-B4NhbWol.js";import{u as t}from"./useTranslation-BS4yh-5V.js";const p={title:"Components/Pickers & Sliders/ColorPicker",component:n,parameters:{layout:"centered"},argTypes:{state:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},c={render:function(r){const{t:o}=t(["docs","common","components"]);return e.jsx(s,{label:o("story_colorpicker_label"),children:e.jsx(n,{...r})})},args:{defaultValue:"#3b82f6"}},l={render:function(r){const{t:o}=t(["docs","common","components"]);return e.jsx(s,{label:o("story_colorpicker_outline"),children:e.jsx(n,{...r,variant:"outline"})})},args:{defaultValue:"#10b981"}},d={render:function(r){const{t:o}=t(["docs","common","components"]);return e.jsx(s,{label:o("story_colorpicker_ghost"),children:e.jsx(n,{...r,variant:"ghost"})})},args:{defaultValue:"#f59e0b"}},u={render:function(r){const{t:o}=t(["docs","common","components"]);return e.jsx(s,{label:o("story_colorpicker_error"),children:e.jsx(n,{...r,state:"error"})})},args:{defaultValue:"#ef4444"}},i={render:function(r){const{t:o}=t(["docs","common","components"]);return e.jsx(s,{label:o("story_colorpicker_disabled"),children:e.jsx(n,{...r,disabled:!0})})},args:{defaultValue:"#6b7280"}},m={render:function(r){const{t:o}=t(["docs","common","components"]);return e.jsx(s,{label:o("story_colorpicker_fullwidth"),style:{width:"100%"},children:e.jsx(n,{...r,fullWidth:!0})})},args:{defaultValue:"#8b5cf6"},parameters:{layout:"padded"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_colorpicker_label")}>\r
        <ColorPicker {...args} />\r
      </Label>;
  },
  args: {
    defaultValue: "#3b82f6"
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_colorpicker_outline")}>\r
        <ColorPicker {...args} variant="outline" />\r
      </Label>;
  },
  args: {
    defaultValue: "#10b981"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_colorpicker_ghost")}>\r
        <ColorPicker {...args} variant="ghost" />\r
      </Label>;
  },
  args: {
    defaultValue: "#f59e0b"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_colorpicker_error")}>\r
        <ColorPicker {...args} state="error" />\r
      </Label>;
  },
  args: {
    defaultValue: "#ef4444"
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_colorpicker_disabled")}>\r
        <ColorPicker {...args} disabled />\r
      </Label>;
  },
  args: {
    defaultValue: "#6b7280"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Label label={t("story_colorpicker_fullwidth")} style={{
      width: "100%"
    }}>\r
        <ColorPicker {...args} fullWidth />\r
      </Label>;
  },
  args: {
    defaultValue: "#8b5cf6"
  },
  parameters: {
    layout: "padded"
  }
}`,...m.parameters?.docs?.source}}};const b=["Default","Outline","Ghost","ErrorStatus","Disabled","FullWidth"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:i,ErrorStatus:u,FullWidth:m,Ghost:d,Outline:l,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{h as C,c as D,u as E,m as F,d as G,l as O,i as a};
