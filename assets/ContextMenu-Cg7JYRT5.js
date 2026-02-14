import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-CoQHZnOj.js";import{M as o,P as d,a as l,d as s}from"./index-BIQdFeao.js";import{C as c,W as x,a as h,b as j,O as m}from"./ContextMenu.stories-BPOrI0Fw.js";import{T as u}from"./T-CT9BXTKD.js";import"./iframe-nek2XImP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHHxnna_.js";import"./index-Bns8OFEQ.js";import"./index-Dqs3gHnL.js";import"./index-BvAOznMi.js";import"./index-CKLNsAtS.js";import"./index-Pp9yKcV2.js";import"./Icon-TjtOJ-ub.js";import"./useTranslation-DSXsfy7w.js";function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:c}),`
`,n.jsx(e.h1,{id:"contextmenu",children:"ContextMenu"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(u,{k:"doc_contextmenu_title"})}),`
`,n.jsx(e.p,{children:`右クリック（コンテキストメニュー）で表示されるメニューコンポーネントです。\r
画像、テキスト、その他の要素に対して、追加のアクションを提供する際に使用します。`}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ContextMenu, ContextMenuItem, ContextMenuDivider } from "wimui";\r
import { T } from "../T";\r
\r
<ContextMenu\r
  menu={\r
    <>\r
      <ContextMenuItem onClick={handleEdit}>Edit</ContextMenuItem>\r
      <ContextMenuItem onClick={handleCopy}>Copy</ContextMenuItem>\r
      <ContextMenuDivider />\r
      <ContextMenuItem danger onClick={handleDelete}>Delete</ContextMenuItem>\r
    </>\r
  }\r
>\r
  <div>Right-click this element</div>\r
</ContextMenu>
`})}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"components",children:"Components"}),`
`,n.jsx(e.h3,{id:"contextmenu-1",children:"ContextMenu"}),`
`,n.jsx(e.p,{children:"ルートコンポーネント。子要素上で右クリックされたときにメニューを表示します。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Props:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"menu"}),": 表示するメニューの内容（ReactNode）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"disabled"}),": コンテキストメニューを無効化"]}),`
`]}),`
`,n.jsx(e.h3,{id:"contextmenuitem",children:"ContextMenuItem"}),`
`,n.jsx(e.p,{children:"メニューの個別項目です。クリックイベント、アイコン、danger状態を設定できます。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Props:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"icon"}),": アイテムの左側に表示するアイコン"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"danger"}),": 危険なアクション（削除など）を示す赤色スタイル"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"disabled"}),": アイテムを無効化"]}),`
`]}),`
`,n.jsx(e.h3,{id:"contextmenudivider",children:"ContextMenuDivider"}),`
`,n.jsx(e.p,{children:"メニュー項目間に区切り線を挿入します。"}),`
`,n.jsx(e.h3,{id:"contextmenugroup",children:"ContextMenuGroup"}),`
`,n.jsx(e.p,{children:"メニュー項目をグループ化し、タイトルを表示します。"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"stories",children:"Stories"}),`
`,n.jsx(e.h3,{id:"with-icons",children:"With Icons"}),`
`,n.jsx(e.p,{children:"アイコン付きのコンテキストメニューの例です。"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h3,{id:"with-groups",children:"With Groups"}),`
`,n.jsx(e.p,{children:"メニュー項目をグループ化する例です。関連するアクションをまとめて表示できます。"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(e.h3,{id:"with-disabled-items",children:"With Disabled Items"}),`
`,n.jsx(e.p,{children:"一部のアクションを無効化する例です。"}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(e.h3,{id:"on-image",children:"On Image"}),`
`,n.jsx(e.p,{children:"画像に対するコンテキストメニューの実用的な例です。"}),`
`,n.jsx(s,{of:m}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"自動位置調整"}),": メニューがビューポートの境界を超える場合、自動的に位置を調整します"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Escキーで閉じる"}),": Escキーを押すとメニューが閉じます"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"外側クリックで閉じる"}),": メニューの外側をクリックすると閉じます"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"スクロール時に閉じる"}),": ページをスクロールすると自動的に閉じます"]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'role="menu"'})," と ",n.jsx(e.code,{children:'role="menuitem"'})," を適切に設定"]}),`
`,n.jsxs(e.li,{children:["disabled 状態の項目には ",n.jsx(e.code,{children:"aria-disabled"})," を設定"]}),`
`,n.jsx(e.li,{children:"キーボード操作のサポート（Escキーで閉じる）"}),`
`]})]})}function P(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{P as default};
