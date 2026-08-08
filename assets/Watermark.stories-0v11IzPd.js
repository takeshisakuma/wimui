"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{ii as c,t as l}from"./src-BE5jBQ9L.js";var u=e({AutoRatio:()=>g,Image:()=>h,MultiLine:()=>m,Text:()=>p,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_,v=t((()=>{n(),o(),i(),l(),d=a(),f={title:`Components/Data Indicators/Watermark`,component:c,argTypes:{rotate:{control:{type:`range`,min:-180,max:180}},opacity:{control:{type:`range`,min:0,max:1,step:.1}}}},p={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,content:t(`story.watermark_text`),children:(0,d.jsx)(`div`,{style:{height:`400px`,background:`var(--wim-color-surface)`,padding:`20px`},children:(0,d.jsx)(`div`,{style:{height:`200px`,background:`var(--wim-color-surface-variant)`,display:`flex`,alignItems:`center`,justifyContent:`center`,marginTop:`24px`},children:t(`story.watermark_confidential_mark`)})})})}},m={render:function(e){let{t}=r(s);return(0,d.jsx)(c,{...e,content:[t(`story.watermark_wimui`),t(`story.watermark_confidential_mark`),t(`story.watermark_team`)],children:(0,d.jsx)(`div`,{style:{height:`400px`}})})},args:{gap:[120,120]}},h={args:{image:`./wimlogo.svg`,width:80,opacity:.1,children:(0,d.jsx)(`div`,{style:{height:`400px`}})}},g={args:{image:`./wimlogo.svg`,opacity:.1,children:(0,d.jsx)(`div`,{style:{height:`400px`}})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Watermark {...args} content={t("story.watermark_text")}>
        <div style={{
        height: "400px",
        background: "var(--wim-color-surface)",
        padding: "20px"
      }}>
          <div style={{
          height: "200px",
          background: "var(--wim-color-surface-variant)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "24px"
        }}>
            {t("story.watermark_confidential_mark")}
          </div>
        </div>
      </Watermark>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Watermark {...args} content={[t("story.watermark_wimui"), t("story.watermark_confidential_mark"), t("story.watermark_team")]}>
        <div style={{
        height: "400px"
      }} />
      </Watermark>;
  },
  args: {
    gap: [120, 120]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    image: "./wimlogo.svg",
    width: 80,
    opacity: 0.1,
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    image: "./wimlogo.svg",
    opacity: 0.1,
    children: <div style={{
      height: "400px"
    }} />
  }
}`,...g.parameters?.docs?.source}}},_=[`Text`,`MultiLine`,`Image`,`AutoRatio`]}));v();export{g as AutoRatio,h as Image,m as MultiLine,p as Text,_ as __namedExportsOrder,f as default,v as n,u as t};