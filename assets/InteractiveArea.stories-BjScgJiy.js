"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./InteractiveArea-Bj01wV8b.js";import{n as u,t as d}from"./Icon-B_89lpXW.js";import{n as f,t as p}from"./Button-DrO46Brn.js";import{a as m,i as h,t as g}from"./ContextMenu-BsGZGJin.js";var _=t({Clickable:()=>S,Default:()=>b,Large:()=>w,Small:()=>T,Variants:()=>x,WithActions:()=>C,WithContextMenu:()=>E,__namedExportsOrder:()=>D,default:()=>y}),v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),i(),a(),f(),m(),u(),c(),v=s(),y={title:`Components/Layout/InteractiveArea`,component:l},b={render:function(e){let{t}=r(o);return(0,v.jsx)(l,{...e,title:t(`doc.ia_empty_title`),description:t(`doc.ia_empty_desc`)})},args:{icon:(0,v.jsx)(d,{name:`DocumentIcon`}),variant:`dashed`}},x={render:function(){let{t:e}=r(o);return(0,v.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-lg)`},children:[`dashed`,`solid`,`none`].map(t=>(0,v.jsx)(l,{variant:t,icon:(0,v.jsx)(d,{name:`DocumentIcon`}),title:e(`doc.ia_empty_title`),description:e(`doc.ia_empty_desc`)},t))})}},S={render:function(e){let{t}=r(o);return(0,v.jsx)(l,{...e,title:t(`doc.ia_empty_title`),description:t(`doc.ia_clickable_desc`)})},args:{...b.args,isClickable:!0}},C={render:function(e){let{t}=r(o);return(0,v.jsx)(l,{...e,title:t(`doc.ia_empty_title`),description:t(`doc.ia_empty_desc`),actions:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{variant:`solid`,children:t(`upload`)}),(0,v.jsx)(p,{variant:`outline`,children:t(`learn.more`)})]})})},args:{...b.args}},w={render:function(e){let{t}=r(o);return(0,v.jsx)(l,{...e,title:t(`doc.ia_empty_title`),description:t(`doc.ia_empty_desc`)})},args:{...b.args,size:`lg`}},T={render:function(e){let{t}=r(o);return(0,v.jsx)(l,{...e,title:t(`doc.ia_empty_title`),description:t(`doc.ia_compact_desc`)})},args:{...b.args,size:`sm`,icon:(0,v.jsx)(d,{name:`DocumentIcon`})}},E={render:function(e){let{t}=r(o);return(0,v.jsx)(g,{menu:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{icon:(0,v.jsx)(d,{name:`EditIcon`,size:`xl`}),children:t(`a11y.edit`)||`Edit`}),(0,v.jsx)(h,{icon:(0,v.jsx)(d,{name:`TrashIcon`,size:`xl`}),danger:!0,children:t(`a11y.delete`)||`Delete`})]}),children:(0,v.jsx)(l,{...e,title:t(`doc.ia_context_title`),description:t(`doc.ia_context_desc`)})})},args:{variant:`solid`,bgVariant:`muted`}},D=[`Default`,`Variants`,`Clickable`,`WithActions`,`Large`,`Small`,`WithContextMenu`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-lg)"
    }}>
        {(["dashed", "solid", "none"] as const).map(variant => <InteractiveArea key={variant} variant={variant} icon={<Icon name="DocumentIcon" />} title={t("doc.ia_empty_title")} description={t("doc.ia_empty_desc")} />)}
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}}})))()}export{x as a,O as c,T as i,_ as n,C as o,w as r,E as s,S as t};