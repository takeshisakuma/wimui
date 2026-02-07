import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-CZktgJlQ.js";import{M as i,C as l,a as o}from"./index-Dm-AO3vM.js";import{M as a,D as p,W as c,a as d,b as h}from"./MultiSelect.stories-Bgtp-s4l.js";import"./iframe-MO83bMJc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3qegWCi2.js";import"./index-DgaUtmLs.js";import"./index-CzVhI40W.js";import"./index-BCAFDtBU.js";import"./Icon-Dk_L99Fl.js";import"./Chip-CQw9_sOG.js";import"./useTranslation-QbaPL1yb.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
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
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{})]})}function W(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{W as default};
