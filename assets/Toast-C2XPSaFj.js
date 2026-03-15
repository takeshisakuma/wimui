import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-xXuD2LP4.js";import{M as c,T as d,D as a,P as _,a as x,C as e,S as j}from"./blocks-CIFgT73G.js";import{T as l,S as h,W as m,E as p}from"./Toast.stories-CVvO2FQu.js";import{T as n}from"./T-DuPEhfS0.js";import"./iframe-DzDEpXwh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnJqiaKL.js";import"./index-CsSgyaRa.js";import"./index-qjqfg5ym.js";import"./index-3JgSyORg.js";import"./index-CHdddvW5.js";import"./Transition-O7silrpj.js";import"./FeedbackIcon-DQspeFGq.js";import"./Icon-JKQaPkpc.js";import"./FeedbackCloseButton-BfPib2F4.js";import"./useTranslation-Dhq9g8tg.js";import"./Button-Di6w6xab.js";import"./i18nConstants-BpHxieg5.js";function r(t){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return s.jsxs(s.Fragment,{children:[s.jsx(c,{of:l}),`
`,s.jsx(d,{}),`
`,s.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:s.jsx(n,{k:"doc_toast_title"})}),`
`,s.jsx(a,{}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_long_desc"})}),`
`,s.jsx(_,{}),`
`,s.jsx(x,{}),`
`,s.jsx(o.h2,{id:"",children:s.jsx(n,{k:"doc_design_intent_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_design_intent"})}),`
`,s.jsx(o.h2,{id:"-1",children:s.jsx(n,{k:"doc_choice_matrix_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_choice_matrix_desc"})}),`
`,s.jsxs(o.p,{children:["| ",s.jsx(n,{k:"doc_component"})," | ",s.jsx(n,{k:"doc_usage_scenario"}),` |\r
| :--- | :--- |\r
| `,s.jsx(o.strong,{children:"Toast"})," | ",s.jsx(n,{k:"doc_toast_choice_toast_when"}),` |\r
| `,s.jsx(o.strong,{children:"Snackbar"})," | ",s.jsx(n,{k:"doc_toast_choice_snackbar_when"}),` |\r
| `,s.jsx(o.strong,{children:"Alert"})," | ",s.jsx(n,{k:"doc_toast_choice_alert_when"})," |"]}),`
`,s.jsx(o.h2,{id:"-2",children:s.jsx(n,{k:"doc_anatomy_title"})}),`
`,s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(n,{k:"doc_toast_anatomy_icon"})}),s.jsx("li",{children:s.jsx(n,{k:"doc_toast_anatomy_title"})}),s.jsx("li",{children:s.jsx(n,{k:"doc_toast_anatomy_message"})}),s.jsx("li",{children:s.jsx(n,{k:"doc_toast_anatomy_close"})})]}),`
`,s.jsx(o.h2,{id:"-3",children:s.jsx(n,{k:"doc_content_guidelines_title"})}),`
`,s.jsx("ul",{children:s.jsx("li",{children:s.jsx(n,{k:"doc_toast_content_concise"})})}),`
`,s.jsx(o.h2,{id:"-4",children:s.jsx(n,{k:"doc_motion_spec_title"})}),`
`,s.jsx("ul",{children:s.jsx("li",{children:s.jsx(n,{k:"doc_toast_motion_slide"})})}),`
`,s.jsx(o.h2,{id:"-5",children:s.jsx(n,{k:"doc_a11y_spec_title"})}),`
`,s.jsx("ul",{children:s.jsx("li",{children:s.jsx(n,{k:"doc_toast_a11y_status"})})}),`
`,s.jsx(o.h2,{id:"-6",children:s.jsx(n,{k:"doc_real_world_scenarios_title"})}),`
`,s.jsx(o.h3,{id:"-7",children:s.jsx(n,{k:"doc_scenario_save_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_scenario_save"})}),`
`,s.jsx(o.h3,{id:"-8",children:s.jsx(n,{k:"doc_scenario_copy_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_scenario_copy"})}),`
`,s.jsx(o.h2,{id:"-9",children:s.jsx(n,{k:"doc_toast_system_usage"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_system_usage_desc"})}),`
`,s.jsx(o.pre,{children:s.jsx(o.code,{className:"language-tsx",children:`import { ToastProvider, useToast } from "./Toast";\r
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
`,s.jsx(o.h2,{id:"-10",children:s.jsx(n,{k:"doc_variations"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_variants_desc"})}),`
`,s.jsx(o.h3,{id:"-11",children:s.jsx(n,{k:"doc_success"})}),`
`,s.jsx(e,{of:h}),`
`,s.jsx(o.h3,{id:"-12",children:s.jsx(n,{k:"doc_warning"})}),`
`,s.jsx(e,{of:m}),`
`,s.jsx(o.h3,{id:"-13",children:s.jsx(n,{k:"doc_error"})}),`
`,s.jsx(e,{of:p}),`
`,s.jsx(j,{})]})}function F(t={}){const{wrapper:o}={...i(),...t.components};return o?s.jsx(o,{...t,children:s.jsx(r,{...t})}):r(t)}export{F as default};
