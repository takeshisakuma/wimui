import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-B_GVjEQG.js";import{M as o,T as l,D as c,P as h,a as t,C as i,S as d}from"./index-BtEPnDjs.js";import{P as x,D as j,M as p,L as g,I as m}from"./Pagination.stories-BHDzxOKT.js";import{T as S}from"./T-DDpXyLBA.js";import"./iframe-3pJU0r9w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9X4EtKa.js";import"./index-BQu9wgyp.js";import"./index-D8oHPCzD.js";import"./index-PRvQPFt2.js";import"./index-As2qqYoz.js";import"./Pagination-D3KITrvh.js";import"./index-DPeCJHdU.js";import"./Icon-BpoEBrO7.js";import"./useTranslation-kZrKuO_Q.js";function r(s){const e={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:x}),`
`,n.jsx(l,{}),`
`,n.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:n.jsx(S,{k:"doc_pagination_title"})}),`
`,n.jsx(c,{}),`
`,n.jsx(h,{}),`
`,n.jsx("h2",{children:"Props"}),`
`,n.jsx(t,{}),`
`,n.jsx("h2",{children:"考慮点"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"項目"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"視認性"}),n.jsx("td",{children:"現在のページが一目でわかるように、アクティブなボタンを強調する。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"アクセシビリティ"}),n.jsx("td",{children:n.jsx(e.p,{children:"各ボタンに適切なaria-label（「次へ」「前のページへ」「○ページ目へ」など）を付与する。"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"省スペース"}),n.jsx("td",{children:n.jsx(e.p,{children:"ページ数が多い場合は、省略記号（...）を使用して全てのページボタンを表示しないように制御する。"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"操作性"}),n.jsx("td",{children:n.jsx(e.p,{children:"「前へ」「次へ」ボタンを配置し、連続したページ移動を容易にする。1ページ目や最終ページではボタンを無効化する。"})})]})]})]}),`
`,n.jsx("h2",{children:"バリエーション"}),`
`,n.jsxs(e.p,{children:[n.jsx("h3",{children:"基本"}),`
最も標準的なページネーションです。`]}),`
`,n.jsx(i,{of:j}),`
`,n.jsxs(e.p,{children:[n.jsx("h3",{children:"多数のページ"}),`
ページ数が多い場合、自動的に省略記号が表示されます。`]}),`
`,n.jsx(i,{of:p}),`
`,n.jsxs(e.p,{children:[n.jsx("h3",{children:"周辺ページ数の調整"}),`
`,n.jsx(e.code,{children:"siblingCount"}),`
プロパティを使用して、現在のページの前後に表示するページ数を変更できます。`]}),`
`,n.jsx(i,{of:g}),`
`,n.jsxs(e.p,{children:[n.jsx("h3",{children:"インタラクティブな例"}),`
実際にページを切り替えることができる例です。`]}),`
`,n.jsx(i,{of:m}),`
`,n.jsx("h2",{children:"高度な機能"}),`
`,n.jsxs(e.p,{children:[n.jsx("h3",{children:"簡易モード (Simple Mode)"}),`
`,n.jsx(e.code,{children:"simple"}),`
プロパティを使用すると、コンパクトな表示形式に切り替わります。ページ番号の代わりに「現在のページ
/ 総ページ数」が表示されます。`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Pagination
  total={100}
  pageSize={10}
  current={1}
  simple
  onChange={(page, pageSize) => console.log(page, pageSize)}
/>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx("h3",{children:"ページサイズ変更機能"}),`
`,n.jsx(e.code,{children:"showSizeChanger"}),`
プロパティを有効にすると、ユーザーが1ページあたりの表示件数を変更できるようになります。`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Pagination
  total={500}
  pageSize={10}
  current={1}
  showSizeChanger
  pageSizeOptions={[10, 20, 50, 100]}
  onChange={(page, pageSize) => console.log(page, pageSize)}
  onPageSizeChange={(newSize) => console.log("Page size changed to:", newSize)}
/>
`})}),`
`,n.jsx(e.p,{children:"プロパティ:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"showSizeChanger"})," - ページサイズセレクタを表示するか"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"pageSizeOptions"})," - 選択可能なページサイズの配列（デフォルト: ",n.jsx(e.code,{children:"[10, 20, 50, 100]"}),"）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onPageSizeChange"})," - ページサイズが変更された時のコールバック"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx("h3",{children:"総件数表示"}),`
`,n.jsx(e.code,{children:"showTotal"}),`
プロパティを使用して、総件数や現在表示中のアイテム範囲を表示できます。`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Pagination
  total={500}
  pageSize={20}
  current={1}
  showTotal={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`}
  onChange={(page, pageSize) => console.log(page, pageSize)}
/>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx("h3",{children:"クイックジャンパー"}),`
`,n.jsx(e.code,{children:"showQuickJumper"}),`
プロパティを有効にすると、特定のページに直接ジャンプできる入力フィールドが表示されます。`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Pagination
  total={1000}
  pageSize={10}
  current={1}
  showQuickJumper
  onChange={(page, pageSize) => console.log(page, pageSize)}
/>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx("h3",{children:"全機能を組み合わせ"}),`
すべての機能を同時に使用することも可能です。`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Pagination
  total={1000}
  pageSize={20}
  current={1}
  showSizeChanger
  showQuickJumper
  showTotal={(total, range) => \`\${range[0]}-\${range[1]} / \${total}\`}
  pageSizeOptions={[10, 20, 50, 100]}
  onChange={(page, pageSize) => {
    console.log("Page:", page, "Size:", pageSize);
  }}
  onPageSizeChange={(newSize) => {
    console.log("New page size:", newSize);
  }}
/>
`})}),`
`,n.jsx("h2",{children:"onChange シグネチャの変更"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onChange"})," コールバックは、ページ番号とページサイズの両方を受け取るようになりました："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type OnChange = (page: number, pageSize: number) => void;
`})}),`
`,n.jsx(e.p,{children:"これにより、ページサイズが変更された際も同じコールバックで処理できます。"}),`
`,n.jsx(d,{})]})}function v(s={}){const{wrapper:e}={...a(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{v as default};
