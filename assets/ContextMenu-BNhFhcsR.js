import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-ASF-mazP.js";import{M as d,P as c,a as h,d as t}from"./index-B25bep_z.js";import{C as l,W as x,a as o,b as j,O as m}from"./ContextMenu.stories-Br0uKBCr.js";import{T as p}from"./T-Dv52hiQU.js";import"./iframe-DLp3Jz1D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSdy6QgF.js";import"./index-DBODvmcM.js";import"./index-CSblWT8I.js";import"./index-B17ZCLRR.js";import"./index-CW_-86og.js";import"./index-DUAuVduf.js";import"./Portal-8GJZ77po.js";import"./Transition-DoP7XyL0.js";import"./Icon-DfmmhfZE.js";import"./useTranslation-BDUJJ6MV.js";function s(i){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:l}),`
`,n.jsx(e.h1,{id:"contextmenu",children:"ContextMenu"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(p,{k:"doc_contextmenu_title"})}),`
`,n.jsx(e.p,{children:`右クリック（コンテキストメニュー）で表示されるメニューコンポーネントです。
画像、テキスト、その他の要素に対して、追加のアクションを提供する際に使用します。`}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"PCのみ"}),": このコンポーネントは「右クリック」操作を前提としているため、PC環境での利用を想定しています。ドロップダウンメニューなど、タッチデバイスで操作可能なコンポーネントでの代替を検討してください。"]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ContextMenu, ContextMenuItem, ContextMenuDivider } from "wimui";
import { T } from "../T";

<ContextMenu
  menu={
    <>
      <ContextMenuItem onClick={handleEdit}>Edit</ContextMenuItem>
      <ContextMenuItem onClick={handleCopy}>Copy</ContextMenuItem>
      <ContextMenuDivider />
      <ContextMenuItem danger onClick={handleDelete}>
        Delete
      </ContextMenuItem>
    </>
  }
>
  <div>Right-click this element</div>
</ContextMenu>;
`})}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"components",children:"Components"}),`
`,n.jsx(e.h3,{id:"contextmenu-1",children:"ContextMenu"}),`
`,n.jsx(e.p,{children:"ルートコンポーネント。子要素上で右クリックされたときにメニューを表示します。"}),`
`,n.jsx(e.p,{children:"Props:"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Property"}),n.jsx("th",{children:"Description"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"menu"})}),n.jsx("td",{children:"表示するメニューの内容（ReactNode）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"disabled"})}),n.jsx("td",{children:"コンテキストメニューを無効化"})]})]})]}),`
`,n.jsx(e.h3,{id:"contextmenuitem",children:"ContextMenuItem"}),`
`,n.jsx(e.p,{children:"メニューの個別項目です。クリックイベント、アイコン、danger状態を設定できます。"}),`
`,n.jsx(e.p,{children:"Props:"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Property"}),n.jsx("th",{children:"Description"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"icon"})}),n.jsx("td",{children:"アイテムの左側に表示するアイコン"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"danger"})}),n.jsx("td",{children:"危険なアクション（削除など）を示す赤色スタイル"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"disabled"})}),n.jsx("td",{children:"アイテムを無効化"})]})]})]}),`
`,n.jsx(e.h3,{id:"contextmenudivider",children:"ContextMenuDivider"}),`
`,n.jsx(e.p,{children:"メニュー項目間に区切り線を挿入します。"}),`
`,n.jsx(e.h3,{id:"contextmenugroup",children:"ContextMenuGroup"}),`
`,n.jsx(e.p,{children:"メニュー項目をグループ化し、タイトルを表示します。"}),`
`,n.jsx(h,{}),`
`,n.jsx(e.h2,{id:"stories",children:"Stories"}),`
`,n.jsx(e.h3,{id:"with-icons",children:"With Icons"}),`
`,n.jsx(e.p,{children:"アイコン付きのコンテキストメニューの例です。"}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.h3,{id:"with-groups",children:"With Groups"}),`
`,n.jsx(e.p,{children:"メニュー項目をグループ化する例です。関連するアクションをまとめて表示できます。"}),`
`,n.jsx(t,{of:o}),`
`,n.jsx(e.h3,{id:"with-disabled-items",children:"With Disabled Items"}),`
`,n.jsx(e.p,{children:"一部のアクションを無効化する例です。"}),`
`,n.jsx(t,{of:j}),`
`,n.jsx(e.h3,{id:"on-image",children:"On Image"}),`
`,n.jsx(e.p,{children:"画像に対するコンテキストメニューの実用的な例です。"}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特徴"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"自動位置調整"})}),n.jsx("td",{children:"メニューがビューポートの境界を超える場合、自動的に位置を調整します"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"Escキーで閉じる"})}),n.jsx("td",{children:"Escキーを押すとメニューが閉じます"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"外側クリックで閉じる"})}),n.jsx("td",{children:"メニューの外側をクリックすると閉じます"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"スクロール時に閉じる"})}),n.jsx("td",{children:"ページをスクロールすると自動的に閉じます"})]})]})]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'role="menu"'})," と ",n.jsx(e.code,{children:'role="menuitem"'})," を適切に設定"]}),`
`,n.jsxs(e.li,{children:["disabled 状態の項目には ",n.jsx(e.code,{children:"aria-disabled"})," を設定"]}),`
`,n.jsx(e.li,{children:"キーボード操作のサポート（Escキーで閉じる）"}),`
`]})]})}function _(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{_ as default};
