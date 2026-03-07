import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@/components/Textarea/Textarea";
import { Label } from "@/components/Label/Label";
import { FieldError } from "@/components/FieldError/FieldError";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Textarea> = {
  title: "Components/Basic Inputs/Textarea",
  component: Textarea,
  argTypes: {
    state: {
      control: { type: "select" },
      options: ["default", "error", "disabled"],
    },
    variant: {
      control: { type: "select" },
      options: ["outline", "ghost"],
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    fieldSizing: {
      control: { type: "select" },
      options: ["fixed", "content"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_textarea_label_inquiry")}>
        <Textarea {...args} placeholder={t("story_textarea_placeholder_forgot")} />
      </Label>
    );
  },
};

export const Ghost: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_textarea_label_feedback")}>
        <Textarea {...args} variant="ghost" placeholder={t("story_textarea_placeholder_slow")} />
      </Label>
    );
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Label label={t("story_textarea_label_details")}>
          <Textarea {...args} state="error" placeholder={t("story_textarea_placeholder_error")} />
        </Label>
        <FieldError content={t("story_textarea_error_10chars")} />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_textarea_label_remarks")}>
        <Textarea {...args} state="disabled" placeholder={t("story_textarea_placeholder_asap")} />
      </Label>
    );
  },
};

export const FullWidth: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_textarea_label_message")}>
        <Textarea {...args} fullWidth={true} placeholder={t("story_textarea_placeholder_thanks")} />
      </Label>
    );
  },
};

export const FieldSizingContent: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_textarea_label_remarks")}>
        <Textarea
          {...args}
          fieldSizing="content"
          placeholder={t("story_textarea_placeholder_urgent")}
        />
      </Label>
    );
  },
};

export const FormPattern: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          maxWidth: "500px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Label htmlFor="description" required label={t("story_textarea_label_intro")} />
          <Textarea
            id="description"
            {...args}
            placeholder={t("story_textarea_placeholder_engineer")}
            rows={3}
            fullWidth
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Label htmlFor="notes" label={t("story_textarea_label_remarks")} showOptional />
          <Textarea
            id="notes"
            {...args}
            placeholder={t("story_textarea_placeholder_phone")}
            rows={2}
            fullWidth
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Label htmlFor="motivation" required label={t("story_textarea_label_motivation")}>
            <Textarea
              id="motivation"
              {...args}
              state="error"
              defaultValue={t("story_textarea_value_none")}
              rows={3}
              fullWidth
            />
          </Label>
          <FieldError content={t("story_textarea_error_long")} />
        </div>
      </div>
    );
  },
};
