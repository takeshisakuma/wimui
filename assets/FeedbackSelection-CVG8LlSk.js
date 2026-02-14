import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Cpzut4EG.js";import{M as i}from"./index-CDeIroHw.js";import"./iframe-CN-u-8FK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9VI5iTV.js";import"./index-BMqb84-a.js";import"./index-BeFx1j0N.js";import"./index-B8Ad1bz4.js";import"./index-2F-nz17u.js";function d(e){const r={h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Guides/Feedback"}),`
`,n.jsx(r.h1,{id:"フィードバック通知コンポーネントの使い分け",children:"フィードバック・通知コンポーネントの使い分け"}),`
`,n.jsx(r.p,{children:"システムの状態変化やユーザーの操作結果を伝える際、メッセージの重要度や持続性に応じてコンポーネントを選択します。"}),`
`,n.jsx(r.h2,{id:"コンポーネント比較",children:"コンポーネント比較"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"コンポーネント"}),n.jsx("th",{children:"表示場所"}),n.jsx("th",{children:"持続性"}),n.jsx("th",{children:"強制力"}),n.jsx("th",{children:"主な用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Alert"})}),n.jsx("td",{children:"コンテンツ内"}),n.jsx("td",{children:"永続的/手動"}),n.jsx("td",{children:"低"}),n.jsx("td",{children:"画面全体やセクションに関連する重要な情報"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Toast / Snackbar"})}),n.jsx("td",{children:"画面の端"}),n.jsx("td",{children:"一時的 (自動)"}),n.jsx("td",{children:"低"}),n.jsx("td",{children:"操作の成功確認、軽微な通知"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Banner"})}),n.jsx("td",{children:"画面上部"}),n.jsx("td",{children:"永続的"}),n.jsx("td",{children:"中"}),n.jsx("td",{children:"メンテナンス予告、重要な案内"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Badge / Indicator"})}),n.jsx("td",{children:"要素の上"}),n.jsx("td",{children:"永続的"}),n.jsx("td",{children:"低"}),n.jsx("td",{children:"未読件数、ステータスの表示"})]})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"ステータスの意味合い",children:"ステータスの意味合い"}),`
`,n.jsx(r.p,{children:"フィードバックコンポーネントは、色のセマンティクスを活用して情報を伝えます。"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Success (Green): 操作が成功した、正常に完了した。"}),`
`,n.jsx(r.li,{children:"Info (Blue): 補足的な情報、中立的な通知。"}),`
`,n.jsx(r.li,{children:"Warning (Yellow/Orange): 注意が必要。"}),`
`,n.jsx(r.li,{children:"Error (Red): 致命的な問題、操作の拒否。"}),`
`]})]})}function u(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(d,{...e})}):d(e)}export{u as default};
