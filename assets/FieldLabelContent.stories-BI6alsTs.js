import{j as s}from"./jsx-runtime-u17CrQMm.js";import{F as o}from"./FieldLabelContent-YX8pfb-B.js";import{A as l}from"./i18nConstants-BpHxieg5.js";import{u}from"./useTranslation-1pCDZai4.js";const i={title:"Components/Internal/FieldLabelContent",component:o,parameters:{layout:"centered"}},n={render:function(e){const{t:r}=u(l);return s.jsx(o,{...e,label:r("username")})}},t={render:function(e){const{t:r}=u(l);return s.jsx(o,{...e,label:r("doc_ft_email_label"),required:!0})}},a={render:function(e){const{t:r}=u(l);return s.jsx(o,{...e,label:r("phone_number"),showOptional:!0})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldLabelContent {...args} label={t("username")} />;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldLabelContent {...args} label={t("doc_ft_email_label")} required />;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldLabelContent {...args} label={t("phone_number")} showOptional />;
  }
}`,...a.parameters?.docs?.source}}};const d=["Default","Required","Optional"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Optional:a,Required:t,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{n as D,a as O,t as R,f as S};
