"use client";
import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{St as c,bt as l,t as u}from"./src-Ssuy8lr7.js";import{n as d,t as f}from"./List-CxW5MlWe.js";import{i as p,n as m,r as h,t as g}from"./AuditUtils-Cal9MsZq.js";var _,v,y,b,x;e((()=>{_=t(n(),1),o(),i(),u(),v=a(),p(),y={title:`Audit/TableFamily`,parameters:{layout:`fullscreen`}},b={render:()=>{let{t:e}=r([...s,`audit`]),t=[{key:`name`,title:`Name`,sortable:!0},{key:`age`,title:`Age`},{key:`email`,title:`Email`}],n=[{id:`1`,name:`Priya Nair`,age:30,email:`priya@example.com`},{id:`2`,name:`Hana Ito`,age:25,email:`hana@example.com`},{id:`3`,name:`Marcus Bell`,age:40,email:`marcus@example.com`}],[i,a]=_.useState(n),[o,u]=_.useState([]),[p,y]=_.useState({key:`none`,direction:`none`});return(0,v.jsxs)(g,{title:e(`audit:table_family_title`),children:[(0,v.jsxs)(m,{title:e(`audit:label_table_standard`),children:[(0,v.jsx)(h,{label:e(`audit:label_table_standard`),children:(0,v.jsxs)(c,{bordered:!0,card:!0,children:[(0,v.jsx)(c.Header,{children:(0,v.jsxs)(c.Row,{children:[(0,v.jsx)(c.Head,{children:`Name`}),(0,v.jsx)(c.Head,{children:`Age`}),(0,v.jsx)(c.Head,{children:`Email`})]})}),(0,v.jsxs)(c.Body,{children:[(0,v.jsxs)(c.Row,{children:[(0,v.jsx)(c.Cell,{children:e(`audit:sample_name_john`)}),(0,v.jsx)(c.Cell,{children:`30`}),(0,v.jsx)(c.Cell,{children:`priya@example.com`})]}),(0,v.jsxs)(c.Row,{children:[(0,v.jsx)(c.Cell,{children:e(`audit:sample_name_jane`)}),(0,v.jsx)(c.Cell,{children:`25`}),(0,v.jsx)(c.Cell,{children:`hana@example.com`})]})]})]})}),(0,v.jsx)(h,{label:e(`audit:label_table_striped`),children:(0,v.jsxs)(c,{striped:!0,bordered:!0,hoverable:!0,card:!0,children:[(0,v.jsx)(c.Header,{children:(0,v.jsxs)(c.Row,{children:[(0,v.jsx)(c.Head,{children:`Name`}),(0,v.jsx)(c.Head,{children:`Age`}),(0,v.jsx)(c.Head,{children:`Email`})]})}),(0,v.jsxs)(c.Body,{children:[(0,v.jsxs)(c.Row,{children:[(0,v.jsx)(c.Cell,{children:e(`audit:sample_name_john`)}),(0,v.jsx)(c.Cell,{children:`30`}),(0,v.jsx)(c.Cell,{children:`priya@example.com`})]}),(0,v.jsxs)(c.Row,{children:[(0,v.jsx)(c.Cell,{children:e(`audit:sample_name_jane`)}),(0,v.jsx)(c.Cell,{children:`25`}),(0,v.jsx)(c.Cell,{children:`hana@example.com`})]})]})]})})]}),(0,v.jsx)(m,{title:e(`audit:label_datagrid`),children:(0,v.jsx)(h,{label:e(`audit:label_datagrid_features`),children:(0,v.jsx)(l,{columns:t,data:i,selection:!0,selectedRowKeys:o,onSelectionChange:e=>u(e),sortConfig:p,onSortChange:(e,t)=>{if(y({key:e,direction:t}),t===`none`){a(n);return}let r=[...i].sort((n,r)=>{let i=n[e],a=r[e];return i<a?t===`asc`?-1:1:i>a?t===`asc`?1:-1:0});a(r)},stickyHeader:!0,bordered:!0,striped:!0})})}),(0,v.jsx)(m,{title:e(`audit:label_list_interactive`),children:(0,v.jsx)(h,{label:e(`audit:label_list_standard`),children:(0,v.jsxs)(f,{bordered:!0,hoverable:!0,fullWidth:!0,children:[(0,v.jsx)(d,{selected:o.includes(`1`),children:e(`audit:table_sample_row_1`)}),(0,v.jsx)(d,{selected:o.includes(`2`),children:e(`audit:table_sample_row_2`)}),(0,v.jsx)(d,{selected:o.includes(`3`),children:e(`audit:table_sample_row_3`)})]})})}),(0,v.jsx)(m,{title:e(`audit:fluid_width_check`),children:(0,v.jsx)(h,{label:e(`audit:table_full_width`),children:(0,v.jsxs)(c,{fullWidth:!0,bordered:!0,card:!0,children:[(0,v.jsx)(c.Header,{children:(0,v.jsx)(c.Row,{children:(0,v.jsx)(c.Head,{children:e(`audit:table_full_width_check`)})})}),(0,v.jsx)(c.Body,{children:(0,v.jsx)(c.Row,{children:(0,v.jsx)(c.Cell,{children:e(`audit:table_full_width_desc`)})})})]})})})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);
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
}`,...b.parameters?.docs?.source}}},x=[`Overview`]}))();export{b as Overview,x as __namedExportsOrder,y as default};