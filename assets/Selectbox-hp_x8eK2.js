import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-C7g9E2xO.js";import{M as i,C as l,a as c}from"./index-CY0srLdp.js";import{S as a,D as t,W as d,P as p,a as h,b as x,N as j}from"./Selectbox.stories-Cc0VqIO5.js";import{T as b}from"./T-DhmHDShA.js";import"./iframe-BO-ghgqI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcUkKfjf.js";import"./index-CCToHu_K.js";import"./index-BHP-00VB.js";import"./index-B0RwZibI.js";import"./index-r7jxhLBu.js";import"./Selectbox-C84Kv7vy.js";import"./index-BDJ3dKw4.js";import"./Transition-wJFB2JIT.js";import"./Icon-So-cQ4J-.js";import"./useTranslation-BRUVZn8n.js";function o(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(n.h1,{id:"selectbox",children:"Selectbox"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(b,{k:"doc_selectbox_title"})}),`
`,e.jsx(n.p,{children:"ユーザーが定義済みの選択肢から1つを選択するためのドロップダウンメニューです。"}),`
`,e.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Selectbox } from "@/components/Selectbox/Selectbox";\r
\r
const options = [\r
  { label: "Apple", value: "apple" },\r
  { label: "Banana", value: "banana" },\r
  { label: "Orange", value: "orange" },\r
];\r
\r
<Selectbox options={options} onChange={(val) => console.log(val)} />
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(l,{of:t}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h3,{id:"preselected",children:"Preselected"}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h3,{id:"セパレーター-separators",children:"セパレーター (Separators)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'type: "separator"'})," を指定することで、オプションの間に区切り線を表示できます。"]}),`
`,e.jsx(l,{of:x}),`
`,e.jsx(n.h3,{id:"ネイティブセレクト-native-mode",children:"ネイティブセレクト (Native Mode)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"native"})," プロパティを有効にすると、ブラウザ標準の ",e.jsx(n.code,{children:"<select>"}),` 要素を使用します。\r
また、最新のブラウザ（Chrome 119+ など）では、ネイティブな `,e.jsx(n.code,{children:"select"})," 内でも ",e.jsx(n.code,{children:"<hr>"})," による区切り線がサポートされており、",e.jsx(n.code,{children:'type: "separator"'})," を指定したオプションは ",e.jsx(n.code,{children:"<hr>"})," としてレンダリングされます。"]}),`
`,e.jsx(l,{of:j}),`
`,e.jsx(n.h2,{id:"高度な機能",children:"高度な機能"}),`
`,e.jsx(n.h3,{id:"検索機能-searchable",children:"検索機能 (Searchable)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"searchable"})," プロパティを有効にすると、オプションを検索できるようになります。多数のオプションがある場合に便利です。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Selectbox\r
  options={manyOptions}\r
  searchable\r
  searchPlaceholder="Search options..."\r
  onChange={(val) => console.log(val)}\r
/>
`})}),`
`,e.jsx(n.p,{children:"カスタムフィルター関数:"}),`
`,e.jsx(n.p,{children:"デフォルトでは大文字小文字を区別しない部分一致検索が行われますが、カスタムフィルター関数を提供することもできます。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Selectbox\r
  options={options}\r
  searchable\r
  filterOption={(option, searchValue) => {\r
    // カスタムフィルターロジック\r
    return option.value.includes(searchValue);\r
  }}\r
  onChange={(val) => console.log(val)}\r
/>
`})}),`
`,e.jsx(n.h3,{id:"グループ化-grouped-options",children:"グループ化 (Grouped Options)"}),`
`,e.jsx(n.p,{children:"オプションをグループ化して整理できます。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const groupedOptions = [\r
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
`,e.jsx(n.h3,{id:"キーボードナビゲーション",children:"キーボードナビゲーション"}),`
`,e.jsx(n.p,{children:"Selectboxは完全なキーボードアクセシビリティをサポートしています："}),`
`,e.jsxs(n.p,{children:[`| キー | 動作 |\r
|------|------|\r
| `,e.jsx(n.code,{children:"Enter"})," / ",e.jsx(n.code,{children:"Space"}),` | ドロップダウンを開く / 選択中のオプションを選択 |\r
| `,e.jsx(n.code,{children:"Escape"}),` | ドロップダウンを閉じる |\r
| `,e.jsx(n.code,{children:"ArrowDown"}),` | 次のオプションにフォーカス |\r
| `,e.jsx(n.code,{children:"ArrowUp"}),` | 前のオプションにフォーカス |\r
| `,e.jsx(n.code,{children:"Home"}),` | 最初のオプションにフォーカス |\r
| `,e.jsx(n.code,{children:"End"})," | 最後のオプションにフォーカス |"]}),`
`,e.jsx(n.p,{children:"無効なオプションは自動的にスキップされます。"}),`
`,e.jsx(n.h3,{id:"検索とグループ化の組み合わせ",children:"検索とグループ化の組み合わせ"}),`
`,e.jsx(n.p,{children:"検索機能とグループ化を同時に使用することも可能です。検索時は、条件に一致するオプションを含むグループのみが表示されます。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Selectbox\r
  options={groupedOptions}\r
  grouped\r
  searchable\r
  searchPlaceholder="Search all options..."\r
  onChange={(val) => console.log(val)}\r
/>
`})}),`
`,e.jsx(n.h2,{id:"アクセシビリティ",children:"アクセシビリティ"}),`
`,e.jsx(n.p,{children:"Selectboxコンポーネントは、WAI-ARIAのアクセシビリティガイドラインに準拠しています："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'✅ role="combobox" と role="listbox" の適切な使用'}),`
`,e.jsx(n.li,{children:"✅ aria-expanded、aria-selected、aria-disabled の状態管理"}),`
`,e.jsx(n.li,{children:"✅ 完全なキーボードナビゲーション"}),`
`,e.jsx(n.li,{children:"✅ スクリーンリーダー対応"}),`
`,e.jsx(n.li,{children:"✅ フォーカス管理とスムーズなスクロール"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"typescript-サポート",children:"TypeScript サポート"}),`
`,e.jsx(n.p,{children:"Selectboxコンポーネントは完全な型定義を提供しています。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Selectbox, SelectboxOption, SelectboxOptionGroup } from './Selectbox';\r
import { T } from "../T";\r
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
`})})]})}function G(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{G as default};
