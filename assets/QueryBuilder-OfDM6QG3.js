import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as n}from"./index-CprKpjwp.js";import{M as s,T as d,C as l,a as c}from"./blocks-azUif3gx.js";import{Q as m,D as p}from"./QueryBuilder.stories-CRFP27lT.js";import{T as e}from"./T-DVNoXuPR.js";import"./iframe-Ck4sjCvr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWbNoSmI.js";import"./index-9X0ZTlKj.js";import"./index-dC18AgmQ.js";import"./index-DjV-pa2s.js";import"./index-BGo_XZDM.js";import"./IconButton-Ds2srQx5.js";import"./Button-BPXZ1oyI.js";import"./Icon-CJ1pGaGI.js";import"./useTranslation-CrQtSC0V.js";import"./Selectbox-1Da0MDu0.js";import"./Transition-D-HATDnH.js";import"./BaseListItem-1FFrMjNt.js";import"./FieldTemplate-C_x71lgj.js";import"./FieldLabelContent-BOAIFMb6.js";import"./Badge-tYKK0eIo.js";import"./IndicatorBase-BXQ9Glhc.js";import"./FieldError-DFApRPrh.js";import"./Paragraph-BFG90Z1j.js";import"./InputBase-B9gKuY4O.js";import"./Input-R5pne_C9.js";/* empty css              */import"./NumberInput-DeTrRowJ.js";import"./DatePicker-D5vUuQsQ.js";import"./Calendar-Hx0xr7Rv.js";import"./Switch-BcVxxyKR.js";import"./SegmentedControl-cSLbseml.js";import"./useIndicator-VN23uF4l.js";import"./i18nConstants-BpHxieg5.js";function o(i){const t={code:"code",h2:"h2",pre:"pre",...n(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:m}),`
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
