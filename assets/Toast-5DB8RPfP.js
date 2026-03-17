import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-C2SHUO_A.js";import{M as r,T as d,D as x,P as a,a as j,C as o,S as _}from"./blocks-s5ForvvM.js";import{T as l,S as h,W as m,E as p}from"./Toast.stories-Cq2O5Svw.js";import{T as n}from"./T-QPAjEbnX.js";import"./iframe-DqYBP9z6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DPA5NbhZ.js";import"./index-B1XFWKzi.js";import"./index-CP7gMDpa.js";import"./index-CkpP_Uyt.js";import"./index-DTc8ljRI.js";import"./Transition-DHasdwKu.js";import"./FeedbackIcon-CfPYIHwq.js";import"./Icon-D0d7jZEz.js";import"./FeedbackCloseButton-0En-9fQ-.js";import"./useTranslation-BBRUnBtc.js";import"./Button-BDDpFAZu.js";import"./i18nConstants-BpHxieg5.js";function i(e){const t={code:"code",h2:"h2",h3:"h3",pre:"pre",...c(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{of:l}),`
`,s.jsx(d,{}),`
`,s.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:s.jsx(n,{k:"doc_toast_title"})}),`
`,s.jsx(x,{}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_long_desc"})}),`
`,s.jsx(a,{}),`
`,s.jsx(j,{}),`
`,s.jsx(t.h2,{id:"",children:s.jsx(n,{k:"doc_design_intent_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_design_intent"})}),`
`,s.jsx(t.h2,{id:"-1",children:s.jsx(n,{k:"doc_choice_matrix_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_choice_matrix_desc"})}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx(n,{k:"doc_component"})}),s.jsx("th",{children:s.jsx(n,{k:"doc_usage_scenario"})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("b",{children:"Toast"})}),s.jsx("td",{children:s.jsx(n,{k:"doc_toast_choice_toast_when"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("b",{children:"Snackbar"})}),s.jsx("td",{children:s.jsx(n,{k:"doc_toast_choice_snackbar_when"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("b",{children:"Alert"})}),s.jsx("td",{children:s.jsx(n,{k:"doc_toast_choice_alert_when"})})]})]})]}),`
`,s.jsx(t.h2,{id:"-2",children:s.jsx(n,{k:"doc_anatomy_title"})}),`
`,s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(n,{k:"doc_toast_anatomy_icon"})}),s.jsx("li",{children:s.jsx(n,{k:"doc_toast_anatomy_title"})}),s.jsx("li",{children:s.jsx(n,{k:"doc_toast_anatomy_message"})}),s.jsx("li",{children:s.jsx(n,{k:"doc_toast_anatomy_close"})})]}),`
`,s.jsx(t.h2,{id:"-3",children:s.jsx(n,{k:"doc_content_guidelines_title"})}),`
`,s.jsx("ul",{children:s.jsx("li",{children:s.jsx(n,{k:"doc_toast_content_concise"})})}),`
`,s.jsx(t.h2,{id:"-4",children:s.jsx(n,{k:"doc_motion_spec_title"})}),`
`,s.jsx("ul",{children:s.jsx("li",{children:s.jsx(n,{k:"doc_toast_motion_slide"})})}),`
`,s.jsx(t.h2,{id:"-5",children:s.jsx(n,{k:"doc_a11y_spec_title"})}),`
`,s.jsx("ul",{children:s.jsx("li",{children:s.jsx(n,{k:"doc_toast_a11y_status"})})}),`
`,s.jsx(t.h2,{id:"-6",children:s.jsx(n,{k:"doc_real_world_scenarios_title"})}),`
`,s.jsx(t.h3,{id:"-7",children:s.jsx(n,{k:"doc_scenario_save_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_scenario_save"})}),`
`,s.jsx(t.h3,{id:"-8",children:s.jsx(n,{k:"doc_scenario_copy_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_scenario_copy"})}),`
`,s.jsx(t.h2,{id:"-9",children:s.jsx(n,{k:"doc_best_practices_title"})}),`
`,s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(n,{k:"doc_toast_best_practice_1"})}),s.jsx("li",{children:s.jsx(n,{k:"doc_toast_best_practice_2"})})]}),`
`,s.jsx(t.h2,{id:"-10",children:s.jsx(n,{k:"doc_toast_system_usage"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_system_usage_desc"})}),`
`,s.jsx(t.pre,{children:s.jsx(t.code,{className:"language-tsx",children:`import { ToastProvider, useToast } from "./Toast";\r
\r
const MyComponent = () => {\r
  const { show } = useToast();\r
\r
  return (\r
    <button\r
      onClick={() =>\r
        show({\r
          title: "Success",\r
          description: "Data has been successfully saved.",\r
          variant: "success",\r
        })\r
      }\r
    >\r
      Show Toast\r
    </button>\r
  );\r
};
`})}),`
`,s.jsx(t.h2,{id:"-11",children:s.jsx(n,{k:"doc_variations"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_variants_desc"})}),`
`,s.jsx(t.h3,{id:"-12",children:s.jsx(n,{k:"doc_success"})}),`
`,s.jsx(o,{of:h}),`
`,s.jsx(t.h3,{id:"-13",children:s.jsx(n,{k:"doc_warning"})}),`
`,s.jsx(o,{of:m}),`
`,s.jsx(t.h3,{id:"-14",children:s.jsx(n,{k:"doc_error"})}),`
`,s.jsx(o,{of:p}),`
`,s.jsx(_,{})]})}function F(e={}){const{wrapper:t}={...c(),...e.components};return t?s.jsx(t,{...e,children:s.jsx(i,{...e})}):i(e)}export{F as default};
