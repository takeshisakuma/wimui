import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-rUs6rIy5.js";import{M as r,C as i,a as c}from"./blocks-BvMqAAhi.js";import{T as t}from"./T-DuZmRS3Q.js";import{M as a,D as p,W as m,a as d,b as x}from"./MultiSelect.stories-BQmj9i9z.js";import"./iframe-DC3HBgeO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BYy-nC4G.js";import"./index-BM94-sDc.js";import"./index-DJBbewVr.js";import"./index-Cm3Hr25a.js";import"./i18nConstants-BpHxieg5.js";import"./useTranslation-rn74mnfg.js";import"./index-Cpe1KNws.js";import"./Icon-Bl8N_3yh.js";import"./Chip-BtvDsTZX.js";import"./BaseListItem-CPMOjJD4.js";import"./InputBase-Bd-j4kit.js";import"./FieldTemplate-BgKjm2n_.js";import"./FieldLabelContent-DPt8kerN.js";import"./Badge-x83YaEUD.js";import"./IndicatorBase-ZJo4FMcG.js";import"./FieldError-DSv_VPX_.js";import"./Paragraph-CZs_UlK1.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
