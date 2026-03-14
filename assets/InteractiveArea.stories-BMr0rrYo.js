import{j as t}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./InteractiveArea-Pr4NO82a.js";import{I as u}from"./Icon-C3VpYLWw.js";import{B as p}from"./Button-C7PJlbCd.js";import{C as x,a as g}from"./ContextMenu-BxaWmH4S.js";import{A as s}from"./i18nConstants-BpHxieg5.js";import{u as o}from"./useTranslation-CgRV5_0i.js";const A={title:"Components/Internal/InteractiveArea",component:a},r={render:function(n){const{t:e}=o(s);return t.jsx(a,{...n,title:e("doc_ia_empty_title"),description:e("doc_ia_empty_desc")})},args:{icon:t.jsx(u,{name:"DocumentIcon"}),variant:"dashed"}},c={render:function(n){const{t:e}=o(s);return t.jsx(a,{...n,title:e("doc_ia_empty_title"),description:e("doc_ia_clickable_desc")})},args:{...r.args,isClickable:!0}},d={render:function(n){const{t:e}=o(s);return t.jsx(a,{...n,title:e("doc_ia_empty_title"),description:e("doc_ia_empty_desc"),actions:t.jsxs(t.Fragment,{children:[t.jsx(p,{label:e("upload"),priority:"primary"}),t.jsx(p,{label:e("learn_more"),priority:"secondary"})]})})},args:{...r.args}},l={render:function(n){const{t:e}=o(s);return t.jsx(a,{...n,title:e("doc_ia_empty_title"),description:e("doc_ia_empty_desc")})},args:{...r.args,size:"large"}},_={render:function(n){const{t:e}=o(s);return t.jsx(a,{...n,title:e("doc_ia_empty_title"),description:e("doc_ia_compact_desc")})},args:{...r.args,size:"small"}},m={render:function(n){const{t:e}=o(s);return t.jsx(x,{menu:t.jsxs(t.Fragment,{children:[t.jsx(g,{icon:t.jsx(u,{name:"EditIcon"}),children:e("a11y_edit")||"Edit"}),t.jsx(g,{icon:t.jsx(u,{name:"TrashIcon"}),danger:!0,children:e("a11y_delete")||"Delete"})]}),children:t.jsx(a,{...n,title:e("doc_ia_context_title"),description:e("doc_ia_context_desc")})})},args:{variant:"solid",bgVariant:"muted"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveArea {...args} title={t("doc_ia_empty_title")} description={t("doc_ia_empty_desc")} />;
  },
  args: {
    icon: <Icon name="DocumentIcon" />,
    variant: "dashed"
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveArea {...args} title={t("doc_ia_empty_title")} description={t("doc_ia_clickable_desc")} />;
  },
  args: {
    ...Default.args,
    isClickable: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveArea {...args} title={t("doc_ia_empty_title")} description={t("doc_ia_empty_desc")} actions={<>\r
            <Button label={t("upload")} priority="primary" />\r
            <Button label={t("learn_more")} priority="secondary" />\r
          </>} />;
  },
  args: {
    ...Default.args
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveArea {...args} title={t("doc_ia_empty_title")} description={t("doc_ia_empty_desc")} />;
  },
  args: {
    ...Default.args,
    size: "large"
  }
}`,...l.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveArea {...args} title={t("doc_ia_empty_title")} description={t("doc_ia_compact_desc")} />;
  },
  args: {
    ...Default.args,
    size: "small"
  }
}`,..._.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu menu={<>\r
            <ContextMenuItem icon={<Icon name="EditIcon" />}>{t("a11y_edit") || "Edit"}</ContextMenuItem>\r
            <ContextMenuItem icon={<Icon name="TrashIcon" />} danger>{t("a11y_delete") || "Delete"}</ContextMenuItem>\r
          </>}>\r
        <InteractiveArea {...args} title={t("doc_ia_context_title")} description={t("doc_ia_context_desc")} />\r
      </ContextMenu>;
  },
  args: {
    variant: "solid",
    bgVariant: "muted"
  }
}`,...m.parameters?.docs?.source}}};const y=["Default","Clickable","WithActions","Large","Small","WithContextMenu"],L=Object.freeze(Object.defineProperty({__proto__:null,Clickable:c,Default:r,Large:l,Small:_,WithActions:d,WithContextMenu:m,__namedExportsOrder:y,default:A},Symbol.toStringTag,{value:"Module"}));export{c as C,r as D,l as L,L as S,d as W,_ as a,m as b};
