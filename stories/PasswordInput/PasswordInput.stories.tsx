import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";
import { Label } from "@/components/Label/Label";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof PasswordInput> = {
  title: "Components/Basic Inputs/PasswordInput",
  component: PasswordInput,
  tags: [],
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story.passwordinput_label")}>
        <PasswordInput {...args} placeholder={t("story.passwordinput_placeholder")} />
      </Label>
    );
  },
};
