import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dsz5Chki.js";import{M as s,P as i,a as l}from"./index-DBpWV4oo.js";import{C as c}from"./CommandPalette.stories-DvBJY888.js";import{T as o}from"./T-CkEGlpbz.js";import"./iframe-DY0V2adl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1ZCeEV1.js";import"./index-CRt-iUiP.js";import"./index-CQI1ztNZ.js";import"./index-Cw2hhaG0.js";import"./index-D4dD7-9v.js";import"./index-qsBB_Z-V.js";import"./Portal-De-fYbX6.js";import"./Transition-SAD025hA.js";import"./Icon-Bk4PPPQY.js";import"./FocusTrap-DLp1PSrf.js";import"./useTranslation-BxNSKkfN.js";function d(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(n.h1,{id:"command-palette",children:"Command Palette"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(o,{k:"doc_commandpalette_title"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CommandPalette"}),"は、アプリケーション全体での検索、コマンド実行、ナビゲーションを提供するためのモーダルインターフェースです。"]}),`
`,e.jsx(n.p,{children:"モバイルやタブレットでも使いやすいように、画面上部への固定やタップしやすいサイズ調整が自動的に行われます。"}),`
`,e.jsx(n.h2,{id:"特徴",children:"特徴"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"特徴"}),e.jsx("th",{children:"説明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"マルチデバイス対応"})}),e.jsx("td",{children:"デスクトップでは中央、モバイルでは画面上部に最適化されたレイアウト。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"ショートカット & トリガー"})}),e.jsxs("td",{children:[e.jsx("code",{children:"Cmd+K"})," ショートカットに加え、UI上のボタン（",e.jsx("code",{children:"Trigger"}),"）からも起動可能。"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"キーボードナビゲーション"})}),e.jsx("td",{children:"矢印キーでの選択、Enterでの実行。"})]})]})]}),`
`,e.jsx(n.h2,{id:"構成",children:"構成"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"コンポーネント"}),e.jsx("th",{children:"役割"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPalette"})}),e.jsx("td",{children:"ルートコンポーネント（Provider）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteTrigger"})}),e.jsx("td",{children:"起動用ボタン（任意）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteContent"})}),e.jsx("td",{children:"モーダルコンテンツ本体"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteInput"})}),e.jsx("td",{children:"検索入力"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteList"})}),e.jsx("td",{children:"アイテム一覧のコンテナ"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteGroup"})}),e.jsx("td",{children:"アイテムをグループ化"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteItem"})}),e.jsx("td",{children:"各コマンドアイテム"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteEmpty"})}),e.jsx("td",{children:"検索結果がない時の表示"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"CommandPaletteFooter"})}),e.jsx("td",{children:"操作ヒントフッター"})]})]})]}),`
`,e.jsx(n.h2,{id:"使い方",children:"使い方"}),`
`,e.jsx(n.h3,{id:"基本パターンtriggerを使用",children:"基本パターン（Triggerを使用）"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CommandPalette>
  <CommandPaletteTrigger>
    <span>コマンドを開く</span>
    <kbd>⌘K</kbd>
  </CommandPaletteTrigger>

  <CommandPaletteContent>
    <CommandPaletteInput />
    <CommandPaletteList>
      <CommandPaletteItem onSelect={() => {}}>Action 1</CommandPaletteItem>
    </CommandPaletteList>
  </CommandPaletteContent>
</CommandPalette>
`})}),`
`,e.jsx(n.h3,{id:"制御パターン状態を外部で管理",children:"制御パターン（状態を外部で管理）"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [open, setOpen] = useState(false);

return (
  <>
    <button onClick={() => setOpen(true)}>Open</button>
    <CommandPalette open={open} onOpenChange={setOpen}>
      <CommandPaletteContent>{/* ... */}</CommandPaletteContent>
    </CommandPalette>
  </>
);
`})}),`
`,e.jsx(n.h2,{id:"プレビュー",children:"プレビュー"}),`
`,e.jsx(i,{}),`
`,e.jsx(n.h2,{id:"プロパティ",children:"プロパティ"}),`
`,e.jsx(l,{})]})}function L(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(d,{...t})}):d(t)}export{L as default};
