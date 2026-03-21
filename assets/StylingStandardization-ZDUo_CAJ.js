import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as r,M as d}from"./blocks-C34TwFjl.js";import{T as s}from"./T-BLBpE4Wl.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Ddm5FQ3s.js";import"./index-NSRt9_IK.js";import"./index-HqbpVp3l.js";import"./index-BYTxnAVb.js";import"./index-D67ADwda.js";import"./i18nConstants-BpHxieg5.js";import"./useTranslation-BxKydHqK.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Architecture/Styling Standardization"}),`
`,e.jsx(n.h1,{id:"",children:e.jsx(s,{k:"guide_styling_std_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"guide_styling_std_desc"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-1",children:e.jsx(s,{k:"guide_styling_std_concept_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"guide_styling_std_concept_desc"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-2",children:e.jsx(s,{k:"guide_styling_std_rules_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(s,{k:"table_header_token_type"})}),e.jsx("th",{children:e.jsx(s,{k:"table_header_usage_policy"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(s,{k:"guide_styling_std_rule_scss_title"})})}),e.jsx("td",{children:e.jsx(s,{k:"guide_styling_std_rule_scss_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(s,{k:"guide_styling_std_rule_css_title"})})}),e.jsx("td",{children:e.jsx(s,{k:"guide_styling_std_rule_css_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(s,{k:"guide_styling_std_rule_component_title"})})}),e.jsx("td",{children:e.jsx(s,{k:"guide_styling_std_rule_component_desc"})})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"implementation-example",children:"Implementation Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`// BAD\r
.wim-component {\r
  color: #006bff; // Hardcoded\r
  padding: 8px;   // Magic number\r
  height: 40px;  // Not using standardized heights\r
}\r
\r
// GOOD\r
.wim-component {\r
  color: var(--color-primary);        // Use token\r
  padding: var(--spacing-md);        // Use spacing token\r
  min-height: var(--wim-height-md);  // Use shared height token\r
}
`})})]})}function u(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
