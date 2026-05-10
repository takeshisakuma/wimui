import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArtifactsOverlay } from "@/components/ai/ArtifactsOverlay/ArtifactsOverlay";
import { MarkdownRenderer } from "@/components/ai/MarkdownRenderer/MarkdownRenderer";
import { Button } from "@/components/form/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof ArtifactsOverlay> = {
  title: "Components/AI/ArtifactsOverlay",
  component: ArtifactsOverlay,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof ArtifactsOverlay> = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);

    return (
      <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <Button onClick={() => setOpen(true)}>{t("story.artifacts_overlay_open_btn")}</Button>
        <ArtifactsOverlay
          open={open}
          onOpenChange={setOpen}
          title={t("story.artifacts_overlay_title")}
          subtitle={t("story.artifacts_overlay_subtitle")}
          showFullscreenToggle
        >
          <MarkdownRenderer content={t("story.artifacts_overlay_content")} />
        </ArtifactsOverlay>
      </div>
    );
  },
};
