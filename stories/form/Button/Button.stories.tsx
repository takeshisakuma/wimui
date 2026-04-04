import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "@/components/form/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

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
    return <Button {...args}>{t("button.label")}</Button>;
  },
  args: {
    size: "lg",
    variant: "solid",
  },
};

export const MediumSecondaryButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("button.label")}</Button>;
  },
  args: {
    size: "md",
    variant: "outline",
  },
};

export const SmallTertiaryButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("button.label")}</Button>;
  },
  args: {
    size: "sm",
    variant: "ghost",
  },
};

export const SmallTertiaryDestructiveWithCircleIconButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("button.label")}</Button>;
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
    return <Button {...args}>{t("button.label")}</Button>;
  },
  args: {
    size: "md",
    variant: "solid",
    disabled: true,
  },
};

export const MediumPrimaryLoadingProcessingButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("processing")}</Button>;
  },
  args: {
    size: "md",
    variant: "solid",
    loading: true,
  },
};

export const MediumSecondaryLoadingSavingButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("saving")}</Button>;
  },
  args: {
    size: "md",
    variant: "outline",
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
        loading={loading}
        onClick={handleClick}
      >
        {t("button.label")}
      </Button>
    );
  },
  args: {
    size: "md",
    variant: "solid",
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
        loading={loading}
        onClick={handleClick}
        icon="CircleIcon"
        iconPosition="left"
      >
        {t("button.label")}
      </Button>
    );
  },
  args: {
    size: "md",
    variant: "outline",
  },
};

/** children を使ったボタン（label prop の代替） */
export const WithChildren: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Button variant="solid" size="md">
        {t("story.button_click_me")}
      </Button>
    );
  },
};
