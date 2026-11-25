import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Label, PasswordInput } from "wimui";


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
    // 表示の切り替えボタンを持つので、Label で囲むとボタンの名前まで入力欄の名前に入る（「Password Show password」）。
    // 見出しの文字だけを aria-labelledby で指す（T442）
    const labelId = React.useId();
    return (
      <Label label={<span id={labelId}>{t("story.passwordinput_label")}</span>}>
        <PasswordInput {...args} aria-labelledby={labelId} />
      </Label>
    );
  },
};

// T280: この値は VRT が撮るストーリーのどれにも描かれていなかった（Audit / ChatUI は撮影対象外）。
export const Ghost: Story = {
  ...Default,
  args: { ...Default.args, variant: "ghost" },
};
