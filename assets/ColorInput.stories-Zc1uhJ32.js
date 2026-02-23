import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as l}from"./index-BwPY9p3m.js";import{I as c}from"./Input-CN4phPv0.js";const s=({className:e,...n})=>t.jsx(c,{type:"color",className:l("wim-color-input",e),...n});s.__docgenInfo={description:"カラー選択に特化した入力コンポーネント。",methods:[],displayName:"ColorInput"};const u={title:"Component/Pickers & Sliders/ColorInput",component:s,tags:[]},r={args:{defaultValue:"#0052cc"}},o={args:{defaultValue:"#3b82f6",leftIcon:"ImageIcon"}},a={render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsx(s,{...e,state:"default",defaultValue:"#10b981",leftIcon:"CheckCircleIcon"}),t.jsx(s,{...e,state:"error",defaultValue:"#ef4444",leftIcon:"AlertCircleIcon"}),t.jsx(s,{...e,state:"disabled",defaultValue:"#6b7280",leftIcon:"SettingsIcon"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "#0052cc"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "#3b82f6",
    leftIcon: "ImageIcon"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>\r
            <ColorInput {...args} state="default" defaultValue="#10b981" leftIcon="CheckCircleIcon" />\r
            <ColorInput {...args} state="error" defaultValue="#ef4444" leftIcon="AlertCircleIcon" />\r
            <ColorInput {...args} state="disabled" defaultValue="#6b7280" leftIcon="SettingsIcon" />\r
        </div>
}`,...a.parameters?.docs?.source}}};const d=["Default","WithIcon","CustomStates"],m=Object.freeze(Object.defineProperty({__proto__:null,CustomStates:a,Default:r,WithIcon:o,__namedExportsOrder:d,default:u},Symbol.toStringTag,{value:"Module"}));export{m as C,r as D};
