import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-WtwRskhy.js";import{M as d,C as e,a as l}from"./blocks-DVQndDHi.js";import{V as c,P as t,W as h}from"./VisuallyHidden.stories-DblgCuUn.js";import"./iframe-BF6ISSNM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DOjwJZwD.js";import"./index-DAHqHjfk.js";import"./index-CailHeRG.js";import"./index-SQWmBR3Y.js";import"./index-BJP38wbw.js";function r(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:c}),`
`,n.jsx(s.h1,{id:"visuallyhidden",children:"VisuallyHidden"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"VisuallyHidden"})," は、視覚的にはコンテンツを非表示にしつつ、スクリーンリーダーなどの補助技術にはその情報を伝えたい場合に使用するユーティリティコンポーネントです。"]}),`
`,n.jsx(s.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsx(s.p,{children:"このコンポーネントで囲まれた内容は、画面上には表示されませんが、HTML構造としては存在し続けます。"}),`
`,n.jsx(e,{of:t}),`
`,n.jsx(s.h2,{id:"ユースケース",children:"ユースケース"}),`
`,n.jsx(s.h3,{id:"ボタンのアクセシブルなラベル",children:"ボタンのアクセシブルなラベル"}),`
`,n.jsx(s.p,{children:"アイコンのみのボタンなど、視覚的に意味が伝わるものの、テキストラベルが必要な場合に使用します。"}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(s.h2,{id:"アクセシビリティの確認方法",children:"アクセシビリティの確認方法"}),`
`,n.jsxs(s.p,{children:["Chrome DevTools を使用して、",n.jsx(s.code,{children:"VisuallyHidden"})," コンポーネントの内容がスクリーンリーダーでどのように認識されるかを確認できます。"]}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"要素の検証"}),": ブラウザで ",n.jsx(s.code,{children:"VisuallyHidden"})," を使用している箇所を右クリックし、「検証」を選択して DevTools を開きます。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"アクセシビリティツリーへの切り替え"}),": ",n.jsx(s.code,{children:"Elements"})," パネルの右上にある ",n.jsx(s.strong,{children:"「Switch to Accessibility Tree view」"})," ボタン（人型のアイコン）をクリックします。これにより、DOMツリーがスクリーンリーダー等が解釈するアクセシビリティツリー表示に切り替わります。"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"内容の確認"}),": ツリーの中から対象の要素を選択します。右側の ",n.jsx(s.code,{children:"Accessibility"})," タブ（見当たらない場合は ",n.jsx(s.code,{children:">>"})," から選択）の ",n.jsx(s.code,{children:"Computed Properties"})," セクションなどで、",n.jsx(s.code,{children:'Name: "..."'})," として表示されている内容が、実際に読み上げられるテキストです。"]}),`
`]}),`
`,n.jsx(s.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{})]})}function D(i={}){const{wrapper:s}={...o(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(r,{...i})}):r(i)}export{D as default};
