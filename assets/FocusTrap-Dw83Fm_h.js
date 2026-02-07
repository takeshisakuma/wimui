import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-CQbcvf7x.js";import{M as t,C as s,a as c}from"./index-CDJ1-Zcw.js";import{F as d,D as l,A as h}from"./FocusTrap.stories-CW9IqDe7.js";import"./iframe-lE15KcV6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKgja5N-.js";import"./index-CRF3e_bH.js";import"./index-BDEMxIjN.js";import"./index-gKXHzgf-.js";import"./FocusTrap-Bu8ugMB5.js";import"./index-DWgJpq_s.js";import"./Button-B-VUE4z5.js";import"./Icon-lWfqHGjM.js";import"./useTranslation-BPeDPpyb.js";import"./Input-Bv9RT-cQ.js";/* empty css              */function i(r){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
`,n.jsx(o.h1,{id:"focustrap",children:"FocusTrap"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"FocusTrap"}),` は、キーボードのフォーカスを特定の領域内に閉じ込めるためのユーティリティコンポーネントです。\r
モーダル、ダイアログ、ドロワーなど、ユーザーの操作を特定の範囲に限定したいアクセシブルなUIの実装に使用します。`]}),`
`,n.jsx(o.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"Tab"})," キーによる移動をコンポーネント内に制限します。"]}),`
`,n.jsxs(o.li,{children:["最後の要素で ",n.jsx(o.code,{children:"Tab"})," を押すと最初の要素に戻り、最初の要素で ",n.jsx(o.code,{children:"Shift + Tab"})," を押すと最後の要素に移動します（ループ）。"]}),`
`,n.jsx(o.li,{children:"コンポーネントがマウントされた際（または有効になった際）、自動的に内部の最初のフォーカス可能要素にフォーカスを移すことができます。"}),`
`,n.jsx(o.li,{children:"コンポーネントがアンマウントされた際、フォーカスを以前アクティブだった要素に戻します。"}),`
`]}),`
`,n.jsx(o.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(o.h2,{id:"自動フォーカス",children:"自動フォーカス"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"autoFocus"})," プロップを ",n.jsx(o.code,{children:"true"})," に設定すると、トラップが有効になった瞬間に最初のフォーカス可能要素へフォーカスを移動します。"]}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(c,{})]})}function g(r={}){const{wrapper:o}={...e(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(i,{...r})}):i(r)}export{g as default};
