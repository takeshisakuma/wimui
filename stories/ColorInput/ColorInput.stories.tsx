import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorInput } from "@/components/ColorInput/ColorInput";
import { useTranslation } from "react-i18next";
import { Label } from "@/components/Label/Label";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof ColorInput> = {
  title: "Components/Pickers & Sliders/ColorInput",
  component: ColorInput,
  tags: [],
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ColorInput>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.colorinput_default")}>
        <ColorInput {...args} />
      </Label>
    );
  },
  args: {
    defaultValue: "#0052cc",
  },
};

export const WithIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.colorinput_icon")}>
        <ColorInput {...args} />
      </Label>
    );
  },
  args: {
    defaultValue: "#3b82f6",
    leftIcon: "ImageIcon",
  },
};

export const CustomStates: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.colorinput_states")}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <ColorInput
            {...args}
            status="default"
            defaultValue="#10b981"
            leftIcon="CheckCircleIcon"
          />
          <ColorInput
            {...args}
            status="error"
            defaultValue="#ef4444"
            leftIcon="AlertCircleIcon"
          />
          <ColorInput
            {...args}
            disabled
            defaultValue="#6b7280"
            leftIcon="SettingsIcon"
          />
        </div>
      </Label>
    );
  },
};
