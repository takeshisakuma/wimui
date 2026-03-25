import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-CeV49YI9.js";import{I as p}from"./Input-DJqcZUGw.js";import{L as c}from"./FieldTemplate-0qEuYgK5.js";import{A as u}from"./iframe-DZKUwcAF.js";import{u as i}from"./useTranslation-D3JcAmfq.js";const n=({className:l,...t})=>e.jsx(p,{type:"color",className:d("wim-color-input",l),...t});n.__docgenInfo={description:"カラー選択に特化した入力コンポーネント。",methods:[],displayName:"ColorInput"};const f={title:"Components/Pickers & Sliders/ColorInput",component:n,tags:[]},o={render:function(t){const{t:r}=i(u);return e.jsx(c,{label:r("story_colorinput_default"),children:e.jsx(n,{...t})})},args:{defaultValue:"#0052cc"}},s={render:function(t){const{t:r}=i(u);return e.jsx(c,{label:r("story_colorinput_icon"),children:e.jsx(n,{...t})})},args:{defaultValue:"#3b82f6",leftIcon:"ImageIcon"}},a={render:function(t){const{t:r}=i(u);return e.jsx(c,{label:r("story_colorinput_states"),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(n,{...t,status:"default",defaultValue:"#10b981",leftIcon:"CheckCircleIcon"}),e.jsx(n,{...t,status:"error",defaultValue:"#ef4444",leftIcon:"AlertCircleIcon"}),e.jsx(n,{...t,status:"disabled",defaultValue:"#6b7280",leftIcon:"SettingsIcon"})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story_colorinput_default")}>
        <ColorInput {...args} />
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
    return <Label label={t("story_colorinput_icon")}>
        <ColorInput {...args} />
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
    return <Label label={t("story_colorinput_states")}>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
          <ColorInput {...args} status="default" defaultValue="#10b981" leftIcon="CheckCircleIcon" />
          <ColorInput {...args} status="error" defaultValue="#ef4444" leftIcon="AlertCircleIcon" />
          <ColorInput {...args} status="disabled" defaultValue="#6b7280" leftIcon="SettingsIcon" />
        </div>
      </Label>;
  }
}`,...a.parameters?.docs?.source}}};const m=["Default","WithIcon","CustomStates"],x=Object.freeze(Object.defineProperty({__proto__:null,CustomStates:a,Default:o,WithIcon:s,__namedExportsOrder:m,default:f},Symbol.toStringTag,{value:"Module"}));export{x as C,o as D};
