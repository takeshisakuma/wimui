"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{h as n,n as r,u as i}from"./blocks-DX8GcFrX.js";import{i as a,r as o}from"./react-BXJ34t_g.js";import{n as s,t as c}from"./T-B6tjwfui.js";import{n as l,t as u}from"./Command-66wHkEiZ.js";import{n as d,r as f,t as p}from"./Presets.stories-tMGdL6lK.js";function m(e){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:d}),`
`,(0,g.jsxs)(`div`,{className:`presets-doc`,children:[(0,g.jsx)(`h1`,{children:(0,g.jsx)(c,{k:`presets.doc_title`})}),(0,g.jsx)(`p`,{className:`lead`,children:(0,g.jsx)(c,{k:`presets.doc_intro`})}),(0,g.jsx)(`h2`,{children:(0,g.jsx)(c,{k:`presets.usage_title`})}),(0,g.jsx)(`p`,{children:(0,g.jsx)(c,{k:`presets.usage_desc`})}),(0,g.jsx)(u,{children:`import { WimProvider } from "wimui";

// Recommended — React
<WimProvider theme="system" preset="soft">
<App />
</WimProvider>

// Or set the attribute directly (or a subtree)
// <html data-wim-preset="bold">
// <section data-wim-preset="soft"> … </section>

// Imperative helpers
import { setWimPreset, WIM_PRESETS } from "wimui";
setWimPreset("bold"); // "minimal" | "soft" | "bold" | "none"`}),(0,g.jsx)(`h2`,{children:(0,g.jsx)(c,{k:`presets.list_title`})}),(0,g.jsx)(`p`,{children:(0,g.jsx)(c,{k:`presets.list_desc`})})]}),`
`,(0,g.jsx)(r,{of:p}),`
`,(0,g.jsxs)(`div`,{className:`presets-doc`,children:[(0,g.jsx)(`h2`,{children:(0,g.jsx)(c,{k:`presets.extend_title`})}),(0,g.jsx)(`p`,{children:(0,g.jsx)(c,{k:`presets.extend_desc`})}),(0,g.jsx)(u,{children:`// tokens/presets/ocean.json
{
"order": 4,
"label": "Ocean",
"description": "…",
"radius": { "component": "8px", "container": "12px", "overlay": "12px" },
"accent": "{pccs.s16}"
}`})]}),`
`,(0,g.jsx)(`style`,{children:`
/* No max-width here: Storybook already caps .sbdocs-content at 1000px and
   centers it. Capping again (this was 80ch) made this page narrower than
   every other MDX page. */
.presets-doc {
  font-family: var(--wim-font-family-default, sans-serif);
  color: var(--wim-color-text-primary);
}
.presets-doc h1 { font-size: var(--wim-font-size-3xl); font-weight: 700; margin: var(--wim-spacing-3xl) 0 var(--wim-spacing-2xl); }
.presets-doc .lead { font-size: 16px; line-height: 1.7; color: var(--wim-color-text-secondary); }
.presets-doc h2 { margin-top: var(--wim-spacing-4xl); margin-bottom: var(--wim-spacing-xl); font-size: var(--wim-font-size-xl); }
`})]})}function h(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),o(),n(),f(),l(),s()})))()}_();export{h as default};