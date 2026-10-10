"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{h as n,u as r}from"./blocks-DX8GcFrX.js";import{i,r as a}from"./react-BXJ34t_g.js";import{n as o,t as s}from"./T-B6tjwfui.js";import{n as c,t as l}from"./Command-66wHkEiZ.js";function u(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{title:`Token/Density`}),`
`,(0,f.jsx)(`h1`,{children:(0,f.jsx)(s,{k:`guide.density_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.density_desc`})}),`
`,(0,f.jsx)(`hr`,{}),`
`,(0,f.jsx)(`h2`,{children:(0,f.jsx)(s,{k:`guide.density_modes_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.density_modes_desc`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`guide.density_mode`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`guide.density_when`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`guide.density_effect`})})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsxs)(`td`,{children:[(0,f.jsx)(`code`,{children:`comfortable`}),` (`,(0,f.jsx)(s,{k:`guide.density_default`}),`)`]}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.density_comfortable_when`})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.density_comfortable_effect`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`code`,{children:`compact`})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.density_compact_when`})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.density_compact_effect`})})]})]})]}),`
`,(0,f.jsx)(`hr`,{}),`
`,(0,f.jsx)(`h2`,{children:(0,f.jsx)(s,{k:`guide.density_usage_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.density_usage_desc`})}),`
`,(0,f.jsx)(l,{children:`import { WimProvider, setWimDensity } from "wimui";

<WimProvider density="compact">{/* app */}</WimProvider>

setWimDensity("compact");
// or on a subtree:
setWimDensity("compact", document.getElementById("app-shell"));`}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.density_attr_desc`})}),`
`,(0,f.jsx)(l,{children:`<html data-density="compact">`}),`
`,(0,f.jsx)(`hr`,{}),`
`,(0,f.jsx)(`h2`,{children:(0,f.jsx)(s,{k:`guide.density_tokens_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.density_tokens_desc`})}),`
`,(0,f.jsxs)(`ul`,{children:[(0,f.jsx)(`li`,{children:(0,f.jsx)(`code`,{children:`--wim-height-xs|sm|md|lg`})}),(0,f.jsx)(`li`,{children:(0,f.jsx)(`code`,{children:`--wim-control-padding-x|y-sm|md|lg`})}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`code`,{children:`--wim-field-padding-x|y`}),` / `,(0,f.jsx)(`code`,{children:`--wim-field-padding-y-tight`})]}),(0,f.jsx)(`li`,{children:(0,f.jsx)(`code`,{children:`--wim-control-item-padding-x-sm|md|lg`})}),(0,f.jsx)(`li`,{children:(0,f.jsx)(`code`,{children:`--wim-list-item-padding-x|y`})}),(0,f.jsx)(`li`,{children:(0,f.jsx)(`code`,{children:`--wim-table-cell-padding-x|y`})}),(0,f.jsxs)(`li`,{children:[(0,f.jsx)(`code`,{children:`--wim-checkbox-size`}),` / `,(0,f.jsx)(`code`,{children:`--wim-radio-size`})]}),(0,f.jsx)(`li`,{children:(0,f.jsx)(`code`,{children:`--wim-switch-*-sm|md|lg`})}),(0,f.jsx)(`li`,{children:(0,f.jsx)(`code`,{children:`--wim-segmented-control-item-size-*`})})]}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.density_stable_desc`})}),`
`,(0,f.jsxs)(`ul`,{children:[(0,f.jsx)(`li`,{children:(0,f.jsx)(`code`,{children:`--wim-spacing-*`})}),(0,f.jsx)(`li`,{children:(0,f.jsx)(`code`,{children:`--wim-avatar-size-*`})})]}),`
`,(0,f.jsx)(`hr`,{}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.density_storybook_hint`})})]})}function d(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),a(),n(),o(),c()})))()}p();export{d as default};