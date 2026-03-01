import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Qc9b23kE.js";import{M as i,C as c,a as t}from"./blocks-Cnn37VBH.js";import{S as d,D as x,W as j,a as h,b as _,E as l,c as p,I as k,d as m}from"./Snackbar.stories-C-377o3A.js";import{T as o}from"./T-DvLxYKZz.js";import"./iframe-4kQ8xNvr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B73ZmNqE.js";import"./index-UTB4rSFB.js";import"./index-B5r4f4jS.js";import"./index-CpzCQ-QW.js";import"./Icon-bh-ccXg7.js";import"./index-Y00k1ZS7.js";import"./Button-BceFFgd2.js";import"./useTranslation-BF3eF4oS.js";function a(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:d}),`
`,n.jsx(s.h1,{id:"snackbar",children:"Snackbar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(o,{k:"doc_snackbar_title"})}),`
`,n.jsx("p",{children:n.jsx(o,{k:"doc_snackbar_long_desc"})}),`
`,n.jsx(s.h2,{id:"",children:n.jsx(o,{k:"doc_basic_usage"})}),`
`,n.jsxs(s.p,{children:[n.jsx(o,{k:"doc_snackbar_usage_basic_desc"}),` (Wait, I'll use common or add)
Specify a message to display.`]}),`
`,n.jsx(c,{of:x}),`
`,n.jsx(s.h2,{id:"-1",children:n.jsx(o,{k:"doc_snackbar_usage_action"})}),`
`,n.jsx("p",{children:n.jsx(o,{k:"doc_snackbar_usage_action_desc"})}),`
`,n.jsx(c,{of:j}),`
`,n.jsx(s.h2,{id:"-2",children:n.jsx(o,{k:"doc_snackbar_usage_close"})}),`
`,n.jsx("p",{children:n.jsx(o,{k:"doc_snackbar_usage_close_desc"})}),`
`,n.jsx(c,{of:h}),`
`,n.jsx(s.h2,{id:"-3",children:n.jsx(o,{k:"doc_variations"})}),`
`,n.jsx("p",{children:n.jsx(o,{k:"doc_snackbar_var_desc"})}),`
`,n.jsx(s.h3,{id:"-4",children:n.jsx(o,{k:"doc_success"})}),`
`,n.jsx(c,{of:_}),`
`,n.jsx(s.h3,{id:"-5",children:n.jsx(o,{k:"doc_error"})}),`
`,n.jsx(c,{of:l}),`
`,n.jsx(s.h3,{id:"-6",children:n.jsx(o,{k:"doc_warning"})}),`
`,n.jsx(c,{of:p}),`
`,n.jsx(s.h3,{id:"-7",children:n.jsx(o,{k:"doc_info"})}),`
`,n.jsx(c,{of:k}),`
`,n.jsx(s.h3,{id:"-8",children:n.jsx(o,{k:"doc_interactive_demo"})}),`
`,n.jsx(s.p,{children:`Actually works. (Wait, I'll use common or add)
You can see it in action.`}),`
`,n.jsx(c,{of:m}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"-9",children:n.jsx(o,{k:"doc_snackbar_adv_title"})}),`
`,n.jsx("p",{children:n.jsx(o,{k:"doc_snackbar_adv_desc"})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import { SnackbarProvider, useSnackbar } from "./Snackbar";
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
`,n.jsx(s.h2,{id:"-10",children:n.jsx(o,{k:"doc_props"})}),`
`,n.jsx(t,{})]})}function E(r={}){const{wrapper:s}={...e(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(a,{...r})}):a(r)}export{E as default};
