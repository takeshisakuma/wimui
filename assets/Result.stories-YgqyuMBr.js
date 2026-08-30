"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{kn as c,t as l}from"./src-CV0le6yM.js";import{t as u}from"./Button-vRcm9ObM.js";var d=e({Danger:()=>v,Default:()=>m,IconSurface:()=>S,Info:()=>g,Status403:()=>b,Status404:()=>y,Status500:()=>x,Success:()=>h,Warning:()=>_,__namedExportsOrder:()=>C,default:()=>p}),f,p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{o(),n(),i(),l(),f=a(),p={title:`Components/Alerts & Notifications/Result`,component:c,tags:[]},m={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,intent:`default`,title:t(`story.result_info_title`),extra:(0,f.jsx)(u,{variant:`solid`,children:t(`story.result_go_console`)})})}},h={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,intent:`success`,title:t(`story.result_success_title`),description:t(`story.result_success_desc`),extra:[(0,f.jsx)(u,{variant:`solid`,children:t(`story.result_go_console`)},`console`),(0,f.jsx)(u,{children:t(`story.result_buy_again`)},`buy`)]})}},g={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,intent:`info`,title:t(`story.result_info_title`),extra:(0,f.jsx)(u,{variant:`solid`,children:t(`story.result_go_console`)})})}},_={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,intent:`warning`,title:t(`story.result_warning_title`),extra:(0,f.jsx)(u,{variant:`solid`,children:t(`story.result_go_console`)})})}},v={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,intent:`danger`,title:t(`story.result_error_title`),description:t(`story.result_error_desc`),extra:[(0,f.jsx)(u,{variant:`solid`,children:t(`story.result_go_console`)},`console`),(0,f.jsx)(u,{children:t(`story.result_buy_again`)},`buy`)]})}},y={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,status:`404`,title:`404`,description:t(`story.result_404_desc`),extra:(0,f.jsx)(u,{variant:`solid`,children:t(`story.result_back_home`)})})}},b={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,status:`403`,title:`403`,description:t(`story.result_403_desc`),extra:(0,f.jsx)(u,{variant:`solid`,children:t(`story.result_back_home`)})})}},x={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,status:`500`,title:`500`,description:t(`story.result_500_desc`),extra:(0,f.jsx)(u,{variant:`solid`,children:t(`story.result_back_home`)})})}},S={render:function(e){let{t}=r(s);return(0,f.jsx)(c,{...e,intent:`warning`,iconSurface:!0,title:t(`story.result_warning_title`),extra:(0,f.jsx)(u,{variant:`solid`,children:t(`story.result_go_console`)})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="default" title={t("story.result_info_title")} extra={<Button variant="solid">{t("story.result_go_console")}</Button>} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="success" title={t("story.result_success_title")} description={t("story.result_success_desc")} extra={[<Button variant="solid" key="console">{t("story.result_go_console")}</Button>, <Button key="buy">{t("story.result_buy_again")}</Button>]} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="info" title={t("story.result_info_title")} extra={<Button variant="solid">{t("story.result_go_console")}</Button>} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="warning" title={t("story.result_warning_title")} extra={<Button variant="solid">{t("story.result_go_console")}</Button>} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="danger" title={t("story.result_error_title")} description={t("story.result_error_desc")} extra={[<Button variant="solid" key="console">{t("story.result_go_console")}</Button>, <Button key="buy">{t("story.result_buy_again")}</Button>]} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="404" title="404" description={t("story.result_404_desc")} extra={<Button variant="solid">{t("story.result_back_home")}</Button>} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="403" title="403" description={t("story.result_403_desc")} extra={<Button variant="solid">{t("story.result_back_home")}</Button>} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} status="500" title="500" description={t("story.result_500_desc")} extra={<Button variant="solid">{t("story.result_back_home")}</Button>} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Result {...args} intent="warning" iconSurface title={t("story.result_warning_title")} extra={<Button variant="solid">{t("story.result_go_console")}</Button>} />;
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Success`,`Info`,`Warning`,`Danger`,`Status404`,`Status403`,`Status500`,`IconSurface`]}));w();export{v as Danger,m as Default,S as IconSurface,g as Info,b as Status403,y as Status404,x as Status500,h as Success,_ as Warning,C as __namedExportsOrder,p as default,w as n,d as t};