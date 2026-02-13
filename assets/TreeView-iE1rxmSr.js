import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-COjsfrP9.js";import{M as c,C as d}from"./index-CVrpz86a.js";import{T as s,D as h}from"./TreeView.stories-CImIoGdc.js";import{T as o}from"./T-BYLLs7U0.js";import"./iframe-Dkx9lEgu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CqtyioRR.js";import"./index-CR1wZBOM.js";import"./index-ChqdSyrJ.js";import"./index-DRcyspq3.js";import"./index-P4wXBRIN.js";import"./index-BzKEtpRa.js";import"./Icon-Djms2A0i.js";import"./useTranslation-Djvrzco-.js";function l(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Component/Data Display/TreeView",of:s}),`
`,e.jsx(n.h1,{id:"treeview",children:"TreeView"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(o,{k:"doc_treeview_title"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TreeView"})," は、階層構造を持つデータを表示するためのコンポーネントです。ファイルシステム、組織図、カテゴリー階層などの表示に最適です。"]}),`
`,e.jsx(n.h2,{id:"特徴",children:"特徴"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✅ 展開・折りたたみ機能"}),`
`,e.jsx(n.li,{children:"✅ 単一・複数選択"}),`
`,e.jsx(n.li,{children:"✅ チェックボックス選択モード"}),`
`,e.jsx(n.li,{children:"✅ 検索・フィルタリング機能"}),`
`,e.jsx(n.li,{children:"✅ キーボードナビゲーション対応"}),`
`,e.jsx(n.li,{children:"✅ アイコンのカスタマイズ"}),`
`,e.jsx(n.li,{children:"✅ グラスモーフィズムを採用したモダンなデザイン"}),`
`]}),`
`,e.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TreeView } from "@/components/TreeView/TreeView";\r
import { Icon } from "@/components/Icon/Icon";\r
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
`,e.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(n.h2,{id:"高度な機能",children:"高度な機能"}),`
`,e.jsx(n.h3,{id:"チェックボックス選択モード",children:"チェックボックス選択モード"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"checkable"})," プロパティを有効にすると、各アイテムにチェックボックスが表示され、複数アイテムを選択できます。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [checked, setChecked] = useState([]);\r
\r
<TreeView \r
  checkable\r
  defaultCheckedValues={checked}\r
  onCheckedChange={setChecked}\r
>\r
  <TreeView.Item value="1" label="Item 1">\r
    <TreeView.Item value="1-1" label="Item 1-1" />\r
    <TreeView.Item value="1-2" label="Item 1-2" />\r
  </TreeView.Item>\r
  <TreeView.Item value="2" label="Item 2" />\r
</TreeView>
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"ユースケース:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ファイル/フォルダの複数選択"}),`
`,e.jsx(n.li,{children:"権限設定"}),`
`,e.jsx(n.li,{children:"タスクの一括操作"}),`
`]}),`
`,e.jsx(n.h3,{id:"検索フィルタリング機能",children:"検索・フィルタリング機能"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"searchable"})," プロパティを有効にすると、ツリー内のアイテムを検索できる入力フィールドが表示されます。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TreeView searchable>\r
  <TreeView.Item value="documents" label="Documents">\r
    <TreeView.Item value="work" label="Work">\r
      <TreeView.Item value="projects" label="Projects" />\r
      <TreeView.Item value="reports" label="Reports" />\r
    </TreeView.Item>\r
    <TreeView.Item value="personal" label="Personal" />\r
  </TreeView.Item>\r
</TreeView>
`})}),`
`,e.jsx(n.p,{children:"検索時には、一致するアイテムとその親アイテムのみが表示されます。"}),`
`,e.jsx(n.h3,{id:"複数選択モード",children:"複数選択モード"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"multiSelect"})," プロパティを使用すると、複数のアイテムを選択状態にできます。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TreeView \r
  multiSelect\r
  defaultSelectedValues={['item1', 'item2']}\r
>\r
  {/* ツリーアイテム */}\r
</TreeView>
`})}),`
`,e.jsx(n.h3,{id:"カスタムアイコン",children:"カスタムアイコン"}),`
`,e.jsx(n.p,{children:"各アイテムにカスタムアイコンを設定できます。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TreeView>\r
  <TreeView.Item \r
    value="folder1" \r
    label="Documents"\r
    icon={<Icon name="CircleIcon" />}\r
  >\r
    <TreeView.Item \r
      value="file1" \r
      label="Report.pdf"\r
      icon={<Icon name="SquareIcon" />}\r
    />\r
  </TreeView.Item>\r
</TreeView>
`})}),`
`,e.jsx(n.h3,{id:"すべての機能を組み合わせ",children:"すべての機能を組み合わせ"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [checked, setChecked] = useState([]);\r
\r
<TreeView\r
  multiSelect\r
  checkable\r
  searchable\r
  defaultExpandedValues={['root']}\r
  defaultCheckedValues={checked}\r
  onCheckedChange={setChecked}\r
  width={400}\r
>\r
  <TreeView.Item value="root" label="Root">\r
    <TreeView.Item value="child1" label="Child 1" />\r
    <TreeView.Item value="child2" label="Child 2">\r
      <TreeView.Item value="grandchild1" label="Grandchild 1" />\r
    </TreeView.Item>\r
  </TreeView.Item>\r
</TreeView>
`})}),`
`,e.jsx(n.h2,{id:"コンポーネント-api",children:"コンポーネント API"}),`
`,e.jsx(n.h3,{id:"treeview-1",children:"TreeView"}),`
`,e.jsxs(n.p,{children:[`| プロパティ | 型 | デフォルト | 説明 |\r
| :--- | :--- | :--- | :--- |\r
| `,e.jsx(n.code,{children:"width"})," | ",e.jsx(n.code,{children:"string \\| number"}),` | - | コンテナの横幅。変更時にアニメーションします。 |\r
| `,e.jsx(n.code,{children:"multiSelect"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | 複数選択モード。 |\r
| `,e.jsx(n.code,{children:"checkable"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | チェックボックス表示モード。 |\r
| `,e.jsx(n.code,{children:"searchable"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | 検索機能を有効化。 |\r
| `,e.jsx(n.code,{children:"defaultExpandedValues"})," | ",e.jsx(n.code,{children:"string[]"})," | ",e.jsx(n.code,{children:"[]"}),` | 初期状態で展開されている項目の値。 |\r
| `,e.jsx(n.code,{children:"defaultSelectedValues"})," | ",e.jsx(n.code,{children:"string[]"})," | ",e.jsx(n.code,{children:"[]"}),` | 初期状態で選択されている項目の値。 |\r
| `,e.jsx(n.code,{children:"defaultCheckedValues"})," | ",e.jsx(n.code,{children:"string[]"})," | ",e.jsx(n.code,{children:"[]"}),` | 初期状態でチェックされている項目の値。 |\r
| `,e.jsx(n.code,{children:"onCheckedChange"})," | ",e.jsx(n.code,{children:"(checked: string[]) => void"})," | - | チェック状態が変更された時のコールバック。 |"]}),`
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
`]}),`
`,e.jsx(n.h2,{id:"アクセシビリティ",children:"アクセシビリティ"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'✅ ARIA role="tree" と role="treeitem" を使用'}),`
`,e.jsx(n.li,{children:"✅ キーボードナビゲーション完全サポート"}),`
`,e.jsx(n.li,{children:"✅ スクリーンリーダー対応"}),`
`,e.jsx(n.li,{children:"✅ フォーカス管理"}),`
`]}),`
`,e.jsx(n.h2,{id:"typescript-サポート",children:"TypeScript サポート"}),`
`,e.jsx(n.p,{children:"TreeViewコンポーネントは完全な型定義を提供しています。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TreeView } from './TreeView';\r
import { T } from "../T";\r
\r
<TreeView \r
  multiSelect\r
  checkable\r
  defaultCheckedValues={['item1']}\r
  onCheckedChange={(checked: string[]) => {\r
    console.log('Checked items:', checked);\r
  }}\r
>\r
  {/* アイテム */}\r
</TreeView>
`})})]})}function C(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{C as default};
