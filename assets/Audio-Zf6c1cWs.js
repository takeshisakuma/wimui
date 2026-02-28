import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DFNKA_V7.js";import{M as i,C as o,a as c}from"./blocks-CX2MuiOa.js";import{A as l,D as t,C as h,R as x}from"./Audio.stories-SZyffPVU.js";import{T as j}from"./T-BxJRC_oq.js";import"./iframe-CSwZKKgh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D91GK5yZ.js";import"./index-CEGjitDu.js";import"./index-DCFmpl79.js";import"./index-DDm-SkYv.js";import"./index-DV843YsD.js";import"./Icon-DOwTT6BK.js";import"./useTranslation-CnASG-hp.js";function s(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:l}),`
`,n.jsx(r.h1,{id:"audio",children:"Audio"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(j,{k:"doc_audio_title"})}),`
`,n.jsx(r.p,{children:"音声ファイルを再生するためのコンポーネントです。"}),`
`,n.jsx(r.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"src"})," プロパティに音声ファイルのパスを指定します。"]}),`
`,n.jsx(o,{of:t}),`
`,n.jsx(r.h2,{id:"カスタムコントロール",children:"カスタムコントロール"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"customControls"})," を ",n.jsx(r.code,{children:"true"}),` に設定すると、カスタマイズされたオーディオプレイヤーが表示されます。
これを使用すると、`,n.jsx(r.code,{children:"border"})," や ",n.jsx(r.code,{children:"radius"})," などのスタイルプロパティが有効になります。"]}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(r.h2,{id:"スタイルの適用角丸枠線",children:"スタイルの適用（角丸・枠線）"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"radius"})," や ",n.jsx(r.code,{children:"border"}),` プロパティを使用してスタイルを適用できます。
これらのプロパティは `,n.jsx(r.code,{children:"customControls={true}"})," の場合のみ適用されます。"]}),`
`,n.jsx(o,{of:x}),`
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
`,n.jsx(c,{})]})}function y(e={}){const{wrapper:r}={...d(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{y as default};
