import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-D6M0I-hR.js";import{M as d,C as t,a as s}from"./index-DNBoL3db.js";import{A as c,D as l,W as h,R as a}from"./Audio.stories-DDGlyomH.js";import"./iframe-CUgX2AQw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQrUt2FS.js";import"./index-WOrazOO0.js";import"./index-CIGDfiga.js";import"./index-Bk2klVGZ.js";function i(r){const o={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Component/Media/Audio",of:c}),`
`,n.jsx(o.h1,{id:"audio",children:"Audio"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"Audio"}),` コンポーネントは、音声ファイルを簡単に再生するためのコンポーネントです。\r
自動再生、ループ、コントロールの表示切り替え、角丸、影などのスタイリングをサポートしています。`]}),`
`,n.jsx(o.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"直感的なコントロール"}),": ",n.jsx(o.code,{children:"controls"})," プロパティで再生UIの表示/非表示を切り替え可能。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"自動再生とループ"}),": ",n.jsx(o.code,{children:"autoPlay"}),"、",n.jsx(o.code,{children:"loop"}),"、",n.jsx(o.code,{children:"muted"})," を組み合わせてBGMなどの演出に対応。"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"スタイリング"}),": ",n.jsx(o.code,{children:"radius"}),"、",n.jsx(o.code,{children:"shadow"}),"、",n.jsx(o.code,{children:"border"})," プロパティでデザインに合わせた外観に変更可能。"]}),`
`]}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import { Audio } from "./Audio";\r
\r
<Audio\r
  src="path/to/audio.mp3"\r
  controls\r
  radius="full"\r
  caption="音声サンプルの説明"\r
/>
`})}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsxs(o.p,{children:[`[!TIP]\r
ブラウザのネイティブオーディオプレイヤーは一般的にピル形状（角丸50%）であるため、`,n.jsx(o.code,{children:'radius="full"'})," を指定するとシャドウやボーダーが最も美しく表示されます。"]}),`
`]}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{}),`
`,n.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(o.h3,{id:"default",children:"Default"}),`
`,n.jsx(o.p,{children:"標準的なオーディオプレイヤーです。"}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(o.h3,{id:"with-caption",children:"With Caption"}),`
`,n.jsx(o.p,{children:"キャプションを表示した状態です。"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(o.h3,{id:"rounded-with-shadow",children:"Rounded with Shadow"}),`
`,n.jsx(o.p,{children:"角丸と影を適用したデザインです。"}),`
`,n.jsx(s,{of:a})]})}function w(r={}){const{wrapper:o}={...e(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(i,{...r})}):i(r)}export{w as default};
