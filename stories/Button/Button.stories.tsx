import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "@/components/Button/Button";
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
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "large",
    priority: "primary",
  },
};

export const MediumSecondaryButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "medium",
    priority: "secondary",
  },
};

export const SmallTertiaryButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "small",
    priority: "tertiary",
  },
};

export const SmallTertiaryDestructiveWithCircleIconButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "small",
    priority: "tertiary",
    role: "destructive",
    iconName: "CircleIcon",
    iconPosition: "left",
    disabled: true,
  },
};

export const DisabledButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "medium",
    priority: "primary",
    disabled: true,
  },
};

export const MediumPrimaryLoadingProcessingButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("processing")} />;
  },
  args: {
    size: "medium",
    priority: "primary",
    loading: true,
  },
};

export const MediumSecondaryLoadingSavingButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("saving")} />;
  },
  args: {
    size: "medium",
    priority: "secondary",
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
        label={t("button_label")}
        loading={loading}
        onClick={handleClick}
      />
    );
  },
  args: {
    size: "medium",
    priority: "primary",
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
        label={t("button_label")}
        loading={loading}
        onClick={handleClick}
        iconName="CircleIcon"
        iconPosition="left"
      />
    );
  },
  args: {
    size: "medium",
    priority: "secondary",
  },
};

/** children を使ったボタン（label prop の代替） */
export const WithChildren: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Button priority="primary" size="medium">
        {t("story_button_click_me")}
      </Button>
    );
  },
};
