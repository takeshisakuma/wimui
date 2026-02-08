import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-CBJWLlGW.js";import{M as t,C as s,a as c}from"./index-CO4sIPDa.js";import{F as d,D as l,A as p}from"./FocusTrap.stories-aw8ur18c.js";import"./iframe-CycZabT0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGf6Y6iA.js";import"./index-CI50e0sS.js";import"./index-B-QwurPz.js";import"./index-Thg1bX64.js";import"./index-BUC5JGjO.js";import"./FocusTrap-DeMBgeqs.js";import"./index-BuljsEsS.js";import"./Button-CEcBRwig.js";import"./Icon-WdlFThQe.js";import"./useTranslation-eaXQAKr9.js";import"./Input-DWjMKOBP.js";/* empty css              */function i(r){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
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
`,n.jsx(s,{of:p}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(c,{})]})}function v(r={}){const{wrapper:o}={...e(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(i,{...r})}):i(r)}export{v as default};
