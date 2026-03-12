import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Watermark } from "@/components/Watermark/Watermark";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Watermark> = {
  title: "Components/Data Indicators/Watermark",
  component: Watermark,
  argTypes: {
    rotate: {
      control: { type: "range", min: -180, max: 180 },
    },
    opacity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Watermark>;

export const Text: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Watermark {...args} content={t("story_watermark_text")}>
        <div style={{ height: "400px", background: "#fff", padding: "20px" }}>
          <div
            style={{
              height: "200px",
              background: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "24px",
            }}
          >
            {t("story_watermark_confidential_mark")}
          </div>
        </div>
      </Watermark>
    );
  },
};

export const MultiLine: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Watermark
        {...args}
        content={[
          t("story_watermark_wimui"),
          t("story_watermark_confidential_mark"),
          t("story_watermark_team"),
        ]}
      >
        <div style={{ height: "400px" }} />
      </Watermark>
    );
  },
  args: {
    gap: [120, 120],
  },
};

export const Image: Story = {
  args: {
    image: "./wimlogo.svg",
    width: 40,
    height: 40,
    opacity: 0.1,
    children: <div style={{ height: "400px" }} />,
  },
};
