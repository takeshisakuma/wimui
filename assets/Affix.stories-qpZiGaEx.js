"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,Sr as i,Tr as a,ur as o,xr as s}from"./iframe-CIRVVv_5.js";import{pn as c,t as l}from"./src-C35woejG.js";import{t as u}from"./Button-pR3L55SU.js";var d=e({Basic:()=>m,OffsetBottom:()=>h,__namedExportsOrder:()=>g,default:()=>p}),f,p,m,h,g,_=t((()=>{n(),r(),i(),l(),f=o(),p={title:`Components/Navigation Utilities/Affix`,component:c,tags:[],parameters:{layout:`fullscreen`}},m={render:e=>{let{t}=a(s);return(0,f.jsx)(`div`,{id:`affix-container-top`,style:{height:`400px`,overflow:`auto`,padding:`20px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`},children:(0,f.jsxs)(`div`,{style:{height:`800px`},children:[(0,f.jsx)(`p`,{children:t(`story.affix_scroll_top`)}),(0,f.jsxs)(`div`,{style:{marginTop:`300px`},children:[(0,f.jsx)(`p`,{children:t(`story.affix_scroll_bottom_2`,`Scroll down here...`)}),(0,f.jsx)(c,{...e,offsetTop:20,target:()=>document.getElementById(`affix-container-top`),children:(0,f.jsx)(u,{size:`md`,children:t(`story.affix_top`)})})]})]})})}},h={render:e=>{let{t}=a(s);return(0,f.jsx)(`div`,{id:`affix-container-bottom`,style:{height:`400px`,overflow:`auto`,padding:`20px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`},children:(0,f.jsxs)(`div`,{style:{height:`800px`},children:[(0,f.jsx)(`p`,{children:t(`story.affix_scroll_bottom`)}),(0,f.jsxs)(`div`,{style:{marginTop:`400px`},children:[(0,f.jsx)(`p`,{children:t(`story.affix_scroll_bottom_2`,`Scroll down here...`)}),(0,f.jsx)(c,{...e,offsetBottom:20,target:()=>document.getElementById(`affix-container-bottom`),children:(0,f.jsx)(u,{size:`md`,children:t(`story.affix_bottom`)})}),(0,f.jsx)(`p`,{children:t(`story.affix_more`)})]})]})})}},g=[`Basic`,`OffsetBottom`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div id="affix-container-top" style={{
      height: "400px",
      overflow: "auto",
      padding: "20px",
      border: "1px solid var(--wim-color-border)",
      borderRadius: "var(--wim-radius-md)"
    }}>
        <div style={{
        height: "800px"
      }}>
          <p>{t("story.affix_scroll_top")}</p>
          <div style={{
          marginTop: "300px"
        }}>
            <p>{t("story.affix_scroll_bottom_2", "Scroll down here...")}</p>
            <Affix {...args} offsetTop={20} target={() => document.getElementById("affix-container-top")}>
              <Button size="md">{t("story.affix_top")}</Button>
            </Affix>
          </div>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div id="affix-container-bottom" style={{
      height: "400px",
      overflow: "auto",
      padding: "20px",
      border: "1px solid var(--wim-color-border)",
      borderRadius: "var(--wim-radius-md)"
    }}>
        <div style={{
        height: "800px"
      }}>
          <p>{t("story.affix_scroll_bottom")}</p>
          <div style={{
          marginTop: "400px"
        }}>
            <p>{t("story.affix_scroll_bottom_2", "Scroll down here...")}</p>
            <Affix {...args} offsetBottom={20} target={() => document.getElementById("affix-container-bottom")}>
              <Button size="md">{t("story.affix_bottom")}</Button>
            </Affix>
            <p>{t("story.affix_more")}</p>
          </div>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}}}));_();export{m as Basic,h as OffsetBottom,g as __namedExportsOrder,p as default,_ as n,d as t};