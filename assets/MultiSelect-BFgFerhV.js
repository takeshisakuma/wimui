import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DVjEVqYX.js";import{M as r,C as i,a as c}from"./blocks-B3h0Pe_A.js";import{T as t}from"./T-egMp9c00.js";import{M as a,D as p,W as m,a as d,b as x}from"./MultiSelect.stories-Cy4iZhZX.js";import"./iframe-CauSMpP2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bm6jOmXg.js";import"./index-BPLd5NLW.js";import"./index-DudHPyTo.js";import"./index-BaQxHsSX.js";import"./i18nConstants-BpHxieg5.js";import"./useTranslation-DWvjPTrY.js";import"./index-DG63t_hX.js";import"./Icon-BHqUNIEq.js";import"./Chip-DjBXLstK.js";import"./BaseListItem-D5WUioOq.js";import"./InputBase-BeAbM3tf.js";import"./FieldTemplate-BZP_lMVa.js";import"./FieldLabelContent-CqrPWaMn.js";import"./Badge-BMmBsaQj.js";import"./IndicatorBase-DGJb2WMU.js";import"./FieldError-Db_Ylyfu.js";import"./Paragraph-_UReNamM.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"-3",children:e.jsx(t,{k:"doc_with_label"})}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"-4",children:e.jsx(t,{k:"doc_multiselect_ex_multi"})}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"-5",children:e.jsx(t,{k:"doc_disabled"})}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"-6",children:e.jsx(t,{k:"doc_props"})}),`
`,e.jsx(c,{})]})}function N(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{N as default};
