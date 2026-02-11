import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DdMqI4vv.js";import{M as t,C as s,a as c}from"./index-SAzibQwh.js";import{G as d,B as l,a as p,A as x}from"./Group.stories-IjRcI2r-.js";import{T as h}from"./T-C4MmMDJ3.js";import"./iframe-s_RWuztI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CgVo3QpR.js";import"./index-DK4JxWgl.js";import"./index-CxvbG2DE.js";import"./index-DJdzzOfX.js";import"./index-f6JCpNqT.js";import"./index-BGRTG6NI.js";import"./Flex-C8oqLTlH.js";import"./Button-DPybLjVz.js";import"./Icon-CvGYaBGE.js";import"./useTranslation-qnx2iauW.js";function i(o){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
`,n.jsx(r.h1,{id:"group",children:"Group"}),`
`,n.jsx(h,{k:"doc_group_title"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"Group"}),` は、要素を水平方向に並べるためのレイアウトコンポーネントです。\r
デフォルトで子要素の間隔を一定に保ち、コンテナ幅に応じて折り返しの制御も行います。ボタンなどのインライン要素を並べる際に最適です。`]}),`
`,n.jsx(r.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { Group } from "./Group";\r
import { Button } from "../Button/Button";\r
\r
const Demo = () => (\r
  <Group gap={16}>\r
    <Button>送信する</Button>\r
    <Button priority="secondary">キャンセル</Button>\r
  </Group>\r
);
`})}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(r.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"要素の均等化"}),": ",n.jsx(r.code,{children:"grow"})," プロパティを使用すると、すべての子要素が利用可能な空間を埋めるように伸縮します。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"垂直整列"}),": デフォルトで ",n.jsx(r.code,{children:'align="center"'})," が設定されており、高さの異なる要素も中央揃えで配置されます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"柔軟な間隔"}),": ",n.jsx(r.code,{children:"gap"})," プロパティで要素間の隙間を調整できます。"]}),`
`]}),`
`,n.jsx(r.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(c,{}),`
`,n.jsx(r.h2,{id:"要素の伸縮-grow",children:"要素の伸縮 (Grow)"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"grow"})," プロパティを ",n.jsx(r.code,{children:"true"})," に設定すると、各アイテムがフレックスボックスの ",n.jsx(r.code,{children:"flex-grow: 1"})," を持ち、親コンテナの幅いっぱいに等幅で広がります。"]}),`
`,n.jsx(s,{of:p}),`
`,n.jsx(r.h2,{id:"垂直方向の整列",children:"垂直方向の整列"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"align"})," プロパティを使用して、異なる高さの要素が混在する場合の垂直方向の配置（上揃え、中央揃え、下揃えなど）を制御できます。"]}),`
`,n.jsx(s,{of:x})]})}function k(o={}){const{wrapper:r}={...e(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(i,{...o})}):i(o)}export{k as default};
