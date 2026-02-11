import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-B6kd_k3C.js";import{M as c,C as r,a as d}from"./index-DMItklni.js";import{B as t,D as x,A as l,S as h}from"./Box.stories-DyUcDuNZ.js";import{T as j}from"./T-CzGOJVxK.js";import"./iframe-CX-nbmQ1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvsZdcwu.js";import"./index-MdpD33bK.js";import"./index-BUHRaD6S.js";import"./index-CSaovZqM.js";import"./index--EquUtGv.js";import"./Box-Ca-NxuP-.js";import"./index-C9UxkZsF.js";import"./useTranslation-DDSFuP0b.js";function e(o){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:t}),`
`,n.jsx(s.h1,{id:"box",children:"Box"}),`
`,n.jsx(j,{k:"doc_box_title"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"Box"}),` は、wimuiの中で最も基本的なレイアウトコンポーネントです。\r
CSSのプロパティをラップしたプロパティ（p, m, bg など）を提供し、インラインスタイルを記述することなく、直感的にスタイルを適用できます。`]}),`
`,n.jsx(s.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import { Box } from "./Box";\r
\r
const Demo = () => (\r
  <Box bg="#f0f0f0" p={20} radius={8} shadow="sm">\r
    これは Box コンポーネントです\r
  </Box>\r
);
`})}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(s.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"ポリモーフィック"}),": ",n.jsx(s.code,{children:"as"})," プロパティを使用して、レンダリングされるHTML要素（div, section, button など）を自由に変更できます。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"簡潔なスタイル指定"}),": ",n.jsx(s.code,{children:"p"})," (padding), ",n.jsx(s.code,{children:"m"})," (margin), ",n.jsx(s.code,{children:"bg"})," (background) などの略称プロパティを使用して、素早くレイアウトを構築できます。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"自由なカスタマイズ"}),": 通常の ",n.jsx(s.code,{children:"style"})," や ",n.jsx(s.code,{children:"className"})," プロパティもサポートしているため、必要に応じて詳細なカスタマイズが可能です。"]}),`
`]}),`
`,n.jsx(s.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(d,{}),`
`,n.jsx(s.h2,{id:"ポリモーフィズム-as-プロパティ",children:"ポリモーフィズム (as プロパティ)"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"as"})," プロパティを使用することで、Boxを ",n.jsx(s.code,{children:"button"})," や ",n.jsx(s.code,{children:"a"})," タグとして動作させることができます。"]}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(s.h2,{id:"スペーシングと配置",children:"スペーシングと配置"}),`
`,n.jsx(s.p,{children:"余白やサイズの設定を簡単に行うことができます。"}),`
`,n.jsx(r,{of:h})]})}function X(o={}){const{wrapper:s}={...i(),...o.components};return s?n.jsx(s,{...o,children:n.jsx(e,{...o})}):e(o)}export{X as default};
