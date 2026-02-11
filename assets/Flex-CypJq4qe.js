import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-B6kd_k3C.js";import{M as t,C as i,a as c}from"./index-DMItklni.js";import{F as d,B as l,C as x,J as j,W as h}from"./Flex.stories-BAzIeR_v.js";import{T as m}from"./T-CzGOJVxK.js";import"./iframe-CX-nbmQ1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvsZdcwu.js";import"./index-MdpD33bK.js";import"./index-BUHRaD6S.js";import"./index-CSaovZqM.js";import"./index--EquUtGv.js";import"./Flex-YfArIeOi.js";import"./index-C9UxkZsF.js";import"./useTranslation-DDSFuP0b.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
`,n.jsx(e.h1,{id:"flex",children:"Flex"}),`
`,n.jsx(m,{k:"doc_flex_title"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Flex"}),` は、CSS Flexboxを利用してレイアウトを構築するための基本的なコンポーネントです。\r
要素の整列、方向、間隔などをプロパティ経由で直感的に制御できます。`]}),`
`,n.jsx(e.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Flex } from "./Flex";\r
\r
const Demo = () => (\r
  <Flex direction="row" align="center" justify="between" gap={16}>\r
    <div>アイテム 1</div>\r
    <div>アイテム 2</div>\r
    <div>アイテム 3</div>\r
  </Flex>\r
);
`})}),`
`,n.jsx(i,{of:l}),`
`,n.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"直感的な配置"}),": ",n.jsx(e.code,{children:"align-items"})," や ",n.jsx(e.code,{children:"justify-content"})," を ",n.jsx(e.code,{children:"align"}),", ",n.jsx(e.code,{children:"justify"})," プロパティで簡単に設定できます。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"一貫した間隔"}),": ",n.jsx(e.code,{children:"gap"})," プロパティを使用して、子要素間の隙間を均一に設定できます。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"柔軟な方向設定"}),": ",n.jsx(e.code,{children:"direction"})," プロパティで縦並び（column）と横並び（row）を切り替えられます。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"垂直方向の並び-column",children:"垂直方向の並び (Column)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'direction="column"'})," を指定することで、要素を垂直に並べることができます。"]}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(e.h2,{id:"コンテンツの分散配置-justify-content",children:"コンテンツの分散配置 (Justify Content)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"justify"})," プロパティを使用すると、メイン軸（rowの場合は横方向）に沿った要素の配置方法を指定できます。"]}),`
`,n.jsx(i,{of:j}),`
`,n.jsx(e.h2,{id:"折り返し-wrap",children:"折り返し (Wrap)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'wrap="wrap"'})," を指定すると、親コンテナの幅を超えた要素が自動的に次の行に折り返されます。"]}),`
`,n.jsx(i,{of:h})]})}function S(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{S as default};
