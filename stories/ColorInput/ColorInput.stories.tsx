import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorInput } from "@/components/ColorInput/ColorInput";
import { useTranslation } from "react-i18next";
import { Label } from "@/components/Label/Label";

const meta: Meta<typeof ColorInput> = {
  title: "Components/Pickers & Sliders/ColorInput",
  component: ColorInput,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof ColorInput>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs"]);
    return (
      <Label label={t("story_colorinput_default")}>
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
    const { t } = useTranslation(["docs"]);
    return (
      <Label label={t("story_colorinput_icon")}>
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
    const { t } = useTranslation(["docs"]);
    return (
      <Label label={t("story_colorinput_states")}>
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
            status="disabled"
            defaultValue="#6b7280"
            leftIcon="SettingsIcon"
          />
        </div>
      </Label>
    );
  },
};
