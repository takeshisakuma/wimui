import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as i,M as n,T as o,C as c,a as l}from"./blocks-BFZsosWo.js";import{Q as x,D as j}from"./QueryBuilder.stories-D2WOZOTI.js";import{T as r}from"./T-BJOQ5N6k.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BKE1Tr9u.js";import"./index-C8CE31Ln.js";import"./index-BZotvYDU.js";import"./index-Dt2zntcF.js";import"./index-CjwRUAOC.js";import"./index-CAsYfsFw.js";import"./IconButton-DJaTbKlv.js";import"./Button-pk85mVwt.js";import"./Icon-DwrnRIQE.js";import"./useTranslation-B4UNbNY1.js";import"./Selectbox-DTFMMmjk.js";import"./Transition-CD32uqHt.js";import"./BaseListItem-OUTXRcpb.js";import"./FieldTemplate-CuJ8YQlO.js";import"./FieldLabelContent-Cvt0BbSX.js";import"./Badge-DiZO74iU.js";import"./IndicatorBase-CLl2gYdJ.js";import"./FieldError-CevOZjcM.js";import"./Paragraph-BMhcnkZB.js";import"./InputBase-CKDVcJQS.js";import"./Input-D33qTdOY.js";/* empty css              */import"./NumberInput-DQGnHl3b.js";import"./DatePicker-B-ChxeM6.js";import"./Calendar-3aOI66-G.js";import"./Switch-Dk2YTkU7.js";import"./SegmentedControl-BShffGTp.js";import"./useIndicator-DuwCUgk1.js";function d(t){const s={code:"code",h2:"h2",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:x}),`
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
