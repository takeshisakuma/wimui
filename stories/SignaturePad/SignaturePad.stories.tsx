import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SignaturePad } from "../../src/components/SignaturePad/SignaturePad";
import { useTranslation } from "react-i18next";
import { Label } from "@/components/Label/Label";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof SignaturePad> = {
  title: "Components/Advanced Inputs/SignaturePad",
  component: SignaturePad,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SignaturePad>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story_signaturepad_default")}>
        <SignaturePad {...args} />
      </Label>
    );
  },
  args: {
    width: 400,
    height: 200,
  },
};

export const CustomColors: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story_signaturepad_colors")}>
        <SignaturePad {...args} />
      </Label>
    );
  },
  args: {
    penColor: "#ff4d4f",
    penWidth: 4,
    width: 400,
    height: 200,
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story_signaturepad_disabled")}>
        <SignaturePad {...args} disabled={true} />
      </Label>
    );
  },
  args: {
    width: 400,
    height: 200,
  },
};

export const Large: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Label label={t("story_signaturepad_large")}>
        <SignaturePad {...args} />
      </Label>
    );
  },
  args: {
    width: 600,
    height: 300,
  },
};
