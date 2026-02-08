import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DkzZ0A4_.js";import{M as t}from"./index-CGeQ2nuz.js";import"./iframe-C05UZAs2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hHSantbW.js";import"./index-CIvTHK8o.js";import"./index-G3LYi74r.js";import"./index-DX8Bj0kD.js";import"./index-xEByAByW.js";function e(s){const r={h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Guides/Feedback"}),`
`,n.jsx(r.h1,{id:"フィードバック通知コンポーネントの使い分け",children:"フィードバック・通知コンポーネントの使い分け"}),`
`,n.jsx(r.p,{children:"システムの状態変化やユーザーの操作結果を伝える際、メッセージの重要度や持続性に応じてコンポーネントを選択します。"}),`
`,n.jsx(r.h2,{id:"コンポーネント比較",children:"コンポーネント比較"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"コンポーネント"}),n.jsx("th",{children:"表示場所"}),n.jsx("th",{children:"持続性"}),n.jsx("th",{children:"強制力"}),n.jsx("th",{children:"主な用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Alert"})}),n.jsx("td",{children:"コンテンツ内"}),n.jsx("td",{children:"永続的/手動"}),n.jsx("td",{children:"低"}),n.jsx("td",{children:"画面全体やセクションに関連する重要な情報"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Toast / Snackbar"})}),n.jsx("td",{children:"画面の端"}),n.jsx("td",{children:"一時的 (自動)"}),n.jsx("td",{children:"低"}),n.jsx("td",{children:"操作の成功確認、軽微な通知"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Banner"})}),n.jsx("td",{children:"画面上部"}),n.jsx("td",{children:"永続的"}),n.jsx("td",{children:"中"}),n.jsx("td",{children:"メンテナンス予告、重要な案内"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Badge / Indicator"})}),n.jsx("td",{children:"要素の上"}),n.jsx("td",{children:"永続的"}),n.jsx("td",{children:"低"}),n.jsx("td",{children:"未読件数、ステータスの表示"})]})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"ステータスの意味合い",children:"ステータスの意味合い"}),`
`,n.jsx(r.p,{children:"フィードバックコンポーネントは、色のセマンティクスを活用して情報を伝えます。"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Success (Green)"}),": 操作が成功した、正常に完了した。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Info (Blue)"}),": 補足的な情報、中立的な通知。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Warning (Yellow/Orange)"}),": 注意が必要。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Error (Red)"}),": 致命的な問題、操作の拒否。"]}),`
`]})]})}function g(s={}){const{wrapper:r}={...d(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(e,{...s})}):e(s)}export{g as default};
