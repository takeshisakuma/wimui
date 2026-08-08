"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{t as l}from"./src-BE5jBQ9L.js";import{r as u}from"./SpeedDial-zLpS6dnZ.js";var d=e({AutoShrink:()=>y,BackTop:()=>w,Basic:()=>h,Extended:()=>g,ExtendedSizes:()=>v,FixedPosition:()=>C,Primary:()=>b,Sizes:()=>_,Square:()=>x,WithBadge:()=>S,__namedExportsOrder:()=>E,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D=t((()=>{f=n(r(),1),s(),a(),l(),p=o(),m={title:`Components/Navigation Utilities/FloatButton`,component:u,tags:[],parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},position:{control:`select`,options:[`bottom-right`,`bottom-left`,`bottom-center`,`top-right`,`top-left`,`static`]},variant:{control:`radio`,options:[`default`,`primary`]},shape:{control:`radio`,options:[`circle`,`square`]}}},h={args:{iconName:`CircleIcon`,variant:`primary`,shape:`circle`,size:`md`,position:`static`}},g={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,label:t(`story.floatbutton_send`)})},args:{iconName:`CircleIcon`,variant:`primary`,size:`md`,position:`static`,shrink:!1}},_={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,p.jsx)(u,{iconName:`CircleIcon`,size:`sm`,variant:`primary`,position:`static`}),(0,p.jsx)(u,{iconName:`CircleIcon`,size:`md`,variant:`primary`,position:`static`}),(0,p.jsx)(u,{iconName:`CircleIcon`,size:`lg`,variant:`primary`,position:`static`})]})},v={render:()=>{let{t:e}=i(c);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,alignItems:`flex-start`},children:[(0,p.jsx)(u,{iconName:`CircleIcon`,label:e(`story.floatbutton_small`),size:`sm`,variant:`primary`,position:`static`}),(0,p.jsx)(u,{iconName:`CircleIcon`,label:e(`story.floatbutton_medium`),size:`md`,variant:`primary`,position:`static`}),(0,p.jsx)(u,{iconName:`CircleIcon`,label:e(`story.floatbutton_large`),size:`lg`,variant:`primary`,position:`static`})]})}},y={render:function(e){let{t}=i(c);return(0,p.jsx)(T,{...e,label:t(`story.floatbutton_shrink`)})},args:{iconName:`CircleIcon`,variant:`primary`,size:`md`,position:`static`,shrink:!1}},b={args:{iconName:`LoadingIcon`,variant:`primary`,shape:`circle`,size:`md`,position:`static`}},x={args:{iconName:`SquareIcon`,variant:`default`,shape:`square`,size:`md`,position:`static`}},S={args:{iconName:`CircleIcon`,badge:3,variant:`primary`,size:`md`,position:`static`}},C={parameters:{layout:`fullscreen`},render:e=>{let{t}=i(c);return(0,p.jsxs)(`div`,{style:{height:`150vh`,padding:`20px`},children:[(0,p.jsx)(`p`,{children:t(`story.floatbutton_look_bottom`)}),(0,p.jsx)(u,{...e,iconName:`ChevronUpIcon`,variant:`primary`,shape:`circle`,size:`md`,position:`bottom-right`,description:t(`story.floatbutton_click_me`)})]})}},w={parameters:{layout:`fullscreen`},render:e=>{let{t}=i(c);return(0,p.jsxs)(`div`,{style:{height:`200vh`,padding:`20px`},children:[(0,p.jsx)(`p`,{children:t(`story.floatbutton_scroll_top_desc`)}),(0,p.jsx)(u,{...e,backTop:!0,visibilityHeight:100,variant:`primary`,size:`md`})]})}},T=e=>{let[t,n]=(0,f.useState)(!1),r=(0,f.useRef)(null),{t:a}=i(c);return(0,p.jsxs)(`div`,{style:{height:`300px`,width:`100%`,maxWidth:`400px`,overflow:`hidden`,border:`1px solid var(--wim-color-border)`,position:`relative`,display:`flex`,flexDirection:`column`},children:[(0,p.jsx)(`div`,{style:{height:`100%`,overflowY:`auto`,padding:`20px`},onScroll:()=>{n(!0),r.current&&window.clearTimeout(r.current),r.current=window.setTimeout(()=>{n(!1)},1e3)},children:(0,p.jsx)(`div`,{style:{height:`1000px`},children:(0,p.jsx)(`p`,{children:a(`story.floatbutton_scroll_inside`)})})}),(0,p.jsx)(u,{...e,shrink:t,style:{position:`absolute`,bottom:`20px`,right:`20px`,...e.style}})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    shape: "circle",
    size: "md",
    position: "static"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FloatButton {...args} label={t("story.floatbutton_send")} />;
  },
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    size: "md",
    position: "static",
    shrink: false
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <FloatButton iconName="CircleIcon" size="sm" variant="primary" position="static" />
      <FloatButton iconName="CircleIcon" size="md" variant="primary" position="static" />
      <FloatButton iconName="CircleIcon" size="lg" variant="primary" position="static" />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      alignItems: "flex-start"
    }}>
        <FloatButton iconName="CircleIcon" label={t("story.floatbutton_small")} size="sm" variant="primary" position="static" />
        <FloatButton iconName="CircleIcon" label={t("story.floatbutton_medium")} size="md" variant="primary" position="static" />
        <FloatButton iconName="CircleIcon" label={t("story.floatbutton_large")} size="lg" variant="primary" position="static" />
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AutoShrinkDemo {...args} label={t("story.floatbutton_shrink")} />;
  },
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    size: "md",
    position: "static",
    shrink: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "LoadingIcon",
    variant: "primary",
    shape: "circle",
    size: "md",
    position: "static"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "SquareIcon",
    variant: "default",
    shape: "square",
    size: "md",
    position: "static"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    badge: 3,
    variant: "primary",
    size: "md",
    position: "static"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "150vh",
      padding: "20px"
    }}>
        <p>{t("story.floatbutton_look_bottom")}</p>
        <FloatButton {...args} iconName="ChevronUpIcon" variant="primary" shape="circle" size="md" position="bottom-right" description={t("story.floatbutton_click_me")} />
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "200vh",
      padding: "20px"
    }}>
        <p>{t("story.floatbutton_scroll_top_desc")}</p>
        <FloatButton {...args} backTop visibilityHeight={100} variant="primary" size="md" />
      </div>;
  }
}`,...w.parameters?.docs?.source}}},E=[`Basic`,`Extended`,`Sizes`,`ExtendedSizes`,`AutoShrink`,`Primary`,`Square`,`WithBadge`,`FixedPosition`,`BackTop`]}));D();export{y as AutoShrink,w as BackTop,h as Basic,g as Extended,v as ExtendedSizes,C as FixedPosition,b as Primary,_ as Sizes,x as Square,S as WithBadge,E as __namedExportsOrder,m as default,D as n,d as t};