import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-CNevrb60.js";import{M as d,T as c,D as l,C as e,a as x}from"./index-pOEgHDjg.js";import{B as p,M as i,L as j,S as h,J as a,a as m}from"./ButtonGroup.stories-BFZyy8yb.js";import"./T-B6tHb3ID.js";import"./iframe-BRQWL27F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CsL2SFOk.js";import"./index-CYjtzbAX.js";import"./index-DLkabaxQ.js";import"./index-CvX-948d.js";import"./index-CNxpXZFm.js";import"./index-DWoaxWMs.js";import"./Button-CRTzFfQx.js";import"./Icon-CpAaWSX6.js";import"./useTranslation-C2ZSqrVI.js";function s(o){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...t(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(d,{of:p}),`
`,r.jsx(c,{}),`
`,r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:r.jsx(n.p,{children:"ButtonGroupコンポーネントは、複数のボタンをグループ化して表示するために使用します。"})}),`
`,r.jsx(l,{}),`
`,r.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,r.jsxs(n.p,{children:["ボタンを横並びに配置します。",r.jsx(n.code,{children:"gap"}),"プロパティでボタン間の間隔を調整できます。"]}),`
`,r.jsx(e,{of:i}),`
`,r.jsx(n.h2,{id:"サイズ展開",children:"サイズ展開"}),`
`,r.jsx(n.p,{children:"Large, Medium, Smallのボタンをそれぞれ配置した場合の例です。"}),`
`,r.jsx(n.h3,{id:"large",children:"Large"}),`
`,r.jsx(e,{of:j}),`
`,r.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,r.jsx(e,{of:i}),`
`,r.jsx(n.h3,{id:"small",children:"Small"}),`
`,r.jsx(e,{of:h}),`
`,r.jsx(n.h2,{id:"結合モード",children:"結合モード"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"joined"}),"プロパティを",r.jsx(n.code,{children:"true"}),`に設定すると、ボタンが隙間なく結合されます。\r
このモードでは、中間のボタンの角丸が削除され、一体感のあるデザインになります。`]}),`
`,r.jsx(e,{of:a}),`
`,r.jsx(n.h3,{id:"優先度の強制-priority-override",children:"優先度の強制 (Priority Override)"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"priority"})," プロパティを指定することで、グループ内のすべてのボタンの ",r.jsx(n.code,{children:"priority"}),` を統一できます。\r
特に `,r.jsx(n.code,{children:"joined"})," モードを使用する場合、異なる優先度のボタンが混在するとデザインが崩れる可能性があるため、このプロパティを使用して統一することを推奨します。"]}),`
`,r.jsxs(n.blockquote,{children:[`
`,r.jsxs(n.p,{children:[`[!IMPORTANT]\r
`,r.jsx(n.strong,{children:"UX上の注意点"}),`\r
UIデザインの原則として、1つの画面（または1つのコンテキスト）におけるプライマリボタンは原則として`,r.jsx(n.strong,{children:"1つのみ"}),`にすることが推奨されます。\r
`,r.jsx(n.code,{children:'priority="primary"'})," を指定して複数のボタンを並べると、ユーザーがどの操作を優先すべきか迷う原因（認知負荷の増大）になります。"]}),`
`,r.jsxs(n.p,{children:["グループ全体の優先度を統一する場合は、通常 ",r.jsx(n.code,{children:"secondary"})," や ",r.jsx(n.code,{children:"tertiary"})," を選択することを推奨します。",r.jsx(n.code,{children:"primary"})," への統一は、技術的に可能ですが、慎重に検討してください。"]}),`
`]}),`
`,r.jsx(e,{of:m}),`
`,r.jsx(x,{})]})}function B(o={}){const{wrapper:n}={...t(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(s,{...o})}):s(o)}export{B as default};
