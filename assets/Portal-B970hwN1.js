import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-e89CbVY2.js";import{M as s,C as r,a as t}from"./index-BchBXNSQ.js";import{P as c,O as h,C as l}from"./Portal.stories-a-2Qn_Qt.js";import"./iframe-BhAqME-Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKH72S4N.js";import"./index-D7W0jCEc.js";import"./index-gXD_s6uC.js";import"./index-CQDIXRAw.js";import"./index-C1N2IX8j.js";import"./Portal-BjZZ1oog.js";import"./Button-Dhx6FWVf.js";import"./index-D_81TE4T.js";import"./Icon-Do4vylym.js";import"./useTranslation-D6PixMQB.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...d(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Utilities/Portal",of:c}),`
`,n.jsx(e.h1,{id:"portal",children:"Portal"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Portal"})," コンポーネントは、React コンポーネントツリーの論理構造を保ちつつ、DOM 階層上の物理的な位置だけを別の場所（通常は ",n.jsx(e.code,{children:"document.body"})," の直下など）に移動させるために使用します。"]}),`
`,n.jsx(e.h2,{id:"どのような時に使うのか",children:"どのような時に使うのか？"}),`
`,n.jsxs(e.p,{children:["主に ",n.jsx(e.strong,{children:"「親要素の制約を回避したいとき」"})," に使用します。具体的には、以下の3つのユースケースが代表的です。"]}),`
`,n.jsxs(e.h3,{id:"1-overflow-hidden-を回避する",children:["1. ",n.jsx(e.code,{children:"overflow: hidden"})," を回避する"]}),`
`,n.jsxs(e.p,{children:["親要素に ",n.jsx(e.code,{children:"overflow: hidden"})," が設定されている場合、その中にあるツールチップやドロップダウンメニューなどは、親の枠外に出ようとすると見切れて（カットされて）しまいます。Portal を使うことで、これらを DOM の最上位層に逃がし、正しく表示させることができます。"]}),`
`,n.jsxs(e.h3,{id:"2-z-index-のスタック問題を解決する",children:["2. ",n.jsx(e.code,{children:"z-index"})," のスタック問題を解決する"]}),`
`,n.jsxs(e.p,{children:["複雑なレイアウトにおいて、",n.jsx(e.code,{children:"z-index"})," を指定しても期待通りに重なり順が決まらないことがあります。これは「重ね合わせ文脈（Stacking Context）」の仕組みによるものです。Portal で ",n.jsx(e.code,{children:"document.body"})," 直下に送ることで、他のどの要素よりも確実に前面に表示させることが容易になります。"]}),`
`,n.jsxs(e.h3,{id:"3-position-fixed-や-absolute-の基準を変更する",children:["3. ",n.jsx(e.code,{children:"position: fixed"})," や ",n.jsx(e.code,{children:"absolute"})," の基準を変更する"]}),`
`,n.jsxs(e.p,{children:["モーダルなどの全画面要素を配置する際、親要素に ",n.jsx(e.code,{children:"transform"})," や ",n.jsx(e.code,{children:"filter"})," がかかっていると、",n.jsx(e.code,{children:"position: fixed"})," の基準点が画面全体ではなく、その親要素になってしまいます。これを防ぐために、物理的な位置をトップレベルに移動させます。"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"例",children:"例"}),`
`,n.jsxs(e.h3,{id:"親の-overflow-hidden-を突き抜ける",children:["親の ",n.jsx(e.code,{children:"overflow: hidden"})," を突き抜ける"]}),`
`,n.jsxs(e.p,{children:["この例では、親要素（点線の枠）に ",n.jsx(e.code,{children:"overflow: hidden"})," が設定されていますが、Portal を使用したメッセージは画面の右下に正しく表示されます。"]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h3,{id:"特定のコンテナへレンダリング",children:"特定のコンテナへレンダリング"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"container"})," プロップに DOM の参照を渡すことで、",n.jsx(e.code,{children:"document.body"})," 以外（例えばサイドバーや特定の通知エリアなど）にもコンテンツを送り込むことができます。"]}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"プロップ",children:"プロップ"}),`
`,n.jsx(t,{})]})}function y(o={}){const{wrapper:e}={...d(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{y as default};
