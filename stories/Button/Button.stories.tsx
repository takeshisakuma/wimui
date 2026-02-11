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
  args: {
    onClick: fn(),
    "aria-label": undefined as unknown as string, // Will be set to false in specific stories or handled by component
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LargePrimaryButton: Story = {
  args: {
    size: "large",
    label: "button_label",
    priority: "primary",
    state: "abled",
    "aria-label": false as unknown as string,
  },
};

export const MediumSecondaryButton: Story = {
  args: {
    size: "medium",
    label: "button_label",
    priority: "secondary",
    state: "abled",
    "aria-label": false as unknown as string,
  },
};

export const SmallTertiaryButton: Story = {
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    state: "abled",
    "aria-label": false as unknown as string,
  },
};

export const SmallTertiaryDestructiveWithCircleIconButton: Story = {
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    role: "destructive",
    state: "abled",
    iconName: "CircleIcon",
    iconPosition: "left",
    "aria-label": false as unknown as string,
  },
};



export const MediumPrimaryLoadingProcessingButton: Story = {
  args: {
    size: "medium",
    priority: "primary",
    label: "processing",
    loading: true,
    "aria-label": false as unknown as string,
  },
};

export const MediumSecondaryLoadingSavingButton: Story = {
  args: {
    size: "medium",
    priority: "secondary",
    label: "saving",
    loading: true,
    "aria-label": false as unknown as string,
  },
};

export const MediumPrimaryInteractiveLoadingButton: Story = {
  render: (args) => {
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState(args.label || "button_label");

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
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
    "aria-label": false as unknown as string,
  },
};
export const MediumSecondaryInteractiveLoadingWithIconButton: Story = {
  render: (args) => {
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState(args.label || "button_label");

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    return (
      <Button
        {...args}
        loading={loading}
        label={label}
        onClick={handleClick}
      />
    );
  },
  args: {
    size: "medium",
    priority: "secondary",
    label: "button_label",
    iconName: "CircleIcon",
    iconPosition: "left",
    "aria-label": false as unknown as string,
  },
};

