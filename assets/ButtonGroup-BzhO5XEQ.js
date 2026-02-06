import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-U8m5ka5A.js";import{M as t,T as c,S as l,D as j,C as o,a as x}from"./index-C3D4bTI_.js";import{B as h,M as i,L as p,S as a,J as m,a as u}from"./ButtonGroup.stories-B4pKFSBo.js";import"./T-C2q2NTjp.js";import"./iframe-B04ys94s.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCEe6Z-X.js";import"./index-Cja1cYgI.js";import"./index-Df8W1tYT.js";import"./index-44n1a-DB.js";import"./Button-Bm5K6Fxw.js";import"./Icon-DVnLC_qj.js";import"./useTranslation-D6Fs1ZA4.js";function s(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...d(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:h}),`
`,r.jsx(c,{}),`
`,r.jsx(l,{children:r.jsx(n.p,{children:"ButtonGroupコンポーネントは、複数のボタンをグループ化して表示するために使用します。"})}),`
`,r.jsx(j,{}),`
`,r.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,r.jsxs(n.p,{children:["ボタンを横並びに配置します。",r.jsx(n.code,{children:"gap"}),"プロパティでボタン間の間隔を調整できます。"]}),`
`,r.jsx(o,{of:i}),`
`,r.jsx(n.h2,{id:"サイズ展開",children:"サイズ展開"}),`
`,r.jsx(n.p,{children:"Large, Medium, Smallのボタンをそれぞれ配置した場合の例です。"}),`
`,r.jsx(n.h3,{id:"large",children:"Large"}),`
`,r.jsx(o,{of:p}),`
`,r.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,r.jsx(o,{of:i}),`
`,r.jsx(n.h3,{id:"small",children:"Small"}),`
`,r.jsx(o,{of:a}),`
`,r.jsx(n.h2,{id:"結合モード",children:"結合モード"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"joined"}),"プロパティを",r.jsx(n.code,{children:"true"}),`に設定すると、ボタンが隙間なく結合されます。\r
このモードでは、中間のボタンの角丸が削除され、一体感のあるデザインになります。`]}),`
`,r.jsx(o,{of:m}),`
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
`,r.jsx(o,{of:u}),`
`,r.jsx(x,{})]})}function v(e={}){const{wrapper:n}={...d(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(s,{...e})}):s(e)}export{v as default};
