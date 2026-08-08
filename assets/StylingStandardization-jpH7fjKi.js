"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{cr as t}from"./iframe-DiXuc7DI.js";import{D as n,h as r,u as i}from"./blocks-jhaXMEKM.js";import{t as a}from"./mdx-react-shim-D1rZKK2O.js";import{n as o,t as s}from"./T-Dz91WLtt.js";import{n as c,t as l}from"./Command-1aNFZC-X.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,pre:`pre`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{title:`Standardization/Styling Standardization`}),`
`,(0,f.jsx)(t.h1,{id:``,children:(0,f.jsx)(s,{k:`guide.styling_std_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.styling_std_desc`})}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-1`,children:(0,f.jsx)(s,{k:`guide.styling_std_concept_title`})}),`
`,(0,f.jsx)(`p`,{children:(0,f.jsx)(s,{k:`guide.styling_std_concept_desc`})}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-2`,children:(0,f.jsx)(s,{k:`guide.styling_std_rules_title`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_token_type`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`table.header_usage_policy`})})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`guide.styling_std_rule_scss_title`})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.styling_std_rule_scss_desc`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`guide.styling_std_rule_css_title`})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.styling_std_rule_css_desc`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`guide.styling_std_rule_component_title`})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`guide.styling_std_rule_component_desc`})})]})]})]}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-3`,children:(0,f.jsx)(s,{k:`doc.implementation_example`})}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-scss`,children:`// BAD
.wim-component {
  color: #006bff; // Hardcoded
  padding: 8px;   // Magic number
  height: 40px;  // Not using standardized heights
}

// GOOD
.wim-component {
  color: var(--wim-color-primary);        // Use token
  padding: var(--wim-spacing-md);        // Use spacing token
  min-height: var(--wim-height-md);  // Use shared height token
}
`})}),`
`,(0,f.jsx)(t.hr,{}),`
`,(0,f.jsx)(t.h2,{id:`-4`,children:(0,f.jsx)(s,{k:`doc.std_summary_title`})}),`
`,(0,f.jsxs)(`table`,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{style:{width:`30%`},children:(0,f.jsx)(s,{k:`doc.std_summary_item`})}),(0,f.jsx)(`th`,{children:(0,f.jsx)(s,{k:`doc.std_summary_desc`})})]})}),(0,f.jsxs)(`tbody`,{children:[(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`doc.global_standards_title`})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{k:`doc.global_standards_desc`})})]}),(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:(0,f.jsx)(`strong`,{children:(0,f.jsx)(s,{k:`doc.test_title`})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(l,{children:`npm run i18n:check`})})]})]})]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),a(),c(),r(),o()}))();export{d as default};