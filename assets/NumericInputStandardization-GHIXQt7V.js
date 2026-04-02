import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as d,M as t}from"./blocks-CWVWamR8.js";import{T as n}from"./T-B0FcFRLv.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Dh8ZUv-I.js";import"./index-DIdbQVoZ.js";import"./index-yBh7137e.js";import"./index-B-YF9g88.js";import"./index-BCbdBU6h.js";import"./useTranslation-CdCoNx2v.js";function s(r){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",pre:"pre",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Architecture/Numeric Input Standardization"}),`
`,e.jsx(i.h1,{id:"",children:e.jsx(n,{k:"guide.numeric_std_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide.numeric_std_desc"})}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"-1",children:e.jsx(n,{k:"guide.numeric_std_concept_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide.numeric_std_concept_desc"})}),`
`,e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",margin:"24px 0"},children:[e.jsxs("div",{style:{padding:"16px",borderRadius:"8px",border:"1px solid var(--wim-color-border)",backgroundColor:"var(--wim-color-surface-variant)"},children:[e.jsx("strong",{style:{display:"block",marginBottom:"8px",color:"var(--color-positive)"},children:e.jsx(n,{k:"common.do"})}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[e.jsx("li",{children:e.jsx(n,{k:"guide.numeric_std_usage_warning_desc"})}),e.jsx("li",{children:e.jsx(n,{k:"guide.numeric_std_usage_do_1"})})]})]}),e.jsxs("div",{style:{padding:"16px",borderRadius:"8px",border:"1px solid var(--wim-color-border)",backgroundColor:"var(--wim-color-surface-variant)"},children:[e.jsx("strong",{style:{display:"block",marginBottom:"8px",color:"var(--color-destructive)"},children:e.jsx(n,{k:"common.dont"})}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[e.jsx("li",{children:e.jsx(n,{k:"guide.numeric_std_usage_dont_1"})}),e.jsx("li",{children:e.jsx(n,{k:"guide.numeric_std_usage_dont_2"})}),e.jsx("li",{children:e.jsx(n,{k:"guide.numeric_std_usage_dont_3"})})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"-2",children:e.jsx(n,{k:"guide.numeric_std_problems_title"})}),`
`,e.jsx(i.h3,{id:"-3",children:e.jsx(n,{k:"guide.numeric_std_problem_1_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide.numeric_std_problem_1_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"guide.numeric_std_table_browser"})}),e.jsx("th",{children:e.jsx(n,{k:"guide.numeric_std_table_input_status"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Chrome"}),e.jsx("td",{children:e.jsx(n,{k:"guide.numeric_std_table_input_disabled"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Safari / Firefox"}),e.jsx("td",{children:e.jsx(n,{k:"guide.numeric_std_table_input_js_empty"})})]})]})]}),`
`,e.jsx(i.h3,{id:"-4",children:e.jsx(n,{k:"guide.numeric_std_problem_2_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide.numeric_std_problem_2_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(n,{k:"guide.numeric_std_table_browser"})}),e.jsx("th",{children:e.jsx(n,{k:"guide.numeric_std_table_behavior"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Safari"}),e.jsx("td",{children:e.jsx(n,{k:"guide.numeric_std_safari_behavior"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Firefox"}),e.jsx("td",{children:e.jsx(n,{k:"guide.numeric_std_firefox_behavior"})})]})]})]}),`
`,e.jsx(i.h3,{id:"-5",children:e.jsx(n,{k:"guide.numeric_std_problem_3_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide.numeric_std_problem_3_desc"})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`/* Firefox adjustment example */
@-moz-document url-prefix() {
  input[type="number"] {
    padding: 0 1rem;
  }
}
`})}),`
`,e.jsx(i.h3,{id:"-6",children:e.jsx(n,{k:"guide.numeric_std_problem_4_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide.numeric_std_problem_4_desc"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide.numeric_std_spin_button_warning"})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-css",children:`/* Hiding spin buttons */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
`})}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"-7",children:e.jsx(n,{k:"guide.numeric_std_recommend_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide.numeric_std_recommend_desc"})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<!-- Recommended format for credit cards, etc. -->
<input 
  type="text" 
  inputmode="numeric" 
  pattern="[0-9]*" 
/>
`})}),`
`,e.jsxs("blockquote",{children:[e.jsx("strong",{children:e.jsx(n,{k:"guide.numeric_std_usage_warning_title"})}),e.jsx("br",{}),e.jsx(n,{k:"guide.numeric_std_exp_notation_desc"})]})]})}function p(r={}){const{wrapper:i}={...d(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(s,{...r})}):s(r)}export{p as default};
