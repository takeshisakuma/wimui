"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-DSrkNfg0.js";import{i as u,n as d,r as f,t as p}from"./Tooltip-DRX-EZon.js";var m=t({Bottom:()=>b,Default:()=>_,Left:()=>x,Right:()=>S,Top:()=>y,Variants:()=>v,WithDelay:()=>C,__namedExportsOrder:()=>w,default:()=>g}),h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),i(),a(),c(),u(),h=s(),g={title:`Components/Overlays/Tooltip`,component:p,parameters:{layout:`centered`},argTypes:{delay:{control:`number`},open:{control:`boolean`},placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`]}}},_={render:function(e){let{t}=r(o);return(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(f,{asChild:!0,children:(0,h.jsx)(l,{children:t(`story.tooltip_hover`)})}),(0,h.jsx)(d,{children:t(`story.tooltip_text`)})]})}},v={render:function(){let{t:e}=r(o);return(0,h.jsx)(`div`,{style:{display:`flex`,gap:`calc(var(--wim-spacing-5xl) * 2)`,padding:`var(--wim-spacing-5xl) var(--wim-spacing-xl) var(--wim-spacing-xl)`},children:[`default`,`glass`].map(t=>(0,h.jsxs)(p,{open:!0,variant:t,placement:`top`,children:[(0,h.jsx)(f,{asChild:!0,children:(0,h.jsx)(l,{variant:`outline`,children:e(t===`glass`?`story.overlay_variant_glass`:`common.default`)})}),(0,h.jsx)(d,{children:e(`story.tooltip_text`)})]},t))})}},y={render:function(e){let{t}=r(o);return(0,h.jsx)(`div`,{style:{padding:`50px`},children:(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(f,{asChild:!0,children:(0,h.jsx)(l,{children:t(`top`)})}),(0,h.jsx)(d,{children:t(`story.tooltip_top_text`)})]})})},args:{placement:`top`}},b={render:function(e){let{t}=r(o);return(0,h.jsx)(`div`,{style:{padding:`50px`},children:(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(f,{asChild:!0,children:(0,h.jsx)(l,{children:t(`bottom`)})}),(0,h.jsx)(d,{children:t(`story.tooltip_bottom_text`)})]})})},args:{placement:`bottom`}},x={render:function(e){let{t}=r(o);return(0,h.jsx)(`div`,{style:{padding:`50px`},children:(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(f,{asChild:!0,children:(0,h.jsx)(l,{children:t(`left`)})}),(0,h.jsx)(d,{children:t(`story.tooltip_left_text`)})]})})},args:{placement:`left`}},S={render:function(e){let{t}=r(o);return(0,h.jsx)(`div`,{style:{padding:`50px`},children:(0,h.jsxs)(p,{...e,children:[(0,h.jsx)(f,{asChild:!0,children:(0,h.jsx)(l,{children:t(`right`)})}),(0,h.jsx)(d,{children:t(`story.tooltip_right_text`)})]})})},args:{placement:`right`}},C={render:function(e){let{t}=r(o);return(0,h.jsxs)(p,{...e,delay:e.delay??1e3,children:[(0,h.jsx)(f,{asChild:!0,children:(0,h.jsx)(l,{children:t(`story.tooltip_hover_1s`)})}),(0,h.jsx)(d,{children:t(`story.tooltip_delayed`)})]})}},w=[`Default`,`Variants`,`Top`,`Bottom`,`Left`,`Right`,`WithDelay`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button>{t("story.tooltip_hover")}</Button>
        </TooltipTrigger>
        <TooltipContent>{t("story.tooltip_text")}</TooltipContent>
      </Tooltip>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      gap: "calc(var(--wim-spacing-5xl) * 2)",
      padding: "var(--wim-spacing-5xl) var(--wim-spacing-xl) var(--wim-spacing-xl)"
    }}>
        {(["default", "glass"] as const).map(variant => <Tooltip key={variant} open variant={variant} placement="top">
            <TooltipTrigger asChild>
              <Button variant="outline">{t(variant === "glass" ? "story.overlay_variant_glass" : "common.default")}</Button>
            </TooltipTrigger>
            <TooltipContent>{t("story.tooltip_text")}</TooltipContent>
          </Tooltip>)}
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`開いた状態で既定と glass を並べる（T280: 面そのものがどのストーリーにも写っていなかった）。`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button>{t("top")}</Button>
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_top_text")}</TooltipContent>
        </Tooltip>
      </div>;
  },
  args: {
    placement: "top"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button>{t("bottom")}</Button>
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_bottom_text")}</TooltipContent>
        </Tooltip>
      </div>;
  },
  args: {
    placement: "bottom"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button>{t("left")}</Button>
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_left_text")}</TooltipContent>
        </Tooltip>
      </div>;
  },
  args: {
    placement: "left"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "50px"
    }}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button>{t("right")}</Button>
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_right_text")}</TooltipContent>
        </Tooltip>
      </div>;
  },
  args: {
    placement: "right"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Tooltip {...args} delay={args.delay ?? 1000}>
        <TooltipTrigger asChild>
          <Button>{t("story.tooltip_hover_1s")}</Button>
        </TooltipTrigger>
        <TooltipContent>{t("story.tooltip_delayed")}</TooltipContent>
      </Tooltip>;
  }
}`,...C.parameters?.docs?.source}}}})))()}export{y as a,T as c,m as i,x as n,v as o,S as r,C as s,b as t};