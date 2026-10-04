"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./ThemeToggle-CxGCGr-I.js";var d=n({Default:()=>h,LivePreview:()=>y,Segmented:()=>_,Sizes:()=>v,WithSystem:()=>g,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b;function x(){return(x=t((()=>{f=e(r(),1),l(),a(),o(),p=c(),m={title:`Components/Buttons/ThemeToggle`,component:u,parameters:{layout:`centered`},args:{applyToDocument:!1,storageKey:null}},h={},g={args:{modes:[`light`,`dark`,`system`],defaultValue:`system`}},_={args:{variant:`segmented`,modes:[`light`,`dark`,`system`],defaultValue:`light`}},v={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`},children:[(0,p.jsx)(u,{...e,size:`sm`}),(0,p.jsx)(u,{...e,size:`md`}),(0,p.jsx)(u,{...e,size:`lg`})]})},y={render:e=>{let{t}=i(s),[n,r]=(0,f.useState)(`light`),a=typeof window<`u`&&window.__VRT__,o=a?`Appearance`:t(`story.themetoggle_preview_title`),c=a?`Switch themes without affecting Storybook's toolbar theme.`:t(`story.themetoggle_preview_body`);return(0,p.jsxs)(`div`,{"data-theme":n===`system`?void 0:n,style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`320px`,padding:`24px`,background:`var(--wim-color-surface)`,border:`1px solid var(--wim-color-border)`,borderRadius:`12px`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,p.jsx)(`strong`,{style:{color:`var(--wim-color-text-primary)`},children:o}),(0,p.jsx)(u,{...e,variant:`segmented`,modes:[`light`,`dark`],value:n,onChange:r})]}),(0,p.jsx)(`p`,{style:{margin:0,color:`var(--wim-color-text-secondary)`},children:c})]})}},b=[`Default`,`WithSystem`,`Segmented`,`Sizes`,`LivePreview`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    modes: ["light", "dark", "system"],
    defaultValue: "system"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "segmented",
    modes: ["light", "dark", "system"],
    defaultValue: "light"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }}>
      <ThemeToggle {...args} size="sm" />
      <ThemeToggle {...args} size="md" />
      <ThemeToggle {...args} size="lg" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [mode, setMode] = useState<ThemeMode>("light");
    // @ts-expect-error: __VRT__ is a custom global flag for testing
    const isVrt = typeof window !== "undefined" && window.__VRT__;
    const title = isVrt ? "Appearance" : t("story.themetoggle_preview_title");
    const body = isVrt ? "Switch themes without affecting Storybook's toolbar theme." : t("story.themetoggle_preview_body");
    return <div data-theme={mode === "system" ? undefined : mode} style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "320px",
      padding: "24px",
      background: "var(--wim-color-surface)",
      border: "1px solid var(--wim-color-border)",
      borderRadius: "12px"
    }}>
        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
          <strong style={{
          color: "var(--wim-color-text-primary)"
        }}>{title}</strong>
          <ThemeToggle {...args} variant="segmented" modes={["light", "dark"]} value={mode} onChange={setMode} />
        </div>
        <p style={{
        margin: 0,
        color: "var(--wim-color-text-secondary)"
      }}>
          {body}
        </p>
      </div>;
  }
}`,...y.parameters?.docs?.source}}}})))()}export{x as a,g as i,_ as n,d as r,y as t};