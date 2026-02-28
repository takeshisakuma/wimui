import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DFNKA_V7.js";import{M as t,C as i,a as o}from"./blocks-CX2MuiOa.js";import{V as c,P as l,W as h}from"./VisuallyHidden.stories--YkqcI0p.js";import{T as x}from"./T-BxJRC_oq.js";import"./iframe-CSwZKKgh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D91GK5yZ.js";import"./index-CEGjitDu.js";import"./index-DCFmpl79.js";import"./index-DDm-SkYv.js";import"./index-DV843YsD.js";import"./useTranslation-CnASG-hp.js";function r(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(s.h1,{id:"visuallyhidden",children:"VisuallyHidden"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(x,{k:"doc_visuallyhidden_title"})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"VisuallyHidden"})," は、視覚的にはコンテンツを非表示にしつつ、スクリーンリーダーなどの補助技術にはその情報を伝えたい場合に使用するユーティリティコンポーネントです。"]}),`
`,e.jsx(s.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,e.jsx(s.p,{children:"このコンポーネントで囲まれた内容は、画面上には表示されませんが、HTML構造としては存在し続けます。"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(s.h2,{id:"ユースケース",children:"ユースケース"}),`
`,e.jsx(s.h3,{id:"ボタンのアクセシブルなラベル",children:"ボタンのアクセシブルなラベル"}),`
`,e.jsx(s.p,{children:"アイコンのみのボタンなど、視覚的に意味が伝わるものの、テキストラベルが必要な場合に使用します。"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h2,{id:"アクセシビリティの確認方法",children:"アクセシビリティの確認方法"}),`
`,e.jsxs(s.p,{children:["Chrome DevTools を使用して、",e.jsx(s.code,{children:"VisuallyHidden"})," コンポーネントの内容がスクリーンリーダーでどのように認識されるかを確認できます。"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ステップ"}),e.jsx("th",{children:"操作内容"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"1. 要素の検証"})}),e.jsxs("td",{children:["ブラウザで ",e.jsx("code",{children:"VisuallyHidden"})," を使用している箇所を右クリックし、「検証」を選択して DevTools を開きます。"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"2. アクセシビリティツリーへの切り替え"})}),e.jsxs("td",{children:[e.jsx("code",{children:"Elements"})," パネルの右上にある 「Switch to Accessibility Tree view」 ボタン（人型のアイコン）をクリックします。これにより、DOMツリーがスクリーンリーダー等が解釈するアクセシビリティツリー表示に切り替わります。"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"3. 内容の確認"})}),e.jsxs("td",{children:["ツリーの中から対象の要素を選択します。右側の ",e.jsx("code",{children:"Accessibility"})," タブ（見当たらない場合は ",e.jsx("code",{children:">>"})," から選択）の ",e.jsx("code",{children:"Computed Properties"})," セクションなどで、",e.jsx("code",{children:'Name: "..."'})," として表示されている内容が、実際に読み上げられるテキストです。"]})]})]})]}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{})]})}function V(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{V as default};
