import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-C3Ajxnos.js";import{M as s,C as r,a as l}from"./index-CbqPD0zM.js";import{T as c,F as d,S as a}from"./Transition.stories-BM0E28l3.js";import{T as h}from"./T-BEmQYwfc.js";import"./iframe-B3BjqrJG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dq73Se9O.js";import"./index-DtqjgXRJ.js";import"./index-Iw6exXHf.js";import"./index-DAf2h3_F.js";import"./index-lAe-Ui_t.js";import"./Transition-Cn0pZp70.js";import"./index-C7GNrL9d.js";import"./Button-D7QnCdnp.js";import"./Icon-DD0AwZFO.js";import"./useTranslation-CvRYYQpX.js";function o(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Utilities/Transition",of:c}),`
`,n.jsx(i.h1,{id:"transition",children:"Transition"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(h,{k:"doc_transition_title"})}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"Transition"})," コンポーネントは、CSS クラスを使用してコンポーネントに遷移アニメーション（進入・退出）を簡単に追加するためのユーティリティです。遷移の各段階に応じて、適切なタイミングでクラスを適用・管理します。"]}),`
`,n.jsx(i.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["段階的なクラス管理: ",n.jsx(i.code,{children:"enter"})," (遷移中), ",n.jsx(i.code,{children:"enterFrom"})," (開始時), ",n.jsx(i.code,{children:"enterTo"})," (終了時) および ",n.jsx(i.code,{children:"leave"})," 系のクラスを連携させます。"]}),`
`,n.jsx(i.li,{children:"アンマウント対応: 退出アニメーションの完了後に、自動的に子要素をアンマウントすることができます。"}),`
`,n.jsx(i.li,{children:"SSR 対応: React のライフサイクルとハイドレーションに正しく対応しています。"}),`
`]}),`
`,n.jsx(i.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`<Transition\r
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
`,n.jsx(i.h2,{id:"例",children:"例"}),`
`,n.jsx(i.h3,{id:"フェードアニメーション",children:"フェードアニメーション"}),`
`,n.jsx(i.p,{children:"シンプルな不透明度の変化によるフェードイン・フェードアウトです。ボタンのラベル変更時の幅のアニメーションも組み込まれています。"}),`
`,n.jsx(r,{of:d}),`
`,n.jsx(i.h3,{id:"スライドアニメーション",children:"スライドアニメーション"}),`
`,n.jsx(i.p,{children:"不透明度と位置（transform）の遷移を組み合わせた例です。"}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(i.h2,{id:"遷移の各ステージ",children:"遷移の各ステージ"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"enter: 進入フェーズ全体を通して適用されます。"}),`
`,n.jsx(i.li,{children:"enterFrom: 進入フェーズの開始時（最初のフレームの前）に適用されます。"}),`
`,n.jsx(i.li,{children:"enterTo: 進入フェーズの終了時に適用されます。"}),`
`,n.jsx(i.li,{children:"leave: 退出フェーズ全体を通して適用されます。"}),`
`,n.jsx(i.li,{children:"leaveFrom: 退出フェーズの開始時に適用されます。"}),`
`,n.jsx(i.li,{children:"leaveTo: 退出フェーズの終了時に適用されます。"}),`
`]}),`
`,n.jsx(i.h2,{id:"プロップ",children:"プロップ"}),`
`,n.jsx(l,{})]})}function X(e={}){const{wrapper:i}={...t(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(o,{...e})}):o(e)}export{X as default};
