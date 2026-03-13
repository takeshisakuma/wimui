import{j as n}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./InputBase-BalymYdk.js";import{u as o}from"./useTranslation-CLFZhCB5.js";const m={title:"Components/Internal/InputBase",component:a,parameters:{layout:"centered"}},c=({placeholder:t})=>n.jsx("input",{style:{flex:1,border:"none",background:"transparent",outline:"none",padding:"8px 0",color:"inherit"},placeholder:t}),s={render:function(r){const{t:e}=o(["docs"]);return n.jsx(a,{...r,children:n.jsx(c,{placeholder:e("doc_inputBase_placeholder")})})},args:{width:"md"}},l={render:function(r){const{t:e}=o(["docs","common"]);return n.jsx(a,{...r,leftIcon:"SearchIcon",rightIcons:[{name:"CloseIcon",onClick:()=>alert(e("button_clear"))}],children:n.jsx(c,{placeholder:e("doc_inputBase_placeholder")})})},args:{...s.args}},d={render:function(r){const{t:e}=o(["docs"]);return n.jsx(a,{...r,status:"error",leftIcon:"AlertCircleIcon",children:n.jsx(c,{placeholder:e("doc_inputBase_placeholder")})})},args:{...s.args}},u={render:function(r){const{t:e}=o(["docs"]);return n.jsx(a,{...r,status:"disabled",leftIcon:"ClockIcon",children:n.jsx(c,{placeholder:e("doc_inputBase_placeholder")})})},args:{...s.args}},p={render:function(r){const{t:e}=o(["docs"]);return n.jsx(a,{...r,variant:"ghost",leftIcon:"SearchIcon",children:n.jsx(c,{placeholder:e("doc_inputBase_placeholder")})})},args:{...s.args}},i={render:function(r){const{t:e}=o(["docs","common"]);return n.jsx(a,{...r,rightIcons:[{name:"EyeIcon",onClick:()=>alert(e("a11y_play"))},{name:"SettingsIcon",onClick:()=>alert(e("settings"))}],children:n.jsx(c,{placeholder:e("doc_inputBase_placeholder")})})},args:{...s.args}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <InputBase {...args}><DummyInput placeholder={t("doc_inputBase_placeholder")} /></InputBase>;
  },
  args: {
    width: "md"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common"]);
    return <InputBase {...args} leftIcon="SearchIcon" rightIcons={[{
      name: "CloseIcon",
      onClick: () => alert(t("button_clear"))
    }]}>\r
        <DummyInput placeholder={t("doc_inputBase_placeholder")} />\r
      </InputBase>;
  },
  args: {
    ...Default.args
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <InputBase {...args} status="error" leftIcon="AlertCircleIcon">\r
        <DummyInput placeholder={t("doc_inputBase_placeholder")} />\r
      </InputBase>;
  },
  args: {
    ...Default.args
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <InputBase {...args} status="disabled" leftIcon="ClockIcon">\r
        <DummyInput placeholder={t("doc_inputBase_placeholder")} />\r
      </InputBase>;
  },
  args: {
    ...Default.args
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <InputBase {...args} variant="ghost" leftIcon="SearchIcon">\r
        <DummyInput placeholder={t("doc_inputBase_placeholder")} />\r
      </InputBase>;
  },
  args: {
    ...Default.args
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common"]);
    return <InputBase {...args} rightIcons={[{
      name: "EyeIcon",
      onClick: () => alert(t("a11y_play"))
    }, {
      name: "SettingsIcon",
      onClick: () => alert(t("settings"))
    }]}>\r
        <DummyInput placeholder={t("doc_inputBase_placeholder")} />\r
      </InputBase>;
  },
  args: {
    ...Default.args
  }
}`,...i.parameters?.docs?.source}}};const g=["Default","WithIcons","Error","Disabled","Ghost","MultipleRightIcons"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Disabled:u,Error:d,Ghost:p,MultipleRightIcons:i,WithIcons:l,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{s as D,d as E,p as G,i as M,_ as S,l as W,u as a};
