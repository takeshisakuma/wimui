import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-B6kd_k3C.js";import{M as t,C as s,a as c}from"./index-DMItklni.js";import{M as l,D as x,a as h,L as d}from"./Masonry.stories-CtOjp520.js";import{T as a}from"./T-CzGOJVxK.js";import"./iframe-CX-nbmQ1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvsZdcwu.js";import"./index-MdpD33bK.js";import"./index-BUHRaD6S.js";import"./index-CSaovZqM.js";import"./index--EquUtGv.js";import"./index-C9UxkZsF.js";import"./Box-Ca-NxuP-.js";import"./useTranslation-DDSFuP0b.js";function i(o){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:l}),`
`,n.jsx(r.h1,{id:"masonry",children:"Masonry"}),`
`,n.jsx(a,{k:"doc_masonry_title"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"Masonry"}),` は、要素の高さが異なる場合でも、隙間を埋めるように効率的に配置するレイアウトコンポーネントです。\r
主に画像ギャラリーや、高さの異なるカードを並べる際に使用されます。`]}),`
`,n.jsx(r.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { Masonry } from "./Masonry";\r
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
`,n.jsx(s,{of:x}),`
`,n.jsx(r.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"自動配置"}),": CSSの ",n.jsx(r.code,{children:"column-count"})," を使用して、要素を自動的にカラムに振り分けます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"レスポンシブな間隔"}),": ",n.jsx(r.code,{children:"spacing"})," プロパティで要素間の余白を簡単に調整できます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"フレキシブルなカラム数"}),": ",n.jsx(r.code,{children:"columns"})," プロパティで任意のカラム数を指定可能です。"]}),`
`]}),`
`,n.jsx(r.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(c,{}),`
`,n.jsx(r.h2,{id:"カラムの調整",children:"カラムの調整"}),`
`,n.jsx(r.p,{children:"カラム数を変更することで、レイアウトの密度を調整できます。"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(r.h2,{id:"スペーシングの調整",children:"スペーシングの調整"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"spacing"})," プロパティを使用して、要素間の距離を調整できます。"]}),`
`,n.jsx(s,{of:d})]})}function X(o={}){const{wrapper:r}={...e(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(i,{...o})}):i(o)}export{X as default};
