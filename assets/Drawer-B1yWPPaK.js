import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-D4HkRMM8.js";import{M as t,C as o,a as d}from"./index-B0Z6462_.js";import{D as l,a as c,L as h,T as x,B as a,C as j}from"./Drawer.stories-N8InZzJp.js";import{T as p}from"./T-TiKTjfdU.js";import"./iframe-B9SSQewD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DL9vcse4.js";import"./index-DT_cYXDB.js";import"./index-DihkFn3j.js";import"./index-BF14opok.js";import"./index-B1qvGI7O.js";import"./Drawer-DSbXrxYr.js";import"./index-B5-Yv-Fa.js";import"./Portal-CUPuZrqw.js";import"./Transition-CmwwXBMR.js";import"./FocusTrap-D2bjW4b5.js";import"./Button-CXlyS40c.js";import"./Icon-BrKjnFhm.js";import"./useTranslation-CmIinFSF.js";function i(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:l}),`
`,r.jsx(e.h1,{id:"drawer",children:"Drawer"}),`
`,r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:r.jsx(p,{k:"doc_drawer_title"})}),`
`,r.jsx(e.p,{children:"Drawerは、画面の端からスライドして表示されるパネルです。追加のコンテキストやナビゲーション、設定などを表示するために使用されます。"}),`
`,r.jsx(e.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"Drawer"})," コンポーネントの中に ",r.jsx(e.code,{children:"DrawerTrigger"})," と ",r.jsx(e.code,{children:"DrawerContent"}),` を配置します。\r
`,r.jsx(e.code,{children:"side"})," プロパティを使用して、表示される位置（top, right, bottom, left）を指定できます。デフォルトは ",r.jsx(e.code,{children:"right"})," です。"]}),`
`,r.jsx(o,{of:c}),`
`,r.jsx(e.h2,{id:"表示位置のバリエーション",children:"表示位置のバリエーション"}),`
`,r.jsx(e.h3,{id:"left",children:"Left"}),`
`,r.jsx(o,{of:h}),`
`,r.jsx(e.h3,{id:"top",children:"Top"}),`
`,r.jsx(o,{of:x}),`
`,r.jsx(e.h3,{id:"bottom",children:"Bottom"}),`
`,r.jsx(o,{of:a}),`
`,r.jsx(e.h2,{id:"制御された状態-controlled",children:"制御された状態 (Controlled)"}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"open"})," プロパティと ",r.jsx(e.code,{children:"onOpenChange"})," イベントハンドラを使用することで、ドロワーの開閉状態を完全に制御できます。"]}),`
`,r.jsx(o,{of:j}),`
`,r.jsx(e.h2,{id:"api",children:"API"}),`
`,r.jsx(e.h3,{id:"drawer-components",children:"Drawer Components"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:"Drawer: ルートコンポーネント。コンテキストを提供します。"}),`
`,r.jsxs(e.li,{children:["DrawerTrigger: ドロワーを開くためのボタントリガー。",r.jsx(e.code,{children:"asChild"})," を使用して他のコンポーネントをトリガーとして機能させることができます。"]}),`
`,r.jsx(e.li,{children:"DrawerContent: ドロワーの中身を表示するパネル。FocusTrapとスクロールロックを管理します。"}),`
`,r.jsx(e.li,{children:"DrawerHeader: タイトルなどのヘッダー領域。"}),`
`,r.jsx(e.li,{children:"DrawerFooter: アクションボタンなどのフッター領域。"}),`
`,r.jsx(e.li,{children:"DrawerTitle: ドロワーのタイトル。"}),`
`,r.jsx(e.li,{children:"DrawerDescription: ドロワーの補助的な説明。"}),`
`,r.jsxs(e.li,{children:["DrawerClose: ドロワーを閉じるためのボタン。",r.jsx(e.code,{children:"asChild"})," が利用可能です。"]}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(d,{})]})}function v(n={}){const{wrapper:e}={...s(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(i,{...n})}):i(n)}export{v as default};
