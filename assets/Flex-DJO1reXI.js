import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-bJSohhuS.js";import{M as t,C as i,a as o}from"./index-D8rv0vj0.js";import{F as c,B as l,C as x,J as h,W as j}from"./Flex.stories-CrdzmyPj.js";import{T as p}from"./T-cfPeosnY.js";import"./iframe-DeOiS_GH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CKXFMjep.js";import"./index-D1za4aJC.js";import"./index-7nQbCmQI.js";import"./index-AzqWsIcY.js";import"./index-DTXphyH5.js";import"./Flex-ClL8fjzx.js";import"./index-B4DDDrUU.js";import"./useTranslation-BbjDGlWL.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c}),`
`,n.jsx(e.h1,{id:"flex",children:"Flex"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(p,{k:"doc_flex_title"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Flex"}),` は、CSS Flexboxを利用してレイアウトを構築するための基本的なコンポーネントです。
要素の整列、方向、間隔などをプロパティ経由で直感的に制御できます。`]}),`
`,n.jsx(e.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Flex } from "@/components/Flex/Flex";

const Demo = () => (
  <Flex direction="row" align="center" justify="between" gap={16}>
    <div>アイテム 1</div>
    <div>アイテム 2</div>
    <div>アイテム 3</div>
  </Flex>
);
`})}),`
`,n.jsx(i,{of:l}),`
`,n.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特徴"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"直感的な配置"})}),n.jsxs("td",{children:[n.jsx("code",{children:"align-items"})," や ",n.jsx("code",{children:"justify-content"})," を ",n.jsx("code",{children:"align"}),", ",n.jsx("code",{children:"justify"})," プロパティで簡単に設定できます。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"一貫した間隔"})}),n.jsxs("td",{children:[n.jsx("code",{children:"gap"})," プロパティを使用して、子要素間の隙間を均一に設定できます。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"柔軟な方向設定"})}),n.jsxs("td",{children:[n.jsx("code",{children:"direction"})," プロパティで縦並び（column）と横並び（row）を切り替えられます。"]})]})]})]}),`
`,n.jsx(e.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(o,{}),`
`,n.jsx(e.h2,{id:"垂直方向の並び-column",children:"垂直方向の並び (Column)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'direction="column"'})," を指定することで、要素を垂直に並べることができます。"]}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(e.h2,{id:"コンテンツの分散配置-justify-content",children:"コンテンツの分散配置 (Justify Content)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"justify"})," プロパティを使用すると、メイン軸（rowの場合は横方向）に沿った要素の配置方法を指定できます。"]}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.h2,{id:"折り返し-wrap",children:"折り返し (Wrap)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'wrap="wrap"'})," を指定すると、親コンテナの幅を超えた要素が自動的に次の行に折り返されます。"]}),`
`,n.jsx(i,{of:j})]})}function B(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{B as default};
