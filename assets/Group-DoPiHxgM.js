import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-B1RBnliS.js";import{M as i,C as s,a as d}from"./index-CeBNNgzQ.js";import{G as c,B as x,a as h,A as l}from"./Group.stories-mF3qw-hc.js";import{T as j}from"./T-DtAiku4h.js";import"./iframe-Be3gXwOX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D04X_IO6.js";import"./index-DWycTjYs.js";import"./index-BX1_cb16.js";import"./index-Dd6M7oDv.js";import"./index-B9vcTgK8.js";import"./Group-BMF2mRhQ.js";import"./index-CL3wGj0C.js";import"./Flex-u5E0bSVz.js";import"./Button-DQUWJlEF.js";import"./Icon-fxQMr1Pf.js";import"./useTranslation-CAN8QPFs.js";function e(o){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:c}),`
`,n.jsx(r.h1,{id:"group",children:"Group"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(j,{k:"doc_group_title"})}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"Group"}),` は、要素を水平方向に並べるためのレイアウトコンポーネントです。
デフォルトで子要素の間隔を一定に保ち、コンテナ幅に応じて折り返しの制御も行います。ボタンなどのインライン要素を並べる際に最適です。`]}),`
`,n.jsx(r.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { Group } from "@/components/Group/Group";
import { Button } from "../Button/Button";

const Demo = () => (
  <Group gap={16}>
    <Button>送信する</Button>
    <Button priority="secondary">キャンセル</Button>
  </Group>
);
`})}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(r.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特徴"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"要素の均等化"})}),n.jsxs("td",{children:[n.jsx("code",{children:"grow"})," プロパティを使用すると、すべての子要素が利用可能な空間を埋めるように伸縮します。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"垂直整列"})}),n.jsxs("td",{children:["デフォルトで ",n.jsx("code",{children:'align="center"'})," が設定されており、高さの異なる要素も中央揃えで配置されます。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"柔軟な間隔"})}),n.jsxs("td",{children:[n.jsx("code",{children:"gap"})," プロパティで要素間の隙間を調整できます。"]})]})]})]}),`
`,n.jsx(r.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(d,{}),`
`,n.jsx(r.h2,{id:"要素の伸縮-grow",children:"要素の伸縮 (Grow)"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"grow"})," プロパティを ",n.jsx(r.code,{children:"true"})," に設定すると、各アイテムがフレックスボックスの ",n.jsx(r.code,{children:"flex-grow: 1"})," を持ち、親コンテナの幅いっぱいに等幅で広がります。"]}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(r.h2,{id:"垂直方向の整列",children:"垂直方向の整列"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"align"})," プロパティを使用して、異なる高さの要素が混在する場合の垂直方向の配置（上揃え、中央揃え、下揃えなど）を制御できます。"]}),`
`,n.jsx(s,{of:l})]})}function S(o={}){const{wrapper:r}={...t(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(e,{...o})}):e(o)}export{S as default};
