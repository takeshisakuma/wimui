import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BdJmE6jO.js";import{M as s,C as l,a as r}from"./index-4d6KwSW1.js";import{T as a}from"./T-B9tp72Y-.js";import{M as p,D as c,W as d,a as m,b as h}from"./MultiSelect.stories-BeARZWkw.js";import"./iframe-C-4JLACx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeJq3KNp.js";import"./index-jud4T1_Y.js";import"./index-BNSEd8dy.js";import"./index-DC1su9bf.js";import"./index-DFxqoh7w.js";import"./useTranslation-BFGhrLDt.js";import"./index-HB-Qm5fy.js";import"./Icon-D6zGy4PL.js";import"./Chip-C2bxRKbY.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(n.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(a,{k:"doc_multiselect_title"})}),`
`,e.jsx(n.p,{children:"ユーザーが定義済みの選択肢から複数を選択するためのドロップダウンメニューです。"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { MultiSelect } from "@/components/MultiSelect/MultiSelect";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

<MultiSelect
  options={options}
  onChange={(vals) => console.log(vals)} // returns string[]
/>;
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
`,e.jsx(r,{})]})}function y(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{y as default};
