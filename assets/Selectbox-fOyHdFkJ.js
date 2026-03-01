import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-kRKb6otn.js";import{M as d,C as l,a as r}from"./blocks-h-koGg6Y.js";import{S as i,D as a,W as x,P as h,a as p,b as j,N as _}from"./Selectbox.stories-Vs84-ERE.js";import{T as s}from"./T-D3t-8OFd.js";import"./iframe-RqRUvN2f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-KrD9KPR3.js";import"./index-MJSI_oPR.js";import"./index-xDlYQR3e.js";import"./index-D5anLY7w.js";import"./Selectbox-BRCwwGI3.js";import"./index-B1nuKDx0.js";import"./Transition-1UEQMD_9.js";import"./Icon-DEW6Teyt.js";import"./useTranslation-CveckdUp.js";function c(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(n.h1,{id:"selectbox",children:"Selectbox"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(s,{k:"doc_selectbox_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_long_desc"})}),`
`,e.jsx(n.h2,{id:"",children:e.jsx(s,{k:"doc_basic_usage"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Selectbox } from "@/components/Selectbox/Selectbox";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

<Selectbox options={options} onChange={(val) => console.log(val)} />;
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(l,{of:x}),`
`,e.jsx(n.h3,{id:"preselected",children:"Preselected"}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(n.h3,{id:"-1",children:e.jsx(s,{k:"doc_selectbox_var_sep"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_var_sep_desc"})}),`
`,e.jsx(l,{of:j}),`
`,e.jsx(n.h3,{id:"-2",children:e.jsx(s,{k:"doc_selectbox_var_native"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_var_native_desc"})}),`
`,e.jsx(l,{of:_}),`
`,e.jsx(n.h2,{id:"-3",children:e.jsx(s,{k:"doc_selectbox_adv"})}),`
`,e.jsx(n.h3,{id:"-4",children:e.jsx(s,{k:"doc_selectbox_adv_search"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_adv_search_desc"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Selectbox
  options={manyOptions}
  searchable
  searchPlaceholder="Search options..."
  onChange={(val) => console.log(val)}
/>
`})}),`
`,e.jsx(n.p,{children:"Custom filter function:"}),`
`,e.jsx(n.p,{children:"By default, a case-insensitive partial match search is performed, but you can also provide a custom filter function."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Selectbox
  options={options}
  searchable
  filterOption={(option, searchValue) => {
    // Custom filter logic
    return option.value.includes(searchValue);
  }}
  onChange={(val) => console.log(val)}
/>
`})}),`
`,e.jsx(n.h3,{id:"-5",children:e.jsx(s,{k:"doc_selectbox_adv_group"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_adv_group_desc"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const groupedOptions = [
  {
    label: "Fruits",
    options: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
    ],
  },
  {
    label: "Vegetables",
    options: [
      { label: "Carrot", value: "carrot" },
      { label: "Broccoli", value: "broccoli" },
    ],
  },
];

<Selectbox
  options={groupedOptions}
  grouped
  onChange={(val) => console.log(val)}
/>;
`})}),`
`,e.jsx(n.h3,{id:"-6",children:e.jsx(s,{k:"doc_selectbox_adv_key"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_adv_key_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(s,{k:"doc_key"})}),e.jsx("th",{children:e.jsx(s,{k:"doc_action"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"Enter"})," / ",e.jsx("code",{children:"Space"})]})}),e.jsxs("td",{children:[e.jsx(s,{k:"doc_selectbox_key_open"})," Open dropdown / Select highlighted option"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Escape"})}),e.jsxs("td",{children:[e.jsx(s,{k:"doc_selectbox_key_close"})," Close dropdown"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowDown"})}),e.jsxs("td",{children:[e.jsx(s,{k:"doc_selectbox_key_next"})," Focus next option"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowUp"})}),e.jsxs("td",{children:[e.jsx(s,{k:"doc_selectbox_key_prev"})," Focus previous option"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Home"})}),e.jsxs("td",{children:[e.jsx(s,{k:"doc_selectbox_key_home"})," Focus first option"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"End"})}),e.jsxs("td",{children:[e.jsx(s,{k:"doc_selectbox_key_end"})," Focus last option"]})]})]})]}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_adv_key_skip"})}),`
`,e.jsx(n.h3,{id:"-7",children:e.jsx(s,{k:"doc_selectbox_adv_comb"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_adv_comb_desc"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Selectbox
  options={groupedOptions}
  grouped
  searchable
  searchPlaceholder="Search all options..."
  onChange={(val) => console.log(val)}
/>
`})}),`
`,e.jsx(n.h2,{id:"-8",children:e.jsx(s,{k:"doc_accessibility"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_a11y_desc"})}),`
`,e.jsx(n.h2,{id:"-9",children:e.jsx(s,{k:"doc_props"})}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h2,{id:"-10",children:e.jsx(s,{k:"doc_selectbox_ts"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_ts_desc"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Selectbox, SelectboxOption, SelectboxOptionGroup } from "./Selectbox";
import { T } from "../T";

// Flat options
const options: SelectboxOption[] = [
  { label: "Option 1", value: "opt1" },
  { label: "Option 2", value: "opt2", disabled: true },
];

// Grouped options
const groupedOptions: SelectboxOptionGroup[] = [
  {
    label: "Group 1",
    options: [{ label: "Option 1", value: "opt1" }],
  },
];
`})})]})}function E(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{E as default};
