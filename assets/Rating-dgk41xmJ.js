import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-CBJWLlGW.js";import{M as t,a as d,C as s}from"./index-CO4sIPDa.js";import{R as l,A as a,S as c,D as h}from"./Rating.stories-BMfNu8He.js";import"./iframe-CycZabT0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGf6Y6iA.js";import"./index-CI50e0sS.js";import"./index-B-QwurPz.js";import"./index-Thg1bX64.js";import"./index-BUC5JGjO.js";import"./index-BuljsEsS.js";import"./Icon-WdlFThQe.js";function o(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:l}),`
`,n.jsx(e.h1,{id:"rating",children:"Rating"}),`
`,n.jsx(e.p,{children:"評価（レーティング）を表示・入力するためのコンポーネントです。"}),`
`,n.jsx(e.h2,{id:"使用方法",children:"使用方法"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Rating } from "./Rating";\r
\r
const Example = () => {\r
  return <Rating defaultValue={3} onChange={(val) => console.log(val)} />;\r
};
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsx(e.h3,{id:"ハーフスター許可",children:"ハーフスター許可"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"allowHalf"})," プロップを使用することで、0.5単位での評価が可能になります。"]}),`
`,n.jsx(s,{of:a}),`
`,n.jsx(e.h3,{id:"サイズ",children:"サイズ"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"small"}),", ",n.jsx(e.code,{children:"medium"}),", ",n.jsx(e.code,{children:"large"})," の3つのサイズをサポートしています。"]}),`
`,n.jsx(s,{of:c}),`
`,n.jsx(e.h3,{id:"無効化読み取り専用",children:"無効化（読み取り専用）"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"disabled"})," プロップを使用することで、値を変更できない読み取り専用モードになります。"]}),`
`,n.jsx(s,{of:h})]})}function S(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{S as default};
