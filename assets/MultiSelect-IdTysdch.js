import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BKDHwPvH.js";import{M as r,C as s,a as c}from"./blocks-C2yLos7v.js";import{T as t}from"./T-DfJNEyk-.js";import{M as a,D as d,W as x,a as p,b as m}from"./MultiSelect.stories-XovNGKZD.js";import"./iframe-DUo8Bj02.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbJcNV3Q.js";import"./index-w-Maux7X.js";import"./index-BnWDOAAC.js";import"./index-DZV6DE0N.js";import"./useTranslation-C2tw1dPV.js";import"./index-CI1dtVTQ.js";import"./Icon-C5_8LwyI.js";import"./Chip-CU3pRw8X.js";import"./BaseListItem-xP86GDCQ.js";function l(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(n.h1,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(t,{k:"doc_multiselect_title"})}),`
`,e.jsx("p",{children:e.jsx(t,{k:"doc_multiselect_long_desc"})}),`
`,e.jsx(n.h2,{id:"",children:e.jsx(t,{k:"doc_usage"})}),`
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
`,e.jsx(n.h2,{id:"-1",children:e.jsx(t,{k:"doc_example"})}),`
`,e.jsx(n.h3,{id:"-2",children:e.jsx(t,{k:"doc_default"})}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"-3",children:e.jsx(t,{k:"doc_with_label"})}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"-4",children:e.jsx(t,{k:"doc_multiselect_ex_multi"})}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"-5",children:e.jsx(t,{k:"doc_disabled"})}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"-6",children:e.jsx(t,{k:"doc_props"})}),`
`,e.jsx(c,{})]})}function L(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(l,{...o})}):l(o)}export{L as default};
