import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
    title: "Component/Data Display/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    args: {
        content: "Badge",
        color: "primary",
    },
};

export const Secondary: Story = {
    args: {
        content: "Secondary",
        color: "secondary",
    },
};

export const Error: Story = {
    args: {
        content: "Error",
        color: "error",
    },
};

export const Neutral: Story = {
    args: {
        content: "Neutral",
        color: "neutral",
    },
};

export const Outline: Story = {
    args: {
        content: "Outline",
        variant: "outline",
        color: "primary",
    },
};

export const Small: Story = {
    args: {
        content: "Small",
        size: "small",
    },
};

export const Required: Story = {
    args: {
        content: "required",
        color: "error",
        size: "small",
    },
};

export const Optional: Story = {
    args: {
        content: "optional",
        color: "neutral",
        size: "small",
    },
};
