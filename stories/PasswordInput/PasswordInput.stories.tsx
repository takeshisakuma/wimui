import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";
import { Label } from "@/components/Label/Label";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/Basic Inputs/PasswordInput",
  component: PasswordInput,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <Label label={t("story_passwordinput_label")}>
        <PasswordInput {...args} placeholder={t("story_passwordinput_placeholder")} />
      </Label>
    );
  },
};
