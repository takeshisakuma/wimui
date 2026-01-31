import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SegmentedControl } from "./SegmentedControl";

const meta: Meta<typeof SegmentedControl> = {
    title: "Component/Forms & Selection/SegmentedControl",
    component: SegmentedControl,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        fullWidth: {
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

const options = [
    { label: "Day", value: "day" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
];



export const Small: Story = {
    args: {
        size: "small",
        fullWidth: true,
    },
    decorators: [
        (Story) => (
            <div style={{ width: "600px" }}>
                <Story />
            </div>
        ),
    ],
    render: (args) => {
        const [value, setValue] = useState("day");
        return (
            <SegmentedControl
                {...args}
                options={options}
                value={value}
                onChange={setValue}
            />
        );
    },
};

export const Medium: Story = {
    args: {
        size: "medium",
        fullWidth: true,
    },
    decorators: [
        (Story) => (
            <div style={{ width: "600px" }}>
                <Story />
            </div>
        ),
    ],
    render: (args) => {
        const [value, setValue] = useState("day");
        return (
            <SegmentedControl
                {...args}
                options={options}
                value={value}
                onChange={setValue}
            />
        );
    },
};

export const Large: Story = {
    args: {
        size: "large",
        fullWidth: true,
    },
    decorators: [
        (Story) => (
            <div style={{ width: "600px" }}>
                <Story />
            </div>
        ),
    ],
    render: (args) => {
        const [value, setValue] = useState("day");
        return (
            <SegmentedControl
                {...args}
                options={options}
                value={value}
                onChange={setValue}
            />
        );
    },
};

export const TwoOptions: Story = {
    args: {
        size: "medium",
        fullWidth: true,
    },
    render: (args) => {
        const [value, setValue] = useState("on");
        const twoOptions = [
            { label: "On", value: "on" },
            { label: "Off", value: "off" },
        ];
        return (
            <SegmentedControl
                {...args}
                options={twoOptions}
                value={value}
                onChange={setValue}
            />
        );
    },
};
