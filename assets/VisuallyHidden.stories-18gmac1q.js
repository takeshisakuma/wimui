"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c}from"./src-BE5jBQ9L.js";import{r as l}from"./Transfer-CdhIm3vX.js";var u=e({Primary:()=>p,WithinButton:()=>m,__namedExportsOrder:()=>h,default:()=>f}),d,f,p,m,h,g=t((()=>{n(),o(),i(),c(),d=a(),f={title:`Components/Internal/VisuallyHidden`,component:l,tags:[],parameters:{layout:`centered`}},p={render:function(e){let{t}=r(s);return(0,d.jsx)(l,{...e,children:t(`story.visuallyhidden_accessible`)})}},m={render:function(){let{t:e}=r(s);return(0,d.jsxs)(`button`,{"aria-label":e(`story.visuallyhidden_close`),children:[(0,d.jsx)(`span`,{"aria-hidden":`true`,children:`×`}),(0,d.jsx)(l,{children:e(`story.visuallyhidden_close`)})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <VisuallyHidden {...args}>
        {t("story.visuallyhidden_accessible")}
      </VisuallyHidden>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <button aria-label={t("story.visuallyhidden_close")}>
        <span aria-hidden="true">×</span>
        <VisuallyHidden>{t("story.visuallyhidden_close")}</VisuallyHidden>
      </button>;
  }
}`,...m.parameters?.docs?.source}}},h=[`Primary`,`WithinButton`]}));g();export{p as Primary,m as WithinButton,h as __namedExportsOrder,f as default,g as n,u as t};