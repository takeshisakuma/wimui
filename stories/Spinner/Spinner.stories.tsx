import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
    title: "Component/Feedback/Spinner",
    component: Spinner,
    tags: [],
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error", "neutral", "currentColor"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
        },
        labelPosition: {
            control: "radio",
            options: ["right", "bottom"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Loading...",
    },
    render: (args) => <Spinner {...args} />,
};

export const Colors: Story = {
    render: (args) => (
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Spinner {...args} color="primary" />
            <Spinner {...args} color="secondary" />
            <Spinner {...args} color="success" />
            <Spinner {...args} color="warning" />
            <Spinner {...args} color="error" />
            <Spinner {...args} color="neutral" />
        </div>
    ),
};

export const Sizes: Story = {
    render: (args) => (
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Spinner {...args} size="sm" />
            <Spinner {...args} size="md" />
            <Spinner {...args} size="lg" />
            <Spinner {...args} size="xl" />
        </div>
    ),
};

export const WithLabel: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <Spinner {...args} label="Loading right..." labelPosition="right" />
            <Spinner {...args} label="Loading bottom..." labelPosition="bottom" />
        </div>
    ),
};
