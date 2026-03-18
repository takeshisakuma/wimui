import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DSCrJuX5.js";import{M as d}from"./blocks-CBkKZE10.js";import{T as n}from"./T-BwhEiaBP.js";import"./iframe-CzzNuQsS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIwD8Er2.js";import"./index-ChAF4HhZ.js";import"./index-BdQ_0hYd.js";import"./index-XFYJJ0B8.js";import"./i18nConstants-BpHxieg5.js";import"./useTranslation-CcD7M1NG.js";function r(t){const s={code:"code",h1:"h1",h2:"h2",hr:"hr",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Architecture/Styling Standardization"}),`
`,e.jsx(s.h1,{id:"",children:e.jsx(n,{k:"guide_styling_std_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_styling_std_desc"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-1",children:e.jsx(n,{k:"guide_styling_std_concept_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_styling_std_concept_desc"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-2",children:e.jsx(n,{k:"guide_styling_std_rules_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"table_header_token_type"})}),e.jsx("th",{children:e.jsx(n,{k:"table_header_usage_policy"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_styling_std_rule_scss_title"})})}),e.jsx("td",{children:e.jsx(n,{k:"guide_styling_std_rule_scss_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_styling_std_rule_css_title"})})}),e.jsx("td",{children:e.jsx(n,{k:"guide_styling_std_rule_css_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:e.jsx(n,{k:"guide_styling_std_rule_component_title"})})}),e.jsx("td",{children:e.jsx(n,{k:"guide_styling_std_rule_component_desc"})})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"implementation-example",children:"Implementation Example"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-scss",children:`// BAD\r
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
`})})]})}function k(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(r,{...t})}):r(t)}export{k as default};
