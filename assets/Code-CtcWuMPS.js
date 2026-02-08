import{j as n}from"./react-D-G-yZ1o.js";import{useMDXComponents as i}from"./@mdx-js-yW0sD_pK.js";import{M as c,T as l,k as d,i as r,j as x}from"./@storybook-esNwf5LZ.js";import{C as j,I as s,B as a,L as m}from"./Code.stories-DWlc1WS3.js";import"../vite-inject-mocker-entry.js";import"./semver-MwBmqdgB.js";import"./react-dom-DgMH5qYG.js";import"./scheduler-7OC5HNn7.js";import"./use-sync-external-store-Crwep2Tv.js";import"./ts-dedent-DrFu-skq.js";import"./prop-types-CamVAYe7.js";function t(e){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:j}),`
`,n.jsx(l,{}),`
`,n.jsx(d,{children:n.jsx(o.p,{children:"インラインコードやコードブロックを表示するために使用される"})}),`
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
`,n.jsx(r,{of:a}),`
`,n.jsx(o.h3,{id:"long-content",children:"Long Content"}),`
`,n.jsx(r,{of:m}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"Note"}),`\r
`,n.jsx(o.code,{children:"Code"})," コンポーネントのコードブロック（",n.jsx(o.code,{children:"block"})," プロパティが ",n.jsx(o.code,{children:"true"})," の場合）では、横スクロールを有効にしている",n.jsx("br",{}),`\r
これは、長いコード行を無理に折り返すとインデントや構造が崩れて可読性が低下するため`]}),`
`]})]})}function w(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{w as default};
