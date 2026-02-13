import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DI7J9QVw.js";import{M as e,C as l,a as t}from"./index-wQ-fu4Ac.js";import{H as d,D as h}from"./HoverCard.stories-fAa5CkPX.js";import{T as c}from"./T-BBfoCICe.js";import"./iframe-8PFyu00w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8Mn0_-2.js";import"./index-CNF4RscW.js";import"./index-Bgsm3l6N.js";import"./index-CsnEVgKO.js";import"./index-v9oG74FQ.js";import"./index-D8TpllMe.js";import"./Avatar-COpKi4uB.js";import"./useTranslation-Cyt_ZMVf.js";function o(i){const r={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"Components/HoverCard",of:d}),`
`,n.jsx(r.h1,{id:"hovercard",children:"HoverCard"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(c,{k:"doc_hovercard_title"})}),`
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
`]})]})}function X(i={}){const{wrapper:r}={...s(),...i.components};return r?n.jsx(r,{...i,children:n.jsx(o,{...i})}):o(i)}export{X as default};
