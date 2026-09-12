"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,Sr as i,Tr as a,ur as o,xr as s}from"./iframe-CIRVVv_5.js";import{t as c,ur as l}from"./src-C35woejG.js";import{a as u}from"./FieldTemplate-CKMyVSjB.js";var d=e({Danger:()=>_,Default:()=>m,Disabled:()=>v,FullWidth:()=>y,Ghost:()=>g,Outline:()=>h,__namedExportsOrder:()=>b,default:()=>p}),f,p,m,h,g,_,v,y,b,x=t((()=>{n(),r(),i(),c(),f=o(),p={title:`Components/Pickers & Sliders/TimePicker`,component:l,parameters:{layout:`centered`},argTypes:{intent:{control:`select`,options:[`default`,`danger`]},variant:{control:`select`,options:[`outline`,`ghost`]}}},m={render:function(e){let{t}=a(s);return(0,f.jsx)(u,{label:t(`story.timepicker_select`),children:(0,f.jsx)(l,{...e})})},args:{}},h={render:function(e){let{t}=a(s);return(0,f.jsx)(u,{label:t(`story.timepicker_outline`),children:(0,f.jsx)(l,{...e,variant:`outline`})})},args:{}},g={render:function(e){let{t}=a(s);return(0,f.jsx)(u,{label:t(`story.timepicker_ghost`),children:(0,f.jsx)(l,{...e,variant:`ghost`})})},args:{}},_={render:function(e){let{t}=a(s);return(0,f.jsx)(u,{label:t(`story.picker_error`),children:(0,f.jsx)(l,{...e,intent:`danger`})})},args:{}},v={render:function(e){let{t}=a(s);return(0,f.jsx)(u,{label:t(`story.picker_disabled`),children:(0,f.jsx)(l,{...e,disabled:!0,defaultValue:`14:30`})})},args:{}},y={render:function(e){let{t}=a(s);return(0,f.jsx)(u,{label:t(`story.picker_fullwidth`),style:{width:`100%`},children:(0,f.jsx)(l,{...e,fullWidth:!0})})},args:{},parameters:{layout:`padded`}},b=[`Default`,`Outline`,`Ghost`,`Danger`,`Disabled`,`FullWidth`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.timepicker_select")}>
        <TimePicker {...args} />
      </Label>;
  },
  args: {}
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.timepicker_outline")}>
        <TimePicker {...args} variant="outline" />
      </Label>;
  },
  args: {}
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.timepicker_ghost")}>
        <TimePicker {...args} variant="ghost" />
      </Label>;
  },
  args: {}
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.picker_error")}>
        <TimePicker {...args} intent="danger" />
      </Label>;
  },
  args: {}
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.picker_disabled")}>
        <TimePicker {...args} disabled defaultValue="14:30" />
      </Label>;
  },
  args: {}
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.picker_fullwidth")} style={{
      width: "100%"
    }}>
        <TimePicker {...args} fullWidth />
      </Label>;
  },
  args: {},
  parameters: {
    layout: "padded"
  }
}`,...y.parameters?.docs?.source}}}}));x();export{_ as Danger,m as Default,v as Disabled,y as FullWidth,g as Ghost,h as Outline,b as __namedExportsOrder,p as default,x as n,d as t};