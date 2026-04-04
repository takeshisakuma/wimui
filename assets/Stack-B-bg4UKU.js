import{j as s}from"./jsx-runtime-u17CrQMm.js";import{u as i,M as r,C as t,a as x}from"./blocks-BDCk-Ucz.js";import{S as o,D as j,R as l,a as h}from"./Stack.stories-BoA_vysl.js";import{T as c}from"./T-B6Uxg8_r.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Bn5mqC8Q.js";import"./index-B79QY6YB.js";import"./index-D1Ekd46R.js";import"./index-D1y91Dww.js";import"./index-COHu9d2X.js";import"./Stack-CwklBTLa.js";import"./index-K9UxIAwh.js";import"./Box-BghBncsr.js";import"./style-utils-Bzkn8Zxa.js";import"./grid-utils-0MLss220.js";import"./useTranslation-Cn4N2seM.js";function d(n){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...i(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{of:o}),`
`,s.jsx(e.h1,{id:"stack",children:"Stack"}),`
`,s.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:s.jsx(c,{k:"doc.stack_title"})}),`
`,s.jsx("p",{children:s.jsx(c,{k:"doc.stack_long_desc"})}),`
`,s.jsx(e.h2,{id:"",children:s.jsx(c,{k:"doc.design_intent_title"})}),`
`,s.jsx("p",{children:s.jsx(c,{k:"doc.stack_design_intent"})}),`
`,s.jsx(e.h2,{id:"-1",children:s.jsx(c,{k:"doc.choice_matrix_title"})}),`
`,s.jsx("p",{children:s.jsx(c,{k:"doc.stack_choice_matrix_desc"})}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx(c,{k:"doc.component"})}),s.jsx("th",{children:s.jsx(c,{k:"doc.usage_scenario"})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("b",{children:"Stack"})}),s.jsx("td",{children:s.jsx(c,{k:"doc.stack_choice_self_when"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("b",{children:"Flex"})}),s.jsx("td",{children:s.jsx(c,{k:"doc.stack_choice_alt_when"})})]})]})]}),`
`,s.jsx(e.h2,{id:"-2",children:s.jsx(c,{k:"doc.anatomy_title"})}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx(c,{k:"doc.component"})}),s.jsx("th",{children:s.jsx(c,{k:"doc.description"})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("b",{children:s.jsx(c,{k:"doc.stack_anatomy_root_label"})})}),s.jsx("td",{children:s.jsx(c,{k:"doc.stack_anatomy_root"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("b",{children:s.jsx(c,{k:"doc.stack_anatomy_content_label"})})}),s.jsx("td",{children:s.jsx(c,{k:"doc.stack_anatomy_content"})})]})]})]}),`
`,s.jsx(e.h2,{id:"-3",children:s.jsx(c,{k:"doc.content_guidelines_title"})}),`
`,s.jsx("ul",{children:s.jsx("li",{children:s.jsx(c,{k:"doc.stack_content_guideline"})})}),`
`,s.jsx(e.h2,{id:"-4",children:s.jsx(c,{k:"doc.motion_spec_title"})}),`
`,s.jsx("p",{children:s.jsx(c,{k:"doc.stack_motion_desc"})}),`
`,s.jsx(e.h2,{id:"-5",children:s.jsx(c,{k:"doc.a11y_spec_title"})}),`
`,s.jsx("p",{children:s.jsx(c,{k:"doc.stack_a11y_desc"})}),`
`,s.jsx(e.h2,{id:"-6",children:s.jsx(c,{k:"doc.real_world_scenarios_title"})}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx(c,{k:"doc.usage_scenario"})}),s.jsx("th",{children:s.jsx(c,{k:"doc.table_header_description"})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:s.jsx(c,{k:"doc.scenario_form_title"})})}),s.jsx("td",{children:s.jsx(c,{k:"doc.stack_scenario_1"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:s.jsx(c,{k:"doc.scenario_dashboard_title"})})}),s.jsx("td",{children:s.jsx(c,{k:"doc.stack_scenario_2"})})]})]})]}),`
`,s.jsx(e.h2,{id:"-7",children:s.jsx(c,{k:"doc.best_practices_title"})}),`
`,s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(c,{k:"doc.stack_best_practice_1"})}),s.jsx("li",{children:s.jsx(c,{k:"doc.stack_best_practice_2"})})]}),`
`,s.jsx(e.h2,{id:"-8",children:s.jsx(c,{k:"doc.usage"})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import { Stack } from "@/components/layout/Stack/Stack";
import { Box } from "../Box/Box";

const Demo = () => (
  <Stack gap="md">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
    <Box>Item 3</Box>
  </Stack>
);
`})}),`
`,s.jsx(t,{of:j}),`
`,s.jsx(e.h2,{id:"-9",children:s.jsx(c,{k:"doc.features"})}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx(c,{k:"doc.features"})}),s.jsx("th",{children:s.jsx(c,{k:"doc.description"})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:s.jsx(c,{k:"doc.stack_feat_reset"})})}),s.jsx("td",{children:s.jsx(c,{k:"doc.stack_feat_reset_desc"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:s.jsx(c,{k:"doc.stack_feat_space"})})}),s.jsx("td",{children:s.jsx(c,{k:"doc.stack_feat_space_desc"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:s.jsx(c,{k:"doc.stack_feat_flex"})})}),s.jsx("td",{children:s.jsx(c,{k:"doc.stack_feat_flex_desc"})})]})]})]}),`
`,s.jsx(e.h2,{id:"-10",children:s.jsx(c,{k:"doc.api_reference"})}),`
`,s.jsx(x,{}),`
`,s.jsx(e.h2,{id:"-11",children:s.jsx(c,{k:"doc.stack_row_title"})}),`
`,s.jsx("p",{children:s.jsx(c,{k:"doc.stack_row_desc"})}),`
`,s.jsx(t,{of:l}),`
`,s.jsx(e.h2,{id:"-12",children:s.jsx(c,{k:"doc.stack_spacing_title"})}),`
`,s.jsx("p",{children:s.jsx(c,{k:"doc.stack_spacing_desc"})}),`
`,s.jsx(t,{of:h}),`
`,s.jsx(e.h2,{id:"-13",children:s.jsx(c,{k:"doc.keyboard_nav_title"})}),`
`,s.jsx("p",{children:s.jsx(c,{k:"doc.stack_keyboard_desc"})}),`
`,s.jsx(e.h2,{id:"-14",children:s.jsx(c,{k:"doc.i18n_title"})}),`
`,s.jsx("p",{children:s.jsx(c,{k:"doc.stack_i18n_desc"})}),`
`,s.jsx(e.h2,{id:"-15",children:s.jsx(c,{k:"doc.test_title"})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-bash",children:`npm run test -- Stack
`})})]})}function I(n={}){const{wrapper:e}={...i(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(d,{...n})}):d(n)}export{I as default};
