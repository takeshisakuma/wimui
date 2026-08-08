"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{fi as c,t as l}from"./src-BE5jBQ9L.js";var u=e({Both:()=>g,Default:()=>p,HorizontalScroll:()=>m,WithChildren:()=>h,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_,v=t((()=>{n(),o(),i(),l(),d=a(),f={title:`Components/Utilities/ScrollArea`,component:c,parameters:{layout:`centered`},argTypes:{scrollAxis:{control:`select`,options:[`x`,`y`,`both`]},maxHeight:{control:`text`}}},p={args:{scrollAxis:`y`,maxHeight:`10rem`},render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,children:(0,d.jsxs)(`div`,{style:{padding:`var(--wim-spacing-md)`},children:[(0,d.jsx)(`p`,{children:t(`story.scrollarea_custom_desc`)}),(0,d.jsx)(`ul`,{children:[...Array(10)].map((e,n)=>(0,d.jsx)(`li`,{children:t(`story.scrollarea_item`,{count:n+1})},n))}),(0,d.jsx)(`p`,{children:t(`story.scrollarea_scrolling_works`)})]})})}},m={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,scrollAxis:`x`,style:{width:`100%`,maxWidth:`80vw`},children:(0,d.jsxs)(`div`,{style:{width:`150rem`,background:`var(--wim-color-primary)`,padding:`var(--wim-spacing-md)`,color:`var(--wim-color-text-on-primary)`},children:[t(`story.scrollarea_wide_content`),` `,t(`story.select_opt4`),` `,t(`story.scrollarea_wide_content`),` `,t(`story.select_opt4`),` `,t(`story.scrollarea_wide_content`),` `,t(`story.select_opt4`)]})})}},h={args:{scrollAxis:`y`,maxHeight:`12rem`},render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,children:(0,d.jsxs)(`div`,{style:{padding:`var(--wim-spacing-md)`},children:[(0,d.jsx)(`h4`,{style:{margin:`0 0 1rem 0`},children:t(`story.scrollarea_custom_title`)}),(0,d.jsx)(`p`,{children:t(`story.scrollarea_custom_desc`)}),(0,d.jsxs)(`ul`,{children:[(0,d.jsx)(`li`,{children:t(`story.scrollarea_item`,{count:1})}),(0,d.jsx)(`li`,{children:t(`story.scrollarea_item`,{count:2})}),(0,d.jsx)(`li`,{children:t(`story.scrollarea_item`,{count:3})}),(0,d.jsx)(`li`,{children:t(`story.scrollarea_item`,{count:4})}),(0,d.jsx)(`li`,{children:t(`story.scrollarea_item`,{count:5})})]}),(0,d.jsx)(`p`,{children:t(`story.scrollarea_scrolling_works`)})]})})}},g={args:{scrollAxis:`both`,maxHeight:`20rem`,style:{width:`100%`,maxWidth:`80vw`}},render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,children:(0,d.jsxs)(`div`,{style:{width:`150rem`,height:`40rem`,background:`var(--wim-color-glass-bg)`,padding:`var(--wim-spacing-md)`},children:[(0,d.jsx)(`h4`,{style:{color:`var(--wim-color-text-primary)`},children:t(`story.scrollarea_both_title`)}),(0,d.jsx)(`p`,{style:{color:`var(--wim-color-text-secondary)`},children:t(`story.scrollarea_both_desc`)}),(0,d.jsx)(`div`,{style:{marginTop:`var(--wim-spacing-lg)`,display:`grid`,gridTemplateColumns:`repeat(15, 8rem)`,gap:`var(--wim-spacing-md)`},children:[...Array(30)].map((e,n)=>(0,d.jsx)(`div`,{style:{background:`var(--wim-color-surface)`,padding:`var(--wim-spacing-md)`,borderRadius:`var(--wim-radius-md)`},children:t(`story.scrollarea_box`,{count:n+1})},n))})]})})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
            {[...Array(10)].map((_, i) => <li key={i}>{t("story.scrollarea_item", {
              count: i + 1
            })}</li>)}
          </ul>
          <p>{t("story.scrollarea_scrolling_works")}</p>
        </div>
      </ScrollArea>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          {t("story.scrollarea_wide_content")} {t("story.select_opt4")} {t("story.scrollarea_wide_content")}{" "}
          {t("story.select_opt4")} {t("story.scrollarea_wide_content")} {t("story.select_opt4")}
        </div>
      </ScrollArea>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
            <li>{t("story.scrollarea_item", {
              count: 1
            })}</li>
            <li>{t("story.scrollarea_item", {
              count: 2
            })}</li>
            <li>{t("story.scrollarea_item", {
              count: 3
            })}</li>
            <li>{t("story.scrollarea_item", {
              count: 4
            })}</li>
            <li>{t("story.scrollarea_item", {
              count: 5
            })}</li>
          </ul>
          <p>{t("story.scrollarea_scrolling_works")}</p>
        </div>
      </ScrollArea>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
                {t("story.scrollarea_box", {
              count: i + 1
            })}
              </div>)}
          </div>
        </div>
      </ScrollArea>;
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`HorizontalScroll`,`WithChildren`,`Both`]}));v();export{g as Both,p as Default,m as HorizontalScroll,h as WithChildren,_ as __namedExportsOrder,f as default,v as n,u as t};