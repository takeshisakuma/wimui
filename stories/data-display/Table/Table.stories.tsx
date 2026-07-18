import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Badge, Checkbox, IconButton, Table } from "wimui";


const meta: Meta<typeof Table> = {
  title: "Components/Data Structures/Table",
  component: Table,
  tags: [],
  argTypes: {
    striped: { control: "boolean" },
    bordered: { control: "boolean" },
    hoverable: { control: "boolean" },
    fullWidth: { control: "boolean" },
    stickyHeader: { control: "boolean" },
    scrollbar: {
      control: "select",
      options: ["default", "subtle", "hidden"],
    },
    height: { control: "text" },
    maxHeight: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const useSampleData = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return [
    {
      id: 1,
      name: "Priya Nair",
      email: "priya@example.com",
      intent: t("story.table_active"),
      role: t("story.table_admin"),
    },
    {
      id: 2,
      name: "Marcus Bell",
      email: "marcus@example.com",
      intent: t("story.table_inactive"),
      role: t("story.table_user"),
    },
    {
      id: 3,
      name: "Yuki Tanaka",
      email: "yuki@example.com",
      intent: t("story.table_active"),
      role: t("story.table_editor"),
    },
    {
      id: 4,
      name: "Sofia Rossi",
      email: "sofia@example.com",
      intent: t("story.table_pending"),
      role: t("story.table_user"),
    },
  ];
};

const useManyRows = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    name: `${t("story.table_user")} ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 3 === 0 ? t("story.table_admin") : t("story.table_member"),
    intent: i % 2 === 0 ? t("story.table_active") : t("story.table_inactive"),
  }));
};

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const sampleData = useSampleData();
    return (
      <Table {...args}>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
            <Table.Head>{t("story.table_role")}</Table.Head>
            <Table.Head>{t("story.table_status")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_role")}>{row.role}</Table.Cell>
              <Table.Cell label={t("story.table_status")}>
                <Badge
                  content={row.intent}
                  size="sm"
                  color={
                    row.intent === t("story.table_active")
                      ? "primary"
                      : "neutral"
                  }
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

export const Striped: Story = {
  ...Default,
  args: {
    striped: true,
  },
};

export const Bordered: Story = {
  ...Default,
  args: {
    bordered: true,
  },
};

export const Hoverable: Story = {
  ...Default,
  args: {
    hoverable: true,
  },
};

export const FullWidth: Story = {
  ...Default,
  args: {
    fullWidth: true,
  },
};

export const WithActions: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const sampleData = useSampleData();
    return (
      <Table {...args} fullWidth={true}>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
            <Table.Head style={{ width: "1%", whiteSpace: "nowrap" }}>
              {t("story.table_actions")}
            </Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleData.slice(0, 2).map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_actions")}>
                <div
                  style={{
                    display: "flex",
                    gap: "4px",
                    justifyContent: "flex-start",
                  }}
                >
                  <IconButton
                    iconName="EditIcon"
                    aria-label={t("story.dropdown_edit")}
                    size="sm"
                    variant="ghost"
                  />
                  <IconButton
                    iconName="TrashIcon"
                    aria-label={t("story.dropdown_delete")}
                    size="sm"
                    variant="ghost"
                    intent="danger"
                  />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

export const Sortable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const manyRows = useManyRows();
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: "asc" | "desc" | "none";
    }>({ key: "id", direction: "asc" });

    const [data, setData] = React.useState(manyRows);

    const handleSort = (key: string) => {
      let direction: "asc" | "desc" | "none" = "asc";
      if (sortConfig.key === key) {
        if (sortConfig.direction === "asc") direction = "desc";
        else if (sortConfig.direction === "desc") direction = "none";
      }

      setSortConfig({ key, direction });

      if (direction === "none") {
        setData(manyRows);
      } else {
        const sortedData = [...manyRows].sort((a, b) => {
          const aValue = (a as unknown as Record<string, unknown>)[key];
          const bValue = (b as unknown as Record<string, unknown>)[key];
          if (String(aValue) < String(bValue)) return direction === "asc" ? -1 : 1;
          if (String(aValue) > String(bValue)) return direction === "asc" ? 1 : -1;
          return 0;
        });
        setData(sortedData);
      }
    };

    return (
      <Table {...args} fullWidth>
        <Table.Header>
          <Table.Row>
            <Table.Head
              sortable
              sortDirection={
                sortConfig.key === "id" ? sortConfig.direction : "none"
              }
              onSort={() => handleSort("id")}
            >
              {t("story.table_id")}
            </Table.Head>
            <Table.Head
              sortable
              sortDirection={
                sortConfig.key === "name" ? sortConfig.direction : "none"
              }
              onSort={() => handleSort("name")}
            >
              {t("story.table_name")}
            </Table.Head>
            <Table.Head
              sortable
              sortDirection={
                sortConfig.key === "email" ? sortConfig.direction : "none"
              }
              onSort={() => handleSort("email")}
            >
              {t("story.table_email")}
            </Table.Head>
            <Table.Head>{t("story.table_role")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.slice(0, 10).map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_role")}>{row.role}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

export const RowSelection: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const manyRows = useManyRows();
    const [selectedIds, setSelectedIds] = React.useState<number[]>([]);

    const allSelected = selectedIds.length === 5;
    const indeterminate = selectedIds.length > 0 && selectedIds.length < 5;

    const toggleAll = () => {
      if (allSelected) {
        setSelectedIds([]);
      } else {
        setSelectedIds([1, 2, 3, 4, 5]);
      }
    };

    const toggleRow = (id: number) => {
      if (selectedIds.includes(id)) {
        setSelectedIds(selectedIds.filter((sid) => sid !== id));
      } else {
        setSelectedIds([...selectedIds, id]);
      }
    };

    return (
      <Table {...args} fullWidth>
        <Table.Header>
          <Table.Row>
            <Table.Head selection aria-label={t("story.table_select_all")}>
              <Checkbox
                checked={allSelected}
                indeterminate={indeterminate}
                onChange={toggleAll}
                aria-label={t("story.table_select_all")}
              />
            </Table.Head>
            <Table.Head>{t("story.table_id")}</Table.Head>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {manyRows.slice(0, 5).map((row) => (
            <Table.Row key={row.id} selected={selectedIds.includes(row.id)}>
              <Table.Cell selection>
                <Checkbox
                  checked={selectedIds.includes(row.id)}
                  onChange={() => toggleRow(row.id)}
                  aria-label={t("story.table_select_row")}
                />
              </Table.Cell>
              <Table.Cell label={t("story.table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

export const StickyHeader: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const manyRows = useManyRows();
    return (
      <Table {...args} stickyHeader={true} fullWidth={true} maxHeight="300px">
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.table_id")}</Table.Head>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
            <Table.Head>{t("story.table_role")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {manyRows.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_role")}>{row.role}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

export const SubtleScrollbar: Story = {
  ...StickyHeader,
  args: {
    scrollbar: "subtle",
  },
};

export const HiddenScrollbar: Story = {
  ...StickyHeader,
  args: {
    scrollbar: "hidden",
  },
};

export const MobileCard: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const sampleData = useSampleData();
    return (
      <Table {...args} mobileCard={true} fullWidth={true}>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story.table_id")}</Table.Head>
            <Table.Head>{t("story.table_name")}</Table.Head>
            <Table.Head>{t("story.table_email")}</Table.Head>
            <Table.Head>{t("story.table_role")}</Table.Head>
            <Table.Head>{t("story.table_status")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell label={t("story.table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story.table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story.table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story.table_role")}>{row.role}</Table.Cell>
              <Table.Cell label={t("story.table_status")}>
                <Badge
                  content={row.intent}
                  size="sm"
                  color={
                    row.intent === t("story.table_active")
                      ? "primary"
                      : "neutral"
                  }
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
