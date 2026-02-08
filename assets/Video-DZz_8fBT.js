import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-CBJWLlGW.js";import{M as d,a as l,C as e}from"./index-CO4sIPDa.js";import{V as c,D as t,A as h,R as x}from"./Video.stories-BStdisJr.js";import"./iframe-CycZabT0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGf6Y6iA.js";import"./index-CI50e0sS.js";import"./index-B-QwurPz.js";import"./index-Thg1bX64.js";import"./index-BUC5JGjO.js";import"./index-BuljsEsS.js";import"./Icon-WdlFThQe.js";function o(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Components/Media/Video",of:c}),`
`,n.jsx(s.h1,{id:"video",children:"Video"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"Video"}),` コンポーネントは、動画ファイルを簡単に埋め込むためのコンポーネントです。\r
自動再生、ループ、コントロールの表示切り替え、角丸、影などのスタイリングをサポートしています。`]}),`
`,n.jsx(s.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"直感的なコントロール"}),": ",n.jsx(s.code,{children:"controls"})," プロパティで再生UIの表示/非表示を切り替え可能。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"自動再生とループ"}),": ",n.jsx(s.code,{children:"autoPlay"}),"、",n.jsx(s.code,{children:"loop"}),"、",n.jsx(s.code,{children:"muted"})," を組み合わせて背景動画などの演出に対応。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"スタイリング"}),": ",n.jsx(s.code,{children:"radius"}),"、",n.jsx(s.code,{children:"shadow"}),"、",n.jsx(s.code,{children:"border"})," プロパティでデザインに合わせた外観に変更可能。"]}),`
`]}),`
`,n.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import { Video } from "./Video";\r
\r
<Video\r
  src="path/to/video.mp4"\r
  width={600}\r
  autoPlay\r
  muted\r
  loop\r
  radius="medium"\r
  caption="背景動画のサンプル"\r
/>
`})}),`
`,n.jsx(s.h2,{id:"カスタムコントロールと拡張性",children:"カスタムコントロールと拡張性"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"customControls={true}"})," （または将来的な拡張）を利用することで、標準のビデオプレイヤーにはない以下のような高度な機能を追加・カスタマイズすることが可能です。"]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"再生速度コントロール"}),": 学習動画などに便利な「倍速再生」機能や「スロー再生」機能のUIを追加できます。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"ピクチャーインピクチャー (PiP)"}),": 動画を画面の隅にフロート表示させるPiPモードの切り替えボタンを設置できます。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"スキップ機能"}),": 「10秒スキップ」などのボタンを追加し、操作性を向上させることができます。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"オーバーレイ表示"}),": 動画の上にタイトル、ロゴ、透かし、またはインタラクティブな要素（リンクボタンなど）を自由に重ねて表示できます。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"デザインの統一"}),": ブラウザごとの表示差異をなくし、サイト全体のトーン＆マナーに合わせたカラーやアイコンを使用できます。"]}),`
`]}),`
`,n.jsx(s.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{}),`
`,n.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(s.h3,{id:"default",children:"Default"}),`
`,n.jsx(s.p,{children:"標準的なビデオプレイヤーです。"}),`
`,n.jsx(e,{of:t}),`
`,n.jsx(s.h3,{id:"autoplay--loop",children:"AutoPlay & Loop"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"autoPlay"}),"、",n.jsx(s.code,{children:"muted"}),"、",n.jsx(s.code,{children:"loop"})," を有効にした状態です。"]}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(s.h3,{id:"rounded-with-shadow",children:"Rounded with Shadow"}),`
`,n.jsx(s.p,{children:"角丸と影を適用したデザインです。"}),`
`,n.jsx(e,{of:x})]})}function D(r={}){const{wrapper:s}={...i(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(o,{...r})}):o(r)}export{D as default};
