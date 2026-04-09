import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "@/components/layout/ScrollArea/ScrollArea";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof ScrollArea> = {
  title: "Components/Utilities/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    scrollAxis: {
      control: "select",
      options: ["x", "y", "both"],
    },
    maxHeight: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  args: {
    scrollAxis: "y",
    maxHeight: "10rem",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ScrollArea {...args}>
        <div style={{ padding: "var(--wim-spacing-md)" }}>
          <p>{t("story.scrollarea_custom_desc")}</p>
          <ul>
            {[...Array(10)].map((_, i) => (
              <li key={i}>{t("story.scrollarea_item", { count: i + 1 })}</li>
            ))}
          </ul>
          <p>{t("story.scrollarea_scrolling_works")}</p>
        </div>
      </ScrollArea>
    );
  },
};

export const HorizontalScroll: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ScrollArea
        {...args}
        scrollAxis="x"
        style={{ width: "100%", maxWidth: "80vw" }}
      >
        <div
          style={{
            width: "150rem",
            background: "var(--wim-color-primary)",
            padding: "var(--wim-spacing-md)",
            color: "var(--wim-color-text-on-primary)",
          }}
        >
          {t("story.scrollarea_wide_content")} {t("story.selectbox_opt4")} {t("story.scrollarea_wide_content")}{" "}
          {t("story.selectbox_opt4")} {t("story.scrollarea_wide_content")} {t("story.selectbox_opt4")}
        </div>
      </ScrollArea>
    );
  },
};

export const WithChildren: Story = {
  args: {
    scrollAxis: "y",
    maxHeight: "12rem",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ScrollArea {...args}>
        <div style={{ padding: "var(--wim-spacing-md)" }}>
          <h4 style={{ margin: "0 0 1rem 0" }}>{t("story.scrollarea_custom_title")}</h4>
          <p>{t("story.scrollarea_custom_desc")}</p>
          <ul>
            <li>{t("story.scrollarea_item", { count: 1 })}</li>
            <li>{t("story.scrollarea_item", { count: 2 })}</li>
            <li>{t("story.scrollarea_item", { count: 3 })}</li>
            <li>{t("story.scrollarea_item", { count: 4 })}</li>
            <li>{t("story.scrollarea_item", { count: 5 })}</li>
          </ul>
          <p>{t("story.scrollarea_scrolling_works")}</p>
        </div>
      </ScrollArea>
    );
  },
};

export const Both: Story = {
  args: {
    scrollAxis: "both",
    maxHeight: "20rem",
    style: { width: "100%", maxWidth: "80vw" },
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ScrollArea {...args}>
        <div
          style={{
            width: "150rem",
            height: "40rem",
            background: "var(--wim-gradient-glass)",
            padding: "var(--wim-spacing-md)",
          }}
        >
          <h4 style={{ color: "var(--wim-color-text-primary)" }}>{t("story.scrollarea_both_title")}</h4>
          <p style={{ color: "var(--wim-color-text-secondary)" }}>
            {t("story.scrollarea_both_desc")}
          </p>
          <div
            style={{
              marginTop: "var(--wim-spacing-lg)",
              display: "grid",
              gridTemplateColumns: "repeat(15, 8rem)",
              gap: "var(--wim-spacing-md)",
            }}
          >
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                style={{
                  background: "var(--wim-color-surface)",
                  padding: "var(--wim-spacing-md)",
                  borderRadius: "var(--wim-radius-md)",
                }}
              >
                {t("story.scrollarea_box", { count: i + 1 })}
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    );
  },
};
