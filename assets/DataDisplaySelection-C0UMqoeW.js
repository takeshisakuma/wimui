import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-C2xSIaoD.js";import{M as e}from"./index-C1rjNvlD.js";import"./iframe-n4D-bytZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDcz0nAk.js";import"./index-DsCNz1Ak.js";import"./index-D78iGUZq.js";import"./index-C0l1cE17.js";import"./index-acv-lZDJ.js";function d(s){const r={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"Guides/Data Display"}),`
`,n.jsx(r.h1,{id:"データ表示コンポーネントの使い分け",children:"データ表示コンポーネントの使い分け"}),`
`,n.jsx(r.p,{children:"情報をユーザーに提示する際、その構造やユーザーが行いたい操作に応じて形式を選択します。"}),`
`,n.jsx(r.h2,{id:"表示形式比較表",children:"表示形式比較表"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"コンポーネント"}),n.jsx("th",{children:"構造"}),n.jsx("th",{children:"情報密度"}),n.jsx("th",{children:"主な用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Table"})}),n.jsx("td",{children:"格子状"}),n.jsx("td",{children:n.jsx("strong",{children:"最高"})}),n.jsx("td",{children:"数値の比較、大量データの効率的な閲覧"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Card"})}),n.jsx("td",{children:"ボックス型"}),n.jsx("td",{children:"中"}),n.jsx("td",{children:"概要把握、画像を含むリスト、ダッシュボード"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"List"})}),n.jsx("td",{children:"垂直一列"}),n.jsx("td",{children:"中〜低"}),n.jsx("td",{children:"シンプルな項目一覧、モバイル向けメニュー"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Accordion"})}),n.jsx("td",{children:"折りたたみ"}),n.jsx("td",{children:"低"}),n.jsx("td",{children:"詳細を段階的に開示、FAQ、設定項目の整理"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Timeline"})}),n.jsx("td",{children:"時系列"}),n.jsx("td",{children:"中"}),n.jsx("td",{children:"変更履歴、イベントの変遷、進捗状況"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"TreeView"})}),n.jsx("td",{children:"階層型"}),n.jsx("td",{children:"中"}),n.jsx("td",{children:"ファイル階層、組織図、ネストしたカテゴリ"})]})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"選択のガイドライン",children:"選択のガイドライン"}),`
`,n.jsx(r.h3,{id:"1-table-テーブル",children:"1. Table (テーブル)"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"いつ使うか"}),": 大量のデータを正確に比較したいとき。ソートやフィルタリングが必要なとき。"]}),`
`]}),`
`,n.jsx(r.h3,{id:"2-card-カード",children:"2. Card (カード)"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"いつ使うか"}),": 各項目が画像や説明文、ボタンなど多様な要素を持つとき。"]}),`
`]}),`
`,n.jsx(r.h3,{id:"3-accordion-アコーディオン",children:"3. Accordion (アコーディオン)"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"いつ使うか"}),": 最初の画面では見出しだけ見せ、必要に応じて詳細を読ませたいとき。"]}),`
`]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"情報設計のアドバイス",children:"情報設計のアドバイス"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"重要度の重み付け"}),": 最も重要なデータは視覚的に強調します。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"空の状態 (EmptyState)"}),": 表示データがない場合は、次に何をすべきかを提示します。"]}),`
`]})]})}function g(s={}){const{wrapper:r}={...i(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(d,{...s})}):d(s)}export{g as default};
