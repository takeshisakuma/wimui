import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TimePicker } from "@/components/TimePicker/TimePicker";
import { Label } from "@/components/Label/Label";

const meta: Meta<typeof TimePicker> = {
    title: "Component/Pickers & Sliders/TimePicker",
    component: TimePicker,
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
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
    render: (args) => (
        <Label label="Select Time">
            <TimePicker {...args} />
        </Label>
    ),
    args: {},
};

export const Outline: Story = {
    render: (args) => (
        <Label label="Outline TimePicker">
            <TimePicker {...args} variant="outline" />
        </Label>
    ),
    args: {},
};

export const Ghost: Story = {
    render: (args) => (
        <Label label="Ghost TimePicker">
            <TimePicker {...args} variant="ghost" />
        </Label>
    ),
    args: {},
};

export const ErrorStatus: Story = {
    render: (args) => (
        <Label label="Error State">
            <TimePicker {...args} state="error" />
        </Label>
    ),
    args: {},
};

export const Disabled: Story = {
    render: (args) => (
        <Label label="Disabled State">
            <TimePicker {...args} disabled />
        </Label>
    ),
    args: {},
};

export const FullWidth: Story = {
    render: (args) => (
        <Label label="Full Width TimePicker" style={{ width: "100%" }}>
            <TimePicker {...args} fullWidth />
        </Label>
    ),
    args: {},
    parameters: {
        layout: "padded",
    },
};


