"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Breadcrumb-BAR7e2K4.js";var u=t({CustomSeparator:()=>_,Default:()=>p,Large:()=>g,Small:()=>h,WithIcons:()=>m,__namedExportsOrder:()=>v,default:()=>f}),d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Navigation Elements/Breadcrumb`,component:l,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},p={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_category`),href:`/category`},{label:t(`story.breadcrumb_current`)}]})}},m={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,items:[{label:t(`story.breadcrumb_home`),href:`/`,iconName:`CircleIcon`},{label:t(`story.breadcrumb_category`),href:`/category`,iconName:`SquareIcon`},{label:t(`story.breadcrumb_current`),iconName:`EyeIcon`}]})}},h={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,size:`sm`,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_category`),href:`/category`},{label:t(`story.breadcrumb_current`)}]})}},g={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,size:`lg`,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_category`),href:`/category`},{label:t(`story.breadcrumb_current`)}]})}},_={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,separator:`>`,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_category`),href:`/category`},{label:t(`story.breadcrumb_current`)}]})}},v=[`Default`,`WithIcons`,`Small`,`Large`,`CustomSeparator`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} items={[{
      label: t("story.breadcrumb_home"),
      href: "/"
    }, {
      label: t("story.breadcrumb_category"),
      href: "/category"
    }, {
      label: t("story.breadcrumb_current")
    }]} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} items={[{
      label: t("story.breadcrumb_home"),
      href: "/",
      iconName: "CircleIcon"
    }, {
      label: t("story.breadcrumb_category"),
      href: "/category",
      iconName: "SquareIcon"
    }, {
      label: t("story.breadcrumb_current"),
      iconName: "EyeIcon"
    }]} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} size="sm" items={[{
      label: t("story.breadcrumb_home"),
      href: "/"
    }, {
      label: t("story.breadcrumb_category"),
      href: "/category"
    }, {
      label: t("story.breadcrumb_current")
    }]} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} size="lg" items={[{
      label: t("story.breadcrumb_home"),
      href: "/"
    }, {
      label: t("story.breadcrumb_category"),
      href: "/category"
    }, {
      label: t("story.breadcrumb_current")
    }]} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} separator=">" items={[{
      label: t("story.breadcrumb_home"),
      href: "/"
    }, {
      label: t("story.breadcrumb_category"),
      href: "/category"
    }, {
      label: t("story.breadcrumb_current")
    }]} />;
  }
}`,..._.parameters?.docs?.source}}}})))()}export{h as a,g as i,_ as n,m as o,p as r,y as s,u as t};