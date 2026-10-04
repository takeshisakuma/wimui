"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";var u,d;function f(){return(f=t((()=>{u=`_root_nspzl_2`,d={root:u}})))()}var p,m,h;function g(){return(g=t((()=>{r(),p=e(l(),1),f(),m=c(),h=({text:e,children:t,scrollAxis:n=`y`,maxHeight:r=`10rem`,style:i,className:a,...o})=>{let s={maxHeight:r,overflowX:n===`x`||n===`both`?`auto`:`hidden`,overflowY:n===`y`||n===`both`?`auto`:`hidden`,...i};return(0,m.jsx)(`div`,{className:(0,p.default)(`wim-scroll-area`,d.root,a),style:s,tabIndex:0,...o,children:t||e})},h.__docgenInfo={description:``,methods:[],displayName:`ScrollArea`,props:{text:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Content to display (alternative to children)`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Content to display`},scrollAxis:{required:!1,tsType:{name:`union`,raw:`"x" | "y" | "both"`,elements:[{name:`literal`,value:`"x"`},{name:`literal`,value:`"y"`},{name:`literal`,value:`"both"`}]},description:`Axis along which scrolling is allowed`,defaultValue:{value:`"y"`,computed:!1}},maxHeight:{required:!1,tsType:{name:`string`},description:`Maximum height before scrolling (a CSS value, so units other than px are supported)`}}}})))()}var _=n({Both:()=>C,Default:()=>b,HorizontalScroll:()=>x,WithChildren:()=>S,__namedExportsOrder:()=>w,default:()=>y}),v,y,b,x,S,C,w;function T(){return(T=t((()=>{r(),a(),o(),g(),v=c(),y={title:`Components/Utilities/ScrollArea`,component:h,parameters:{layout:`centered`},argTypes:{scrollAxis:{control:`select`,options:[`x`,`y`,`both`]},maxHeight:{control:`text`}}},b={args:{scrollAxis:`y`,maxHeight:`10rem`},render:function(e){let{t}=i(s);return(0,v.jsx)(h,{...e,children:(0,v.jsxs)(`div`,{style:{padding:`var(--wim-spacing-md)`},children:[(0,v.jsx)(`p`,{children:t(`story.scrollarea_custom_desc`)}),(0,v.jsx)(`ul`,{children:[...Array(10)].map((e,n)=>(0,v.jsx)(`li`,{children:t(`story.scrollarea_row`,{count:n+1})},n))}),(0,v.jsx)(`p`,{children:t(`story.scrollarea_scrolling_works`)})]})})}},x={render:function(e){let{t}=i(s);return(0,v.jsx)(h,{...e,scrollAxis:`x`,style:{width:`100%`,maxWidth:`80vw`},children:(0,v.jsxs)(`div`,{style:{width:`150rem`,background:`var(--wim-color-primary)`,padding:`var(--wim-spacing-md)`,color:`var(--wim-color-text-on-primary)`},children:[t(`story.scrollarea_wide_content`),` `,t(`story.scrollarea_wide_content_2`),` `,t(`story.scrollarea_wide_content`),` `,t(`story.scrollarea_wide_content_2`),` `,t(`story.scrollarea_wide_content`),` `,t(`story.scrollarea_wide_content_2`)]})})}},S={args:{scrollAxis:`y`,maxHeight:`12rem`},render:function(e){let{t}=i(s);return(0,v.jsx)(h,{...e,children:(0,v.jsxs)(`div`,{style:{padding:`var(--wim-spacing-md)`},children:[(0,v.jsx)(`h4`,{style:{margin:`0 0 1rem 0`},children:t(`story.scrollarea_custom_title`)}),(0,v.jsx)(`p`,{children:t(`story.scrollarea_custom_desc`)}),(0,v.jsxs)(`ul`,{children:[(0,v.jsx)(`li`,{children:t(`story.scrollarea_row`,{count:1})}),(0,v.jsx)(`li`,{children:t(`story.scrollarea_row`,{count:2})}),(0,v.jsx)(`li`,{children:t(`story.scrollarea_row`,{count:3})}),(0,v.jsx)(`li`,{children:t(`story.scrollarea_row`,{count:4})}),(0,v.jsx)(`li`,{children:t(`story.scrollarea_row`,{count:5})})]}),(0,v.jsx)(`p`,{children:t(`story.scrollarea_scrolling_works`)})]})})}},C={args:{scrollAxis:`both`,maxHeight:`20rem`,style:{width:`100%`,maxWidth:`80vw`}},render:function(e){let{t}=i(s);return(0,v.jsx)(h,{...e,children:(0,v.jsxs)(`div`,{style:{width:`150rem`,height:`40rem`,background:`var(--wim-color-glass-bg)`,padding:`var(--wim-spacing-md)`},children:[(0,v.jsx)(`h4`,{style:{color:`var(--wim-color-text-primary)`},children:t(`story.scrollarea_both_title`)}),(0,v.jsx)(`p`,{style:{color:`var(--wim-color-text-secondary)`},children:t(`story.scrollarea_both_desc`)}),(0,v.jsx)(`div`,{style:{marginTop:`var(--wim-spacing-lg)`,display:`grid`,gridTemplateColumns:`repeat(15, 8rem)`,gap:`var(--wim-spacing-md)`},children:[...Array(30)].map((e,n)=>(0,v.jsx)(`div`,{style:{background:`var(--wim-color-surface)`,padding:`var(--wim-spacing-md)`,borderRadius:`var(--wim-radius-md)`},children:t(`story.scrollarea_seat`,{count:n+1})},n))})]})})}},w=[`Default`,`HorizontalScroll`,`WithChildren`,`Both`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "y",
    maxHeight: "10rem"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ScrollArea {...args}>
        <div style={{
        padding: "var(--wim-spacing-md)"
      }}>
          <p>{t("story.scrollarea_custom_desc")}</p>
          <ul>
            {[...Array(10)].map((_, i) => <li key={i}>{t("story.scrollarea_row", {
              count: i + 1
            })}</li>)}
          </ul>
          <p>{t("story.scrollarea_scrolling_works")}</p>
        </div>
      </ScrollArea>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ScrollArea {...args} scrollAxis="x" style={{
      width: "100%",
      maxWidth: "80vw"
    }}>
        <div style={{
        width: "150rem",
        background: "var(--wim-color-primary)",
        padding: "var(--wim-spacing-md)",
        color: "var(--wim-color-text-on-primary)"
      }}>
          {/* 埋め草は Select の選択肢を借りていた（T255 でその文言が
              「週 1 回（Business プラン）」に変わり、ここだけ意味が通らなくなった）。
              画面に属する文として、この story 専用のキーを 2 つ交互に置く。 */}
          {t("story.scrollarea_wide_content")} {t("story.scrollarea_wide_content_2")}{" "}
          {t("story.scrollarea_wide_content")} {t("story.scrollarea_wide_content_2")}{" "}
          {t("story.scrollarea_wide_content")} {t("story.scrollarea_wide_content_2")}
        </div>
      </ScrollArea>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "y",
    maxHeight: "12rem"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ScrollArea {...args}>
        <div style={{
        padding: "var(--wim-spacing-md)"
      }}>
          <h4 style={{
          margin: "0 0 1rem 0"
        }}>{t("story.scrollarea_custom_title")}</h4>
          <p>{t("story.scrollarea_custom_desc")}</p>
          <ul>
            <li>{t("story.scrollarea_row", {
              count: 1
            })}</li>
            <li>{t("story.scrollarea_row", {
              count: 2
            })}</li>
            <li>{t("story.scrollarea_row", {
              count: 3
            })}</li>
            <li>{t("story.scrollarea_row", {
              count: 4
            })}</li>
            <li>{t("story.scrollarea_row", {
              count: 5
            })}</li>
          </ul>
          <p>{t("story.scrollarea_scrolling_works")}</p>
        </div>
      </ScrollArea>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "both",
    maxHeight: "20rem",
    style: {
      width: "100%",
      maxWidth: "80vw"
    }
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ScrollArea {...args}>
        <div style={{
        width: "150rem",
        height: "40rem",
        background: "var(--wim-color-glass-bg)",
        padding: "var(--wim-spacing-md)"
      }}>
          <h4 style={{
          color: "var(--wim-color-text-primary)"
        }}>{t("story.scrollarea_both_title")}</h4>
          <p style={{
          color: "var(--wim-color-text-secondary)"
        }}>
            {t("story.scrollarea_both_desc")}
          </p>
          <div style={{
          marginTop: "var(--wim-spacing-lg)",
          display: "grid",
          gridTemplateColumns: "repeat(15, 8rem)",
          gap: "var(--wim-spacing-md)"
        }}>
            {[...Array(30)].map((_, i) => <div key={i} style={{
            background: "var(--wim-color-surface)",
            padding: "var(--wim-spacing-md)",
            borderRadius: "var(--wim-radius-md)"
          }}>
                {t("story.scrollarea_seat", {
              count: i + 1
            })}
              </div>)}
          </div>
        </div>
      </ScrollArea>;
  }
}`,...C.parameters?.docs?.source}}}})))()}export{S as a,_ as i,b as n,T as o,x as r,C as t};