import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DSa2Oe1e.js";import{M as d,C as s,a as t}from"./index-C68Tkxte.js";import{E as l,D as c,C as h}from"./ErrorBoundary.stories-Cz2rW213.js";import"./utils-02Y0UBtw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3Yd4HRE.js";import"./iframe-BYjsp1IA.js";import"./viz-BRLp5-ay.js";import"./Button-CS2I49vd.js";import"./index-CyF2BHNT.js";import"./Icon-CsOAjbJY.js";function e(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(d,{title:"Utilities/ErrorBoundary",of:l}),`
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
`,r.jsx(t,{})]})}function M(o={}){const{wrapper:n}={...i(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(e,{...o})}):e(o)}export{M as default};
