import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from "@/components/form/ButtonGroup/ButtonGroup";
import { Button } from "@/components/form/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Buttons/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    gap: { control: "text" },
    joined: { control: "boolean" },
    variant: {
      control: "select",
      options: ["filled", "outline", "ghost"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const LargeGroup: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="lg" variant="filled">{t("story.button_click_me")}</Button>
        <Button size="lg" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="lg" variant="ghost">{t("story.button_click_me")}</Button>
      </ButtonGroup>
    );
  },
};

export const MediumGroup: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="md" variant="filled">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="ghost">{t("story.button_click_me")}</Button>
      </ButtonGroup>
    );
  },
};

export const SmallGroup: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="sm" variant="filled">{t("story.button_click_me")}</Button>
        <Button size="sm" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="sm" variant="ghost">{t("story.button_click_me")}</Button>
      </ButtonGroup>
    );
  },
};

export const JoinedGroup: Story = {
  args: {
    joined: true,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
      </ButtonGroup>
    );
  },
};

export const JoinedGroupPrimary: Story = {
  args: {
    joined: true,
    variant: "filled",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
      </ButtonGroup>
    );
  },
};

export const PriorityOverride: Story = {
  args: {
    variant: "ghost",
    gap: "10px",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="md" variant="filled">{t("story.buttongroup_primary")}</Button>
        <Button size="md" variant="outline">{t("story.buttongroup_secondary")}</Button>
        <Button size="md" variant="ghost">{t("story.buttongroup_tertiary")}</Button>
      </ButtonGroup>
    );
  },
};
