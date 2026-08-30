"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{ln as c,t as l}from"./src-CV0le6yM.js";var u=e({CustomSeparator:()=>_,Default:()=>p,Large:()=>g,Small:()=>h,WithIcons:()=>m,__namedExportsOrder:()=>v,default:()=>f}),d,f,p,m,h,g,_,v,y=t((()=>{n(),o(),i(),l(),d=a(),f={title:`Components/Navigation Elements/Breadcrumb`,component:c,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},p={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_category`),href:`/category`},{label:t(`story.breadcrumb_current`)}]})}},m={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,items:[{label:t(`story.breadcrumb_home`),href:`/`,iconName:`CircleIcon`},{label:t(`story.breadcrumb_category`),href:`/category`,iconName:`SquareIcon`},{label:t(`story.breadcrumb_current`),iconName:`EyeIcon`}]})}},h={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,size:`sm`,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_category`),href:`/category`},{label:t(`story.breadcrumb_current`)}]})}},g={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,size:`lg`,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_category`),href:`/category`},{label:t(`story.breadcrumb_current`)}]})}},_={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,separator:`>`,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_category`),href:`/category`},{label:t(`story.breadcrumb_current`)}]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithIcons`,`Small`,`Large`,`CustomSeparator`]}));y();export{_ as CustomSeparator,p as Default,g as Large,h as Small,m as WithIcons,v as __namedExportsOrder,f as default,y as n,u as t};