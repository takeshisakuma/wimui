import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-38Pry2Ly.js";import{M as t,C as r,a as l}from"./blocks-Dh5BOZqK.js";import{D as a,a as x,O as o,G as j,E as h,b as p,F as _}from"./DatePicker.stories-_PZrbTfE.js";import{T as n}from"./T-BqnUr1O_.js";import"./iframe-D4E_IFvf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-nh54FCmh.js";import"./index-BitMbDxF.js";import"./index-Dv2aO7jb.js";import"./index-BUvtIhUz.js";import"./DatePicker-DEEUk3Xr.js";import"./index-c_hinErY.js";import"./Calendar-DqOM1_1F.js";import"./Icon-q4QA7_pD.js";/* empty css                 */import"./useTranslation-DU1rn0mm.js";/* empty css              */import"./Label-BUr5QamJ.js";import"./Badge-D9K3WPzE.js";function c(s){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
`,e.jsx(d.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(n,{k:"doc_datepicker_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_long_desc"})}),`
`,e.jsx(d.h2,{id:"",children:e.jsx(n,{k:"doc_basic_usage"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { DatePicker } from "@/components/DatePicker/DatePicker";

<DatePicker onChange={(date) => console.log(date)} placeholder="Select date" />;
`})}),`
`,e.jsx(d.h2,{id:"-1",children:e.jsx(n,{k:"doc_example"})}),`
`,e.jsx(d.h3,{id:"-2",children:e.jsx(n,{k:"doc_default"})}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(d.h3,{id:"-3",children:e.jsx(n,{k:"doc_outline"})}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(d.h3,{id:"-4",children:e.jsx(n,{k:"doc_ghost"})}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(d.h3,{id:"-5",children:e.jsx(n,{k:"doc_error_state"})}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(d.h3,{id:"-6",children:e.jsx(n,{k:"doc_disabled_state"})}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(d.h3,{id:"-7",children:e.jsx(n,{k:"doc_full_width"})}),`
`,e.jsx(r,{of:_}),`
`,e.jsx(d.h2,{id:"-8",children:e.jsx(n,{k:"doc_datepicker_main_features"})}),`
`,e.jsx(d.h3,{id:"-9",children:e.jsx(n,{k:"doc_datepicker_custom_popup"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_custom_popup_desc"})}),`
`,e.jsx(d.h3,{id:"-10",children:e.jsx(n,{k:"doc_datepicker_advantages"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n,{k:"doc_datepicker_adv_1"})}),e.jsx("li",{children:e.jsx(n,{k:"doc_datepicker_adv_2"})}),e.jsx("li",{children:e.jsx(n,{k:"doc_datepicker_adv_3"})}),e.jsx("li",{children:e.jsx(n,{k:"doc_datepicker_adv_4"})})]}),`
`,e.jsx(d.h2,{id:"カレンダー選択フロー",children:"カレンダー選択フロー"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsx(d.li,{children:"1回目のクリックで開始日を選択します。"}),`
`,e.jsx(d.li,{children:"2回目のクリックで終了日を選択します。"}),`
`,e.jsx(d.li,{children:"選択中は開始日〜終了日の間がハイライト表示されます。"}),`
`,e.jsx(d.li,{children:"開始日より前の日付を終了日として選択した場合、自動的に入れ替わります。"}),`
`]}),`
`,e.jsx(d.h3,{id:"-11",children:e.jsx(n,{k:"doc_datepicker_clear_btn"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_clear_btn_desc"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-jsx",children:`<DatePicker clearable={true} onChange={(date) => console.log(date)} />
`})}),`
`,e.jsx(d.h3,{id:"-12",children:e.jsx(n,{k:"doc_datepicker_custom_format"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_custom_format_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Format"}),e.jsx("th",{children:"Example"}),e.jsx("th",{children:"タイプ"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"YYYY/MM/DD"}),e.jsx("td",{children:"2023/04/15"}),e.jsx("td",{children:"デフォルト"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"MM/DD/YYYY"}),e.jsx("td",{children:"04/15/2023"}),e.jsx("td",{children:"英式"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"DD-MM-YYYY"}),e.jsx("td",{children:"15-04-2023"}),e.jsx("td",{children:"欧式"})]})]})]}),`
`,e.jsx(d.h3,{id:"-13",children:e.jsx(n,{k:"doc_datepicker_control_types"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_control_types_desc"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_uncontrolled"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-jsx",children:`<DatePicker defaultValue={new Date()} onChange={(date) => console.log(date)} />
`})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_controlled"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-jsx",children:`const [date, setDate] = useState(new Date());

<DatePicker value={date} onChange={setDate} />;
`})}),`
`,e.jsx(d.h3,{id:"-14",children:e.jsx(n,{k:"doc_datepicker_keyboard"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"操作"}),e.jsx("th",{children:"キー"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"カレンダーを開く"}),e.jsx("td",{children:"Enter / Space"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"日付を移動・選択"}),e.jsx("td",{children:"矢印キー / Enter"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"カレンダーを閉じる"}),e.jsx("td",{children:"Escape"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"日付を移動"}),e.jsx("td",{children:"矢印キー"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"日付を選択"}),e.jsx("td",{children:"Enter / Space"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"月を移動"}),e.jsx("td",{children:"Page Up / Down"})]})]})]}),`
`,e.jsx(d.h3,{id:"-15",children:e.jsx(n,{k:"doc_datepicker_a11y"})}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:["ポップアップコンテンツには ",e.jsx("code",{children:'role="dialog"'})," を適用しています。"]}),e.jsxs("li",{children:["入力欄には ",e.jsx("code",{children:"aria-label"})," や ",e.jsx("code",{children:"aria-describedby"})," が設定されます。"]}),e.jsxs("li",{children:["無効化された日付には ",e.jsx("code",{children:"aria-disabled"})," が設定されます。"]})]}),`
`,e.jsx(d.h2,{id:"-16",children:e.jsx(n,{k:"doc_datepicker_integration"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_integration_desc"})}),`
`,e.jsx(d.h2,{id:"-17",children:e.jsx(n,{k:"doc_props"})}),`
`,e.jsx(l,{}),`
`,e.jsx(d.h2,{id:"-18",children:e.jsx(n,{k:"doc_datepicker_ts"})}),`
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
`})})]})}function X(s={}){const{wrapper:d}={...i(),...s.components};return d?e.jsx(d,{...s,children:e.jsx(c,{...s})}):c(s)}export{X as default};
