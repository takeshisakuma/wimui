import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DKPVgU36.js";import{M as s,C as o,a as t}from"./index-DMOaFuYO.js";import{P as c,O as h,C as l,N as x,S as j}from"./Portal.stories-CCF_87CA.js";import{T as p}from"./T-UveVnnGz.js";import"./iframe-CCPg7w12.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cb6JLdCv.js";import"./index--RbsBIhs.js";import"./index-BEjYhe4d.js";import"./index-hAd0DrB4.js";import"./index-0yjUL8-a.js";import"./Portal-CEnLDZgI.js";import"./Button-CqiCyHTA.js";import"./index-DTYb8BBx.js";import"./Icon-NJZqQ_ZW.js";import"./useTranslation-Cw09rmK9.js";import"./Card-3l5gzj9o.js";import"./Stack-6KfB6lDJ.js";import"./Box-Bk2y8sgS.js";import"./Textarea-hTde8R45.js";import"./Badge-DfxaoYYe.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Utilities/Portal",of:c}),`
`,n.jsx(e.h1,{id:"portal",children:"Portal"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(p,{k:"doc_portal_title"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Portal"})," コンポーネントは、React コンポーネントツリーの論理構造を保ちつつ、DOM 階層上の物理的な位置だけを別の場所（通常は ",n.jsx(e.code,{children:"document.body"})," の直下など）に移動させるために使用します。"]}),`
`,n.jsx(e.h2,{id:"どのような時に使うのか",children:"どのような時に使うのか？"}),`
`,n.jsx(e.p,{children:"主に 「親要素の制約を回避したいとき」 に使用します。具体的には、以下の3つのユースケースが代表的です。"}),`
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
`,n.jsx(o,{of:h}),`
`,n.jsx(e.h3,{id:"特定のコンテナへレンダリング",children:"特定のコンテナへレンダリング"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"container"})," プロップに DOM の参照を渡すことで、",n.jsx(e.code,{children:"document.body"})," 以外（例えばサイドバーや特定の通知エリアなど）にもコンテンツを送り込むことができます。"]}),`
`,n.jsx(e.h4,{id:"基本的な仕組み",children:"基本的な仕組み"}),`
`,n.jsx(e.p,{children:"青い枠（コンテナ）に対して、別の場所にある送信元からコンテンツを送り込んでいます。"}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(e.h4,{id:"ユースケース-1-通知センター-ログ出力",children:"ユースケース 1: 通知センター (ログ出力)"}),`
`,n.jsx(e.p,{children:`ページ内の特定のエリアを「通知受取用」のコンテナとして定義し、アプリ内の様々な場所に散らばったコンポーネントから、そのコンテナへ情報を「転送」するパターンです。\r
これにより、UIの構造（情報の出力先）とロジック（情報の発生源）を分離できます。`}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(e.h4,{id:"ユースケース-2-サイドパネルでの詳細表示",children:"ユースケース 2: サイドパネルでの詳細表示"}),`
`,n.jsxs(e.p,{children:[`「複雑なリストアイテムがあり、その詳細を画面端の共通パネルに表示したい」という場合に非常に効果的です。\r
この方法の利点は、`,n.jsx(e.strong,{children:"「状態（State）はリストアイテム自身が持ったまま、見た目だけを別の場所へ移動できる」"})," という点です。"]}),`
`,n.jsx(e.p,{children:"例えば、詳細パネル内の入力フォームの値をリストアイテムのローカル State で管理すれば、パネルを閉じたり他のアイテムに切り替えたりしても、再度そのアイテムを選択すれば入力内容を保持したまま再表示させることが容易になります。"}),`
`,n.jsx(o,{of:j}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"プロップ",children:"プロップ"}),`
`,n.jsx(t,{})]})}function U(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{U as default};
