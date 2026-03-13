import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from "@/components/ButtonGroup/ButtonGroup";
import { Button } from "@/components/Button/Button";
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
    priority: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
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
        <Button size="large" label={t("story_button_click_me")} priority="primary" />
        <Button size="large" label={t("story_button_click_me")} priority="secondary" />
        <Button size="large" label={t("story_button_click_me")} priority="tertiary" />
      </ButtonGroup>
    );
  },
};

export const MediumGroup: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="medium" label={t("story_button_click_me")} priority="primary" />
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
        <Button size="medium" label={t("story_button_click_me")} priority="tertiary" />
      </ButtonGroup>
    );
  },
};

export const SmallGroup: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="small" label={t("story_button_click_me")} priority="primary" />
        <Button size="small" label={t("story_button_click_me")} priority="secondary" />
        <Button size="small" label={t("story_button_click_me")} priority="tertiary" />
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
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
      </ButtonGroup>
    );
  },
};

export const JoinedGroupPrimary: Story = {
  args: {
    joined: true,
    priority: "primary",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
        <Button size="medium" label={t("story_button_click_me")} priority="secondary" />
      </ButtonGroup>
    );
  },
};

export const PriorityOverride: Story = {
  args: {
    priority: "tertiary",
    gap: "10px",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="medium" label={t("story_buttongroup_primary")} priority="primary" />
        <Button size="medium" label={t("story_buttongroup_secondary")} priority="secondary" />
        <Button size="medium" label={t("story_buttongroup_tertiary")} priority="tertiary" />
      </ButtonGroup>
    );
  },
};
