import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "@/components/Stepper/Stepper";
import React, { useState } from "react";
import { Icon } from "@/components/Icon/Icon";

const meta: Meta<typeof Stepper> = {
    title: "Components/Navigation Elements/Stepper",
    component: Stepper,
    parameters: {
        layout: "padded",
    },
    tags: [], // autodocs removed to avoid conflict with Stepper.mdx
    argTypes: {
        current: { control: "number" },
        direction: {
            control: "radio",
            options: ["horizontal", "vertical"],
        },
        labelPlacement: {
            control: "radio",
            options: ["horizontal", "vertical"],
        },
        status: {
            control: "select",
            options: ["wait", "process", "finish", "error"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const defaultSteps = [
    {
        title: "Finished",
        description: "This is a description",
    },
    {
        title: "In Progress",
        description: "This is a description",
    },
    {
        title: "Waiting",
        description: "This is a description",
    },
];

export const Default: Story = {
    args: {
        steps: defaultSteps,
        current: 1,
    },
};

export const Vertical: Story = {
    args: {
        steps: defaultSteps,
        current: 1,
        direction: "vertical",
    },
};

export const LabelVertical: Story = {
    args: {
        steps: defaultSteps,
        current: 1,
        labelPlacement: "vertical",
    },
};

export const ErrorStatus: Story = {
    args: {
        steps: defaultSteps,
        current: 1,
        status: "error",
    },
};

export const CustomIcons: Story = {
    args: {
        steps: [
            {
                title: "Login",
                icon: <Icon name="EyeIcon" size="small" />,
            },
            {
                title: "Verification",
                icon: <Icon name="LoadingIcon" size="small" />,
            },
            {
                title: "Pay",
                icon: <Icon name="StarIcon" size="small" />,
            },
            {
                title: "Done",
                icon: <Icon name="CheckIcon" size="small" />,
            },
        ],
        current: 1,
    },
};

export const Interactive: Story = {
    render: (args) => {
        const [current, setCurrent] = useState(0);
        return (
            <Stepper
                {...args}
                current={current}
                onChange={(index) => setCurrent(index)}
            />
        );
    },
    args: {
        steps: Array.from({ length: 4 }, (_, i) => ({
            title: `Step ${i + 1}`,
            description: `Description for step ${i + 1}`,
        })),
    },
};


