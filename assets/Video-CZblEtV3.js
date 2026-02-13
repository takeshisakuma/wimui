import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DcVZjaVI.js";import{M as d,a as l,C as r}from"./index-CY41cSxq.js";import{T as t}from"./T-Bv69bH2y.js";import{V as c,D as h,A as x,R as j}from"./Video.stories-T3zlGapE.js";import"./iframe-BpxzmZ_b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CavWvePk.js";import"./index-D23919Q-.js";import"./index-BfF8dqaA.js";import"./index-zjbMbZmg.js";import"./index-DoeCzLLM.js";import"./useTranslation-DVlj2nuo.js";import"./index-CdxShSER.js";import"./Icon-HQ9_rTer.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Components/Media/Video",of:c}),`
`,n.jsx(e.h1,{id:"video",children:"Video"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(t,{k:"doc_video_title"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Video"}),` コンポーネントは、動画ファイルを簡単に埋め込むためのコンポーネントです。\r
自動再生、ループ、コントロールの表示切り替え、角丸、影などのスタイリングをサポートしています。`]}),`
`,n.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"直感的なコントロール"}),": ",n.jsx(e.code,{children:"controls"})," プロパティで再生UIの表示/非表示を切り替え可能。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"自動再生とループ"}),": ",n.jsx(e.code,{children:"autoPlay"}),"、",n.jsx(e.code,{children:"loop"}),"、",n.jsx(e.code,{children:"muted"})," を組み合わせて背景動画などの演出に対応。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"スタイリング"}),": ",n.jsx(e.code,{children:"radius"}),"、",n.jsx(e.code,{children:"shadow"}),"、",n.jsx(e.code,{children:"border"})," プロパティでデザインに合わせた外観に変更可能。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Video } from "@/components/Video/Video";\r
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
`,n.jsx(e.h2,{id:"カスタムコントロールと拡張性",children:"カスタムコントロールと拡張性"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"customControls={true}"})," （または将来的な拡張）を利用することで、標準のビデオプレイヤーにはない以下のような高度な機能を追加・カスタマイズすることが可能です。"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"再生速度コントロール"}),": 学習動画などに便利な「倍速再生」機能や「スロー再生」機能のUIを追加できます。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ピクチャーインピクチャー (PiP)"}),": 動画を画面の隅にフロート表示させるPiPモードの切り替えボタンを設置できます。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"スキップ機能"}),": 「10秒スキップ」などのボタンを追加し、操作性を向上させることができます。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"オーバーレイ表示"}),": 動画の上にタイトル、ロゴ、透かし、またはインタラクティブな要素（リンクボタンなど）を自由に重ねて表示できます。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"デザインの統一"}),": ブラウザごとの表示差異をなくし、サイト全体のトーン＆マナーに合わせたカラーやアイコンを使用できます。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsx(e.p,{children:"標準的なビデオプレイヤーです。"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h3,{id:"autoplay--loop",children:"AutoPlay & Loop"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"autoPlay"}),"、",n.jsx(e.code,{children:"muted"}),"、",n.jsx(e.code,{children:"loop"})," を有効にした状態です。"]}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h3,{id:"rounded-with-shadow",children:"Rounded with Shadow"}),`
`,n.jsx(e.p,{children:"角丸と影を適用したデザインです。"}),`
`,n.jsx(r,{of:j})]})}function _(o={}){const{wrapper:e}={...i(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{_ as default};
