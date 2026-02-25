import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-B_GVjEQG.js";import{M as d,C as i,a as o}from"./index-BtEPnDjs.js";import{H as h,D as c}from"./HoverCard.stories-Cw-PZzUG.js";import{T as l}from"./T-DDpXyLBA.js";import"./iframe-3pJU0r9w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9X4EtKa.js";import"./index-BQu9wgyp.js";import"./index-D8oHPCzD.js";import"./index-PRvQPFt2.js";import"./index-As2qqYoz.js";import"./index-DPeCJHdU.js";import"./Avatar-ByGtXQ6i.js";import"./Icon-BpoEBrO7.js";import"./useTranslation-kZrKuO_Q.js";function t(s){const n={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...e(),...s.components};return r.jsxs(r.Fragment,{children:[r.jsx(d,{of:h}),`
`,r.jsx(n.h1,{id:"hovercard",children:"HoverCard"}),`
`,r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:r.jsx(l,{k:"doc_hovercard_title"})}),`
`,r.jsx(n.p,{children:"ホバーしたときに追加情報を表示するためのコンポーネントです。"}),`
`,r.jsxs(n.blockquote,{children:[`
`,r.jsxs(n.p,{children:[r.jsx(n.strong,{children:"PCのみ"}),": このコンポーネントはポインターのホバー（Hover）操作を前提としているため、主にPC向けに設計されています。タッチデバイスでは意図した通りに動作しない場合があります。"]}),`
`]}),`
`,r.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,r.jsx(i,{of:c}),`
`,r.jsx(n.h2,{id:"props",children:"Props"}),`
`,r.jsx(o,{}),`
`,r.jsx(n.h2,{id:"使い分け",children:"使い分け"}),`
`,r.jsx(n.p,{children:"HoverCardは、Tooltipと似ていますが、以下の点が異なります。"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"比較項目"}),r.jsx("th",{children:"特徴"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"内容の複雑さ"})}),r.jsx("td",{children:"Tooltipは短いテキストのみを扱いますが、HoverCardはリッチなコンテンツ（画像、リンク、複数の段落など）を扱うことができます。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"インタラクション"})}),r.jsx("td",{children:"HoverCardは表示されたコンテンツ自体をホバーしたり、その中のリンクをクリックしたりすることを想定しています。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"遅延"})}),r.jsx("td",{children:"誤操作を防ぐために、Tooltipよりも長めの表示遅延（デフォルト700ms）が設定されることが一般的です。"})]})]})]}),`
`,r.jsx(n.h3,{id:"コンポーネント比較まとめ",children:"コンポーネント比較まとめ"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"コンポーネント"}),r.jsx("th",{children:"内容の複雑さ・インタラクション"}),r.jsx("th",{children:"主なユースケース"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"Tooltip"})}),r.jsx("td",{children:"短いテキストのみ。インタラクションなし。"}),r.jsx("td",{children:"アイコンの意味説明、短い補足説明など。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"HoverCard"})}),r.jsx("td",{children:"リッチコンテンツ（画像、リンク等）。コンテンツ内の操作が可能。"}),r.jsx("td",{children:"プロフィールプレビュー、リンク先の内容抜粋など。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"Popover"})}),r.jsx("td",{children:"複雑なインタラクション（フォーム等）。クリックで表示。"}),r.jsx("td",{children:"詳細設定、入力フォーム、明示的なアクションが必要な場合。"})]})]})]})]})}function y(s={}){const{wrapper:n}={...e(),...s.components};return n?r.jsx(n,{...s,children:r.jsx(t,{...s})}):t(s)}export{y as default};
