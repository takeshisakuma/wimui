import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  HamburgerMenu,
  HamburgerMenuProps,
} from "@/components/navigation/HamburgerMenu/HamburgerMenu";
import React, { useState, useEffect } from "react";

const meta: Meta<typeof HamburgerMenu> = {
  title: "Components/Navigation Elements/HamburgerMenu",
  component: HamburgerMenu,
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {
    open: {
      control: "boolean",
      description: "State of the menu (open/closed)",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
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
  const [open, setIsOpen] = useState(args.open || false);

  useEffect(() => {
    setIsOpen(args.open || false);
  }, [args.open]);

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen((prev) => !prev);
    args.onClick?.(e);
  };

  return <HamburgerMenu {...args} open={open} onClick={toggle} />;
};

export const Default: Story = {
  args: {
    open: false,
    size: "md",
  },
  render: renderWithState,
};

export const Small: Story = {
  args: {
    size: "sm",
  },
  render: renderWithState,
};

export const Large: Story = {
  args: {
    size: "lg",
  },
  render: renderWithState,
};

export const Colored: Story = {
  args: {
    color: "#ff5722",
  },
  render: renderWithState,
};
