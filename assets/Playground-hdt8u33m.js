"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{h as n,u as r}from"./blocks-DX8GcFrX.js";import{i,r as a}from"./react-BXJ34t_g.js";import{n as o,t as s}from"./T-B6tjwfui.js";import{n as c,t as l}from"./Playground-DlX5pXjV.js";function u(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{title:`Getting Started/Playground`}),`
`,`
`,(0,f.jsxs)(`div`,{className:`playground-doc sb-unstyled`,children:[(0,f.jsx)(`h1`,{children:(0,f.jsx)(s,{k:`playground.title`})}),(0,f.jsx)(`p`,{className:`lead`,children:(0,f.jsx)(s,{k:`playground.intro`})}),(0,f.jsx)(l,{}),(0,f.jsx)(`p`,{className:`note`,children:(0,f.jsx)(s,{k:`playground.note`})})]}),`
`,(0,f.jsx)(`style`,{children:`
/* Storybook caps docs content at 1000px; the gallery needs the wider measure
   so the featured preview reaches its own lg breakpoint. */
.sbdocs-content:has(> .playground-doc) {
  max-width: none;
}

/* Block padding only: .sbdocs-wrapper already supplies the 20px side gutter.
   Adding inline padding here stacked on it and made this page narrower than
   every other MDX page on small screens. */
.playground-doc {
  padding-block: var(--wim-spacing-4xl);
  max-width: var(--wim-breakpoint-xl);
  margin: 0 auto;
  font-family: var(--wim-font-family-default, sans-serif);
  color: var(--wim-color-text-primary);
}

/* Direct child only — the recipes render their own h1, and those belong to
   the Title component. */
.playground-doc > h1 {
  font-size: var(--wim-font-size-3xl);
  font-weight: var(--wim-font-weight-semibold);
  line-height: var(--wim-line-height-tight);
  margin: 0 0 var(--wim-spacing-2xl);
}

/* Intro copy stays at a readable measure even though the gallery below is wide. */
.playground-doc .lead {
  max-width: 68ch;
  font-size: var(--wim-font-size-md);
  line-height: var(--wim-line-height-loose);
  color: var(--wim-color-text-secondary);
  margin-bottom: var(--wim-spacing-5xl);
}

.playground-doc .note {
  max-width: 68ch;
  font-size: var(--wim-font-size-sm);
  line-height: var(--wim-line-height-loose);
  color: var(--wim-color-text-secondary);
  border-left: var(--wim-border-width-thin) solid var(--wim-color-border-secondary);
  padding-left: var(--wim-spacing-2xl);
  margin-top: var(--wim-spacing-5xl);
}
`})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),a(),n(),o(),c()})))()}p();export{d as default};