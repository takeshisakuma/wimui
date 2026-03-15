import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Bc4BInNb.js";import{M as r,T as d,D as _,P as a,a as x,C as e,S as j}from"./blocks-TnLz58s7.js";import{T as l,S as h,W as p,E as m}from"./Toast.stories-yug34etE.js";import{T as n}from"./T-swAsn_9k.js";import"./iframe-BnGmj9_-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-joLxKjBL.js";import"./index-CuzJ-B4l.js";import"./index-LMFUUKZq.js";import"./index-By2e_LDN.js";import"./index-BRP2Ilxn.js";import"./Transition-DF-fKBUr.js";import"./FeedbackIcon-BBooU6CB.js";import"./Icon-CTeXjsnO.js";import"./FeedbackCloseButton-CJqRUcPN.js";import"./useTranslation-CPTvk89p.js";import"./Button-BRKPxRu0.js";import"./i18nConstants-BpHxieg5.js";function i(o){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{of:l}),`
`,s.jsx(d,{}),`
`,s.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:s.jsx(n,{k:"doc_toast_title"})}),`
`,s.jsx(_,{}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_long_desc"})}),`
`,s.jsx(a,{}),`
`,s.jsx(x,{}),`
`,s.jsx(t.h2,{id:"",children:s.jsx(n,{k:"doc_design_intent_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_design_intent"})}),`
`,s.jsx(t.h2,{id:"-1",children:s.jsx(n,{k:"doc_choice_matrix_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_choice_matrix_desc"})}),`
`,s.jsxs(t.p,{children:["| ",s.jsx(n,{k:"doc_component"})," | ",s.jsx(n,{k:"doc_usage_scenario"}),` |\r
| :--- | :--- |\r
| `,s.jsx(t.strong,{children:"Toast"})," | ",s.jsx(n,{k:"doc_toast_choice_toast_when"}),` |\r
| `,s.jsx(t.strong,{children:"Snackbar"})," | ",s.jsx(n,{k:"doc_toast_choice_snackbar_when"}),` |\r
| `,s.jsx(t.strong,{children:"Alert"})," | ",s.jsx(n,{k:"doc_toast_choice_alert_when"})," |"]}),`
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
`,s.jsx(e,{of:h}),`
`,s.jsx(t.h3,{id:"-13",children:s.jsx(n,{k:"doc_warning"})}),`
`,s.jsx(e,{of:p}),`
`,s.jsx(t.h3,{id:"-14",children:s.jsx(n,{k:"doc_error"})}),`
`,s.jsx(e,{of:m}),`
`,s.jsx(j,{})]})}function F(o={}){const{wrapper:t}={...c(),...o.components};return t?s.jsx(t,{...o,children:s.jsx(i,{...o})}):i(o)}export{F as default};
