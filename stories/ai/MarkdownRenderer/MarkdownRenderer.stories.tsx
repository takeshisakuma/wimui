import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MarkdownRenderer } from "@/components/ai/MarkdownRenderer/MarkdownRenderer";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof MarkdownRenderer> = {
  title: "Components/AI/MarkdownRenderer",
  component: MarkdownRenderer,
  parameters: {
    layout: "padded",
  },
};

export default meta;

export const Default: StoryObj<typeof MarkdownRenderer> = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <MarkdownRenderer content={t("story.markdown_renderer_content")} />
      </div>
    );
  },
};
