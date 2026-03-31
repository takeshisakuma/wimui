import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from "@/components/form/ButtonGroup/ButtonGroup";
import { Button } from "@/components/form/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


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
      options: ["filled", "outlined", "ghost"],
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
        <Button size="lg" label={t("story.button_click_me")} variant="filled" />
        <Button size="lg" label={t("story.button_click_me")} variant="outlined" />
        <Button size="lg" label={t("story.button_click_me")} variant="ghost" />
      </ButtonGroup>
    );
  },
};

export const MediumGroup: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="md" label={t("story.button_click_me")} variant="filled" />
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
        <Button size="md" label={t("story.button_click_me")} variant="ghost" />
      </ButtonGroup>
    );
  },
};

export const SmallGroup: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="sm" label={t("story.button_click_me")} variant="filled" />
        <Button size="sm" label={t("story.button_click_me")} variant="outlined" />
        <Button size="sm" label={t("story.button_click_me")} variant="ghost" />
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
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
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
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
        <Button size="md" label={t("story.button_click_me")} variant="outlined" />
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
        <Button size="md" label={t("story.buttongroup_primary")} variant="filled" />
        <Button size="md" label={t("story.buttongroup_secondary")} variant="outlined" />
        <Button size="md" label={t("story.buttongroup_tertiary")} variant="ghost" />
      </ButtonGroup>
    );
  },
};
