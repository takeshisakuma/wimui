import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SignaturePad } from "../../../src/components/form/SignaturePad/SignaturePad";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Label } from "wimui";


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
      <Label label={t("story.signaturepad_default")}>
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
      <Label label={t("story.signaturepad_colors")}>
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
      <Label label={t("story.signaturepad_disabled")}>
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
      <Label label={t("story.signaturepad_large")}>
        <SignaturePad {...args} />
      </Label>
    );
  },
  args: {
    width: 600,
    height: 300,
  },
};

/**
 * T125: `SignaturePad` の根は `FieldTemplate` の `.content`（flex 縦並び・
 * `align-items: stretch`）の子なので、**親いっぱいに引き伸ばされる**。
 * `.root { display: inline-flex }`（＝内容幅に縮む意図）は flex アイテムでは
 * `flex` へ blockify されて黙って捨てられるため効かない。
 *
 * 他のストーリーは `layout: "centered"` で枠が 432px しかなく、canvas とほぼ
 * 同じ幅なので**この欠陥が永久に出ない**。広い親に置いて初めて、`Clear` が
 * canvas の右端から離れて座るのが見える。
 */
export const InWideField: Story = {
  parameters: { layout: "fullscreen" },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ padding: "var(--wim-spacing-lg)", width: "100%" }}>
        <SignaturePad {...args} label={t("story.signaturepad_wide_field")} />
      </div>
    );
  },
  args: {
    width: 400,
    height: 200,
  },
};
