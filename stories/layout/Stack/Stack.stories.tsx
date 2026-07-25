import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Stack } from "wimui";
import { DemoCell } from "../_helpers/DemoCell";


const meta: Meta<typeof Stack> = {
  title: "Components/Layout/Stack",
  component: Stack,
  tags: [],
  argTypes: {
    direction: {
      control: "radio",
      options: ["row", "column"],
    },
    gap: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", 10, 20, 40],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stack {...args}>
        <DemoCell intent="primary">{t("story.stack_item_1", "Item 1")}</DemoCell>
        <DemoCell intent="success">{t("story.stack_item_2", "Item 2")}</DemoCell>
        <DemoCell intent="warning">{t("story.stack_item_3", "Item 3")}</DemoCell>
      </Stack>
    );
  },
  args: {
    direction: "column",
    gap: "md",
  },
};

export const Row: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stack {...args}>
        <DemoCell intent="primary">{t("story.stack_item_1", "Item 1")}</DemoCell>
        <DemoCell intent="success">{t("story.stack_item_2", "Item 2")}</DemoCell>
        <DemoCell intent="warning">{t("story.stack_item_3", "Item 3")}</DemoCell>
      </Stack>
    );
  },
  args: {
    direction: "row",
    gap: "lg",
  },
};

export const SpacingTokens: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stack gap="xl">
        <DemoCell intent="neutral" p="sm">
          {t("story.stack_gap", "Gap: ")}xl
        </DemoCell>
        <Stack direction="row" gap="xs">
          <DemoCell intent="primary" p="sm">{t("story.stack_gap", "Gap: ")}xs</DemoCell>
          <DemoCell intent="primary" p="sm">{t("story.stack_gap", "Gap: ")}xs</DemoCell>
          <DemoCell intent="primary" p="sm">{t("story.stack_gap", "Gap: ")}xs</DemoCell>
        </Stack>
        <Stack direction="row" gap="lg">
          <DemoCell intent="success" p="sm">{t("story.stack_gap", "Gap: ")}lg</DemoCell>
          <DemoCell intent="success" p="sm">{t("story.stack_gap", "Gap: ")}lg</DemoCell>
          <DemoCell intent="success" p="sm">{t("story.stack_gap", "Gap: ")}lg</DemoCell>
        </Stack>
      </Stack>
    );
  },
};
