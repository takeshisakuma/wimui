import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-D71UUsNO.js";import{M as o,C as l,a as s}from"./index-Bk6PwKkT.js";import{T as a}from"./T-Rq0cc2fq.js";import{M as p,D as c,W as d,a as m,b as h}from"./MultiSelect.stories-BE2DDBn4.js";import"./iframe-BiableUp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzQyDAWk.js";import"./index-Q1u8PpyV.js";import"./index-DyHKewGi.js";import"./index-C2CxuTmr.js";import"./index-DnbvUt8W.js";import"./useTranslation-DLIa3rRq.js";import"./index-C5NJVuuH.js";import"./Icon-C7T6E2Ji.js";import"./Chip-BIRMx_17.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:p}),`
`,e.jsx(n.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(a,{k:"doc_multiselect_title"})}),`
`,e.jsx(n.p,{children:"ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニューです。"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { MultiSelect } from "@/components/MultiSelect/MultiSelect";\r
\r
const options = [\r
  { label: "Apple", value: "apple" },\r
  { label: "Banana", value: "banana" },\r
  { label: "Orange", value: "orange" },\r
];\r
\r
<MultiSelect \r
    options={options} \r
    onChange={(vals) => console.log(vals)} // returns string[]\r
/>
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h3,{id:"multiple-selected",children:"Multiple Selected"}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(s,{})]})}function y(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{y as default};
