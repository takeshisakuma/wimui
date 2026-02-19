import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-D9XHfO_n.js";import{M as o,P as d,a as c,C as r}from"./index-Cd-aYZ4I.js";import{T as a,S as t,B as h,H as x,F as j,W as b,a as p,b as m,c as T,R as S}from"./Table.stories-8L4ywme9.js";import{T as u}from"./T-D6ufFkJp.js";import"./iframe-fP2t0KdX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMgFwVVR.js";import"./index-CWwNwgZ0.js";import"./index-BARQtGDn.js";import"./index-CEIVxd0P.js";import"./index-BSm3OVH8.js";import"./Table-CtI82L_g.js";import"./index-D2M7vYEz.js";import"./Icon-BF9QZky0.js";import"./Badge-ZCd07THJ.js";import"./useTranslation-CQq2wPgL.js";import"./Checkbox-B1XiP7uW.js";function i(l){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(u,{k:"doc_table_title"})}),`
`,e.jsx(n.p,{children:"テーブルコンポーネントは、データを整理して表示するために使用されます。"}),`
`,e.jsx(n.h2,{id:"使用例",children:"使用例"}),`
`,e.jsx(n.h3,{id:"基本的なテーブル",children:"基本的なテーブル"}),`
`,e.jsx(n.p,{children:"最もシンプルなテーブルの構成です。"}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h3,{id:"ストライプ",children:"ストライプ"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"striped"})," プロップを使用すると、行が交互に色付けされます。"]}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h3,{id:"ボーダー",children:"ボーダー"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"bordered"})," プロップを使用すると、テーブル全体と各セルにボーダーが表示されます。"]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"ホバーエフェクト",children:"ホバーエフェクト"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"hoverable"})," プロップを使用すると、マウスオーバーした行が強調表示されます。"]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h3,{id:"フルワイド",children:"フルワイド"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fullWidth"})," プロップを使用すると、テーブルが親要素の全幅に広がります。"]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h3,{id:"アクション付きのテーブル",children:"アクション付きのテーブル"}),`
`,e.jsx(n.p,{children:"セル内にボタンなどのインタラクティブな要素を配置することも可能です。"}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h2,{id:"高度な機能",children:"高度な機能"}),`
`,e.jsx(n.h3,{id:"ヘッダーの固定-sticky-header",children:"ヘッダーの固定 (Sticky Header)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"stickyHeader"})," プロップと ",e.jsx(n.code,{children:"maxHeight"})," プロップを組み合わせることで、テーブルをスクロールした際にヘッダーを上部に固定できます。"]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h3,{id:"スクロールバーのカスタマイズ",children:"スクロールバーのカスタマイズ"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"scrollbar"})," プロップを使用して、スクロールバーの見た目を調整できます。"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"subtle"}),": 細く控えめなデザイン"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hidden"}),": 非表示"]}),`
`]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"ソート機能",children:"ソート機能"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Table.Head"})," に ",e.jsx(n.code,{children:"sortable"})," プロップを渡すことで、ソート UI を表示できます。"]}),`
`,e.jsx(n.h4,{id:"usetablesort-フックを使う推奨",children:"useTableSort フックを使う（推奨）"}),`
`,e.jsxs(n.p,{children:["Tableコンポーネントには、ソート機能を簡単に実装できる ",e.jsx(n.code,{children:"useTableSort"})," フックが用意されています。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Table, useTableSort } from './Table';\r
\r
function MyTable() {\r
  const data = [\r
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },\r
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },\r
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },\r
  ];\r
\r
  const { sortedData, handleSort, getSortDirection } = useTableSort(data);\r
\r
  return (\r
    <Table fullWidth>\r
      <Table.Header>\r
        <Table.Row>\r
          <Table.Head\r
            sortable\r
            sortDirection={getSortDirection('id')}\r
            onSort={() => handleSort('id')}\r
          >\r
            ID\r
          </Table.Head>\r
          <Table.Head\r
            sortable\r
            sortDirection={getSortDirection('name')}\r
            onSort={() => handleSort('name')}\r
          >\r
            Name\r
          </Table.Head>\r
          <Table.Head\r
            sortable\r
            sortDirection={getSortDirection('age')}\r
            onSort={() => handleSort('age')}\r
          >\r
            Age\r
          </Table.Head>\r
        </Table.Row>\r
      </Table.Header>\r
      <Table.Body>\r
        {sortedData.map((row) => (\r
          <Table.Row key={row.id}>\r
            <Table.Cell>{row.id}</Table.Cell>\r
            <Table.Cell>{row.name}</Table.Cell>\r
            <Table.Cell>{row.age}</Table.Cell>\r
          </Table.Row>\r
        ))}\r
      </Table.Body>\r
    </Table>\r
  );\r
}
`})}),`
`,e.jsx(n.h4,{id:"usetablesort-の機能",children:"useTableSort の機能"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"自動ソートロジック: 文字列、数値、null値を適切に処理"}),`
`,e.jsx(n.li,{children:"3方向ソート: asc（昇順） → desc（降順） → none（ソートなし）のサイクル"}),`
`,e.jsx(n.li,{children:"型安全: TypeScript完全対応"}),`
`,e.jsx(n.li,{children:"カスタマイズ可能: 初期ソート状態やソート変更時のコールバックをサポート"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const {\r
  sortedData,      // ソート済みのデータ\r
  sortConfig,      // 現在のソート設定\r
  handleSort,      // ソートを実行する関数\r
  getSortDirection // 特定のキーのソート方向を取得\r
} = useTableSort(data, {\r
  initialSort: { key: 'name', direction: 'asc' },\r
  onSortChange: (config) => console.log('Sort changed:', config)\r
});
`})}),`
`,e.jsx(n.h4,{id:"手動でソートロジックを実装する場合",children:"手動でソートロジックを実装する場合"}),`
`,e.jsx(n.p,{children:"フックを使わず、独自のソートロジックを実装することもできます。"}),`
`,e.jsx(r,{of:T}),`
`,e.jsx(n.h3,{id:"行の選択-row-selection",children:"行の選択 (Row Selection)"}),`
`,e.jsxs(n.p,{children:["チェックボックスを使用して行を複数選択する機能です。",e.jsx(n.code,{children:"Table.Head"})," や ",e.jsx(n.code,{children:"Table.Cell"})," に ",e.jsx(n.code,{children:"selection"})," プロップを指定することで、チェックボックス列を適切にスタイリングできます。また、",e.jsx(n.code,{children:"Table.Row"})," に ",e.jsx(n.code,{children:"selected"})," プロップを渡すと、選択中の行を強調表示できます。"]}),`
`,e.jsx(r,{of:S}),`
`,e.jsx(n.h2,{id:"typescript-サポート",children:"TypeScript サポート"}),`
`,e.jsx(n.p,{children:"TableコンポーネントとuseTableSortフックは完全な型定義を提供しています。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Table, useTableSort, SortDirection, SortConfig } from './Table';\r
import { T } from "../T";\r
\r
interface User {\r
  id: number;\r
  name: string;\r
  email: string;\r
}\r
\r
const { sortedData } = useTableSort<User>(users);
`})}),`
`,e.jsx(n.h2,{id:"コンパウンドコンポーネント",children:"コンパウンドコンポーネント"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Table"})," は以下のサブコンポーネントで構成されています："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Header"})," (",e.jsx(n.code,{children:"<thead>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Body"})," (",e.jsx(n.code,{children:"<tbody>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Footer"})," (",e.jsx(n.code,{children:"<tfoot>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Row"})," (",e.jsx(n.code,{children:"<tr>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Head"})," (",e.jsx(n.code,{children:"<th>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Cell"})," (",e.jsx(n.code,{children:"<td>"}),")"]}),`
`]})]})}function X(l={}){const{wrapper:n}={...s(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(i,{...l})}):i(l)}export{X as default};
