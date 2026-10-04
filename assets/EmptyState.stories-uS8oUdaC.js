"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Icon-B_89lpXW.js";import{n as u,t as d}from"./Button-DrO46Brn.js";import{n as f,t as p}from"./EmptyState-DuJdmpFg.js";var m=t({Centered:()=>v,CustomAction:()=>b,Default:()=>_,NoFiles:()=>C,NoMessages:()=>x,NoVideos:()=>S,WithoutDescription:()=>y,__namedExportsOrder:()=>w,default:()=>g}),h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),i(),a(),u(),f(),c(),h=s(),g={title:`Components/Data Indicators/EmptyState`,component:p,tags:[],parameters:{layout:`centered`}},_={render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,title:t(`story.emptystate_nodata_title`),description:t(`story.emptystate_nodata_desc`),icon:(0,h.jsx)(l,{name:`SearchIcon`,size:`lg`}),extra:(0,h.jsx)(d,{children:t(`story.emptystate_clear_search`)})})}},v={args:{align:`center`},render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,title:t(`story.emptystate_nodata_title`),description:t(`story.emptystate_nodata_desc`),icon:(0,h.jsx)(l,{name:`SearchIcon`,size:`lg`}),extra:(0,h.jsx)(d,{children:t(`story.emptystate_clear_search`)})})}},y={render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,title:t(`story.emptystate_empty_list`),icon:(0,h.jsx)(l,{name:`CircleIcon`,size:`lg`})})}},b={render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,title:t(`story.emptystate_ready_title`),description:t(`story.emptystate_ready_desc`),icon:(0,h.jsx)(l,{name:`PlusIcon`,size:`lg`}),extra:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{variant:`outline`,children:t(`story.emptystate_browse_templates`)}),(0,h.jsx)(d,{variant:`solid`,children:t(`story.emptystate_create_project`)})]})})}},x={render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,title:t(`story.emptystate_noemails_title`),description:t(`story.emptystate_noemails_desc`),icon:(0,h.jsx)(l,{name:`EmailIcon`,size:`lg`})})}},S={render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,title:t(`story.emptystate_novideos_title`),description:t(`story.emptystate_novideos_desc`),icon:(0,h.jsx)(l,{name:`VideoIcon`,size:`lg`}),extra:(0,h.jsx)(d,{variant:`solid`,children:t(`story.emptystate_upload_video`)})})}},C={render:function(e){let{t}=r(o);return(0,h.jsx)(p,{...e,title:t(`story.emptystate_nofiles_title`),description:t(`story.emptystate_nofiles_desc`),icon:(0,h.jsx)(l,{name:`DocumentIcon`,size:`lg`})})}},w=[`Default`,`Centered`,`WithoutDescription`,`CustomAction`,`NoMessages`,`NoVideos`,`NoFiles`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_nodata_title")} description={t("story.emptystate_nodata_desc")} icon={<Icon name="SearchIcon" size="lg" />} extra={<Button>{t("story.emptystate_clear_search")}</Button>} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    align: "center"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_nodata_title")} description={t("story.emptystate_nodata_desc")} icon={<Icon name="SearchIcon" size="lg" />} extra={<Button>{t("story.emptystate_clear_search")}</Button>} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_empty_list")} icon={<Icon name="CircleIcon" size="lg" />} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_ready_title")} description={t("story.emptystate_ready_desc")} icon={<Icon name="PlusIcon" size="lg" />} extra={<>
            <Button variant="outline">{t("story.emptystate_browse_templates")}</Button>
            <Button variant="solid">{t("story.emptystate_create_project")}</Button>
          </>} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_noemails_title")} description={t("story.emptystate_noemails_desc")} icon={<Icon name="EmailIcon" size="lg" />} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_novideos_title")} description={t("story.emptystate_novideos_desc")} icon={<Icon name="VideoIcon" size="lg" />} extra={<Button variant="solid">{t("story.emptystate_upload_video")}</Button>} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_nofiles_title")} description={t("story.emptystate_nofiles_desc")} icon={<Icon name="DocumentIcon" size="lg" />} />;
  }
}`,...C.parameters?.docs?.source}}}})))()}export{T as a,m as i,b as n,_ as r,v as t};