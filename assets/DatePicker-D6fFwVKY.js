import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dj6CIejz.js";import{M as c,C as r,a as d}from"./blocks-BaLfbBwC.js";import{D as a,a as t,O as o,G as h,E as x,b as j,F as p}from"./DatePicker.stories-bi7F8ncX.js";import{T as m}from"./T-SFaqjFrj.js";import"./iframe-D0pcCsiG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CoDHe7zf.js";import"./index-b45Pj6QE.js";import"./index-16wL4qMl.js";import"./index-RV_8ZXaQ.js";import"./DatePicker-CqeAUN5u.js";import"./index-Die_jmEv.js";import"./Calendar-B0XsdORH.js";import"./Icon-BrQu9Vgw.js";/* empty css                 *//* empty css              */import"./Label-Bi9dynl8.js";import"./Badge-DrpzWMIc.js";import"./useTranslation-L3S_NP35.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:a}),`
`,e.jsx(n.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(m,{k:"doc_datepicker_title"})}),`
`,e.jsx(n.p,{children:"ユーザーが日付を選択するためのコンポーネントです。カスタムカレンダーポップアップを使用して、直感的な日付選択体験を提供します。"}),`
`,e.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DatePicker } from "@/components/DatePicker/DatePicker";

<DatePicker onChange={(date) => console.log(date)} placeholder="Select date" />;
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h3,{id:"outline",children:"Outline"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(n.h3,{id:"ghost",children:"Ghost"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"error-state",children:"Error State"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"disabled-state",children:"Disabled State"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"full-width",children:"Full Width"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"主な機能",children:"主な機能"}),`
`,e.jsx(n.h3,{id:"カスタムカレンダーポップアップ",children:"カスタムカレンダーポップアップ"}),`
`,e.jsxs(n.p,{children:["ネイティブの ",e.jsx(n.code,{children:'input type="date"'})," の代わりに、カスタマイズ可能なカレンダーポップアップを使用しています。"]}),`
`,e.jsx(n.p,{children:"利点:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"統一されたUIデザイン（ブラウザに依存しない）"}),`
`,e.jsx(n.li,{children:"より大きくクリックしやすいカレンダー"}),`
`,e.jsx(n.li,{children:"カスタマイズ可能な日付フォーマット"}),`
`,e.jsx(n.li,{children:"クリアボタンによる簡単なリセット"}),`
`]}),`
`,e.jsx(n.h3,{id:"クリアボタン",children:"クリアボタン"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"clearable"})," プロパティ（デフォルト: ",e.jsx(n.code,{children:"true"}),"）により、選択した日付を簡単にクリアできます。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<DatePicker clearable={true} onChange={(date) => console.log(date)} />
`})}),`
`,e.jsx(n.h3,{id:"カスタム日付フォーマット",children:"カスタム日付フォーマット"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"format"})," プロパティで表示フォーマットをカスタマイズできます。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<>
  <DatePicker format="YYYY/MM/DD" onChange={(date) => console.log(date)} />

  <DatePicker format="DD-MM-YYYY" onChange={(date) => console.log(date)} />
</>
`})}),`
`,e.jsx(n.p,{children:"サポートされるフォーマット:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"YYYY"})," - 4桁の年"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"MM"})," - 2桁の月"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DD"})," - 2桁の日"]}),`
`]}),`
`,e.jsx(n.h3,{id:"制御非制御コンポーネント",children:"制御/非制御コンポーネント"}),`
`,e.jsx(n.p,{children:"DatePickerは制御コンポーネントと非制御コンポーネントの両方として使用できます。"}),`
`,e.jsx(n.p,{children:"非制御コンポーネント:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<DatePicker defaultValue={new Date()} onChange={(date) => console.log(date)} />
`})}),`
`,e.jsx(n.p,{children:"制御コンポーネント:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const [date, setDate] = useState(new Date());

<DatePicker value={date} onChange={setDate} />;
`})}),`
`,e.jsx(n.h3,{id:"キーボード操作",children:"キーボード操作"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Enter"})," / ",e.jsx(n.code,{children:"Space"})," - カレンダーを開く"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Escape"})," - カレンダーを閉じる"]}),`
`,e.jsx(n.li,{children:"カレンダー内では矢印キーで日付を選択可能"}),`
`]}),`
`,e.jsx(n.h3,{id:"アクセシビリティ",children:"アクセシビリティ"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ARIA属性による適切なスクリーンリーダー対応"}),`
`,e.jsx(n.li,{children:"キーボードナビゲーション完全サポート"}),`
`,e.jsx(n.li,{children:"フォーカス管理"}),`
`,e.jsx(n.li,{children:"クリアボタンとカレンダーボタンにaria-label"}),`
`]}),`
`,e.jsx(n.h2,{id:"calendarコンポーネントとの統合",children:"Calendarコンポーネントとの統合"}),`
`,e.jsxs(n.p,{children:["DatePickerは内部で",e.jsx(n.a,{href:"/docs/component-navigation-calendar--docs",children:"Calendar"}),"コンポーネントを使用しています。将来的には、Calendarコンポーネントの機能（範囲選択、無効日付など）もDatePickerで利用可能になります。"]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"typescript-サポート",children:"TypeScript サポート"}),`
`,e.jsx(n.p,{children:"DatePickerは完全な型定義を提供しています。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DatePicker } from "./DatePicker";
import { T } from "../T";

<DatePicker
  value={new Date()}
  onChange={(date: Date | null) => {
    if (date) {
      console.log(date.toISOString());
    }
  }}
  format="YYYY-MM-DD"
  clearable
/>;
`})})]})}function G(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{G as default};
