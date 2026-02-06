import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
    title: "Component/Data Display/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        shape: {
            control: "radio",
            options: ["circle", "rounded"],
        },
        color: {
            control: "select",
            options: ["primary", "secondary", "neutral", "error", "success"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120",
        alt: "User",
    },
};

export const Initials: Story = {
    args: {
        initials: "JD",
        color: "primary",
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Avatar size="sm" initials="SM" color="neutral" />
            <Avatar size="md" initials="MD" color="neutral" />
            <Avatar size="lg" initials="LG" color="neutral" />
        </div>
    ),
};

export const Shapes: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "16px" }}>
            <Avatar shape="circle" initials="C" color="secondary" />
            <Avatar shape="rounded" initials="R" color="secondary" />
        </div>
    ),
};

export const Fallback: Story = {
    args: {
        src: "https://invalid-image-url.com",
        initials: "FB",
    },
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "16px" }}>
            <Avatar initials="P" color="primary" />
            <Avatar initials="S" color="secondary" />
            <Avatar initials="N" color="neutral" />
            <Avatar initials="E" color="error" />
            <Avatar initials="SU" color="success" />
        </div>
    ),
};
