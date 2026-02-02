import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-koxbnfGJ.js";import{M as i,C as t,a as r}from"./index-CJvoQ_29.js";import{V as l,D as c,A as h,R as a}from"./Video.stories-Bihjk1mI.js";import"./iframe-DYMd45fP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_E6B0RD.js";import"./index-DPAI9xRy.js";import"./index-BtQMvV2I.js";import"./index-CtDkoaWr.js";function d(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/Media/Video",of:l}),`
`,n.jsx(e.h1,{id:"video",children:"Video"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Video"}),` コンポーネントは、動画ファイルを簡単に埋め込むためのコンポーネントです。\r
自動再生、ループ、コントロールの表示切り替え、角丸、影などのスタイリングをサポートしています。`]}),`
`,n.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"直感的なコントロール"}),": ",n.jsx(e.code,{children:"controls"})," プロパティで再生UIの表示/非表示を切り替え可能。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"自動再生とループ"}),": ",n.jsx(e.code,{children:"autoPlay"}),"、",n.jsx(e.code,{children:"loop"}),"、",n.jsx(e.code,{children:"muted"})," を組み合わせて背景動画などの演出に対応。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"スタイリング"}),": ",n.jsx(e.code,{children:"radius"}),"、",n.jsx(e.code,{children:"shadow"}),"、",n.jsx(e.code,{children:"border"})," プロパティでデザインに合わせた外観に変更可能。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Video } from "./Video";\r
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
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsx(e.p,{children:"標準的なビデオプレイヤーです。"}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(e.h3,{id:"autoplay--loop",children:"AutoPlay & Loop"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"autoPlay"}),"、",n.jsx(e.code,{children:"muted"}),"、",n.jsx(e.code,{children:"loop"})," を有効にした状態です。"]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h3,{id:"rounded-with-shadow",children:"Rounded with Shadow"}),`
`,n.jsx(e.p,{children:"角丸と影を適用したデザインです。"}),`
`,n.jsx(r,{of:a})]})}function C(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(d,{...o})}):d(o)}export{C as default};
