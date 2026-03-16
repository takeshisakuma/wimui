import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Xbs8vuYb.js";import{M as a,T as t,D as d,P as _,a as x,C as e,S as j}from"./blocks-BDiLT288.js";import{S as l,a as h,E as k,W as p,I as m}from"./Snackbar.stories-DEXeX6o9.js";import{T as s}from"./T-B0GQsxj2.js";import"./iframe-BROZIFWR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeGcYQMM.js";import"./index-V_QwhSEQ.js";import"./index-Bfqmm18q.js";import"./index-BtzVS0FN.js";import"./Button-KHyiNVbB.js";import"./index-CcYSKHnQ.js";import"./Icon-CyJ-O3si.js";import"./useTranslation-BRvuTCUW.js";import"./FeedbackIcon-BHaDymMf.js";import"./FeedbackCloseButton-cjTFGCIA.js";import"./i18nConstants-BpHxieg5.js";function i(c){const r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...o(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(t,{}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(s,{k:"doc_snackbar_title"})}),`
`,n.jsx(d,{}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_long_desc"})}),`
`,n.jsx(_,{}),`
`,n.jsx(x,{}),`
`,n.jsx(r.h2,{id:"",children:n.jsx(s,{k:"doc_design_intent_title"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_design_intent"})}),`
`,n.jsx(r.h2,{id:"-1",children:n.jsx(s,{k:"doc_choice_matrix_title"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_choice_matrix_desc"})}),`
`,n.jsxs(r.p,{children:["| ",n.jsx(s,{k:"doc_component"})," | ",n.jsx(s,{k:"doc_usage_scenario"}),` |\r
| :--- | :--- |\r
| `,n.jsx(r.strong,{children:"Snackbar"})," | ",n.jsx(s,{k:"doc_snackbar_choice_snackbar_when"}),` |\r
| `,n.jsx(r.strong,{children:"Toast"})," | ",n.jsx(s,{k:"doc_snackbar_choice_toast_when"}),` |\r
| `,n.jsx(r.strong,{children:"Dialog"})," | ",n.jsx(s,{k:"doc_snackbar_choice_dialog_when"})," |"]}),`
`,n.jsx(r.h2,{id:"-2",children:n.jsx(s,{k:"doc_anatomy_title"})}),`
`,n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx(s,{k:"doc_snackbar_anatomy_message"})}),n.jsx("li",{children:n.jsx(s,{k:"doc_snackbar_anatomy_action"})}),n.jsx("li",{children:n.jsx(s,{k:"doc_snackbar_anatomy_close"})})]}),`
`,n.jsx(r.h2,{id:"-3",children:n.jsx(s,{k:"doc_content_guidelines_title"})}),`
`,n.jsx("ul",{children:n.jsx("li",{children:n.jsx(s,{k:"doc_snackbar_content_one_action"})})}),`
`,n.jsx(r.h2,{id:"-4",children:n.jsx(s,{k:"doc_motion_spec_title"})}),`
`,n.jsx("ul",{children:n.jsx("li",{children:n.jsx(s,{k:"doc_snackbar_motion_up"})})}),`
`,n.jsx(r.h2,{id:"-5",children:n.jsx(s,{k:"doc_a11y_spec_title"})}),`
`,n.jsx("ul",{children:n.jsx("li",{children:n.jsx(s,{k:"doc_snackbar_a11y_polite"})})}),`
`,n.jsx(r.h2,{id:"-6",children:n.jsx(s,{k:"doc_real_world_scenarios_title"})}),`
`,n.jsx(r.h3,{id:"-7",children:n.jsx(s,{k:"doc_scenario_undo_title"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_scenario_undo"})}),`
`,n.jsx(r.h3,{id:"-8",children:n.jsx(s,{k:"doc_scenario_refresh_title"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_scenario_refresh"})}),`
`,n.jsx(r.h2,{id:"-9",children:n.jsx(s,{k:"doc_best_practices_title"})}),`
`,n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx(s,{k:"doc_snackbar_best_practice_1"})}),n.jsx("li",{children:n.jsx(s,{k:"doc_snackbar_best_practice_2"})})]}),`
`,n.jsx(r.h2,{id:"-10",children:n.jsx(s,{k:"doc_variations"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_var_desc"})}),`
`,n.jsx(r.h3,{id:"-11",children:n.jsx(s,{k:"doc_success"})}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(r.h3,{id:"-12",children:n.jsx(s,{k:"doc_error"})}),`
`,n.jsx(e,{of:k}),`
`,n.jsx(r.h3,{id:"-13",children:n.jsx(s,{k:"doc_warning"})}),`
`,n.jsx(e,{of:p}),`
`,n.jsx(r.h3,{id:"-14",children:n.jsx(s,{k:"doc_info"})}),`
`,n.jsx(e,{of:m}),`
`,n.jsx(r.h2,{id:"-15",children:n.jsx(s,{k:"doc_snackbar_adv_title"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_adv_desc"})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { SnackbarProvider, useSnackbar } from "./Snackbar";\r
\r
const MyComponent = () => {\r
  const { showMessage } = useSnackbar();\r
\r
  return (\r
    <button\r
      onClick={() =>\r
        showMessage({\r
          message: "Data saved",\r
          variant: "success",\r
          actionLabel: "Undo",\r
        })\r
      }\r
    >\r
      Show Snackbar\r
    </button>\r
  );\r
};
`})}),`
`,n.jsx(j,{})]})}function z(c={}){const{wrapper:r}={...o(),...c.components};return r?n.jsx(r,{...c,children:n.jsx(i,{...c})}):i(c)}export{z as default};
