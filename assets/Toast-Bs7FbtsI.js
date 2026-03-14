import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Jj8evLNo.js";import{M as d,T as c,D as x,C as t,a as j,S as a}from"./blocks-YI1WEKiH.js";import{T as h,D as l,I as _,a as p,S as m,W as u,E as k}from"./Toast.stories-BSY4XJvh.js";import{T as n}from"./T-BLD8G90G.js";import"./iframe-BMQvev7V.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2mDt5C8.js";import"./index-DtvcjPD2.js";import"./index-Eo2xDiLY.js";import"./index-zLDuGV4P.js";import"./index-DVfFB0Qc.js";import"./Transition-WGOxQfQJ.js";import"./FeedbackIcon-LEZQhmpQ.js";import"./Icon-DaVWz0dV.js";import"./FeedbackCloseButton-BNq3uI91.js";import"./useTranslation-XEwyYNrX.js";import"./Button-CajqxNHZ.js";import"./i18nConstants-BpHxieg5.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",pre:"pre",...r(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(d,{of:h}),`
`,s.jsx(c,{}),`
`,s.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:s.jsx(n,{k:"doc_toast_title"})}),`
`,s.jsx(x,{}),`
`,s.jsx(o.h2,{id:"",children:s.jsx(n,{k:"doc_guidelines_title"})}),`
`,s.jsx(o.h3,{id:"-1",children:s.jsx(n,{k:"doc_guideline_best_practices"})}),`
`,s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(n,{k:"doc_toast_best_practice_1"})}),s.jsx("li",{children:s.jsx(n,{k:"doc_toast_best_practice_2"})}),s.jsx("li",{children:s.jsx(n,{k:"doc_toast_best_practice_3"})})]}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_long_desc"})}),`
`,s.jsx(o.h2,{id:"-2",children:s.jsx(n,{k:"doc_basic_usage"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_basic_usage_desc"})}),`
`,s.jsx(t,{of:l}),`
`,s.jsx(o.h2,{id:"-3",children:s.jsx(n,{k:"doc_toast_system_usage"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_system_usage_desc"})}),`
`,s.jsx(o.pre,{children:s.jsx(o.code,{className:"language-tsx",children:`import { ToastProvider, useToast } from "./Toast";
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
`,s.jsx(o.h3,{id:"-4",children:s.jsx(n,{k:"doc_toast_interactive_example"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_interactive_example_desc"})}),`
`,s.jsx(t,{of:_}),`
`,s.jsx(o.h2,{id:"-5",children:s.jsx(n,{k:"doc_variations"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_variants_desc"})}),`
`,s.jsx(o.h3,{id:"-6",children:s.jsx(n,{k:"doc_info"})}),`
`,s.jsx(t,{of:p}),`
`,s.jsx(o.h3,{id:"-7",children:s.jsx(n,{k:"doc_success"})}),`
`,s.jsx(t,{of:m}),`
`,s.jsx(o.h3,{id:"-8",children:s.jsx(n,{k:"doc_warning"})}),`
`,s.jsx(t,{of:u}),`
`,s.jsx(o.h3,{id:"-9",children:s.jsx(n,{k:"doc_error"})}),`
`,s.jsx(t,{of:k}),`
`,s.jsx(o.h2,{id:"-10",children:s.jsx(n,{k:"doc_props"})}),`
`,s.jsx(o.h3,{id:"-11",children:s.jsx(n,{k:"doc_toast_props"})}),`
`,s.jsx(j,{}),`
`,s.jsx(o.h3,{id:"-12",children:s.jsx(n,{k:"doc_toast_provider_props"})}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx(n,{k:"doc_prop"})}),s.jsx("th",{children:s.jsx(n,{k:"doc_type"})}),s.jsx("th",{children:s.jsx(n,{k:"doc_default"})}),s.jsx("th",{children:s.jsx(n,{k:"doc_description"})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"children"})}),s.jsx("td",{children:s.jsx("code",{children:"ReactNode"})}),s.jsx("td",{children:"-"}),s.jsx("td",{children:s.jsx(n,{k:"doc_toast_provider_prop_children_desc"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"position"})}),s.jsx("td",{children:s.jsx("code",{children:"ToastPosition"})}),s.jsx("td",{children:s.jsx("code",{children:'"top-right"'})}),s.jsx("td",{children:s.jsx(n,{k:"doc_toast_provider_prop_position_desc"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"duration"})}),s.jsx("td",{children:s.jsx("code",{children:"number"})}),s.jsx("td",{children:s.jsx("code",{children:"3000"})}),s.jsx("td",{children:s.jsx(n,{k:"doc_toast_provider_prop_duration_desc"})})]})]})]}),`
`,s.jsx(a,{})]})}function A(e={}){const{wrapper:o}={...r(),...e.components};return o?s.jsx(o,{...e,children:s.jsx(i,{...e})}):i(e)}export{A as default};
