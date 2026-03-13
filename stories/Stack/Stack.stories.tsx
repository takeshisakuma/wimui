import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@/components/Stack/Stack";
import { Box } from "@/components/Box/Box";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


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
          bg="#eff6ff"
          p={20}
          radius={8}
          style={{ border: "1px solid #3b82f6" }}
        >
          {t("story_stack_item_1", "Item 1")}
        </Box>
        <Box
          key="2"
          bg="#f0fdf4"
          p={20}
          radius={8}
          style={{ border: "1px solid #22c55e" }}
        >
          {t("story_stack_item_2", "Item 2")}
        </Box>
        <Box
          key="3"
          bg="#fff7ed"
          p={20}
          radius={8}
          style={{ border: "1px solid #f97316" }}
        >
          {t("story_stack_item_3", "Item 3")}
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
          bg="#eff6ff"
          p={20}
          radius={8}
          style={{ border: "1px solid #3b82f6" }}
        >
          {t("story_stack_item_1", "Item 1")}
        </Box>
        <Box
          key="2"
          bg="#f0fdf4"
          p={20}
          radius={8}
          style={{ border: "1px solid #22c55e" }}
        >
          {t("story_stack_item_2", "Item 2")}
        </Box>
        <Box
          key="3"
          bg="#fff7ed"
          p={20}
          radius={8}
          style={{ border: "1px solid #f97316" }}
        >
          {t("story_stack_item_3", "Item 3")}
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
        <Box bg="#f8fafc" p={10}>
          {t("story_stack_gap", "Gap: ")}xl
        </Box>
        <Stack direction="row" gap="xs">
          <Box bg="#eff6ff" p={10}>
            {t("story_stack_gap", "Gap: ")}xs
          </Box>
          <Box bg="#eff6ff" p={10}>
            {t("story_stack_gap", "Gap: ")}xs
          </Box>
          <Box bg="#eff6ff" p={10}>
            {t("story_stack_gap", "Gap: ")}xs
          </Box>
        </Stack>
        <Stack direction="row" gap="lg">
          <Box bg="#f0fdf4" p={10}>
            {t("story_stack_gap", "Gap: ")}lg
          </Box>
          <Box bg="#f0fdf4" p={10}>
            {t("story_stack_gap", "Gap: ")}lg
          </Box>
          <Box bg="#f0fdf4" p={10}>
            {t("story_stack_gap", "Gap: ")}lg
          </Box>
        </Stack>
      </Stack>
    );
  },
};
