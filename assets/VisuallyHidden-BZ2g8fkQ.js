import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dsz5Chki.js";import{M as t,C as n,a as o}from"./index-DBpWV4oo.js";import{V as c,P as l,W as h}from"./VisuallyHidden.stories-BWinSfor.js";import{T as x}from"./T-CkEGlpbz.js";import"./iframe-DY0V2adl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1ZCeEV1.js";import"./index-CRt-iUiP.js";import"./index-CQI1ztNZ.js";import"./index-Cw2hhaG0.js";import"./index-D4dD7-9v.js";import"./index-qsBB_Z-V.js";import"./useTranslation-BxNSKkfN.js";function r(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(s.h1,{id:"visuallyhidden",children:"VisuallyHidden"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(x,{k:"doc_visuallyhidden_title"})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"VisuallyHidden"})," は、視覚的にはコンテンツを非表示にしつつ、スクリーンリーダーなどの補助技術にはその情報を伝えたい場合に使用するユーティリティコンポーネントです。"]}),`
`,e.jsx(s.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,e.jsx(s.p,{children:"このコンポーネントで囲まれた内容は、画面上には表示されませんが、HTML構造としては存在し続けます。"}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(s.h2,{id:"ユースケース",children:"ユースケース"}),`
`,e.jsx(s.h3,{id:"ボタンのアクセシブルなラベル",children:"ボタンのアクセシブルなラベル"}),`
`,e.jsx(s.p,{children:"アイコンのみのボタンなど、視覚的に意味が伝わるものの、テキストラベルが必要な場合に使用します。"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h2,{id:"アクセシビリティの確認方法",children:"アクセシビリティの確認方法"}),`
`,e.jsxs(s.p,{children:["Chrome DevTools を使用して、",e.jsx(s.code,{children:"VisuallyHidden"})," コンポーネントの内容がスクリーンリーダーでどのように認識されるかを確認できます。"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ステップ"}),e.jsx("th",{children:"操作内容"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"1. 要素の検証"})}),e.jsxs("td",{children:["ブラウザで ",e.jsx("code",{children:"VisuallyHidden"})," を使用している箇所を右クリックし、「検証」を選択して DevTools を開きます。"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"2. アクセシビリティツリーへの切り替え"})}),e.jsxs("td",{children:[e.jsx("code",{children:"Elements"})," パネルの右上にある 「Switch to Accessibility Tree view」 ボタン（人型のアイコン）をクリックします。これにより、DOMツリーがスクリーンリーダー等が解釈するアクセシビリティツリー表示に切り替わります。"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"3. 内容の確認"})}),e.jsxs("td",{children:["ツリーの中から対象の要素を選択します。右側の ",e.jsx("code",{children:"Accessibility"})," タブ（見当たらない場合は ",e.jsx("code",{children:">>"})," から選択）の ",e.jsx("code",{children:"Computed Properties"})," セクションなどで、",e.jsx("code",{children:'Name: "..."'})," として表示されている内容が、実際に読み上げられるテキストです。"]})]})]})]}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{})]})}function T(i={}){const{wrapper:s}={...d(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}export{T as default};
