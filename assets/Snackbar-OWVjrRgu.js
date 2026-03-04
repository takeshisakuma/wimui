import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-38Pry2Ly.js";import{M as i,C as o,a as d}from"./blocks-Dh5BOZqK.js";import{S as t,D as x,W as j,a as _,b as h,E as k,c as l,I as p,d as m}from"./Snackbar.stories-C8wz-T8h.js";import{T as s}from"./T-BqnUr1O_.js";import"./iframe-D4E_IFvf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-nh54FCmh.js";import"./index-BitMbDxF.js";import"./index-Dv2aO7jb.js";import"./index-BUvtIhUz.js";import"./Icon-q4QA7_pD.js";import"./index-c_hinErY.js";import"./Button-DpXqGGPZ.js";import"./useTranslation-DU1rn0mm.js";function a(r){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",pre:"pre",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:t}),`
`,n.jsx(c.h1,{id:"snackbar",children:"Snackbar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(s,{k:"doc_snackbar_title"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_long_desc"})}),`
`,n.jsx(c.h2,{id:"",children:n.jsx(s,{k:"doc_basic_usage"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_usage_basic_desc"})}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(c.h2,{id:"-1",children:n.jsx(s,{k:"doc_snackbar_usage_action"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_usage_action_desc"})}),`
`,n.jsx(o,{of:j}),`
`,n.jsx(c.h2,{id:"-2",children:n.jsx(s,{k:"doc_snackbar_usage_close"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_usage_close_desc"})}),`
`,n.jsx(o,{of:_}),`
`,n.jsx(c.h2,{id:"-3",children:n.jsx(s,{k:"doc_variations"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_var_desc"})}),`
`,n.jsx(c.h3,{id:"-4",children:n.jsx(s,{k:"doc_success"})}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(c.h3,{id:"-5",children:n.jsx(s,{k:"doc_error"})}),`
`,n.jsx(o,{of:k}),`
`,n.jsx(c.h3,{id:"-6",children:n.jsx(s,{k:"doc_warning"})}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(c.h3,{id:"-7",children:n.jsx(s,{k:"doc_info"})}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(c.h3,{id:"-8",children:n.jsx(s,{k:"doc_interactive_demo"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_usage_interactive_desc"})}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(c.hr,{}),`
`,n.jsx(c.h2,{id:"-9",children:n.jsx(s,{k:"doc_snackbar_adv_title"})}),`
`,n.jsx("p",{children:n.jsx(s,{k:"doc_snackbar_adv_desc"})}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-tsx",children:`import { SnackbarProvider, useSnackbar } from "./Snackbar";
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
`,n.jsx(c.h2,{id:"-10",children:n.jsx(s,{k:"doc_props"})}),`
`,n.jsx(d,{})]})}function P(r={}){const{wrapper:c}={...e(),...r.components};return c?n.jsx(c,{...r,children:n.jsx(a,{...r})}):a(r)}export{P as default};
