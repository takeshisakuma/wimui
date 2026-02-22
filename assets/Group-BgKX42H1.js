import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BbjGqZz3.js";import{M as c,C as i,a as d}from"./index-CUb5XL-l.js";import{G as p,B as l,a as x,A as h}from"./Group.stories-wJvcOTt0.js";import{T as e}from"./T-B4VrY-fk.js";import"./iframe-CMENnxJG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9_muAC8.js";import"./index-M7-JteSq.js";import"./index-BRm3wfGl.js";import"./index-BX8sHgc1.js";import"./index-4i34lR1r.js";import"./Group-Bb341Sc6.js";import"./index-Cm3zDTuB.js";import"./Flex-CZKqwiPk.js";import"./Button-DXwHiq-g.js";import"./Icon-kIqh0oW3.js";import"./useTranslation-CARSDeCv.js";function t(o){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:p}),`
`,n.jsx(r.h1,{id:"group",children:"Group"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(e,{k:"doc_group_title"})}),`
`,n.jsx(e,{k:"doc_group_title"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"Group"}),` は、要素を水平方向に並べるためのレイアウトコンポーネントです。\r
デフォルトで子要素の間隔を一定に保ち、コンテナ幅に応じて折り返しの制御も行います。ボタンなどのインライン要素を並べる際に最適です。`]}),`
`,n.jsx(r.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { Group } from "@/components/Group/Group";\r
import { Button } from "../Button/Button";\r
\r
const Demo = () => (\r
  <Group gap={16}>\r
    <Button>送信する</Button>\r
    <Button priority="secondary">キャンセル</Button>\r
  </Group>\r
);
`})}),`
`,n.jsx(i,{of:l}),`
`,n.jsx(r.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["要素の均等化: ",n.jsx(r.code,{children:"grow"})," プロパティを使用すると、すべての子要素が利用可能な空間を埋めるように伸縮します。"]}),`
`,n.jsxs(r.li,{children:["垂直整列: デフォルトで ",n.jsx(r.code,{children:'align="center"'})," が設定されており、高さの異なる要素も中央揃えで配置されます。"]}),`
`,n.jsxs(r.li,{children:["柔軟な間隔: ",n.jsx(r.code,{children:"gap"})," プロパティで要素間の隙間を調整できます。"]}),`
`]}),`
`,n.jsx(r.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(d,{}),`
`,n.jsx(r.h2,{id:"要素の伸縮-grow",children:"要素の伸縮 (Grow)"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"grow"})," プロパティを ",n.jsx(r.code,{children:"true"})," に設定すると、各アイテムがフレックスボックスの ",n.jsx(r.code,{children:"flex-grow: 1"})," を持ち、親コンテナの幅いっぱいに等幅で広がります。"]}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(r.h2,{id:"垂直方向の整列",children:"垂直方向の整列"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"align"})," プロパティを使用して、異なる高さの要素が混在する場合の垂直方向の配置（上揃え、中央揃え、下揃えなど）を制御できます。"]}),`
`,n.jsx(i,{of:h})]})}function S(o={}){const{wrapper:r}={...s(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(t,{...o})}):t(o)}export{S as default};
