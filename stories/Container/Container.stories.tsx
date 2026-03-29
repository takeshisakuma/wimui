import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "@/components/Container/Container";
import { Box } from "@/components/Box/Box";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Container> = {
  title: "Components/Layout/Container",
  component: Container,
  tags: [],
  argTypes: {
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Container {...args}>
        <Box bg="#f0f0f0" p={20} style={{ border: "1px solid #ccc" }}>
          {t("story.container_content")}
        </Box>
      </Container>
    );
  },
  args: {
    bg: "#f9f9f9",
  },
};

export const Sizes: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
          <Container key={size} size={size} bg="#f8fafc" p={10}>
            <Box
              bg="#eff6ff"
              p={10}
              style={{ textAlign: "center", border: "1px dashed #3b82f6" }}
            >
              {t("story.container_size")}: {size}
            </Box>
          </Container>
        ))}
      </div>
    );
  },
};

export const Fluid: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Container {...args} fluid>
        <Box
          bg="#eff6ff"
          p={20}
          style={{ textAlign: "center", border: "1px dashed #3b82f6" }}
        >
          {t("story.container_fluid")}
        </Box>
      </Container>
    );
  },
  args: {
    bg: "#f8fafc",
  },
};
