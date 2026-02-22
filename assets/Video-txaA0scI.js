import{j as d}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DJ4kYSId.js";import{M as c,a as l,C as s}from"./index-CE6mPEER.js";import{T as o}from"./T-BiYc97hj.js";import{V as h,D as t,A as x,R as j,C as a,F as p}from"./Video.stories-EWlHNn7f.js";import"./iframe-BYxLnS7Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9RWXN-N.js";import"./index-BKxbTv4N.js";import"./index-BzQvTOAk.js";import"./index-BTkJDPjC.js";import"./index-BXMSopzr.js";import"./useTranslation-RSPwUeOL.js";import"./index-CleHdb-W.js";import"./Icon-Bhc1gRDq.js";function r(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return d.jsxs(d.Fragment,{children:[d.jsx(c,{of:h}),`
`,d.jsx(n.h1,{id:"video",children:"Video"}),`
`,d.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:d.jsx(o,{k:"doc_video_title"})}),`
`,d.jsxs(n.p,{children:[d.jsx(n.code,{children:"Video"}),` コンポーネントは、動画ファイルを簡単に埋め込むためのコンポーネントです。\r
自動再生、ループ、コントロールの表示切り替え、角丸、影などのスタイリングをサポートしています。`]}),`
`,d.jsx(n.h2,{id:"特徴",children:"特徴"}),`
`,d.jsxs(n.ul,{children:[`
`,d.jsxs(n.li,{children:["直感的なコントロール: ",d.jsx(n.code,{children:"controls"})," プロパティで再生UIの表示/非表示を切り替え可能。"]}),`
`,d.jsxs(n.li,{children:["自動再生とループ: ",d.jsx(n.code,{children:"autoPlay"}),"、",d.jsx(n.code,{children:"loop"}),"、",d.jsx(n.code,{children:"muted"})," を組み合わせて背景動画などの演出に対応。"]}),`
`,d.jsxs(n.li,{children:["スタイリング: ",d.jsx(n.code,{children:"radius"}),"、",d.jsx(n.code,{children:"shadow"}),"、",d.jsx(n.code,{children:"border"})," プロパティでデザインに合わせた外観に変更可能。"]}),`
`]}),`
`,d.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,d.jsx(n.pre,{children:d.jsx(n.code,{className:"language-tsx",children:`import { Video } from "@/components/Video/Video";\r
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
`,d.jsx(n.h2,{id:"高度なコントロールと拡張機能",children:"高度なコントロールと拡張機能"}),`
`,d.jsxs(n.p,{children:[d.jsx(n.code,{children:"advancedControls={true}"})," を利用することで、モダンな動画プレイヤーに必要な様々な機能を利用できます。"]}),`
`,d.jsxs("table",{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"機能名"}),d.jsx("th",{children:"関連プロパティ"}),d.jsx("th",{children:"説明"})]})}),d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"画質切り替え"})}),d.jsx("td",{children:d.jsx("code",{children:"qualities"})}),d.jsx("td",{children:"1080p, 720pなどの画質プルダウンを選択でき、シームレスに途中から再生を切り替えます。"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"再生速度コントロール"})}),d.jsx("td",{children:"-"}),d.jsx("td",{children:"0.25倍から2.0倍まで、ユーザーが自由に再生速度を変更できるUIです。"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"アスペクト比の変更"})}),d.jsx("td",{children:d.jsx("code",{children:"fit"})}),d.jsxs("td",{children:[d.jsx("code",{children:"contain"}),", ",d.jsx("code",{children:"cover"})," など、画面にどうフィットさせるかをユーザーが選択できます。"]})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"プレイリスト・自動再生"})}),d.jsxs("td",{children:[d.jsx("code",{children:"playlist"}),", ",d.jsx("code",{children:"autoPlayNext"})]}),d.jsx("td",{children:"複数の動画をリストとして扱い、リスト選択UIの提供や、終了時の自動遷移機能を利用できます。"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"高度なレジューム再生"})}),d.jsxs("td",{children:[d.jsx("code",{children:"videoId"}),", ",d.jsx("code",{children:"resumePlayback"})]}),d.jsxs("td",{children:[d.jsx("code",{children:"videoId"})," と共に指定することで、動画の再生位置を自動で保存し、次回アクセス時に続きから再生します。"]})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"10秒スキップ & ダブルタップ"})}),d.jsx("td",{children:"-"}),d.jsx("td",{children:"操作バーにスキップボタンを備え、モバイルでは画面の左右をダブルタップすることでもスキップ動作が行われます。"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"ピクチャーインピクチャー (PiP)"})}),d.jsx("td",{children:"-"}),d.jsx("td",{children:"動画を画面の隅にフロート表示させるPiPモードの切り替えボタンを備えています。"})]}),d.jsxs("tr",{children:[d.jsx("td",{children:d.jsx("strong",{children:"キーボードショートカット"})}),d.jsx("td",{children:"-"}),d.jsxs("td",{children:[d.jsx("code",{children:"Space"})," / ",d.jsx("code",{children:"K"})," (再生), ",d.jsx("code",{children:"M"})," (ミュート), ",d.jsx("code",{children:"F"})," (最大化), ",d.jsx("code",{children:"P"})," (PiP), ",d.jsx("code",{children:"←"})," ",d.jsx("code",{children:"→"})," (スキップ), ",d.jsx("code",{children:"↑"})," ",d.jsx("code",{children:"↓"})," (音量) に対応しています。"]})]})]})]}),`
`,d.jsx(n.h2,{id:"モバイルでの挙動",children:"モバイルでの挙動"}),`
`,d.jsxs(n.p,{children:["カスタムコントロール使用時、",d.jsx(n.strong,{children:"画面幅 576px 以下のモバイル環境では音量スライダーが非表示"}),`になります。\r
ミュート／アンミュートのトグルボタンは引き続き表示されます。`]}),`
`,d.jsx(n.p,{children:"この設計判断の理由は以下の通りです："}),`
`,d.jsxs(n.ul,{children:[`
`,d.jsxs(n.li,{children:[d.jsx(n.strong,{children:"操作性の問題"}),": 狭いコントロールバー内に音量スライダーを展開すると、シークバー・設定アイコン等の他の要素と必ず重なってしまいます。"]}),`
`,d.jsxs(n.li,{children:[d.jsx(n.strong,{children:"モバイルの慣例に従う"}),": YouTube・Netflix・Prime Video などの主要な動画プラットフォームのモバイルアプリは、いずれも音量スライダーを持ちません。モバイルでは**デバイスのハードウェアボタン（音量大・小キー）**で音量を調節するのが標準的な UX です。"]}),`
`,d.jsxs(n.li,{children:[d.jsx(n.strong,{children:"ミュート操作は可能"}),": 音量スライダーが隠れていても、ミュートボタンで音のオン・オフは切り替えられます。"]}),`
`]}),`
`,d.jsx(n.h2,{id:"props",children:"Props"}),`
`,d.jsx(l,{}),`
`,d.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,d.jsx(n.h3,{id:"default",children:"Default"}),`
`,d.jsx(n.p,{children:"標準的なビデオプレイヤーです。"}),`
`,d.jsx(s,{of:t}),`
`,d.jsx(n.h3,{id:"autoplay--loop",children:"AutoPlay & Loop"}),`
`,d.jsxs(n.p,{children:[d.jsx(n.code,{children:"autoPlay"}),"、",d.jsx(n.code,{children:"muted"}),"、",d.jsx(n.code,{children:"loop"})," を有効にした状態です。"]}),`
`,d.jsx(s,{of:x}),`
`,d.jsx(n.h3,{id:"rounded-with-shadow",children:"Rounded with Shadow"}),`
`,d.jsx(n.p,{children:"角丸と影を適用したデザインです。"}),`
`,d.jsx(s,{of:j}),`
`,d.jsx(n.h3,{id:"custom-controls",children:"Custom Controls"}),`
`,d.jsx(n.p,{children:"wimui独自のカスタムコントロールUIを適用した状態です。"}),`
`,d.jsx(s,{of:a}),`
`,d.jsx(n.h3,{id:"full-features-全部盛り",children:"Full Features (全部盛り)"}),`
`,d.jsx(n.p,{children:"すべての高度な機能（プレイリスト、アスペクト比、画質、レジューム再生、ショートカット等）を有効にした完全なプレイヤーです。"}),`
`,d.jsx(s,{of:p})]})}function b(e={}){const{wrapper:n}={...i(),...e.components};return n?d.jsx(n,{...e,children:d.jsx(r,{...e})}):r(e)}export{b as default};
