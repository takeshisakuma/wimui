import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BtwVTOkC.js";import{M as c,C as d,a as o}from"./blocks-B99V4heN.js";import{F as l,D as x,W as j,a as _}from"./Fieldset.stories-Dmy6sX6P.js";import{T as s}from"./T-Cq1AxBgr.js";import"./iframe-BdY1pJW4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-uV0rQHhY.js";import"./index-HVRkNyyT.js";import"./index-_iuPED8c.js";import"./index-Cxq8Tfzi.js";import"./index-DFUSeuIH.js";import"./Legend-Dyj9uxey.js";import"./FieldLabelContent-DuK6rmL6.js";import"./Badge-DSU0K7f4.js";import"./IndicatorBase-D7qm2mwX.js";import"./useTranslation-B7Xipwtw.js";import"./FieldTemplate-BmL3zOKH.js";import"./FieldError-YldRS5rL.js";import"./Paragraph-DH2oxtGA.js";import"./Input-CJTX9iTk.js";/* empty css              */import"./InputBase-sj7RD2WH.js";import"./Icon-BfUzh3J-.js";import"./CheckboxGroup-CEgM84u5.js";import"./Checkbox-Rv0C2StW.js";import"./i18nConstants-BpHxieg5.js";function t(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l}),`
`,e.jsx(i.h1,{id:"fieldset",children:"Fieldset"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(s,{k:"doc_fieldset_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_fieldset_long_desc"})}),`
`,e.jsx(i.h2,{id:"",children:e.jsx(s,{k:"doc_design_intent_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_fieldset_design_intent"})}),`
`,e.jsx(i.h2,{id:"-1",children:e.jsx(s,{k:"doc_choice_matrix_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_fieldset_choice_matrix_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(s,{k:"doc_component"})}),e.jsx("th",{children:e.jsx(s,{k:"doc_usage_scenario"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Fieldset"})}),e.jsx("td",{children:e.jsx(s,{k:"doc_fieldset_choice_self_when"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"InputGroup"})}),e.jsx("td",{children:e.jsx(s,{k:"doc_fieldset_choice_alt_when"})})]})]})]}),`
`,e.jsx(i.h2,{id:"-2",children:e.jsx(s,{k:"doc_anatomy_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(s,{k:"doc_component"})}),e.jsx("th",{children:e.jsx(s,{k:"doc_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx(s,{k:"doc_fieldset_anatomy_root_label"})})}),e.jsx("td",{children:e.jsx(s,{k:"doc_fieldset_anatomy_root"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:e.jsx(s,{k:"doc_fieldset_anatomy_content_label"})})}),e.jsx("td",{children:e.jsx(s,{k:"doc_fieldset_anatomy_content"})})]})]})]}),`
`,e.jsx(i.h2,{id:"-3",children:e.jsx(s,{k:"doc_content_guidelines_title"})}),`
`,e.jsx("ul",{children:e.jsx("li",{children:e.jsx(s,{k:"doc_fieldset_content_guideline"})})}),`
`,e.jsx(i.h2,{id:"-4",children:e.jsx(s,{k:"doc_motion_spec_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_fieldset_motion_desc"})}),`
`,e.jsx(i.h2,{id:"-5",children:e.jsx(s,{k:"doc_a11y_spec_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_fieldset_a11y_desc"})}),`
`,e.jsx(i.h2,{id:"-6",children:e.jsx(s,{k:"doc_real_world_scenarios_title"})}),`
`,e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx(s,{k:"doc_scenario_form_title"}),":"]}),e.jsx(s,{k:"doc_fieldset_scenario_1"})]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx(s,{k:"doc_scenario_admin_title"}),":"]}),e.jsx(s,{k:"doc_fieldset_scenario_2"})]})]}),`
`,e.jsx(i.h2,{id:"-7",children:e.jsx(s,{k:"doc_best_practices_title"})}),`
`,e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(s,{k:"doc_fieldset_best_practice_1"})}),e.jsx("li",{children:e.jsx(s,{k:"doc_fieldset_best_practice_2"})})]}),`
`,e.jsx(i.h2,{id:"-8",children:e.jsx(s,{k:"doc_usage"})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Fieldset, Legend, Label, Input } from "wimui";\r
import { T } from "../T";\r
\r
<Fieldset>\r
  <Legend>User Information</Legend>\r
  <Label label="Name">\r
    <Input />\r
  </Label>\r
  <Label label="Email Address">\r
    <Input />\r
  </Label>\r
</Fieldset>;
`})}),`
`,e.jsx(i.h2,{id:"-9",children:e.jsx(s,{k:"doc_stories"})}),`
`,e.jsx(i.h3,{id:"-10",children:e.jsx(s,{k:"doc_default"})}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(i.h3,{id:"-11",children:e.jsx(s,{k:"doc_fieldset_with_checkbox"})}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(i.h3,{id:"-12",children:e.jsx(s,{k:"doc_disabled_state"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_fieldset_disabled_desc"})}),`
`,e.jsx(d,{of:_}),`
`,e.jsx(i.h2,{id:"-13",children:e.jsx(s,{k:"doc_component_api"})}),`
`,e.jsx(o,{})]})}function H(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{H as default};
