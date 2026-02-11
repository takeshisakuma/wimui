import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-B6kd_k3C.js";import{M as t,C as i,a as d}from"./index-DMItklni.js";import{C as c,D as l,S as x,F as h}from"./Container.stories-uRSoGEZn.js";import{T as j}from"./T-CzGOJVxK.js";import"./iframe-CX-nbmQ1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvsZdcwu.js";import"./index-MdpD33bK.js";import"./index-BUHRaD6S.js";import"./index-CSaovZqM.js";import"./index--EquUtGv.js";import"./index-C9UxkZsF.js";import"./Box-Ca-NxuP-.js";import"./useTranslation-DDSFuP0b.js";function s(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c}),`
`,n.jsx(r.h1,{id:"container",children:"Container"}),`
`,n.jsx(j,{k:"doc_container_title"}),`
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
`,n.jsx(i,{of:l}),`
`,n.jsx(r.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"中央配置"}),": ",n.jsx(r.code,{children:'mx="auto"'})," がデフォルトで適用され、コンテンツが常に中央に配置されます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"レスポンシブなサイズ"}),": ",n.jsx(r.code,{children:"xs"}),", ",n.jsx(r.code,{children:"sm"}),", ",n.jsx(r.code,{children:"md"}),", ",n.jsx(r.code,{children:"lg"}),", ",n.jsx(r.code,{children:"xl"})," のプリセットサイズ、または数値/文字列でのカスタムサイズ指定が可能です。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"フル幅オプション"}),": ",n.jsx(r.code,{children:"fluid"})," プロパティを使用することで、最大幅を制限せずに 100% の幅で表示できます。"]}),`
`]}),`
`,n.jsx(r.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(d,{}),`
`,n.jsx(r.h2,{id:"サイズ展開",children:"サイズ展開"}),`
`,n.jsx(r.p,{children:"さまざまなプリセットサイズを提供しています。"}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(r.h2,{id:"フル幅-fluid",children:"フル幅 (Fluid)"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"fluid"})," プロパティを使用すると、コンテナは親要素の全幅に広がります。"]}),`
`,n.jsx(i,{of:h})]})}function v(e={}){const{wrapper:r}={...o(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{v as default};
