import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Bm4cR427.js";import{M as c,C as s,a as l}from"./index-CX81Mgay.js";import{M as x,D as a,a as d,L as h}from"./Masonry.stories-BqlVxBmV.js";import{T as i}from"./T-DPF3nRHp.js";import"./iframe-BZi-KZhi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FkWaVvqB.js";import"./index-B4xE7ZT7.js";import"./index--nOlpc5Y.js";import"./index-BYteob99.js";import"./index-RQ9F8IKM.js";import"./index-CRH41n7B.js";import"./Box-rwlCqUtA.js";import"./useTranslation-BuB4Nxd7.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:x}),`
`,n.jsx(o.h1,{id:"masonry",children:"Masonry"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(i,{k:"doc_masonry_title"})}),`
`,n.jsx(i,{k:"doc_masonry_title"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"Masonry"}),` は、要素の高さが異なる場合でも、隙間を埋めるように効率的に配置するレイアウトコンポーネントです。\r
主に画像ギャラリーや、高さの異なるカードを並べる際に使用されます。`]}),`
`,n.jsx(o.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Masonry } from "@/components/Masonry/Masonry";\r
import { Box } from "../Box/Box";\r
\r
const Demo = () => (\r
  <Masonry columns={3} spacing={16}>\r
    <Box h={150} bg="lightblue">1</Box>\r
    <Box h={200} bg="lightgreen">2</Box>\r
    <Box h={100} bg="lightpink">3</Box>\r
    <Box h={250} bg="lightyellow">4</Box>\r
  </Masonry>\r
);
`})}),`
`,n.jsx(s,{of:a}),`
`,n.jsx(o.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["自動配置: CSSの ",n.jsx(o.code,{children:"column-count"})," を使用して、要素を自動的にカラムに振り分けます。"]}),`
`,n.jsxs(o.li,{children:["レスポンシブな間隔: ",n.jsx(o.code,{children:"spacing"})," プロパティで要素間の余白を簡単に調整できます。"]}),`
`,n.jsxs(o.li,{children:["フレキシブルなカラム数: ",n.jsx(o.code,{children:"columns"})," プロパティで任意のカラム数を指定可能です。"]}),`
`]}),`
`,n.jsx(o.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(l,{}),`
`,n.jsx(o.h2,{id:"カラムの調整",children:"カラムの調整"}),`
`,n.jsx(o.p,{children:"カラム数を変更することで、レイアウトの密度を調整できます。"}),`
`,n.jsx(s,{of:d}),`
`,n.jsx(o.h2,{id:"スペーシングの調整",children:"スペーシングの調整"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"spacing"})," プロパティを使用して、要素間の距離を調整できます。"]}),`
`,n.jsx(s,{of:h})]})}function L(r={}){const{wrapper:o}={...t(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(e,{...r})}):e(r)}export{L as default};
