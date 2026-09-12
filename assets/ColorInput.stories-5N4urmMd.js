"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,Sr as i,Tr as a,ur as o,xr as s}from"./iframe-CIRVVv_5.js";import{ai as c,t as l}from"./src-C35woejG.js";import{a as u}from"./FieldTemplate-CKMyVSjB.js";var d=e({CustomStates:()=>g,Default:()=>m,WithIcon:()=>h,__namedExportsOrder:()=>_,default:()=>p}),f,p,m,h,g,_,v=t((()=>{n(),r(),i(),l(),f=o(),p={title:`Components/Pickers & Sliders/ColorInput`,component:c,tags:[],argTypes:{disabled:{control:`boolean`}}},m={render:function(e){let{t}=a(s);return(0,f.jsx)(u,{label:t(`story.colorinput_default`),children:(0,f.jsx)(c,{...e})})},args:{defaultValue:`#0052cc`}},h={render:function(e){let{t}=a(s);return(0,f.jsx)(u,{label:t(`story.colorinput_icon`),children:(0,f.jsx)(c,{...e})})},args:{defaultValue:`#0052cc`,leftIcon:`CheckIcon`}},g={render:function(e){let{t}=a(s);return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(u,{label:t(`story.colorinput_states`)}),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,f.jsx)(c,{...e,intent:`default`,defaultValue:`#10b981`,leftIcon:`CheckCircleIcon`,"aria-label":t(`story.colorinput_states`)}),(0,f.jsx)(c,{...e,intent:`danger`,defaultValue:`#ef4444`,leftIcon:`AlertCircleIcon`,"aria-label":t(`story.colorinput_states`)}),(0,f.jsx)(c,{...e,disabled:!0,defaultValue:`#6b7280`,leftIcon:`SettingsIcon`,"aria-label":t(`story.colorinput_states`)})]})]})}},_=[`Default`,`WithIcon`,`CustomStates`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}}));v();export{g as CustomStates,m as Default,h as WithIcon,_ as __namedExportsOrder,p as default,v as n,d as t};