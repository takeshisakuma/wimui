import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-kRKb6otn.js";import{M as d,T as a,P as i,a as c,C as l,S as x}from"./blocks-h-koGg6Y.js";import{T as j,S as h,B as _,H as b,F as m,W as p,a as u,b as k,c as T,R as f}from"./Table.stories-CanOObRg.js";import{T as s}from"./T-D3t-8OFd.js";import"./iframe-RqRUvN2f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-KrD9KPR3.js";import"./index-MJSI_oPR.js";import"./index-xDlYQR3e.js";import"./index-D5anLY7w.js";import"./Table-DwoJydUj.js";import"./index-B1nuKDx0.js";import"./Icon-DEW6Teyt.js";import"./Badge-C8j2XwRh.js";import"./useTranslation-CveckdUp.js";import"./Checkbox-yogkUspc.js";import"./IconButton-C7i-9ynp.js";import"./Button-CgPisaF3.js";function r(o){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",pre:"pre",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:j}),`
`,e.jsx(a,{}),`
`,e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"18px",lineHeight:"28px",color:"#6c757d"},children:e.jsx(s,{k:"doc_table_title"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_long_desc"})}),`
`,e.jsx(n.h2,{id:"",children:e.jsx(s,{k:"doc_usage_examples"})}),`
`,e.jsx(n.h3,{id:"-1",children:e.jsx(s,{k:"doc_table_basic"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_basic_desc"})}),`
`,e.jsx(i,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h3,{id:"-2",children:e.jsx(s,{k:"doc_table_striped"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_striped_desc"})}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h3,{id:"-3",children:e.jsx(s,{k:"doc_table_bordered"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_bordered_desc"})}),`
`,e.jsx(l,{of:_}),`
`,e.jsx(n.h3,{id:"-4",children:e.jsx(s,{k:"doc_table_hoverable"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_hoverable_desc"})}),`
`,e.jsx(l,{of:b}),`
`,e.jsx(n.h3,{id:"-5",children:e.jsx(s,{k:"doc_table_fullwidth"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_fullwidth_desc"})}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(n.h3,{id:"-6",children:e.jsx(s,{k:"doc_table_with_actions"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_with_actions_desc"})}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(n.h2,{id:"-7",children:e.jsx(s,{k:"doc_features"})}),`
`,e.jsx(n.h3,{id:"-8",children:e.jsx(s,{k:"doc_table_sticky_header"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_sticky_header_desc"})}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(n.h3,{id:"-9",children:e.jsx(s,{k:"doc_table_scrollbar"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_scrollbar_desc"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"subtle"}),": ",e.jsx(s,{k:"doc_table_scrollbar_subtle"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hidden"}),": ",e.jsx(s,{k:"doc_table_scrollbar_hidden"})]}),`
`]}),`
`,e.jsx(l,{of:k}),`
`,e.jsx(n.h3,{id:"-10",children:e.jsx(s,{k:"doc_table_sortable"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_sortable_desc"})}),`
`,e.jsx(n.h4,{id:"-11",children:e.jsx(s,{k:"doc_table_usetablesort"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_usetablesort_desc"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Table, useTableSort } from "./Table";

function MyTable() {
  const data = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
  ];

  const { sortedData, handleSort, getSortDirection } = useTableSort(data);

  return (
    <Table fullWidth>
      <Table.Header>
        <Table.Row>
          <Table.Head
            sortable
            sortDirection={getSortDirection("id")}
            onSort={() => handleSort("id")}
          >
            ID
          </Table.Head>
          <Table.Head
            sortable
            sortDirection={getSortDirection("name")}
            onSort={() => handleSort("name")}
          >
            Name
          </Table.Head>
          <Table.Head
            sortable
            sortDirection={getSortDirection("age")}
            onSort={() => handleSort("age")}
          >
            Age
          </Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedData.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.age}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
`})}),`
`,e.jsx(n.h4,{id:"-12",children:e.jsx(s,{k:"doc_table_usetablesort_features"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{k:"doc_table_usetablesort_feature_logic"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{k:"doc_table_usetablesort_feature_tri"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{k:"doc_table_usetablesort_feature_ts"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{k:"doc_table_usetablesort_feature_custom"}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const {
  sortedData, // Sorted data
  sortConfig, // Current sort configuration
  handleSort, // Function to execute sort
  getSortDirection, // Get sort direction for a specific key
} = useTableSort(data, {
  initialSort: { key: "name", direction: "asc" },
  onSortChange: (config) => console.log("Sort changed:", config),
});
`})}),`
`,e.jsx(n.h4,{id:"-13",children:e.jsx(s,{k:"doc_table_sort_manual"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_sort_manual_desc"})}),`
`,e.jsx(l,{of:T}),`
`,e.jsx(n.h3,{id:"-14",children:e.jsx(s,{k:"doc_table_row_selection"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_row_selection_desc"})}),`
`,e.jsx(l,{of:f}),`
`,e.jsx(n.h2,{id:"-15",children:e.jsx(s,{k:"doc_table_ts_support"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_ts_support_desc"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Table, useTableSort, SortDirection, SortConfig } from "./Table";
import { T } from "../T";

interface User {
  id: number;
  name: string;
  email: string;
}

const { sortedData } = useTableSort<User>(users);
`})}),`
`,e.jsx(n.h2,{id:"-16",children:e.jsx(s,{k:"doc_compound_components"})}),`
`,e.jsx("p",{children:e.jsx(s,{k:"doc_table_compound_desc"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Header"})," (",e.jsx(n.code,{children:"<thead>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Body"})," (",e.jsx(n.code,{children:"<tbody>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Footer"})," (",e.jsx(n.code,{children:"<tfoot>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Row"})," (",e.jsx(n.code,{children:"<tr>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Head"})," (",e.jsx(n.code,{children:"<th>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Table.Cell"})," (",e.jsx(n.code,{children:"<td>"}),")"]}),`
`]}),`
`,e.jsx(x,{})]})}function E(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{E as default};
