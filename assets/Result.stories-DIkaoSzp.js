"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-DrO46Brn.js";import{n as u,t as d}from"./Result-nU087lGF.js";var f=t({Danger:()=>y,Default:()=>h,IconSurface:()=>C,Info:()=>_,Status403:()=>x,Status404:()=>b,Status500:()=>S,Success:()=>g,Warning:()=>v,__namedExportsOrder:()=>w,default:()=>m}),p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{i(),n(),a(),c(),u(),p=s(),m={title:`Components/Alerts & Notifications/Result`,component:d,tags:[]},h={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,intent:`default`,title:t(`story.result_info_title`),extra:(0,p.jsx)(l,{variant:`solid`,children:t(`story.result_go_console`)})})}},g={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,intent:`success`,title:t(`story.result_success_title`),description:t(`story.result_success_desc`),extra:[(0,p.jsx)(l,{variant:`solid`,children:t(`story.result_go_console`)},`console`),(0,p.jsx)(l,{children:t(`story.result_buy_again`)},`buy`)]})}},_={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,intent:`info`,title:t(`story.result_info_title`),extra:(0,p.jsx)(l,{variant:`solid`,children:t(`story.result_go_console`)})})}},v={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,intent:`warning`,title:t(`story.result_warning_title`),extra:(0,p.jsx)(l,{variant:`solid`,children:t(`story.result_go_console`)})})}},y={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,intent:`danger`,title:t(`story.result_error_title`),description:t(`story.result_error_desc`),extra:[(0,p.jsx)(l,{variant:`solid`,children:t(`story.result_go_console`)},`console`),(0,p.jsx)(l,{children:t(`story.result_buy_again`)},`buy`)]})}},b={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,status:`404`,title:`404`,description:t(`story.result_404_desc`),extra:(0,p.jsx)(l,{variant:`solid`,children:t(`story.result_back_home`)})})}},x={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,status:`403`,title:`403`,description:t(`story.result_403_desc`),extra:(0,p.jsx)(l,{variant:`solid`,children:t(`story.result_back_home`)})})}},S={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,status:`500`,title:`500`,description:t(`story.result_500_desc`),extra:(0,p.jsx)(l,{variant:`solid`,children:t(`story.result_back_home`)})})}},C={render:function(e){let{t}=r(o);return(0,p.jsx)(d,{...e,intent:`warning`,iconSurface:!0,title:t(`story.result_warning_title`),extra:(0,p.jsx)(l,{variant:`solid`,children:t(`story.result_go_console`)})})}},w=[`Default`,`Success`,`Info`,`Warning`,`Danger`,`Status404`,`Status403`,`Status500`,`IconSurface`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="default" title={t("story.result_info_title")} extra={<Button variant="solid">{t("story.result_go_console")}</Button>} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="success" title={t("story.result_success_title")} description={t("story.result_success_desc")} extra={[<Button variant="solid" key="console">{t("story.result_go_console")}</Button>, <Button key="buy">{t("story.result_buy_again")}</Button>]} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="info" title={t("story.result_info_title")} extra={<Button variant="solid">{t("story.result_go_console")}</Button>} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="warning" title={t("story.result_warning_title")} extra={<Button variant="solid">{t("story.result_go_console")}</Button>} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="danger" title={t("story.result_error_title")} description={t("story.result_error_desc")} extra={[<Button variant="solid" key="console">{t("story.result_go_console")}</Button>, <Button key="buy">{t("story.result_buy_again")}</Button>]} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="404" title="404" description={t("story.result_404_desc")} extra={<Button variant="solid">{t("story.result_back_home")}</Button>} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="403" title="403" description={t("story.result_403_desc")} extra={<Button variant="solid">{t("story.result_back_home")}</Button>} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="500" title="500" description={t("story.result_500_desc")} extra={<Button variant="solid">{t("story.result_back_home")}</Button>} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="warning" iconSurface title={t("story.result_warning_title")} extra={<Button variant="solid">{t("story.result_go_console")}</Button>} />;
  }
}`,...C.parameters?.docs?.source}}}})))()}export{x as a,g as c,f as i,v as l,h as n,b as o,_ as r,S as s,y as t,T as u};