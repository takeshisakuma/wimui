import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-CmxFiERU.js";import{M as d}from"./blocks-C-hgfApg.js";import"./T-9MrW2l-B.js";import"./iframe-DucY8PCr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lsUD8MDW.js";import"./index-C_Vr7lCO.js";import"./index-BULwwhUN.js";import"./index-CpnJMwY8.js";import"./useTranslation-Cfa0KY3M.js";function s(e){const r={h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Guides/Form Labels"}),`
`,n.jsx(r.h1,{id:"フォームのラベル配置-form-label-placement",children:"フォームのラベル配置 (Form Label Placement)"}),`
`,n.jsxs("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"1.6",color:"#6c757d"},children:[n.jsx(r.p,{children:`フォームにおけるラベルの配置と、フローティングラベル(Floating
Label)の使用に関するガイドライン`}),n.jsx("br",{}),n.jsx(r.p,{children:`WIM UI では、入力フィールドの上にラベルを表示する トップアライン(Top-aligned)
を推奨`})]}),`
`,n.jsx(r.h2,{id:"フローティングラベルfloating-labelとは",children:"フローティングラベル(Floating Label)とは？"}),`
`,n.jsxs(r.p,{children:["未入力時にはプレースホルダーのようにフィールド内にラベルを表示し、入力（フォーカス）されるとラベルが縮小して上部に移動するデザインパターン",n.jsx("br",{}),`
多くのUX上の課題を抱えているため、原則として使用を推奨しない`]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"なぜフローティングラベルは非推奨なのか",children:"なぜフローティングラベルは非推奨なのか？"}),`
`,n.jsxs("table",{children:[n.jsxs("tr",{children:[n.jsx("th",{children:"問題点"}),n.jsx("th",{children:"説明"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"補助となる情報の欠如"}),n.jsx("td",{children:n.jsx(r.p,{children:`未入力時にフィールド内のスペースを専有するため、入力フォーマットの例示（ヒントテキスト）を表示するスペースがなくなり
「何を」「どのように」入力するべきかを同時に伝えることが難しくなる`})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"入力作業の負荷"}),n.jsx("td",{children:"入力作業のノイズになる"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"アクセシビリティ"}),n.jsx("td",{children:n.jsx(r.p,{children:"正しく実装しないと、スクリーンリーダーが適切にラベルを読み上げない可能性がある"})})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"推奨するレイアウトトップアラインtop-aligned",children:"推奨するレイアウト：トップアライン（Top-aligned）"}),`
`,n.jsx(r.h3,{id:"メリット",children:"メリット"}),`
`,n.jsxs("table",{children:[n.jsxs("tr",{children:[n.jsx("th",{children:"メリット"}),n.jsx("th",{children:"説明"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"視認性"}),n.jsx("td",{children:"ラベルの位置が固定されていて、文字サイズも十分確保されて読みやすい"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"スキャンしやすい"}),n.jsx("td",{children:"上から下へ視線を移動させるだけで、スムーズに入力項目を確認できる"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"柔軟なレイアウト"}),n.jsxs("td",{children:[n.jsx(r.p,{children:"ラベルの長さに応じて改行できる"}),n.jsx("br",{}),n.jsx(r.p,{children:"モバイル画面で横幅を有効活用できる"})]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"別途プレースホルダーが使える"}),n.jsx("td",{children:"プレースホルダーを補助テキストとして使用できる"})]})]}),`
`,n.jsx(r.hr,{}),`
`,n.jsx(r.h2,{id:"例外的に使用が許容されるケース",children:"例外的に使用が許容されるケース"}),`
`,n.jsxs("table",{children:[n.jsxs("tr",{children:[n.jsx("th",{children:"条件"}),n.jsx("th",{children:"例"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"スペースがない"}),n.jsx("td",{children:n.jsx(r.p,{children:"モバイル表示で高さを節約する必要性がユーザビリティの懸念より優先する場合"})})]})]})]})}function f(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{f as default};
