import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-B2Kw0tQd.js";import{M as c,P as o,a as l,C as r}from"./index-DuOOPVLf.js";import{D as t,W as h,a,b as x,c as j,L as p,E as m,S as g,B as u,d as y,F as f}from"./DataGrid.stories-Dc_T--Do.js";import"./T-BW2sHQC9.js";import"./iframe-uSE7GweJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DBPYyS1u.js";import"./index-B4JNxt7s.js";import"./index-21ee6Z8I.js";import"./index-BwvxwuS4.js";import"./index-ClTsLOd1.js";import"./index-2r2kfcGX.js";import"./Table-CXi7Y-j3.js";import"./Icon-DG03PgD5.js";import"./Checkbox-BuvPLvf9.js";import"./Pagination-Cl2hEkFq.js";import"./Spinner-iLhmNYVs.js";import"./EmptyState-3G6AoxkI.js";import"./useTranslation-C4P5Bgpw.js";import"./Badge-COPsnKco.js";import"./Button-DuXBwRfT.js";function i(d){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:t}),`
`,e.jsx(n.h1,{id:"datagrid",children:"DataGrid"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(n.p,{children:"高機能なデータグリッドコンポーネント。ソート、ページネーション、行選択などの機能を統合的に提供します。"})}),`
`,e.jsx(n.p,{children:"DataGridは、Tableコンポーネントをベースに、よく使われる機能を統合した高レベルのコンポーネントです。複雑なデータテーブルを簡単に実装できます。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️ ",e.jsx(n.strong,{children:"PCのみ"}),": このコンポーネントは機能が豊富で横幅を必要とするため、主にPC向けに設計されています。スマートフォンなどの小画面デバイスでの利用は推奨されません。"]}),`
`]}),`
`,e.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(n.h3,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,e.jsx(n.p,{children:"列定義とデータを渡すだけで、基本的なグリッドを表示できます。"}),`
`,e.jsx(o,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h3,{id:"行選択機能",children:"行選択機能"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"selection"})," プロップを有効にすると、チェックボックスによる行選択機能が追加されます。"]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"ソート機能",children:"ソート機能"}),`
`,e.jsxs(n.p,{children:["列定義で ",e.jsx(n.code,{children:"sortable: true"})," を指定し、",e.jsx(n.code,{children:"sortConfig"})," と ",e.jsx(n.code,{children:"onSort"})," を渡すことで、ソート機能を実装できます。"]}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h3,{id:"ページネーション",children:"ページネーション"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"pagination"})," プロップを渡すことで、ページネーション機能を追加できます。"]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"アクション列",children:"アクション列"}),`
`,e.jsx(n.p,{children:"カスタムレンダー関数を使用して、各行にアクションボタンを配置できます。"}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h2,{id:"状態表示",children:"状態表示"}),`
`,e.jsx(n.h3,{id:"ローディング状態",children:"ローディング状態"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"loading"})," プロップを使用して、データ読み込み中の状態を表示できます。"]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"空の状態",children:"空の状態"}),`
`,e.jsxs(n.p,{children:["データが空の場合、",e.jsx(n.code,{children:"emptyMessage"})," で指定したメッセージが表示されます。"]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"スタイルバリエーション",children:"スタイルバリエーション"}),`
`,e.jsx(n.h3,{id:"ストライプ",children:"ストライプ"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"striped"})," プロップで、行を交互に色付けできます。"]}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"ボーダー",children:"ボーダー"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"bordered"})," プロップで、テーブルにボーダーを追加できます。"]}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"固定ヘッダー",children:"固定ヘッダー"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"stickyHeader"})," と ",e.jsx(n.code,{children:"maxHeight"})," を組み合わせることで、スクロール時にヘッダーを固定できます。"]}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h2,{id:"フル機能の例",children:"フル機能の例"}),`
`,e.jsx(n.p,{children:"すべての機能を組み合わせた実用的な例です。"}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.h3,{id:"datagridprops",children:"DataGridProps"}),`
`,e.jsxs(n.p,{children:[`| プロパティ | 型 | デフォルト | 説明 |\r
|-----------|-----|-----------|------|\r
| `,e.jsx(n.code,{children:"columns"})," | ",e.jsx(n.code,{children:"DataGridColumn<T>[]"}),` | - | 列定義の配列 |\r
| `,e.jsx(n.code,{children:"rows"})," | ",e.jsx(n.code,{children:"T[]"}),` | - | データ行の配列 |\r
| `,e.jsx(n.code,{children:"loading"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | ローディング状態 |\r
| `,e.jsx(n.code,{children:"selection"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | 行選択機能を有効化 |\r
| `,e.jsx(n.code,{children:"selectedRowKeys"})," | ",e.jsx(n.code,{children:"React.Key[]"})," | ",e.jsx(n.code,{children:"[]"}),` | 選択された行のキー |\r
| `,e.jsx(n.code,{children:"onSelectionChange"})," | ",e.jsx(n.code,{children:"(keys: React.Key[]) => void"}),` | - | 選択変更時のコールバック |\r
| `,e.jsx(n.code,{children:"rowKey"})," | ",e.jsx(n.code,{children:"keyof T \\| ((row: T) => React.Key)"})," | ",e.jsx(n.code,{children:'"id"'}),` | 各行の一意なキー |\r
| `,e.jsx(n.code,{children:"sortConfig"})," | ",e.jsx(n.code,{children:'{ key: string; direction: "asc" \\| "desc" \\| "none" }'}),` | - | 現在のソート設定 |\r
| `,e.jsx(n.code,{children:"onSort"})," | ",e.jsx(n.code,{children:"(key: string, direction: ...) => void"}),` | - | ソート変更時のコールバック |\r
| `,e.jsx(n.code,{children:"pagination"})," | ",e.jsx(n.code,{children:"PaginationConfig"}),` | - | ページネーション設定 |\r
| `,e.jsx(n.code,{children:"striped"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | ストライプ表示 |\r
| `,e.jsx(n.code,{children:"bordered"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | ボーダー表示 |\r
| `,e.jsx(n.code,{children:"hoverable"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"true"}),` | ホバーエフェクト |\r
| `,e.jsx(n.code,{children:"stickyHeader"})," | ",e.jsx(n.code,{children:"boolean"})," | ",e.jsx(n.code,{children:"false"}),` | ヘッダーを固定 |\r
| `,e.jsx(n.code,{children:"height"})," | ",e.jsx(n.code,{children:"string \\| number"}),` | - | 固定高さ |\r
| `,e.jsx(n.code,{children:"maxHeight"})," | ",e.jsx(n.code,{children:"string \\| number"}),` | - | 最大高さ |\r
| `,e.jsx(n.code,{children:"emptyMessage"})," | ",e.jsx(n.code,{children:"React.ReactNode"})," | ",e.jsx(n.code,{children:'"No data available"'})," | 空の状態のメッセージ |"]}),`
`,e.jsx(n.h3,{id:"datagridcolumn",children:"DataGridColumn"}),`
`,e.jsxs(n.p,{children:[`| プロパティ | 型 | 説明 |\r
|-----------|-----|------|\r
| `,e.jsx(n.code,{children:"key"})," | ",e.jsx(n.code,{children:"string"}),` | 列の一意なキー |\r
| `,e.jsx(n.code,{children:"header"})," | ",e.jsx(n.code,{children:"React.ReactNode"}),` | ヘッダーのテキストまたは要素 |\r
| `,e.jsx(n.code,{children:"width"})," | ",e.jsx(n.code,{children:"string \\| number"}),` | 列の幅 |\r
| `,e.jsx(n.code,{children:"sortable"})," | ",e.jsx(n.code,{children:"boolean"}),` | ソート可能かどうか |\r
| `,e.jsx(n.code,{children:"render"})," | ",e.jsx(n.code,{children:"(value, row, index) => React.ReactNode"}),` | カスタムレンダー関数 |\r
| `,e.jsx(n.code,{children:"align"})," | ",e.jsx(n.code,{children:'"left" \\| "center" \\| "right"'}),` | テキストの配置 |\r
| `,e.jsx(n.code,{children:"dataIndex"})," | ",e.jsx(n.code,{children:"keyof T"})," | データオブジェクトのキー（デフォルトは ",e.jsx(n.code,{children:"key"}),"） |"]}),`
`,e.jsx(n.h2,{id:"使用例typescript",children:"使用例（TypeScript）"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { DataGrid, DataGridColumn } from './DataGrid';\r
\r
interface User {\r
  id: number;\r
  name: string;\r
  email: string;\r
  role: string;\r
}\r
\r
const columns: DataGridColumn<User>[] = [\r
  { key: 'id', header: 'ID', width: 80, sortable: true },\r
  { key: 'name', header: 'Name', sortable: true },\r
  { key: 'email', header: 'Email', sortable: true },\r
  { \r
    key: 'role', \r
    header: 'Role',\r
    render: (value) => <Badge content={value} />\r
  },\r
];\r
\r
function UserTable() {\r
  const [users, setUsers] = useState<User[]>([]);\r
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);\r
\r
  return (\r
    <DataGrid\r
      columns={columns}\r
      rows={users}\r
      selection\r
      selectedRowKeys={selectedKeys}\r
      onSelectionChange={setSelectedKeys}\r
    />\r
  );\r
}
`})}),`
`,e.jsx(n.h2,{id:"tableとdatagridの使い分け",children:"TableとDataGridの使い分け"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Table"}),": より柔軟なカスタマイズが必要な場合や、シンプルな表示のみの場合"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DataGrid"}),": ソート、ページネーション、行選択などの機能が必要な場合"]}),`
`]}),`
`,e.jsx(n.p,{children:"DataGridは内部でTableコンポーネントを使用しているため、Tableのすべてのスタイリング機能を継承しています。"})]})}function L(d={}){const{wrapper:n}={...s(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}export{L as default};
