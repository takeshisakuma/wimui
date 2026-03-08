import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BbELdArX.js";import{M as t,T as l,C as i,a as x}from"./blocks-C0AWoM0t.js";import{D as o,a,O as j,G as h,E as _,b as p,F as k}from"./DatePicker.stories-BGk4sop7.js";import{T as n}from"./T-BeScbPr-.js";import"./iframe-DgQoBtfe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RxXSG2XW.js";import"./index-rLXbGFcJ.js";import"./index-BwUdaykg.js";import"./index-DkAcOnWZ.js";import"./DatePicker-CWaRnZBI.js";import"./index-CFIryxeI.js";import"./Calendar-BlgdXNnl.js";import"./Icon-C-Y18G8f.js";/* empty css                 */import"./useTranslation-DccyvZwG.js";/* empty css              */import"./Label-nQHV7_Pp.js";import"./Badge-C1OUazr5.js";function c(s){const d={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o}),`
`,e.jsx(l,{}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(n,{k:"doc_datepicker_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_long_desc"})}),`
`,e.jsx(d.h2,{id:"",children:e.jsx(n,{k:"doc_guidelines_title"})}),`
`,e.jsx(d.h3,{id:"-1",children:e.jsx(n,{k:"doc_guideline_when_to_use"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{k:"doc_datepicker_guideline_1"})}),e.jsx("li",{children:e.jsx(n,{k:"doc_datepicker_guideline_2"})})]}),`
`,e.jsx(d.h2,{id:"-2",children:e.jsx(n,{k:"doc_basic_usage"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { DatePicker } from "@/components/DatePicker/DatePicker";

<DatePicker onChange={(date) => console.log(date)} placeholder="Select date" />;
`})}),`
`,e.jsx(d.h2,{id:"-3",children:e.jsx(n,{k:"doc_variations"})}),`
`,e.jsx(d.h3,{id:"-4",children:e.jsx(n,{k:"doc_default"})}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(d.h3,{id:"-5",children:e.jsx(n,{k:"doc_outline"})}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(d.h3,{id:"-6",children:e.jsx(n,{k:"doc_ghost"})}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(d.h3,{id:"-7",children:e.jsx(n,{k:"doc_error_state"})}),`
`,e.jsx(i,{of:_}),`
`,e.jsx(d.h3,{id:"-8",children:e.jsx(n,{k:"doc_disabled_state"})}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(d.h3,{id:"-9",children:e.jsx(n,{k:"doc_full_width"})}),`
`,e.jsx(i,{of:k}),`
`,e.jsx(d.h2,{id:"-10",children:e.jsx(n,{k:"doc_datepicker_main_features"})}),`
`,e.jsx(d.h3,{id:"-11",children:e.jsx(n,{k:"doc_datepicker_custom_popup"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_custom_popup_desc"})}),`
`,e.jsx(d.h3,{id:"-12",children:e.jsx(n,{k:"doc_datepicker_advantages"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{k:"doc_datepicker_adv_1"})}),e.jsx("li",{children:e.jsx(n,{k:"doc_datepicker_adv_2"})}),e.jsx("li",{children:e.jsx(n,{k:"doc_datepicker_adv_3"})}),e.jsx("li",{children:e.jsx(n,{k:"doc_datepicker_adv_4"})})]}),`
`,e.jsx(d.h2,{id:"カレンダー選択フロー",children:"カレンダー選択フロー"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsx(d.li,{children:"1回目のクリックで開始日を選択します。"}),`
`,e.jsx(d.li,{children:"2回目のクリックで終了日を選択します。"}),`
`,e.jsx(d.li,{children:"選択中は開始日〜終了日の間がハイライト表示されます。"}),`
`,e.jsx(d.li,{children:"開始日より前の日付を終了日として選択した場合、自動的に入れ替わります。"}),`
`]}),`
`,e.jsx(d.h3,{id:"-13",children:e.jsx(n,{k:"doc_datepicker_clear_btn"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_clear_btn_desc"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-jsx",children:`<DatePicker clearable={true} onChange={(date) => console.log(date)} />
`})}),`
`,e.jsx(d.h3,{id:"-14",children:e.jsx(n,{k:"doc_datepicker_custom_format"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_custom_format_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Format"}),e.jsx("th",{children:"Example"}),e.jsx("th",{children:"タイプ"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"YYYY/MM/DD"}),e.jsx("td",{children:"2023/04/15"}),e.jsx("td",{children:"デフォルト"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"MM/DD/YYYY"}),e.jsx("td",{children:"04/15/2023"}),e.jsx("td",{children:"英式"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"DD-MM-YYYY"}),e.jsx("td",{children:"15-04-2023"}),e.jsx("td",{children:"欧式"})]})]})]}),`
`,e.jsx(d.h3,{id:"-15",children:e.jsx(n,{k:"doc_datepicker_control_types"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_control_types_desc"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_uncontrolled"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-jsx",children:`<DatePicker defaultValue={new Date()} onChange={(date) => console.log(date)} />
`})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_controlled"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-jsx",children:`const [date, setDate] = useState(new Date());

<DatePicker value={date} onChange={setDate} />;
`})}),`
`,e.jsx(d.h3,{id:"-16",children:e.jsx(n,{k:"doc_datepicker_keyboard"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"操作"}),e.jsx("th",{children:"キー"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"カレンダーを開く"}),e.jsx("td",{children:"Enter / Space"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"日付を移動・選択"}),e.jsx("td",{children:"矢印キー / Enter"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"カレンダーを閉じる"}),e.jsx("td",{children:"Escape"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"日付を移動"}),e.jsx("td",{children:"矢印キー"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"日付を選択"}),e.jsx("td",{children:"Enter / Space"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"月を移動"}),e.jsx("td",{children:"Page Up / Down"})]})]})]}),`
`,e.jsx(d.h3,{id:"-17",children:e.jsx(n,{k:"doc_datepicker_a11y"})}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:["ポップアップコンテンツには ",e.jsx("code",{children:'role="dialog"'})," を適用しています。"]}),e.jsxs("li",{children:["入力欄には ",e.jsx("code",{children:"aria-label"})," や ",e.jsx("code",{children:"aria-describedby"})," が設定されます。"]}),e.jsxs("li",{children:["無効化された日付には ",e.jsx("code",{children:"aria-disabled"})," が設定されます。"]})]}),`
`,e.jsx(d.h2,{id:"-18",children:e.jsx(n,{k:"doc_datepicker_integration"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_integration_desc"})}),`
`,e.jsx(d.h2,{id:"-19",children:e.jsx(n,{k:"doc_props"})}),`
`,e.jsx(x,{}),`
`,e.jsx(d.h2,{id:"-20",children:e.jsx(n,{k:"doc_datepicker_ts"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_ts_desc"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { DatePicker } from "./DatePicker";
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
`})})]})}function G(s={}){const{wrapper:d}={...r(),...s.components};return d?e.jsx(d,{...s,children:e.jsx(c,{...s})}):c(s)}export{G as default};
