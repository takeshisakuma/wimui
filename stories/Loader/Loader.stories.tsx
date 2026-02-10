import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
    title: "Component/Feedback/Loader",
    component: Loader,
    tags: [],
    argTypes: {
        variant: {
            control: "select",
            options: ["bars", "dots", "pulse"],
        },
        color: {
            control: "select",
            options: ["primary", "secondary", "success", "warning", "error", "neutral", "currentColor"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "bars",
        color: "primary",
        size: "md",
    },
    render: (args) => <Loader {...args} />,
};

export const Variants: Story = {
    render: (args) => (
        <div style={{ display: "flex", gap: "48px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Loader {...args} variant="bars" />
                <span style={{ fontSize: "12px", color: "#666" }}>bars</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Loader {...args} variant="dots" />
                <span style={{ fontSize: "12px", color: "#666" }}>dots</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <Loader {...args} variant="pulse" />
                <span style={{ fontSize: "12px", color: "#666" }}>pulse</span>
            </div>
        </div>
    ),
};

export const Colors: Story = {
    render: (args) => (
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Loader {...args} color="primary" />
            <Loader {...args} color="secondary" />
            <Loader {...args} color="success" />
            <Loader {...args} color="warning" />
            <Loader {...args} color="error" />
            <Loader {...args} color="neutral" />
        </div>
    ),
};

export const Sizes: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <Loader {...args} variant="bars" size="sm" />
                <Loader {...args} variant="bars" size="md" />
                <Loader {...args} variant="bars" size="lg" />
                <Loader {...args} variant="bars" size="xl" />
            </div>
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <Loader {...args} variant="dots" size="sm" />
                <Loader {...args} variant="dots" size="md" />
                <Loader {...args} variant="dots" size="lg" />
                <Loader {...args} variant="dots" size="xl" />
            </div>
            <div style={{ display: "flex", gap: "24px", alignItems: "center", height: "48px" }}>
                <Loader {...args} variant="pulse" size="sm" />
                <Loader {...args} variant="pulse" size="md" />
                <Loader {...args} variant="pulse" size="lg" />
                <Loader {...args} variant="pulse" size="xl" />
            </div>
        </div>
    ),
};

