import{j as o}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-D4HkRMM8.js";import{M as e,C as i,a as c}from"./index-B0Z6462_.js";import{F as d,D as l,A as p}from"./FocusTrap.stories-Cntf5u6P.js";import{T as x}from"./T-TiKTjfdU.js";import"./iframe-B9SSQewD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DL9vcse4.js";import"./index-DT_cYXDB.js";import"./index-DihkFn3j.js";import"./index-BF14opok.js";import"./index-B1qvGI7O.js";import"./FocusTrap-D2bjW4b5.js";import"./index-B5-Yv-Fa.js";import"./Button-CXlyS40c.js";import"./Icon-BrKjnFhm.js";import"./useTranslation-CmIinFSF.js";import"./Input-DGcTIYhV.js";/* empty css              */function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:d}),`
`,o.jsx(n.h1,{id:"focustrap",children:"FocusTrap"}),`
`,o.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:o.jsx(x,{k:"doc_focustrap_title"})}),`
`,o.jsxs(n.p,{children:[o.jsx(n.code,{children:"FocusTrap"}),` は、キーボードのフォーカスを特定の領域内に閉じ込めるためのユーティリティコンポーネントです。\r
モーダル、ダイアログ、ドロワーなど、ユーザーの操作を特定の範囲に限定したいアクセシブルなUIの実装に使用します。`]}),`
`,o.jsx(n.h2,{id:"特徴",children:"特徴"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsxs(n.li,{children:[o.jsx(n.code,{children:"Tab"})," キーによる移動をコンポーネント内に制限します。"]}),`
`,o.jsxs(n.li,{children:["最後の要素で ",o.jsx(n.code,{children:"Tab"})," を押すと最初の要素に戻り、最初の要素で ",o.jsx(n.code,{children:"Shift + Tab"})," を押すと最後の要素に移動します（ループ）。"]}),`
`,o.jsx(n.li,{children:"コンポーネントがマウントされた際（または有効になった際）、自動的に内部の最初のフォーカス可能要素にフォーカスを移すことができます。"}),`
`,o.jsx(n.li,{children:"コンポーネントがアンマウントされた際、フォーカスを以前アクティブだった要素に戻します。"}),`
`]}),`
`,o.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,o.jsx(i,{of:l}),`
`,o.jsx(n.h2,{id:"自動フォーカス",children:"自動フォーカス"}),`
`,o.jsxs(n.p,{children:[o.jsx(n.code,{children:"autoFocus"})," プロップを ",o.jsx(n.code,{children:"true"})," に設定すると、トラップが有効になった瞬間に最初のフォーカス可能要素へフォーカスを移動します。"]}),`
`,o.jsx(i,{of:p}),`
`,o.jsx(n.h2,{id:"props",children:"Props"}),`
`,o.jsx(c,{})]})}function v(r={}){const{wrapper:n}={...t(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(s,{...r})}):s(r)}export{v as default};
