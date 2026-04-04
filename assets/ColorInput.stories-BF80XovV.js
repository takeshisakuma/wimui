import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-DhHn5T7W.js";import{I as p}from"./Input-RjDWsl3J.js";import{L as c}from"./FieldTemplate-Cc8ARqCK.js";import{A as u}from"./iframe-By123agS.js";import{u as i}from"./useTranslation-svuQDxOH.js";const r=({className:l,...t})=>e.jsx(p,{type:"color",className:d("wim-color-input",l),...t});r.__docgenInfo={description:"カラー選択に特化した入力コンポーネント。",methods:[],displayName:"ColorInput"};const f={title:"Components/Pickers & Sliders/ColorInput",component:r,tags:[],argTypes:{disabled:{control:"boolean"}}},o={render:function(t){const{t:n}=i(u);return e.jsx(c,{label:n("story.colorinput_default"),children:e.jsx(r,{...t})})},args:{defaultValue:"#0052cc"}},a={render:function(t){const{t:n}=i(u);return e.jsx(c,{label:n("story.colorinput_icon"),children:e.jsx(r,{...t})})},args:{defaultValue:"#3b82f6",leftIcon:"ImageIcon"}},s={render:function(t){const{t:n}=i(u);return e.jsx(c,{label:n("story.colorinput_states"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{...t,intent:"default",defaultValue:"#10b981",leftIcon:"CheckCircleIcon","aria-label":n("story.colorinput_states")}),e.jsx(r,{...t,intent:"error",defaultValue:"#ef4444",leftIcon:"AlertCircleIcon","aria-label":n("story.colorinput_states")}),e.jsx(r,{...t,disabled:!0,defaultValue:"#6b7280",leftIcon:"SettingsIcon","aria-label":n("story.colorinput_states")})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.colorinput_icon")}>
        <ColorInput {...args} />
      </Label>;
  },
  args: {
    defaultValue: "#3b82f6",
    leftIcon: "ImageIcon"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.colorinput_states")}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
          <ColorInput {...args} intent="default" defaultValue="#10b981" leftIcon="CheckCircleIcon" aria-label={t("story.colorinput_states")} />
          <ColorInput {...args} intent="error" defaultValue="#ef4444" leftIcon="AlertCircleIcon" aria-label={t("story.colorinput_states")} />
          <ColorInput {...args} disabled defaultValue="#6b7280" leftIcon="SettingsIcon" aria-label={t("story.colorinput_states")} />
        </div>
      </Label>;
  }
}`,...s.parameters?.docs?.source}}};const m=["Default","WithIcon","CustomStates"],S=Object.freeze(Object.defineProperty({__proto__:null,CustomStates:s,Default:o,WithIcon:a,__namedExportsOrder:m,default:f},Symbol.toStringTag,{value:"Module"}));export{S as C,o as D};
