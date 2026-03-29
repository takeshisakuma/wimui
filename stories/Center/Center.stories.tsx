import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Center } from "@/components/Center/Center";
import { Box } from "@/components/Box/Box";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


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
          bg="#eff6ff"
          p={40}
          radius={8}
          style={{ border: "1px solid #3b82f6" }}
        >
          {t("story.center_content")}
        </Box>
      </Center>
    );
  },
  args: {
    h: 200,
    bg: "#f8fafc",
  },
};

export const Inline: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px" }}>
        Text before
        <Center inline bg="#fecaca" px={10} mx={5} radius={4}>
          {t("story.center_inline")}
        </Center>
        Text after
      </div>
    );
  },
};

export const Icons: Story = {
  render: () => (
    <Center w={40} h={40} bg="#3b82f6" color="white" radius="full">
      <Icon name="PlusIcon" />
    </Center>
  ),
};
