import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BIy7bh7v.js";import{M as c,C as r,a as d}from"./index-tZiZqQTA.js";import{B as x,D as l,A as h,S as j}from"./Box.stories-BQdpjGVZ.js";import{T as e}from"./T-C_Eweb4w.js";import"./iframe-DPh0DCaW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHBIHKAu.js";import"./index-BfOyW5Jg.js";import"./index-DnOW4p0U.js";import"./index-BD6D31Cv.js";import"./index-BkOqgVSP.js";import"./Box-CaeZLtpU.js";import"./index-LY_QLllZ.js";import"./useTranslation-Cp2ts5H1.js";function i(s){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:x}),`
`,n.jsx(o.h1,{id:"box",children:"Box"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(e,{k:"doc_box_title"})}),`
`,n.jsx(e,{k:"doc_box_title"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"Box"}),` は、wimuiの中で最も基本的なレイアウトコンポーネントです。\r
CSSのプロパティをラップしたプロパティ（p, m, bg など）を提供し、インラインスタイルを記述することなく、直感的にスタイルを適用できます。`]}),`
`,n.jsx(o.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Box } from "@/components/Box/Box";\r
\r
const Demo = () => (\r
  <Box bg="#f0f0f0" p={20} radius={8} shadow="sm">\r
    これは Box コンポーネントです\r
  </Box>\r
);
`})}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(o.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"ポリモーフィック"}),": ",n.jsx(o.code,{children:"as"})," プロパティを使用して、レンダリングされるHTML要素（div, section, button など）を自由に変更できます。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"簡潔なスタイル指定"}),": ",n.jsx(o.code,{children:"p"})," (padding), ",n.jsx(o.code,{children:"m"})," (margin), ",n.jsx(o.code,{children:"bg"})," (background) などの略称プロパティを使用して、素早くレイアウトを構築できます。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"自由なカスタマイズ"}),": 通常の ",n.jsx(o.code,{children:"style"})," や ",n.jsx(o.code,{children:"className"})," プロパティもサポートしているため、必要に応じて詳細なカスタマイズが可能です。"]}),`
`]}),`
`,n.jsx(o.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(d,{}),`
`,n.jsx(o.h2,{id:"ポリモーフィズム-as-プロパティ",children:"ポリモーフィズム (as プロパティ)"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"as"})," プロパティを使用することで、Boxを ",n.jsx(o.code,{children:"button"})," や ",n.jsx(o.code,{children:"a"})," タグとして動作させることができます。"]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(o.h2,{id:"スペーシングと配置",children:"スペーシングと配置"}),`
`,n.jsx(o.p,{children:"余白やサイズの設定を簡単に行うことができます。"}),`
`,n.jsx(r,{of:j})]})}function y(s={}){const{wrapper:o}={...t(),...s.components};return o?n.jsx(o,{...s,children:n.jsx(i,{...s})}):i(s)}export{y as default};
