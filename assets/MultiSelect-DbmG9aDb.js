import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-B8dccGv3.js";import{M as i,C as l,a as o}from"./index-Hw0KSbfG.js";import{M as a,D as p,W as c,a as d,b as m}from"./MultiSelect.stories-DQhL65mO.js";import"./iframe-D7BhmU8I.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CZfsV87K.js";import"./index-DAsuSGnz.js";import"./index-DWkPlJRB.js";import"./index-dx5FCfvU.js";import"./index-CF3Ivw1r.js";import"./index-BFGcS2dx.js";import"./Icon-sAf_4biW.js";import"./Chip-DosrpCtS.js";import"./useTranslation-CDZt9J5t.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(n.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx(n.p,{children:"ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニューです。"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { MultiSelect } from "./MultiSelect";\r
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
`,e.jsx(l,{of:p}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(n.h3,{id:"multiple-selected",children:"Multiple Selected"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{})]})}function w(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{w as default};
