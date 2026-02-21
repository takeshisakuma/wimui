import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-B9Dn5wL-.js";import{M as c,C as r,a as l}from"./index-DKLWeeKV.js";import{F as d,B as x,C as j,J as h,W as p}from"./Flex.stories-BfTjfKoO.js";import{T as s}from"./T-CEF-KqfE.js";import"./iframe-DthjAxXy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcTsIOZf.js";import"./index-DjVo9qYY.js";import"./index-BPmHJsvN.js";import"./index-m7KSHcAz.js";import"./index-CfAXWJCw.js";import"./Flex-CoK220O4.js";import"./index-DaFjfvn3.js";import"./useTranslation-DpkZBueo.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:d}),`
`,n.jsx(e.h1,{id:"flex",children:"Flex"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(s,{k:"doc_flex_title"})}),`
`,n.jsx(s,{k:"doc_flex_title"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Flex"}),` は、CSS Flexboxを利用してレイアウトを構築するための基本的なコンポーネントです。\r
要素の整列、方向、間隔などをプロパティ経由で直感的に制御できます。`]}),`
`,n.jsx(e.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Flex } from "@/components/Flex/Flex";\r
\r
const Demo = () => (\r
  <Flex direction="row" align="center" justify="between" gap={16}>\r
    <div>アイテム 1</div>\r
    <div>アイテム 2</div>\r
    <div>アイテム 3</div>\r
  </Flex>\r
);
`})}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["直感的な配置: ",n.jsx(e.code,{children:"align-items"})," や ",n.jsx(e.code,{children:"justify-content"})," を ",n.jsx(e.code,{children:"align"}),", ",n.jsx(e.code,{children:"justify"})," プロパティで簡単に設定できます。"]}),`
`,n.jsxs(e.li,{children:["一貫した間隔: ",n.jsx(e.code,{children:"gap"})," プロパティを使用して、子要素間の隙間を均一に設定できます。"]}),`
`,n.jsxs(e.li,{children:["柔軟な方向設定: ",n.jsx(e.code,{children:"direction"})," プロパティで縦並び（column）と横並び（row）を切り替えられます。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"垂直方向の並び-column",children:"垂直方向の並び (Column)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'direction="column"'})," を指定することで、要素を垂直に並べることができます。"]}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(e.h2,{id:"コンテンツの分散配置-justify-content",children:"コンテンツの分散配置 (Justify Content)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"justify"})," プロパティを使用すると、メイン軸（rowの場合は横方向）に沿った要素の配置方法を指定できます。"]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"折り返し-wrap",children:"折り返し (Wrap)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'wrap="wrap"'})," を指定すると、親コンテナの幅を超えた要素が自動的に次の行に折り返されます。"]}),`
`,n.jsx(r,{of:p})]})}function J(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{J as default};
