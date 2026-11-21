"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{n as r,t as i}from"./useTranslation-CpMdOj2B.js";import{n as a,t as o}from"./i18nConstants-YD8z3mm4.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./Label-BdsVRu61.js";import{n as u,t as d}from"./ColorPicker-CVYvvjU5.js";var f=t({Danger:()=>v,Default:()=>h,Disabled:()=>y,FullWidth:()=>b,Ghost:()=>_,Outline:()=>g,Swatches:()=>x,__namedExportsOrder:()=>S,default:()=>m}),p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),i(),a(),u(),c(),p=s(),m={title:`Components/Pickers & Sliders/ColorPicker`,component:d,parameters:{layout:`centered`},argTypes:{intent:{control:`select`,options:[`default`,`danger`]},variant:{control:`select`,options:[`outline`,`ghost`]}}},h={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.colorpicker_label`),children:(0,p.jsx)(d,{...e})})},args:{defaultValue:`#3b82f6`}},g={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.colorpicker_outline`),children:(0,p.jsx)(d,{...e,variant:`outline`})})},args:{defaultValue:`#10b981`}},_={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.colorpicker_ghost`),children:(0,p.jsx)(d,{...e,variant:`ghost`})})},args:{defaultValue:`#f59e0b`}},v={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.colorpicker_error`),children:(0,p.jsx)(d,{...e,intent:`danger`})})},args:{defaultValue:`#ef4444`}},y={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.colorpicker_disabled`),children:(0,p.jsx)(d,{...e,disabled:!0})})},args:{defaultValue:`#6b7280`}},b={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.colorpicker_fullwidth`),style:{width:`100%`},children:(0,p.jsx)(d,{...e,fullWidth:!0})})},args:{defaultValue:`#8b5cf6`},parameters:{layout:`padded`}},x={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,label:t(`story.colorpicker_swatches`),swatches:[{value:`#3b82f6`,label:t(`story.colorpicker_swatch_blue`)},{value:`#10b981`,label:t(`story.colorpicker_swatch_green`)},{value:`#f59e0b`,label:t(`story.colorpicker_swatch_amber`)},{value:`#ef4444`,label:t(`story.colorpicker_swatch_red`)},{value:`#8b5cf6`,label:t(`story.colorpicker_swatch_violet`)},{value:`#6b7280`,label:t(`story.colorpicker_swatch_gray`)}]})},args:{defaultValue:`#10b981`}},S=[`Default`,`Outline`,`Ghost`,`Danger`,`Disabled`,`FullWidth`,`Swatches`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.colorpicker_error")}>
        <ColorPicker {...args} intent="danger" />
      </Label>;
  },
  args: {
    defaultValue: "#ef4444"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return (
      // 見本のボタンは <label> の中に置かない（入力欄の名前に見本の名前が混ざる）。label prop で渡す
      <ColorPicker {...args} label={t("story.colorpicker_swatches")} swatches={[{
        value: "#3b82f6",
        label: t("story.colorpicker_swatch_blue")
      }, {
        value: "#10b981",
        label: t("story.colorpicker_swatch_green")
      }, {
        value: "#f59e0b",
        label: t("story.colorpicker_swatch_amber")
      }, {
        value: "#ef4444",
        label: t("story.colorpicker_swatch_red")
      }, {
        value: "#8b5cf6",
        label: t("story.colorpicker_swatch_violet")
      }, {
        value: "#6b7280",
        label: t("story.colorpicker_swatch_gray")
      }]} />
    );
  },
  args: {
    defaultValue: "#10b981"
  }
}`,...x.parameters?.docs?.source}}}})))()}export{b as a,x as c,y as i,C as l,v as n,_ as o,h as r,g as s,f as t};