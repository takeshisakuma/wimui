import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DdMqI4vv.js";import{M as e}from"./index-SAzibQwh.js";import"./iframe-s_RWuztI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CgVo3QpR.js";import"./index-DK4JxWgl.js";import"./index-CxvbG2DE.js";import"./index-DJdzzOfX.js";import"./index-f6JCpNqT.js";function d(r){const s={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"Guides/Data Display"}),`
`,n.jsx(s.h1,{id:"データ表示コンポーネントの使い分け",children:"データ表示コンポーネントの使い分け"}),`
`,n.jsx(s.p,{children:"情報をユーザーに提示する際、その構造やユーザーが行いたい操作に応じて形式を選択します。"}),`
`,n.jsx(s.h2,{id:"表示形式比較表",children:"表示形式比較表"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"コンポーネント"}),n.jsx("th",{children:"構造"}),n.jsx("th",{children:"情報密度"}),n.jsx("th",{children:"主な用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Table"})}),n.jsx("td",{children:"格子状"}),n.jsx("td",{children:n.jsx("strong",{children:"最高"})}),n.jsx("td",{children:"数値の比較、大量データの効率的な閲覧"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Card"})}),n.jsx("td",{children:"ボックス型"}),n.jsx("td",{children:"中"}),n.jsx("td",{children:"概要把握、画像を含むリスト、ダッシュボード"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"List"})}),n.jsx("td",{children:"垂直一列"}),n.jsx("td",{children:"中〜低"}),n.jsx("td",{children:"シンプルな項目一覧、モバイル向けメニュー"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Accordion"})}),n.jsx("td",{children:"折りたたみ"}),n.jsx("td",{children:"低"}),n.jsx("td",{children:"詳細を段階的に開示、FAQ、設定項目の整理"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Timeline"})}),n.jsx("td",{children:"時系列"}),n.jsx("td",{children:"中"}),n.jsx("td",{children:"変更履歴、イベントの変遷、進捗状況"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"TreeView"})}),n.jsx("td",{children:"階層型"}),n.jsx("td",{children:"中"}),n.jsx("td",{children:"ファイル階層、組織図、ネストしたカテゴリ"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"DescriptionList"})}),n.jsx("td",{children:"キー・値ペア"}),n.jsx("td",{children:"中〜高"}),n.jsx("td",{children:"プロフィールの詳細、商品の仕様、メタデータの表示"})]})]})]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"選択のガイドライン",children:"選択のガイドライン"}),`
`,n.jsx(s.h3,{id:"1-table-テーブル",children:"1. Table (テーブル)"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"いつ使うか"}),": 大量のデータを正確に比較したいとき。ソートやフィルタリングが必要なとき。"]}),`
`]}),`
`,n.jsx(s.h3,{id:"2-card-カード",children:"2. Card (カード)"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"いつ使うか"}),": 各項目が画像や説明文、ボタンなど多様な要素を持つとき。"]}),`
`]}),`
`,n.jsx(s.h3,{id:"3-accordion-アコーディオン",children:"3. Accordion (アコーディオン)"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"いつ使うか"}),": 最初の画面では見出しだけ見せ、必要に応じて詳細を読ませたいとき。"]}),`
`]}),`
`,n.jsx(s.h3,{id:"4-descriptionlist-説明リスト",children:"4. DescriptionList (説明リスト)"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"いつ使うか"}),": ユーザープロフィールや商品スペックなど、特定の項目（キー）に対する値（詳細）を整理して見せたいとき。ラベルとデータの関係を明確にしたい場合に最適です。"]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"情報設計のアドバイス",children:"情報設計のアドバイス"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"重要度の重み付け"}),": 最も重要なデータは視覚的に強調します。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"空の状態 (EmptyState)"}),": 表示データがない場合は、次に何をすべきかを提示します。"]}),`
`]})]})}function g(r={}){const{wrapper:s}={...i(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(d,{...r})}):d(r)}export{g as default};
