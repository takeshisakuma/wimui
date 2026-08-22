"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{t as l}from"./src-Ssuy8lr7.js";import{t as u}from"./Box--bAE-pUN.js";import{r as d}from"./SpeedDial-CqIO82V2.js";import{t as f}from"./Text-DzblcqZm.js";var p,m,h=t((()=>{p=`_page_f2m7r_2`,m={page:p}})),g=e({AutoShrink:()=>T,BackTop:()=>j,Basic:()=>b,CornerFab:()=>A,Extended:()=>x,ExtendedSizes:()=>w,FixedPosition:()=>k,LongLabel:()=>S,Primary:()=>E,Sizes:()=>C,Square:()=>D,WithBadge:()=>O,__namedExportsOrder:()=>N,default:()=>y}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P=t((()=>{_=n(r(),1),s(),a(),l(),h(),v=o(),y={title:`Components/Navigation Utilities/FloatButton`,component:d,tags:[],parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},position:{control:`select`,options:[`bottom-right`,`bottom-left`,`bottom-center`,`top-right`,`top-left`,`static`]},variant:{control:`radio`,options:[`default`,`primary`]},shape:{control:`radio`,options:[`circle`,`square`]}}},b={args:{iconName:`CircleIcon`,shape:`circle`,size:`md`,position:`inline`}},x={render:function(e){let{t}=i(c);return(0,v.jsx)(d,{...e,label:t(`story.floatbutton_send`)})},args:{iconName:`CircleIcon`,size:`md`,position:`inline`,shrink:!1}},S={render:function(e){let{t}=i(c);return(0,v.jsx)(d,{...e,label:t(`story.floatbutton_long_label`)})},args:{iconName:`AlertTriangleIcon`,size:`md`,position:`inline`}},C={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,alignItems:`center`},children:[(0,v.jsx)(d,{iconName:`CircleIcon`,size:`sm`,position:`inline`}),(0,v.jsx)(d,{iconName:`CircleIcon`,size:`md`,position:`inline`}),(0,v.jsx)(d,{iconName:`CircleIcon`,size:`lg`,position:`inline`})]})},w={render:()=>{let{t:e}=i(c);return(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,alignItems:`flex-start`},children:[(0,v.jsx)(d,{iconName:`CircleIcon`,label:e(`story.floatbutton_small`),size:`sm`,position:`inline`}),(0,v.jsx)(d,{iconName:`CircleIcon`,label:e(`story.floatbutton_medium`),size:`md`,position:`inline`}),(0,v.jsx)(d,{iconName:`CircleIcon`,label:e(`story.floatbutton_large`),size:`lg`,position:`inline`})]})}},T={render:function(e){let{t}=i(c);return(0,v.jsx)(M,{...e,label:t(`story.floatbutton_shrink`)})},args:{iconName:`CircleIcon`,size:`md`,position:`inline`,shrink:!1}},E={args:{iconName:`LoadingIcon`,shape:`circle`,size:`md`,position:`inline`}},D={args:{iconName:`SquareIcon`,variant:`outline`,shape:`square`,size:`md`,position:`inline`}},O={args:{iconName:`CircleIcon`,badge:3,size:`md`,position:`inline`}},k={parameters:{layout:`fullscreen`},render:e=>{let{t}=i(c);return(0,v.jsxs)(`div`,{style:{height:`150vh`,padding:`20px`},children:[(0,v.jsx)(`p`,{children:t(`story.floatbutton_look_bottom`)}),(0,v.jsx)(d,{...e,iconName:`ChevronUpIcon`,shape:`circle`,size:`md`,position:`bottom-right`,description:t(`story.floatbutton_click_me`)})]})}},A={parameters:{layout:`fullscreen`},render:function(e){let{t}=i(c);return(0,v.jsxs)(`div`,{className:m.page,children:[(0,v.jsx)(u,{p:`xl`,children:(0,v.jsx)(f,{children:t(`story.floatbutton_corner_page`)})}),(0,v.jsx)(d,{...e,iconName:`PlusIcon`,position:`bottom-right`,label:t(`story.floatbutton_corner_label`)})]})}},j={parameters:{layout:`fullscreen`},render:e=>{let{t}=i(c);return(0,v.jsxs)(`div`,{style:{height:`200vh`,padding:`20px`},children:[(0,v.jsx)(`p`,{children:t(`story.floatbutton_scroll_top_desc`)}),(0,v.jsx)(d,{...e,backTop:!0,visibilityHeight:100,size:`md`})]})}},M=e=>{let[t,n]=(0,_.useState)(!1),r=(0,_.useRef)(null),{t:a}=i(c);return(0,v.jsxs)(`div`,{style:{height:`300px`,width:`100%`,maxWidth:`400px`,overflow:`hidden`,border:`1px solid var(--wim-color-border)`,position:`relative`,display:`flex`,flexDirection:`column`},children:[(0,v.jsx)(`div`,{style:{height:`100%`,overflowY:`auto`,padding:`20px`},onScroll:()=>{n(!0),r.current&&window.clearTimeout(r.current),r.current=window.setTimeout(()=>{n(!1)},1e3)},children:(0,v.jsx)(`div`,{style:{height:`1000px`},children:(0,v.jsx)(`p`,{children:a(`story.floatbutton_scroll_inside`)})})}),(0,v.jsx)(d,{...e,shrink:t,style:{position:`absolute`,bottom:`20px`,right:`20px`,...e.style}})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    shape: "circle",
    size: "md",
    position: "inline"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <FloatButton iconName="CircleIcon" size="sm" position="inline" />
      <FloatButton iconName="CircleIcon" size="md" position="inline" />
      <FloatButton iconName="CircleIcon" size="lg" position="inline" />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "LoadingIcon",
    shape: "circle",
    size: "md",
    position: "inline"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "SquareIcon",
    variant: "outline",
    shape: "square",
    size: "md",
    position: "inline"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    iconName: "CircleIcon",
    badge: 3,
    size: "md",
    position: "inline"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
        <FloatButton {...args} iconName="ChevronUpIcon" shape="circle" size="md" position="bottom-right" description={t("story.floatbutton_click_me")} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
        <FloatButton {...args} backTop visibilityHeight={100} size="md" />
      </div>;
  }
}`,...j.parameters?.docs?.source}}},N=[`Basic`,`Extended`,`LongLabel`,`Sizes`,`ExtendedSizes`,`AutoShrink`,`Primary`,`Square`,`WithBadge`,`FixedPosition`,`CornerFab`,`BackTop`]}));P();export{T as AutoShrink,j as BackTop,b as Basic,A as CornerFab,x as Extended,w as ExtendedSizes,k as FixedPosition,S as LongLabel,E as Primary,C as Sizes,D as Square,O as WithBadge,N as __namedExportsOrder,y as default,P as n,g as t};