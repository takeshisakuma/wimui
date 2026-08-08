"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{t as s}from"./src-BE5jBQ9L.js";import{r as c}from"./Blockquote-BN18wCRL.js";var l=e({External:()=>p,Large:()=>y,Primary:()=>f,Secondary:()=>m,Small:()=>v,Tertiary:()=>h,WithIconLeft:()=>g,WithIconRight:()=>_,__namedExportsOrder:()=>b,default:()=>d}),u,d,f,p,m,h,g,_,v,y,b,x=t((()=>{a(),r(),s(),u=i(),d={title:`Components/Typography & Icons/Link`,component:c,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},priority:{control:`select`,options:[`primary`,`secondary`,`tertiary`]},iconName:{control:`select`,options:[void 0,`CircleIcon`,`SquareIcon`,`LoadingIcon`,`ExternalLinkIcon`]},iconPosition:{control:`radio`,options:[`left`,`right`]},external:{control:`boolean`}}},f={args:{priority:`primary`,href:`#`},render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,label:t(`story.link_primary`)})}},p={args:{external:!0,href:`https://storybook.js.org/`},render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,label:t(`story.link_external`)})}},m={args:{priority:`secondary`,href:`#`},render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,label:t(`story.link_secondary`)})}},h={args:{priority:`tertiary`,href:`#`},render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,label:t(`story.link_tertiary`)})}},g={args:{iconName:`CircleIcon`,iconPosition:`left`,href:`#`},render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,label:t(`story.link_with_icon`)})}},_={args:{iconName:`SquareIcon`,iconPosition:`right`,href:`#`},render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,label:t(`story.link_with_icon`)})}},v={args:{size:`sm`,href:`#`},render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,label:t(`story.link_small`)})}},y={args:{size:`lg`,href:`#`},render:function(e){let{t}=n(o);return(0,u.jsx)(c,{...e,label:t(`story.link_large`)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Primary`,`External`,`Secondary`,`Tertiary`,`WithIconLeft`,`WithIconRight`,`Small`,`Large`]}));x();export{p as External,y as Large,f as Primary,m as Secondary,v as Small,h as Tertiary,g as WithIconLeft,_ as WithIconRight,b as __namedExportsOrder,d as default,x as n,l as t};