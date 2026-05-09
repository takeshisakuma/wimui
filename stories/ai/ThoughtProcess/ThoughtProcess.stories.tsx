import React from "react";
import { ThoughtProcess, ThoughtStep } from "../../../src/components/ai/ThoughtProcess/ThoughtProcess";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof ThoughtProcess> = {
  title: "Components/AI/ThoughtProcess",
  component: ThoughtProcess,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ThoughtProcess>;

export const Basic: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <ThoughtProcess title={t("story.thoughtprocess_title_basic")}>
          <ThoughtStep label={t("story.thoughtprocess_step1_label")} status="completed">
            {t("story.thoughtprocess_step1_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_step2_label")} status="completed">
            {t("story.thoughtprocess_step2_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_step3_label")} status="pending">
            {t("story.thoughtprocess_step3_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_step4_label")} status="pending" isLast>
            {t("story.thoughtprocess_step4_content")}
          </ThoughtStep>
        </ThoughtProcess>
      </div>
    );
  },
};

export const ComplexReasoning: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <ThoughtProcess title={t("story.thoughtprocess_title_complex")} defaultExpanded={true}>
          <ThoughtStep label={t("story.thoughtprocess_intent_label")} status="completed">
            {t("story.thoughtprocess_intent_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_retrieval_label")} status="completed">
            {t("story.thoughtprocess_retrieval_content")}
            <ul>
              <li>State of JS 2023</li>
              <li>React 19 release notes</li>
              <li>Vue 3.4 performance benchmarks</li>
            </ul>
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_conflict_label")} status="error">
            {t("story.thoughtprocess_conflict_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_correction_label")} status="completed">
            {t("story.thoughtprocess_correction_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_synthesis_label")} status="pending" isLast>
            {t("story.thoughtprocess_synthesis_content")}
          </ThoughtStep>
        </ThoughtProcess>
      </div>
    );
  },
};

export const Static: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <ThoughtProcess isCollapsible={false} title={t("story.thoughtprocess_title_static")}>
          <ThoughtStep status="completed">{t("story.thoughtprocess_static1")}</ThoughtStep>
          <ThoughtStep status="completed">{t("story.thoughtprocess_static2")}</ThoughtStep>
          <ThoughtStep status="completed" isLast>{t("story.thoughtprocess_static3")}</ThoughtStep>
        </ThoughtProcess>
      </div>
    );
  },
};
export const Thinking: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <ThoughtProcess title={t("story.thoughtprocess_title_thinking")} isThinking={true}>
          <ThoughtStep label={t("story.thoughtprocess_step1_label")} status="completed">
            {t("story.thoughtprocess_step1_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_step2_label")} status="pending" isLast>
            {t("story.thoughtprocess_step2_content")}
          </ThoughtStep>
        </ThoughtProcess>
      </div>
    );
  },
};

export const Streaming: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        <ThoughtProcess title={t("story.thoughtprocess_title_streaming")}>
          <ThoughtStep label={t("story.thoughtprocess_step1_label")} status="completed">
            {t("story.thoughtprocess_step1_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_step2_label")} status="pending" isStreaming={true} isLast>
            {t("story.thoughtprocess_step2_content")}
          </ThoughtStep>
        </ThoughtProcess>
      </div>
    );
  },
};
