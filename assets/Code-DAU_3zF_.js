import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BwnJfA-2.js";import{M as c,T as l,C as r,a as d}from"./index-DR9yAJ0B.js";import{C as x,I as t,B as m,L as a}from"./Code.stories-c9HGdB8A.js";import"./iframe-BbDYKtlj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-GZjb8rEM.js";import"./index-CUgZ4D7B.js";import"./index-MYMeRBXe.js";import"./index-CE7_z6yl.js";import"./index-tAI0z-7I.js";import"./index-Bp4MVLTo.js";function s(e){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:x}),`
`,n.jsx(l,{}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(o.p,{children:"インラインコードやコードブロックを表示するために使用される"})}),`
`,n.jsx(o.h2,{id:"使用法",children:"使用法"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Code } from './Code';\r
import { T } from "../T";\r
\r
const Example = () => (\r
    <>\r
        {/* インライン */}\r
        <Code>npm install wimui</Code>\r
\r
        {/* ブロック */}\r
        <Code block language="bash">\r
            npm install wimui\r
        </Code>\r
    </>\r
);
`})}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(d,{}),`
`,n.jsx(o.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsx(o.h3,{id:"inline",children:"Inline"}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(o.h3,{id:"block",children:"Block"}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(o.h3,{id:"long-content",children:"Long Content"}),`
`,n.jsx(r,{of:a}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"Note"}),`\r
`,n.jsx(o.code,{children:"Code"})," コンポーネントのコードブロック（",n.jsx(o.code,{children:"block"})," プロパティが ",n.jsx(o.code,{children:"true"})," の場合）では、横スクロールを有効にしている",n.jsx("br",{}),`\r
これは、長いコード行を無理に折り返すとインデントや構造が崩れて可読性が低下するため`]}),`
`]})]})}function q(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(s,{...e})}):s(e)}export{q as default};
