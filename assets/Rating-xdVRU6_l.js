import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-CKcXlz9b.js";import{M as t,a as l,C as o}from"./index-kmloL-Xt.js";import{T as d}from"./T-CD2mWP9D.js";import{R as a,A as c,S as x,D as h}from"./Rating.stories-DfBCY7lT.js";import"./iframe-hgUaHlXL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D_gYxGrd.js";import"./index-B-gK2Fsq.js";import"./index-CalrS4f1.js";import"./index-xnFl43yv.js";import"./index-BqCLEta0.js";import"./useTranslation-CZ4_avbq.js";import"./index-CZvm72Ag.js";import"./Icon-rBf354tB.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:a}),`
`,n.jsx(e.h1,{id:"rating",children:"Rating"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(d,{k:"doc_rating_title"})}),`
`,n.jsx(e.p,{children:"評価（レーティング）を表示・入力するためのコンポーネントです。"}),`
`,n.jsx(e.h2,{id:"使用方法",children:"使用方法"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Rating } from "@/components/Rating/Rating";\r
\r
const Example = () => {\r
  return <Rating defaultValue={3} onChange={(val) => console.log(val)} />;\r
};
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsx(e.h3,{id:"ハーフスター許可",children:"ハーフスター許可"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"allowHalf"})," プロップを使用することで、0.5単位での評価が可能になります。"]}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(e.h3,{id:"サイズ",children:"サイズ"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"small"}),", ",n.jsx(e.code,{children:"medium"}),", ",n.jsx(e.code,{children:"large"})," の3つのサイズをサポートしています。"]}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(e.h3,{id:"無効化読み取り専用",children:"無効化（読み取り専用）"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"disabled"})," プロップを使用することで、値を変更できない読み取り専用モードになります。"]}),`
`,n.jsx(o,{of:h})]})}function X(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{X as default};
