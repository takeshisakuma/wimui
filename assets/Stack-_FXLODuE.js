import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-CmxFiERU.js";import{M as i,C as r,a as d}from"./blocks-C-hgfApg.js";import{S as t,D as x,R as l,a as h}from"./Stack.stories-D7cqgcwA.js";import{T as j}from"./T-9MrW2l-B.js";import"./iframe-DucY8PCr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lsUD8MDW.js";import"./index-C_Vr7lCO.js";import"./index-BULwwhUN.js";import"./index-CpnJMwY8.js";import"./Stack-DoXatdUM.js";import"./index-CYKEKBJn.js";import"./Box-Cf7av3W6.js";import"./useTranslation-Cfa0KY3M.js";function o(s){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:t}),`
`,n.jsx(e.h1,{id:"stack",children:"Stack"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(j,{k:"doc_stack_title"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Stack"})," コンポーネントは、要素を垂直または水平に並べ、要素間の間隔を管理するために使用されます。"]}),`
`,n.jsx(e.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Stack } from "@/components/Stack/Stack";
import { Box } from "../Box/Box";

const Demo = () => (
  <Stack gap="md">
    <Box>Item 1</Box>
    <Box>Item 2</Box>
    <Box>Item 3</Box>
  </Stack>
);
`})}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特徴"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"方向のリセット"})}),n.jsxs("td",{children:[n.jsx("code",{children:"direction"})," プロパティで ",n.jsx("code",{children:"row"})," または ",n.jsx("code",{children:"column"})," を指定できます（デフォルトは ",n.jsx("code",{children:"column"}),"）。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"強力なスペース管理"})}),n.jsxs("td",{children:[n.jsx("code",{children:"gap"})," プロパティに ",n.jsx("code",{children:"xs"}),", ",n.jsx("code",{children:"sm"}),", ",n.jsx("code",{children:"md"})," などのトークン、または数値を指定して間隔を調整できます。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Flexboxベース"})}),n.jsxs("td",{children:["内部で ",n.jsx("code",{children:"Flex"})," コンポーネントを使用しているため、",n.jsx("code",{children:"align"})," や ",n.jsx("code",{children:"justify"})," などの Flexbox プロパティも使用可能です。"]})]})]})]}),`
`,n.jsx(e.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"水平方向の配置-row",children:"水平方向の配置 (Row)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'direction="row"'})," を指定することで、要素を横並びに配置できます。"]}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(e.h2,{id:"スペーシングトークンの利用",children:"スペーシングトークンの利用"}),`
`,n.jsx(e.p,{children:"wimui のスペーシングトークン（xs, sm, md, lg, xl など）をそのまま使用できます。"}),`
`,n.jsx(r,{of:h})]})}function F(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{F as default};
