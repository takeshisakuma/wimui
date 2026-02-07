import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup } from "./ToggleGroup";

const meta: Meta<typeof ToggleGroup> = {
    title: "Component/Data Entry/ToggleGroup",
    component: ToggleGroup,
    // tags: ["autodocs"],
    argTypes: {
        selectionMode: {
            control: "select",
            options: ["single", "multiple"],
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

const defaultOptions = [
    { label: "Left", value: "left", iconName: "CircleIcon" },
    { label: "Center", value: "center", iconName: "SquareIcon" },
    { label: "Right", value: "right", iconName: "LoadingIcon" },
];

export const SingleSelection: Story = {
    args: {
        options: defaultOptions,
        selectionMode: "single",
        defaultValue: "left",
    },
};

export const MultipleSelection: Story = {
    args: {
        options: defaultOptions,
        selectionMode: "multiple",
        defaultValue: ["left", "right"],
    },
};

export const IconOnly: Story = {
    args: {
        options: [
            { value: "bold", iconName: "CircleIcon" },
            { value: "italic", iconName: "SquareIcon" },
            { value: "underline", iconName: "LoadingIcon" },
        ],
        selectionMode: "multiple",
        defaultValue: ["bold"],
    },
};

export const Sizes: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <ToggleGroup {...args} size="small" />
            <ToggleGroup {...args} size="medium" />
            <ToggleGroup {...args} size="large" />
        </div>
    ),
    args: {
        options: defaultOptions,
        selectionMode: "single",
        defaultValue: "center",
    },
};

export const FullWidth: Story = {
    args: {
        options: defaultOptions,
        selectionMode: "single",
        defaultValue: "center",
        fullWidth: true,
    },
};

export const DisabledOptions: Story = {
    args: {
        options: [
            { label: "Available", value: "avail" },
            { label: "Disabled", value: "disabled", disabled: true },
            { label: "Selected Disabled", value: "sel-disabled", disabled: true },
        ],
        selectionMode: "multiple",
        defaultValue: ["sel-disabled"],
    },
};
