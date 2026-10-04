"use client";
import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Table-C9i7rzu2.js";import{n as u,t as d}from"./DataGrid-utuYVp_a.js";import{n as f,r as p,t as m}from"./List-Dgl_OPk4.js";import{n as h,t as g}from"./PivotTable-BLk2xdsi.js";import{i as _,n as v,r as y,t as b}from"./AuditUtils-DcuduY3M.js";var x,S,C,w,T,E;function D(){return(D=t((()=>{x=e(n(),1),i(),a(),c(),u(),p(),h(),S=s(),_(),C={"drip/jan":1284,"drip/feb":1192,"drip/q1":2476,"latte/jan":932,"latte/feb":871,"latte/q1":1803,"drinks/jan":2216,"drinks/feb":2063,"drinks/q1":4279,"gift/jan":37,"gift/feb":12,"gift/q1":49,"all/jan":2253,"all/feb":2075,"all/q1":4328},w={title:`Audit/TableFamily`,parameters:{layout:`fullscreen`}},T={render:()=>{let{t:e,i18n:t}=r([...o,`audit`]),n=e=>new Intl.DateTimeFormat(t.language,{month:`short`}).format(new Date(2026,e,1)),i=new Intl.NumberFormat(t.language),a=[{key:`name`,title:`Name`,sortable:!0},{key:`age`,title:`Age`},{key:`email`,title:`Email`}],s=[{id:`1`,name:`Priya Nair`,age:30,email:`priya@example.com`},{id:`2`,name:`Hana Ito`,age:25,email:`hana@example.com`},{id:`3`,name:`Marcus Bell`,age:40,email:`marcus@example.com`}],c=[{key:`drinks`,label:e(`story.pivottable_drinks`),children:[{key:`drip`,label:e(`story.pivottable_drip`)},{key:`latte`,label:e(`story.pivottable_latte`)}]},{key:`gift`,label:e(`story.pivottable_gift`)}],u=[{key:`q1`,label:e(`story.pivottable_q1`),children:[{key:`jan`,label:n(0)},{key:`feb`,label:n(1)}]}],[p,h]=x.useState(s),[_,w]=x.useState([]),[T,E]=x.useState({key:`none`,direction:`none`});return(0,S.jsxs)(b,{title:e(`audit:table_family_title`),children:[(0,S.jsxs)(v,{title:e(`audit:label_table_standard`),children:[(0,S.jsx)(y,{label:e(`audit:label_table_standard`),children:(0,S.jsxs)(l,{bordered:!0,card:!0,children:[(0,S.jsx)(l.Header,{children:(0,S.jsxs)(l.Row,{children:[(0,S.jsx)(l.Head,{children:`Name`}),(0,S.jsx)(l.Head,{children:`Age`}),(0,S.jsx)(l.Head,{children:`Email`})]})}),(0,S.jsxs)(l.Body,{children:[(0,S.jsxs)(l.Row,{children:[(0,S.jsx)(l.Cell,{children:e(`audit:sample_name_john`)}),(0,S.jsx)(l.Cell,{children:`30`}),(0,S.jsx)(l.Cell,{children:`priya@example.com`})]}),(0,S.jsxs)(l.Row,{children:[(0,S.jsx)(l.Cell,{children:e(`audit:sample_name_jane`)}),(0,S.jsx)(l.Cell,{children:`25`}),(0,S.jsx)(l.Cell,{children:`hana@example.com`})]})]})]})}),(0,S.jsx)(y,{label:e(`audit:label_table_striped`),children:(0,S.jsxs)(l,{striped:!0,bordered:!0,hoverable:!0,card:!0,children:[(0,S.jsx)(l.Header,{children:(0,S.jsxs)(l.Row,{children:[(0,S.jsx)(l.Head,{children:`Name`}),(0,S.jsx)(l.Head,{children:`Age`}),(0,S.jsx)(l.Head,{children:`Email`})]})}),(0,S.jsxs)(l.Body,{children:[(0,S.jsxs)(l.Row,{children:[(0,S.jsx)(l.Cell,{children:e(`audit:sample_name_john`)}),(0,S.jsx)(l.Cell,{children:`30`}),(0,S.jsx)(l.Cell,{children:`priya@example.com`})]}),(0,S.jsxs)(l.Row,{children:[(0,S.jsx)(l.Cell,{children:e(`audit:sample_name_jane`)}),(0,S.jsx)(l.Cell,{children:`25`}),(0,S.jsx)(l.Cell,{children:`hana@example.com`})]})]})]})})]}),(0,S.jsx)(v,{title:e(`audit:label_datagrid`),children:(0,S.jsx)(y,{label:e(`audit:label_datagrid_features`),children:(0,S.jsx)(d,{columns:a,data:p,selection:!0,selectedRowKeys:_,onSelectionChange:e=>w(e),sortConfig:T,onSortChange:(e,t)=>{if(E({key:e,direction:t}),t===`none`){h(s);return}let n=[...p].sort((n,r)=>{let i=n[e],a=r[e];return i<a?t===`asc`?-1:1:i>a?t===`asc`?1:-1:0});h(n)},stickyHeader:!0,bordered:!0,striped:!0})})}),(0,S.jsx)(v,{title:e(`audit:label_pivottable`),children:(0,S.jsx)(y,{label:e(`audit:label_pivottable`),children:(0,S.jsx)(g,{rows:c,columns:u,getValue:(e,t)=>{let n=C[`${e??`all`}/${t??`all`}`];return n===void 0?null:i.format(n)},rowAxisLabel:e(`story.pivottable_product`),columnSubtotals:!0,totalRow:!0})})}),(0,S.jsx)(v,{title:e(`audit:label_list_interactive`),children:(0,S.jsx)(y,{label:e(`audit:label_list_standard`),children:(0,S.jsxs)(m,{bordered:!0,hoverable:!0,fullWidth:!0,children:[(0,S.jsx)(f,{selected:_.includes(`1`),children:e(`audit:table_sample_row_1`)}),(0,S.jsx)(f,{selected:_.includes(`2`),children:e(`audit:table_sample_row_2`)}),(0,S.jsx)(f,{selected:_.includes(`3`),children:e(`audit:table_sample_row_3`)})]})})}),(0,S.jsx)(v,{title:e(`audit:fluid_width_check`),children:(0,S.jsx)(y,{label:e(`audit:table_full_width`),children:(0,S.jsxs)(l,{fullWidth:!0,bordered:!0,card:!0,children:[(0,S.jsx)(l.Header,{children:(0,S.jsx)(l.Row,{children:(0,S.jsx)(l.Head,{children:e(`audit:table_full_width_check`)})})}),(0,S.jsx)(l.Body,{children:(0,S.jsx)(l.Row,{children:(0,S.jsx)(l.Cell,{children:e(`audit:table_full_width_desc`)})})})]})})})]})}},E=[`Overview`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t,
      i18n
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
    const monthName = (month: number) => new Intl.DateTimeFormat(i18n.language, {
      month: "short"
    }).format(new Date(2026, month, 1));
    const units = new Intl.NumberFormat(i18n.language);
    const columns = [{
      key: "name",
      title: "Name",
      sortable: true
    }, {
      key: "age",
      title: "Age"
    }, {
      key: "email",
      title: "Email"
    }];
    const initialData = [{
      id: "1",
      name: "Priya Nair",
      age: 30,
      email: "priya@example.com"
    }, {
      id: "2",
      name: "Hana Ito",
      age: 25,
      email: "hana@example.com"
    }, {
      id: "3",
      name: "Marcus Bell",
      age: 40,
      email: "marcus@example.com"
    }];
    const pivotRows: PivotTableAxisNode[] = [{
      key: "drinks",
      label: t("story.pivottable_drinks"),
      children: [{
        key: "drip",
        label: t("story.pivottable_drip")
      }, {
        key: "latte",
        label: t("story.pivottable_latte")
      }]
    }, {
      key: "gift",
      label: t("story.pivottable_gift")
    }];
    const pivotColumns: PivotTableAxisNode[] = [{
      key: "q1",
      label: t("story.pivottable_q1"),
      children: [{
        key: "jan",
        label: monthName(0)
      }, {
        key: "feb",
        label: monthName(1)
      }]
    }];
    const [data, setData] = React.useState(initialData);
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<string[]>([]);
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: "asc" | "desc" | "none";
    }>({
      key: "none",
      direction: "none"
    });
    const handleSortChange = (key: string, direction: "asc" | "desc" | "none") => {
      setSortConfig({
        key,
        direction
      });
      if (direction === "none") {
        setData(initialData);
        return;
      }
      const sortedData = [...data].sort((a, b) => {
        const aValue = a[key as keyof typeof a];
        const bValue = b[key as keyof typeof b];
        if (aValue < bValue) return direction === "asc" ? -1 : 1;
        if (aValue > bValue) return direction === "asc" ? 1 : -1;
        return 0;
      });
      setData(sortedData);
    };
    return <AuditPage title={t("audit:table_family_title")}>
        {/* Standard Table Variations */}
        <ComparisonGrid title={t("audit:label_table_standard")}>
          <ComponentGroup label={t("audit:label_table_standard")}>
            <Table bordered card>
              <Table.Header>
                <Table.Row>
                  <Table.Head>Name</Table.Head>
                  <Table.Head>Age</Table.Head>
                  <Table.Head>Email</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>{t("audit:sample_name_john")}</Table.Cell>
                  <Table.Cell>30</Table.Cell>
                  <Table.Cell>priya@example.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>{t("audit:sample_name_jane")}</Table.Cell>
                  <Table.Cell>25</Table.Cell>
                  <Table.Cell>hana@example.com</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_table_striped")}>
            <Table striped bordered hoverable card>
              <Table.Header>
                <Table.Row>
                  <Table.Head>Name</Table.Head>
                  <Table.Head>Age</Table.Head>
                  <Table.Head>Email</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>{t("audit:sample_name_john")}</Table.Cell>
                  <Table.Cell>30</Table.Cell>
                  <Table.Cell>priya@example.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>{t("audit:sample_name_jane")}</Table.Cell>
                  <Table.Cell>25</Table.Cell>
                  <Table.Cell>hana@example.com</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </ComponentGroup>
        </ComparisonGrid>

        {/* DataGrid Audit */}
        <ComparisonGrid title={t("audit:label_datagrid")}>
          <ComponentGroup label={t("audit:label_datagrid_features")}>
            <DataGrid columns={columns} data={data} selection={true} selectedRowKeys={selectedRowKeys} onSelectionChange={keys => setSelectedRowKeys(keys)} sortConfig={sortConfig} onSortChange={handleSortChange} stickyHeader bordered striped />
          </ComponentGroup>
        </ComparisonGrid>

        {/* PivotTable: 同じ家族の表と、罫線・余白・見出しの帯が揃っているかを見る */}
        <ComparisonGrid title={t("audit:label_pivottable")}>
          <ComponentGroup label={t("audit:label_pivottable")}>
            <PivotTable rows={pivotRows} columns={pivotColumns} getValue={(row, column) => {
            const value = PIVOT_UNITS[\`\${row ?? "all"}/\${column ?? "all"}\`];
            return value === undefined ? null : units.format(value);
          }} rowAxisLabel={t("story.pivottable_product")} columnSubtotals totalRow />
          </ComponentGroup>
        </ComparisonGrid>

        {/* List Comparison (Interaction & Design Parity) */}
        <ComparisonGrid title={t("audit:label_list_interactive")}>
          <ComponentGroup label={t("audit:label_list_standard")}>
            <List bordered hoverable fullWidth>
              <ListItem selected={selectedRowKeys.includes("1")}>
                {t("audit:table_sample_row_1")}
              </ListItem>
              <ListItem selected={selectedRowKeys.includes("2")}>
                {t("audit:table_sample_row_2")}
              </ListItem>
              <ListItem selected={selectedRowKeys.includes("3")}>
                {t("audit:table_sample_row_3")}
              </ListItem>
            </List>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Fluid Width Check */}
        <ComparisonGrid title={t("audit:fluid_width_check")}>
          <ComponentGroup label={t("audit:table_full_width")}>
            <Table fullWidth bordered card>
              <Table.Header>
                <Table.Row>
                  <Table.Head>{t("audit:table_full_width_check")}</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>{t("audit:table_full_width_desc")}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as Overview,E as __namedExportsOrder,w as default};