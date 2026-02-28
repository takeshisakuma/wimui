import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-DFNKA_V7.js";import{M as i,T as c,C as s,a as t}from"./blocks-CX2MuiOa.js";import{S as d,D as h,H as x,B as j,W as a}from"./ScrollArea.stories-CXFsYVe7.js";import"./iframe-CSwZKKgh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D91GK5yZ.js";import"./index-CEGjitDu.js";import"./index-DCFmpl79.js";import"./index-DDm-SkYv.js";import"./index-DV843YsD.js";import"./useTranslation-CnASG-hp.js";function o(e){const r={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:d}),`
`,n.jsx(c,{}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(r.p,{children:"コンテンツをスクロール可能なエリア内に表示するために使用されます。"})}),`
`,n.jsx(r.h2,{id:"使用法",children:"使用法"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { ScrollArea } from "./ScrollArea";
import { T } from "../T";

<ScrollArea maxHeight="10rem">
  <p>長いコンテンツ...</p>
</ScrollArea>;
`})}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(t,{}),`
`,n.jsx(r.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsx(r.h3,{id:"横スクロール-horizontal-scroll",children:"横スクロール (Horizontal Scroll)"}),`
`,n.jsx(s,{of:x}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsxs(r.p,{children:[`Note
`,n.jsx(r.code,{children:"ScrollArea"})," は ",n.jsx(r.code,{children:"scrollAxis"})," プロパティによって ",n.jsx(r.code,{children:"x"}),"（横）、",n.jsx(r.code,{children:"y"}),"（縦）、または ",n.jsx(r.code,{children:"both"}),`（両方）のスクロール方向を制御できます。
広いテーブルや画像を表示するなど、横方向のスペースが必要な場合には `,n.jsx(r.code,{children:'scrollAxis="x"'})," または ",n.jsx(r.code,{children:'"both"'}),` を指定して横スクロールを有効にしてください。
デフォルトは `,n.jsx(r.code,{children:"y"}),"（縦方向のみ）となっています。"]}),`
`]}),`
`,n.jsx(r.h3,{id:"両軸スクロール-both-axes",children:"両軸スクロール (Both Axes)"}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(r.p,{children:"縦横同時にスクロールが必要なケースとして、以下のようなコンテンツが挙げられます。"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ユースケース"}),n.jsx("th",{children:"内容"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"スプレッドシートや大きな表"})}),n.jsx("td",{children:"列数と行数がともに多い場合。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"地図や巨大な画像"})}),n.jsx("td",{children:"座標を自由に移動する必要がある場合。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"ダイアグラムや設計図"})}),n.jsx("td",{children:"全体像が画面に収まらない複雑な図解。"})]})]})]}),`
`,n.jsxs(r.p,{children:["通常の文章やシンプルなリストでは、可読性を保つために縦方向（",n.jsx(r.code,{children:"y"}),"）のみとするのが一般的です。"]}),`
`,n.jsx(r.h3,{id:"子要素を持つ場合-with-children",children:"子要素を持つ場合 (With Children)"}),`
`,n.jsx(s,{of:a})]})}function H(e={}){const{wrapper:r}={...l(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(o,{...e})}):o(e)}export{H as default};
