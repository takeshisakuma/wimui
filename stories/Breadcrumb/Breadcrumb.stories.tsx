import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Navigation Elements/Breadcrumb",
  component: Breadcrumb,
  // tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Breadcrumb
        {...args}
        items={[
          { label: t("story.breadcrumb_home"), href: "/" },
          { label: t("story.breadcrumb_category"), href: "/category" },
          { label: t("story.breadcrumb_current") },
        ]}
      />
    );
  },
};

export const WithIcons: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Breadcrumb
        {...args}
        items={[
          {
            label: t("story.breadcrumb_home"),
            href: "/",
            iconName: "CircleIcon",
          },
          {
            label: t("story.breadcrumb_category"),
            href: "/category",
            iconName: "SquareIcon",
          },
          { label: t("story.breadcrumb_current"), iconName: "EyeIcon" },
        ]}
      />
    );
  },
};

export const Small: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Breadcrumb
        {...args}
        size="sm"
        items={[
          { label: t("story.breadcrumb_home"), href: "/" },
          { label: t("story.breadcrumb_category"), href: "/category" },
          { label: t("story.breadcrumb_current") },
        ]}
      />
    );
  },
};

export const Large: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Breadcrumb
        {...args}
        size="lg"
        items={[
          { label: t("story.breadcrumb_home"), href: "/" },
          { label: t("story.breadcrumb_category"), href: "/category" },
          { label: t("story.breadcrumb_current") },
        ]}
      />
    );
  },
};

export const CustomSeparator: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Breadcrumb
        {...args}
        separator=">"
        items={[
          { label: t("story.breadcrumb_home"), href: "/" },
          { label: t("story.breadcrumb_category"), href: "/category" },
          { label: t("story.breadcrumb_current") },
        ]}
      />
    );
  },
};
