"use client";
import{i as e}from"./preload-helper-CT_b8DTk.js";import{cr as t}from"./iframe-F5Up1IQq.js";import{D as n,h as r,n as i,u as a}from"./blocks-Cr7x-2eu.js";import{t as o}from"./mdx-react-shim-svBJHuCI.js";import{n as s,t as c}from"./T-CCaue7Hv.js";import{n as l,t as u}from"./Docgen-DM0MpGHY.js";import{Default as d,Disabled as f,SelectedDate as p,n as m,t as h}from"./Calendar.stories-Dppj5mGk.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,pre:`pre`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h1,{id:``,children:(0,v.jsx)(c,{k:`doc.calendar_title`})}),`
`,(0,v.jsx)(`p`,{style:{margin:`0 0 16px 0`,fontSize:`var(--wim-font-size-lg)`,lineHeight:`var(--wim-line-height-loose)`,color:`var(--wim-color-text-secondary)`},children:(0,v.jsx)(c,{k:`doc.calendar_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_long_desc`})}),`
`,(0,v.jsx)(t.h2,{id:`-1`,children:(0,v.jsx)(c,{k:`doc.design_intent_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_design_intent`})}),`
`,(0,v.jsx)(t.h2,{id:`-2`,children:(0,v.jsx)(c,{k:`doc.choice_matrix_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_choice_matrix_desc`})}),`
`,(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:(0,v.jsx)(c,{k:`doc.component`})}),(0,v.jsx)(`th`,{children:(0,v.jsx)(c,{k:`doc.usage_scenario`})})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`b`,{children:`Calendar`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.calendar_choice_self_when`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`b`,{children:`DatePicker`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.calendar_choice_alt_when`})})]})]})]}),`
`,(0,v.jsx)(u,{componentName:`Calendar`,section:`anatomy`}),`
`,(0,v.jsx)(t.h2,{id:`-3`,children:(0,v.jsx)(c,{k:`doc.a11y_spec_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_a11y_desc`})}),`
`,(0,v.jsx)(t.h2,{id:`-4`,children:(0,v.jsx)(c,{k:`doc.real_world_scenarios_title`})}),`
`,(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:(0,v.jsx)(c,{k:`doc.usage_scenario`})}),(0,v.jsx)(`th`,{children:(0,v.jsx)(c,{k:`doc.table_header_description`})})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:(0,v.jsx)(c,{k:`doc.scenario_form_title`})})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.calendar_scenario_1`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(`strong`,{children:(0,v.jsx)(c,{k:`doc.scenario_admin_title`})})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(c,{k:`doc.calendar_scenario_2`})})]})]})]}),`
`,(0,v.jsx)(t.h2,{id:`-5`,children:(0,v.jsx)(c,{k:`doc.best_practices_title`})}),`
`,(0,v.jsxs)(`ul`,{children:[(0,v.jsx)(`li`,{children:(0,v.jsx)(c,{k:`doc.calendar_best_practice_1`})}),(0,v.jsx)(`li`,{children:(0,v.jsx)(c,{k:`doc.calendar_best_practice_2`})})]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { Calendar } from "wimui";

<Calendar onChange={(date) => console.log(date)} />;
`})}),`
`,(0,v.jsx)(t.h2,{id:`-6`,children:(0,v.jsx)(c,{k:`doc.example`})}),`
`,(0,v.jsx)(t.h3,{id:`-7`,children:(0,v.jsx)(c,{k:`doc.default`})}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(t.h3,{id:`-8`,children:(0,v.jsx)(c,{k:`doc.calendar_selected_date`})}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(t.h3,{id:`-9`,children:(0,v.jsx)(c,{k:`doc.disabled_state`})}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`-10`,children:(0,v.jsx)(c,{k:`doc.calendar_advanced_features`})}),`
`,(0,v.jsx)(t.h3,{id:`-11`,children:(0,v.jsx)(c,{k:`doc.calendar_range_mode`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_range_mode_desc`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`const [range, setRange] = useState({ start: null, end: null });

<Calendar rangeMode range={range} onRangeChange={setRange} />;
`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.behavior_colon`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_behavior_1`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_behavior_2`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_behavior_3`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_behavior_4`})}),`
`,(0,v.jsx)(t.h3,{id:`-12`,children:(0,v.jsx)(c,{k:`doc.calendar_disabled_dates`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_disabled_dates_desc`})}),`
`,(0,v.jsx)(t.h4,{id:`-13`,children:(0,v.jsx)(c,{k:`doc.calendar_disabled_by_array`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`const disabledDates = [
  new Date(2024, 11, 25), // Christmas
  new Date(2025, 0, 1), // New Year's Day
];

<Calendar
  disabledDates={disabledDates}
  onChange={(date) => console.log(date)}
/>;
`})}),`
`,(0,v.jsx)(t.h4,{id:`-14`,children:(0,v.jsx)(c,{k:`doc.calendar_disabled_by_function`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_disabled_by_function_desc`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`// Disable weekends
<Calendar
  isDateDisabled={(date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  }}
  onChange={(date) => console.log(date)}
/>
`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`// Disable past dates
<Calendar
  isDateDisabled={(date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }}
  onChange={(date) => console.log(date)}
/>
`})}),`
`,(0,v.jsx)(t.h3,{id:`-15`,children:(0,v.jsx)(c,{k:`doc.calendar_min_max_dates`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_min_max_dates_desc`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`const today = new Date();
const nextMonth = new Date();
nextMonth.setMonth(today.getMonth() + 1);

<Calendar
  minDate={today}
  maxDate={nextMonth}
  onChange={(date) => console.log(date)}
/>;
`})}),`
`,(0,v.jsx)(t.h3,{id:`-16`,children:(0,v.jsx)(c,{k:`doc.calendar_week_start`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_week_start_desc`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`{/* 日曜始まり（デフォルト！E*/}
<Calendar weekStartsOn={0} onChange={(date) => console.log(date)} />

{/* 月曜始まめE*/}
<Calendar weekStartsOn={1} onChange={(date) => console.log(date)} />
`})}),`
`,(0,v.jsx)(t.h3,{id:`-17`,children:(0,v.jsx)(c,{k:`doc.calendar_combine_features`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`const [range, setRange] = useState({ start: null, end: null });

<Calendar
  rangeMode
  range={range}
  onRangeChange={setRange}
  minDate={new Date()}
  isDateDisabled={(date) => date.getDay() === 0} // Disable Sundays
/>;
`})}),`
`,(0,v.jsx)(t.h2,{id:`-18`,children:(0,v.jsx)(c,{k:`doc.calendar_controlled_uncontrolled`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_controlled_uncontrolled_desc`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.uncontrolled`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`<Calendar defaultValue={new Date()} onChange={(date) => console.log(date)} />
`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.controlled_colon`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-jsx`,children:`const [date, setDate] = useState(new Date());

<Calendar value={date} onChange={setDate} />;
`})}),`
`,(0,v.jsx)(u,{componentName:`Calendar`,section:`props`}),`
`,(0,v.jsx)(t.h2,{id:`-19`,children:(0,v.jsx)(c,{k:`doc.accessibility`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_a11y_1`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_a11y_2`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_a11y_3`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_a11y_4`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_a11y_5`})}),`
`,(0,v.jsx)(t.h2,{id:`-20`,children:(0,v.jsx)(c,{k:`doc.calendar_integration_datepicker`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_integration_datepicker_desc`})}),`
`,(0,v.jsx)(t.h2,{id:`-21`,children:(0,v.jsx)(c,{k:`doc.typescript_support`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.typescript_support_desc`})}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-tsx`,children:`import { Calendar } from "wimui";

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
`})}),`
`,(0,v.jsx)(u,{componentName:`Calendar`,section:`tokens`}),`
`,(0,v.jsx)(t.h2,{id:`-22`,children:(0,v.jsx)(c,{k:`doc.keyboard_nav_title`})}),`
`,(0,v.jsx)(`p`,{children:(0,v.jsx)(c,{k:`doc.calendar_keyboard_desc`})}),`
`,(0,v.jsx)(u,{componentName:`Calendar`,section:`i18n`}),`
`,(0,v.jsx)(u,{componentName:`Calendar`,section:`test`})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),o(),r(),m(),s(),l()}))();export{_ as default};