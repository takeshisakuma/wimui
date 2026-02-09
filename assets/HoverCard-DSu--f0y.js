import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-N_Gubu8Z.js";import{M as e,C as l,a as t}from"./index-PgOjwxms.js";import{H as d,D as h}from"./HoverCard.stories-B1hOrPeE.js";import"./iframe-B0xzzNDa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-bDTqSnyr.js";import"./index-DzipthgM.js";import"./index-BIy8WZ3u.js";import"./index-BeXwBRwA.js";import"./index-DE8hgc8w.js";import"./index-1OQVDFlC.js";import"./Avatar-D3G6YOgA.js";import"./index-BufBIhLZ.js";function o(i){const r={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"Components/HoverCard",of:d}),`
`,n.jsx(r.h1,{id:"hovercard",children:"HoverCard"}),`
`,n.jsx(r.p,{children:"ホバーしたときに追加情報を表示するためのコンポーネントです。"}),`
`,n.jsx(r.h2,{id:"使用例",children:"使用例"}),`
`,n.jsx(l,{of:h}),`
`,n.jsx(r.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{}),`
`,n.jsx(r.h2,{id:"使い分け",children:"使い分け"}),`
`,n.jsx(r.p,{children:"HoverCardは、Tooltipと似ていますが、以下の点が異なります。"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"内容の複雑さ"}),": Tooltipは短いテキストのみを扱いますが、HoverCardはリッチなコンテンツ（画像、リンク、複数の段落など）を扱うことができます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"インタラクション"}),": HoverCardは表示されたコンテンツ自体をホバーしたり、その中のリンクをクリックしたりすることを想定しています。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"遅延"}),": 誤操作を防ぐために、Tooltipよりも長めの表示遅延（デフォルト700ms）が設定されることが一般的です。"]}),`
`]}),`
`,n.jsx(r.h3,{id:"tooltip",children:"Tooltip"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"アイコンの意味を説明する場合"}),`
`,n.jsx(r.li,{children:"短い補足説明を表示する場合"}),`
`,n.jsx(r.li,{children:"コンテンツにインタラクティブな要素が含まれない場合"}),`
`]}),`
`,n.jsx(r.h3,{id:"hovercard-1",children:"HoverCard"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"ユーザープロフィールなどの詳細情報をプレビューする場合"}),`
`,n.jsx(r.li,{children:"リンク先のコンテンツの抜粋を表示する場合"}),`
`,n.jsx(r.li,{children:"ホバーしたコンテンツ内の要素（ボタンやリンク）を操作させたい場合"}),`
`]}),`
`,n.jsx(r.h3,{id:"popover",children:"Popover"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"クリックなどの明示的なアクションで表示させたい場合"}),`
`,n.jsx(r.li,{children:"フォーム入力などの複雑なインタラクションが必要な場合"}),`
`]})]})}function T(i={}){const{wrapper:r}={...s(),...i.components};return r?n.jsx(r,{...i,children:n.jsx(o,{...i})}):o(i)}export{T as default};
