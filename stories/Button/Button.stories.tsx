import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Component/Buttons & Actions/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LargePrimaryButton: Story = {
  args: {
    size: "large",
    label: "button_label",
    priority: "primary",
    state: "abled",
  },
};

export const MeduimSecondaryButton: Story = {
  args: {
    size: "medium",
    label: "button_label",
    priority: "secondary",
    state: "abled",
  },
};

export const SmallSecondaryButton: Story = {
  args: {
    size: "small",
    label: "button_label",
    priority: "secondary",
    state: "abled",
  },
};

export const SmallTertiaryButtonWithCircleIcon: Story = {
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    role: "destructive",
    state: "abled",
    iconName: "CircleIcon",
    iconPosition: "left",
  },
};

export const LargePrimaryButtonWithSquareIconNoLabel: Story = {
  args: {
    size: "large",
    priority: "primary",
    role: "default",
    state: "abled",
    iconName: "SquareIcon",
    "aria-label": "Square Icon Button",
  },
};

export const LoadingProcessing: Story = {
  args: {
    size: "medium",
    priority: "primary",
    label: "processing",
    loading: true,
  },
};

export const LoadingSaving: Story = {
  args: {
    size: "medium",
    priority: "secondary",
    label: "saving",
    loading: true,
  },
};

export const InteractiveLoading: Story = {
  render: (args) => {
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState(args.label || "button_label");

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setLabel("saving");
      setTimeout(() => {
        setLoading(false);
        setLabel(args.label || "button_label");
      }, 2000);
    };

    return (
      <Button {...args} loading={loading} label={label} onClick={handleClick} />
    );
  },
  args: {
    size: "medium",
    priority: "primary",
    label: "button_label",
  },
};
