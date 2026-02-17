import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popconfirm } from "@/components/Popconfirm/Popconfirm";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof Popconfirm> = {
    title: "Component/Alerts & Notifications/Popconfirm",
    component: Popconfirm,
    tags: [],
    argTypes: {
        onConfirm: { action: "confirmed" },
        onCancel: { action: "cancelled" },
    },
};

export default meta;
type Story = StoryObj<typeof Popconfirm>;

export const Default: Story = {
    args: {
        title: "Are you sure you want to delete this task?",
        children: <Button priority="primary" label="Delete" />,
        okText: "Yes",
        cancelText: "No",
        okType: "destructive",
    },
};

export const WithDescription: Story = {
    args: {
        title: "Delete the task",
        description: "Are you sure to delete this task? This action cannot be undone.",
        children: <Button label="Delete with Description" />,
        okText: "Yes",
        cancelText: "No",
    },
};

export const Disabled: Story = {
    args: {
        title: "Are you sure?",
        children: <Button label="Disabled Popconfirm" />,
        disabled: true,
    },
};


