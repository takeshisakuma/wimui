import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DARZD1GP.js";import{M as t,C as r,a as x}from"./index-B3rJYmWY.js";import{S as d,D as l,R as m,a as h}from"./Stack.stories-DhDG49pw.js";import{T as i}from"./T-BJ-aPDq2.js";import"./iframe-C5IekCde.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DXNz2CCS.js";import"./index-CbenWqvU.js";import"./index-MTdPlWMm.js";import"./index-BHRd0gtL.js";import"./index-BAs8aBj_.js";import"./Stack-Cn3QXydH.js";import"./index-DCvovkc_.js";import"./Box-D7v6-e7M.js";import"./useTranslation-B78TVrh7.js";function s(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
`,n.jsx(o.h1,{id:"stack",children:"Stack"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(i,{k:"doc_stack_title"})}),`
`,n.jsx(i,{k:"doc_stack_title"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"Stack"})," コンポーネントは、要素を垂直または水平に並べ、要素間の間隔を管理するために使用されます。"]}),`
`,n.jsx(o.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Stack } from "@/components/Stack/Stack";\r
import { Box } from "../Box/Box";\r
\r
const Demo = () => (\r
  <Stack gap="md">\r
    <Box>Item 1</Box>\r
    <Box>Item 2</Box>\r
    <Box>Item 3</Box>\r
  </Stack>\r
);
`})}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(o.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["方向のリセット: ",n.jsx(o.code,{children:"direction"})," プロパティで ",n.jsx(o.code,{children:"row"})," または ",n.jsx(o.code,{children:"column"})," を指定できます（デフォルトは ",n.jsx(o.code,{children:"column"}),"）。"]}),`
`,n.jsxs(o.li,{children:["強力なスペース管理: ",n.jsx(o.code,{children:"gap"})," プロパティに ",n.jsx(o.code,{children:"xs"}),", ",n.jsx(o.code,{children:"sm"}),", ",n.jsx(o.code,{children:"md"})," などのトークン、または数値を指定して間隔を調整できます。"]}),`
`,n.jsxs(o.li,{children:["Flexboxベース: 内部で ",n.jsx(o.code,{children:"Flex"})," コンポーネントを使用しているため、",n.jsx(o.code,{children:"align"})," や ",n.jsx(o.code,{children:"justify"})," などの Flexbox プロパティも使用可能です。"]}),`
`]}),`
`,n.jsx(o.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(x,{}),`
`,n.jsx(o.h2,{id:"水平方向の配置-row",children:"水平方向の配置 (Row)"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:'direction="row"'})," を指定することで、要素を横並びに配置できます。"]}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(o.h2,{id:"スペーシングトークンの利用",children:"スペーシングトークンの利用"}),`
`,n.jsx(o.p,{children:"wimui のスペーシングトークン（xs, sm, md, lg, xl など）をそのまま使用できます。"}),`
`,n.jsx(r,{of:h})]})}function R(e={}){const{wrapper:o}={...c(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(s,{...e})}):s(e)}export{R as default};
