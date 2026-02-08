import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-COgBPo70.js";import{M as d,C as e,a as l}from"./index-CXa1I-HV.js";import{V as t,P as c,W as h}from"./VisuallyHidden.stories-DxL6O2Jj.js";import"./iframe-CQ0Ubeji.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaxEcj4W.js";import"./index-DQ99pi5X.js";import"./index-i0Uscrie.js";import"./index-BSzPpKL7.js";import"./index-CgHfhZWB.js";import"./index-BjLbaRvQ.js";function r(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:t}),`
`,n.jsx(i.h1,{id:"visuallyhidden",children:"VisuallyHidden"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"VisuallyHidden"})," は、視覚的にはコンテンツを非表示にしつつ、スクリーンリーダーなどの補助技術にはその情報を伝えたい場合に使用するユーティリティコンポーネントです。"]}),`
`,n.jsx(i.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,n.jsx(i.p,{children:"このコンポーネントで囲まれた内容は、画面上には表示されませんが、HTML構造としては存在し続けます。"}),`
`,n.jsx(e,{of:c}),`
`,n.jsx(i.h2,{id:"ユースケース",children:"ユースケース"}),`
`,n.jsx(i.h3,{id:"ボタンのアクセシブルなラベル",children:"ボタンのアクセシブルなラベル"}),`
`,n.jsx(i.p,{children:"アイコンのみのボタンなど、視覚的に意味が伝わるものの、テキストラベルが必要な場合に使用します。"}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(i.h2,{id:"アクセシビリティの確認方法",children:"アクセシビリティの確認方法"}),`
`,n.jsxs(i.p,{children:["Chrome DevTools を使用して、",n.jsx(i.code,{children:"VisuallyHidden"})," コンポーネントの内容がスクリーンリーダーでどのように認識されるかを確認できます。"]}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"要素の検証"}),": ブラウザで ",n.jsx(i.code,{children:"VisuallyHidden"})," を使用している箇所を右クリックし、「検証」を選択して DevTools を開きます。"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"アクセシビリティツリーへの切り替え"}),": ",n.jsx(i.code,{children:"Elements"})," パネルの右上にある ",n.jsx(i.strong,{children:"「Switch to Accessibility Tree view」"})," ボタン（人型のアイコン）をクリックします。これにより、DOMツリーがスクリーンリーダー等が解釈するアクセシビリティツリー表示に切り替わります。"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"内容の確認"}),": ツリーの中から対象の要素を選択します。右側の ",n.jsx(i.code,{children:"Accessibility"})," タブ（見当たらない場合は ",n.jsx(i.code,{children:">>"})," から選択）の ",n.jsx(i.code,{children:"Computed Properties"})," セクションなどで、",n.jsx(i.code,{children:'Name: "..."'})," として表示されている内容が、実際に読み上げられるテキストです。"]}),`
`]}),`
`,n.jsx(i.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{})]})}function H(s={}){const{wrapper:i}={...o(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(r,{...s})}):r(s)}export{H as default};
