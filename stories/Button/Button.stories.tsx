import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
    state: {
      description:
        "非推奨: 代わりに標準の `disabled` prop を使用してください。",
      control: "select",
      options: ["abled", "disabled"],
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LargePrimaryButton: Story = {
  args: {
    size: "large",
    label: "button_label",
    priority: "primary",
  },
};

export const MediumSecondaryButton: Story = {
  args: {
    size: "medium",
    label: "button_label",
    priority: "secondary",
  },
};

export const SmallTertiaryButton: Story = {
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
  },
};

export const SmallTertiaryDestructiveWithCircleIconButton: Story = {
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    role: "destructive",
    iconName: "CircleIcon",
    iconPosition: "left",
  },
};

export const DisabledButton: Story = {
  args: {
    size: "medium",
    label: "button_label",
    priority: "primary",
    disabled: true,
  },
};

export const MediumPrimaryLoadingProcessingButton: Story = {
  args: {
    size: "medium",
    priority: "primary",
    label: "processing",
    loading: true,
  },
};

export const MediumSecondaryLoadingSavingButton: Story = {
  args: {
    size: "medium",
    priority: "secondary",
    label: "saving",
    loading: true,
  },
};

export const MediumPrimaryInteractiveLoadingButton: Story = {
  render: (args) => {
    const [loading, setLoading] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    return <Button {...args} loading={loading} onClick={handleClick} />;
  },
  args: {
    size: "medium",
    priority: "primary",
    label: "button_label",
  },
};

export const MediumSecondaryInteractiveLoadingWithIconButton: Story = {
  render: (args) => {
    const [loading, setLoading] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    return <Button {...args} loading={loading} onClick={handleClick} />;
  },
  args: {
    size: "medium",
    priority: "secondary",
    label: "button_label",
    iconName: "CircleIcon",
    iconPosition: "left",
  },
};

/** children を使ったボタン（label prop の代替） */
export const WithChildren: Story = {
  render: () => (
    <Button priority="primary" size="medium">
      Click me
    </Button>
  ),
};
