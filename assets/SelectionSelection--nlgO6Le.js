import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-yzWstPwL.js";import{M as i}from"./blocks-RvW5MQ2B.js";import"./iframe-pOyiLBDM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1AMkXdw.js";import"./index-BLX9bJcf.js";import"./index-C6oC6zBM.js";import"./index-BgAYcDyu.js";function d(r){const s={h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Guides/Selection Controls"}),`
`,n.jsx(s.h1,{id:"選択系コンポーネントの使い分け",children:"選択系コンポーネントの使い分け"}),`
`,n.jsx(s.p,{children:"ユーザーに値を選択させる際、選択肢の数や入力の性質に応じて最適な形式を選択します。"}),`
`,n.jsx(s.h2,{id:"比較表",children:"比較表"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"コンポーネント"}),n.jsx("th",{children:"選択形式"}),n.jsx("th",{children:"選択肢の数"}),n.jsx("th",{children:"即時反映"}),n.jsx("th",{children:"主な用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Checkbox"})}),n.jsx("td",{children:"複数選択可"}),n.jsx("td",{children:"少数 (2〜10)"}),n.jsx("td",{children:"×"}),n.jsx("td",{children:"設定のオンオフ、リストからの複数選択"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Radio"})}),n.jsx("td",{children:"単一選択"}),n.jsx("td",{children:"少数 (2〜5)"}),n.jsx("td",{children:"×"}),n.jsx("td",{children:"排他的な選択肢からの1つ選択"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Switch"})}),n.jsx("td",{children:"オン/オフ"}),n.jsx("td",{children:"1つ"}),n.jsx("td",{children:"○"}),n.jsx("td",{children:"即座に反映される設定の切り替え"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Select"})}),n.jsx("td",{children:"単一選択"}),n.jsx("td",{children:"中〜多数 (5〜)"}),n.jsx("td",{children:"×"}),n.jsx("td",{children:"フォーム内での場所を取らない1つ選択"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Combobox"})}),n.jsx("td",{children:"単一選択"}),n.jsx("td",{children:"多数 (20〜)"}),n.jsx("td",{children:"×"}),n.jsx("td",{children:"検索を伴う選択、候補からの補完入力"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Segmented Control"})}),n.jsx("td",{children:"単一選択"}),n.jsx("td",{children:"少数 (2〜5)"}),n.jsx("td",{children:"○"}),n.jsx("td",{children:"表示の切り替え、モードの変更"})]})]})]}),`
`,n.jsx(s.h2,{id:"segmented-control-vs-button-group-joined",children:"Segmented Control vs Button Group (joined)"}),`
`,n.jsx(s.p,{children:"見た目は似ていますが、目的が異なります。"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"コンポーネント"}),n.jsx("th",{children:"役割"}),n.jsx("th",{children:"典型的な挙動"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Segmented Control"})}),n.jsx("td",{children:n.jsx("strong",{children:"選択"})}),n.jsx("td",{children:"値や表示モードの切り替え。常にいずれか1つが選択されている。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Button Group (joined)"})}),n.jsx("td",{children:n.jsx("strong",{children:"アクション"})}),n.jsx("td",{children:"関連する複数の操作のグループ化。押すと何かが実行される（例：保存 / 複製 / 削除）。"})]})]})]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Segmented Control を選ぶ場合"}),": 「表示を 週間 / 月間 に切り替える」「ソート順を 昇順 / 降順 に変える」など、ある1つの状態を決定・変更するときに使用します。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Button Group を選ぶ場合"}),": 「編集」「削除」など、独立した（または関連した）複数の実行ボタンを視覚的にまとめたいときに使用します。"]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"選択のフローチャート",children:"選択のフローチャート"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"オン/オフの切り替えか？"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["即時反映なら ➔ ",n.jsx(s.strong,{children:"Switch"})]}),`
`,n.jsxs(s.li,{children:["送信が必要なら ➔ ",n.jsx(s.strong,{children:"Checkbox"})]}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"1つだけ選ぶか、複数選ぶか？"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["複数選ぶ ➔ ",n.jsx(s.strong,{children:"Checkbox Group"})]}),`
`,n.jsx(s.li,{children:"1つだけ選ぶ ➔ 次へ"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"選択肢の数は？"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["少なめ (2-5) ➔ ",n.jsx(s.strong,{children:"Radio"})," または ",n.jsx(s.strong,{children:"Segmented Control"})]}),`
`,n.jsxs(s.li,{children:["普通 (5-20) ➔ ",n.jsx(s.strong,{children:"Select"})]}),`
`,n.jsxs(s.li,{children:["多い (20-) ➔ ",n.jsx(s.strong,{children:"Combobox"})]}),`
`]}),`
`]}),`
`]})]})}function u(r={}){const{wrapper:s}={...e(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(d,{...r})}):d(r)}export{u as default};
