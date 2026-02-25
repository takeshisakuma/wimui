import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-B_GVjEQG.js";import{M as i,C as s,a as c}from"./index-BtEPnDjs.js";import{S as d,D as t,W as a,P as h,a as x,b as p,N as j}from"./Selectbox.stories-C_LksdFv.js";import{T as b}from"./T-DDpXyLBA.js";import"./iframe-3pJU0r9w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9X4EtKa.js";import"./index-BQu9wgyp.js";import"./index-D8oHPCzD.js";import"./index-PRvQPFt2.js";import"./index-As2qqYoz.js";import"./Selectbox-Dilwfe-T.js";import"./index-DPeCJHdU.js";import"./Transition-DL6Ftrsx.js";import"./Icon-BpoEBrO7.js";import"./useTranslation-kZrKuO_Q.js";function o(l){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(n.h1,{id:"selectbox",children:"Selectbox"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(b,{k:"doc_selectbox_title"})}),`
`,e.jsx(n.p,{children:"ユーザーが定義済みの選択肢から1つを選択するためのドロップダウンメニューです。"}),`
`,e.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
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
`,e.jsx(s,{of:t}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h3,{id:"preselected",children:"Preselected"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"セパレーター-separators",children:"セパレーター (Separators)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'type: "separator"'})," を指定することで、オプションの間に区切り線を表示できます。"]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"ネイティブセレクト-native-mode",children:"ネイティブセレクト (Native Mode)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"native"})," プロパティを有効にすると、ブラウザ標準の ",e.jsx(n.code,{children:"<select>"}),` 要素を使用します。
また、最新のブラウザ（Chrome 119+ など）では、ネイティブな `,e.jsx(n.code,{children:"select"})," 内でも ",e.jsx(n.code,{children:"<hr>"})," による区切り線がサポートされており、",e.jsx(n.code,{children:'type: "separator"'})," を指定したオプションは ",e.jsx(n.code,{children:"<hr>"})," としてレンダリングされます。"]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"高度な機能",children:"高度な機能"}),`
`,e.jsx(n.h3,{id:"検索機能-searchable",children:"検索機能 (Searchable)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"searchable"})," プロパティを有効にすると、オプションを検索できるようになります。多数のオプションがある場合に便利です。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Selectbox
  options={manyOptions}
  searchable
  searchPlaceholder="Search options..."
  onChange={(val) => console.log(val)}
/>
`})}),`
`,e.jsx(n.p,{children:"カスタムフィルター関数:"}),`
`,e.jsx(n.p,{children:"デフォルトでは大文字小文字を区別しない部分一致検索が行われますが、カスタムフィルター関数を提供することもできます。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Selectbox
  options={options}
  searchable
  filterOption={(option, searchValue) => {
    // カスタムフィルターロジック
    return option.value.includes(searchValue);
  }}
  onChange={(val) => console.log(val)}
/>
`})}),`
`,e.jsx(n.h3,{id:"グループ化-grouped-options",children:"グループ化 (Grouped Options)"}),`
`,e.jsx(n.p,{children:"オプションをグループ化して整理できます。"}),`
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
`,e.jsx(n.h3,{id:"キーボードナビゲーション",children:"キーボードナビゲーション"}),`
`,e.jsx(n.p,{children:"Selectboxは完全なキーボードアクセシビリティをサポートしています："}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"キー"}),e.jsx("th",{children:"動作"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"Enter"})," / ",e.jsx("code",{children:"Space"})]})}),e.jsx("td",{children:"ドロップダウンを開く / 選択中のオプションを選択"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Escape"})}),e.jsx("td",{children:"ドロップダウンを閉じる"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowDown"})}),e.jsx("td",{children:"次のオプションにフォーカス"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowUp"})}),e.jsx("td",{children:"前のオプションにフォーカス"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Home"})}),e.jsx("td",{children:"最初のオプションにフォーカス"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"End"})}),e.jsx("td",{children:"最後のオプションにフォーカス"})]})]})]}),`
`,e.jsx(n.p,{children:"無効なオプションは自動的にスキップされます。"}),`
`,e.jsx(n.h3,{id:"検索とグループ化の組み合わせ",children:"検索とグループ化の組み合わせ"}),`
`,e.jsx(n.p,{children:"検索機能とグループ化を同時に使用することも可能です。検索時は、条件に一致するオプションを含むグループのみが表示されます。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Selectbox
  options={groupedOptions}
  grouped
  searchable
  searchPlaceholder="Search all options..."
  onChange={(val) => console.log(val)}
/>
`})}),`
`,e.jsx(n.h2,{id:"アクセシビリティ",children:"アクセシビリティ"}),`
`,e.jsx(n.p,{children:"Selectboxコンポーネントは、WAI-ARIAのアクセシビリティガイドラインに準拠しています："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'role="combobox" と role="listbox" の適切な使用'}),`
`,e.jsx(n.li,{children:"aria-expanded、aria-selected、aria-disabled の状態管理"}),`
`,e.jsx(n.li,{children:"完全なキーボードナビゲーション"}),`
`,e.jsx(n.li,{children:"スクリーンリーダー対応"}),`
`,e.jsx(n.li,{children:"フォーカス管理とスムーズなスクロール"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"typescript-サポート",children:"TypeScript サポート"}),`
`,e.jsx(n.p,{children:"Selectboxコンポーネントは完全な型定義を提供しています。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Selectbox, SelectboxOption, SelectboxOptionGroup } from "./Selectbox";
import { T } from "../T";

// フラットなオプション
const options: SelectboxOption[] = [
  { label: "Option 1", value: "opt1" },
  { label: "Option 2", value: "opt2", disabled: true },
];

// グループ化されたオプション
const groupedOptions: SelectboxOptionGroup[] = [
  {
    label: "Group 1",
    options: [{ label: "Option 1", value: "opt1" }],
  },
];
`})})]})}function G(l={}){const{wrapper:n}={...r(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(o,{...l})}):o(l)}export{G as default};
