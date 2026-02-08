import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-C2xSIaoD.js";import{M as m,P as d,a as l}from"./index-C1rjNvlD.js";import{C as i}from"./CommandPalette.stories-Eexih57p.js";import"./iframe-n4D-bytZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDcz0nAk.js";import"./index-DsCNz1Ak.js";import"./index-D78iGUZq.js";import"./index-C0l1cE17.js";import"./index-acv-lZDJ.js";import"./index-PgZOI6Ef.js";import"./Icon-MCh7-02j.js";import"./index-C-1jl7UE.js";import"./FocusTrap-Dh6sWHAq.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:i}),`
`,e.jsx(n.h1,{id:"command-palette",children:"Command Palette"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CommandPalette"}),"は、アプリケーション全体での検索、コマンド実行、ナビゲーションを提供するためのモーダルインターフェースです。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Cmd+K"})," (または ",e.jsx(n.code,{children:"Ctrl+K"}),") のショートカットキーで開くことができます。"]}),`
`,e.jsx(n.h2,{id:"構成",children:"構成"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CommandPalette"}),": ルートコンポーネント（モーダルの開閉管理）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CommandPaletteInput"}),": 検索入力"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CommandPaletteList"}),": アイテム一覧のコンテナ"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CommandPaletteGroup"}),": アイテムをグループ化"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CommandPaletteItem"}),": 各コマンドアイテム"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CommandPaletteEmpty"}),": 検索結果がない時の表示"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CommandPaletteFooter"}),": 操作ヒントなどを表示するフッター"]}),`
`]}),`
`,e.jsx(n.h2,{id:"使い方",children:"使い方"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { \r
  CommandPalette, \r
  CommandPaletteInput, \r
  CommandPaletteList, \r
  CommandPaletteItem \r
} from "wim-ui";\r
\r
const MyComponent = () => {\r
    const [open, setOpen] = useState(false);\r
    \r
    return (\r
        <CommandPalette open={open} onOpenChange={setOpen}>\r
            <CommandPaletteInput />\r
            <CommandPaletteList>\r
                <CommandPaletteItem onSelect={() => {}}>Action 1</CommandPaletteItem>\r
                <CommandPaletteItem onSelect={() => {}}>Action 2</CommandPaletteItem>\r
            </CommandPaletteList>\r
        </CommandPalette>\r
    );\r
};
`})}),`
`,e.jsx(n.h2,{id:"プレビュー",children:"プレビュー"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"プロパティ",children:"プロパティ"}),`
`,e.jsx(l,{})]})}function y(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{y as default};
