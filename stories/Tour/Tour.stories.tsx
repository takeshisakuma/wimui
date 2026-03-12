import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tour } from "@/components/Tour/Tour";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Tour> = {
  title: "Components/Overlays/Tour",
  component: Tour,
};

export default meta;
type Story = StoryObj<typeof Tour>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const [open, setOpen] = useState(false);
    const steps = [
      {
        target: "#tour-step-1",
        title: t("story_tour_welcome_title"),
        description: t("story_tour_welcome_desc"),
        placement: "bottom" as const,
      },
      {
        target: "#tour-step-2",
        title: t("story_tour_feature_title"),
        description: t("story_tour_feature_desc"),
        placement: "right" as const,
      },
      {
        target: "#tour-step-3",
        title: t("story_tour_help_title"),
        description: t("story_tour_help_desc"),
        placement: "top" as const,
      },
    ];

    return (
      <div style={{ padding: "40px", height: "1000px" }}>
        <Button label={t("story_tour_start")} onClick={() => setOpen(true)} />

        <div
          style={{
            marginTop: "100px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            id="tour-step-1"
            style={{
              padding: "20px",
              background: "#eee",
              border: "1px solid #ccc",
              minWidth: "120px",
            }}
          >
            {t("story_tour_step_target", { n: 1 })}
          </div>
          <div
            id="tour-step-2"
            style={{
              padding: "20px",
              background: "#eee",
              border: "1px solid #ccc",
              minWidth: "120px",
            }}
          >
            {t("story_tour_step_target", { n: 2 })}
          </div>
        </div>

        <div
          id="tour-step-3"
          style={{
            marginTop: "400px",
            padding: "20px",
            background: "#eee",
            border: "1px solid #ccc",
            width: "150px",
          }}
        >
          {t("story_tour_step_target", { n: 3 })}
        </div>

        <Tour
          {...args}
          open={open}
          steps={steps}
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
};
