import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DYVztTZr.js";import{M as i,P as d,a as l}from"./index-DiMcLqNU.js";import{C as m}from"./CommandPalette.stories-BgST67wF.js";import{T as s}from"./T-CSiPrsvo.js";import"./iframe-qu22tgWc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CuFfdSZR.js";import"./index-BOG2b6qS.js";import"./index-CL8Ug98z.js";import"./index-L_NAnRtD.js";import"./index-RfYXV94O.js";import"./index-CbIrRVZJ.js";import"./Portal-BhRWnYfq.js";import"./Transition-BBF4nACK.js";import"./Icon-T089OD9E.js";import"./FocusTrap-Dr6MNaC4.js";import"./useTranslation-EUX2Air0.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m}),`
`,n.jsx(e.h1,{id:"command-palette",children:"Command Palette"}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(s,{k:"doc_commandpalette_title"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"CommandPalette"}),"は、アプリケーション全体での検索、コマンド実行、ナビゲーションを提供するためのモーダルインターフェースです。"]}),`
`,n.jsx(e.p,{children:"モバイルやタブレットでも使いやすいように、画面上部への固定やタップしやすいサイズ調整が自動的に行われます。"}),`
`,n.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"マルチデバイス対応: デスクトップでは中央、モバイルでは画面上部に最適化されたレイアウト。"}),`
`,n.jsxs(e.li,{children:["ショートカット & トリガー: ",n.jsx(e.code,{children:"Cmd+K"})," ショートカットに加え、UI上のボタン（",n.jsx(e.code,{children:"Trigger"}),"）からも起動可能。"]}),`
`,n.jsx(e.li,{children:"キーボードナビゲーション: 矢印キーでの選択、Enterでの実行。"}),`
`]}),`
`,n.jsx(e.h2,{id:"構成",children:"構成"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CommandPalette"}),": ルートコンポーネント（Provider）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CommandPaletteTrigger"}),": 起動用ボタン（任意）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CommandPaletteContent"}),": モーダルコンテンツ本体"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CommandPaletteInput"}),": 検索入力"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CommandPaletteList"}),": アイテム一覧のコンテナ"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CommandPaletteGroup"}),": アイテムをグループ化"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CommandPaletteItem"}),": 各コマンドアイテム"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CommandPaletteEmpty"}),": 検索結果がない時の表示"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CommandPaletteFooter"}),": 操作ヒントフッター"]}),`
`]}),`
`,n.jsx(e.h2,{id:"使い方",children:"使い方"}),`
`,n.jsx(e.h3,{id:"基本パターンtriggerを使用",children:"基本パターン（Triggerを使用）"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<CommandPalette>\r
  <CommandPaletteTrigger>\r
    <span>コマンドを開く</span>\r
    <kbd>⌘K</kbd>\r
  </CommandPaletteTrigger>\r
\r
  <CommandPaletteContent>\r
    <CommandPaletteInput />\r
    <CommandPaletteList>\r
      <CommandPaletteItem onSelect={() => {}}>Action 1</CommandPaletteItem>\r
    </CommandPaletteList>\r
  </CommandPaletteContent>\r
</CommandPalette>
`})}),`
`,n.jsx(e.h3,{id:"制御パターン状態を外部で管理",children:"制御パターン（状態を外部で管理）"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const [open, setOpen] = useState(false);\r
\r
return (\r
  <>\r
    <button onClick={() => setOpen(true)}>Open</button>\r
    <CommandPalette open={open} onOpenChange={setOpen}>\r
      <CommandPaletteContent>\r
        {/* ... */}\r
      </CommandPaletteContent>\r
    </CommandPalette>\r
  </>\r
);
`})}),`
`,n.jsx(e.h2,{id:"プレビュー",children:"プレビュー"}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"プロパティ",children:"プロパティ"}),`
`,n.jsx(l,{})]})}function L(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{L as default};
