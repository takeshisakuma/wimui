import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "@/components/RadioGroup/RadioGroup";
import React, { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
    title: "Components/Selection Controls/RadioGroup",
    component: RadioGroup,
    argTypes: {
        direction: {
            control: { type: "radio" },
            options: ["vertical", "horizontal"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const defaultOptions = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
];

export const Default: Story = {
    args: {
        options: defaultOptions,
        name: "default-group",
        defaultValue: "opt1",
    },
};

export const Horizontal: Story = {
    args: {
        options: defaultOptions,
        direction: "horizontal",
        name: "horizontal-group",
        defaultValue: "opt1",
    },
};

export const WithDisabledOption: Story = {
    args: {
        options: [
            { label: "Option 1", value: "opt1" },
            { label: "Option 2", value: "opt2", disabled: true },
            { label: "Option 3", value: "opt3" },
        ],
        name: "disabled-option-group",
        defaultValue: "opt1",
    },
};

export const Controlled = () => {
    const [value, setValue] = useState("opt1");
    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>Selected Value: {value}</div>
            <RadioGroup
                options={defaultOptions}
                value={value}
                onChange={setValue}
                name="controlled-group"
            />
        </div>
    );
};

export const LongLabel: Story = {
    args: {
        options: [
            { label: "This is a very long label that might wrap to multiple lines depending on the container width.", value: "long1" },
            { label: "Another long label that will wrap if the container is narrow enough to force it.", value: "long2" },
        ],
        name: "long-label-group",
    },
};
