"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Label-CaPgujqk.js";import{n as u,t as d}from"./ColorInput-1M2qtrKi.js";var f=t({CustomStates:()=>_,Default:()=>h,Ghost:()=>v,WithIcon:()=>g,__namedExportsOrder:()=>y,default:()=>m}),p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),a(),u(),c(),p=s(),m={title:`Components/Pickers & Sliders/ColorInput`,component:d,tags:[],argTypes:{disabled:{control:`boolean`}}},h={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.colorinput_default`),children:(0,p.jsx)(d,{...e})})},args:{defaultValue:`#0052cc`}},g={render:function(e){let{t}=r(o);return(0,p.jsx)(l,{label:t(`story.colorinput_icon`),children:(0,p.jsx)(d,{...e})})},args:{defaultValue:`#0052cc`,leftIcon:`CheckIcon`}},_={render:function(e){let{t}=r(o);return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(l,{label:t(`story.colorinput_states`)}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,p.jsx)(d,{...e,intent:`default`,defaultValue:`#10b981`,leftIcon:`CheckCircleIcon`,"aria-label":t(`story.colorinput_states`)}),(0,p.jsx)(d,{...e,intent:`danger`,defaultValue:`#ef4444`,leftIcon:`AlertCircleIcon`,"aria-label":t(`story.colorinput_states`)}),(0,p.jsx)(d,{...e,disabled:!0,defaultValue:`#6b7280`,leftIcon:`SettingsIcon`,"aria-label":t(`story.colorinput_states`)})]})]})}},v={...h,args:{...h.args,variant:`ghost`}},y=[`Default`,`WithIcon`,`CustomStates`,`Ghost`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.colorinput_default")}>
        <ColorInput {...args} />
      </Label>;
  },
  args: {
    defaultValue: "#0052cc"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.colorinput_icon")}>
        <ColorInput {...args} />
      </Label>;
  },
  args: {
    defaultValue: "#0052cc",
    leftIcon: "CheckIcon"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div>
        <Label label={t("story.colorinput_states")} />
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
          <ColorInput {...args} intent="default" defaultValue="#10b981" leftIcon="CheckCircleIcon" aria-label={t("story.colorinput_states")} />
          <ColorInput {...args} intent="danger" defaultValue="#ef4444" leftIcon="AlertCircleIcon" aria-label={t("story.colorinput_states")} />
          <ColorInput {...args} disabled defaultValue="#6b7280" leftIcon="SettingsIcon" aria-label={t("story.colorinput_states")} />
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    variant: "ghost"
  }
}`,...v.parameters?.docs?.source}}}})))()}export{b as i,h as n,v as r,f as t};