import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-3Ej3eRcy.js";import{M as i,C as s,a as c}from"./index-CAUYrQbg.js";import{A as t,D as h,C as x,R as l}from"./Audio.stories-BY47fDOw.js";import"./iframe-b50X8cdi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DS5rv49I.js";import"./index-DOKrV1tN.js";import"./index-Bx_oMoPf.js";import"./index-B70P5TEQ.js";import"./Icon-B31ltcqP.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...d(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:t}),`
`,r.jsx(o.h1,{id:"audio",children:"Audio"}),`
`,r.jsx(o.p,{children:"音声ファイルを再生するためのコンポーネントです。"}),`
`,r.jsx(o.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"src"})," プロパティに音声ファイルのパスを指定します。"]}),`
`,r.jsx(s,{of:h}),`
`,r.jsx(o.h2,{id:"カスタムコントロール",children:"カスタムコントロール"}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"customControls"})," を ",r.jsx(o.code,{children:"true"}),` に設定すると、カスタマイズされたオーディオプレイヤーが表示されます。\r
これを使用すると、`,r.jsx(o.code,{children:"border"})," や ",r.jsx(o.code,{children:"radius"})," などのスタイルプロパティが有効になります。"]}),`
`,r.jsx(s,{of:x}),`
`,r.jsx(o.h2,{id:"スタイルの適用角丸枠線",children:"スタイルの適用（角丸・枠線）"}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"radius"})," や ",r.jsx(o.code,{children:"border"}),` プロパティを使用してスタイルを適用できます。\r
これらのプロパティは `,r.jsx(o.code,{children:"customControls={true}"})," の場合のみ適用されます。"]}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(o.h3,{id:"重要ブラウザ標準プレイヤーの制限について",children:"【重要】ブラウザ標準プレイヤーの制限について"}),`
`,r.jsxs(o.p,{children:[r.jsx(o.code,{children:"customControls={false}"}),"（デフォルト）の場合、ブラウザ標準の ",r.jsx(o.code,{children:"<audio>"}),` 要素が使用されます。\r
ブラウザ標準プレイヤーは、ブラウザ（Chrome, Firefox, Safariなど）によってデザインやサイズが大きく異なり、また多くのブラウザで独自のスタイル（border-radiusなど）を持っています。\r
そのため、`,r.jsx(o.code,{children:"border"})," や ",r.jsx(o.code,{children:"radius"}),` プロパティを適用しても、標準プレイヤーの形状と一致せず、表示が崩れる可能性があります。\r
`,r.jsxs(o.strong,{children:["このため、",r.jsx(o.code,{children:"border"})," や ",r.jsx(o.code,{children:"radius"})," プロパティは、",r.jsx(o.code,{children:"customControls={true}"})," の場合のみ有効になるように設計されています。"]})]}),`
`,r.jsx(o.h2,{id:"props",children:"Props"}),`
`,r.jsx(c,{})]})}function A(n={}){const{wrapper:o}={...d(),...n.components};return o?r.jsx(o,{...n,children:r.jsx(e,{...n})}):e(n)}export{A as default};
