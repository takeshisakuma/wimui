import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dp-iAYo8.js";import{M as l}from"./index-DogkdSQ2.js";import"./iframe-BCl9oQRY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-aCdz2OpP.js";import"./index-BSAgzlHu.js";import"./index-DmGIzDxJ.js";import"./index-Ckhshw6N.js";import"./index-Dp_C75Im.js";function i(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...d(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Guides/Buttons & Actions"}),`
`,n.jsx(s.h1,{id:"ボタンコンポーネントの使い分け",children:"ボタンコンポーネントの使い分け"}),`
`,n.jsx(s.p,{children:"ユーザーのアクションを促すボタンは、その重要度や役割に応じて視覚的な重み付けを使い分ける必要があります。"}),`
`,n.jsx(s.h2,{id:"link-a-vs-button-button",children:"Link (a) vs Button (button)"}),`
`,n.jsx(s.p,{children:"セマンティクス（意味付け）とアクセシビリティを正しく保つために、見た目ではなく「目的」で使い分けます。"}),`
`,n.jsxs(s.p,{children:[`| コンポーネント | 目的 | 典型的なアクション |\r
| :--- | :--- | :--- |\r
| `,n.jsx(s.strong,{children:"Link (a)"})," | ",n.jsx(s.strong,{children:"ナビゲーション"}),` | 他のページへの遷移、ページ内リンク、外部サイトへの移動 |\r
| `,n.jsx(s.strong,{children:"Button (button)"})," | ",n.jsx(s.strong,{children:"アクション"})," | フォームの送信、モーダルの開閉、状態の変更、計算の実行 |"]}),`
`,n.jsx(s.h3,{id:"使い分けの基準",children:"使い分けの基準"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Link を選ぶ基準"}),":",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"URLが変わる。"}),`
`,n.jsx(s.li,{children:"ブラウザの「戻る」ボタンで戻ることが期待される。"}),`
`,n.jsx(s.li,{children:"「新しいタブで開く」という操作が可能であってほしい。"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Button を選ぶ基準"}),":",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"ページ上のデータを操作（保存・削除など）する。"}),`
`,n.jsx(s.li,{children:"動作を実行するだけでURLは変わらない。"}),`
`,n.jsx(s.li,{children:"右クリックや「新しいタブで開く」が意味をなさない。"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"実装上の注意",children:"実装上の注意"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"見た目と役割"}),": 「見た目はボタンだが機能はリンク」という場合は、",n.jsx(s.code,{children:"LinkButton"})," コンポーネントを使用してください。これは内部的に ",n.jsx(s.code,{children:"<a>"})," タグを使用しつつ、ボタンのスタイリングを適用します。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"無効状態"}),": ",n.jsx(s.code,{children:"<a>"})," タグには本来 ",n.jsx(s.code,{children:"disabled"})," 属性が存在しません。リンクを無効化する必要がある場合は、リンクを表示しないか、意味的にボタンであるべきではないか再検討してください。"]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"役割と優先度",children:"役割と優先度"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"種類 (Priority)"}),n.jsx("th",{children:"視覚的な重み"}),n.jsx("th",{children:"用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Primary"})}),n.jsx("td",{children:"強 (塗りつぶし)"}),n.jsx("td",{children:"その画面で最も重要な単一のアクション（送信、保存、完了）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Secondary"})}),n.jsx("td",{children:"中 (アウトライン)"}),n.jsx("td",{children:"主要アクションを補完するアクション（キャンセル、編集、戻る）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Tertiary (Ghost)"})}),n.jsx("td",{children:"弱 (テキストのみ)"}),n.jsx("td",{children:"重要度の低いオプション、多用しても画面を圧搬しない"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Danger"})}),n.jsx("td",{children:"強 (赤/警告色)"}),n.jsx("td",{children:"取り返しのつかない操作、注意が必要な操作（削除、退会）"})]})]})]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"特殊なボタン",children:"特殊なボタン"}),`
`,n.jsx(s.h3,{id:"1-fab-floating-action-button",children:"1. Fab (Floating Action Button)"}),`
`,n.jsx(s.p,{children:"画面の右下などに浮いているボタンです。"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"いつ使うか"}),": 画面内のどこからでもアクセスしたい、そのページで最も頻繁に行われるアクション。"]}),`
`]}),`
`,n.jsx(s.h3,{id:"2-button-group",children:"2. Button Group"}),`
`,n.jsx(s.p,{children:"複数のボタンを繋げて表示するコンポーネントです。"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"いつ使うか"}),": 関連性の高い一連のアクションをまとめるとき（例：ソート順の切り替え）。"]}),`
`]}),`
`,n.jsx(s.h3,{id:"3-copy-button",children:"3. Copy Button"}),`
`,n.jsx(s.p,{children:"値をクリップボードにコピーするための専用ボタンです。"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"いつ使うか"}),": ユーザーが手動で選択してコピーするのが難しい値。"]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"ガイドライン",children:"ガイドライン"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"一貫性"}),": 同じアクションには同じ種類のボタンを常に使用してください。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"配置"}),": 主要なボタン（Primary）は、一般的な視線移動の終点に配置します。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"配置の競合"}),": 1つの画面に Primary ボタンは原則として1つだけに留めます。"]}),`
`]})]})}function p(r={}){const{wrapper:s}={...d(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(i,{...r})}):i(r)}export{p as default};
