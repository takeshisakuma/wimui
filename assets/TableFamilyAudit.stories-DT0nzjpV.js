"use client";
import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{n as r,t as i}from"./useTranslation-CpMdOj2B.js";import{n as a,t as o}from"./i18nConstants-DbPgW6Wr.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./Button-Drq-Mw-h.js";import{n as u,t as d}from"./Table-BOxl8BtJ.js";import{n as f,t as p}from"./DataGrid-DksH_G1-.js";import{n as m,r as h,t as g}from"./List-DSpFiSRn.js";import{n as _,t as v}from"./PivotTable-pZu8Fs_p.js";import{n as y,t as b}from"./SelectionBar-BakDD5l0.js";import{i as x,n as S,r as C,t as w}from"./AuditUtils-DTsCA1qz.js";var T,E,D,O,k,A;function j(){return(j=t((()=>{T=e(n(),1),i(),a(),u(),f(),h(),_(),y(),c(),E=s(),x(),D={"drip/jan":1284,"drip/feb":1192,"drip/q1":2476,"latte/jan":932,"latte/feb":871,"latte/q1":1803,"drinks/jan":2216,"drinks/feb":2063,"drinks/q1":4279,"gift/jan":37,"gift/feb":12,"gift/q1":49,"all/jan":2253,"all/feb":2075,"all/q1":4328},O={title:`Audit/TableFamily`,parameters:{layout:`fullscreen`}},k={render:()=>{let{t:e,i18n:t}=r([...o,`audit`]),n=e=>new Intl.DateTimeFormat(t.language,{month:`short`}).format(new Date(2026,e,1)),i=new Intl.NumberFormat(t.language),a=[{key:`name`,title:`Name`,sortable:!0},{key:`age`,title:`Age`},{key:`email`,title:`Email`}],s=[{id:`1`,name:`Priya Nair`,age:30,email:`priya@example.com`},{id:`2`,name:`Hana Ito`,age:25,email:`hana@example.com`},{id:`3`,name:`Marcus Bell`,age:40,email:`marcus@example.com`}],c=[{key:`drinks`,label:e(`story.pivottable_drinks`),children:[{key:`drip`,label:e(`story.pivottable_drip`)},{key:`latte`,label:e(`story.pivottable_latte`)}]},{key:`gift`,label:e(`story.pivottable_gift`)}],u=[{key:`q1`,label:e(`story.pivottable_q1`),children:[{key:`jan`,label:n(0)},{key:`feb`,label:n(1)}]}],[f,h]=T.useState(s),[_,y]=T.useState([]),[x,O]=T.useState({key:`none`,direction:`none`});return(0,E.jsxs)(w,{title:e(`audit:table_family_title`),children:[(0,E.jsxs)(S,{title:e(`audit:label_table_standard`),children:[(0,E.jsx)(C,{label:e(`audit:label_table_standard`),children:(0,E.jsxs)(d,{bordered:!0,card:!0,children:[(0,E.jsx)(d.Header,{children:(0,E.jsxs)(d.Row,{children:[(0,E.jsx)(d.Head,{children:`Name`}),(0,E.jsx)(d.Head,{children:`Age`}),(0,E.jsx)(d.Head,{children:`Email`})]})}),(0,E.jsxs)(d.Body,{children:[(0,E.jsxs)(d.Row,{children:[(0,E.jsx)(d.Cell,{children:e(`audit:sample_name_john`)}),(0,E.jsx)(d.Cell,{children:`30`}),(0,E.jsx)(d.Cell,{children:`priya@example.com`})]}),(0,E.jsxs)(d.Row,{children:[(0,E.jsx)(d.Cell,{children:e(`audit:sample_name_jane`)}),(0,E.jsx)(d.Cell,{children:`25`}),(0,E.jsx)(d.Cell,{children:`hana@example.com`})]})]})]})}),(0,E.jsx)(C,{label:e(`audit:label_table_striped`),children:(0,E.jsxs)(d,{striped:!0,bordered:!0,hoverable:!0,card:!0,children:[(0,E.jsx)(d.Header,{children:(0,E.jsxs)(d.Row,{children:[(0,E.jsx)(d.Head,{children:`Name`}),(0,E.jsx)(d.Head,{children:`Age`}),(0,E.jsx)(d.Head,{children:`Email`})]})}),(0,E.jsxs)(d.Body,{children:[(0,E.jsxs)(d.Row,{children:[(0,E.jsx)(d.Cell,{children:e(`audit:sample_name_john`)}),(0,E.jsx)(d.Cell,{children:`30`}),(0,E.jsx)(d.Cell,{children:`priya@example.com`})]}),(0,E.jsxs)(d.Row,{children:[(0,E.jsx)(d.Cell,{children:e(`audit:sample_name_jane`)}),(0,E.jsx)(d.Cell,{children:`25`}),(0,E.jsx)(d.Cell,{children:`hana@example.com`})]})]})]})})]}),(0,E.jsx)(S,{title:e(`audit:label_datagrid`),children:(0,E.jsx)(C,{label:e(`audit:label_datagrid_features`),children:(0,E.jsx)(p,{columns:a,data:f,selection:!0,selectedRowKeys:_,onSelectionChange:e=>y(e),sortConfig:x,onSortChange:(e,t)=>{if(O({key:e,direction:t}),t===`none`){h(s);return}let n=[...f].sort((n,r)=>{let i=n[e],a=r[e];return i<a?t===`asc`?-1:1:i>a?t===`asc`?1:-1:0});h(n)},stickyHeader:!0,bordered:!0,striped:!0})})}),(0,E.jsx)(S,{title:e(`audit:label_selectionbar`),children:(0,E.jsx)(C,{label:e(`audit:label_selectionbar`),children:(0,E.jsxs)(b,{count:2,onClear:()=>{},children:[(0,E.jsx)(l,{variant:`outline`,size:`sm`,children:e(`audit:sample_selectionbar_labels`)}),(0,E.jsx)(l,{variant:`ghost`,size:`sm`,intent:`danger`,children:e(`audit:sample_selectionbar_cancel`)})]})})}),(0,E.jsx)(S,{title:e(`audit:label_pivottable`),children:(0,E.jsx)(C,{label:e(`audit:label_pivottable`),children:(0,E.jsx)(v,{rows:c,columns:u,getValue:(e,t)=>{let n=D[`${e??`all`}/${t??`all`}`];return n===void 0?null:i.format(n)},rowAxisLabel:e(`story.pivottable_product`),columnSubtotals:!0,totalRow:!0})})}),(0,E.jsx)(S,{title:e(`audit:label_list_interactive`),children:(0,E.jsx)(C,{label:e(`audit:label_list_standard`),children:(0,E.jsxs)(g,{bordered:!0,hoverable:!0,fullWidth:!0,children:[(0,E.jsx)(m,{selected:_.includes(`1`),children:e(`audit:table_sample_row_1`)}),(0,E.jsx)(m,{selected:_.includes(`2`),children:e(`audit:table_sample_row_2`)}),(0,E.jsx)(m,{selected:_.includes(`3`),children:e(`audit:table_sample_row_3`)})]})})}),(0,E.jsx)(S,{title:e(`audit:fluid_width_check`),children:(0,E.jsx)(C,{label:e(`audit:table_full_width`),children:(0,E.jsxs)(d,{fullWidth:!0,bordered:!0,card:!0,children:[(0,E.jsx)(d.Header,{children:(0,E.jsx)(d.Row,{children:(0,E.jsx)(d.Head,{children:e(`audit:table_full_width_check`)})})}),(0,E.jsx)(d.Body,{children:(0,E.jsx)(d.Row,{children:(0,E.jsx)(d.Cell,{children:e(`audit:table_full_width_desc`)})})})]})})})]})}},A=[`Overview`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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

        {/* SelectionBar: 見比べるために、件数を固定して常に出す。表の枠・余白と揃っているかを見る */}
        <ComparisonGrid title={t("audit:label_selectionbar")}>
          <ComponentGroup label={t("audit:label_selectionbar")}>
            <SelectionBar count={2} onClear={() => {}}>
              <Button variant="outline" size="sm">
                {t("audit:sample_selectionbar_labels")}
              </Button>
              <Button variant="ghost" size="sm" intent="danger">
                {t("audit:sample_selectionbar_cancel")}
              </Button>
            </SelectionBar>
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
}`,...k.parameters?.docs?.source}}}})))()}j();export{k as Overview,A as __namedExportsOrder,O as default};