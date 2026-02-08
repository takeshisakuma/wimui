import{j as e}from"./react-D-G-yZ1o.js";import{useMDXComponents as t}from"./@mdx-js-yW0sD_pK.js";import{M as a,i as s,j as l}from"./@storybook-esNwf5LZ.js";import{S as i,D as c,W as d,P as p,a as x}from"./Selectbox.stories-LLgXf81K.js";import"../vite-inject-mocker-entry.js";import"./semver-MwBmqdgB.js";import"./react-dom-DgMH5qYG.js";import"./scheduler-7OC5HNn7.js";import"./use-sync-external-store-Crwep2Tv.js";import"./ts-dedent-DrFu-skq.js";import"./prop-types-CamVAYe7.js";import"./Icon-CjB8TZ2o.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i}),`
`,e.jsx(n.h1,{id:"selectbox",children:"Selectbox"}),`
`,e.jsx(n.p,{children:"ユーザーが定義済みの選択肢から1つを選択するためのプルダウンメニューです。"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Selectbox } from "./Selectbox";\r
\r
const options = [\r
  { label: "Apple", value: "apple" },\r
  { label: "Banana", value: "banana" },\r
  { label: "Orange", value: "orange" },\r
];\r
\r
<Selectbox options={options} onChange={(val) => console.log(val)} />
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"preselected",children:"Preselected"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{})]})}function P(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{P as default};
