import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Cpzut4EG.js";import{M as t}from"./index-CDeIroHw.js";import{T as d}from"./T-DIWC4I8T.js";import"./iframe-CN-u-8FK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9VI5iTV.js";import"./index-BMqb84-a.js";import"./index-BeFx1j0N.js";import"./index-B8Ad1bz4.js";import"./index-2F-nz17u.js";import"./useTranslation-gZYIT26N.js";function s(r){const n={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Guides/Selection Controls"}),`
`,e.jsx(n.h1,{id:"選択系コンポーネントの使い分け",children:"選択系コンポーネントの使い分け"}),`
`,e.jsx(n.p,{children:"ユーザーに値を選択させる際、選択肢の数や入力の性質に応じて最適な形式を選択します。"}),`
`,e.jsx(n.h2,{id:"比較表",children:"比較表"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"コンポーネント"}),e.jsx("th",{children:"選択形式"}),e.jsx("th",{children:"選択肢の数"}),e.jsx("th",{children:"即時反映"}),e.jsx("th",{children:"主な用途"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Checkbox"})}),e.jsx("td",{children:"複数選択可"}),e.jsx("td",{children:"少数 (2〜10)"}),e.jsx("td",{children:"×"}),e.jsx("td",{children:"設定のオンオフ、リストからの複数選択"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Radio"})}),e.jsx("td",{children:"単一選択"}),e.jsx("td",{children:"少数 (2〜5)"}),e.jsx("td",{children:"×"}),e.jsx("td",{children:"排他的な選択肢からの1つ選択"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Switch"})}),e.jsx("td",{children:"オン/オフ"}),e.jsx("td",{children:"1つ"}),e.jsx("td",{children:"○"}),e.jsx("td",{children:"即座に反映される設定の切り替え"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Select"})}),e.jsx("td",{children:"単一選択"}),e.jsx("td",{children:"中〜多数 (5〜)"}),e.jsx("td",{children:"×"}),e.jsx("td",{children:"フォーム内での場所を取らない1つ選択"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Combobox"})}),e.jsx("td",{children:"単一選択"}),e.jsx("td",{children:"多数 (20〜)"}),e.jsx("td",{children:"×"}),e.jsx("td",{children:"検索を伴う選択、候補からの補完入力"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Segmented Control"})}),e.jsx("td",{children:"単一選択"}),e.jsx("td",{children:"少数 (2〜5)"}),e.jsx("td",{children:"○"}),e.jsx("td",{children:"表示の切り替え、モードの変更"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"",children:e.jsx(d,{k:"guide_rvc_selection_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(d,{k:"table_header_component"})}),e.jsx("th",{children:e.jsx(d,{k:"table_header_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{k:"term_radio"})}),e.jsx("td",{children:e.jsx(d,{k:"guide_rvc_selection_radio"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{k:"term_checkbox"})}),e.jsx("td",{children:e.jsx(d,{k:"guide_rvc_selection_checkbox"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{k:"term_switch"})}),e.jsx("td",{children:e.jsx(d,{k:"guide_rvc_selection_switch"})})]})]})]}),`
`,e.jsx(n.h2,{id:"-1",children:e.jsx(d,{k:"guide_rvc_design_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(d,{k:"table_header_component"})}),e.jsx("th",{children:e.jsx(d,{k:"table_header_description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{k:"term_radio"})}),e.jsx("td",{children:e.jsx(d,{k:"guide_rvc_design_radio"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{k:"term_checkbox"})}),e.jsx("td",{children:e.jsx(d,{k:"guide_rvc_design_checkbox"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{k:"term_switch"})}),e.jsx("td",{children:e.jsx(d,{k:"guide_rvc_design_switch"})})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-2",children:e.jsx(d,{k:"guide_rvc_timing_title"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(d,{k:"table_header_component"})}),e.jsx("th",{children:e.jsx(d,{k:"table_header_timing"})}),e.jsx("th",{children:e.jsx(d,{k:"table_header_flow"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{k:"term_radio"})}),e.jsx("td",{children:e.jsx(d,{k:"timing_immediate"})}),e.jsx("td",{children:e.jsx(d,{k:"flow_radio"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{k:"term_checkbox"})}),e.jsx("td",{children:e.jsx(d,{k:"timing_deferred"})}),e.jsx("td",{children:e.jsx(d,{k:"flow_checkbox"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{k:"term_switch"})}),e.jsx("td",{children:e.jsx(d,{k:"timing_immediate"})}),e.jsx("td",{children:e.jsx(d,{k:"flow_switch"})})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"use-cases",children:"Use Cases"}),`
`,e.jsx(n.h3,{id:"radio-button",children:"Radio Button"}),`
`,e.jsx("div",{style:{background:"#f0f9ff",padding:"12px",borderRadius:"8px",borderLeft:"4px solid #0ea5e9",marginBottom:"16px"},children:e.jsx(d,{k:"guide_rvc_usage_radio"})}),`
`,e.jsx(n.h3,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx("div",{style:{background:"#f0fdf4",padding:"12px",borderRadius:"8px",borderLeft:"4px solid #22c55e",marginBottom:"16px"},children:e.jsx(d,{k:"guide_rvc_usage_checkbox"})}),`
`,e.jsx(n.h3,{id:"switch",children:"Switch"}),`
`,e.jsx("div",{style:{background:"#f5f3ff",padding:"12px",borderRadius:"8px",borderLeft:"4px solid #8b5cf6",marginBottom:"16px"},children:e.jsx(d,{k:"guide_rvc_usage_switch"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-3",children:e.jsx(d,{k:"guide_rvc_implementation_note"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Default Value: ",e.jsx(d,{k:"guide_rvc_note_default"})]}),`
`,e.jsxs(n.li,{children:["Layout: ",e.jsx(d,{k:"guide_rvc_note_vertical"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"segmented-control-の使い分け",children:"Segmented Control の使い分け"}),`
`,e.jsx(n.p,{children:"Segmented Control は他のコンポーネントと役割が似ているため、適切な使い分けが重要です。"}),`
`,e.jsx(n.h3,{id:"vs-button-group-joined",children:"vs Button Group (joined)"}),`
`,e.jsx(n.p,{children:"見た目は似ていますが、目的が異なります。"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"コンポーネント"}),e.jsx("th",{children:"役割"}),e.jsx("th",{children:"典型的な挙動"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Segmented Control"})}),e.jsx("td",{children:e.jsx("strong",{children:"選択"})}),e.jsx("td",{children:"値や表示モードの切り替え。常にいずれか1つが選択されている。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Button Group (joined)"})}),e.jsx("td",{children:e.jsx("strong",{children:"アクション"})}),e.jsx("td",{children:"関連する複数の操作のグループ化。押すと何かが実行される（例：保存 / 複製 / 削除）。"})]})]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Segmented Control を選ぶ場合: 「表示を 週間 / 月間 に切り替える」「ソート順を 昇順 / 降順 に変える」など、ある1つの状態を決定・変更するときに使用します。"}),`
`,e.jsx(n.li,{children:"Button Group を選ぶ場合: 「編集」「削除」など、独立した（または関連した）複数の実行ボタンを視覚的にまとめたいときに使用します。"}),`
`]}),`
`,e.jsx(n.h3,{id:"vs-ドロップダウンメニュー-dropdown-menu",children:"vs ドロップダウンメニュー (Dropdown Menu)"}),`
`,e.jsx(n.p,{children:`| 項目 | Segmented Control | Dropdown Menu |\r
| :--- | :--- | :--- |\r
| 操作 | ワンタップで切り替え | タップしてリストを開く必要あり |\r
| 選択肢 | 常に見えている | 隠れている |\r
| 適した数 | 2〜5個 | 5個以上 |`}),`
`,e.jsx(n.h3,{id:"vs-タブ-tabs",children:"vs タブ (Tabs)"}),`
`,e.jsx(n.p,{children:`| 項目 | Segmented Control | Tabs |\r
| :--- | :--- | :--- |\r
| 目的 | 同一コンテンツ内でのフィルタリングや表示形式の切り替え | 異なる画面(コンテンツ)間を移動する |\r
| スコープ | 画面内の一部、詳細な調整 | アプリの主要ナビゲーション、大きな単位の切り替え |\r
| 重複 | 各セグメント間でコンテンツが重複することもある | 各タブは専用のコンテンツを持ち、通常は重複しない |\r
| 例 | プロジェクト内の「未完了/完了」フィルタ | 「ダッシュボード」「メッセージ」「設定」の切り替え |`}),`
`,e.jsx(n.h2,{id:"迷った時の判断基準",children:"迷った時の判断基準"}),`
`,e.jsx(n.p,{children:`| 項目 | Segmented Control が適しているケース | 代わりのUI（推奨） |\r
| :--- | :--- | :--- |\r
| 選択肢の数 | 2〜5個程度 | 5個以上なら ドロップダウン または 横スクロールタブ |\r
| 選択の性質 | 「どれか1つ」を選ぶ（排他的） | 複数選びたいなら チェックボックス や チップス |\r
| 影響範囲 | 画面内の一部、または表示形式の変更 | 画面自体を大きく移動するなら ボトムナビゲーション |\r
| 即時性 | 選んだ瞬間に結果が反映されるべき | 送信ボタンを押すまで確定させたくないなら ラジオボタン |`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"選択のフローチャート",children:"選択のフローチャート"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["オン/オフの切り替えか？",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"即時反映なら ➔ Switch"}),`
`,e.jsx(n.li,{children:"送信が必要なら ➔ Checkbox"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["1つだけ選ぶか、複数選ぶか？",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"複数選ぶ ➔ Checkbox Group"}),`
`,e.jsx(n.li,{children:"1つだけ選ぶ ➔ 次へ"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["選択肢の数は？",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"少なめ (2-5) ➔ Radio または Segmented Control"}),`
`,e.jsx(n.li,{children:"普通 (5-20) ➔ Select"}),`
`,e.jsx(n.li,{children:"多い (20-) ➔ Combobox"}),`
`]}),`
`]}),`
`]})]})}function p(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{p as default};
