import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as d,M as r}from"./blocks-BaWO3BdY.js";import{T as s}from"./T-DUiLF97y.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-B6UUHjqT.js";import"./index-B9nkS0h0.js";import"./index-CO0UZ7Q-.js";import"./index-sOAochn2.js";import"./index-BG-b7-aB.js";import"./useTranslation-CvEZa3qJ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",pre:"pre",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Architecture/Styling Standardization"}),`
`,e.jsx(n.h1,{id:"",children:e.jsx(s,{k:"guide.styling_std_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"guide.styling_std_desc"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-1",children:e.jsx(s,{k:"guide.styling_std_concept_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"guide.styling_std_concept_desc"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-2",children:e.jsx(s,{k:"guide.styling_std_rules_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(s,{k:"table.header_token_type"})}),e.jsx("th",{children:e.jsx(s,{k:"table.header_usage_policy"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(s,{k:"guide.styling_std_rule_scss_title"})})}),e.jsx("td",{children:e.jsx(s,{k:"guide.styling_std_rule_scss_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(s,{k:"guide.styling_std_rule_css_title"})})}),e.jsx("td",{children:e.jsx(s,{k:"guide.styling_std_rule_css_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(s,{k:"guide.styling_std_rule_component_title"})})}),e.jsx("td",{children:e.jsx(s,{k:"guide.styling_std_rule_component_desc"})})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"implementation-example",children:"Implementation Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`// BAD
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
`})})]})}function p(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{p as default};
