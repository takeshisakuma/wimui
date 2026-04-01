import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./ColorPicker-BuUCg1fK.js";import{L as a}from"./FieldTemplate-BptL9gjC.js";import{A as o}from"./iframe-Cm7axuZH.js";import{u as s}from"./useTranslation-NKv2iRzU.js";const f={title:"Components/Pickers & Sliders/ColorPicker",component:t,parameters:{layout:"centered"},argTypes:{intent:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},c={render:function(e){const{t:n}=s(o);return r.jsx(a,{label:n("story.colorpicker_label"),children:r.jsx(t,{...e})})},args:{defaultValue:"#3b82f6"}},i={render:function(e){const{t:n}=s(o);return r.jsx(a,{label:n("story.colorpicker_outline"),children:r.jsx(t,{...e,variant:"outline"})})},args:{defaultValue:"#10b981"}},u={render:function(e){const{t:n}=s(o);return r.jsx(a,{label:n("story.colorpicker_ghost"),children:r.jsx(t,{...e,variant:"ghost"})})},args:{defaultValue:"#f59e0b"}},d={render:function(e){const{t:n}=s(o);return r.jsx(a,{label:n("story.colorpicker_error"),children:r.jsx(t,{...e,intent:"error"})})},args:{defaultValue:"#ef4444"}},p={render:function(e){const{t:n}=s(o);return r.jsx(a,{label:n("story.colorpicker_disabled"),children:r.jsx(t,{...e,disabled:!0})})},args:{defaultValue:"#6b7280"}},b={render:function(e){const{t:n}=s(o);return r.jsx(a,{label:n("story.colorpicker_fullwidth"),style:{width:"100%"},children:r.jsx(t,{...e,fullWidth:!0})})},args:{defaultValue:"#8b5cf6"},parameters:{layout:"padded"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.colorpicker_label")}>
        <ColorPicker {...args} />
      </Label>;
  },
  args: {
    defaultValue: "#3b82f6"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.colorpicker_outline")}>
        <ColorPicker {...args} variant="outline" />
      </Label>;
  },
  args: {
    defaultValue: "#10b981"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.colorpicker_ghost")}>
        <ColorPicker {...args} variant="ghost" />
      </Label>;
  },
  args: {
    defaultValue: "#f59e0b"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.colorpicker_error")}>
        <ColorPicker {...args} intent="error" />
      </Label>;
  },
  args: {
    defaultValue: "#ef4444"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.colorpicker_disabled")}>
        <ColorPicker {...args} disabled />
      </Label>;
  },
  args: {
    defaultValue: "#6b7280"
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.colorpicker_fullwidth")} style={{
      width: "100%"
    }}>
        <ColorPicker {...args} fullWidth />
      </Label>;
  },
  args: {
    defaultValue: "#8b5cf6"
  },
  parameters: {
    layout: "padded"
  }
}`,...b.parameters?.docs?.source}}};const m=["Default","Outline","Ghost","ErrorStatus","Disabled","FullWidth"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:p,ErrorStatus:d,FullWidth:b,Ghost:u,Outline:i,__namedExportsOrder:m,default:f},Symbol.toStringTag,{value:"Module"}));export{A as C,c as D,d as E,b as F,u as G,i as O,p as a};
