import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Box, Center, Icon } from "wimui";


const meta: Meta<typeof Center> = {
  title: "Components/Layout/Center",
  component: Center,
  tags: [],
  argTypes: {
    inline: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Center>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Center {...args}>
        <Box
          bg="var(--wim-color-primary-subtle)"
          p={40}
          radius={8}
          style={{ border: "1px solid var(--wim-color-primary)" }}
        >
          {t("story.center_content")}
        </Box>
      </Center>
    );
  },
  args: {
    h: 200,
    bg: "var(--wim-color-bg-secondary)",
  },
};

export const Inline: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ border: "1px solid var(--wim-color-border)", padding: "10px" }}>
        Text before
        <Center inline bg="var(--wim-color-destructive-subtle)" px={10} mx={5} radius={4}>
          {t("story.center_inline")}
        </Center>
        Text after
      </div>
    );
  },
};

export const Icons: Story = {
  render: () => (
    <Center w={40} h={40} bg="primary" color="text-on-primary" radius="full">
      <Icon name="PlusIcon" />
    </Center>
  ),
};
