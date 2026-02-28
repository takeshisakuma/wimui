import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-XtN5Or_H.js";import{M as d,C as e,a as c}from"./index-DbhVfIXN.js";import{A as l,D as t,C as h,R as x}from"./Audio.stories-BV_gsQ9C.js";import{T as j}from"./T-BNmplqkK.js";import"./iframe-CWdbcN92.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-PZlqfC.js";import"./index-1shXBhu9.js";import"./index-CVRgnQk6.js";import"./index-0T8byL3Y.js";import"./index-6DLxY2SM.js";import"./index-vtw7FrBa.js";import"./Icon-CRCEOd4X.js";import"./useTranslation-CHLTHlnr.js";function s(o){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:l}),`
`,n.jsx(r.h1,{id:"audio",children:"Audio"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(j,{k:"doc_audio_title"})}),`
`,n.jsx(r.p,{children:"音声ファイルを再生するためのコンポーネントです。"}),`
`,n.jsx(r.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"src"})," プロパティに音声ファイルのパスを指定します。"]}),`
`,n.jsx(e,{of:t}),`
`,n.jsx(r.h2,{id:"カスタムコントロール",children:"カスタムコントロール"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"customControls"})," を ",n.jsx(r.code,{children:"true"}),` に設定すると、カスタマイズされたオーディオプレイヤーが表示されます。
これを使用すると、`,n.jsx(r.code,{children:"border"})," や ",n.jsx(r.code,{children:"radius"})," などのスタイルプロパティが有効になります。"]}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(r.h2,{id:"スタイルの適用角丸枠線",children:"スタイルの適用（角丸・枠線）"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"radius"})," や ",n.jsx(r.code,{children:"border"}),` プロパティを使用してスタイルを適用できます。
これらのプロパティは `,n.jsx(r.code,{children:"customControls={true}"})," の場合のみ適用されます。"]}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(r.h3,{id:"重要ブラウザ標準プレイヤーの制限について",children:"【重要】ブラウザ標準プレイヤーの制限について"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"customControls={false}"}),"（デフォルト）の場合、ブラウザ標準の ",n.jsx(r.code,{children:"<audio>"}),` 要素が使用されます。
ブラウザ標準プレイヤーは、ブラウザ（Chrome, Firefox, Safariなど）によってデザインやサイズが大きく異なり、また多くのブラウザで独自のスタイル（border-radiusなど）を持っています。
そのため、`,n.jsx(r.code,{children:"border"})," や ",n.jsx(r.code,{children:"radius"}),` プロパティを適用しても、標準プレイヤーの形状と一致せず、表示が崩れる可能性があります。
このため、`,n.jsx(r.code,{children:"border"})," や ",n.jsx(r.code,{children:"radius"})," プロパティは、",n.jsx(r.code,{children:"customControls={true}"})," の場合のみ有効になるように設計されています。"]}),`
`,n.jsx(r.h2,{id:"カスタマイズと拡張性実装可能な機能",children:"カスタマイズと拡張性（実装可能な機能）"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"customControls={true}"})," モードでは、ReactコンポーネントとしてUIを完全に制御しているため、標準の ",n.jsx(r.code,{children:"<audio>"})," タグだけでは実装が難しい以下のような機能も、コードを拡張することで追加可能です。"]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["再生速度の変更: ",n.jsx(r.code,{children:"playbackRate"})," を操作するUIを追加し、「0.5倍」「1.5倍」「2倍」などの倍速再生機能を提供できます。"]}),`
`,n.jsx(r.li,{children:"スキップ・シーク機能: 「5秒戻る」「10秒進む」といったカスタムボタンを配置できます。"}),`
`,n.jsx(r.li,{children:"ループの動的切り替え: 再生中にループ設定をON/OFFできるトグルボタンを実装できます。"}),`
`,n.jsx(r.li,{children:"波形表示: Web Audio APIと組み合わせることで、音声の波形を可視化するビジュアライザーを組み込むことも可能です。"}),`
`]}),`
`,n.jsx(r.h2,{id:"props",children:"Props"}),`
`,n.jsx(c,{})]})}function I(o={}){const{wrapper:r}={...i(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(s,{...o})}):s(o)}export{I as default};
