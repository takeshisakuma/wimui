import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-B1RBnliS.js";import{M as c,T as l,C as t,a as d}from"./index-CeBNNgzQ.js";import{C as x,I as s,B as m,L as a}from"./Code.stories-ab0DaysS.js";import"./iframe-Be3gXwOX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D04X_IO6.js";import"./index-DWycTjYs.js";import"./index-BX1_cb16.js";import"./index-Dd6M7oDv.js";import"./index-B9vcTgK8.js";import"./index-CL3wGj0C.js";function i(e){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:x}),`
`,n.jsx(l,{}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(o.p,{children:"インラインコードやコードブロックを表示するために使用される"})}),`
`,n.jsx(o.h2,{id:"使用法",children:"使用法"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Code } from "./Code";
import { T } from "../T";

const Example = () => (
  <>
    {/* インライン */}
    <Code>npm install wimui</Code>

    {/* ブロック */}
    <Code block language="bash">
      npm install wimui
    </Code>
  </>
);
`})}),`
`,n.jsx(t,{of:s}),`
`,n.jsx(d,{}),`
`,n.jsx(o.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsx(o.h3,{id:"inline",children:"Inline"}),`
`,n.jsx(t,{of:s}),`
`,n.jsx(o.h3,{id:"block",children:"Block"}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(o.h3,{id:"long-content",children:"Long Content"}),`
`,n.jsx(t,{of:a}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsxs(o.p,{children:[`Note
`,n.jsx(o.code,{children:"Code"})," コンポーネントのコードブロック（",n.jsx(o.code,{children:"block"})," プロパティが ",n.jsx(o.code,{children:"true"})," の場合）では、横スクロールを有効にしている",n.jsx("br",{}),`
これは、長いコード行を無理に折り返すとインデントや構造が崩れて可読性が低下するため`]}),`
`]})]})}function q(e={}){const{wrapper:o}={...r(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{q as default};
