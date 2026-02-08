import{j as r}from"./react-D-G-yZ1o.js";import{useMDXComponents as t}from"./@mdx-js-yW0sD_pK.js";import{M as d,T as c,k as p,D as j,i,j as l}from"./@storybook-esNwf5LZ.js";import{B as x,M as e,L as m,S as h,J as a,a as u}from"./ButtonGroup.stories-1z7LxWRV.js";import"./T-DBb1g2P3.js";import"../vite-inject-mocker-entry.js";import"./semver-MwBmqdgB.js";import"./react-dom-DgMH5qYG.js";import"./scheduler-7OC5HNn7.js";import"./use-sync-external-store-Crwep2Tv.js";import"./ts-dedent-DrFu-skq.js";import"./prop-types-CamVAYe7.js";import"./Button-DwpyJQGL.js";import"./Icon-CjB8TZ2o.js";import"./react-i18next-BbhreOBd.js";import"./i18next-DYT68AY6.js";import"./iframe-BTZ661MR.js";import"./storybook-react-i18next-BWtkS77w.js";import"./storybook-i18n-B72K_iCP.js";import"./i18next-browser-languagedetector-OJKzRF51.js";import"./i18next-http-backend-BMOHJU-c.js";function s(o){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",...t(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(d,{of:x}),`
`,r.jsx(c,{}),`
`,r.jsx(p,{children:r.jsx(n.p,{children:"ButtonGroupコンポーネントは、複数のボタンをグループ化して表示するために使用します。"})}),`
`,r.jsx(j,{}),`
`,r.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,r.jsxs(n.p,{children:["ボタンを横並びに配置します。",r.jsx(n.code,{children:"gap"}),"プロパティでボタン間の間隔を調整できます。"]}),`
`,r.jsx(i,{of:e}),`
`,r.jsx(n.h2,{id:"サイズ展開",children:"サイズ展開"}),`
`,r.jsx(n.p,{children:"Large, Medium, Smallのボタンをそれぞれ配置した場合の例です。"}),`
`,r.jsx(n.h3,{id:"large",children:"Large"}),`
`,r.jsx(i,{of:m}),`
`,r.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,r.jsx(i,{of:e}),`
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
`,r.jsx(n.strong,{children:"UX上の注意点"}),`\r
UIデザインの原則として、1つの画面（または1つのコンテキスト）におけるプライマリボタンは原則として`,r.jsx(n.strong,{children:"1つのみ"}),`にすることが推奨されます。\r
`,r.jsx(n.code,{children:'priority="primary"'})," を指定して複数のボタンを並べると、ユーザーがどの操作を優先すべきか迷う原因（認知負荷の増大）になります。"]}),`
`,r.jsxs(n.p,{children:["グループ全体の優先度を統一する場合は、通常 ",r.jsx(n.code,{children:"secondary"})," や ",r.jsx(n.code,{children:"tertiary"})," を選択することを推奨します。",r.jsx(n.code,{children:"primary"})," への統一は、技術的に可能ですが、慎重に検討してください。"]}),`
`]}),`
`,r.jsx(i,{of:u}),`
`,r.jsx(l,{})]})}function U(o={}){const{wrapper:n}={...t(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(s,{...o})}):s(o)}export{U as default};
