import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-CQICydZs.js";import{M as l,C as a,a as t}from"./index-CkyYZtMe.js";import{C as i,D as o,S as c,a as h}from"./Calendar.stories-Y49yBa9Y.js";import{T as x}from"./T-wRVFwFiz.js";import"./iframe-B-XsOtuR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bi4b74DB.js";import"./index-DZxYwnVx.js";import"./index-DnRMOeIr.js";import"./index-DBiGecYx.js";import"./index-2znPfpe2.js";import"./Calendar-DOd9mLLD.js";import"./index-DMLdcoMu.js";import"./Icon-DcluXtku.js";/* empty css                 */import"./useTranslation-DUHwkI2a.js";function d(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:i}),`
`,n.jsx(e.h1,{id:"calendar",children:"Calendar"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(x,{k:"doc_calendar_title"})}),`
`,n.jsx(e.p,{children:"ユーザーが日付を閲覧し、選択するためのカレンダーコンポーネントです。単一日付選択、範囲選択、無効日付の設定など、柔軟な日付選択機能を提供します。"}),`
`,n.jsx(e.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Calendar } from "@/components/Calendar/Calendar";\r
\r
<Calendar \r
  onChange={(date) => console.log(date)}\r
/>
`})}),`
`,n.jsx(e.h2,{id:"使用例",children:"使用例"}),`
`,n.jsx(e.h3,{id:"デフォルト",children:"デフォルト"}),`
`,n.jsx(a,{of:o}),`
`,n.jsx(e.h3,{id:"特定の日付を選択",children:"特定の日付を選択"}),`
`,n.jsx(a,{of:c}),`
`,n.jsx(e.h3,{id:"無効状態",children:"無効状態"}),`
`,n.jsx(a,{of:h}),`
`,n.jsx(e.h2,{id:"高度な機能",children:"高度な機能"}),`
`,n.jsx(e.h3,{id:"範囲選択モード",children:"範囲選択モード"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"rangeMode"})," プロパティを有効にすると、日付範囲を選択できるようになります。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [range, setRange] = useState({ start: null, end: null });\r
\r
<Calendar \r
  rangeMode\r
  range={range}\r
  onRangeChange={setRange}\r
/>
`})}),`
`,n.jsx(e.p,{children:"動作:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"最初のクリックで範囲の開始日を選択"}),`
`,n.jsx(e.li,{children:"2回目のクリックで範囲の終了日を選択"}),`
`,n.jsx(e.li,{children:"3回目のクリックで新しい範囲を開始"}),`
`]}),`
`,n.jsx(e.p,{children:"範囲内の日付は視覚的に強調表示されます。"}),`
`,n.jsx(e.h3,{id:"無効日付の設定",children:"無効日付の設定"}),`
`,n.jsx(e.p,{children:"特定の日付を選択不可能にすることができます。"}),`
`,n.jsx(e.h4,{id:"日付配列で指定",children:"日付配列で指定"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const disabledDates = [\r
  new Date(2024, 11, 25), // クリスマス\r
  new Date(2025, 0, 1),   // 元日\r
];\r
\r
<Calendar \r
  disabledDates={disabledDates}\r
  onChange={(date) => console.log(date)}\r
/>
`})}),`
`,n.jsx(e.h4,{id:"カスタム関数で指定",children:"カスタム関数で指定"}),`
`,n.jsx(e.p,{children:"より柔軟な無効化ロジックを実装できます。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// 土日を無効化\r
<Calendar \r
  isDateDisabled={(date) => {\r
    const day = date.getDay();\r
    return day === 0 || day === 6; // 日曜日または土曜日\r
  }}\r
  onChange={(date) => console.log(date)}\r
/>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// 過去の日付を無効化\r
<Calendar \r
  isDateDisabled={(date) => {\r
    const today = new Date();\r
    today.setHours(0, 0, 0, 0);\r
    return date < today;\r
  }}\r
  onChange={(date) => console.log(date)}\r
/>
`})}),`
`,n.jsx(e.h3,{id:"最小最大日付の設定",children:"最小/最大日付の設定"}),`
`,n.jsx(e.p,{children:"選択可能な日付の範囲を制限できます。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const today = new Date();\r
const nextMonth = new Date();\r
nextMonth.setMonth(today.getMonth() + 1);\r
\r
<Calendar \r
  minDate={today}\r
  maxDate={nextMonth}\r
  onChange={(date) => console.log(date)}\r
/>
`})}),`
`,n.jsx(e.h3,{id:"すべての機能を組み合わせ",children:"すべての機能を組み合わせ"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [range, setRange] = useState({ start: null, end: null });\r
\r
<Calendar \r
  rangeMode\r
  range={range}\r
  onRangeChange={setRange}\r
  minDate={new Date()}\r
  isDateDisabled={(date) => date.getDay() === 0} // 日曜日を無効化\r
/>
`})}),`
`,n.jsx(e.h2,{id:"制御非制御コンポーネント",children:"制御/非制御コンポーネント"}),`
`,n.jsx(e.p,{children:"Calendarは制御コンポーネントと非制御コンポーネントの両方として使用できます。"}),`
`,n.jsx(e.p,{children:"非制御コンポーネント:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Calendar \r
  defaultValue={new Date()}\r
  onChange={(date) => console.log(date)}\r
/>
`})}),`
`,n.jsx(e.p,{children:"制御コンポーネント:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [date, setDate] = useState(new Date());\r
\r
<Calendar \r
  value={date}\r
  onChange={setDate}\r
/>
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{}),`
`,n.jsx(e.h2,{id:"アクセシビリティ",children:"アクセシビリティ"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ ナビゲーションボタンには適切なラベルまたはアイコンが使用されています"}),`
`,n.jsx(e.li,{children:"✅ 現在の月以外の日は視覚的に区別されています"}),`
`,n.jsx(e.li,{children:"✅ 選択された日付、および「今日」の日付が強調表示されます"}),`
`,n.jsx(e.li,{children:"✅ 無効な日付は視覚的に区別され、選択できません"}),`
`,n.jsx(e.li,{children:"✅ キーボードナビゲーションをサポート"}),`
`]}),`
`,n.jsx(e.h2,{id:"datepickerとの統合",children:"DatePickerとの統合"}),`
`,n.jsxs(e.p,{children:["Calendarコンポーネントは",n.jsx(e.a,{href:"/docs/component-forms-datepicker--docs",children:"DatePicker"}),"コンポーネント内で使用されています。DatePickerは、このCalendarコンポーネントをポップアップとして表示する便利なラッパーです。"]}),`
`,n.jsx(e.h2,{id:"typescript-サポート",children:"TypeScript サポート"}),`
`,n.jsx(e.p,{children:"Calendarコンポーネントは完全な型定義を提供しています。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Calendar } from './Calendar';\r
import { T } from "../T";\r
\r
<>\r
  {/* 単一日付選択 */}\r
  <Calendar \r
    value={new Date()}\r
    onChange={(date: Date) => console.log(date)}\r
  />\r
\r
  {/* 範囲選択 */}\r
  <Calendar \r
    rangeMode\r
    range={{ start: new Date(), end: null }}\r
    onRangeChange={(range: { start: Date | null; end: Date | null }) => {\r
      console.log(range);\r
    }}\r
  />\r
</>
`})})]})}function T(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(d,{...r})}):d(r)}export{T as default};
