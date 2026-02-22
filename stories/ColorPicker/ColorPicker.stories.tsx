import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorPicker } from "@/components/ColorPicker/ColorPicker";
import { Label } from "@/components/Label/Label";

const meta: Meta<typeof ColorPicker> = {
    title: "Component/Pickers & Sliders/ColorPicker",
    component: ColorPicker,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        state: {
            control: "select",
            options: ["default", "error", "disabled"],
        },
        variant: {
            control: "select",
            options: ["outline", "ghost"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
    render: (args) => (
        <Label label="Select Color">
            <ColorPicker {...args} />
        </Label>
    ),
    args: {
        defaultValue: "#3b82f6",
    },
};

export const Outline: Story = {
    render: (args) => (
        <Label label="Outline ColorPicker">
            <ColorPicker {...args} variant="outline" />
        </Label>
    ),
    args: {
        defaultValue: "#10b981",
    },
};

export const Ghost: Story = {
    render: (args) => (
        <Label label="Ghost ColorPicker">
            <ColorPicker {...args} variant="ghost" />
        </Label>
    ),
    args: {
        defaultValue: "#f59e0b",
    },
};

export const ErrorStatus: Story = {
    render: (args) => (
        <Label label="Error State">
            <ColorPicker {...args} state="error" />
        </Label>
    ),
    args: {
        defaultValue: "#ef4444",
    },
};

export const Disabled: Story = {
    render: (args) => (
        <Label label="Disabled State">
            <ColorPicker {...args} disabled />
        </Label>
    ),
    args: {
        defaultValue: "#6b7280",
    },
};

export const FullWidth: Story = {
    render: (args) => (
        <Label label="Full Width ColorPicker" style={{ width: "100%" }}>
            <ColorPicker {...args} fullWidth />
        </Label>
    ),
    args: {
        defaultValue: "#8b5cf6",
    },
    parameters: {
        layout: "padded",
    },
};


