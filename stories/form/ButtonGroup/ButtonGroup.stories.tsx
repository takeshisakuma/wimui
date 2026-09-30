import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, ButtonGroup } from "wimui";


const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Buttons/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    gap: { control: "text" },
    joined: { control: "boolean" },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const LargeGroup: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="lg" variant="solid">{t("story.button_click_me")}</Button>
        <Button size="lg" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="lg" variant="ghost">{t("story.button_click_me")}</Button>
      </ButtonGroup>
    );
  },
};

export const MediumGroup: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="md" variant="solid">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="ghost">{t("story.button_click_me")}</Button>
      </ButtonGroup>
    );
  },
};

export const SmallGroup: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="sm" variant="solid">{t("story.button_click_me")}</Button>
        <Button size="sm" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="sm" variant="ghost">{t("story.button_click_me")}</Button>
      </ButtonGroup>
    );
  },
};

export const JoinedGroup: Story = {
  args: {
    joined: true,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
      </ButtonGroup>
    );
  },
};

export const JoinedGroupPrimary: Story = {
  args: {
    joined: true,
    variant: "solid",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
        <Button size="md" variant="outline">{t("story.button_click_me")}</Button>
      </ButtonGroup>
    );
  },
};

export const PriorityOverride: Story = {
  args: {
    variant: "ghost",
    gap: "10px",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ButtonGroup {...args}>
        <Button size="md" variant="solid">{t("story.buttongroup_primary")}</Button>
        <Button size="md" variant="outline">{t("story.buttongroup_secondary")}</Button>
        <Button size="md" variant="ghost">{t("story.buttongroup_tertiary")}</Button>
      </ButtonGroup>
    );
  },
};

// T280: この値は VRT が撮るストーリーのどれにも描かれていなかった（Audit / ChatUI は撮影対象外）。
export const Variants: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--wim-spacing-md)", alignItems: "flex-start" }}>
        {(["solid", "outline", "ghost"] as const).map((variant) => (
          <ButtonGroup key={variant} {...args} variant={variant}>
            <Button size="md">{t("story.button_click_me")}</Button>
            <Button size="md">{t("story.button_click_me")}</Button>
            <Button size="md">{t("story.button_click_me")}</Button>
          </ButtonGroup>
        ))}
      </div>
    );
  },
};

/**
 * 揃えの 4 値を同じ幅の行に並べる（T286）。既定の start は内容の幅で左に寄り、
 * center / end / stretch は行を丸ごと取って寄せる（stretch はボタンを均等に伸ばす）。
 */
export const Justify: Story = {
  parameters: { layout: "padded" },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--wim-spacing-lg)" }}>
        {(["start", "center", "end", "stretch"] as const).map((justify) => (
          <div key={justify} style={{ display: "flex", flexDirection: "column", gap: "var(--wim-spacing-xs)" }}>
            <code>{`justify="${justify}"`}</code>
            <ButtonGroup {...args} justify={justify}>
              <Button size="md" variant="outline">{t("action.back")}</Button>
              <Button size="md" variant="solid">{t("action.next")}</Button>
            </ButtonGroup>
          </div>
        ))}
      </div>
    );
  },
};
