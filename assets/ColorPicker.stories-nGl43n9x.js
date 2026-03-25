import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as a}from"./ColorPicker-BYxrHSjP.js";import{L as t}from"./FieldTemplate-Dhwi_QWF.js";import{A as o}from"./iframe-DpFfXC60.js";import{u as s}from"./useTranslation-DVY4EGH3.js";const f={title:"Components/Pickers & Sliders/ColorPicker",component:a,parameters:{layout:"centered"},argTypes:{status:{control:"select",options:["default","error","disabled"]},variant:{control:"select",options:["outline","ghost"]}}},c={render:function(e){const{t:n}=s(o);return r.jsx(t,{label:n("story_colorpicker_label"),children:r.jsx(a,{...e})})},args:{defaultValue:"#3b82f6"}},u={render:function(e){const{t:n}=s(o);return r.jsx(t,{label:n("story_colorpicker_outline"),children:r.jsx(a,{...e,variant:"outline"})})},args:{defaultValue:"#10b981"}},i={render:function(e){const{t:n}=s(o);return r.jsx(t,{label:n("story_colorpicker_ghost"),children:r.jsx(a,{...e,variant:"ghost"})})},args:{defaultValue:"#f59e0b"}},d={render:function(e){const{t:n}=s(o);return r.jsx(t,{label:n("story_colorpicker_error"),children:r.jsx(a,{...e,status:"error"})})},args:{defaultValue:"#ef4444"}},p={render:function(e){const{t:n}=s(o);return r.jsx(t,{label:n("story_colorpicker_disabled"),children:r.jsx(a,{...e,disabled:!0})})},args:{defaultValue:"#6b7280"}},b={render:function(e){const{t:n}=s(o);return r.jsx(t,{label:n("story_colorpicker_fullwidth"),style:{width:"100%"},children:r.jsx(a,{...e,fullWidth:!0})})},args:{defaultValue:"#8b5cf6"},parameters:{layout:"padded"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_colorpicker_label")}>
        <ColorPicker {...args} />
      </Label>;
  },
  args: {
    defaultValue: "#3b82f6"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_colorpicker_outline")}>
        <ColorPicker {...args} variant="outline" />
      </Label>;
  },
  args: {
    defaultValue: "#10b981"
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_colorpicker_ghost")}>
        <ColorPicker {...args} variant="ghost" />
      </Label>;
  },
  args: {
    defaultValue: "#f59e0b"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_colorpicker_error")}>
        <ColorPicker {...args} status="error" />
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
    return <Label label={t("story_colorpicker_disabled")}>
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
    return <Label label={t("story_colorpicker_fullwidth")} style={{
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
}`,...b.parameters?.docs?.source}}};const m=["Default","Outline","Ghost","ErrorStatus","Disabled","FullWidth"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Disabled:p,ErrorStatus:d,FullWidth:b,Ghost:i,Outline:u,__namedExportsOrder:m,default:f},Symbol.toStringTag,{value:"Module"}));export{A as C,c as D,d as E,b as F,i as G,u as O,p as a};
