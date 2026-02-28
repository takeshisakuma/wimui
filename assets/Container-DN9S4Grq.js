import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DFNKA_V7.js";import{M as o,C as s,a as t}from"./blocks-CX2MuiOa.js";import{C as c,D as x,S as l,F as h}from"./Container.stories-TkGREVTh.js";import{T as j}from"./T-BxJRC_oq.js";import"./iframe-CSwZKKgh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D91GK5yZ.js";import"./index-CEGjitDu.js";import"./index-DCFmpl79.js";import"./index-DDm-SkYv.js";import"./Container-CF2rO780.js";import"./index-DV843YsD.js";import"./Box-jfJFGbug.js";import"./useTranslation-CnASG-hp.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:c}),`
`,n.jsx(e.h1,{id:"container",children:"Container"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(j,{k:"doc_container_title"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Container"})," コンポーネントは、コンテンツを中央に配置し、最大幅を制限するために使用されます。"]}),`
`,n.jsx(e.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Container } from "@/components/Container/Container";

const Demo = () => (
  <Container size="md" p={20}>
    中央に配置されるコンテンツ
  </Container>
);
`})}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特徴"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"中央配置"})}),n.jsxs("td",{children:[n.jsx("code",{children:'mx="auto"'})," がデフォルトで適用され、コンテンツが常に中央に配置されます。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"レスポンシブなサイズ"})}),n.jsxs("td",{children:[n.jsx("code",{children:"xs"}),", ",n.jsx("code",{children:"sm"}),", ",n.jsx("code",{children:"md"}),", ",n.jsx("code",{children:"lg"}),", ",n.jsx("code",{children:"xl"})," のプリセットサイズ、または数値/文字列でのカスタムサイズ指定が可能です。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"フル幅オプション"})}),n.jsxs("td",{children:[n.jsx("code",{children:"fluid"})," プロパティを使用することで、最大幅を制限せずに 100% の幅で表示できます。"]})]})]})]}),`
`,n.jsx(e.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(t,{}),`
`,n.jsx(e.h2,{id:"サイズ展開",children:"サイズ展開"}),`
`,n.jsx(e.p,{children:"さまざまなプリセットサイズを提供しています。"}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(e.h2,{id:"フル幅-fluid",children:"フル幅 (Fluid)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"fluid"})," プロパティを使用すると、コンテナは親要素の全幅に広がります。"]}),`
`,n.jsx(s,{of:h})]})}function b(r={}){const{wrapper:e}={...d(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{b as default};
