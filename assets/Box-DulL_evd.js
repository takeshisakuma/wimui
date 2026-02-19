import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-D-d5vDlE.js";import{M as t,C as e,a as d}from"./index-CZeS9wHA.js";import{B as x,D as l,A as h,S as a}from"./Box.stories-C55hbONO.js";import{T as i}from"./T-DTb9b19f.js";import"./iframe-27dIiwJZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_2k427M.js";import"./index-r8vh4ghP.js";import"./index-BrOJ2fX6.js";import"./index-IX2aNhuy.js";import"./index-CVejgObU.js";import"./Box-1hDz9DDX.js";import"./index-POIyNE0q.js";import"./useTranslation-DPXOwEGb.js";function r(s){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:x}),`
`,n.jsx(o.h1,{id:"box",children:"Box"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(i,{k:"doc_box_title"})}),`
`,n.jsx(i,{k:"doc_box_title"}),`
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
`,n.jsx(e,{of:l}),`
`,n.jsx(o.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["ポリモーフィック: ",n.jsx(o.code,{children:"as"})," プロパティを使用して、レンダリングされるHTML要素（div, section, button など）を自由に変更できます。"]}),`
`,n.jsxs(o.li,{children:["簡潔なスタイル指定: ",n.jsx(o.code,{children:"p"})," (padding), ",n.jsx(o.code,{children:"m"})," (margin), ",n.jsx(o.code,{children:"bg"})," (background) などの略称プロパティを使用して、素早くレイアウトを構築できます。"]}),`
`,n.jsxs(o.li,{children:["自由なカスタマイズ: 通常の ",n.jsx(o.code,{children:"style"})," や ",n.jsx(o.code,{children:"className"})," プロパティもサポートしているため、必要に応じて詳細なカスタマイズが可能です。"]}),`
`]}),`
`,n.jsx(o.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(d,{}),`
`,n.jsx(o.h2,{id:"ポリモーフィズム-as-プロパティ",children:"ポリモーフィズム (as プロパティ)"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"as"})," プロパティを使用することで、Boxを ",n.jsx(o.code,{children:"button"})," や ",n.jsx(o.code,{children:"a"})," タグとして動作させることができます。"]}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(o.h2,{id:"スペーシングと配置",children:"スペーシングと配置"}),`
`,n.jsx(o.p,{children:"余白やサイズの設定を簡単に行うことができます。"}),`
`,n.jsx(e,{of:a})]})}function y(s={}){const{wrapper:o}={...c(),...s.components};return o?n.jsx(o,{...s,children:n.jsx(r,{...s})}):r(s)}export{y as default};
