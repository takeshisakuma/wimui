import{j as n}from"./jsx-runtime-u17CrQMm.js";import{I as s}from"./InputBase-CYPkr3jI.js";import{A as o}from"./iframe-By123agS.js";import{u as c}from"./useTranslation-svuQDxOH.js";const g={title:"Components/Form Layout/InputBase",component:s,parameters:{layout:"centered"}},l=({placeholder:a})=>n.jsx("input",{style:{flex:1,border:"none",background:"transparent",outline:"none",padding:"8px 0",color:"inherit"},placeholder:a}),t={render:function(r){const{t:e}=c(o);return n.jsx(s,{...r,children:n.jsx(l,{placeholder:e("doc.inputBase_placeholder")})})},args:{width:"md"}},u={render:function(r){const{t:e}=c(o);return n.jsx(s,{...r,leftIcon:"SearchIcon",rightIcons:[{name:"CloseIcon",onClick:()=>alert(e("button.clear"))}],children:n.jsx(l,{placeholder:e("doc.inputBase_placeholder")})})},args:{...t.args}},d={render:function(r){const{t:e}=c(o);return n.jsx(s,{...r,intent:"error",leftIcon:"AlertCircleIcon",children:n.jsx(l,{placeholder:e("doc.inputBase_placeholder")})})},args:{...t.args}},p={render:function(r){const{t:e}=c(o);return n.jsx(s,{...r,disabled:!0,leftIcon:"ClockIcon",children:n.jsx(l,{placeholder:e("doc.inputBase_placeholder")})})},args:{...t.args}},i={render:function(r){const{t:e}=c(o);return n.jsx(s,{...r,variant:"ghost",leftIcon:"SearchIcon",children:n.jsx(l,{placeholder:e("doc.inputBase_placeholder")})})},args:{...t.args}},m={render:function(r){const{t:e}=c(o);return n.jsx(s,{...r,rightIcons:[{name:"EyeIcon",onClick:()=>alert(e("a11y.play"))},{name:"SettingsIcon",onClick:()=>alert(e("settings"))}],children:n.jsx(l,{placeholder:e("doc.inputBase_placeholder")})})},args:{...t.args}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputBase {...args}><DummyInput placeholder={t("doc.inputBase_placeholder")} /></InputBase>;
  },
  args: {
    width: "md"
  }
}`,...t.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputBase {...args} intent="error" leftIcon="AlertCircleIcon">
        <DummyInput placeholder={t("doc.inputBase_placeholder")} />
      </InputBase>;
  },
  args: {
    ...Default.args
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InputBase {...args} disabled leftIcon="ClockIcon">
        <DummyInput placeholder={t("doc.inputBase_placeholder")} />
      </InputBase>;
  },
  args: {
    ...Default.args
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const I=["Default","WithIcons","Error","Disabled","Ghost","MultipleRightIcons"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Disabled:p,Error:d,Ghost:i,MultipleRightIcons:m,WithIcons:u,__namedExportsOrder:I,default:g},Symbol.toStringTag,{value:"Module"}));export{t as D,d as E,i as G,m as M,_ as S,u as W,p as a};
