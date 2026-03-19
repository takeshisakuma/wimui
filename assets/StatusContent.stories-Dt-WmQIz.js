import{j as s}from"./jsx-runtime-u17CrQMm.js";import{S as a}from"./StatusContent-DlBIJiOq.js";import{I as d}from"./Icon-BfUzh3J-.js";import{B as l}from"./Button-BhRAc5uH.js";import{A as c}from"./i18nConstants-BpHxieg5.js";import{u as i}from"./useTranslation-B7Xipwtw.js";const _={title:"Components/Internal/StatusContent",component:a,parameters:{layout:"centered"}},e={render:function(r){const{t}=i(c);return s.jsx(a,{...r,title:t("doc_status_success_title"),description:t("doc_status_success_desc"),actions:s.jsxs(s.Fragment,{children:[s.jsx(l,{label:t("button_label"),priority:"primary"}),s.jsx(l,{label:t("doc_RefTable_desc"),priority:"secondary"})]})})},args:{icon:s.jsx(d,{name:"CheckCircleIcon",color:"primary"})}},n={render:function(r){const{t}=i(c);return s.jsx(a,{...r,title:t("doc_status_success_title"),description:t("doc_status_success_desc")})},args:{...e.args,size:"small"}},o={render:function(r){const{t}=i(c);return s.jsx(a,{...r,title:t("doc_status_success_title"),description:t("doc_status_success_desc")})},args:{...e.args}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <StatusContent {...args} title={t("doc_status_success_title")} description={t("doc_status_success_desc")} actions={<>\r
                    <Button label={t("button_label")} priority="primary" />\r
                    <Button label={t("doc_RefTable_desc")} priority="secondary" />\r
                </>} />;
  },
  args: {
    icon: <Icon name="CheckCircleIcon" color="primary" />
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <StatusContent {...args} title={t("doc_status_success_title")} description={t("doc_status_success_desc")} />;
  },
  args: {
    ...Default.args,
    size: "small"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <StatusContent {...args} title={t("doc_status_success_title")} description={t("doc_status_success_desc")} />;
  },
  args: {
    ...Default.args
  }
}`,...o.parameters?.docs?.source}}};const m=["Default","Small","NoAction"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,NoAction:o,Small:n,__namedExportsOrder:m,default:_},Symbol.toStringTag,{value:"Module"}));export{e as D,o as N,b as S,n as a};
