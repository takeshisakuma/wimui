import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as n}from"./index-qaAemm8r.js";import{M as s,T as d,C as l,a as c}from"./blocks-DMRv_2O9.js";import{Q as m,D as p}from"./QueryBuilder.stories-B7HRhexs.js";import{T as e}from"./T-CJllSQGm.js";import"./iframe-B-ANg916.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgE8NQ94.js";import"./index--R-V1zdY.js";import"./index-D1siOz8T.js";import"./index-HRQXKz3X.js";import"./index-Cnzl_zof.js";import"./IconButton-D9RgT0_9.js";import"./Button-B1dJLznH.js";import"./Icon-CdAwrhsA.js";import"./useTranslation-Cd_w-E7u.js";import"./Selectbox-CoJEohrj.js";import"./Transition-DwJ31oC-.js";import"./BaseListItem-CbQ12Uuw.js";import"./FieldTemplate-Dtjue66b.js";import"./FieldLabelContent-HijMluMa.js";import"./Badge-CKZ-42WE.js";import"./IndicatorBase-DBkTYyxe.js";import"./FieldError-B6A4-3jT.js";import"./Paragraph-Cg0wpqMj.js";import"./InputBase-RUggcinO.js";import"./Input-CMTny6hZ.js";/* empty css              */import"./NumberInput-7bSWPWbz.js";import"./DatePicker-DTI106WK.js";import"./Calendar-DAMl4Xco.js";import"./Switch-CEYdQUYe.js";import"./SegmentedControl-B5Ztfxfu.js";import"./useIndicator-C3SxWNjF.js";import"./i18nConstants-BpHxieg5.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...n(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:m}),`
`,r.jsx(d,{}),`
`,r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:r.jsx(e,{k:"doc_queryBuilder_desc"})}),`
`,r.jsx(t.h2,{id:"",children:r.jsx(e,{k:"doc_querybuilder_logic_title"})}),`
`,r.jsx("p",{children:r.jsx(e,{k:"doc_querybuilder_logic_desc"})}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:r.jsx(e,{k:"table_header_item"})}),r.jsx("th",{children:r.jsx(e,{k:"table_header_role"})}),r.jsx("th",{children:r.jsx(e,{k:"table_header_reason"})})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"AND / OR"})}),r.jsx("td",{children:r.jsx(e,{k:"doc_querybuilder_logic_andor_title"})}),r.jsx("td",{children:r.jsx(e,{k:"doc_querybuilder_logic_andor_desc"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"NOT"})}),r.jsx("td",{children:r.jsx(e,{k:"doc_querybuilder_logic_not_title"})}),r.jsx("td",{children:r.jsx(e,{k:"doc_querybuilder_logic_not_desc"})})]})]})]}),`
`,r.jsx(t.h2,{id:"-1",children:r.jsx(e,{k:"doc_basic_usage"})}),`
`,r.jsx(t.pre,{children:r.jsx(t.code,{className:"language-tsx",children:`import { QueryBuilder } from "@/components/QueryBuilder/QueryBuilder";\r
\r
const fields = [\r
  { name: "firstName", label: "First Name", type: "string" },\r
  { name: "age", label: "Age", type: "number" },\r
];\r
\r
const MyComponent = () => {\r
  const [query, setQuery] = useState();\r
  return <QueryBuilder fields={fields} query={query} onChange={setQuery} />;\r
}
`})}),`
`,r.jsx(l,{of:p}),`
`,r.jsx(t.h2,{id:"-2",children:r.jsx(e,{k:"doc_props"})}),`
`,r.jsx(c,{})]})}function P(i={}){const{wrapper:t}={...n(),...i.components};return t?r.jsx(t,{...i,children:r.jsx(o,{...i})}):o(i)}export{P as default};
