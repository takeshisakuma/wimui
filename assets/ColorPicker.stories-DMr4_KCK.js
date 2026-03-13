import{j as o}from"./jsx-runtime-u17CrQMm.js";import{C as r}from"./ColorPicker-ChtVZOEC.js";import{L as n}from"./FieldTemplate-C5Qnk9Lp.js";import{u as a}from"./useTranslation-DVQ5refS.js";const p={title:"Components/Pickers & Sliders/ColorPicker",component:r,parameters:{layout:"centered"},argTypes:{status:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},c={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{label:e("story_colorpicker_label"),children:o.jsx(r,{...s})})},args:{defaultValue:"#3b82f6"}},d={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{label:e("story_colorpicker_outline"),children:o.jsx(r,{...s,variant:"outline"})})},args:{defaultValue:"#10b981"}},l={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{label:e("story_colorpicker_ghost"),children:o.jsx(r,{...s,variant:"ghost"})})},args:{defaultValue:"#f59e0b"}},i={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{label:e("story_colorpicker_error"),children:o.jsx(r,{...s,status:"error"})})},args:{defaultValue:"#ef4444"}},u={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{label:e("story_colorpicker_disabled"),children:o.jsx(r,{...s,disabled:!0})})},args:{defaultValue:"#6b7280"}},_={render:function(s){const{t:e}=a(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return o.jsx(n,{label:e("story_colorpicker_fullwidth"),style:{width:"100%"},children:o.jsx(r,{...s,fullWidth:!0})})},args:{defaultValue:"#8b5cf6"},parameters:{layout:"padded"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_colorpicker_label")}>\r
        <ColorPicker {...args} />\r
      </Label>;
  },
  args: {
    defaultValue: "#3b82f6"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_colorpicker_outline")}>\r
        <ColorPicker {...args} variant="outline" />\r
      </Label>;
  },
  args: {
    defaultValue: "#10b981"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_colorpicker_ghost")}>\r
        <ColorPicker {...args} variant="ghost" />\r
      </Label>;
  },
  args: {
    defaultValue: "#f59e0b"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_colorpicker_error")}>\r
        <ColorPicker {...args} status="error" />\r
      </Label>;
  },
  args: {
    defaultValue: "#ef4444"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Label label={t("story_colorpicker_disabled")}>\r
        <ColorPicker {...args} disabled />\r
      </Label>;
  },
  args: {
    defaultValue: "#6b7280"
  }
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,..._.parameters?.docs?.source}}};const m=["Default","Outline","Ghost","ErrorStatus","Disabled","FullWidth"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:u,ErrorStatus:i,FullWidth:_,Ghost:l,Outline:d,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{v as C,c as D,i as E,_ as F,l as G,d as O,u as a};
