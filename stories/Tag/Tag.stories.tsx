import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";
import { Icon } from "../Icon/Icon";

/**
 * Data Display/Tag Component
 */
const meta: Meta<typeof Tag> = {
    title: "Component/Data Display/Tag",
    component: Tag,
    tags: [], // mdxファイルがあるためautodocsは無効にする
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error", "neutral"],
        },
        variant: {
            control: "select",
            options: ["solid", "outline", "subtle"],
        },
        size: {
            control: "select",
            options: ["small", "medium"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
    args: {
        children: "Tag Content",
        color: "primary",
        variant: "solid",
        size: "medium",
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "10px" }}>
            <Tag variant="solid">Solid</Tag>
            <Tag variant="outline">Outline</Tag>
            <Tag variant="subtle">Subtle</Tag>
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Tag color="primary">Primary</Tag>
            <Tag color="secondary">Secondary</Tag>
            <Tag color="success">Success</Tag>
            <Tag color="warning">Warning</Tag>
            <Tag color="error">Error</Tag>
            <Tag color="neutral">Neutral</Tag>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Tag size="small">Small Tag</Tag>
            <Tag size="medium">Medium Tag</Tag>
        </div>
    ),
};

export const WithIcon: Story = {
    args: {
        children: "Tag with Icon",
        icon: <Icon name="CircleIcon" size="small" />,
    },
};
