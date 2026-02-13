import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DI7J9QVw.js";import{M as c,C as i,a as d}from"./index-wQ-fu4Ac.js";import{G as l,B as p,a as x,A as h}from"./Group.stories-D37gWcYt.js";import{T as e}from"./T-BBfoCICe.js";import"./iframe-8PFyu00w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8Mn0_-2.js";import"./index-CNF4RscW.js";import"./index-Bgsm3l6N.js";import"./index-CsnEVgKO.js";import"./index-v9oG74FQ.js";import"./Group-CDtOG2B8.js";import"./index-D8TpllMe.js";import"./Flex-exNx7KVy.js";import"./Button-Bp7GRDi3.js";import"./Icon-D4Pw3yPr.js";import"./useTranslation-Cyt_ZMVf.js";function s(o){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l}),`
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
`,n.jsx(i,{of:p}),`
`,n.jsx(r.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"要素の均等化"}),": ",n.jsx(r.code,{children:"grow"})," プロパティを使用すると、すべての子要素が利用可能な空間を埋めるように伸縮します。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"垂直整列"}),": デフォルトで ",n.jsx(r.code,{children:'align="center"'})," が設定されており、高さの異なる要素も中央揃えで配置されます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"柔軟な間隔"}),": ",n.jsx(r.code,{children:"gap"})," プロパティで要素間の隙間を調整できます。"]}),`
`]}),`
`,n.jsx(r.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(d,{}),`
`,n.jsx(r.h2,{id:"要素の伸縮-grow",children:"要素の伸縮 (Grow)"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"grow"})," プロパティを ",n.jsx(r.code,{children:"true"})," に設定すると、各アイテムがフレックスボックスの ",n.jsx(r.code,{children:"flex-grow: 1"})," を持ち、親コンテナの幅いっぱいに等幅で広がります。"]}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(r.h2,{id:"垂直方向の整列",children:"垂直方向の整列"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"align"})," プロパティを使用して、異なる高さの要素が混在する場合の垂直方向の配置（上揃え、中央揃え、下揃えなど）を制御できます。"]}),`
`,n.jsx(i,{of:h})]})}function S(o={}){const{wrapper:r}={...t(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(s,{...o})}):s(o)}export{S as default};
