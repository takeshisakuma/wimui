import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-xXuD2LP4.js";import{M as a,T as t,D as d,P as x,a as _,C as o,S as j}from"./blocks-CIFgT73G.js";import{S as l,a as h,E as k,W as m,I as p}from"./Snackbar.stories-D0K2kmOC.js";import{T as s}from"./T-DuPEhfS0.js";import"./iframe-DzDEpXwh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnJqiaKL.js";import"./index-CsSgyaRa.js";import"./index-qjqfg5ym.js";import"./index-3JgSyORg.js";import"./Button-Di6w6xab.js";import"./index-CHdddvW5.js";import"./Icon-JKQaPkpc.js";import"./useTranslation-Dhq9g8tg.js";import"./FeedbackIcon-DQspeFGq.js";import"./FeedbackCloseButton-BfPib2F4.js";import"./i18nConstants-BpHxieg5.js";function e(c){const r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(t,{}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(s,{k:"doc_snackbar_title"})}),`
`,n.jsx(d,{}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_long_desc"})}),`
`,n.jsx(x,{}),`
`,n.jsx(_,{}),`
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
`,n.jsx(r.h2,{id:"-9",children:n.jsx(s,{k:"doc_variations"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_var_desc"})}),`
`,n.jsx(r.h3,{id:"-10",children:n.jsx(s,{k:"doc_success"})}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(r.h3,{id:"-11",children:n.jsx(s,{k:"doc_error"})}),`
`,n.jsx(o,{of:k}),`
`,n.jsx(r.h3,{id:"-12",children:n.jsx(s,{k:"doc_warning"})}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(r.h3,{id:"-13",children:n.jsx(s,{k:"doc_info"})}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(r.h2,{id:"-14",children:n.jsx(s,{k:"doc_snackbar_adv_title"})}),`
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
`,n.jsx(j,{})]})}function z(c={}){const{wrapper:r}={...i(),...c.components};return r?n.jsx(r,{...c,children:n.jsx(e,{...c})}):e(c)}export{z as default};
