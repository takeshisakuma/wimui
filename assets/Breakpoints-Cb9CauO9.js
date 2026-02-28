import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BRZoJ6_p.js";import{M as c}from"./blocks-Bnoxqp6H.js";import{T as e}from"./T-DKX3xNM1.js";import"./iframe-CtzyBWFe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-eq0L1KCm.js";import"./index-CnfAmiWZ.js";import"./index-CoLICJJZ.js";import"./index-BcttMTGM.js";import"./useTranslation-BoUpQfq3.js";function d(r){const s={code:"code",pre:"pre",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Token/Breakpoints"}),`
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
  // デフォルト（スマートフォン等の小さい画面向け）\r
  display: block;\r
\r
  @include up(md) {\r
    // 画面幅が 768px 以上の時のスタイル\r
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
    // 画面幅が 576px 以下の時にだけパディングを小さくする\r
    padding: 8px;\r
  }\r
}
`})})]})}function u(r={}){const{wrapper:s}={...t(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(d,{...r})}):d(r)}export{u as default};
