import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DRiaBBYi.js";import{M as d,C as o,a as c}from"./index-owzGlGYj.js";import{A as t,D as l,C as h,R as x}from"./Audio.stories-eoT-7oUm.js";import{T as j}from"./T-D3np7SQF.js";import"./iframe-BMpY0rva.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Drw36-DN.js";import"./index-CLByghFt.js";import"./index-CpnkkqGN.js";import"./index-B0djQuuG.js";import"./index-Db__cjFU.js";import"./index-DfrzlIWo.js";import"./Icon-BB7G6E1S.js";import"./useTranslation-BAFMhCeQ.js";function e(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return r.jsxs(r.Fragment,{children:[r.jsx(d,{of:t}),`
`,r.jsx(n.h1,{id:"audio",children:"Audio"}),`
`,r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:r.jsx(j,{k:"doc_audio_title"})}),`
`,r.jsx(n.p,{children:"音声ファイルを再生するためのコンポーネントです。"}),`
`,r.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"src"})," プロパティに音声ファイルのパスを指定します。"]}),`
`,r.jsx(o,{of:l}),`
`,r.jsx(n.h2,{id:"カスタムコントロール",children:"カスタムコントロール"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"customControls"})," を ",r.jsx(n.code,{children:"true"}),` に設定すると、カスタマイズされたオーディオプレイヤーが表示されます。\r
これを使用すると、`,r.jsx(n.code,{children:"border"})," や ",r.jsx(n.code,{children:"radius"})," などのスタイルプロパティが有効になります。"]}),`
`,r.jsx(o,{of:h}),`
`,r.jsx(n.h2,{id:"スタイルの適用角丸枠線",children:"スタイルの適用（角丸・枠線）"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"radius"})," や ",r.jsx(n.code,{children:"border"}),` プロパティを使用してスタイルを適用できます。\r
これらのプロパティは `,r.jsx(n.code,{children:"customControls={true}"})," の場合のみ適用されます。"]}),`
`,r.jsx(o,{of:x}),`
`,r.jsx(n.h3,{id:"重要ブラウザ標準プレイヤーの制限について",children:"【重要】ブラウザ標準プレイヤーの制限について"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"customControls={false}"}),"（デフォルト）の場合、ブラウザ標準の ",r.jsx(n.code,{children:"<audio>"}),` 要素が使用されます。\r
ブラウザ標準プレイヤーは、ブラウザ（Chrome, Firefox, Safariなど）によってデザインやサイズが大きく異なり、また多くのブラウザで独自のスタイル（border-radiusなど）を持っています。\r
そのため、`,r.jsx(n.code,{children:"border"})," や ",r.jsx(n.code,{children:"radius"}),` プロパティを適用しても、標準プレイヤーの形状と一致せず、表示が崩れる可能性があります。\r
`,r.jsxs(n.strong,{children:["このため、",r.jsx(n.code,{children:"border"})," や ",r.jsx(n.code,{children:"radius"})," プロパティは、",r.jsx(n.code,{children:"customControls={true}"})," の場合のみ有効になるように設計されています。"]})]}),`
`,r.jsx(n.h2,{id:"カスタマイズと拡張性実装可能な機能",children:"カスタマイズと拡張性（実装可能な機能）"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"customControls={true}"})," モードでは、ReactコンポーネントとしてUIを完全に制御しているため、標準の ",r.jsx(n.code,{children:"<audio>"})," タグだけでは実装が難しい以下のような機能も、コードを拡張することで追加可能です。"]}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"再生速度の変更"}),": ",r.jsx(n.code,{children:"playbackRate"})," を操作するUIを追加し、「0.5倍」「1.5倍」「2倍」などの倍速再生機能を提供できます。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"スキップ・シーク機能"}),": 「5秒戻る」「10秒進む」といったカスタムボタンを配置できます。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"ループの動的切り替え"}),": 再生中にループ設定をON/OFFできるトグルボタンを実装できます。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"波形表示"}),": Web Audio APIと組み合わせることで、音声の波形を可視化するビジュアライザーを組み込むことも可能です。"]}),`
`]}),`
`,r.jsx(n.h2,{id:"props",children:"Props"}),`
`,r.jsx(c,{})]})}function I(s={}){const{wrapper:n}={...i(),...s.components};return n?r.jsx(n,{...s,children:r.jsx(e,{...s})}):e(s)}export{I as default};
