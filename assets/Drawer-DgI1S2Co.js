import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BO5av3NA.js";import{M as t,C as o,a as d}from"./index-CHYussR6.js";import{D as l,a as c,L as h,T as x,B as j,C as a}from"./Drawer.stories-BH3MwMeA.js";import{T as p}from"./T-LIJh6Wh9.js";import"./iframe-CLXnzuMj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5nzlw70.js";import"./index-DfTH-9av.js";import"./index-RCeXGBEX.js";import"./index-D7PhRZgK.js";import"./index-DUBQ6tkK.js";import"./Drawer-C5_ZdB84.js";import"./index-DIcffr0b.js";import"./FocusTrap-CFG6NdZl.js";import"./Button-C2YkOmvP.js";import"./Icon-CfK0pkXv.js";import"./useTranslation-C0TmU-R_.js";function s(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:l}),`
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
