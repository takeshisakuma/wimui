import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-30w8ikAG.js";import{I as i}from"./Input-CSD9z_cs.js";import{L as c}from"./Label-BbZVH_Iw.js";import{u}from"./useTranslation-ZF4WB21B.js";const t=({className:l,...r})=>e.jsx(i,{type:"color",className:d("wim-color-input",l),...r});t.__docgenInfo={description:"カラー選択に特化した入力コンポーネント。",methods:[],displayName:"ColorInput"};const p={title:"Components/Pickers & Sliders/ColorInput",component:t,tags:[]},o={render:function(r){const{t:n}=u(["docs"]);return e.jsx(c,{label:n("story_colorinput_default"),children:e.jsx(t,{...r})})},args:{defaultValue:"#0052cc"}},s={render:function(r){const{t:n}=u(["docs"]);return e.jsx(c,{label:n("story_colorinput_icon"),children:e.jsx(t,{...r})})},args:{defaultValue:"#3b82f6",leftIcon:"ImageIcon"}},a={render:function(r){const{t:n}=u(["docs"]);return e.jsx(c,{label:n("story_colorinput_states"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{...r,status:"default",defaultValue:"#10b981",leftIcon:"CheckCircleIcon"}),e.jsx(t,{...r,status:"error",defaultValue:"#ef4444",leftIcon:"AlertCircleIcon"}),e.jsx(t,{...r,status:"disabled",defaultValue:"#6b7280",leftIcon:"SettingsIcon"})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
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
    } = useTranslation(["docs"]);
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
    } = useTranslation(["docs"]);
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
}`,...a.parameters?.docs?.source}}};const f=["Default","WithIcon","CustomStates"],C=Object.freeze(Object.defineProperty({__proto__:null,CustomStates:a,Default:o,WithIcon:s,__namedExportsOrder:f,default:p},Symbol.toStringTag,{value:"Module"}));export{C,o as D};
