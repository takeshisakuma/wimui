import{j as s}from"./jsx-runtime-u17CrQMm.js";import{S as a}from"./StatusContent-CsxwoanL.js";import{I as d}from"./Icon-DuncFQFu.js";import{B as l}from"./Button-Ddn6NtNu.js";import{A as c}from"./iframe-00CRNq2O.js";import{u as i}from"./useTranslation-BYdSjFhs.js";const m={title:"Components/Internal/StatusContent",component:a,parameters:{layout:"centered"}},e={render:function(n){const{t}=i(c);return s.jsx(a,{...n,title:t("doc.status_success_title"),description:t("doc.status_success_desc"),actions:s.jsxs(s.Fragment,{children:[s.jsx(l,{label:t("button.label"),variant:"filled"}),s.jsx(l,{label:t("doc.RefTable_desc"),variant:"outlined"})]})})},args:{icon:s.jsx(d,{name:"CheckCircleIcon",color:"primary"})}},r={render:function(n){const{t}=i(c);return s.jsx(a,{...n,title:t("doc.status_success_title"),description:t("doc.status_success_desc")})},args:{...e.args,size:"sm"}},o={render:function(n){const{t}=i(c);return s.jsx(a,{...n,title:t("doc.status_success_title"),description:t("doc.status_success_desc")})},args:{...e.args}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <StatusContent {...args} title={t("doc.status_success_title")} description={t("doc.status_success_desc")} actions={<>
                    <Button label={t("button.label")} variant="filled" />
                    <Button label={t("doc.RefTable_desc")} variant="outlined" />
                </>} />;
  },
  args: {
    icon: <Icon name="CheckCircleIcon" color="primary" />
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <StatusContent {...args} title={t("doc.status_success_title")} description={t("doc.status_success_desc")} />;
  },
  args: {
    ...Default.args,
    size: "sm"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <StatusContent {...args} title={t("doc.status_success_title")} description={t("doc.status_success_desc")} />;
  },
  args: {
    ...Default.args
  }
}`,...o.parameters?.docs?.source}}};const _=["Default","Small","NoAction"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,NoAction:o,Small:r,__namedExportsOrder:_,default:m},Symbol.toStringTag,{value:"Module"}));export{e as D,o as N,b as S,r as a};
