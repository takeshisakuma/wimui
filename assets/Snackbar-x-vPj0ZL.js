import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Cl4Pv_I0.js";import{M as i,C as r,a as t}from"./blocks-D96ijgRs.js";import{S as d,D as x,W as j,a as _,b as h,E as k,c as p,I as l,d as m}from"./Snackbar.stories-BG7at0HJ.js";import{T as s}from"./T-CBEvO_ht.js";import"./iframe-C80AEei6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-u04oYgkM.js";import"./index-ByeO4eTZ.js";import"./index-BAf6R9zl.js";import"./index-VVQVh2nq.js";import"./Button-W2TybLPR.js";import"./index-Wh6O2QWQ.js";import"./Icon-CfsUE3LP.js";import"./useTranslation-Cpo6ITo8.js";import"./FeedbackIcon-ufRuZQ4h.js";import"./FeedbackCloseButton-D7lftBK7.js";import"./i18nConstants-BpHxieg5.js";function a(c){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",pre:"pre",...e(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:d}),`
`,n.jsx(o.h1,{id:"snackbar",children:"Snackbar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(s,{k:"doc_snackbar_title"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_long_desc"})}),`
`,n.jsx(o.h2,{id:"",children:n.jsx(s,{k:"doc_basic_usage"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_usage_basic_desc"})}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(o.h2,{id:"-1",children:n.jsx(s,{k:"doc_snackbar_usage_action"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_usage_action_desc"})}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(o.h2,{id:"-2",children:n.jsx(s,{k:"doc_snackbar_usage_close"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_usage_close_desc"})}),`
`,n.jsx(r,{of:_}),`
`,n.jsx(o.h2,{id:"-3",children:n.jsx(s,{k:"doc_variations"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_var_desc"})}),`
`,n.jsx(o.h3,{id:"-4",children:n.jsx(s,{k:"doc_success"})}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(o.h3,{id:"-5",children:n.jsx(s,{k:"doc_error"})}),`
`,n.jsx(r,{of:k}),`
`,n.jsx(o.h3,{id:"-6",children:n.jsx(s,{k:"doc_warning"})}),`
`,n.jsx(r,{of:p}),`
`,n.jsx(o.h3,{id:"-7",children:n.jsx(s,{k:"doc_info"})}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(o.h3,{id:"-8",children:n.jsx(s,{k:"doc_interactive_demo"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_usage_interactive_desc"})}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(o.hr,{}),`
`,n.jsx(o.h2,{id:"-9",children:n.jsx(s,{k:"doc_snackbar_adv_title"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_adv_desc"})}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { SnackbarProvider, useSnackbar } from "./Snackbar";
import { T } from "../T";

const App = () => (
  <SnackbarProvider>
    <MyComponent />
  </SnackbarProvider>
);

const MyComponent = () => {
  const { showMessage } = useSnackbar();

  return (
    <button
      onClick={() =>
        showMessage({
          message: <T k="doc_snackbar_saved_msg" />,
          variant: "success",
          actionLabel: <T k="doc_close" />,
        })
      }
    >
      <p><T k="doc_snackbar_show_btn" /></p>
    </button>
  );
};
`})}),`
`,n.jsx(o.h2,{id:"-10",children:n.jsx(s,{k:"doc_props"})}),`
`,n.jsx(t,{})]})}function L(c={}){const{wrapper:o}={...e(),...c.components};return o?n.jsx(o,{...c,children:n.jsx(a,{...c})}):a(c)}export{L as default};
