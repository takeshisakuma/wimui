import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-B2K_e2w9.js";import{M as t,C as i,a as c}from"./blocks-Co24uSwP.js";import{F as d,D as l,A as p}from"./FocusTrap.stories-KxNgM8SZ.js";import{T as x}from"./T-CNQyDgm7.js";import"./iframe-BN-4pijT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDyAH9Gx.js";import"./index-CXYa8rZT.js";import"./index-BTwjK_Rj.js";import"./index-hqaaz1Nb.js";import"./FocusTrap-BYTmh1wT.js";import"./index-CubViWzO.js";import"./Button-Cw-0rNsx.js";import"./Icon-Bl9Iq_fA.js";import"./useTranslation-1LeyJRh3.js";import"./Input-DlczBcpk.js";/* empty css              */function s(r){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
`,n.jsx(o.h1,{id:"focustrap",children:"FocusTrap"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(x,{k:"doc_focustrap_title"})}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"FocusTrap"}),` は、キーボードのフォーカスを特定の領域内に閉じ込めるためのユーティリティコンポーネントです。
モーダル、ダイアログ、ドロワーなど、ユーザーの操作を特定の範囲に限定したいアクセシブルなUIの実装に使用します。`]}),`
`,n.jsx(o.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"Tab"})," キーによる移動をコンポーネント内に制限します。"]}),`
`,n.jsxs(o.li,{children:["最後の要素で ",n.jsx(o.code,{children:"Tab"})," を押すと最初の要素に戻り、最初の要素で ",n.jsx(o.code,{children:"Shift + Tab"})," を押すと最後の要素に移動します（ループ）。"]}),`
`,n.jsx(o.li,{children:"コンポーネントがマウントされた際（または有効になった際）、自動的に内部の最初のフォーカス可能要素にフォーカスを移すことができます。"}),`
`,n.jsx(o.li,{children:"コンポーネントがアンマウントされた際、フォーカスを以前アクティブだった要素に戻します。"}),`
`]}),`
`,n.jsx(o.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsx(i,{of:l}),`
`,n.jsx(o.h2,{id:"自動フォーカス",children:"自動フォーカス"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"autoFocus"})," プロップを ",n.jsx(o.code,{children:"true"})," に設定すると、トラップが有効になった瞬間に最初のフォーカス可能要素へフォーカスを移動します。"]}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(c,{})]})}function k(r={}){const{wrapper:o}={...e(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(s,{...r})}):s(r)}export{k as default};
