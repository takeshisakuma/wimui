import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Bk8X1Xu_.js";import{M as t,C as s,a as h}from"./blocks-C6FzcQKW.js";import{D as l,a as c,L as x,T as j,B as o,C as a}from"./Drawer.stories-BmjJbYEM.js";import{T as p}from"./T-C8hbYU9U.js";import"./iframe-Dgvn1YDu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdLmKoSX.js";import"./index-Dgi1rt6o.js";import"./index-Z9rhKA2M.js";import"./index-DbGvuoi8.js";import"./Drawer-BxyBOjxg.js";import"./index-CZyd2_qg.js";import"./Portal-CjiCrP0Q.js";import"./Transition-CsIAIYHK.js";import"./FocusTrap-DKqBXdkJ.js";import"./Button-BLjuKSaO.js";import"./Icon--zs9NUy0.js";import"./useTranslation-CfaHxh4C.js";function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...i(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:l}),`
`,r.jsx(n.h1,{id:"drawer",children:"Drawer"}),`
`,r.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:r.jsx(p,{k:"doc_drawer_title"})}),`
`,r.jsx(n.p,{children:"Drawerは、画面の端からスライドして表示されるパネルです。追加のコンテキストやナビゲーション、設定などを表示するために使用されます。"}),`
`,r.jsx(n.h2,{id:"ドロワーuiサイドメニューの基本原則",children:"ドロワーUI（サイドメニュー）の基本原則"}),`
`,r.jsx(n.p,{children:"ドロワーは単なるメニュー表示の手段ではなく、複雑な機能を整理し、ユーザーに分かりやすく提示するための重要なUI要素です。"}),`
`,r.jsx(n.h3,{id:"ドロワーの主なタイプ",children:"ドロワーの主なタイプ"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{align:"left",width:"40%",children:r.jsx(n.p,{children:"タイプ"})}),r.jsx("th",{align:"left",children:"特徴"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"モーダルナビゲーションドロワー"})}),r.jsx("td",{children:r.jsx(n.p,{children:"モバイルアプリで最も一般的なタイプ。ハンバーガーメニュー等から呼び出し、操作中は背景が暗くなることでメニューにフォーカスを集中させます。限られた画面スペースを最大化できます。"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"標準ナビゲーションドロワー"})}),r.jsx("td",{children:r.jsx(n.p,{children:"タブレットやデスクトップなどの大画面で、メインコンテンツと常に並行して表示されます。頻繁にセクションを切り替える必要があるビジネスツール等で効果的です。"})})]})]})]}),`
`,r.jsx(n.h3,{id:"効果的な使用シーン",children:"効果的な使用シーン"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{align:"left",width:"40%",children:r.jsx(n.p,{children:"目的"})}),r.jsx("th",{align:"left",children:"解説"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"多階層なナビゲーション"})}),r.jsx("td",{children:r.jsx(n.p,{children:`5つ以上のセクションや「ワークスペース ＞ プロジェクト ＞
タスク」のような深い階層を持つ場合に、全体像を損なわずに切り替えを可能にします。`})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"デスクトップとの一貫性"})}),r.jsx("td",{children:"PC版と同様の使い勝手をモバイルでも維持し、学習コストを抑えます。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"将来の拡張性"})}),r.jsx("td",{children:r.jsx(n.p,{children:"開発初期は項目が少なくても、将来的にメニューが増える可能性がある場合の設計としても優れています。"})})]})]})]}),`
`,r.jsx(n.h3,{id:"設計上の注意点",children:"設計上の注意点"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{align:"left",width:"40%",children:r.jsx(n.p,{children:"考慮すべき点"})}),r.jsx("th",{align:"left",children:"指針"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"メインアクションは格納しない"})}),r.jsx("td",{children:r.jsx(n.p,{children:"ドロワーは意図的に「一階層深く」なるため、サブ機能やカテゴリーの切り替えといった、アプリ全体を俯瞰する補助的な役割としての活用が推奨されます。"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"モバイル専用アプリでの検討"})}),r.jsx("td",{children:r.jsxs(n.p,{children:["主要な移動先が4つ程度であれば、より少ないタップ数でアクセスできる",r.jsx(n.strong,{children:"ボトムナビゲーションバー"}),"の方がUXとして優れている場合があります。"]})})]})]})]}),`
`,r.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"Drawer"})," コンポーネントの中に ",r.jsx(n.code,{children:"DrawerTrigger"})," と ",r.jsx(n.code,{children:"DrawerContent"}),` を配置します。
`,r.jsx(n.code,{children:"side"})," プロパティを使用して、表示される位置（top, right, bottom, left）を指定できます。デフォルトは ",r.jsx(n.code,{children:"right"})," です。"]}),`
`,r.jsx(s,{of:c}),`
`,r.jsx(n.h2,{id:"表示位置のバリエーション",children:"表示位置のバリエーション"}),`
`,r.jsx(n.h3,{id:"left",children:"Left"}),`
`,r.jsx(s,{of:x}),`
`,r.jsx(n.h3,{id:"top",children:"Top"}),`
`,r.jsx(s,{of:j}),`
`,r.jsx(n.h3,{id:"bottom",children:"Bottom"}),`
`,r.jsx(s,{of:o}),`
`,r.jsx(n.h2,{id:"制御された状態-controlled",children:"制御された状態 (Controlled)"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"open"})," プロパティと ",r.jsx(n.code,{children:"onOpenChange"})," イベントハンドラを使用することで、ドロワーの開閉状態を完全に制御できます。"]}),`
`,r.jsx(s,{of:a}),`
`,r.jsx(n.h2,{id:"api",children:"API"}),`
`,r.jsx(n.h3,{id:"drawer-components",children:"Drawer Components"}),`
`,r.jsx(n.h3,{id:"drawer-components-1",children:"Drawer Components"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{align:"left",children:"Component"}),r.jsx("th",{align:"left",children:"Description"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"Drawer"})}),r.jsx("td",{children:"ルートコンポーネント。コンテキストを提供します。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"DrawerTrigger"})}),r.jsx("td",{children:r.jsxs(n.p,{children:["ドロワーを開くためのボタントリガー。",r.jsx(n.code,{children:"asChild"}),`
を使用して他のコンポーネントをトリガーとして機能させることができます。`]})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"DrawerContent"})}),r.jsx("td",{children:r.jsx(n.p,{children:"ドロワーの中身を表示するパネル。FocusTrapとスクロールロックを管理します。"})})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"DrawerHeader"})}),r.jsx("td",{children:"タイトルなどのヘッダー領域。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"DrawerFooter"})}),r.jsx("td",{children:"アクションボタンなどのフッター領域。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"DrawerTitle"})}),r.jsx("td",{children:"ドロワーのタイトル。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"DrawerDescription"})}),r.jsx("td",{children:"ドロワーの補助的な説明。"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx(n.strong,{children:"DrawerClose"})}),r.jsxs("td",{children:["ドロワーを閉じるためのボタン。",r.jsx(n.code,{children:"asChild"})," が利用可能です。"]})]})]})]}),`
`,r.jsx(n.h2,{id:"props",children:"Props"}),`
`,r.jsx(h,{})]})}function H(e={}){const{wrapper:n}={...i(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(d,{...e})}):d(e)}export{H as default};
