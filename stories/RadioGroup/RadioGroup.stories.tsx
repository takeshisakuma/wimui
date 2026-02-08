import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import React, { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
    title: "Component/Selection Controls/RadioGroup",
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
