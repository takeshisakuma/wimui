import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-DSa2Oe1e.js";import{M as o,P as s,a as l}from"./index-C68Tkxte.js";import{C as i}from"./CommandPalette.stories-DRyCuAmw.js";import"./utils-02Y0UBtw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3Yd4HRE.js";import"./iframe-BYjsp1IA.js";import"./viz-BRLp5-ay.js";import"./index-CLEKZecO.js";import"./Icon-CsOAjbJY.js";import"./index-CyF2BHNT.js";import"./FocusTrap-BQmDpsd2.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:i}),`
`,n.jsx(e.h1,{id:"command-palette",children:"Command Palette"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"CommandPalette"}),"は、アプリケーション全体での検索、コマンド実行、ナビゲーションを提供するためのモーダルインターフェースです。"]}),`
`,n.jsx(e.p,{children:"モバイルやタブレットでも使いやすいように、画面上部への固定やタップしやすいサイズ調整が自動的に行われます。"}),`
`,n.jsx(e.h2,{id:"特徴",children:"特徴"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"マルチデバイス対応"}),": デスクトップでは中央、モバイルでは画面上部に最適化されたレイアウト。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ショートカット & トリガー"}),": ",n.jsx(e.code,{children:"Cmd+K"})," ショートカットに加え、UI上のボタン（",n.jsx(e.code,{children:"Trigger"}),"）からも起動可能。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"キーボードナビゲーション"}),": 矢印キーでの選択、Enterでの実行。"]}),`
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
`,n.jsx(s,{}),`
`,n.jsx(e.h2,{id:"プロパティ",children:"プロパティ"}),`
`,n.jsx(l,{})]})}function M(t={}){const{wrapper:e}={...d(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{M as default};
