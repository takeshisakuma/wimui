"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,r as l,t as u}from"./SourceCitation-D3cDYtbP.js";var d=t({Default:()=>m,List:()=>_,NoLink:()=>g,WithDescription:()=>h,__namedExportsOrder:()=>v,default:()=>p}),f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),a(),l(),f=s(),p={title:`Components/AI/SourceCitation`,component:u,parameters:{layout:`centered`}},m={render:e=>{let{t}=r(o);return(0,f.jsx)(u,{...e,title:e.title||t(`story.sourcecitation_react_docs_title`)})},args:{url:`https://react.dev`,index:1}},h={render:e=>{let{t}=r(o);return(0,f.jsx)(u,{...e,title:e.title||t(`story.sourcecitation_react_docs_title`),description:e.description||t(`story.sourcecitation_react_docs_desc`)})},args:{url:`https://react.dev`,index:1}},g={render:e=>{let{t}=r(o);return(0,f.jsx)(u,{...e,title:e.title||t(`story.sourcecitation_internal_guide_title`),description:e.description||t(`story.sourcecitation_internal_guide_desc`)})},args:{index:2}},_={render:()=>{let{t:e}=r(o);return(0,f.jsx)(c,{sources:[{title:e(`story.sourcecitation_react_docs_title`),url:`https://react.dev`,description:e(`story.sourcecitation_react_docs_desc`)},{title:e(`story.sourcecitation_mdn_docs_title`),url:`https://developer.mozilla.org`,description:e(`story.sourcecitation_mdn_docs_desc`)},{title:e(`story.sourcecitation_ts_handbook_title`),url:`https://www.typescriptlang.org/docs/`}]})}},v=[`Default`,`WithDescription`,`NoLink`,`List`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <SourceCitation {...args} title={args.title || t("story.sourcecitation_react_docs_title")} />;
  },
  args: {
    url: "https://react.dev",
    index: 1
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <SourceCitation {...args} title={args.title || t("story.sourcecitation_react_docs_title")} description={args.description || t("story.sourcecitation_react_docs_desc")} />;
  },
  args: {
    url: "https://react.dev",
    index: 1
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <SourceCitation {...args} title={args.title || t("story.sourcecitation_internal_guide_title")} description={args.description || t("story.sourcecitation_internal_guide_desc")} />;
  },
  args: {
    index: 2
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <SourceCitationList sources={[{
      title: t("story.sourcecitation_react_docs_title"),
      url: "https://react.dev",
      description: t("story.sourcecitation_react_docs_desc")
    }, {
      title: t("story.sourcecitation_mdn_docs_title"),
      url: "https://developer.mozilla.org",
      description: t("story.sourcecitation_mdn_docs_desc")
    }, {
      title: t("story.sourcecitation_ts_handbook_title"),
      url: "https://www.typescriptlang.org/docs/"
    }]} />;
  }
}`,..._.parameters?.docs?.source}}}})))()}export{h as a,d as i,_ as n,y as o,g as r,m as t};