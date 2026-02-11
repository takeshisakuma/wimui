import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DdMqI4vv.js";import{M as t,C as e,a as l}from"./index-SAzibQwh.js";import{T as c,F as d,S as h}from"./Transition.stories-era-sv-I.js";import"./iframe-s_RWuztI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CgVo3QpR.js";import"./index-DK4JxWgl.js";import"./index-CxvbG2DE.js";import"./index-DJdzzOfX.js";import"./index-f6JCpNqT.js";import"./index-BcwoW19Q.js";import"./Button-DPybLjVz.js";import"./index-BGRTG6NI.js";import"./Icon-CvGYaBGE.js";import"./useTranslation-qnx2iauW.js";function s(i){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Utilities/Transition",of:c}),`
`,n.jsx(r.h1,{id:"transition",children:"Transition"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"Transition"})," コンポーネントは、CSS クラスを使用してコンポーネントに遷移アニメーション（進入・退出）を簡単に追加するためのユーティリティです。遷移の各段階に応じて、適切なタイミングでクラスを適用・管理します。"]}),`
`,n.jsx(r.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"段階的なクラス管理"}),": ",n.jsx(r.code,{children:"enter"})," (遷移中), ",n.jsx(r.code,{children:"enterFrom"})," (開始時), ",n.jsx(r.code,{children:"enterTo"})," (終了時) および ",n.jsx(r.code,{children:"leave"})," 系のクラスを連携させます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"アンマウント対応"}),": 退出アニメーションの完了後に、自動的に子要素をアンマウントすることができます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"SSR 対応"}),": React のライフサイクルとハイドレーションに正しく対応しています。"]}),`
`]}),`
`,n.jsx(r.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`<Transition\r
  show={isOpen}\r
  enter="transition-opacity duration-300"\r
  enterFrom="opacity-0"\r
  enterTo="opacity-100"\r
  leave="transition-opacity duration-200"\r
  leaveFrom="opacity-100"\r
  leaveTo="opacity-0"\r
>\r
  <div>アニメーションするコンテンツ</div>\r
</Transition>
`})}),`
`,n.jsx(r.h2,{id:"例",children:"例"}),`
`,n.jsx(r.h3,{id:"フェードアニメーション",children:"フェードアニメーション"}),`
`,n.jsx(r.p,{children:"シンプルな不透明度の変化によるフェードイン・フェードアウトです。ボタンのラベル変更時の幅のアニメーションも組み込まれています。"}),`
`,n.jsx(e,{of:d}),`
`,n.jsx(r.h3,{id:"スライドアニメーション",children:"スライドアニメーション"}),`
`,n.jsx(r.p,{children:"不透明度と位置（transform）の遷移を組み合わせた例です。"}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(r.h2,{id:"遷移の各ステージ",children:"遷移の各ステージ"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"enter"}),": 進入フェーズ全体を通して適用されます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"enterFrom"}),": 進入フェーズの開始時（最初のフレームの前）に適用されます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"enterTo"}),": 進入フェーズの終了時に適用されます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"leave"}),": 退出フェーズ全体を通して適用されます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"leaveFrom"}),": 退出フェーズの開始時に適用されます。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"leaveTo"}),": 退出フェーズの終了時に適用されます。"]}),`
`]}),`
`,n.jsx(r.h2,{id:"プロップ",children:"プロップ"}),`
`,n.jsx(l,{})]})}function R(i={}){const{wrapper:r}={...o(),...i.components};return r?n.jsx(r,{...i,children:n.jsx(s,{...i})}):s(i)}export{R as default};
