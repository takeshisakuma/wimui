import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Bk8X1Xu_.js";import{M as c}from"./blocks-C6FzcQKW.js";import{T as e}from"./T-C8hbYU9U.js";import"./iframe-Dgvn1YDu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdLmKoSX.js";import"./index-Dgi1rt6o.js";import"./index-Z9rhKA2M.js";import"./index-DbGvuoi8.js";import"./useTranslation-CfaHxh4C.js";function d(r){const s={code:"code",pre:"pre",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Token/Breakpoints"}),`
`,n.jsx("h1",{children:n.jsx(e,{k:"token_bp_title"})}),`
`,n.jsx("p",{children:n.jsx(e,{k:"token_bp_desc"})}),`
`,n.jsx("hr",{}),`
`,n.jsx("h2",{children:n.jsx(e,{k:"token_bp_list"})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:n.jsx(e,{k:"token_bp_th_key"})}),n.jsx("th",{children:n.jsx(e,{k:"token_bp_th_width"})}),n.jsx("th",{children:n.jsx(e,{k:"token_bp_th_device"})})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"sm"})}),n.jsx("td",{children:"576px"}),n.jsx("td",{children:n.jsx(e,{k:"token_bp_sm_device"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"md"})}),n.jsx("td",{children:"768px"}),n.jsx("td",{children:n.jsx(e,{k:"token_bp_md_device"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"lg"})}),n.jsx("td",{children:"992px"}),n.jsx("td",{children:n.jsx(e,{k:"token_bp_lg_device"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"xl"})}),n.jsx("td",{children:"1200px"}),n.jsx("td",{children:n.jsx(e,{k:"token_bp_xl_device"})})]})]})]}),`
`,n.jsx("hr",{}),`
`,n.jsx("h2",{children:n.jsx(e,{k:"token_bp_scss"})}),`
`,n.jsx("p",{dangerouslySetInnerHTML:{__html:"<T k='token_bp_scss_desc' />"}}),`
`,n.jsx("h3",{children:n.jsx("code",{children:"@include up($breakpoint)"})}),`
`,n.jsx("p",{dangerouslySetInnerHTML:{__html:"<T k='token_bp_up_desc' />"}}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`@use "../../tokens/breakpoints" as *;\r
\r
.my-component {\r
  // Default (for small screens like smartphones)\r
  display: block;\r
\r
  @include up(md) {\r
    // Style for screen width 768px and above\r
    display: flex;\r
  }\r
}
`})}),`
`,n.jsx("h3",{children:n.jsx("code",{children:"@include down($breakpoint)"})}),`
`,n.jsx("p",{dangerouslySetInnerHTML:{__html:"<T k='token_bp_down_desc' />"}}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-scss",children:`@use "../../tokens/breakpoints" as *;\r
\r
.my-button {\r
  padding: 16px;\r
\r
  @include down(sm) {\r
    // Reduce padding only when screen width is 576px or less\r
    padding: 8px;\r
  }\r
}
`})})]})}function u(r={}){const{wrapper:s}={...t(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(d,{...r})}):d(r)}export{u as default};
