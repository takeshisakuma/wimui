import{j as s}from"./jsx-runtime-u17CrQMm.js";import{u as o,M as i,C as c,a as t}from"./blocks-D8fjAlme.js";import{M as x,D as j,a as l,L as h}from"./Masonry.stories-B3xNSZr1.js";import{T as n}from"./T-60teDpqi.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Ce8V-Zu8.js";import"./index-CpV918PH.js";import"./index-Cr-KTekg.js";import"./index-BzlS_ito.js";import"./index-5zXer8yF.js";import"./index-CWJxLETi.js";import"./Box-D4LyK5pJ.js";import"./style-utils-Bzkn8Zxa.js";import"./grid-utils-0MLss220.js";import"./useTranslation-CZV_GknJ.js";function r(d){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...o(),...d.components};return s.jsxs(s.Fragment,{children:[s.jsx(i,{of:x}),`
`,s.jsx(e.h1,{id:"masonry",children:"Masonry"}),`
`,s.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:s.jsx(n,{k:"doc.masonry_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc.masonry_long_desc"})}),`
`,s.jsx(e.h2,{id:"",children:s.jsx(n,{k:"doc.design_intent_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc.masonry_design_intent"})}),`
`,s.jsx(e.h2,{id:"-1",children:s.jsx(n,{k:"doc.choice_matrix_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc.masonry_choice_matrix_desc"})}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx(n,{k:"doc.component"})}),s.jsx("th",{children:s.jsx(n,{k:"doc.usage_scenario"})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("b",{children:"Masonry"})}),s.jsx("td",{children:s.jsx(n,{k:"doc.masonry_choice_self_when"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("b",{children:"Grid"})}),s.jsx("td",{children:s.jsx(n,{k:"doc.masonry_choice_alt_when"})})]})]})]}),`
`,s.jsx(e.h2,{id:"-2",children:s.jsx(n,{k:"doc.anatomy_title"})}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx(n,{k:"doc.component"})}),s.jsx("th",{children:s.jsx(n,{k:"doc.description"})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("b",{children:s.jsx(n,{k:"doc.masonry_anatomy_root_label"})})}),s.jsx("td",{children:s.jsx(n,{k:"doc.masonry_anatomy_root"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("b",{children:s.jsx(n,{k:"doc.masonry_anatomy_content_label"})})}),s.jsx("td",{children:s.jsx(n,{k:"doc.masonry_anatomy_content"})})]})]})]}),`
`,s.jsx(e.h2,{id:"-3",children:s.jsx(n,{k:"doc.content_guidelines_title"})}),`
`,s.jsx("ul",{children:s.jsx("li",{children:s.jsx(n,{k:"doc.masonry_content_guideline"})})}),`
`,s.jsx(e.h2,{id:"-4",children:s.jsx(n,{k:"doc.motion_spec_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc.masonry_motion_desc"})}),`
`,s.jsx(e.h2,{id:"-5",children:s.jsx(n,{k:"doc.a11y_spec_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc.masonry_a11y_desc"})}),`
`,s.jsx(e.h2,{id:"-6",children:s.jsx(n,{k:"doc.real_world_scenarios_title"})}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx(n,{k:"doc.usage_scenario"})}),s.jsx("th",{children:s.jsx(n,{k:"doc.table_header_description"})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:s.jsx(n,{k:"doc.scenario_ec_title"})})}),s.jsx("td",{children:s.jsx(n,{k:"doc.masonry_scenario_1"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:s.jsx(n,{k:"doc.scenario_article_title"})})}),s.jsx("td",{children:s.jsx(n,{k:"doc.masonry_scenario_2"})})]})]})]}),`
`,s.jsx(e.h2,{id:"-7",children:s.jsx(n,{k:"doc.best_practices_title"})}),`
`,s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(n,{k:"doc.masonry_best_practice_1"})}),s.jsx("li",{children:s.jsx(n,{k:"doc.masonry_best_practice_2"})})]}),`
`,s.jsx(e.h2,{id:"-8",children:s.jsx(n,{k:"doc.usage"})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import { Masonry } from "@/components/layout/Masonry/Masonry";
import { Box } from "../Box/Box";

const Demo = () => (
  <Masonry columns={3} spacing={16}>
    <Box h={150} bg="lightblue">
      1
    </Box>
    <Box h={200} bg="lightgreen">
      2
    </Box>
    <Box h={100} bg="lightpink">
      3
    </Box>
    <Box h={250} bg="lightyellow">
      4
    </Box>
  </Masonry>
);
`})}),`
`,s.jsx(c,{of:j}),`
`,s.jsx(e.h2,{id:"-9",children:s.jsx(n,{k:"doc.features"})}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:s.jsx(n,{k:"doc.features"})}),s.jsx("th",{children:s.jsx(n,{k:"doc.description"})})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:s.jsx(n,{k:"doc.masonry_feat_auto"})})}),s.jsx("td",{children:s.jsx(n,{k:"doc.masonry_feat_auto_desc"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:s.jsx(n,{k:"doc.masonry_feat_spacing"})})}),s.jsx("td",{children:s.jsx(n,{k:"doc.masonry_feat_spacing_desc"})})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:s.jsx(n,{k:"doc.masonry_feat_columns"})})}),s.jsx("td",{children:s.jsx(n,{k:"doc.masonry_feat_columns_desc"})})]})]})]}),`
`,s.jsx(e.h2,{id:"-10",children:s.jsx(n,{k:"doc.api_reference"})}),`
`,s.jsx(t,{}),`
`,s.jsx(e.h2,{id:"-11",children:s.jsx(n,{k:"doc.masonry_columns_adj"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc.masonry_columns_adj_desc"})}),`
`,s.jsx(c,{of:l}),`
`,s.jsx(e.h2,{id:"-12",children:s.jsx(n,{k:"doc.masonry_spacing_adj"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc.masonry_spacing_adj_desc"})}),`
`,s.jsx(c,{of:h}),`
`,s.jsx(e.h2,{id:"-13",children:s.jsx(n,{k:"doc.keyboard_nav_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc.masonry_keyboard_desc"})}),`
`,s.jsx(e.h2,{id:"-14",children:s.jsx(n,{k:"doc.i18n_title"})}),`
`,s.jsx("p",{children:s.jsx(n,{k:"doc.masonry_i18n_desc"})}),`
`,s.jsx(e.h2,{id:"-15",children:s.jsx(n,{k:"doc.test_title"})}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-bash",children:`npm run test -- Masonry
`})})]})}function L(d={}){const{wrapper:e}={...o(),...d.components};return e?s.jsx(e,{...d,children:s.jsx(r,{...d})}):r(d)}export{L as default};
