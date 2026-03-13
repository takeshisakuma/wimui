import{j as t}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./InteractiveArea-MzpLWGpM.js";import{I as u}from"./Icon-DuRhDIXo.js";import{B as _}from"./Button-BLRjZ0Hy.js";import{C as g,a as p}from"./ContextMenu-CC1qmGYD.js";import{u as o}from"./useTranslation-D80Uyf_x.js";const x={title:"Components/Internal/InteractiveArea",component:a},r={render:function(n){const{t:e}=o(["docs"]);return t.jsx(a,{...n,title:e("doc_ia_empty_title"),description:e("doc_ia_empty_desc")})},args:{icon:t.jsx(u,{name:"DocumentIcon"}),variant:"dashed"}},c={render:function(n){const{t:e}=o(["docs"]);return t.jsx(a,{...n,title:e("doc_ia_empty_title"),description:e("doc_ia_clickable_desc")})},args:{...r.args,isClickable:!0}},i={render:function(n){const{t:e}=o(["docs","common"]);return t.jsx(a,{...n,title:e("doc_ia_empty_title"),description:e("doc_ia_empty_desc"),actions:t.jsxs(t.Fragment,{children:[t.jsx(_,{label:e("upload"),priority:"primary"}),t.jsx(_,{label:e("learn_more"),priority:"secondary"})]})})},args:{...r.args}},d={render:function(n){const{t:e}=o(["docs"]);return t.jsx(a,{...n,title:e("doc_ia_empty_title"),description:e("doc_ia_empty_desc")})},args:{...r.args,size:"large"}},l={render:function(n){const{t:e}=o(["docs"]);return t.jsx(a,{...n,title:e("doc_ia_empty_title"),description:e("doc_ia_compact_desc")})},args:{...r.args,size:"small"}},m={render:function(n){const{t:e}=o(["docs","common"]);return t.jsx(g,{menu:t.jsxs(t.Fragment,{children:[t.jsx(p,{icon:t.jsx(u,{name:"EditIcon"}),children:e("a11y_edit")||"Edit"}),t.jsx(p,{icon:t.jsx(u,{name:"TrashIcon"}),danger:!0,children:e("a11y_delete")||"Delete"})]}),children:t.jsx(a,{...n,title:e("doc_ia_context_title"),description:e("doc_ia_context_desc")})})},args:{variant:"solid",bgVariant:"muted"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
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
    } = useTranslation(["docs"]);
    return <InteractiveArea {...args} title={t("doc_ia_empty_title")} description={t("doc_ia_clickable_desc")} />;
  },
  args: {
    ...Default.args,
    isClickable: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common"]);
    return <InteractiveArea {...args} title={t("doc_ia_empty_title")} description={t("doc_ia_empty_desc")} actions={<>\r
            <Button label={t("upload")} priority="primary" />\r
            <Button label={t("learn_more")} priority="secondary" />\r
          </>} />;
  },
  args: {
    ...Default.args
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <InteractiveArea {...args} title={t("doc_ia_empty_title")} description={t("doc_ia_empty_desc")} />;
  },
  args: {
    ...Default.args,
    size: "large"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs"]);
    return <InteractiveArea {...args} title={t("doc_ia_empty_title")} description={t("doc_ia_compact_desc")} />;
  },
  args: {
    ...Default.args,
    size: "small"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common"]);
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
}`,...m.parameters?.docs?.source}}};const y=["Default","Clickable","WithActions","Large","Small","WithContextMenu"],v=Object.freeze(Object.defineProperty({__proto__:null,Clickable:c,Default:r,Large:d,Small:l,WithActions:i,WithContextMenu:m,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{c as C,r as D,d as L,v as S,i as W,l as a,m as b};
