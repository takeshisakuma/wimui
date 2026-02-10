import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "./Chip";
import { Icon } from "../Icon/Icon";
import { Avatar } from "../Avatar/Avatar";

/**
 * Data Display/Chip Component
 */
const meta: Meta<typeof Chip> = {
    title: "Component/Data Display/Chip",
    component: Chip,
    tags: [], // mdxファイルがあるためautodocsは無効にする
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "secondary", "neutral"],
        },
        variant: {
            control: "select",
            options: ["solid", "outline"],
        },
        size: {
            control: "select",
            options: ["small", "medium"],
        },
        onClick: { action: "clicked" },
        onDelete: { action: "deleted" },
    },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
    args: {
        label: "Chip Content",
    },
};

export const Clickable: Story = {
    args: {
        label: "Clickable Chip",
        onClick: (e: React.MouseEvent) => console.log("Chip clicked", e),
    },
};

export const Deletable: Story = {
    args: {
        label: "Deletable Chip",
        onDelete: (e: React.MouseEvent) => console.log("Chip deleted", e),
    },
};

export const WithAvatar: Story = {
    args: {
        label: "Jane Doe",
        avatar: <Avatar initials="JD" size="sm" />,
    },
};

export const WithIcon: Story = {
    args: {
        label: "Settings",
        icon: <Icon name="CircleIcon" size="small" />,
    },
};

export const Selected: Story = {
    args: {
        label: "Selected Chip",
        selected: true,
        onClick: () => { },
    },
};

export const Variants: Story = {
    render: (args) => (
        <div style={{ display: "flex", gap: "10px" }}>
            <Chip {...args} label="Solid" variant="solid" onClick={() => { }} />
            <Chip {...args} label="Outline" variant="outline" onClick={() => { }} />
            <Chip {...args} label="Selected" variant="outline" selected onClick={() => { }} />
        </div>
    ),
};

