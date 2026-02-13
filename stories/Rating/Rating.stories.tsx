import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Rating } from "@/components/Rating/Rating";

const meta: Meta<typeof Rating> = {
    title: "Component/Data Display/Rating",
    component: Rating,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        value: { control: "number" },
        count: { control: "number" },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultValue: 3,
    },
};

export const AllowHalf: Story = {
    args: {
        defaultValue: 2.5,
        allowHalf: true,
    },
};

export const CustomCount: Story = {
    args: {
        defaultValue: 7,
        count: 10,
    },
};

export const Sizes: Story = {
    render: (args) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Rating {...args} size="small" defaultValue={3} />
            <Rating {...args} size="medium" defaultValue={3} />
            <Rating {...args} size="large" defaultValue={3} />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        defaultValue: 4,
        disabled: true,
    },
};

export const Controlled: Story = {
    render: (args) => {
        const [value, setValue] = useState(args.value ?? 3);

        useEffect(() => {
            setValue(args.value ?? 3);
        }, [args.value]);

        const handleChange = (newVal: number) => {
            setValue(newVal);
            args.onChange?.(newVal);
        };

        return <Rating {...args} value={value} onChange={handleChange} />;
    },
};


