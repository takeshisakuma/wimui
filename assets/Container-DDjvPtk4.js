import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BqE_2Viu.js";import{M as t,C as i,a as d}from"./index-nX7vBXOI.js";import{C as c,D as x,S as l,F as h}from"./Container.stories-aKUhdjfi.js";import{T as j}from"./T-B61OVoBv.js";import"./iframe-XOVTCxac.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BEJf9WnE.js";import"./index-CEYSoel4.js";import"./index-cq53MBx1.js";import"./index-C02Wztqw.js";import"./index-Cr-nXHnX.js";import"./Container-DAyGvARZ.js";import"./index-Jk7r-gPn.js";import"./Box-C8N8GqpT.js";import"./useTranslation-DUvHu8nS.js";function s(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:c}),`
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
`,n.jsx(i,{of:x}),`
`,n.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特徴"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"中央配置"})}),n.jsxs("td",{children:[n.jsx("code",{children:'mx="auto"'})," がデフォルトで適用され、コンテンツが常に中央に配置されます。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"レスポンシブなサイズ"})}),n.jsxs("td",{children:[n.jsx("code",{children:"xs"}),", ",n.jsx("code",{children:"sm"}),", ",n.jsx("code",{children:"md"}),", ",n.jsx("code",{children:"lg"}),", ",n.jsx("code",{children:"xl"})," のプリセットサイズ、または数値/文字列でのカスタムサイズ指定が可能です。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"フル幅オプション"})}),n.jsxs("td",{children:[n.jsx("code",{children:"fluid"})," プロパティを使用することで、最大幅を制限せずに 100% の幅で表示できます。"]})]})]})]}),`
`,n.jsx(e.h2,{id:"api-リファレンス",children:"API リファレンス"}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"サイズ展開",children:"サイズ展開"}),`
`,n.jsx(e.p,{children:"さまざまなプリセットサイズを提供しています。"}),`
`,n.jsx(i,{of:l}),`
`,n.jsx(e.h2,{id:"フル幅-fluid",children:"フル幅 (Fluid)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"fluid"})," プロパティを使用すると、コンテナは親要素の全幅に広がります。"]}),`
`,n.jsx(i,{of:h})]})}function k(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{k as default};
