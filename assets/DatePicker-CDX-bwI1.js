import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-kRKb6otn.js";import{M as i,C as s,a}from"./blocks-h-koGg6Y.js";import{D as o,a as x,O as l,G as j,E as _,b as p,F as k}from"./DatePicker.stories-D9U-lAaj.js";import{T as n}from"./T-D3t-8OFd.js";import"./iframe-RqRUvN2f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-KrD9KPR3.js";import"./index-MJSI_oPR.js";import"./index-xDlYQR3e.js";import"./index-D5anLY7w.js";import"./DatePicker-zDI8xzEJ.js";import"./index-B1nuKDx0.js";import"./Calendar-CLFVxpiZ.js";import"./Icon-DEW6Teyt.js";/* empty css                 *//* empty css              */import"./Label-CONUD-o3.js";import"./Badge-C8j2XwRh.js";import"./useTranslation-CveckdUp.js";function r(c){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...t(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o}),`
`,e.jsx(d.h1,{id:"datepicker",children:"DatePicker"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(n,{k:"doc_datepicker_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_long_desc"})}),`
`,e.jsx(d.h2,{id:"",children:e.jsx(n,{k:"doc_basic_usage"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`import { DatePicker } from "@/components/DatePicker/DatePicker";

<DatePicker onChange={(date) => console.log(date)} placeholder="Select date" />;
`})}),`
`,e.jsx(d.h2,{id:"-1",children:e.jsx(n,{k:"doc_example"})}),`
`,e.jsx(d.h3,{id:"-2",children:e.jsx(n,{k:"doc_default"})}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(d.h3,{id:"-3",children:e.jsx(n,{k:"doc_outline"})}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(d.h3,{id:"-4",children:e.jsx(n,{k:"doc_ghost"})}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(d.h3,{id:"-5",children:e.jsx(n,{k:"doc_error_state"})}),`
`,e.jsx(s,{of:_}),`
`,e.jsx(d.h3,{id:"-6",children:e.jsx(n,{k:"doc_disabled_state"})}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(d.h3,{id:"-7",children:e.jsx(n,{k:"doc_full_width"})}),`
`,e.jsx(s,{of:k}),`
`,e.jsx(d.h2,{id:"-8",children:e.jsx(n,{k:"doc_datepicker_main_features"})}),`
`,e.jsx(d.h3,{id:"-9",children:e.jsx(n,{k:"doc_datepicker_custom_popup"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_custom_popup_desc"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_advantages"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_adv_1"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_adv_2"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_adv_3"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_adv_4"})}),`
`,e.jsx(d.h3,{id:"-10",children:e.jsx(n,{k:"doc_datepicker_clear_btn"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_clear_btn_desc"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-jsx",children:`<DatePicker clearable={true} onChange={(date) => console.log(date)} />
`})}),`
`,e.jsx(d.h3,{id:"-11",children:e.jsx(n,{k:"doc_datepicker_custom_format"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_custom_format_desc"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-jsx",children:`<>
  <DatePicker format="YYYY/MM/DD" onChange={(date) => console.log(date)} />

  <DatePicker format="DD-MM-YYYY" onChange={(date) => console.log(date)} />
</>
`})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_supported_formats"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_fmt_1"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_fmt_2"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_fmt_3"})}),`
`,e.jsx(d.h3,{id:"-12",children:e.jsx(n,{k:"doc_datepicker_control_types"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_control_types_desc"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_uncontrolled"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-jsx",children:`<DatePicker defaultValue={new Date()} onChange={(date) => console.log(date)} />
`})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_controlled"})}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-jsx",children:`const [date, setDate] = useState(new Date());

<DatePicker value={date} onChange={setDate} />;
`})}),`
`,e.jsx(d.h3,{id:"-13",children:e.jsx(n,{k:"doc_datepicker_keyboard"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_kb_1"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_kb_2"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_kb_3"})}),`
`,e.jsx(d.h3,{id:"-14",children:e.jsx(n,{k:"doc_datepicker_a11y"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_a11y_1"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_a11y_2"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_a11y_3"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_a11y_4"})}),`
`,e.jsx(d.h2,{id:"-15",children:e.jsx(n,{k:"doc_datepicker_integration"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"doc_datepicker_integration_desc"})}),`
`,e.jsx(d.h2,{id:"-16",children:e.jsx(n,{k:"doc_props"})}),`
`,e.jsx(a,{}),`
`,e.jsx(d.h2,{id:"-17",children:e.jsx(n,{k:"doc_datepicker_ts"})}),`
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
`})})]})}function X(c={}){const{wrapper:d}={...t(),...c.components};return d?e.jsx(d,{...c,children:e.jsx(r,{...c})}):r(c)}export{X as default};
