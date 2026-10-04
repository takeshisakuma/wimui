"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Link-CJxuiLm4.js";var l=t({External:()=>p,Large:()=>y,Primary:()=>f,Secondary:()=>m,Small:()=>v,Tertiary:()=>h,WithIconLeft:()=>g,WithIconRight:()=>_,__namedExportsOrder:()=>b,default:()=>d}),u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),i(),s(),u=o(),d={title:`Components/Typography & Icons/Link`,component:c,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},priority:{control:`select`,options:[`primary`,`secondary`,`tertiary`]},iconName:{control:`select`,options:[void 0,`CircleIcon`,`SquareIcon`,`LoadingIcon`,`ExternalLinkIcon`]},iconPosition:{control:`radio`,options:[`left`,`right`]},external:{control:`boolean`}}},f={args:{priority:`primary`,href:`#`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,label:t(`story.link_primary`)})}},p={args:{external:!0,href:`https://storybook.js.org/`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,label:t(`story.link_external`)})}},m={args:{priority:`secondary`,href:`#`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,label:t(`story.link_secondary`)})}},h={args:{priority:`tertiary`,href:`#`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,label:t(`story.link_tertiary`)})}},g={args:{iconName:`CircleIcon`,iconPosition:`left`,href:`#`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,label:t(`story.link_with_icon`)})}},_={args:{iconName:`SquareIcon`,iconPosition:`right`,href:`#`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,label:t(`story.link_with_icon`)})}},v={args:{size:`sm`,href:`#`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,label:t(`story.link_small`)})}},y={args:{size:`lg`,href:`#`},render:function(e){let{t}=n(a);return(0,u.jsx)(c,{...e,label:t(`story.link_large`)})}},b=[`Primary`,`External`,`Secondary`,`Tertiary`,`WithIconLeft`,`WithIconRight`,`Small`,`Large`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "primary",
    href: "#"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_primary")} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    external: true,
    href: "https://storybook.js.org/"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_external")} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "secondary",
    href: "#"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_secondary")} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    priority: "tertiary",
    href: "#"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_tertiary")} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    iconPosition: "left",
    href: "#"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_with_icon")} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "SquareIcon",
    iconPosition: "right",
    href: "#"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_with_icon")} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    href: "#"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_small")} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    href: "#"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_large")} />;
  }
}`,...y.parameters?.docs?.source}}}})))()}export{v as a,_ as c,m as i,x as l,l as n,h as o,f as r,g as s,y as t};