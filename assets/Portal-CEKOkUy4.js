import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-B4XUEz8k.js";import{M as s,C as i,a as t}from"./index-BoiTgy_C.js";import{P as c,O as l,C as h}from"./Portal.stories-CR1ulfNJ.js";import{T as x}from"./T-DXD3Gesv.js";import"./iframe-BypDdRGc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CFiVPHwc.js";import"./index-BCKKGCo_.js";import"./index-Bak0ST7I.js";import"./index-Beq7Oj5C.js";import"./index-DptdUKJg.js";import"./Portal-BO2ArcSm.js";import"./Button-CFeHLrTC.js";import"./index-BviBMDxs.js";import"./Icon-REvCejfI.js";import"./useTranslation-C73qRTPU.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Utilities/Portal",of:c}),`
`,e.jsx(n.h1,{id:"portal",children:"Portal"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(x,{k:"doc_portal_title"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Portal"})," コンポーネントは、React コンポーネントツリーの論理構造を保ちつつ、DOM 階層上の物理的な位置だけを別の場所（通常は ",e.jsx(n.code,{children:"document.body"})," の直下など）に移動させるために使用します。"]}),`
`,e.jsx(n.h2,{id:"どのような時に使うのか",children:"どのような時に使うのか？"}),`
`,e.jsx(n.p,{children:"主に 「親要素の制約を回避したいとき」 に使用します。具体的には、以下の3つのユースケースが代表的です。"}),`
`,e.jsxs(n.h3,{id:"1-overflow-hidden-を回避する",children:["1. ",e.jsx(n.code,{children:"overflow: hidden"})," を回避する"]}),`
`,e.jsxs(n.p,{children:["親要素に ",e.jsx(n.code,{children:"overflow: hidden"})," が設定されている場合、その中にあるツールチップやドロップダウンメニューなどは、親の枠外に出ようとすると見切れて（カットされて）しまいます。Portal を使うことで、これらを DOM の最上位層に逃がし、正しく表示させることができます。"]}),`
`,e.jsxs(n.h3,{id:"2-z-index-のスタック問題を解決する",children:["2. ",e.jsx(n.code,{children:"z-index"})," のスタック問題を解決する"]}),`
`,e.jsxs(n.p,{children:["複雑なレイアウトにおいて、",e.jsx(n.code,{children:"z-index"})," を指定しても期待通りに重なり順が決まらないことがあります。これは「重ね合わせ文脈（Stacking Context）」の仕組みによるものです。Portal で ",e.jsx(n.code,{children:"document.body"})," 直下に送ることで、他のどの要素よりも確実に前面に表示させることが容易になります。"]}),`
`,e.jsxs(n.h3,{id:"3-position-fixed-や-absolute-の基準を変更する",children:["3. ",e.jsx(n.code,{children:"position: fixed"})," や ",e.jsx(n.code,{children:"absolute"})," の基準を変更する"]}),`
`,e.jsxs(n.p,{children:["モーダルなどの全画面要素を配置する際、親要素に ",e.jsx(n.code,{children:"transform"})," や ",e.jsx(n.code,{children:"filter"})," がかかっていると、",e.jsx(n.code,{children:"position: fixed"})," の基準点が画面全体ではなく、その親要素になってしまいます。これを防ぐために、物理的な位置をトップレベルに移動させます。"]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"例",children:"例"}),`
`,e.jsxs(n.h3,{id:"親の-overflow-hidden-を突き抜ける",children:["親の ",e.jsx(n.code,{children:"overflow: hidden"})," を突き抜ける"]}),`
`,e.jsxs(n.p,{children:["この例では、親要素（点線の枠）に ",e.jsx(n.code,{children:"overflow: hidden"})," が設定されていますが、Portal を使用したメッセージは画面の右下に正しく表示されます。"]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h3,{id:"特定のコンテナへレンダリング",children:"特定のコンテナへレンダリング"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"container"})," プロップに DOM の参照を渡すことで、",e.jsx(n.code,{children:"document.body"})," 以外（例えばサイドバーや特定の通知エリアなど）にもコンテンツを送り込むことができます。"]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"プロップ",children:"プロップ"}),`
`,e.jsx(t,{})]})}function _(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{_ as default};
