import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BIFNsKGi.js";import{M as d,C as l}from"./index-4DgM5D-Z.js";import{T as s,D as o}from"./TreeView.stories-CHk0jnVq.js";import"./iframe-6aDF0cjo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSvwy1DV.js";import"./index-DLC-rPf2.js";import"./index-BFiiEHHx.js";import"./index-CLl-eArg.js";import"./index-CXgkHbHT.js";import"./index-CwLehzOL.js";import"./Icon-iqd88FED.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Component/Data Display/TreeView",of:s}),`
`,e.jsx(n.h1,{id:"treeview",children:"TreeView"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TreeView"})," は、階層構造を持つデータを表示するためのコンポーネントです。"]}),`
`,e.jsx(n.h2,{id:"特徴",children:"特徴"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"展開・折りたたみ機能"}),`
`,e.jsx(n.li,{children:"単一・複数選択"}),`
`,e.jsx(n.li,{children:"キーボードナビゲーション対応"}),`
`,e.jsx(n.li,{children:"アイコンのカスタマイズ"}),`
`,e.jsx(n.li,{children:"グラスモーフィズムを採用したモダンなデザイン"}),`
`]}),`
`,e.jsx(n.h2,{id:"使用方法",children:"使用方法"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TreeView } from "./TreeView";\r
import { Icon } from "../Icon/Icon";\r
\r
const MyTree = () => (\r
    <TreeView defaultExpandedValues={["root"]}>\r
        <TreeView.Item value="root" label="Documents" icon={<Icon name="CircleIcon" />}>\r
            <TreeView.Item value="child1" label="Work" />\r
            <TreeView.Item value="child2" label="Personal" />\r
        </TreeView.Item>\r
    </TreeView>\r
);
`})}),`
`,e.jsx(n.h2,{id:"キャンバス",children:"キャンバス"}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"コンポーネント-api",children:"コンポーネント API"}),`
`,e.jsx(n.h3,{id:"treeview-1",children:"TreeView"}),`
`,e.jsxs(n.p,{children:[`| プロパティ | 型 | デフォルト | 説明 |\r
| :--- | :--- | :--- | :--- |\r
| `,e.jsx(n.code,{children:"width"})," | ",e.jsx(n.code,{children:"string \\| number"}),` | - | コンテナの横幅。変更時にアニメーションします。 |\r
| `,e.jsx(n.code,{children:"multiSelect"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | 複数選択モード。 |\r
| `,e.jsx(n.code,{children:"defaultExpandedValues"})," | ",e.jsx(n.code,{children:"string[]"})," | ",e.jsx(n.code,{children:"[]"}),` | 初期状態で展開されている項目の値。 |\r
| `,e.jsx(n.code,{children:"defaultSelectedValues"})," | ",e.jsx(n.code,{children:"string[]"})," | ",e.jsx(n.code,{children:"[]"})," | 初期状態で選択されている項目の値。 |"]}),`
`,e.jsx(n.h3,{id:"treeviewitem",children:"TreeView.Item"}),`
`,e.jsxs(n.p,{children:[`| プロパティ | 型 | デフォルト | 説明 |\r
| :--- | :--- | :--- | :--- |\r
| `,e.jsx(n.code,{children:"value"})," | ",e.jsx(n.code,{children:"string"}),` | - | 必須。一意の識別子。 |\r
| `,e.jsx(n.code,{children:"label"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | - | 必須。表示するラベル。 |\r
| `,e.jsx(n.code,{children:"icon"})," | ",e.jsx(n.code,{children:"ReactNode"}),` | - | ラベルの左に表示するアイコン。 |\r
| `,e.jsx(n.code,{children:"disabled"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | 無効化状態。 |\r
| `,e.jsx(n.code,{children:"children"})," | ",e.jsx(n.code,{children:"ReactNode"})," | - | 子ノード。 |"]}),`
`,e.jsx(n.h2,{id:"キーボード操作",children:"キーボード操作"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Enter"})," / ",e.jsx(n.code,{children:"Space"}),": 選択"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowRight"}),": 展開（子がある場合）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ArrowLeft"}),": 閉じる（展開されている場合）"]}),`
`]})]})}function b(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{b as default};
