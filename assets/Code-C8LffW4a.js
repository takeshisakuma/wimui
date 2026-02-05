import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BlTx-7hD.js";import{M as c,T as l,S as d,C as r,a as x}from"./index-BFEYOU_1.js";import{C as a,I as s,B as h,L as j}from"./Code.stories-CaQDHu7X.js";import"./iframe-C9O3I54Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7Hrk_60.js";import"./index-BN3_4R24.js";import"./index-B6bUO9K-.js";import"./index-98ZzNgXr.js";function t(e){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:a}),`
`,n.jsx(l,{}),`
`,n.jsx(d,{children:n.jsx(o.p,{children:"インラインコードやコードブロックを表示するために使用されます。"})}),`
`,n.jsx(o.h2,{id:"使用法",children:"使用法"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Code } from './Code';\r
\r
// インライン\r
<Code>npm install wimui</Code>\r
\r
// ブロック\r
<Code block language="bash">\r
npm install wimui\r
</Code>
`})}),`
`,n.jsx(r,{of:s}),`
`,n.jsx(x,{}),`
`,n.jsx(o.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsx(o.h3,{id:"inline",children:"Inline"}),`
`,n.jsx(r,{of:s}),`
`,n.jsx(o.h3,{id:"block",children:"Block"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(o.h3,{id:"long-content",children:"Long Content"}),`
`,n.jsx(r,{of:j}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"Note"}),`\r
`,n.jsx(o.code,{children:"Code"})," コンポーネントのコードブロック（",n.jsx(o.code,{children:"block"})," プロパティが ",n.jsx(o.code,{children:"true"})," の場合）では、横スクロールを有効にしています。これは、長いコード行を無理に折り返すとインデントや構造が崩れて可読性が低下するためです。"]}),`
`]})]})}function q(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{q as default};
