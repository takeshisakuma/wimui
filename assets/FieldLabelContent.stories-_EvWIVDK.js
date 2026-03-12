import{j as s}from"./jsx-runtime-u17CrQMm.js";import{F as a}from"./FieldLabelContent-B40D5Xwj.js";import{u as c}from"./useTranslation-BH3LN071.js";const u={title:"Components/Internal/FieldLabelContent",component:a,parameters:{layout:"centered"}},r={render:function(e){const{t:n}=c(["common"]);return s.jsx(a,{...e,label:n("username")})}},o={render:function(e){const{t:n}=c(["docs","common"]);return s.jsx(a,{...e,label:n("doc_ft_email_label"),required:!0})}},t={render:function(e){const{t:n}=c(["common"]);return s.jsx(a,{...e,label:n("phoneNumber"),showOptional:!0})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["common"]);
    return <FieldLabelContent {...args} label={t("username")} />;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common"]);
    return <FieldLabelContent {...args} label={t("doc_ft_email_label")} required />;
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["common"]);
    return <FieldLabelContent {...args} label={t("phoneNumber")} showOptional />;
  }
}`,...t.parameters?.docs?.source}}};const m=["Default","Required","Optional"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Optional:t,Required:o,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{r as D,t as O,o as R,b as S};
