import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-2NOgpbBf.js";import{M as t,C as s,a as d}from"./index-D0U55APu.js";import{E as l,D as c,C as h}from"./ErrorBoundary.stories-BiB8MaPj.js";import"./iframe-Rz6pNceq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bfhlaqba.js";import"./index-CeH8-goz.js";import"./index-CPorI4nf.js";import"./index-Cb3Wat04.js";import"./index-A52BBmF7.js";import"./Button-DDoLasRx.js";import"./index-Dnf1k34B.js";import"./Icon-GFlJee33.js";import"./useTranslation-F5yQTs60.js";function i(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{title:"Utilities/ErrorBoundary",of:l}),`
`,r.jsx(n.h1,{id:"errorboundary",children:"ErrorBoundary"}),`
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
`,r.jsx(s,{of:c}),`
`,r.jsx(n.h3,{id:"カスタムフォールバック-ui",children:"カスタムフォールバック UI"}),`
`,r.jsxs(n.p,{children:["関数として ",r.jsx(n.code,{children:"fallback"})," を提供することで、エラーメッセージやリセットボタンを自由にカスタマイズできます。"]}),`
`,r.jsx(s,{of:h}),`
`,r.jsx(n.h2,{id:"プロップ",children:"プロップ"}),`
`,r.jsx(d,{})]})}function b(o={}){const{wrapper:n}={...e(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(i,{...o})}):i(o)}export{b as default};
