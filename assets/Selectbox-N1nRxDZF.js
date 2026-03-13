import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-BYWxPPDz.js";import{M as i,T as t,C as l,a as r}from"./blocks-CMudKjaX.js";import{S as x,D as a,W as j,P as _,a as h,b as p}from"./Selectbox.stories-BVOQqFMT.js";import{T as s}from"./T-Dd2ecz9f.js";import"./iframe-D-2TzvPc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BsNxz9VE.js";import"./index-yjAfm_K5.js";import"./index-bMkDUTCP.js";import"./index-DrEeGy1E.js";import"./Selectbox-JBQNZ_-i.js";import"./index-YuTxaPzC.js";import"./Transition-lTO2ierd.js";import"./Icon-CccJ-EGP.js";import"./BaseListItem-V27yoZhv.js";import"./FieldTemplate-Cwt9YIa5.js";import"./FieldLabelContent-Bac4qM_k.js";import"./Badge-C5nzORhf.js";import"./IndicatorBase-CAvIC9LN.js";import"./useTranslation-DD4zKDMJ.js";import"./FieldError-eno_Posb.js";import"./Paragraph-BoccZsm4.js";import"./InputBase-2TzIi5_B.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:x}),`
`,e.jsx(t,{}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(s,{k:"doc_selectbox_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_long_desc"})}),`
`,e.jsx(n.h2,{id:"",children:e.jsx(s,{k:"doc_guidelines_title"})}),`
`,e.jsx(n.h3,{id:"-1",children:e.jsx(s,{k:"doc_guideline_when_to_use"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(s,{k:"doc_selectbox_guideline_1"})}),e.jsx("li",{children:e.jsx(s,{k:"doc_selectbox_guideline_2"})})]}),`
`,e.jsx(n.h3,{id:"-2",children:e.jsx(s,{k:"doc_guideline_best_practices"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(s,{k:"doc_selectbox_best_practice_1"})}),e.jsx("li",{children:e.jsx(s,{k:"doc_selectbox_best_practice_2"})})]}),`
`,e.jsx(n.h2,{id:"-3",children:e.jsx(s,{k:"doc_basic_usage"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Selectbox } from "@/components/Selectbox/Selectbox";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

<Selectbox options={options} onChange={(val) => console.log(val)} />;
`})}),`
`,e.jsx(n.h2,{id:"-4",children:e.jsx(s,{k:"doc_variations"})}),`
`,e.jsx(n.h3,{id:"-5",children:e.jsx(s,{k:"doc_default"})}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h3,{id:"-6",children:e.jsx(s,{k:"doc_with_label"})}),`
`,e.jsx(l,{of:j}),`
`,e.jsx(n.h3,{id:"-7",children:e.jsx(s,{k:"doc_selectbox_preselected"})}),`
`,e.jsx(l,{of:_}),`
`,e.jsx(n.h3,{id:"-8",children:e.jsx(s,{k:"doc_disabled"})}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h3,{id:"-9",children:e.jsx(s,{k:"doc_selectbox_var_sep"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_var_sep_desc"})}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(n.h2,{id:"-10",children:e.jsx(s,{k:"doc_selectbox_adv"})}),`
`,e.jsx(n.h3,{id:"-11",children:e.jsx(s,{k:"doc_selectbox_adv_search"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_adv_search_desc"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Selectbox
  options={manyOptions}
  searchable
  searchPlaceholder="Search options..."
  onChange={(val) => console.log(val)}
/>
`})}),`
`,e.jsx(n.h3,{id:"-12",children:e.jsx(s,{k:"doc_selectbox_custom_filter_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_custom_filter_desc"})}),`
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
`,e.jsx(n.h3,{id:"-13",children:e.jsx(s,{k:"doc_selectbox_adv_group"})}),`
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
`,e.jsx(n.h3,{id:"-14",children:e.jsx(s,{k:"doc_selectbox_adv_key"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_adv_key_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(s,{k:"table_header_key"})}),e.jsx("th",{children:e.jsx(s,{k:"table_header_action"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:e.jsx(s,{k:"table_key_enter"})})," / ",e.jsx("code",{children:e.jsx(s,{k:"table_key_space"})})]})}),e.jsx("td",{children:e.jsx(s,{k:"doc_selectbox_op_open_select"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:e.jsx(s,{k:"table_key_escape"})})}),e.jsx("td",{children:e.jsx(s,{k:"doc_selectbox_op_close"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowDown"})}),e.jsx("td",{children:e.jsx(s,{k:"doc_selectbox_op_next"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowUp"})}),e.jsx("td",{children:e.jsx(s,{k:"doc_selectbox_op_prev"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Home"})}),e.jsx("td",{children:e.jsx(s,{k:"doc_selectbox_op_first"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"End"})}),e.jsx("td",{children:e.jsx(s,{k:"doc_selectbox_op_last"})})]})]})]}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_adv_key_skip"})}),`
`,e.jsx(n.h3,{id:"-15",children:e.jsx(s,{k:"doc_selectbox_adv_comb"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_adv_comb_desc"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Selectbox
  options={groupedOptions}
  grouped
  searchable
  searchPlaceholder="Search all options..."
  onChange={(val) => console.log(val)}
/>
`})}),`
`,e.jsx(n.h2,{id:"-16",children:e.jsx(s,{k:"doc_accessibility"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_a11y_desc"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(s,{k:"doc_selectbox_a11y_1"})}),e.jsx("li",{children:e.jsx(s,{k:"doc_selectbox_a11y_2"})}),e.jsx("li",{children:e.jsx(s,{k:"doc_selectbox_a11y_3"})}),e.jsx("li",{children:e.jsx(s,{k:"doc_selectbox_a11y_4"})}),e.jsx("li",{children:e.jsx(s,{k:"doc_selectbox_a11y_5"})})]}),`
`,e.jsx(n.h2,{id:"-17",children:e.jsx(s,{k:"doc_props"})}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h2,{id:"-18",children:e.jsx(s,{k:"doc_selectbox_ts"})}),`
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
`})})]})}function E(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{E as default};
