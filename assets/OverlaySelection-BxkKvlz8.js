import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BhLRTlBi.js";import{M as d}from"./index-B2LAK2rV.js";import"./iframe-DjDtWpcP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-R8IO8l9z.js";import"./index-r6nmoPLP.js";import"./index-Do2Rz7nS.js";import"./index-CJxp2qvt.js";import"./index-BmXX1BZt.js";function l(r){const i={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Guides/Overlays"}),`
`,n.jsx(i.h1,{id:"オーバーレイコンポーネントの使い分け",children:"オーバーレイコンポーネントの使い分け"}),`
`,n.jsx(i.p,{children:"UIの目的に応じて、最適なオーバーレイ（Dialog, Drawer, BottomSheet, Popover）を選択するためのガイドラインです。"}),`
`,n.jsx(i.h2,{id:"比較表",children:"比較表"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"コンポーネント"}),n.jsx("th",{children:"出現位置"}),n.jsx("th",{children:"ユーザーの集中度"}),n.jsx("th",{children:"主な用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Dialog"})}),n.jsx("td",{children:"画面中央"}),n.jsx("td",{children:n.jsx("strong",{children:"最高"})}),n.jsx("td",{children:"重要な確認、複雑なフォーム入力、致命的な操作の防止"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Drawer"})}),n.jsx("td",{children:"画面の端"}),n.jsx("td",{children:"中"}),n.jsx("td",{children:"ナビゲーションメニュー、詳細情報の閲覧、設定パネル"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"BottomSheet"})}),n.jsx("td",{children:"画面下部"}),n.jsx("td",{children:"中"}),n.jsx("td",{children:"モバイルでのアクション選択、リスト項目の詳細、設定"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Popover"})}),n.jsx("td",{children:"要素の近く"}),n.jsx("td",{children:"低"}),n.jsx("td",{children:"補足情報の提示、簡易的な設定、コンテキストメニュー"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Tooltip"})}),n.jsx("td",{children:"要素の近く"}),n.jsx("td",{children:"最低"}),n.jsx("td",{children:"UI要素の簡単な説明、アクセシビリティ向上"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"HoverCard"})}),n.jsx("td",{children:"要素の近く"}),n.jsx("td",{children:"低"}),n.jsx("td",{children:"詳細情報のプレビュー、リッチなコンテンツの表示"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Tour"})}),n.jsx("td",{children:"各ターゲット付近"}),n.jsx("td",{children:"高"}),n.jsx("td",{children:"新機能の案内、ユーザーオンボーディング、操作ガイド"})]})]})]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"各コンポーネントの詳細",children:"各コンポーネントの詳細"}),`
`,n.jsx(i.h3,{id:"1-dialog-ダイアログ",children:"1. Dialog (ダイアログ)"}),`
`,n.jsx(i.p,{children:"ユーザーに特定の作業を完了させるか、重要な情報を確認させるためのウィンドウです。"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["いつ使うか:",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"ユーザーの注意を完全に引きつける必要があるとき。"}),`
`,n.jsx(i.li,{children:"他の操作を中断させてでも完了させるべき重要なタスク。"}),`
`]}),`
`]}),`
`,n.jsx(i.li,{children:"特徴: 画面中央に表示され、視覚的インパクトが最も強い。"}),`
`]}),`
`,n.jsx(i.h3,{id:"2-drawer-ドロワー",children:"2. Drawer (ドロワー)"}),`
`,n.jsx(i.p,{children:"画面の端（主に右または左）からスライドして表示されるパネルです。"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["いつ使うか:",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"ページ全体のナビゲーション（サイドメニュー）。"}),`
`,n.jsx(i.li,{children:"メインコンテンツに関連する詳細情報や設定を、元のページを参照しながら操作したいとき。"}),`
`]}),`
`]}),`
`,n.jsx(i.li,{children:"特徴: 縦に長いコンテンツを表示するのに向いている。"}),`
`]}),`
`,n.jsx(i.h3,{id:"3-bottomsheet-ボトムシート",children:"3. BottomSheet (ボトムシート)"}),`
`,n.jsx(i.p,{children:"画面の下端からせり出してくるパネルです。主にモバイルデバイス向けです。"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["いつ使うか:",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"モバイルでの操作を優先するとき。"}),`
`,n.jsx(i.li,{children:"数個のアクションから一つを選択させるとき。"}),`
`]}),`
`]}),`
`,n.jsx(i.li,{children:"特徴: ハンドルがあり、スワイプ操作を示唆する。"}),`
`]}),`
`,n.jsx(i.h3,{id:"4-popover-ポップオーバー",children:"4. Popover (ポップオーバー)"}),`
`,n.jsx(i.p,{children:"トリガー要素のすぐ近くに浮かんで表示されるパネルです。"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["いつ使うか:",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"補足説明や、その場ですぐに終わる小さな設定を行うとき。"}),`
`]}),`
`]}),`
`,n.jsx(i.li,{children:"特徴: 矢印でトリガー要素を指し示すことが多く、文脈を維持しやすい。"}),`
`]}),`
`,n.jsx(i.h3,{id:"5-tooltip-ツールチップ",children:"5. Tooltip (ツールチップ)"}),`
`,n.jsx(i.p,{children:"要素をホバーまたはフォーカスした際に表示される短いテキストラベルです。"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["いつ使うか:",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"アイコンのみのボタンに説明を加えたいとき。"}),`
`,n.jsx(i.li,{children:"専門用語の簡単な定義を表示したいとき。"}),`
`]}),`
`]}),`
`,n.jsx(i.li,{children:"特徴: インタラクション（クリックなど）を一切持たず、純粋に情報を提供する。"}),`
`]}),`
`,n.jsx(i.h3,{id:"6-hovercard-ホバーカード",children:"6. HoverCard (ホバーカード)"}),`
`,n.jsx(i.p,{children:"ホバーした際に追加のリッチな情報を表示するためのカードです。"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["いつ使うか:",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"リンク先のユーザープロフィールや商品のプレビューをその場で見せたいとき。"}),`
`]}),`
`]}),`
`,n.jsx(i.li,{children:"特徴: Tooltipよりもリッチなコンテンツ（画像、複数のリンクなど）を含めることができ、カード内での操作も可能。"}),`
`]}),`
`,n.jsx(i.h3,{id:"7-tour-ツアー",children:"7. Tour (ツアー)"}),`
`,n.jsx(i.p,{children:"特定の要素を強調しながら、順番に説明を表示するためのガイドコンポーネントです。"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["いつ使うか:",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"初めてのユーザーに基本的な使い方を教えるとき（オンボーディング）。"}),`
`,n.jsx(i.li,{children:"アップデート後に新機能がどこにあるか、どう使うかを案内するとき。"}),`
`]}),`
`]}),`
`,n.jsx(i.li,{children:"特徴: 複数の要素を横断して一連の流れを体験させることができ、教育的効果が高い。"}),`
`]})]})}function m(r={}){const{wrapper:i}={...s(),...r.components};return i?n.jsx(i,{...r,children:n.jsx(l,{...r})}):l(r)}export{m as default};
