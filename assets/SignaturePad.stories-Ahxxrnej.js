"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{cr as c,lr as l,t as u}from"./src-Ssuy8lr7.js";import{a as d}from"./FieldTemplate-D3hWbscu.js";var f=e({CustomColors:()=>g,Default:()=>h,Disabled:()=>_,InWideField:()=>y,Large:()=>v,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b,x=t((()=>{n(),l(),o(),i(),u(),p=a(),m={title:`Components/Advanced Inputs/SignaturePad`,component:c,parameters:{layout:`centered`}},h={render:function(e){let{t}=r(s);return(0,p.jsx)(d,{label:t(`story.signaturepad_default`),children:(0,p.jsx)(c,{...e})})},args:{width:400,height:200}},g={render:function(e){let{t}=r(s);return(0,p.jsx)(d,{label:t(`story.signaturepad_colors`),children:(0,p.jsx)(c,{...e})})},args:{penColor:`#ff4d4f`,penWidth:4,width:400,height:200}},_={render:function(e){let{t}=r(s);return(0,p.jsx)(d,{label:t(`story.signaturepad_disabled`),children:(0,p.jsx)(c,{...e,disabled:!0})})},args:{width:400,height:200}},v={render:function(e){let{t}=r(s);return(0,p.jsx)(d,{label:t(`story.signaturepad_large`),children:(0,p.jsx)(c,{...e})})},args:{width:600,height:300}},y={parameters:{layout:`fullscreen`},render:function(e){let{t}=r(s);return(0,p.jsx)(`div`,{style:{padding:`var(--wim-spacing-lg)`,width:`100%`},children:(0,p.jsx)(c,{...e,label:t(`story.signaturepad_wide_field`)})})},args:{width:400,height:200}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.signaturepad_default")}>
        <SignaturePad {...args} />
      </Label>;
  },
  args: {
    width: 400,
    height: 200
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.signaturepad_colors")}>
        <SignaturePad {...args} />
      </Label>;
  },
  args: {
    penColor: "#ff4d4f",
    penWidth: 4,
    width: 400,
    height: 200
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.signaturepad_disabled")}>
        <SignaturePad {...args} disabled={true} />
      </Label>;
  },
  args: {
    width: 400,
    height: 200
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Label label={t("story.signaturepad_large")}>
        <SignaturePad {...args} />
      </Label>;
  },
  args: {
    width: 600,
    height: 300
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "var(--wim-spacing-lg)",
      width: "100%"
    }}>
        <SignaturePad {...args} label={t("story.signaturepad_wide_field")} />
      </div>;
  },
  args: {
    width: 400,
    height: 200
  }
}`,...y.parameters?.docs?.source},description:{story:'T125: `SignaturePad` の根は `FieldTemplate` の `.content`（flex 縦並び・\n`align-items: stretch`）の子なので、**親いっぱいに引き伸ばされる**。\n`.root { display: inline-flex }`（＝内容幅に縮む意図）は flex アイテムでは\n`flex` へ blockify されて黙って捨てられるため効かない。\n\n他のストーリーは `layout: "centered"` で枠が 432px しかなく、canvas とほぼ\n同じ幅なので**この欠陥が永久に出ない**。広い親に置いて初めて、`Clear` が\ncanvas の右端から離れて座るのが見える。',...y.parameters?.docs?.description}}},b=[`Default`,`CustomColors`,`Disabled`,`Large`,`InWideField`]}));x();export{g as CustomColors,h as Default,_ as Disabled,y as InWideField,v as Large,b as __namedExportsOrder,m as default,x as n,f as t};