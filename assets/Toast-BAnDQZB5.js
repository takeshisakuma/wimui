import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-CcGuodko.js";import{M as d,T as c,D as x,C as t,a as j,S as a}from"./blocks-5HZkeV9G.js";import{T as h,D as l,I as _,a as p,S as m,W as u,E as k}from"./Toast.stories-DBPG5U4n.js";import{T as n}from"./T-D1RPXYEF.js";import"./iframe-DtwnyzFc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4iIu0Ck.js";import"./index-7TH5MNU4.js";import"./index-B8C8inzl.js";import"./index-DMp-KfsK.js";import"./index-DWTvJvSx.js";import"./Transition-DKhb8UaF.js";import"./FeedbackIcon-Y6IT9rPR.js";import"./Icon-CPLASYuL.js";import"./FeedbackCloseButton-CdwkLoZ2.js";import"./useTranslation-BJQcmf5i.js";import"./Button-CE01zq8d.js";function i(o){const e={code:"code",h2:"h2",h3:"h3",pre:"pre",...r(),...o.components};return s.jsxs(s.Fragment,{children:[s.jsx(d,{of:h}),`
`,s.jsx(c,{}),`
`,s.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:s.jsx(n,{k:"doc_toast_title"})}),`
`,s.jsx(x,{}),`
`,s.jsx(e.h2,{id:"",children:s.jsx(n,{k:"doc_guidelines_title"})}),`
`,s.jsx(e.h3,{id:"-1",children:s.jsx(n,{k:"doc_guideline_best_practices"})}),`
`,s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(n,{k:"doc_toast_best_practice_1"})}),s.jsx("li",{children:s.jsx(n,{k:"doc_toast_best_practice_2"})}),s.jsx("li",{children:s.jsx(n,{k:"doc_toast_best_practice_3"})})]}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_long_desc"})}),`
`,s.jsx(e.h2,{id:"-2",children:s.jsx(n,{k:"doc_basic_usage"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_basic_usage_desc"})}),`
`,s.jsx(t,{of:l}),`
`,s.jsx(e.h2,{id:"-3",children:s.jsx(n,{k:"doc_toast_system_usage"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_system_usage_desc"})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import { ToastProvider, useToast } from "./Toast";
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
`,s.jsx(e.h3,{id:"-4",children:s.jsx(n,{k:"doc_toast_interactive_example"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_interactive_example_desc"})}),`
`,s.jsx(t,{of:_}),`
`,s.jsx(e.h2,{id:"-5",children:s.jsx(n,{k:"doc_variations"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_variants_desc"})}),`
`,s.jsx(e.h3,{id:"-6",children:s.jsx(n,{k:"doc_info"})}),`
`,s.jsx(t,{of:p}),`
`,s.jsx(e.h3,{id:"-7",children:s.jsx(n,{k:"doc_success"})}),`
`,s.jsx(t,{of:m}),`
`,s.jsx(e.h3,{id:"-8",children:s.jsx(n,{k:"doc_warning"})}),`
`,s.jsx(t,{of:u}),`
`,s.jsx(e.h3,{id:"-9",children:s.jsx(n,{k:"doc_error"})}),`
`,s.jsx(t,{of:k}),`
`,s.jsx(e.h2,{id:"-10",children:s.jsx(n,{k:"doc_props"})}),`
`,s.jsx(e.h3,{id:"-11",children:s.jsx(n,{k:"doc_toast_props"})}),`
`,s.jsx(j,{}),`
`,s.jsx(e.h3,{id:"-12",children:s.jsx(n,{k:"doc_toast_provider_props"})}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx(n,{k:"doc_prop"})}),s.jsx("th",{children:s.jsx(n,{k:"doc_type"})}),s.jsx("th",{children:s.jsx(n,{k:"doc_default"})}),s.jsx("th",{children:s.jsx(n,{k:"doc_description"})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"children"})}),s.jsx("td",{children:s.jsx("code",{children:"ReactNode"})}),s.jsx("td",{children:"-"}),s.jsx("td",{children:s.jsx(n,{k:"doc_toast_provider_prop_children_desc"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"position"})}),s.jsx("td",{children:s.jsx("code",{children:"ToastPosition"})}),s.jsx("td",{children:s.jsx("code",{children:'"top-right"'})}),s.jsx("td",{children:s.jsx(n,{k:"doc_toast_provider_prop_position_desc"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"duration"})}),s.jsx("td",{children:s.jsx("code",{children:"number"})}),s.jsx("td",{children:s.jsx("code",{children:"3000"})}),s.jsx("td",{children:s.jsx(n,{k:"doc_toast_provider_prop_duration_desc"})})]})]})]}),`
`,s.jsx(a,{})]})}function z(o={}){const{wrapper:e}={...r(),...o.components};return e?s.jsx(e,{...o,children:s.jsx(i,{...o})}):i(o)}export{z as default};
