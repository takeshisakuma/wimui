"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-splidnB2.js";import{t as c}from"./src-CV0le6yM.js";import{t as l}from"./Button-vRcm9ObM.js";import{a as u,i as d,r as f}from"./AIResponseFeedback-g01OXJKQ.js";var p=e({Bottom:()=>v,Default:()=>g,Left:()=>y,Right:()=>b,Top:()=>_,WithDelay:()=>x,__namedExportsOrder:()=>S,default:()=>h}),m,h,g,_,v,y,b,x,S,C=t((()=>{n(),o(),i(),c(),m=a(),h={title:`Components/Overlays/Tooltip`,component:f,parameters:{layout:`centered`},argTypes:{delay:{control:`number`},open:{control:`boolean`},placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`]}}},g={render:function(e){let{t}=r(s);return(0,m.jsxs)(f,{...e,children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(l,{children:t(`story.tooltip_hover`)})}),(0,m.jsx)(d,{children:t(`story.tooltip_text`)})]})}},_={render:function(e){let{t}=r(s);return(0,m.jsx)(`div`,{style:{padding:`50px`},children:(0,m.jsxs)(f,{...e,children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(l,{children:t(`top`)})}),(0,m.jsx)(d,{children:t(`story.tooltip_top_text`)})]})})},args:{placement:`top`}},v={render:function(e){let{t}=r(s);return(0,m.jsx)(`div`,{style:{padding:`50px`},children:(0,m.jsxs)(f,{...e,children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(l,{children:t(`bottom`)})}),(0,m.jsx)(d,{children:t(`story.tooltip_bottom_text`)})]})})},args:{placement:`bottom`}},y={render:function(e){let{t}=r(s);return(0,m.jsx)(`div`,{style:{padding:`50px`},children:(0,m.jsxs)(f,{...e,children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(l,{children:t(`left`)})}),(0,m.jsx)(d,{children:t(`story.tooltip_left_text`)})]})})},args:{placement:`left`}},b={render:function(e){let{t}=r(s);return(0,m.jsx)(`div`,{style:{padding:`50px`},children:(0,m.jsxs)(f,{...e,children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(l,{children:t(`right`)})}),(0,m.jsx)(d,{children:t(`story.tooltip_right_text`)})]})})},args:{placement:`right`}},x={render:function(e){let{t}=r(s);return(0,m.jsxs)(f,{...e,delay:e.delay??1e3,children:[(0,m.jsx)(u,{asChild:!0,children:(0,m.jsx)(l,{children:t(`story.tooltip_hover_1s`)})}),(0,m.jsx)(d,{children:t(`story.tooltip_delayed`)})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
            <Button>{t("right")}</Button>
          </TooltipTrigger>
          <TooltipContent>{t("story.tooltip_right_text")}</TooltipContent>
        </Tooltip>
      </div>;
  },
  args: {
    placement: "right"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Top`,`Bottom`,`Left`,`Right`,`WithDelay`]}));C();export{v as Bottom,g as Default,y as Left,b as Right,_ as Top,x as WithDelay,S as __namedExportsOrder,h as default,C as n,p as t};