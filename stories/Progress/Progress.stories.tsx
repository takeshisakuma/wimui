import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
    title: "Component/Feedback/Progress",
    component: Progress,
    tags: [],
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error", "neutral"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 50,
        label: "Processing...",
        showValue: true,
    },
    render: (args) => <Progress {...args} />,
};

export const Colors: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            <Progress {...args} color="primary" value={20} label="Primary" />
            <Progress {...args} color="secondary" value={40} label="Secondary" />
            <Progress {...args} color="success" value={60} label="Success" />
            <Progress {...args} color="warning" value={80} label="Warning" />
            <Progress {...args} color="error" value={90} label="Error" />
            <Progress {...args} color="neutral" value={50} label="Neutral" />
        </div>
    ),
};

export const Sizes: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            <Progress {...args} size="sm" value={50} label="Small" />
            <Progress {...args} size="md" value={50} label="Medium" />
            <Progress {...args} size="lg" value={50} label="Large" />
        </div>
    ),
};

export const Indeterminate: Story = {
    args: {
        indeterminate: true,
        label: "Uploading...",
    },
    render: (args) => <Progress {...args} />,
};
