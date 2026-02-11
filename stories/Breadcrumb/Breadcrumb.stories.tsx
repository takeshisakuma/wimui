import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
    title: "Component/Navigation/Breadcrumb",
    component: Breadcrumb,
    // tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
    args: {
        items: [
            { label: "Home", href: "/" },
            { label: "Category", href: "/category" },
            { label: "Current Page" },
        ],
    },
};

export const WithIcons: Story = {
    args: {
        items: [
            { label: "Home", href: "/", iconName: "CircleIcon" },
            { label: "Category", href: "/category", iconName: "SquareIcon" },
            { label: "Current Page", iconName: "EyeIcon" },
        ],
    },
};

export const Small: Story = {
    args: {
        size: "small",
        items: [
            { label: "Home", href: "/" },
            { label: "Category", href: "/category" },
            { label: "Current Page" },
        ],
    },
};

export const Large: Story = {
    args: {
        size: "large",
        items: [
            { label: "Home", href: "/" },
            { label: "Category", href: "/category" },
            { label: "Current Page" },
        ],
    },
};

export const CustomSeparator: Story = {
    args: {
        separator: ">",
        items: [
            { label: "Home", href: "/" },
            { label: "Category", href: "/category" },
            { label: "Current Page" },
        ],
    },
};


