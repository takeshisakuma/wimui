"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./IconButton-Vaooi49W.js";var u=t({Close:()=>m,Default:()=>p,Sizes:()=>g,Variants:()=>h,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Buttons/IconButton`,component:l,tags:[],argTypes:{disabled:{control:`boolean`},variant:{control:`select`,options:[`solid`,`outline`,`ghost`]}}},p={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,iconName:`SearchIcon`,"aria-label":t(`story.iconbutton_search`)})}},m={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,iconName:`CloseIcon`,"aria-label":t(`story.iconbutton_close`)})},args:{variant:`ghost`}},h={render:function(e){let{t}=r(o);return(0,d.jsx)(`div`,{style:{display:`flex`,gap:`var(--wim-spacing-md)`,alignItems:`center`},children:[`solid`,`outline`,`ghost`].map(n=>(0,d.jsx)(l,{...e,variant:n,iconName:`SearchIcon`,"aria-label":t(`story.iconbutton_search`)},n))})}},g={render:function(e){let{t}=r(o);return(0,d.jsx)(`div`,{style:{display:`flex`,gap:`var(--wim-spacing-md)`,alignItems:`center`},children:[`sm`,`md`,`lg`].map(n=>(0,d.jsx)(l,{...e,size:n,iconName:`SearchIcon`,"aria-label":t(`story.iconbutton_search`)},n))})}},_=[`Default`,`Close`,`Variants`,`Sizes`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <IconButton {...args} iconName="SearchIcon" aria-label={t("story.iconbutton_search")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <IconButton {...args} iconName="CloseIcon" aria-label={t("story.iconbutton_close")} />;
  },
  args: {
    variant: "ghost"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      gap: "var(--wim-spacing-md)",
      alignItems: "center"
    }}>
        {(["solid", "outline", "ghost"] as const).map(variant => <IconButton key={variant} {...args} variant={variant} iconName="SearchIcon" aria-label={t("story.iconbutton_search")} />)}
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      gap: "var(--wim-spacing-md)",
      alignItems: "center"
    }}>
        {(["sm", "md", "lg"] as const).map(size => <IconButton key={size} {...args} size={size} iconName="SearchIcon" aria-label={t("story.iconbutton_search")} />)}
      </div>;
  }
}`,...g.parameters?.docs?.source}}}})))()}export{v as a,h as i,u as n,g as r,p as t};