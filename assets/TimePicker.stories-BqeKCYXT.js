"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Label-CaPgujqk.js";import{n as u,t as d}from"./TimePicker-DGqPljQP.js";var f=t({Danger:()=>v,Default:()=>h,Disabled:()=>y,FullWidth:()=>b,Ghost:()=>_,Outline:()=>g,__namedExportsOrder:()=>x,default:()=>m}),p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),i(),a(),c(),u(),p=s(),m={title:`Components/Pickers & Sliders/TimePicker`,component:d,parameters:{layout:`centered`},argTypes:{intent:{control:`select`,options:[`default`,`danger`]},variant:{control:`select`,options:[`outline`,`ghost`]}}},h={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.timepicker_select`),children:(0,p.jsx)(d,{...e})})},args:{}},g={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.timepicker_outline`),children:(0,p.jsx)(d,{...e,variant:`outline`})})},args:{}},_={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.timepicker_ghost`),children:(0,p.jsx)(d,{...e,variant:`ghost`})})},args:{}},v={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.picker_error`),children:(0,p.jsx)(d,{...e,intent:`danger`})})},args:{}},y={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.picker_disabled`),children:(0,p.jsx)(d,{...e,disabled:!0,defaultValue:`14:30`})})},args:{}},b={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.picker_fullwidth`),style:{width:`100%`},children:(0,p.jsx)(d,{...e,fullWidth:!0})})},args:{},parameters:{layout:`padded`}},x=[`Default`,`Outline`,`Ghost`,`Danger`,`Disabled`,`FullWidth`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.timepicker_select")}>
        <TimePicker {...args} />
      </Label>;
  },
  args: {}
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.timepicker_outline")}>
        <TimePicker {...args} variant="outline" />
      </Label>;
  },
  args: {}
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.timepicker_ghost")}>
        <TimePicker {...args} variant="ghost" />
      </Label>;
  },
  args: {}
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.picker_error")}>
        <TimePicker {...args} intent="danger" />
      </Label>;
  },
  args: {}
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.picker_disabled")}>
        <TimePicker {...args} disabled defaultValue="14:30" />
      </Label>;
  },
  args: {}
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}})))()}export{_ as a,S as c,b as i,h as n,g as o,y as r,f as s,v as t};