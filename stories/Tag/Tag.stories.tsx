import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "@/components/Tag/Tag";
import { Icon } from "@/components/Icon/Icon";

/**
 * Data Display/Tag Component
 */
const meta: Meta<typeof Tag> = {
    title: "Component/Data Indicators/Tag",
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
    render: (args) => (
        <div style={{ display: "flex", gap: "10px" }}>
            <Tag {...args} variant="solid">Solid</Tag>
            <Tag {...args} variant="outline">Outline</Tag>
            <Tag {...args} variant="subtle">Subtle</Tag>
        </div>
    ),
};

export const Colors: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Tag {...args} color="primary">Primary</Tag>
            <Tag {...args} color="secondary">Secondary</Tag>
            <Tag {...args} color="success">Success</Tag>
            <Tag {...args} color="warning">Warning</Tag>
            <Tag {...args} color="error">Error</Tag>
            <Tag {...args} color="neutral">Neutral</Tag>
        </div>
    ),
};

export const Sizes: Story = {
    render: (args) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Tag {...args} size="small">Small Tag</Tag>
            <Tag {...args} size="medium">Medium Tag</Tag>
        </div>
    ),
};

export const WithIcon: Story = {
    args: {
        children: "Tag with Icon",
        icon: <Icon name="CircleIcon" size="small" />,
    },
};


