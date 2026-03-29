import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollProgress } from "@/components/ScrollProgress/ScrollProgress";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof ScrollProgress> = {
  title: "Components/Utilities/ScrollProgress",
  component: ScrollProgress,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ScrollProgress>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ height: "200vh", padding: "20px" }}>
        <ScrollProgress {...args} />
        <h1>{t("story.scrollprogress_h1")}</h1>
        <div style={{ marginTop: "100vh" }}>
          <p>{t("story.scrollprogress_middle")}</p>
        </div>
        <div style={{ marginTop: "100vh" }}>
          <p>{t("story.scrollprogress_end")}</p>
        </div>
      </div>
    );
  },
};

export const CustomContainer: Story = {
  render: (args) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ padding: "20px" }}>
        <div
          ref={containerRef}
          tabIndex={0}
          style={{
            height: "300px",
            overflowY: "auto",
            border: "1px solid var(--wim-color-border)",
            position: "relative",
          }}
        >
          <ScrollProgress
            {...args}
            target={containerRef}
            style={{ position: "sticky", top: 0 }}
          />
          <div style={{ height: "1000px", padding: "10px" }}>
            <p>{t("story.scrollprogress_inside")}</p>
          </div>
        </div>
      </div>
    );
  },
};
