import type { Meta, StoryObj } from "@storybook/react-vite";
import { HamburgerMenu, HamburgerMenuProps } from "@/components/HamburgerMenu/HamburgerMenu";
import React, { useState, useEffect } from "react";

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
const renderWithState = (args: HamburgerMenuProps) => {
    const [isOpen, setIsOpen] = useState(args.isOpen || false);

    useEffect(() => {
        setIsOpen(args.isOpen || false);
    }, [args.isOpen]);

    const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsOpen((prev) => !prev);
        args.onClick?.(e);
    };

    return <HamburgerMenu {...args} isOpen={isOpen} onClick={toggle} />;
};

export const Default: Story = {
    args: {
        isOpen: false,
        size: "medium",
    },
    render: renderWithState,
};

export const Small: Story = {
    args: {
        size: "small",
    },
    render: renderWithState,
};

export const Large: Story = {
    args: {
        size: "large",
    },
    render: renderWithState,
};

export const Colored: Story = {
    args: {
        color: "#ff5722",
    },
    render: renderWithState,
};


