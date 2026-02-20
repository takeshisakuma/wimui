import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DTK2LGj2.js";import{M as o,C as l,a as s}from"./index-uJ7qZM7h.js";import{T as a}from"./T-BA4rfHsP.js";import{M as p,D as c,W as d,a as m,b as h}from"./MultiSelect.stories-CHluhzf2.js";import"./iframe-C1RJDA45.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVI1VOyx.js";import"./index-B3-gaeRq.js";import"./index-D8ommGfn.js";import"./index-t2H98gQk.js";import"./index-Bnb1Pe0P.js";import"./useTranslation-CKd6XHhZ.js";import"./index-y_IfAznw.js";import"./Icon-B0IVQBai.js";import"./Chip-cPN3nM-2.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:p}),`
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
