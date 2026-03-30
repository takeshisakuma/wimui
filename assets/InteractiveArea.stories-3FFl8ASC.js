import{j as t}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./InteractiveArea-DBLEWX0x.js";import{I as p}from"./Icon-BJ9I8SuJ.js";import{B as _}from"./Button-BYZRdEHu.js";import{C as x,a as g}from"./ContextMenu-BN63qd9n.js";import{A as s}from"./iframe-BCt2Cqzi.js";import{u as o}from"./useTranslation-iqmbh8MZ.js";const A={title:"Components/Internal/InteractiveArea",component:a},r={render:function(n){const{t:e}=o(s);return t.jsx(a,{...n,title:e("doc.ia_empty_title"),description:e("doc.ia_empty_desc")})},args:{icon:t.jsx(p,{name:"DocumentIcon"}),variant:"dashed"}},c={render:function(n){const{t:e}=o(s);return t.jsx(a,{...n,title:e("doc.ia_empty_title"),description:e("doc.ia_clickable_desc")})},args:{...r.args,isClickable:!0}},d={render:function(n){const{t:e}=o(s);return t.jsx(a,{...n,title:e("doc.ia_empty_title"),description:e("doc.ia_empty_desc"),actions:t.jsxs(t.Fragment,{children:[t.jsx(_,{label:e("upload"),variant:"filled"}),t.jsx(_,{label:e("learn.more"),variant:"outlined"})]})})},args:{...r.args}},l={render:function(n){const{t:e}=o(s);return t.jsx(a,{...n,title:e("doc.ia_empty_title"),description:e("doc.ia_empty_desc")})},args:{...r.args,size:"lg"}},m={render:function(n){const{t:e}=o(s);return t.jsx(a,{...n,title:e("doc.ia_empty_title"),description:e("doc.ia_compact_desc")})},args:{...r.args,size:"sm"}},u={render:function(n){const{t:e}=o(s);return t.jsx(x,{menu:t.jsxs(t.Fragment,{children:[t.jsx(g,{icon:t.jsx(p,{name:"EditIcon"}),children:e("a11y.edit")||"Edit"}),t.jsx(g,{icon:t.jsx(p,{name:"TrashIcon"}),danger:!0,children:e("a11y.delete")||"Delete"})]}),children:t.jsx(a,{...n,title:e("doc.ia_context_title"),description:e("doc.ia_context_desc")})})},args:{variant:"solid",bgVariant:"muted"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveArea {...args} title={t("doc.ia_empty_title")} description={t("doc.ia_empty_desc")} />;
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
    return <InteractiveArea {...args} title={t("doc.ia_empty_title")} description={t("doc.ia_clickable_desc")} />;
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
    return <InteractiveArea {...args} title={t("doc.ia_empty_title")} description={t("doc.ia_empty_desc")} actions={<>
            <Button label={t("upload")} variant="filled" />
            <Button label={t("learn.more")} variant="outlined" />
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
    return <InteractiveArea {...args} title={t("doc.ia_empty_title")} description={t("doc.ia_empty_desc")} />;
  },
  args: {
    ...Default.args,
    size: "lg"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveArea {...args} title={t("doc.ia_empty_title")} description={t("doc.ia_compact_desc")} />;
  },
  args: {
    ...Default.args,
    size: "sm"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu menu={<>
            <ContextMenuItem icon={<Icon name="EditIcon" />}>{t("a11y.edit") || "Edit"}</ContextMenuItem>
            <ContextMenuItem icon={<Icon name="TrashIcon" />} danger>{t("a11y.delete") || "Delete"}</ContextMenuItem>
          </>}>
        <InteractiveArea {...args} title={t("doc.ia_context_title")} description={t("doc.ia_context_desc")} />
      </ContextMenu>;
  },
  args: {
    variant: "solid",
    bgVariant: "muted"
  }
}`,...u.parameters?.docs?.source}}};const f=["Default","Clickable","WithActions","Large","Small","WithContextMenu"],M=Object.freeze(Object.defineProperty({__proto__:null,Clickable:c,Default:r,Large:l,Small:m,WithActions:d,WithContextMenu:u,__namedExportsOrder:f,default:A},Symbol.toStringTag,{value:"Module"}));export{c as C,r as D,M as I,l as L,m as S,d as W,u as a};
