import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-ASF-mazP.js";import{M as l,T as c,C as s,a as t}from"./index-B25bep_z.js";import{S as d,D as h,H as x,B as j,W as a}from"./ScrollArea.stories-Dc4Nu0kC.js";import"./iframe-DLp3Jz1D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSdy6QgF.js";import"./index-DBODvmcM.js";import"./index-CSblWT8I.js";import"./index-B17ZCLRR.js";import"./index-CW_-86og.js";import"./index-DUAuVduf.js";import"./useTranslation-BDUJJ6MV.js";function o(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(l,{of:d}),`
`,r.jsx(c,{}),`
`,r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:r.jsx(n.p,{children:"コンテンツをスクロール可能なエリア内に表示するために使用されます。"})}),`
`,r.jsx(n.h2,{id:"使用法",children:"使用法"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`import { ScrollArea } from "./ScrollArea";
import { T } from "../T";

<ScrollArea maxHeight="10rem">
  <p>長いコンテンツ...</p>
</ScrollArea>;
`})}),`
`,r.jsx(s,{of:h}),`
`,r.jsx(t,{}),`
`,r.jsx(n.h2,{id:"バリエーション",children:"バリエーション"}),`
`,r.jsx(n.h3,{id:"横スクロール-horizontal-scroll",children:"横スクロール (Horizontal Scroll)"}),`
`,r.jsx(s,{of:x}),`
`,r.jsxs(n.blockquote,{children:[`
`,r.jsxs(n.p,{children:[`Note
`,r.jsx(n.code,{children:"ScrollArea"})," は ",r.jsx(n.code,{children:"scrollAxis"})," プロパティによって ",r.jsx(n.code,{children:"x"}),"（横）、",r.jsx(n.code,{children:"y"}),"（縦）、または ",r.jsx(n.code,{children:"both"}),`（両方）のスクロール方向を制御できます。
広いテーブルや画像を表示するなど、横方向のスペースが必要な場合には `,r.jsx(n.code,{children:'scrollAxis="x"'})," または ",r.jsx(n.code,{children:'"both"'}),` を指定して横スクロールを有効にしてください。
デフォルトは `,r.jsx(n.code,{children:"y"}),"（縦方向のみ）となっています。"]}),`
`]}),`
`,r.jsx(n.h3,{id:"両軸スクロール-both-axes",children:"両軸スクロール (Both Axes)"}),`
`,r.jsx(s,{of:j}),`
`,r.jsx(n.p,{children:"縦横同時にスクロールが必要なケースとして、以下のようなコンテンツが挙げられます。"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ユースケース"}),r.jsx("th",{children:"内容"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"スプレッドシートや大きな表"})}),r.jsx("td",{children:"列数と行数がともに多い場合。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"地図や巨大な画像"})}),r.jsx("td",{children:"座標を自由に移動する必要がある場合。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:"ダイアグラムや設計図"})}),r.jsx("td",{children:"全体像が画面に収まらない複雑な図解。"})]})]})]}),`
`,r.jsxs(n.p,{children:["通常の文章やシンプルなリストでは、可読性を保つために縦方向（",r.jsx(n.code,{children:"y"}),"）のみとするのが一般的です。"]}),`
`,r.jsx(n.h3,{id:"子要素を持つ場合-with-children",children:"子要素を持つ場合 (With Children)"}),`
`,r.jsx(s,{of:a})]})}function z(e={}){const{wrapper:n}={...i(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(o,{...e})}):o(e)}export{z as default};
