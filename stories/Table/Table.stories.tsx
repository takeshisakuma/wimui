import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "@/components/Table/Table";
import { Badge } from "@/components/Badge/Badge";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { IconButton } from "@/components/IconButton/IconButton";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: t("story_table_active"),
      role: t("story_table_admin"),
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: t("story_table_inactive"),
      role: t("story_table_user"),
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      status: t("story_table_active"),
      role: t("story_table_editor"),
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      status: t("story_table_pending"),
      role: t("story_table_user"),
    },
  ];
};

const useManyRows = () => {
  const { t } = useTranslation();
  return Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    name: `${t("story_table_user")} ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 3 === 0 ? t("story_table_admin") : t("story_table_member"),
    status: i % 2 === 0 ? t("story_table_active") : t("story_table_inactive"),
  }));
};

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    const sampleData = useSampleData();
    return (
      <Table {...args}>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story_table_name")}</Table.Head>
            <Table.Head>{t("story_table_email")}</Table.Head>
            <Table.Head>{t("story_table_role")}</Table.Head>
            <Table.Head>{t("story_table_status")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell label={t("story_table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story_table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story_table_role")}>{row.role}</Table.Cell>
              <Table.Cell label={t("story_table_status")}>
                <Badge
                  content={row.status}
                  size="small"
                  color={
                    row.status === t("story_table_active")
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
    const { t } = useTranslation();
    const sampleData = useSampleData();
    return (
      <Table {...args} fullWidth={true}>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story_table_name")}</Table.Head>
            <Table.Head>{t("story_table_email")}</Table.Head>
            <Table.Head style={{ width: "1%", whiteSpace: "nowrap" }}>
              {t("story_table_actions")}
            </Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleData.slice(0, 2).map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell label={t("story_table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story_table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story_table_actions")}>
                <div
                  style={{
                    display: "flex",
                    gap: "4px",
                    justifyContent: "flex-start",
                  }}
                >
                  <IconButton
                    iconName="EditIcon"
                    aria-label={t("story_dropdown_edit")}
                    size="small"
                    priority="tertiary"
                  />
                  <IconButton
                    iconName="TrashIcon"
                    aria-label={t("story_dropdown_delete")}
                    size="small"
                    priority="tertiary"
                    role="destructive"
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
    const { t } = useTranslation();
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
          const aValue = (a as any)[key];
          const bValue = (b as any)[key];
          if (aValue < bValue) return direction === "asc" ? -1 : 1;
          if (aValue > bValue) return direction === "asc" ? 1 : -1;
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
              {t("story_table_id")}
            </Table.Head>
            <Table.Head
              sortable
              sortDirection={
                sortConfig.key === "name" ? sortConfig.direction : "none"
              }
              onSort={() => handleSort("name")}
            >
              {t("story_table_name")}
            </Table.Head>
            <Table.Head
              sortable
              sortDirection={
                sortConfig.key === "email" ? sortConfig.direction : "none"
              }
              onSort={() => handleSort("email")}
            >
              {t("story_table_email")}
            </Table.Head>
            <Table.Head>{t("story_table_role")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.slice(0, 10).map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell label={t("story_table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story_table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story_table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story_table_role")}>{row.role}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

export const RowSelection: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
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
            <Table.Head selection>
              <Checkbox
                checked={allSelected}
                indeterminate={indeterminate}
                onChange={toggleAll}
              />
            </Table.Head>
            <Table.Head>{t("story_table_id")}</Table.Head>
            <Table.Head>{t("story_table_name")}</Table.Head>
            <Table.Head>{t("story_table_email")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {manyRows.slice(0, 5).map((row) => (
            <Table.Row key={row.id} selected={selectedIds.includes(row.id)}>
              <Table.Cell selection>
                <Checkbox
                  checked={selectedIds.includes(row.id)}
                  onChange={() => toggleRow(row.id)}
                />
              </Table.Cell>
              <Table.Cell label={t("story_table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story_table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story_table_email")}>
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
    const { t } = useTranslation();
    const manyRows = useManyRows();
    return (
      <Table {...args} stickyHeader={true} fullWidth={true} maxHeight="300px">
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story_table_id")}</Table.Head>
            <Table.Head>{t("story_table_name")}</Table.Head>
            <Table.Head>{t("story_table_email")}</Table.Head>
            <Table.Head>{t("story_table_role")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {manyRows.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell label={t("story_table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story_table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story_table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story_table_role")}>{row.role}</Table.Cell>
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
    const { t } = useTranslation();
    const sampleData = useSampleData();
    return (
      <Table {...args} mobileCard={true} fullWidth={true}>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("story_table_id")}</Table.Head>
            <Table.Head>{t("story_table_name")}</Table.Head>
            <Table.Head>{t("story_table_email")}</Table.Head>
            <Table.Head>{t("story_table_role")}</Table.Head>
            <Table.Head>{t("story_table_status")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell label={t("story_table_id")}>{row.id}</Table.Cell>
              <Table.Cell label={t("story_table_name")}>{row.name}</Table.Cell>
              <Table.Cell label={t("story_table_email")}>
                {row.email}
              </Table.Cell>
              <Table.Cell label={t("story_table_role")}>{row.role}</Table.Cell>
              <Table.Cell label={t("story_table_status")}>
                <Badge
                  content={row.status}
                  size="small"
                  color={
                    row.status === t("story_table_active")
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
