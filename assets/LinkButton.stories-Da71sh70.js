"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./LinkButton-B7LlNzpw.js";var u=t({Default:()=>p,Sizes:()=>h,Variants:()=>m,__namedExportsOrder:()=>g,default:()=>f}),d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Buttons/LinkButton`,component:l,tags:[]},p={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,href:`https://google.com`,target:`_blank`,icon:`ExternalLinkIcon`,iconPosition:`right`,children:t(`story.linkbutton_google`)})}},m={render:function(e){let{t}=r(o);return(0,d.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--wim-spacing-md)`,alignItems:`center`},children:[`solid`,`outline`,`ghost`].map(n=>(0,d.jsx)(l,{...e,variant:n,href:`https://google.com`,target:`_blank`,icon:`ExternalLinkIcon`,iconPosition:`right`,children:t(`story.linkbutton_google`)},n))})}},h={render:function(e){let{t}=r(o);return(0,d.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--wim-spacing-md)`,alignItems:`center`},children:[`sm`,`md`,`lg`].map(n=>(0,d.jsx)(l,{...e,size:n,href:`https://google.com`,target:`_blank`,icon:`ExternalLinkIcon`,iconPosition:`right`,children:t(`story.linkbutton_google`)},n))})}},g=[`Default`,`Variants`,`Sizes`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <LinkButton {...args} href="https://google.com" target="_blank" icon="ExternalLinkIcon" iconPosition="right">{t("story.linkbutton_google")}</LinkButton>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--wim-spacing-md)",
      alignItems: "center"
    }}>
        {(["solid", "outline", "ghost"] as const).map(variant => <LinkButton key={variant} {...args} variant={variant} href="https://google.com" target="_blank" icon="ExternalLinkIcon" iconPosition="right">
            {t("story.linkbutton_google")}
          </LinkButton>)}
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--wim-spacing-md)",
      alignItems: "center"
    }}>
        {(["sm", "md", "lg"] as const).map(size => <LinkButton key={size} {...args} size={size} href="https://google.com" target="_blank" icon="ExternalLinkIcon" iconPosition="right">
            {t("story.linkbutton_google")}
          </LinkButton>)}
      </div>;
  }
}`,...h.parameters?.docs?.source}}}})))()}export{_ as a,m as i,u as n,h as r,p as t};