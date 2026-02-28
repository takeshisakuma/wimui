import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-B2K_e2w9.js";import{M as t,T as c,D as l,C as i,a as x}from"./blocks-Co24uSwP.js";import{B as p,M as o,L as j,S as h,J as a,a as m}from"./ButtonGroup.stories-CZuEcoP3.js";import"./T-CNQyDgm7.js";import"./iframe-BN-4pijT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDyAH9Gx.js";import"./index-CXYa8rZT.js";import"./index-BTwjK_Rj.js";import"./index-hqaaz1Nb.js";import"./index-CubViWzO.js";import"./Button-Cw-0rNsx.js";import"./Icon-Bl9Iq_fA.js";import"./useTranslation-1LeyJRh3.js";function s(e){const r={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:p}),`
`,n.jsx(c,{}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(r.p,{children:"ButtonGroupコンポーネントは、複数のボタンをグループ化して表示するために使用します。"})}),`
`,n.jsx(l,{}),`
`,n.jsx(r.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsxs(r.p,{children:["ボタンを横並びに配置します。",n.jsx(r.code,{children:"gap"}),"プロパティでボタン間の間隔を調整できます。"]}),`
`,n.jsx(i,{of:o}),`
`,n.jsx(r.h2,{id:"サイズ展開",children:"サイズ展開"}),`
`,n.jsx(r.p,{children:"Large, Medium, Smallのボタンをそれぞれ配置した場合の例です。"}),`
`,n.jsx(r.h3,{id:"large",children:"Large"}),`
`,n.jsx(i,{of:j}),`
`,n.jsx(r.h3,{id:"medium",children:"Medium"}),`
`,n.jsx(i,{of:o}),`
`,n.jsx(r.h3,{id:"small",children:"Small"}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(r.h2,{id:"結合モード",children:"結合モード"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"joined"}),"プロパティを",n.jsx(r.code,{children:"true"}),`に設定すると、ボタンが隙間なく結合されます。
このモードでは、中間のボタンの角丸が削除され、一体感のあるデザインになります。`]}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(r.h3,{id:"優先度の強制-priority-override",children:"優先度の強制 (Priority Override)"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"priority"})," プロパティを指定することで、グループ内のすべてのボタンの ",n.jsx(r.code,{children:"priority"}),` を統一できます。
特に `,n.jsx(r.code,{children:"joined"})," モードを使用する場合、異なる優先度のボタンが混在するとデザインが崩れる可能性があるため、このプロパティを使用して統一することを推奨します。"]}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsxs(r.p,{children:[`[!IMPORTANT]
UX上の注意点
UIデザインの原則として、1つの画面（または1つのコンテキスト）におけるプライマリボタンは原則として1つのみにすることが推奨されます。
`,n.jsx(r.code,{children:'priority="primary"'})," を指定して複数のボタンを並べると、ユーザーがどの操作を優先すべきか迷う原因（認知負荷の増大）になります。"]}),`
`,n.jsxs(r.p,{children:["グループ全体の優先度を統一する場合は、通常 ",n.jsx(r.code,{children:"secondary"})," や ",n.jsx(r.code,{children:"tertiary"})," を選択することを推奨します。",n.jsx(r.code,{children:"primary"})," への統一は、技術的に可能ですが、慎重に検討してください。"]}),`
`]}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(x,{})]})}function v(e={}){const{wrapper:r}={...d(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{v as default};
