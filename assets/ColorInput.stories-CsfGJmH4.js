import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-D0BZ6LJb.js";import{I as p}from"./Input-CglGVxmd.js";import{L as c}from"./FieldTemplate-Bb3elIR9.js";import{A as u}from"./iframe-9NEVSgmA.js";import{u as i}from"./useTranslation-7ChDnO1a.js";const t=({className:l,...n})=>e.jsx(p,{type:"color",className:d("wim-color-input",l),...n});t.__docgenInfo={description:"カラー選択に特化した入力コンポーネント。",methods:[],displayName:"ColorInput"};const f={title:"Components/Pickers & Sliders/ColorInput",component:t,tags:[],argTypes:{disabled:{control:"boolean"}}},o={render:function(n){const{t:r}=i(u);return e.jsx(c,{label:r("story.colorinput_default"),children:e.jsx(t,{...n})})},args:{defaultValue:"#0052cc"}},a={render:function(n){const{t:r}=i(u);return e.jsx(c,{label:r("story.colorinput_icon"),children:e.jsx(t,{...n})})},args:{defaultValue:"#3b82f6",leftIcon:"ImageIcon"}},s={render:function(n){const{t:r}=i(u);return e.jsx(c,{label:r("story.colorinput_states"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{...n,intent:"default",defaultValue:"#10b981",leftIcon:"CheckCircleIcon"}),e.jsx(t,{...n,intent:"error",defaultValue:"#ef4444",leftIcon:"AlertCircleIcon"}),e.jsx(t,{...n,disabled:!0,defaultValue:"#6b7280",leftIcon:"SettingsIcon"})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <ColorInput {...args} intent="default" defaultValue="#10b981" leftIcon="CheckCircleIcon" />
          <ColorInput {...args} intent="error" defaultValue="#ef4444" leftIcon="AlertCircleIcon" />
          <ColorInput {...args} disabled defaultValue="#6b7280" leftIcon="SettingsIcon" />
        </div>
      </Label>;
  }
}`,...s.parameters?.docs?.source}}};const m=["Default","WithIcon","CustomStates"],_=Object.freeze(Object.defineProperty({__proto__:null,CustomStates:s,Default:o,WithIcon:a,__namedExportsOrder:m,default:f},Symbol.toStringTag,{value:"Module"}));export{_ as C,o as D};
