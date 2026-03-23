import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as i,M as n,T as o,C as c,a as l}from"./blocks-Byh-As1x.js";import{Q as x,D as j}from"./QueryBuilder.stories-GCwSoykx.js";import{T as r}from"./T-OGzsUJ49.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-R6z5wUgf.js";import"./index-CxBHpVFF.js";import"./index-wBMoDIa2.js";import"./index-C-gbHaDk.js";import"./index-C7fifDZ6.js";import"./index-CliG8xe-.js";import"./IconButton-C4C5vJC6.js";import"./Button-D9Dml_tD.js";import"./Icon-CF3eexrr.js";import"./useTranslation-ByGRA6ap.js";import"./Selectbox-CBuG_778.js";import"./Transition-Bg-BVLyN.js";import"./BaseListItem-Bxql1_Pf.js";import"./FieldTemplate-BmI-qdJC.js";import"./FieldLabelContent-wItNUbFE.js";import"./Badge-CI3gPefZ.js";import"./IndicatorBase-CHdy7tdS.js";import"./FieldError-BoVvP7Wr.js";import"./Paragraph-CPnzbXqm.js";import"./InputBase-CT8JuBdY.js";import"./Input-Ce4f9wEa.js";/* empty css              */import"./NumberInput-CFWTIJPx.js";import"./DatePicker-C138-bG1.js";import"./Calendar-BGm6go7e.js";import"./Switch-CXOCKpHX.js";import"./SegmentedControl-klHmqvzf.js";import"./useIndicator-GwKW5-j1.js";function d(t){const s={code:"code",h2:"h2",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:x}),`
`,e.jsx(o,{}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(r,{k:"doc_queryBuilder_desc"})}),`
`,e.jsx(s.h2,{id:"",children:e.jsx(r,{k:"doc_querybuilder_logic_title"})}),`
`,e.jsx("p",{children:e.jsx(r,{k:"doc_querybuilder_logic_desc"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(r,{k:"table_header_item"})}),e.jsx("th",{children:e.jsx(r,{k:"table_header_role"})}),e.jsx("th",{children:e.jsx(r,{k:"table_header_reason"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"AND / OR"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_querybuilder_logic_andor_title"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_querybuilder_logic_andor_desc"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"NOT"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_querybuilder_logic_not_title"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_querybuilder_logic_not_desc"})})]})]})]}),`
`,e.jsx(s.h2,{id:"-1",children:e.jsx(r,{k:"doc_basic_usage"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { QueryBuilder } from "@/components/QueryBuilder/QueryBuilder";

const fields = [
  { name: "firstName", label: "First Name", type: "string" },
  { name: "age", label: "Age", type: "number" },
];

const MyComponent = () => {
  const [query, setQuery] = useState();
  return <QueryBuilder fields={fields} query={query} onChange={setQuery} />;
}
`})}),`
`,e.jsx(c,{of:j}),`
`,e.jsx(s.h2,{id:"-2",children:e.jsx(r,{k:"doc_design_tokens_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(r,{k:"doc_token"})}),e.jsx("th",{children:e.jsx(r,{k:"doc_usage"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--color-destructive"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_querybuilder_token_destructive"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--wim-color-border"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_querybuilder_token_border"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--wim-color-bg-secondary"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_querybuilder_token_bg_secondary"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--bg-component"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_querybuilder_token_bg_component"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--radius-lg"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_querybuilder_token_radius"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--transition-fast"})}),e.jsx("td",{children:e.jsx(r,{k:"doc_querybuilder_token_transition"})})]})]})]}),`
`,e.jsx(s.h2,{id:"-3",children:e.jsx(r,{k:"doc_props"})}),`
`,e.jsx(l,{})]})}function J(t={}){const{wrapper:s}={...i(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(d,{...t})}):d(t)}export{J as default};
