import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DQk4yphO.js";import{M as d,C as i,a as c}from"./index-BHIGzwv4.js";import{C as l,D as x,S as h,F as j}from"./Container.stories-D99PhNSl.js";import{T as o}from"./T-0PHiuGX3.js";import"./iframe-BdHo9cuV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dm38OqJH.js";import"./index-Db0zjkm6.js";import"./index-DDX2dQiV.js";import"./index-BGuEN344.js";import"./index-C52Wubos.js";import"./index-BxUS1-Uu.js";import"./Box-rZQK8Bap.js";import"./useTranslation-CqTYRbdA.js";function s(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:l}),`
`,n.jsx(r.h1,{id:"container",children:"Container"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(o,{k:"doc_container_title"})}),`
`,n.jsx(o,{k:"doc_container_title"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"Container"})," コンポーネントは、コンテンツを中央に配置し、最大幅を制限するために使用されます。"]}),`
`,n.jsx(r.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { Container } from "./Container";\r
\r
const Demo = () => (\r
  <Container size="md" p={20}>\r
    中央に配置されるコンテンツ\r
  </Container>\r
);
`})}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(r.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"中央配置"}),": ",n.jsx(r.code,{children:'mx="auto"'})," がデフォルトで適用され、コンテンツが常に中央に配置されます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"レスポンシブなサイズ"}),": ",n.jsx(r.code,{children:"xs"}),", ",n.jsx(r.code,{children:"sm"}),", ",n.jsx(r.code,{children:"md"}),", ",n.jsx(r.code,{children:"lg"}),", ",n.jsx(r.code,{children:"xl"})," のプリセットサイズ、または数値/文字列でのカスタムサイズ指定が可能です。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"フル幅オプション"}),": ",n.jsx(r.code,{children:"fluid"})," プロパティを使用することで、最大幅を制限せずに 100% の幅で表示できます。"]}),`
`]}),`
`,n.jsx(r.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(c,{}),`
`,n.jsx(r.h2,{id:"サイズ展開",children:"サイズ展開"}),`
`,n.jsx(r.p,{children:"さまざまなプリセットサイズを提供しています。"}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(r.h2,{id:"フル幅-fluid",children:"フル幅 (Fluid)"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"fluid"})," プロパティを使用すると、コンテナは親要素の全幅に広がります。"]}),`
`,n.jsx(i,{of:j})]})}function y(e={}){const{wrapper:r}={...t(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{y as default};
