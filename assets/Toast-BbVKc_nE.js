import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Qc9b23kE.js";import{M as c,T as d,C as t,a,S as x}from"./blocks-Cnn37VBH.js";import{T as h,D as j,I as l,a as p,S as m,W as _,E as u}from"./Toast.stories-CLR22QM_.js";import{T as o}from"./T-DvLxYKZz.js";import"./iframe-4kQ8xNvr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B73ZmNqE.js";import"./index-UTB4rSFB.js";import"./index-B5r4f4jS.js";import"./index-CpzCQ-QW.js";import"./index-Y00k1ZS7.js";import"./Transition-DHJPGRVp.js";import"./Icon-bh-ccXg7.js";import"./Button-BceFFgd2.js";import"./useTranslation-BF3eF4oS.js";function i(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(c,{of:h}),`
`,s.jsx(d,{}),`
`,s.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:s.jsx(o,{k:"doc_toast_title"})}),`
`,s.jsx("p",{children:s.jsx(o,{k:"doc_toast_long_desc"})}),`
`,s.jsx(n.h2,{id:"",children:s.jsx(o,{k:"doc_basic_usage"})}),`
`,s.jsx("p",{children:s.jsx(o,{k:"doc_toast_basic_usage_desc"})}),`
`,s.jsx(t,{of:j}),`
`,s.jsx(n.h2,{id:"-1",children:s.jsx(o,{k:"doc_toast_system_usage"})}),`
`,s.jsx("p",{children:s.jsx(o,{k:"doc_toast_system_usage_desc"})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-tsx",children:`import { ToastProvider, useToast } from "./Toast";
import { T } from "../T";

const App = () => (
  <ToastProvider position="bottom-right">
    <MyComponent />
  </ToastProvider>
);

const MyComponent = () => {
  const { show } = useToast();

  return (
    <button
      onClick={() =>
        show({
          title: "Success",
          description: "Data has been successfully saved.",
          variant: "success",
        })
      }
    >
      Show Toast
    </button>
  );
};
`})}),`
`,s.jsx(n.h3,{id:"-2",children:s.jsx(o,{k:"doc_toast_interactive_example"})}),`
`,s.jsx("p",{children:s.jsx(o,{k:"doc_toast_interactive_example_desc"})}),`
`,s.jsx(t,{of:l}),`
`,s.jsx(n.h2,{id:"-3",children:s.jsx(o,{k:"doc_variations"})}),`
`,s.jsx("p",{children:s.jsx(o,{k:"doc_toast_variants_desc"})}),`
`,s.jsx(n.h3,{id:"-4",children:s.jsx(o,{k:"doc_info"})}),`
`,s.jsx(t,{of:p}),`
`,s.jsx(n.h3,{id:"-5",children:s.jsx(o,{k:"doc_success"})}),`
`,s.jsx(t,{of:m}),`
`,s.jsx(n.h3,{id:"-6",children:s.jsx(o,{k:"doc_warning"})}),`
`,s.jsx(t,{of:_}),`
`,s.jsx(n.h3,{id:"-7",children:s.jsx(o,{k:"doc_error"})}),`
`,s.jsx(t,{of:u}),`
`,s.jsx(n.h2,{id:"-8",children:s.jsx(o,{k:"doc_props"})}),`
`,s.jsx(n.h3,{id:"-9",children:s.jsx(o,{k:"doc_toast_props"})}),`
`,s.jsx(a,{}),`
`,s.jsx(n.h3,{id:"-10",children:s.jsx(o,{k:"doc_toast_provider_props"})}),`
`,s.jsxs(n.p,{children:[`| Prop       | Type            | Default       | Description                                                                                                |
| :--------- | :-------------- | :------------ | :--------------------------------------------------------------------------------------------------------- |
| `,s.jsx(n.code,{children:"children"})," | ",s.jsx(n.code,{children:"ReactNode"}),`     | -             | Children elements to be rendered within the provider                                                                           |
| `,s.jsx(n.code,{children:"position"})," | ",s.jsx(n.code,{children:"ToastPosition"})," | ",s.jsx(n.code,{children:'"top-right"'})," | Toast display position (",s.jsx(n.code,{children:"top-right"}),", ",s.jsx(n.code,{children:"top-left"}),", ",s.jsx(n.code,{children:"top-center"}),", ",s.jsx(n.code,{children:"bottom-right"}),", ",s.jsx(n.code,{children:"bottom-left"}),", ",s.jsx(n.code,{children:"bottom-center"}),`) |
| `,s.jsx(n.code,{children:"duration"})," | ",s.jsx(n.code,{children:"number"}),"        | ",s.jsx(n.code,{children:"3000"}),"        | Duration for which the toast is displayed (in milliseconds)                                                                         |"]}),`
`,s.jsx(x,{})]})}function N(e={}){const{wrapper:n}={...r(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(i,{...e})}):i(e)}export{N as default};
