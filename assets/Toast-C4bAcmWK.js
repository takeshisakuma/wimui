import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-oastaWz_.js";import{M as i,T as c,C as t,a as x,S as j}from"./blocks-Dq77dM79.js";import{T as a,D as h,I as l,a as p,S as _,W as m,E as u}from"./Toast.stories-DHOdO9nF.js";import{T as n}from"./T-D13OoWBQ.js";import"./iframe-8vWRHjs9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRmV2cus.js";import"./index-Dc5A_FSu.js";import"./index-DA_00nhh.js";import"./index-CzGqKHLk.js";import"./index-BgvlPezX.js";import"./Transition-B5oNmsxh.js";import"./Icon-DDic_iot.js";import"./useTranslation-oYtfLuBR.js";import"./Button-B2l21hRP.js";function r(e){const o={code:"code",h2:"h2",h3:"h3",pre:"pre",...d(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(i,{of:a}),`
`,s.jsx(c,{}),`
`,s.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:s.jsx(n,{k:"doc_toast_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_long_desc"})}),`
`,s.jsx(o.h2,{id:"",children:s.jsx(n,{k:"doc_basic_usage"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_basic_usage_desc"})}),`
`,s.jsx(t,{of:h}),`
`,s.jsx(o.h2,{id:"-1",children:s.jsx(n,{k:"doc_toast_system_usage"})}),`
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
`,s.jsx(o.h3,{id:"-2",children:s.jsx(n,{k:"doc_toast_interactive_example"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_interactive_example_desc"})}),`
`,s.jsx(t,{of:l}),`
`,s.jsx(o.h2,{id:"-3",children:s.jsx(n,{k:"doc_variations"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc_toast_variants_desc"})}),`
`,s.jsx(o.h3,{id:"-4",children:s.jsx(n,{k:"doc_info"})}),`
`,s.jsx(t,{of:p}),`
`,s.jsx(o.h3,{id:"-5",children:s.jsx(n,{k:"doc_success"})}),`
`,s.jsx(t,{of:_}),`
`,s.jsx(o.h3,{id:"-6",children:s.jsx(n,{k:"doc_warning"})}),`
`,s.jsx(t,{of:m}),`
`,s.jsx(o.h3,{id:"-7",children:s.jsx(n,{k:"doc_error"})}),`
`,s.jsx(t,{of:u}),`
`,s.jsx(o.h2,{id:"-8",children:s.jsx(n,{k:"doc_props"})}),`
`,s.jsx(o.h3,{id:"-9",children:s.jsx(n,{k:"doc_toast_props"})}),`
`,s.jsx(x,{}),`
`,s.jsx(o.h3,{id:"-10",children:s.jsx(n,{k:"doc_toast_provider_props"})}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx(n,{k:"doc_prop"})}),s.jsx("th",{children:s.jsx(n,{k:"doc_type"})}),s.jsx("th",{children:s.jsx(n,{k:"doc_default"})}),s.jsx("th",{children:s.jsx(n,{k:"doc_description"})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"children"})}),s.jsx("td",{children:s.jsx("code",{children:"ReactNode"})}),s.jsx("td",{children:"-"}),s.jsx("td",{children:s.jsx(n,{k:"doc_toast_provider_prop_children_desc"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"position"})}),s.jsx("td",{children:s.jsx("code",{children:"ToastPosition"})}),s.jsx("td",{children:s.jsx("code",{children:'"top-right"'})}),s.jsx("td",{children:s.jsx(n,{k:"doc_toast_provider_prop_position_desc"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("code",{children:"duration"})}),s.jsx("td",{children:s.jsx("code",{children:"number"})}),s.jsx("td",{children:s.jsx("code",{children:"3000"})}),s.jsx("td",{children:s.jsx(n,{k:"doc_toast_provider_prop_duration_desc"})})]})]})]}),`
`,s.jsx(j,{})]})}function N(e={}){const{wrapper:o}={...d(),...e.components};return o?s.jsx(o,{...e,children:s.jsx(r,{...e})}):r(e)}export{N as default};
