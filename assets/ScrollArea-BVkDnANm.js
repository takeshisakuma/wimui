import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-BQdrkZ3L.js";import{M as i,T as c,S as t,C as e,a as d}from"./index-DJaZRynf.js";import{S as h,D as x,H as j,B as a,W as m}from"./ScrollArea.stories-COba4VTe.js";import"./iframe-B3-mQT4Z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-6gXNu-eX.js";import"./index-Bz9ZVmK6.js";import"./index-DRtjRGIh.js";import"./index-BreWRY4j.js";import"./index-BeIutGv7.js";import"./index-DGne___x.js";import"./useTranslation-Bt8cefeD.js";function s(o){const r={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:h}),`
`,n.jsx(c,{}),`
`,n.jsx(t,{children:n.jsx(r.p,{children:"コンテンツをスクロール可能なエリア内に表示するために使用されます。"})}),`
`,n.jsx(r.h2,{id:"使用法",children:"使用法"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { ScrollArea } from './ScrollArea';\r
\r
<ScrollArea maxHeight="10rem">\r
  <p>長いコンテンツ...</p>\r
</ScrollArea>
`})}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(d,{}),`
`,n.jsx(r.h2,{id:"バリエーション",children:"バリエーション"}),`
`,n.jsx(r.h3,{id:"横スクロール-horizontal-scroll",children:"横スクロール (Horizontal Scroll)"}),`
`,n.jsx(e,{of:j}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Note"}),`\r
`,n.jsx(r.code,{children:"ScrollArea"})," は ",n.jsx(r.code,{children:"scrollAxis"})," プロパティによって ",n.jsx(r.code,{children:"x"}),"（横）、",n.jsx(r.code,{children:"y"}),"（縦）、または ",n.jsx(r.code,{children:"both"}),`（両方）のスクロール方向を制御できます。\r
広いテーブルや画像を表示するなど、横方向のスペースが必要な場合には `,n.jsx(r.code,{children:'scrollAxis="x"'})," または ",n.jsx(r.code,{children:'"both"'}),` を指定して横スクロールを有効にしてください。\r
デフォルトは `,n.jsx(r.code,{children:"y"}),"（縦方向のみ）となっています。"]}),`
`]}),`
`,n.jsx(r.h3,{id:"両軸スクロール-both-axes",children:"両軸スクロール (Both Axes)"}),`
`,n.jsx(e,{of:a}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Note"}),`\r
縦横同時にスクロールが必要なケースとして、以下のようなコンテンツが挙げられます。`]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"スプレッドシートや大きな表"}),": 列数と行数がともに多い場合。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"地図や巨大な画像"}),": 座標を自由に移動する必要がある場合。"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"ダイアグラムや設計図"}),": 全体像が画面に収まらない複雑な図解。"]}),`
`]}),`
`,n.jsxs(r.p,{children:["通常の文章やシンプルなリストでは、可読性を保つために縦方向（",n.jsx(r.code,{children:"y"}),"）のみとするのが一般的です。"]}),`
`]}),`
`,n.jsx(r.h3,{id:"子要素を持つ場合-with-children",children:"子要素を持つ場合 (With Children)"}),`
`,n.jsx(e,{of:m})]})}function H(o={}){const{wrapper:r}={...l(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(s,{...o})}):s(o)}export{H as default};
