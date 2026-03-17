import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-C2SHUO_A.js";import{M as l,C as d,a as x}from"./blocks-s5ForvvM.js";import{S as o,H as n,V as j,M as h,N as _,C as p}from"./Splitter.stories-BHEkgmJ8.js";import{T as s}from"./T-QPAjEbnX.js";import"./iframe-DqYBP9z6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DPA5NbhZ.js";import"./index-B1XFWKzi.js";import"./index-CP7gMDpa.js";import"./index-CkpP_Uyt.js";import"./index-DTc8ljRI.js";import"./useTranslation-BBRUnBtc.js";import"./i18nConstants-BpHxieg5.js";function r(t){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(i.h1,{id:"splitter",children:"Splitter"}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_splitter_long_desc"})}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:e.jsx(s,{k:"doc_splitter_pc_only"})})}),`
`]}),`
`,e.jsx(i.h2,{id:"",children:e.jsx(s,{k:"doc_design_intent_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_splitter_design_intent"})}),`
`,e.jsx(i.h2,{id:"-1",children:e.jsx(s,{k:"doc_choice_matrix_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_splitter_choice_matrix_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(s,{k:"doc_component"})}),e.jsx("th",{children:e.jsx(s,{k:"doc_usage_scenario"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Splitter"})}),e.jsx("td",{children:e.jsx(s,{k:"doc_splitter_choice_self_when"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Grid"})}),e.jsx("td",{children:e.jsx(s,{k:"doc_splitter_choice_alt_when"})})]})]})]}),`
`,e.jsx(i.h2,{id:"-2",children:e.jsx(s,{k:"doc_anatomy_title"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(s,{k:"doc_splitter_anatomy_root"})}),e.jsx("li",{children:e.jsx(s,{k:"doc_splitter_anatomy_content"})})]}),`
`,e.jsx(i.h2,{id:"-3",children:e.jsx(s,{k:"doc_content_guidelines_title"})}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx(s,{k:"doc_splitter_content_guideline"})})}),`
`,e.jsx(i.h2,{id:"-4",children:e.jsx(s,{k:"doc_motion_spec_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_splitter_motion_desc"})}),`
`,e.jsx(i.h2,{id:"-5",children:e.jsx(s,{k:"doc_a11y_spec_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_splitter_a11y_desc"})}),`
`,e.jsx(i.h2,{id:"-6",children:e.jsx(s,{k:"doc_real_world_scenarios_title"})}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx(s,{k:"doc_scenario_dashboard_title"}),":"]}),e.jsx(s,{k:"doc_splitter_scenario_1"})]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx(s,{k:"doc_scenario_admin_title"}),":"]}),e.jsx(s,{k:"doc_splitter_scenario_2"})]})]}),`
`,e.jsx(i.h2,{id:"-7",children:e.jsx(s,{k:"doc_best_practices_title"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(s,{k:"doc_splitter_best_practice_1"})}),e.jsx("li",{children:e.jsx(s,{k:"doc_splitter_best_practice_2"})})]}),`
`,e.jsx(i.h2,{id:"-8",children:e.jsx(s,{k:"doc_usage"})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Splitter } from "wimui";

<Splitter orientation="horizontal">
  <Splitter.Panel defaultSize={30}>Left Content</Splitter.Panel>
  <Splitter.Handle />
  <Splitter.Panel defaultSize={70}>Right Content</Splitter.Panel>
</Splitter>;
`})}),`
`,e.jsx(i.h2,{id:"-9",children:e.jsx(s,{k:"doc_example"})}),`
`,e.jsx(i.h3,{id:"-10",children:e.jsx(s,{k:"doc_horizontal"})}),`
`,e.jsx(d,{of:n}),`
`,e.jsx(i.h3,{id:"-11",children:e.jsx(s,{k:"doc_vertical"})}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(i.h3,{id:"-12",children:e.jsx(s,{k:"doc_splitter_multi"})}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(i.h3,{id:"-13",children:e.jsx(s,{k:"doc_splitter_nested"})}),`
`,e.jsx(d,{of:_}),`
`,e.jsx(i.h3,{id:"-14",children:e.jsx(s,{k:"doc_splitter_constraints"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_splitter_constraints_desc"})}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(i.h2,{id:"-15",children:e.jsx(s,{k:"doc_props"})}),`
`,e.jsxs(i.h3,{id:"splitter-",children:["Splitter ",e.jsx(s,{k:"doc_props"})]}),`
`,e.jsx(x,{of:n}),`
`,e.jsx(i.h3,{id:"-16",children:e.jsx(s,{k:"doc_splitter_panel_props"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(s,{k:"doc_property"})}),e.jsx("th",{children:e.jsx(s,{k:"doc_type"})}),e.jsx("th",{children:e.jsx(s,{k:"doc_default"})}),e.jsx("th",{children:e.jsx(s,{k:"doc_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultSize"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(s,{k:"doc_splitter_p_def_size"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"minSize"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"0"})}),e.jsx("td",{children:e.jsx(s,{k:"doc_splitter_p_min_size"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"maxSize"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"100"})}),e.jsx("td",{children:e.jsx(s,{k:"doc_splitter_p_max_size"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(s,{k:"doc_content"})})]})]})]}),`
`,e.jsx(i.h3,{id:"-17",children:e.jsx(s,{k:"doc_splitter_handle_props"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(s,{k:"doc_property"})}),e.jsx("th",{children:e.jsx(s,{k:"doc_type"})}),e.jsx("th",{children:e.jsx(s,{k:"doc_default"})}),e.jsx("th",{children:e.jsx(s,{k:"doc_description"})})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(s,{k:"doc_splitter_p_handle_custom"})})]})})]})]})}function P(t={}){const{wrapper:i}={...c(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(r,{...t})}):r(t)}export{P as default};
