"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{cr as t}from"./iframe-F5Up1IQq.js";import{D as n,h as r,u as i}from"./blocks-Cr7x-2eu.js";import{t as a}from"./mdx-react-shim-svBJHuCI.js";import{n as o,t as s}from"./T-CCaue7Hv.js";import{n as c,t as l}from"./Command-Da6uaGOk.js";function u(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{title:`Getting Started/Using with AI`}),`
`,(0,f.jsxs)(`div`,{className:`withai-container`,children:[(0,f.jsx)(`h1`,{children:(0,f.jsx)(s,{k:`withai.title`})}),(0,f.jsx)(`p`,{className:`lead`,children:(0,f.jsx)(s,{k:`withai.intro`})}),(0,f.jsx)(`h2`,{children:(0,f.jsx)(s,{k:`withai.files_title`})}),(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`withai.files_desc`})}),(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`withai.files_h_file`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`withai.files_h_use`})})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`code`,{children:`llms.txt`})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`withai.concise_use`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`code`,{children:`llms-full.txt`})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`withai.full_use`})})]})]})]}),(0,f.jsx)(`h2`,{children:(0,f.jsx)(s,{k:`withai.urls_title`})}),(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`withai.urls_desc`})}),(0,f.jsx)(`p`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`withai.urls_public_label`})})}),(0,f.jsx)(l,{children:`https://takeshisakuma.github.io/wimui/llms.txt
https://takeshisakuma.github.io/wimui/llms-full.txt`}),(0,f.jsx)(`p`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`withai.urls_npm_label`})})}),(0,f.jsx)(l,{children:`node -e "console.log(require.resolve('wimui/llms.txt'))"
# or reference the export directly: wimui/llms.txt  •  wimui/llms-full.txt`}),(0,f.jsx)(`h2`,{children:(0,f.jsx)(s,{k:`withai.prompts_title`})}),(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`withai.prompts_desc`})}),(0,f.jsx)(`h3`,{children:(0,f.jsx)(s,{k:`withai.prompt_generic_title`})}),(0,f.jsx)(l,{children:`You are building UI with "wimui" (a React 19 component library).
Follow this file exactly — its import paths, its required CSS setup, and its
composition rules. Do not invent components or props that are not listed.

<paste llms.txt here, or llms-full.txt for real code>

Now build: a settings page with a sidebar, a profile form, and a save action.`}),(0,f.jsx)(`h3`,{children:(0,f.jsx)(s,{k:`withai.prompt_cursor_title`})}),(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`withai.prompt_cursor_desc`})}),(0,f.jsx)(l,{children:`@Docs wimui — build a dashboard screen. Use the import paths and CSS
setup from the doc, and follow its composition rules.`}),(0,f.jsx)(`h3`,{children:(0,f.jsx)(s,{k:`withai.prompt_claude_title`})}),(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`withai.prompt_claude_desc`})}),(0,f.jsx)(l,{children:`curl -o llms-full.txt https://takeshisakuma.github.io/wimui/llms-full.txt
# already installed? use node_modules/wimui/dist/llms-full.txt instead

Read llms-full.txt and use it to build a wimui screen: an auth page
(sign in + sign up). Follow the CSS contract and composition rules
from the file.`}),(0,f.jsx)(`h3`,{children:(0,f.jsx)(s,{k:`withai.prompt_v0_title`})}),(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`withai.prompt_v0_desc`})}),(0,f.jsx)(`h2`,{children:(0,f.jsx)(s,{k:`withai.includes_title`})}),(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`withai.includes_desc`})}),(0,f.jsxs)(`ul`,{children:[(0,f.jsx)(`li`,{children:(0,f.jsx)(s,{k:`withai.inc_setup`})}),(0,f.jsx)(`li`,{children:(0,f.jsx)(s,{k:`withai.inc_imports`})}),(0,f.jsx)(`li`,{children:(0,f.jsx)(s,{k:`withai.inc_catalog`})}),(0,f.jsx)(`li`,{children:(0,f.jsx)(s,{k:`withai.inc_composition`})})]}),(0,f.jsx)(`p`,{className:`note`,children:(0,f.jsx)(s,{k:`withai.note_version`})})]}),`
`,(0,f.jsx)(`style`,{children:`
/* No max-width here: Storybook already caps .sbdocs-content at 1000px and
   centers it. Capping again (this was 72ch) made this page narrower than
   every other MDX page. */
.withai-container {
  font-family: var(--wim-font-family-default, sans-serif);
  color: var(--wim-color-text-primary);
}

.withai-container h1 {
  font-size: var(--wim-font-size-3xl);
  font-weight: 700;
  margin: 0 0 var(--wim-spacing-2xl);
}

.withai-container .lead {
  font-size: var(--wim-font-size-md);
  line-height: 1.7;
  color: var(--wim-color-text-secondary);
  margin-bottom: var(--wim-spacing-md);
}

.withai-container h2 {
  margin-top: var(--wim-spacing-5xl);
  margin-bottom: var(--wim-spacing-2xl);
  font-size: var(--wim-font-size-xl);
}

.withai-container h3 {
  margin-top: var(--wim-spacing-3xl);
  margin-bottom: var(--wim-spacing-md);
  font-size: var(--wim-font-size-lg);
  font-weight: 600;
}

.withai-container .note {
  font-size: var(--wim-font-size-xs);
  color: var(--wim-color-text-secondary);
  border-left: 2px solid var(--wim-color-border-secondary);
  padding-left: var(--wim-spacing-xl);
  margin-top: var(--wim-spacing-3xl);
}

.withai-container ul {
  padding-left: var(--wim-spacing-3xl);
  margin-bottom: var(--wim-spacing-2xl);
}

.withai-container li {
  margin-bottom: var(--wim-spacing-md);
  font-size: var(--wim-font-size-sm);
  line-height: 1.6;
}

.withai-container table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--wim-spacing-2xl);
  background: var(--wim-color-surface);
  border-radius: var(--wim-radius-lg);
  overflow: hidden;
  box-shadow: var(--wim-shadow-sm);
}

.withai-container th,
.withai-container td {
  text-align: left;
  padding: var(--wim-spacing-xl) var(--wim-spacing-2xl);
  border-bottom: 1px solid var(--wim-color-border-secondary);
  font-size: var(--wim-font-size-sm);
  vertical-align: top;
}

.withai-container th {
  background: var(--wim-color-surface-subtle);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: var(--wim-font-size-xs);
}

.withai-container tr:last-child td {
  border-bottom: none;
}
`})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),a(),r(),c(),o()}))();export{d as default};