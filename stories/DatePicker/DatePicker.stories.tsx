import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";
import { Label } from "../Label/Label";

const meta: Meta<typeof DatePicker> = {
    title: "Component/Data Entry/DatePicker",
    component: DatePicker,
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
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
    render: (args) => (
        <Label label="Select Date">
            <DatePicker {...args} />
        </Label>
    ),
    args: {},
};

export const Outline: Story = {
    render: (args) => (
        <Label label="Outline DatePicker">
            <DatePicker {...args} variant="outline" />
        </Label>
    ),
    args: {},
};

export const Ghost: Story = {
    render: (args) => (
        <Label label="Ghost DatePicker">
            <DatePicker {...args} variant="ghost" />
        </Label>
    ),
    args: {},
};

export const Error: Story = {
    render: (args) => (
        <Label label="Error State">
            <DatePicker {...args} state="error" />
        </Label>
    ),
    args: {},
};

export const Disabled: Story = {
    render: (args) => (
        <Label label="Disabled State">
            <DatePicker {...args} disabled />
        </Label>
    ),
    args: {},
};

export const FullWidth: Story = {
    render: (args) => (
        <Label label="Full Width DatePicker" style={{ width: "100%" }}>
            <DatePicker {...args} fullWidth />
        </Label>
    ),
    args: {},
    parameters: {
        layout: "padded",
    },
};
