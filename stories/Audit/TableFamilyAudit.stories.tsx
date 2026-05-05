import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  Table,
  DataGrid,
  List,
  ListItem,
  Stack,
  Text,
  Box,
} from "../../src";

const meta: Meta = {
  title: "Audit/TableFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Box px="lg" py="md" style={{ borderBottom: "1px solid var(--wim-color-border)" }}>
    <Text size="lg" weight="bold">
      {children}
    </Text>
  </Box>
);

const ComparisonGrid = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box m="lg">
    <Text color="text-secondary" size="sm" style={{ marginBottom: "var(--wim-spacing-md)" }}>
      {title}
    </Text>
    <Box
      bg="bg-surface-subtle"
      radius="md"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "var(--wim-spacing-lg)",
        padding: "var(--wim-spacing-md)",
      }}
    >
      {children}
    </Box>
  </Box>
);

const ComponentGroup = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <Stack gap="var(--wim-spacing-xs)">
    <Box pb="xs" style={{ borderBottom: "1px dashed var(--wim-color-border-secondary)" }}>
      <Text size="xs" color="text-secondary">
        {label}
      </Text>
    </Box>
    <Stack gap="var(--wim-spacing-md)" align="start" w="100%">
      {children}
    </Stack>
  </Stack>
);

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
      <Box bg="surface">
        <SectionTitle>{t("audit:table_family_title")}</SectionTitle>

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
                  <Table.Cell>John Doe</Table.Cell>
                  <Table.Cell>30</Table.Cell>
                  <Table.Cell>john@example.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jane Doe</Table.Cell>
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
                  <Table.Cell>John Doe</Table.Cell>
                  <Table.Cell>30</Table.Cell>
                  <Table.Cell>john@example.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jane Doe</Table.Cell>
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
                John Doe (ID: 1)
              </ListItem>
              <ListItem selected={selectedRowKeys.includes("2")}>
                Jane Doe (ID: 2)
              </ListItem>
              <ListItem selected={selectedRowKeys.includes("3")}>
                Bob Smith (ID: 3)
              </ListItem>
            </List>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Fluid Width Check */}
        <ComparisonGrid title={t("audit:fluid_width_check")}>
          <ComponentGroup label="Table (Full Width)">
            <Table fullWidth bordered card>
              <Table.Header>
                <Table.Row>
                  <Table.Head>Full Width Check</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>This table spans 100% width.</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </ComponentGroup>
        </ComparisonGrid>
      </Box>
    );
  },
};
