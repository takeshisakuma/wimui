"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{B as c,L as l,bi as u,t as d}from"./src-BE5jBQ9L.js";import{t as f}from"./Icon-Bz8kwOgZ.js";import{t as p}from"./Button-d-SlSJ4S.js";var m=e({Clickable:()=>v,Default:()=>_,Large:()=>b,Small:()=>x,WithActions:()=>y,WithContextMenu:()=>S,__namedExportsOrder:()=>C,default:()=>g}),h,g,_,v,y,b,x,S,C,w=t((()=>{n(),o(),i(),d(),h=a(),g={title:`Components/Layout/InteractiveArea`,component:u},_={render:function(e){let{t}=r(s);return(0,h.jsx)(u,{...e,title:t(`doc.ia_empty_title`),description:t(`doc.ia_empty_desc`)})},args:{icon:(0,h.jsx)(f,{name:`DocumentIcon`}),variant:`dashed`}},v={render:function(e){let{t}=r(s);return(0,h.jsx)(u,{...e,title:t(`doc.ia_empty_title`),description:t(`doc.ia_clickable_desc`)})},args:{..._.args,isClickable:!0}},y={render:function(e){let{t}=r(s);return(0,h.jsx)(u,{...e,title:t(`doc.ia_empty_title`),description:t(`doc.ia_empty_desc`),actions:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p,{variant:`solid`,children:t(`upload`)}),(0,h.jsx)(p,{variant:`outline`,children:t(`learn.more`)})]})})},args:{..._.args}},b={render:function(e){let{t}=r(s);return(0,h.jsx)(u,{...e,title:t(`doc.ia_empty_title`),description:t(`doc.ia_empty_desc`)})},args:{..._.args,size:`lg`}},x={render:function(e){let{t}=r(s);return(0,h.jsx)(u,{...e,title:t(`doc.ia_empty_title`),description:t(`doc.ia_compact_desc`)})},args:{..._.args,size:`sm`,icon:(0,h.jsx)(f,{name:`DocumentIcon`})}},S={render:function(e){let{t}=r(s);return(0,h.jsx)(l,{menu:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{icon:(0,h.jsx)(f,{name:`EditIcon`,size:`xl`}),children:t(`a11y.edit`)||`Edit`}),(0,h.jsx)(c,{icon:(0,h.jsx)(f,{name:`TrashIcon`,size:`xl`}),danger:!0,children:t(`a11y.delete`)||`Delete`})]}),children:(0,h.jsx)(u,{...e,title:t(`doc.ia_context_title`),description:t(`doc.ia_context_desc`)})})},args:{variant:`solid`,bgVariant:`muted`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveArea {...args} title={t("doc.ia_empty_title")} description={t("doc.ia_empty_desc")} actions={<>
            <Button variant="solid">{t("upload")}</Button>
            <Button variant="outline">{t("learn.more")}</Button>
          </>} />;
  },
  args: {
    ...Default.args
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <InteractiveArea {...args} title={t("doc.ia_empty_title")} description={t("doc.ia_compact_desc")} />;
  },
  args: {
    ...Default.args,
    size: "sm",
    icon: <Icon name="DocumentIcon" />
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ContextMenu menu={<>
            <ContextMenuItem icon={<Icon name="EditIcon" size="xl" />}>{t("a11y.edit") || "Edit"}</ContextMenuItem>
            <ContextMenuItem icon={<Icon name="TrashIcon" size="xl" />} danger>{t("a11y.delete") || "Delete"}</ContextMenuItem>
          </>}>
        <InteractiveArea {...args} title={t("doc.ia_context_title")} description={t("doc.ia_context_desc")} />
      </ContextMenu>;
  },
  args: {
    variant: "solid",
    bgVariant: "muted"
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Clickable`,`WithActions`,`Large`,`Small`,`WithContextMenu`]}));w();export{v as Clickable,_ as Default,b as Large,x as Small,y as WithActions,S as WithContextMenu,C as __namedExportsOrder,g as default,w as n,m as t};