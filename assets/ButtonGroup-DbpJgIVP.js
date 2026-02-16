import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Ck-gB__-.js";import{M as t,T as c,D as l,C as i,a as p}from"./index-CSevX7wz.js";import{B as x,M as o,L as j,S as h,J as a,a as m}from"./ButtonGroup.stories-BYqEkPE8.js";import"./T-CCQl6naC.js";import"./iframe-4bM1vrrp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-PwYTsuqL.js";import"./index-BfRII9fN.js";import"./index-DuJtemmP.js";import"./index-45a-nKAS.js";import"./index-B9hN9QaI.js";import"./index-wOw2goDe.js";import"./Button-CENL4XOW.js";import"./Icon-C-t3T6MZ.js";import"./useTranslation-BFrfyqZo.js";function s(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",...d(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:x}),`
`,r.jsx(c,{}),`
`,r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:r.jsx(n.p,{children:"ButtonGroupコンポーネントは、複数のボタンをグループ化して表示するために使用します。"})}),`
`,r.jsx(l,{}),`
`,r.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,r.jsxs(n.p,{children:["ボタンを横並びに配置します。",r.jsx(n.code,{children:"gap"}),"プロパティでボタン間の間隔を調整できます。"]}),`
`,r.jsx(i,{of:o}),`
`,r.jsx(n.h2,{id:"サイズ展開",children:"サイズ展開"}),`
`,r.jsx(n.p,{children:"Large, Medium, Smallのボタンをそれぞれ配置した場合の例です。"}),`
`,r.jsx(n.h3,{id:"large",children:"Large"}),`
`,r.jsx(i,{of:j}),`
`,r.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,r.jsx(i,{of:o}),`
`,r.jsx(n.h3,{id:"small",children:"Small"}),`
`,r.jsx(i,{of:h}),`
`,r.jsx(n.h2,{id:"結合モード",children:"結合モード"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"joined"}),"プロパティを",r.jsx(n.code,{children:"true"}),`に設定すると、ボタンが隙間なく結合されます。\r
このモードでは、中間のボタンの角丸が削除され、一体感のあるデザインになります。`]}),`
`,r.jsx(i,{of:a}),`
`,r.jsx(n.h3,{id:"優先度の強制-priority-override",children:"優先度の強制 (Priority Override)"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"priority"})," プロパティを指定することで、グループ内のすべてのボタンの ",r.jsx(n.code,{children:"priority"}),` を統一できます。\r
特に `,r.jsx(n.code,{children:"joined"})," モードを使用する場合、異なる優先度のボタンが混在するとデザインが崩れる可能性があるため、このプロパティを使用して統一することを推奨します。"]}),`
`,r.jsxs(n.blockquote,{children:[`
`,r.jsxs(n.p,{children:[`[!IMPORTANT]\r
UX上の注意点\r
UIデザインの原則として、1つの画面（または1つのコンテキスト）におけるプライマリボタンは原則として1つのみにすることが推奨されます。\r
`,r.jsx(n.code,{children:'priority="primary"'})," を指定して複数のボタンを並べると、ユーザーがどの操作を優先すべきか迷う原因（認知負荷の増大）になります。"]}),`
`,r.jsxs(n.p,{children:["グループ全体の優先度を統一する場合は、通常 ",r.jsx(n.code,{children:"secondary"})," や ",r.jsx(n.code,{children:"tertiary"})," を選択することを推奨します。",r.jsx(n.code,{children:"primary"})," への統一は、技術的に可能ですが、慎重に検討してください。"]}),`
`]}),`
`,r.jsx(i,{of:m}),`
`,r.jsx(p,{})]})}function B(e={}){const{wrapper:n}={...d(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(s,{...e})}):s(e)}export{B as default};
