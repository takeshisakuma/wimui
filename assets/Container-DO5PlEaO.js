import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-CE7L8U2M.js";import{M as c,C as r,a as d}from"./index-rF5hEWkm.js";import{C as l,D as x,S as h,F as a}from"./Container.stories-CyMguyDw.js";import{T as o}from"./T-BK3wfkID.js";import"./iframe-Bvmj2LPw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DclBzluR.js";import"./index-CcdRad0w.js";import"./index-HTnOouW8.js";import"./index-Bk_QLM9o.js";import"./index-DgD-m7CD.js";import"./Container-DQKKxE1s.js";import"./index-BwPY9p3m.js";import"./Box-_g2e4kVD.js";import"./useTranslation-DjWYHFjk.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l}),`
`,n.jsx(e.h1,{id:"container",children:"Container"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(o,{k:"doc_container_title"})}),`
`,n.jsx(o,{k:"doc_container_title"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Container"})," コンポーネントは、コンテンツを中央に配置し、最大幅を制限するために使用されます。"]}),`
`,n.jsx(e.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Container } from "@/components/Container/Container";\r
\r
const Demo = () => (\r
  <Container size="md" p={20}>\r
    中央に配置されるコンテンツ\r
  </Container>\r
);
`})}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["中央配置: ",n.jsx(e.code,{children:'mx="auto"'})," がデフォルトで適用され、コンテンツが常に中央に配置されます。"]}),`
`,n.jsxs(e.li,{children:["レスポンシブなサイズ: ",n.jsx(e.code,{children:"xs"}),", ",n.jsx(e.code,{children:"sm"}),", ",n.jsx(e.code,{children:"md"}),", ",n.jsx(e.code,{children:"lg"}),", ",n.jsx(e.code,{children:"xl"})," のプリセットサイズ、または数値/文字列でのカスタムサイズ指定が可能です。"]}),`
`,n.jsxs(e.li,{children:["フル幅オプション: ",n.jsx(e.code,{children:"fluid"})," プロパティを使用することで、最大幅を制限せずに 100% の幅で表示できます。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"サイズ展開",children:"サイズ展開"}),`
`,n.jsx(e.p,{children:"さまざまなプリセットサイズを提供しています。"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"フル幅-fluid",children:"フル幅 (Fluid)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"fluid"})," プロパティを使用すると、コンテナは親要素の全幅に広がります。"]}),`
`,n.jsx(r,{of:a})]})}function v(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{v as default};
