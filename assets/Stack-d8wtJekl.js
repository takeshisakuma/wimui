import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-6bcfPm2a.js";import{M as t,C as r,a as x}from"./index-BLFIKG6L.js";import{S as d,D as l,R as m,a as h}from"./Stack.stories-CleP9k3k.js";import{T as i}from"./T-D0lVFnWi.js";import"./iframe-DR2UsQ0m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9pUUXKS.js";import"./index-Cq8dXl4I.js";import"./index-DHSzm0Tv.js";import"./index-REnd3jZz.js";import"./index-DDH3cDFS.js";import"./Stack-UZZzIqVU.js";import"./index-DALvJQM_.js";import"./Box-vFcUbeSB.js";import"./useTranslation-D-QZl2aY.js";function s(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
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
