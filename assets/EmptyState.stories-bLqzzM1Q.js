"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{dt as c,t as l}from"./src-Ssuy8lr7.js";import{t as u}from"./Icon-dyTmj1rn.js";import{t as d}from"./Button-Dps1MPAd.js";var f=e({CustomAction:()=>_,Default:()=>h,NoFiles:()=>b,NoMessages:()=>v,NoVideos:()=>y,WithoutDescription:()=>g,__namedExportsOrder:()=>x,default:()=>m}),p,m,h,g,_,v,y,b,x,S=t((()=>{n(),o(),i(),l(),p=a(),m={title:`Components/Data Indicators/EmptyState`,component:c,tags:[],parameters:{layout:`centered`}},h={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,title:t(`story.emptystate_nodata_title`),description:t(`story.emptystate_nodata_desc`),icon:(0,p.jsx)(u,{name:`SearchIcon`,size:`lg`}),extra:(0,p.jsx)(d,{children:t(`story.emptystate_clear_search`)})})}},g={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,title:t(`story.emptystate_empty_list`),icon:(0,p.jsx)(u,{name:`CircleIcon`,size:`lg`})})}},_={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,title:t(`story.emptystate_ready_title`),description:t(`story.emptystate_ready_desc`),icon:(0,p.jsx)(u,{name:`PlusIcon`,size:`lg`}),extra:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{variant:`outline`,children:t(`story.emptystate_browse_templates`)}),(0,p.jsx)(d,{variant:`solid`,children:t(`story.emptystate_create_project`)})]})})}},v={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,title:t(`story.emptystate_noemails_title`),description:t(`story.emptystate_noemails_desc`),icon:(0,p.jsx)(u,{name:`EmailIcon`,size:`lg`})})}},y={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,title:t(`story.emptystate_novideos_title`),description:t(`story.emptystate_novideos_desc`),icon:(0,p.jsx)(u,{name:`VideoIcon`,size:`lg`}),extra:(0,p.jsx)(d,{variant:`solid`,children:t(`story.emptystate_upload_video`)})})}},b={render:function(e){let{t}=r(s);return(0,p.jsx)(c,{...e,title:t(`story.emptystate_nofiles_title`),description:t(`story.emptystate_nofiles_desc`),icon:(0,p.jsx)(u,{name:`DocumentIcon`,size:`lg`})})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_nodata_title")} description={t("story.emptystate_nodata_desc")} icon={<Icon name="SearchIcon" size="lg" />} extra={<Button>{t("story.emptystate_clear_search")}</Button>} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_empty_list")} icon={<Icon name="CircleIcon" size="lg" />} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_ready_title")} description={t("story.emptystate_ready_desc")} icon={<Icon name="PlusIcon" size="lg" />} extra={<>
            <Button variant="outline">{t("story.emptystate_browse_templates")}</Button>
            <Button variant="solid">{t("story.emptystate_create_project")}</Button>
          </>} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_noemails_title")} description={t("story.emptystate_noemails_desc")} icon={<Icon name="EmailIcon" size="lg" />} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_novideos_title")} description={t("story.emptystate_novideos_desc")} icon={<Icon name="VideoIcon" size="lg" />} extra={<Button variant="solid">{t("story.emptystate_upload_video")}</Button>} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <EmptyState {...args} title={t("story.emptystate_nofiles_title")} description={t("story.emptystate_nofiles_desc")} icon={<Icon name="DocumentIcon" size="lg" />} />;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithoutDescription`,`CustomAction`,`NoMessages`,`NoVideos`,`NoFiles`]}));S();export{_ as CustomAction,h as Default,b as NoFiles,v as NoMessages,y as NoVideos,g as WithoutDescription,x as __namedExportsOrder,m as default,S as n,f as t};