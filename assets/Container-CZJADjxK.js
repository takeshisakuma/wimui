import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Ck-gB__-.js";import{M as c,C as r,a as d}from"./index-CSevX7wz.js";import{C as l,D as x,S as h,F as a}from"./Container.stories-Cz4gX-MW.js";import{T as o}from"./T-CCQl6naC.js";import"./iframe-4bM1vrrp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-PwYTsuqL.js";import"./index-BfRII9fN.js";import"./index-DuJtemmP.js";import"./index-45a-nKAS.js";import"./index-B9hN9QaI.js";import"./Container-CaW_CazF.js";import"./index-wOw2goDe.js";import"./Box-Dg3m1ziC.js";import"./useTranslation-BFrfyqZo.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l}),`
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
