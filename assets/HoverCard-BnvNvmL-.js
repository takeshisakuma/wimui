import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-8BoU1IPz.js";import{M as s,C as l,a as t}from"./index-CyRntP2b.js";import{H as d,D as c}from"./HoverCard.stories-C7qpHbzQ.js";import{T as h}from"./T-DK1be4Ff.js";import"./iframe-CMRSIEnV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1a5NaCAO.js";import"./index-DMh35vnJ.js";import"./index-CW7syudD.js";import"./index-5tBtizym.js";import"./index-DDwXeJ6p.js";import"./index-BUcX07q_.js";import"./Avatar-jDsljA_8.js";import"./Icon-BSXAmnY4.js";import"./useTranslation-V1DizkFl.js";function i(o){const r={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Components/HoverCard",of:d}),`
`,n.jsx(r.h1,{id:"hovercard",children:"HoverCard"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(h,{k:"doc_hovercard_title"})}),`
`,n.jsx(r.p,{children:"ホバーしたときに追加情報を表示するためのコンポーネントです。"}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsxs(r.p,{children:["⚠️ ",n.jsx(r.strong,{children:"PCのみ"}),": このコンポーネントはポインターのホバー（Hover）操作を前提としているため、主にPC向けに設計されています。タッチデバイスでは意図した通りに動作しない場合があります。"]}),`
`]}),`
`,n.jsx(r.h2,{id:"使用例",children:"使用例"}),`
`,n.jsx(l,{of:c}),`
`,n.jsx(r.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{}),`
`,n.jsx(r.h2,{id:"使い分け",children:"使い分け"}),`
`,n.jsx(r.p,{children:"HoverCardは、Tooltipと似ていますが、以下の点が異なります。"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"内容の複雑さ: Tooltipは短いテキストのみを扱いますが、HoverCardはリッチなコンテンツ（画像、リンク、複数の段落など）を扱うことができます。"}),`
`,n.jsx(r.li,{children:"インタラクション: HoverCardは表示されたコンテンツ自体をホバーしたり、その中のリンクをクリックしたりすることを想定しています。"}),`
`,n.jsx(r.li,{children:"遅延: 誤操作を防ぐために、Tooltipよりも長めの表示遅延（デフォルト700ms）が設定されることが一般的です。"}),`
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
`]})]})}function _(o={}){const{wrapper:r}={...e(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(i,{...o})}):i(o)}export{_ as default};
