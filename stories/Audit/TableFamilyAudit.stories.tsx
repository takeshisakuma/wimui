import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Table,
  DataGrid,
  List,
  ListItem,
} from "../../src";

const meta: Meta = {
  title: "Audit/TableFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    const columns = [
      { key: "name", title: "Name", sortable: true },
      { key: "age", title: "Age" },
      { key: "email", title: "Email" },
    ];

    const initialData = [
      { id: "1", name: "John Doe", age: 30, email: "john@example.com" },
      { id: "2", name: "Jane Doe", age: 25, email: "jane@example.com" },
      { id: "3", name: "Bob Smith", age: 40, email: "bob@example.com" },
    ];

    const [data, setData] = React.useState(initialData);
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<string[]>([]);
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: "asc" | "desc" | "none";
    }>({ key: "none", direction: "none" });

    const handleSortChange = (key: string, direction: "asc" | "desc" | "none") => {
      setSortConfig({ key, direction });
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

    return (
      <AuditPage title={t("audit:table_family_title")}>
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
                  <Table.Cell>john@example.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>{t("audit:sample_name_jane")}</Table.Cell>
                  <Table.Cell>25</Table.Cell>
                  <Table.Cell>jane@example.com</Table.Cell>
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
                  <Table.Cell>john@example.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>{t("audit:sample_name_jane")}</Table.Cell>
                  <Table.Cell>25</Table.Cell>
                  <Table.Cell>jane@example.com</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </ComponentGroup>
        </ComparisonGrid>

        {/* DataGrid Audit */}
        <ComparisonGrid title={t("audit:label_datagrid")}>
          <ComponentGroup label={t("audit:label_datagrid_features")}>
            <DataGrid
              columns={columns}
              data={data}
              selection={true}
              selectedRowKeys={selectedRowKeys}
              onSelectionChange={(keys) => setSelectedRowKeys(keys)}
              sortConfig={sortConfig}
              onSortChange={handleSortChange}
              stickyHeader
              bordered
              striped
            />
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
      </AuditPage>
    );
  },
};
