import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-LaeD_HwV.js";import{M as r,C as o,a as i}from"./blocks-tlD0J2ts.js";import{S as t,D as a,W as x,P as h,a as j,b as p,N as b}from"./Selectbox.stories-20rIpjZ1.js";import{T as s}from"./T-DF1inZ3K.js";import"./iframe-k6tS2myx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVHKsLZJ.js";import"./index-w7Wk43yt.js";import"./index-Bs2SW91C.js";import"./index-04b2-QCn.js";import"./Selectbox-DeKWLOhh.js";import"./index-COvYEKuH.js";import"./Transition-53bfThcp.js";import"./Icon-DzUsA1kS.js";import"./useTranslation-RCdWhXwZ.js";function c(l){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t}),`
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
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"preselected",children:"Preselected"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h3,{id:"-1",children:e.jsx(s,{k:"doc_selectbox_var_sep"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_var_sep_desc"})}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"-2",children:e.jsx(s,{k:"doc_selectbox_var_native"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_selectbox_var_native_desc"})}),`
`,e.jsx(o,{of:b}),`
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
`,e.jsx(n.p,{children:"カスタムフィルタ関数:"}),`
`,e.jsx(n.p,{children:"デフォルトでは、大文字と小文字を区別しない部分一致検索が行われますが、カスタムフィルタ関数を提供することもできます。"}),`
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
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"キー"}),e.jsx("th",{children:"アクション"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"Enter"})," / ",e.jsx("code",{children:"Space"})]})}),e.jsx("td",{children:"ドロップダウンを開く / ハイライトされたオプションを選択"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Escape"})}),e.jsx("td",{children:"ドロップダウンを閉じる"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowDown"})}),e.jsx("td",{children:"下矢印キーで次のオプションにフォーカス"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowUp"})}),e.jsx("td",{children:"上矢印キーで前のオプションにフォーカス"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Home"})}),e.jsx("td",{children:"Homeキーで最初のオプションにフォーカス"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"End"})}),e.jsx("td",{children:"Endキーで最後のオプションにフォーカス"})]})]})]}),`
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
`,e.jsx("p",{children:"Selectboxコンポーネントは、WAI-ARIAのアクセシビリティガイドラインに準拠しています："}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:'role="combobox" と role="listbox" の適切な使用'}),e.jsx("li",{children:"aria-expanded、aria-selected、aria-disabled の状態管理"}),e.jsx("li",{children:"完全なキーボードナビゲーション"}),e.jsx("li",{children:"スクリーンリーダー対応"}),e.jsx("li",{children:"フォーカス管理とスムーズなスクロール"})]}),`
`,e.jsx(n.h2,{id:"-9",children:e.jsx(s,{k:"doc_props"})}),`
`,e.jsx(i,{}),`
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
`})})]})}function W(l={}){const{wrapper:n}={...d(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(c,{...l})}):c(l)}export{W as default};
