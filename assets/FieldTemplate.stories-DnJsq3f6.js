import{j as a}from"./jsx-runtime-u17CrQMm.js";import{F as s}from"./FieldTemplate-BzqhzfC_.js";import{I as c}from"./Input-Bt5jbivY.js";import{A as d}from"./iframe-BK1fL04m.js";import{u as i}from"./useTranslation-DPglThRD.js";const u={title:"Components/Internal/FieldTemplate",component:s},n={render:function(e){const{t:r}=i(d);return a.jsx(s,{...e,label:e.label||r("doc_ft_email_label"),children:a.jsx(c,{placeholder:"example@example.com",fullWidth:!0})})},args:{required:!0}},t={render:function(e){const{t:r}=i(d);return a.jsx(s,{...e,label:r("doc_ft_email_label"),layout:"horizontal",children:a.jsx(c,{placeholder:"example@example.com",fullWidth:!0})})},args:{...n.args}},l={render:function(e){const{t:r}=i(d);return a.jsx(s,{...e,label:r("doc_ft_email_label"),error:r("doc_ft_email_error"),children:a.jsx(c,{placeholder:"example@example.com",fullWidth:!0})})},args:{...n.args}},o={render:function(e){const{t:r}=i(d);return a.jsx(s,{...e,children:a.jsx(c,{placeholder:r("doc_ft_no_label"),fullWidth:!0})})},args:{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldTemplate {...args} label={args.label || t("doc_ft_email_label")}>
        <Input placeholder="example@example.com" fullWidth />
      </FieldTemplate>;
  },
  args: {
    required: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldTemplate {...args} label={t("doc_ft_email_label")} layout="horizontal">
        <Input placeholder="example@example.com" fullWidth />
      </FieldTemplate>;
  },
  args: {
    ...Default.args
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldTemplate {...args} label={t("doc_ft_email_label")} error={t("doc_ft_email_error")}>
        <Input placeholder="example@example.com" fullWidth />
      </FieldTemplate>;
  },
  args: {
    ...Default.args
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldTemplate {...args}>
        <Input placeholder={t("doc_ft_no_label")} fullWidth />
      </FieldTemplate>;
  },
  args: {}
}`,...o.parameters?.docs?.source}}};const p=["Default","Horizontal","WithError","NoLabel"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Horizontal:t,NoLabel:o,WithError:l,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{n as D,t as H,o as N,b as S,l as W};
