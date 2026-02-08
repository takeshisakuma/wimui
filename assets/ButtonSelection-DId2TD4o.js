import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-9I3CaXbD.js";import{M as d}from"./index-SXFOAGR5.js";import"./iframe-CBzo6FU_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXY_ioGk.js";import"./index-DccsuQjq.js";import"./index-BASy7BvE.js";import"./index-DMW_L08v.js";import"./index-BVHz3hgc.js";function i(s){const r={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Guides/Buttons"}),`
`,n.jsx(r.h1,{id:"ボタンコンポーネントの使い分け",children:"ボタンコンポーネントの使い分け"}),`
`,n.jsx(r.p,{children:"ユーザーのアクションを促すボタンは、その重要度や役割に応じて視覚的な重み付けを使い分ける必要があります。"}),`
`,n.jsx(r.h2,{id:"役割と優先度",children:"役割と優先度"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"種類 (Priority)"}),n.jsx("th",{children:"視覚的な重み"}),n.jsx("th",{children:"用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Primary"})}),n.jsx("td",{children:"強 (塗りつぶし)"}),n.jsx("td",{children:"その画面で最も重要な単一のアクション（送信、保存、完了）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Secondary"})}),n.jsx("td",{children:"中 (アウトライン)"}),n.jsx("td",{children:"主要アクションを補完するアクション（キャンセル、編集、戻る）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Tertiary (Ghost)"})}),n.jsx("td",{children:"弱 (テキストのみ)"}),n.jsx("td",{children:"重要度の低いオプション、多用しても画面を圧搬しない"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Danger"})}),n.jsx("td",{children:"強 (赤/警告色)"}),n.jsx("td",{children:"取り返しのつかない操作、注意が必要な操作（削除、退会）"})]})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"特殊なボタン",children:"特殊なボタン"}),`
`,n.jsx(r.h3,{id:"1-fab-floating-action-button",children:"1. Fab (Floating Action Button)"}),`
`,n.jsx(r.p,{children:"画面の右下などに浮いているボタンです。"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"いつ使うか"}),": 画面内のどこからでもアクセスしたい、そのページで最も頻繁に行われるアクション。"]}),`
`]}),`
`,n.jsx(r.h3,{id:"2-button-group",children:"2. Button Group"}),`
`,n.jsx(r.p,{children:"複数のボタンを繋げて表示するコンポーネントです。"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"いつ使うか"}),": 関連性の高い一連のアクションをまとめるとき（例：ソート順の切り替え）。"]}),`
`]}),`
`,n.jsx(r.h3,{id:"3-copy-button",children:"3. Copy Button"}),`
`,n.jsx(r.p,{children:"値をクリップボードにコピーするための専用ボタンです。"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"いつ使うか"}),": ユーザーが手動で選択してコピーするのが難しい値。"]}),`
`]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"ガイドライン",children:"ガイドライン"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"一貫性"}),": 同じアクションには同じ種類のボタンを常に使用してください。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"配置"}),": 主要なボタン（Primary）は、一般的な視線移動の終点に配置します。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"配置の競合"}),": 1つの画面に Primary ボタンは原則として1つだけに留めます。"]}),`
`]})]})}function p(s={}){const{wrapper:r}={...t(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(i,{...s})}):i(s)}export{p as default};
