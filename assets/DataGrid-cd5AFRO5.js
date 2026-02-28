import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-D7SuzjHL.js";import{M as c,P as l,a as t,C as n}from"./index-BZATBabr.js";import{D as h,W as x,a as j,b as o,c as a,L as p,E as m,S as u,B as g,d as y,e as b,F as f}from"./DataGrid.stories-CZt7bgc2.js";import"./T-6JBhxhqZ.js";import"./iframe-EVkAXmOk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDLWA32h.js";import"./index-ef_LzJKW.js";import"./index-CHzC7w-f.js";import"./index-DuqyPMeR.js";import"./index-BD8EsMqe.js";import"./index-BX12fiL9.js";import"./Table-BvgdxD0U.js";import"./Icon-BGwsqTxV.js";import"./Checkbox-WD9AeeSo.js";import"./Pagination-DBe7LdLO.js";import"./Spinner-BpAEAmNj.js";import"./EmptyState-Cp86bDqp.js";import"./useTranslation-DRZYA3vJ.js";import"./Badge-Dm7KBM2J.js";import"./Button-5iC_YtBh.js";function s(r){const d={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:h}),`
`,e.jsx(d.h1,{id:"datagrid",children:"DataGrid"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(d.p,{children:"高機能なデータグリッドコンポーネント。ソート、ページネーション、行選択などの機能を統合的に提供します。"})}),`
`,e.jsx(d.p,{children:"DataGridは、Tableコンポーネントをベースに、よく使われる機能を統合した高レベルのコンポーネントです。複雑なデータテーブルを簡単に実装できます。"}),`
`,e.jsxs(d.blockquote,{children:[`
`,e.jsxs(d.p,{children:[e.jsx(d.strong,{children:"PCのみ"}),": このコンポーネントは機能が豊富で横幅を必要とするため、主にPC向けに設計されています。スマートフォンなどの小画面デバイスでの利用は推奨されません。"]}),`
`]}),`
`,e.jsx(d.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(d.h3,{id:"基本的な使い方",children:"基本的な使い方"}),`
`,e.jsx(d.p,{children:"列定義とデータを渡すだけで、基本的なグリッドを表示できます。"}),`
`,e.jsx(l,{}),`
`,e.jsx(t,{}),`
`,e.jsx(d.h3,{id:"行選択機能",children:"行選択機能"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"selection"})," プロップを有効にすると、チェックボックスによる行選択機能が追加されます。"]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(d.h3,{id:"ソート機能",children:"ソート機能"}),`
`,e.jsxs(d.p,{children:["列定義で ",e.jsx(d.code,{children:"sortable: true"})," を指定し、",e.jsx(d.code,{children:"sortConfig"})," と ",e.jsx(d.code,{children:"onSort"})," を渡すことで、ソート機能を実装できます。"]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(d.h3,{id:"ページネーション",children:"ページネーション"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"pagination"})," プロップを渡すことで、ページネーション機能を追加できます。"]}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(d.h3,{id:"アクション列",children:"アクション列"}),`
`,e.jsx(d.p,{children:"カスタムレンダー関数を使用して、各行にアクションボタンを配置できます。"}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(d.h2,{id:"状態表示",children:"状態表示"}),`
`,e.jsx(d.h3,{id:"ローディング状態",children:"ローディング状態"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"loading"})," プロップを使用して、データ読み込み中の状態を表示できます。"]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(d.h3,{id:"空の状態",children:"空の状態"}),`
`,e.jsxs(d.p,{children:["データが空の場合、",e.jsx(d.code,{children:"emptyMessage"})," で指定したメッセージが表示されます。"]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(d.h2,{id:"スタイルバリエーション",children:"スタイルバリエーション"}),`
`,e.jsx(d.h3,{id:"ストライプ",children:"ストライプ"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"striped"})," プロップで、行を交互に色付けできます。"]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(d.h3,{id:"ボーダー",children:"ボーダー"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"bordered"})," プロップで、テーブルにボーダーを追加できます。"]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(d.h3,{id:"固定ヘッダー",children:"固定ヘッダー"}),`
`,e.jsxs(d.p,{children:[e.jsx(d.code,{children:"stickyHeader"})," と ",e.jsx(d.code,{children:"maxHeight"})," を組み合わせることで、スクロール時にヘッダーを固定できます。"]}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(d.h3,{id:"列の固定-sticky-column",children:"列の固定 (Sticky Column)"}),`
`,e.jsxs(d.p,{children:["列定義で ",e.jsx(d.code,{children:"fixed: true"}),` を指定すると、その列を左側に固定したまま横スクロールが可能になります。
※ 複数の列を固定する場合は、各列に `,e.jsx(d.code,{children:"width"})," (数値またはpx文字列) を指定する必要があります。"]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(d.h2,{id:"フル機能の例",children:"フル機能の例"}),`
`,e.jsx(d.p,{children:"すべての機能を組み合わせた実用的な例です。"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(d.h2,{id:"api",children:"API"}),`
`,e.jsx(d.h3,{id:"datagridprops",children:"DataGridProps"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"プロパティ"}),e.jsx("th",{children:"型"}),e.jsx("th",{children:"デフォルト"}),e.jsx("th",{children:"説明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"columns"})}),e.jsx("td",{children:e.jsx("code",{children:"DataGridColumn<T>[]"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"列定義の配列"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"rows"})}),e.jsx("td",{children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"データ行の配列"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"loading"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"ローディング状態"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"selection"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"行選択機能を有効化"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"selectedRowKeys"})}),e.jsx("td",{children:e.jsx("code",{children:"React.Key[]"})}),e.jsx("td",{children:e.jsx("code",{children:"[]"})}),e.jsx("td",{children:"選択された行のキー"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSelectionChange"})}),e.jsx("td",{children:e.jsx("code",{children:"(keys: React.Key[]) => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"選択変更時のコールバック"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"rowKey"})}),e.jsx("td",{children:e.jsx("code",{children:"keyof T | ((row: T) => React.Key)"})}),e.jsx("td",{children:e.jsx("code",{children:'"id"'})}),e.jsx("td",{children:"各行の一意なキー"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sortConfig"})}),e.jsx("td",{children:e.jsx("code",{children:'{ key: string; direction: "asc" | "desc" | "none" }'})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"現在のソート設定"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onSort"})}),e.jsx("td",{children:e.jsx("code",{children:"(key: string, direction: ...) => void"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"ソート変更時のコールバック"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"pagination"})}),e.jsx("td",{children:e.jsx("code",{children:"PaginationConfig"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"ページネーション設定"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"striped"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"ストライプ表示"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"bordered"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"ボーダー表示"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hoverable"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:"ホバーエフェクト"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stickyHeader"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"ヘッダーを固定"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"height"})}),e.jsx("td",{children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"固定高さ"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"maxHeight"})}),e.jsx("td",{children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"最大高さ"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"emptyMessage"})}),e.jsx("td",{children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{children:e.jsx("code",{children:'"No data available"'})}),e.jsx("td",{children:"空の状態のメッセージ"})]})]})]}),`
`,e.jsx(d.h3,{id:"datagridcolumn",children:"DataGridColumn"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"プロパティ"}),e.jsx("th",{children:"型"}),e.jsx("th",{children:"説明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"key"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"列の一意なキー"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"header"})}),e.jsx("td",{children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{children:"ヘッダーのテキストまたは要素"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"width"})}),e.jsx("td",{children:e.jsx("code",{children:"string | number"})}),e.jsx("td",{children:"列の幅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sortable"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"ソート可能かどうか"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"render"})}),e.jsx("td",{children:e.jsx("code",{children:"(value, row, index) => React.ReactNode"})}),e.jsx("td",{children:"カスタムレンダー関数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"align"})}),e.jsx("td",{children:e.jsx("code",{children:'"left" | "center" | "right"'})}),e.jsx("td",{children:"テキストの配置"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dataIndex"})}),e.jsx("td",{children:e.jsx("code",{children:"keyof T"})}),e.jsx("td",{children:e.jsxs(d.p,{children:["データオブジェクトのキー（デフォルトは ",e.jsx("code",{children:"key"}),"）"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"fixed"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"列を左側に固定するかどうか"})]})]})]}),`
`,e.jsx(d.h2,{id:"使用例typescript",children:"使用例（TypeScript）"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-typescript",children:`import { DataGrid, DataGridColumn } from './DataGrid';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const columns: DataGridColumn<User>[] = [
  { key: 'id', header: 'ID', width: 80, sortable: true },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
  {
    key: 'role',
    header: 'Role',
    render: (value) => <Badge content={value} />
  },
];

function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);

  return (
    <DataGrid
      columns={columns}
      rows={users}
      selection
      selectedRowKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    />
  );
}
`})}),`
`,e.jsx(d.h2,{id:"tableとdatagridの使い分け",children:"TableとDataGridの使い分け"}),`
`,e.jsx("table",{children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Table"})}),e.jsx("td",{children:"より柔軟なカスタマイズが必要な場合や、シンプルな表示のみの場合"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DataGrid"})}),e.jsx("td",{children:"ソート、ページネーション、行選択などの機能が必要な場合"})]})]})}),`
`,e.jsx(d.p,{children:"DataGridは内部でTableコンポーネントを使用しているため、Tableのすべてのスタイリング機能を継承しています。"})]})}function X(r={}){const{wrapper:d}={...i(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(s,{...r})}):s(r)}export{X as default};
