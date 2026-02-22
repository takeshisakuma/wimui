import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "@/components/Table/Table";
import { Badge } from "@/components/Badge/Badge";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { IconButton } from "@/components/IconButton/IconButton";

const meta: Meta<typeof Table> = {
    title: "Component/Data Structures/Table",
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
            options: ["default", "subtle", "hidden"]
        },
        height: { control: "text" },
        maxHeight: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active", role: "Editor" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Pending", role: "User" },
];

const manyRows = Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: i % 3 === 0 ? "Admin" : "Member",
    status: i % 2 === 0 ? "Active" : "Inactive",
}));

const DefaultTableChildren = (
    <>
        <Table.Header>
            <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Email</Table.Head>
                <Table.Head>Role</Table.Head>
                <Table.Head>Status</Table.Head>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {sampleData.map((row) => (
                <Table.Row key={row.id}>
                    <Table.Cell label="Name">{row.name}</Table.Cell>
                    <Table.Cell label="Email">{row.email}</Table.Cell>
                    <Table.Cell label="Role">{row.role}</Table.Cell>
                    <Table.Cell label="Status">
                        <Badge
                            content={row.status}
                            size="small"
                            color={row.status === "Active" ? "primary" : "neutral"}
                        />
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </>
);

export const Default: Story = {
    args: {
        children: DefaultTableChildren,
    },
};

export const Striped: Story = {
    args: {
        ...Default.args,
        striped: true,
    },
};

export const Bordered: Story = {
    args: {
        ...Default.args,
        bordered: true,
    },
};

export const Hoverable: Story = {
    args: {
        ...Default.args,
        hoverable: true,
    },
};

export const FullWidth: Story = {
    args: {
        ...Default.args,
        fullWidth: true,
    },
};

export const WithActions: Story = {
    args: {
        fullWidth: true,
        children: (
            <>
                <Table.Header>
                    <Table.Row>
                        <Table.Head>Name</Table.Head>
                        <Table.Head>Email</Table.Head>
                        <Table.Head style={{ width: "1%", whiteSpace: "nowrap" }}>Actions</Table.Head>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {sampleData.slice(0, 2).map((row) => (
                        <Table.Row key={row.id}>
                            <Table.Cell label="Name">{row.name}</Table.Cell>
                            <Table.Cell label="Email">{row.email}</Table.Cell>
                            <Table.Cell label="Actions">
                                <div style={{ display: "flex", gap: "4px", justifyContent: "flex-start" }}>
                                    <IconButton
                                        iconName="EditIcon"
                                        aria-label="Edit"
                                        size="small"
                                        priority="tertiary"
                                    />
                                    <IconButton
                                        iconName="TrashIcon"
                                        aria-label="Delete"
                                        size="small"
                                        priority="tertiary"
                                        role="destructive"
                                    />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </>
        ),
    },
};

export const Sortable: Story = {
    render: (args) => {
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
            <Table {...args} fullWidth>
                <Table.Header>
                    <Table.Row>
                        <Table.Head
                            sortable
                            sortDirection={sortConfig.key === "id" ? sortConfig.direction : "none"}
                            onSort={() => handleSort("id")}
                        >
                            ID
                        </Table.Head>
                        <Table.Head
                            sortable
                            sortDirection={sortConfig.key === "name" ? sortConfig.direction : "none"}
                            onSort={() => handleSort("name")}
                        >
                            Name
                        </Table.Head>
                        <Table.Head
                            sortable
                            sortDirection={sortConfig.key === "email" ? sortConfig.direction : "none"}
                            onSort={() => handleSort("email")}
                        >
                            Email
                        </Table.Head>
                        <Table.Head>Role</Table.Head>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.slice(0, 10).map((row) => (
                        <Table.Row key={row.id}>
                            <Table.Cell label="ID">{row.id}</Table.Cell>
                            <Table.Cell label="Name">{row.name}</Table.Cell>
                            <Table.Cell label="Email">{row.email}</Table.Cell>
                            <Table.Cell label="Role">{row.role}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        );
    },
};

export const RowSelection: Story = {
    render: (args) => {
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
                        <Table.Head>ID</Table.Head>
                        <Table.Head>Name</Table.Head>
                        <Table.Head>Email</Table.Head>
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
                            <Table.Cell label="ID">{row.id}</Table.Cell>
                            <Table.Cell label="Name">{row.name}</Table.Cell>
                            <Table.Cell label="Email">{row.email}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        );
    },
};

export const StickyHeader: Story = {
    args: {
        stickyHeader: true,
        fullWidth: true,
        maxHeight: "300px",
        children: (
            <>
                <Table.Header>
                    <Table.Row>
                        <Table.Head>ID</Table.Head>
                        <Table.Head>Name</Table.Head>
                        <Table.Head>Email</Table.Head>
                        <Table.Head>Role</Table.Head>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {manyRows.map((row) => (
                        <Table.Row key={row.id}>
                            <Table.Cell label="ID">{row.id}</Table.Cell>
                            <Table.Cell label="Name">{row.name}</Table.Cell>
                            <Table.Cell label="Email">{row.email}</Table.Cell>
                            <Table.Cell label="Role">{row.role}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </>
        ),
    },
};

export const SubtleScrollbar: Story = {
    args: {
        ...StickyHeader.args,
        scrollbar: "subtle",
    },
};

export const HiddenScrollbar: Story = {
    args: {
        ...StickyHeader.args,
        scrollbar: "hidden",
    },
};


export const MobileCard: Story = {
    args: {
        mobileCard: true,
        fullWidth: true,
        children: (
            <>
                <Table.Header>
                    <Table.Row>
                        <Table.Head>ID</Table.Head>
                        <Table.Head>Name</Table.Head>
                        <Table.Head>Email</Table.Head>
                        <Table.Head>Role</Table.Head>
                        <Table.Head>Status</Table.Head>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {sampleData.map((row) => (
                        <Table.Row key={row.id}>
                            <Table.Cell label="ID">{row.id}</Table.Cell>
                            <Table.Cell label="Name">{row.name}</Table.Cell>
                            <Table.Cell label="Email">{row.email}</Table.Cell>
                            <Table.Cell label="Role">{row.role}</Table.Cell>
                            <Table.Cell label="Status">
                                <Badge
                                    content={row.status}
                                    size="small"
                                    color={row.status === "Active" ? "primary" : "neutral"}
                                />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </>
        ),
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
