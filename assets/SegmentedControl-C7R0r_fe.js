import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-BGtTBj4v.js";import{M as h,T as t,D as c,C as i,a as x}from"./index-CJd1-CG5.js";import{S as j,M as d,a as o,L as a,W as p,I as m,T as u}from"./SegmentedControl.stories-BJFevsG3.js";import"./T---P60D6m.js";import"./iframe-_LIyV8nm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C7mO-2Hh.js";import"./index-DGdpSf0g.js";import"./index-BP2l37Tc.js";import"./index-8CenV_-3.js";import"./index-Bbbsf81O.js";import"./index-6t_9KPq4.js";import"./Icon-BfV3doRA.js";import"./useTranslation-CHBZZ0rc.js";function e(r){const s={a:"a",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{of:j}),`
`,n.jsx(t,{}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(s.p,{children:"複数の選択肢の中から1つを選択するために使用"})}),`
`,n.jsx(c,{}),`
`,n.jsx(s.h2,{id:"使用ガイドライン",children:"使用ガイドライン"}),`
`,n.jsx(s.p,{children:`全ての選択肢を一度に見せる必要があります。\r
タブのタブトリガーが画面内に収まりきらない時のように、横スクロールをさせてはいけません。`}),`
`,n.jsx(s.h2,{id:"主な用途",children:"主な用途"}),`
`,n.jsx(s.h3,{id:"1-表示ビューの切り替え-view-switching",children:"1. 表示ビューの切り替え (View Switching)"}),`
`,n.jsx(s.p,{children:"画面全体のレイアウトや見せ方そのものを大きく変えるパターンです。"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"分類"}),n.jsx("th",{children:"例"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"レイアウト変更"}),n.jsx("td",{children:"リスト表示 ↔ グリッド表示"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"モード切替"}),n.jsx("td",{children:"編集 ↔ プレビュー、地図 ↔ リスト"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"時間軸の変更"}),n.jsx("td",{children:"カレンダーでの 今日 / 週 / 月 単位の切り替え"})]})]})]}),`
`,n.jsx(s.h3,{id:"2-コンテンツの絞り込み抽出-filtering",children:"2. コンテンツの絞り込み・抽出 (Filtering)"}),`
`,n.jsx(s.p,{children:"表示されているデータの「種類」を制限し、タブメニューに近い役割を果たします。"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"分類"}),n.jsx("th",{children:"例"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"ステータス別"}),n.jsx("td",{children:"すべて / 未読 / お気に入り"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"カテゴリ別"}),n.jsx("td",{children:"すべて / 返信 / メンション（通知画面）、すべて / 不在着信（電話アプリ）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"属性別"}),n.jsx("td",{children:"男性 / 女性 / その他、在庫あり / すべて"})]})]})]}),`
`,n.jsx(s.h3,{id:"3-並べ替えの指定-sorting",children:"3. 並べ替えの指定 (Sorting)"}),`
`,n.jsx(s.p,{children:"データの並び順を変更します。ドロップダウンにするほど選択肢が多くない場合に、1タップで切り替えられるため便利です。"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"分類"}),n.jsx("th",{children:"例"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"優先順位"}),n.jsx("td",{children:"おすすめ順 / 新着順 / 価格の安い順"})]})})]}),`
`,n.jsx(s.h3,{id:"4-設定属性の選択-attribute-selection",children:"4. 設定・属性の選択 (Attribute Selection)"}),`
`,n.jsx(s.p,{children:"特定の項目に対する「状態」を決定します。"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"分類"}),n.jsx("th",{children:"例"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"アプリ設定"}),n.jsx("td",{children:"ライトモード / ダークモード / システム設定"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"公開範囲"}),n.jsx("td",{children:"公開 / 限定公開 / 非公開"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"サイズ・量"}),n.jsx("td",{children:"S / M / L"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"表示優先度"}),n.jsx("td",{children:"おすすめ / ランキング"})]})]})]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"デザインと実装",children:"デザインと実装"}),`
`,n.jsx(s.h3,{id:"基本原則",children:"基本原則"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"要素"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"構成"})}),n.jsx("td",{children:"少なくとも2つのセグメントで構成されます。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"状態"})}),n.jsx("td",{children:"各セグメントには選択状態（Active）と非選択状態（Inactive）があります。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"視認性"})}),n.jsx("td",{children:"すべての選択肢が常に表示されています。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"省スペース"})}),n.jsx("td",{children:"アイコンのみの表示でスペースを節約できるため、スマートフォンなどの限られた画面サイズに適しています。"})]})]})]}),`
`,n.jsx(s.h3,{id:"項目数とレイアウト",children:"項目数とレイアウト"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["推奨: 2〜5個 に収めること。",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"理由: モバイル画面でも各項目が十分な幅を持ち、タップしやすいデザインを保つため。"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:["多すぎる場合: 6項目以上や、ラベル文字数が多い（5文字以上〜）場合は以下を検討してください。",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"ドロップダウンメニュー"}),`
`,n.jsx(s.li,{children:"タブバー (スクロール可能なタブ)"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.h3,{id:"ラベルの最適化",children:"ラベルの最適化"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"テキストラベルは簡潔で明確な名詞または名詞句を使用します。"}),`
`,n.jsxs(s.li,{children:["例:",`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"「重要」→「重要のみ」"}),`
`,n.jsx(s.li,{children:"「新着」→「新着順」"}),`
`]}),`
`]}),`
`,n.jsx(s.li,{children:"多言語対応: 日本語から英語への切り替えで文字数が大きく変わる可能性があることを考慮してください。"}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"他のコンポーネントとの比較",children:"他のコンポーネントとの比較"}),`
`,n.jsxs(s.p,{children:["詳細な使い分けについては ",n.jsx(s.a,{href:"?path=/docs/guides-selection-controls--docs",children:"Selection Controls ガイド"})," を参照してください。"]}),`
`,n.jsx(s.p,{children:"Segmented Control と Dropdown Menu、Tabs、Button Group との違いや、迷った時の判断基準がまとめられています。"}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(i,{of:d}),`
`,n.jsx(s.h2,{id:"サイズ展開",children:"サイズ展開"}),`
`,n.jsx(s.p,{children:"Small, Medium, Largeのサイズバリエーションがある"}),`
`,n.jsx(s.h3,{id:"small",children:"Small"}),`
`,n.jsx(i,{of:o}),`
`,n.jsx(s.h3,{id:"medium",children:"Medium"}),`
`,n.jsx(i,{of:d}),`
`,n.jsx(s.h3,{id:"large",children:"Large"}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(s.h2,{id:"アイコンの利用",children:"アイコンの利用"}),`
`,n.jsx(s.p,{children:"アイコンとラベルを組み合わせて使用したり、アイコンのみを表示したりすることが可能"}),`
`,n.jsx(s.h3,{id:"アイコン--ラベル",children:"アイコン + ラベル"}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(s.h3,{id:"アイコンのみ",children:"アイコンのみ"}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(s.h2,{id:"選択肢が2つの場合",children:"選択肢が2つの場合"}),`
`,n.jsxs(s.p,{children:["2つの選択肢(On/OffやYes/Noなど)でも利用可能",n.jsx("br",{}),`\r
選択肢が2つの場合に、デザインによってどちらが選択されているのかわからなくならないようにする`]}),`
`,n.jsx(i,{of:u}),`
`,n.jsx(x,{})]})}function A(r={}){const{wrapper:s}={...l(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(e,{...r})}):e(r)}export{A as default};
