import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DRiaBBYi.js";import{M as t,C as o,a as d}from"./index-owzGlGYj.js";import{D as l,a as c,L as h,T as x,B as j,C as a}from"./Drawer.stories-B87lfVxV.js";import{T as p}from"./T-D3np7SQF.js";import"./iframe-BMpY0rva.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Drw36-DN.js";import"./index-CLByghFt.js";import"./index-CpnkkqGN.js";import"./index-B0djQuuG.js";import"./index-Db__cjFU.js";import"./Drawer-BB26Dcr0.js";import"./index-DfrzlIWo.js";import"./FocusTrap-uCN3K2GV.js";import"./Button-9eXVM9Mf.js";import"./Icon-BB7G6E1S.js";import"./useTranslation-BAFMhCeQ.js";function s(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:l}),`
`,r.jsx(n.h1,{id:"drawer",children:"Drawer"}),`
`,r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:r.jsx(p,{k:"doc_drawer_title"})}),`
`,r.jsx(n.p,{children:"Drawerは、画面の端からスライドして表示されるパネルです。追加のコンテキストやナビゲーション、設定などを表示するために使用されます。"}),`
`,r.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"Drawer"})," コンポーネントの中に ",r.jsx(n.code,{children:"DrawerTrigger"})," と ",r.jsx(n.code,{children:"DrawerContent"}),` を配置します。\r
`,r.jsx(n.code,{children:"side"})," プロパティを使用して、表示される位置（top, right, bottom, left）を指定できます。デフォルトは ",r.jsx(n.code,{children:"right"})," です。"]}),`
`,r.jsx(o,{of:c}),`
`,r.jsx(n.h2,{id:"表示位置のバリエーション",children:"表示位置のバリエーション"}),`
`,r.jsx(n.h3,{id:"left",children:"Left"}),`
`,r.jsx(o,{of:h}),`
`,r.jsx(n.h3,{id:"top",children:"Top"}),`
`,r.jsx(o,{of:x}),`
`,r.jsx(n.h3,{id:"bottom",children:"Bottom"}),`
`,r.jsx(o,{of:j}),`
`,r.jsx(n.h2,{id:"制御された状態-controlled",children:"制御された状態 (Controlled)"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"open"})," プロパティと ",r.jsx(n.code,{children:"onOpenChange"})," イベントハンドラを使用することで、ドロワーの開閉状態を完全に制御できます。"]}),`
`,r.jsx(o,{of:a}),`
`,r.jsx(n.h2,{id:"api",children:"API"}),`
`,r.jsx(n.h3,{id:"drawer-components",children:"Drawer Components"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"Drawer"}),": ルートコンポーネント。コンテキストを提供します。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"DrawerTrigger"}),": ドロワーを開くためのボタントリガー。",r.jsx(n.code,{children:"asChild"})," を使用して他のコンポーネントをトリガーとして機能させることができます。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"DrawerContent"}),": ドロワーの中身を表示するパネル。FocusTrapとスクロールロックを管理します。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"DrawerHeader"}),": タイトルなどのヘッダー領域。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"DrawerFooter"}),": アクションボタンなどのフッター領域。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"DrawerTitle"}),": ドロワーのタイトル。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"DrawerDescription"}),": ドロワーの補助的な説明。"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"DrawerClose"}),": ドロワーを閉じるためのボタン。",r.jsx(n.code,{children:"asChild"})," が利用可能です。"]}),`
`]}),`
`,r.jsx(n.h2,{id:"props",children:"Props"}),`
`,r.jsx(d,{})]})}function S(e={}){const{wrapper:n}={...i(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(s,{...e})}):s(e)}export{S as default};
