import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-LXWd5u4c.js";import{M as r,P as c,a as o,C as d}from"./index-B_OnKYrG.js";import{T as h,S as x,B as j,H as t,F as a,W as p,a as m,b,c as f,R as u}from"./Table.stories-BvuiMw9x.js";import"./iframe-DDn5rYTw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHE_q56U.js";import"./index-BNMOREiB.js";import"./index-ZkqhN6Ih.js";import"./index-CSdtmtAP.js";import"./index-jNItDu80.js";import"./index-DZY4SCiT.js";import"./Icon-BVAIvGim.js";import"./Badge-D3GOn6Mi.js";import"./useTranslation-C5xaZ8Xb.js";import"./Checkbox-DY__blSL.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:h}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsx(n.p,{children:"テーブルコンポーネントは、データを整理して表示するために使用されます。"}),`
`,e.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(n.h3,{id:"基本的なテーブル",children:"基本的なテーブル"}),`
`,e.jsx(n.p,{children:"最もシンプルなテーブルの構成です。"}),`
`,e.jsx(c,{}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h3,{id:"ストライプ",children:"ストライプ"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"striped"})," プロップを使用すると、行が交互に色付けされます。"]}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(n.h3,{id:"ボーダー",children:"ボーダー"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"bordered"})," プロップを使用すると、テーブル全体と各セルにボーダーが表示されます。"]}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(n.h3,{id:"ホバーエフェクト",children:"ホバーエフェクト"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"hoverable"})," プロップを使用すると、マウスオーバーした行が強調表示されます。"]}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.h3,{id:"フルワイド",children:"フルワイド"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fullWidth"})," プロップを使用すると、テーブルが親要素の全幅に広がります。"]}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(n.h3,{id:"アクション付きのテーブル",children:"アクション付きのテーブル"}),`
`,e.jsx(n.p,{children:"セル内にボタンなどのインタラクティブな要素を配置することも可能です。"}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(n.h2,{id:"高度な機能",children:"高度な機能"}),`
`,e.jsx(n.h3,{id:"ヘッダーの固定-sticky-header",children:"ヘッダーの固定 (Sticky Header)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"stickyHeader"})," プロップと ",e.jsx(n.code,{children:"maxHeight"})," プロップを組み合わせることで、テーブルをスクロールした際にヘッダーを上部に固定できます。"]}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(n.h3,{id:"スクロールバーのカスタマイズ",children:"スクロールバーのカスタマイズ"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"scrollbar"})," プロップを使用して、スクロールバーの見た目を調整できます。"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"subtle"}),": 細く控えめなデザイン"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hidden"}),": 非表示"]}),`
`]}),`
`,e.jsx(d,{of:b}),`
`,e.jsx(n.h3,{id:"ソート機能",children:"ソート機能"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Table.Head"})," に ",e.jsx(n.code,{children:"sortable"})," プロップを渡すことで、ソート UI を表示できます。ソートロジックは利用側で制御します。"]}),`
`,e.jsx(d,{of:f}),`
`,e.jsx(n.h3,{id:"行の選択-row-selection",children:"行の選択 (Row Selection)"}),`
`,e.jsxs(n.p,{children:["チェックボックスを使用して行を複数選択する機能です。",e.jsx(n.code,{children:"Table.Head"})," や ",e.jsx(n.code,{children:"Table.Cell"})," に ",e.jsx(n.code,{children:"selection"})," プロップを指定することで、チェックボックス列を適切にスタイリングできます。また、",e.jsx(n.code,{children:"Table.Row"})," に ",e.jsx(n.code,{children:"selected"})," プロップを渡すと、選択中の行を強調表示できます。"]}),`
`,e.jsx(d,{of:u}),`
`,e.jsx(n.h2,{id:"コンパウンドコンポーネント",children:"コンパウンドコンポーネント"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Table"})," は以下のサブコンポーネントで構成されています："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Header"})," (",e.jsx(n.code,{children:"<thead>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Body"})," (",e.jsx(n.code,{children:"<tbody>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Footer"})," (",e.jsx(n.code,{children:"<tfoot>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Row"})," (",e.jsx(n.code,{children:"<tr>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Head"})," (",e.jsx(n.code,{children:"<th>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Cell"})," (",e.jsx(n.code,{children:"<td>"}),")"]}),`
`]})]})}function P(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{P as default};
