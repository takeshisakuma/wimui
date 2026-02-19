import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DqmbFHE3.js";import{M as i,P as d,a as l}from"./index-DtoN9zbH.js";import{C as m}from"./CommandPalette.stories-CI7av2OS.js";import{T as s}from"./T-D_Gx5n1r.js";import"./iframe-B4Qoxu3n.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnCDoS8F.js";import"./index-DV9E679G.js";import"./index-Dx7V1Jf6.js";import"./index-Dl9aIjA8.js";import"./index-DlSymbc8.js";import"./index-l9XHiKBA.js";import"./Portal-D2zad7Qk.js";import"./Transition-CfPk8PFu.js";import"./Icon-ntAEgp2I.js";import"./FocusTrap-CsA-4d1r.js";import"./useTranslation-CklcMfUY.js";function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:m}),`
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
