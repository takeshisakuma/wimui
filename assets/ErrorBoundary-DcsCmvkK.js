import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BwnJfA-2.js";import{M as t,C as i,a as d}from"./index-DR9yAJ0B.js";import{E as l,D as c,C as h}from"./ErrorBoundary.stories-D_-1IDWc.js";import{T as x}from"./T-rP6PXM3X.js";import"./iframe-BbDYKtlj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-GZjb8rEM.js";import"./index-CUgZ4D7B.js";import"./index-MYMeRBXe.js";import"./index-CE7_z6yl.js";import"./index-tAI0z-7I.js";import"./Button-Q6W7RMTN.js";import"./index-Bp4MVLTo.js";import"./Icon-WrtMB1dj.js";import"./useTranslation-mAu--V_r.js";function e(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{title:"Utilities/ErrorBoundary",of:l}),`
`,r.jsx(n.h1,{id:"errorboundary",children:"ErrorBoundary"}),`
`,r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:r.jsx(x,{k:"doc_errorboundary_title"})}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"ErrorBoundary"})," コンポーネントは、子コンポーネントツリー内のどこかで発生した JavaScript エラーをキャッチし、そのエラーをログに記録した上で、クラッシュしたコンポーネントツリーの代わりにフォールバック UI を表示します。"]}),`
`,r.jsx(n.h2,{id:"特徴",children:"特徴"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"優雅なリカバリ"}),": 単一のコンポーネントの失敗によってアプリ全体がクラッシュするのを防ぎます。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"カスタマイズ可能なフォールバック"}),": 独自のフォールバック UI を提供することも、デフォルトのものを使用することも可能です。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"復旧サポート"}),": 子要素のレンダリングを再試行するためのリセットメカニズムが含まれています。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"エラーフック"}),": ",r.jsx(n.code,{children:"onError"})," や ",r.jsx(n.code,{children:"onReset"})," などのコールバックを提供します。"]}),`
`]}),`
`,r.jsx(n.h2,{id:"使い方",children:"使い方"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`<ErrorBoundary \r
  fallback={<div>問題が発生しました</div>}\r
  onError={(error) => console.log(error)}\r
>\r
  <MyBuggyComponent />\r
</ErrorBoundary>
`})}),`
`,r.jsx(n.h2,{id:"例",children:"例"}),`
`,r.jsx(n.h3,{id:"デフォルトのエラー境界",children:"デフォルトのエラー境界"}),`
`,r.jsx(n.p,{children:'"Try again" ボタンを備えたデフォルトのエラー UI を表示します。'}),`
`,r.jsx(i,{of:c}),`
`,r.jsx(n.h3,{id:"カスタムフォールバック-ui",children:"カスタムフォールバック UI"}),`
`,r.jsxs(n.p,{children:["関数として ",r.jsx(n.code,{children:"fallback"})," を提供することで、エラーメッセージやリセットボタンを自由にカスタマイズできます。"]}),`
`,r.jsx(i,{of:h}),`
`,r.jsx(n.h2,{id:"プロップ",children:"プロップ"}),`
`,r.jsx(d,{})]})}function v(o={}){const{wrapper:n}={...s(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(e,{...o})}):e(o)}export{v as default};
