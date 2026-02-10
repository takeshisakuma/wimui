import type { Meta, StoryObj } from "@storybook/react-vite";
import { HamburgerMenu, HamburgerMenuProps } from "./HamburgerMenu";
import React from "react";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof HamburgerMenu> = {
    title: "Component/Navigation/HamburgerMenu",
    component: HamburgerMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        isOpen: {
            control: "boolean",
            description: "State of the menu (open/closed)",
        },
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
            description: "Size of the hamburger menu",
        },
        color: {
            control: "color",
            description: "Color of the bars",
        },
        onClick: { action: "clicked" },
    },
};

export default meta;

type Story = StoryObj<typeof HamburgerMenu>;



// Define a render function that uses hooks
const RenderWithState = (args: HamburgerMenuProps) => {
    const [{ isOpen }, updateArgs] = useArgs();

    const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        updateArgs({ isOpen: !isOpen });
        args.onClick?.(e);
    };

    return <HamburgerMenu {...args} isOpen={isOpen} onClick={toggle} />;
};

export const Default: Story = {
    args: {
        isOpen: false,
        size: "medium",
    },
    render: RenderWithState,
};

export const Small: Story = {
    args: {
        size: "small",
    },
    render: RenderWithState,
};

export const Large: Story = {
    args: {
        size: "large",
    },
    render: RenderWithState,
};

export const Colored: Story = {
    args: {
        color: "#ff5722",
    },
    render: RenderWithState,
};

