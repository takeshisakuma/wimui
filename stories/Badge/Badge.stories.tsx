import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/Badge/Badge";

const meta: Meta<typeof Badge> = {
    title: "Component/Data Display/Badge",
    component: Badge,
    tags: [],
    parameters: {
        layout: "centered",
    },
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

export const Destructive: Story = {
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

export const WithIcon: Story = {
    args: {
        content: "Verified",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20 6 9 17l-5-5" />
            </svg>
        ),
        color: "primary",
    },
};

export const IconOnly: Story = {
    args: {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20 6 9 17l-5-5" />
            </svg>
        ),
        color: "primary",
    },
};


