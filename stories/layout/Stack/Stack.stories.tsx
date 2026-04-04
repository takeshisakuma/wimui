import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@/components/layout/Stack/Stack";
import { Box } from "@/components/layout/Box/Box";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


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
        <Box
          key="1"
          bg="var(--wim-color-primary-container-alpha)"
          p={20}
          radius={8}
          style={{ border: "1px solid var(--wim-color-primary)" }}
        >
          {t("story.stack_item_1", "Item 1")}
        </Box>
        <Box
          key="2"
          bg="color-mix(in srgb, var(--wim-color-positive) 15%, transparent)"
          p={20}
          radius={8}
          style={{ border: "1px solid var(--wim-color-positive)" }}
        >
          {t("story.stack_item_2", "Item 2")}
        </Box>
        <Box
          key="3"
          bg="color-mix(in srgb, var(--wim-color-caution) 15%, transparent)"
          p={20}
          radius={8}
          style={{ border: "1px solid var(--wim-color-caution)" }}
        >
          {t("story.stack_item_3", "Item 3")}
        </Box>
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
        <Box
          key="1"
          bg="var(--wim-color-primary-container-alpha)"
          p={20}
          radius={8}
          style={{ border: "1px solid var(--wim-color-primary)" }}
        >
          {t("story.stack_item_1", "Item 1")}
        </Box>
        <Box
          key="2"
          bg="color-mix(in srgb, var(--wim-color-positive) 15%, transparent)"
          p={20}
          radius={8}
          style={{ border: "1px solid var(--wim-color-positive)" }}
        >
          {t("story.stack_item_2", "Item 2")}
        </Box>
        <Box
          key="3"
          bg="color-mix(in srgb, var(--wim-color-caution) 15%, transparent)"
          p={20}
          radius={8}
          style={{ border: "1px solid var(--wim-color-caution)" }}
        >
          {t("story.stack_item_3", "Item 3")}
        </Box>
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
        <Box bg="var(--wim-color-bg-secondary)" p={10}>
          {t("story.stack_gap", "Gap: ")}xl
        </Box>
        <Stack direction="row" gap="xs">
          <Box bg="var(--wim-color-primary-container-alpha)" p={10}>
            {t("story.stack_gap", "Gap: ")}xs
          </Box>
          <Box bg="var(--wim-color-primary-container-alpha)" p={10}>
            {t("story.stack_gap", "Gap: ")}xs
          </Box>
          <Box bg="var(--wim-color-primary-container-alpha)" p={10}>
            {t("story.stack_gap", "Gap: ")}xs
          </Box>
        </Stack>
        <Stack direction="row" gap="lg">
          <Box bg="color-mix(in srgb, var(--wim-color-positive) 15%, transparent)" p={10}>
            {t("story.stack_gap", "Gap: ")}lg
          </Box>
          <Box bg="color-mix(in srgb, var(--wim-color-positive) 15%, transparent)" p={10}>
            {t("story.stack_gap", "Gap: ")}lg
          </Box>
          <Box bg="color-mix(in srgb, var(--wim-color-positive) 15%, transparent)" p={10}>
            {t("story.stack_gap", "Gap: ")}lg
          </Box>
        </Stack>
      </Stack>
    );
  },
};
