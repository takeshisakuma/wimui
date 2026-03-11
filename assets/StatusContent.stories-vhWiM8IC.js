import{j as t}from"./jsx-runtime-u17CrQMm.js";import{S as c}from"./StatusContent-BLSmP5I4.js";import{I as d}from"./Icon-LsAuz8T1.js";import{B as u}from"./Button-DhroN8PM.js";import{u as a}from"./useTranslation-ZF4WB21B.js";const l={title:"Components/Internal/StatusContent",component:c,parameters:{layout:"centered"}},e={render:function(n){const{t:s}=a(["docs","common","components"]);return t.jsx(c,{...n,title:s("doc_status_success_title"),description:s("doc_status_success_desc"),actions:t.jsxs(t.Fragment,{children:[t.jsx(u,{label:s("button_label"),priority:"primary"}),t.jsx(u,{label:s("doc_RefTable_desc"),priority:"secondary"})]})})},args:{icon:t.jsx(d,{name:"CheckCircleIcon",color:"primary"})}},o={render:function(n){const{t:s}=a(["docs","common","components"]);return t.jsx(c,{...n,title:s("doc_status_success_title"),description:s("doc_status_success_desc")})},args:{...e.args,size:"small"}},r={render:function(n){const{t:s}=a(["docs","common","components"]);return t.jsx(c,{...n,title:s("doc_status_success_title"),description:s("doc_status_success_desc")})},args:{...e.args}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <StatusContent {...args} title={t("doc_status_success_title")} description={t("doc_status_success_desc")} actions={<>\r
                    <Button label={t("button_label")} priority="primary" />\r
                    <Button label={t("doc_RefTable_desc")} priority="secondary" />\r
                </>} />;
  },
  args: {
    icon: <Icon name="CheckCircleIcon" color="primary" />
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <StatusContent {...args} title={t("doc_status_success_title")} description={t("doc_status_success_desc")} />;
  },
  args: {
    ...Default.args,
    size: "small"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <StatusContent {...args} title={t("doc_status_success_title")} description={t("doc_status_success_desc")} />;
  },
  args: {
    ...Default.args
  }
}`,...r.parameters?.docs?.source}}};const m=["Default","Small","NoAction"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,NoAction:r,Small:o,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{e as D,r as N,b as S,o as a};
