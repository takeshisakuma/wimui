import{j as s}from"./jsx-runtime-u17CrQMm.js";import{F as o}from"./FieldLabelContent-BoCPTBN6.js";import{A as l}from"./iframe-BCt2Cqzi.js";import{u}from"./useTranslation-iqmbh8MZ.js";const i={title:"Components/Internal/FieldLabelContent",component:o,parameters:{layout:"centered"}},n={render:function(e){const{t:r}=u(l);return s.jsx(o,{...e,label:r("username")})}},t={render:function(e){const{t:r}=u(l);return s.jsx(o,{...e,label:r("doc.ft_email_label"),required:!0})}},a={render:function(e){const{t:r}=u(l);return s.jsx(o,{...e,label:r("phone.number"),showOptional:!0})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    return <FieldLabelContent {...args} label={t("doc.ft_email_label")} required />;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FieldLabelContent {...args} label={t("phone.number")} showOptional />;
  }
}`,...a.parameters?.docs?.source}}};const d=["Default","Required","Optional"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Optional:a,Required:t,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{n as D,a as O,t as R,S};
