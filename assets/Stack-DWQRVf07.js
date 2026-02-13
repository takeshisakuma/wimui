import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DStC0paJ.js";import{M as t,C as r,a as x}from"./index-D7vzJtkk.js";import{S as d,D as l,R as h,a as j}from"./Stack.stories-DEzPWYXo.js";import{T as s}from"./T-CG4X7QWT.js";import"./iframe-BUrtav60.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qQlWe0I9.js";import"./index-BnepAmLw.js";import"./index-t4JlWTlK.js";import"./index-Ch_Rwret.js";import"./index-DxAEHUeZ.js";import"./index-Drm8gX_j.js";import"./Box-6xU8XZQ4.js";import"./useTranslation-DLI4XpBl.js";function i(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
`,n.jsx(o.h1,{id:"stack",children:"Stack"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(s,{k:"doc_stack_title"})}),`
`,n.jsx(s,{k:"doc_stack_title"}),`
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
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"方向のリセット"}),": ",n.jsx(o.code,{children:"direction"})," プロパティで ",n.jsx(o.code,{children:"row"})," または ",n.jsx(o.code,{children:"column"})," を指定できます（デフォルトは ",n.jsx(o.code,{children:"column"}),"）。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"強力なスペース管理"}),": ",n.jsx(o.code,{children:"gap"})," プロパティに ",n.jsx(o.code,{children:"xs"}),", ",n.jsx(o.code,{children:"sm"}),", ",n.jsx(o.code,{children:"md"})," などのトークン、または数値を指定して間隔を調整できます。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"Flexboxベース"}),": 内部で ",n.jsx(o.code,{children:"Flex"})," コンポーネントを使用しているため、",n.jsx(o.code,{children:"align"})," や ",n.jsx(o.code,{children:"justify"})," などの Flexbox プロパティも使用可能です。"]}),`
`]}),`
`,n.jsx(o.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(x,{}),`
`,n.jsx(o.h2,{id:"水平方向の配置-row",children:"水平方向の配置 (Row)"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:'direction="row"'})," を指定することで、要素を横並びに配置できます。"]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(o.h2,{id:"スペーシングトークンの利用",children:"スペーシングトークンの利用"}),`
`,n.jsx(o.p,{children:"wimui のスペーシングトークン（xs, sm, md, lg, xl など）をそのまま使用できます。"}),`
`,n.jsx(r,{of:j})]})}function I(e={}){const{wrapper:o}={...c(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{I as default};
