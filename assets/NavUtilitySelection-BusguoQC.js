import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-CsrYwmgW.js";import{M as e}from"./index-KSe6tpJr.js";import"./iframe-BN2RreY_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPXRSKWP.js";import"./index-D-axO1BS.js";import"./index-BkiKKgim.js";import"./index-DSovrFzj.js";import"./index-B0FfWD3u.js";function s(t){const r={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"Category/Navigation Utilities"}),`
`,n.jsx(r.h1,{id:"ナビゲーションユーティリティの使い分け",children:"ナビゲーションユーティリティの使い分け"}),`
`,n.jsx(r.p,{children:"画面のスクロールに追従したり、特定の場所へ即座に移動したりするための補助的なナビゲーション要素です。"}),`
`,n.jsx(r.h2,{id:"コンポーネント比較",children:"コンポーネント比較"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"コンポーネント"}),n.jsx("th",{children:"目的"}),n.jsx("th",{children:"主な用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Affix"})}),n.jsx("td",{children:"要素の固定"}),n.jsx("td",{children:"サイドバーやボタンをスクロール中も特定の表示位置に固定する。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"BackTop"})}),n.jsx("td",{children:"トップへ戻る"}),n.jsx("td",{children:"長いページで、ワンクリックで最上部へスクロールさせる。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"FloatButton"})}),n.jsx("td",{children:"浮遊ボタン"}),n.jsx("td",{children:"画面右下などに常駐させ、問い合わせやアクションを促す。"})]})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"使い分けのポイント",children:"使い分けのポイント"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"視認性の維持"}),": ",n.jsx(r.code,{children:"Affix"})," は、重要なナビゲーションがスクロールによって見えなくなるのを防ぐために使用します。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"長いコンテンツへの配慮"}),": ページが 3〜4 スクロール以上ある場合は、",n.jsx(r.code,{children:"BackTop"})," の提供を検討してください。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"優先順位の管理"}),": ",n.jsx(r.code,{children:"FloatButton"})," は強力な注意喚起になりますが、コンテンツの邪魔にならないよう、必要な場合に限定して配置してください。"]}),`
`]})]})}function u(t={}){const{wrapper:r}={...i(),...t.components};return r?n.jsx(r,{...t,children:n.jsx(s,{...t})}):s(t)}export{u as default};
