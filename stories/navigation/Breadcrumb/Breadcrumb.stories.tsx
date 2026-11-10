import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Breadcrumb } from "wimui";


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
    overflow: {
      control: "radio",
      options: ["wrap", "collapse"],
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

/** 1 行に入らないパス。先頭と現在のページを残し、間の階層を「…」にまとめる（器は 320px） */
export const Collapsed: Story = {
  args: { overflow: "collapse" },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      // 狭い画面では器を画面に収める（100% は、中身で幅が決まる親に対して循環する）
      <div style={{ width: "min(var(--wim-width-md), 100vw - 2rem)" }}>
        <Breadcrumb
          {...args}
          items={[
            { label: t("story.breadcrumb_home"), href: "/" },
            { label: t("story.breadcrumb_shop_women"), href: "/women" },
            { label: t("story.breadcrumb_shop_shoes"), href: "/women/shoes" },
            { label: t("story.breadcrumb_shop_running"), href: "/women/shoes/running" },
            { label: t("story.breadcrumb_shop_trail") },
          ]}
        />
      </div>
    );
  },
};
