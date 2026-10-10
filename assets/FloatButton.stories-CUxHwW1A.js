"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Box-BNJo1pMu.js";import{n as d,t as f}from"./Text-1X1ZsZfu.js";import{n as p,t as m}from"./FloatButton-BvBQ19sb.js";var h,g;function _(){return(_=t((()=>{h=`_page_f2m7r_2`,g={page:h}})))()}var v=n({AutoShrink:()=>O,BackTop:()=>P,Basic:()=>S,CornerFab:()=>N,Extended:()=>C,ExtendedSizes:()=>D,FixedPosition:()=>M,LongLabel:()=>w,Primary:()=>k,Sizes:()=>T,Square:()=>A,Variants:()=>E,WithBadge:()=>j,__namedExportsOrder:()=>I,default:()=>x}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{y=e(r(),1),a(),o(),l(),p(),d(),_(),b=c(),x={title:`Components/Navigation Utilities/FloatButton`,component:m,tags:[],parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},position:{control:`select`,options:[`bottom-right`,`bottom-left`,`bottom-center`,`top-right`,`top-left`,`static`]},variant:{control:`radio`,options:[`default`,`primary`]},shape:{control:`radio`,options:[`circle`,`square`]}}},S={render:function(e){let{t}=i(s);return(0,b.jsx)(m,{...e,"aria-label":t(`story.floatbutton_create`)})},args:{iconName:`CircleIcon`,shape:`circle`,size:`md`,position:`inline`}},C={render:function(e){let{t}=i(s);return(0,b.jsx)(m,{...e,label:t(`story.floatbutton_send`)})},args:{iconName:`CircleIcon`,size:`md`,position:`inline`,shrink:!1}},w={render:function(e){let{t}=i(s);return(0,b.jsx)(m,{...e,label:t(`story.floatbutton_long_label`)})},args:{iconName:`AlertTriangleIcon`,size:`md`,position:`inline`}},T={render:function(){let{t:e}=i(s),t=e(`story.floatbutton_create`);return(0,b.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,b.jsx)(m,{iconName:`CircleIcon`,size:`sm`,position:`inline`,"aria-label":t}),(0,b.jsx)(m,{iconName:`CircleIcon`,size:`md`,position:`inline`,"aria-label":t}),(0,b.jsx)(m,{iconName:`CircleIcon`,size:`lg`,position:`inline`,"aria-label":t})]})}},E={render:function(){let{t:e}=i(s),t=e(`story.floatbutton_create`);return(0,b.jsxs)(`div`,{style:{display:`flex`,gap:`var(--wim-spacing-lg)`,alignItems:`center`},children:[(0,b.jsx)(m,{iconName:`CircleIcon`,position:`inline`,"aria-label":t}),(0,b.jsx)(m,{iconName:`CircleIcon`,variant:`outline`,position:`inline`,"aria-label":t}),(0,b.jsx)(m,{iconName:`CircleIcon`,variant:`glass`,position:`inline`,"aria-label":t})]})}},D={render:()=>{let{t:e}=i(s);return(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,alignItems:`flex-start`},children:[(0,b.jsx)(m,{iconName:`CircleIcon`,label:e(`story.floatbutton_small`),size:`sm`,position:`inline`}),(0,b.jsx)(m,{iconName:`CircleIcon`,label:e(`story.floatbutton_medium`),size:`md`,position:`inline`}),(0,b.jsx)(m,{iconName:`CircleIcon`,label:e(`story.floatbutton_large`),size:`lg`,position:`inline`})]})}},O={render:function(e){let{t}=i(s);return(0,b.jsx)(F,{...e,label:t(`story.floatbutton_shrink`)})},args:{iconName:`CircleIcon`,size:`md`,position:`inline`,shrink:!1}},k={render:function(e){let{t}=i(s);return(0,b.jsx)(m,{...e,"aria-label":t(`story.floatbutton_refresh`)})},args:{iconName:`LoadingIcon`,shape:`circle`,size:`md`,position:`inline`}},A={render:function(e){let{t}=i(s);return(0,b.jsx)(m,{...e,"aria-label":t(`story.floatbutton_stop`)})},args:{iconName:`SquareIcon`,variant:`outline`,shape:`square`,size:`md`,position:`inline`}},j={render:function(e){let{t}=i(s);return(0,b.jsx)(m,{...e,"aria-label":t(`story.floatbutton_notifications`)})},args:{iconName:`CircleIcon`,badge:3,size:`md`,position:`inline`}},M={parameters:{layout:`fullscreen`},render:e=>{let{t}=i(s);return(0,b.jsxs)(`div`,{style:{height:`150vh`,padding:`20px`},children:[(0,b.jsx)(`p`,{children:t(`story.floatbutton_look_bottom`)}),(0,b.jsx)(m,{...e,iconName:`ChevronUpIcon`,shape:`circle`,size:`md`,position:`bottom-right`,"aria-label":t(`story.floatbutton_back_to_top`),description:t(`story.floatbutton_click_me`)})]})}},N={parameters:{layout:`fullscreen`},render:function(e){let{t}=i(s);return(0,b.jsxs)(`div`,{className:g.page,children:[(0,b.jsx)(u,{p:`xl`,children:(0,b.jsx)(f,{children:t(`story.floatbutton_corner_page`)})}),(0,b.jsx)(m,{...e,iconName:`PlusIcon`,position:`bottom-right`,label:t(`story.floatbutton_corner_label`)})]})}},P={parameters:{layout:`fullscreen`},render:e=>{let{t}=i(s);return(0,b.jsxs)(`div`,{style:{height:`200vh`,padding:`20px`},children:[(0,b.jsx)(`p`,{children:t(`story.floatbutton_scroll_top_desc`)}),(0,b.jsx)(m,{...e,backTop:!0,visibilityHeight:100,size:`md`,"aria-label":t(`story.floatbutton_back_to_top`)})]})}},F=e=>{let[t,n]=(0,y.useState)(!1),r=(0,y.useRef)(null),{t:a}=i(s);return(0,b.jsxs)(`div`,{style:{height:`300px`,width:`100%`,maxWidth:`400px`,overflow:`hidden`,border:`1px solid var(--wim-color-border)`,position:`relative`,display:`flex`,flexDirection:`column`},children:[(0,b.jsx)(`div`,{style:{height:`100%`,overflowY:`auto`,padding:`20px`},onScroll:()=>{n(!0),r.current&&window.clearTimeout(r.current),r.current=window.setTimeout(()=>{n(!1)},1e3)},children:(0,b.jsx)(`div`,{style:{height:`1000px`},children:(0,b.jsx)(`p`,{children:a(`story.floatbutton_scroll_inside`)})})}),(0,b.jsx)(m,{...e,shrink:t,style:{position:`absolute`,bottom:`20px`,right:`20px`,...e.style}})]})},I=[`Basic`,`Extended`,`LongLabel`,`Sizes`,`Variants`,`ExtendedSizes`,`AutoShrink`,`Primary`,`Square`,`WithBadge`,`FixedPosition`,`CornerFab`,`BackTop`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FloatButton {...args} aria-label={t("story.floatbutton_create")} />;
  },
  args: {
    iconName: "CircleIcon",
    shape: "circle",
    size: "md",
    position: "inline"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FloatButton {...args} label={t("story.floatbutton_send")} />;
  },
  args: {
    iconName: "CircleIcon",
    size: "md",
    position: "inline",
    shrink: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FloatButton {...args} label={t("story.floatbutton_long_label")} />;
  },
  args: {
    iconName: "AlertTriangleIcon",
    size: "md",
    position: "inline"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const name = t("story.floatbutton_create");
    return <div style={{
      display: "flex",
      gap: "16px",
      alignItems: "center"
    }}>
        <FloatButton iconName="CircleIcon" size="sm" position="inline" aria-label={name} />
        <FloatButton iconName="CircleIcon" size="md" position="inline" aria-label={name} />
        <FloatButton iconName="CircleIcon" size="lg" position="inline" aria-label={name} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const name = t("story.floatbutton_create");
    return <div style={{
      display: "flex",
      gap: "var(--wim-spacing-lg)",
      alignItems: "center"
    }}>
        <FloatButton iconName="CircleIcon" position="inline" aria-label={name} />
        <FloatButton iconName="CircleIcon" variant="outline" position="inline" aria-label={name} />
        <FloatButton iconName="CircleIcon" variant="glass" position="inline" aria-label={name} />
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
        <FloatButton iconName="CircleIcon" label={t("story.floatbutton_small")} size="sm" position="inline" />
        <FloatButton iconName="CircleIcon" label={t("story.floatbutton_medium")} size="md" position="inline" />
        <FloatButton iconName="CircleIcon" label={t("story.floatbutton_large")} size="lg" position="inline" />
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AutoShrinkDemo {...args} label={t("story.floatbutton_shrink")} />;
  },
  args: {
    iconName: "CircleIcon",
    size: "md",
    position: "inline",
    shrink: false
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FloatButton {...args} aria-label={t("story.floatbutton_refresh")} />;
  },
  args: {
    iconName: "LoadingIcon",
    shape: "circle",
    size: "md",
    position: "inline"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FloatButton {...args} aria-label={t("story.floatbutton_stop")} />;
  },
  args: {
    iconName: "SquareIcon",
    variant: "outline",
    shape: "square",
    size: "md",
    position: "inline"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <FloatButton {...args} aria-label={t("story.floatbutton_notifications")} />;
  },
  args: {
    iconName: "CircleIcon",
    badge: 3,
    size: "md",
    position: "inline"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
        <FloatButton {...args} iconName="ChevronUpIcon" shape="circle" size="md" position="bottom-right" aria-label={t("story.floatbutton_back_to_top")} description={t("story.floatbutton_click_me")} />
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div className={styles.page}>
        <Box p="xl">
          <Text>{t("story.floatbutton_corner_page")}</Text>
        </Box>
        <FloatButton {...args} iconName="PlusIcon" position="bottom-right" label={t("story.floatbutton_corner_label")} />
      </div>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
        <FloatButton {...args} backTop visibilityHeight={100} size="md" aria-label={t("story.floatbutton_back_to_top")} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}}})))()}export{D as a,k as c,E as d,j as f,C as i,T as l,P as n,M as o,L as p,S as r,v as s,O as t,A as u};