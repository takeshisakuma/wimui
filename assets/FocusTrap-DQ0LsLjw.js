import{j as o}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-obh1fH13.js";import{M as e,C as i,a as c}from"./index-D4KMoohx.js";import{F as d,D as l,A as p}from"./FocusTrap.stories-mUuXaHA_.js";import{T as x}from"./T-CpAhIbuR.js";import"./iframe-h6I5Tw72.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BNA_E1Ge.js";import"./index-BPsLtc7k.js";import"./index-MWiZxd1E.js";import"./index-CZiC1UCY.js";import"./index-CfzDO8Bn.js";import"./FocusTrap-DN-oH6K7.js";import"./index-D-1qlFt7.js";import"./Button-uW3EprHz.js";import"./Icon-CCEWZSet.js";import"./useTranslation-D4i6VK_2.js";import"./Input-CuVJ5rJd.js";/* empty css              */function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:d}),`
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
