import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-DVfFB0Qc.js";import{I as p}from"./Input-Du2U_ujG.js";import{L as c}from"./FieldTemplate-BArpVXEf.js";import{A as u}from"./i18nConstants-BpHxieg5.js";import{u as i}from"./useTranslation-XEwyYNrX.js";const t=({className:l,...r})=>e.jsx(p,{type:"color",className:d("wim-color-input",l),...r});t.__docgenInfo={description:"カラー選択に特化した入力コンポーネント。",methods:[],displayName:"ColorInput"};const f={title:"Components/Pickers & Sliders/ColorInput",component:t,tags:[]},o={render:function(r){const{t:n}=i(u);return e.jsx(c,{label:n("story_colorinput_default"),children:e.jsx(t,{...r})})},args:{defaultValue:"#0052cc"}},s={render:function(r){const{t:n}=i(u);return e.jsx(c,{label:n("story_colorinput_icon"),children:e.jsx(t,{...r})})},args:{defaultValue:"#3b82f6",leftIcon:"ImageIcon"}},a={render:function(r){const{t:n}=i(u);return e.jsx(c,{label:n("story_colorinput_states"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{...r,status:"default",defaultValue:"#10b981",leftIcon:"CheckCircleIcon"}),e.jsx(t,{...r,status:"error",defaultValue:"#ef4444",leftIcon:"AlertCircleIcon"}),e.jsx(t,{...r,status:"disabled",defaultValue:"#6b7280",leftIcon:"SettingsIcon"})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_colorinput_default")}>\r
        <ColorInput {...args} />\r
      </Label>;
  },
  args: {
    defaultValue: "#0052cc"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_colorinput_icon")}>\r
        <ColorInput {...args} />\r
      </Label>;
  },
  args: {
    defaultValue: "#3b82f6",
    leftIcon: "ImageIcon"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_colorinput_states")}>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>\r
          <ColorInput {...args} status="default" defaultValue="#10b981" leftIcon="CheckCircleIcon" />\r
          <ColorInput {...args} status="error" defaultValue="#ef4444" leftIcon="AlertCircleIcon" />\r
          <ColorInput {...args} status="disabled" defaultValue="#6b7280" leftIcon="SettingsIcon" />\r
        </div>\r
      </Label>;
  }
}`,...a.parameters?.docs?.source}}};const m=["Default","WithIcon","CustomStates"],x=Object.freeze(Object.defineProperty({__proto__:null,CustomStates:a,Default:o,WithIcon:s,__namedExportsOrder:m,default:f},Symbol.toStringTag,{value:"Module"}));export{x as C,o as D};
