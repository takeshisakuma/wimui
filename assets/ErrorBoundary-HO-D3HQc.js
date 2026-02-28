import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Bk8X1Xu_.js";import{M as i,C as s,a as t}from"./blocks-C6FzcQKW.js";import{E as c,D as l,C as h}from"./ErrorBoundary.stories-C5S6cO-P.js";import{T as x}from"./T-C8hbYU9U.js";import"./iframe-Dgvn1YDu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdLmKoSX.js";import"./index-Dgi1rt6o.js";import"./index-Z9rhKA2M.js";import"./index-DbGvuoi8.js";import"./Button-BLjuKSaO.js";import"./index-CZyd2_qg.js";import"./Icon--zs9NUy0.js";import"./useTranslation-CfaHxh4C.js";function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:c}),`
`,r.jsx(n.h1,{id:"errorboundary",children:"ErrorBoundary"}),`
`,r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:r.jsx(x,{k:"doc_errorboundary_title"})}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"ErrorBoundary"})," コンポーネントは、子コンポーネントツリー内のどこかで発生した JavaScript エラーをキャッチし、そのエラーをログに記録した上で、クラッシュしたコンポーネントツリーの代わりにフォールバック UI を表示します。"]}),`
`,r.jsx(n.h2,{id:"特徴",children:"特徴"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"特徴"}),r.jsx("th",{children:"説明"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"優雅なリカバリ"})}),r.jsx("td",{children:"単一のコンポーネントの失敗によってアプリ全体がクラッシュするのを防ぎます。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"カスタマイズ可能なフォールバック"})}),r.jsx("td",{children:"独自のフォールバック UI を提供することも、デフォルトのものを使用することも可能です。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"復旧サポート"})}),r.jsx("td",{children:"子要素のレンダリングを再試行するためのリセットメカニズムが含まれています。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"エラーフック"})}),r.jsxs("td",{children:[r.jsx("code",{children:"onError"})," や ",r.jsx("code",{children:"onReset"})," などのコールバックを提供します。"]})]})]})]}),`
`,r.jsx(n.h2,{id:"使い方",children:"使い方"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`<ErrorBoundary
  fallback={<div>問題が発生しました</div>}
  onError={(error) => console.log(error)}
>
  <MyBuggyComponent />
</ErrorBoundary>
`})}),`
`,r.jsx(n.h2,{id:"例",children:"例"}),`
`,r.jsx(n.h3,{id:"デフォルトのエラー境界",children:"デフォルトのエラー境界"}),`
`,r.jsx(n.p,{children:'"Try again" ボタンを備えたデフォルトのエラー UI を表示します。'}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(n.h3,{id:"カスタムフォールバック-ui",children:"カスタムフォールバック UI"}),`
`,r.jsxs(n.p,{children:["関数として ",r.jsx(n.code,{children:"fallback"})," を提供することで、エラーメッセージやリセットボタンを自由にカスタマイズできます。"]}),`
`,r.jsx(s,{of:h}),`
`,r.jsx(n.h2,{id:"プロップ",children:"プロップ"}),`
`,r.jsx(t,{})]})}function v(e={}){const{wrapper:n}={...d(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(o,{...e})}):o(e)}export{v as default};
