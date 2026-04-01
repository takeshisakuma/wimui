import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@/components/form/Textarea/Textarea";
import { Label } from "@/components/typography/Label/Label";
import { FieldError } from "@/components/form/FieldError/FieldError";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Textarea> = {
  title: "Components/Basic Inputs/Textarea",
  component: Textarea,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    intent: {
      control: "select",
      options: ["default", "error"],
    },
    variant: {
      control: "select",
      options: ["outline", "ghost"],
    },
    fullWidth: {
      control: "boolean",
    },
    fieldSizing: {
      control: "select",
      options: ["fixed", "content"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.textarea_label_inquiry")}>
        <Textarea {...args} placeholder={t("story.textarea_placeholder_forgot")} />
      </Label>
    );
  },
};

export const Ghost: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.textarea_label_feedback")}>
        <Textarea {...args} placeholder={t("story.textarea_placeholder_slow")} />
      </Label>
    );
  },
  args: {
    variant: "ghost",
  },
};

export const ErrorStatus: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Label label={t("story.textarea_label_details")}>
          <Textarea {...args} placeholder={t("story.textarea_placeholder_error")} />
        </Label>
        <FieldError content={t("story.textarea_error_10chars")} />
      </div>
    );
  },
  args: {
    intent: "error",
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.textarea_label_remarks")}>
        <Textarea {...args} placeholder={t("story.textarea_placeholder_asap")} />
      </Label>
    );
  },
  args: {
    disabled: true,
  },
};

export const FullWidth: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.textarea_label_message")}>
        <Textarea {...args} placeholder={t("story.textarea_placeholder_thanks")} />
      </Label>
    );
  },
  args: {
    fullWidth: true,
  },
};

export const FieldSizingContent: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.textarea_label_remarks")}>
        <Textarea
          {...args}
          placeholder={t("story.textarea_placeholder_urgent")}
        />
      </Label>
    );
  },
  args: {
    fieldSizing: "content",
  },
};

export const FormPattern: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
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
          <Label htmlFor="description" required label={t("story.textarea_label_intro")} />
          <Textarea
            id="description"
            {...args}
            placeholder={t("story.textarea_placeholder_engineer")}
            rows={3}
            fullWidth
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Label htmlFor="notes" label={t("story.textarea_label_remarks")} showOptional />
          <Textarea
            id="notes"
            {...args}
            placeholder={t("story.textarea_placeholder_phone")}
            rows={2}
            fullWidth
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Label htmlFor="motivation" required label={t("story.textarea_label_motivation")}>
            <Textarea
              id="motivation"
              {...args}
              intent="error"
              defaultValue={t("story.textarea_value_none")}
              rows={3}
              fullWidth
            />
          </Label>
          <FieldError content={t("story.textarea_error_long")} />
        </div>
      </div>
    );
  },
};
