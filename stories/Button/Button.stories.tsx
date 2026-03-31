import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "@/components/form/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LargePrimaryButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button.label")} />;
  },
  args: {
    size: "lg",
    variant: "filled",
  },
};

export const MediumSecondaryButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button.label")} />;
  },
  args: {
    size: "md",
    variant: "outlined",
  },
};

export const SmallTertiaryButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button.label")} />;
  },
  args: {
    size: "sm",
    variant: "ghost",
  },
};

export const SmallTertiaryDestructiveWithCircleIconButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button.label")} />;
  },
  args: {
    size: "sm",
    variant: "ghost",
    intent: "destructive",
    icon: "CircleIcon",
    iconPosition: "left",
    disabled: true,
  },
};

export const DisabledButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button.label")} />;
  },
  args: {
    size: "md",
    variant: "filled",
    disabled: true,
  },
};

export const MediumPrimaryLoadingProcessingButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("processing")} />;
  },
  args: {
    size: "md",
    variant: "filled",
    loading: true,
  },
};

export const MediumSecondaryLoadingSavingButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("saving")} />;
  },
  args: {
    size: "md",
    variant: "outlined",
    loading: true,
  },
};

export const MediumPrimaryInteractiveLoadingButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [loading, setLoading] = useState(false);

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
        label={t("button.label")}
        loading={loading}
        onClick={handleClick}
      />
    );
  },
  args: {
    size: "md",
    variant: "filled",
  },
};

export const MediumSecondaryInteractiveLoadingWithIconButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [loading, setLoading] = useState(false);

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
        label={t("button.label")}
        loading={loading}
        onClick={handleClick}
        icon="CircleIcon"
        iconPosition="left"
      />
    );
  },
  args: {
    size: "md",
    variant: "outlined",
  },
};

/** children を使ったボタン（label prop の代替） */
export const WithChildren: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Button variant="filled" size="md">
        {t("story.button_click_me")}
      </Button>
    );
  },
};
