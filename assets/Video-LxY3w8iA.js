import{j as d}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-8BoU1IPz.js";import{M as c,a as l,C as s}from"./index-CyRntP2b.js";import{T as o}from"./T-DK1be4Ff.js";import{V as h,D as t,A as x,R as j,C as a}from"./Video.stories-Dx9PSq_t.js";import"./iframe-CMRSIEnV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1a5NaCAO.js";import"./index-DMh35vnJ.js";import"./index-CW7syudD.js";import"./index-5tBtizym.js";import"./index-DDwXeJ6p.js";import"./useTranslation-V1DizkFl.js";import"./index-BUcX07q_.js";import"./Icon-BSXAmnY4.js";function r(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...n.components};return d.jsxs(d.Fragment,{children:[d.jsx(c,{of:h}),`
`,d.jsx(e.h1,{id:"video",children:"Video"}),`
`,d.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:d.jsx(o,{k:"doc_video_title"})}),`
`,d.jsxs(e.p,{children:[d.jsx(e.code,{children:"Video"}),` コンポーネントは、動画ファイルを簡単に埋め込むためのコンポーネントです。\r
自動再生、ループ、コントロールの表示切り替え、角丸、影などのスタイリングをサポートしています。`]}),`
`,d.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,d.jsxs(e.ul,{children:[`
`,d.jsxs(e.li,{children:["直感的なコントロール: ",d.jsx(e.code,{children:"controls"})," プロパティで再生UIの表示/非表示を切り替え可能。"]}),`
`,d.jsxs(e.li,{children:["自動再生とループ: ",d.jsx(e.code,{children:"autoPlay"}),"、",d.jsx(e.code,{children:"loop"}),"、",d.jsx(e.code,{children:"muted"})," を組み合わせて背景動画などの演出に対応。"]}),`
`,d.jsxs(e.li,{children:["スタイリング: ",d.jsx(e.code,{children:"radius"}),"、",d.jsx(e.code,{children:"shadow"}),"、",d.jsx(e.code,{children:"border"})," プロパティでデザインに合わせた外観に変更可能。"]}),`
`]}),`
`,d.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,d.jsx(e.pre,{children:d.jsx(e.code,{className:"language-tsx",children:`import { Video } from "@/components/Video/Video";\r
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
`,d.jsx(e.h2,{id:"高度なコントロールと拡張機能",children:"高度なコントロールと拡張機能"}),`
`,d.jsxs(e.p,{children:[d.jsx(e.code,{children:"advancedControls={true}"})," を利用することで、モダンな動画プレイヤーに必要な様々な機能を利用できます。"]}),`
`,d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"機能名"}),d.jsx("th",{children:"関連プロパティ"}),d.jsx("th",{children:"説明"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"画質切り替え"})}),d.jsx("td",{children:d.jsx("code",{children:"qualities"})}),d.jsx("td",{children:"1080p, 720pなどの画質プルダウンを選択でき、シームレスに途中から再生を切り替えます。"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"再生速度コントロール"})}),d.jsx("td",{children:"-"}),d.jsx("td",{children:"0.25倍から2.0倍まで、ユーザーが自由に再生速度を変更できるUIです。"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"アスペクト比の変更"})}),d.jsx("td",{children:d.jsx("code",{children:"fit"})}),d.jsxs("td",{children:[d.jsx("code",{children:"contain"}),", ",d.jsx("code",{children:"cover"})," など、画面にどうフィットさせるかをユーザーが選択できます。"]})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"プレイリスト・自動再生"})}),d.jsxs("td",{children:[d.jsx("code",{children:"playlist"}),", ",d.jsx("code",{children:"autoPlayNext"})]}),d.jsx("td",{children:"複数の動画をリストとして扱い、リスト選択UIの提供や、終了時の自動遷移機能を利用できます。"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"高度なレジューム再生"})}),d.jsxs("td",{children:[d.jsx("code",{children:"videoId"}),", ",d.jsx("code",{children:"resumePlayback"})]}),d.jsxs("td",{children:[d.jsx("code",{children:"videoId"})," と共に指定することで、動画の再生位置を自動で保存し、次回アクセス時に続きから再生します。"]})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"10秒スキップ & ダブルタップ"})}),d.jsx("td",{children:"-"}),d.jsx("td",{children:"操作バーにスキップボタンを備え、モバイルでは画面の左右をダブルタップすることでもスキップ動作が行われます。"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"ピクチャーインピクチャー (PiP)"})}),d.jsx("td",{children:"-"}),d.jsx("td",{children:"動画を画面の隅にフロート表示させるPiPモードの切り替えボタンを備えています。"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"キーボードショートカット"})}),d.jsx("td",{children:"-"}),d.jsxs("td",{children:[d.jsx("code",{children:"Space"})," / ",d.jsx("code",{children:"K"})," (再生), ",d.jsx("code",{children:"M"})," (ミュート), ",d.jsx("code",{children:"F"})," (最大化), ",d.jsx("code",{children:"P"})," (PiP), ",d.jsx("code",{children:"←"})," ",d.jsx("code",{children:"→"})," (スキップ), ",d.jsx("code",{children:"↑"})," ",d.jsx("code",{children:"↓"})," (音量) に対応しています。"]})]})]})]}),`
`,d.jsx(e.h2,{id:"props",children:"Props"}),`
`,d.jsx(l,{}),`
`,d.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,d.jsx(e.h3,{id:"default",children:"Default"}),`
`,d.jsx(e.p,{children:"標準的なビデオプレイヤーです。"}),`
`,d.jsx(s,{of:t}),`
`,d.jsx(e.h3,{id:"autoplay--loop",children:"AutoPlay & Loop"}),`
`,d.jsxs(e.p,{children:[d.jsx(e.code,{children:"autoPlay"}),"、",d.jsx(e.code,{children:"muted"}),"、",d.jsx(e.code,{children:"loop"})," を有効にした状態です。"]}),`
`,d.jsx(s,{of:x}),`
`,d.jsx(e.h3,{id:"rounded-with-shadow",children:"Rounded with Shadow"}),`
`,d.jsx(e.p,{children:"角丸と影を適用したデザインです。"}),`
`,d.jsx(s,{of:j}),`
`,d.jsx(e.h3,{id:"custom-controls",children:"Custom Controls"}),`
`,d.jsx(e.p,{children:"wimui独自のカスタムコントロールUIを適用した状態です。"}),`
`,d.jsx(s,{of:a}),`
`,d.jsx(e.h3,{id:"full-features-全部盛り",children:"Full Features (全部盛り)"}),`
`,d.jsx(e.p,{children:"すべての高度な機能（プレイリスト、アスペクト比、画質、レジューム再生、ショートカット等）を有効にした完全なプレイヤーです。"}),`
`,d.jsx(s,{of:void 0})]})}function b(n={}){const{wrapper:e}={...i(),...n.components};return e?d.jsx(e,{...n,children:d.jsx(r,{...n})}):r(n)}export{b as default};
