import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-D7SuzjHL.js";import{M as i,C as c}from"./index-BZATBabr.js";import{T as s,D as h}from"./TreeView.stories-CGAC4pxV.js";import{T as t}from"./T-6JBhxhqZ.js";import"./iframe-EVkAXmOk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDLWA32h.js";import"./index-ef_LzJKW.js";import"./index-CHzC7w-f.js";import"./index-DuqyPMeR.js";import"./index-BD8EsMqe.js";import"./TreeView-B352Qp0C.js";import"./index-BX12fiL9.js";import"./Icon-BGwsqTxV.js";import"./useTranslation-DRZYA3vJ.js";function l(d){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(n.h1,{id:"treeview",children:"TreeView"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(t,{k:"doc_treeview_title"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"TreeView"})," は、階層構造を持つデータを表示するためのコンポーネントです。ファイルシステム、組織図、カテゴリー階層などの表示に最適です。"]}),`
`,e.jsx(n.h2,{id:"特徴",children:"特徴"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"展開・折りたたみ機能"}),`
`,e.jsx(n.li,{children:"単一・複数選択"}),`
`,e.jsx(n.li,{children:"チェックボックス選択モード"}),`
`,e.jsx(n.li,{children:"検索・フィルタリング機能"}),`
`,e.jsx(n.li,{children:"キーボードナビゲーション対応"}),`
`,e.jsx(n.li,{children:"アイコンのカスタマイズ"}),`
`,e.jsx(n.li,{children:"グラスモーフィズムを採用したモダンなデザイン"}),`
`]}),`
`,e.jsx(n.h2,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TreeView } from "@/components/TreeView/TreeView";
import { Icon } from "@/components/Icon/Icon";

const MyTree = () => (
  <TreeView defaultExpandedValues={["root"]}>
    <TreeView.Item
      value="root"
      label="Documents"
      icon={<Icon name="CircleIcon" />}
    >
      <TreeView.Item value="child1" label="Work" />
      <TreeView.Item value="child2" label="Personal" />
    </TreeView.Item>
  </TreeView>
);
`})}),`
`,e.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(c,{of:h}),`
`,e.jsx(n.h2,{id:"高度な機能",children:"高度な機能"}),`
`,e.jsx(n.h3,{id:"チェックボックス選択モード",children:"チェックボックス選択モード"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"checkable"})," プロパティを有効にすると、各アイテムにチェックボックスが表示され、複数アイテムを選択できます。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [checked, setChecked] = useState([]);

<TreeView checkable defaultCheckedValues={checked} onCheckedChange={setChecked}>
  <TreeView.Item value="1" label="Item 1">
    <TreeView.Item value="1-1" label="Item 1-1" />
    <TreeView.Item value="1-2" label="Item 1-2" />
  </TreeView.Item>
  <TreeView.Item value="2" label="Item 2" />
</TreeView>;
`})}),`
`,e.jsx(n.p,{children:"ユースケース:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ファイル/フォルダの複数選択"}),`
`,e.jsx(n.li,{children:"権限設定"}),`
`,e.jsx(n.li,{children:"タスクの一括操作"}),`
`]}),`
`,e.jsx(n.h3,{id:"検索フィルタリング機能",children:"検索・フィルタリング機能"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"searchable"})," プロパティを有効にすると、ツリー内のアイテムを検索できる入力フィールドが表示されます。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TreeView searchable>
  <TreeView.Item value="documents" label="Documents">
    <TreeView.Item value="work" label="Work">
      <TreeView.Item value="projects" label="Projects" />
      <TreeView.Item value="reports" label="Reports" />
    </TreeView.Item>
    <TreeView.Item value="personal" label="Personal" />
  </TreeView.Item>
</TreeView>
`})}),`
`,e.jsx(n.p,{children:"検索時には、一致するアイテムとその親アイテムのみが表示されます。"}),`
`,e.jsx(n.h3,{id:"複数選択モード",children:"複数選択モード"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"multiSelect"})," プロパティを使用すると、複数のアイテムを選択状態にできます。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TreeView multiSelect defaultSelectedValues={["item1", "item2"]}>
  {/* ツリーアイテム */}
</TreeView>
`})}),`
`,e.jsx(n.h3,{id:"カスタムアイコン",children:"カスタムアイコン"}),`
`,e.jsx(n.p,{children:"各アイテムにカスタムアイコンを設定できます。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TreeView>
  <TreeView.Item
    value="folder1"
    label="Documents"
    icon={<Icon name="CircleIcon" />}
  >
    <TreeView.Item
      value="file1"
      label="Report.pdf"
      icon={<Icon name="SquareIcon" />}
    />
  </TreeView.Item>
</TreeView>
`})}),`
`,e.jsx(n.h3,{id:"すべての機能を組み合わせ",children:"すべての機能を組み合わせ"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [checked, setChecked] = useState([]);

<TreeView
  multiSelect
  checkable
  searchable
  defaultExpandedValues={["root"]}
  defaultCheckedValues={checked}
  onCheckedChange={setChecked}
  width={400}
>
  <TreeView.Item value="root" label="Root">
    <TreeView.Item value="child1" label="Child 1" />
    <TreeView.Item value="child2" label="Child 2">
      <TreeView.Item value="grandchild1" label="Grandchild 1" />
    </TreeView.Item>
  </TreeView.Item>
</TreeView>;
`})}),`
`,e.jsx(n.h2,{id:"コンポーネント-api",children:"コンポーネント API"}),`
`,e.jsx(n.h3,{id:"treeview-1",children:"TreeView"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"プロパティ"}),e.jsx("th",{children:"型"}),e.jsx("th",{children:"デフォルト"}),e.jsx("th",{children:"説明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"width"})}),e.jsx("td",{children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"コンテナの横幅。変更時にアニメーションします。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"multiSelect"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"複数選択モード。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"checkable"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"チェックボックス表示モード。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"searchable"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"検索機能を有効化。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultExpandedValues"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:"初期状態で展開されている項目の値。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultSelectedValues"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:"初期状態で選択されている項目の値。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"defaultCheckedValues"})}),e.jsx("td",{children:e.jsx("code",{children:"string[]"})}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:"初期状態でチェックされている項目の値。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onCheckedChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(checked: string[]) => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"チェック状態が変更された時のコールバック。"})]})]})]}),`
`,e.jsx(n.h3,{id:"treeviewitem",children:"TreeView.Item"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"プロパティ"}),e.jsx("th",{children:"型"}),e.jsx("th",{children:"デフォルト"}),e.jsx("th",{children:"説明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"value"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"必須。一意の識別子。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"必須。表示するラベル。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"icon"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"ラベルの左に表示するアイコン。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"無効化状態。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"children"})}),e.jsx("td",{children:e.jsx("code",{children:"ReactNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"子ノード。"})]})]})]}),`
`,e.jsx(n.h2,{id:"キーボード操作",children:"キーボード操作"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"キー"}),e.jsx("th",{children:"動作"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"Enter"})," / ",e.jsx("code",{children:"Space"})]})}),e.jsx("td",{children:"選択"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowRight"})}),e.jsx("td",{children:"展開（子がある場合）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ArrowLeft"})}),e.jsx("td",{children:"閉じる（展開されている場合）"})]})]})]}),`
`,e.jsx(n.h2,{id:"アクセシビリティ",children:"アクセシビリティ"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'ARIA role="tree" と role="treeitem" を使用'}),`
`,e.jsx(n.li,{children:"キーボードナビゲーション完全サポート"}),`
`,e.jsx(n.li,{children:"スクリーンリーダー対応"}),`
`,e.jsx(n.li,{children:"フォーカス管理"}),`
`]}),`
`,e.jsx(n.h2,{id:"typescript-サポート",children:"TypeScript サポート"}),`
`,e.jsx(n.p,{children:"TreeViewコンポーネントは完全な型定義を提供しています。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { TreeView } from "./TreeView";
import { T } from "../T";

<TreeView
  multiSelect
  checkable
  defaultCheckedValues={["item1"]}
  onCheckedChange={(checked: string[]) => {
    console.log("Checked items:", checked);
  }}
>
  {/* アイテム */}
</TreeView>;
`})})]})}function v(d={}){const{wrapper:n}={...r(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(l,{...d})}):l(d)}export{v as default};
