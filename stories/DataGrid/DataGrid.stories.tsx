import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataGrid } from "@/components/DataGrid/DataGrid";
import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import { Icon } from "@/components/Icon/Icon";

const meta: Meta<typeof DataGrid> = {
    title: "Component/Data Structures/DataGrid",
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
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin", joinDate: "2024-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "User", joinDate: "2024-02-20" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active", role: "Editor", joinDate: "2024-03-10" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Pending", role: "User", joinDate: "2024-04-05" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", status: "Active", role: "Admin", joinDate: "2024-05-12" },
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
    { key: "id", header: "ID", width: 80, sortable: true },
    { key: "name", header: "Name", sortable: true },
    { key: "email", header: "Email", sortable: true },
    { key: "role", header: "Role" },
    {
        key: "status",
        header: "Status",
        render: (value: string) => (
            <Badge
                content={value}
                size="small"
                color={value === "Active" ? "primary" : value === "Inactive" ? "neutral" : "secondary"}
            />
        ),
    },
];

export const Default: Story = {
    args: {
        columns: basicColumns,
        rows: sampleData,
    },
};

export const WithSelection: Story = {
    render: () => {
        const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);

        return (
            <div>
                <p style={{ marginBottom: "16px" }}>Selected: {selectedRowKeys.join(", ")}</p>
                <DataGrid
                    columns={basicColumns}
                    rows={sampleData}
                    selection
                    selectedRowKeys={selectedRowKeys}
                    onSelectionChange={setSelectedRowKeys}
                />
            </div>
        );
    },
};

export const WithSorting: Story = {
    render: () => {
        const [sortConfig, setSortConfig] = React.useState<{ key: string; direction: "asc" | "desc" | "none" }>({
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
                columns={basicColumns}
                rows={data}
                sortConfig={sortConfig}
                onSort={handleSort}
            />
        );
    },
};

export const WithPagination: Story = {
    render: () => {
        const [currentPage, setCurrentPage] = React.useState(1);
        const pageSize = 10;
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const currentData = manyRows.slice(startIndex, endIndex);

        return (
            <DataGrid
                columns={basicColumns}
                rows={currentData}
                pagination={{
                    total: manyRows.length,
                    pageSize,
                    current: currentPage,
                    onPageChange: setCurrentPage,
                }}
            />
        );
    },
};

export const WithActions: Story = {
    args: {
        columns: [
            { key: "id", header: "ID", width: 80 },
            { key: "name", header: "Name" },
            { key: "email", header: "Email" },
            {
                key: "actions",
                header: "Actions",
                align: "right" as const,
                render: (_: any, row: Record<string, any>) => (
                    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                        <Button size="small" priority="tertiary" onClick={() => alert(`Edit ${row.name}`)}>
                            <Icon name="EditIcon" size="small" />
                        </Button>
                        <Button size="small" priority="tertiary" role="destructive" onClick={() => alert(`Delete ${row.name}`)}>
                            <Icon name="TrashIcon" size="small" />
                        </Button>
                    </div>
                ),
            },
        ],
        rows: sampleData,
    },
};

export const Loading: Story = {
    args: {
        columns: basicColumns,
        rows: sampleData,
        loading: true,
    },
};

export const Empty: Story = {
    args: {
        columns: basicColumns,
        rows: [],
        emptyMessage: "No users found",
    },
};

export const Striped: Story = {
    args: {
        columns: basicColumns,
        rows: sampleData,
        striped: true,
    },
};

export const Bordered: Story = {
    args: {
        columns: basicColumns,
        rows: sampleData,
        bordered: true,
    },
};

export const StickyHeader: Story = {
    args: {
        columns: basicColumns,
        rows: manyRows,
        stickyHeader: true,
        maxHeight: "400px",
    },
};

export const FullFeatured: Story = {
    render: () => {
        const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
        const [currentPage, setCurrentPage] = React.useState(1);
        const [sortConfig, setSortConfig] = React.useState<{ key: string; direction: "asc" | "desc" | "none" }>({
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
                <p style={{ marginBottom: "16px" }}>
                    Selected {selectedRowKeys.length} of {data.length} rows
                </p>
                <DataGrid
                    columns={basicColumns}
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
