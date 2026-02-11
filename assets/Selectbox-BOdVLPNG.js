import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DCTnv0Ib.js";import{M as i,C as l,a}from"./index-BSyC1eVm.js";import{S as c,D as t,W as d,P as p,a as h}from"./Selectbox.stories-BL5B09Vu.js";import"./iframe-hbRdK1HV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2NHIFOO.js";import"./index-BGGQ8Bem.js";import"./index-yFE4eFR4.js";import"./index-Dw71FAZm.js";import"./index-SYlbSkwb.js";import"./index-DI8fBNh8.js";import"./Icon-CApWXsih.js";function o(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:c}),`
`,n.jsx(e.h1,{id:"selectbox",children:"Selectbox"}),`
`,n.jsx(e.p,{children:"ユーザーが定義済みの選択肢から1つを選択するためのプルダウンメニューです。"}),`
`,n.jsx(e.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Selectbox } from "./Selectbox";\r
\r
const options = [\r
  { label: "Apple", value: "apple" },\r
  { label: "Banana", value: "banana" },\r
  { label: "Orange", value: "orange" },\r
];\r
\r
<Selectbox options={options} onChange={(val) => console.log(val)} />
`})}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsx(l,{of:t}),`
`,n.jsx(e.h3,{id:"with-label",children:"With Label"}),`
`,n.jsx(l,{of:d}),`
`,n.jsx(e.h3,{id:"preselected",children:"Preselected"}),`
`,n.jsx(l,{of:p}),`
`,n.jsx(e.h3,{id:"disabled",children:"Disabled"}),`
`,n.jsx(l,{of:h}),`
`,n.jsx(e.h2,{id:"高度な機能",children:"高度な機能"}),`
`,n.jsx(e.h3,{id:"検索機能-searchable",children:"検索機能 (Searchable)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"searchable"})," プロパティを有効にすると、オプションを検索できるようになります。多数のオプションがある場合に便利です。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Selectbox\r
  options={manyOptions}\r
  searchable\r
  searchPlaceholder="Search options..."\r
  onChange={(val) => console.log(val)}\r
/>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"カスタムフィルター関数:"})}),`
`,n.jsx(e.p,{children:"デフォルトでは大文字小文字を区別しない部分一致検索が行われますが、カスタムフィルター関数を提供することもできます。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Selectbox\r
  options={options}\r
  searchable\r
  filterOption={(option, searchValue) => {\r
    // カスタムフィルターロジック\r
    return option.value.includes(searchValue);\r
  }}\r
  onChange={(val) => console.log(val)}\r
/>
`})}),`
`,n.jsx(e.h3,{id:"グループ化-grouped-options",children:"グループ化 (Grouped Options)"}),`
`,n.jsx(e.p,{children:"オプションをグループ化して整理できます。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const groupedOptions = [\r
  {\r
    label: "Fruits",\r
    options: [\r
      { label: "Apple", value: "apple" },\r
      { label: "Banana", value: "banana" },\r
    ],\r
  },\r
  {\r
    label: "Vegetables",\r
    options: [\r
      { label: "Carrot", value: "carrot" },\r
      { label: "Broccoli", value: "broccoli" },\r
    ],\r
  },\r
];\r
\r
<Selectbox\r
  options={groupedOptions}\r
  grouped\r
  onChange={(val) => console.log(val)}\r
/>
`})}),`
`,n.jsx(e.h3,{id:"キーボードナビゲーション",children:"キーボードナビゲーション"}),`
`,n.jsx(e.p,{children:"Selectboxは完全なキーボードアクセシビリティをサポートしています："}),`
`,n.jsxs(e.p,{children:[`| キー | 動作 |\r
|------|------|\r
| `,n.jsx(e.code,{children:"Enter"})," / ",n.jsx(e.code,{children:"Space"}),` | ドロップダウンを開く / 選択中のオプションを選択 |\r
| `,n.jsx(e.code,{children:"Escape"}),` | ドロップダウンを閉じる |\r
| `,n.jsx(e.code,{children:"ArrowDown"}),` | 次のオプションにフォーカス |\r
| `,n.jsx(e.code,{children:"ArrowUp"}),` | 前のオプションにフォーカス |\r
| `,n.jsx(e.code,{children:"Home"}),` | 最初のオプションにフォーカス |\r
| `,n.jsx(e.code,{children:"End"})," | 最後のオプションにフォーカス |"]}),`
`,n.jsx(e.p,{children:"無効なオプションは自動的にスキップされます。"}),`
`,n.jsx(e.h3,{id:"検索とグループ化の組み合わせ",children:"検索とグループ化の組み合わせ"}),`
`,n.jsx(e.p,{children:"検索機能とグループ化を同時に使用することも可能です。検索時は、条件に一致するオプションを含むグループのみが表示されます。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Selectbox\r
  options={groupedOptions}\r
  grouped\r
  searchable\r
  searchPlaceholder="Search all options..."\r
  onChange={(val) => console.log(val)}\r
/>
`})}),`
`,n.jsx(e.h2,{id:"アクセシビリティ",children:"アクセシビリティ"}),`
`,n.jsx(e.p,{children:"Selectboxコンポーネントは、WAI-ARIAのアクセシビリティガイドラインに準拠しています："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:'role="combobox"'})," と ",n.jsx(e.strong,{children:'role="listbox"'})," の適切な使用"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"aria-expanded"}),"、",n.jsx(e.strong,{children:"aria-selected"}),"、",n.jsx(e.strong,{children:"aria-disabled"})," の状態管理"]}),`
`,n.jsx(e.li,{children:"✅ 完全なキーボードナビゲーション"}),`
`,n.jsx(e.li,{children:"✅ スクリーンリーダー対応"}),`
`,n.jsx(e.li,{children:"✅ フォーカス管理とスムーズなスクロール"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(a,{}),`
`,n.jsx(e.h2,{id:"typescript-サポート",children:"TypeScript サポート"}),`
`,n.jsx(e.p,{children:"Selectboxコンポーネントは完全な型定義を提供しています。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Selectbox, SelectboxOption, SelectboxOptionGroup } from './Selectbox';\r
\r
// フラットなオプション\r
const options: SelectboxOption[] = [\r
  { label: "Option 1", value: "opt1" },\r
  { label: "Option 2", value: "opt2", disabled: true },\r
];\r
\r
// グループ化されたオプション\r
const groupedOptions: SelectboxOptionGroup[] = [\r
  {\r
    label: "Group 1",\r
    options: [\r
      { label: "Option 1", value: "opt1" },\r
    ],\r
  },\r
];
`})})]})}function M(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{M as default};
