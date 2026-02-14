import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Cpzut4EG.js";import{M as i}from"./index-CDeIroHw.js";import"./iframe-CN-u-8FK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9VI5iTV.js";import"./index-BMqb84-a.js";import"./index-BeFx1j0N.js";import"./index-B8Ad1bz4.js";import"./index-2F-nz17u.js";function s(d){const r={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...e(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Guides/Navigation"}),`
`,n.jsx(r.h1,{id:"ナビゲーションコンポーネントの使い分け",children:"ナビゲーションコンポーネントの使い分け"}),`
`,n.jsx(r.p,{children:"ユーザーがアプリケーション内を移動したり、表示内容を切り替えたりするための最適な手段を選択します。"}),`
`,n.jsx(r.h2,{id:"ナビゲーション比較表",children:"ナビゲーション比較表"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"コンポーネント"}),n.jsx("th",{children:"配置"}),n.jsx("th",{children:"階層レベル"}),n.jsx("th",{children:"主な用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Navbar"})}),n.jsx("td",{children:"画面上部"}),n.jsx("td",{children:"最上位"}),n.jsx("td",{children:"アプリ全体の主要なセクション切り替え"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Sidebar"})}),n.jsx("td",{children:"画面横"}),n.jsx("td",{children:"最上位〜中"}),n.jsx("td",{children:"機能数が多い管理画面、複雑な階層構造"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Tab"})}),n.jsx("td",{children:"コンテンツ内"}),n.jsx("td",{children:"中〜下"}),n.jsx("td",{children:"同一コンテキスト内での表示切り替え"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Breadcrumb"})}),n.jsx("td",{children:"コンテンツ上部"}),n.jsx("td",{children:"全レベル"}),n.jsx("td",{children:"現在地の把握、上位階層への素早い復帰"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Pagination"})}),n.jsx("td",{children:"リスト下部"}),n.jsx("td",{children:"リスト"}),n.jsx("td",{children:"大量データのページ分割移動"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Steppers"})}),n.jsx("td",{children:"画面中央/上部"}),n.jsx("td",{children:"手順"}),n.jsx("td",{children:"順序が決まったプロセス（登録、決済等）"})]})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"カテゴリ別の使い分け",children:"カテゴリ別の使い分け"}),`
`,n.jsx(r.h3,{id:"1-グローバルナビゲーション-navbar-vs-sidebar",children:"1. グローバルナビゲーション (Navbar vs Sidebar)"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Navbar: 主要な機能が少なく、横幅を広く使いたいとき。"}),`
`,n.jsx(r.li,{children:"Sidebar: 機能数が多く、グルーピングが必要な管理システム。"}),`
`]}),`
`,n.jsx(r.h3,{id:"2-コンテンツの切り替え-tab-vs-segmented-control",children:"2. コンテンツの切り替え (Tab vs Segmented Control)"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Tab: 同一ページ内で関連するコンテンツを「表示領域を共有して」切り替える。"}),`
`,n.jsx(r.li,{children:"Segmented Control: 表示の「ビュー」や「モード」を切り替える。"}),`
`]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"ユーザビリティのヒント",children:"ユーザビリティのヒント"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"現在地の明示: どのメニューがアクティブなのかを常に視覚的に示してください。"}),`
`,n.jsx(r.li,{children:"一貫性: ページによってナビゲーションの位置が変わらないように配置を固定します。"}),`
`]})]})}function b(d={}){const{wrapper:r}={...e(),...d.components};return r?n.jsx(r,{...d,children:n.jsx(s,{...d})}):s(d)}export{b as default};
