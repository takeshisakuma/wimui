import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-D7SuzjHL.js";import{M as c,C as r,a as o}from"./index-BZATBabr.js";import{P as t,O as h,C as l,N as x,S as j}from"./Portal.stories-BM2Rn-p5.js";import{T as p}from"./T-6JBhxhqZ.js";import"./iframe-EVkAXmOk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDLWA32h.js";import"./index-ef_LzJKW.js";import"./index-CHzC7w-f.js";import"./index-DuqyPMeR.js";import"./index-BD8EsMqe.js";import"./Portal-COOqOsPi.js";import"./Button-5iC_YtBh.js";import"./index-BX12fiL9.js";import"./Icon-BGwsqTxV.js";import"./useTranslation-DRZYA3vJ.js";import"./Card-DLEXHxKW.js";import"./Stack-BI4j-WZJ.js";import"./Box-D8NIZkL1.js";import"./Textarea-Cd8WUGzx.js";import"./Badge-Dm7KBM2J.js";function i(d){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...s(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:t}),`
`,n.jsx(e.h1,{id:"portal",children:"Portal"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(p,{k:"doc_portal_title"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Portal"})," コンポーネントは、React コンポーネントツリーの論理構造を保ちつつ、DOM 階層上の物理的な位置だけを別の場所（通常は ",n.jsx(e.code,{children:"document.body"})," の直下など）に移動させるために使用します。"]}),`
`,n.jsx(e.h2,{id:"どのような時に使うのか",children:"どのような時に使うのか？"}),`
`,n.jsx(e.p,{children:"主に 「親要素の制約を回避したいとき」 に使用します。具体的には、以下の3つのユースケースが代表的です。"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ユースケース"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:"overflow: hidden"})," を回避する"]})}),n.jsx("td",{children:n.jsxs(e.p,{children:["親要素に ",n.jsx("code",{children:"overflow: hidden"})," ",`
が設定されている場合、その中にあるツールチップやドロップダウンメニューなどは、親の枠外に出ようとすると見切れて（カットされて）しまいます。Portal
を使うことで、これらを DOM
の最上位層に逃がし、正しく表示させることができます。`]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:"z-index"})," のスタック問題を解決する"]})}),n.jsx("td",{children:n.jsxs(e.p,{children:["複雑なレイアウトにおいて、",n.jsx("code",{children:"z-index"})," ",`
を指定しても期待通りに重なり順が決まらないことがあります。これは「重ね合わせ文脈（Stacking
Context）」の仕組みによるものです。Portal で `,n.jsx("code",{children:"document.body"})," ",`
直下に送ることで、他のどの要素よりも確実に前面に表示させることが容易になります。`]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:"position: fixed"})," や ",n.jsx("code",{children:"absolute"})," の基準を変更する"]})}),n.jsx("td",{children:n.jsxs(e.p,{children:["モーダルなどの全画面要素を配置する際、親要素に ",n.jsx("code",{children:"transform"})," や"," ",`
`,n.jsx("code",{children:"filter"})," がかかっていると、",n.jsx("code",{children:"position: fixed"})," ",`
の基準点が画面全体ではなく、その親要素になってしまいます。これを防ぐために、物理的な位置をトップレベルに移動させます。`]})})]})]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"例",children:"例"}),`
`,n.jsxs(e.h3,{id:"親の-overflow-hidden-を突き抜ける",children:["親の ",n.jsx(e.code,{children:"overflow: hidden"})," を突き抜ける"]}),`
`,n.jsxs(e.p,{children:["この例では、親要素（点線の枠）に ",n.jsx(e.code,{children:"overflow: hidden"})," が設定されていますが、Portal を使用したメッセージは画面の右下に正しく表示されます。"]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h3,{id:"特定のコンテナへレンダリング",children:"特定のコンテナへレンダリング"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"container"})," プロップに DOM の参照を渡すことで、",n.jsx(e.code,{children:"document.body"})," 以外（例えばサイドバーや特定の通知エリアなど）にもコンテンツを送り込むことができます。"]}),`
`,n.jsx(e.h4,{id:"基本的な仕組み",children:"基本的な仕組み"}),`
`,n.jsx(e.p,{children:"青い枠（コンテナ）に対して、別の場所にある送信元からコンテンツを送り込んでいます。"}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(e.h4,{id:"ユースケース-1-通知センター-ログ出力",children:"ユースケース 1: 通知センター (ログ出力)"}),`
`,n.jsx(e.p,{children:`ページ内の特定のエリアを「通知受取用」のコンテナとして定義し、アプリ内の様々な場所に散らばったコンポーネントから、そのコンテナへ情報を「転送」するパターンです。
これにより、UIの構造（情報の出力先）とロジック（情報の発生源）を分離できます。`}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(e.h4,{id:"ユースケース-2-サイドパネルでの詳細表示",children:"ユースケース 2: サイドパネルでの詳細表示"}),`
`,n.jsxs(e.p,{children:[`「複雑なリストアイテムがあり、その詳細を画面端の共通パネルに表示したい」という場合に非常に効果的です。
この方法の利点は、`,n.jsx(e.strong,{children:"「状態（State）はリストアイテム自身が持ったまま、見た目だけを別の場所へ移動できる」"})," という点です。"]}),`
`,n.jsx(e.p,{children:"例えば、詳細パネル内の入力フォームの値をリストアイテムのローカル State で管理すれば、パネルを閉じたり他のアイテムに切り替えたりしても、再度そのアイテムを選択すれば入力内容を保持したまま再表示させることが容易になります。"}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"プロップ",children:"プロップ"}),`
`,n.jsx(o,{}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"プロパティ"}),n.jsx("th",{children:"型"}),n.jsx("th",{children:"デフォルト"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"children"})}),n.jsx("td",{children:n.jsx("code",{children:"React.ReactNode"})}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"ポータルを通してレンダリングするコンテンツ。（必須）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"container"})}),n.jsx("td",{children:n.jsx("code",{children:"HTMLElement | null"})}),n.jsx("td",{children:n.jsx("code",{children:"document.body"})}),n.jsx("td",{children:n.jsxs(e.p,{children:["コンテンツを送り込む先のDOMノード。デフォルトでは"," ",`
`,n.jsx("code",{children:"document.body"})," の直下にレンダリングされます。"]})})]})]})]})]})}function H(d={}){const{wrapper:e}={...s(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(i,{...d})}):i(d)}export{H as default};
