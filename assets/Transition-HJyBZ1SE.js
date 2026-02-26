import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-v4U2F5oq.js";import{M as d,C as s,a as c}from"./index-B7aycoAu.js";import{T as o,F as h,S as l}from"./Transition.stories-BrWTX0f2.js";import{T as x}from"./T-wbVrzvMP.js";import"./iframe-B5KNG_YG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVTYWegQ.js";import"./index-Cywy72sA.js";import"./index-DGJ29Zxn.js";import"./index-BUrRW1D7.js";import"./index-DtD5XXQ5.js";import"./Transition-IGUXOa1z.js";import"./index-Cj7drDfE.js";import"./Button-COmDayQk.js";import"./Icon-BstGARio.js";import"./useTranslation-CmAbqblj.js";function i(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:o}),`
`,n.jsx(r.h1,{id:"transition",children:"Transition"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(x,{k:"doc_transition_title"})}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"Transition"})," コンポーネントは、CSS クラスを使用してコンポーネントに遷移アニメーション（進入・退出）を簡単に追加するためのユーティリティです。遷移の各段階に応じて、適切なタイミングでクラスを適用・管理します。"]}),`
`,n.jsx(r.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特徴"}),n.jsx("th",{children:"内容"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"段階的なクラス管理"})}),n.jsxs("td",{children:[n.jsx("code",{children:"enter"})," (遷移中), ",n.jsx("code",{children:"enterFrom"})," (開始時), ",n.jsx("code",{children:"enterTo"})," (終了時) および ",n.jsx("code",{children:"leave"})," 系のクラスを連携させます。"]})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"アンマウント対応"})}),n.jsx("td",{children:"退出アニメーションの完了後に、自動的に子要素をアンマウントすることができます。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"SSR 対応"})}),n.jsx("td",{children:"React のライフサイクルとハイドレーションに正しく対応しています。"})]})]})]}),`
`,n.jsx(r.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`<Transition
  show={isOpen}
  enter="transition-opacity duration-300"
  enterFrom="opacity-0"
  enterTo="opacity-100"
  leave="transition-opacity duration-200"
  leaveFrom="opacity-100"
  leaveTo="opacity-0"
>
  <div>アニメーションするコンテンツ</div>
</Transition>
`})}),`
`,n.jsx(r.h2,{id:"例",children:"例"}),`
`,n.jsx(r.h3,{id:"フェードアニメーション",children:"フェードアニメーション"}),`
`,n.jsx(r.p,{children:"シンプルな不透明度の変化によるフェードイン・フェードアウトです。ボタンのラベル変更時の幅のアニメーションも組み込まれています。"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(r.h3,{id:"スライドアニメーション",children:"スライドアニメーション"}),`
`,n.jsx(r.p,{children:"不透明度と位置（transform）の遷移を組み合わせた例です。"}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(r.h2,{id:"遷移の各ステージ",children:"遷移の各ステージ"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ステージ"}),n.jsx("th",{children:"適用タイミングと内容"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"enter"})}),n.jsx("td",{children:"進入フェーズ全体を通して適用されます。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"enterFrom"})}),n.jsx("td",{children:"進入フェーズの開始時（最初のフレームの前）に適用されます。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"enterTo"})}),n.jsx("td",{children:"進入フェーズの終了時に適用されます。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"leave"})}),n.jsx("td",{children:"退出フェーズ全体を通して適用されます。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"leaveFrom"})}),n.jsx("td",{children:"退出フェーズの開始時に適用されます。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"leaveTo"})}),n.jsx("td",{children:"退出フェーズの終了時に適用されます。"})]})]})]}),`
`,n.jsx(r.h2,{id:"プロップ",children:"プロップ"}),`
`,n.jsx(c,{})]})}function R(e={}){const{wrapper:r}={...t(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{R as default};
