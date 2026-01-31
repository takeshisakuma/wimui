import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
    title: "Component/Typography & Action/Link",
    component: Link,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        priority: {
            control: { type: "select" },
            options: ["primary", "secondary", "tertiary"],
        },
        iconName: {
            control: { type: "select" },
            options: [undefined, "CircleIcon", "SquareIcon", "LoadingIcon"],
        },
        iconPosition: {
            control: { type: "radio" },
            options: ["left", "right"],
        },
        external: {
            control: { type: "boolean" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "Primary Link",
        priority: "primary",
        href: "#",
    },
};

export const External: Story = {
    args: {
        label: "External Link",
        external: true,
        href: "https://storybook.js.org/",
    },
};

export const Secondary: Story = {
    args: {
        label: "Secondary Link",
        priority: "secondary",
        href: "#",
    },
};

export const Tertiary: Story = {
    args: {
        label: "Tertiary Link",
        priority: "tertiary",
        href: "#",
    },
};

export const WithIconLeft: Story = {
    args: {
        label: "Link with Icon",
        iconName: "CircleIcon",
        iconPosition: "left",
        href: "#",
    },
};

export const WithIconRight: Story = {
    args: {
        label: "Link with Icon",
        iconName: "SquareIcon",
        iconPosition: "right",
        href: "#",
    },
};

export const Small: Story = {
    args: {
        label: "Small Link",
        size: "small",
        href: "#",
    },
};

export const Large: Story = {
    args: {
        label: "Large Link",
        size: "large",
        href: "#",
    },
};
