import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Watermark } from "@/components/misc/Watermark/Watermark";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Watermark {...args} content={t("story.watermark_text")}>
        <div style={{ height: "400px", background: "var(--wim-color-surface)", padding: "20px" }}>
          <div
            style={{
              height: "200px",
              background: "var(--wim-color-surface-variant)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "24px",
            }}
          >
            {t("story.watermark_confidential_mark")}
          </div>
        </div>
      </Watermark>
    );
  },
};

export const MultiLine: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Watermark
        {...args}
        content={[
          t("story.watermark_wimui"),
          t("story.watermark_confidential_mark"),
          t("story.watermark_team"),
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
