import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-XtN5Or_H.js";import{M as c,a as l,C as s}from"./index-DbhVfIXN.js";import{T as o}from"./T-BNmplqkK.js";import{V as h,D as x,A as t,R as j,C as a,F as p}from"./Video.stories-CLdnXkb8.js";import"./iframe-CWdbcN92.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-PZlqfC.js";import"./index-1shXBhu9.js";import"./index-CVRgnQk6.js";import"./index-0T8byL3Y.js";import"./index-6DLxY2SM.js";import"./useTranslation-CHLTHlnr.js";import"./index-vtw7FrBa.js";import"./Icon-CRCEOd4X.js";function r(e){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:h}),`
`,n.jsx(d.h1,{id:"video",children:"Video"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(o,{k:"doc_video_title"})}),`
`,n.jsxs(d.p,{children:[n.jsx(d.code,{children:"Video"}),` コンポーネントは、動画ファイルを簡単に埋め込むためのコンポーネントです。
自動再生、ループ、コントロールの表示切り替え、角丸、影などのスタイリングをサポートしています。`]}),`
`,n.jsx(d.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(d.ul,{children:[`
`,n.jsxs(d.li,{children:["直感的なコントロール: ",n.jsx(d.code,{children:"controls"})," プロパティで再生UIの表示/非表示を切り替え可能。"]}),`
`,n.jsxs(d.li,{children:["自動再生とループ: ",n.jsx(d.code,{children:"autoPlay"}),"、",n.jsx(d.code,{children:"loop"}),"、",n.jsx(d.code,{children:"muted"})," を組み合わせて背景動画などの演出に対応。"]}),`
`,n.jsxs(d.li,{children:["スタイリング: ",n.jsx(d.code,{children:"radius"}),"、",n.jsx(d.code,{children:"shadow"}),"、",n.jsx(d.code,{children:"border"})," プロパティでデザインに合わせた外観に変更可能。"]}),`
`]}),`
`,n.jsx(d.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(d.pre,{children:n.jsx(d.code,{className:"language-tsx",children:`import { Video } from "@/components/Video/Video";

<Video
  src="path/to/video.mp4"
  width={600}
  autoPlay
  muted
  loop
  radius="medium"
  caption="背景動画のサンプル"
/>;
`})}),`
`,n.jsx(d.h2,{id:"高度なコントロールと拡張機能",children:"高度なコントロールと拡張機能"}),`
`,n.jsxs(d.p,{children:[n.jsx(d.code,{children:"advancedControls={true}"})," を利用することで、モダンな動画プレイヤーに必要な様々な機能を利用できます。"]}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"機能名"}),n.jsx("th",{children:"関連プロパティ"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"画質切り替え"})}),n.jsx("td",{children:n.jsx("code",{children:"qualities"})}),n.jsx("td",{children:n.jsx(d.p,{children:`1080p,
720pなどの画質プルダウンを選択でき、シームレスに途中から再生を切り替えます。`})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"再生速度コントロール"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"0.25倍から2.0倍まで、ユーザーが自由に再生速度を変更できるUIです。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"アスペクト比の変更"})}),n.jsx("td",{children:n.jsx("code",{children:"fit"})}),n.jsx("td",{children:n.jsxs(d.p,{children:[n.jsx("code",{children:"contain"}),", ",n.jsx("code",{children:"cover"})," ",`
など、画面にどうフィットさせるかをユーザーが選択できます。`]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"プレイリスト・自動再生"})}),n.jsx("td",{children:n.jsxs(d.p,{children:[n.jsx("code",{children:"playlist"}),", ",n.jsx("code",{children:"autoPlayNext"})]})}),n.jsx("td",{children:n.jsx(d.p,{children:"複数の動画をリストとして扱い、リスト選択UIの提供や、終了時の自動遷移機能を利用できます。"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"高度なレジューム再生"})}),n.jsx("td",{children:n.jsxs(d.p,{children:[n.jsx("code",{children:"videoId"}),", ",n.jsx("code",{children:"resumePlayback"})]})}),n.jsx("td",{children:n.jsxs(d.p,{children:[n.jsx("code",{children:"videoId"})," ",`
と共に指定することで、動画の再生位置を自動で保存し、次回アクセス時に続きから再生します。`]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"10秒スキップ & ダブルタップ"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:n.jsx(d.p,{children:"操作バーにスキップボタンを備え、モバイルでは画面の左右をダブルタップすることでもスキップ動作が行われます。"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"ピクチャーインピクチャー (PiP)"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:n.jsx(d.p,{children:"動画を画面の隅にフロート表示させるPiPモードの切り替えボタンを備えています。"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"キーボードショートカット"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:n.jsxs(d.p,{children:[n.jsx("code",{children:"Space"})," / ",n.jsx("code",{children:"K"})," (再生), ",n.jsx("code",{children:"M"})," (ミュート),"," ",`
`,n.jsx("code",{children:"F"})," (最大化), ",n.jsx("code",{children:"P"})," (PiP), ",n.jsx("code",{children:"←"})," ",`
`,n.jsx("code",{children:"→"})," (スキップ), ",n.jsx("code",{children:"↑"})," ",n.jsx("code",{children:"↓"}),` (音量)
に対応しています。`]})})]})]})]}),`
`,n.jsx(d.h2,{id:"モバイルでの挙動",children:"モバイルでの挙動"}),`
`,n.jsxs(d.p,{children:["カスタムコントロール使用時、",n.jsx(d.strong,{children:"画面幅 576px 以下のモバイル環境では音量スライダーが非表示"}),`になります。
ミュート／アンミュートのトグルボタンは引き続き表示されます。`]}),`
`,n.jsx(d.p,{children:"この設計判断の理由は以下の通りです："}),`
`,n.jsxs(d.ul,{children:[`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"操作性の問題"}),": 狭いコントロールバー内に音量スライダーを展開すると、シークバー・設定アイコン等の他の要素と必ず重なってしまいます。"]}),`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"モバイルの慣例に従う"}),": YouTube・Netflix・Prime Video などの主要な動画プラットフォームのモバイルアプリは、いずれも音量スライダーを持ちません。モバイルでは**デバイスのハードウェアボタン（音量大・小キー）**で音量を調節するのが標準的な UX です。"]}),`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"ミュート操作は可能"}),": 音量スライダーが隠れていても、ミュートボタンで音のオン・オフは切り替えられます。"]}),`
`]}),`
`,n.jsx(d.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{}),`
`,n.jsx(d.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(d.h3,{id:"default",children:"Default"}),`
`,n.jsx(d.p,{children:"標準的なビデオプレイヤーです。"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(d.h3,{id:"autoplay--loop",children:"AutoPlay & Loop"}),`
`,n.jsxs(d.p,{children:[n.jsx(d.code,{children:"autoPlay"}),"、",n.jsx(d.code,{children:"muted"}),"、",n.jsx(d.code,{children:"loop"})," を有効にした状態です。"]}),`
`,n.jsx(s,{of:t}),`
`,n.jsx(d.h3,{id:"rounded-with-shadow",children:"Rounded with Shadow"}),`
`,n.jsx(d.p,{children:"角丸と影を適用したデザインです。"}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(d.h3,{id:"custom-controls",children:"Custom Controls"}),`
`,n.jsx(d.p,{children:"wimui独自のカスタムコントロールUIを適用した状態です。"}),`
`,n.jsx(s,{of:a}),`
`,n.jsx(d.h3,{id:"full-features-全部盛り",children:"Full Features (全部盛り)"}),`
`,n.jsx(d.p,{children:"すべての高度な機能（プレイリスト、アスペクト比、画質、レジューム再生、ショートカット等）を有効にした完全なプレイヤーです。"}),`
`,n.jsx(s,{of:p})]})}function b(e={}){const{wrapper:d}={...i(),...e.components};return d?n.jsx(d,{...e,children:n.jsx(r,{...e})}):r(e)}export{b as default};
