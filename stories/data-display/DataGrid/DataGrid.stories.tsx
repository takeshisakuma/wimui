import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Badge, Button, DataGrid, Icon, type DataGridColumn, type DataGridProps } from "wimui";


const meta: Meta<typeof DataGrid> = {
  title: "Components/Data Structures/DataGrid",
  component: DataGrid,
  tags: [],
  argTypes: {
    loading: { control: "boolean" },
    selection: { control: "boolean" },
    striped: { control: "boolean" },
    bordered: { control: "boolean" },
    hoverable: { control: "boolean" },
    stickyHeader: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  intent: "Active" | "Inactive" | "Pending";
  joinDate: string;
}

const sampleData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    intent: "Active",
    role: "Admin",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    intent: "Inactive",
    role: "User",
    joinDate: "2024-02-20",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    intent: "Active",
    role: "Editor",
    joinDate: "2024-03-10",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    intent: "Pending",
    role: "User",
    joinDate: "2024-04-05",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    intent: "Active",
    role: "Admin",
    joinDate: "2024-05-12",
  },
];

const manyRows: User[] = Array.from({ length: 50 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? "Admin" : i % 2 === 0 ? "Editor" : "User",
  intent: i % 3 === 0 ? "Active" : i % 2 === 0 ? "Inactive" : "Pending",
  joinDate: `2024-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
}));

const basicColumns: DataGridColumn<Record<string, unknown>>[] = [
  { key: "id", title: "ID", width: 80, sortable: true, fixed: "left" },
  { key: "name", title: "Name", width: 150, sortable: true },
  { key: "email", title: "Email", sortable: true, width: 200 },
  { key: "role", title: "Role", width: 100 },
  {
    key: "status",
    title: "Status",
    width: 100,
    render: (value: unknown) => (
      <Badge
        content={value as string}
        size="sm"
        color={
          value === "Active"
            ? "primary"
            : value === "Inactive"
              ? "neutral"
              : "secondary"
        }
      />
    ),
  },
];

const useDataGridTranslations = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const tColumns = basicColumns.map(c => ({
    ...c,
    title: typeof c.title === 'string' ? t(`story.datagrid_col_${c.key}`) : c.title,
    render: c.key === 'status' ? ((value: unknown) => {
      const translatedValue = value === "Active" ? t('story.datagrid_status_active') : value === "Inactive" ? t('story.datagrid_status_inactive') : t('story.datagrid_status_pending');
      return (
        <Badge
          content={translatedValue}
          size="sm"
          color={value === "Active" ? "primary" : value === "Inactive" ? "neutral" : "secondary"}
        />
      );
    }) : c.render
  }));
  const tSampleData = sampleData as unknown as Record<string, unknown>[];
  return { t, tColumns, tSampleData };
};

export const Default: Story = {
  render: (args) => {
    const { tColumns, tSampleData } = useDataGridTranslations();
    return <DataGrid {...(args as DataGridProps<Record<string, unknown>>)} columns={tColumns} data={tSampleData} />;
  },
  args: {
    bordered: true,
  },
};

export const WithSelection: Story = {
  render: () => {
    const { t, tColumns, tSampleData } = useDataGridTranslations();
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<string[]>([]);
    return (
      <div>
        <p style={{ marginBottom: "16px" }}>
          {t('story.datagrid_selected')}{selectedRowKeys.join(", ")}
        </p>
        <DataGrid
          columns={tColumns}
          data={tSampleData}
          selection={{
            type: "checkbox",
            selectedRowKeys,
            onChange: (keys) => setSelectedRowKeys(keys),
          }}
          bordered
        />
      </div>
    );
  },
};

export const WithSorting: Story = {
  render: () => {
    const { tColumns } = useDataGridTranslations();
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: "asc" | "desc" | "none";
    }>({
      key: "id",
      direction: "none",
    });
    const [data, setData] = React.useState(sampleData);

    const handleSort = (key: string, direction: "asc" | "desc" | "none") => {
      setSortConfig({ key, direction });

      if (direction === "none") {
        setData(sampleData);
      } else {
        const sortedData = [...data].sort((a, b) => {
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
      <DataGrid
        columns={tColumns}
        data={data as unknown as Record<string, unknown>[]}
        sortConfig={sortConfig}
        onSortChange={handleSort}
        bordered
      />
    );
  },
};

export const WithPagination: Story = {
  render: () => {
    const { tColumns } = useDataGridTranslations();
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = manyRows.slice(startIndex, endIndex);

    return (
      <DataGrid
        columns={tColumns}
        data={currentData as unknown as Record<string, unknown>[]}
        pagination={{
          total: manyRows.length,
          pageSize,
          current: currentPage,
          onChange: (page) => setCurrentPage(page),
        }}
        bordered
      />
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const columns = [
      {
        key: "id",
        title: t("story.datagrid_col_id"),
        width: 55,
        fixed: "left" as const,
      },
      {
        key: "name",
        title: t("story.datagrid_col_name"),
        width: 150,
      },
      {
        key: "email",
        title: t("story.datagrid_col_email"),
        width: 200,
      },
      {
        key: "actions",
        title: t("story.datagrid_col_actions"),
        width: 100,
        render: (_: unknown, row: Record<string, unknown>) => (
          <div style={{ display: "flex", gap: "8px", flexWrap: "nowrap" }}>
            <Button
              size="sm"
              variant="ghost"
              aria-label={t("story.datagrid_action_edit", { name: row.name })}
              onClick={() =>
                alert(t("story.datagrid_action_edit", { name: row.name }))
              }
            >
              <Icon name="EditIcon" size="sm" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              intent="danger"
              aria-label={t("story.datagrid_action_delete", { name: row.name })}
              onClick={() =>
                alert(t("story.datagrid_action_delete", { name: row.name }))
              }
            >
              <Icon name="TrashIcon" size="sm" />
            </Button>
          </div>
        ),
      },
    ];
    return <DataGrid columns={columns} data={sampleData as unknown as Record<string, unknown>[]} bordered />;
  },
};

export const Loading: Story = {
  render: (args) => {
    const { tColumns, tSampleData } = useDataGridTranslations();
    return <DataGrid {...(args as DataGridProps<Record<string, unknown>>)} columns={tColumns} data={tSampleData} />;
  },
  args: {
    loading: true,
    bordered: true,
  },
};

export const Empty: Story = {
  render: (args) => {
    const { tColumns } = useDataGridTranslations();
    return <DataGrid {...(args as DataGridProps<Record<string, unknown>>)} columns={tColumns} data={[]} />;
  },
  args: {
    bordered: true,
  },
};

export const Striped: Story = {
  render: (args) => {
    const { tColumns, tSampleData } = useDataGridTranslations();
    return <DataGrid {...(args as DataGridProps<Record<string, unknown>>)} columns={tColumns} data={tSampleData} />;
  },
  args: {
    striped: true,
    bordered: true,
  },
};

export const Bordered: Story = {
  render: (args) => {
    const { tColumns, tSampleData } = useDataGridTranslations();
    return <DataGrid {...(args as DataGridProps<Record<string, unknown>>)} columns={tColumns} data={tSampleData} />;
  },
  args: {
    bordered: true,
  },
};

export const StickyHeader: Story = {
  render: (args) => {
    const { tColumns } = useDataGridTranslations();
    const rows = manyRows as unknown as Record<string, unknown>[];
    return <DataGrid {...(args as DataGridProps<Record<string, unknown>>)} columns={tColumns} data={rows} />;
  },
  args: {
    stickyHeader: true,
    maxHeight: "400px",
    bordered: true,
  },
};

export const FullFeatured: Story = {
  render: () => {
    const { tColumns } = useDataGridTranslations();
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<string[]>([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: "asc" | "desc" | "none";
    }>({
      key: "id",
      direction: "none",
    });
    const [data, setData] = React.useState(manyRows);

    const handleSort = (key: string, direction: "asc" | "desc" | "none") => {
      setSortConfig({ key, direction });

      if (direction === "none") {
        setData(manyRows);
      } else {
        const sortedData = [...data].sort((a, b) => {
          const aValue = (a as unknown as Record<string, unknown>)[key];
          const bValue = (b as unknown as Record<string, unknown>)[key];
          if (String(aValue) < String(bValue)) return direction === "asc" ? -1 : 1;
          if (String(aValue) > String(bValue)) return direction === "asc" ? 1 : -1;
          return 0;
        });
        setData(sortedData);
      }
    };

    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = data.slice(startIndex, endIndex);

    return (
      <div>
        <DataGrid
          columns={tColumns}
          data={currentData as unknown as Record<string, unknown>[]}
          selection={{
            type: "checkbox",
            selectedRowKeys,
            onChange: (keys) => setSelectedRowKeys(keys),
          }}
          sortConfig={sortConfig}
          onSortChange={handleSort}
          pagination={{
            total: data.length,
            pageSize,
            current: currentPage,
            onChange: (page) => setCurrentPage(page),
          }}
          striped
          hoverable
          bordered
        />
      </div>
    );
  },
};

export const InfiniteScroll: Story = {
  render: () => {
    const { tColumns } = useDataGridTranslations();
    const [data, setData] = React.useState(manyRows.slice(0, 15));
    const [loading, setLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(true);

    const loadMoreData = () => {
      if (loading) return;
      setLoading(true);
      
      // Simulate network request
      setTimeout(() => {
        const nextData = manyRows.slice(data.length, data.length + 15);
        setData((prev) => [...prev, ...nextData]);
        
        if (data.length + nextData.length >= manyRows.length) {
          setHasMore(false);
        }
        setLoading(false);
      }, 1000);
    };

    return (
      <DataGrid
        columns={tColumns}
        data={data as unknown as Record<string, unknown>[]}
        bordered
        stickyHeader
        maxHeight="400px"
        infiniteScroll={{
          onLoadMore: loadMoreData,
          hasMore,
        }}
      />
    );
  },
};
export const WithFixedColumn: Story = {
  render: () => {
    const { tColumns, tSampleData } = useDataGridTranslations();
    return (
      <div style={{ maxWidth: "400px" }}>
        <DataGrid
          columns={tColumns}
          data={tSampleData}
          bordered
          stickyHeader
        />
      </div>
    );
  },
};

export const WithRightFixedColumn: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const columns = [
      {
        key: "id",
        title: t("story.datagrid_col_id"),
        width: 55,
        fixed: "left" as const,
      },
      {
        key: "name",
        title: t("story.datagrid_col_name"),
        width: 150,
      },
      {
        key: "email",
        title: t("story.datagrid_col_email"),
        width: 250,
      },
      {
        key: "role",
        title: t("story.datagrid_col_role"),
        width: 100,
      },
      {
        key: "actions",
        title: t("story.datagrid_col_actions"),
        width: 100,
        fixed: "right" as const,
        render: (_: unknown, row: Record<string, unknown>) => (
          <div style={{ display: "flex", gap: "8px", flexWrap: "nowrap" }}>
            <Button
              size="sm"
              variant="ghost"
              aria-label={t("story.datagrid_action_edit", { name: row.name })}
              onClick={() =>
                alert(t("story.datagrid_action_edit", { name: row.name }))
              }
            >
              <Icon name="EditIcon" size="sm" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              intent="danger"
              aria-label={t("story.datagrid_action_delete", { name: row.name })}
              onClick={() =>
                alert(t("story.datagrid_action_delete", { name: row.name }))
              }
            >
              <Icon name="TrashIcon" size="sm" />
            </Button>
          </div>
        ),
      },
    ];
    return (
      <div style={{ maxWidth: "500px" }}>
        <DataGrid
          columns={columns}
          data={sampleData as unknown as Record<string, unknown>[]}
          bordered
        />
      </div>
    );
  },
};
