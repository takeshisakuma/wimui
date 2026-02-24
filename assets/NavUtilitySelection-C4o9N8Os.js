import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DkAq07yl.js";import{M as e}from"./index-CfxTeqsZ.js";import"./iframe-BR_BxsPn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9EAUMMA.js";import"./index-BqrZpdyS.js";import"./index-Do_TJgik.js";import"./index-C0vSf-J9.js";import"./index-w7DHPOjt.js";function t(s){const r={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"Components/Navigation Utilities"}),`
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
`]})]})}function u(s={}){const{wrapper:r}={...i(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(t,{...s})}):t(s)}export{u as default};
