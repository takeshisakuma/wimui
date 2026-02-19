import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-D9XHfO_n.js";import{M as s}from"./index-Cd-aYZ4I.js";import{T as n}from"./T-D6ufFkJp.js";import"./iframe-fP2t0KdX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMgFwVVR.js";import"./index-CWwNwgZ0.js";import"./index-BARQtGDn.js";import"./index-CEIVxd0P.js";import"./index-BSm3OVH8.js";import"./useTranslation-CQq2wPgL.js";function i(r){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Guides/Hierarchy & Composition"}),`
`,e.jsx(d.h1,{id:"",children:e.jsx(n,{k:"guide_hierarchy_title"})}),`
`,e.jsx("p",{children:e.jsx(n,{k:"guide_hierarchy_desc"})}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"1-",children:["1. ",e.jsx(n,{k:"guide_hierarchy_tiers_title"})]}),`
`,e.jsx(d.p,{children:"wimui は、コンポーネントの複雑さと役割に基づいて 4 つの階層（Tiers）で設計されています。これにより、依存関係が単方向（上位から下位へ）に保たれ、メンテナンス性が向上します。"}),`
`,e.jsx(d.h3,{id:"tier-1-foundations-基盤層",children:"Tier 1: Foundations (基盤層)"}),`
`,e.jsx(d.p,{children:"他のコンポーネントにほぼ依存しない、ライブラリの最小構成要素です。"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"役割"}),": 基本的なスタイリング、レイアウト、低レイヤーの振る舞いを提供。"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"主なコンポーネント"}),": ",e.jsx(d.code,{children:"Box"}),", ",e.jsx(d.code,{children:"Flex"}),", ",e.jsx(d.code,{children:"Stack"}),", ",e.jsx(d.code,{children:"Grid"}),", ",e.jsx(d.code,{children:"Icon"}),", ",e.jsx(d.code,{children:"VisuallyHidden"}),", ",e.jsx(d.code,{children:"Transition"}),", ",e.jsx(d.code,{children:"Portal"})]}),`
`]}),`
`,e.jsx(d.h3,{id:"tier-2-atoms-基本要素層",children:"Tier 2: Atoms (基本要素層)"}),`
`,e.jsx(d.p,{children:"単一の機能を持つ独立したコンポーネントです。"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"役割"}),": デザインシステム全体の統一された UI パーツを提供。"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"主なコンポーネント"}),": ",e.jsx(d.code,{children:"Button"}),", ",e.jsx(d.code,{children:"Input"}),", ",e.jsx(d.code,{children:"Checkbox"}),", ",e.jsx(d.code,{children:"Radio"}),", ",e.jsx(d.code,{children:"Switch"}),", ",e.jsx(d.code,{children:"Badge"}),", ",e.jsx(d.code,{children:"Label"}),", ",e.jsx(d.code,{children:"Spinner"}),", ",e.jsx(d.code,{children:"Divider"})]}),`
`]}),`
`,e.jsx(d.h3,{id:"tier-3-molecules-複合要素層",children:"Tier 3: Molecules (複合要素層)"}),`
`,e.jsx(d.p,{children:"複数の Tier 1/2 を組み合わせ、特定の UI パターンや機能を実現するコンポーネントです。"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"役割"}),": 複雑なインタラクションや状態管理の基盤を提供。"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"主なコンポーネント"}),": ",e.jsx(d.code,{children:"Popover"}),", ",e.jsx(d.code,{children:"Dialog"}),", ",e.jsx(d.code,{children:"Drawer"}),", ",e.jsx(d.code,{children:"Tooltip"}),", ",e.jsx(d.code,{children:"ScrollArea"}),", ",e.jsx(d.code,{children:"Accordion"}),", ",e.jsx(d.code,{children:"Tabs"}),", ",e.jsx(d.code,{children:"Pagination"}),", ",e.jsx(d.code,{children:"Breadcrumb"})]}),`
`]}),`
`,e.jsx(d.h3,{id:"tier-4-organisms-構造要素層",children:"Tier 4: Organisms (構造要素層)"}),`
`,e.jsx(d.p,{children:"複数のコンポーネントをラップし、アプリケーションの特定のセクションや複雑な機能を完結させるコンポーネントです。"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"役割"}),": 完成された UI ユニットや、ドメインに近い機能の提供。"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"主なコンポーネント"}),": ",e.jsx(d.code,{children:"Selectbox"}),", ",e.jsx(d.code,{children:"Combobox"}),", ",e.jsx(d.code,{children:"DatePicker"}),", ",e.jsx(d.code,{children:"AppLayout"}),", ",e.jsx(d.code,{children:"Notification"}),", ",e.jsx(d.code,{children:"CommandPalette"}),", ",e.jsx(d.code,{children:"Tour"})]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsxs(d.h2,{id:"2-",children:["2. ",e.jsx(n,{k:"guide_composition_map_title"})]}),`
`,e.jsx(d.p,{children:"主要なコンポーネントが内部的にどのコンポーネントを使用（ラップ）しているかのマッピングです。"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Tier"}),e.jsx("th",{children:"Component"}),e.jsx("th",{children:"Composition (Uses internally)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tier 4"})}),e.jsx("td",{children:e.jsx(d.code,{children:"Selectbox"})}),e.jsxs("td",{children:[e.jsx(d.code,{children:"Label"}),", ",e.jsx(d.code,{children:"Input"}),", ",e.jsx(d.code,{children:"Icon"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tier 4"})}),e.jsx("td",{children:e.jsx(d.code,{children:"Combobox"})}),e.jsxs("td",{children:[e.jsx(d.code,{children:"Input"}),", ",e.jsx(d.code,{children:"Popover"}),", ",e.jsx(d.code,{children:"List"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tier 4"})}),e.jsx("td",{children:e.jsx(d.code,{children:"Notification"})}),e.jsxs("td",{children:[e.jsx(d.code,{children:"Card"}),", ",e.jsx(d.code,{children:"Alert"}),", ",e.jsx(d.code,{children:"IconButton"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tier 4"})}),e.jsx("td",{children:e.jsx(d.code,{children:"AppLayout"})}),e.jsxs("td",{children:[e.jsx(d.code,{children:"Header"}),", ",e.jsx(d.code,{children:"Sidebar"}),", ",e.jsx(d.code,{children:"Footer"}),", ",e.jsx(d.code,{children:"Drawer"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tier 4"})}),e.jsx("td",{children:e.jsx(d.code,{children:"DatePicker"})}),e.jsxs("td",{children:[e.jsx(d.code,{children:"Popover"}),", ",e.jsx(d.code,{children:"Calendar"}),", ",e.jsx(d.code,{children:"Input"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tier 3"})}),e.jsx("td",{children:e.jsx(d.code,{children:"Dialog"})}),e.jsxs("td",{children:[e.jsx(d.code,{children:"Portal"}),", ",e.jsx(d.code,{children:"FocusTrap"}),", ",e.jsx(d.code,{children:"Icon"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tier 3"})}),e.jsx("td",{children:e.jsx(d.code,{children:"Popover"})}),e.jsxs("td",{children:[e.jsx(d.code,{children:"Icon"})," (Target: ",e.jsx(d.code,{children:"Portal"}),", ",e.jsx(d.code,{children:"Transition"}),")"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tier 3"})}),e.jsx("td",{children:e.jsx(d.code,{children:"Tooltip"})}),e.jsx("td",{children:e.jsx(d.code,{children:"Popover"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tier 3"})}),e.jsx("td",{children:e.jsx(d.code,{children:"Breadcrumb"})}),e.jsxs("td",{children:[e.jsx(d.code,{children:"Link"}),", ",e.jsx(d.code,{children:"Icon"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tier 2"})}),e.jsx("td",{children:e.jsx(d.code,{children:"IconButton"})}),e.jsxs("td",{children:[e.jsx(d.code,{children:"Button"}),", ",e.jsx(d.code,{children:"Icon"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tier 2"})}),e.jsx("td",{children:e.jsx(d.code,{children:"LinkButton"})}),e.jsx("td",{children:e.jsx(d.code,{children:"Link"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tier 2"})}),e.jsx("td",{children:e.jsx(d.code,{children:"Alert"})}),e.jsx("td",{children:e.jsx(d.code,{children:"Icon"})})]})]})]}),`
`,e.jsxs(d.h2,{id:"3-",children:["3. ",e.jsx(n,{k:"guide_hierarchy_rules_title"})]}),`
`,e.jsx(d.p,{children:"健全な依存関係を維持するための wimui の設計ルールです。"}),`
`,e.jsxs(d.ol,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"単方向の依存"}),": 下位の Tier は上位の Tier に依存してはなりません（例：",e.jsx(d.code,{children:"Button"})," (Tier 2) が ",e.jsx(d.code,{children:"Selectbox"})," (Tier 4) をインポートするのは禁止）。"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"同一 Tier 間の依存"}),": 同じ Tier 内での依存は、肥大化しない限り許容されます。"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"透過的な Props"}),": ラップするコンポーネントは、可能な限り内部コンポーネントの Props を透過（Spread）させ、柔軟性を確保します。"]}),`
`]}),`
`,e.jsx(d.hr,{}),`
`,e.jsx(d.h2,{id:"4-ポータルとアニメーションの原則",children:"4. ポータルとアニメーションの原則"}),`
`,e.jsx(d.p,{children:"wimui では、DOM 管理とモーションの一貫性を保つため、以下の原則に従います。"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"DOM管理"}),": オーバーレイやモーダルなどの要素を DOM ツリーの外部に描画する場合、直接 ",e.jsx(d.code,{children:"createPortal"})," を使用せず、Layer 1 の ",e.jsx(d.code,{children:"Portal"})," コンポーネントを使用します。これにより、ポータル作成のロジックが統一されます。"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"アニメーション"}),": コンポーネントの出現・消失に伴うアニメーションは、個別の CSS 定義ではなく Layer 1 の ",e.jsx(d.code,{children:"Transition"})," コンポーネントを介して実装します。"]}),`
`,e.jsxs(d.li,{children:[e.jsx(d.strong,{children:"共通クラスの利用"}),": アニメーションの挙動は ",e.jsx(d.code,{children:"transition.scss"})," で定義された共通のトランジションクラス（",e.jsx(d.code,{children:"fade"}),", ",e.jsx(d.code,{children:"scale"}),", ",e.jsx(d.code,{children:"slide-*"})," 等）を使用し、ライブラリ全体で一貫したユーザー体験を提供します。"]}),`
`]})]})}function b(r={}){const{wrapper:d}={...c(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(i,{...r})}):i(r)}export{b as default};
