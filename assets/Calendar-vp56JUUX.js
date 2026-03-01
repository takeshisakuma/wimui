import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DlgCFPTR.js";import{M as l,C as s,a as o}from"./blocks-CeNsGH9y.js";import{C as t,D as i,S as x,a as j}from"./Calendar.stories-B_lPb7RY.js";import{T as a}from"./T-QoylbS6P.js";import"./iframe-CxGJGCEe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWcj0LX7.js";import"./index-Bz28715Q.js";import"./index-C0leNsjK.js";import"./index-DldsUZWL.js";import"./Calendar--o-CTywo.js";import"./index-kCw4ylN7.js";import"./Icon-CBegJE_x.js";/* empty css                 */import"./useTranslation-zoxZjRpn.js";function r(d){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...c(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:t}),`
`,n.jsx(e.h1,{id:"",children:n.jsx(a,{k:"doc_calendar_title"})}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(a,{k:"doc_calendar_title"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_long_desc"})}),`
`,n.jsx(e.h2,{id:"-1",children:n.jsx(a,{k:"doc_basic_usage"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Calendar } from "@/components/Calendar/Calendar";

<Calendar onChange={(date) => console.log(date)} />;
`})}),`
`,n.jsx(e.h2,{id:"-2",children:n.jsx(a,{k:"doc_example"})}),`
`,n.jsx(e.h3,{id:"-3",children:n.jsx(a,{k:"doc_default"})}),`
`,n.jsx(s,{of:i}),`
`,n.jsx(e.h3,{id:"-4",children:n.jsx(a,{k:"doc_calendar_selected_date"})}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h3,{id:"-5",children:n.jsx(a,{k:"doc_disabled_state"})}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(e.h2,{id:"-6",children:n.jsx(a,{k:"doc_calendar_advanced_features"})}),`
`,n.jsx(e.h3,{id:"-7",children:n.jsx(a,{k:"doc_calendar_range_mode"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_range_mode_desc"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [range, setRange] = useState({ start: null, end: null });

<Calendar rangeMode range={range} onRangeChange={setRange} />;
`})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_behavior_colon"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_behavior_1"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_behavior_2"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_behavior_3"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_behavior_4"})}),`
`,n.jsx(e.h3,{id:"-8",children:n.jsx(a,{k:"doc_calendar_disabled_dates"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_disabled_dates_desc"})}),`
`,n.jsx(e.h4,{id:"-9",children:n.jsx(a,{k:"doc_calendar_disabled_by_array"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const disabledDates = [
  new Date(2024, 11, 25), // Christmas
  new Date(2025, 0, 1), // New Year's Day
];

<Calendar
  disabledDates={disabledDates}
  onChange={(date) => console.log(date)}
/>;
`})}),`
`,n.jsx(e.h4,{id:"-10",children:n.jsx(a,{k:"doc_calendar_disabled_by_function"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_disabled_by_function_desc"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Disable weekends
<Calendar
  isDateDisabled={(date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  }}
  onChange={(date) => console.log(date)}
/>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Disable past dates
<Calendar
  isDateDisabled={(date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }}
  onChange={(date) => console.log(date)}
/>
`})}),`
`,n.jsx(e.h3,{id:"-11",children:n.jsx(a,{k:"doc_calendar_min_max_dates"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_min_max_dates_desc"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const today = new Date();
const nextMonth = new Date();
nextMonth.setMonth(today.getMonth() + 1);

<Calendar
  minDate={today}
  maxDate={nextMonth}
  onChange={(date) => console.log(date)}
/>;
`})}),`
`,n.jsx(e.h3,{id:"-12",children:n.jsx(a,{k:"doc_calendar_combine_features"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [range, setRange] = useState({ start: null, end: null });

<Calendar
  rangeMode
  range={range}
  onRangeChange={setRange}
  minDate={new Date()}
  isDateDisabled={(date) => date.getDay() === 0} // Disable Sundays
/>;
`})}),`
`,n.jsx(e.h2,{id:"-13",children:n.jsx(a,{k:"doc_calendar_controlled_uncontrolled"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_controlled_uncontrolled_desc"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_uncontrolled"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Calendar defaultValue={new Date()} onChange={(date) => console.log(date)} />
`})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_controlled_colon"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const [date, setDate] = useState(new Date());

<Calendar value={date} onChange={setDate} />;
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(o,{}),`
`,n.jsx(e.h2,{id:"-14",children:n.jsx(a,{k:"doc_accessibility"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_a11y_1"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_a11y_2"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_a11y_3"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_a11y_4"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_a11y_5"})}),`
`,n.jsx(e.h2,{id:"-15",children:n.jsx(a,{k:"doc_calendar_integration_datepicker"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_calendar_integration_datepicker_desc"})}),`
`,n.jsx(e.h2,{id:"-16",children:n.jsx(a,{k:"doc_typescript_support"})}),`
`,n.jsx("p",{children:n.jsx(a,{k:"doc_typescript_support_desc"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Calendar } from "./Calendar";
import { T } from "../T";

<>
  {/* Single date selection */}
  <Calendar value={new Date()} onChange={(date: Date) => console.log(date)} />

  {/* Range selection */}
  <Calendar
    rangeMode
    range={{ start: new Date(), end: null }}
    onRangeChange={(range: { start: Date | null; end: Date | null }) => {
      console.log(range);
    }}
  />
</>;
`})})]})}function v(d={}){const{wrapper:e}={...c(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(r,{...d})}):r(d)}export{v as default};
