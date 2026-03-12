import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataGrid } from "@/components/DataGrid/DataGrid";
import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";

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
  status: "Active" | "Inactive" | "Pending";
  joinDate: string;
}

const sampleData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    role: "Admin",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Inactive",
    role: "User",
    joinDate: "2024-02-20",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "Active",
    role: "Editor",
    joinDate: "2024-03-10",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    status: "Pending",
    role: "User",
    joinDate: "2024-04-05",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    status: "Active",
    role: "Admin",
    joinDate: "2024-05-12",
  },
];

const manyRows: User[] = Array.from({ length: 50 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? "Admin" : i % 2 === 0 ? "Editor" : "User",
  status: i % 3 === 0 ? "Active" : i % 2 === 0 ? "Inactive" : "Pending",
  joinDate: `2024-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
}));

const basicColumns = [
  { key: "id", header: "ID", width: 80, sortable: true, fixed: true },
  { key: "name", header: "Name", width: 150, sortable: true, fixed: false },
  { key: "email", header: "Email", sortable: true, width: 200 },
  { key: "role", header: "Role", width: 100 },
  {
    key: "status",
    header: "Status",
    width: 100,
    render: (value: any) => (
      <Badge
        content={value}
        size="small"
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
  const { t } = useTranslation(['docs', 'common', 'components']);
  const tColumns = basicColumns.map(c => ({
    ...c,
    header: typeof c.header === 'string' ? t(`story_datagrid_col_${c.key}`) : c.header,
    render: c.key === 'status' ? ((value: any) => {
      const translatedValue = value === "Active" ? t('story_datagrid_status_active') : value === "Inactive" ? t('story_datagrid_status_inactive') : t('story_datagrid_status_pending');
      return (
        <Badge
          content={translatedValue}
          size="small"
          color={value === "Active" ? "primary" : value === "Inactive" ? "neutral" : "secondary"}
        />
      );
    }) : c.render
  }));
  const tSampleData = sampleData; // data stays as is
  return { t, tColumns: tColumns as any, tSampleData };
};

export const Default: Story = {
  render: (args) => {
    const { t, tColumns, tSampleData } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...(args as any)} columns={tColumns} rows={rows} />;
  },
  args: {
    bordered: true,
  },
};

export const WithSelection: Story = {
  render: () => {
    const { t, tColumns, tSampleData } = useDataGridTranslations();
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
    return (
      <div>
        <p style={{ marginBottom: "16px" }}>
          {t('story_datagrid_selected')}{selectedRowKeys.join(", ")}
        </p>
        <DataGrid
          columns={tColumns}
          rows={tSampleData}
          selection
          selectedRowKeys={selectedRowKeys}
          onSelectionChange={setSelectedRowKeys}
          bordered
        />
      </div>
    );
  },
};

export const WithSorting: Story = {
  render: () => {
    const { t, tColumns, tSampleData } = useDataGridTranslations();
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
      <DataGrid
        columns={tColumns}
        rows={data}
        sortConfig={sortConfig}
        onSort={handleSort}
        bordered
      />
    );
  },
};

export const WithPagination: Story = {
  render: () => {
    const { t, tColumns } = useDataGridTranslations();
    const [currentPage, setCurrentPage] = React.useState(1);
    const pageSize = 10;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = manyRows.slice(startIndex, endIndex);

    return (
      <DataGrid
        columns={tColumns}
        rows={currentData}
        pagination={{
          total: manyRows.length,
          pageSize,
          current: currentPage,
          onPageChange: setCurrentPage,
        }}
        bordered
      />
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const columns = [
      {
        key: "id",
        header: t("story_datagrid_col_id"),
        width: 55,
        fixed: true,
      },
      {
        key: "name",
        header: t("story_datagrid_col_name"),
        width: 150,
        fixed: false,
      },
      {
        key: "email",
        header: t("story_datagrid_col_email"),
        width: 200,
      },
      {
        key: "actions",
        header: t("story_datagrid_col_actions"),
        width: 100,
        render: (_: any, row: Record<string, any>) => (
          <div style={{ display: "flex", gap: "8px" }}>
            <Button
              size="small"
              priority="tertiary"
              onClick={() =>
                alert(t("story_datagrid_action_edit", { name: row.name }))
              }
            >
              <Icon name="EditIcon" size="small" />
            </Button>
            <Button
              size="small"
              priority="tertiary"
              role="destructive"
              onClick={() =>
                alert(t("story_datagrid_action_delete", { name: row.name }))
              }
            >
              <Icon name="TrashIcon" size="small" />
            </Button>
          </div>
        ),
      },
    ];
    return <DataGrid columns={columns} rows={sampleData} bordered />;
  },
};

export const Loading: Story = {
  render: (args) => {
    const { t, tColumns, tSampleData } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...(args as any)} columns={tColumns} rows={rows} />;
  },
  args: {
    loading: true,
    bordered: true,
  },
};

export const Empty: Story = {
  render: (args) => {
    const { t, tColumns, tSampleData } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...(args as any)} columns={tColumns} rows={rows} emptyMessage={t('story_datagrid_empty')} />;
  },
  args: {
    bordered: true,
  },
};

export const Striped: Story = {
  render: (args) => {
    const { t, tColumns, tSampleData } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...(args as any)} columns={tColumns} rows={rows} />;
  },
  args: {
    striped: true,
    bordered: true,
  },
};

export const Bordered: Story = {
  render: (args) => {
    const { t, tColumns, tSampleData } = useDataGridTranslations();
    const rows = tSampleData;
    return <DataGrid {...(args as any)} columns={tColumns} rows={rows} />;
  },
  args: {
    bordered: true,
  },
};

export const StickyHeader: Story = {
  render: (args) => {
    const { t, tColumns, tSampleData } = useDataGridTranslations();
    const rows = manyRows;
    return <DataGrid {...(args as any)} columns={tColumns} rows={rows} />;
  },
  args: {
    stickyHeader: true,
    maxHeight: "400px",
    bordered: true,
  },
};

export const FullFeatured: Story = {
  render: () => {
    const { t, tColumns } = useDataGridTranslations();
    const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
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
          const aValue = (a as any)[key];
          const bValue = (b as any)[key];
          if (aValue < bValue) return direction === "asc" ? -1 : 1;
          if (aValue > bValue) return direction === "asc" ? 1 : -1;
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
          rows={currentData}
          selection
          selectedRowKeys={selectedRowKeys}
          onSelectionChange={setSelectedRowKeys}
          sortConfig={sortConfig}
          onSort={handleSort}
          pagination={{
            total: data.length,
            pageSize,
            current: currentPage,
            onPageChange: setCurrentPage,
          }}
          striped
          hoverable
          bordered
        />
      </div>
    );
  },
};

export const WithFixedColumn: Story = {
  render: () => {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const columns = [
      {
        key: "id",
        header: t("story_datagrid_col_id"),
        width: 55,
        fixed: true,
      },
      {
        key: "name",
        header: t("story_datagrid_col_name"),
        width: 150,
        fixed: false,
      },
      {
        key: "email",
        header: t("story_datagrid_col_email"),
        width: 200,
      },
      {
        key: "role",
        header: t("story_datagrid_col_role"),
        width: 100,
      },
      {
        key: "joinDate",
        header: t("story_datagrid_col_joinDate"),
        width: 150,
      },
      {
        key: "status",
        header: t("story_datagrid_col_status"),
        width: 100,
        render: (value: any) => {
          const translatedValue =
            value === "Active"
              ? t("story_datagrid_status_active")
              : value === "Inactive"
                ? t("story_datagrid_status_inactive")
                : t("story_datagrid_status_pending");
          return (
            <Badge
              content={translatedValue}
              size="small"
              color={
                value === "Active"
                  ? "primary"
                  : value === "Inactive"
                    ? "neutral"
                    : "secondary"
              }
            />
          );
        },
      },
    ];
    return (
      <DataGrid columns={columns} rows={sampleData} selection bordered />
    );
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "100vw" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithRightFixedColumn: Story = {
  render: () => {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const columns = [
      {
        key: "id",
        header: t("story_datagrid_col_id"),
        width: 55,
      },
      {
        key: "name",
        header: t("story_datagrid_col_name"),
        width: 150,
      },
      {
        key: "email",
        header: t("story_datagrid_col_email"),
        width: 200,
      },
      {
        key: "role",
        header: t("story_datagrid_col_role"),
        width: 100,
      },
      {
        key: "joinDate",
        header: t("story_datagrid_col_joinDate"),
        width: 150,
      },
      {
        key: "actions",
        header: t("story_datagrid_col_actions"),
        width: 120,
        fixed: "right" as "right",
        align: "center" as "center",
        render: (_: any, row: Record<string, any>) => (
          <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
            <Button size="small" priority="tertiary">
              <Icon name="EditIcon" size="small" />
            </Button>
            <Button size="small" priority="tertiary" role="destructive">
              <Icon name="TrashIcon" size="small" />
            </Button>
          </div>
        ),
      },
    ];
    return (
      <DataGrid columns={columns} rows={sampleData} selection bordered />
    );
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "100vw" }}>
        <Story />
      </div>
    ),
  ],
};

export const InfiniteScroll: Story = {
  render: () => {
    const { t, tColumns } = useDataGridTranslations();
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
        rows={data}
        bordered
        stickyHeader
        maxHeight="400px"
        loadMore={{
          onLoadMore: loadMoreData,
          hasMore,
          loading,
        }}
      />
    );
  },
};

