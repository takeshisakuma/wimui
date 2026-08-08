"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c}from"./src-BE5jBQ9L.js";import{t as l}from"./InputBase-CDAJu39C.js";var u=e({Default:()=>m,Disabled:()=>_,Error:()=>g,Ghost:()=>v,MultipleRightIcons:()=>y,WithIcons:()=>h,__namedExportsOrder:()=>b,default:()=>f}),d,f,p,m,h,g,_,v,y,b,x=t((()=>{n(),o(),i(),c(),d=a(),f={title:`Components/Form Layout/InputBase`,component:l,parameters:{layout:`centered`}},p=({placeholder:e,className:t,...n})=>(0,d.jsx)(`input`,{className:t,style:{flex:1,border:`none`,background:`transparent`,outline:`none`,color:`inherit`},placeholder:e,...n}),m={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,children:(0,d.jsx)(p,{placeholder:t(`doc.inputBase_placeholder`)})})},args:{width:`md`}},h={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,leftIcon:`SearchIcon`,rightIcons:[{name:`CloseIcon`,onClick:()=>alert(t(`button.clear`))}],children:(0,d.jsx)(p,{placeholder:t(`doc.inputBase_placeholder`)})})},args:{...m.args}},g={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,intent:`danger`,leftIcon:`AlertCircleIcon`,children:(0,d.jsx)(p,{placeholder:t(`doc.inputBase_placeholder`)})})},args:{...m.args}},_={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,disabled:!0,leftIcon:`ClockIcon`,children:(0,d.jsx)(p,{defaultValue:t(`doc.inputBase_placeholder`),"aria-label":t(`doc.inputBase_placeholder`)})})},args:{...m.args}},v={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,variant:`ghost`,leftIcon:`SearchIcon`,children:(0,d.jsx)(p,{placeholder:t(`doc.inputBase_placeholder`)})})},args:{...m.args}},y={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,rightIcons:[{name:`EyeIcon`,onClick:()=>alert(t(`a11y.play`))},{name:`SettingsIcon`,onClick:()=>alert(t(`settings`))}],children:(0,d.jsx)(p,{placeholder:t(`doc.inputBase_placeholder`)})})},args:{...m.args}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputBase {...args}><DummyInput placeholder={t("doc.inputBase_placeholder")} /></InputBase>;
  },
  args: {
    width: "md"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputBase {...args} leftIcon="SearchIcon" rightIcons={[{
      name: "CloseIcon",
      onClick: () => alert(t("button.clear"))
    }]}>
        <DummyInput placeholder={t("doc.inputBase_placeholder")} />
      </InputBase>;
  },
  args: {
    ...Default.args
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputBase {...args} intent="danger" leftIcon="AlertCircleIcon">
        <DummyInput placeholder={t("doc.inputBase_placeholder")} />
      </InputBase>;
  },
  args: {
    ...Default.args
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputBase {...args} disabled leftIcon="ClockIcon">
        {/* placeholder が無い disabled デモでも名無しにしない（axe: label） */}
        <DummyInput defaultValue={t("doc.inputBase_placeholder")} aria-label={t("doc.inputBase_placeholder")} />
      </InputBase>;
  },
  args: {
    ...Default.args
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputBase {...args} variant="ghost" leftIcon="SearchIcon">
        <DummyInput placeholder={t("doc.inputBase_placeholder")} />
      </InputBase>;
  },
  args: {
    ...Default.args
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputBase {...args} rightIcons={[{
      name: "EyeIcon",
      onClick: () => alert(t("a11y.play"))
    }, {
      name: "SettingsIcon",
      onClick: () => alert(t("settings"))
    }]}>
        <DummyInput placeholder={t("doc.inputBase_placeholder")} />
      </InputBase>;
  },
  args: {
    ...Default.args
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithIcons`,`Error`,`Disabled`,`Ghost`,`MultipleRightIcons`]}));x();export{m as Default,_ as Disabled,g as Error,v as Ghost,y as MultipleRightIcons,h as WithIcons,b as __namedExportsOrder,f as default,x as n,u as t};