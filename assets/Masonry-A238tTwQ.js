import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DFNKA_V7.js";import{M as t,C as o,a as c}from"./blocks-CX2MuiOa.js";import{M as d,D as x,a as h,L as l}from"./Masonry.stories-qVKL8ymW.js";import{T as j}from"./T-BxJRC_oq.js";import"./iframe-CSwZKKgh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D91GK5yZ.js";import"./index-CEGjitDu.js";import"./index-DCFmpl79.js";import"./index-DDm-SkYv.js";import"./index-DV843YsD.js";import"./Box-jfJFGbug.js";import"./useTranslation-CnASG-hp.js";function e(r){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
`,n.jsx(s.h1,{id:"masonry",children:"Masonry"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(j,{k:"doc_masonry_title"})}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"Masonry"}),` は、要素の高さが異なる場合でも、隙間を埋めるように効率的に配置するレイアウトコンポーネントです。
主に画像ギャラリーや、高さの異なるカードを並べる際に使用されます。`]}),`
`,n.jsx(s.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import { Masonry } from "@/components/Masonry/Masonry";
import { Box } from "../Box/Box";

const Demo = () => (
  <Masonry columns={3} spacing={16}>
    <Box h={150} bg="lightblue">
      1
    </Box>
    <Box h={200} bg="lightgreen">
      2
    </Box>
    <Box h={100} bg="lightpink">
      3
    </Box>
    <Box h={250} bg="lightyellow">
      4
    </Box>
  </Masonry>
);
`})}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(s.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特徴"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"自動配置"})}),n.jsxs("td",{children:["CSSの ",n.jsx("code",{children:"column-count"})," を使用して、要素を自動的にカラムに振り分けます。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"レスポンシブな間隔"})}),n.jsxs("td",{children:[n.jsx("code",{children:"spacing"})," プロパティで要素間の余白を簡単に調整できます。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"フレキシブルなカラム数"})}),n.jsxs("td",{children:[n.jsx("code",{children:"columns"})," プロパティで任意のカラム数を指定可能です。"]})]})]})]}),`
`,n.jsx(s.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(c,{}),`
`,n.jsx(s.h2,{id:"カラムの調整",children:"カラムの調整"}),`
`,n.jsx(s.p,{children:"カラム数を変更することで、レイアウトの密度を調整できます。"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(s.h2,{id:"スペーシングの調整",children:"スペーシングの調整"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"spacing"})," プロパティを使用して、要素間の距離を調整できます。"]}),`
`,n.jsx(o,{of:l})]})}function L(r={}){const{wrapper:s}={...i(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(e,{...r})}):e(r)}export{L as default};
