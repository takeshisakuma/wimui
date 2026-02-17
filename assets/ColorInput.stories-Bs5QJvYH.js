import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as l}from"./index-BviBMDxs.js";import{I as c}from"./Input-B9zw32N2.js";import"./iframe-BypDdRGc.js";import"./preload-helper-PPVm8Dsz.js";/* empty css              */import"./Icon-REvCejfI.js";const r=({className:e,...n})=>t.jsx(c,{type:"color",className:l("wim-color-input",e),...n});r.__docgenInfo={description:"カラー選択に特化した入力コンポーネント。",methods:[],displayName:"ColorInput"};const g={title:"Component/Pickers & Sliders/ColorInput",component:r,tags:["autodocs"]},o={args:{defaultValue:"#0052cc"}},a={args:{defaultValue:"#3b82f6",leftIcon:"ImageIcon"}},s={render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsx(r,{...e,state:"default",defaultValue:"#10b981",leftIcon:"CheckCircleIcon"}),t.jsx(r,{...e,state:"error",defaultValue:"#ef4444",leftIcon:"AlertCircleIcon"}),t.jsx(r,{...e,state:"disabled",defaultValue:"#6b7280",leftIcon:"SettingsIcon"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "#0052cc"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "#3b82f6",
    leftIcon: "ImageIcon"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>\r
            <ColorInput {...args} state="default" defaultValue="#10b981" leftIcon="CheckCircleIcon" />\r
            <ColorInput {...args} state="error" defaultValue="#ef4444" leftIcon="AlertCircleIcon" />\r
            <ColorInput {...args} state="disabled" defaultValue="#6b7280" leftIcon="SettingsIcon" />\r
        </div>
}`,...s.parameters?.docs?.source}}};const C=["Default","WithIcon","CustomStates"];export{s as CustomStates,o as Default,a as WithIcon,C as __namedExportsOrder,g as default};
