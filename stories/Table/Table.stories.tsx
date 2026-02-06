import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";

const meta: Meta<typeof Table> = {
    title: "Component/Data Display/Table",
    component: Table,
    tags: [],
    argTypes: {
        striped: { control: "boolean" },
        bordered: { control: "boolean" },
        hoverable: { control: "boolean" },
        fullWidth: { control: "boolean" },
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

export const Default: Story = {
    args: {
        children: (
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
                            <Table.Cell>{row.name}</Table.Cell>
                            <Table.Cell>{row.email}</Table.Cell>
                            <Table.Cell>{row.role}</Table.Cell>
                            <Table.Cell>
                                <Badge
                                    content={row.status}
                                    size="small"
                                    color={
                                        row.status === "Active"
                                            ? "primary"
                                            : row.status === "Inactive"
                                                ? "neutral"
                                                : "secondary"
                                    }
                                />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </>
        ),
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
                        <Table.Head>Actions</Table.Head>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {sampleData.slice(0, 2).map((row) => (
                        <Table.Row key={row.id}>
                            <Table.Cell>{row.name}</Table.Cell>
                            <Table.Cell>{row.email}</Table.Cell>
                            <Table.Cell>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <Button size="small" label="Edit" priority="secondary" />
                                    <Button size="small" label="Delete" priority="tertiary" role="destructive" />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </>
        ),
    },
};
