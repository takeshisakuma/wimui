import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-CG91e243.js";import{M as i,C as c,a as t}from"./blocks-s02UGL5Q.js";import{S as d,D as x,W as j,a as _,b as h,E as k,c as p,I as l,d as m}from"./Snackbar.stories-DoQrUQiM.js";import{T as s}from"./T-Y5paWcAE.js";import"./iframe-CKKDYfjM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2cbt4Hmg.js";import"./index-D-5DEcPl.js";import"./index-qKPWTIfQ.js";import"./index-8w_Yn6OU.js";import"./Button-BLRjZ0Hy.js";import"./index-K_u7tV9x.js";import"./Icon-DuRhDIXo.js";import"./useTranslation-D80Uyf_x.js";import"./FeedbackIcon-BEf6jCP7.js";import"./FeedbackCloseButton-C-NL0sXu.js";function a(r){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",pre:"pre",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:d}),`
`,n.jsx(o.h1,{id:"snackbar",children:"Snackbar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(s,{k:"doc_snackbar_title"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_long_desc"})}),`
`,n.jsx(o.h2,{id:"",children:n.jsx(s,{k:"doc_basic_usage"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_usage_basic_desc"})}),`
`,n.jsx(c,{of:x}),`
`,n.jsx(o.h2,{id:"-1",children:n.jsx(s,{k:"doc_snackbar_usage_action"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_usage_action_desc"})}),`
`,n.jsx(c,{of:j}),`
`,n.jsx(o.h2,{id:"-2",children:n.jsx(s,{k:"doc_snackbar_usage_close"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_usage_close_desc"})}),`
`,n.jsx(c,{of:_}),`
`,n.jsx(o.h2,{id:"-3",children:n.jsx(s,{k:"doc_variations"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_var_desc"})}),`
`,n.jsx(o.h3,{id:"-4",children:n.jsx(s,{k:"doc_success"})}),`
`,n.jsx(c,{of:h}),`
`,n.jsx(o.h3,{id:"-5",children:n.jsx(s,{k:"doc_error"})}),`
`,n.jsx(c,{of:k}),`
`,n.jsx(o.h3,{id:"-6",children:n.jsx(s,{k:"doc_warning"})}),`
`,n.jsx(c,{of:p}),`
`,n.jsx(o.h3,{id:"-7",children:n.jsx(s,{k:"doc_info"})}),`
`,n.jsx(c,{of:l}),`
`,n.jsx(o.h3,{id:"-8",children:n.jsx(s,{k:"doc_interactive_demo"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_usage_interactive_desc"})}),`
`,n.jsx(c,{of:m}),`
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
`,n.jsx(t,{})]})}function A(r={}){const{wrapper:o}={...e(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(a,{...r})}):a(r)}export{A as default};
